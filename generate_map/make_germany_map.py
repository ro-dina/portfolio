import plotly.graph_objects as go

# ベルリンの座標
cities = [{
    "name": "ベルリン",
    "lat": 52.52,
    "lon": 13.405
}]

# 地図を作成
fig = go.Figure(data=go.Scattergeo(
    lon=[c["lon"] for c in cities],
    lat=[c["lat"] for c in cities],
    text=[c["name"] for c in cities],
    mode="markers+text",
    marker=dict(size=10, color="blue"),
    textposition="top center"
))

fig.update_layout(
    geo=dict(
        scope="europe",
        center=dict(lat=51.0, lon=10.0),
        projection_type="natural earth",
        lataxis=dict(range=[47, 56]),
        lonaxis=dict(range=[5, 16])
    ),
    margin=dict(t=0, b=0)
)

fig.write_html("germany_map.html", include_plotlyjs='cdn', full_html=True)
