export interface ArticleItem {
  id: string;
  title: string;
  description: string;
  list: { title: string; description: string }[];
  finalPart: string;
}
