import React from 'react';
import PropTypes from 'prop-types';
import { v4 as getUUID } from 'uuid';
import { Input, Typography, Form, Button } from 'antd';

const { TextArea } = Input;

export default function NewPostForm(props) {
    const postInputs = {};
    function handleFormSubmit(e) {
        e.preventDefault();
        const newRat = {};
        for (const key in postInputs) {
            newRat[key] = postInputs[key].state.value;
            postInputs[key].state.value = '';
        }
        newRat.id = getUUID();
        newRat.rating = 0;
        props.onNewPostSubmission(newRat);
    }
    return (
        <div
            style={{
                margin: '1rem auto',
                backgroundColor: 'white',
                padding: '2.5rem',
                borderRadius: '1rem',
                border: '2px solid gray',
            }}
        >
            <Typography.Title
                level={2}
                style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
            >
                Share Your Rats!
            </Typography.Title>
            <Form onSubmit={handleFormSubmit}>
                <Form.Item>
                    <Input
                        placeholder="Title of this Rat"
                        ref={input => {
                            postInputs.title = input;
                        }}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        placeholder="Image UR(at)L"
                        ref={input => {
                            postInputs.image = input;
                        }}
                    />
                </Form.Item>
                <Form.Item>
                    <TextArea
                        placeholder="Tell us about this rat"
                        rows={3}
                        ref={textarea => {
                            postInputs.description = textarea;
                        }}
                    />
                </Form.Item>
                <Form.Item>
                    <Button icon="rocket" size="large" htmlType="submit">
                        Send this 🐀 around the world!
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

NewPostForm.propTypes = {
    onNewPostSubmission: PropTypes.func,
};
