import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-5">
      <h2 className="h3 mb-3">Contact</h2>
      <p>Interested in working together? Send a message and I'll get back to you.</p>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" type="text" placeholder="Your name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" type="email" placeholder="you@example.com" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="Say hi..."></textarea>
        </div>
        <button className="btn btn-primary" type="submit">Send</button>
      </form>
    </section>
  )
}
