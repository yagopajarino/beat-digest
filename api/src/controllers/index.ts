import { Request, Response } from 'express';

const helloWorld = (req: Request, res: Response) => {
    res.status(200).send('Hello World');
}

const trackOfTheDay = (req: Request, res: Response) => {
    const track = {
        id: 2,
    }
    res.status(200).send(track);
}

const trackById = (req: Request, res: Response) => {
    const id = req.params.id;
    if (id == "1") {
        res.status(200).send({ id: 1, date: "01/13/2024", title: "BREAKFAST || Morning Vinyl House Mix con Loïc B2B Pato Mallet", youtubeId: "VAXuZM8iLL4" }) 
    } else if (id == "2") {
        res.status(200).send({ id: 2, date: "01/14/2024", title: "Smooth Jazz House Music Mix - Chill Living Room Playlist | Cozy Relaxing Kitchen Set", youtubeId: "r55w6BEjIyI" }) 
    } else {
        res.status(200).send(`Track with id ${id}`);
    }
}

export default { helloWorld, trackOfTheDay, trackById };