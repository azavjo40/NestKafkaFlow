// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TOKENS',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'client',
            brokers: ['localhost:29092'],
          },
          producerOnlyMode: true,
          consumer: {
            groupId: 'ddb661c0-ec76-428c-93ef-728250d22df6',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
