import { Source } from '../classes/Source';
import { IDocument } from './IDocument';

export interface IArticle extends IDocument {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Pick<Source, 'id' | 'name'>;
    title: string;
    url: string;
    urlToImage: string;
}
