import PropTypes from 'prop-types'
function Card({children, reverse}) {

/*This is a conditional class
return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )

*/
  // this is a conditional style
    return ( 
    <div 
        className="card" 
        style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff' : '#000',
        }}
    >
        {children}
    </div>
    )

}
// ${} is a template string, inside is an if then statement,
// if reverse is true, then return the class of reverse

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}
export default Card