import { District } from '@speechanddebate/types';
export declare const getDistrict: (districtId: number) => Promise<import("../base.js").JSONResponse>;
export declare const getDistricts: (realm?: string, sort?: string, full?: boolean) => Promise<District[]>;
export declare const patchDistrict: (districtId: number, updates: Record<string, unknown>[]) => Promise<import("../base.js").JSONResponse>;
