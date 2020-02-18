import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

export default function Post(props) {
    return (
        <Card hoverable cover={<img alt="example" src={props.image} />}>
            <h1>{props.title}</h1>
        </Card>
    );
}

Post.propTypes = PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string,
});
