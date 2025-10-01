import { Module } from '@nestjs/common';
import { FirstController } from './first.controller';
import { FirstService } from './first.service';
import { LoggerService } from './logger.service';
import { sayHelloFactory } from './factories/say-hello.provider-factory';
import { APP_PROVIDER_TOKENS } from '../app.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
// import {upperCase} from 'lodash-es';
@Module({
  controllers: [FirstController],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    {
    provide:FirstService,
    useClass: FirstService,
  },{
    provide: APP_PROVIDER_TOKENS.uppercaseProviderToken,
    useValue: (value: string) => value.toUpperCase() 
  }, 
  {
    provide: APP_PROVIDER_TOKENS.sauHelloProviderToken,
    useFactory: sayHelloFactory,
    inject: [LoggerService]
  },
  LoggerService]
})
export class FirstModule {}
