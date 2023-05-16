import { useSelector } from 'react-redux'
import Header from './components/Header'
import Map from './components/Map'
import { useEffect, useState } from 'react'

function App() {
  const data = useSelector((state) => state.map.data)

  return (
    <div className="w-full">
      <Header />
      {data && <Map coordinate={[data.location.lat, data.location.lng]} />}
    </div>
  )
}

export default App
