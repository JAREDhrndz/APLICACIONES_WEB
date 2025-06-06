import { model, Schema, Document, Types } from "mongoose"


export interface IProduct extends Document{
    name:string;
    _id:Types.ObjectId;
    price:number;
    status:boolean;
    description:string;
    stock:number;
}

const ProductSchema = new Schema<IProduct>({
    name: { 
        type: String,
        required: true },
    price: { 
        type: Number,
        required: true },
    status: { 
        type: Boolean, 
        default: true },
    description: { 
        type: String, 
        required: true },
    stock: { 
        type: Number,
         default: 0 }
}, {
    timestamps: true,
    versionKey: false
})

export const Product = model<IProduct>('Product', ProductSchema)