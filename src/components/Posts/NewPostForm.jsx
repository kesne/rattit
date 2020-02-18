import React from 'react';
import PropTypes from 'prop-types';
import { v4 as getUUID } from 'uuid';

export default function NewPostForm(props) {
    const postInputs = {};
    function handleFormSubmit(e) {
        e.preventDefault();
        const inputValues = {};
        for (const key in postInputs) {
            inputValues[key] = postInputs[key].value;
            postInputs[key].value = '';
        }
        inputValues.id = getUUID();
        props.onNewPostSubmission(inputValues);
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    ref={input => {
                        postInputs.title = input;
                    }}
                />
                <input
                    type="text"
                    placeholder="Add Image URL"
                    ref={input => {
                        postInputs.image = input;
                    }}
                />
                <button type="submit">Help!</button>
            </form>
        </div>
    );
}

NewPostForm.propTypes = {
    onNewPostSubmission: PropTypes.func,
};
