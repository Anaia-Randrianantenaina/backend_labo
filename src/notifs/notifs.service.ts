import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNotifDto } from './dto/create-notif.dto';
import { UpdateNotifDto } from './dto/update-notif.dto';
import { Repository } from 'typeorm';
import { Notif } from './entities/notif.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NotifsService {
  constructor(
    @InjectRepository(Notif) private readonly notifsRepository: Repository<Notif>
  ) {}


   async create(createNotifDto: CreateNotifDto) {
    const notif = this.notifsRepository.create(createNotifDto);

   return await this.notifsRepository.save(notif);
  }

   async findAll() {
    return await this.notifsRepository.find();
  }

  async findOne(id: number) {
    return await this.notifsRepository.findOne({
      where: { id }
    }); 
  }

   async update(id: number, updateNotifDto: UpdateNotifDto) {

    const notif = await this.findOne(id);

    if(!notif) {
      throw new NotFoundException('')
    }

    Object.assign(notif, updateNotifDto);
    return  await this.notifsRepository.save(notif);
  }

  async remove(id: number) {

    const notif = await this.findOne(id);
    if(!notif) {
      throw new NotFoundException();
    }

    return await this.notifsRepository.remove(notif);
  }
}
