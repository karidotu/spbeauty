import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';
import MessagesIcon from '../../../../../Icons/MessagesIcon';

const Container = styled.div`
    
    outline: none;
    border-radius: 0px;
    border: solid #152842 0px;
    background-color: none;
    Width:405px;
    Height:60px;
`;

const Option = styled.div`
    color: #0F172A;
`;

function ListElement(props) {
    return (
    <div>
        <div className='d-flex flex-row justify-content-between gap-1 my-1'>
            <Option className='flex-row-1'>{props.children}</Option>
            <div className='d-flex flex-row gap-2'>
            <IconOnlyButton icon={<EditIcon/>}/>
            <IconOnlyButton icon={<RemoveIcon/>}/>
            </div>
        </div>
        </div>
    );
}

export default ListElement;