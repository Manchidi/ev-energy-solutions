import { Link } from 'react-router-dom'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import { BatteryIcon, BoltIcon, SunIcon } from '../components/Icons'
import usePageMeta from '../hooks/usePageMeta'

const energyCards = [
  {
    icon: <BoltIcon />,
    title: 'Dynamic Load Balancing',
    body: 'A current sensor on the incoming supply lets the system share whatever capacity is spare between charge points, in real time. It eliminates grid upgrade costs and keeps the site inside its limit.',
  },
  {
    icon: <SunIcon />,
    title: 'Solar PV integration',
    body: 'Generation on site reduces what the chargers draw from the grid during the day, and improves the running cost of every kWh delivered.',
  },
  {
    icon: <BatteryIcon />,
    title: 'Battery energy storage',
    body: 'BESS adds off-grid resilience, absorbs demand peaks and lets a modest connection support fast charging that it could not otherwise sustain.',
  },
]

const steps = [
  {
    n: 'Step 01',
    title: 'Site assessment',
    image: '/assets/img/kerbside.png',
    alt: 'An electric car charging from a public charge point on the kerbside',
    body: 'We look at the incoming supply, the distribution board, cable routes, parking layout and how long vehicles will actually be there.',
  },
  {
    n: 'Step 02',
    title: 'Design & specification',
    image: '/assets/img/product-dc20-40.png',
    alt: 'Compact DC charger mounted beside a parked electric vehicle',
    body: 'Electrical engineering, grid connection design and charger selection (AC, DC or ultra-fast) with load balancing, solar or storage where it earns its place.',
  },
  {
    n: 'Step 03',
    title: 'Installation',
    image: '/assets/img/pedestals.png',
    alt: 'A range of charger mounting pedestals',
    body: 'Civil work, mounting, cabling, protection and network connectivity, carried out to the approved design.',
  },
  {
    n: 'Step 04',
    title: 'Commissioning',
    image: '/assets/img/product-dc60-240.png',
    alt: 'Floor-standing DC fast charger ready for use',
    body: 'Chargers are tested under load, connected to the management platform, configured with tariffs and access rules, and handed over live.',
  },
  {
    n: 'Step 05',
    title: 'Operation & support',
    image: '/assets/img/bay.png',
    alt: 'Electric vehicles charging side by side in a charging bay',
    body: 'Remote monitoring, diagnostics, firmware updates and maintenance keep the station available and the reporting accurate.',
  },
]

const chargingTypes = [
  {
    type: 'Home AC',
    power: '7 kW single-phase',
    best: 'Houses and estates, overnight charging',
    dwell: '6-10 hours',
  },
  {
    type: 'Destination AC',
    power: '11-22 kW three-phase',
    best: 'Offices, malls, hotels, public parking',
    dwell: '2-8 hours',
  },
  {
    type: 'Fast DC',
    power: '20-60 kW',
    best: 'Forecourts, fleet depots, urban top-ups',
    dwell: '30-90 minutes',
  },
  {
    type: 'Ultra-fast DC',
    power: '120-720 kW',
    best: 'Highway hubs and high-throughput corridors',
    dwell: '15-40 minutes',
  },
]

export default function Solutions() {
  usePageMeta(
    'Solutions | EV Energy Solutions',
    'Turnkey EV charging services: site assessment and electrical engineering, grid connection design, highway and fleet charging, dynamic load balancing, solar PV and BESS, and OCPP cloud management with billing.',
  )

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="crumb">
            <Link to="/">Home</Link> / Solutions
          </p>
          <h1>Turnkey EV charging, end to end</h1>
          <p className="lead">
            Four services that cover the entire EV ecosystem: the electrical work that gets power to
            the bay, the hardware in it, the energy strategy behind it, and the software that runs
            it.
          </p>
        </div>
      </section>

      {/* 01 */}
      <section className="section" id="infrastructure">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">01 · Charging network infrastructure</p>
            <h2>From site survey to a commissioned station</h2>
            <p>
              Most charging projects fail on the electrical detail, not the charger. We start with
              the supply and the site, then specify hardware that the connection can actually
              support.
            </p>
            <ul className="tick-list">
              <li>
                <strong>Full site assessments</strong>: supply capacity, distance to the board,
                parking layout and civil work
              </li>
              <li>
                <strong>Electrical engineering</strong>: protection, cabling, metering and
                compliance design
              </li>
              <li>
                <strong>Grid connection design</strong>: what the site can carry, and how to avoid
                an expensive upgrade
              </li>
              <li>
                <strong>Commissioning</strong>: AC and ultra-fast DC stations tested, configured and
                handed over live
              </li>
            </ul>
          </Reveal>
          <Reveal className="split__media">
            <img
              src="/assets/img/kerbside.png"
              alt="An electric car charging from a public charge point on the kerbside"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* 02 */}
      <section className="section section--surface" id="highway-fleet">
        <div className="wrap split split--media-first">
          <Reveal className="split__media">
            <img
              src="/assets/img/hub.png"
              alt="A charging hub with a power cabinet feeding several charging dispensers"
              loading="lazy"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow">02 · Highway &amp; fleet systems</p>
            <h2>Built for vehicles that cannot wait</h2>
            <p>
              Corridor and depot charging are governed by throughput. The design question is how many
              vehicles must leave with how much energy, in how little time, and what the connection
              can deliver.
            </p>
            <ul className="tick-list">
              <li>
                <strong>Highway fast-charging hubs</strong>: multi-bay sites with power shared
                dynamically across dispensers
              </li>
              <li>
                <strong>Fleet electrification systems</strong>: depot charging sized around routes,
                dwell windows and shift patterns
              </li>
              <li>
                <strong>Scalable power</strong>: split power cabinets from 240 kW to 720 kW feeding
                up to eight bays
              </li>
              <li>
                <strong>Uptime by design</strong>: remote monitoring, diagnostics and maintenance on
                the operating side
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 03 */}
      <section className="section" id="energy">
        <div className="wrap">
          <SectionHead
            split
            eyebrow="03 · Smart energy management"
            title={
              <>
                Make the connection you
                <br />
                already have go further
              </>
            }
            body="Charging load is flexible. Treated that way, it can be fitted into spare capacity, shifted to cheaper hours, and backed by storage instead of a bigger grid connection."
          />
          <div className="grid grid--3">
            {energyCards.map((card) => (
              <Reveal as="article" className="panel panel--hover" key={card.title}>
                <div className="icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 */}
      <section className="section section--surface" id="software">
        <div className="wrap">
          <SectionHead
            split
            eyebrow="04 · Software integration"
            title={
              <>
                Open protocols, so the
                <br />
                network stays yours
              </>
            }
            body="Every charger we deploy speaks OCPP 1.6J and is upgradeable to OCPP 2.0.1: an open standard, not a closed ecosystem."
          />
          <div className="grid grid--2">
            <Reveal as="article" className="card">
              <h3>Cloud management platform</h3>
              <p>
                Monitor sessions and charger health, set tariffs and access rules, group sites, and
                pull reports on energy delivered and utilisation.
              </p>
              <ul className="tick-list">
                <li>OCPP 1.6J and 2.0.1 compliant</li>
                <li>Remote diagnostics and firmware updates</li>
                <li>Roles for owners, operators and tenants</li>
              </ul>
            </Reveal>
            <Reveal as="article" className="card">
              <h3>Driver app &amp; billing</h3>
              <p>
                Drivers find a charger, start a session and pay. Owners get the revenue reconciled
                against the energy actually delivered.
              </p>
              <ul className="tick-list">
                <li>Start by mobile app or RFID card</li>
                <li>Billing integration with per-kWh or per-hour tariffs</li>
                <li>Optional card payment terminal on the charger</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* process */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            split
            eyebrow="How we work"
            title={
              <>
                A clear path from enquiry
                <br />
                to running station
              </>
            }
            body="Five stages, each with a decision you get to make before we move to the next one."
          />
          <div className="tiles">
            {steps.map((step) => (
              <Reveal as="article" className="tile" key={step.title}>
                <img src={step.image} alt={step.alt} loading="lazy" />
                <div className="tile__body">
                  <span className="tile__step">{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* charging explained */}
      <section className="section section--surface" id="charging-explained">
        <div className="wrap">
          <SectionHead
            split
            eyebrow="Charging, explained"
            title="Which type of charging suits which site"
            body="The right answer is usually set by dwell time, how long the vehicle is parked. Power beyond that is money spent on capacity nobody uses."
          />
          <Reveal className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Typical power</th>
                  <th scope="col">Best for</th>
                  <th scope="col">Dwell time</th>
                </tr>
              </thead>
              <tbody>
                {chargingTypes.map((row) => (
                  <tr key={row.type}>
                    <td>
                      <strong>{row.type}</strong>
                    </td>
                    <td>{row.power}</td>
                    <td>{row.best}</td>
                    <td>{row.dwell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <p className="form-note" style={{ marginTop: 16 }}>
            Charging times depend on the vehicle&rsquo;s own on-board charger and battery state, not
            only on the charge point.
          </p>
        </div>
      </section>

      <CtaBand
        title="Not sure which solution fits?"
        body="Send us the site details and we will tell you what the supply can carry and what it would take to do more."
        action="Book a site assessment"
      />
    </>
  )
}
