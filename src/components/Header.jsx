import { useState } from 'react'
import arrow from '../images/icon-arrow.svg'
import Box from './Box'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApiToLocation } from '../redux/services/service'

const Header = () => {
  const [apiAddress, setApiAddress] = useState()
  const data = useSelector((state) => state.map.data)
  const dispatch = useDispatch()
  const submitHandle = (e) => {
    e.preventDefault()
    if (apiAddress) {
      dispatch(fetchApiToLocation(apiAddress))
      setApiAddress('')
    }
  }

  return (
    <div className="bg-dekstop relative h-64 bg-cover flex flex-col gap-8  items-center p-8 max-[300px]:p-4 w-full">
      {data && <Box />}
      <h1 className="text-white max-[300px]:text-center   text-3xl font-medium">
        IP Address Tracker
      </h1>
      <form onSubmit={submitHandle} className="w-full flex justify-center">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="md:w-[450px] w-[300px] h-12 rounded-tl-xl rounded-bl-xl pl-4 outline-none"
          value={apiAddress}
          onChange={(e) => setApiAddress(e.target.value)}
        />
        <button className="bg-very-dark-gray h-12 w-12 flex items-center justify-center rounded-tr-xl rounded-br-xl">
          <img src={arrow} alt="" />
        </button>
      </form>
    </div>
  )
}
export default Header
