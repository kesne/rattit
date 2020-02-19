import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const StyledButton = styled(Button)`
    display: block;
    margin: 0 auto;
`;

export default function SortButton({ onChangeSortOrder }) {
    return (
        <div>
            <StyledButton onClick={onChangeSortOrder}>Sort</StyledButton>
        </div>
    );
}
