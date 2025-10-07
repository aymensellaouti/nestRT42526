import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { User } from './model/user.model';
import { AddUserDto } from './dto/add-user.dto';
import { LoggerService } from './logger.service';
import { SayHelloService } from './say-hello.logger';
import { APP_PROVIDER_TOKENS } from '../app.config';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository, UpdateResult } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { GenericCrud } from '../services/genric-crud.service';

@Injectable()
export class FirstService extends GenericCrud<UserEntity> {
    constructor(
        private loggerService: LoggerService,
        // @Inject(APP_PROVIDER_TOKENS.sauHelloProviderToken) private sayHelloService: SayHelloService,
        // @Inject(APP_PROVIDER_TOKENS.uppercaseProviderToken) private upperCase,
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {
        super(userRepository);
    }
    //users: User[] = [];

    async softDelete(id: number): Promise<{count:number}> {
        const deleteResult = await this.userRepository.
        softDelete(id);
        if (!deleteResult.affected) throw new NotFoundException();
        return {count: deleteResult.affected };
    }
    async softRestore(id: number): Promise<{count:number}> {
        const updateResult = await this.userRepository.restore(id);
        if (!updateResult.affected) throw new NotFoundException();
        return {count: updateResult.affected };
    }


}
