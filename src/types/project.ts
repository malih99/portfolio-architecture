export type Project = {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  image: string;
  year: string | number;
  tags: string[];
  //optional
  description?: string;
  images?: string[];
};
