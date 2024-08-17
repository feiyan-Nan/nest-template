import { Injectable } from '@nestjs/common';
import { CreateCollectDto } from './dto/create-collect.dto';
import { UpdateCollectDto } from './dto/update-collect.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CollectEntity } from '@src/api/collect/entities/collect.entity';
import { Repository } from 'typeorm';
import { QueryCollectDto } from '@src/api/collect/dto/collect.query.dto';
import { PageEnum } from '@src/enums';

@Injectable()
export class CollectService {
  constructor(
    @InjectRepository(CollectEntity)
    private readonly accountRepository: Repository<CollectEntity>,
  ) {}

  async create(createCollectDto: CreateCollectDto) {
    const _data = {
      ...createCollectDto,
      ...createCollectDto?.taskData,
      ...createCollectDto?.resultPackage,
    };
    const data = this.accountRepository.create(_data as CreateCollectDto);
    const result = await this.accountRepository.save(data);
    return result;
  }

  async findAll(queryOption: QueryCollectDto) {
    const { pageNumber = PageEnum.PAGE_NUMBER, pageSize = PageEnum.PAGE_SIZE } =
      queryOption;
    const [data, total] = await this.accountRepository
      .createQueryBuilder()
      .skip((pageNumber - 1) * pageSize)
      .take(pageSize)
      .orderBy({ id: 'DESC' })
      .printSql()
      .getManyAndCount();
    return {
      data,
      total,
      pageNumber: +pageNumber,
      pageSize: +pageSize,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} collect`;
  }

  update(id: number, updateCollectDto: UpdateCollectDto) {
    return `This action updates a #${id} collect`;
  }

  remove(id: number) {
    return `This action removes a #${id} collect`;
  }
}
