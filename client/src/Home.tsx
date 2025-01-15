import { useEffect, useState } from "react"
import { useNavigate, Outlet } from "react-router"
import leftAngle from "./assets/left-angle.svg"
import rightAngle from "./assets/right-angle.svg"

const TRACKS = [
  { id: 1, title: "Track 1" },
  { id: 2, title: "Track 2" },
  { id: 3, title: "Track 3" },
]

function Home() {
  const [id, setId] = useState<Number>()
  const [trackIndex, setTrackIndex] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    setId(TRACKS[trackIndex].id)
  }, [trackIndex])

  useEffect(() => {
    if (id) {
      navigate(`/${id}`)
    }
  }, [id])

  const nextTrack = () => {
    setTrackIndex((trackIndex + 1) % TRACKS.length)
  }

  const prevTrack = () => {
    setTrackIndex((trackIndex - 1 + TRACKS.length) % TRACKS.length)
  }

  return (
    <>
      <div className=" h-screen w-screen flex flex-col items-center justify-start">
        <div className=" my-8">
          <h1 className=' text-neutral-800 text-6xl font-climate-crisis'>BeatDigest</h1>
          <p className=" font-popins text-xl pt-4 text-neutral-600">A daily dose of beats for your day</p>
        </div>
        <div className=" flex flex-row items-center justify-center">
          <button 
            onClick={prevTrack}
            className=" bg-cyan-200 border border-cyan-300 rounded-sm px-4 text-2xl py-2 hover:bg-cyan-300 transition-colors duration-100 focus:outline-none mx-8 text-neutral-900"
              >    <img src={leftAngle} alt="Left Angle" className="w-10 h-10" />
          </button>
          <Outlet />
          <button 
            onClick={nextTrack}
            className=" bg-cyan-200 border border-cyan-300 rounded-sm px-4 text-2xl py-2 hover:bg-cyan-300 transition-colors duration-100 focus:outline-none mx-8 text-neutral-900"
              >    <img src={rightAngle} alt="Right Angle" className="w-10 h-10" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Home