import styled from 'styled-components';
import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";

const Container = styled.div`
height: 420px;
width: 453px;
left: 615px;
top: 146px;
border-radius: 8px;
padding: 24px;
border-radius: 8px;
border: solid #ECEEF1 1px;
background-color:none;
`;
  

function Addresses(props) {
    return (
    <Container className='d-flex justify-content-end align-items-center align-self-center px-4 py-3'>
        <div className='d-inline-flex flex-column gap-2 mt-4'>
            <div className='text-rg'>Адреса заведений</div>
            <div className='d-inline-flex flex-column gap-3 mb-5'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            </div>
            <div className='d-inline-flex flex-column gap-2'></div>
                <SecondaryButton>Добавить филиал</SecondaryButton>  
        </div>
    </Container>
    );
}


export default Addresses;