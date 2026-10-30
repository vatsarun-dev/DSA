function shortestPath(n: number, edges: number[][], labels: string, k: number): number {
  const K = k + 1;
  const m = edges.length;

  // CSR adjacency
  const head = new Int32Array(n + 1);
  for (let i = 0; i < m; i++) head[edges[i][0] + 1]++;
  for (let i = 0; i < n; i++) head[i + 1] += head[i];
  const fill = head.slice(0, n);
  const to = new Int32Array(m);
  const wt = new Int32Array(m);
  for (let i = 0; i < m; i++) {
    const p = fill[edges[i][0]]++;
    to[p] = edges[i][1];
    wt[p] = edges[i][2];
  }

  const lab = new Uint8Array(n);
  for (let i = 0; i < n; i++) lab[i] = labels.charCodeAt(i);

  // state = node * K + run  (run in 1..k)
  const dist = new Float64Array(n * K).fill(Infinity);
  const minRun = new Int32Array(n).fill(K); // smallest run already settled per node

  // binary min-heap on typed arrays (lazy deletion)
  const cap = m * k + 2;
  const hk = new Float64Array(cap);
  const hs = new Int32Array(cap);
  let size = 0;

  const push = (d: number, s: number): void => {
    let i = size++;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (hk[p] <= d) break;
      hk[i] = hk[p];
      hs[i] = hs[p];
      i = p;
    }
    hk[i] = d;
    hs[i] = s;
  };

  const pop = (): void => {
    const d = hk[--size];
    const s = hs[size];
    let i = 0;
    for (;;) {
      let c = 2 * i + 1;
      if (c >= size) break;
      if (c + 1 < size && hk[c + 1] < hk[c]) c++;
      if (hk[c] >= d) break;
      hk[i] = hk[c];
      hs[i] = hs[c];
      i = c;
    }
    hk[i] = d;
    hs[i] = s;
  };

  dist[1] = 0; // node 0, run length 1
  push(0, 1);

  while (size > 0) {
    const d = hk[0];
    const s = hs[0];
    pop();
    if (d > dist[s]) continue;

    const u = (s / K) | 0;
    const r = s - u * K;
    if (u === n - 1) return d; // first time the target is popped is optimal

    // dominated: an already-settled state at u has run <= r and dist <= d
    if (r >= minRun[u]) continue;
    minRun[u] = r;

    const lu = lab[u];
    for (let e = head[u]; e < head[u + 1]; e++) {
      const v = to[e];
      const nr = lab[v] === lu ? r + 1 : 1;
      if (nr > k) continue;
      const nd = d + wt[e];
      const ns = v * K + nr;
      if (nd < dist[ns]) {
        dist[ns] = nd;
        push(nd, ns);
      }
    }
  }
  return -1;
}