import React,{useState} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Animated } from "react-animated-css";
import useSound from 'use-sound';
import swish from '../../effects/swish2.mp3';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const Q3Modal = (props) => {
    const{ modal, card,  sideCards, card2, 
        sideCards2, one, picking, setPicking,
        cardSwitching1, cardSwitching2, cardSwitching3, toggle, swtiched1, 
        swtiched2, swtiched3, changeCard1, changeCard2, cardSwitched1, 
        cardSwitched2, cardSwitched3, litSelected, buttonWord, buttonWord2,
        copy1, copy2 } = props;
    const [wasCopied1, setWasCopied1] = useState('Copy Text');
    const [wasCopied2, setWasCopied2] = useState('Copy Text');
    const clipboard1 = copy1 + " " + "[" + buttonWord + "]";
    const clipboard2 = copy2 + " " + "[" + buttonWord2 + "]";
    const [play] = useSound(swish);
    const handleCard1 = useFullScreenHandle();
    const handleCard2 = useFullScreenHandle();

    const HoverIn = () => {}; const HoverOut = () => {};

    const copied1 = () => {
        setWasCopied1('Copied to Clipboard!');
        setWasCopied2('Copy Text');
    }

    const copied2 = () => {
        setWasCopied2('Copied to Clipboard!');
        setWasCopied1('Copy Text');
    }

    return(
        <div>
            <Modal isOpen={modal} className='modal-lg' backdrop="static" keyboard={false}>
                {litSelected
                    ?
                    <ModalHeader toggle={toggle} onMouseUp={() => {setWasCopied1('Copy Text'); setWasCopied2('Copy Text')}}>
                        Your Icon Responding to Literature Question(s):
                    </ModalHeader>
                    :
                    <ModalHeader toggle={toggle} onMouseUp={() => {setWasCopied1('Copy Text'); setWasCopied2('Copy Text')}}>
                        {one
                            ?<> Your Virtual Q3 Card: </>
                            :<> Your Virtual Q3 Cards: </>
                        }
                    </ModalHeader>
                }
                <ModalBody>
                    {picking === false &&
                        <p className='text-center' style={{fontSize:'12px', margin: '0px', color: 'green'}}>Select Card For Full-Screen</p>
                    }
                    {one ?
                        <>
                        {picking ?
                            <>
                                <div className='row'>
                                    <div className="col-md-8">
                                        <Animated animationIn="fadeInRight" animationInDuration={400} isVisible={swtiched1 ? true : false}>
                                            {litSelected
                                                ?
                                                <img src={card} alt={card} draggable={false} className='Lit mainCard center'/>
                                                :
                                                <img src={card} alt={card} height='100%' width='100%' draggable={false} className='mainCard center' />
                                            }
                                        </Animated>
                                    </div>
                                    <div className={litSelected ? 'col-md-4 litSideCards mt-1' :'col-md-4 sideCards mt-1'}>
                                        {sideCards.map((card1, i) => {return <div key={i} className='mb-2' >
                                            <img src={card1[0]} alt={card1[0]} height='100%' width='100%' onClick={(e) => {changeCard1(e, card1); playIt();}} onMouseEnter={(e)=>HoverIn(e.target.style.boxShadow="0 0 5px grey")} onMouseLeave={(e)=>HoverOut(e.target.style.boxShadow="none")} className='eachCard' onMouseDown={cardSwitching1} onMouseUp={cardSwitched1}/>
                                        </div>})}
                                    </div>
                                </div>
                            </>
                        :
                            <>
                                <div className="col-md-10 col-centered">
                                    <Animated animationIn="bounceIn" animationInDuration={800} isVisible={swtiched1 ? true : false}>
                                        <FullScreen handle={handleCard1} >
                                            {litSelected
                                                ?
                                                <img src={card} alt={card} onClick={handleCard1.enter} draggable={false} className='Lit mainCard center'/>
                                                :
                                                <img src={card} alt={card} height='100%' width='100%' onClick={handleCard1.enter} draggable={false} className='mainCard center'/>
                                            }
                                        </FullScreen>
                                    </Animated>
                                </div>
                                <div className='text-center'>
                                    <CopyToClipboard text={clipboard1} onCopy={copied1}>
                                        <a href="#">{wasCopied1}</a>
                                    </CopyToClipboard>
                                </div>
                            </>
                        }
                        </>
                    :
                        <>
                            {picking ?
                                <>
                                    <div className='row'>
                                        <div className='col-md-8'>
                                            <Animated animationIn="fadeInRight" animationInDuration={400} isVisible={swtiched2 ? true : false}>
                                                {litSelected
                                                    ?
                                                    <img src={card} alt={card} draggable={false} className='Lit mainCard center'/>
                                                    :
                                                    <img src={card} alt={card} height='100%' width='100%' draggable={false} className='mainCard center'/>
                                                }
                                            </Animated>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className={litSelected ? 'litSideCards mt-1' :'sideCards mt-1'}>
                                                {sideCards.map((card1, i) => {return <div key={i} className='mb-2'>
                                                    <img src={card1[0]} alt={card1[0]} height='100%' width='100%' onClick={(e) => {changeCard1(e, card1); playIt();}} onMouseEnter={(e)=>HoverIn(e.target.style.boxShadow="0 0 5px grey")} onMouseLeave={(e)=>HoverOut(e.target.style.boxShadow="none")} className='eachCard' onMouseDown={cardSwitching2} onMouseUp={cardSwitched2}/>
                                                </div>})}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-8 mt-4'>
                                            <Animated animationIn="fadeInRight" animationInDuration={400} isVisible={swtiched3 ? true : false}>
                                                {litSelected
                                                    ?
                                                    <img src={card2} alt={card2} draggable={false} className='Lit mainCard center'/>
                                                    :
                                                    <img src={card2} alt={card2} height='100%' width='100%' draggable={false} className='mainCard center'/>
                                                }
                                            </Animated>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className={litSelected ? 'litSideCards mt-4 mt-1' : 'sideCards mt-4 mt-1'}>
                                                {sideCards2.map((cardtwo, i) => {return <div key={i} className='mb-2'>
                                                    <img src={cardtwo[0]} alt={cardtwo[0]} height='100%' width='100%' onClick={(e) => {changeCard2(e, cardtwo); playIt();}} className='eachCard' onMouseEnter={(e)=>HoverIn(e.target.style.boxShadow="0 0 5px grey")} onMouseLeave={(e)=>HoverOut(e.target.style.boxShadow="none")} onMouseDown={cardSwitching3} onMouseUp={cardSwitched3}/>
                                                </div>})}
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                :
                                    <>
                                        <div className='col-md-10 col-centered'>
                                            <Animated animationIn="bounceIn" animationInDuration={600} isVisible={swtiched2 ? true : false}>
                                                {litSelected
                                                    ?
                                                    <FullScreen handle={handleCard1} >
                                                        <img src={card} alt={card} onClick={handleCard1.enter} draggable={false} className='Lit mainCard center'/>
                                                    </FullScreen>
                                                    :
                                                    <FullScreen handle={handleCard1} >
                                                        <img src={card} alt={card} height='100%' width='100%' onClick={handleCard1.enter} draggable={false} className='mainCard center'/>
                                                    </FullScreen>
                                                }    
                                            </Animated>
                                            <div className='text-center'>
                                                <CopyToClipboard text={clipboard1} onCopy={copied1}>
                                                    <a href="#">{wasCopied1}</a>
                                                </CopyToClipboard>
                                            </div>
                                        </div>
                                        <div className='col-md-10 mt-2 col-centered'>
                                            <Animated animationIn="bounceIn" animationInDuration={500} isVisible={swtiched3 ? true : false}>
                                                {litSelected
                                                    ?
                                                    <FullScreen handle={handleCard2} >
                                                        <img src={card2} alt={card2} onClick={handleCard2.enter} draggable={false} className='Lit mainCard center'/>
                                                    </FullScreen>
                                                    :
                                                    <FullScreen handle={handleCard2} >
                                                        <img src={card2} alt={card2} height='100%' width='100%' draggable={false} onClick={handleCard2.enter} className='mainCard center'/>
                                                    </FullScreen>
                                                }
                                            </Animated>
                                            <div className='text-center'>
                                                <CopyToClipboard text={clipboard2} onCopy={copied2}>
                                                    <a href="#">{wasCopied2}</a>
                                                </CopyToClipboard>
                                            </div>
                                        </div>
                                    </>
                                }
                        </>
                    }
                </ModalBody>
                <ModalFooter>
                    {picking
                        ?<div className='col-12 text-center'><button className='btn btn-info btn-lg' onClick={(e) => {setPicking(!picking)}}>Save selection</button></div>
                        :<>
                            {one
                                ?<div className='col-12 text-center'><button className='btn btn-info btn-lg' onClick={(e) => {setPicking(!picking); setWasCopied1('Copy Text'); setWasCopied2('Copy Text')}}>Choose a different {buttonWord} question</button></div>
                                :<div className='col-12 text-center'><button className='btn btn-info btn-lg' onClick={(e) => {setPicking(!picking); setWasCopied1('Copy Text'); setWasCopied2('Copy Text')}}>Choose a different {buttonWord} or {buttonWord2} question</button></div>
                            }
                        </>
                    }
                </ModalFooter>
            </Modal>
        </div>
    )
};

export default Q3Modal;