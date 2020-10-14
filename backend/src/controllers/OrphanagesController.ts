import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default {
    async create(req: Request, res: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            openning_hours,
            open_on_weekends
        } = req.body;

        const orphanagesRepository = getRepository(Orphanage);

        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            openning_hours,
            open_on_weekends
        });

        await orphanagesRepository.save(orphanage);

        res.json({ orphanage })
    }
};