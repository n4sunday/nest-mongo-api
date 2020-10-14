import { Injectable } from '@nestjs/common';
import { Jobs } from './interfaces/jobs.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class JobsService {
  constructor(@InjectModel('Job') private readonly jobModel: Model<Jobs>) {}

  async findAll(): Promise<Jobs> {
    return await this.jobModel.find();
  }

  async find(id: string): Promise<Jobs> {
    return await this.jobModel.findOne({ _id: id });
  }

  async create(job: Jobs): Promise<Jobs> {
    const newJob = new this.jobModel(job);
    return await newJob.save();
  }

  async update(id: string, job: Jobs): Promise<Jobs> {
    return await this.jobModel.findByIdAndUpdate(id, job, { new: true });
  }

  async delete(id: string): Promise<Jobs> {
    return await this.jobModel.findByIdAndRemove(id);
  }
}
