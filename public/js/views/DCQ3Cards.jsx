import React, { useState } from 'react';
// components //
import Dice from '../components/Q3Cards/Dice';
import Message from '../components/Q3Cards/Message';
import Q3Modal from '../components/Q3Cards/Q3Modal';
// import Contact from '../components/Q3Cards/Contact';
import { Animated } from "react-animated-css";
import DoubleButton from '../components/Q3Cards/DoubleButton';

import Across from '../pics/Q3Cards/icons/across.png';
import BigIdea from '../pics/Q3Cards/icons/bigidea.png';
import Details from '../pics/Q3Cards/icons/details.png';
import Ethics from '../pics/Q3Cards/icons/ethics.png';
import Language from '../pics/Q3Cards/icons/language.png';
import Multiple from '../pics/Q3Cards/icons/multiple.png';
import OverTime from '../pics/Q3Cards/icons/overtime.png';
import Patterns from '../pics/Q3Cards/icons/patterns.png';
import Rules from '../pics/Q3Cards/icons/rules.png';
import Trends from '../pics/Q3Cards/icons/trends.png';
import Unanswered from '../pics/Q3Cards/icons/unanswered.png';

// Icon cards //
import AD1 from '../pics/Q3Cards/cards/AD1.jpg';import AD2 from '../pics/Q3Cards/cards/AD2.jpg';import AD3 from '../pics/Q3Cards/cards/AD3.jpg';import AD4 from '../pics/Q3Cards/cards/AD4.jpg';import AD6 from '../pics/Q3Cards/cards/AD6.jpg';import AD7 from '../pics/Q3Cards/cards/AD7.jpg';import AD8 from '../pics/Q3Cards/cards/AD8.jpg';import AD9 from '../pics/Q3Cards/cards/AD9.jpg';import AD10 from '../pics/Q3Cards/cards/AD10.jpg';import AD11 from '../pics/Q3Cards/cards/AD11.jpg';
import BI1 from '../pics/Q3Cards/cards/BI1.jpg';import BI2 from '../pics/Q3Cards/cards/BI2.jpg';import BI3 from '../pics/Q3Cards/cards/BI3.jpg';import BI4 from '../pics/Q3Cards/cards/BI4.jpg';import BI5 from '../pics/Q3Cards/cards/BI5.jpg';import BI6 from '../pics/Q3Cards/cards/BI6.jpg';import BI7 from '../pics/Q3Cards/cards/BI7.jpg';import BI8 from '../pics/Q3Cards/cards/BI8.jpg';import BI9 from '../pics/Q3Cards/cards/BI9.jpg';import BI10 from '../pics/Q3Cards/cards/BI10.jpg';
import D1 from '../pics/Q3Cards/cards/D1.jpg';import D2 from '../pics/Q3Cards/cards/D2.jpg';import D3 from '../pics/Q3Cards/cards/D3.jpg';import D4 from '../pics/Q3Cards/cards/D4.jpg';import D5 from '../pics/Q3Cards/cards/D5.jpg';import D6 from '../pics/Q3Cards/cards/D6.jpg';import D7 from '../pics/Q3Cards/cards/D7.jpg';import D8 from '../pics/Q3Cards/cards/D8.jpg';import D9 from '../pics/Q3Cards/cards/D9.jpg';import D10 from '../pics/Q3Cards/cards/D10.jpg';
import E1 from '../pics/Q3Cards/cards/E1.jpg';import E2 from '../pics/Q3Cards/cards/E2.jpg';import E3 from '../pics/Q3Cards/cards/E3.jpg';import E4 from '../pics/Q3Cards/cards/E4.jpg';import E5 from '../pics/Q3Cards/cards/E5.jpg';import E6 from '../pics/Q3Cards/cards/E6.jpg';import E7 from '../pics/Q3Cards/cards/E7.jpg';import E8 from '../pics/Q3Cards/cards/E8.jpg';import E9 from '../pics/Q3Cards/cards/E9.jpg';import E10 from '../pics/Q3Cards/cards/E10.jpg';
import LOD1 from '../pics/Q3Cards/cards/LOD1.jpg';import LOD2 from '../pics/Q3Cards/cards/LOD2.jpg';import LOD3 from '../pics/Q3Cards/cards/LOD3.jpg';import LOD4 from '../pics/Q3Cards/cards/LOD4.jpg';import LOD5 from '../pics/Q3Cards/cards/LOD5.jpg';import LOD6 from '../pics/Q3Cards/cards/LOD6.jpg';import LOD7 from '../pics/Q3Cards/cards/LOD7.jpg';import LOD8 from '../pics/Q3Cards/cards/LOD8.jpg';import LOD9 from '../pics/Q3Cards/cards/LOD9.jpg';import LOD10 from '../pics/Q3Cards/cards/LOD10.jpg';
import MP1 from '../pics/Q3Cards/cards/MP1.jpg';import MP2 from '../pics/Q3Cards/cards/MP2.jpg';import MP3 from '../pics/Q3Cards/cards/MP3.jpg';import MP4 from '../pics/Q3Cards/cards/MP4.jpg';import MP5 from '../pics/Q3Cards/cards/MP5.jpg';import MP6 from '../pics/Q3Cards/cards/MP6.jpg';import MP7 from '../pics/Q3Cards/cards/MP7.jpg';import MP8 from '../pics/Q3Cards/cards/MP8.jpg';import MP9 from '../pics/Q3Cards/cards/MP9.jpg';
import OT1 from '../pics/Q3Cards/cards/OT1.jpg';import OT2 from '../pics/Q3Cards/cards/OT2.jpg';import OT3 from '../pics/Q3Cards/cards/OT3.jpg';import OT4 from '../pics/Q3Cards/cards/OT4.jpg';import OT5 from '../pics/Q3Cards/cards/OT5.jpg';import OT6 from '../pics/Q3Cards/cards/OT6.jpg';import OT7 from '../pics/Q3Cards/cards/OT7.jpg';import OT8 from '../pics/Q3Cards/cards/OT8.jpg';import OT9 from '../pics/Q3Cards/cards/OT9.jpg';import OT10 from '../pics/Q3Cards/cards/OT10.jpg';
import P1 from '../pics/Q3Cards/cards/P1.jpg';import P2 from '../pics/Q3Cards/cards/P2.jpg';import P3 from '../pics/Q3Cards/cards/P3.jpg';import P4 from '../pics/Q3Cards/cards/P4.jpg';import P5 from '../pics/Q3Cards/cards/P5.jpg';import P6 from '../pics/Q3Cards/cards/P6.jpg';import P7 from '../pics/Q3Cards/cards/P7.jpg';import P8 from '../pics/Q3Cards/cards/P8.jpg';import P9 from '../pics/Q3Cards/cards/P9.jpg';import P10 from '../pics/Q3Cards/cards/P10.jpg';
import R1 from '../pics/Q3Cards/cards/R1.jpg';import R2 from '../pics/Q3Cards/cards/R2.jpg';import R3 from '../pics/Q3Cards/cards/R3.jpg';import R4 from '../pics/Q3Cards/cards/R4.jpg';import R5 from '../pics/Q3Cards/cards/R5.jpg';import R6 from '../pics/Q3Cards/cards/R6.jpg';import R7 from '../pics/Q3Cards/cards/R7.jpg';import R8 from '../pics/Q3Cards/cards/R8.jpg';import R9 from '../pics/Q3Cards/cards/R9.jpg';import R10 from '../pics/Q3Cards/cards/R10.jpg';
import T1 from '../pics/Q3Cards/cards/T1.jpg';import T2 from '../pics/Q3Cards/cards/T2.jpg';import T3 from '../pics/Q3Cards/cards/T3.jpg';import T4 from '../pics/Q3Cards/cards/T4.jpg';import T5 from '../pics/Q3Cards/cards/T5.jpg';import T6 from '../pics/Q3Cards/cards/T6.jpg';import T7 from '../pics/Q3Cards/cards/T7.jpg';import T8 from '../pics/Q3Cards/cards/T8.jpg';import T9 from '../pics/Q3Cards/cards/T9.jpg';import T10 from '../pics/Q3Cards/cards/T10.jpg';
import U1 from '../pics/Q3Cards/cards/U1.jpg';import U2 from '../pics/Q3Cards/cards/U2.jpg';import U3 from '../pics/Q3Cards/cards/U3.jpg';import U4 from '../pics/Q3Cards/cards/U4.jpg';import U5 from '../pics/Q3Cards/cards/U5.jpg';import U6 from '../pics/Q3Cards/cards/U6.jpg';import U7 from '../pics/Q3Cards/cards/U7.jpg';import U8 from '../pics/Q3Cards/cards/U8.jpg';import U9 from '../pics/Q3Cards/cards/U9.jpg';
// // Literature Icon Cards//
import ADL1 from '../pics/Q3Cards/literature_cards/icon_cards_across_disciplines-01.jpg'; import ADL2 from '../pics/Q3Cards/literature_cards/icon_cards_across_disciplines-02.jpg'; import ADL3 from '../pics/Q3Cards/literature_cards/icon_cards_across_disciplines-03.jpg'; import ADL4 from '../pics/Q3Cards/literature_cards/icon_cards_across_disciplines-04.jpg'; import ADL5 from '../pics/Q3Cards/literature_cards/icon_cards_across_disciplines-05.jpg'; import ADL6 from '../pics/Q3Cards/literature_cards/icon_cards_across_disciplines-06.jpg'; import ADL7 from '../pics/Q3Cards/literature_cards/icon_cards_across_disciplines-07.jpg'; import ADL8 from '../pics/Q3Cards/literature_cards/icon_cards_across_disciplines-08.jpg';
import BIL1 from '../pics/Q3Cards/literature_cards/icon_cards_big_idea-01.jpg'; import BIL2 from '../pics/Q3Cards/literature_cards/icon_cards_big_idea-02.jpg'; import BIL3 from '../pics/Q3Cards/literature_cards/icon_cards_big_idea-03.jpg'; import BIL4 from '../pics/Q3Cards/literature_cards/icon_cards_big_idea-04.jpg'; import BIL5 from '../pics/Q3Cards/literature_cards/icon_cards_big_idea-05.jpg'; import BIL6 from '../pics/Q3Cards/literature_cards/icon_cards_big_idea-06.jpg'; import BIL7 from '../pics/Q3Cards/literature_cards/icon_cards_big_idea-07.jpg'; import BIL8 from '../pics/Q3Cards/literature_cards/icon_cards_big_idea-08.jpg';
import DL1 from '../pics/Q3Cards/literature_cards/icon_cards_details-01.jpg'; import DL2 from '../pics/Q3Cards/literature_cards/icon_cards_details-02.jpg'; import DL3 from '../pics/Q3Cards/literature_cards/icon_cards_details-03.jpg'; import DL4 from '../pics/Q3Cards/literature_cards/icon_cards_details-04.jpg'; import DL5 from '../pics/Q3Cards/literature_cards/icon_cards_details-05.jpg'; import DL6 from '../pics/Q3Cards/literature_cards/icon_cards_details-06.jpg'; import DL7 from '../pics/Q3Cards/literature_cards/icon_cards_details-07.jpg'; import DL8 from '../pics/Q3Cards/literature_cards/icon_cards_details-08.jpg';
import EL1 from '../pics/Q3Cards/literature_cards/icon_cards_ethics-01.jpg'; import EL2 from '../pics/Q3Cards/literature_cards/icon_cards_ethics-02.jpg'; import EL3 from '../pics/Q3Cards/literature_cards/icon_cards_ethics-03.jpg'; import EL4 from '../pics/Q3Cards/literature_cards/icon_cards_ethics-04.jpg'; import EL5 from '../pics/Q3Cards/literature_cards/icon_cards_ethics-05.jpg'; import EL6 from '../pics/Q3Cards/literature_cards/icon_cards_ethics-06.jpg'; import EL7 from '../pics/Q3Cards/literature_cards/icon_cards_ethics-07.jpg'; import EL8 from '../pics/Q3Cards/literature_cards/icon_cards_ethics-08.jpg';
import LODL1 from '../pics/Q3Cards/literature_cards/icon_cards_Language-01.jpg'; import LODL2 from '../pics/Q3Cards/literature_cards/icon_cards_Language-02.jpg'; import LODL3 from '../pics/Q3Cards/literature_cards/icon_cards_Language-03.jpg'; import LODL4 from '../pics/Q3Cards/literature_cards/icon_cards_Language-04.jpg'; import LODL5 from '../pics/Q3Cards/literature_cards/icon_cards_Language-05.jpg'; import LODL6 from '../pics/Q3Cards/literature_cards/icon_cards_Language-06.jpg'; import LODL7 from '../pics/Q3Cards/literature_cards/icon_cards_Language-07.jpg'; import LODL8 from '../pics/Q3Cards/literature_cards/icon_cards_Language-08.jpg'; 
import MPL1 from '../pics/Q3Cards/literature_cards/icon_cards_multiple_perspectives-01.jpg'; import MPL2 from '../pics/Q3Cards/literature_cards/icon_cards_multiple_perspectives-02.jpg'; import MPL3 from '../pics/Q3Cards/literature_cards/icon_cards_multiple_perspectives-03.jpg'; import MPL4 from '../pics/Q3Cards/literature_cards/icon_cards_multiple_perspectives-04.jpg'; import MPL5 from '../pics/Q3Cards/literature_cards/icon_cards_multiple_perspectives-05.jpg'; import MPL6 from '../pics/Q3Cards/literature_cards/icon_cards_multiple_perspectives-06.jpg'; import MPL7 from '../pics/Q3Cards/literature_cards/icon_cards_multiple_perspectives-07.jpg'; import MPL8 from '../pics/Q3Cards/literature_cards/icon_cards_multiple_perspectives-08.jpg'; 
import OTL1 from '../pics/Q3Cards/literature_cards/icon_cards_over_time-01.jpg'; import OTL2 from '../pics/Q3Cards/literature_cards/icon_cards_over_time-02.jpg'; import OTL3 from '../pics/Q3Cards/literature_cards/icon_cards_over_time-03.jpg'; import OTL4 from '../pics/Q3Cards/literature_cards/icon_cards_over_time-04.jpg'; import OTL5 from '../pics/Q3Cards/literature_cards/icon_cards_over_time-05.jpg'; import OTL6 from '../pics/Q3Cards/literature_cards/icon_cards_over_time-06.jpg'; import OTL7 from '../pics/Q3Cards/literature_cards/icon_cards_over_time-07.jpg'; import OTL8 from '../pics/Q3Cards/literature_cards/icon_cards_over_time-08.jpg'; 
import PL1 from '../pics/Q3Cards/literature_cards/icon_cards_patterns-01.jpg'; import PL2 from '../pics/Q3Cards/literature_cards/icon_cards_patterns-02.jpg'; import PL3 from '../pics/Q3Cards/literature_cards/icon_cards_patterns-03.jpg'; import PL4 from '../pics/Q3Cards/literature_cards/icon_cards_patterns-04.jpg'; import PL5 from '../pics/Q3Cards/literature_cards/icon_cards_patterns-05.jpg'; import PL6 from '../pics/Q3Cards/literature_cards/icon_cards_patterns-06.jpg'; import PL7 from '../pics/Q3Cards/literature_cards/icon_cards_patterns-07.jpg'; import PL8 from '../pics/Q3Cards/literature_cards/icon_cards_patterns-08.jpg'; 
import RL1 from '../pics/Q3Cards/literature_cards/icon_cards_rules-01.jpg'; import RL2 from '../pics/Q3Cards/literature_cards/icon_cards_rules-02.jpg'; import RL3 from '../pics/Q3Cards/literature_cards/icon_cards_rules-03.jpg'; import RL4 from '../pics/Q3Cards/literature_cards/icon_cards_rules-04.jpg'; import RL5 from '../pics/Q3Cards/literature_cards/icon_cards_rules-05.jpg'; import RL6 from '../pics/Q3Cards/literature_cards/icon_cards_rules-06.jpg'; import RL7 from '../pics/Q3Cards/literature_cards/icon_cards_rules-07.jpg'; import RL8 from '../pics/Q3Cards/literature_cards/icon_cards_rules-08.jpg'; 
import TL1 from '../pics/Q3Cards/literature_cards/icon_cards_trends-01.jpg'; import TL2 from '../pics/Q3Cards/literature_cards/icon_cards_trends-02.jpg'; import TL3 from '../pics/Q3Cards/literature_cards/icon_cards_trends-03.jpg'; import TL4 from '../pics/Q3Cards/literature_cards/icon_cards_trends-04.jpg'; import TL5 from '../pics/Q3Cards/literature_cards/icon_cards_trends-05.jpg'; import TL6 from '../pics/Q3Cards/literature_cards/icon_cards_trends-06.jpg'; import TL7 from '../pics/Q3Cards/literature_cards/icon_cards_trends-07.jpg'; import TL8 from '../pics/Q3Cards/literature_cards/icon_cards_trends-08.jpg'; 
import UQL1 from '../pics/Q3Cards/literature_cards/icon_cards_unanswered-01.jpg'; import UQL2 from '../pics/Q3Cards/literature_cards/icon_cards_unanswered-02.jpg'; import UQL3 from '../pics/Q3Cards/literature_cards/icon_cards_unanswered-03.jpg'; import UQL4 from '../pics/Q3Cards/literature_cards/icon_cards_unanswered-04.jpg'; import UQL5 from '../pics/Q3Cards/literature_cards/icon_cards_unanswered-05.jpg'; import UQL6 from '../pics/Q3Cards/literature_cards/icon_cards_unanswered-06.jpg'; import UQL7 from '../pics/Q3Cards/literature_cards/icon_cards_unanswered-07.jpg'; import UQL8 from '../pics/Q3Cards/literature_cards/icon_cards_unanswered-08.jpg'; 


const DCQ3Cards = (props) => {
    const[rolling, setRolling] = useState(false);
    const[rolled, setRolled] = useState(false);
    const[icon, setIcon] = useState();
    const[icon2, setIcon2] = useState();
    const [modal, setModal] = useState(false);
    const [card, setCard] = useState('');
    const [sideCards, setSideCards] = useState([]);
    const [card2, setCard2] = useState('');
    const [sideCards2, setSideCards2] = useState([]);
    const [one, setOne] = useState(true);
    const [swtiched1, setSwitched1] = useState(true);
    const [swtiched2, setSwitched2] = useState(true);
    const [swtiched3, setSwitched3] = useState(true);
    const [picking, setPicking] = useState(false);
    const [litSelected, setLitSelected] = useState(false);
    const [copy1, setCopy1] = useState('');
    const [copy2, setCopy2] = useState('');
    const [buttonWord, setButtonWord] = useState('');
    const [buttonWord2, setButtonWord2] = useState('');
    const [picker, setPicker] = useState(false);
    const [picker2, setPicker2] = useState(false);
    const [showButton, setShowButton] = useState(true);

    // Icon card variables //
    const AcrossDisciplinesC = [[AD1,'Compare ______ from the perspectives of an historian, anthropologist, and psychologist.'], [AD2,'Compare the effects of _______ on industry, the environment, and laws governing our society.'], [AD3,'Explain the relationship of ______ with other ideas within this field of study and with different fields of study.'], [AD4,'Find examples of ________ in science, social studies, math, and language arts.'], [AD6,'How do ______ (various topics across the disciplines) contribute meaning to ______ (one particular topic)?'], [AD7,'How is ______ important in school, industry, scientific research, and medicine?'], [AD8,'How is ______ related to similar ideas in science, social studies, math and language arts?'], [AD9,'What are the common elements among ______ (ideas from various disciplines)?'], [AD10,'What are the common elements among the topics from ______ (various disciplines) that we have studies?'], [AD11,'What patterns do we see related to ______ in math, science, social studeis, and language arts?']];
    const BigIdeaC = [[BI1,'Describe all of these ideas regarding ______ in one brief statement.'], [BI2,'Describe the principles at work in _______.'], [BI3,'Describe the theorem used in solving _______.'], [BI4,'Discuss the theories explaining _______.'], [BI5,'What are some of the theories that have been proposed to explain _______?'], [BI6,'What general statement summarizes ______?'], [BI7,'What generalizations can we make regarding the facts about ______?'], [BI8,'What overarching statement sums up all that we have discussed regarding _______?'], [BI9,'What statement would best describe all we have learned about _______?'], [BI10,'What theme best describes _______?']];    
    const DetailsC = [[D1,'Describe how _______(one part or factor) affects ________ (another part or factor).'], [D2,'Elaborate on ______.'], [D3,'Provide evidence to substantiate ______.'], [D4,'What are the characteristics/attributes of ______?'], [D5,'What are the part-to-whole relationships in ______?'], [D6,'What distinguishes _______ from _______?'], [D7,'What factors contributed to ________?'], [D8,'What information can be added to what we already know about ______?'], [D9,'What specific elements define _______?'], [D10,'What variable would change _______?']];
    const EthicsC = [[E1,'Discuss the merits of using _______ vs. ________.'], [E2,'Prove with evidence that there were and still are ethical considerations involved in the treatment of _______.'], [E3,'Prove with evidence the ethical considerations surrounding ________?'], [E4,'What arguments could emerge from a study of _______?'], [E5,'What controversies exist regarding _______?'], [E6,'What debate can be identified or developed about _______?'], [E7,'What different/conflicting opinions have been expressed about _______?'], [E8,'What dilemmas or controversies are involved in _______?'], [E9,'What elements can be identified in ______ that reflect bias, prejudice, and/or discrimination?'], [E10,'What ethical issues surround ______?']];
    const LanguageOfDisciplineC = [[LOD1,'Describe ______ using the words a ______ might use.'], [LOD2,'Describe the causes and effects of _______ (event) using the language of ______ (a disciplinarian in that area).'], [LOD3,'How might ______ describe/explain _______?'], [LOD4,'What words would a ______ use to tell about ______?'], [LOD5,'How would ______ be best described by people working in this area/field/discipline?'], [LOD6,'Pretend you are a _______.  Tell about ______.'], [LOD7,'What specialized language is needed to define and/or describe _______ (event/situation)?'], [LOD8,'What terms or words are specific to the work of _______?'], [LOD9,'What tools/instruments would a ______ use to ______?'], [LOD10,'What words would a ______ use to tell about ______?']];
    const MultiplePerspectivesC = [[MP1,'Compare _______ from the perspectives of an historian, anthropologist, sociologist, and psychologist.'], [MP2,'Defend ______.  Include arguments from various points of view.'], [MP3,'How do different people/characters see _______'], [MP4,'How does viewing ______ from different perspectives help you understand this event/body of knowledge/set of ideas better?'], [MP5,'How might a professional in the field view ______ differently from a layman?'], [MP6,'How would ______ (one character from a story) view this situation differently from ______ (another character in the story)?'], [MP7,'How would others view _______? '], [MP8,'What are the opposing viewpoints in ______ (issue)?'], [MP9,'What opposing opinions have been voiced about ______?']];
    const OverTimeC = [[OT1,'How does the passage of time affect our study of ________?'], [OT2,'How has our understanding of _______ changed over time?'], [OT3,'How has time affected ______?'], [OT4,'How have developments in technology over the past 50 years affected ________?'], [OT5,'How is _______ related to ______ during ______ (a particular time period)?'], [OT6,'How is ______ related to the past, present, and future?'], [OT7,'How might _______ change overtime?'], [OT8,'What aspects of the past affect _______ in the present and possibly will affect it in the future?'], [OT9,'What is revealed when _______ is examined over a specific time period?'], [OT10,'What perspectives does time provide in understanding ______?']];
    const PatternsC = [[P1,'Identify the political, social, and economic patterns associated with ______?'], [P2,'Describe the patterns used in _______ (process).'], [P3,'How does the pattern of ______ help predict ______?'], [P4,'How does the pattern of _______ relate to ______?'], [P5,'Using this pattern, what can you predict about ______?'], [P6,'What are the recurring events in ______?'], [P7,'What elements, events, or ideas are repeated in ______?'], [P8,'What pattern of behavior did ______ have?'], [P9,'What patterns do you find in ______?'], [P10,'What sequence of events is repeated in _______?']];
    const RulesC = [[R1,'Define the consequences of intended and unintended rules of governing _______?'], [R2,'Describe the implicit and explicit rules of ______.'], [R3,'Describe the rules governing _______?'], [R4,'Explain the overt and covert rules affecting ______.'], [R5,'How is _______ structured?  (Explain the structure of _______.)'], [R6,'What are the guidelines or regulations affecting _______?'], [R7,'What are the reasons, motivations, or events that underlie ______?'], [R8,'What guidelines are used to create _______?'], [R9,'What hidden rules of order are found in _______?'], [R10,'What rules do we use in solving _______?']];
    const TrendsC = [[T1,'Define and support with evidence the effects of scientific and social trends on _______.'], [T2,'Relate contemporary trends to the events of _______.'], [T3,'Summarize trends affecting ______.'], [T4,'What are the external factors/outside influences affecting information about ______?'], [T5,'What courses of action affected ________?'], [T6,'What causes of action affected the development of ideas about _________?'], [T7,'What ongoing factors contributed to ______? '], [T8,'What ongoing factors have influenced ______?'], [T9,'What ongoing influences caused/affected _______?'], [T10,'What social, political, technological, and popular ideas affected the knowledge about _____?']];
    const UnansweredQsC = [[U1,'Define the unanswered question about ________.'], [U2,'In what way is information about _________ still incomplete or lacking?'], [U3,'What additional information is necessary for us to be able to make a conclusion regarding __________?'], [U4,'What discrepancies in information did you note about _______?'], [U5,'What ideas are still unresolved/not settled about ______?'], [U6,'What ideas remain unclear or incomplete about ______?'], [U7,'What information is still ambiguous about _______?'], [U8,'What is still not understood about __________?'], [U9,'What is yet unknown about _________?']];
    // Literature Icon card variables //
    const AcrossDisciplinesL = [[ADL1,'How did this story inform you about another subject?'], [ADL2,'What two techniques for writing did you learn from this story?'], [ADL3,"If you were able to read the main character's diary, what might you learn?"], [ADL4,"If you were the book's illustrator, what image would you put on the cover?"], [ADL5,'Connect this story to something you have read or experienced.'], [ADL6,'How could the character have documented events in this story?'], [ADL7,'What advice might a counselor give the main character?'], [ADL8,'How might this story be different if written in a different genre?']];
    const BigIdeaL = [[BIL1,'Tell a summary of this story in three sentences.'], [BIL2,'What was a theme of this story?'], [BIL3,'To whom would you recommend this story and why?'], [BIL4,'What might be another title for this book? Why would this be a good title?'], [BIL5,'What in the story brings it back full circle?'], [BIL6,'Explain one idea that weaves through the story.'], [BIL7,'What conclusion can you draw about the author based upon this story?'], [BIL8,'What conclusions can you draw based upon the characters in this story?']];
    const DetailsL = [[DL1,'Find a story passage where you believe the author describes the story setting or characters.'], [DL2,'Tell us what details you think are missing from this story.'], [DL3,'What details does the author include to help you imagine what the setting or characters look like?'], [DL4,'What information could the author have left out that would not have changed the story?'], [DL5,'What details does the author include to indicate where and when the story took place?'], [DL6,'If you were one of the characters, how could you have documented key events?'], [DL7,'What distinguishes this book from other genres?'], [DL8,'Describe how the characters work to resolve the issues that arise in the story.']];
    const EthicsL = [[EL1,'What dilemma (or conflict) did the main character face?'], [EL2,'How else could the characters have resolved the main problem in this story?'], [EL3,'How was a rule (e.g., society or family) or expectation broken in this story?'], [EL4,'What stereotypes did the author portray?'], [EL5,'How were prejudices revealed in this story?'], [EL6,'Why do you think the author did or did not realistically portray the characters or setting in this story?'], [EL7,"How would you solve the main characters' dilemma?"], [EL8,'How were biases revealed in this story?'], [EL8,'what']];
    const LanguageOfDisciplineL = [[LODL1,'How does the author effectively use descriptive words and phrases? share an example from the book.'], [LODL2,"How did the author effectively create a 'hook' that made you want to continue reading? Share an example from the book."], [LODL3,'What techniques (e.g., descriptive words and style) did the author use to make you care about a character?'], [LODL4,'Identify a word new to you from the story. What do you think it means? How do you know?'], [LODL5,'Did the author portray a certain dialect? If so, what did the dialect tell you about the character(s) speaking the dialect?'], [LODL6,'Did the story take place in a particular historic or futuristic time period? If so, how did the author describe the time period?'], [LODL7,'Can you find any examples of jargon or idiomatic expressions in the story? Is so, what do they mean?'], [LODL8,'Did the characters ignore signs that may have changed the outcome if observed?']];
    const MultiplePerspectivesL = [[MPL1,'Do you think your friend would enjoy this story? Explain your answer.'], [MPL2,'How would this story be different if it were told from the perspective of a different character or narrator?'], [MPL3,"Do you think this book could win a 'Children's Choice Award?'? Explain your answer."], [MPL4,'Choose another group member and decide if your perspectives about how the main character is portrayed are different.'], [MPL5,'How does the gender (male or femail) of the main character impact the story?'], [MPL6,'How does the race or ethnicity of the main character impact the story?'], [MPL7,'What role do adults play in this story? How would the story be different if they were more or less present?'], [MPL8,'How might the antagonist portray the main character?']];
    const OverTimeL = [[OTL1,'How does the main character change from the beginning of the story to the end?'], [OTL2,'How did your feelings about the story change as you read the story from beginning to end?'], [OTL3,'What changes in the setting (time, weather, place, etc.) took place in this story?'], [OTL4,'Find words and ideas from the story that represent change over time.'], [OTL5,'Find evidence from the story that differentiates between fact and opinion.'], [OTL6,'How would your advice to the main character have changed over the course of the story?'], [OTL7,'How will this story be viewed 20 years in the future?'], [OTL8,'What impact might this story have on the future?']];
    const PatternsL = [[PL1,'What plot pattern did you notice in this story that you have noticed in other stories?'], [PL2,'What did you notice in this story that you have noticed in other stories?'], [PL3,'How does the author depict males and females in this story?'], [PL4,'How does the author identify the protagonist in the story? Is this usual in stories of the same genre?'], [PL5,'Describe the time line of events for this story.'], [PL6,'How does the author identify the antagonist in the story? Is this usual in stories of the same genre?'], [PL7,'If the story continued, what do you predict the next series of events to be?'], [PL8,'Describe the relationship among the characters.']];
    const RulesL = [[RL1,'How does the author follow the rules of effective writing (e.g., punctuation, poetry, style)?'], [RL2,'How does the author include rules (e.g., society or family rules) that need to be followed by the characters?'], [RL3,'What series of events led to the problems the characters had to resolve?'], [RL4,"Describe what you think the author's purpose was for writing this story."], [RL5,'What genre is this story? How do you know?'], [RL6,'What generalizations can you make about the time period in which the story takes place?'], [RL7,'Compare and contrast the cultural norms presented in the book with current cultural norms.'], [RL8,"Were the characters' actions what you expected? Explain your answer."]];
    const TrendsL = [[TL1,'How does the setting impact this story?'], [TL2,'Approximately when in time does this story take place, and what are the clues (e.g., vehicles, clothing, word usage)?'], [TL3,'Does this story remind you of a current event? Share the event.'], [TL4,'What would the sequel to this story be like?'], [TL5,'Does this story remind you of another story you might have read? How are they similar or different?'], [TL6,'What influences could this story have on your peer group?'], [TL7,'How would you update the characters of this story so they fit in the current style or fad?'], [TL8,'Explain how this story fits, or does not fit, with your personal choice of reading.']];
    const UnansweredQsL = [[UQL1,'What would you like to ask the author about the story, and what do you think would be the response?'], [UQL2,'Why do you think the author chose to write about this character in this setting?'], [UQL3,'What is a question you would ask the main character?'], [UQL4,'Describe how this story might be different if it were set in another time period.'], [UQL5,'Describe how this story might be the same if it were set in another time period.'], [UQL6,"Find evidence of ambiguity (an unclear event), and explain the author's intent."], [UQL7,'What characteristics of human behavior can you identify from this story?'], [UQL8,'How might you convince someone else to read this book?']];

    // toggles the icon card modal //
    const toggle = () => {
        setModal(!modal);
    };

    // rolls the icon "Dice" //
    const roll = () => {
        setRolling(true);
        setPicker2(false);
        setShowButton(true);
        setPicker(false);
        const done = setTimeout(() => {
            setRolling(false);
            setRolled(true);
            stop();
        },2500);
        return () => clearTimeout(done);
    }

    // user accepts the random icon chosen and gets a random Q3 card for that icon //
    const accept = () => {
        setRolled(false);
        setShowButton(true);
        setPicking(false);
        setPicker(false);
        setPicker2(false);
        setLitSelected(false);
        toggle();
        // set card 1 //
        if(icon === Details){
            let num = (Math.floor(Math.random() * Math.floor(10)));
            setCard(DetailsC[num][0]);
            setSideCards([...DetailsC]);
            setCopy1(Details[num][1]);
            setButtonWord('DETAILS');
        }
        if(icon === BigIdea){
            let num = (Math.floor(Math.random() * Math.floor(10)));
            setCard(BigIdeaC[num][0]);
            setSideCards([...BigIdeaC]);
            setCopy1(BigIdeaC[num][1]);
            setButtonWord('BIG IDEA');
        }
        if(icon === Language){
            let num = (Math.floor(Math.random() * Math.floor(10)));
            setCard(LanguageOfDisciplineC[num][0]);
            setSideCards([...LanguageOfDisciplineC]);
            setCopy1(LanguageOfDisciplineC[num][1]);
            setButtonWord('LANGUAGE OF THE DISCIPLINE');
        }
        if(icon === OverTime){
            let num = (Math.floor(Math.random() * Math.floor(10)));
            setCard(OverTimeC[num][0]);
            setSideCards([...OverTimeC]);
            setCopy1(OverTimeC[num][1]);
            setButtonWord('OVER TIME');
        }
        if(icon === Across){
            let num = (Math.floor(Math.random() * Math.floor(10)));
            setCard(AcrossDisciplinesC[num][0]);
            setSideCards([...AcrossDisciplinesC]);
            setCopy1(AcrossDisciplinesC[num][1]);
            setButtonWord('ACROSS DISCIPLINES');
        }
        if(icon === Unanswered){
            let num = (Math.floor(Math.random() * Math.floor(9)));
            setCard(UnansweredQsC[num][0]);
            setSideCards([...UnansweredQsC]);
            setCopy1(UnansweredQsC[num][1]);
            setButtonWord('UNANSWERED QUESTIONS');
        }
        if(icon === Ethics){
            let num = (Math.floor(Math.random() * Math.floor(10)));
            setCard(EthicsC[num][0]);
            setSideCards([...EthicsC]);
            setCopy1(EthicsC[num][1]);
            setButtonWord('ETHICS');
        }
        if(icon === Multiple){
            let num = (Math.floor(Math.random() * Math.floor(9)));
            setCard(MultiplePerspectivesC[num][0]);
            setSideCards([...MultiplePerspectivesC]);
            setCopy1(MultiplePerspectivesC[num][1]);
            setButtonWord('MULTIPLE PERSPECTIVES');
        }
        if(icon === Patterns){
            let num = (Math.floor(Math.random() * Math.floor(10)));
            setCard(PatternsC[num][0]);
            setSideCards([...PatternsC]);
            setCopy1(PatternsC[num][1]);
            setButtonWord('PATTERNS');
        }
        if(icon === Rules){
            let num = (Math.floor(Math.random() * Math.floor(10)));
            setCard(RulesC[num][0]);
            setSideCards([...RulesC]);
            setCopy1(RulesC[num][1]);
            setButtonWord('RULES');
        }
        if(icon === Trends){
            let num = (Math.floor(Math.random() * Math.floor(10)));
            setCard(TrendsC[num][0]);
            setSideCards([...TrendsC]);
            setCopy1(TrendsC[num][1]);
            setButtonWord('TRENDS');
        }

        // set card 2 //
        if(icon2 === Details){
            let num = (Math.floor(Math.random() * Math.floor(10)));
            setCard2(DetailsC[num][0]);
            setSideCards2([...DetailsC]);
            setCopy2(DetailsC[num][1]);
            setButtonWord2('DETAILS');
        }
        if(icon2 === BigIdea){
            let num = (Math.floor(Math.random() * Math.floor(10)));
            setCard2(BigIdeaC[num][0]);
            setSideCards2([...BigIdeaC]);
            setCopy2(BigIdeaC[num][1]);
            setButtonWord2('BIG IDEA');
        }
        if(icon2 === Language){
            let num = (Math.floor(Math.random() * Math.floor(10)));
            setCard2(LanguageOfDisciplineC[num][0]);
            setSideCards2([...LanguageOfDisciplineC]);
            setCopy2(LanguageOfDisciplineC[num][1]);
            setButtonWord2('LANGUAGE OF THE DISCIPLINE');
        }
        if(icon2 === OverTime){
            let num = (Math.floor(Math.random() * Math.floor(10)));
            setCard2(OverTimeC[num][0]);
            setSideCards2([...OverTimeC]);
            setCopy2(OverTimeC[num][1]);
            setButtonWord2('OVER TIME');
        }
        if(icon2 === Across){
            let num = (Math.floor(Math.random() * Math.floor(10)));
            setCard2(AcrossDisciplinesC[num][0]);
            setSideCards2([...AcrossDisciplinesC]);
            setCopy2(AcrossDisciplinesC[num][1]);
            setButtonWord2('ACROSS DISCIPLINES');
        }
        if(icon2 === Unanswered){
            let num = (Math.floor(Math.random() * Math.floor(9)));
            setCard2(UnansweredQsC[num][0]);
            setSideCards2([...UnansweredQsC]);
            setCopy2(UnansweredQsC[num][1]);
            setButtonWord2('UNANSWERED QUESTIONS');
        }
        if(icon2 === Ethics){
            let num = (Math.floor(Math.random() * Math.floor(10)));
            setCard2(EthicsC[num][0]);
            setSideCards2([...EthicsC]);
            setCopy2(EthicsC[num][1]);
            setButtonWord2('ETHICS');
        }
        if(icon2 === Multiple){
            let num = (Math.floor(Math.random() * Math.floor(9)));
            setCard2(MultiplePerspectivesC[num][0]);
            setSideCards2([...MultiplePerspectivesC]);
            setCopy2(MultiplePerspectivesC[num][1]);
            setButtonWord2('MULTIPLE PERSPECTIVES');
        }
        if(icon2 === Patterns){
            let num = (Math.floor(Math.random() * Math.floor(10)));
            setCard2(PatternsC[num][0]);
            setSideCards2([...PatternsC]);
            setCopy2(PatternsC[num][1]);
            setButtonWord2('PATTERNS');
        }
        if(icon2 === Rules){
            let num = (Math.floor(Math.random() * Math.floor(10)));
            setCard2(RulesC[num][0]);
            setSideCards2([...RulesC]);
            setCopy2(RulesC[num][1]);
            setButtonWord2('RULES');
        }
        if(icon2 === Trends){
            let num = (Math.floor(Math.random() * Math.floor(10)));
            setCard2(TrendsC[num][0]);
            setSideCards2([...TrendsC]);
            setCopy2(TrendsC[num][1]);
            setButtonWord2('TRENDS');
        }
    }

    const submitIcons = () => {
        setRolled(true);
        setPicker2(false);
        setPicker(false);
        setShowButton(true);
    }

    const acceptLit = () => {
        setRolled(false);
        setPicking(false);
        setShowButton(true);
        setLitSelected(true);
        toggle();
        let num = (Math.floor(Math.random() * Math.floor(8)));
        // set card 1 //
        if(icon === Details){
            setCard(DetailsL[num][0]);
            setSideCards([...DetailsL]);
            setCopy1(DetailsL[num][1]);
            setButtonWord('DETAILS');
        }
        if(icon === BigIdea){
            setCard(BigIdeaL[num][0]);
            setSideCards([...BigIdeaL]);
            setCopy1(BigIdeaL[num][1]);
            setButtonWord('BIG IDEA');
        }
        if(icon === Language){
            setCard(LanguageOfDisciplineL[num][0]);
            setSideCards([...LanguageOfDisciplineL]);
            setCopy1(LanguageOfDisciplineL[num][1]);
            setButtonWord('LANGUAGE OF THE DISCIPLINE');
        }
        if(icon === OverTime){
            setCard(OverTimeL[num][0]);
            setSideCards([...OverTimeL]);
            setCopy1(OverTimeL[num][1]);
            setButtonWord('OVER TIME');
        }
        if(icon === Across){
            setCard(AcrossDisciplinesL[num][0]);
            setSideCards([...AcrossDisciplinesL]);
            setCopy1(AcrossDisciplinesL[num][1]);
            setButtonWord('ACROSS DISCIPLINES');
        }
        if(icon === Unanswered){
            setCard(UnansweredQsL[num][0]);
            setSideCards([...UnansweredQsL]);
            setCopy1(UnansweredQsL[num][1]);
            setButtonWord('UNANSWERED QUESTIONS');
        }
        if(icon === Ethics){
            setCard(EthicsL[num][0]);
            setSideCards([...EthicsL]);
            setCopy1(EthicsL[num][1]);
            setButtonWord('ETHICS');
        }
        if(icon === Multiple){
            setCard(MultiplePerspectivesL[num][0]);
            setSideCards([...MultiplePerspectivesL]);
            setCopy1(MultiplePerspectivesL[num][1]);
            setButtonWord('MULTIPLE PERSPECTIVES');
        }
        if(icon === Patterns){
            setCard(PatternsL[num][0]);
            setSideCards([...PatternsL]);
            setCopy1(PatternsL[num][1]);
            setButtonWord('PATTERNS');
        }
        if(icon === Rules){
            setCard(RulesL[num][0]);
            setSideCards([...RulesL]);
            setCopy1(RulesL[num][0]);
            setButtonWord('RULES');
        }
        if(icon === Trends){
            setCard(TrendsL[num][0]);
            setSideCards([...TrendsL]);
            setCopy1(TrendsL[num][1]);
            setButtonWord('TRENDS');
        }

        // set card 2 //
        if(icon2 === Details){
            setCard2(DetailsL[num][0]);
            setSideCards2([...DetailsL]);
            setCopy2(DetailsL[num][1]);
            setButtonWord2('DETAILS');
        }
        if(icon2 === BigIdea){
            setCard2(BigIdeaL[num][0]);
            setSideCards2([...BigIdeaL]);
            setCopy2(BigIdeaL[num][1]);
            setButtonWord2('BIG IDEA');
        }
        if(icon2 === Language){
            setCard2(LanguageOfDisciplineL[num][0]);
            setSideCards2([...LanguageOfDisciplineL]);
            setCopy2(LanguageOfDisciplineL[num][1]);
            setButtonWord2('LANGUAGE OF THE DISCIPLINE');
        }
        if(icon2 === OverTime){
            setCard2(OverTimeL[num][0]);
            setSideCards2([...OverTimeL]);
            setCopy2(OverTimeL[num][1]);
            setButtonWord2('OVER TIME');
        }
        if(icon2 === Across){
            setCard2(AcrossDisciplinesL[num][0]);
            setSideCards2([...AcrossDisciplinesL]);
            setCopy2(AcrossDisciplinesL[num][1]);
            setButtonWord2('ACROSS DISCIPLINE');
        }
        if(icon2 === Unanswered){
            setCard2(UnansweredQsL[num][0]);
            setSideCards2([...UnansweredQsL]);
            setCopy2(UnansweredQsL[num][1]);
            setButtonWord2('UNANSWERED QUESTIONS');
        }
        if(icon2 === Ethics){
            setCard2(EthicsL[num][0]);
            setSideCards2([...EthicsL]);
            setCopy2(EthicsL[num][1]);
            setButtonWord2('ETHICS');
        }
        if(icon2 === Multiple){
            setCard2(MultiplePerspectivesL[num][0]);
            setSideCards2([...MultiplePerspectivesL]);
            setCopy2(MultiplePerspectivesL[num][1]);
            setButtonWord2('MULTIPLE PERSPECTIVES');
        }
        if(icon2 === Patterns){
            setCard2(PatternsL[num][0]);
            setSideCards2([...PatternsL]);
            setCopy2(PatternsL[num][1]);
            setButtonWord2('PATTERNS');
        }
        if(icon2 === Rules){
            setCard2(RulesL[num][0]);
            setSideCards2([...RulesL]);
            setCopy2(RulesL[num][1]);
            setButtonWord2('RULES');
        }
        if(icon2 === Trends){
            setCard2(TrendsL[num][0]);
            setSideCards2([...TrendsL]);
            setCopy2(TrendsL[num][1]);
            setButtonWord2('TRENDS');
        }
    }

    const togglePicker = () => {
        setPicker(!picker);
        setShowButton(false);
    }

    const togglePicker2 = () => {
        setPicker2(!picker2);
        setShowButton(false);
    }

    const changeCard1 = (e, newCard) =>{
        setCard(newCard[0]);
        setCopy1(newCard[1]);
    }

    const changeCard2 = (e, newCard) => {
        setCard2(newCard[0]);
        setCopy2(newCard[1]);
    }

    const oneDice = () => {
        setOne(true);
        setPicker2(false);
        setPicker(false);
        setRolled(false);
    }

    const twoDice = () => {
        setOne(false);
        setPicker2(false);
        setPicker(false);
        setRolled(false);
    }

    const cardSwitching1 = () =>{
        setSwitched1(false);
    }

    const cardSwitched1 = () =>{
        setSwitched1(true);
    }

    const cardSwitching2 = () =>{
        setSwitched2(false);
    }

    const cardSwitched2 = () =>{
        setSwitched2(true);
    }

    const cardSwitching3 = () =>{
        setSwitched3(false);
    }

    const cardSwitched3 = () =>{
        setSwitched3(true);
    }

    return(
        <div className='dc-wrapper'>
            <div className='col-12 row mainContent'>
                <div className='col-lg-12'>
                    <div className='text-center mt-3 flex'>
                        <DoubleButton twoDice={twoDice} oneDice={oneDice} one={one}/>
                    </div>
                    <div className={ rolling ? 'backdropRolling col-centered' : 'backdrop col-centered'}>
                        <div className='text-center mt-3 '>
                            {rolled 
                                ?<h2 className='title'>Your Icon(s)</h2>
                                :<h2 className='title'>Click to roll</h2>
                            }
                            <p><i className="arrow down"></i></p>
                        </div>

                        <div className='col-lg-12 mt-4 col-centered'>
                            <Dice rolling={rolling} roll={roll} icon={icon} setIcon={setIcon} rolled={rolled} one={one} icon2={icon2} setIcon2={setIcon2} />
                        </div>
                    </div>

                    <div className='flex mt-2'>
                        <div>
                            {rolled === false && one === true && showButton === true &&
                                <button className='btn btn-outline-success' onClick={togglePicker}>Select Your Own Icon</button>
                            }
                            {rolled === false && one === false && showButton === true &&
                                <button className='btn btn-outline-success' onClick={togglePicker2}>Select Your Own Icons</button>
                            }
                            <div className='mt-1'>
                                { picker &&
                                    <form className='text-center picker' onSubmit={submitIcons}>
                                        <select className='form-control mt-2' onChange={(e) => setIcon(e.target.value)}>
                                            <option value='none' selected='true' disabled="disabled">Select Icon</option>
                                            <option value={BigIdea}>Big Idea</option>
                                            <option value={Across}>Across Disciplines</option>
                                            <option value={Details}>Details</option>
                                            <option value={Ethics}>Ethics</option>
                                            <option value={Language}>Language of Discipline</option>
                                            <option value={Multiple}>Multiple Perspectives</option>
                                            <option value={OverTime}>Over Time</option>
                                            <option value={Patterns}>Patterns</option>
                                            <option value={Rules}>Rules</option>
                                            <option value={Trends}>Trends</option>
                                            <option value={Unanswered}>Unanswered Questions</option>
                                        </select>
                                        <button className='col-sm-6 btn btn-dark btn-sm mt-2'>Submit <i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                                    </form>
                                }
                                { picker2 &&
                                    <form className='picker' onSubmit={submitIcons}>
                                        <div className='flex'>
                                            <select className='form-control mt-2' onChange={(e) => setIcon(e.target.value)}>
                                                <option value='none' selected='true' disabled="disabled">Select Icon 1</option>
                                                <option value={BigIdea}>Big Idea</option>
                                                <option value={Across}>Across Disciplines</option>
                                                <option value={Details}>Details</option>
                                                <option value={Ethics}>Ethics</option>
                                                <option value={Language}>Language of Discipline</option>
                                                <option value={Multiple}>Multiple Perspectives</option>
                                                <option value={OverTime}>Over Time</option>
                                                <option value={Patterns}>Patterns</option>
                                                <option value={Rules}>Rules</option>
                                                <option value={Trends}>Trends</option>
                                                <option value={Unanswered}>Unanswered Questions</option>
                                            </select>

                                            <select className='form-control mt-2 ml-2' onChange={(e) => setIcon2(e.target.value)}>
                                                <option value='none' selected='true' disabled="disabled">Select Icon 2</option>
                                                <option value={BigIdea}>Big Idea</option>
                                                <option value={Across}>Across Disciplines</option>
                                                <option value={Details}>Details</option>
                                                <option value={Ethics}>Ethics</option>
                                                <option value={Language}>Language of Discipline</option>
                                                <option value={Multiple}>Multiple Perspectives</option>
                                                <option value={OverTime}>Over Time</option>
                                                <option value={Patterns}>Patterns</option>
                                                <option value={Rules}>Rules</option>
                                                <option value={Trends}>Trends</option>
                                                <option value={Unanswered}>Unanswered Questions</option>
                                            </select>
                                        </div>
                                        <button className='col-sm-6 offset-sm-3 btn btn-dark btn-sm mt-2'>Submit <i className="fa fa-paper-plane" aria-hidden="true"></i> </button>
                                </form>
                                }
                            </div>
                        </div>
                    </div>

                    <Message rolled={rolled} icon={icon} setRolled={setRolled} accept={accept} acceptLit={acceptLit} />
                </div>
            </div>

            {/* *********** All Modals ************ */}
            <Q3Modal modal={modal} card={card} setCard={setCard} sideCards={sideCards} 
            setSideCards={setSideCards} card2={card2} setCard2={setCard2} sideCards2={sideCards2} setSideCards2={setSideCards2}
            one={one} picking={picking} setPicking={setPicking} cardSwitching1={cardSwitching1} cardSwitching2={cardSwitching2}
            cardSwitching3={cardSwitching3} toggle={toggle} swtiched1={swtiched1} swtiched2={swtiched2} swtiched3={swtiched3} 
            changeCard1={changeCard1} changeCard2={changeCard2} cardSwitched1={cardSwitched1} cardSwitched2={cardSwitched2} 
            cardSwitched3={cardSwitched3} litSelected={litSelected} buttonWord={buttonWord} buttonWord2={buttonWord2} copy1={copy1}
            copy2={copy2} />

        </div>
    )
};

export default DCQ3Cards;