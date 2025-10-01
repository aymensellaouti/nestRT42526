import { Inject, Injectable } from '@nestjs/common';
import { User } from './model/user.model';
import { AddUserDto } from './dto/add-user.dto';
import { LoggerService } from './logger.service';
import { SayHelloService } from './say-hello.logger';
import { APP_PROVIDER_TOKENS } from '../app.config';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FirstService {
    constructor(
        private loggerService: LoggerService,
        @Inject(APP_PROVIDER_TOKENS.sauHelloProviderToken) private sayHelloService: SayHelloService,
        @Inject(APP_PROVIDER_TOKENS.uppercaseProviderToken) private upperCase,
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}
    users: User[] = [];
    addUser(newUser: AddUserDto): Promise<User> {
        //const { name } = newUser;
        return this.userRepository.save(newUser)
        // this.loggerService.logger('add user : '+ this.upperCase(name));
        // const id = !this.users.length ? 1 : this.users[this.users.length - 1].id + 1;
        // const user: User = {id, name};
        // this.users.push(user); 
        // return user;
    }
}
