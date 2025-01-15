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
        const fetchTrack = async () => {
            if (!params.id) return
            const response = await api.getTrackById(params.id)
            setTrack(response.data)
        }
        fetchTrack()
    }, [params])

    return (
        <div>
            {/* <p className=" font-popins text-center pb-3 text-lg font-medium">{track?.date}</p> */}
            <YtIframe youtubeId={track?.youtubeId??""} youtubeTitle={track?.title??""} />
        </div>
    )
}

export default Player