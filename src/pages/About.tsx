import { Link } from 'react-router-dom'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import usePageMeta from '../hooks/usePageMeta'

const strengths = [
  {
    title: 'Engineering, not just supply',
    body: 'Site assessments, electrical engineering and grid connection design are done in-house, before any equipment is ordered.',
  },
  {
    title: 'Deployment across four segments',
    body: 'Residential, commercial, municipal and highway corridors, each with its own supply constraints, usage pattern and commercial model.',
  },
  {
    title: 'Operation after handover',
    body: 'Charging assets need monitoring, updates and maintenance to stay available. We stay involved once the station is live.',
  },
]

const impact = [
  {
    title: 'Reduced carbon emissions',
    body: 'Electric kilometres, increasingly powered by renewable generation on site.',
  },
  {
    title: 'Improved air quality',
    body: 'No tailpipe emissions where people live, work and walk.',
  },
  {
    title: 'Renewable integration',
    body: 'Flexible charging load is an ideal match for solar generation and storage.',
  },
  {
    title: 'Sustainable transport',
    body: 'Lower running costs per kilometre for households, businesses and fleets.',
  },
]

export default function About() {
  usePageMeta(
    'About | EV Energy Solutions',
    'EV Energy Solutions is a South African clean-technology company based in Pretoria, building and operating EV charging infrastructure and energy storage, in partnership with WAGA Motion Limited.',
  )

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="crumb">
            <Link to="/">Home</Link> / About
          </p>
          <h1>Bridging electric mobility and grid resilience</h1>
          <p className="lead">
            EV Energy Solutions is a South African clean-technology company dedicated to the
            construction, deployment and operation of robust EV charging infrastructure and
            intelligent energy storage. We are based in Pretoria and work across Southern Africa.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">Why we exist</p>
            <h2>Adoption is running ahead of infrastructure</h2>
            <p>
              More electric vehicles arrive every year, but the charging and the grid behind it have
              to keep pace. That gap is the whole point of the company: to put reliable,
              well-engineered charging in place, and to do it in a way the local network can support.
            </p>
            <p>
              So we treat every project as an energy project first. Understand the supply, use the
              capacity that already exists, add generation or storage where it pays for itself, and
              only then choose the hardware.
            </p>
          </Reveal>
          <Reveal className="split__media">
            <img
              src="/assets/img/bay.png"
              alt="Electric vehicles charging side by side in a dedicated charging bay"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="section section--surface">
        <div className="wrap">
          <SectionHead
            split
            eyebrow="What we bring"
            title="Turnkey means one accountable partner"
            body="Equipment supply on its own leaves the hard parts with the client: the supply, the compliance and the uptime. We keep them."
          />
          <div className="grid grid--3">
            {strengths.map((item, i) => (
              <Reveal as="article" className="panel panel--hover" key={item.title}>
                <span className="panel__index">{`0${i + 1}`}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="partnership" style={{ scrollMarginTop: 80 }}>
        <div className="wrap split split--media-first">
          <Reveal className="split__media">
            <img
              src="/assets/img/hub.png"
              alt="Charging hub with a power cabinet feeding a row of charging dispensers"
              loading="lazy"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow">Strategic partnership</p>
            <h2>WAGA Motion Limited</h2>
            <p>
              A cornerstone of our operations is the strategic partnership with WAGA Motion Limited,
              our primary equipment supplier and hardware co-developer.
            </p>
            <p>
              The alliance lets us deliver world-class, ISO/IEC-compliant smart EV charging technology
              across Southern Africa. WAGA Motion contributes proven manufacturing precision and an
              extensive product catalogue; we contribute local expertise in deployment, installation
              and operations.
            </p>
            <ul className="tick-list">
              <li>Hardware co-developed rather than simply resold</li>
              <li>Certified equipment: CE, CB and UKCA, to IEC 61851</li>
              <li>Open OCPP 1.6J / 2.0.1 software, so networks stay portable</li>
              <li>A single supply chain behind everything we install</li>
            </ul>
            <p style={{ marginTop: 20 }}>
              <Link className="arrow-link" to="/chargers">
                See the equipment range
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--surface">
        <div className="wrap">
          <SectionHead
            split
            eyebrow="The wider case"
            title="What electrified transport actually delivers"
            body="The reasons our clients give for moving, in the order they usually give them."
          />
          <div className="grid grid--4">
            {impact.map((item) => (
              <Reveal as="article" className="card card--hover" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Work with us"
        body="Whether it is one bay at home or a corridor of fast-charging hubs, the conversation starts the same way, with your site and your supply."
        action="Get in touch"
      />
    </>
  )
}
