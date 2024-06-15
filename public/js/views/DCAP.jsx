import React, { useState, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
// Imported Icons //
import Across from '../pics/DCAP/AcrossDisiplines.png'; import BigIdea from '../pics/DCAP/BigIdea.png'; import Details from '../pics/DCAP/Details.png';
import Ethics from '../pics/DCAP/ethics.png'; import Language from '../pics/DCAP/LanguageOfDiscipline.png'; import Multiple from '../pics/DCAP/MultiplePerspectives.png';
import OverTime from '../pics/DCAP/OverTime.png'; import Patterns from '../pics/DCAP/Patterns.png'; import Rules from '../pics/DCAP/Rules.png';
import Trends from '../pics/DCAP/Trends.png'; import Unanswered from '../pics/DCAP/UnansweredQs.png'; import Origin from '../pics/DCAP/Origin.jpg';
import Contribution from '../pics/DCAP/Contribution.jpg'; import Parallel from '../pics/DCAP/Parallell.jpg'; import Convergence from '../pics/DCAP/Convergence.jpg';
import Paradox from '../pics/DCAP/Paradox.jpg';
import placeholder1 from '../pics/DCAP/placeholder1.gif'; import placeholder2 from '../pics/DCAP/placeholder2.gif'; import placeholder3 from '../pics/DCAP/placeholder3.gif';
// components //
import SideBar from '../components/DCAP/SideBar';
// Add-ons //
import { PDFDownloadLink, Page, Text, View, Document, Image, StyleSheet } from '@react-pdf/renderer';

const DCAP = (props) => {
    const { hide1, setHide1, hide2, setHide2, hide3, setHide3 } = props;

// variables //
    const [show1, setShow1] = useState(false); const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false); const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false); const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false); const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false); const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false); const [show12, setShow12] = useState(false); 
    const [show15, setShow15] = useState(false);
    const [show16, setShow16] = useState(false); const [show17, setShow17] = useState(false);
    const [show18, setShow18] = useState(false); const [show19, setShow19] = useState(false);
    const [show20, setShow20] = useState(false);
    const [show25, setShow25] = useState(false); const [show26, setShow26] = useState(false); 
    const [show27, setShow27] = useState(false); const [show28, setShow28] = useState(false); 
    const [show29, setShow29] = useState(false); const [show30, setShow30] = useState(false); 
    const [show31, setShow31] = useState(false);

    const [other, setOther] = useState(false);
    const [otherProduct, setOtherProduct] = useState(false);
    const [otherResource, setOtherResource] = useState(false);
    const [otherThink, setOtherThink] = useState(false);
    const [otherPro, setOtherPro] = useState(false);

    const [l1Think, setL1Think] = useState("_______");
    const [l2Think, setL2Think] = useState("_______");
    const [l3Think, setL3Think] = useState("_______");
    const [resource1, setResource1] = useState("_______");
    const [resource2, setResource2] = useState("_______");
    const [resource3, setResource3] = useState("_______");
    const [product1, setProduct1] = useState("_______");
    const [product2, setProduct2] = useState("_______");
    const [product3, setProduct3] = useState("_______");
    const [productCustom, setProductCustom] = useState(false);
    const [resourceCustom, setResourceCustom] = useState(false);
    const [word, setWord] = useState('of');
    const [word2, setWord2] = useState('of');
    const [word3, setWord3] = useState('of');
    const [verb, setVerb] = useState('can');
    const [verb2, setVerb2] = useState('can');
    const [verb3, setVerb3] = useState('can');
    const [professional, setProfessional] = useState('a disciplinarian');
    const [professional2, setProfessional2] = useState('a disciplinarian');
    const [professional3, setProfessional3] = useState('a disciplinarian');
    const [synonym1, setSynonym1] = useState("");
    const [synonym2, setSynonym2] = useState("");
    const [synonym3, setSynonym3] = useState("");
    const [synonym4, setSynonym4] = useState("");

    // CUSTOM MODE VARIABLES //
    const [custom, setCustom] = useState(false);
    const [custMainSubject, setCustMainSubject] = useState("");
    const [custIcon1, setCustIcon1] = useState(placeholder1);
    const [custIcon2, setCustIcon2] = useState("");
    const [custThinkingSkill, setCustThinkingSkill] = useState("");
    const [custProduct, setCustProduct] = useState("");
    const [custProfessional, setCustProfessional] = useState("");
    const [custResource, setCustResource] = useState("");
    const [custThinkPro, setCustThinkPro] = useState(false);
    const [custParameters, setCustParameters] = useState("");
    const [custWord, setCustWord] = useState('of');
    const [custVerb, setCustVerb] = useState('can');
    const [custSynonym1, setCustSynonym1] = useState("");
    const [custSynonym2, setCustSynonym2] = useState("");

    const custTopicRef = useRef();
    const custIcon1Ref = useRef();
    const custIcon2Ref = useRef();
    const custProRef = useRef();
    const custThinkRef = useRef();
    const custProductRef = useRef();
    const custResourceRef = useRef();

    const [Icon1, setIcon1] = useState(placeholder1);
    const [Icon2, setIcon2] = useState(placeholder2);
    const [Icon3, setIcon3] = useState(placeholder3);

    const [Icon4, setIcon4] = useState('');
    const [mainSubject, setMainSubject] = useState(null);
    const [parameters, setParameters] = useState("");
    const [imps, setImps] = useState(false);
    const [thinkPro, setThinkPro] = useState(false);
    const HoverIn = () => {}; const HoverOut = () => {};
    const textInput = useRef(); const textInput2 = useRef(); const textInput3 = useRef();
    const [chosen, setChosen] = useState();

// level 1 Thinking Skills //
    const L1ThinkSkills = ["list", "define", "state", "summarize", "describe", "discuss", "explain", "identify", "paraphrase", "compare & contrast", "sequence", "recognize"];
// level 2 Thinking Skills //
    const L2ThinkSkills = ["compare & contrast","compare & contrast", "gather evidence to support of", "categorize", "support","support", "interpret", "examine", "question", "prove", "defend"];
// level 3 Thinking Skills //
    const L3ThinkSkills = ["interpret", "differentiate", "prove", "judge", "determine the relevance of", "note ambiguity of", "state & test assumptions of", 
                            "redesign", "add to", "gather evidence to support of", "question", "evaluate", "defend"];
// All resources //
    const Resources = ["a textbook", "an encyclopedia", "a library book", "a magazine", "a newspaper", "an interview", "an expert", "a website", "an online encyclopedia", 
                        "a journal", "an article", "Wikipedia", "an outline", "a video", "a novel"];
// Math only resources //
    const MathResources = ["an interview", "an expert", "Wikipedia", "a textbook", "a book", "a website"];
// All products //
    const Products = ["a chart", "a drawing", "a timeline", "a diagram", "a graphic organizer", "a comic", "a map", "a book cover", "a poster", "a museum exhibit", 
                        "a mobile", "a sculpture", "an art gallery", "a debate", "a panel discussion", "a lesson taught to the class", "a report", "a play", "a press conference", 
                        "a TV show", "a monologue", "a movie review", "a song", "a powerpoint", "Google slides", "a photo essay", "a news report", "a webpage", "a persuasive essay", 
                        "a letter", "a children's story", "a poem", "a diary entry", "a reader's theater", "a game", "a puzzle", "a paragraph", "a travelogue"];
// Math only Products //
    const MathProducts = ["a table", "a graph", "a model", "a chart", "a computer presentation", "a drawing", "a diagram", "a map", "a poster", "a lesson taught to the class", "a powerpoint", 
                            "Google slides", "a webpage", "a game", "a puzzle"];
// level 1 Icons no content imperatives//
    const Icons1 = [Language, Details, Patterns, Rules, Ethics, BigIdea, Multiple, OverTime];
// level 1 Icons with content imperatives//
    const Icons12 = [Language, Details, Patterns, Rules, Ethics, BigIdea, Multiple, OverTime, Origin, Contribution];
// level 2 Icons no content imperatives //
    const Icons2 = [Trends, Unanswered, Rules, Patterns, OverTime, Multiple, Language, Ethics, Details, BigIdea];
// level 2 Icons with content imperatives//
    const Icons22 = [Trends, Unanswered, Rules, Patterns, OverTime, Multiple, Language, Ethics, Details, BigIdea, Origin, Contribution];
// Icon combos for level 3  with no content imperatives //
    const Level3Combo = 
        [[Trends,Multiple,"from"],[Trends,OverTime,""],[Trends,Rules,"in the"],[Trends,Ethics,"of"],[Trends,Across,""],[Language,Rules,"in the"],[Language,OverTime,""],[Language,Across,""], 
        [Language,Multiple,"of"],[Language,Trends,""],[Language,Patterns,""],[Language,Ethics,"within the"], [Details,Rules,"in the"],[Details,Patterns,"in the"],[Details,Language,"in the"],[Details,Trends,"in the"], 
        [Details,Unanswered,"in the"],[Details,Ethics,"in the"],[Details,Multiple,"from"], [Details,OverTime,""],[Details,Across,""],[Patterns,Language,"in"],[Patterns,Details,"in the"],[Patterns,Rules,"in the"], 
        [Patterns,Trends,"in the"],[Patterns,BigIdea,"of"],[Patterns,Unanswered,"of"],[Patterns,Multiple,"from"],[Patterns,Multiple,"in"], [Patterns,OverTime,""],[Patterns,Ethics,"of"],[Rules,Language,"in the"],[Rules,Details,"in the"],[Rules,Patterns,"in the"], 
        [Rules,Trends,"in the"],[Rules,Unanswered,"of"],[Rules,Multiple,"from"],[Rules,Multiple,"in"],[Rules,OverTime,""],[Rules,Across,""],[Rules,Ethics,"of"],[Rules,Ethics,"within the"],[Ethics,OverTime,""],[Ethics,Language,"in the"],[Ethics,Details,"in the"], 
        [Ethics,Patterns,"in the"],[Ethics,Trends,"in the"],[Ethics,Rules,"in the"],[Ethics,BigIdea,"within"],[Ethics,Across,""],[Ethics,Multiple,"from"],[Ethics,Unanswered,"in"],[Unanswered,Ethics,"related to"],[Unanswered,BigIdea,"about the"],[Unanswered,Details,"about the"], 
        [Unanswered,Patterns,"about the"],[Unanswered,Rules,"about the"],[Unanswered,Trends,"about the"],[Unanswered,Ethics,"about the"],[Unanswered,Language,"about the"],[Unanswered,OverTime,""],[Unanswered,Across,""],[Unanswered,Multiple,"from"], 
        [BigIdea,Patterns,"of the"],[BigIdea,Rules,"of the"],[BigIdea,Details,"of the"],[BigIdea,Trends,"of the"],[BigIdea,Language,"of the"],[BigIdea,Ethics,"of the"],[BigIdea,OverTime,""],[BigIdea,Multiple,"from"],[BigIdea,Across,""], 
        [Multiple,"",""],[OverTime,"",""],[Across,"",""],[Trends,"",""],[Unanswered,"",""],[Rules,"",""],[Patterns,"",""],[Multiple,"",""],[Language,"",""],[Ethics,"",""],[Details,"",""],[BigIdea,"",""],
        [Multiple,"",""],[OverTime,"",""],[Across,"",""],[Trends,"",""],[Unanswered,"",""],[Rules,"",""],[Patterns,"",""],[Multiple,"",""],[Language,"",""],[Ethics,"",""],[Details,"",""],[BigIdea,"",""],
        [Multiple,"",""],[OverTime,"",""],[Across,"",""],[Trends,"",""],[Unanswered,"",""],[Rules,"",""],[Patterns,"",""],[Multiple,"",""],[Language,"",""],[Ethics,"",""],[Details,"",""],[BigIdea,"",""]];
// Icon combos for level 3  with content imperatives enabled //
    const Level3Combo2 = 
        [[Trends,Multiple,"from"],[Trends,OverTime,""],[Trends,Rules,"in the"],[Trends,Ethics,"of"],[Trends,Across,""],[Language,Rules,"in the"],[Language,OverTime,""],[Language,Across,""], 
        [Language,Multiple,"of"],[Language,Trends,""],[Language,Patterns,""],[Language,Ethics,"within the"], [Details,Rules,"in the"],[Details,Patterns,"in the"],[Details,Language,"in the"],[Details,Trends,"in the"], 
        [Details,Unanswered,"in the"],[Details,Ethics,"in the"],[Details,Multiple,"from"], [Details,OverTime,""],[Details,Across,""],[Patterns,Language,"in"],[Patterns,Details,"in the"],[Patterns,Rules,"in the"], 
        [Patterns,Trends,"in the"],[Patterns,BigIdea,"of"],[Patterns,Unanswered,"of"],[Patterns,Multiple,"from"],[Patterns,Multiple,"in"], [Patterns,OverTime,""],[Patterns,Ethics,"of"],[Rules,Language,"in the"],[Rules,Details,"in the"],[Rules,Patterns,"in the"], 
        [Rules,Trends,"in the"],[Rules,Unanswered,"of"],[Rules,Multiple,"from"],[Rules,Multiple,"in"],[Rules,OverTime,""],[Rules,Across,""],[Rules,Ethics,"of"],[Rules,Ethics,"within the"],[Ethics,OverTime,""],[Ethics,Language,"in the"],[Ethics,Details,"in the"], 
        [Ethics,Patterns,"in the"],[Ethics,Trends,"in the"],[Ethics,Rules,"in the"],[Ethics,BigIdea,"within"],[Ethics,Across,""],[Ethics,Multiple,"from"],[Ethics,Unanswered,"in"],[Unanswered,Ethics,"related to"],[Unanswered,BigIdea,"about the"],[Unanswered,Details,"about the"], 
        [Unanswered,Patterns,"about the"],[Unanswered,Rules,"about the"],[Unanswered,Trends,"about the"],[Unanswered,Ethics,"about the"],[Unanswered,Language,"about the"],[Unanswered,OverTime,""],[Unanswered,Across,""],[Unanswered,Multiple,"from"], 
        [BigIdea,Patterns,"of the"],[BigIdea,Rules,"of the"],[BigIdea,Details,"of the"],[BigIdea,Trends,"of the"],[BigIdea,Language,"of the"],[BigIdea,Ethics,"of the"],[BigIdea,OverTime,""],[BigIdea,Multiple,"from"],[BigIdea,Across,""], 
        [Multiple,"",""],[OverTime,"",""],[Across,"",""],[Trends,"",""],[Unanswered,"",""],[Rules,"",""],[Patterns,"",""],[Multiple,"",""],[Language,"",""],[Ethics,"",""],[Details,"",""],[BigIdea,"",""],
        [Multiple,"",""],[OverTime,"",""],[Across,"",""],[Trends,"",""],[Unanswered,"",""],[Rules,"",""],[Patterns,"",""],[Multiple,"",""],[Language,"",""],[Ethics,"",""],[Details,"",""],[BigIdea,"",""],
        [Multiple,"",""],[OverTime,"",""],[Across,"",""],[Trends,"",""],[Unanswered,"",""],[Rules,"",""],[Patterns,"",""],[Multiple,"",""],[Language,"",""],[Ethics,"",""],[Details,"",""],[BigIdea,"",""],
        [Origin,Language,"of the"],[Origin,Details,"of the"],[Origin,Patterns,"of the"],[Origin,Rules,""],[Origin,Trends,"of the"],[Origin,Unanswered,"of the"],[Origin,Ethics,"of the"],[Origin,BigIdea,"of the"],[Origin,OverTime,""],[Origin,Across,""],
        [Contribution,Language,"of the"],[Contribution,Details,"of the"],[Contribution,Patterns,"of the"],[Contribution,Rules,"of the"],[Contribution,Trends,"of the"],[Contribution,Ethics,"of the"],[Contribution,Unanswered,"of the"],[Contribution,BigIdea,"of the"],
        [Contribution,Multiple,"of the"],[Contribution,OverTime,""],[Contribution,Across,""],[Parallel,Language,"within the"],[Parallel,Details,"within the"],[Parallel,Rules,"within the"],[Parallel,Patterns,"within the"],[Parallel,Trends,"within the"],[Parallel,Unanswered,"within the"],
        [Parallel,Ethics,"within the"],[Parallel,BigIdea,"within the"],[Parallel,Multiple,"within the"],[Parallel,OverTime,""],[Parallel,Across,""],[Convergence,Language,"of the"],[Convergence,Details,"of the"],[Convergence,Patterns,"of the"],[Convergence,Rules,"of the"],
        [Convergence,Trends,"of the"],[Convergence,Unanswered,"of the"],[Convergence,Ethics,"of the"],[Convergence,BigIdea,"of the"],[Convergence,Multiple,"of"],[Convergence,OverTime,""],[Convergence,Across,""],[Paradox, Language,"within the"],
        [Paradox,Details,"within the"],[Paradox,Patterns,"within the"],[Paradox,Rules,"within the"],[Paradox,Trends,"within the"],[Paradox,Unanswered,"within the"],[Paradox,Ethics,"within the"],[Paradox,BigIdea,"within the"],[Paradox,Multiple,"within the"],[Paradox,OverTime,""],[Paradox,Across,""]];

// All professions for the 'Think like a professional' option //
    const AllProfressionals = ['a linguist', 'an anthropologist', 'an archaeologist', 'a geographer', 'a geologist', 'a historian', 'a marine biologist', 'a paleontologist', 'a physicist',
                                'a political scientist', 'a sociologist', 'a philosopher', 'a mathematician', 'a computer scientist', 'an economist', 'an astronomer'];

// Randomizer function activated by main button //
    const Randomize = (e) => {
        e.preventDefault();
// Check if the subject is MATH //
        if(chosen === ' MATH '){
            let mathResourceNum = Math.floor(Math.random() * Math.floor(6));
            let mathProductNum = Math.floor(Math.random() * Math.floor(15));
// if user wants to pick their own resources and or Products //
            if(resourceCustom === false){
                setResource1(MathResources[mathResourceNum]);
                setResource2(MathResources[mathResourceNum]);
                setResource3(MathResources[mathResourceNum]);
            }
            if(productCustom === false){
                setProduct1(MathProducts[mathProductNum]);
                setProduct2(MathProducts[mathProductNum]);
                setProduct3(MathProducts[mathProductNum]);
            }
        }
        else{
            let resourceNum = Math.floor(Math.random() * Math.floor(15));
            let productNum = Math.floor(Math.random() * Math.floor(38));
// if user wants to pick their own resources and or Products //
            if(resourceCustom === false){
                setResource1(Resources[resourceNum]);
                setResource2(Resources[resourceNum]);
                setResource3(Resources[resourceNum]);
            }
            if(productCustom === false){
                setProduct1(Products[productNum]);
                setProduct2(Products[productNum]);
                setProduct3(Products[productNum]);
            }
        }

// Check if the use imperatives switch has been activated or not //
        if(imps === false){
            setIcon1(Icons1[Math.floor(Math.random() * Math.floor(8))]);
            setIcon2(Icons2[Math.floor(Math.random() * Math.floor(10))]);
            let L3Icons = (Level3Combo[Math.floor(Math.random() * Math.floor(108))]);
            setIcon3(L3Icons[0]);
            setIcon4(L3Icons[1]);
            setParameters(L3Icons[2]);
        }
        if(imps === true){
            setIcon1(Icons12[Math.floor(Math.random() * Math.floor(10))]);
            setIcon2(Icons22[Math.floor(Math.random() * Math.floor(12))]);
            let L3Icons = (Level3Combo2[Math.floor(Math.random() * Math.floor(162))]);
            setIcon3(L3Icons[0]);
            setIcon4(L3Icons[1]);
            setParameters(L3Icons[2]);
        }
        if(thinkPro === true){
            setProfessional(AllProfressionals[Math.floor(Math.random() * Math.floor(16))]);
            setProfessional2(AllProfressionals[Math.floor(Math.random() * Math.floor(16))]);
            setProfessional3(AllProfressionals[Math.floor(Math.random() * Math.floor(16))]);
        }
        setL1Think(L1ThinkSkills[Math.floor(Math.random() * Math.floor(12))]);
        setL2Think(L2ThinkSkills[Math.floor(Math.random() * Math.floor(11))]);
        setL3Think(L3ThinkSkills[Math.floor(Math.random() * Math.floor(13))]);
        setSynonym1("");
        setSynonym2("");
        setSynonym3("");
        setSynonym4("");
    };

// set the state for the main subject //
    const subjectHandler = (e) => {
        setMainSubject(e.target.value);
    };

    const productHandler = (e) => {
        if (e.target.value !== '') {
            setProductCustom(true);
            setProduct1(e.target.value);
            setProduct2(e.target.value);
            setProduct3(e.target.value);
        } else {
            setProductCustom(false);
        }
    }

    const resourceHandler = (e) => {
        if (e.target.value !== ''){
            setResourceCustom(true);
            setResource1(e.target.value);
            setResource2(e.target.value);
            setResource3(e.target.value);
        } else {
            setResourceCustom(false);
        }
    }

// sets the imperatives to true or false, will tell the generator what icon pool to pull from //
    const addImperatives = () => {
        setImps(!imps);
    };

    const addThink = () => {
        setThinkPro(!thinkPro);
    };

    const OtherSelected = (e) =>{
        if(e.target.value === 'other'){
            setOther(true);
        } else{
            setOther(false);
        }
    };

    const OtherThinkSelected = (e) =>{
        if(e.target.value === 'other'){
            setOtherThink(true);
        } else{
            setOtherThink(false);
        }
    };

    const OtherProSelected = (e) =>{
        if(e.target.value === 'other'){
            setOtherPro(true);
        } else{
            setOtherPro(false);
        }
    };

    const OtherProductSelected = (e) =>{
        if(e.target.value === 'other'){
            setOtherProduct(true);
        } else{
            setOtherProduct(false);
        }
    };

    const OtherResourceSelected = (e) =>{
        if(e.target.value === 'other'){
            setOtherResource(true);
        } else{
            setOtherResource(false);
        }
    };

// ********************************   pop-up modal handlers  ****************************************** //
    const handleClose1 = () => {setShow1(false); 
        setOther(false);
        if(!other){
            setL1Think(textInput.current.value)}
        }
    const handleShow1 = () => {setShow1(true)};

    const handleClose2 = () => {
        setShow2(false);
        if(typeof textInput.current.value === "string"){
            setSynonym1(textInput.current.value.split(',')[0]);
        }
        else{
            setIcon1(textInput.current.value);
        } 
    };
    const handleShow2 = () => {setShow2(true)};

    const handleClose3 = () => {setShow3(false); 
        setOther(false);
        if(!other){
            setResource1(textInput.current.value)};
        }

    const handleShow3 = () => {setShow3(true)};

    const handleClose4 = () => {setShow4(false); 
        setOther(false);
        if(!other){
            setProduct1(textInput.current.value)};
        }
    const handleShow4 = () => {setShow4(true)};

    const handleClose5 = () => {setShow5(false); 
        setOther(false);
        if(!other){
            setL2Think(textInput.current.value)};
        }
    const handleShow5 = () => {setShow5(true)};

    const handleClose6 = () => {
        setShow6(false); 
        if(typeof textInput.current.value === "string"){
            setSynonym2(textInput.current.value.split(',')[0]);
        }
        else{
            setIcon2(textInput.current.value);
        }
    };
    const handleShow6 = () => {setShow6(true)};

    const handleClose7 = () => {setShow7(false); 
        setOther(false);
        if(!other){
            setResource2(textInput.current.value)};
        }
    const handleShow7 = () => {setShow7(true)};

    const handleClose8 = () => {setShow8(false); 
        setOther(false);
        if(!other){
            setProduct2(textInput.current.value)};
        }
    const handleShow8 = () => {setShow8(true)};

    const handleClose9 = () => {setShow9(false); 
        setOther(false);
        if(!other){
            setL3Think(textInput.current.value)};
        }
    const handleShow9 = () => {setShow9(true)};

    const handleClose10 = () => {setShow10(false); 
        setOther(false);
        if(!other){
            setResource3(textInput.current.value)};
        }
    const handleShow10 = () => {setShow10(true)};

    const handleClose11 = () => {setShow11(false); 
        setOther(false);
        if(!other){
            setProduct3(textInput.current.value)};
        }
    const handleShow11 = () => {setShow11(true)};

    const handleClose12 = () => {
        setShow12(false);
        if(typeof textInput.current.value === "string"){
            setSynonym3(textInput.current.value.split(',')[0]);
        } else{
            setIcon3(textInput.current.value);
        }
        if(typeof textInput2.current.value === "string"){
            setSynonym4(textInput2.current.value.split(',')[0]);
        } else{
            setIcon4(textInput2.current.value);
        }
        setParameters(textInput3.current.value)
    };
    const handleShow12 = () => {setShow12(true)};

    const handleClose15 = () => {setShow15(false); 
        setOther(false);
        if(!other){
            setWord(textInput.current.value)}
        }
    const handleShow15 = () => {setShow15(true)};

    const handleClose16 = () => {setShow16(false); 
        setOther(false);
        if(!other){
            setWord2(textInput.current.value)}
        }
    const handleShow16 = () => {setShow16(true)};

    const handleClose17 = () => {setShow17(false); 
        setOther(false);
        if(!other){
            setWord3(textInput.current.value)}
        }
    const handleShow17 = () => {setShow17(true)};

    const handleShow18 = () => {setShow18(true)};
    const handleClose18 = () => {setShow18(false); 
        setOther(false);
        if(!other){
            setVerb(textInput.current.value)}
        }

    const handleShow19 = () => {setShow19(true)};
    const handleClose19 = () => {setShow19(false); 
        setOther(false);
        if(!other){
            setVerb2(textInput.current.value)}
        }

    const handleShow20 = () => {setShow20(true)};
    const handleClose20 = () => {setShow20(false); 
        setOther(false);
        if(!other){
            setVerb3(textInput.current.value)}
        }

    const handleShow25 = () => {setShow25(true)};
    const handleClose25 = () => {setShow25(false); 
        setOther(false);
        if(!other){
            setProfessional(textInput.current.value)}
        }

    const handleShow26 = () => {setShow26(true)};
    const handleClose26 = () => {setShow26(false); 
        setOther(false);
        if(!other){
            setProfessional2(textInput.current.value)}
        }

    const handleShow27 = () => {setShow27(true)};
    const handleClose27 = () => {setShow27(false); 
        setOther(false);
        if(!other){
            setProfessional3(textInput.current.value)}
        }

    const handleShow28 = () => {setShow28(true)};
    const handleClose28 = () => {
        setOtherPro(false);
        setOtherProduct(false);
        setOtherResource(false);
        setOtherThink(false);
        setShow28(false);
        // check custom Main Subject //
        if (custTopicRef.current.value.length < 1){
            setCustMainSubject("");
        } else{
            setCustMainSubject(custTopicRef.current.value);
        }
        // check custom Thinking Skill
        if (!otherThink){
            setCustThinkingSkill(custThinkRef.current.value);
        }
        // check Icon 1
        if(typeof custIcon1Ref.current.value === "string"){
            setCustSynonym1(custIcon1Ref.current.value.split(',')[0]);
        }
        else{
            setCustIcon1(custIcon1Ref.current.value);
        }
        // check Icon 2
        if(typeof custIcon2Ref.current.value === "string"){
            setCustSynonym2(custIcon2Ref.current.value.split(',')[0]);
        }
        else{
            setCustIcon2(custIcon2Ref.current.value);
        }
        // check Disciplinarian
        if (custProRef.current.value === ""){
            setCustProfessional("");
            setCustThinkPro(false);
        } else if (!otherPro){
            setCustProfessional(custProRef.current.value);
            setCustThinkPro(true);
        } else if (otherPro){
            setCustThinkPro(true);
        }
        // check Resource
        if (!otherResource){
            setCustResource(custResourceRef.current.value);
        }
        // check Product
        if (!otherProduct){
            setCustProduct(custProductRef.current.value);
        }
    };

    const handleCustWord = () => {setShow29(true);}
    const handleCustWordClose = () =>{setShow29(false);
        setOther(false);
        if(!other){
            setCustWord(textInput.current.value);
        }
    }

    const handleCustParameters = () => {setShow30(true);}
    const handleCustParametersClose = () => {setShow30(false);
        setOther(false);
        if(!other){
            setCustParameters(textInput.current.value);
        }
    }

    const handleCustVerb = () => {setShow31(true);}
    const handleCustVerbClose = () => {setShow31(false);
        setOther(false);
        if(!other){
            setCustVerb(textInput.current.value);
        }
    }

    const triggerCustomize = () => {
        if(custom){
            setCustom(false);
            setCustParameters("");
            setCustWord("of");
            setCustVerb("can");
            setCustThinkPro(false);
            setCustProfessional("");
            setCustResource("");
            setCustThinkingSkill("");
            setCustProduct("");
            setCustIcon1(placeholder1);
            setCustIcon2("");
            setIcon1(placeholder1);
            setIcon2(placeholder2);
            setIcon3(placeholder3);
            setParameters("")
            setIcon4("");
            setL1Think("_______");
            setL2Think("_______");
            setL3Think("_______");
            setProduct1("_______");
            setProduct2("_______");
            setProduct3("_______");
            setResource1("_______");
            setResource2("_______");
            setResource3("_______");
            setThinkPro(false);
            setImps(false);
            setHide1(false);
            setHide2(false);
            setHide3(false);
        }
        else{
            setCustom(true);
            handleShow28();
        }
    }

    // Create styles
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#fafafa'
        },
        section: {
            margin: 20,
            padding: 20,
            lineHeight: 1.5,
            fontSize: 30,
            flexGrow: 1
        }
    });

    const StatementOne = () => {
        return(
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>
                            {thinkPro && `Thinking like ${professional}, `}I {verb} {l1Think} the {synonym1}<Image src={Icon1} alt={Icon1} /> {word} {mainSubject}.
                            I will get/organize information using {resource1} and share my findings in {product1}.
                        </Text>
                    </View>
                </Page>
            </Document>
        )
    };

    const StatementTwo = () => {
        return(
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>
                            {thinkPro && `Thinking like ${professional2}, `}I {verb2} {l2Think} the {synonym2}<Image src={Icon2} alt={Icon2} /> {word2} {mainSubject}.
                            I will get/organize information using {resource2} and share my findings in {product2}.
                        </Text>
                    </View>
                </Page>
            </Document>
        )
    };

    const StatementThree = () => {
        return(
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>
                            {thinkPro && `Thinking like ${professional3}, `}I {verb3} {l3Think} the {synonym3}<Image src={Icon3} alt={Icon3} /> {parameters} {synonym4}{Icon4 && <Image src={Icon4} alt={Icon4} />} {word3} {mainSubject}.
                            I will get/organize information using {resource3} and share my findings in {product3}.
                        </Text>
                    </View>
                </Page>
            </Document>
        )
    };

    const StatementFour = () => {
        return(
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>
                            {custThinkPro && `Thinking like ${custProfessional}, `}I {custVerb} {custThinkingSkill} the {custSynonym1}<Image src={custIcon1} alt={custIcon1} /> {custParameters} {custSynonym2}{custIcon2 && <Image src={custIcon2} alt={custIcon2} />} {custWord} {custMainSubject}.
                            I will get/organize information using {custResource} and share my findings in {custProduct}.
                        </Text>
                    </View>
                </Page>
            </Document>
        )
    };

// ******************************************************************************************* //

    return (
        <div className='dc-wrapper'>
            <div className='col-lg-12 row'>
                <SideBar HoverIn={HoverIn} HoverOut={HoverOut} custom={custom} triggerCustomize={triggerCustomize} chosen={chosen} setChosen={setChosen} addThink={addThink} addImperatives={addImperatives} imps={imps} thinkPro={thinkPro} resourceHandler={resourceHandler} productHandler={productHandler} />

        {custom === false ?
            <div className="col-lg-8 col-md-11 ml-lg-5 center mainContent">

{/* ****************************************************** Randomizer Button *********************************************** */}

                <div className="input-group mt-5 mb-4">
                    <input type="text" className='col-lg-6 offset-lg-2 col-sm-8 offset-sm-1 col-10 offset-0 form-control topic mr-1 enter' name="topic" placeholder= "Enter Topic" onChange={subjectHandler}/>
                    <button className="topic randoBtn" onClick={Randomize}> Differentiate! </button>
                </div>

                <div className={hide2 ? 'L2Hide mt-2' : 'L2 mt-2'} id={'normalCss'}>
{/* ********************************************************** Proficient *************************************************** */}
                    <div className='col-12 row secHeaders headerSection'>
                        <div>
                            {hide2
                                ? <p className='btn btn-sm hider' title='Add Statement' onClick={() => {setHide2(!hide2)}}><i className='bi bi-plus-circle'></i></p>
                                : 
                                <div className="col-12 selectDiv">
                                    <ul className='dcapOptions'>
                                        <li title="Print PDF">
                                            <PDFDownloadLink document={<StatementTwo />} fileName="DCAP_Statement.pdf">
                                                {() => {return <i className='bi bi-printer'></i>}}
                                            </PDFDownloadLink> 
                                        </li>
                                        <li title="Hide Section" onClick={() => setHide2(!hide2)}> <i className='bi bi-x-circle'></i> </li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                    {hide2 === false &&
                        <div className='statement'>
                            <p>{thinkPro && <span>Thinking like <span onClick={handleShow26} className='l1r mouse'>{professional2}</span>, </span> }I <span onClick={handleShow19} className='l2t mouse'>{verb2}</span> <span onClick={handleShow5} className='l2t mouse'> {l2Think} </span> the {synonym2}<span onClick={handleShow6}><img src={Icon2} alt={Icon2} className={synonym2 === '' ? 'Icon2 mouseBox' : 'grayIcon'} draggable="false"/></span> <span onClick={handleShow16} className='l2t mouse'> {word2} </span> {mainSubject}. 
                            I will get/organize information using <span onClick={handleShow7} className='l2r mouse'> {resource2} </span> and share my findings in <span onClick={handleShow8} className='l2p mouse'> {product2}</span>.</p>
                        </div>
                    }
                </div>

                <div className={hide1 ? 'L1Hide mt-4' : 'L1 mt-4'} id={'normalCss'}>
{/* ********************************************************** Stratigic **************************************************** */}
                    <div className='col-12 row secHeaders headerSection'>
                        <div>
                            {hide1
                                ?
                                    <p className='btn btn-sm hider' title='Add Statement' onClick={() => {setHide1(!hide1)}}><i className='bi bi-plus-circle'></i></p>
                                :
                                <div className="col-12 selectDiv">
                                    <ul className='dcapOptions'>
                                        <li title="Print PDF">
                                            <PDFDownloadLink document={<StatementOne />} fileName="DCAP_Statement.pdf">
                                                {() => {return <i className='bi bi-printer'></i>}}
                                            </PDFDownloadLink> 
                                        </li>
                                        <li title="Hide Section" onClick={() => setHide1(!hide1)}> <i className='bi bi-x-circle'></i> </li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                    {hide1 === false &&
                        <div className='statement'>
                            <p>{thinkPro && <span>Thinking like <span onClick={handleShow25} className='l1r mouse'>{professional}</span>, </span> }I <span onClick={handleShow18} className='l2t mouse'>{verb}</span> <span onClick={handleShow1} className='l1t mouse'> {l1Think} </span> the {synonym1}<span onClick={handleShow2}><img src={Icon1} alt={Icon1} className={synonym1 === '' ? 'Icon1 mouseBox' : 'grayIcon'} draggable="false"/></span> <span onClick={handleShow15} className='l2t mouse'> {word} </span> {mainSubject}.
                            I will get/organize information using <span onClick={handleShow3} className='l1r mouse'> {resource1} </span> and share my findings in <span onClick={handleShow4} className='l1p mouse'> {product1}</span>.</p>
                        </div>
                    }
                </div>

                <div className={hide3 ? 'L3Hide mt-4 advancedSection' : 'L3 mt-4 advancedSection'} id={'normalCss'}>
{/* ********************************************************** Advanced **************************************************** */}
                    <div className='col-12 row secHeaders headerSection'>
                        <div>
                            {hide3
                                ? <p className='btn btn-sm hider' title='Add Statement' onClick={() => {setHide3(!hide3)}}><i className='bi bi-plus-circle'></i></p>
                                :
                                <div className="col-12 selectDiv">
                                    <ul className='dcapOptions'>
                                        <li title="Print PDF">
                                            <PDFDownloadLink document={<StatementThree />} fileName="DCAP_Statement.pdf">
                                                {() => {return <i className='bi bi-printer'></i>}}
                                            </PDFDownloadLink> 
                                        </li>
                                        <li title="Hide Section" onClick={() => setHide3(!hide3)}> <i className='bi bi-x-circle'></i> </li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                    {hide3 === false &&
                        <div className='statement'>
                            <p>{thinkPro && <span>Thinking like <span onClick={handleShow27} className='l1r mouse'>{professional3}</span>, </span> }I <span onClick={handleShow20} className='l2t mouse'>{verb3}</span> <span onClick={handleShow9} className='l3t mouse'> {l3Think} </span> the {synonym3}<span onClick={handleShow12}><img src={Icon3} alt={Icon3} className={synonym3 === '' ? 'Icon3 mouseBox' : 'grayIcon'} draggable="false"/></span> {parameters} {synonym4}<span onClick={handleShow12} >{Icon4 === "" ? <></> : <img src={Icon4} alt={Icon4} className={synonym4 === '' ? 'Icon3 mouseBox' : 'grayIcon'} draggable="false"/>}</span> <span onClick={handleShow17} className='l2t mouse'> {word3} </span> {mainSubject}.
                            I will get/organize information using <span onClick={handleShow10} className='l3r mouse'> {resource3} </span> and share my findings in <span onClick={handleShow11} className='l3p mouse'> {product3}</span>.</p>
                        </div>
                    }
                </div>
            </div>

            :
///* ********************************************************** Full Custom Section // Open Saved File **************************************************** *///

            <div className="col-lg-8 col-md-11 ml-lg-5 center mainContent">
                    <div className='L4 mt-5' id={'normalCss'}>
                        <div className='col-12 row secHeaders headerSection'>
                            <div>
                                <div className="col-12 selectDiv">
                                    <ul className='dcapOptions'>
                                        <li title="Print PDF">
                                            <PDFDownloadLink document={<StatementFour />} fileName="DCAP_Statement.pdf">
                                                {() => {return <i className='bi bi-printer'></i>}}
                                            </PDFDownloadLink> 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='statement'>
                            <p>{custThinkPro && <span>Thinking like {custProfessional}, </span> }I <span onClick={handleCustVerb} className='l2t mouse'>{custVerb}</span> {custThinkingSkill} the {custSynonym1}<img src={custIcon1} alt={custIcon1} onClick={handleCustParameters} className={custSynonym1 === '' ? 'Icon3 mouseBox' : 'grayIcon'} draggable="false"/> {custParameters} {custSynonym2}{custIcon2 === "" ? <></> : <img src={custIcon2} onClick={handleCustParameters} className={custSynonym2 === "" ? 'Icon3 mouseBox' : 'grayIcon'} alt={custIcon2} draggable="false"/>} <span onClick={handleCustWord} className='l2t mouse'> {custWord} </span> {custMainSubject}.
                            I will get/organize information using {custResource} and share my findings in {custProduct}.</p>
                        </div>
                    </div>
            </div>
            }
        </div>

{/* ********************************************************  ALL Modals **************************************************** */}

{/* Modal #1 for Level 1 Thinking Skills */}
            <Modal show={show1}  size="xl">
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Thinking Skill</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className='table table-bordered'>
                        <tbody>
                            <tr>
                                <td onClick={() => {setL1Think("list"); setShow1(false);}}> list </td>
                                <td onClick={() => {setL1Think("gather evidence to support"); setShow1(false);}}> gather evidence to support </td>
                                <td onClick={() => {setL1Think("redesign"); setShow1(false);}}> redesign </td>
                                <td onClick={() => {setL1Think("define"); setShow1(false);}}> define </td>
                            </tr>
                            <tr>
                                <td onClick={() => {setL1Think("question"); setShow1(false);}}>question</td>
                                <td onClick={() => {setL1Think("add to"); setShow1(false);}}>add to</td>
                                <td onClick={() => {setL1Think("state"); setShow1(false);}}>state</td>
                                <td onClick={() => {setL1Think("prove"); setShow1(false);}}>prove</td>
                            </tr>
                            <tr>
                                <td onClick={() => {setL1Think("summarize"); setShow1(false);}}>summarize</td>
                                <td onClick={() => {setL1Think("defend"); setShow1(false);}}>defend</td>
                                <td onClick={() => {setL1Think("describe"); setShow1(false);}}>describe</td>
                                <td onClick={() => {setL1Think("differentiate"); setShow1(false);}}>differentiate</td>
                            </tr>
                            <tr>
                                <td onClick={() => {setL1Think("discuss"); setShow1(false);}}>discuss</td>
                                <td onClick={() => {setL1Think("judge"); setShow1(false);}}>judge</td>
                                <td onClick={() => {setL1Think("explain"); setShow1(false);}}>explain</td>
                                <td onClick={() => {setL1Think("determine the relevance"); setShow1(false);}}>determine the relevance</td>
                            </tr>
                            <tr>
                                <td onClick={() => {setL1Think("identify"); setShow1(false);}}>identify</td>
                                <td onClick={() => {setL1Think("note ambiguity"); setShow1(false);}}>note ambiguity</td>
                                <td onClick={() => {setL1Think("paraphrase"); setShow1(false);}}>paraphrase</td>
                                <td onClick={() => {setL1Think("state & test assumptions"); setShow1(false);}}>state & test assumptions</td>
                            </tr>
                            <tr>
                                <td onClick={() => {setL1Think("sequence"); setShow1(false);}}>sequence</td>
                                <td onClick={() => {setL1Think("evaluate"); setShow1(false);}}>evaluate</td>
                                <td onClick={() => {setL1Think("recognize"); setShow1(false);}}>recognize</td>
                                <td onClick={() => {setL1Think("compare & contrast"); setShow1(false);}}>compare & contrast</td>
                            </tr>
                            <tr>
                                <td onClick={() => {setL1Think("categorize"); setShow1(false);}}>categorize</td>
                                <td onClick={() => {setL1Think("support"); setShow1(false);}}>support</td>
                                <td onClick={() => {setL1Think("examine"); setShow1(false);}}>examine</td>
                                <td onClick={() => {setL1Think("interpret"); setShow1(false);}}>interpret</td>
                            </tr>
                            <tr>
                                <td className='input_td'>
                                    <input type="text" onChange={(e) => setL1Think(e.target.value)} placeholder="Add Your Own" className='form-control input-sm'/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setShow1(false)}>
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Modal #2 for Level 1 Icon */}
            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Icon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <table>
                        <tbody>
                            <tr>
                                <td onClick={() => {setIcon1(Rules); setShow2(false);}}><img src={Rules}/> Rules</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* <select className='form-control' ref={textInput} onChange={(e) => setIcon1(e.target.value)}>
                        <optgroup label="Depth & Complexity Icons">
                            <option value="" disabled selected>Select an Icon</option>
                            <option value={Rules}>Rules</option>
                            <option value={Language}>Language of Discipline</option>
                            <option value={Details}>Details</option>
                            <option value={Patterns}>Patterns</option>
                            <option value={Ethics}>Ethics</option>
                            <option value={BigIdea}>Big Idea</option>
                            <option value={Multiple}>Multiple Perspectives</option>
                            <option value={OverTime}>Over Time</option>
                            <option value={Trends}>Trends</option>
                            <option value={Unanswered}>Unanswered Questions</option>
                            <option value={Across}>Across Disciplines</option>
                        </optgroup>
                        <optgroup label="Content Imperatives">
                            <option value={Parallel}>Parallel</option>
                            <option value={Paradox}>Paradox</option>
                            <option value={Origin}>Origin</option>
                            <option value={Convergence}>Convergence</option>
                            <option value={Contribution}>Contribution</option>
                        </optgroup>
                    </select> */}
                </Modal.Body>
                {/* Synonyms for Icon 1 */}
                <Modal.Body>
                    <select name='iconSyn' className='form-control' ref={textInput}>
                        <option value="" disabled selected>Select an Icon Synonym (optional)</option>
                        <option value="">None/Reset</option>
                        {Icon1 === Rules &&
                            <optgroup label="Rules">
                                <option value="structure">Structure</option>
                                <option value="order">Order</option>
                                <option value="reasons">Reasons</option>
                                <option value="regulation">Regulation</option>
                                <option value="principle">Principle</option>
                                <option value="framework">Framework</option>
                                <option value="law">Law</option>
                                <option value="standards">standards</option>
                            </optgroup>
                        }
                        {Icon1 === Language &&
                        <optgroup label="Language of Discipline">
                            <option value="words">Words</option>
                            <option value="vocabulary">Vocabulary</option>
                            <option value="nomenclature">Nomenclature</option>
                            <option value="lexicon">Lexicon</option>
                            <option value="terms">Terms</option>
                            <option value="vernacular">Vernacular</option>
                            <option value="terminology">Terminology</option>
                            <option value="jargon">Jargon</option>
                        </optgroup>
                        }
                        {Icon1 === Details &&
                        <optgroup label="Details">
                            <option value="parts">Parts</option>
                            <option value="factors">Factors</option>
                            <option value="attributes">Attributes</option>
                            <option value="characteristics">Characteristics</option>
                            <option value="variables">Variables</option>
                            <option value="clues">Clues</option>
                            <option value="ideas">Ideas</option>
                            <option value="specifics">Specifics</option>
                        </optgroup>
                        }
                        {Icon1 === Patterns &&
                        <optgroup label="Patterns">
                            <option value="cycle">Cycle</option>
                            <option value="sequence">Sequence</option>
                            <option value="routine">Routine</option>
                            <option value="reoccurring event">Reoccurring Event</option>
                            <option value="reoccurring idea">Reoccurring Idea</option>
                            <option value="repeating event">Repeating Event</option>
                            <option value="repeating idea">Repeating Idea</option>
                            <option value="pattern of behavior">Pattern of behavior</option>
                        </optgroup>
                        }
                        {Icon1 === Ethics &&
                        <optgroup label="Ethics">
                            <option value="values">Values</option>
                            <option value="morals">Morals</option>
                            <option value="bias">Bias</option>
                            <option value="debate">Debate</option>
                            <option value="discrimination">Discrimination</option>
                            <option value="controversies">Controversies</option>
                            <option value="judging">Judging</option>
                            <option value="dilemmas">Dilemmas</option>
                        </optgroup>
                        }
                        {Icon1 === BigIdea &&
                        <optgroup label="Big Idea">
                            <option value="generalizations">Generalizations</option>
                            <option value="principles">Principles</option>
                            <option value="theories">Theories</option>
                            <option value="laws">Laws</option>
                            <option value="main idea">Main Idea</option>
                            <option value="summarization">Summarization</option>
                            <option value="overarching statement">Overarching Statement</option>
                            <option value="general statement">General Statement</option>
                        </optgroup>
                        }
                        {Icon1 === Multiple &&
                        <optgroup label="Multiple Perspectives">
                            <option value="point of view">Point of View</option>
                            <option value="stance">Stance</option>
                            <option value="outlook">Outlook</option>
                            <option value="perspective">Perspective</option>
                            <option value="different roles and knowledge">Different Roles and Knowledge</option>
                            <option value="philosophy">Philosophy</option>
                            <option value="view">View</option>
                            <option value="position">Position</option>
                        </optgroup>
                        }
                        {Icon1 === OverTime &&
                        <optgroup label="Over Time">
                            <option value="past present & future">Past, Present, Future</option>
                            <option value="correlations">Correlations</option>
                            <option value="reflections">Reflections</option>
                            <option value="connections">Connections</option>
                            <option value="change over time">Change over time</option>
                            <option value="predictions">Predictions</option>
                            <option value="relationships within a time period">Relationships Within a Time Period</option>
                            <option value="time perspective">Time Perspective</option>
                        </optgroup>
                        }
                        {Icon1 === Trends &&
                        <optgroup label="Trends">
                            <option value="influence">Influence</option>
                            <option value="forces">Forces</option>
                            <option value="general direction">General Direction</option>
                            <option value="impact">Impact</option>
                            <option value="fad">Fad</option>
                            <option value="tendency">Tendency</option>
                            <option value="course of action">Course of Action</option>
                            <option value="ongoing factors">Ongoing Factors</option>
                        </optgroup>
                        }
                        {Icon1 === Unanswered &&
                        <optgroup label="Unanswered Questions">
                            <option value="discrepancies">Discrepancies</option>
                            <option value="unclear">Unclear</option>
                            <option value="incomplete">Incomplete</option>
                            <option value="unexplained">Unexplained</option>
                            <option value="unresolved">Unresolved</option>
                            <option value="unknown">Unknown</option>
                            <option value="missing element">Missing element</option>
                            <option value="conundrum">Conundrum</option>
                        </optgroup>
                        }
                        {Icon1 === Across &&
                        <optgroup label="Across Disciplines">
                            <option value="interdisciplinary relationships">Interdisciplinary relationships</option>
                            <option value="cross-curricular connections">Cross-curricular connections</option>
                            <option value="connect">Connect</option>
                            <option value="associate">Associate</option>
                            <option value="integrate">Integrate</option>
                            <option value="relationships">Relationships</option>
                            <option value="cross=disciplinary connections">Cross-disciplinary connections</option>
                            <option value="common elements">Common elements</option>
                        </optgroup>
                        }
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose2}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose2}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Modal #3 for level 1 resource */}
            <Modal show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Resource</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={resource1} ref={textInput} onChange={OtherSelected}>
                        <option value='a textbook'>textbook</option>
                        <option value="an encyclopedia">encycopedia</option>
                        <option value="a library book">library book</option>
                        <option value="a magazine">magazine</option>
                        <option value="a newspaper">newspaper</option>
                        <option value="an interview">interview</option>
                        <option value="an expert">expert</option>
                        <option value="a website">website</option>
                        <option value="an online encyclopedia">encyclopedia</option>
                        <option value="a journal">journal</option>
                        <option value="an article">article</option>
                        <option value="Wikipedia">Wikipedia</option>
                        <option value="an outline">outline</option>
                        <option value="a video">video</option>
                        <option value="a novel">novel</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setResource1(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose3}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose3}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Modal #4 for level 1 product */}
            <Modal show={show4} onHide={handleClose4}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={product1} ref={textInput} onChange={OtherSelected}>
                        <option value="a chart">chart</option>
                        <option value="a drawing">drawing</option>
                        <option value="a timeline">timeline</option>
                        <option value="a diagram">diagram</option>
                        <option value="a graphic organizer">graphic organizer</option>
                        <option value="a comic">comic</option>
                        <option value="a map">map</option>
                        <option value="a book cover">book cover</option>
                        <option value="a poster">poster</option>
                        <option value="a museum exhibit">museum exhibit</option>
                        <option value="a mobile">mobile</option>
                        <option value="a sculpture">sculpture</option>
                        <option value="an art gallery">art gallery</option>
                        <option value="a debate">debate</option>
                        <option value="a panel discussion">panel discussion</option>
                        <option value="a lesson taught to the class">lesson taught to the class</option>
                        <option value="a report">report</option>
                        <option value="a play">play</option>
                        <option value="a press conference">press conference</option>
                        <option value="a TV show">TV show</option>
                        <option value="a monologue">monologue</option>
                        <option value="a movie review">movie review</option>
                        <option value="a song">song</option>
                        <option value="a powerpoint">powerpoint</option>
                        <option value="Google slides">Google slides</option>
                        <option value="a photo essay">photo essay</option>
                        <option value="a news report">news report</option>
                        <option value="a webpage">webpage</option>
                        <option value="a persuasive essay">persuasive essay</option>
                        <option value="a letter">letter</option>
                        <option value="a children's story">children's story</option>
                        <option value="a poem">poem</option>
                        <option value="a diary entry">diary entry</option>
                        <option value="a reader's theater">reader's theater</option>
                        <option value="a game">game</option>
                        <option value="a puzzle">puzzle</option>
                        <option value="a paragraph">paragraph</option>
                        <option value="a travelogue">travelogue</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setProduct1(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose4}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose4}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Modal #5 for Level 2 Thinking Skills */}
            <Modal show={show5} onHide={handleClose5}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Thinking Skill</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={l2Think} ref={textInput} onChange={OtherSelected}>
                        <optgroup label="Thinking Skills">
                            <option value="list">list</option>
                            <option value="define">define</option>
                            <option value="state">state</option>
                            <option value="summarize">summarize</option>
                            <option value="describe">describe</option>
                            <option value="discuss">discuss</option>
                            <option value="explain">explain</option>
                            <option value="identify">identify</option>
                            <option value="paraphrase">paraphrase</option>
                            <option value="sequence">sequence</option>
                            <option value="recognize">recognize</option>
                            <option value="compare & contrast">compare & contrast</option>
                            <option value="categorize">categorize</option>
                            <option value="support">support</option>
                            <option value="examine">examine</option>
                            <option value="interpret">interpret</option>
                        </optgroup>
                        <optgroup label="Critial Thinking Skills">
                            <option value="gather evidence to support of">gather evidence to support</option>
                            <option value="question">question</option>
                            <option value="prove">prove</option>
                            <option value="defend">defend</option>
                            <option value="differentiate">differentiate</option>
                            <option value="judge">judge</option>
                            <option value="determine the relevance of">determine the relevance</option>
                            <option value="note abmiguity">note ambiguity</option>
                            <option value="state & test assumptions of">state & test assumptions</option>
                            <option value="evaluate">evaluate</option>
                        </optgroup>
                        <optgroup label="Creative Thinking Skills">
                            <option value="redesign">redesign</option>
                            <option value="add to">add to</option>
                            <option value="other">Add your own</option>
                        </optgroup>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setL2Think(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control' />}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose5}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose5}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Modal #6 for Level 2 Icon */}
            <Modal show={show6} onHide={handleClose6}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Icon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} onChange={(e) => setIcon2(e.target.value)}>
                        <optgroup label="Depth & Complexity Icons">
                            <option value="" selected disabled>Select an Icon</option>
                            <option value={Rules}>Rules</option>
                            <option value={Language}>Language of Discipline</option>
                            <option value={Details}>Details</option>
                            <option value={Patterns}>Patterns</option>
                            <option value={Ethics}>Ethics</option>
                            <option value={BigIdea}>Big Idea</option>
                            <option value={Multiple}>Multiple Perspectives</option>
                            <option value={OverTime}>Over Time</option>
                            <option value={Trends}>Trends</option>
                            <option value={Unanswered}>Unanswered Questions</option>
                            <option value={Across}>Across Disciplines</option>
                        </optgroup>
                        <optgroup label="Content Imperatives">
                            <option value={Parallel}>Parallel</option>
                            <option value={Paradox}>Paradox</option>
                            <option value={Origin}>Origin</option>
                            <option value={Convergence}>Convergence</option>
                            <option value={Contribution}>Contribution</option>
                        </optgroup>
                    </select>
                </Modal.Body>
                {/* Synonyms for Icon 2 */}
                <Modal.Body>
                    <select name='iconSyn' className='form-control' ref={textInput}>
                        <option value="" disabled selected>Select an Icon Synonym (optional)</option>
                        <option value="">None/Reset</option>
                        {Icon2 === Rules &&
                            <optgroup label="Rules">
                                <option value="structure">Structure</option>
                                <option value="order">Order</option>
                                <option value="reasons">Reasons</option>
                                <option value="regulation">Regulation</option>
                                <option value="principle">Principle</option>
                                <option value="framework">Framework</option>
                                <option value="law">Law</option>
                                <option value="standards">standards</option>
                            </optgroup>
                        }
                        {Icon2 === Language &&
                        <optgroup label="Language of Discipline">
                            <option value="words">Words</option>
                            <option value="vocabulary">Vocabulary</option>
                            <option value="nomenclature">Nomenclature</option>
                            <option value="lexicon">Lexicon</option>
                            <option value="terms">Terms</option>
                            <option value="vernacular">Vernacular</option>
                            <option value="terminology">Terminology</option>
                            <option value="jargon">Jargon</option>
                        </optgroup>
                        }
                        {Icon2 === Details &&
                        <optgroup label="Details">
                            <option value="parts">Parts</option>
                            <option value="factors">Factors</option>
                            <option value="attributes">Attributes</option>
                            <option value="characteristics">Characteristics</option>
                            <option value="variables">Variables</option>
                            <option value="clues">Clues</option>
                            <option value="ideas">Ideas</option>
                            <option value="specifics">Specifics</option>
                        </optgroup>
                        }
                        {Icon2 === Patterns &&
                        <optgroup label="Patterns">
                            <option value="cycle">Cycle</option>
                            <option value="sequence">Sequence</option>
                            <option value="routine">Routine</option>
                            <option value="reoccurring event">Reoccurring Event</option>
                            <option value="reoccurring idea">Reoccurring Idea</option>
                            <option value="repeating event">Repeating Event</option>
                            <option value="repeating idea">Repeating Idea</option>
                            <option value="pattern of behavior">Pattern of behavior</option>
                        </optgroup>
                        }
                        {Icon2 === Ethics &&
                        <optgroup label="Ethics">
                            <option value="values">Values</option>
                            <option value="morals">Morals</option>
                            <option value="bias">Bias</option>
                            <option value="debate">Debate</option>
                            <option value="discrimination">Discrimination</option>
                            <option value="controversies">Controversies</option>
                            <option value="judging">Judging</option>
                            <option value="dilemmas">Dilemmas</option>
                        </optgroup>
                        }
                        {Icon2 === BigIdea &&
                        <optgroup label="Big Idea">
                            <option value="generalizations">Generalizations</option>
                            <option value="principles">Principles</option>
                            <option value="theories">Theories</option>
                            <option value="laws">Laws</option>
                            <option value="main idea">Main Idea</option>
                            <option value="summarization">Summarization</option>
                            <option value="overarching statement">Overarching Statement</option>
                            <option value="general statement">General Statement</option>
                        </optgroup>
                        }
                        {Icon2 === Multiple &&
                        <optgroup label="Multiple Perspectives">
                            <option value="point of view">Point of View</option>
                            <option value="stance">Stance</option>
                            <option value="outlook">Outlook</option>
                            <option value="perspective">Perspective</option>
                            <option value="different roles and knowledge">Different Roles and Knowledge</option>
                            <option value="philosophy">Philosophy</option>
                            <option value="view">View</option>
                            <option value="position">Position</option>
                        </optgroup>
                        }
                        {Icon2 === OverTime &&
                        <optgroup label="Over Time">
                            <option value="past present & future">Past, Present, Future</option>
                            <option value="correlations">Correlations</option>
                            <option value="reflections">Reflections</option>
                            <option value="connections">Connections</option>
                            <option value="change over time">Change over time</option>
                            <option value="predictions">Predictions</option>
                            <option value="relationships within a time period">Relationships Within a Time Period</option>
                            <option value="time perspective">Time Perspective</option>
                        </optgroup>
                        }
                        {Icon2 === Trends &&
                        <optgroup label="Trends">
                            <option value="influence">Influence</option>
                            <option value="forces">Forces</option>
                            <option value="general direction">General Direction</option>
                            <option value="impact">Impact</option>
                            <option value="fad">Fad</option>
                            <option value="tendency">Tendency</option>
                            <option value="course of action">Course of Action</option>
                            <option value="ongoing factors">Ongoing Factors</option>
                        </optgroup>
                        }
                        {Icon2 === Unanswered &&
                        <optgroup label="Unanswered Questions">
                            <option value="discrepancies">Discrepancies</option>
                            <option value="unclear">Unclear</option>
                            <option value="incomplete">Incomplete</option>
                            <option value="unexplained">Unexplained</option>
                            <option value="unresolved">Unresolved</option>
                            <option value="unknown">Unknown</option>
                            <option value="missing element">Missing element</option>
                            <option value="conundrum">Conundrum</option>
                        </optgroup>
                        }
                        {Icon2 === Across &&
                        <optgroup label="Across Disciplines">
                            <option value="interdisciplinary relationships">Interdisciplinary relationships</option>
                            <option value="cross-curricular connections">Cross-curricular connections</option>
                            <option value="connect">Connect</option>
                            <option value="associate">Associate</option>
                            <option value="integrate">Integrate</option>
                            <option value="relationships">Relationships</option>
                            <option value="cross=disciplinary connections">Cross-disciplinary connections</option>
                            <option value="common elements">Common elements</option>
                        </optgroup>
                        }
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose6}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose6}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Modal #7 for level 2 resource */}
            <Modal show={show7} onHide={handleClose7}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Resource</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={resource2} ref={textInput} onChange={OtherSelected}>
                        <option value='a textbook'>textbook</option>
                        <option value="an encyclopedia">encycopedia</option>
                        <option value="a library book">library book</option>
                        <option value="a magazine">magazine</option>
                        <option value="a newspaper">newspaper</option>
                        <option value="an interview">interview</option>
                        <option value="an expert">expert</option>
                        <option value="a website">website</option>
                        <option value="an online encyclopedia">encyclopedia</option>
                        <option value="a journal">journal</option>
                        <option value="an article">article</option>
                        <option value="Wikipedia">Wikipedia</option>
                        <option value="an outline">outline</option>
                        <option value="a video">video</option>
                        <option value="a novel">novel</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setResource2(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose7}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose7}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Modal #8 for level 2 product */}
            <Modal show={show8} onHide={handleClose8}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={product2} ref={textInput} onChange={OtherSelected}>
                        <option value="a chart">chart</option>
                        <option value="a drawing">drawing</option>
                        <option value="a timeline">timeline</option>
                        <option value="a diagram">diagram</option>
                        <option value="a graphic organizer">graphic organizer</option>
                        <option value="a comic">comic</option>
                        <option value="a map">map</option>
                        <option value="a book cover">book cover</option>
                        <option value="a poster">poster</option>
                        <option value="a museum exhibit">museum exhibit</option>
                        <option value="a mobile">mobile</option>
                        <option value="a sculpture">sculpture</option>
                        <option value="an art gallery">art gallery</option>
                        <option value="a debate">debate</option>
                        <option value="a panel discussion">panel discussion</option>
                        <option value="a lesson taught to the class">lesson taught to the class</option>
                        <option value="a report">report</option>
                        <option value="a play">play</option>
                        <option value="a press conference">press conference</option>
                        <option value="a TV show">TV show</option>
                        <option value="a monologue">monologue</option>
                        <option value="a movie review">movie review</option>
                        <option value="a song">song</option>
                        <option value="a powerpoint">powerpoint</option>
                        <option value="Google slides">Google slides</option>
                        <option value="a photo essay">photo essay</option>
                        <option value="a news report">news report</option>
                        <option value="a webpage">webpage</option>
                        <option value="a persuasive essay">persuasive essay</option>
                        <option value="a letter">letter</option>
                        <option value="a children's story">children's story</option>
                        <option value="a poem">poem</option>
                        <option value="a diary entry">diary entry</option>
                        <option value="a reader's theater">reader's theater</option>
                        <option value="a game">game</option>
                        <option value="a puzzle">puzzle</option>
                        <option value="a paragraph">paragraph</option>
                        <option value="a travelogue">travelogue</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setProduct2(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose8}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose8}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Modal #9 for Level 3 Thinking Skills */}
            <Modal show={show9} onHide={handleClose9}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Thinking Skill</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={l3Think} ref={textInput} onChange={OtherSelected}>
                        <optgroup label="Thinking Skills">
                            <option value="list">list</option>
                            <option value="define">define</option>
                            <option value="state">state</option>
                            <option value="summarize">summarize</option>
                            <option value="describe">describe</option>
                            <option value="discuss">discuss</option>
                            <option value="explain">explain</option>
                            <option value="identify">identify</option>
                            <option value="paraphrase">paraphrase</option>
                            <option value="sequence">sequence</option>
                            <option value="recognize">recognize</option>
                            <option value="compare & contrast">compare & contrast</option>
                            <option value="categorize">categorize</option>
                            <option value="support">support</option>
                            <option value="examine">examine</option>
                            <option value="interpret">interpret</option>
                        </optgroup>
                        <optgroup label="Critial Thinking Skills">
                            <option value="gather evidence to support of">gather evidence to support</option>
                            <option value="question">question</option>
                            <option value="prove">prove</option>
                            <option value="defend">defend</option>
                            <option value="differentiate">differentiate</option>
                            <option value="judge">judge</option>
                            <option value="determine the relevance of">determine the relevance</option>
                            <option value="note abmiguity">note ambiguity</option>
                            <option value="state & test assumptions of">state & test assumptions</option>
                            <option value="evaluate">evaluate</option>
                        </optgroup>
                        <optgroup label="Creative Thinking Skills">
                            <option value="redesign">redesign</option>
                            <option value="add to">add to</option>
                            <option value="other">Add your own</option>
                        </optgroup>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setL3Think(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose9}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose9}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Modal #10 for level 3 resource */}
            <Modal show={show10} onHide={handleClose10}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Resource</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={resource3} ref={textInput} onChange={OtherSelected}>
                        <option value='a textbook'>textbook</option>
                        <option value="an encyclopedia">encycopedia</option>
                        <option value="a library book">library book</option>
                        <option value="a magazine">magazine</option>
                        <option value="a newspaper">newspaper</option>
                        <option value="an interview">interview</option>
                        <option value="an expert">expert</option>
                        <option value="a website">website</option>
                        <option value="an online encyclopedia">encyclopedia</option>
                        <option value="a journal">journal</option>
                        <option value="an article">article</option>
                        <option value="Wikipedia">Wikipedia</option>
                        <option value="an outline">outline</option>
                        <option value="a video">video</option>
                        <option value="a novel">novel</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setResource3(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose10}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose10}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Modal #11 for level 3 product */}
            <Modal show={show11} onHide={handleClose11}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={product3} ref={textInput} onChange={OtherSelected}>
                        <option value="a chart">chart</option>
                        <option value="a drawing">drawing</option>
                        <option value="a timeline">timeline</option>
                        <option value="a diagram">diagram</option>
                        <option value="a graphic organizer">graphic organizer</option>
                        <option value="a comic">comic</option>
                        <option value="a map">map</option>
                        <option value="a book cover">book cover</option>
                        <option value="a poster">poster</option>
                        <option value="a museum exhibit">museum exhibit</option>
                        <option value="a mobile">mobile</option>
                        <option value="a sculpture">sculpture</option>
                        <option value="an art gallery">art gallery</option>
                        <option value="a debate">debate</option>
                        <option value="a panel discussion">panel discussion</option>
                        <option value="a lesson taught to the class">lesson taught to the class</option>
                        <option value="a report">report</option>
                        <option value="a play">play</option>
                        <option value="a press conference">press conference</option>
                        <option value="a TV show">TV show</option>
                        <option value="a monologue">monologue</option>
                        <option value="a movie review">movie review</option>
                        <option value="a song">song</option>
                        <option value="a powerpoint">powerpoint</option>
                        <option value="Google slides">Google slides</option>
                        <option value="a photo essay">photo essay</option>
                        <option value="a news report">news report</option>
                        <option value="a webpage">webpage</option>
                        <option value="a persuasive essay">persuasive essay</option>
                        <option value="a letter">letter</option>
                        <option value="a children's story">children's story</option>
                        <option value="a poem">poem</option>
                        <option value="a diary entry">diary entry</option>
                        <option value="a reader's theater">reader's theater</option>
                        <option value="a game">game</option>
                        <option value="a puzzle">puzzle</option>
                        <option value="a paragraph">paragraph</option>
                        <option value="a travelogue">travelogue</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setProduct3(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose11}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose11}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Modal #12 for Level 3 Icons */}
            <Modal show={show12} onHide={handleClose12}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Icon(s)</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} onChange={(e) => setIcon3(e.target.value)}>
                        <optgroup label="Depth & Complexity Icons">
                            <option value="" selected disabled>Select an Icon</option>
                            <option value={Rules}>Rules</option>
                            <option value={Language}>Language of Discipline</option>
                            <option value={Details}>Details</option>
                            <option value={Patterns}>Patterns</option>
                            <option value={Ethics}>Ethics</option>
                            <option value={BigIdea}>Big Idea</option>
                            <option value={Multiple}>Multiple Perspectives</option>
                            <option value={OverTime}>Over Time</option>
                            <option value={Trends}>Trends</option>
                            <option value={Unanswered}>Unanswered Questions</option>
                            <option value={Across}>Across Disciplines</option>
                        </optgroup>
                        <optgroup label="Content Imperatives">
                            <option value={Parallel}>Parallel</option>
                            <option value={Paradox}>Paradox</option>
                            <option value={Origin}>Origin</option>
                            <option value={Convergence}>Convergence</option>
                            <option value={Contribution}>Contribution</option>
                        </optgroup>
                    </select>

                    <select className='form-control mt-1' ref={textInput}>
                        <option value="" disabled selected>Select an Icon Synonym</option>
                        <option value="">None/Reset</option>
                        {Icon3 === Rules &&
                            <optgroup label="Rules">
                                <option value="structure">Structure</option>
                                <option value="order">Order</option>
                                <option value="reasons">Reasons</option>
                                <option value="regulation">Regulation</option>
                                <option value="principle">Principle</option>
                                <option value="framework">Framework</option>
                                <option value="law">Law</option>
                                <option value="standards">standards</option>
                            </optgroup>
                        }
                        {Icon3 === Language &&
                        <optgroup label="Language of Discipline">
                            <option value="words">Words</option>
                            <option value="vocabulary">Vocabulary</option>
                            <option value="nomenclature">Nomenclature</option>
                            <option value="lexicon">Lexicon</option>
                            <option value="terms">Terms</option>
                            <option value="vernacular">Vernacular</option>
                            <option value="terminology">Terminology</option>
                            <option value="jargon">Jargon</option>
                        </optgroup>
                        }
                        {Icon3 === Details &&
                        <optgroup label="Details">
                            <option value="parts">Parts</option>
                            <option value="factors">Factors</option>
                            <option value="attributes">Attributes</option>
                            <option value="characteristics">Characteristics</option>
                            <option value="variables">Variables</option>
                            <option value="clues">Clues</option>
                            <option value="ideas">Ideas</option>
                            <option value="specifics">Specifics</option>
                        </optgroup>
                        }
                        {Icon3 === Patterns &&
                        <optgroup label="Patterns">
                            <option value="cycle">Cycle</option>
                            <option value="sequence">Sequence</option>
                            <option value="routine">Routine</option>
                            <option value="reoccurring event">Reoccurring Event</option>
                            <option value="reoccurring idea">Reoccurring Idea</option>
                            <option value="repeating event">Repeating Event</option>
                            <option value="repeating idea">Repeating Idea</option>
                            <option value="pattern of behavior">Pattern of behavior</option>
                        </optgroup>
                        }
                        {Icon3 === Ethics &&
                        <optgroup label="Ethics">
                            <option value="values">Values</option>
                            <option value="morals">Morals</option>
                            <option value="bias">Bias</option>
                            <option value="debate">Debate</option>
                            <option value="discrimination">Discrimination</option>
                            <option value="controversies">Controversies</option>
                            <option value="judging">Judging</option>
                            <option value="dilemmas">Dilemmas</option>
                        </optgroup>
                        }
                        {Icon3 === BigIdea &&
                        <optgroup label="Big Idea">
                            <option value="generalizations">Generalizations</option>
                            <option value="principles">Principles</option>
                            <option value="theories">Theories</option>
                            <option value="laws">Laws</option>
                            <option value="main idea">Main Idea</option>
                            <option value="summarization">Summarization</option>
                            <option value="overarching statement">Overarching Statement</option>
                            <option value="general statement">General Statement</option>
                        </optgroup>
                        }
                        {Icon3 === Multiple &&
                        <optgroup label="Multiple Perspectives">
                            <option value="point of view">Point of View</option>
                            <option value="stance">Stance</option>
                            <option value="outlook">Outlook</option>
                            <option value="perspective">Perspective</option>
                            <option value="different roles and knowledge">Different Roles and Knowledge</option>
                            <option value="philosophy">Philosophy</option>
                            <option value="view">View</option>
                            <option value="position">Position</option>
                        </optgroup>
                        }
                        {Icon3 === OverTime &&
                        <optgroup label="Over Time">
                            <option value="past present & future">Past, Present, Future</option>
                            <option value="correlations">Correlations</option>
                            <option value="reflections">Reflections</option>
                            <option value="connections">Connections</option>
                            <option value="change over time">Change over time</option>
                            <option value="predictions">Predictions</option>
                            <option value="relationships within a time period">Relationships Within a Time Period</option>
                            <option value="time perspective">Time Perspective</option>
                        </optgroup>
                        }
                        {Icon3 === Trends &&
                        <optgroup label="Trends">
                            <option value="influence">Influence</option>
                            <option value="forces">Forces</option>
                            <option value="general direction">General Direction</option>
                            <option value="impact">Impact</option>
                            <option value="fad">Fad</option>
                            <option value="tendency">Tendency</option>
                            <option value="course of action">Course of Action</option>
                            <option value="ongoing factors">Ongoing Factors</option>
                        </optgroup>
                        }
                        {Icon3 === Unanswered &&
                        <optgroup label="Unanswered Questions">
                            <option value="discrepancies">Discrepancies</option>
                            <option value="unclear">Unclear</option>
                            <option value="incomplete">Incomplete</option>
                            <option value="unexplained">Unexplained</option>
                            <option value="unresolved">Unresolved</option>
                            <option value="unknown">Unknown</option>
                            <option value="missing element">Missing element</option>
                            <option value="conundrum">Conundrum</option>
                        </optgroup>
                        }
                        {Icon3 === Across &&
                        <optgroup label="Across Disciplines">
                            <option value="interdisciplinary relationships">Interdisciplinary relationships</option>
                            <option value="cross-curricular connections">Cross-curricular connections</option>
                            <option value="connect">Connect</option>
                            <option value="associate">Associate</option>
                            <option value="integrate">Integrate</option>
                            <option value="relationships">Relationships</option>
                            <option value="cross=disciplinary connections">Cross-disciplinary connections</option>
                            <option value="common elements">Common elements</option>
                        </optgroup>
                        }
                    </select>
                </Modal.Body>
                {/* Synonyms for Icon 3 */}

                <Modal.Body>
                    <select className='form-control' defaultValue={parameters} ref={textInput3}>
                        <option value="" disabled selected>Select a preposition</option>
                        <option value="">None</option>
                        <option value="of">of</option>
                        <option value="from">from</option>
                        <option value="about">about</option>
                        <option value="within">within</option>
                        <option value="in the">in the</option>
                        <option value="of the">of the</option>
                        <option value="about the">about the</option>
                        <option value="within the">within the</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                    <select className='form-control' ref={textInput2} onChange={(e) => setIcon4(e.target.value)}>
                        <optgroup label="Depth & Complexity Icons">
                            <option value="" disabled selected>Select a 2nd Icon</option>
                            <option value=''>None</option>
                            <option value={Rules}>Rules</option>
                            <option value={Language}>Language of Discipline</option>
                            <option value={Details}>Details</option>
                            <option value={Patterns}>Patterns</option>
                            <option value={Ethics}>Ethics</option>
                            <option value={BigIdea}>Big Idea</option>
                            <option value={Multiple}>Multiple Perspectives</option>
                            <option value={OverTime}>Over Time</option>
                            <option value={Trends}>Trends</option>
                            <option value={Unanswered}>Unanswered Questions</option>
                            <option value={Across}>Across Disciplines</option>
                        </optgroup>
                        <optgroup label="Content Imperatives">
                            <option value={Parallel}>Parallel</option>
                            <option value={Paradox}>Paradox</option>
                            <option value={Origin}>Origin</option>
                            <option value={Convergence}>Convergence</option>
                            <option value={Contribution}>Contribution</option>
                        </optgroup>
                    </select>

                    <select className='form-control mt-1' ref={textInput2}>
                        <option value="" disabled selected>Select an Icon Synonym</option>
                        <option value="">None/Reset</option>
                        {Icon4 === Rules &&
                            <optgroup label="Rules">
                                <option value="structure">Structure</option>
                                <option value="order">Order</option>
                                <option value="reasons">Reasons</option>
                                <option value="regulation">Regulation</option>
                                <option value="principle">Principle</option>
                                <option value="framework">Framework</option>
                                <option value="law">Law</option>
                                <option value="standards">standards</option>
                            </optgroup>
                        }
                        {Icon4 === Language &&
                        <optgroup label="Language of Discipline">
                            <option value="words">Words</option>
                            <option value="vocabulary">Vocabulary</option>
                            <option value="nomenclature">Nomenclature</option>
                            <option value="lexicon">Lexicon</option>
                            <option value="terms">Terms</option>
                            <option value="vernacular">Vernacular</option>
                            <option value="terminology">Terminology</option>
                            <option value="jargon">Jargon</option>
                        </optgroup>
                        }
                        {Icon4 === Details &&
                        <optgroup label="Details">
                            <option value="parts">Parts</option>
                            <option value="factors">Factors</option>
                            <option value="attributes">Attributes</option>
                            <option value="characteristics">Characteristics</option>
                            <option value="variables">Variables</option>
                            <option value="clues">Clues</option>
                            <option value="ideas">Ideas</option>
                            <option value="specifics">Specifics</option>
                        </optgroup>
                        }
                        {Icon4 === Patterns &&
                        <optgroup label="Patterns">
                            <option value="cycle">Cycle</option>
                            <option value="sequence">Sequence</option>
                            <option value="routine">Routine</option>
                            <option value="reoccurring event">Reoccurring Event</option>
                            <option value="reoccurring idea">Reoccurring Idea</option>
                            <option value="repeating event">Repeating Event</option>
                            <option value="repeating idea">Repeating Idea</option>
                            <option value="pattern of behavior">Pattern of behavior</option>
                        </optgroup>
                        }
                        {Icon4 === Ethics &&
                        <optgroup label="Ethics">
                            <option value="values">Values</option>
                            <option value="morals">Morals</option>
                            <option value="bias">Bias</option>
                            <option value="debate">Debate</option>
                            <option value="discrimination">Discrimination</option>
                            <option value="controversies">Controversies</option>
                            <option value="judging">Judging</option>
                            <option value="dilemmas">Dilemmas</option>
                        </optgroup>
                        }
                        {Icon4 === BigIdea &&
                        <optgroup label="Big Idea">
                            <option value="generalizations">Generalizations</option>
                            <option value="principles">Principles</option>
                            <option value="theories">Theories</option>
                            <option value="laws">Laws</option>
                            <option value="main idea">Main Idea</option>
                            <option value="summarization">Summarization</option>
                            <option value="overarching statement">Overarching Statement</option>
                            <option value="general statement">General Statement</option>
                        </optgroup>
                        }
                        {Icon4 === Multiple &&
                        <optgroup label="Multiple Perspectives">
                            <option value="point of view">Point of View</option>
                            <option value="stance">Stance</option>
                            <option value="outlook">Outlook</option>
                            <option value="perspective">Perspective</option>
                            <option value="different roles and knowledge">Different Roles and Knowledge</option>
                            <option value="philosophy">Philosophy</option>
                            <option value="view">View</option>
                            <option value="position">Position</option>
                        </optgroup>
                        }
                        {Icon4 === OverTime &&
                        <optgroup label="Over Time">
                            <option value="past present & future">Past, Present, Future</option>
                            <option value="correlations">Correlations</option>
                            <option value="reflections">Reflections</option>
                            <option value="connections">Connections</option>
                            <option value="change over time">Change over time</option>
                            <option value="predictions">Predictions</option>
                            <option value="relationships within a time period">Relationships Within a Time Period</option>
                            <option value="time perspective">Time Perspective</option>
                        </optgroup>
                        }
                        {Icon4 === Trends &&
                        <optgroup label="Trends">
                            <option value="influence">Influence</option>
                            <option value="forces">Forces</option>
                            <option value="general direction">General Direction</option>
                            <option value="impact">Impact</option>
                            <option value="fad">Fad</option>
                            <option value="tendency">Tendency</option>
                            <option value="course of action">Course of Action</option>
                            <option value="ongoing factors">Ongoing Factors</option>
                        </optgroup>
                        }
                        {Icon4 === Unanswered &&
                        <optgroup label="Unanswered Questions">
                            <option value="discrepancies">Discrepancies</option>
                            <option value="unclear">Unclear</option>
                            <option value="incomplete">Incomplete</option>
                            <option value="unexplained">Unexplained</option>
                            <option value="unresolved">Unresolved</option>
                            <option value="unknown">Unknown</option>
                            <option value="missing element">Missing element</option>
                            <option value="conundrum">Conundrum</option>
                        </optgroup>
                        }
                        {Icon4 === Across &&
                        <optgroup label="Across Disciplines">
                            <option value="interdisciplinary relationships">Interdisciplinary relationships</option>
                            <option value="cross-curricular connections">Cross-curricular connections</option>
                            <option value="connect">Connect</option>
                            <option value="associate">Associate</option>
                            <option value="integrate">Integrate</option>
                            <option value="relationships">Relationships</option>
                            <option value="cross=disciplinary connections">Cross-disciplinary connections</option>
                            <option value="common elements">Common elements</option>
                        </optgroup>
                        }
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose12}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose12}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Modal #15 for modifying level 1 preposition */}
            <Modal show={show15} onHide={handleClose15}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify the preposition</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={word} ref={textInput} onChange={OtherSelected}>
                        <option value="of">of</option>
                        <option value="related to my study of">related to my study of</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setWord(e.target.value)} className='form-control'/>
                : <input type="text" disabled='true' className='form-control'/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose15}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose15}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Modal #16 for modifying level 2 preposition */}
            <Modal show={show16} onHide={handleClose16}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify the preposition</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={word2} ref={textInput} onChange={OtherSelected}>
                        <option value="of">of</option>
                        <option value="related to my study of">related to my study of</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setWord2(e.target.value)} className='form-control'/>
                : <input type="text" disabled='true' className='form-control'/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose16}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose16}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Modal #17 for modifying level 3 preposition */}
            <Modal show={show17} onHide={handleClose17}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify the preposition</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={word3} ref={textInput} onChange={OtherSelected}>
                        <option value="of">of</option>
                        <option value="related to my study of">related to my study of</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setWord3(e.target.value)} className='form-control'/>
                : <input type="text" disabled='true' className='form-control'/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose17}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose17}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Full Custom preposition */}
            <Modal show={show29} onHide={handleCustWordClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify the preposition</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={custWord} ref={textInput} onChange={OtherSelected}>
                        <option value="of">of</option>
                        <option value="related to my study of">related to my study of</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setCustWord(e.target.value)} className='form-control'/>
                : <input type="text" disabled='true' className='form-control'/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCustWordClose}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleCustWordClose}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Modal #18 for modifying level 1 verb */}
            <Modal show={show18} onHide={handleClose18}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={verb} ref={textInput} onChange={OtherSelected}>
                        <option value="can">can</option>
                        <option value="will">will</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setVerb(e.target.value)} className='form-control'/>
                : <input type="text" disabled='true' className='form-control'/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose18}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose18}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>
{/* Modal #19 for modifying level 2 verb */}
            <Modal show={show19} onHide={handleClose19}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={verb2} ref={textInput} onChange={OtherSelected}>
                        <option value="can">can</option>
                        <option value="will">will</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setVerb2(e.target.value)} className='form-control'/>
                : <input type="text" disabled='true' className='form-control'/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose19}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose19}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>
{/* Modal #20 for modifying level 3 verb */}
            <Modal show={show20} onHide={handleClose20}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={verb3} ref={textInput} onChange={OtherSelected}>
                        <option value="can">can</option>
                        <option value="will">will</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setVerb3(e.target.value)} className='form-control'/>
                : <input type="text" disabled='true' className='form-control'/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose20}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose20}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Full Custom Verb */}
            <Modal show={show31} onHide={handleCustVerbClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={custVerb} ref={textInput} onChange={OtherSelected}>
                        <option value="can">can</option>
                        <option value="will">will</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setCustVerb(e.target.value)} className='form-control'/>
                : <input type="text" disabled='true' className='form-control'/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCustVerbClose}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleCustVerbClose}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Full Custom Parameters */}
            <Modal show={show30} onHide={handleCustParametersClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Icons Preposition Word</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={custParameters} ref={textInput} onChange={OtherSelected}>
                        <option value="">None</option>
                        <option value="of">of</option>
                        <option value="from">from</option>
                        <option value="about">about</option>
                        <option value="within">within</option>
                        <option value="in the">in the</option>
                        <option value="about the">about the</option>
                        <option value="of the">of the</option>
                        <option value="within the">within the</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setCustParameters(e.target.value)} className='form-control'/>
                : <input type="text" disabled='true' className='form-control'/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCustParametersClose}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleCustParametersClose}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Modal #25 for Professional 1 */}
            <Modal show={show25} onHide={handleClose25}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Professional</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={professional} ref={textInput} onChange={OtherSelected}>
                        <option value='a linguist'>a linguist</option>
                        <option value='an anthropologist'>an anthropologist</option>
                        <option value='a philosopher'>a philosopher</option>
                        <option value='a mathematician'>a mathematician</option>
                        <option value='a computer scientist'>a computer scientist</option>
                        <option value='an economist'>an economist</option>
                        <option value='an astronomer'>an astronomer</option>
                        <option value='an archaeologist'>an archaeologist</option>
                        <option value='a geographer'>a geographer</option>
                        <option value='a geologist'>a geologist</option>
                        <option value='a historian'>a historian</option>
                        <option value='a marine biologist'>a marine biologist</option>
                        <option value='a paleontologist'>a paleontologist</option>
                        <option value='a physicist'>a physicist</option>
                        <option value='a political scientist'>a political scientist</option>
                        <option value='a sociologist'>a sociologist</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setProfessional(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose25}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose25}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Modal #26 for Professional 2 */}
            <Modal show={show26} onHide={handleClose26}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Professional</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={professional2} ref={textInput} onChange={OtherSelected}>
                        <option value='a linguist'>a linguist</option>
                        <option value='an anthropologist'>an anthropologist</option>
                        <option value='a philosopher'>a philosopher</option>
                        <option value='a mathematician'>a mathematician</option>
                        <option value='a computer scientist'>a computer scientist</option>
                        <option value='an economist'>an economist</option>
                        <option value='an astronomer'>an astronomer</option>
                        <option value='an archaeologist'>an archaeologist</option>
                        <option value='a geographer'>a geographer</option>
                        <option value='a geologist'>a geologist</option>
                        <option value='a historian'>a historian</option>
                        <option value='a marine biologist'>a marine biologist</option>
                        <option value='a paleontologist'>a paleontologist</option>
                        <option value='a physicist'>a physicist</option>
                        <option value='a political scientist'>a political scientist</option>
                        <option value='a sociologist'>a sociologist</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setProfessional2(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose26}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose26}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Modal #27 for Professional 3 */}
            <Modal show={show27} onHide={handleClose27}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Professional</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={professional3} ref={textInput} onChange={OtherSelected}>
                        <option value='a linguist'>a linguist</option>
                        <option value='an anthropologist'>an anthropologist</option>
                        <option value='a philosopher'>a philosopher</option>
                        <option value='a mathematician'>a mathematician</option>
                        <option value='a computer scientist'>a computer scientist</option>
                        <option value='an economist'>an economist</option>
                        <option value='an astronomer'>an astronomer</option>
                        <option value='an archaeologist'>an archaeologist</option>
                        <option value='a geographer'>a geographer</option>
                        <option value='a geologist'>a geologist</option>
                        <option value='a historian'>a historian</option>
                        <option value='a marine biologist'>a marine biologist</option>
                        <option value='a paleontologist'>a paleontologist</option>
                        <option value='a physicist'>a physicist</option>
                        <option value='a political scientist'>a political scientist</option>
                        <option value='a sociologist'>a sociologist</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setProfessional3(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose27}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose27}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Modal #28 for Full Customization Mode */}
            <Modal show={show28} onHide={handleClose28}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Customize Statement</Modal.Title>
                </Modal.Header>
                <Modal.Body>

            {/* Topic */}
                    <input type="text" name="custTopic" className='form-control mt-2' placeholder="Enter Topic" ref={custTopicRef}/>

            {/* Thinking Skill */}
                    <select className='form-control mt-2' ref={custThinkRef} onChange={OtherThinkSelected}>
                        <optgroup label="Thinking Skills">
                            <option value="" selected disabled>Select a Thinking Skill</option>
                            <option value="list">list</option>
                            <option value="define">define</option>
                            <option value="state">state</option>
                            <option value="summarize">summarize</option>
                            <option value="describe">describe</option>
                            <option value="discuss">discuss</option>
                            <option value="explain">explain</option>
                            <option value="identify">identify</option>
                            <option value="paraphrase">paraphrase</option>
                            <option value="sequence">sequence</option>
                            <option value="recognize">recognize</option>
                            <option value="compare & contrast">compare & contrast</option>
                            <option value="categorize">categorize</option>
                            <option value="support">support</option>
                            <option value="examine">examine</option>
                            <option value="interpret">interpret</option>
                        </optgroup>
                        <optgroup label="Critial Thinking Skills">
                            <option value="gather evidence to support of">gather evidence to support</option>
                            <option value="question">question</option>
                            <option value="prove">prove</option>
                            <option value="defend">defend</option>
                            <option value="differentiate">differentiate</option>
                            <option value="judge">judge</option>
                            <option value="determine the relevance of">determine the relevance</option>
                            <option value="note abmiguity">note ambiguity</option>
                            <option value="state & test assumptions of">state & test assumptions</option>
                            <option value="evaluate">evaluate</option>
                        </optgroup>
                        <optgroup label="Creative Thinking Skills">
                            <option value="redesign">redesign</option>
                            <option value="add to">add to</option>
                            <option value="other">Add your own</option>
                        </optgroup>
                    </select>
                    {otherThink ?
                        <input type="text" onChange={(e) => setCustThinkingSkill(e.target.value)} className='form-control mt-2'/>
                        :<></>
                    }

            {/* Icon 1 */}
                    <select className='form-control mt-2' ref={custIcon1Ref} onChange={(e) => {setCustIcon1(e.target.value)}}>
                        <optgroup label="Depth & Complexity Icons">
                            <option value="" selected disabled>Select 1st Icon</option>
                            <option value={Rules}>Rules</option>
                            <option value={Language}>Language of Discipline</option>
                            <option value={Details}>Details</option>
                            <option value={Patterns}>Patterns</option>
                            <option value={Ethics}>Ethics</option>
                            <option value={BigIdea}>Big Idea</option>
                            <option value={Multiple}>Multiple Perspectives</option>
                            <option value={OverTime}>Over Time</option>
                            <option value={Trends}>Trends</option>
                            <option value={Unanswered}>Unanswered Questions</option>
                            <option value={Across}>Across Disciplines</option>
                        </optgroup>
                        <optgroup label="Content Imperatives">
                            <option value={Parallel}>Parallel</option>
                            <option value={Paradox}>Paradox</option>
                            <option value={Origin}>Origin</option>
                            <option value={Convergence}>Convergence</option>
                            <option value={Contribution}>Contribution</option>
                        </optgroup>
                    </select>

                    <select className='form-control mt-2' ref={custIcon1Ref}>
                        <option value="" disabled selected>Select 1st Icon Synonym (optional)</option>
                        <option value="">None/Reset</option>
                        {custIcon1 === Rules &&
                            <optgroup label="Rules">
                                <option value="structure">Structure</option>
                                <option value="order">Order</option>
                                <option value="reasons">Reasons</option>
                                <option value="regulation">Regulation</option>
                                <option value="principle">Principle</option>
                                <option value="framework">Framework</option>
                                <option value="law">Law</option>
                                <option value="standards">standards</option>
                            </optgroup>
                        }
                        {custIcon1 === Language &&
                        <optgroup label="Language of Discipline">
                            <option value="words">Words</option>
                            <option value="vocabulary">Vocabulary</option>
                            <option value="nomenclature">Nomenclature</option>
                            <option value="lexicon">Lexicon</option>
                            <option value="terms">Terms</option>
                            <option value="vernacular">Vernacular</option>
                            <option value="terminology">Terminology</option>
                            <option value="jargon">Jargon</option>
                        </optgroup>
                        }
                        {custIcon1 === Details &&
                        <optgroup label="Details">
                            <option value="parts">Parts</option>
                            <option value="factors">Factors</option>
                            <option value="attributes">Attributes</option>
                            <option value="characteristics">Characteristics</option>
                            <option value="variables">Variables</option>
                            <option value="clues">Clues</option>
                            <option value="ideas">Ideas</option>
                            <option value="specifics">Specifics</option>
                        </optgroup>
                        }
                        {custIcon1 === Patterns &&
                        <optgroup label="Patterns">
                            <option value="cycle">Cycle</option>
                            <option value="sequence">Sequence</option>
                            <option value="routine">Routine</option>
                            <option value="reoccurring event">Reoccurring Event</option>
                            <option value="reoccurring idea">Reoccurring Idea</option>
                            <option value="repeating event">Repeating Event</option>
                            <option value="repeating idea">Repeating Idea</option>
                            <option value="pattern of behavior">Pattern of behavior</option>
                        </optgroup>
                        }
                        {custIcon1 === Ethics &&
                        <optgroup label="Ethics">
                            <option value="values">Values</option>
                            <option value="morals">Morals</option>
                            <option value="bias">Bias</option>
                            <option value="debate">Debate</option>
                            <option value="discrimination">Discrimination</option>
                            <option value="controversies">Controversies</option>
                            <option value="judging">Judging</option>
                            <option value="dilemmas">Dilemmas</option>
                        </optgroup>
                        }
                        {custIcon1 === BigIdea &&
                        <optgroup label="Big Idea">
                            <option value="generalizations">Generalizations</option>
                            <option value="principles">Principles</option>
                            <option value="theories">Theories</option>
                            <option value="laws">Laws</option>
                            <option value="main idea">Main Idea</option>
                            <option value="summarization">Summarization</option>
                            <option value="overarching statement">Overarching Statement</option>
                            <option value="general statement">General Statement</option>
                        </optgroup>
                        }
                        {custIcon1 === Multiple &&
                        <optgroup label="Multiple Perspectives">
                            <option value="point of view">Point of View</option>
                            <option value="stance">Stance</option>
                            <option value="outlook">Outlook</option>
                            <option value="perspective">Perspective</option>
                            <option value="different roles and knowledge">Different Roles and Knowledge</option>
                            <option value="philosophy">Philosophy</option>
                            <option value="view">View</option>
                            <option value="position">Position</option>
                        </optgroup>
                        }
                        {custIcon1 === OverTime &&
                        <optgroup label="Over Time">
                            <option value="past present & future">Past, Present, Future</option>
                            <option value="correlations">Correlations</option>
                            <option value="reflections">Reflections</option>
                            <option value="connections">Connections</option>
                            <option value="change over time">Change over time</option>
                            <option value="predictions">Predictions</option>
                            <option value="relationships within a time period">Relationships Within a Time Period</option>
                            <option value="time perspective">Time Perspective</option>
                        </optgroup>
                        }
                        {custIcon1 === Trends &&
                        <optgroup label="Trends">
                            <option value="influence">Influence</option>
                            <option value="forces">Forces</option>
                            <option value="general direction">General Direction</option>
                            <option value="impact">Impact</option>
                            <option value="fad">Fad</option>
                            <option value="tendency">Tendency</option>
                            <option value="course of action">Course of Action</option>
                            <option value="ongoing factors">Ongoing Factors</option>
                        </optgroup>
                        }
                        {custIcon1 === Unanswered &&
                        <optgroup label="Unanswered Questions">
                            <option value="discrepancies">Discrepancies</option>
                            <option value="unclear">Unclear</option>
                            <option value="incomplete">Incomplete</option>
                            <option value="unexplained">Unexplained</option>
                            <option value="unresolved">Unresolved</option>
                            <option value="unknown">Unknown</option>
                            <option value="missing element">Missing element</option>
                            <option value="conundrum">Conundrum</option>
                        </optgroup>
                        }
                        {custIcon1 === Across &&
                        <optgroup label="Across Disciplines">
                            <option value="interdisciplinary relationships">Interdisciplinary relationships</option>
                            <option value="cross-curricular connections">Cross-curricular connections</option>
                            <option value="connect">Connect</option>
                            <option value="associate">Associate</option>
                            <option value="integrate">Integrate</option>
                            <option value="relationships">Relationships</option>
                            <option value="cross=disciplinary connections">Cross-disciplinary connections</option>
                            <option value="common elements">Common elements</option>
                        </optgroup>
                        }
                    </select>

            {/* Icon 2 */}
                    <select className='form-control mt-2' ref={custIcon2Ref} onChange={(e) => {setCustIcon2(e.target.value)}}>
                        <optgroup label="Depth & Complexity Icons">
                            <option value="" selected disabled>Select 2nd Icon (optional)</option>
                            <option value=''>None</option>
                            <option value={Rules}>Rules</option>
                            <option value={Language}>Language of Discipline</option>
                            <option value={Details}>Details</option>
                            <option value={Patterns}>Patterns</option>
                            <option value={Ethics}>Ethics</option>
                            <option value={BigIdea}>Big Idea</option>
                            <option value={Multiple}>Multiple Perspectives</option>
                            <option value={OverTime}>Over Time</option>
                            <option value={Trends}>Trends</option>
                            <option value={Unanswered}>Unanswered Questions</option>
                            <option value={Across}>Across Disciplines</option>
                        </optgroup>
                        <optgroup label="Content Imperatives">
                            <option value={Parallel}>Parallel</option>
                            <option value={Paradox}>Paradox</option>
                            <option value={Origin}>Origin</option>
                            <option value={Convergence}>Convergence</option>
                            <option value={Contribution}>Contribution</option>
                        </optgroup>
                    </select>

                    <select className='form-control mt-2' ref={custIcon2Ref}>
                        <option value="" disabled selected>Select 2nd Icon Synonym (optional)</option>
                        <option value="">None/Reset</option>
                        {custIcon2 === Rules &&
                            <optgroup label="Rules">
                                <option value="structure">Structure</option>
                                <option value="order">Order</option>
                                <option value="reasons">Reasons</option>
                                <option value="regulation">Regulation</option>
                                <option value="principle">Principle</option>
                                <option value="framework">Framework</option>
                                <option value="law">Law</option>
                                <option value="standards">standards</option>
                            </optgroup>
                        }
                        {custIcon2 === Language &&
                        <optgroup label="Language of Discipline">
                            <option value="words">Words</option>
                            <option value="vocabulary">Vocabulary</option>
                            <option value="nomenclature">Nomenclature</option>
                            <option value="lexicon">Lexicon</option>
                            <option value="terms">Terms</option>
                            <option value="vernacular">Vernacular</option>
                            <option value="terminology">Terminology</option>
                            <option value="jargon">Jargon</option>
                        </optgroup>
                        }
                        {custIcon2 === Details &&
                        <optgroup label="Details">
                            <option value="parts">Parts</option>
                            <option value="factors">Factors</option>
                            <option value="attributes">Attributes</option>
                            <option value="characteristics">Characteristics</option>
                            <option value="variables">Variables</option>
                            <option value="clues">Clues</option>
                            <option value="ideas">Ideas</option>
                            <option value="specifics">Specifics</option>
                        </optgroup>
                        }
                        {custIcon2 === Patterns &&
                        <optgroup label="Patterns">
                            <option value="cycle">Cycle</option>
                            <option value="sequence">Sequence</option>
                            <option value="routine">Routine</option>
                            <option value="reoccurring event">Reoccurring Event</option>
                            <option value="reoccurring idea">Reoccurring Idea</option>
                            <option value="repeating event">Repeating Event</option>
                            <option value="repeating idea">Repeating Idea</option>
                            <option value="pattern of behavior">Pattern of behavior</option>
                        </optgroup>
                        }
                        {custIcon2 === Ethics &&
                        <optgroup label="Ethics">
                            <option value="values">Values</option>
                            <option value="morals">Morals</option>
                            <option value="bias">Bias</option>
                            <option value="debate">Debate</option>
                            <option value="discrimination">Discrimination</option>
                            <option value="controversies">Controversies</option>
                            <option value="judging">Judging</option>
                            <option value="dilemmas">Dilemmas</option>
                        </optgroup>
                        }
                        {custIcon2 === BigIdea &&
                        <optgroup label="Big Idea">
                            <option value="generalizations">Generalizations</option>
                            <option value="principles">Principles</option>
                            <option value="theories">Theories</option>
                            <option value="laws">Laws</option>
                            <option value="main idea">Main Idea</option>
                            <option value="summarization">Summarization</option>
                            <option value="overarching statement">Overarching Statement</option>
                            <option value="general statement">General Statement</option>
                        </optgroup>
                        }
                        {custIcon2 === Multiple &&
                        <optgroup label="Multiple Perspectives">
                            <option value="point of view">Point of View</option>
                            <option value="stance">Stance</option>
                            <option value="outlook">Outlook</option>
                            <option value="perspective">Perspective</option>
                            <option value="different roles and knowledge">Different Roles and Knowledge</option>
                            <option value="philosophy">Philosophy</option>
                            <option value="view">View</option>
                            <option value="position">Position</option>
                        </optgroup>
                        }
                        {custIcon2 === OverTime &&
                        <optgroup label="Over Time">
                            <option value="past present & future">Past, Present, Future</option>
                            <option value="correlations">Correlations</option>
                            <option value="reflections">Reflections</option>
                            <option value="connections">Connections</option>
                            <option value="change over time">Change over time</option>
                            <option value="predictions">Predictions</option>
                            <option value="relationships within a time period">Relationships Within a Time Period</option>
                            <option value="time perspective">Time Perspective</option>
                        </optgroup>
                        }
                        {custIcon2 === Trends &&
                        <optgroup label="Trends">
                            <option value="influence">Influence</option>
                            <option value="forces">Forces</option>
                            <option value="general direction">General Direction</option>
                            <option value="impact">Impact</option>
                            <option value="fad">Fad</option>
                            <option value="tendency">Tendency</option>
                            <option value="course of action">Course of Action</option>
                            <option value="ongoing factors">Ongoing Factors</option>
                        </optgroup>
                        }
                        {custIcon2 === Unanswered &&
                        <optgroup label="Unanswered Questions">
                            <option value="discrepancies">Discrepancies</option>
                            <option value="unclear">Unclear</option>
                            <option value="incomplete">Incomplete</option>
                            <option value="unexplained">Unexplained</option>
                            <option value="unresolved">Unresolved</option>
                            <option value="unknown">Unknown</option>
                            <option value="missing element">Missing element</option>
                            <option value="conundrum">Conundrum</option>
                        </optgroup>
                        }
                        {custIcon2 === Across &&
                        <optgroup label="Across Disciplines">
                            <option value="interdisciplinary relationships">Interdisciplinary relationships</option>
                            <option value="cross-curricular connections">Cross-curricular connections</option>
                            <option value="connect">Connect</option>
                            <option value="associate">Associate</option>
                            <option value="integrate">Integrate</option>
                            <option value="relationships">Relationships</option>
                            <option value="cross=disciplinary connections">Cross-disciplinary connections</option>
                            <option value="common elements">Common elements</option>
                        </optgroup>
                        }
                    </select>

            {/* Resource */}
                    <select className='form-control mt-2' ref={custResourceRef} onChange={OtherResourceSelected}>
                        <option value="" disabled selected>Select a Resource</option>
                        <option value='a textbook'>textbook</option>
                        <option value="an encyclopedia">encycopedia</option>
                        <option value="a library book">library book</option>
                        <option value="a magazine">magazine</option>
                        <option value="a newspaper">newspaper</option>
                        <option value="an interview">interview</option>
                        <option value="an expert">expert</option>
                        <option value="a website">website</option>
                        <option value="an online encyclopedia">encyclopedia</option>
                        <option value="a journal">journal</option>
                        <option value="an article">article</option>
                        <option value="Wikipedia">Wikipedia</option>
                        <option value="an outline">outline</option>
                        <option value="a video">video</option>
                        <option value="a novel">novel</option>
                        <option value="other">Add your own</option>
                    </select>
                    {otherResource ?
                        <input type="text" onChange={(e) => setCustResource(e.target.value)} className='form-control mt-2'/>
                        :<></>
                    }

            {/* Product */}
                    <select className='form-control mt-2' ref={custProductRef} onChange={OtherProductSelected}>
                        <option value="" disabled selected>Select a Product</option>
                        <option value="a chart">chart</option>
                        <option value="a drawing">drawing</option>
                        <option value="a timeline">timeline</option>
                        <option value="a diagram">diagram</option>
                        <option value="a graphic organizer">graphic organizer</option>
                        <option value="a comic">comic</option>
                        <option value="a map">map</option>
                        <option value="a book cover">book cover</option>
                        <option value="a poster">poster</option>
                        <option value="a museum exhibit">museum exhibit</option>
                        <option value="a mobile">mobile</option>
                        <option value="a sculpture">sculpture</option>
                        <option value="an art gallery">art gallery</option>
                        <option value="a debate">debate</option>
                        <option value="a panel discussion">panel discussion</option>
                        <option value="a lesson taught to the class">lesson taught to the class</option>
                        <option value="a report">report</option>
                        <option value="a play">play</option>
                        <option value="a press conference">press conference</option>
                        <option value="a TV show">TV show</option>
                        <option value="a monologue">monologue</option>
                        <option value="a movie review">movie review</option>
                        <option value="a song">song</option>
                        <option value="a powerpoint">powerpoint</option>
                        <option value="Google slides">Google slides</option>
                        <option value="a photo essay">photo essay</option>
                        <option value="a news report">news report</option>
                        <option value="a webpage">webpage</option>
                        <option value="a persuasive essay">persuasive essay</option>
                        <option value="a letter">letter</option>
                        <option value="a children's story">children's story</option>
                        <option value="a poem">poem</option>
                        <option value="a diary entry">diary entry</option>
                        <option value="a reader's theater">reader's theater</option>
                        <option value="a game">game</option>
                        <option value="a puzzle">puzzle</option>
                        <option value="a paragraph">paragraph</option>
                        <option value="a travelogue">travelogue</option>
                        <option value="other">Add your own</option>
                    </select>
                    {otherProduct ?
                        <input type="text" onChange={(e) => setCustProduct(e.target.value)} className='form-control mt-2'/>
                        :<></>
                    }

        {/* Professional */}
                    <select className='form-control mt-2' ref={custProRef} onChange={OtherProSelected}>
                        <option value="" selected disabled>Select a Disciplinarian (optional)</option>
                        <option value='a linguist'>a linguist</option>
                        <option value='an anthropologist'>an anthropologist</option>
                        <option value='a philosopher'>a philosopher</option>
                        <option value='a mathematician'>a mathematician</option>
                        <option value='a computer scientist'>a computer scientist</option>
                        <option value='an economist'>an economist</option>
                        <option value='an astronomer'>an astronomer</option>
                        <option value='an archaeologist'>an archaeologist</option>
                        <option value='a geographer'>a geographer</option>
                        <option value='a geologist'>a geologist</option>
                        <option value='a historian'>a historian</option>
                        <option value='a marine biologist'>a marine biologist</option>
                        <option value='a paleontologist'>a paleontologist</option>
                        <option value='a physicist'>a physicist</option>
                        <option value='a political scientist'>a political scientist</option>
                        <option value='a sociologist'>a sociologist</option>
                        <option value="other">Add your own</option>
                    </select>
                    {otherPro ?
                        <input type="text" onChange={(e) => setCustProfessional(e.target.value)} className='form-control mt-2'/>
                        :<></>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose28}>
                    <i class="bi bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleClose28}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default DCAP;