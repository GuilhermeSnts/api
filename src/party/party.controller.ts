import { Body, Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { Party } from './party.entity';
import { PartyService } from './party.service';

@Controller('party')
export class PartyController {
  constructor(private readonly service: PartyService) {}

  @Post()
  @ApiOperation({ summary: 'Create party' })
  async create(@Body() model: Party) {
    delete model.id;
    this.service.create(model);
  }

  @Get()
  async findAll(): Promise<Party[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Party> {
    return await this.service.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}
