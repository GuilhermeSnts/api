import { Module } from '@nestjs/common';
import { PartyModule } from './party/party.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), PartyModule],
  controllers: [],
})
export class AppModule {}
