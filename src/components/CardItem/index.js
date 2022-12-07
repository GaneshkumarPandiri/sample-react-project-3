import './index.css'

const CardItem = props => {
  const {ItemDetails} = props
  const {title, description, imgUrl, className} = ItemDetails
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt={title} className="img-style" />
    </li>
  )
}

export default CardItem
