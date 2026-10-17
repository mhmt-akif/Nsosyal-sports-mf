// Stiller burada import edilir ki host'a (nsosyal) da gitsin
import { useState } from 'react'
import { NscoreHeader } from './app/NscoreHeader'
import { SportTabs } from './app/SportTabs'
import { LiveMatches } from './features/matches/components/LiveMatches'
import './styles/nscore.css'
import type { Day, Sport } from './types'

function App() {
  // Seçili gün ve spor burada durur; maç verisi gelince bölümler bunlara göre süzülecek
  const [day, setDay] = useState<Day>('today')
  const [sport, setSport] = useState<Sport>('football')

  return (
    <section className="flex flex-col gap-6 p-6">
      {/* <h1>Burada score kısmı gözükecek</h1> */}
      {/* Şimdilik deneme verisi */}
      <NscoreHeader value={day} onChange={setDay} liveCount={5} />

      <SportTabs value={sport} onChange={setSport} count={{ football: 3, basketball: 1, volleyball: 1 }} />

      <LiveMatches
        league="Trendyol Süper Lig"
        clock="67'"
        isLive
        home={{ id: 'gs', name: 'Galatasaray', short: 'GS', color: '#a90432' }}
        away={{ id: 'fb', name: 'Fenerbahçe', short: 'FB', color: '#0b2a6b' }}
        score={{ home: 2, away: 1 }}
        possession={{ home: 54, away: 46 }}
      />
    </section>
  )
}

export default App
