import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react'

const Map = ({ coordinate }) => {
  console.log(coordinate)
  return (
    <MapContainer
      center={coordinate}
      zoom={13}
      className="h-screen -z-10 relative"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinate}></Marker>
    </MapContainer>
  )
}
export default Map
