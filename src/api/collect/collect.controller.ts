import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CollectService } from './collect.service';
import { CreateCollectDto } from './dto/create-collect.dto';
import { UpdateCollectDto } from './dto/update-collect.dto';
import { QueryCollectDto } from '@src/api/collect/dto/collect.query.dto';
import { ConfigService } from '@nestjs/config';

@Controller('collect')
export class CollectController {
  @Inject('Gang') protected gang1: any;

  constructor(
    private readonly collectService: CollectService,
    private configService: ConfigService,
  ) {}

  @Post() create(@Body() createCollectDto: CreateCollectDto) {
    return this.collectService.create(createCollectDto);
  }

  @Get() async findAll(@Query() queryOption: QueryCollectDto) {
    console.log('queryOption', this.gang1, '111');
    throw new BadRequestException('参数错误');
    const appName = this.configService.get('app.name');
    console.log('🚀 ~ findAll ~ appName: ', appName);
    return await this.collectService.findAll(queryOption);
  }

  @Get(':id') findOne(@Param('id') id: string) {
    return this.collectService.findOne(+id);
  }

  @Patch(':id') update(
    @Param('id') id: string,
    @Body() updateCollectDto: UpdateCollectDto,
  ) {
    return this.collectService.update(+id, updateCollectDto);
  }

  @Delete(':id') remove(@Param('id') id: string) {
    return this.collectService.remove(+id);
  }
}
