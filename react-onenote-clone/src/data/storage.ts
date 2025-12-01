import { Tote } from "./models";

const STORAGE_KEY = "totenotes_data";

export function loadData(): Tote[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
}

export function saveData(data: Tote[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}