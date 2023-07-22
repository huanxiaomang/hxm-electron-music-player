import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { resolve } from 'path';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const path = resolve(__dirname, '../music');
    app.useStaticAssets(path, { prefix: '/music' });
    app.enableCors({
        origin: "*",
        allowedHeaders: ['Authorization', 'content-type'],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    });
    await app.listen(7676);
}
bootstrap();
