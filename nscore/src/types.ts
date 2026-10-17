// NSCore'un ortak veri tipleri. Backend hazır olunca API cevapları bu şekle çevrilecek.

export type Sport = 'football' | 'basketball' | 'volleyball' | 'tennis' | 'f1'

export type Day = 'yesterday' | 'today' | 'tomorrow'

export interface Team {
  id: string
  name: string
  short: string // rozette yazan kısaltma: "GS", "FB"
  color: string // rozet zemini
}

export interface League {
  id: string
  name: string
  country: string
  sport: Sport
}

export type MatchStatus = 'live' | 'finished' | 'scheduled'

export interface Match {
  id: string
  league: League
  day: Day
  status: MatchStatus
  clock?: string // canlı maçta süre: "67'", "3. Çeyrek", "2. Set"
  kickoff: string // "20:00"
  home: Team
  away: Team
  score?: { home: number; away: number }
  possession?: { home: number; away: number } // topla oynama yüzdesi (sadece futbol)
  favorite?: boolean
}

export interface StandingRow {
  team: Team
  played: number
  goalDiff: number
  points: number
}

export interface Trend {
  id: string
  tag: string
  postCount: number
}

export type PostEmbed =
  | { kind: 'result'; match: Match } // maç sonucu kartı
  | { kind: 'event'; minute: string; text: string } // canlı olay satırı: "67' Gol — ..."

export interface SportPost {
  id: string
  author: { name: string; username: string }
  timeAgo: string
  text: string
  tag?: { label: string; tone: 'live' | 'info' }
  embed?: PostEmbed
  stats: { comments: number; reposts: number; likes: number }
}
