import Profile from "./Components/Profile/Profile";
import Preferences from "./Components/Preferences";
function General() {
    return (
        <div class="info">
        <div className='d-inline-flex flex-column'>
            <Profile/> {/* Фото компании, название, тип и адрес */}
            <Preferences/> {/* Инпуты, где можно поменять название, тип и адрес */}
        </div>
        </div>
    );
}

export default General;