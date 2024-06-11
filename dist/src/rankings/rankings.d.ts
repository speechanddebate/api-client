import { Ranking } from '@speechanddebate/types';
export declare const getRankings: (type?: string, district?: number | null, stateCode?: string | null, category?: number | null, realm?: string | null) => Promise<Ranking[]>;
