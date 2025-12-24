function shtw(graph, startVertex) {
  const distances = {};
  const visited = new Set();

  for (const vertex in graph) {
    distances[vertex] = Infinity;
  }

  distances[startVertex] = 0;

  while (visited.size < Object.keys(graph).length) {
    let closestVertex = null;
    let smallesDistance = Infinity;

    for (const vertex in distances) {
      if (!visited.has(vertex) && distances[vertex] < smallesDistance) {
        smallesDistance = distances[vertex];
        closestVertex = vertex;
      }
    }

    if (closestVertex === null) break;
    visited.add(closestVertex);

    for (const neighbor in graph[closestVertex]) {
      const weight = graph[closestVertex][neighbor];
      const newWeight = distances[closestVertex] + weight;

      if (newWeight < distances[neighbor]) {
        distances[neighbor] = newWeight;
      }
    }
  }

  return distances;
}

const graph = {
  a: { b: 3, c: 1 },
  b: { e: 6 },
  c: { d: 2, f: 9 },
  d: { e: 3 },
  e: { g: 4 },
  f: { e: 12 },
  g: {},
};

console.log(shtw(graph, "c"));
