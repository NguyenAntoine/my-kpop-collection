import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Band } from '../../bands/schemas/band.schema';

export type IdolDocument = Idol & Document;

@Schema()
export class Idol {
  @Prop()
  stageName: string;

  @Prop()
  fullName: string;

  @Prop()
  koreanName: string;

  @Prop()
  koreanStageName: string;

  @Prop()
  dateOfBirth: Date;

  @Prop()
  gender: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Band' }] })
  bands: Band[] = [];
}

export const IdolSchema = SchemaFactory.createForClass(Idol);
