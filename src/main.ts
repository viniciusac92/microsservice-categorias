import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main')

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'categorias-fifo',
      queueOptions: {
        durable: true,
      },
    },
  });



  await app.listen()
  logger.log('admin backend esta ouvindo - listening')
}
bootstrap();
