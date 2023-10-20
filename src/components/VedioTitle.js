
const VedioTitle = ({title,overview}) => {
  return (
    <div className=" w-screen aspect-video pt-96 px-12 absolute text-white bg-gradient-to-r to-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="">
            <button className="bg-gray-500 text-white p-3 px-12  mx-2 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-100">Play</button>
            <button className="bg-gray-500 text-white p-3 px-12  text-xl bg-opacity-50 rounded-lg hover:bg-opacity-100">MoreInfo</button>
        </div>
    </div>
  )
}

export default VedioTitle