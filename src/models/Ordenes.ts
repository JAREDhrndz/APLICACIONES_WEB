import { model, Schema, Document, Types } from "mongoose";

export interface IOrder extends Document {
    user: Types.ObjectId;
    total: number;
    subtotal: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>({
    user: { 
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    total: { 
        type: Number,
        required: true,
        min: 0 
    },
    subtotal: { 
        type: Number,
        required: true,
        min: 0 
    },
    status: { 
        type: String,
        enum: ['pending', 'completed', 'cancelled', 'in_progress'],
        default: 'pending'
    }
}, {
    timestamps: { 
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    },
    versionKey: false
});

export const Order = model<IOrder>('Order', OrderSchema);