import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';
import UserView from '../views/users_view';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

const tokenSecret = process.env.TOKEN_SECRET || 'undefined';

function encryptPassword(password: string) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
};

function generateToken(params: object) {
    return jwt.sign(params, tokenSecret, {
        expiresIn: 86400
    });
};

export default {
    async index(req: Request, res: Response) {
        try {
            const usersRepository = getRepository(User);

            const users = await usersRepository.find();

            return res.status(200).json({ user: UserView.renderMany(users) });
        } catch (err) {
            console.log('[Error on index users] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
    },

    async show(req: Request, res: Response) {
        const { user: { id } } = req.body;

        try {
            const usersRepository = getRepository(User);

            const user = await usersRepository.findOne({ id });

            return res.status(200).json({ user: UserView.render(user as User) });
        } catch (err) {
            console.log('[Error on show user] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
    },

    async delete(req: Request, res: Response) {
        const { id } = req.body;

        try {
            const usersRepository = getRepository(User);

            const userDeleted = await usersRepository.delete(id);

            return res.status(200).json({ user: userDeleted });
        } catch (err) {
            console.log('[Error on delete user] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' })
        };
    },

    async create(req: Request, res: Response) {
        const {
            name,
            email,
            password
        } = req.body;

        try {
            const usersRepository = getRepository(User);

            const existsUser = await usersRepository.findOne({ email });
            if (existsUser) return res.status(400).json({ error: 'User already exists' });

            const data = {
                name,
                email,
                password: encryptPassword(password),
            };

            const schema = Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string().required(),
                password: Yup.string().required()
            });
            await schema.validate(data, {
                abortEarly: false,
            });

            const user = usersRepository.create(data);
            await usersRepository.save(user);

            return res.status(200).json({ token: generateToken({ id: user.id }) });
        } catch (err) {
            console.log('[Error on create user] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
    },

    async login(req: Request, res: Response) {
        const {
            email,
            password
        } = req.body;

        try {
            const usersRepository = getRepository(User);

            const user = await usersRepository.findOne({ email });

            if (!user)
                return res.json({ error: 'User not found' });

            if (!bcrypt.compareSync(password, user.password))
                return res.json({ error: 'Invalid password' });

            return res.status(200).json({
                user: UserView.render(user),
                token: generateToken({ id: user.id }),
            });
        } catch (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        };
    },

    async auth(req: Request, res: Response, next: NextFunction) {
        const { token } = req.body;

        if (!token) return res.status(401).json({ error: 'Access Denied' });

        try {
            const verified = jwt.verify(token, tokenSecret)

            req.body.user = verified;

            next();
        } catch (err) {
            return res.status(400).json({ error: 'Invalid Token' });
        };
    },
};