import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const __dirname = (metaUrl: string = import.meta.url): string => {
    const __filename = fileURLToPath(metaUrl);
    return dirname(__filename);
};

export const __filename = (metaUrl: string = import.meta.url): string => {
    const __filename = fileURLToPath(metaUrl);
    return __filename;
}
