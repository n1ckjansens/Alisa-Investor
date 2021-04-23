import { Body, Controller, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { alisaResponse } from './boilerplate/alisaResponse.boilerplate';
import { IAlisaRequest } from './models/alisaRequest.model';
import { IAlisaResponse } from './models/alisaResponse.model';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getAlisaRequest(@Body() alisaRequestParams: IAlisaRequest): IAlisaResponse {
    return alisaResponse;
  }
}
