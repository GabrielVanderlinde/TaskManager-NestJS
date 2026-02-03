import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller({
  version: '2',
})
export class AppController2 {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealthCheck() {
    return 'Versão 2'
  }
}
