import { useSelector } from 'react-redux'
import Header from './components/Header'
import Map from './components/Map'
import { useEffect, useState } from 'react'

function App() {
  const [test, setTest] = useState(false)
  const data = useSelector((state) => state.map.data)
  if (data) {
    useEffect(() => {
      setTest(data)
    }, [data])
  }

  return (
    <div className="w-full">
      <Header />
      {test && <Map lat={test.location.lat} lng={test.location.lng} />}
    </div>
  )
}

export default App
