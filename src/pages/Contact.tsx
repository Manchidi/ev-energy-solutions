import { useRef, useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import { MailIcon, PhoneIcon, PinIcon, GlobeIcon } from '../components/Icons'
import { site } from '../data/site'
import { products, type Family } from '../data/products'
import usePageMeta from '../hooks/usePageMeta'

const enquiryTypes = [
  'Home or estate charging',
  'Commercial / workplace charging',
  'Retail or destination charging',
  'Municipal or public charging',
  'Fleet depot charging',
  'Highway fast-charging hub',
  'Solar PV and / or battery storage',
  'Something else',
]

const faqs = [
  {
    q: 'Do I need to upgrade my electrical supply?',
    a: 'Often not. Dynamic Load Balancing measures what the building is drawing and shares the spare capacity between charge points, which is usually enough to avoid a new connection or transformer. The site assessment confirms it either way.',
  },
  {
    q: 'Which connector do South African EVs use?',
    a: 'AC charging is Type 2 (IEC 62196-2) and DC fast charging is normally CCS2. Our DC chargers can be supplied with CCS2, CHAdeMO, or both, so older CHAdeMO vehicles are still covered.',
  },
  {
    q: 'Can I charge for the electricity I supply?',
    a: 'Yes. Sessions are started by RFID card, mobile app or an optional card terminal, and the cloud platform handles tariffs and billing. The larger DC models include an MID-standard energy meter for accurate, defensible billing.',
  },
  {
    q: 'How fast will a car actually charge?',
    a: "The charger sets the ceiling; the vehicle sets the rate. An AC session is limited by the car's on-board charger, often 7 or 11 kW even on a 22 kW point. DC charging bypasses it, so the vehicle's battery state and thermal limits become the constraint.",
  },
  {
    q: 'Do you support solar and battery storage?',
    a: 'Yes. Solar PV and battery energy storage are part of our smart energy management work, for lower running costs and for keeping chargers available during grid interruptions.',
  },
  {
    q: 'Will the chargers work with another software platform later?',
    a: 'They should. Every unit speaks OCPP 1.6J and is upgradeable to OCPP 2.0.1, which is an open standard specifically so charge points are not locked to one back office.',
  },
]

export default function Contact() {
  usePageMeta(
    'Contact | EV Energy Solutions',
    'Talk to EV Energy Solutions about EV charging for a home, business, municipality, fleet or highway site. Based in Pretoria, South Africa.',
  )

  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<string | null>(null)
  const [searchParams] = useSearchParams()
  const charger = products.find((product) => product.id === searchParams.get('charger'))
  const requestedFamily = searchParams.get('family') as Family | null
  const enquiryType =
    charger?.family === 'ac' || requestedFamily === 'ac'
      ? 'Commercial / workplace charging'
      : charger?.family === 'dc' || requestedFamily === 'dc'
        ? 'Municipal or public charging'
        : charger?.family === 'ultra' || requestedFamily === 'ultra'
          ? 'Highway fast-charging hub'
          : enquiryTypes[0]
  const initialMessage = charger
    ? `I would like a quote for the ${charger.title} (${charger.model}).\n\nSite details:\n`
    : ''

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    // With an endpoint configured the browser posts the form as normal.
    if (site.formEndpoint) return

    event.preventDefault()
    if (!formRef.current?.checkValidity()) {
      formRef.current?.reportValidity()
      return
    }
    setStatus(
      'Thanks, your details look good. This form still needs to be connected to an inbox before messages are delivered.',
    )
  }

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="crumb">
            <Link to="/">Home</Link> / Contact
          </p>
          <h1>Let&rsquo;s talk about your site</h1>
          <p className="lead">
            The more you can tell us about the location, the available electrical supply and how long
            vehicles will be parked, the more useful our first reply will be.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-layout">
          <Reveal className="card" id="enquiry" style={{ scrollMarginTop: 100 }}>
            <h2 style={{ fontSize: '1.5rem' }}>Send an enquiry</h2>

            <form
              ref={formRef}
              onSubmit={onSubmit}
              action={site.formEndpoint || undefined}
              method={site.formEndpoint ? 'post' : undefined}
              noValidate
            >
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Your name</label>
                  <input id="name" name="name" type="text" autoComplete="name" required />
                </div>
                <div className="field">
                  <label htmlFor="company">
                    Company <span className="hint">(optional)</span>
                  </label>
                  <input id="company" name="company" type="text" autoComplete="organization" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" required />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" />
                </div>
                <div className="field field--full">
                  <label htmlFor="type">What do you need?</label>
                  <select id="type" name="type" defaultValue={enquiryType}>
                    {enquiryTypes.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="field field--full">
                  <label htmlFor="location">Site location</label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Town or city, and province"
                  />
                </div>
                <div className="field field--full">
                  <label htmlFor="message">
                    Details <span className="hint">(bays, supply size, vehicles, timeline)</span>
                  </label>
                  <textarea id="message" name="message" defaultValue={initialMessage} required />
                </div>
              </div>

              <div className="btn-row" style={{ marginTop: 22 }}>
                <button className="btn btn--primary" type="submit">
                  Send enquiry
                </button>
              </div>

              {status && (
                <p className="form-status" role="status">
                  {status}
                </p>
              )}
              <p className="form-note">We use your details only to respond to this enquiry.</p>
            </form>
          </Reveal>

          <Reveal as="aside">
            <h2 style={{ fontSize: '1.35rem' }}>Contact details</h2>
            <ul className="info-list">
              <li>
                <span className="icon">
                  <PinIcon />
                </span>
                <div>
                  <b>Based in</b>
                  <span>{site.city}</span>
                </div>
              </li>
              <li>
                <span className="icon">
                  <GlobeIcon />
                </span>
                <div>
                  <b>Website</b>
                  <a href={site.websiteUrl} target="_blank" rel="noreferrer">
                    {site.website}
                  </a>
                </div>
              </li>
              <li>
                <span className="icon">
                  <MailIcon />
                </span>
                <div>
                  <b>Email</b>
                  {site.email ? (
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  ) : (
                    <span>[add email address]</span>
                  )}
                </div>
              </li>
              <li>
                <span className="icon">
                  <PhoneIcon />
                </span>
                <div>
                  <b>Phone</b>
                  {site.phone ? (
                    <a href={`tel:${site.phone.replace(/\s+/g, '')}`}>{site.phone}</a>
                  ) : (
                    <span>[add phone number]</span>
                  )}
                </div>
              </li>
            </ul>

            <div className="card" style={{ marginTop: 28 }}>
              <h3>What happens next</h3>
              <ul className="tick-list" style={{ marginTop: 12 }}>
                <li>We read your details and come back with questions if anything is missing</li>
                <li>A site assessment confirms the supply and layout</li>
                <li>You get a charger configuration, a layout and a quote for the work</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--surface">
        <div className="wrap">
          <SectionHead
            split
            eyebrow="Common questions"
            title="We’ve got answers"
            body="The questions that come up in almost every first conversation."
          />
          <Reveal className="faq">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}</summary>
                <div className="faq__body">{faq.a}</div>
              </details>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
