// https://leetcode-cn.com/problems/bus-routes/
// TODO

var numBusesToDestination = function (routes, source, target) {
  if (source === target) {
    return 0;
  }

  const n = routes.length;
  const edge = new Array(n).fill(0).map(() => new Array(n).fill(0));
  const rec = new Map();
  for (let i = 0; i < n; i++) {
    for (const site of routes[i]) {
      const list = (rec.get(site) || []);
      for (const j of list) {
        edge[i][j] = edge[j][i] = true;
      }
      list.push(i);
      rec.set(site, list);
    }
  }

  const dis = new Array(n).fill(-1);
  const que = [];
  for (const bus of (rec.get(source) || [])) {
    dis[bus] = 1;
    que.push(bus);
  }
  while (que.length) {
    const x = que.shift();
    for (let y = 0; y < n; y++) {
      if (edge[x][y] && dis[y] === -1) {
        dis[y] = dis[x] + 1;
        que.push(y);
      }
    }
  }

  let ret = Number.MAX_VALUE;
  for (const bus of (rec.get(target) || [])) {
    if (dis[bus] !== -1) {
      ret = Math.min(ret, dis[bus]);
    }
  }
  return ret === Number.MAX_VALUE ? -1 : ret;
};


console.log(
  numBusesToDestination([[1, 2, 7], [3, 6, 7]], 1, 6),
  numBusesToDestination([[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]], 15, 12)
);