import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectDataController } from './modules/ProjectData/ProjectData.controller';
import { ProjectDataModule } from './modules/ProjectData/ProjectData.module';
import { ProjectDataService } from './modules/ProjectData/ProjectData.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    ProjectDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
