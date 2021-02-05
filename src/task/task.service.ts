import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateTaskInput } from "./dto/create-task.input";
import { UpdateTaskInput } from "./dto/update-task.input";
import { Task } from "./entities/task.entity";

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly TaskRepository: Repository<Task>
  ) {}

  async create(task: CreateTaskInput): Promise<Task> {
    const newTask = this.TaskRepository.create(task);
    return await this.TaskRepository.save(newTask);
  }

  async update(id: number, task: UpdateTaskInput): Promise<Task> {
    const updatedTask = await this.TaskRepository.preload({ id, ...task });
    return await this.TaskRepository.save(updatedTask);
  }

  async findOne(id: number): Promise<Task> {
    return await this.TaskRepository.findOneOrFail(id);
  }

  async findAll(): Promise<Task[]> {
    return await this.TaskRepository.find();
  }

  async delete(id: number): Promise<Task> {
    const task = await this.TaskRepository.findOne(id);
    return await this.TaskRepository.softRemove(task);
  }
}
