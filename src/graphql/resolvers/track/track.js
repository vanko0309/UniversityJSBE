import Track from '../../../models/Track';
import Image from '../../../models/Image';
import Artist from '../../../models/Artist';

export default {
    Query: {
        track: (root, args) => {
            return new Promise((resolve, reject) => {
                Track.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            })
        },
        tracks: (root, args) => {
            return new Promise((resolve, reject) => {
                Track.find(args).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            })
        },
    },
    Mutation: {
        addTrack: (root, { artist, image, name, playcount, url }) => {
            const newTrack = new Track({artist, image, name, playcount, url });

            return new Promise((resolve, reject) => {
                newTrack.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        editTrack: (root, { _id, artist, image, name, playcount, url }) => {
            return new Promise((resolve, reject) => {
                Track.findOneAndUpdate({ _id }, { $set: { artist, image, name, playcount, url } })
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    })
            });
        },
        deleteTrack: (root, { _id }) => {
            return new Promise((resolve, reject) => {
                Track.findOneAndRemove({ _id }).exec((err, res) => {
                    err ? reject(err) : resolve(err);
                });
            });
        },

    }

}