import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const getApiUrl = (path: string) => {
  return `${BASE_URL}${path}`;
};
