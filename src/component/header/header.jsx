import './header.css'
const Header = (props) => {
    return ( 
        <div className="header-container">
            <div className="header-name">
                <p>ThangNQ</p>
            </div>
            <div className="header-content">
                <p>LEARN {props.title}</p>
            </div>
        </div>
     );
}
 
export default Header;