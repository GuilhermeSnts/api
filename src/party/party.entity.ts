import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, Entity } from 'typeorm';

import { PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Party {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 55,
    nullable: false,
  })
  @ApiProperty({
    example: 'Pajama night ',
    description: 'The name of the Party',
  })
  name: string;

  @CreateDateColumn()
  @Column({ type: 'date', nullable: false })
  @ApiProperty({
    example: new Date(),
    description: 'Date when party will start',
  })
  startAt: Date;

  @Column({ type: 'date', nullable: false })
  @ApiProperty({ example: new Date(), description: 'Date when party will end' })
  endAt: Date;

  @Column('double')
  @ApiProperty({
    example: -22.967646,
    description:
      'Longitude of local where the party will happen, for use in maps',
  })
  longitude: number;

  @Column('double')
  @ApiProperty({
    example: -43.178373,
    description:
      'Latitude of local where the party will happen, for use in maps',
  })
  latitude: number;

  @Column('text')
  @ApiProperty({
    example: `When you dance that way,When you dance that way, I feel the rhythm in my soul. Use pajama at this party`,
    description: 'Describe your party',
  })
  description: string;
}
