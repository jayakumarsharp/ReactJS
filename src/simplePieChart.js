import * as React from "react";
import * as d3 from "d3";

const data = [25, 25, 25, 25];

export const SimplePieChart = () => {
  const height = 400;
  const width = 400;

  let pie = d3.pie()(data);

  return (
    <svg height={height} width={width}>
      <g transform={`translate(${width / 2},${height / 2})`}>
        <Slice pie={pie} />
      </g>
    </svg>
  );
};

const Slice = props => {
  let { pie } = props;

  let arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(100);

  let interpolate = d3.interpolateRgb("#eaaf79", "#bc3358");

  return pie.map((slice, index) => {
    const stylesdot = {
      fill: "steelblue",
      stroke: "steelblue",
      "stroke-width": "10.5px",
      height: "25px",
      width: "25px",
      "background-color": "#bbb",
      "border-radius": "50%",
      display: "inline-block"
    };
    let sliceColor = interpolate(index / (pie.length - 1));
    let sliceColor1 = ["red", "green", "red", "green"];
    let position = arc.centroid(slice);
    return (
      <g>
        <path d={arc(slice)} fill={sliceColor1[index]} />
        
        <text
          transform={`translate(${position[0]}, ${position[1]})`}
          dy=".35em"
          style={stylesdot}
        >
          .
        </text>
      </g>
    );
  });
};
