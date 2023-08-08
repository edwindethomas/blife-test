import {Link} from "react-router-dom";
import Noon from './../assets/noon.svg'
import Button from "./Button.jsx";
import './../styles/home.css'
function NavRouter() {

    return (
        <nav className={'navigator__container'}>
            <div className={'navigator__wrapper'}>
            <section>
                <img src={Noon}/>
            </section>
            <ul className={'navigator__links'}>
                <li className={'nav__item'}><Link className={'nav__item'}><b>Pricing</b></Link></li>
                <li className={'nav__item'}><Link className={'nav__item'}><b>Features</b></Link></li>
                <li className={'nav__item'}><Link className={'nav__item'}><b>Open sources</b></Link></li>
                <li className={'nav__item'}><Link className={'nav__item'}><b>Contact</b></Link></li>
            </ul>
            <Button name='Sign in' bgColorHover='#232423'/>
            </div>
        </nav>
    )
}

export default NavRouter
