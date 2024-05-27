import { Category, Honor } from '../../types/index.js';
export declare const getPointCategories: (realm: string, ranked: boolean) => Promise<Category[]>;
export declare const getHonors: (type?: string) => Promise<Honor[]>;
