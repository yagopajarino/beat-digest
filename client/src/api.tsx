import axios from 'axios'

const getTrackOfTheDay = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/trackOfTheDay`)
    return response.data
}

const getTrackById = async (id: string) => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/tracks/${id}`)
    return response.data
}

export default {
    getTrackOfTheDay,
    getTrackById
}