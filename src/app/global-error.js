'use client' // Error boundaries must be Client Components
 
export default function GlobalError({ error, reset }) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>اشتباهی شده !</h2>
        <button onClick={() => reset()}>تلاش مجدد</button>
      </body>
    </html>
  )
}