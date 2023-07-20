// app.controller.ts
import { Controller } from '@nestjs/common';
import { Payload, EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @EventPattern('buyTokens')
  async handleBuyTokens(
    @Payload() payload: { userId: number; amoung: number },
  ) {
    console.log('Покупка токенов', payload);
    this.appService.buyToken(payload);
  }
}
