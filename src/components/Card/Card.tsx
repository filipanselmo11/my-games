
import './Card.css';

interface CardProps {
    title: string,
    image: string,
    description: string,
}
export function Card (card: CardProps) {
    return (
        <div className="card">
            <img src={card.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">
                    {card.title}
                </h5>
                <p className="card-text">
                    {card.description}
                </p>
            </div>
        </div>
    )
}