import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const AdminsSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: ['System Administrator', 'Event Administrator', 'Parish Secretary']
    },
    status: {
      type: String,
      enum: ['Active', 'InActive'],
      default: 'Active',
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { 
    timestamps: true
  }
);

AdminsSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

AdminsSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });

  const Admin = mongoose.model('Admins', AdminsSchema);

  export default Admin