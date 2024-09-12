import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import TaskRepository from 'src/Repositories/TaskRepository';
import SaveTaskDto from './SaveTaskDto';

@Injectable()
export default class SaveTaskUseCase
  implements UseCase<Promise<Task>, [dto: SaveTaskDto]>
{
  constructor(private taskRepo: TaskRepository) {}

  async handle(dto: SaveTaskDto) {
    const result = await this.taskRepo.save(dto);

    return result;
  }
}
