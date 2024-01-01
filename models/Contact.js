import mongoose from "mongoose"; //ODM Object Document Mapper

const contactSchema = new mongoose.Schema({
    
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    message: {
        type: String
    },
}, {
    timestamps: true,
})

const Contact = mongoose.model('Contact', contactSchema)

export default Contact