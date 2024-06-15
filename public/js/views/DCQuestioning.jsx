import React, { useState, useRef } from 'react';
import axios from 'axios';
// Components
import SideOptions from '../components/Questioning/SideOptions';
import { generalizations } from '../components/Questioning/Generalizations';
import { disciplinarians } from '../components/Questioning/Disciplinarians';
// import react bootstrap
import { Button, Modal } from 'react-bootstrap';
// imported features
import {Animated} from "react-animated-css";
import { PDFDownloadLink, Page, Text, View, Document, Image, StyleSheet } from '@react-pdf/renderer';
// imported images
import Across from '../pics/Questioning/across.png';
import BigIdea from '../pics/Questioning/bigidea.png';
import Contribution from '../pics/Questioning/contribution.png';
import Convergence from '../pics/Questioning/convergence.png';
import Details from '../pics/Questioning/details.png';
import Ethics from '../pics/Questioning/ethics.png';
import Language from '../pics/Questioning/language.png';
import Multiple from '../pics/Questioning/multiple.png';
import Origin from '../pics/Questioning/origin.png';
import OverTime from '../pics/Questioning/overtime.png';
import Paradox from '../pics/Questioning/paradox.png';
import Parallel from '../pics/Questioning/parallel.png';
import Patterns from '../pics/Questioning/patterns.png';
import Rules from '../pics/Questioning/rules.png';
import Trends from '../pics/Questioning/trends.png';
import Unanswered from '../pics/Questioning/unanswered.png';
import White from '../pics/Questioning/whitebox.jpg';


const DCQuestioning = (props) => {
    const { printing } = props;
    const [mainTopic, setMainTopic] = useState("");
    const [subTopic, setSubTopic] = useState("");
    const [icon1, setIcon1] = useState(White);
    const [icon2, setIcon2] = useState(White);
    const [depthIcon, setDepthIcon] = useState(White);
    const [complexIcon, setComplexIcon] = useState(White);
    const [q2Icon1, setQ2Icon1] = useState(White);
    const [q2Icon2, setQ2Icon2] = useState(White);
    const [question1, setQuestion1] = useState(0);
    const [disciplinarian, setDisciplinarian] = useState('');
    const [generalization, setGeneralization] = useState('');
    const [synonym1, setSynonym1] = useState('');
    const [synonym2, setSynonym2] = useState('');
    const [synonym3, setSynonym3] = useState('');
    const [synonym4, setSynonym4] = useState('');
    const [synQ2Icon1, setSynQ2Icon1] = useState('');
    const [synQ2Icon2, setSynQ2Icon2] = useState('');

    const[editWord1, setEditWord1] = useState('related to');
    const[editWord2, setEditWord2] = useState('found in');
    const[editWord3, setEditWord3] = useState('of');
    const[editWord4, setEditWord4] = useState('in');
    const[editWord5, setEditWord5] = useState('regarding');
    const[editWord6, setEditWord6] = useState('regarding');
    const[editWord7, setEditWord7] = useState('are');
    const[editWord8, setEditWord8] = useState('regarding');
    const[editWord9, setEditWord9] = useState('is');
    const[editWord10, setEditWord10] = useState('related to');
    const[editWord11, setEditWord11] = useState('What');
    const[editWord12, setEditWord12] = useState('of');
    const[editWord13, setEditWord13] = useState('using');
    const[editWord14, setEditWord14] = useState('and');
    const[editWord15, setEditWord15] = useState('the');
    const[editWord16, setEditWord16] = useState('a');
    const[editWord17, setEditWord17] = useState('investigates');
    const[editWord18, setEditWord18] = useState('of');
    const[editWord19, setEditWord19] = useState('of the');
    const[editWord20, setEditWord20] = useState('of');
    const[editWord21, setEditWord21] = useState('at');

    const [other, setOther] = useState(false);
    const [other2, setOther2] = useState(false);

    const [custom, setCustom] = useState(false);
    const [saveCustom, setSaveCustom] = useState(false);
    const [compare, setCompare] = useState(false);
    const [customDisc, setCustomDisc] = useState('Set Disciplinarian');

    const [show, setShow] = useState(false);

    // Icons for 1st section
    const [icon1Show, setIcon1Show] = useState(false);
    const [icon2Show, setIcon2Show] = useState(false);

    // Icons for Depth & Icons for Complexity
    const [icon3Show, setIcon3Show] = useState(false);
    const [icon4Show, setIcon4Show] = useState(false);

    // Icons for Q2. no Overtime
    const [iconQ2Show1, setIconQ2Show1] = useState(false);
    const [iconQ2Show2, setIconQ2Show2] = useState(false);

    // Show for disciplinarians and gernalizations
    const [discShow, setDiscShow] = useState(false);
    const [generalShow, setGeneralShow] = useState(false);

    // Show for editable words in sentences
    const [editShow1, setEdit1Show] = useState(false);
    const [editShow2, setEdit2Show] = useState(false);
    const [editShow3, setEdit3Show] = useState(false);
    const [editShow4, setEdit4Show] = useState(false);
    const [editShow5, setEdit5Show] = useState(false);
    const [editShow6, setEdit6Show] = useState(false);
    const [editShow7, setEdit7Show] = useState(false);
    const [editShow8, setEdit8Show] = useState(false);
    const [editShow9, setEdit9Show] = useState(false);
    const [editShow10, setEdit10Show] = useState(false);
    const [editShow11, setEdit11Show] = useState(false);
    const [editShow12, setEdit12Show] = useState(false);
    const [editShow13, setEdit13Show] = useState(false);
    const [editShow14, setEdit14Show] = useState(false);
    const [editShow15, setEdit15Show] = useState(false);
    const [editShow16, setEdit16Show] = useState(false);
    const [editShow17, setEdit17Show] = useState(false);
    const [editShow18, setEdit18Show] = useState(false);
    const [editShow19, setEdit19Show] = useState(false);
    const [editShow20, setEdit20Show] = useState(false);
    const [editShow21, setEdit21Show] = useState(false);

    const [customShow, setCustomShow] = useState(false);

    const [showPolicy, setShowPolicy] = useState(false);
    const [showHelp1, setShowHelp1] = useState(false);

    // models & Refs for manual user customization of icons
    const textInput = useRef();

    // Refs for Custom Form //
    const topicRef = useRef();
    const subTopicRef = useRef();
    const icon1Ref = useRef();
    const icon2Ref = useRef();
    const discRef = useRef();
    const generalRef = useRef();
    const layoutRef = useRef();

    const handleIcon1Close = () => {
        setIcon1Show(false);
        if(typeof textInput.current.value === "string"){
            setSynonym1(textInput.current.value.split(',')[0]);
        }
        else{
            setIcon1(textInput.current.value);
        }
    };
    const handleIcon1Show = () => {setIcon1Show(true)};

    const handleIcon2Close = () => {
        setIcon2Show(false); 
        if(typeof textInput.current.value === "string"){
            setSynonym2(textInput.current.value.split(',')[0]);
        }
        else{
            setIcon2(textInput.current.value)};
        }
    const handleIcon2Show = () => {setIcon2Show(true)};

    const handleIcon3Close = () => {
        setIcon3Show(false); 
        if(typeof textInput.current.value === "string"){
            setSynonym3(textInput.current.value.split(',')[0]);
        }
        else{
            setDepthIcon(textInput.current.value)};
        }
    const handleIcon3Show = () => {setIcon3Show(true)};

    const handleIcon4Close = () => {
        setIcon4Show(false);
        if(typeof textInput.current.value === "string"){
            setSynonym4(textInput.current.value.split(',')[0]);
        }
        else{
            setComplexIcon(textInput.current.value)};
        }
    const handleIcon4Show = () => {setIcon4Show(true)};

    const handleIconQ2Close1 = () => {
        setIconQ2Show1(false);
        if(typeof textInput.current.value === "string"){
            setSynQ2Icon1(textInput.current.value.split(',')[0]);
        }
        else{
            setQ2Icon1(textInput.current.value)};
        }
    const handleIconQ2Show1 = () => {setIconQ2Show1(true)};

    const handleIconQ2Close2 = () => {
        setIconQ2Show2(false);
        if(typeof textInput.current.value === "string"){
            setSynQ2Icon2(textInput.current.value.split(',')[0]);
        }
        else{
            setQ2Icon2(textInput.current.value)};
        }
    const handleIconQ2Show2 = () => {setIconQ2Show2(true)};

    const handleDiscClose = () => {setDiscShow(false); 
        setOther(false);
        if(other === false){
            setDisciplinarian(textInput.current.value)};
        }
    const handleDiscShow = () => {setDiscShow(true)};

    const handleGeneralClose = () => {setGeneralShow(false); 
        setOther2(false);
        if(other2 === false){
            setGeneralization(textInput.current.value)};
        }
    const handleGeneralShow = () => {setGeneralShow(true)}; 

    const handleEdit1Close = () => {setEdit1Show(false); 
        setOther(false);
        if(other === false){
            setEditWord1(textInput.current.value)};
        }
    const handleEdit1Show = () => {setEdit1Show(true)};

    const handleEdit2Close = () => {setEdit2Show(false); 
        setOther(false);
        if(other === false){
            setEditWord2(textInput.current.value)};
        }
    const handleEdit2Show = () => {setEdit2Show(true)};

    const handleEdit3Close = () => {setEdit3Show(false); 
        setOther(false);
        if(other === false){
            setEditWord3(textInput.current.value)};
        }
    const handleEdit3Show = () => {setEdit3Show(true)};

    const handleEdit4Close = () => {setEdit4Show(false); 
        setOther(false);
        if(other === false){
            setEditWord4(textInput.current.value)};
        }
    const handleEdit4Show = () => {setEdit4Show(true)};

    const handleEdit5Close = () => {setEdit5Show(false); 
        setOther(false);
        if(other === false){
            setEditWord5(textInput.current.value)};
        }
    const handleEdit5Show = () => {setEdit5Show(true)};

    const handleEdit6Close = () => {setEdit6Show(false); 
        setOther(false);
        if(other === false){
            setEditWord6(textInput.current.value)};
        }
    const handleEdit6Show = () => {setEdit6Show(true)};

    const handleEdit7Close = () => {setEdit7Show(false); 
        setOther(false);
        if(other === false){
            setEditWord7(textInput.current.value)};
        }
    const handleEdit7Show = () => {setEdit7Show(true)};

    const handleEdit8Close = () => {setEdit8Show(false); 
        setOther(false);
        if(other === false){
            setEditWord8(textInput.current.value)};
        }
    const handleEdit8Show = () => {setEdit8Show(true)};

    const handleEdit9Close = () => {setEdit9Show(false); 
        setOther(false);
        if(other === false){
            setEditWord9(textInput.current.value)};
        }
    const handleEdit9Show = () => {setEdit9Show(true)};

    const handleEdit10Close = () => {setEdit10Show(false); 
        setOther(false);
        if(other === false){
            setEditWord10(textInput.current.value)};
        }
    const handleEdit10Show = () => {setEdit10Show(true)};

    const handleEdit11Close = () => {setEdit11Show(false); 
        setOther(false);
        if(other === false){
            setEditWord11(textInput.current.value)};
        }
    const handleEdit11Show = () => {setEdit11Show(true)};

    const handleEdit12Close = () => {setEdit12Show(false); 
        setOther(false);
        if(other === false){
            setEditWord12(textInput.current.value)};
        }
    const handleEdit12Show = () => {setEdit12Show(true)};

    const handleEdit13Close = () => {setEdit13Show(false); 
        setOther(false);
        if(other === false){
            setEditWord13(textInput.current.value)};
        }
    const handleEdit13Show = () => {setEdit13Show(true)};

    const handleEdit14Close = () => {setEdit14Show(false); 
        setOther(false);
        if(other === false){
            setEditWord14(textInput.current.value)};
        }
    const handleEdit14Show = () => {setEdit14Show(true)};

    const handleEdit15Close = () => {setEdit15Show(false); 
        setOther(false);
        if(other === false){
            setEditWord15(textInput.current.value)};
        }
    const handleEdit15Show = () => {setEdit15Show(true)};

    const handleEdit16Close = () => {setEdit16Show(false); 
        setOther(false);
        if(other === false){
            setEditWord16(textInput.current.value)};
        }
    const handleEdit16Show = () => {setEdit16Show(true)};

    const handleEdit17Close = () => {setEdit17Show(false); 
        setOther(false);
        if(other === false){
            setEditWord17(textInput.current.value)};
        }
    const handleEdit17Show = () => {setEdit17Show(true)};

    const handleEdit18Close = () => {setEdit18Show(false); 
        setOther(false);
        if(other === false){
            setEditWord18(textInput.current.value)};
        }
    const handleEdit18Show = () => {setEdit18Show(true)};

    const handleEdit19Close = () => {setEdit19Show(false); 
        setOther(false);
        if(other === false){
            setEditWord19(textInput.current.value)};
        }
    const handleEdit19Show = () => {setEdit19Show(true)};

    const handleEdit20Close = () => {setEdit20Show(false); 
        setOther(false);
        if(other === false){
            setEditWord20(textInput.current.value)};
        }
    const handleEdit20Show = () => {setEdit20Show(true)};

    const handleEdit21Close = () => {setEdit21Show(false); 
        setOther(false);
        if(other === false){
            setEditWord21(textInput.current.value)};
        }
    const handleEdit21Show = () => {setEdit21Show(true)};


    // Custom Handlers //
    const handleCustomShow = () => {
        // if custom is already selected and user hits custom again, we go back to default
        if(custom){
            setCustom(false);
            setSaveCustom(false);
            setCompare(false);
            setShow(false);
            setMainTopic("");
            setSubTopic("");
        }
        // change to custom edit mode
        else{
            setCustomShow(true); 
            setCustom(true);
            setCompare(false);
        }
    };
    const handleCustomClose = () =>{
        // user saved custom inputs
        if(saveCustom){
            let layout = parseInt(layoutRef.current.value);
            // user selected radomize sentence layout
            if (layout === 999){
                let number = Math.floor(Math.random() * Math.floor(12));
                setQuestion1(number);
            }
            // user customized their sentence layout
            // user selected a compare & contrast Question
            else if (layout === 9 || layout === 10 || layout === 11){
                setCompare(true);
                setQuestion1(layout);
            }
            else{
                setCompare(false);
                setQuestion1(layout);
            }

    // Check if user customized specific fields //
            if (topicRef.current.value.length < 1){
                setMainTopic("");
            } else{
                setMainTopic(topicRef.current.value);
            }

            if (subTopicRef.current.value.length < 1){
                setSubTopic("");
            } else{
                setSubTopic(subTopicRef.current.value);
            }

            if (icon1Ref.current.value.length < 1){
                setIcon1(White);
                setQ2Icon1(White);
                setDepthIcon(White);
            } else{
                setIcon1(icon1Ref.current.value);
                setQ2Icon1(icon1Ref.current.value);
                setDepthIcon(icon1Ref.current.value);
            }

            if(icon2Ref.current.value.length < 1){
                setIcon2(White);
                setQ2Icon2(White);
                setComplexIcon(White);
            } else{
                setIcon2(icon2Ref.current.value);
                setQ2Icon2(icon2Ref.current.value);
                setComplexIcon(icon2Ref.current.value);
            }
            
            if (discRef.current.value < 1){
                setDisciplinarian("Disciplinarian")
                setCustomDisc('set Disciplinarian')
            } else{
                setDisciplinarian(discRef.current.value);
            }

            if (generalRef.current.value.length < 0){
                setGeneralization("Generalization");
            } else{
                setGeneralization(generalRef.current.value);
            }
            setCustomShow(false);
            setShow(true);
            // reset variables in custom mode
            setCustomDisc('Set Disciplinarian');
            setEditWord1('related to');
            setEditWord2('found in');
            setEditWord3('related to');
            setEditWord4('in');
            setEditWord5('regarding');
            setEditWord6('regarding');
            setEditWord7('are');
            setEditWord8('regarding');
            setEditWord9('is');
            setEditWord10('related to');
            setEditWord11('What');
            setEditWord12('of');
            setEditWord13('using');
            setEditWord14('and');
            setEditWord15('the');
            setEditWord16('a');
            setEditWord17('investigates');
            setEditWord18('of');
            setEditWord19('of the');
            setEditWord20('of');
            setEditWord21('at');
            setSynonym1('');
            setSynonym2('');
            setSynonym3('');
            setSynonym4('');
            setSynQ2Icon1('');
            setSynQ2Icon2('');
        }
        // user hit cancel
        else{
            setCustom(false);
            setCustomShow(false);
        }
    };

    // used for custom Words and Disciplinarian 
    const OtherSelected = (e) =>{
        if(e.target.value === 'other' || e.target.value === 'Add your own'){
            setOther(true);
        } else{
            setOther(false);
        }
    };
    
    // used for custom Generalization 
    const Other2Selected = (e) =>{
        if(e.target.value === 'other' || e.target.value === 'Add your own'){
            setOther2(true);
        } else{
            setOther2(false);
        }
    };

    const handleCustomDisc = (e) =>{
        e.preventDefault();
        if(e.target.value === 'Set Disciplinarian'){
            setDisciplinarian(disciplinarians[Math.floor(Math.random() * Math.floor(20))]);
            setCustomDisc('Set Disciplinarian');
        }
        else{
            setDisciplinarian(e.target.value);
            setCustomDisc(e.target.value);
        }
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        setDisciplinarian(e.target.value);
        setCustomDisc(e.target.value);
    }

    // All D & C icons and Content imparatives

    const DcIcons = [Trends, Unanswered, Rules, Patterns, OverTime, Multiple, Language, Ethics, Details, BigIdea, Across];
    // Overtime never works in this question so we are removing it from the list by making its own array 
    const Q2Icons = [Trends, Unanswered, Rules, Patterns, Multiple, Language, Ethics, Details, BigIdea, Across];
    const DepthIcons = [Trends, Unanswered, Rules, Patterns, Language, Ethics, Details, BigIdea ];
    const ComplexIcons = [OverTime, Multiple, Across];

// save user topic inputes as variables
    const topicHandler = (e) => {
        e.preventDefault();
        setMainTopic(e.target.value);
    };
    const subTopicHandler = (e) => {
        e.preventDefault();
        setSubTopic(e.target.value);
    };

// Main Function for creating icons and questions for user
    const generating = () =>{
        setShow(false);
        setCustom(false);
        // Generate random numbers to create 2 unique questions 
        let numArrQ = [];
        function getRandomQ(){
            if(compare){
                // If Compare & Contrast, select from compare & contrast Questions
                while(numArrQ.length < 2){
                    let number = Math.floor(Math.random() * Math.floor(3))
                    if(numArrQ.includes(number)){
                        continue;
                    }
                    else{
                        numArrQ.push(number);
                    }
                }
                return(numArrQ);
            }
            else{
                while(numArrQ.length < 2){
                    let number = Math.floor(Math.random() * Math.floor(9));
                    if(numArrQ.includes(number)){
                        continue;
                    }
                    else{
                        numArrQ.push(number);
                    }
                }
                return(numArrQ);
            }
        };

        let numArr = [];
        function getRandom(){
            // This function gets 4 unique random numbers so there are no duplcate icons at once
            while(numArr.length < 4){
                // Get random nums to grab icons at random index numbers
                let num = Math.floor(Math.random() * Math.floor(11))
                if(numArr.includes(num)){
                    continue;
                }
                else{
                    numArr.push(num);
                }
            }
            return(numArr);
        };

        let q2NumArr = [];
        function getRandomQ2Icons(){
        // This function gets 2 unique random numbers so there are no duplcate icons at once
            while(q2NumArr.length < 2){
                // Get random nums to grab icons at random index numbers
                let num = Math.floor(Math.random() * Math.floor(10))
                if(q2NumArr.includes(num)){
                    continue;
                }
                else{
                    q2NumArr.push(num);
                }
            }
            return(q2NumArr);
        };

        if(customDisc === 'Set Disciplinarian'){
            setDisciplinarian(disciplinarians[Math.floor(Math.random() * Math.floor(20))]);
        }
        getRandom();
        getRandomQ();
        getRandomQ2Icons();

        if(compare){
            for (let i = 0; i < numArrQ.length; i++){
                if(numArrQ[i] === 0){
                    numArrQ[i] = 9;
                }
                else if(numArrQ[i] === 1){
                    numArrQ[i] = 10;
                }
                else{
                    numArrQ[i] = 11;
                }
            }
            setQuestion1(numArrQ[0]);
        }
        else{
            setQuestion1(numArrQ[0]);
        }
        setIcon1(DcIcons[numArr[0]]);
        setIcon2(DcIcons[numArr[1]]);
        setQ2Icon1(Q2Icons[q2NumArr[0]]);
        setQ2Icon2(Q2Icons[q2NumArr[1]]);
        setDepthIcon(DepthIcons[Math.floor(Math.random() * Math.floor(8))]);
        setComplexIcon(ComplexIcons[Math.floor(Math.random() * Math.floor(3))]);
        setGeneralization(generalizations[Math.floor(Math.random() * Math.floor(50))]);
        setEditWord1('related to');
        setEditWord2('found in');
        setEditWord3('related to');
        setEditWord4('in');
        setEditWord5('regarding');
        setEditWord6('regarding');
        setEditWord7('are');
        setEditWord8('regarding');
        setEditWord9('is');
        setEditWord10('related to');
        setEditWord11('What');
        setEditWord12('of');
        setEditWord13('using');
        setEditWord14('and');
        setEditWord15('the');
        setEditWord16('a');
        setEditWord17('investigates');
        setEditWord18('of');
        setEditWord19('of the');
        setEditWord20('of');
        setEditWord21('at');
        setSynonym1('');
        setSynonym2('');
        setSynonym3('');
        setSynonym4('');
        setSynQ2Icon1('');
        setSynQ2Icon2('');
    }

    const generated = () => {
        setShow(true);
    };

    // send email to JTaylor Support //
    const formSubmit = (e, message, email, name) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/sendmessage', {message, email, name})
        .then( res => {
            {setName('') 
            setEmail('') 
            setMessage('')
            setEmailButton('Email Sent!')}
        })
        .catch( () => {
            console.log('Message not sent');
        })
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
    
    const QuestionStatement = () => {
        return(
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        { question1 == 0 &&
                            <Text>
                                Why {editWord7} {synonym3}<Image alt='Icon' src={depthIcon} /> found in {mainTopic} important from the perspective of {disciplinarian}? 
                            </Text>
                        }
                        { question1 == 1 &&
                            <Text>
                                How can you summarize {editWord15} {synQ2Icon1}<Image alt='Icon' src={q2Icon1} /> {editWord1} {mainTopic} {editWord13} {synQ2Icon2}<Image alt='Icon' src={q2Icon2} />?
                            </Text>
                        }
                        { question1 == 2 &&
                            <Text>
                                Which evidence would {disciplinarian} use to substantiate {generalization} {editWord4} {mainTopic}?
                            </Text>
                        }
                        { question1 == 3 &&
                            <Text>
                                What would be the positive and negative results if {disciplinarian} changed {editWord16} {synonym3}<Image alt='Icon' src={depthIcon} /> in {mainTopic}?
                            </Text>
                        }
                        { question1 == 4 &&
                            <Text>
                                What questions {editWord10} {synonym1}<Image alt='Icon' src={icon1} /> might arise when {disciplinarian} {editWord17} {synonym2}<Image alt='Icon' src={icon2}/> {editWord12} {mainTopic}?
                            </Text>
                        }
                        { question1 == 5 &&
                            <Text>
                                What evidence can you provide to prove the importance {editWord18} {synonym1}<Image alt='Icon' src={icon1} /> {editWord2} {synonym2}<Image alt='Icon' src={icon2} /> {editWord8} {mainTopic}?
                            </Text>
                        }
                        { question1 == 6 &&
                            <Text>
                                How might {disciplinarian} view the impact {editWord19} {synonym3}<Image alt='Icon' src={depthIcon} /> {editWord6} {mainTopic} {synonym4}<Image alt='Icon' src={complexIcon} />?
                            </Text>
                        }
                        { question1 == 7 &&
                            <Text>
                                What {synonym1}<Image alt='Icon' src={icon1} /> {editWord5} {mainTopic} {editWord9} necessary for us to be able to conclude {generalization}?
                            </Text>
                        }
                        { question1 == 8 &&
                            <Text>
                                How can the idea that {generalization} be best explained from the viewpoint of {disciplinarian} using {synonym1}<Image alt='Icon' src={icon1} /> {editWord14} {synonym2}<Image alt='Icon' src={icon2} /> related to {mainTopic}?
                            </Text>
                        }
                        { question1 == 9 &&
                            <Text>
                                {editWord11} {synonym1}<Image alt='Icon' src={icon1} /> distinguish(es) {mainTopic} from {subTopic} from the perspective of {disciplinarian}?
                            </Text>
                        }
                        { question1 == 10 &&
                            <Text>
                                What are the similarities and differences {editWord20} {synonym1}<Image alt='Icon' src={icon1} /> found in {mainTopic} and {subTopic} from the perspective of {disciplinarian}?
                            </Text>
                        }
                        { question1 == 11 &&
                            <Text>
                                What hypothesis or new idea might be developed to explain {mainTopic} if {disciplinarian} investigated {subTopic} by looking {editWord21} {synonym1}<Image alt='Icon' src={icon1} /> {editWord3} {synonym2}<Image alt='Icon' src={icon2} />?
                            </Text>
                        }
                    </View>
                </Page>
            </Document>
        )
    };

    
    return(
        <div className='wrapper'>

            <div className='container mt-5' id='divToPrint'>
                <Animated animationIn="fadeInRight" animationInDuration={800} isVisible={true}>
                    <div className='topMain text-center mt-4' data-html2canvas-ignore="true">
                        <div className='inputs'>
                            <div class="input-group mb-3 col-lg-7">
                                <input type="text" className="form-control" placeholder="Enter Topic" value={mainTopic} onChange={topicHandler} />
                                {compare &&
                                    <input type="text" className="form-control" placeholder="Enter 2nd Topic" value={subTopic} onChange={subTopicHandler} />
                                }
                                <div class="input-group-append">
                                {saveCustom ?
                                    <button class="btn btn-info" id='generate' type="button" disabled title="Select the Custom Button again to exit Custom Mode">Custom Mode</button>
                                    :
                                    <button class="btn btn-info" id='generate' type="button" onMouseDown={generating} onMouseUp={generated}>Generate</button>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </Animated>
                
                <div className="row">
                
                    <div className='col-md-2 ml-4 mt-4' style={{zIndex: '2'}}>
                        <SideOptions custom={custom} handleCustomShow={handleCustomShow} compare={compare} setCompare={setCompare} customDisc={customDisc} handleCustomDisc={handleCustomDisc} submitHandler={submitHandler} />
                    </div>
                    
                    <div className="col-md-8 ml-4 mt-3" style={{zIndex: '1'}}>
                    
                            <div className='middleMain text-left mt-4 col-12' id={printing ? 'printCss' : 'normalCss'}>
                            { show ?
                                <>
                                    {/* <FadeIn transitionDuration={300} visible={show ? true : false}> */}
                                        <div className='questionBox'>
                                            <div className='text-right optionsQ4'>
                                                <PDFDownloadLink document={<QuestionStatement />} fileName="DCAP_Statement.pdf">
                                                    {() => {return <i className='bi bi-printer pdfPrint' title='Print PDF'></i>}}
                                                </PDFDownloadLink>
                                            </div>
                                            {question1 === 0 &&
                                                <p>Why <span onClick={handleEdit7Show} className='disc' title='Modify'>{editWord7}</span> {synonym3}<img alt='Icon' title='Modify Icon' src={depthIcon} className={synonym3 === '' ? 'icon' : 'grayIcon'} onClick={handleIcon3Show}/> found in {mainTopic} important from the perspective of <span onClick={handleDiscShow} className='disc' title='Modify'>{disciplinarian}</span>?</p> 
                                            }
                                            
                                            {question1 === 1 &&
                                                <p>How can you summarize <span onClick={handleEdit15Show} className='disc' title='Modify'>{editWord15}</span> {synQ2Icon1}<img alt='Icon' title='Modify Icon' src={q2Icon1} className={synQ2Icon1 === '' ? 'icon' : 'grayIcon'} onClick={handleIconQ2Show1}/> <span onClick={handleEdit1Show} className='disc' title='Modify'>{editWord1}</span> {mainTopic} <span onClick={handleEdit13Show} className='disc' title='Modify'>{editWord13}</span> {synQ2Icon2}<img alt='Icon' title='Modify Icon' src={q2Icon2} className={synQ2Icon2 === '' ? 'icon' : 'grayIcon'} onClick={handleIconQ2Show2}/>?</p>
                                            }
                                            
                                            {question1 === 2 &&
                                                <p>Which evidence would <span onClick={handleDiscShow} className='disc' title='Modify'>{disciplinarian}</span> use to substantiate <span onClick={handleGeneralShow} className='disc' title='Modify'>{generalization}</span> <span onClick={handleEdit4Show} className='disc' title='Modify'>{editWord4}</span> {mainTopic}?</p>
                                            }
                                            
                                            {question1 === 3 &&
                                                <p>What would be the positive and negative results if <span onClick={handleDiscShow} className='disc' title='Modify'>{disciplinarian}</span> changed <span onClick={handleEdit16Show} className='disc' title='Modify'>{editWord16}</span> {synonym3}<img alt='Icon' title='Modify Icon' src={depthIcon} className={synonym3 === '' ? 'icon' : 'grayIcon'} onClick={handleIcon3Show}/> in {mainTopic}?</p>
                                            }
                                            
                                            {question1 === 4 &&
                                                <p>What questions <span onClick={handleEdit10Show} className='disc' title='Modify'>{editWord10}</span> {synonym1}<img alt='Icon' title='Modify Icon' src={icon1} className={synonym1 === '' ? 'icon' : 'grayIcon'} onClick={handleIcon1Show}/> might arise when <span onClick={handleDiscShow} className='disc' title='Modify'>{disciplinarian}</span> <span onClick={handleEdit17Show} className='disc' title='Modify'>{editWord17}</span> {synonym2}<img alt='Icon' title='Modify Icon' src={icon2} className={synonym2 === '' ? 'icon' : 'grayIcon'} onClick={handleIcon2Show}/> <span onClick={handleEdit12Show} className='disc' title='Modify'>{editWord12}</span> {mainTopic}?</p>
                                            }
                                            
                                            {question1 === 5 &&
                                                <p>What evidence can you provide to prove the importance <span onClick={handleEdit18Show} className='disc' title='Modify'>{editWord18}</span> {synonym1}<img alt='Icon' title='Modify Icon' src={icon1} className={synonym1 === '' ? 'icon' : 'grayIcon'} onClick={handleIcon1Show}/> <span onClick={handleEdit2Show} className='disc' title='Modify'>{editWord2}</span> {synonym2}<img alt='Icon' title='Modify Icon' src={icon2} className={synonym2 === '' ? 'icon' : 'grayIcon'} onClick={handleIcon2Show}/> <span onClick={handleEdit8Show} className='disc' title='Modify'>{editWord8}</span> {mainTopic}?</p> 
                                            }
                                            
                                            {question1 === 6 &&
                                                <p>How might <span onClick={handleDiscShow} className='disc' title='Modify'>{disciplinarian}</span> view the impact <span onClick={handleEdit19Show} className='disc' title='Modify'>{editWord19}</span> {synonym3}<img alt='Icon' title='Modify Icon' src={depthIcon} className={synonym3 === '' ? 'icon' : 'grayIcon'} onClick={handleIcon3Show}/> <span onClick={handleEdit6Show} className='disc' title='Modify'>{editWord6}</span> {mainTopic} {synonym4}<img alt='Icon' title='Modify Icon' src={complexIcon} className={synonym4 === '' ? 'icon' : 'grayIcon'} onClick={handleIcon4Show}/>?</p>
                                            }
                                            
                                            {question1 === 7 &&
                                                <p>What {synonym1}<img alt='Icon' title='Modify Icon' src={icon1} className={synonym1 === '' ? 'icon' : 'grayIcon'} onClick={handleIcon1Show}/> <span onClick={handleEdit5Show} className='disc' title='Modify'>{editWord5}</span> {mainTopic} <span onClick={handleEdit9Show} className='disc' title='Modify'>{editWord9}</span> necessary for us to be able to conclude <span onClick={handleGeneralShow} className='disc' title='Modify'>{generalization}</span>?</p>
                                            }
                                            
                                            {question1 === 8 &&
                                                <p>How can the idea that <span onClick={handleGeneralShow} className='disc' title='Modify'>{generalization}</span> be best explained from the viewpoint of <span onClick={handleDiscShow} className='disc' title='Modify'>{disciplinarian}</span> using {synonym1}<img alt='Icon' title='Modify Icon' src={icon1} className={synonym1 === '' ? 'icon' : 'grayIcon'} onClick={handleIcon1Show}/> <span onClick={handleEdit14Show} className='disc' title='Modify'>{editWord14}</span> {synonym2}<img alt='Icon' title='Modify Icon' src={icon2} className={synonym2 === '' ? 'icon' : 'grayIcon'} onClick={handleIcon2Show}/> related to {mainTopic}?</p>
                                            }

                                    {/* Compare & Contrast questions */}
                                            {question1 === 9 &&
                                                <p><span onClick={handleEdit11Show} className='disc' title='Modify'>{editWord11}</span> {synonym1}<img alt='Icon' title='Modify Icon' src={icon1} className={synonym1 === '' ? 'icon' : 'grayIcon'} onClick={handleIcon1Show}/> distinguish(es) {mainTopic} from {subTopic} from the perspective of <span onClick={handleDiscShow} className='disc' title='Modify'>{disciplinarian}</span>?</p>
                                            }

                                            {question1 === 10 &&
                                                <p>What are the similarities and differences <span onClick={handleEdit20Show} className='disc' title='Modify'>{editWord20}</span> {synonym1}<img alt='Icon' title='Modify Icon' src={icon1} className={synonym1 === '' ? 'icon' : 'grayIcon'} onClick={handleIcon1Show}/> found in {mainTopic} and {subTopic} from the perspective of <span onClick={handleDiscShow} className='disc' title='Modify'>{disciplinarian}</span>?</p>
                                            }

                                            {question1 === 11 &&
                                                <p>What hypothesis or new idea might be developed to explain {mainTopic} if <span onClick={handleDiscShow} className='disc' title='Modify'>{disciplinarian}</span> investigated {subTopic} by looking <span onClick={handleEdit21Show} className='disc' title='Modify'>{editWord21}</span> {synonym1}<img alt='Icon' title='Modify Icon' src={icon1} className={synonym1 === '' ? 'icon' : 'grayIcon'} onClick={handleIcon1Show}/> <span onClick={handleEdit3Show} className='disc' title='Modify'>{editWord3}</span> {synonym2}<img alt='Icon' title='Modify Icon' src={icon2} className={synonym2 === '' ? 'icon' : 'grayIcon'} onClick={handleIcon2Show}/>?</p>
                                            }
                                        </div>
                                    {/* </FadeIn> */}
                                    <a href="javascript:;" onClick={() => setShowHelp1(true)} className='helpLink' data-html2canvas-ignore="true">examples of this question</a>
                                </>
                            :
                                <>
                                </>
                            } 
                            </div>
                    </div>
                </div>
            </div>

            {/* Modal #1 for Icon 1 */}
            <Modal show={icon1Show} onHide={handleIcon1Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Icon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={icon1} onChange={(e) => setIcon1(e.target.value)}>
                        <optgroup label="Depth & Complexity Icons">
                            <option value={Language}>Language of Discipline</option>
                            <option value={Details}>Details</option>
                            <option value={Patterns}>Patterns</option>
                            <option value={Rules}>Rules</option>
                            <option value={Trends}>Trends</option>
                            <option value={Unanswered}>Unanswered Questions</option>
                            <option value={Ethics}>Ethics</option>
                            <option value={BigIdea}>Big Idea</option>
                            <option value={OverTime}>Over Time</option>
                            <option value={Multiple}>Multiple Perspectives</option>
                            <option value={Across}>Across Disciplines</option>
                        </optgroup>
                        <optgroup label="Content Imperatives">
                            <option value={Origin}>Origin</option>
                            <option value={Parallel}>Parallel</option>
                            <option value={Paradox}>Paradox</option>
                            <option value={Convergence}>Convergence</option>
                            <option value={Contribution}>Contribution</option>
                        </optgroup>
                    </select>
                </Modal.Body>
                {/* Synonyms for Icon 1 */}
                <Modal.Body>
                    <select className='form-control' ref={textInput}>
                        <option value="" disabled selected>Select an Icon Synonym (optional)</option>
                        {icon1 === Rules &&
                            <optgroup label="Rules">
                                <option value="structure">structure</option>
                                <option value="order">order</option>
                                <option value="reason(s)">reason(s)</option>
                                <option value="regulation(s)">regulation(s)</option>
                                <option value="principle(s)">principle(s)</option>
                                <option value="framework(s)">framework(s)</option>
                                <option value="law(s)">law(s)</option>
                                <option value="standard(s)">standard(s)</option>
                            </optgroup>
                        }
                        {icon1 === Language &&
                        <optgroup label="Language of Discipline">
                            <option value="words">words</option>
                            <option value="vocabulary">vocabulary</option>
                            <option value="nomenclature">nomenclature</option>
                            <option value="lexicon">lexicon</option>
                            <option value="terms">terms</option>
                            <option value="vernacular">vernacular</option>
                            <option value="terminology">terminology</option>
                            <option value="jargon">jargon</option>
                        </optgroup>
                        }
                        {icon1 === Details &&
                        <optgroup label="Details">
                            <option value="parts">parts</option>
                            <option value="factor(s)">factor(s)</option>
                            <option value="attribute(s)">attribute(s)</option>
                            <option value="characteristic(s)">characteristic(s)</option>
                            <option value="variable(s)">variable(s)</option>
                            <option value="clue(s)">clue(s)</option>
                            <option value="idea(s)">idea(s)</option>
                            <option value="specific(s)">specific(s)</option>
                        </optgroup>
                        }
                        {icon1 === Patterns &&
                        <optgroup label="Patterns">
                            <option value="cycle(s)">cycle(s)</option>
                            <option value="sequence(s)">sequence(s)</option>
                            <option value="routine(s)">routine(s)</option>
                            <option value="reoccurring event(s)">reoccurring event(s)</option>
                            <option value="reoccurring idea(s)">reoccurring idea(s)</option>
                            <option value="repeating event(s)">repeating event(s)</option>
                            <option value="repeating idea(s)">repeating idea(s)</option>
                            <option value="pattern(s) of behavior">pattern(s) of behavior</option>
                        </optgroup>
                        }
                        {icon1 === Ethics &&
                        <optgroup label="Ethics">
                            <option value="values">values</option>
                            <option value="morals">morals</option>
                            <option value="bias(es)">bias(es)</option>
                            <option value="debate(s)">debate(s)</option>
                            <option value="discrimination(s)">discrimination(s)</option>
                            <option value="controversies">controversies</option>
                            <option value="judging">judging</option>
                            <option value="dilemma(s)">dilemma(s)</option>
                        </optgroup>
                        }
                        {icon1 === BigIdea &&
                        <optgroup label="Big Idea">
                            <option value="generalization(s)">generalization(s)</option>
                            <option value="principles">principles</option>
                            <option value="theories">theories</option>
                            <option value="law(s)">law(s)</option>
                            <option value="main idea(s)">main idea(s)</option>
                            <option value="summarization(s)">summarization(s)</option>
                            <option value="overarching statement(s)">overarching statement(s)</option>
                            <option value="general statement(s)">general statement(s)</option>
                        </optgroup>
                        }
                        {icon1 === Multiple &&
                        <optgroup label="Multiple Perspectives">
                            <option value="point of view(s)">point of view(s)</option>
                            <option value="stance(s)">stance(s)</option>
                            <option value="outlook(s)">outlook(s)</option>
                            <option value="perspective(s)">perspective(s)</option>
                            <option value="different roles and knowledge(s)">different roles and knowledge(s)</option>
                            <option value="philosophy">philosophy</option>
                            <option value="view(s)">view(s)</option>
                            <option value="position(s)">position(s)</option>
                        </optgroup>
                        }
                        {icon1 === OverTime &&
                        <optgroup label="Over Time">
                            <option value="past present & future">past, present, future</option>
                            <option value="correlation(s)">correlation(s)</option>
                            <option value="reflection(s)">reflection(s)</option>
                            <option value="connection(s)">connection(s)</option>
                            <option value="change(s) over time">change(s) over time</option>
                            <option value="prediction(s)">prediction(s)</option>
                            <option value="relationships within a time period">relationships within a time period</option>
                            <option value="time perspective(s)">time perspective(s)</option>
                        </optgroup>
                        }
                        {icon1 === Trends &&
                        <optgroup label="Trends">
                            <option value="influence(s)">influence(s)</option>
                            <option value="force(s)">force(s)</option>
                            <option value="general direction(s)">general direction(s)</option>
                            <option value="impact(s)">impact(s)</option>
                            <option value="fad(s)">fad(s)</option>
                            <option value="tendency">tendency</option>
                            <option value="course(s) of action">course(s) of action</option>
                            <option value="ongoing factor(s)">ongoing factor(s)</option>
                        </optgroup>
                        }
                        {icon1 === Unanswered &&
                        <optgroup label="Unanswered Questions">
                            <option value="discrepancies">discrepancies</option>
                            <option value="unclear">unclear</option>
                            <option value="incomplete">incomplete</option>
                            <option value="unexplained">unexplained</option>
                            <option value="unresolved">unresolved</option>
                            <option value="unknown">unknown</option>
                            <option value="missing element(s)">missing element(s)</option>
                            <option value="conundrum(s)">conundrum(s)</option>
                        </optgroup>
                        }
                        {icon1 === Across &&
                        <optgroup label="Across Disciplines">
                            <option value="interdisciplinary relationships">interdisciplinary relationships</option>
                            <option value="cross-curricular connections">cross-curricular connections</option>
                            <option value="connect">connect</option>
                            <option value="associate">associate</option>
                            <option value="integrate">integrate</option>
                            <option value="relationships">relationships</option>
                            <option value="cross-disciplinary connection(s)">cross-disciplinary connection(s)</option>
                            <option value="common element(s)">common element(s)</option>
                        </optgroup>
                        }
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleIcon1Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleIcon1Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal #2 for Icon 2 */}
            <Modal show={icon2Show} onHide={handleIcon2Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Icon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={icon2} onChange={(e) => setIcon2(e.target.value)}>
                        <optgroup label="Depth & Complexity Icons">
                            <option value={Language}>Language of Discipline</option>
                            <option value={Details}>Details</option>
                            <option value={Patterns}>Patterns</option>
                            <option value={Rules}>Rules</option>
                            <option value={Trends}>Trends</option>
                            <option value={Unanswered}>Unanswered Questions</option>
                            <option value={Ethics}>Ethics</option>
                            <option value={BigIdea}>Big Idea</option>
                            <option value={OverTime}>Over Time</option>
                            <option value={Multiple}>Multiple Perspectives</option>
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
                    <select id='icon2select' className='form-control' ref={textInput}>
                        <option value="" disabled selected>Select an Icon Synonym (optional)</option>
                        {icon2 === Rules &&
                            <optgroup label="Rules">
                                <option value="structure">structure</option>
                                <option value="order">order</option>
                                <option value="reason(s)">reason(s)</option>
                                <option value="regulation(s)">regulation(s)</option>
                                <option value="principle(s)">principle(s)</option>
                                <option value="framework(s)">framework(s)</option>
                                <option value="law(s)">law(s)</option>
                                <option value="standard(s)">standard(s)</option>
                            </optgroup>
                        }
                        {icon2 === Language &&
                        <optgroup label="Language of Discipline">
                            <option value="words">words</option>
                            <option value="vocabulary">vocabulary</option>
                            <option value="nomenclature">nomenclature</option>
                            <option value="lexicon">lexicon</option>
                            <option value="terms">terms</option>
                            <option value="vernacular">vernacular</option>
                            <option value="terminology">terminology</option>
                            <option value="jargon">jargon</option>
                        </optgroup>
                        }
                        {icon2 === Details &&
                        <optgroup label="Details">
                            <option value="parts">parts</option>
                            <option value="factor(s)">factor(s)</option>
                            <option value="attribute(s)">attribute(s)</option>
                            <option value="characteristic(s)">characteristic(s)</option>
                            <option value="variable(s)">variable(s)</option>
                            <option value="clue(s)">clue(s)</option>
                            <option value="idea(s)">idea(s)</option>
                            <option value="specific(s)">specific(s)</option>
                        </optgroup>
                        }
                        {icon2 === Patterns &&
                        <optgroup label="Patterns">
                            <option value="cycle(s)">cycle(s)</option>
                            <option value="sequence(s)">sequence(s)</option>
                            <option value="routine(s)">routine(s)</option>
                            <option value="reoccurring event(s)">reoccurring event(s)</option>
                            <option value="reoccurring idea(s)">reoccurring idea(s)</option>
                            <option value="repeating event(s)">repeating event(s)</option>
                            <option value="repeating idea(s)">repeating idea(s)</option>
                            <option value="pattern(s) of behavior">pattern(s) of behavior</option>
                        </optgroup>
                        }
                        {icon2 === Ethics &&
                        <optgroup label="Ethics">
                            <option value="values">values</option>
                            <option value="morals">morals</option>
                            <option value="bias(es)">bias(es)</option>
                            <option value="debate(s)">debate(s)</option>
                            <option value="discrimination(s)">discrimination(s)</option>
                            <option value="controversies">controversies</option>
                            <option value="judging">judging</option>
                            <option value="dilemma(s)">dilemma(s)</option>
                        </optgroup>
                        }
                        {icon2 === BigIdea &&
                        <optgroup label="Big Idea">
                            <option value="generalization(s)">generalization(s)</option>
                            <option value="principles">principles</option>
                            <option value="theories">theories</option>
                            <option value="law(s)">law(s)</option>
                            <option value="main idea(s)">main idea(s)</option>
                            <option value="summarization(s)">summarization(s)</option>
                            <option value="overarching statement(s)">overarching statement(s)</option>
                            <option value="general statement(s)">general statement(s)</option>
                        </optgroup>
                        }
                        {icon2 === Multiple &&
                        <optgroup label="Multiple Perspectives">
                            <option value="point of view(s)">point of view(s)</option>
                            <option value="stance(s)">stance(s)</option>
                            <option value="outlook(s)">outlook(s)</option>
                            <option value="perspective(s)">perspective(s)</option>
                            <option value="different roles and knowledge(s)">different roles and knowledge(s)</option>
                            <option value="philosophy">philosophy</option>
                            <option value="view(s)">view(s)</option>
                            <option value="position(s)">position(s)</option>
                        </optgroup>
                        }
                        {icon2 === OverTime &&
                        <optgroup label="Over Time">
                            <option value="past present & future">past, present, future</option>
                            <option value="correlation(s)">correlation(s)</option>
                            <option value="reflection(s)">reflection(s)</option>
                            <option value="connection(s)">connection(s)</option>
                            <option value="change(s) over time">change(s) over time</option>
                            <option value="prediction(s)">prediction(s)</option>
                            <option value="relationships within a time period">relationships within a time period</option>
                            <option value="time perspective(s)">time perspective(s)</option>
                        </optgroup>
                        }
                        {icon2 === Trends &&
                        <optgroup label="Trends">
                            <option value="influence(s)">influence(s)</option>
                            <option value="force(s)">force(s)</option>
                            <option value="general direction(s)">general direction(s)</option>
                            <option value="impact(s)">impact(s)</option>
                            <option value="fad(s)">fad(s)</option>
                            <option value="tendency">tendency</option>
                            <option value="course(s) of action">course(s) of action</option>
                            <option value="ongoing factor(s)">ongoing factor(s)</option>
                        </optgroup>
                        }
                        {icon2 === Unanswered &&
                        <optgroup label="Unanswered Questions">
                            <option value="discrepancies">discrepancies</option>
                            <option value="unclear">unclear</option>
                            <option value="incomplete">incomplete</option>
                            <option value="unexplained">unexplained</option>
                            <option value="unresolved">unresolved</option>
                            <option value="unknown">unknown</option>
                            <option value="missing element(s)">missing element(s)</option>
                            <option value="conundrum(s)">conundrum(s)</option>
                        </optgroup>
                        }
                        {icon2 === Across &&
                        <optgroup label="Across Disciplines">
                            <option value="interdisciplinary relationships">interdisciplinary relationships</option>
                            <option value="cross-curricular connections">cross-curricular connections</option>
                            <option value="connect">connect</option>
                            <option value="associate">associate</option>
                            <option value="integrate">integrate</option>
                            <option value="relationships">relationships</option>
                            <option value="cross-disciplinary connection(s)">cross-disciplinary connection(s)</option>
                            <option value="common element(s)">common element(s)</option>
                        </optgroup>
                        }
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleIcon2Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleIcon2Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal #3 for Depth Icons */}
            <Modal show={icon3Show} onHide={handleIcon3Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Icon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={depthIcon} onChange={(e) => setDepthIcon(e.target.value)}>
                        <optgroup label="Depth & Complexity Icons">
                            <option value={Language}>Language of Discipline</option>
                            <option value={Details}>Details</option>
                            <option value={Patterns}>Patterns</option>
                            <option value={Rules}>Rules</option>
                            <option value={Trends}>Trends</option>
                            <option value={Unanswered}>Unanswered Questions</option>
                            <option value={Ethics}>Ethics</option>
                            <option value={BigIdea}>Big Idea</option>
                            <option value={OverTime}>Over Time</option>
                            <option value={Multiple}>Multiple Perspectives</option>
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
                {/* Synonyms for Depth Icons */}
                <Modal.Body>
                    <select className='form-control' ref={textInput}>
                        <option value="" disabled selected>Select an Icon Synonym (optional)</option>
                        {depthIcon === Rules &&
                            <optgroup label="Rules">
                                <option value="structure">structure</option>
                                <option value="order">order</option>
                                <option value="reason(s)">reason(s)</option>
                                <option value="regulation(s)">regulation(s)</option>
                                <option value="principle(s)">principle(s)</option>
                                <option value="framework(s)">framework(s)</option>
                                <option value="law(s)">law(s)</option>
                                <option value="standard(s)">standard(s)</option>
                            </optgroup>
                        }
                        {depthIcon === Language &&
                        <optgroup label="Language of Discipline">
                            <option value="words">words</option>
                            <option value="vocabulary">vocabulary</option>
                            <option value="nomenclature">nomenclature</option>
                            <option value="lexicon">lexicon</option>
                            <option value="terms">terms</option>
                            <option value="vernacular">vernacular</option>
                            <option value="terminology">terminology</option>
                            <option value="jargon">jargon</option>
                        </optgroup>
                        }
                        {depthIcon === Details &&
                        <optgroup label="Details">
                            <option value="parts">parts</option>
                            <option value="factor(s)">factor(s)</option>
                            <option value="attribute(s)">attribute(s)</option>
                            <option value="characteristic(s)">characteristic(s)</option>
                            <option value="variable(s)">variable(s)</option>
                            <option value="clue(s)">clue(s)</option>
                            <option value="idea(s)">idea(s)</option>
                            <option value="specific(s)">specific(s)</option>
                        </optgroup>
                        }
                        {depthIcon === Patterns &&
                        <optgroup label="Patterns">
                            <option value="cycle(s)">cycle(s)</option>
                            <option value="sequence(s)">sequence(s)</option>
                            <option value="routine(s)">routine(s)</option>
                            <option value="reoccurring event(s)">reoccurring event(s)</option>
                            <option value="reoccurring idea(s)">reoccurring idea(s)</option>
                            <option value="repeating event(s)">repeating event(s)</option>
                            <option value="repeating idea(s)">repeating idea(s)</option>
                            <option value="pattern(s) of behavior">pattern(s) of behavior</option>
                        </optgroup>
                        }
                        {depthIcon === Ethics &&
                        <optgroup label="Ethics">
                            <option value="values">values</option>
                            <option value="morals">morals</option>
                            <option value="bias(es)">bias(es)</option>
                            <option value="debate(s)">debate(s)</option>
                            <option value="discrimination(s)">discrimination(s)</option>
                            <option value="controversies">controversies</option>
                            <option value="judging">judging</option>
                            <option value="dilemma(s)">dilemma(s)</option>
                        </optgroup>
                        }
                        {depthIcon === BigIdea &&
                        <optgroup label="Big Idea">
                            <option value="generalization(s)">generalization(s)</option>
                            <option value="principles">principles</option>
                            <option value="theories">theories</option>
                            <option value="law(s)">law(s)</option>
                            <option value="main idea(s)">main idea(s)</option>
                            <option value="summarization(s)">summarization(s)</option>
                            <option value="overarching statement(s)">overarching statement(s)</option>
                            <option value="general statement(s)">general statement(s)</option>
                        </optgroup>
                        }
                        {depthIcon === Multiple &&
                        <optgroup label="Multiple Perspectives">
                            <option value="point of view(s)">point of view(s)</option>
                            <option value="stance(s)">stance(s)</option>
                            <option value="outlook(s)">outlook(s)</option>
                            <option value="perspective(s)">perspective(s)</option>
                            <option value="different roles and knowledge(s)">different roles and knowledge(s)</option>
                            <option value="philosophy">philosophy</option>
                            <option value="view(s)">view(s)</option>
                            <option value="position(s)">position(s)</option>
                        </optgroup>
                        }
                        {depthIcon === OverTime &&
                        <optgroup label="Over Time">
                            <option value="past present & future">past, present, future</option>
                            <option value="correlation(s)">correlation(s)</option>
                            <option value="reflection(s)">reflection(s)</option>
                            <option value="connection(s)">connection(s)</option>
                            <option value="change(s) over time">change(s) over time</option>
                            <option value="prediction(s)">prediction(s)</option>
                            <option value="relationships within a time period">relationships within a time period</option>
                            <option value="time perspective(s)">time perspective(s)</option>
                        </optgroup>
                        }
                        {depthIcon === Trends &&
                        <optgroup label="Trends">
                            <option value="influence(s)">influence(s)</option>
                            <option value="force(s)">force(s)</option>
                            <option value="general direction(s)">general direction(s)</option>
                            <option value="impact(s)">impact(s)</option>
                            <option value="fad(s)">fad(s)</option>
                            <option value="tendency">tendency</option>
                            <option value="course(s) of action">course(s) of action</option>
                            <option value="ongoing factor(s)">ongoing factor(s)</option>
                        </optgroup>
                        }
                        {depthIcon === Unanswered &&
                        <optgroup label="Unanswered Questions">
                            <option value="discrepancies">discrepancies</option>
                            <option value="unclear">unclear</option>
                            <option value="incomplete">incomplete</option>
                            <option value="unexplained">unexplained</option>
                            <option value="unresolved">unresolved</option>
                            <option value="unknown">unknown</option>
                            <option value="missing element(s)">missing element(s)</option>
                            <option value="conundrum(s)">conundrum(s)</option>
                        </optgroup>
                        }
                        {depthIcon === Across &&
                        <optgroup label="Across Disciplines">
                            <option value="interdisciplinary relationships">interdisciplinary relationships</option>
                            <option value="cross-curricular connections">cross-curricular connections</option>
                            <option value="connect">connect</option>
                            <option value="associate">associate</option>
                            <option value="integrate">integrate</option>
                            <option value="relationships">relationships</option>
                            <option value="cross-disciplinary connection(s)">cross-disciplinary connection(s)</option>
                            <option value="common element(s)">common element(s)</option>
                        </optgroup>
                        }
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleIcon3Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleIcon3Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal #4 for Complexity Icons */}
            <Modal show={icon4Show} onHide={handleIcon4Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Icon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={complexIcon} onChange={(e) => setComplexIcon(e.target.value)}>
                        <optgroup label="Depth & Complexity Icons">
                            <option value={Language}>Language of Discipline</option>
                            <option value={Details}>Details</option>
                            <option value={Patterns}>Patterns</option>
                            <option value={Rules}>Rules</option>
                            <option value={Trends}>Trends</option>
                            <option value={Unanswered}>Unanswered Questions</option>
                            <option value={Ethics}>Ethics</option>
                            <option value={BigIdea}>Big Idea</option>
                            <option value={OverTime}>Over Time</option>
                            <option value={Multiple}>Multiple Perspectives</option>
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
                {/* Synonyms for Complex Icon */}
                <Modal.Body>
                    <select className='form-control' ref={textInput}>
                        <option value="" disabled selected>Select an Icon Synonym (optional)</option>
                        {complexIcon === Rules &&
                            <optgroup label="Rules">
                                <option value="structure">structure</option>
                                <option value="order">order</option>
                                <option value="reason(s)">reason(s)</option>
                                <option value="regulation(s)">regulation(s)</option>
                                <option value="principle(s)">principle(s)</option>
                                <option value="framework(s)">framework(s)</option>
                                <option value="law(s)">law(s)</option>
                                <option value="standard(s)">standard(s)</option>
                            </optgroup>
                        }
                        {complexIcon === Language &&
                        <optgroup label="Language of Discipline">
                            <option value="words">words</option>
                            <option value="vocabulary">vocabulary</option>
                            <option value="nomenclature">nomenclature</option>
                            <option value="lexicon">lexicon</option>
                            <option value="terms">terms</option>
                            <option value="vernacular">vernacular</option>
                            <option value="terminology">terminology</option>
                            <option value="jargon">jargon</option>
                        </optgroup>
                        }
                        {complexIcon === Details &&
                        <optgroup label="Details">
                            <option value="parts">parts</option>
                            <option value="factor(s)">factor(s)</option>
                            <option value="attribute(s)">attribute(s)</option>
                            <option value="characteristic(s)">characteristic(s)</option>
                            <option value="variable(s)">variable(s)</option>
                            <option value="clue(s)">clue(s)</option>
                            <option value="idea(s)">idea(s)</option>
                            <option value="specific(s)">specific(s)</option>
                        </optgroup>
                        }
                        {complexIcon === Patterns &&
                        <optgroup label="Patterns">
                            <option value="cycle(s)">cycle(s)</option>
                            <option value="sequence(s)">sequence(s)</option>
                            <option value="routine(s)">routine(s)</option>
                            <option value="reoccurring event(s)">reoccurring event(s)</option>
                            <option value="reoccurring idea(s)">reoccurring idea(s)</option>
                            <option value="repeating event(s)">repeating event(s)</option>
                            <option value="repeating idea(s)">repeating idea(s)</option>
                            <option value="pattern(s) of behavior">pattern(s) of behavior</option>
                        </optgroup>
                        }
                        {complexIcon === Ethics &&
                        <optgroup label="Ethics">
                            <option value="values">values</option>
                            <option value="morals">morals</option>
                            <option value="bias(es)">bias(es)</option>
                            <option value="debate(s)">debate(s)</option>
                            <option value="discrimination(s)">discrimination(s)</option>
                            <option value="controversies">controversies</option>
                            <option value="judging">judging</option>
                            <option value="dilemma(s)">dilemma(s)</option>
                        </optgroup>
                        }
                        {complexIcon === BigIdea &&
                        <optgroup label="Big Idea">
                            <option value="generalization(s)">generalization(s)</option>
                            <option value="principles">principles</option>
                            <option value="theories">theories</option>
                            <option value="law(s)">law(s)</option>
                            <option value="main idea(s)">main idea(s)</option>
                            <option value="summarization(s)">summarization(s)</option>
                            <option value="overarching statement(s)">overarching statement(s)</option>
                            <option value="general statement(s)">general statement(s)</option>
                        </optgroup>
                        }
                        {complexIcon === Multiple &&
                        <optgroup label="Multiple Perspectives">
                            <option value="point of view(s)">point of view(s)</option>
                            <option value="stance(s)">stance(s)</option>
                            <option value="outlook(s)">outlook(s)</option>
                            <option value="perspective(s)">perspective(s)</option>
                            <option value="different roles and knowledge(s)">different roles and knowledge(s)</option>
                            <option value="philosophy">philosophy</option>
                            <option value="view(s)">view(s)</option>
                            <option value="position(s)">position(s)</option>
                        </optgroup>
                        }
                        {complexIcon === OverTime &&
                        <optgroup label="Over Time">
                            <option value="past present & future">past, present, future</option>
                            <option value="correlation(s)">correlation(s)</option>
                            <option value="reflection(s)">reflection(s)</option>
                            <option value="connection(s)">connection(s)</option>
                            <option value="change(s) over time">change(s) over time</option>
                            <option value="prediction(s)">prediction(s)</option>
                            <option value="relationships within a time period">relationships within a time period</option>
                            <option value="time perspective(s)">time perspective(s)</option>
                        </optgroup>
                        }
                        {complexIcon === Trends &&
                        <optgroup label="Trends">
                            <option value="influence(s)">influence(s)</option>
                            <option value="force(s)">force(s)</option>
                            <option value="general direction(s)">general direction(s)</option>
                            <option value="impact(s)">impact(s)</option>
                            <option value="fad(s)">fad(s)</option>
                            <option value="tendency">tendency</option>
                            <option value="course(s) of action">course(s) of action</option>
                            <option value="ongoing factor(s)">ongoing factor(s)</option>
                        </optgroup>
                        }
                        {complexIcon === Unanswered &&
                        <optgroup label="Unanswered Questions">
                            <option value="discrepancies">discrepancies</option>
                            <option value="unclear">unclear</option>
                            <option value="incomplete">incomplete</option>
                            <option value="unexplained">unexplained</option>
                            <option value="unresolved">unresolved</option>
                            <option value="unknown">unknown</option>
                            <option value="missing element(s)">missing element(s)</option>
                            <option value="conundrum(s)">conundrum(s)</option>
                        </optgroup>
                        }
                        {complexIcon === Across &&
                        <optgroup label="Across Disciplines">
                            <option value="interdisciplinary relationships">interdisciplinary relationships</option>
                            <option value="cross-curricular connections">cross-curricular connections</option>
                            <option value="connect">connect</option>
                            <option value="associate">associate</option>
                            <option value="integrate">integrate</option>
                            <option value="relationships">relationships</option>
                            <option value="cross-disciplinary connection(s)">cross-disciplinary connection(s)</option>
                            <option value="common element(s)">common element(s)</option>
                        </optgroup>
                        }
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleIcon4Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleIcon4Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

        {/* Modal for Icon 1 Q2 */}
            <Modal show={iconQ2Show1} onHide={handleIconQ2Close1}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Icon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={q2Icon1} onChange={(e) => setQ2Icon1(e.target.value)}>
                        <optgroup label="Depth & Complexity Icons">
                            <option value={Language}>Language of Discipline</option>
                            <option value={Details}>Details</option>
                            <option value={Patterns}>Patterns</option>
                            <option value={Rules}>Rules</option>
                            <option value={Trends}>Trends</option>
                            <option value={Unanswered}>Unanswered Questions</option>
                            <option value={Ethics}>Ethics</option>
                            <option value={BigIdea}>Big Idea</option>
                            <option value={OverTime}>Over Time</option>
                            <option value={Multiple}>Multiple Perspectives</option>
                            <option value={Across}>Across Disciplines</option>
                        </optgroup>
                        <optgroup label="Content Imperatives">
                            <option value={Origin}>Origin</option>
                            <option value={Parallel}>Parallel</option>
                            <option value={Paradox}>Paradox</option>
                            <option value={Convergence}>Convergence</option>
                            <option value={Contribution}>Contribution</option>
                        </optgroup>
                    </select>
                </Modal.Body>
                {/* Synonyms for Icon 1 Q2 */}
                <Modal.Body>
                    <select className='form-control' ref={textInput}>
                        <option value="" disabled selected>Select an Icon Synonym (optional)</option>
                        {q2Icon1 === Rules &&
                            <optgroup label="Rules">
                                <option value="structure">structure</option>
                                <option value="order">order</option>
                                <option value="reason(s)">reason(s)</option>
                                <option value="regulation(s)">regulation(s)</option>
                                <option value="principle(s)">principle(s)</option>
                                <option value="framework(s)">framework(s)</option>
                                <option value="law(s)">law(s)</option>
                                <option value="standard(s)">standard(s)</option>
                            </optgroup>
                        }
                        {q2Icon1 === Language &&
                        <optgroup label="Language of Discipline">
                            <option value="words">words</option>
                            <option value="vocabulary">vocabulary</option>
                            <option value="nomenclature">nomenclature</option>
                            <option value="lexicon">lexicon</option>
                            <option value="terms">terms</option>
                            <option value="vernacular">vernacular</option>
                            <option value="terminology">terminology</option>
                            <option value="jargon">jargon</option>
                        </optgroup>
                        }
                        {q2Icon1 === Details &&
                        <optgroup label="Details">
                            <option value="parts">parts</option>
                            <option value="factor(s)">factor(s)</option>
                            <option value="attribute(s)">attribute(s)</option>
                            <option value="characteristic(s)">characteristic(s)</option>
                            <option value="variable(s)">variable(s)</option>
                            <option value="clue(s)">clue(s)</option>
                            <option value="idea(s)">idea(s)</option>
                            <option value="specific(s)">specific(s)</option>
                        </optgroup>
                        }
                        {q2Icon1 === Patterns &&
                        <optgroup label="Patterns">
                            <option value="cycle(s)">cycle(s)</option>
                            <option value="sequence(s)">sequence(s)</option>
                            <option value="routine(s)">routine(s)</option>
                            <option value="reoccurring event(s)">reoccurring event(s)</option>
                            <option value="reoccurring idea(s)">reoccurring idea(s)</option>
                            <option value="repeating event(s)">repeating event(s)</option>
                            <option value="repeating idea(s)">repeating idea(s)</option>
                            <option value="pattern(s) of behavior">pattern(s) of behavior</option>
                        </optgroup>
                        }
                        {q2Icon1 === Ethics &&
                        <optgroup label="Ethics">
                            <option value="values">values</option>
                            <option value="morals">morals</option>
                            <option value="bias(es)">bias(es)</option>
                            <option value="debate(s)">debate(s)</option>
                            <option value="discrimination(s)">discrimination(s)</option>
                            <option value="controversies">controversies</option>
                            <option value="judging">judging</option>
                            <option value="dilemma(s)">dilemma(s)</option>
                        </optgroup>
                        }
                        {q2Icon1 === BigIdea &&
                        <optgroup label="Big Idea">
                            <option value="generalization(s)">generalization(s)</option>
                            <option value="principles">principles</option>
                            <option value="theories">theories</option>
                            <option value="law(s)">law(s)</option>
                            <option value="main idea(s)">main idea(s)</option>
                            <option value="summarization(s)">summarization(s)</option>
                            <option value="overarching statement(s)">overarching statement(s)</option>
                            <option value="general statement(s)">general statement(s)</option>
                        </optgroup>
                        }
                        {q2Icon1 === Multiple &&
                        <optgroup label="Multiple Perspectives">
                            <option value="point of view(s)">point of view(s)</option>
                            <option value="stance(s)">stance(s)</option>
                            <option value="outlook(s)">outlook(s)</option>
                            <option value="perspective(s)">perspective(s)</option>
                            <option value="different roles and knowledge(s)">different roles and knowledge(s)</option>
                            <option value="philosophy">philosophy</option>
                            <option value="view(s)">view(s)</option>
                            <option value="position(s)">position(s)</option>
                        </optgroup>
                        }
                        {q2Icon1 === OverTime &&
                        <optgroup label="Over Time">
                            <option value="past present & future">past, present, future</option>
                            <option value="correlation(s)">correlation(s)</option>
                            <option value="reflection(s)">reflection(s)</option>
                            <option value="connection(s)">connection(s)</option>
                            <option value="change(s) over time">change(s) over time</option>
                            <option value="prediction(s)">prediction(s)</option>
                            <option value="relationships within a time period">relationships within a time period</option>
                            <option value="time perspective(s)">time perspective(s)</option>
                        </optgroup>
                        }
                        {q2Icon1 === Trends &&
                        <optgroup label="Trends">
                            <option value="influence(s)">influence(s)</option>
                            <option value="force(s)">force(s)</option>
                            <option value="general direction(s)">general direction(s)</option>
                            <option value="impact(s)">impact(s)</option>
                            <option value="fad(s)">fad(s)</option>
                            <option value="tendency">tendency</option>
                            <option value="course(s) of action">course(s) of action</option>
                            <option value="ongoing factor(s)">ongoing factor(s)</option>
                        </optgroup>
                        }
                        {q2Icon1 === Unanswered &&
                        <optgroup label="Unanswered Questions">
                            <option value="discrepancies">discrepancies</option>
                            <option value="unclear">unclear</option>
                            <option value="incomplete">incomplete</option>
                            <option value="unexplained">unexplained</option>
                            <option value="unresolved">unresolved</option>
                            <option value="unknown">unknown</option>
                            <option value="missing element(s)">missing element(s)</option>
                            <option value="conundrum(s)">conundrum(s)</option>
                        </optgroup>
                        }
                        {q2Icon1 === Across &&
                        <optgroup label="Across Disciplines">
                            <option value="interdisciplinary relationships">interdisciplinary relationships</option>
                            <option value="cross-curricular connections">cross-curricular connections</option>
                            <option value="connect">connect</option>
                            <option value="associate">associate</option>
                            <option value="integrate">integrate</option>
                            <option value="relationships">relationships</option>
                            <option value="cross-disciplinary connection(s)">cross-disciplinary connection(s)</option>
                            <option value="common element(s)">common element(s)</option>
                        </optgroup>
                        }
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleIconQ2Close1}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleIconQ2Close1}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

                    {/* Modal for Icon 2 Q2 */}
                    <Modal show={iconQ2Show2} onHide={handleIconQ2Close2}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Icon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={q2Icon2} onChange={(e) => setQ2Icon2(e.target.value)}>
                        <optgroup label="Depth & Complexity Icons">
                            <option value={Language}>Language of Discipline</option>
                            <option value={Details}>Details</option>
                            <option value={Patterns}>Patterns</option>
                            <option value={Rules}>Rules</option>
                            <option value={Trends}>Trends</option>
                            <option value={Unanswered}>Unanswered Questions</option>
                            <option value={Ethics}>Ethics</option>
                            <option value={BigIdea}>Big Idea</option>
                            <option value={OverTime}>Over Time</option>
                            <option value={Multiple}>Multiple Perspectives</option>
                            <option value={Across}>Across Disciplines</option>
                        </optgroup>
                        <optgroup label="Content Imperatives">
                            <option value={Origin}>Origin</option>
                            <option value={Parallel}>Parallel</option>
                            <option value={Paradox}>Paradox</option>
                            <option value={Convergence}>Convergence</option>
                            <option value={Contribution}>Contribution</option>
                        </optgroup>
                    </select>
                </Modal.Body>
                {/* Synonyms for Icon 2 Q2 */}
                <Modal.Body>
                    <select className='form-control' ref={textInput}>
                        <option value="" disabled selected>Select an Icon Synonym (optional)</option>
                        {q2Icon2 === Rules &&
                            <optgroup label="Rules">
                                <option value="structure">structure</option>
                                <option value="order">order</option>
                                <option value="reason(s)">reason(s)</option>
                                <option value="regulation(s)">regulation(s)</option>
                                <option value="principle(s)">principle(s)</option>
                                <option value="framework(s)">framework(s)</option>
                                <option value="law(s)">law(s)</option>
                                <option value="standard(s)">standard(s)</option>
                            </optgroup>
                        }
                        {q2Icon2 === Language &&
                        <optgroup label="Language of Discipline">
                            <option value="words">words</option>
                            <option value="vocabulary">vocabulary</option>
                            <option value="nomenclature">nomenclature</option>
                            <option value="lexicon">lexicon</option>
                            <option value="terms">terms</option>
                            <option value="vernacular">vernacular</option>
                            <option value="terminology">terminology</option>
                            <option value="jargon">jargon</option>
                        </optgroup>
                        }
                        {q2Icon2 === Details &&
                        <optgroup label="Details">
                            <option value="parts">parts</option>
                            <option value="factor(s)">factor(s)</option>
                            <option value="attribute(s)">attribute(s)</option>
                            <option value="characteristic(s)">characteristic(s)</option>
                            <option value="variable(s)">variable(s)</option>
                            <option value="clue(s)">clue(s)</option>
                            <option value="idea(s)">idea(s)</option>
                            <option value="specific(s)">specific(s)</option>
                        </optgroup>
                        }
                        {q2Icon2 === Patterns &&
                        <optgroup label="Patterns">
                            <option value="cycle(s)">cycle(s)</option>
                            <option value="sequence(s)">sequence(s)</option>
                            <option value="routine(s)">routine(s)</option>
                            <option value="reoccurring event(s)">reoccurring event(s)</option>
                            <option value="reoccurring idea(s)">reoccurring idea(s)</option>
                            <option value="repeating event(s)">repeating event(s)</option>
                            <option value="repeating idea(s)">repeating idea(s)</option>
                            <option value="pattern(s) of behavior">pattern(s) of behavior</option>
                        </optgroup>
                        }
                        {q2Icon2 === Ethics &&
                        <optgroup label="Ethics">
                            <option value="values">values</option>
                            <option value="morals">morals</option>
                            <option value="bias(es)">bias(es)</option>
                            <option value="debate(s)">debate(s)</option>
                            <option value="discrimination(s)">discrimination(s)</option>
                            <option value="controversies">controversies</option>
                            <option value="judging">judging</option>
                            <option value="dilemma(s)">dilemma(s)</option>
                        </optgroup>
                        }
                        {q2Icon2 === BigIdea &&
                        <optgroup label="Big Idea">
                            <option value="generalization(s)">generalization(s)</option>
                            <option value="principles">principles</option>
                            <option value="theories">theories</option>
                            <option value="law(s)">law(s)</option>
                            <option value="main idea(s)">main idea(s)</option>
                            <option value="summarization(s)">summarization(s)</option>
                            <option value="overarching statement(s)">overarching statement(s)</option>
                            <option value="general statement(s)">general statement(s)</option>
                        </optgroup>
                        }
                        {q2Icon2 === Multiple &&
                        <optgroup label="Multiple Perspectives">
                            <option value="point of view(s)">point of view(s)</option>
                            <option value="stance(s)">stance(s)</option>
                            <option value="outlook(s)">outlook(s)</option>
                            <option value="perspective(s)">perspective(s)</option>
                            <option value="different roles and knowledge(s)">different roles and knowledge(s)</option>
                            <option value="philosophy">philosophy</option>
                            <option value="view(s)">view(s)</option>
                            <option value="position(s)">position(s)</option>
                        </optgroup>
                        }
                        {q2Icon2 === OverTime &&
                        <optgroup label="Over Time">
                            <option value="past present & future">past, present, future</option>
                            <option value="correlation(s)">correlation(s)</option>
                            <option value="reflection(s)">reflection(s)</option>
                            <option value="connection(s)">connection(s)</option>
                            <option value="change(s) over time">change(s) over time</option>
                            <option value="prediction(s)">prediction(s)</option>
                            <option value="relationships within a time period">relationships within a time period</option>
                            <option value="time perspective(s)">time perspective(s)</option>
                        </optgroup>
                        }
                        {q2Icon2 === Trends &&
                        <optgroup label="Trends">
                            <option value="influence(s)">influence(s)</option>
                            <option value="force(s)">force(s)</option>
                            <option value="general direction(s)">general direction(s)</option>
                            <option value="impact(s)">impact(s)</option>
                            <option value="fad(s)">fad(s)</option>
                            <option value="tendency">tendency</option>
                            <option value="course(s) of action">course(s) of action</option>
                            <option value="ongoing factor(s)">ongoing factor(s)</option>
                        </optgroup>
                        }
                        {q2Icon2 === Unanswered &&
                        <optgroup label="Unanswered Questions">
                            <option value="discrepancies">discrepancies</option>
                            <option value="unclear">unclear</option>
                            <option value="incomplete">incomplete</option>
                            <option value="unexplained">unexplained</option>
                            <option value="unresolved">unresolved</option>
                            <option value="unknown">unknown</option>
                            <option value="missing element(s)">missing element(s)</option>
                            <option value="conundrum(s)">conundrum(s)</option>
                        </optgroup>
                        }
                        {q2Icon2 === Across &&
                        <optgroup label="Across Disciplines">
                            <option value="interdisciplinary relationships">interdisciplinary relationships</option>
                            <option value="cross-curricular connections">cross-curricular connections</option>
                            <option value="connect">connect</option>
                            <option value="associate">associate</option>
                            <option value="integrate">integrate</option>
                            <option value="relationships">relationships</option>
                            <option value="cross-disciplinary connection(s)">cross-disciplinary connection(s)</option>
                            <option value="common element(s)">common element(s)</option>
                        </optgroup>
                        }
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleIconQ2Close2}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleIconQ2Close2}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal #5 for manually setting Disciplinarian */}
            <Modal show={discShow} onHide={handleDiscClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Disciplinarian</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={disciplinarian} ref={textInput} onChange={OtherSelected}>
                        <option value='an anthropologist'>an anthropologist</option>
                        <option value='a philosopher'>a philosopher</option>
                        <option value='a political scientist'>a political scientist</option>
                        <option value='a sociologist'>a sociologist</option>
                        <option value='a historian'>a historian</option>
                        <option value='a poet'>a poet</option>
                        <option value='a journalist'>a journalist</option>
                        <option value='an editor'>an editor</option>
                        <option value='an author'>an author</option>
                        <option value='a linguist'>a linguist</option>
                        <option value='an economist'>an economist</option>
                        <option value='a mathematician'>a mathematician</option>
                        <option value='a computer scientist'>a computer scientist</option>
                        <option value='an astronomer'>an astronomer</option>
                        <option value='an archaeologist'>an archaeologist</option>
                        <option value='a geographer'>a geographer</option>
                        <option value='a geologist'>a geologist</option>
                        <option value='a marine biologist'>a marine biologist</option>
                        <option value='a paleontologist'>a paleontologist</option>
                        <option value='a physicist'>a physicist</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setDisciplinarian(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleDiscClose}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleDiscClose}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal #6 for manually setting Generalization */}
            <Modal show={generalShow} onHide={handleGeneralClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Generalization</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* loop through all generalizations to show the list for user to set */}
                    <select className='form-control' defaultValue={generalization} ref={textInput} onChange={Other2Selected}>
                        {generalizations.map((item, i) => {return <option key={i}>{item}</option>})}
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other2 ?
                    <input type="text" onChange={(e) => setGeneralization(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleGeneralClose}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleGeneralClose}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal #11 for Privacy Policy */}
            <Modal show={showPolicy} onHide={() => setShowPolicy(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Privacy Policy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='privacy'>
                        <p>
                            J Taylor Education, Inc has been producing educational products and delivering workshops focused on best practices for using The Depth & Complexity 
                            Framework for nearly 15 years. We have always strived and committed ourselves to creating quality, practical resources that benefit teachers, and 
                            most importantly, students. In addition, since the inception of our J Taylor Education website in 2006, we have prided ourselves on sharing with 
                            our customers how we collect and disclose their information. Recently we began creating online services and applications/softwares for our customers. 
                            This Privacy Policy below describes our practices related to these online products. 
                        </p>
                        <p>
                            J Taylor Education, Inc collects limited information from its users that register for an online product. We use the collected information to improve and 
                            provide more information related to our products. We never sell information to third parties. 
                        </p>
                        <h5>The Information We Collect</h5>
                        <p>In providing access to our online Products, J Taylor Education, Inc. collects:</p>
                        <ul>
                            <li>
                                Information submitted by a school educator about themselves, including first and last name, email address, username and password, and district/school 
                                affiliation.
                            </li>
                            <li>
                                Student personal information is not collected. Students instead log into and access software with one common username and password that is assigned by a 
                                school educator.
                            </li>
                            <li>
                                Information about how and where (IP address), when, and for how long a user accesses and uses our online products. Length of time spent using online products 
                                is also collected. J Taylor Education, Inc. may also use cookies and other technologies to collect information. Information about the user’s device type, OS, 
                                IP Address, and browser used may also be collected. We collect this information automatically when a user accesses our products so we can understand usage, 
                                trends, and provide support.
                            </li>
                            <li>
                                Information collected through cookies and other identifiers (such as IP Address) which is stored directly on a user’s computer. We use cookies and other 
                                identifiers to authenticate users in order to ensure that only authorized individuals and groups are permitted access to our products. We do not use cookies 
                                or other identifiers to track use of third party services by our users. 
                            </li>
                        </ul>
                        <h5>
                            How We Use the Information We Collect
                        </h5>
                        <p>
                            In addition to the uses described above, and subject to any restrictions imposed by applicable law or our agreement with our customer, we may use the information 
                            we collect:
                        </p>
                        <ul>
                            <li>
                                To diagnose problems, troubleshoot issues, and provide maintenance and support.
                            </li>
                            <li>
                                To personalize user experience, such as displaying the user name on the dashboard.
                            </li>
                            <li>
                                To provide our school and school district customers, as well as their administrators and teachers with reports indicating amount of time their district 
                                community is using the software.
                            </li>
                            <li>
                                To communicate with administrators, teachers, and our school district customer communities if and parents or guardians, subject to any communications 
                                preferences they express.
                            </li>
                            <li>
                                To ensure that our Products run properly and are presented optimally on all devices and operating systems being used, or for Product improvement. 
                            </li>
                            <li>
                                J Taylor Education, Inc. is not able to and does not store history of how educators and students use the software during their logged-in sessions. 
                                Session data, with the exception of duration of session and device IP address, is not saved and cannot be accessed.
                            </li>
                        </ul>
                        <p>
                            We may use and disclose non-personal information collected from the users of our Products for any reason, subject to any restrictions imposed by applicable law or 
                            our agreement with our customer. We do not, however, disclose any personal information about the users of our Products to any third party, except:
                        </p>
                        <ul>
                            <li>
                                As directed by our school district customer to which the information relates.
                            </li>
                            <li>
                                To our third party service providers, who provide services such as website hosting and customer service, to permit them to provide those services to us.
                            </li>
                            <li>
                                To the extent we believe necessary or appropriate to comply with legal process or to respond to requests from government authorities.
                            </li>
                            <li>
                                To the extent we believe necessary or appropriate to protect our rights, safety, or property and/or that of our affiliates, our customers, our users or others.
                            </li>
                            <li>
                                In the event of any reorganization, merger, sale, joint venture, assignment, transfer or other disposition of all or any portion of our business, assets or 
                                stock (including in connection with any bankruptcy or similar proceedings), in which case the transferred information will remain subject to the terms of this 
                                Privacy Policy.
                            </li>
                        </ul>
                        <h5>Third Party Services</h5>
                        <p>
                            This Privacy Policy does not address, and we are not responsible for, the privacy, information, or other practices of third parties. Additionally, we are not responsible 
                            for the privacy, information or practices of organizations such as Google, Microsoft, Apple, or any other device manufacturer, app developer, or provider of an app, 
                            social media platform, operating system, or wireless service. 
                        </p>
                        <p>
                            J Taylor Education, Inc. uses Auth0 as its authentication and authorization software. Auth0 is a global leader in the identity management software field. You can read more about 
                            them at https://auth0.com and read their privacy policy at https://auth0.com/privacy/.
                        </p>
                        <h5>Security</h5>
                        <p>
                            We seek to use reasonable technical, organizational, and administrative measures to protect personal information within our organization from unauthorized access, use, disclosure, 
                            loss, or modification.
                        </p>
                        <h5>Personal Information Retention</h5>
                        <p>
                            We will retain personal information collected in connection with the Products for the period necessary to fulfill the purposes outlined in this Privacy Policy and in our agreement with 
                            our school district or individual customers. 
                        </p>
                        <h5>Changes and Updates to this Privacy Policy</h5>
                        <p>
                            We may change or update this Privacy Policy. When the policy is updated, a date indicating when the update occurred will appear on the policy. Any changes will become effective 
                            when we post the revised Privacy Policy or, in the case of any material change, provide the revised Privacy Policy to our school district customer, which agrees to the Privacy 
                            Policy, and any revisions to it, on behalf of its administrator, teacher, parent or guardian, and student end users. 
                        </p>
                        <h5>Contact Us</h5>
                        <p>
                            Questions or concerns regarding data collection or privacy practices for our products or sites can be directed to our customer service email: info@jtayloreducation.com.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setShowPolicy(!setShowPolicy)}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>
            
            {/* Modal #14 for Full Customization */}
            <Modal show={customShow} onClose={handleCustomClose}>
                <Modal.Header>
                    <Modal.Title className='ModalTitles'>Customize All Outcomes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        {/* SELECT Topic(s) */}
                        <input type="text" className="form-control" placeholder="Enter Topic" ref={topicRef} required/>
                        <input type="text" className="form-control mt-2" placeholder="Enter 2nd Topic (optional)" ref={subTopicRef}/>

                        {/* SELECT Icon 1 */}
                        <select className='form-control mt-2' ref={icon1Ref} required>
                            <optgroup label="Depth & Complexity Icons">
                                <option value="" selected disabled>Choose 1st Icon</option>
                                <option value={Language}>Language of Discipline</option>
                                <option value={Details}>Details</option>
                                <option value={Patterns}>Patterns</option>
                                <option value={Rules}>Rules</option>
                                <option value={Trends}>Trends</option>
                                <option value={Unanswered}>Unanswered Questions</option>
                                <option value={Ethics}>Ethics</option>
                                <option value={BigIdea}>Big Idea</option>
                                <option value={OverTime}>Over Time</option>
                                <option value={Multiple}>Multiple Perspectives</option>
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

                        {/* SELECT Icon 2 */}
                        <select className='form-control mt-2' ref={icon2Ref} required >
                            <optgroup label="Depth & Complexity Icons">
                                <option value="" selected disabled>Choose 2nd Icon</option>
                                <option value={Language}>Language of Discipline</option>
                                <option value={Details}>Details</option>
                                <option value={Patterns}>Patterns</option>
                                <option value={Rules}>Rules</option>
                                <option value={Trends}>Trends</option>
                                <option value={Unanswered}>Unanswered Questions</option>
                                <option value={Ethics}>Ethics</option>
                                <option value={BigIdea}>Big Idea</option>
                                <option value={OverTime}>Over Time</option>
                                <option value={Multiple}>Multiple Perspectives</option>
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

                        {/* SELECT Disciplinarian */}
                        <select className='form-control mt-2' ref={!other ? discRef : null } required onChange={OtherSelected}>
                            <option value="" selected disabled>Choose Your Disciplinarian</option>
                            <option value='an anthropologist'>an anthropologist</option>
                            <option value='a philosopher'>a philosopher</option>
                            <option value='a political scientist'>a political scientist</option>
                            <option value='a sociologist'>a sociologist</option>
                            <option value='a historian'>a historian</option>
                            <option value='a poet'>a poet</option>
                            <option value='a journalist'>a journalist</option>
                            <option value='an editor'>an editor</option>
                            <option value='an author'>an author</option>
                            <option value='a linguist'>a linguist</option>
                            <option value='an economist'>an economist</option>
                            <option value='a mathematician'>a mathematician</option>
                            <option value='a computer scientist'>a computer scientist</option>
                            <option value='an astronomer'>an astronomer</option>
                            <option value='an archaeologist'>an archaeologist</option>
                            <option value='a geographer'>a geographer</option>
                            <option value='a geologist'>a geologist</option>
                            <option value='a marine biologist'>a marine biologist</option>
                            <option value='a paleontologist'>a paleontologist</option>
                            <option value='a physicist'>a physicist</option>
                            <option value="other">Add your own</option>
                        </select>
                        
                        {other ?
                            <input type="text" ref={discRef} className='form-control mt-2' placeholder='Type Disciplinarian Here'/>
                            :<input type="hidden" disabled='true'/>
                        }
                        
                        {/* SELECT Generalization */}
                        <select className='form-control mt-2' ref={generalRef} required onChange={Other2Selected}>
                            <option value="" selected disabled>Choose Your Generalization</option>
                            {generalizations.map((item, i) => {return <option key={i}>{item}</option>})}
                        </select>
                        
                        {other2 ?
                            <input type="text" ref={generalRef} className='form-control mt-2' placeholder='Type Generalization Here'/>
                            :<input type="hidden" disabled='true'/>
                        }
                        
                        {/* Choose whether you want sentence structure randomized */}
                        <select className='form-control mt-2' ref={layoutRef} required>
                            <option value={999} selected disabled> Select Layout </option>
                            <optgroup label="Single Topic">
                                <option value={0}> Why are [icon 1] found in [Topic] important from the perspective of [Disciplinarian]? </option>
                                <option value={1}> How can you summarize the [Icon 1] related to [Topic] using [Icon 2]? </option>
                                <option value={2}> Which evidence would a [Disciplinarian] use to substantiate [Generalization] when [Topic]? </option>
                                <option value={3}> What would be the positive and negative results if [Disciplinarian] changed a [Icon 1] in [Topic]? </option>
                                <option value={4}> What questions related to [Icon 1] might arise when a [Disciplinarian] investigates [Icon 2] of [Topic]? </option>
                                <option value={5}> What evidence can you provide to prove the importance of [Icon 1] found in [Icon 2] regarding [Topic]? </option> 
                                <option value={6}> How might a [Disciplinarian] view the impact of the [Icon 1] regarding [Topic] [Icon 2]? </option>
                                <option value={7}> What [Icon 1] regarding/in [Topic] is necessary for us to be able to conclude [Generalization]? </option>
                                <option value={8}> How can the idea that [Generalization] be best explained from the viewpoint of [Disciplinarian] using [Icon 1] and [Icon 2] related to [Topic]? </option>
                            </optgroup>
                            <optgroup label="Two Topics">
                                <option value={9}> What [Icon 1] distinguish [Topic] from [Topic 2] from the perspective of [Disciplinarian]? </option>
                                <option value={10}> What are the similarities and differences of [Icon 1] found in [Topic] and [Topic 2] from the perspective of [Disciplinarian]? </option>
                                <option value={11}> What hypothesis/new idea might be developed to explain [Topic] if [Disciplinarian] investigated [Topic 2] by looking at [Icon 1] of [Icon 2]? </option>
                            </optgroup>
                        </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" variant="primary" onMouseDown={() => setSaveCustom(true)} onMouseUp={handleCustomClose}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleCustomClose}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Cancel
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal #15 for EditWord 1 */}
            <Modal show={editShow1} onHide={handleEdit1Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Icon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord1} onChange={OtherSelected}>
                        <option value="related to">related to</option>
                        <option value="of">of</option>
                        <option value="in">in</option>
                        <option value="when/in">when/in</option>
                        <option value="of/found in">of/found in</option>
                        <option value="when">when</option>
                        <option value="on/regarding">on/regarding</option>
                        <option value="within">within</option>
                        <option value="within the">within the</option>
                        <option value=" ">none/space only</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord1(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit1Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit1Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal #16 for EditWord 2 */}
            <Modal show={editShow2} onHide={handleEdit2Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord2} onChange={OtherSelected}>
                        <option value="related to">related to</option>
                        <option value="found in">found in</option>
                        <option value="of">of</option>
                        <option value="when">when</option>
                        <option value="in">in</option>
                        <option value="regarding">regarding</option>
                        <option value="on">on</option>
                        <option value="within">within</option>
                        <option value="within the">within the</option>
                        <option value=" ">none/space only</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord2(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit2Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit2Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal #17 for EditWord 3 */}
            <Modal show={editShow3} onHide={handleEdit3Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord3} onChange={OtherSelected}>
                        <option value="related to">related to</option>
                        <option value="when">when</option>
                        <option value="found in">found in</option>
                        <option value="in">in</option>
                        <option value="of">of</option>
                        <option value="on">on</option>
                        <option value="regarding">regarding</option>
                        <option value="within">within</option>
                        <option value="within the">within the</option>
                        <option value=" ">none/space only</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord3(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit3Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit3Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal #18 for EditWord 4 */}
            <Modal show={editShow4} onHide={handleEdit4Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord4} onChange={OtherSelected}>
                        <option value="related to">related to</option>
                        <option value="when">when</option>
                        <option value="in">in</option>
                        <option value="found in">found in</option>
                        <option value="on">on</option>
                        <option value="regarding">regarding</option>
                        <option value="of">of</option>
                        <option value="within">within</option>
                        <option value="within the">within the</option>
                        <option value=" ">none/space only</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord4(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit4Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit4Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal #19 for EditWord 5 */}
            <Modal show={editShow5} onHide={handleEdit5Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord5} onChange={OtherSelected}>
                        <option value="regarding">regarding</option>
                        <option value="on">on</option>
                        <option value="when">when</option>
                        <option value="found in">found in</option>
                        <option value="in">in</option>
                        <option value="of">of</option>
                        <option value="associated with">associated with</option>
                        <option value=" ">none/space only</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord5(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit5Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit5Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

        {/* Modal #22 for EditWord 6 */}
            <Modal show={editShow6} onHide={handleEdit6Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord6} onChange={OtherSelected}>
                        <option value="on">on</option>
                        <option value="regarding">regarding</option>
                        <option value="when/in">when/in</option>
                        <option value="when">when</option>
                        <option value="found in">found in</option>
                        <option value="in">in</option>
                        <option value="of">of</option>
                        <option value="associated with">associated with</option>
                        <option value=" ">none/space only</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord6(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit6Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit6Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal # for EditWord 7 */}
            <Modal show={editShow7} onHide={handleEdit7Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord7} onChange={OtherSelected}>
                        <option value="is">is</option>
                        <option value="are">are</option>
                        <option value="are the">are the</option>
                        <option value=" ">none/space only</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord7(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit7Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit7Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal # for EditWord 8 */}
            <Modal show={editShow8} onHide={handleEdit8Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord8} onChange={OtherSelected}>
                        <option value="regarding">regarding</option>
                        <option value="of">of</option>
                        <option value=" ">none/space only</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord8(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit8Close}>
                    <i class="bi-save" ></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit8Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal # for EditWord 9 */}
            <Modal show={editShow9} onHide={handleEdit9Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord9} onChange={OtherSelected}>
                        <option value="is">is</option>
                        <option value="are">are</option>
                        <option value=" ">none/space only</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord9(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit9Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit9Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal # for EditWord 10 */}
            <Modal show={editShow10} onHide={handleEdit10Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord10} onChange={OtherSelected}>
                        <option value="related">related</option>
                        <option value="related to">related to</option>
                        <option value="about">about</option>
                        <option value=" ">none/space only</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord10(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit10Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit10Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal # for EditWord 11 */}
            <Modal show={editShow11} onHide={handleEdit11Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord11} onChange={OtherSelected}>
                        <option value="What">What</option>
                        <option value="Which">Which</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord11(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit11Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit11Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal # for EditWord 12 */}
            <Modal show={editShow12} onHide={handleEdit12Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord12} onChange={OtherSelected}>
                        <option value="of">of</option>
                        <option value="in">in</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord12(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit12Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit12Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal # for EditWord 13 */}
            <Modal show={editShow13} onHide={handleEdit13Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord13} onChange={OtherSelected}>
                        <option value="using">using</option>
                        <option value="from">from</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord13(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit13Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit13Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal # for EditWord 14 */}
            <Modal show={editShow14} onHide={handleEdit14Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord14} onChange={OtherSelected}>
                        <option value="and">and</option>
                        <option value="">none/space only</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord14(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit14Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit14Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal # for EditWord 15 */}
            <Modal show={editShow15} onHide={handleEdit15Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord15} onChange={OtherSelected}>
                        <option value="the">the</option>
                        <option value="">none/space only</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord15(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit15Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit15Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

        {/* Modal # for EditWord 16 */}
            <Modal show={editShow16} onHide={handleEdit16Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord16} onChange={OtherSelected}>
                        <option value="a">a</option>
                        <option value="">none/space only</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord16(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit16Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit16Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

        {/* Modal # for EditWord 17 */}
            <Modal show={editShow17} onHide={handleEdit17Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord17} onChange={OtherSelected}>
                        <option value="investigates">investigates</option>
                        <option value="investigates the">investigates the</option>
                        <option value="">none/space only</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord17(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit17Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit17Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

        {/* Modal # for EditWord 18 */}
            <Modal show={editShow18} onHide={handleEdit18Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord18} onChange={OtherSelected}>
                        <option value="of">of</option>
                        <option value="in">in</option>
                        <option value="">none/space only</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord18(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit18Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit18Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

        {/* Modal # for EditWord 19 */}
            <Modal show={editShow19} onHide={handleEdit19Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord19} onChange={OtherSelected}>
                        <option value="of the">of the</option>
                        <option value="of">of</option>
                        <option value="">none/space only</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord19(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit19Close}>
                    <i class="bi-save" ></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit19Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

        {/* Modal # for EditWord 20 */}
        <Modal show={editShow20} onHide={handleEdit20Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord20} onChange={OtherSelected}>
                        <option value="of">of</option>
                        <option value="of the">of the</option>
                        <option value="">none/space only</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord20(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit20Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit20Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal # for EditWord 21 */}
            <Modal show={editShow21} onHide={handleEdit21Close}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' ref={textInput} defaultValue={editWord21} onChange={OtherSelected}>
                        <option value="at">at</option>
                        <option value="at the">at the</option>
                        <option value="">none/space only</option>
                        <option value="other">Add your own</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                {other ?
                    <input type="text" onChange={(e) => setEditWord21(e.target.value)} className='form-control'/>
                    :<input type="text" disabled='true' className='form-control'/>
                }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit21Close}>
                    <i class="bi-save"></i> Save
                    </Button>
                    <Button variant="danger" onClick={handleEdit21Close}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal #20 for help/example 1 */}
            <Modal show={showHelp1} onHide={() => {setShowHelp1(false)}} size="lg">
                <Modal.Header>
                    <Modal.Title className='ModalTitles'>Question Examples</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {question1 === 0 &&
                            <>
                                <p>Why are <img className='iconEx' height='40px' src={Rules} alt="rules" /> found in DNA important from the perspective of a biologist?</p>
                                <hr/>
                                <p>Why are <img className='iconEx' height='40px' src={Patterns} alt="patterns" /> found in multiplication important from the perspective of a teacher?</p>
                                <hr/>
                                <p>Why are <img className='iconEx' height='40px' src={Ethics} alt="ethics" /> important from the perspective of a lawyer?</p>
                            </>
                        }
                        
                        {question1 === 1 &&
                            <>
                                <p>How can you summarize the <img className='iconEx' height='40px' src={Patterns} alt="patterns" /> related to western expansion of the US from <img className='iconEx' height='40px' src={Multiple} alt="multiple perspectives" />?</p>
                                <hr/>
                                <p>How can you summarize the <img className='iconEx' height='40px' src={Rules} alt="rules" /> related to multiplication using <img className='iconEx' height='40px' src={Language} alt="language of the discipline" />?</p>
                                <hr/>
                                <p>How can you summarize the theme related to <span style={{textDecoration: 'underline'}}>Where the Red Fern Grows</span> using <img className='iconEx' height='40px' src={Details} alt="details" />?</p>
                            </>
                        }
                        
                        {question1 === 2 &&
                            <>
                                <p>Which evidence would a financial analyst use to substantiate that power is the ability to influence when using linear equations to determine the total worth of a client’s stock?</p>
                                <hr/>
                                <p>Which evidence would an author use to substantiate that relationships are purposeful in novels?</p>
                                <hr/>
                                <p>Which evidence would a scientist use to substantiate that systems are made up of other systems in the solar system?</p>
                            </>
                        }
                        
                        {question1 === 3 &&
                            <>
                                <p>What would be the positive and negative results if a poet changed <img className='iconEx' height='40px' src={Language} alt="language" /> in Sonnet 18?</p>
                                <hr/>
                                <p>What would be the positive and negative results if a biologist changed <img className='iconEx' height='40px' src={Rules} alt="rules" /> of animal behavior in the wild?</p>
                                <hr/>
                                <p>What would be the positive and negative results if a mathematician changed <img className='iconEx' height='40px' src={Details} alt="details" /> in the graph? </p>
                            </>
                        }
                        
                        {question1 === 4 &&
                            <>
                                <p>What questions related to hidden rules of order <img className='iconEx' height='40px' src={Rules} alt="rules" /> might arise when a biologist investigates sequences <img className='iconEx' height='40px' src={Patterns} alt="patterns" /> in DNA?</p>
                                <hr/>
                                <p>What questions related to theme <img className='iconEx' height='40px' src={BigIdea} alt="big idea" /> might arise when an author investigates attributes <img className='iconEx' height='40px' src={Details} alt="details" /> of characters?</p>
                                <hr/>
                                <p>What questions related to repeating events <img className='iconEx' height='40px' src={Patterns} alt="patterns" /> might arise when a historian investigates hidden rules of order <img className='iconEx' height='40px' src={Rules} alt="rules" /> related to the Civil War?</p>
                            </>
                        }
                        
                        {question1 === 5 &&
                            <>
                                <p>What evidence can you provide to prove the importance of the morals <img className='iconEx' height='40px' src={Ethics} alt="ethics" /> found in the theme <img className='iconEx' height='40px' src={BigIdea} alt="big idea" /> of <span style={{textDecoration: 'underline'}}>Where the Red Fern Grows</span>?</p>
                                <hr/>
                                <p>What evidence can you provide to prove the importance of the factors <img className='iconEx' height='40px' src={Details} alt="details" /> found in the formula <img className='iconEx' height='40px' src={Patterns} alt="patterns" /> of the equations?</p>
                                <hr/>
                                <p>What evidence can you provide to prove the importance of the evolution <img className='iconEx' height='40px' src={OverTime} alt="over time" /> of viewpoints <img className='iconEx' height='40px' src={Multiple} alt="multiple" /> regarding slavery?</p>
                            </>
                        }
                        
                        {question1 === 6 &&
                            <>
                                <p>How might a botanist view the impact of the course of action <img className='iconEx' height='40px' src={Trends} alt="trends" /> regarding the use of fertilizer during the 20th century <img className='iconEx' height='40px' src={OverTime} alt="over time" />?</p>
                                <hr/>
                                <p>How might an artist view the impact of the features <img className='iconEx' height='40px' src={Details} alt="details" /> regarding modernism in art during the 19th and 20th centuries in institutions, publications, and art galleries <img className='iconEx' height='40px' src={Across} alt="across disciplines" />?</p>
                                <hr/>
                                <p>How might a sociologist view the impact of patterns of word choice <img className='iconEx' height='40px' src={Patterns} alt="patterns" /> in <span style={{fontStyle: 'italic'}}>The Hill We Climb</span> from different cultures <img className='iconEx' height='40px' src={Multiple} alt="multiple perspectives" />?</p>
                            </>
                        }
                        
                        {question1 === 7 &&
                            <>
                                <p>What missing elements <img className='iconEx' height='40px' src={Unanswered} alt="unanswered questions" /> regarding black holes is necessary for us to be able to conclude that systems are made up of other systems?</p>
                                <hr/>
                                <p>What reoccurring details <img className='iconEx' height='40px' src={Patterns} alt="patterns" /> in animal behavior is necessary for us to be able to conclude that order is a form of communication?</p>
                                <hr/>
                                <p>What reasons, motivation, or events <img className='iconEx' height='40px' src={Rules} alt="rules" /> in current events are necessary for us to be able to conclude that relationships change over time?</p>
                            </>
                        }
                        
                        {question1 === 8 &&
                            <>
                                <p>How can the idea that change is necessary for growth be explained from the viewpoint of a sociologist using laws <img className='iconEx' height='40px' src={Rules} alt="rules" /> and cycles of events <img className='iconEx' height='40px' src={Patterns} alt="patterns" /> related to women’s suffrage in the 15th?</p>
                                <hr/>
                                <p>How can the idea that systems have parts that work together be explained from the viewpoint of an oceanographer using interrelated parts <img className='iconEx' height='40px' src={Details} alt="details" /> and terminology <img className='iconEx' height='40px' src={Language} alt="language of discipline" /> related to marine ecosystems?</p>
                                <hr/>
                                <p>How can the idea that patterns allow for predictions be explained from the viewpoint of an author using character traits <img className='iconEx' height='40px' src={Patterns} alt="patterns" /> and changes in events and character behavior <img className='iconEx' height='40px' src={OverTime} alt="over time" /> related to <span style={{textDecoration: 'underline'}}>A Wrinkle in Time</span>?</p>
                            </>
                        }

                        {question1 === 9 &&
                            <>
                                <p>Which <img className='iconEx' height='40px' src={Patterns} alt="patterns" /> distinguish polar bears from seals from the perspective of a zoologist?</p>
                                <hr/>
                                <p>What <img className='iconEx' height='40px' src={Rules} alt="rules" />  distinguish linear equations from nonlinear equations from the perspective of a mathematician?</p>
                                <hr/>
                                <p>Which <img className='iconEx' height='40px' src={Patterns} alt="patterns" />  distinguish haiku from sonnets from the perspective of a poet?</p>
                            </>
                        }

                        {question1 === 10 &&
                            <>
                                <p>What are the similarities and differences of sequences <img className='iconEx' height='40px' src={Patterns} alt="patterns" /> found in linear and nonlinear equations from the perspective of a mathematician?</p>
                                <hr/>
                                <p>What are the similarities and differences of the attributes <img className='iconEx' height='40px' src={Details} alt="details" /> of frogs and toad from the perspective of a scientist?</p>
                                <hr/>
                                <p>What are the similarities and differences in the <img className='iconEx' height='40px' src={Patterns} alt="patterns" /> of behavior of Wilber and Charlotte from the perspective of a psychologist?</p>
                            </>
                        }

                        {question1 === 11 &&
                        <>
                            <p>What hypothesis might be developed to explain dark energy if an astronomer investigated dark matter by looking at the principles <img className='iconEx' height='40px' src={Rules} alt="rules" /> of its attributes <img className='iconEx' height='40px' src={Details} alt="details" />?</p>
                            <hr/>
                            <p>What hypothesis might be developed to explain racism if a sociologist investigated social behavior by looking at the differing opinions <img className='iconEx' height='40px' src={Ethics} alt="ethics" /> of those who have been discriminated against and those who have perpetuated racism <img className='iconEx' height='40px' src={Multiple} alt="multiple perspectives" />? </p>
                            <hr/>
                            <p>What new idea might be developed to explain the theme of Moby Dick if an author investigated the shifts in narrative voice and literary genre by looking at the figurative language <img className='iconEx' height='40px' src={Language} alt="language of discipline" /> in the different types of genre <img className='iconEx' height='40px' src={Details} alt="details" />? </p>
                        </>
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => {setShowHelp1(false)}}>
                    <i class="bi-x-circle" aria-hidden="true"></i> Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
};

export default DCQuestioning;