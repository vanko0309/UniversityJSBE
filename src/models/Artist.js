import mongoose, { mongo } from 'mongoose';
import Image from './Image';

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    bio: {
        type: String,
    },
    image: [Image.schema],
    mbid: {
        type: String,
    },
    name: {
        type: String,
    },
    playcount: {
        type: String,
    },
    url: {
        type: String,
    },
});

const Artist = mongoose.model("Artist", ArtistSchema);
export default Artist;