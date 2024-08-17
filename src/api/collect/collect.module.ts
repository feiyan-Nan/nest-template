import { Module } from '@nestjs/common';
import { CollectService } from './collect.service';
import { CollectController } from './collect.controller';
import { RouterModule } from '@nestjs/core';
import { ADMIN_PREFIX } from '@src/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectEntity } from '@src/api/collect/entities/collect.entity';

@Module({
  imports: [
    RouterModule.register([
      {
        path: ADMIN_PREFIX, // 指定项目名称
        module: CollectModule,
      },
    ]),
    TypeOrmModule.forFeature([CollectEntity]),
  ],
  controllers: [CollectController],
  providers: [CollectService],
})
export class CollectModule {}
