import {mergeResolvers} from 'merge-graphql-schemas';
import User from './user/';

const resolver = [User];

export default mergeResolvers(resolver);