export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// Esto es para crear una interfaz pero sin un valor y sin repetir codigo

// opcion uno
// export type NonSensitiveDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

// opcion 2
export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
