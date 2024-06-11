import { fetch, FetchOptions } from '@speechanddebate/nsda-js-utils';

let config = {
    API_URL: 'http://localhost:10010/v2',
    RETRY_DELAY: 500,
};

export const initializeAPIClient = (userConfig: {
    API_URL: string;
    RETRY_DELAY: number;
}) => {
    config = userConfig;
};

export let userId: number | null = null;
export let sessionToken: string | null = null;

const cookies = `; ${document.cookie}`;
let parts = cookies.split('; nsda_person_id=');
if (parts.length === 2) {
    userId = parseInt(parts.pop()?.split(';').shift() ?? '');
    if (Number.isNaN(userId)) userId = null;
}

parts = cookies.split('; nsda_api_session_token=');
if (parts.length === 2) {
    sessionToken = parts.pop()?.split(';').shift() ?? '';
}

export const auth = btoa(`${userId?.toString() ?? ''}:${sessionToken ?? ''}`);

export const defaultFetchOptions: FetchOptions = {
    retryDelay: config.RETRY_DELAY,
    credentials: 'include',
    headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
    },
};

export const anonymousFetchOptions: FetchOptions = {
    retryDelay: config.RETRY_DELAY,
    headers: {
        'Content-Type': 'application/json',
    },
};

export type JSONResponse = Record<
    string,
    string | Record<string, unknown> | Record<string, unknown>[]
>;

export type JSONBody = Record<string, unknown> | Record<string, unknown>[];

export const fetchBase = async <T = JSONResponse, U = JSONBody>(
    path: string,
    options: FetchOptions = defaultFetchOptions,
    body?: U,
): Promise<T> => {
    const fetchOptions: FetchOptions = {
        ...defaultFetchOptions,
        ...options,
        method: options.method ?? 'GET',
        maxRetries:
            options.maxRetries ??
            (options.method &&
                ['POST', 'PUT', 'DELETE'].includes(options.method))
                ? 1
                : 3,
        body: JSON.stringify(body ?? {}),
    };

    if (fetchOptions.method === 'GET') {
        delete fetchOptions.body;
    }

    // Return JSON body by default, since that's what most consumers need
    try {
        const response = await fetch(`${config.API_URL}/${path}`, fetchOptions);
        return response.json() as T;
    } catch (err) {
        /* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */
        throw new Error(`Error while fetching: ${err}`);
    }
};

export const fetchBaseRaw = async <T = JSONBody>(
    path: string,
    options: FetchOptions = defaultFetchOptions,
    body?: T,
): Promise<Response> => {
    const fetchOptions: FetchOptions = {
        ...defaultFetchOptions,
        ...options,
        method: options.method ?? 'GET',
        body: JSON.stringify(body ?? {}),
    };

    if (fetchOptions.method === 'GET') {
        delete fetchOptions.body;
    }

    try {
        return fetch(`${config.API_URL}/${path}`, fetchOptions);
    } catch (err) {
        /* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */
        throw new Error(`Error while fetching: ${err}`);
    }
};
