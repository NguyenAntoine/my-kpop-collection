import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { configs } from './config/configuration';
import { IdolsModule } from './idols/idols.module';
import { BandsModule } from './bands/bands.module';
import { AlbumsModule } from './albums/albums.module';
import { KeycloakConnectModule, RoleGuard } from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
import * as KeycloakConfig from '../keycloak.json';

const MONGO_URL = configs.mongoUrl;

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    }),
    IdolsModule,
    BandsModule,
    AlbumsModule,
    // KeycloakConnectModule.register(KeycloakConfig),
  ],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: RoleGuard,
    // },
  ],
})
export class AppModule {}
