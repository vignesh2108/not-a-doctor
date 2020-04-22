import React, { Component } from "react";
import Plot from "react-plotly.js";
import { Chart } from "react-google-charts";

class TopicModelTreemap extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <Chart
          width={"500px"}
          height={"300px"}
          chartType="TreeMap"
          loader={<div>Loading Chart</div>}
          data={[
            [
              "Location",
              "Parent",
              "Market trade volume (size)",
              "Market increase/decrease (color)",
            ],
            ["Global", null, 0, 0],
            ["America", "Global", 0, 0],
            ["Europe", "Global", 0, 0],
            ["Asia", "Global", 0, 0],
            ["Australia", "Global", 0, 0],
            ["Africa", "Global", 0, 0],
            ["Brazil", "America", 11, 10],
            ["USA", "America", 52, 31],
            ["Mexico", "America", 24, 12],
            ["Canada", "America", 16, -23],
            ["France", "Europe", 42, -11],
            ["Germany", "Europe", 31, -2],
            ["Sweden", "Europe", 22, -13],
            ["Italy", "Europe", 17, 4],
            ["UK", "Europe", 21, -5],
            ["China", "Asia", 36, 4],
            ["Japan", "Asia", 20, -12],
            ["India", "Asia", 40, 63],
            ["Laos", "Asia", 4, 34],
            ["Mongolia", "Asia", 1, -5],
            ["Iran", "Asia", 18, 13],
            ["Pakistan", "Asia", 11, -52],
            ["Egypt", "Africa", 21, 0],
            ["S. Africa", "Africa", 30, 43],
            ["Sudan", "Africa", 12, 2],
            ["Congo", "Africa", 10, 12],
            ["Zaire", "Africa", 8, 10],
          ]}
          options={{
            minColor: "#f00",
            midColor: "#ddd",
            maxColor: "#0d0",
            headerHeight: 15,
            fontColor: "black",
            showScale: true,
          }}
          rootProps={{ "data-testid": "1" }}

          //   width={"500px"}
          //   height={"300px"}
          //   chartType="TreeMap"
          //   loader={<div>Loading Chart</div>}
          //   data={[
          //     ["Topic", "Parent", "Weight(size)"],
          //     ["Dummy", null, 0][("A", "Dummy", 1)],
          //     ["B", "Dummy", 5],
          //     ["C", "Dummy", 6],
          //     ["D", "Dummy", 2],
          //     ["E", "Dummy", 4],
          //     ["F", "Dummy", 7],
          //     ["G", "Dummy", 10],
          //     ["H", "Dummy", 21],
          //     ["I", "Dummy", 12],
          //     ["J", "Dummy", 3],
          //     ["K", "Dummy", 11],
          //     ["L", "Dummy", 9],
          //   ]}
          //   options={{
          //     minColor: "#f00",
          //     midColor: "#ddd",
          //     maxColor: "#0d0",
          //     headerHeight: 15,
          //     fontColor: "black",
          //     showScale: true,
          //   }}
          //   rootProps={{ "data-testid": "1" }}
        />
      </div>
    );
  }
  dataLoad() {}
}

export default TopicModelTreemap;
