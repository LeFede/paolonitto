import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {

  const [show, setShow] = useState(true)

  const handleClick = (e) => {
    setShow((prev) => !prev)
  }

  return ( 
    <nav className="Navbar ff-1">
      <div className={`${show ? 'hide' : 'show'} links fs-4`}>
        <Link to='/' onClick={handleClick}>Home</Link>
        <Link to='/about' onClick={handleClick}>About</Link>
        <Link to='/gallery' onClick={handleClick}>Gallery</Link>
        <div className="cross" onClick={handleClick}/>
      </div>
      <div className={`${show ? 'show' : 'hide'} button`} onClick={handleClick}/>
    </nav>
  )
}

export default Navbar