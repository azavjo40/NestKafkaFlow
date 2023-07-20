// app.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('TOKENS') private readonly client: ClientKafka) {}

  async buyTokens(payload: { userId: number; amoung: number }) {
    return this.client.emit('buyTokens', JSON.stringify(payload));
  }
}
