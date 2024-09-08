import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Personnel } from './personnels/entities/personnel.entity';
import { Hospitalise } from './hospitalises/entities/hospitalise.entity';
import { Externe } from './externes/entities/externe.entity';
import { Notif } from './notifs/entities/notif.entity'; 
import { PersonnelsModule } from './personnels/personnels.module';
import { HospitalisesModule } from './hospitalises/hospitalises.module';
import { ExternesModule } from './externes/externes.module';
import { NotifsModule } from './notifs/notifs.module';
import { MaterielModule } from './materiel/materiel.module';
import { Materiel } from './materiel/entities/materiel.entity';
import { Ressource } from './ressource/entities/ressource.entity';
import { HistoriqueModule } from './historique/historique.module';
import { Historique } from './historique/entities/historique.entity';
import { RessourceModule } from './ressource/ressource.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Personnel, Hospitalise, Externe, Notif, Materiel, Ressource, Historique], 
        synchronize: true,
      }),
    }),
    PersonnelsModule,
    HospitalisesModule,
    ExternesModule,
    NotifsModule,
    MaterielModule,
    RessourceModule,
    HistoriqueModule,
    
  ],
})
export class AppModule {}
