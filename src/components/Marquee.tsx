import { marqueeItems } from '../data'

export default function Marquee() {
  const row = marqueeItems.map((item, i) => (
    <span key={i}>
      {item} <span className="dot">✦</span>
    </span>
  ))

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row}
        {row}
      </div>
    </div>
  )
}
