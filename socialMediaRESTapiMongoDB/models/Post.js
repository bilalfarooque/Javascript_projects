import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
    {
        userId : {
            type : String,
            required : true
        },
        content : {
            type:String ,
        },
        img : {
            // data : Buffer,
            type : String
        },
        likes : {
            type : Array,
            default : []
        },
        comments : {
            type : Array,
            default : []
        }

    },
    { timestamps: true }
);

export default mongoose.model('Post', PostSchema);