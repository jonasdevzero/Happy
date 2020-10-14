import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidateErrors {
    [key: string]: string[];
};

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    if (error instanceof ValidationError) {
        let errors: ValidateErrors = {}

        error.inner.forEach(err => {
            errors[err.path] = err.errors;
        });

        return res.status(400).json({ message: 'Validate fails', errors });
    };

    console.log(error);

    return res.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;