import { Citation, CitationCategory, Update } from '@speechanddebate/types';
import { JSONResponse, fetchBase, anonymousFetchOptions } from '../base.js';

export const getCitations = (status: string) =>
    fetchBase<Citation[]>(`citations?status=${status}`);

export const postCitation = (
    memberId: number,
    categoryId: number,
    description: string,
    date: string,
) =>
    fetchBase<JSONResponse, Citation>(
        `members/${memberId.toString()}/citations`,
        { method: 'POST' },
        { category_id: categoryId, description, date },
    );

export const putCitations = (citations: Citation[]) =>
    fetchBase<JSONResponse, Citation[]>(
        `citations`,
        { method: 'PUT' },
        citations,
    );

export const patchCitation = (citationId: number, updates: Update[]) =>
    fetchBase<JSONResponse, Update[]>(
        `citations/${citationId.toString()}`,
        { method: 'PATCH' },
        updates,
    );

export const deleteCitation = (memberId: number, citationId: number) =>
    fetchBase(
        `members/${memberId.toString()}/citations/${citationId.toString()}`,
        { method: 'DELETE' },
    );

export const getCitationCategories = () =>
    fetchBase<CitationCategory[]>(
        `citations/categories`,
        anonymousFetchOptions,
    );
