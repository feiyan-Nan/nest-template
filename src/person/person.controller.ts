import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  OnModuleInit,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { ValidatePipe } from '../validate.pipe';

@Controller('person')
export class PersonController implements OnModuleInit {
  constructor(private readonly personService: PersonService) {}

  onModuleInit(): any {
    console.log(this, 'onModuleInit111');
  }

  @Get()
  findAll(@Headers() headers: Record<string, any>): any {
    console.log(headers, '222');
    return this.personService.findAll();
  }

  @Get('find')
  query(@Query('name') name: string, @Query('age') age: string) {
    console.log(name, age);
    return {
      id: 12,
      name: name,
      age: age,
    };
  }

  @Get(':id')
  urlParam(@Param('id', ParseIntPipe) id: string) {
    console.log(id);
    return {
      id: id,
      name: 'test',
      age: 12,
    };
  }

  @Post()
  body(@Body() createPersonDto: CreatePersonDto) {
    console.log(createPersonDto);
    return createPersonDto;
  }

  @Post('file')
  @UseInterceptors(AnyFilesInterceptor({ dest: 'uploads/' }))
  body2(
    @Body() createPersonDto: CreatePersonDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    console.log(files);
    return createPersonDto;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personService.remove(+id);
  }
}
