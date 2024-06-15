import React from 'react';

const DoubleButton = (props) => {
    const{twoDice, oneDice, one} = props;

    return(
        <div>
            { one 
                ?
                <button className='btn btn-secondary' onClick={twoDice}> Use Two Icons </button> 
                :
                <button className='btn btn-info' onClick={oneDice}> Use One Icon </button>
            }
        </div>
    )
};

export default DoubleButton;