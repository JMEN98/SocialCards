import './PhoneNumber.css'
const Phone = ({number,type}) =>{
  return(
  <div className="PhoneNumber">
    <p> {type}: {number}</p>

  </div>
  )
}

export default Phone