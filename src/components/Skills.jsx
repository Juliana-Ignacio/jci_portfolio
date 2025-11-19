import React from 'react'

const techSkills = [
  { id: 1, name: 'React', pct: 90 },
  { id: 2, name: 'JavaScript', pct: 85 },
  { id: 3, name: 'HTML/CSS', pct: 95 },
  { id: 4, name: 'Accessibility', pct: 90 },
  { id: 5, name: 'Bootstrap', pct: 80 }
]

export default function Skills(){
  return (
    <section id="skills" className="py-5">
      <h2 className="h3 mb-4">Technical Skills</h2>
      <p className="text-muted">Core tools and technologies I use to build delightful experiences.</p>
      <div className="row g-3 mt-3">
        {techSkills.map(s => (
          <div key={s.id} className="col-md-6">
            <div className="card tech-card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">{s.name}</h5>
                  <span className="text-muted">{s.pct}%</span>
                </div>
                <div className="progress mt-2" style={{height: '10px'}}>
                  <div className="progress-bar" role="progressbar" style={{width: `${s.pct}%`, background: 'linear-gradient(90deg,var(--accent),var(--accent-2))'}} aria-valuenow={s.pct} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
