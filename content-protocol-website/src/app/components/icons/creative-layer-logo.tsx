interface CreativeLayerLogoProps {
  className?: string;
}

export default function CreativeLayerLogo ({ className }: CreativeLayerLogoProps) {
  return (
    <svg className={className} width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.3636 14.9138H20.7802L28.9719 6.87463L26.279 4.23183L18.0873 12.271V0.90329H14.2763V12.271L6.08464 4.23183L3.3917 6.87463L11.5834 14.9138H0V18.6538H11.5834L3.3917 26.6929L6.08464 29.3357L14.2763 21.2966V33.1918H18.0873V21.2966L26.279 29.3357L28.9719 26.6929L20.7802 18.6538H32.3636V14.9138Z" fill="black"/>
      <path d="M18.1088 14.8083H14.2764V18.5694H18.1088V14.8083Z" fill="white"/>
    </svg>
  )
}
