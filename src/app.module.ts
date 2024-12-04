import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConsultaController } from './app.controller';

@Module({
  imports: [],
  controllers: [ConsultaController],
  providers: [AppService],
})
export class AppModule {}
