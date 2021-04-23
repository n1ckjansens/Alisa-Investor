import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { alisaRequest } from './boilerplate/alisaRequest.boilerplate';
import { alisaResponse } from './boilerplate/alisaResponse.boilerplate';

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
    it('should take correct request params and return correct response', () => {
      expect(appController.getAlisaRequest(alisaRequest)).toBe(alisaResponse);
    });
  });
});
