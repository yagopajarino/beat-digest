import { useParams } from "react-router"
import YtIframe from "./youtube"

const TRACKS = [
    { id: 1, date: "01/13/2024", title: "BREAKFAST || Morning Vinyl House Mix con Loïc B2B Pato Mallet", youtubeId: "VAXuZM8iLL4" },
    { id: 2, date: "01/14/2024", title: "Yoyaku instore session with Satoshi Tomiie b2b Tomoki Tamura", youtubeId: "yM2kEQtiWgE" },
    { id: 3, date: "01/15/2024", title: "Soulful Romantic House Music Mix - Cozy Lunch Living Room DJ Set | Chill Relax Playlist", youtubeId: "4VjTKbTcm90" },
  ]

const Player = () => {
    let params = useParams()
    const track = TRACKS.find((track) => track.id === Number(params.pid))

    return (
        <div>
            {/* <p className=" font-popins text-center pb-3 text-lg font-medium">{track?.date}</p> */}
            <YtIframe youtubeId={track?.youtubeId??""} youtubeTitle={track?.title??""} />
        </div>
    )
}

export default Player