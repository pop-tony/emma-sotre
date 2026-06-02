import mongoose from "mongoose";

const ordersShema = new mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
    status: {type: String, default: "enquirery sent"},
},{timestamps: true},)

const consultModel = mongoose.models.emmaconsult || mongoose.model('emmaconsult', ordersShema);

export default consultModel;