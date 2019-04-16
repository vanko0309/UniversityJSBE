export default `
    type Track {
        _id: String!,
        artist: Artist,
        image: Image,
        name: String,
        playcount: String,
        url: String
    }

    type Query {
        track(_id: String!): Track
        tracks: [Track]
    }

    type Mutation {
        addTrack(artist: ArtistInput, image: ImageInput, name: String, playcount: String, url: String) : Track
        editTrack(_id: String!) : Track
        deleteTrack(_id: String!) : Track
    }
`;