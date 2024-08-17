import { SharedEntity } from '@src/shared/entities/base.entity';
import { Entity, Column } from 'typeorm';
import { Transform, TransformFnParams } from 'class-transformer';
import * as moment from 'moment';

@Entity('collect')
export class CollectEntity extends SharedEntity {
  @Column({
    type: 'int',
    name: 'number',
    nullable: true,
    comment: '序号',
  })
  number!: number;

  @Transform((row: TransformFnParams) =>
    moment(row.value).format('YYYY-MM-DD HH:mm:ss'),
  )
  @Column({
    type: 'timestamp',
    nullable: true,
    name: 'date',
    comment: '检测时间',
  })
  date!: string;

  @Column({
    type: 'varchar',
    name: 'buildingName',
    nullable: true,
    comment: '自建地图名称',
  })
  buildingName!: string;

  @Column({
    type: 'varchar',
    name: 'floorName',
    nullable: true,
    comment: '自建地图名称楼层',
  })
  floorName!: string;

  @Column({
    type: 'varchar',
    name: 'taskName',
    nullable: true,
    comment: '任务名称',
  })
  taskName!: string;

  @Column({
    type: 'tinyint',
    name: 'taskType',
    nullable: true,
    comment: '0,点位，1巡视，2人工',
  })
  taskType!: number;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'sample_num',
    nullable: true,
    comment: '采样编号',
  })
  sampleNum!: string;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'task_time',
    nullable: true,
    comment: '检测时长',
  })
  taskTime!: string;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'poi_name',
    nullable: true,
    comment: '多个点位用，号分开',
  })
  poiName!: string;

  @Transform((row: TransformFnParams) =>
    moment(row.value).format('YYYY-MM-DD HH:mm:ss'),
  )
  @Column({
    type: 'timestamp',
    nullable: true,
    name: 'startTime',
    comment: '开始时间',
  })
  startTime!: string;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'pkg',
    nullable: true,
    comment: 'pkg',
  })
  pkg!: string;

  @Column({
    type: 'varchar',
    name: 'cardBoxNum',
    nullable: true,
    comment: 'Pkg',
  })
  cardBoxNum!: string;

  @Column({
    type: 'varchar',
    name: 'cardBoxType',
    nullable: true,
    comment: 'CardBoxType',
  })
  cardBoxType!: string;

  @Column({
    type: 'varchar',
    name: 'result',
    nullable: true,
    comment: 'result',
  })
  result!: string;

  @Column({
    type: 'json',
    name: 'correctFluorescence',
    nullable: true,
    comment: 'correctFluorescence',
  })
  correctFluorescence!: any;

  @Column({
    type: 'json',
    name: 'CT',
    nullable: true,
    comment: 'CT',
  })
  CT!: any;
}
