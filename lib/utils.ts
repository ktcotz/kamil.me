import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TranslationKey } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function safeTranslateTyped(
  t: (key: TranslationKey) => string,
  key: string,
): string {
  try {
    return t(key as TranslationKey);
  } catch {
    return key;
  }
}
