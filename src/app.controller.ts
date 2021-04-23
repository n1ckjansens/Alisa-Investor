import { Body, Controller, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { IAlisaRequest } from './models/alisaRequest.model';
import { IAlisaResponse } from './models/alisaResponse.model';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getAlisaRequest(@Body() alisaRequestParams: IAlisaRequest): IAlisaResponse {
    // TODO: Выпилить замену типов после формирования валидного ответа
    return (alisaRequestParams as unknown) as IAlisaResponse;
  }
}
