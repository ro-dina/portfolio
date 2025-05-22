// js/world-map.js
document.addEventListener("DOMContentLoaded", function () {
  const countryLinks = {
    DEU: "map/germany_map.html",
    FIN: "map/finland_map.html"
  };

  const data = [{
    type: "choropleth",
    locations: ["DEU"],
    z: [1],
    text: ["Germany"],
    colorscale: "Reds",
    showscale: false,
    hoverinfo: "text",
    marker: { line: { color: "white", width: 1 } }
  },{
    type: "choropleth",
    locations: ["FIN"],
    z: [1],
    text: ["Finland"],
    colorscale: false,
    hoverinfo: "text",
    marker: {line: { color: "white", width: 1 } }
  }];

  const layout = {
    geo: {
      projection: { type: "natural earth" },
      showcoastlines: true,
      showframe: false
    },
    margin: { t: 0, b: 0 }
  };

  Plotly.newPlot("world-map", data, layout);

  document.getElementById("world-map").on("plotly_click", function (data) {
    const iso = data.points[0].location;
    if (countryLinks[iso]) {
      window.location.href = countryLinks[iso];
    }
  });
});
