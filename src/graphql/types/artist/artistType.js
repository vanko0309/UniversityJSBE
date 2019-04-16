export default `
    input ArtistInput {
        bio: String,
        image: ImageInput,
        name: String,
        url: String,
        playcount: String
    }

    type Artist {
        _id: String!,
        bio: String,
        image: Image,
        name: String,
        url: String,
        playcount: String
    }

    type Query {
        artist(_id: String!): Artist
        artists: [Artist]
    }

    type Mutation {
        addArtist(bio: String, image: ImageInput, name: String, playcount: String, url: String): Artist
        editArtist(_id: String!) : Artist
        deleteArtist(_id: String!) : Artist
    }
`;