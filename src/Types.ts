export interface Query {
  ApiVersion: string;
  ApiType: string;
  TopicId?: any;
  ToolId?: any;
  CategoryId?: any;
  PopulationId?: any;
  Keyword: string;
  Who?: any;
  Age?: any;
  Sex?: any;
  Pregnant?: any;
  TobaccoUse?: any;
  SexuallyActive?: any;
  Category?: any;
  Lang: string;
  Type?: any;
  ReturnType: string;
  Callback?: any;
  HealthfinderPage?: any;
  APiType: string;
}

export interface RelatedItem {
  Type: string;
  Id: string;
  Title: string;
  Url: string;
}

export interface RelatedItems {
  RelatedItem: RelatedItem[];
}

export interface Section {
  Title: string;
  Description: string;
  Content: string;
}

export interface Sections {
  section: Section[];
}

export interface Resource {
  Type: string;
  Id: string;
  Title: string;
  TranslationId: string;
  TranslationTitle: string;
  Categories: string;
  Populations: string;
  MyHFTitle: string;
  MyHFDescription: string;
  MyHFCategory: string;
  MyHFCategoryHeading: string;
  LastUpdate: string;
  ImageUrl: string;
  ImageAlt: string;
  AccessibleVersion: string;
  RelatedItems: RelatedItems;
  Sections: Sections;
  MoreInfoItems?: any;
  HealthfinderLogo: string;
  HealthfinderUrl: string;
}

export interface Resources {
  Resource: Resource[];
}

export interface Result {
  Error: string;
  Total: number;
  Query: Query;
  Language: string;
  Resources: Resources;
}

export interface TopicResponse {
  Result: Result;
}
