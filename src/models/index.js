// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Foods } = initSchema(schema);

export {
  Foods
};