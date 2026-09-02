import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found | EV Energy Solutions')

  return (
    <section className="page-head" style={{ minHeight: '52vh' }}>
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>We can&rsquo;t find that page</h1>
        <p className="lead">
          The link may be out of date. Try the charger range or get in touch and we will point you to
          what you need.
        </p>
        <div className="btn-row" style={{ marginTop: 26 }}>
          <Link className="btn btn--primary" to="/">
            Back to home
          </Link>
          <Link className="btn btn--ghost" to="/chargers">
            Browse chargers
          </Link>
        </div>
      </div>
    </section>
  )
}
