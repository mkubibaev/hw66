import React from 'react';

const Content = ({title, content}) => {
    return (
        <div className="container py-4">
            <h2 className="text-center mb-3">{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default Content;