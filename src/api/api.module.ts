import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { CollectModule } from '@src/api/collect/collect.module';

@Module({
  imports: [CollectModule],
})
export class ApiModule {}
