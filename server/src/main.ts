import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet())
  app.enableCors()
  // const config = new DocumentBuilder()
  //   .setTitle('Audiophile API')
  //   .setDescription('Audiophile API description')
  //   .setVersion('1.0')
  //   .addTag('audiophile')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('/', app, document);
  const PORT = process.env.PORT||8080
  await app.listen(PORT, () => {
    console.log('Server listening on port '+PORT)
  });
}
bootstrap();
