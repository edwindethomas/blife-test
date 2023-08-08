import Card from "./Card.jsx";
import TextIcon from '../assets/Group2.svg'
import Button from '../assets/Boton3.svg'
import Material from './Material.jsx'
import Creativity from './Creativity.jsx'
import AIModel from './AIModel.jsx'
import Style from './Style.jsx'
const CardInformation = () => {

    return(<Card widthProp={'75%'}>
        <section className={'card__information__header'}>
            <div className={'card__information__input'}>
            <img src={TextIcon}/>
                <div className={'text__container'}>
            <p className={'text__element'}>AI trained to generate realistic 3D objects</p>
                </div>
            </div>
            <img src={Button}/>
        </section>
        <section className={'card__information__body'}>
            <div className={'card__information__item'}>
                <Style/>
                <div>
                    <p className={'card__info__heading'}>Style</p>
                    <p className={'card__info__subtitle'}>Choose your style</p>
                </div>
            </div>
            <div className={'card__information__item'}>
                <Material />
                <div>
                    <p className={'card__info__heading'}>Material</p>
                    <p className={'card__info__subtitle'}>Choose material</p>
                </div>
            </div>
            <div className={'card__information__item'}>
                <Creativity />
                <div>
                    <p className={'card__info__heading'}>Creativity</p>
                    <p className={'card__info__subtitle'}>High-level</p>
                </div>
            </div>
            <div className={'card__information__item'}>
            <AIModel/>
            <div>
                <p className={'card__info__heading'}>AI model</p>
                <p className={'card__info__subtitle'}>Midjourney 5.0</p>
            </div>
        </div>
        </section>
    </Card>)
}

export default CardInformation