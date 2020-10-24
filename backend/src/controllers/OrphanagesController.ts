import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';
import Image from '../models/Image';
import OrphanageView from '../views/orphanages_view';
import * as Yup from 'yup';

export default {
    async index(req: Request, res: Response) {
        const { filter } = req.query;

        try {
            const orphanagesRepository = getRepository(Orphanage);

            if (filter) {
                let orphanages;
                switch (filter) {
                    case 'notApproved':
                        orphanages =  await orphanagesRepository.find({ approved: false })
                        return res.status(200).json({ orphanages });
                    case 'approved':
                        orphanages = await orphanagesRepository.find({ approved: true });
                        return res.status(200).json({ orphanages });
                }
            }

            const orphanages = await orphanagesRepository.find({
                relations: ['images']
            });

            return res.json(OrphanageView.renderMany(orphanages));
        } catch (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    },

    async show(req: Request, res: Response) {
        const { id } = req.params
        const orphanagesRepository = getRepository(Orphanage);

        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return res.json(OrphanageView.render(orphanage));
    },

    async create(req: Request, res: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            openning_hours,
            open_on_weekends,
            contact
        } = req.body;

        const orphanagesRepository = getRepository(Orphanage);

        const requestImages = req.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return { path: image.filename }
        })

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            openning_hours,
            open_on_weekends: open_on_weekends === 'true',
            contact,
            approved: false,
            images
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            openning_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            contact: Yup.string(),
            approved: Yup.boolean().required(),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required()
            }))
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const orphanage = orphanagesRepository.create(data);

        await orphanagesRepository.save(orphanage);

        res.json({ orphanage })
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const orphanagesRepository = getRepository(Orphanage);

            const orphanageDeleted = await orphanagesRepository.delete(id);
            return res.status(200).json({ orphanageDeleted });
        } catch (err) {
            return res.status(500).json({ error: 'error on server' });
        };
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            openning_hours,
            open_on_weekends,
            contact,
            images_id,
            approved,
        } = req.body;

        try {
            const orphanagesRepository = getRepository(Orphanage);
            const imagesRepository = getRepository(Image);

            const requestImages = req.files as Express.Multer.File[];
            const images = requestImages.map(image => {
                return { 
                    path: image.filename,
                    orphanage: {
                        id: Number(id),
                    }, 
                };
            });

            // the first value of imagesIdArray is ["", ...id's]
            const imagesIdArray = images_id.split(' ');

            if (imagesIdArray.length > 1) {
                await imagesIdArray.forEach(async (id: string, i: number) => {
                    if (i === 0) // -> ""
                        return;

                    await imagesRepository.delete(id)
                });
            };

            if (images.length) {
                const newImages = await imagesRepository.create(images);
                await imagesRepository.save(newImages);
            };

            const orphanageUpdated = await orphanagesRepository.update(id, {
                name,
                latitude,
                longitude,
                about,
                instructions,
                openning_hours,
                open_on_weekends: open_on_weekends === 'true',
                contact,
                approved: approved === 'true',
            });

            return res.status(200).json({ orphanageUpdated });
        } catch (err) {
            return res.status(500).json({ err });
        }
    },
};