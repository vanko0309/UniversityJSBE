import {mergeTypes} from 'merge-graphql-schemas';
import User from './user/';

const types = [User];

export default mergeTypes(types, {all: true});