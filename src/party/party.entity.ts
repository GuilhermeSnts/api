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
  name: string;

  @CreateDateColumn()
  @Column({ type: 'date', nullable: false })
  startAt: Date;

  @Column({ type: 'date', nullable: false })
  endAt: Date;

  @Column('double')
  longitude: number;

  @Column('double')
  latitude: number;

  @Column('text')
  description: string;
}
