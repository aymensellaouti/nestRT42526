import { Inject, Injectable } from '@nestjs/common';
import { User } from './model/user.model';
import { AddUserDto } from './dto/add-user.dto';
import { LoggerService } from './logger.service';
import { SayHelloService } from './say-hello.logger';
import { APP_PROVIDER_TOKENS } from '../app.config';

@Injectable()
export class FirstService {
    constructor(
        private loggerService: LoggerService,
        @Inject(APP_PROVIDER_TOKENS.sauHelloProviderToken) private sayHelloService: SayHelloService,
        @Inject(APP_PROVIDER_TOKENS.uppercaseProviderToken) private upperCase,
    ) {}
    users: User[] = [];
    addUser(newUser: AddUserDto): User {
        const { name } = newUser;
        this.loggerService.logger('add user : '+ this.upperCase(name));
        const id = !this.users.length ? 1 : this.users[this.users.length - 1].id + 1;
        const user: User = {id, name};
        this.users.push(user); 
        return user;
    }
}
