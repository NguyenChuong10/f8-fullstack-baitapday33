
import Navigator from '../Navigator';
import '../Header/index.css'
function Header() {
    return(
        <div className="w-full h-[100px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center" >
            <Navigator/>
        </div>
    );
}
export default Header;