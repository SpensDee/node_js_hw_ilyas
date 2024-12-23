import express from 'express';
import parseRequestData from './middleware/parseRequestData.js';
import errorHandler from './middleware/errorHandler.js';
import visitEmitter from './events/visitEmitter.js';
import logger from './utils/logger.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/usercheck', parseRequestData, (req, res) => {
    const visitData = req.visitData;
    visitEmitter.emit('log', visitData);
    res.json(visitData);
});

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    logger.success(`on port ${process.env.PORT}`, 'Server is running' );
});
