import PropTypes from 'prop-types'

const Button = ({  color, text, fs, onClick, right, left, position }) => {
    return (
        <div>
            <button onClick = {onClick}
                     style={{'background': color,
                    'fontSize': fs,
                    'position': position,
                    'left': left,
                    'right': right}}
                    className='but'
                    >{text}</button>
        </div>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
}

export default Button
