import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Album } from '../../albums/schemas/album.schema';
import { Idol } from '../../idols/schemas/idol.schema';

export type BandDocument = Band & Document;

@Schema()
export class Band {
  @Prop()
  name: string;

  @Prop()
  koreanName: string;

  @Prop()
  company: string;

  @Prop()
  dateOfDebut: Date;

  @Prop()
  dateOfEnd: Date;

  @Prop({ required: true })
  actived: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }] })
  albums: Album[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Idols' }] })
  idols: Idol[];
}

export const BandSchema = SchemaFactory.createForClass(Band);
