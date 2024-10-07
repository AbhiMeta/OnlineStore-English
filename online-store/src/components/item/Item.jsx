import './Item.css'

export default function Item({name, price, image}) {


    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <div className="card-name">
                {name}
            </div>
            <div className="card-price">
                ${price}
            </div>
        </div>
    )
}