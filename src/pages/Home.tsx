import { Link } from 'react-router-dom'
import Button from '../components/Button'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import StatBand from '../components/StatBand'
import { BoltIcon, BuildingIcon, GlobeIcon, HomeIcon, ShieldIcon, TruckIcon } from '../components/Icons'
import usePageMeta from '../hooks/usePageMeta'

const services = [
  {
    n: '01',
    title: 'Charging network infrastructure',
    body: 'Full site assessments, electrical engineering, grid connection design and the commissioning of AC and ultra-fast DC stations.',
  },
  {
    n: '02',
    title: 'Highway & fleet systems',
    body: 'Specialised highway fast-charging hubs and complete fleet electrification systems built around real duty cycles.',
  },
  {
    n: '03',
    title: 'Smart energy management',
    body: 'Integrated Dynamic Load Balancing to avoid grid upgrade costs, plus solar PV and battery energy storage for off-grid resilience.',
  },
  {
    n: '04',
    title: 'Software integration',
    body: 'Cloud management platforms compliant with OCPP 1.6J and 2.0.1, with mobile app and billing integration.',
  },
]

const hardware = [
  {
    title: 'AC 7-43 kW',
    image: '/assets/img/product-cp308.png',
    alt: 'AC wall-mounted charger connected to a parked car',
    body: 'Wall boxes and pedestals for homes, offices, retail parking and destination charging. Single or dual outlet, Type 2, RFID or app start.',
  },
  {
    title: 'DC 20-240 kW',
    image: '/assets/img/product-dc60-240.png',
    alt: 'Floor-standing DC fast charger with dual cables',
    body: 'Wall-mounted and floor-standing fast chargers with CCS2 and CHAdeMO outlets for public sites, forecourts and fleet depots.',
  },
  {
    title: 'Ultra-fast 240-720 kW',
    image: '/assets/img/product-dc240-720.png',
    alt: 'Split-system ultra-fast charging hub with power cabinet and multiple dispensers',
    body: 'Split power cabinets feeding up to eight dispensers at up to 350 A, with flexible power sharing across bays for highway hubs.',
  },
]

const segments = [
  {
    icon: <HomeIcon />,
    title: 'Homes & estates',
    body: 'Overnight AC charging with load balancing so the main supply is never the bottleneck.',
  },
  {
    icon: <BuildingIcon />,
    title: 'Commercial & retail',
    body: 'Workplace and customer charging with tariffs, access control and billing built in.',
  },
  {
    icon: <GlobeIcon />,
    title: 'Municipal & public',
    body: 'Kerbside and public-parking charge points intended for shared, high-turnover use.',
  },
  {
    icon: <TruckIcon />,
    title: 'Highway & fleets',
    body: "Fast-charging hubs on corridors, and depot systems sized to a fleet's daily cycle.",
  },
]

const standards = [
  'OCPP 1.6J',
  'OCPP 2.0.1',
  'IEC 61851-1',
  'IEC 61851-23',
  'ISO/IEC 15118',
  'Type 2 · IEC 62196-2',
  'CCS2',
  'CHAdeMO',
  'CE · CB · UKCA',
]

export default function Home() {
  usePageMeta(
    'EV Energy Solutions: EV Charging Infrastructure & Energy Storage | South Africa',
    'EV Energy Solutions builds, deploys and operates EV charging infrastructure and intelligent energy storage across South Africa, from 7 kW home chargers to 720 kW ultra-fast hubs.',
  )

  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="hero">
        <div className="wrap hero__inner">
          <div>
            <p className="eyebrow">Charging infrastructure &amp; energy storage</p>
            <h1>
              Powering the next generation of <em>mobility</em>
            </h1>
            <p className="lead">
              We design, install and operate EV charging infrastructure and intelligent energy
              storage across South Africa: a turnkey service, from the first site survey to the
              day-to-day running of the station.
            </p>

            <div className="btn-row">
              <Button to="/contact" arrow>
                Talk to our team
              </Button>
              <Button to="/chargers" variant="ghost">
                Browse chargers
              </Button>
            </div>

            <div className="chips">
              <span className="chip">
                <BoltIcon />
                <span>
                  <b>7-720 kW</b> per site
                </span>
              </span>
              <span className="chip">
                <ShieldIcon />
                <span>
                  <b>IEC 61851</b> certified
                </span>
              </span>
              <span className="chip">
                <GlobeIcon />
                <span>
                  <b>OCPP</b> 1.6J / 2.0.1
                </span>
              </span>
            </div>
          </div>

          <div className="hero__media">
            <img
              src="/assets/img/hero.png"
              alt="An electric SUV charging at a public DC fast charger"
              width={1556}
              height={1167}
            />
            <div className="hero__badge">
              <span className="dot" aria-hidden="true" />
              <span>
                <b>Turnkey</b>Survey, engineering, installation and operation
              </span>
            </div>
          </div>
        </div>
      </section>

      <StatBand />

      {/* ---------- services ---------- */}
      <section className="section" id="what-we-do">
        <div className="wrap">
          <SectionHead
            split
            eyebrow="What we do"
            title={
              <>
                Turnkey solutions for
                <br />
                the whole EV ecosystem
              </>
            }
            body="Charging is an electrical, civil and software project at the same time. We carry all three, so you deal with one accountable partner instead of four suppliers."
          />

          <div className="grid grid--4">
            {services.map((service, i) => (
              <Reveal
                as="article"
                className={i === 3 ? 'panel panel--accent' : 'panel panel--hover'}
                key={service.n}
              >
                <span className="panel__index">{service.n}</span>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </Reveal>
            ))}
          </div>

          <p style={{ marginTop: 30 }}>
            <Link className="arrow-link" to="/solutions">
              See how each service works
            </Link>
          </p>
        </div>
      </section>

      {/* ---------- load balancing ---------- */}
      <section className="section section--surface">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">Smart energy management</p>
            <h2>Add chargers without upgrading your supply</h2>
            <p>
              Most sites already have enough electrical capacity; it is simply not available at the
              same moment the chargers want it. Dynamic Load Balancing measures what the building is
              actually drawing and continuously shares the spare capacity between charge points.
            </p>
            <ul className="tick-list">
              <li>No investment in a larger connection or new transformer</li>
              <li>Uses the capacity your site already pays for</li>
              <li>Charging load adjusts in real time as the building&rsquo;s demand changes</li>
              <li>Combines with solar PV and battery storage to cut grid draw further</li>
            </ul>
          </Reveal>

          <Reveal className="dlb">
            <div className="dlb__panel dlb__panel--bad">
              <h4>Without load balancing</h4>
              <p>
                Two 43 kW chargers plus the building&rsquo;s own load push the 63 A supply past its
                limit.
              </p>
              <div className="dlb__bar">
                <i />
              </div>
              <div className="dlb__meta">
                <span>63 A supply</span>
                <strong>75 A drawn: trip</strong>
              </div>
            </div>
            <div className="dlb__panel dlb__panel--good">
              <h4>With load balancing</h4>
              <p>
                Charge current is trimmed automatically, so the site stays inside its limit and both
                cars still charge.
              </p>
              <div className="dlb__bar">
                <i />
              </div>
              <div className="dlb__meta">
                <span>63 A supply</span>
                <strong>60 A drawn: safe</strong>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- hardware ---------- */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            split
            eyebrow="The hardware"
            title={
              <>
                From a wall box
                <br />
                to a 720 kW hub
              </>
            }
            body="Certified, OCPP-ready equipment supplied through our partnership with WAGA Motion, specified to suit the site rather than forced to fit a single model."
          />

          <div className="grid grid--3">
            {hardware.map((item) => (
              <Reveal as="article" className="segment" key={item.title}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <div className="segment__body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="btn-row" style={{ marginTop: 32 }}>
            <Button to="/chargers" arrow>
              View the full range
            </Button>
            <Button to="/contact" variant="ghost">
              Ask us what fits your site
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- standards strip ---------- */}
      <section className="section--tight section--surface">
        <div className="wrap">
          <Reveal className="strip">
            {standards.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- segments ---------- */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            split
            eyebrow="Who we work with"
            title="Residential, commercial, municipal and highway"
            body="Every site has a different supply, footprint and dwell time. The design starts there, not with a catalogue page."
          />

          <div className="grid grid--4">
            {segments.map((segment) => (
              <Reveal as="article" className="card card--hover" key={segment.title}>
                <div className="icon">{segment.icon}</div>
                <h3>{segment.title}</h3>
                <p>{segment.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- partnership ---------- */}
      <section className="section section--surface">
        <div className="wrap split split--media-first">
          <Reveal className="split__media">
            <img
              src="/assets/img/bay.png"
              alt="Electric vehicles charging in a marked charging bay"
              loading="lazy"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow">Strategic partnership</p>
            <h2>Local delivery, world-class equipment</h2>
            <p>
              WAGA Motion Limited is our primary equipment supplier and hardware co-developer. The
              partnership pairs their manufacturing precision and broad product catalogue with our
              local expertise in deployment, installation and operations.
            </p>
            <p>
              The result is ISO/IEC-compliant smart charging technology delivered across Southern
              Africa, specified, installed and supported by a team on the ground.
            </p>
            <p style={{ marginTop: 22 }}>
              <Link className="arrow-link" to="/about">
                More about the company
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Tell us about your site"
        body="Share the location, available supply and how long vehicles will be parked. We will come back with a charger configuration, a layout and the electrical work it needs."
      />
    </>
  )
}
