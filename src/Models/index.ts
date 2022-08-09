export enum CommonQueryKeys {
  FINDBYNAME = "findbyname",
  FINDBYID = "findByID",
}

interface StorySummary {
  resourceURI: string;
  name: string;
  type: string;
}

interface SeriesSummary {
  resourceURI: string;
  name: string;
}

interface SeriesList {
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesSummary[];
}

interface StorySummary {
  resourceURI: string;
  name: string;
  type: string;
}

interface StoryList {
  available: number;
  returned: number;
  collectionURI: string;
  items: StorySummary[];
}

interface EventList {
  available: number;
  returned: number;
  collectionURI: string;
  items: StorySummary[];
}

export interface Results {
  thumbnail: {
    extension: string;
    path: string;
  };
  events?: EventList;
  series?: SeriesList;
  stories?: StoryList;
  name: string;
  description?: string;
  id: string;
}

export interface DataResult {
  data: {
    total: number;
    results: Results[];
  };
}

export interface EventSeriesAndStories extends DataResult {
  data: {
    total: number;
    results: Results[];
  };
}
