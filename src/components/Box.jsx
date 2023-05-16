const Box = () => {
  return (
    <div className="absolute bg-white  md:-bottom-1/2 -bottom-52  md:-translate-y-1/2 p-8   md:py-9 py-2 rounded-xl lg:w-[75%] md:w-[90%] w-[85%] max-[300px]:-bottom-64 max-[300px]:w-[90%] ">
      <div className="flex md:flex-row flex-col  md:justify-between md:gap-x-14 md:gap-y-0 md:p-0 gap-y-4 p-4 justify-center w-full items-center md:text-start">
        <div className="box">
          <h3 className="header">Ip Address</h3>
          <p className="title">192.212.174.101</p>
        </div>
        <div className="box md:border-x-2">
          <h3 className="header">Location</h3>
          <p className="title">Brooklyn,NY 10001</p>
        </div>
        <div>
          <h3 className="header">Timezone</h3>
          <p className="title">Utc-05:00</p>
        </div>
        <div className="box md:border-l-2">
          <h3 className="header">ISP</h3>
          <p className="title">SpaceX Starlink</p>
        </div>
      </div>
    </div>
  )
}
export default Box
