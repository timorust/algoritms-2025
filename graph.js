const graph = {
  a: ["b", "c"],
  b: ["e"],
  c: ["d", "f"],
  d: ["e"],
  e: ["g"],
  f: ["e"],
  g: [],
};

function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift();

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return visited;
}

console.log(bfs(graph, "a"));
