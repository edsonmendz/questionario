import React from 'react';

function BotaoComponente({ text, onClick }) {
    return (
        <button onClick={onClick}>{text}</button>
    );
}

export default BotaoComponente;
