import TiltCard from './TiltCard.jsx'

export default function ProductCard({ product, onOpen }) {
  return (
    <TiltCard className="product-card" style={{ '--card': product.color }}>
      <button className="product-hit" onClick={() => onOpen?.(product)} aria-label={`View ${product.name}`}>
        <div className="product-img">
          <img src={product.image} alt={product.name} loading="lazy" />
        </div>
        <div className="product-body">
          <h3>{product.name}</h3>
          <span className="price-tag">₹{product.price}</span>
        </div>
        <p className="product-tagline">{product.tagline}</p>
      </button>
    </TiltCard>
  )
}
