// The goal is to go from the start to the end of a maze and return the path walked using recursion
// The maze is a square
const directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
];

function walk(
    maze: string[],
    wall: string,
    currentPoint: Point,
    end: Point,
    seen: Boolean[][],
    path: Point[],
): Boolean {
    const { x, y } = currentPoint;
    if (x < 0 || x > maze[0]?.length) return false;
    if (y < 0 || y > maze?.length) return false;
    const currentValue = maze[y][x];
    if (currentValue == wall) return false;
    if (x === end.x && y === end.y) {
        path.push(end);
        return true;
    }
    if (seen[y][x]) return false;

    seen[y][x] = true;
    path.push(currentPoint);

    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        const newCurrent = {
            x: x + direction[0],
            y: y + direction[1],
        };

        if (walk(maze, wall, newCurrent, end, seen, path)) {
            return true;
        }
    }

    path.pop();
    return false;
}
export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: Boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[i].length).fill(false));
    }
    walk(maze, wall, start, end, seen, path);

    return path;
}
