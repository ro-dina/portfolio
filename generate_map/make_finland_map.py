import plotly.graph_objects as go

# 正しいヘルシンキの座標
cities = [{
    "name": "ヘルシンキ",
    "lat": 60.1695,
    "lon": 24.9354
}]

# 地図作成（都市のプロット）
fig = go.Figure(data=go.Scattergeo(
    lon=[c["lon"] for c in cities],
    lat=[c["lat"] for c in cities],
    text=[c["name"] for c in cities],
    mode="markers+text",
    marker=dict(size=10, color="blue"),
    textposition="top center"
))

# 表示設定
fig.update_layout(
    geo=dict(
        scope="europe",
        center=dict(lat=63.0, lon=26.0),  # フィンランド全体に近い
        projection_type="natural earth",
        lataxis=dict(range=[58, 71]),    # 緯度：南から北へ
        lonaxis=dict(range=[20, 32])     # 経度：西から東へ
    ),
    margin=dict(t=0, b=0)
)

fig.write_html("finland_map.html", include_plotlyjs='cdn', full_html=True)
