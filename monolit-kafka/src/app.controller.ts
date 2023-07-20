// app.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('buy_token')
  async buyTokens(@Body() body: { userId: number; amoung: number }) {
    return this.appService.buyTokens({
      userId: body.userId,
      amoung: body.amoung,
    });
  }
}
