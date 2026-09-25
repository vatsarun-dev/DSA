function braceExpansionII(expression: string): string[] {

    let index = 0;

    // Union of two sets
    function union(a: Set<string>, b: Set<string>): Set<string> {
        let result = new Set<string>(a);

        for (let word of b) {
            result.add(word);
        }

        return result;
    }

    // Cartesian product / concatenation
    function concat(a: Set<string>, b: Set<string>): Set<string> {
        let result = new Set<string>();

        for (let x of a) {
            for (let y of b) {
                result.add(x + y);
            }
        }

        return result;
    }

    function parse(): Set<string> {

        let result = new Set<string>();
        let current = new Set<string>([""]);

        while (index < expression.length && expression[index] !== '}') {

            if (expression[index] === ',') {
                // Finish current expression
                result = union(result, current);

                // Start a new expression after comma
                current = new Set<string>([""]);
                index++;
            }

            else if (expression[index] === '{') {
                index++;

                // Recursively parse inside {}
                let inside = parse();

                index++; // skip '}'

                // Concatenate current with inside
                current = concat(current, inside);
            }

            else {
                // Normal lowercase character
                let charSet = new Set<string>([expression[index]]);

                current = concat(current, charSet);

                index++;
            }
        }

        // Add last expression
        result = union(result, current);

        return result;
    }

    return Array.from(parse()).sort();
}