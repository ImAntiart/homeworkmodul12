import { IArticle } from '../interfaces/IArticle';
import { Source } from './Source';

export class Article implements IArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Pick<Source, 'id' | 'name'>;
  title: string;
  url: string;
  urlToImage: string;
  name: string;

  constructor(
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: Pick<Source, 'id' | 'name'>,
    title: string,
    url: string,
    urlToImage: string,
    name: string
  ) {
    this.author = author;
    this.content = content;
    this.description = description;
    this.publishedAt = publishedAt;
    this.source = source;
    this.title = title;
    this.url = url;
    this.urlToImage = urlToImage;
    this.name = name;
  }
}