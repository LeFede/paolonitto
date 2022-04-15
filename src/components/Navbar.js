import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/gallery'>Gallery</Link>
      </div>
      <div className="button">
        
      </div>
    </nav>
  )
}

export default Navbar