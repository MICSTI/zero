import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const configService = app.get(ConfigService);
  const port = configService.get('APP_PORT');

  await app.listen(port);
  console.log(
    `🚀  Server listening at http://localhost:${port}/${globalPrefix} 🛡️`,
  );
}
bootstrap();
