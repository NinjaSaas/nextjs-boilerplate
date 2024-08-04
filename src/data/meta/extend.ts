import type { Metadata } from "next";
import merge from "ts-deepmerge";

import { DEFAULT_METADATA } from "./default";

/**
 * Extended metadata types
 */
type SeoProps = Metadata & {
  url?: string | URL;
  image?: {
    url: string | URL;
    secureUrl?: string | URL;
    alt?: string;
    type?: string;
    width?: string | number;
    height?: string | number;
  };
};

/**
 * Helper method to deep merge the SEO params from a given page
 * with the default SEO params.
 *
 * This method also will use title and description in the OpenGraph and
 * Twitter metadata, if not set
 */
export function seo({ url, image, ...metadata }: SeoProps = {}): Metadata {
  const title = metadata.title ?? DEFAULT_METADATA.title;
  const description = metadata.description ?? DEFAULT_METADATA.description;

  metadata.openGraph = {
    title: title ?? undefined,
    description: description ?? undefined,
    ...metadata.openGraph,
  };

  metadata.twitter = {
    title: title ?? undefined,
    description: description ?? undefined,
    ...metadata.twitter,
  };

  if (url) {
    metadata.openGraph.url = url;
    metadata.alternates = {
      canonical: url,
      ...metadata.alternates,
    };
  }

  if (image) {
    metadata.openGraph.images = [image];
    metadata.twitter.images = [image];
  }

  return merge(DEFAULT_METADATA, metadata);
}
