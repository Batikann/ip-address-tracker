import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import customIcon from '../assets/icon-location.svg'
import { Icon } from 'leaflet'
const iconLocation = new Icon({
  iconUrl: customIcon,
  iconSize: [36, 40],
})

const SetView = ({ coords }) => {
  const map = useMap()
  map.setView(coords)
  return null
}

const Map = ({ coordinate }) => {
  return (
    <MapContainer
      center={coordinate}
      zoom={13}
      className="h-screen relative z-10"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SetView coords={coordinate} />
      <Marker position={coordinate} icon={iconLocation}></Marker>
    </MapContainer>
  )
}
export default Map
