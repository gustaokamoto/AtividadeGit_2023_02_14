import '../../assets/css/navBar.scss'
import { Link } from "react-router-dom";
import sp from '../../assets/images/sp.png'


function NavBar() {
  return (
   <nav>
    <div id='title-logo'>
      <img id='logo' src={sp}></img>
      <h2>Pirituba</h2>
    </div>
    <div id='links-div'>
        <button className='link-button'>
          <Link to="/" className='nav-link'>Página Principal</Link>
        </button>
        <button className='link-button'>
          <Link to="/demografia" className='nav-link'>Demografia</Link>
        </button>
        <button className='link-button'>
          <Link to="/" className='nav-link'>Comércio Local</Link>
        </button>
        <button className='link-button'>
          <Link to="/" className='nav-link'>Curiosidades</Link>
        </button>
      </div>
   </nav>
  );
}

export default NavBar;
