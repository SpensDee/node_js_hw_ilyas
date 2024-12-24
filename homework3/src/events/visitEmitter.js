import EventEmitter from 'events';
import logger from '../utils/logger.js';
import { logVisit } from '../streams.js';

class VisitEmitter extends EventEmitter {}
const visitEmitter = new VisitEmitter();

visitEmitter.on('log', (visitData) => {
    logVisit(visitData);
    logger.success('Visit logged');
});

export default visitEmitter;
