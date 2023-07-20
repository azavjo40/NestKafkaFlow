// app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private boughtTokens: { userId: number; amoung: number }[] = [];

  buyToken(data: { userId: number; amoung: number }) {
    this.boughtTokens.push(data);
  }
}
