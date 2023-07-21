import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.useStaticAssets('music', { prefix: '/music' });
    app.enableCors({
        origin: "*",
        allowedHeaders: ['Authorization', 'content-type'],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    });
    await app.listen(7676);
}
bootstrap();
