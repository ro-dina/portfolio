document.addEventListener("DOMContentLoaded", function () {
  const cities = [
    { name: "ヘルシンキ", lat: 60.1695, lon: 24.9354, url: "../travel/Finland/helsinki.html" }
  ];

  const data = [{
    type: "scattergeo",
    mode: "markers+text",
    lat: cities.map(c => c.lat),
    lon: cities.map(c => c.lon),
    text: cities.map(c => c.name),
    marker: { size: 10, color: "blue" },
    textposition: "top center",
    hoverinfo: "text"
  }];

  const layout = {
    geo: {
      scope: "europe",
      center: { lat: 63.0, lon: 26.0 },
      projection: { type: "natural earth" },
      lataxis: { range: [58, 71] },
      lonaxis: { range: [20, 32] }
    },
    margin: { t: 0, b: 0 }
  };

  Plotly.newPlot("finland-map", data, layout);

  document.getElementById("finland-map").on("plotly_click", function (data) {
    const i = data.points[0].pointIndex;
    window.location.href = cities[i].url;
  });
});
