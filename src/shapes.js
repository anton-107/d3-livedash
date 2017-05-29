const nodeWidth = 30;
function simpleRectangle(selection, className) {
  // drawing a rectangle with path:
  // move -> horizontal line -> vertical line -> horizontal line -> vertical line
  selection.append('path')
    .attr('class', className)
    .attr('d', d => `M ${d.x - d.width / 2} ${d.y - d.height / 2} H ${d.x + d.width / 2} V ${d.y + d.height / 2} H ${d.x - d.width / 2} V ${d.y - d.height / 2}`)
    // .attr('d', d => `M 0 0 H ${nodeWidth} V ${d.height} H 0 V 0 `)
    // .attr('transform', d => `translate(${d.x} ${d.y})`)
    .attr('fill', d => d.color || 'transparent')
    .attr('stroke', '#939393')
    .attr('stroke-width', 2);
}

function arrowLine(selection, nodes) {
  var delta = 0; // where is it coming from?
  var markerSize = 0;

  selection.append('path')
    .attr('d', d => {
      var path = d.points.map((p, i) => {
        let r;
        if (i == 0) {
          // const from = nodes.find(n => n.name === d.from);
          // r = `M ${from.x + delta}  ${from.y}`;
          r = `M ${p.x + delta} ${p.y + delta + markerSize}`;
        } else if (i === d.points.length - 1) {
          // const to = nodes.find(n => n.name === d.to);
          // r = `L ${to.x + delta} ${to.y + delta + markerSize}`;
          r = `L ${p.x + delta} ${p.y + delta + markerSize}`;
        } else {
          r = `L ${p.x + delta} ${p.y + delta}`;
        }
        return r;
      });

      return path.join(' ');
      // if (nodes[d.from].y > nodes[d.to].y) {
      //   return `M ${nodes[d.from].x * cellSize + cellSize / 2} ${nodes[d.from].y * cellSize + cellSize / 2} H ${nodes[d.to].x * cellSize + cellSize / 2} V ${nodes[d.to].y * cellSize + cellSize + arrowMarkerHeight}`
      // } else {
      //   return `M ${nodes[d.from].x * cellSize + cellSize / 2} ${nodes[d.from].y * cellSize + cellSize / 2} H ${nodes[d.to].x * cellSize + cellSize / 2} V ${nodes[d.to].y * cellSize - arrowMarkerHeight}`
      // }
    })
    .attr('marker-end', "url(#arrow)")
    .attr('fill', 'transparent')
    .attr('stroke', d => d.color || '#939393')
}
