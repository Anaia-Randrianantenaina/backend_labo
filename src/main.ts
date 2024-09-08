import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ServerOptions } from 'socket.io';

class MyIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: ServerOptions): any {
    const server = super.createIOServer(port, {
      ...options,
      cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true,
      },
    });
    return server;
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration CORS pour le serveur HTTP
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  };
  
  app.enableCors(corsOptions);

  // Utilisation de l'adaptateur Socket.IO avec la configuration CORS
  app.useWebSocketAdapter(new MyIoAdapter(app));

  await app.listen(3001);
}
bootstrap();
