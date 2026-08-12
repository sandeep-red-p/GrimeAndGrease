import { useState, type FormEvent } from 'react'

import heroCar from '../assets/contact/hero-car.png'

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', car: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: keyof typeof form) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [field]: event.target.value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0ACar: ${form.car}%0A%0A${form.message}`
    window.location.href = `mailto:contact@grimeandgrease.example?subject=${encodeURIComponent(
      'Website enquiry',
    )}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section className="contact-hero">
      <img
        className="contact-hero-image"
        src={heroCar}
        alt="A vehicle raised on a lift at Grime & Grease Garage"
      />
      <div className="contact-panel">
        <h1>
          Have questions?
          <br />
          Get in touch!
        </h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange('name')}
            />
          </label>
          <label>
            Phone
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange('phone')}
            />
          </label>
          <label>
            Car
            <input
              type="text"
              name="car"
              value={form.car}
              onChange={handleChange('car')}
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange('message')}
            />
          </label>
          <button type="submit" className="btn-submit">
            Submit
          </button>
          {submitted && (
            <p className="contact-confirmation" role="status">
              Thanks — your email client should be open with your message
              ready to send.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
