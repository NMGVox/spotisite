import PropTypes from 'prop-types'

const Button = ({  color, text, fs, onClick }) => {
    return (
        <div>
            <button onClick = {onClick}
                     style={{'background': color,
                    'fontSize': fs}}
                    className='but'>{text}</button>
        </div>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
}

export default Button
