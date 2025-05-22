document.addEventListener("DOMContentLoaded", function () {
  const cities = [
    { name: "ベルリン", lat: 52.52, lon: 13.405, url: "../travel/Germany/berlin.html" },
    { name: "ミュンヘン", lat: 48.1351, lon: 11.5820, url: "../travel/Germany/munich.html"}
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
      center: { lat: 51.0, lon: 10.0 },
      projection: { type: "natural earth" },
      lataxis: { range: [47, 56] },
      lonaxis: { range: [5, 16] }
    },
    margin: { t: 0, b: 0 }
  };

  Plotly.newPlot("germany-map", data, layout);

  document.getElementById("germany-map").on("plotly_click", function (data) {
    const i = data.points[0].pointIndex;
    window.location.href = cities[i].url;
  });
});
