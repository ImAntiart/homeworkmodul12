import { IArticle } from './IArticle';
import { ISource } from './ISource';

export interface IResponsePortal {
    status: string;
    totalResults: number;
    articles: IArticle[] | [];
    sources: ISource[];
}

export type DataForNews = Pick<IResponsePortal, 'status' | 'totalResults' | 'articles'>;

export type DataForSource = Pick<IResponsePortal, 'status' | 'sources'>;
