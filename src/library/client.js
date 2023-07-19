import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Keys from "./configKeys.json";

export const client = createClient({
  projectId: Keys[0].sanityProjectId,
  dataset: "production",
  apiVersion: "2023-07-17",
  useCdn: true,
  token: Keys[0].sanityToken,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
