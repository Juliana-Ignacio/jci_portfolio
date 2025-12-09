import React from 'react'
import DataAnalyticsEssentials from './DataAnalyticsEssentials.jpg'
import NetworkSupportandSecurity from './NetworkSupportandSecurity.jpg'
import IntrotoDataScience from './IntrotoDataScience.jpg'

const certificates = [
  {
    id: 1,
    title: 'Data Analytics Essentials',
    description: 'A certification earned for completing the Data Analytics Essentials course.',
    image: DataAnalyticsEssentials,
    link: 'https://www.credly.com/badges/4648c576-a5f4-45cb-a3a7-4bcc88d2f60c/public_url'
  },
  {
    id: 2,
    title: 'Network Support and Security',
    description: 'Certification for completing Network Support and Security course.',
    image: NetworkSupportandSecurity,
    link: 'https://www.credly.com/badges/ec9d72d4-a828-40a5-91dd-911188c884cc/public_url'
  },
  {
    id: 3,
    title: 'Introduction to Data Science',
    description: 'Certificate awarded for Introduction to Data Science course completion.',
    image: IntrotoDataScience,
    link: 'https://www.credly.com/badges/e5a0996b-1608-4fc5-87c8-622d5c338c6d/public_url'
  },
    {
    id: 4,
    title: 'JavaScript Essentials 2',
    description: 'A certification erned for completing the JavaScript Essentials 2',
    image: IntrotoDataScience,
    link: 'https://www.credly.com/badges/77bfc6ed-1b1c-44f7-9270-47a053802dae/public_url'
  }
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-5">
      <h2 className="h3 mb-4">Certificates</h2>

      <div className="row g-3">
        {certificates.map(cert => (
          <div key={cert.id} className="col-md-4">
            <div className="card h-100 shadow-sm tech-card">

              {/* Clicking the image can also open the Credly page */}
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
                />
              </a>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{cert.title}</h5>

                <p className="card-text flex-grow-1">{cert.description}</p>

                <div className="mt-3">
                  <a
                    className="btn btn-outline-primary"
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
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
