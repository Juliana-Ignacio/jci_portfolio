import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer py-2 mt-3">
      <div className="container text-center small">
        <div style={{fontSize:'0.9rem'}}>© {new Date().getFullYear()} Jaycee — Crafted with ❤️</div>
        <div className="mt-2 d-flex justify-content-center align-items-center gap-2">
          <a className="social-badge small-badge" href="#" aria-label="GitHub" title="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.9 3.17 9.07 7.57 10.53.55.1.75-.24.75-.53 0-.27-.01-1-.01-1.96-3.08.67-3.73-.74-3.96-1.42-.13-.34-.7-1.42-1.2-1.71-.41-.23-1-.8-.01-.82.92-.02 1.58.85 1.8 1.2 1.05 1.78 2.72 1.27 3.38.97.1-.77.4-1.27.73-1.56-2.76-.31-5.66-1.38-5.66-6.13 0-1.35.47-2.46 1.24-3.33-.12-.3-.54-1.5.12-3.13 0 0 1.01-.32 3.3 1.26a11.3 11.3 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.28-1.58 3.29-1.26 3.29-1.26.66 1.63.24 2.83.12 3.13.77.87 1.24 1.98 1.24 3.33 0 4.76-2.9 5.82-5.66 6.13.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .29.2.64.76.53 4.4-1.46 7.56-5.63 7.56-10.53C23.25 5.48 18.27.5 12 .5z" fill="currentColor" />
            </svg>
          </a>

          <a className="social-badge small-badge" href="#" aria-label="LinkedIn" title="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.5h4.48V24H.24zM9.02 8.5h4.3v2.08h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.48v-7.28c0-1.73-.03-3.95-2.4-3.95-2.4 0-2.77 1.88-2.77 3.82V24H9.02V8.5z" fill="currentColor" />
            </svg>
          </a>

          <a className="social-badge small-badge" href="#" aria-label="Twitter" title="Twitter">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.15 12.15 0 0 1 3.15 4.6a4.28 4.28 0 0 0 1.32 5.72c-.65-.02-1.25-.2-1.78-.5v.05a4.28 4.28 0 0 0 3.44 4.19c-.46.13-.95.2-1.45.2-.36 0-.7-.03-1.04-.1a4.28 4.28 0 0 0 4 2.97A8.59 8.59 0 0 1 2 19.54a12.13 12.13 0 0 0 6.57 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.68 8.68 0 0 0 22.46 6z" fill="currentColor" />
            </svg>
          </a>
        </div>
        <div className="mt-2" style={{fontSize:'0.78rem', color:'rgba(17,17,17,0.6)'}}>Designed &amp; built by Chloe</div>
      </div>
    </footer>
  )
}
