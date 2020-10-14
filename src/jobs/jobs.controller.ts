import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobDTO } from './dtos/jobs.dto';
import { Jobs } from './interfaces/jobs.interface';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  findAll(): Promise<Jobs> {
    return this.jobsService.findAll();
  }

  @Get(':id')
  find(@Param('id') id): Promise<Jobs> {
    return this.jobsService.find(id);
  }

  @Post()
  create(@Body() job: JobDTO): Promise<Jobs> {
    return this.jobsService.create(job);
  }

  @Put(':id')
  update(@Param('id') id, @Body() job: JobDTO): Promise<Jobs> {
    console.log('JOBXXX', job);

    return this.jobsService.update(id, job);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Jobs> {
    return this.jobsService.delete(id);
  }
}
