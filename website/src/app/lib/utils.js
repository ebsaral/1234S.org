import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getAge(year, month, day) {
  var d1 = new Date(year, month, day);
  var now = new Date();
  var d2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
  var diff = d2.getTime() - d1.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}
