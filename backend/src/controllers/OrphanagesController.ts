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
                    case 'not_approved':
                        orphanages = await orphanagesRepository.find({ approved: false })
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
            console.log('[Error on index orphanages] -> ', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    },

    async show(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const orphanagesRepository = getRepository(Orphanage);

            const orphanage = await orphanagesRepository.findOneOrFail(id, {
                relations: ['images']
            });

            return res.status(200).json({ orphanage: OrphanageView.render(orphanage) });
        } catch (err) {
            console.log('[Error on show orphanage] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' })
        };
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
            contact,
        } = req.body;

        try {
            const orphanagesRepository = getRepository(Orphanage);

            // Getting images file
            const requestImages = req.files as Express.Multer.File[];
            const images = requestImages.map(image => {
                return { path: image.filename }
            });

            const data = {
                name,
                latitude,
                longitude,
                about,
                instructions,
                openning_hours,
                open_on_weekends: open_on_weekends === 'true',
                contact,
                approved: false, // When creating the value it will always be false.
                images,
            };

            // Validating the data
            const schema = Yup.object().shape({
                name: Yup.string().required(),
                latitude: Yup.number().required(),
                longitude: Yup.number().required(),
                about: Yup.string().required().max(300),
                instructions: Yup.string().required(),
                openning_hours: Yup.string().required(),
                open_on_weekends: Yup.boolean().required(),
                contact: Yup.string().required(),
                approved: Yup.boolean().required(),
                images: Yup.array(Yup.object().shape({
                    path: Yup.string().required()
                })),
            });
            await schema.validate(data, {
                abortEarly: false,
            });

            // Creating, saving and sending the orphanage.
            const orphanage = orphanagesRepository.create(data);
            await orphanagesRepository.save(orphanage);

            return res.status(200).json({ orphanage: OrphanageView.render(orphanage) });
        } catch (err) {
            console.log('[Error on create orphanage] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const orphanagesRepository = getRepository(Orphanage);
            const imagesRepository = getRepository(Image);

            // Deleting images related to the orphanage and deleting the orphanage.
            await imagesRepository.delete({ orphanage: { id: Number(id) } });
            await orphanagesRepository.delete(id);

            return res.status(200);
        } catch (err) {
            console.log('[Error on delete orphanage] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
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
                // defining the images with the relation of your orphanage -> orphanage_id. To save correctly.
                return { 
                    path: image.filename,
                    orphanage: {
                        id: Number(id),
                    },
                };
            });

            // values of imagesIdArray is ["", ...id].
            const imagesIdArray = images_id.split(' ');

            // Excluding images required to delete.
            if (imagesIdArray.length > 1) {
                imagesIdArray.forEach(async (id: string, i: number) => {
                    if (i !== 0) { // 0 === [""]
                        await imagesRepository.delete(id);
                    };                     
                });
            };

            // Adding the new images.
            if (images.length) { 
                const newImages = await imagesRepository.create(images);
                await imagesRepository.save(newImages);
            };

            const orphanage = await orphanagesRepository.update(id, {
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

            return res.status(200).json({ orphanage });
        } catch (err) {
            console.log('[Error on update orphanage] -> ', err)
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};
