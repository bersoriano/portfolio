import { type SchemaTypeDefinition } from "sanity";

import { portfolio } from "./portfolio";
import { post } from "./post";

export const schemaTypes = [portfolio, post];
export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};
