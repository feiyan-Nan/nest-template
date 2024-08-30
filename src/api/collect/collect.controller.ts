import {
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

@Controller('collect')
export class CollectController {
  constructor(private readonly collectService: CollectService) {}

  @Post()
  create(@Body() createCollectDto: CreateCollectDto) {
    return this.collectService.create(createCollectDto);
  }

  @Get()
  async findAll(@Query() queryOption: QueryCollectDto) {
    return await this.collectService.findAll(queryOption);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCollectDto: UpdateCollectDto) {
    return this.collectService.update(+id, updateCollectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collectService.remove(+id);
  }
}
