// When given two crystal balls that will break if dropped from a high enough distance,
//  determine the exact spot in which it will break in the most optimized way.
export default function two_crystal_balls(breaks: boolean[]): number {
    // strategy: we will start jumping in sqrt(n) intervals untill it breaks,
    // after that we go from the last checkpoint untill it breaks again

    const interval = Math.floor(Math.sqrt(breaks.length));
    let i = interval;
    for (; i < breaks.length; i++) {
        if (breaks[i]) break;
    }

    // first ball broke
    i -= interval;
    for (; i < breaks.length; i++) {
        if (breaks[i]) return i;
    }

    return -1;
}
