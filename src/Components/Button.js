const Button = ({  color, text, fs }) => {
    return (
        <div>
            <button style={{'background': color,
                    'font-size': fs}}
                    className='but'>{text}</button>
        </div>
    )
}

export default Button
