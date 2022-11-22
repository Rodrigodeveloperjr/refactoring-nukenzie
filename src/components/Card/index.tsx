import { ICardComponent } from '../../interfaces'
import { Container } from './style'


const Card = ({ card, removeCard }: ICardComponent) => {

    return (
        <Container>

            <hr style={ card.option === 'Entry' ? { background: '#03B898' }  : { background: '#E9ECEF' } } />

            <div>
                <div className="divCardLeft">
                    <h2>{ card.description }</h2>

                    <span>{ card.option }</span>
                </div>

                <div className="divCardRight">
                    <span>US$ { card.price }</span>

                    <button onClick={ () => removeCard(card) }></button>
                </div>
            </div>
            
        </Container>
    )
}

export { Card }
