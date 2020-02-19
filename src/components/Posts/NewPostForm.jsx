import React, { useState } from 'react';
import { v4 as getUUID } from 'uuid';
import { Input, Typography, Form, Button } from 'antd';

const { TextArea } = Input;

export default function NewPostForm(props) {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    function handleFormSubmit(e) {
        e.preventDefault();

        const newRat = {
            id: getUUID(),
            rating: 0,
            title,
            image,
            description,
        };

        props.onNewPostSubmission(newRat);

        setTitle('');
        setImage('');
        setDescription('');
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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        placeholder="Image UR(at)L"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <TextArea
                        placeholder="Tell us about this rat"
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
