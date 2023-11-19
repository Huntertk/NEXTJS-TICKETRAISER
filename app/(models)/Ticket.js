import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise


const ticketSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    category:{
        type:String
    },
    priority:{
        type:Number
    },
    progress:{
        type:Number
    },
    status:{
        type:String
    },
    active:{
        type:Boolean
    },

}, {timestamps: true})


const ticket = mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema)

export default ticket