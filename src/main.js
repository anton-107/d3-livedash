var cellSize = 50;
var arrowMarkerHeight = 9;

function draw(canvas) {
  console.log('draw', arrows);

  canvas.selectAll('path.node')
    .data(nodes)
    .enter()
    .call(simpleRectangle, 'node')
    .exit();

  canvas.selectAll('path.arrow')
    .data(arrows)
    .enter()
    .call(arrowLine, nodes)
    .exit();

  canvas.selectAll('text')
    .data(nodes)
    .enter()
    .append('text')
    .text(d => d.name)
    .attr('x', d => d.x - d.width / 2 + 10)
    .attr('y', d => d.y + 5)
    .attr('fill', 'black')
    .attr('stroke', 'none')
  //    .attr('transform', 'rotate(45)')
  //    .attr('transform', 'matrix(0.707 0.409 -0.707 0.409 100.51 -14.78)');

}

draw(d3.select('svg#main1 g'));
draw(d3.select('svg#main2 g'));
