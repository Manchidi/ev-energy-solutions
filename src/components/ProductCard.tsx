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
  const outputSpec = product.specs.find((spec) => spec.k.toLowerCase().includes('output'))

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
        {outputSpec && (
          <ul className="spec">
            <li>
              <span className="k">{outputSpec.k}</span>
              <span className="v">{outputSpec.v}</span>
            </li>
          </ul>
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
