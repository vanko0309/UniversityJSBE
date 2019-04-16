import mongoose, { mongo } from 'mongoose';
import Artist from './Artist';
import Image from './Image';

const Schema = mongoose.Schema;

const TrackSchema = new Schema({
        artist: {
            type: Artist.schema,
        },
        image: {
            type: [Image.schema],
        },
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

const Track = mongoose.model("Track", TrackSchema);
export default Track;