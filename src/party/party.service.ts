import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Party } from './party.entity';

@Injectable()
export class PartyService {
  constructor(
    @InjectRepository(Party)
    private partyRepository: Repository<Party>,
  ) {}

  findAll(): Promise<Party[]> {
    return this.partyRepository.find();
  }

  findOne(id: string): Promise<Party> {
    return this.partyRepository.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.partyRepository.delete({ id });
  }

  async create(data: Party): Promise<void> {
    await this.partyRepository.save(data);
  }
}
