import mongoose from 'mongoose';

const depositSchema = new mongoose.Schema({
    userId: {type:mongoose.Schema.Types.ObjectId,ref:'user',required:true },
    depositMethod: {type:String,required:true},
    depositAmount: {type:Number,required:true},
    depositStatus: {type:String,default:'pending'},
    transactionId: {type:Number,required:true},
    createdAt: {type:Date,default:Date.now},
})

const depositModel= mongoose.models.deposit || mongoose.model('deposit', depositSchema);
export default depositModel;
