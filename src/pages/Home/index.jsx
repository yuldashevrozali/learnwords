import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div><h1>Assalomu alaykum, saytimizga xush kelibsiz! Bu sayt siz uchun foydali bo'ladi deb o'ylayman.</h1>
    <div>
      <button>
        <Link to="/newwords">So'z kiritish</Link>
      </button>
      <button>
        <Link to="/repeatwords">Yodlagan so'zimni takrorlash</Link>
      </button>
    </div></div>
  )
}
