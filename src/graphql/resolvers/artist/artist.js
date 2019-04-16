import Artist from '../../../models/Artist';

export default {
    Query: {
        artist: (root, args) => {
            return new Promise((resolve, reject) => {
                Artist.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            })
        },
        artists: (root, args) => {
            return new Promise((resolve, reject) => {
                Artist.find(args).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            })
        },
    },
    Mutation: {
        addArtist: (root, { bio, image, name, playcount, url }) => {
            const newArtist = new Artist({bio, image, name, playcount, url });

            return new Promise((resolve, reject) => {
                newArtist.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        editArtist: (root, { _id, bio, image, name, playcount, url }) => {
            return new Promise((resolve, reject) => {
                Artist.findOneAndUpdate({ _id }, { $set: { bio, image, name, playcount, url } })
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    })
            });
        },
        deleteArtist: (root, { _id }) => {
            return new Promise((resolve, reject) => {
                Artist.findOneAndRemove({ _id }).exec((err, res) => {
                    err ? reject(err) : resolve(err);
                });
            });
        },

    }
}