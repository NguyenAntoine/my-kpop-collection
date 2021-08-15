import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Idol, IdolDocument } from '../schemas/idol.schema';
import { Model } from 'mongoose';
import { CreateIdolDto } from '../dto/create-idol.dto';
import { UpdateIdolDto } from '../dto/update-idol.dto';

@Injectable()
export class IdolsService {
  constructor(@InjectModel(Idol.name) private idolModel: Model<IdolDocument>) {}

  async list(): Promise<Idol[]> {
    return this.idolModel.find().exec();
  }

  async get(idolId: string): Promise<Idol> {
    return this.idolModel.findById(idolId).exec();
  }

  async create(createIdolDto: CreateIdolDto): Promise<Idol> {
    const createdIdol = new this.idolModel(createIdolDto);
    return createdIdol.save();
  }

  async update(idolId: string, updateIdolDto: UpdateIdolDto): Promise<Idol> {
    return this.idolModel.findByIdAndUpdate(idolId, updateIdolDto, {
      new: true,
    });
  }

  async delete(idolId: string): Promise<Idol> {
    return this.idolModel.findByIdAndRemove(idolId);
  }
}
