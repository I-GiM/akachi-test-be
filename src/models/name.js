import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true
  }
})

export default mongoose.model('users', userSchema)