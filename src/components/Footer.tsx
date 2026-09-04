import { Link } from 'react-router-dom'
import { footerNav, site } from '../data/site'
import { asset } from '../lib/asset'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <span className="footer__brand-chip">
              <img src={asset('/assets/img/logo.png')} alt={site.name} width={845} height={590} />
            </span>
            <p>{site.blurb}</p>
          </div>

          {footerNav.map((group) => (
            <div key={group.heading}>
              <h4>{group.heading}</h4>
              <ul>
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>
            {site.city} ·{' '}
            <a href={site.websiteUrl} target="_blank" rel="noreferrer">
              {site.website}
            </a>
          </span>
        </div>

        <p className="footer__wordmark" aria-hidden="true">
          EV Energy Solutions
        </p>
      </div>
    </footer>
  )
}
