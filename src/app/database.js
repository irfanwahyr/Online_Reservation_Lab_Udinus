import { PrismaClient } from "@prisma/client";
import { logger } from "./logging";

export const prismaclient = new PrismaClient({
    log: [
        {
            emit: 'event',
            level: "query"
        },
        {
            emit: 'event',
            level: "error"
        },
        {
            emit: 'event',
            level: "info"
        },
        {
            emit: 'event',
            level: "warn"
        },
    ]
});

prismaclient.$on('error', (e) => {
    logger.error(e);
});

prismaclient.$on('warn', (e) => {
    logger.warn(e);
});

prismaclient.$on('info', (e) => {
    logger.info(e);
});

prismaclient.$on('query', (e) => {
    logger.info(e);
});
