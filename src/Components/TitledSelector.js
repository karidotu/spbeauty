import styled from "styled-components";

const TitleS = styled.div`
    color: #94A3B8;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    }
`;

const Select = styled.select`
     display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    gap: 16px;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 24px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    &:hover {
         opacity 0.8;
    }
`;

function TitledSelector({title, options}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Select className='p-2'>
                {options.map(optionName => {
                    return (
                        <option key={optionName}>{optionName}</option>
                    );
                })}
            </Select>
        </div>
    );
}

export default TitledSelector;