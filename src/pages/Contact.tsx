import { useEffect, useState } from 'react'

import heroCar from '../assets/contact/hero-car.webp'

const STATICFORMS_API_KEY = 'sf_880a02255fe645a1050f1477'

// Allows only digits, spaces, and +-() punctuation, with 7-15 digits overall (E.164 max).
function isValidPhone(value: string) {
  if (!/^[\d\s+()-]+$/.test(value)) return false
  const digits = value.replace(/\D/g, '')
  return /^\d{7,15}$/.test(digits)
}

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', car: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!submitted) return
    const timer = setTimeout(() => setSubmitted(false), 9000)
    return () => clearTimeout(timer)
  }, [submitted])

  const handleChange = (field: keyof typeof form) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [field]: event.target.value }))
  }

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(false)

    if (!isValidPhone(form.phone)) {
      setPhoneError(true)
      return
    }
    setPhoneError(false)

    setSubmitting(true)

    try {
      const response = await fetch('https://api.staticforms.dev/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apiKey: STATICFORMS_API_KEY,
          subject: 'Grime & Grease Garage website enquiry',
          name: form.name,
          phone: form.phone,
          car: form.car,
          message: form.message,
        }),
      })

      if (!response.ok) throw new Error('Submission failed')

      setForm({ name: '', phone: '', car: '', message: '' })
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
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
          <label className="contact-form-field--half">
            Name
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange('name')}
            />
          </label>
          <label className="contact-form-field--half">
            Phone
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={(event) => {
                handleChange('phone')(event)
                setPhoneError(false)
              }}
              aria-invalid={phoneError}
            />
            {phoneError && (
              <span className="contact-field-error">
                Enter a valid phone number.
              </span>
            )}
          </label>
          <label className="contact-form-field--half">
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
          <button type="submit" className="btn-submit" disabled={submitting}>
            {submitting ? 'Sending…' : 'Submit'}
          </button>
          {submitted && (
            <p className="contact-confirmation" role="status">
              Thanks — we've received your message and will get back to you
              soon.
            </p>
          )}
          {error && (
            <p className="contact-confirmation" role="status">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
