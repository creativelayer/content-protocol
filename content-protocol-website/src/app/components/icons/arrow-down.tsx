
interface ArrowDownProps {
  className?: string
}

export default function ArrowDown ({ className }: ArrowDownProps) {
  return (
    <svg width="24" height="86" viewBox="0 0 24 86" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10.9393 85.0607C11.5251 85.6464 12.4749 85.6464 13.0607 85.0607L22.6066 75.5147C23.1924 74.9289 23.1924 73.9792 22.6066 73.3934C22.0208 72.8076 21.0711 72.8076 20.4853 73.3934L12 81.8787L3.51472 73.3934C2.92893 72.8076 1.97918 72.8076 1.3934 73.3934C0.807608 73.9792 0.807608 74.9289 1.39339 75.5147L10.9393 85.0607ZM10.5 -6.55668e-08L10.5 84L13.5 84L13.5 6.55668e-08L10.5 -6.55668e-08Z" fill="black"/>
    </svg>
  )
}
