import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';
import MessagesIcon from '../../../../../Icons/MessagesIcon';

const Option = styled.div`
    outline: none;
    border-radius: 0px;
    border: solid #152842 0px;
    background-color: т;
    color: #666787;
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch gap-2'>
            <Option className='flex-grow-1 p-2'>{props.children}</Option>
            <EditIcon/>
            <RemoveIcon/>
        </div>
    );
}

export default ListElement;