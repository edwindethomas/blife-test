const Card = ({children,widthProp='70%'}) => {

    const styles = {
        width: widthProp
    }

    return(
        <div style={styles} className={'card__container'}>
            {children}
        </div>
    )
}

export default Card