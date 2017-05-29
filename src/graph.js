// Create a new directed graph
var g = new dagre.graphlib.Graph({
  multigraph: true,
  compound: true
});

g.setGraph({
  rankdir: 'BT' // left to right
});

// Default to assigning a new object as a label for each new edge.
g.setDefaultEdgeLabel(function() { return {}; });

// Add nodes to the graph. The first argument is the node id. The second is
// metadata about the node. In this case we're going to add labels to each of
// our nodes.
const monospaceLetterWidth = 10;
nodes.forEach(n => {
  n.width = 30 + n.name.length * monospaceLetterWidth;
  n.height = 30;
  g.setNode(n.name, n);
});

// Add edges to the graph.
arrows.forEach(a => {
  g.setEdge(a.from, a.to, a);
});
// g.setEdge("kspacey",   "swilliams");
// g.setEdge("swilliams", "kbacon");
// g.setEdge("bpitt",     "kbacon");
// g.setEdge("hford",     "lwilson");
// g.setEdge("lwilson",   "kbacon");

dagre.layout(g);

console.log('nodes',nodes);
