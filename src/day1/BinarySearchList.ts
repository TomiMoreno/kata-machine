export default function bs_list(haystack: number[], needle: number): boolean {
    let high = haystack.length,
        low = 0;

    while (low < high) {
        const midIndex = Math.floor(low + (high - low) / 2);
        const value = haystack[midIndex];
        if (value === needle) return true;
        if (value < needle) low = midIndex + 1;
        else high = midIndex;
    }

    return false;
}
