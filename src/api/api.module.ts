import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { CollectModule } from '@src/api/collect/collect.module';

@Module({
  imports: [CollectModule, LoginModule],
})
export class ApiModule {}
