import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IAlisaRequest } from './models/alisaRequest.model';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    // TODO: Выпилить замену типов после формирования валидного ответа
    it('should return the same params from request', () => {
      const params = { message: 'HELLO' };
      expect(
        appController.getAlisaRequest((params as unknown) as IAlisaRequest),
      ).toBe(params);
    });
  });
});
