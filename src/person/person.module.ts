import { Module, OnApplicationShutdown, OnModuleInit } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { ModuleRef } from '@nestjs/core';

@Module({
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule implements OnApplicationShutdown, OnModuleInit {
  constructor(private readonly moduleRef: ModuleRef) {}

  onModuleInit(): any {
    console.log(this.moduleRef.get(PersonController), '1234');
    console.log(this.moduleRef.get(PersonService), '9876');
  }

  onApplicationShutdown() {
    const personService = this.moduleRef.get(PersonController);
    console.log('--------------------------', personService.findAll());

    console.log('CccModule onApplicationShutdown');
  }
}
