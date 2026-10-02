function generateParenthesis(n: number): string[] {
    const result: string[] = [];

    function backtrack(currentString: string, openCount: number, closeCount: number): void {
        // Base case: when the string reaches the maximum length of 2 * n
        if (currentString.length === 2 * n) {
            result.push(currentString);
            return;
        }

        // We can always add an open parenthesis if we haven't used all 'n' of them
        if (openCount < n) {
            backtrack(currentString + '(', openCount + 1, closeCount);
        }

        // We can only add a close parenthesis if it has a matching open one
        if (closeCount < openCount) {
            backtrack(currentString + ')', openCount, closeCount + 1);
        }
    }

    backtrack("", 0, 0);
    return result;
}