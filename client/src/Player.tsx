import { useParams } from "react-router"
import YtIframe from "./youtube"
import { useEffect, useState } from "react"
import api from "./api"

interface Track {
    id: number
    title: string
    youtubeId: string
    date: string
}   

const Player = () => {
    let params = useParams()
    const [track, setTrack] = useState<Track>()

    useEffect(() => {
        console.log(params)
        const fetchTrack = async () => {
            if (!params.pid) return
            const response = await api.getTrackById(params.pid)
            setTrack(response)
        }
        fetchTrack()
    }, [params])

    return (
        <div>
            {track? <YtIframe youtubeId={track?.youtubeId??""} youtubeTitle={track?.title??""} />: ""}
        </div>
    )
}

export default Player