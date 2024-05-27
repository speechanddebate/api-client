import { FetchOptions } from '@speechanddebate/nsda-js-utils';
export declare const initializeAPIClient: (userConfig: {
    API_URL: string;
    RETRY_DELAY: number;
}) => void;
export declare let userId: number | null;
export declare let sessionToken: string | null;
export declare const auth: string;
export declare const defaultFetchOptions: FetchOptions;
export declare const anonymousFetchOptions: FetchOptions;
export type JSONResponse = Record<string, string | Record<string, unknown> | Record<string, unknown>[]>;
export type JSONBody = Record<string, unknown> | Record<string, unknown>[];
export declare const fetchBase: <T = JSONResponse, U = JSONBody>(path: string, options?: FetchOptions, body?: U) => Promise<T>;
export declare const fetchBaseRaw: (path: string, options?: FetchOptions, body?: Record<string, unknown> | Record<string, unknown>[]) => Promise<Response>;
