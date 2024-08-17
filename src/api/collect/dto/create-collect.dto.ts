import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class TaskDataDto {
  @IsNotEmpty({ message: 'floorName不能为空' })
  readonly floorName!: string;

  @IsNotEmpty({ message: 'buildingName不能为空' })
  readonly buildingName!: string;

  @IsNotEmpty({ message: 'taskName不能为空' })
  readonly taskName!: string;

  @IsNotEmpty({ message: 'taskType不能为空' })
  readonly taskType!: string;

  @IsNotEmpty({ message: 'sampleNum不能为空' })
  readonly sampleNum!: string;

  @IsNotEmpty({ message: 'taskTime不能为空' })
  readonly taskTime!: string;

  @IsNotEmpty({ message: 'poiName不能为空' })
  readonly poiName!: string;

  @IsNotEmpty({ message: 'startTime不能为空' })
  readonly startTime!: string;
}
class ResultPackageDto {
  @IsNotEmpty({ message: 'pkg不能为空' })
  readonly pkg!: string;

  @IsNotEmpty({ message: 'cardBoxNum不能为空' })
  readonly cardBoxNum!: string;

  @IsNotEmpty({ message: 'cardBoxType不能为空' })
  readonly cardBoxType!: string;

  @IsNotEmpty({ message: 'result不能为空' })
  readonly result!: string;

  @IsNotEmpty({ message: 'correctFluorescence不能为空' })
  readonly correctFluorescence!: any;

  @IsNotEmpty({ message: 'CT不能为空' })
  readonly CT!: any;
}

export class CreateCollectDto {
  @IsNotEmpty({ message: 'number序号不能为空' })
  // @IsInt({ message: 'number必须是整数' })
  @Type(() => Number) // TODO: 好像转化没有生效
  readonly number!: number;

  @IsNotEmpty({ message: 'date不能为空' })
  readonly date!: string;

  @ValidateNested()
  @Type(() => TaskDataDto)
  taskData!: TaskDataDto;

  @ValidateNested()
  @Type(() => ResultPackageDto)
  resultPackage!: ResultPackageDto;
}
