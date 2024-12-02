import { IDocument } from './IDocument';

export interface ISource extends IDocument {
    id: string;
    category: string;
    country: string;
    description: string;
    language: string;
    name: string;
    url: string;
}
