import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            min:3,
            max:20,
            unique:true
        },
        email: {
            type: String,
            required: true,
            unique:true
        },
        password: {
            type: String,
            required: true,
            min:8,
        },
        profilePicture:{
            type: String,
            default:""
        },
        coverPicture:{
            type: String,
            default:""
        },
        subscribers:{
            type: Array,
            default:[]
        },
        subscribedUsers:{
            type: Array,
            default:[]
        },
        isAdmin:{
            type: Boolean,
            default: false
            
        }

    },
    { timestamps: true }
);

export default mongoose.model('User', UsersSchema);