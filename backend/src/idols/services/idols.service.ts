import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Idol, IdolDocument } from '../schemas/idol.schema';
import { Model } from 'mongoose';
import { CreateIdolDto } from '../dto/create-idol.dto';

@Injectable()
export class IdolsService {
  constructor(@InjectModel(Idol.name) private idolModel: Model<IdolDocument>) {}

  async create(createIdolDto: CreateIdolDto): Promise<Idol> {
    const createdIdol = new this.idolModel(createIdolDto);
    return createdIdol.save();
  }

  async findAll(): Promise<Idol[]> {
    return this.idolModel.find().exec();
  }
}
