import * as mongoose from 'mongoose';

export const usersSchema = new mongoose.Schema({
  id: Number,
  Name: String,
  LastName: String,
  Age: Number,
},
{
  versionKey: false,
});
