import React from 'react'

const sampleProjects = [
  {
    id: 1,
    title: 'Gourmet Table PH',
    description: 'Gourmet Table PH is a modern, fully responsive restaurant reservation system designed to mimic leading platforms like OpenTable. Built entirely with HTML, CSS, and JavaScript, this project showcases front-end development skills, including UI/UX design, dynamic DOM manipulation, and state management without relying on backend technologies.',
    tags: ['JavaScript', 'CSS', 'HTML',],
    link: 'http://127.0.0.1:5500/crud-jci/crud.html'
  },
  {
    id: 2,
    title: 'New Project',
    description: 'Another example project to show layout. Replace with your own.',
    tags: ['HTML', 'CSS'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <h2 className="h3 mb-4">Projects</h2>
      <div className="row g-3">
        {sampleProjects.map(p => (
          <div key={p.id} className="col-md-4">
            <div className="card h-100 shadow-sm tech-card">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text flex-grow-1">{p.description || p.desc}</p>
                <div className="mt-3">
                  {Array.isArray(p.tags) ? (
                    p.tags.map(t => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))
                  ) : (
                    <>
                      <span className="tech-badge">React</span>
                      <span className="tech-badge" style={{background:'rgba(0,0,0,0.06)',color:'#111'}}>UI</span>
                    </>
                  )}
                </div>
                <div className="mt-3">
                  <a
                    className="btn btn-outline-primary"
                    href={p.link || p.url || '#'}
                    {...((p.link || p.url) && (p.link || p.url) !== '#' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
