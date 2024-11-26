import mongoose, { Schema } from "mongoose";

// TypeScript interfaces for the User schema
export interface IUser {
  supabaseId: string;
  email: string;
  name: string;
  tin: string;
  passport: string;
  gender: string;
  msic: string;
  tax: string;
  country: string;
  state: string;
  city: string;
  address: string;
}

// Mongoose schema definition
const UserSchema: Schema = new Schema({
  supabaseId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  tin: { type: String, required: true },
  passport: { type: String, required: true },
  gender: { type: String, required: true },
  msic: { type: String, required: false },
  tax: { type: String, required: false },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
});

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
