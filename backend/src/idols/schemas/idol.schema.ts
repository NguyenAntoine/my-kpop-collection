import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

export const IdolSchema = SchemaFactory.createForClass(Idol);
