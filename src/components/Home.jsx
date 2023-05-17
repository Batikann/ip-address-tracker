import mapLocation from '../assets/locationMap.png'

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col p-8 gap-12">
      <img src={mapLocation} alt="" className="w-64 h-64" />
      <h2 className="text-2xl font-medium text-very-dark-gray">
        You haven't searched yet
      </h2>
    </div>
  )
}
export default Home
