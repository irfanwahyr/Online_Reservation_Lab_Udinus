import { logger } from "./app/logging";
import { web } from "./app/web";

web.listen(300, () => {
    logger.info("App Start");
});