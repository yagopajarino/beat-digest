import { useEffect, useState } from "react"
import { useNavigate, Outlet } from "react-router"
// import leftAngle from "./assets/left-angle.svg"
// import rightAngle from "./assets/right-angle.svg"
import api from "./api"

function Home() {
  const [id, setId] = useState<Number>()
  // const [trackIndex, setTrackIndex] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchTrackId = async () => {
      const track = await api.getTrackOfTheDay()
      if (track) {
        // console.log(tracks)
        setId(track.id)
      }
    }
    fetchTrackId()
  }, [])

  useEffect(() => {
    if (id) {
      navigate(`/${id}`)
    }
  }, [id])

  // const nextTrack = () => {
  //   setTrackIndex((trackIndex + 1) % TRACKS.length)
  // }

  // const prevTrack = () => {
  //   setTrackIndex((trackIndex - 1 + TRACKS.length) % TRACKS.length)
  // }

  return (
    <>
      <div className=" h-screen w-screen flex flex-col items-center justify-start">
        <div className=" my-8">
          <h1 className=' text-neutral-800 text-7xl font-climate-crisis'>BeatDigest</h1>
          <p className=" font-popins text-xl pt-4 text-neutral-600">A daily dose of beats for your day</p>
        </div>
        <div className=" flex flex-row items-center justify-center">
          {/* <button 
            onClick={prevTrack}
            className=" bg-neutral-600 border border-neutral-700 rounded-sm px-4 text-2xl py-2 hover:bg-neutral-700 transition-colors duration-100 focus:outline-none mx-8 text-neutral-900"
              >    <img src={leftAngle} alt="Left Angle" className="w-10 h-10" />
          </button> */}
          <Outlet />
          {/* <button 
            onClick={nextTrack}
            className=" bg-neutral-600 border border-neutral-700 rounded-sm px-4 text-2xl py-2 hover:bg-neutral-700 transition-colors duration-100 focus:outline-none mx-8 text-neutral-900"
              >    <img src={rightAngle} alt="Right Angle" className="w-10 h-10" />
          </button> */}
        </div>
      </div>
    </>
  )
}

export default Home