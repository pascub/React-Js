
const Item = ({title, price, image, description,}) => {
  return (
    <div>
        <img width={'200px'} src={image} alt={title}/>
        <h2>{title}</h2>
        <h3>{price}</h3>
        <h4>{description}</h4>
        
    </div>
  )
}

export default Item