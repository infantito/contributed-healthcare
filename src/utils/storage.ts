const storage = {
  set: (key: string, value: any): void =>
    localStorage.setItem(key, JSON.stringify(value)),
  get: (key: string): string => localStorage.getItem(key),
  remove: (key: string): void => localStorage.removeItem(key),
  clear: (): void => localStorage.clear(),
} as const

export default storage
