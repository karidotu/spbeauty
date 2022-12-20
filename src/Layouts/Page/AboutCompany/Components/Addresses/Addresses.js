import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";

function Addresses() {
    return (
<div className="d-flex justify-content-between col flex-column gap-2 mt-5 item h-100">
        <div className='d-flex flex-column gap-3'>
        <div className='text-rg'>Адреса заведений</div>
        <div class="item1">
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>
                <div className='d-flex flex-column'></div>
                <SecondaryButton>Добавить филиал</SecondaryButton> </div>
             </div>
    );
}


export default Addresses;