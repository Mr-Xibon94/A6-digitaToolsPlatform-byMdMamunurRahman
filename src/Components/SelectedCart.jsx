import React from 'react';

const SelectedCart = ({choosenCard}) => {
    return (
        <div>
            <h1>{choosenCard.name}</h1>
        </div>
    );
};

export default SelectedCart;