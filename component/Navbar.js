import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
        <nav>
        <ul>
                <Link to="/">Home</Link>
                <Link to="/Dashboard">Dashboard</Link>
                <Link to="/Register">Register</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Shopping">Shopping</Link>
                </ul>
                </nav>
    </div>

  )
  }

export default Navbar
