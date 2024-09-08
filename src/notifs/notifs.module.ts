import { Module } from '@nestjs/common';
import { NotifsService } from './notifs.service';
import { NotifsController } from './notifs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notif } from './entities/notif.entity'; // Importez l'entité Notif

@Module({
  imports: [TypeOrmModule.forFeature([Notif])], // Utilisez l'entité Notif ici
  controllers: [NotifsController],
  providers: [NotifsService],
})
export class NotifsModule {}
