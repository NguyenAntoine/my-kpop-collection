import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AlbumDocument = Album & Document;

@Schema()
export class Album {
  @Prop()
  name: string;

  @Prop()
  koreanName: string;

  @Prop()
  dateOfRelease: Date;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
