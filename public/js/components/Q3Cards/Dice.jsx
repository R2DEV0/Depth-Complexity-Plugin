import React, {useEffect} from 'react';
import {Animated} from "react-animated-css";
// Icons //
import DiceIcon from '../../pics/Q3Cards/icons/spinner1.gif';
import DiceIcon2 from '../../pics/Q3Cards/icons/spinner2.gif';

import Across from '../../pics/Q3Cards/icons/across.png';
import BigIdea from '../../pics/Q3Cards/icons/bigidea.png';
import Details from '../../pics/Q3Cards/icons/details.png';
import Ethics from '../../pics/Q3Cards/icons/ethics.png';
import Language from '../../pics/Q3Cards/icons/language.png';
import Multiple from '../../pics/Q3Cards/icons/multiple.png';
import OverTime from '../../pics/Q3Cards/icons/overtime.png';
import Patterns from '../../pics/Q3Cards/icons/patterns.png';
import Rules from '../../pics/Q3Cards/icons/rules.png';
import Trends from '../../pics/Q3Cards/icons/trends.png';
import Unanswered from '../../pics/Q3Cards/icons/unanswered.png';

const Dice = (props) => {
    const{rolling, roll, icon, icon2, setIcon, setIcon2, rolled, one} = props;
    const Icons = [Trends, Unanswered, Rules, Patterns, OverTime, Multiple, Language, Ethics, Details, BigIdea, Across];
    const DoubleIconOne = [Trends, Unanswered, Rules, Patterns, Language, Ethics, Details, BigIdea];

    useEffect(() => {
        if(one){
            setIcon(Icons[Math.floor(Math.random() * Math.floor(11))]);
            setIcon2(Icons[Math.floor(Math.random() * Math.floor(11))]);
        }
        else{
            setIcon(DoubleIconOne[Math.floor(Math.random() * Math.floor(8))]);
            setIcon2(Icons[Math.floor(Math.random() * Math.floor(11))]);
        }
    },[rolling]);


    return(
        <>
            {one ?
            <div>
                {rolling ?
                    <div className='diceDive'>
                        <img src={DiceIcon} alt="Dice" className='center dice' height='250px' draggable={false} />
                    </div>
                :
                    <div className='diceDiv'>
                        {rolled ?
                            <img src={icon} alt="Dice" className='center dice' height='230px' draggable={false} />
                        :      
                            <img src={icon} alt="Dice" className='center dice' height='230px' onClick={roll} draggable={false} />
                        }
                    </div>
                }   
            </div>
            :
            <div>
                {rolling ?
                    <div className='row'>
                        <div className='col-6'>
                            <img src={DiceIcon} alt="Dice" className='center dice' height='215px' width='auto' draggable={false} />
                        </div>
                        <div className='col-6'>
                            <img src={DiceIcon2} alt="Dice" className='center dice' height='215px' width='auto' draggable={false} />
                        </div>
                    </div>
                :
                    <div>
                        {rolled ?
                        <div className='row'>
                            <div className='col-6 diceDiv'>
                                <img src={icon} alt="Dice" className='dice' height='215px' width='auto' draggable={false} />
                            </div>
                            <div className='col-6 diceDiv'>
                                <img src={icon2} alt="Dice" className=' dice' height='215px' width='auto' draggable={false} />
                            </div>
                        </div>
                        :
                        <div className='row'>
                            <div className='col-6 diceDiv'>
                                <Animated animationIn="fadeInRight" animationOut="fadeOutRight" animationInDuration={400} animationOutDuration={400} isVisible={one ? false : true}>
                                    <img src={icon} alt="Dice" className='dice' height='215px' width='auto' onClick={roll} draggable={false} />
                                </Animated>
                            </div>
                            <div className='col-6 diceDiv'>
                                <Animated animationIn="fadeInLeft" animationOut="fadeOutLeft" animationInDuration={400} animationOutDuration={400} isVisible={one ? false : true}>
                                    <img src={icon2} alt="Dice" className='dice' height='215px' width='auto' onClick={roll} draggable={false}  />
                                </Animated>
                            </div>
                        </div>
                        }
                    </div>
                }   
            </div>
            }
        </>
    )
}

export default Dice;