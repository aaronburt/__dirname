import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * @description Return the directory name of a path. Similar to the Unix dirname command.
 * @param metaUrl use import.meta.url 
 * @returns dirname of path
 */
export const __dirname = (metaUrl: string): string => {
    const __filename = fileURLToPath(metaUrl);
    return dirname(__filename);
};

/**
 * @description This function ensures the correct decodings of percent-encoded characters as well as ensuring a cross-platform valid absolute path string.
 * @param metaUrl use import.meta.url 
 * @returns filename of path 
 */
export const __filename = (metaUrl: string): string => {
    const __filename = fileURLToPath(metaUrl);
    return __filename;
}
