import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    text: {
        type: String,
    },
    size: {
        type: String,
    },
});

const Image = mongoose.model("Image", ImageSchema);
export default Image;