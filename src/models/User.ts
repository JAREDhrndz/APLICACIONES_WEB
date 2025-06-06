import { model, Schema, Document, Types } from "mongoose";
import bcrypt from 'bcrypt';

export { Types, Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    _id: Types.ObjectId;
    username: string;
    password: string;
    email: string;
    phone: string;
    role: string;
    status: boolean;
    createDate: Date;
    deleteDate: Date;
}

const userSchema = new Schema({
    name: { type: String, required: true },
    id: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true },
    status: { type: Boolean, default: true },
    createDate: { type: Date, default: Date.now(), required: true },
    deleteDate: { type: Date, default: null },
}, {});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

export const User = model<IUser>('User', userSchema, 'user');