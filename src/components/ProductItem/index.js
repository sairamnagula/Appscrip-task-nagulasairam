import {FaRegHeart} from 'react-icons/fa6'
import './index.css'

const ProductItem = props => {
  const {product} = props
  const {name, imageUrl} = product
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-img" />
      <p className="name-para">{name}</p>
      <p className="sign-para">
        <a href="#sign-in">Sign in</a> or Create an account to see price
      </p>
      <span className="heart-icon">
        <FaRegHeart />
      </span>
    </div>
  )
}

export default ProductItem
