import React, { useState } from 'react'
import './Footer.css'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <footer 
      className={`footer ${isVisible ? 'visible' : ''}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="footer-container">
        <div className="footer-bottom">
          <p>&copy; Schacker Kevin Leonardo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}