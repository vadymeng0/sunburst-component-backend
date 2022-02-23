import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(PORT, () => {
    console.log(`App running at: http://${HOST}:${PORT}`);
  });
}
bootstrap();
