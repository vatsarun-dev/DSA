
function palindromePath(
    n: number,
    edges: number[][],
    s: string,
    queries: string[]
): boolean[] {
    const adj: number[][] = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const LOG = Math.ceil(Math.log2(n)) + 1;
    const parent = new Int32Array(n);
    const depth = new Int32Array(n);
    const tin = new Int32Array(n);
    const tout = new Int32Array(n);
    const up: Int32Array[] = Array.from(
        { length: LOG },
        () => new Int32Array(n)
    );

    // Iterative DFS: Euler entry/exit times and ancestors.
    let timer = 0;
    const stack: [number, number, boolean][] = [[0, 0, false]];

    while (stack.length > 0) {
        const [u, p, exit] = stack.pop()!;

        if (exit) {
            tout[u] = timer - 1;
            continue;
        }

        parent[u] = p;
        up[0][u] = p;
        tin[u] = timer++;

        stack.push([u, p, true]);

        for (let i = adj[u].length - 1; i >= 0; i--) {
            const v = adj[u][i];
            if (v === p) continue;

            parent[v] = u;
            depth[v] = depth[u] + 1;
            stack.push([v, u, false]);
        }
    }

    for (let k = 1; k < LOG; k++) {
        for (let u = 0; u < n; u++) {
            up[k][u] = up[k - 1][up[k - 1][u]];
        }
    }

    function isAncestor(u: number, v: number): boolean {
        return tin[u] <= tin[v] && tout[v] <= tout[u];
    }

    function lca(a: number, b: number): number {
        if (isAncestor(a, b)) return a;
        if (isAncestor(b, a)) return b;

        for (let k = LOG - 1; k >= 0; k--) {
            if (!isAncestor(up[k][a], b)) {
                a = up[k][a];
            }
        }

        return parent[a];
    }

    // Fenwick tree over Euler order, using XOR.
    const bit = new Int32Array(n + 2);

    function add(index: number, mask: number): void {
        for (let i = index + 1; i <= n; i += i & -i) {
            bit[i] ^= mask;
        }
    }

    function prefixXor(index: number): number {
        let result = 0;

        for (let i = index + 1; i > 0; i -= i & -i) {
            result ^= bit[i];
        }

        return result;
    }

    // A node's character affects every root-prefix in its subtree.
    function updateSubtree(
        u: number,
        mask: number
    ): void {
        add(tin[u], mask);

        if (tout[u] + 1 < n) {
            add(tout[u] + 1, mask);
        }
    }

    function charMask(c: string): number {
        return 1 << (c.charCodeAt(0) - 97);
    }

    const chars = s.split("");
    const prefix = new Int32Array(n);

    // Compute initial root-to-node masks.
    const dfsStack = [0];
    const visited = new Uint8Array(n);
    visited[0] = 1;
    prefix[0] = charMask(chars[0]);

    while (dfsStack.length > 0) {
        const u = dfsStack.pop()!;

        for (const v of adj[u]) {
            if (visited[v]) continue;

            visited[v] = 1;
            prefix[v] = prefix[u] ^ charMask(chars[v]);
            dfsStack.push(v);
        }
    }

    // Initialize the difference Fenwick tree.
    for (let u = 0; u < n; u++) {
        updateSubtree(u, charMask(chars[u]));
    }

    const answer: boolean[] = [];

    for (const query of queries) {
        const parts = query.split(" ");

        if (parts[0] === "update") {
            const u = Number(parts[1]);
            const c = parts[2];

            const delta = charMask(chars[u]) ^ charMask(c);

            if (delta !== 0) {
                updateSubtree(u, delta);
                chars[u] = c;
            }
        } else {
            const u = Number(parts[1]);
            const v = Number(parts[2]);
            const ancestor = lca(u, v);

            const mask =
                prefixXor(tin[u]) ^
                prefixXor(tin[v]) ^
                charMask(chars[ancestor]);

            // A palindrome permutation allows at most one odd frequency.
            answer.push((mask & (mask - 1)) === 0);
        }
    }

    return answer;
}
