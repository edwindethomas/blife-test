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
    const iconStyles = {
        marginLeft:'8px'
    }

    return(
        <button
            style={styles}
            onMouseEnter={handleIsHover}
            onMouseLeave={handleIsHover}
        >
            {name}
            {iconPath !== '' && <img style={iconStyles} src={iconPath}/>}
        </button>
    )
}

export default Button