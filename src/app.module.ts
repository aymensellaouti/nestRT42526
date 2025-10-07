import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModule } from './first/first.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    FirstModule,
    TypeOrmModule.forRoot({ 
      type: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: 'root', 
      password: '', 
      database: 'rt42526',
      // LEs entites bara lawej a3lihom fel featureModule 
      autoLoadEntities: true, 
      // MA nkhaliha kan fel dev sinon ta3mel kartha
      // FEl prod nesta3mlou Migration (Kima fi symfony)
      synchronize: true,
      //logili eli ta3mel fih el kol
      logging: true 
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
