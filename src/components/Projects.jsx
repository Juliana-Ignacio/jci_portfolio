import React from 'react'

const sampleProjects = [
  {
    id: 1,
    title: 'Gourmet Table PHn (CRUD App)',
    description: 'Username: admin    Password: admin123',
    tags: ['JavaScript', 'CSS', 'HTML'],
    link: 'https://crud-new-ten.vercel.app'
  },
  {
    id: 2,
    title: 'One Smile Dental Clinic (Snack)',
    description: 'An online booking system for One Smile Dental clinic..',
    tags: ['HTML', 'CSS'],
    link: 'https://appetize.io/embed/b_clf3yzcnyyg5af25nlkyh7d7ty?device=pixel9pro&launchUrl=exp%3A%2F%2Fu.expo.dev%2F933fd9c0-1666-11e7-afca-d980795c5824%3Fruntime-version%3Dexposdk%253A54.0.0%26channel-name%3Dproduction%26snack%3D%2540juliana-ignacio%252F747317%26snack-channel%3DKTh8ApvOwe&params=%7B%22EXDevMenuDisableAutoLaunch%22%3Atrue%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D&appearance=light&deviceColor=black&scale=auto&orientation=portrait&centered=both'
  },
  {
    id: 3,
    title: 'Recipe Sharing Website (Web Platform',
    description: 'A user-friendly recipe sharing platform that has a database using appwrite where users can browse, upload, and save their favorite dishes.',
    tags: ['React', 'JavaScript', 'CSS'],
    link: 'https://recipe-app-umber-five.vercel.app'
  },
  {
    id: 4,
    title: 'Recipe Sharing Mobile App (Snack)',
    description: 'A mobile app for sharing and discovering recipes. Users can browse, upload, and save their favorite recipes directly from their phones. Built with React Native, this project highlights mobile UI design, responsive layouts, and interactive user experience.',
    tags: ['React Native', 'JavaScript', 'Mobile'],
    link: 'https://appetize.io/embed/b_clf3yzcnyyg5af25nlkyh7d7ty?device=pixel9pro&launchUrl=exp%3A%2F%2Fu.expo.dev%2F933fd9c0-1666-11e7-afca-d980795c5824%3Fruntime-version%3Dexposdk%253A54.0.0%26channel-name%3Dproduction%26snack%3D%2540juliana-ignacio%252F6971cf%26snack-channel%3DkOLPIo4VRc&params=%7B%22EXDevMenuDisableAutoLaunch%22%3Atrue%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D&appearance=light&deviceColor=black&scale=auto&orientation=portrait&centered=both'
  }
];


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
