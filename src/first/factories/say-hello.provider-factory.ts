import { LoggerService } from "../logger.service";
import { SayHelloService } from "../say-hello.logger";

export function sayHelloFactory(logger: LoggerService) {
    logger.logger(`Iam providing`);
    // tjib el config men API
    const confiProd = {type: 'prod'}
    const sayHelloService = new SayHelloService(confiProd);
    return sayHelloService;
}