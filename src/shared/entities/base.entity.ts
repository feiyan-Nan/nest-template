import { Transform, TransformFnParams } from 'class-transformer';
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BaseEntity,
} from 'typeorm';

export class SharedEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键id',
  })
  id!: number;
  // 参考:
  // https://www.npmjs.com/package/class-transformer/v/0.1.0-beta.10
  // https://medium.com/@coder_in_austria/using-the-class-transformer-for-better-data-architecture-87448f74037a
  @Transform((row: TransformFnParams) => +new Date(row.value))
  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'created_at',
    comment: '创建时间',
  })
  createdAt!: Date;

  @Transform((row: TransformFnParams) => +new Date(row.value))
  @UpdateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'updated_at',
    comment: '更新时间',
  })
  updatedAt!: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'deleted_at',
    select: false,
    comment: '软删除时间',
  })
  deletedAt!: Date;
}
