import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combine class names using clsx and tailwind-merge
 * This utility ensures Tailwind classes properly override each other
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
