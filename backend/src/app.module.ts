import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IdolsModule } from './idols/idols.module';
import { BandsModule } from './bands/bands.module';
import { AlbumsModule } from './albums/albums.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/kpop'),
    IdolsModule,
    BandsModule,
    AlbumsModule,
  ],
})
export class AppModule {}
