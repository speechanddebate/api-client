import { fetch } from '@speechanddebate/nsda-js-utils';
let config = {
    API_URL: 'http://localhost:10010/v2',
    RETRY_DELAY: 500,
};
export const initializeAPIClient = (userConfig) => {
    config = userConfig;
};
export let userId = null;
export let sessionToken = null;
const cookies = `; ${document.cookie}`;
let parts = cookies.split('; nsda_person_id=');
if (parts.length === 2) {
    userId = parseInt(parts.pop()?.split(';').shift() ?? '');
    if (Number.isNaN(userId))
        userId = null;
}
parts = cookies.split('; nsda_api_session_token=');
if (parts.length === 2) {
    sessionToken = parts.pop()?.split(';').shift() ?? '';
}
export const auth = btoa(`${userId}:${sessionToken}`);
export const defaultFetchOptions = {
    retryDelay: config.RETRY_DELAY,
    credentials: 'include',
    headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
    },
};
export const anonymousFetchOptions = {
    retryDelay: config.RETRY_DELAY,
    headers: {
        'Content-Type': 'application/json',
    },
};
export const fetchBase = async (path, options = defaultFetchOptions, body) => {
    const fetchOptions = {
        ...defaultFetchOptions,
        ...options,
        method: options.method ?? 'GET',
        maxRetries: options.maxRetries ??
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
        return response.json();
    }
    catch (err) {
        /* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */
        throw new Error(`Error while fetching: ${err}`);
    }
};
export const fetchBaseRaw = async (path, options = defaultFetchOptions, body) => {
    const fetchOptions = {
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
    }
    catch (err) {
        /* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */
        throw new Error(`Error while fetching: ${err}`);
    }
};
