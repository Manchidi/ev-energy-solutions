import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import Reveal from './Reveal'

type Props = {
  product: Product
  selected: boolean
  comparisonDisabled: boolean
  onToggleCompare: (product: Product) => void
}

export default function ProductCard({
  product,
  selected,
  comparisonDisabled,
  onToggleCompare,
}: Props) {
  const [expanded, setExpanded] = useState(false)
  const primarySpecs = product.specs.slice(0, 3)
  const additionalSpecs = product.specs.slice(3)
  const detailsId = `${product.id}-specifications`

  return (
    <Reveal as="article" className={`product${selected ? ' product--selected' : ''}`}>
      <div className="product__media">
        {product.image ? (
          <img
            src={product.image}
            alt={product.alt ?? product.title}
            loading="lazy"
            style={{
              objectPosition: product.media?.position,
              transform: product.media?.scale ? `scale(${product.media.scale})` : undefined,
              transformOrigin: product.media?.origin,
            }}
          />
        ) : (
          <div className="product__media-plain" aria-hidden="true">
            <span>{product.model.split(' · ')[0]}</span>
          </div>
        )}
        <span className="product__tag">{product.tag}</span>
      </div>

      <div className="product__body">
        <h3>{product.title}</h3>
        <p className="product__model">{product.model}</p>
        <p>{product.blurb}</p>
        <ul className="spec">
          {primarySpecs.map((spec) => (
            <li key={spec.k}>
              <span className="k">{spec.k}</span>
              <span className="v">{spec.v}</span>
            </li>
          ))}
        </ul>

        {additionalSpecs.length > 0 && (
          <>
            <div className="product__details" id={detailsId} hidden={!expanded}>
              <ul className="spec spec--continued">
                {additionalSpecs.map((spec) => (
                  <li key={spec.k}>
                    <span className="k">{spec.k}</span>
                    <span className="v">{spec.v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="product__details-toggle"
              type="button"
              aria-expanded={expanded}
              aria-controls={detailsId}
              onClick={() => setExpanded((value) => !value)}
            >
              {expanded ? 'Hide specifications' : `View all ${product.specs.length} specifications`}
            </button>
          </>
        )}

        <div className="product__actions">
          <Link className="btn btn--primary btn--sm" to={`/contact?charger=${product.id}#enquiry`}>
            Request quote
          </Link>
          <button
            className="btn btn--ghost btn--sm"
            type="button"
            aria-pressed={selected}
            disabled={comparisonDisabled && !selected}
            onClick={() => onToggleCompare(product)}
          >
            {selected ? 'Added to compare' : 'Compare'}
          </button>
        </div>
      </div>
    </Reveal>
  )
}
