import localforage from 'localforage'

const dbName = 'rimac'

export const storage = {
  set: (key: string, value: any): Promise<string> =>
    localforage.setItem(key, JSON.stringify(value)),
  get: (key: string): Promise<string> => localforage.getItem(key),
  remove: (key: string): Promise<void> => localforage.removeItem(key),
  clear: (): Promise<void> => localforage.clear(),
} as const

export const RimacDb = localforage.createInstance({
  name: dbName,
  storeName: 'rimac',
  description: 'Rimac Database',
})
