import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { AaaModule } from './aaa/aaa.module';

@Module({
  imports: [PersonModule, AaaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
