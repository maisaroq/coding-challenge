import express from "express"
import path from "path"
import osmtogeojson from "osmtogeojson"
import * as OpenStreetMap from "./open-street-map"

const app = express()

app.get("/", (req, res) => {
  res.sendfile("src/index.html")
});

app.get("/location", async (req, res) => {
  const { min_lat, min_lon, max_lat, max_lon } = req.query
  if ([min_lat, min_lon, max_lat, max_lon].some((param) => param === undefined)) {
    res.status(400)
    res.send("Parameters min_lat, min_lon, max_lat, max_lon are required")
  }

  const osm = await OpenStreetMap.fetch(min_lat, min_lon, max_lat, max_lon)
  const geoJson = osmtogeojson(osm)

  res.send(geoJson)
})

app.listen(4000, () => {
    console.log(`app is listening to port 4000`)
})
