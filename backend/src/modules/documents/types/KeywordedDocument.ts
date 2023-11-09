export type KeywordedDocument = {
  id: string;
  title: string;
  path: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  KeywordsDocuments: {
    keyword: {
      name: string;
    };
  }[];
  keywords: string[];
};
