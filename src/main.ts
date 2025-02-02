// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // const config = new DocumentBuilder()
  //   .setTitle('Median')
  //   .setDescription('The Median API description')
  //   .setVersion('0.1')
  //   .addBearerAuth(
  //     {
  //       type: 'http',
  //       scheme: 'bearer',
  //       bearerFormat: 'JWT',
  //       name: 'jwt',
  //       description: 'Enter JWT token',
  //       in: 'header',
  //     },
  //     'jwt', // This name should match the security name defined below
  //   )
  //   .build();

  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();
