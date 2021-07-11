import axios from "axios"

const url = "https://www.openstreetmap.org/api/0.6/map"

export async function fetch(min_lat, min_lon, max_lat, max_lon) {
  const res = await axios.get(url, {
    params: {
      bbox: `${min_lon},${min_lat},${max_lon},${max_lat}`
    }
  })

  return res.data
}
