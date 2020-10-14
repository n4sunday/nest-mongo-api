import * as mongoose from 'mongoose';

export const JobsSchema = new mongoose.Schema({
  title: String,
  salary: Number,
});
