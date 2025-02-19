import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

/**
 * Combines multiple class names into a single string.
 * @param inputs The class names to be combined.
 * @returns The combined class names.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Converts a string to kebab case (slug).
 * @param string The string to be converted.
 * @returns The kebab-cased string.
 */
export function toKebabCase(string: string): string {
    return string
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-+)|(-+$)/g, '');
}