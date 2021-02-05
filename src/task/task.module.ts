
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "./entities/task.entity";
import { TaskService } from "./task.service";

@Module({
  imports: [TypeOrmModule.forFeature([Task]), ConfigModule],
  providers: [TaskService],
})
export class TaskModule {}
