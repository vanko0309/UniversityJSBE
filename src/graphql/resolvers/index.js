import {mergeResolvers} from 'merge-graphql-schemas';

import User from './user/';
import Artist from './artist/artist';
import Track from './track/track';
import Image from './image/image';

const resolver = [User, Artist, Track, Image];

export default mergeResolvers(resolver);