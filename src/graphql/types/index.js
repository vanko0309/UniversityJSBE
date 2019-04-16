import {mergeTypes} from 'merge-graphql-schemas';
import User from './user/';
import Artist from './artist/artistType';
import Track from './track/trackType';
import Image from './image/imageType';

const types = [User, Image, Track, Artist  ];

export default mergeTypes(types, {all: true});