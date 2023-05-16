import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Map = ({ lat, lng }) => {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      className="h-screen -z-10 relative"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}></Marker>
    </MapContainer>
  )
}
export default Map
