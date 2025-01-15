import { Request, Response } from 'express';
import pg from 'pg'

const helloWorld = (req: Request, res: Response) => {
    res.status(200).send('Hello World');
}

const trackOfTheDay = async (req: Request, res: Response) => {
    const { Client } = pg
    const client = new Client()
    await client.connect()

    const queryResults = await client.query('select * from tracks t where t."date" = current_date;')
    const rows = queryResults.rows
    if (rows.length > 0) {
        res.status(200).send({id: rows[0].id});
    }
    else {
        res.status(200).send('No track found');
    }
}

const trackById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { Client } = pg
    const client = new Client()
    await client.connect()

    const queryResults = await client.query('select * from tracks t where t.id = $1;', [id])
    const rows = queryResults.rows

    if (rows.length > 0) {
        res.status(200).send(rows[0]);
    }
    else {
        res.status(404).send('Track not found');
    }
}

export default { helloWorld, trackOfTheDay, trackById };