import { type SchemaTypeDefinition } from "sanity";

import { portfolio } from "./portfolio";

export const schemaTypes = [portfolio];
export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};
