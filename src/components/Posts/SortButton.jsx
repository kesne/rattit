import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

export default function SortButton(props) {
    return (
        <div>
            <Button
                onClick={props.onChangeSortOrder}
                style={{ display: 'block', margin: '0 auto' }}
            >
                Sort
            </Button>
        </div>
    );
}

SortButton.propTypes = {
    onChangeSortOrder: PropTypes.func,
};
