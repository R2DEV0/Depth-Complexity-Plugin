import React from 'react';


const Message = (props) => {
    const{rolled, setRolled, accept, acceptLit} = props;

    const rollAgain = () => {
        setRolled(false);
    };

    return(
        <div className='mt-3'>
            {rolled &&
                <>
                    <div className='row'>
                        <button className='col-lg-4 offset-md-2 col-sm-12 mt-2 btn btn-primary btn-md mr-3' onClick={accept}>Virtual Q<span style={{fontSize:'15px'}}>3</span> Question Stems</button>
                        <button className='col-lg-4 col-sm-12 mt-2 btn btn-success btn-md' onClick={acceptLit}>Responding to Literature Questions</button>
                    </div>
                    <div className='row text-center'>
                        <button className='btn btn-outline-danger btn-md mt-2 startOver' onClick={rollAgain}>Start Over</button>
                    </div>
                </>
            }
        </div>
    )
};

export default Message;