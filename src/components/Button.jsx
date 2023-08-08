import {useState} from "react";

const Button = ({
                    name = 'Continuar',
                    iconPath = '',
                    bgColor='#000000',
                    bgColorHover='#000000',
                    color='#FFFFFF',
                    colorHover='#FFFFFF'}) => {

    const [isHover,setIsHover] = useState(false)

    const handleIsHover = () => {
        setIsHover((state)=>!state)
    }

    const styles = {
        backgroundColor: isHover ? bgColorHover : bgColor,
        color: isHover ? colorHover : color
    }

    return(
        <button
            style={styles}
            onMouseEnter={handleIsHover}
            onMouseLeave={handleIsHover}
        >
            {name}
            {iconPath !== '' && <img src={iconPath}/>}
        </button>
    )
}

export default Button