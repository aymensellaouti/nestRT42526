import { Injectable } from "@nestjs/common";

@Injectable()
export class SayHelloService {
    constructor(config: {type: string}) {
        if (config.type == 'prod') {}
    }
}