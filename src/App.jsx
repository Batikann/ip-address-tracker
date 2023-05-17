import { useSelector } from 'react-redux'
import Header from './components/Header'
import Map from './components/Map'
import { useEffect, useState } from 'react'
import Home from './components/Home'

function App() {
  const data = useSelector((state) => state.map.data)

  return (
    <div className="w-full">
      <Header />
      {data ? (
        <Map coordinate={[data.location.lat, data.location.lng]} />
      ) : (
        <Home />
      )}
    </div>
  )
}

export default App
