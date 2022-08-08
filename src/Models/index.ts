export enum Filters {
  NAME = "name",
}

export interface Miau {
  thumbnail: {
    extension: string;
    path: string;
  };
  name: string;
  id: string;
}

export interface DataFummy {
  data: {
    total: number;
    results: Miau[];
  };
}
