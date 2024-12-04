import { Test, TestingModule } from '@nestjs/testing';
import { ConsultaController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: ConsultaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ConsultaController],
      providers: [AppService],
    }).compile();

    appController = app.get<ConsultaController>(ConsultaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getConsulta()).toBe('Hello World!');
    });
  });
});
