/** @format */

import { INestApplication } from "@nestjs/common/interfaces/nest-application.interface";
import { Repository, getConnection } from "typeorm";
import { testSetup } from "../../testUtils/setup";
import { Task } from "../entities/task.entity";
import { TaskService } from "../task.service";

describe("TaskService", () => {
  let service: TaskService;
  let repository: Repository<Task>;
  let testapp: INestApplication;

  const taskOne = {
    name: "task one",
    description: "this is the first task",
  };

  const taskTwo = {
    name: "task two",
    description: "this is the second task",
  };

  beforeEach(async () => {
    const { moduleFixture, app } = await testSetup();
    testapp = app;
    service = moduleFixture.get<TaskService>(TaskService);
    repository = moduleFixture.get("TaskRepository");
  });

  afterEach(async () => {
                                                // if (service) {
                                            await repository.query(`DELETE FROM  task;`);
                                            // await getConnection().synchronize(true);
                                            // close database connections
                                            await testapp.close();
                                                // }
                                              });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("it should create a task", async () => {
    const createdTask = await service.create(taskOne);

    expect(createdTask).toEqual({
      id: expect.any(Number),
      ...createdTask,
      deletedAt: null,
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });

    expect(createdTask.createdAt).toEqual(createdTask.updatedAt);
  });

  it("it should update a task", async () => {
    const createdTask = await service.create(taskOne);
    const updatedTask = await service.update(createdTask.id, { name: "Updated task" });

    expect(updatedTask).toEqual({
      id: expect.any(Number),
      ...createdTask,
      ...updatedTask,
      deletedAt: null,
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });

    expect(createdTask.updatedAt).not.toEqual(updatedTask.updatedAt);
  });

  it("it should find a task", async () => {
    const createdTask = await service.create(taskOne);
    const foundTask = await service.findOne(createdTask.id);

    expect(foundTask).toEqual(createdTask);
  });

  it("it should find all tasks", async () => {
    const createdTaskOne = await service.create(taskOne);
    const createdTaskTwo = await service.create(taskTwo);
    const allTasks = await service.findAll();

    expect(allTasks).toEqual([createdTaskOne, createdTaskTwo]);
  });

  it("it should delete a given task", async () => {
    const createdTask = await service.create(taskOne);
    const deletedTask = await service.delete(createdTask.id);

    const allTasks = await service.findAll();

    expect(deletedTask).toEqual(createdTask);
    expect(allTasks).toEqual([]);
    await expect(service.findOne(createdTask.id)).rejects.toThrow(
      `Could not find any entity of type "Task" matching: ${createdTask.id}`
    );
  });
});
