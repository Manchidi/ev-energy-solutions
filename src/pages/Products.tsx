import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Button from '../components/Button'
import CtaBand from '../components/CtaBand'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import { families, products, type Family, type Product } from '../data/products'
import usePageMeta from '../hooks/usePageMeta'

const groups: { id: Family; heading: string; note: string }[] = [
  { id: 'ac', heading: 'AC charging', note: '7-43 kW · Type 2' },
  { id: 'dc', heading: 'DC fast charging', note: '20-240 kW · CCS2 / CHAdeMO' },
  { id: 'ultra', heading: 'Ultra-fast charging', note: '240-720 kW · up to 8 bays' },
]

const siteProfiles: { id: Family; label: string; note: string }[] = [
  { id: 'ac', label: 'Home or workplace', note: 'Longer stays · 7-43 kW' },
  { id: 'dc', label: 'Public site or fleet', note: 'Faster turnaround · 20-240 kW' },
  { id: 'ultra', label: 'Highway charging hub', note: 'Multiple bays · 240-720 kW' },
]

function isFamily(value: string | null): value is Family {
  return value === 'ac' || value === 'dc' || value === 'ultra'
}

function getSpec(product: Product, keys: string[]) {
  return product.specs.find((spec) => keys.includes(spec.k))?.v ?? 'N/A'
}

export default function Products() {
  usePageMeta(
    'EV Chargers: AC, DC & Ultra-Fast | EV Energy Solutions',
    'Our EV charger range: AC wall boxes and pedestals from 7 to 43 kW, DC fast chargers from 20 to 240 kW, and ultra-fast split systems up to 720 kW. All OCPP 1.6J / 2.0.1 and IEC 61851 compliant.',
  )

  const [searchParams, setSearchParams] = useSearchParams()
  const requestedFamily = searchParams.get('family')
  const filter: Family | 'all' = isFamily(requestedFamily) ? requestedFamily : 'all'
  const [comparison, setComparison] = useState<Product[]>([])

  const visible = useMemo(
    () => (filter === 'all' ? products : products.filter((p) => p.family === filter)),
    [filter],
  )

  const setFilter = (family: Family | 'all', moveToResults = false) => {
    const next = new URLSearchParams(searchParams)
    if (family === 'all') next.delete('family')
    else next.set('family', family)
    setSearchParams(next, { replace: true })

    if (moveToResults) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(family === 'all' ? 'charger-results' : family)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        })
      })
    }
  }

  const toggleComparison = (product: Product) => {
    setComparison((current) => {
      if (current.some((item) => item.id === product.id)) {
        return current.filter((item) => item.id !== product.id)
      }
      return current.length < 3 ? [...current, product] : current
    })
  }

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="crumb">
            <Link to="/">Home</Link> / Chargers
          </p>
          <h1>Chargers for every kind of site</h1>
          <p className="lead">
            AC wall boxes for homes and workplaces, DC fast chargers for public and fleet use, and
            ultra-fast split systems for highway hubs. Every unit is OCPP-ready and certified to
            international standards, supplied, installed and commissioned by us.
          </p>
          <div className="btn-row" style={{ marginTop: 26 }}>
            <Button to="/contact" arrow>
              Request pricing
            </Button>
            <Button href="#standards" variant="ghost">
              Standards &amp; certification
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="charger-guide">
            <div className="charger-guide__copy">
              <p className="eyebrow">Start with your site</p>
              <h2>What kind of charging do you need?</h2>
              <p>
                Choose the closest use case. We will narrow the range; a site assessment confirms the
                final configuration.
              </p>
            </div>
            <div className="charger-guide__options" role="group" aria-label="Choose a site profile">
              {siteProfiles.map((profile) => (
                <button key={profile.id} type="button" onClick={() => setFilter(profile.id, true)}>
                  <span>{profile.label}</span>
                  <small>{profile.note}</small>
                </button>
              ))}
            </div>
          </div>

          <ul className="delivery-strip" aria-label="What is included">
            <li>Site assessment</li>
            <li>Charger configuration</li>
            <li>Installation &amp; commissioning</li>
            <li>OCPP-ready hardware</li>
          </ul>

          <div className="filter-bar" id="charger-results">
            <div className="filters" role="group" aria-label="Filter chargers by type">
              {families.map((family) => (
                <button
                  key={family.id}
                  type="button"
                  aria-pressed={filter === family.id}
                  onClick={() => setFilter(family.id)}
                >
                  <span className="filter-label--full">{family.label}</span>
                  <span className="filter-label--short">{family.shortLabel}</span>
                </button>
              ))}
            </div>
            <p aria-live="polite">
              {visible.length} {visible.length === 1 ? 'model' : 'models'}
            </p>
          </div>

          {comparison.length > 0 && (
            <section className="compare" aria-labelledby="compare-title">
              <div className="compare__head">
                <div>
                  <p className="eyebrow">Shortlist</p>
                  <h2 id="compare-title">Compare chargers</h2>
                </div>
                <button className="arrow-link compare__clear" type="button" onClick={() => setComparison([])}>
                  Clear selection
                </button>
              </div>
              <div className="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Specification</th>
                      {comparison.map((product) => (
                        <th key={product.id} scope="col">
                          {product.title}
                          <button
                            type="button"
                            aria-label={`Remove ${product.title} from comparison`}
                            onClick={() => toggleComparison(product)}
                          >
                            Remove
                          </button>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Model</th>
                      {comparison.map((product) => <td key={product.id}>{product.model}</td>)}
                    </tr>
                    <tr>
                      <th scope="row">Output</th>
                      {comparison.map((product) => (
                        <td key={product.id}>{getSpec(product, ['Output', 'Cabinet output'])}</td>
                      ))}
                    </tr>
                    <tr>
                      <th scope="row">Connector</th>
                      {comparison.map((product) => (
                        <td key={product.id}>{getSpec(product, ['Connector', 'Connectors', 'Dispensers'])}</td>
                      ))}
                    </tr>
                    <tr>
                      <th scope="row">Protection</th>
                      {comparison.map((product) => (
                        <td key={product.id}>{getSpec(product, ['Protection', 'Enclosure'])}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="form-note">Select up to three models. Final suitability is confirmed during the site assessment.</p>
            </section>
          )}

          {groups.map((group) => {
            const items = visible.filter((p) => p.family === group.id)
            if (!items.length) return null

            return (
              <div key={group.id} style={{ marginBottom: 68 }}>
                <div className="group-head" id={group.id}>
                  <h2>{group.heading}</h2>
                  <span>{group.note}</span>
                </div>

                <div className="grid grid--3">
                  {items.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      selected={comparison.some((item) => item.id === product.id)}
                      comparisonDisabled={comparison.length >= 3}
                      onToggleCompare={toggleComparison}
                    />
                  ))}

                  {group.id === 'ultra' && (
                    <Reveal as="article" className="panel panel--accent">
                      <h3>How a hub is put together</h3>
                      <p>
                        The power cabinet sits out of the way, in a plant room, service yard or the
                        end of the row. Dispensers are what drivers see and touch: 480 × 800 × 2100 mm, a
                        7&Prime; HD screen, 5 m or 7 m cables.
                      </p>
                      <ul className="tick-list">
                        <li>Add dispensers later without replacing the power stage</li>
                        <li>Power follows demand instead of sitting idle at quiet bays</li>
                        <li>RFID, app or card terminal on every dispenser</li>
                        <li>4G, LAN or RS485 connectivity · OCPP 1.6J / 2.0.1</li>
                        <li>Full power from −25 °C to +50 °C, then a linear limit to 65 °C</li>
                      </ul>
                    </Reveal>
                  )}
                </div>

                <div className="group-cta">
                  <div>
                    <strong>Not sure which {group.heading.toLowerCase()} model fits?</strong>
                    <span>Share your supply, bay count and typical parking time.</span>
                  </div>
                  <Button to={`/contact?family=${group.id}#enquiry`} variant="ghost" small arrow>
                    Get a recommendation
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ---------- shared specifications ---------- */}
      <section className="section section--surface" id="standards" style={{ scrollMarginTop: 80 }}>
        <div className="wrap">
          <SectionHead
            split
            eyebrow="Across the range"
            title={
              <>
                Standards, connectivity
                <br />
                and protection
              </>
            }
            body="These apply to every charger we supply, whichever model ends up on your site."
          />

          <div className="grid grid--2">
            <Reveal as="article" className="card">
              <h3>Communication &amp; access</h3>
              <ul className="spec spec--flush" style={{ marginTop: 18 }}>
                <li>
                  <span className="k">Protocol</span>
                  <span className="v">OCPP 1.6J · upgradeable to OCPP 2.0.1</span>
                </li>
                <li>
                  <span className="k">Plug &amp; Charge</span>
                  <span className="v">ISO/IEC 15118 (model dependent)</span>
                </li>
                <li>
                  <span className="k">Network · AC</span>
                  <span className="v">LAN, Wi-Fi, Bluetooth · 3G/4G optional</span>
                </li>
                <li>
                  <span className="k">Network · DC</span>
                  <span className="v">Ethernet, Wi-Fi, 3G/4G SIM</span>
                </li>
                <li>
                  <span className="k">Authentication</span>
                  <span className="v">RFID (ISO/IEC 14443 A/B) and mobile app</span>
                </li>
                <li>
                  <span className="k">Payment</span>
                  <span className="v">Card terminal optional on DC models</span>
                </li>
              </ul>
            </Reveal>

            <Reveal as="article" className="card">
              <h3>Compliance &amp; environment</h3>
              <ul className="spec spec--flush" style={{ marginTop: 18 }}>
                <li>
                  <span className="k">AC safety</span>
                  <span className="v">IEC 61851-1 · IEC 61851-21-2</span>
                </li>
                <li>
                  <span className="k">DC safety</span>
                  <span className="v">IEC 61851-1 · -23 · EMI/EMC IEC 61851-21-2</span>
                </li>
                <li>
                  <span className="k">Connectors</span>
                  <span className="v">Type 2 (IEC 62196-2), CCS2, CHAdeMO</span>
                </li>
                <li>
                  <span className="k">Certification</span>
                  <span className="v">CE, CB, UKCA · TR25 &amp; RCM on selected models</span>
                </li>
                <li>
                  <span className="k">Operating temp.</span>
                  <span className="v">−30 °C to +50 °C AC · to +60 °C DC with derating</span>
                </li>
                <li>
                  <span className="k">Altitude · humidity</span>
                  <span className="v">2000 m no derating · 5-95% non-condensing</span>
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal className="card" style={{ marginTop: 20 }}>
            <h3>Protection, on every unit</h3>
            <p style={{ maxWidth: '82ch' }}>
              Over- and under-voltage, over-current, over-temperature and short-circuit protection;
              surge protection; earth/grounding protection; control pilot fault detection; relay
              welding detection; 6 mA DC residual current detection; and an emergency stop on DC
              cabinets.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Which model suits your site?"
        body="Tell us the supply available, the number of bays and how long vehicles stay. We will recommend a configuration and quote the installation with it."
        action="Request a quote"
      />
    </>
  )
}
