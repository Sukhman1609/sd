
import React,{useState} from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { useCart } from './Cart/CartContext';
import axios from 'axios';

function LinkCompo() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const {cart} = useCart();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://sure-main.onrender.com/api/search?q=${searchTerm}`);
      // const searchResults = response.data.results || [];
      console.log(response.data);
      navigate('/search-results', { state: { searchResults: response.data } });
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };


  // const handler=()=>{
  //   localStorage.removeItem("token")
  //    alert("User Logged Out!!!")
  // }
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const goToCartPage = () => {
    navigate('/cart'); // Navigate to the CartPage
    toggleMenu(); // Close the menu after navigation
  };
  const initialAuthStatus = !!localStorage.getItem('token'); 
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthStatus);
  const handlerpro = () => {
    localStorage.removeItem('token');
    alert('User Logged Out!!!');
    setIsAuthenticated(false);
  };

  console.log('Navbar Component Rendered', cart);
  
  return (
    <div className='navbar-container'>
      
      <img className='logo' src='https://tse1.mm.bing.net/th?id=OIP.ZxJKzELlJx69HC_0E0qpMAHaFj&pid=Api&P=0&h=180' alt='not available' />
      <h2 className='buy' style={{ color: 'white' }}>Buy with Smile &#128519;</h2>
      <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        ☰
      </div>
      <div className='navbar'>
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" activeClassName="active" className='Linkstyle' onClick={toggleMenu}>Home</NavLink>

          <div className="dropdown">
          <NavLink to="/mobiles" activeClassName="active" className='Linkstyle' onClick={toggleMenu}>Mobiles</NavLink>
          <div className="dropdown-content">
                <ul>
                  <li style={{color:'coral', fontSize:'20px',fontWeight:'600',textDecoration:'underline'}}>Mobiles</li>
              <li><NavLink to="/mobiles/subMi" className='sublist'>Mi</NavLink></li>
              <li><NavLink to="/mobiles/subVivo" className='sublist'>Vivo</NavLink></li>
              <li><NavLink to="/mobiles/subSamsung" className='sublist'>Samsung</NavLink></li>
              <li><NavLink to="/mobiles/subRealme" className='sublist'>Realme</NavLink></li>
              <li><NavLink to="/mobiles/subPoco" className='sublist'>Poco</NavLink></li>
              </ul>
            </div>
          </div>

          <div className="dropdown">
          <NavLink to="/electronics" activeClassName="active" className='Linkstyle' onClick={toggleMenu}>Electronics</NavLink>
          <div className="dropdown-content">
                <ul>
                  <li style={{color:'coral', fontSize:'20px',fontWeight:'600',textDecoration:'underline'}}>Electronics</li>
                  <li><NavLink to="/electronics/laptops" className='sublist' >Laptops</NavLink></li>
              <li><NavLink to="/electronics/acs" className='sublist'>ACs</NavLink></li>
              <li><NavLink to="/electronics/kitchen" className='sublist'>Kitchen</NavLink></li>
              <li><NavLink to="/electronics/tv" className='sublist'>TV/LEDs</NavLink></li>
              {/* <li><NavLink to="/store/subfridge" className='sublist'>Refrigerators</NavLink></li> */}
              </ul>
            </div>
          </div>

          <div className="dropdown">
          <NavLink to="/iphone" activeClassName="active" className='Linkstyle' onClick={toggleMenu}>Iphones</NavLink>
<div className="dropdown-content">
                <ul>
                  <li style={{color:'coral', fontSize:'20px',fontWeight:'600',textDecoration:'underline'}}>Iphones/Macbook</li>
              <li><NavLink to="/iphone/iphone15" className='sublist'>Iphone15</NavLink></li>
              <li><NavLink to="/iphone/iphone14" className='sublist'>Iphone14</NavLink></li>
              <li><NavLink to="/iphone/iphone13" className='sublist'>Iphone13</NavLink></li>
              <li><NavLink to="/iphone/iphone12" className='sublist'>Iphone12</NavLink></li>
              <li><NavLink to="/iphone/macbooks" className='sublist'>Macbooks</NavLink></li>
              </ul>
            </div>
          </div>

          <div className="dropdown">
          <NavLink to="/watches" activeClassName="active" className='Linkstyle' onClick={toggleMenu}>Watches</NavLink>
<div className="dropdown-content">
                <ul>
                  <li style={{color:'coral', fontSize:'20px',fontWeight:'600',textDecoration:'underline'}}>Watches</li>
              <li><NavLink to="/watches/apple" className='sublist'>Apple</NavLink></li>
              <li><NavLink to="/watches/titan" className='sublist'>Titan</NavLink></li>
              <li><NavLink to="/watches/casio" className='sublist'>Casio</NavLink></li>
              <li><NavLink to="/watches/samsung" className='sublist'>Samsung</NavLink></li>
              {/* <li><NavLink to="/store/subelectronics" className='sublist'>Others</NavLink></li> */}
              </ul>
            </div>
          </div>

          <div className="dropdown">
            <NavLink to="/store" activeClassName="active" className='Linkstyle' onClick={toggleMenu}>Store</NavLink>
            <div className="dropdown-content">
                <ul>
                  <li style={{color:'coral', fontSize:'20px',fontWeight:'600',textDecoration:'underline'}}>Store</li>
              <li><NavLink to="/store/mobiles" className='sublist'>Mobiles</NavLink></li>
              <li><NavLink to="/store/watches" className='sublist'>Watches</NavLink></li>
              <li><NavLink to="/store/iphones" className='sublist'>Iphones</NavLink></li>
              <li><NavLink to="/store/electronics" className='sublist'>Electronics</NavLink></li>
              </ul>
            </div>
          </div>

        </nav>
        <div className='others'>
        <input type='text' placeholder='search here &#128269;' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}    onKeyPress={handleKeyPress} className='inputsearch' />
        <button style={{ fontSize: '20px',color:'white' }} className='cart' onClick={goToCartPage}>&#128722;({cart.length})</button>
        <button style={{ fontSize: '20px', color: 'white' }} className='like'> &#10084;</button>
        {isAuthenticated ? (<div className="dropdown"><button className='profile' style={{ fontSize: '30px', color: 'red' }}>👤 &#65039;</button>
        <div className="dropdown-content">
              <ul>
                <li>
                  <NavLink to="/" onClick={handlerpro} className='sublist'>
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
            </div>
          
        ) : (
          <div className="dropdown"><button className='profile' style={{ fontSize: '30px', color: 'red' }}>👤 &#65039;</button>
        <div className="dropdown-content" style={{fontSize:'18pt'}}>
            <NavLink to="/login" className='sublist'>
              Login
            </NavLink>
            <NavLink to="/register" className='sublist'>
              SignUp
            </NavLink>
          </div>
          </div>
        )}
          </div></div>
      </div>
    
  );
}

export default LinkCompo;
