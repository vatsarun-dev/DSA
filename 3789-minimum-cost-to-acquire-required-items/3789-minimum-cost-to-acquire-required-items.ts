
function minimumCost(
    cost1: number,
    cost2: number,
    costBoth: number,
    need1: number,
    need2: number
): number {
    const minNeed = Math.min(need1, need2);
    const maxNeed = Math.max(need1, need2);

    // Case 1: Buy only individual items
    const costA = need1 * cost1 + need2 * cost2;

    // Case 2: Buy only combined items
    const costB = maxNeed * costBoth;

    // Case 3: Buy combined items for common needs
    // and individual items for remaining needs
    const costC =
        minNeed * costBoth +
        (need1 - minNeed) * cost1 +
        (need2 - minNeed) * cost2;

    return Math.min(costA, costB, costC);
}
