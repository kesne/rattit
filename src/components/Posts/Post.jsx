import React, { useState } from 'react';
import { Card, Button, Icon, Typography } from 'antd';
import PropTypes from 'prop-types';

const styles = {
    voteDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    voteButton: {
        height: '4rem',
        width: '4rem',
        padding: '0.5rem',
    },
    icon: {
        fontSize: '3rem',
        lineHeight: '3rem',
    },
    voteCount: {
        padding: '0.5rem',
        margin: '0 1rem',
        height: '4rem',
        lineHeight: '3rem',
        fontSize: '3rem',
        borderRadius: '3px',
        border: '1px solid lightgray',
        width: '12rem',
        textAlign: 'center',
        boxShadow: '0 2px 0 rgba(0, 0, 0, 0.015)',
    },
};
export default function Post(props) {
    let [interaction, setInteraction] = useState(0);
    function handleInteraction(value) {
        setInteraction(interaction === value ? 0 : value);
    }

    return (
        <Card
            hoverable
            style={{
                width: '28rem',
                height: '40rem',
                overflow: 'hidden',
                display: 'block',
            }}
            cover={
                <img
                    alt={props.title ? props.title : 'Rat Image'}
                    src={props.image}
                    style={{ height: '20rem', objectFit: 'cover' }}
                />
            }
        >
            <h1>{props.title}</h1>
            <div style={styles.voteDiv}>
                <Button
                    onClick={() => {
                        handleInteraction(1);
                    }}
                    style={styles.voteButton}
                >
                    <Icon type="smile" style={styles.icon} />
                </Button>
                <Typography.Title level={3} style={styles.voteCount}>
                    {props.rating + interaction}
                </Typography.Title>
                <Button
                    onClick={() => {
                        handleInteraction(-1);
                    }}
                    style={styles.voteButton}
                >
                    <Icon type="frown" style={styles.icon} />
                </Button>
            </div>
        </Card>
    );
}

Post.propTypes = PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string,
    rating: PropTypes.number,
});
