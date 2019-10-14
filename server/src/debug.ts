import createDebug from 'debug';
import { config } from 'dotenv';

config();

createDebug.enable(process.env.DEBUG || '');

export const debug = createDebug('tools:server');
