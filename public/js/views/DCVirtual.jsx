import React, {useState} from 'react';
import Loader from 'react-spinner-loader';
// import img fullscreen capabilities
import { FullScreen, useFullScreenHandle } from "react-full-screen";
// import CI Cards
import CiCard01 from '../pics/VirtualProducts/ci_cards/0001.jpg'; import CiCard02 from '../pics/VirtualProducts/ci_cards/0002.jpg'; import CiCard03 from '../pics/VirtualProducts/ci_cards/0003.jpg'; import CiCard04 from '../pics/VirtualProducts/ci_cards/0004.jpg';
import CiCard05 from '../pics/VirtualProducts/ci_cards/0005.jpg'; import CiCard06 from '../pics/VirtualProducts/ci_cards/0006.jpg'; import CiCard07 from '../pics/VirtualProducts/ci_cards/0007.jpg'; import CiCard08 from '../pics/VirtualProducts/ci_cards/0008.jpg';
import CiCard09 from '../pics/VirtualProducts/ci_cards/0009.jpg'; import CiCard10 from '../pics/VirtualProducts/ci_cards/0010.jpg'; import CiCard11 from '../pics/VirtualProducts/ci_cards/0011.jpg'; import CiCard12 from '../pics/VirtualProducts/ci_cards/0012.jpg';
import CiCard13 from '../pics/VirtualProducts/ci_cards/0013.jpg'; import CiCard14 from '../pics/VirtualProducts/ci_cards/0014.jpg'; import CiCard15 from '../pics/VirtualProducts/ci_cards/0015.jpg';
import CiCard16 from '../pics/VirtualProducts/ci_cards/0016.jpg'; import CiCard17 from '../pics/VirtualProducts/ci_cards/0017.jpg'; import CiCard18 from '../pics/VirtualProducts/ci_cards/0018.jpg'; import CiCard19 from '../pics/VirtualProducts/ci_cards/0019.jpg';
import CiCard20 from '../pics/VirtualProducts/ci_cards/0020.jpg'; import CiCard21 from '../pics/VirtualProducts/ci_cards/0021.jpg'; import CiCard22 from '../pics/VirtualProducts/ci_cards/0022.jpg';
// import CI Student Cards
import StudentCI01 from '../pics/VirtualProducts/ci_student_cards/0001.jpg'; import StudentCI02 from '../pics/VirtualProducts/ci_student_cards/0002.jpg'; import StudentCI03 from '../pics/VirtualProducts/ci_student_cards/0003.jpg';
import StudentCI04 from '../pics/VirtualProducts/ci_student_cards/0004.jpg'; import StudentCI05 from '../pics/VirtualProducts/ci_student_cards/0005.jpg'; import StudentCI06 from '../pics/VirtualProducts/ci_student_cards/0006.jpg';
import StudentCI07 from '../pics/VirtualProducts/ci_student_cards/0007.jpg'; import StudentCI08 from '../pics/VirtualProducts/ci_student_cards/0008.jpg'; import StudentCI09 from '../pics/VirtualProducts/ci_student_cards/0009.jpg';
import StudentCI10 from '../pics/VirtualProducts/ci_student_cards/0010.jpg'; import StudentCI11 from '../pics/VirtualProducts/ci_student_cards/0011.jpg'; import StudentCI12 from '../pics/VirtualProducts/ci_student_cards/0012.jpg';
// import DC Icon Cards
import DCIcon01 from '../pics/VirtualProducts/dc_icon_cards/0001.jpg';import DCIcon02 from '../pics/VirtualProducts/dc_icon_cards/0002.jpg';import DCIcon03 from '../pics/VirtualProducts/dc_icon_cards/0003.jpg';import DCIcon04 from '../pics/VirtualProducts/dc_icon_cards/0004.jpg';
import DCIcon05 from '../pics/VirtualProducts/dc_icon_cards/0005.jpg';import DCIcon06 from '../pics/VirtualProducts/dc_icon_cards/0006.jpg';import DCIcon07 from '../pics/VirtualProducts/dc_icon_cards/0007.jpg';import DCIcon08 from '../pics/VirtualProducts/dc_icon_cards/0008.jpg';
import DCIcon09 from '../pics/VirtualProducts/dc_icon_cards/0009.jpg';import DCIcon10 from '../pics/VirtualProducts/dc_icon_cards/0010.jpg';import DCIcon11 from '../pics/VirtualProducts/dc_icon_cards/0011.jpg';import DCIcon12 from '../pics/VirtualProducts/dc_icon_cards/0012.jpg';
import DCIcon13 from '../pics/VirtualProducts/dc_icon_cards/0013.jpg';import DCIcon14 from '../pics/VirtualProducts/dc_icon_cards/0014.jpg';import DCIcon15 from '../pics/VirtualProducts/dc_icon_cards/0015.jpg';import DCIcon16 from '../pics/VirtualProducts/dc_icon_cards/0016.jpg';
import DCIcon17 from '../pics/VirtualProducts/dc_icon_cards/0017.jpg';import DCIcon18 from '../pics/VirtualProducts/dc_icon_cards/0018.jpg';import DCIcon19 from '../pics/VirtualProducts/dc_icon_cards/0019.jpg';import DCIcon20 from '../pics/VirtualProducts/dc_icon_cards/0020.jpg';
import DCIcon21 from '../pics/VirtualProducts/dc_icon_cards/0021.jpg';import DCIcon22 from '../pics/VirtualProducts/dc_icon_cards/0022.jpg';import DCIcon23 from '../pics/VirtualProducts/dc_icon_cards/0023.jpg';import DCIcon24 from '../pics/VirtualProducts/dc_icon_cards/0024.jpg';
// import DC Icon Posters
import IconPoster01 from '../pics/VirtualProducts/dc_icon_posters/0001.jpg';import IconPoster02 from '../pics/VirtualProducts/dc_icon_posters/0002.jpg';import IconPoster03 from '../pics/VirtualProducts/dc_icon_posters/0003.jpg';import IconPoster04 from '../pics/VirtualProducts/dc_icon_posters/0004.jpg';
import IconPoster05 from '../pics/VirtualProducts/dc_icon_posters/0005.jpg';import IconPoster06 from '../pics/VirtualProducts/dc_icon_posters/0006.jpg';import IconPoster07 from '../pics/VirtualProducts/dc_icon_posters/0007.jpg';import IconPoster08 from '../pics/VirtualProducts/dc_icon_posters/0008.jpg';
import IconPoster09 from '../pics/VirtualProducts/dc_icon_posters/0009.jpg';import IconPoster10 from '../pics/VirtualProducts/dc_icon_posters/0010.jpg';import IconPoster11 from '../pics/VirtualProducts/dc_icon_posters/0011.jpg';
// import Student Icon Cards
import StudentCard1 from '../pics/VirtualProducts/student_icon_cards/0001.jpg';import StudentCard2 from '../pics/VirtualProducts/student_icon_cards/0002.jpg';import StudentCard3 from '../pics/VirtualProducts/student_icon_cards/0003.jpg';import StudentCard4 from '../pics/VirtualProducts/student_icon_cards/0004.jpg';
import StudentCard5 from '../pics/VirtualProducts/student_icon_cards/0005.jpg';import StudentCard6 from '../pics/VirtualProducts/student_icon_cards/0006.jpg';import StudentCard7 from '../pics/VirtualProducts/student_icon_cards/0007.jpg';import StudentCard8 from '../pics/VirtualProducts/student_icon_cards/0008.jpg';
import StudentCard9 from '../pics/VirtualProducts/student_icon_cards/0009.jpg';import StudentCard10 from '../pics/VirtualProducts/student_icon_cards/0010.jpg';import StudentCard11 from '../pics/VirtualProducts/student_icon_cards/0011.jpg';import StudentCard12 from '../pics/VirtualProducts/student_icon_cards/0012.jpg';
import StudentCard13 from '../pics/VirtualProducts/student_icon_cards/0013.jpg';import StudentCard14 from '../pics/VirtualProducts/student_icon_cards/0014.jpg';import StudentCard15 from '../pics/VirtualProducts/student_icon_cards/0015.jpg';import StudentCard16 from '../pics/VirtualProducts/student_icon_cards/0016.jpg';
import StudentCard17 from '../pics/VirtualProducts/student_icon_cards/0017.jpg';import StudentCard18 from '../pics/VirtualProducts/student_icon_cards/0018.jpg';import StudentCard19 from '../pics/VirtualProducts/student_icon_cards/0019.jpg';import StudentCard20 from '../pics/VirtualProducts/student_icon_cards/0020.jpg';
import StudentCard21 from '../pics/VirtualProducts/student_icon_cards/0021.jpg';import StudentCard22 from '../pics/VirtualProducts/student_icon_cards/0022.jpg';import StudentCard23 from '../pics/VirtualProducts/student_icon_cards/0023.jpg';import StudentCard24 from '../pics/VirtualProducts/student_icon_cards/0024.jpg';
// import CI Posters
import CiPoster01 from '../pics/VirtualProducts/ci_posters/0001.jpg'; import CiPoster02 from '../pics/VirtualProducts/ci_posters/0002.jpg'; import CiPoster03 from '../pics/VirtualProducts/ci_posters/0003.jpg'; import CiPoster04 from '../pics/VirtualProducts/ci_posters/0004.jpg';
import CiPoster05 from '../pics/VirtualProducts/ci_posters/0005.jpg';

const DCVirtual = () => {
    const [ciCard, setCiCard] = useState(false);
    const [dcStudent, setDcStudent] = useState(false);
    const [dcIcon, setdcIcon] = useState(false);
    const [dcPoster, setDcPoster] = useState(false);
    const [studentIcon, setStudentIcon] = useState(false);
    const [ciPoster, setCiPoster] = useState(false);
    const [Count, setCount] = useState(0);
    const [Count2, setCount2] = useState(0);
    const [Count3, setCount3] = useState(0);
    const [Count4, setCount4] = useState(0);
    const [Count5, setCount5] = useState(0);
    const [Count6, setCount6] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const handle = useFullScreenHandle();

    // create arrays for each set of images
    const ciCards = [CiCard01, CiCard02, CiCard03, CiCard04, CiCard05, CiCard06, CiCard07, CiCard08, CiCard09, CiCard10, CiCard11, CiCard12, CiCard13, CiCard14, CiCard15,
    CiCard16, CiCard17, CiCard18, CiCard19, CiCard20, CiCard21, CiCard22];

    const studentCards = [StudentCI01, StudentCI02, StudentCI03, StudentCI04, StudentCI05, StudentCI06, StudentCI07, StudentCI08, StudentCI09, StudentCI10, StudentCI11, StudentCI12];

    const dcIconCards = [DCIcon01, DCIcon02, DCIcon03, DCIcon04, DCIcon05, DCIcon06, DCIcon07, DCIcon08, DCIcon09, DCIcon10, DCIcon11, DCIcon12, DCIcon13, DCIcon14, DCIcon15, DCIcon16,
    DCIcon17, DCIcon18, DCIcon19, DCIcon20, DCIcon21, DCIcon22, DCIcon23, DCIcon24];

    const iconPosters = [IconPoster01, IconPoster02, IconPoster03, IconPoster04, IconPoster05, IconPoster06, IconPoster07, IconPoster08, IconPoster09, IconPoster10, IconPoster11];

    const studentIcons = [StudentCard1, StudentCard2, StudentCard3, StudentCard4, StudentCard5, StudentCard6, StudentCard7, StudentCard8, StudentCard9, StudentCard10, StudentCard11,
        StudentCard12, StudentCard13, StudentCard14, StudentCard15, StudentCard16, StudentCard17, StudentCard18, StudentCard19, StudentCard20, StudentCard21, StudentCard22, StudentCard23, StudentCard24];

    const ciPosters = [CiPoster01, CiPoster02, CiPoster03, CiPoster04, CiPoster05];

    const ChangeSelected1 = (e) => {
        e.preventDefault();
        const value = parseInt(e.target.value);
        if(value === 1){
            setCiCard(false);
            setDcStudent(false);
            setdcIcon(!dcIcon);
            setDcPoster(false);
            setCiPoster(false);
            setStudentIcon(false);
            setLoaded(false);
        } else if(value === 2){
            setCiCard(false);
            setDcStudent(false);
            setdcIcon(false);
            setDcPoster(false);
            setCiPoster(false);
            setStudentIcon(!studentIcon);
            setLoaded(false);
        } else if(value === 3){
            setCiCard(false);
            setDcStudent(false);
            setdcIcon(false);
            setDcPoster(!dcPoster);
            setCiPoster(false);
            setStudentIcon(false);
            setLoaded(false);
        }
    }

    const ChangeSelected2 = (e) => {
        e.preventDefault();
        const value = parseInt(e.target.value);
        if(value === 1){
            setCiCard(!ciCard);
            setDcStudent(false);
            setdcIcon(false);
            setDcPoster(false);
            setCiPoster(false);
            setStudentIcon(false);
            setLoaded(false);
        } else if(value === 2){
            setCiCard(false);
            setDcStudent(!dcStudent);
            setdcIcon(false);
            setDcPoster(false);
            setCiPoster(false);
            setStudentIcon(false);
            setLoaded(false);
        } else if(value === 3){
            setCiCard(false);
            setDcStudent(false);
            setdcIcon(false);
            setDcPoster(false);
            setStudentIcon(false);
            setCiPoster(!ciPoster);
            setLoaded(false);
        }
    }

    // Next / Prev Functions for each section
    const [ciCardImg, setciCardImg] = useState(ciCards[0]);
    const [studentCiImg, setStudentCiImg] = useState(studentCards[0]);
    const [dcIconImg, setDcIconImg] = useState(dcIconCards[0]);
    const [iconPosterImg, setIconPosterImc] = useState(iconPosters[0]);
    const [studentIconImg, setStudentIconImg] = useState(studentIcons[0]);
    const [ciPosterImg, setCiPosterImg] = useState(ciPosters[0]);

    const next = () => {
        if(Count === 0) { setCount(Count + 1); setciCardImg(ciCards[1]);}
        if(Count === 1) { setCount(Count + 1); setciCardImg(ciCards[2]);}
        if(Count === 2) { setCount(Count + 1); setciCardImg(ciCards[3]);}
        if(Count === 3) { setCount(Count + 1); setciCardImg(ciCards[4]);}
        if(Count === 4) { setCount(Count + 1); setciCardImg(ciCards[5]);}
        if(Count === 5) { setCount(Count + 1); setciCardImg(ciCards[6]);}
        if(Count === 6) { setCount(Count + 1); setciCardImg(ciCards[7]);}
        if(Count === 7) { setCount(Count + 1); setciCardImg(ciCards[8]);}
        if(Count === 8) { setCount(Count + 1); setciCardImg(ciCards[9]);}
        if(Count === 9) { setCount(Count + 1); setciCardImg(ciCards[10]);}
        if(Count === 10) { setCount(Count + 1); setciCardImg(ciCards[11]);}
        if(Count === 11) { setCount(Count + 1); setciCardImg(ciCards[12]);}
        if(Count === 12) { setCount(Count + 1); setciCardImg(ciCards[13]);}
        if(Count === 13) { setCount(Count + 1); setciCardImg(ciCards[14]);}
        if(Count === 14) { setCount(Count + 1); setciCardImg(ciCards[15]);}
        if(Count === 15) { setCount(Count + 1); setciCardImg(ciCards[16]);}
        if(Count === 16) { setCount(Count + 1); setciCardImg(ciCards[17]);}
        if(Count === 17) { setCount(Count + 1); setciCardImg(ciCards[18]);}
        if(Count === 18) { setCount(Count + 1); setciCardImg(ciCards[19]);}
        if(Count === 19) { setCount(Count + 1); setciCardImg(ciCards[20]);}
        if(Count === 20) { setCount(Count + 1); setciCardImg(ciCards[21]);}
        if(Count === 21) { setCount(0); setciCardImg(ciCards[0]);}
    }

    const prev = () => {
        if(Count === 0) { setCount(21); setciCardImg(ciCards[21]);}
        if(Count === 1) { setCount(Count - 1); setciCardImg(ciCards[0]);}
        if(Count === 2) { setCount(Count - 1); setciCardImg(ciCards[1]);}
        if(Count === 3) { setCount(Count - 1); setciCardImg(ciCards[2]);}
        if(Count === 4) { setCount(Count - 1); setciCardImg(ciCards[3]);}
        if(Count === 5) { setCount(Count - 1); setciCardImg(ciCards[4]);}
        if(Count === 6) { setCount(Count - 1); setciCardImg(ciCards[5]);}
        if(Count === 7) { setCount(Count - 1); setciCardImg(ciCards[6]);}
        if(Count === 8) { setCount(Count - 1); setciCardImg(ciCards[7]);}
        if(Count === 9) { setCount(Count - 1); setciCardImg(ciCards[8]);}
        if(Count === 10) { setCount(Count - 1); setciCardImg(ciCards[9]);}
        if(Count === 11) { setCount(Count - 1); setciCardImg(ciCards[10]);}
        if(Count === 12) { setCount(Count - 1); setciCardImg(ciCards[11]);}
        if(Count === 13) { setCount(Count - 1); setciCardImg(ciCards[12]);}
        if(Count === 14) { setCount(Count - 1); setciCardImg(ciCards[13]);}
        if(Count === 15) { setCount(Count - 1); setciCardImg(ciCards[14]);}
        if(Count === 16) { setCount(Count - 1); setciCardImg(ciCards[15]);}
        if(Count === 17) { setCount(Count - 1); setciCardImg(ciCards[16]);}
        if(Count === 18) { setCount(Count - 1); setciCardImg(ciCards[17]);}
        if(Count === 19) { setCount(Count - 1); setciCardImg(ciCards[18]);}
        if(Count === 20) { setCount(Count - 1); setciCardImg(ciCards[19]);}
        if(Count === 21) { setCount(Count - 1); setciCardImg(ciCards[20]);}
    }

    const next2 = () => {
        if(Count2 === 0) { setCount2(Count2 + 1); setStudentCiImg(studentCards[1]);}
        if(Count2 === 1) { setCount2(Count2 + 1); setStudentCiImg(studentCards[2]);}
        if(Count2 === 2) { setCount2(Count2 + 1); setStudentCiImg(studentCards[3]);}
        if(Count2 === 3) { setCount2(Count2 + 1); setStudentCiImg(studentCards[4]);}
        if(Count2 === 4) { setCount2(Count2 + 1); setStudentCiImg(studentCards[5]);}
        if(Count2 === 5) { setCount2(Count2 + 1); setStudentCiImg(studentCards[6]);}
        if(Count2 === 6) { setCount2(Count2 + 1); setStudentCiImg(studentCards[7]);}
        if(Count2 === 7) { setCount2(Count2 + 1); setStudentCiImg(studentCards[8]);}
        if(Count2 === 8) { setCount2(Count2 + 1); setStudentCiImg(studentCards[9]);}
        if(Count2 === 9) { setCount2(Count2 + 1); setStudentCiImg(studentCards[10]);}
        if(Count2 === 10) { setCount2(Count2 + 1); setStudentCiImg(studentCards[11]);}
        if(Count2 === 11) { setCount2(0); setStudentCiImg(studentCards[0]);}
    }

    const prev2 = () => {
        if(Count2 === 0) { setCount2(11); setStudentCiImg(studentCards[11]);}
        if(Count2 === 1) { setCount2(Count2 - 1); setStudentCiImg(studentCards[0]);}
        if(Count2 === 2) { setCount2(Count2 - 1); setStudentCiImg(studentCards[1]);}
        if(Count2 === 3) { setCount2(Count2 - 1); setStudentCiImg(studentCards[2]);}
        if(Count2 === 4) { setCount2(Count2 - 1); setStudentCiImg(studentCards[3]);}
        if(Count2 === 5) { setCount2(Count2 - 1); setStudentCiImg(studentCards[4]);}
        if(Count2 === 6) { setCount2(Count2 - 1); setStudentCiImg(studentCards[5]);}
        if(Count2 === 7) { setCount2(Count2 - 1); setStudentCiImg(studentCards[6]);}
        if(Count2 === 8) { setCount2(Count2 - 1); setStudentCiImg(studentCards[7]);}
        if(Count2 === 9) { setCount2(Count2 - 1); setStudentCiImg(studentCards[8]);}
        if(Count2 === 10) { setCount2(Count2 - 1); setStudentCiImg(studentCards[9]);}
        if(Count2 === 11) { setCount2(Count2 - 1); setStudentCiImg(studentCards[10]);}
    }

    const next3 = () => {
        if(Count3 === 0) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[1]);}
        if(Count3 === 1) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[2]);}
        if(Count3 === 2) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[3]);}
        if(Count3 === 3) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[4]);}
        if(Count3 === 4) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[5]);}
        if(Count3 === 5) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[6]);}
        if(Count3 === 6) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[7]);}
        if(Count3 === 7) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[8]);}
        if(Count3 === 8) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[9]);}
        if(Count3 === 9) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[10]);}
        if(Count3 === 10) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[11]);}
        if(Count3 === 11) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[12]);}
        if(Count3 === 12) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[13]);}
        if(Count3 === 13) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[14]);}
        if(Count3 === 14) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[15]);}
        if(Count3 === 15) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[16]);}
        if(Count3 === 16) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[17]);}
        if(Count3 === 17) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[18]);}
        if(Count3 === 18) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[19]);}
        if(Count3 === 19) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[20]);}
        if(Count3 === 20) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[21]);}
        if(Count3 === 21) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[22]);}
        if(Count3 === 22) { setCount3(Count3 + 1); setDcIconImg(dcIconCards[23]);}
        if(Count3 === 23) { setCount3(0); setDcIconImg(dcIconCards[0]);}
    }

    const prev3 = () => {
        if(Count3 === 0) { setCount3(23); setDcIconImg(dcIconCards[23]);}
        if(Count3 === 1) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[0]);}
        if(Count3 === 2) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[1]);}
        if(Count3 === 3) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[2]);}
        if(Count3 === 4) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[3]);}
        if(Count3 === 5) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[4]);}
        if(Count3 === 6) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[5]);}
        if(Count3 === 7) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[6]);}
        if(Count3 === 8) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[7]);}
        if(Count3 === 9) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[8]);}
        if(Count3 === 10) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[9]);}
        if(Count3 === 11) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[10]);}
        if(Count3 === 12) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[11]);}
        if(Count3 === 13) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[12]);}
        if(Count3 === 14) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[13]);}
        if(Count3 === 15) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[14]);}
        if(Count3 === 16) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[15]);}
        if(Count3 === 17) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[16]);}
        if(Count3 === 18) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[17]);}
        if(Count3 === 19) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[18]);}
        if(Count3 === 20) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[19]);}
        if(Count3 === 21) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[20]);}
        if(Count3 === 22) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[21]);}
        if(Count3 === 23) { setCount3(Count3 - 1); setDcIconImg(dcIconCards[22]);}
    }

    const next4 = () => {
        if(Count4 === 0) { setCount4(Count4 + 1); setIconPosterImc(iconPosters[1]);}
        if(Count4 === 1) { setCount4(Count4 + 1); setIconPosterImc(iconPosters[2]);}
        if(Count4 === 2) { setCount4(Count4 + 1); setIconPosterImc(iconPosters[3]);}
        if(Count4 === 3) { setCount4(Count4 + 1); setIconPosterImc(iconPosters[4]);}
        if(Count4 === 4) { setCount4(Count4 + 1); setIconPosterImc(iconPosters[5]);}
        if(Count4 === 5) { setCount4(Count4 + 1); setIconPosterImc(iconPosters[6]);}
        if(Count4 === 6) { setCount4(Count4 + 1); setIconPosterImc(iconPosters[7]);}
        if(Count4 === 7) { setCount4(Count4 + 1); setIconPosterImc(iconPosters[8]);}
        if(Count4 === 8) { setCount4(Count4 + 1); setIconPosterImc(iconPosters[9]);}
        if(Count4 === 9) { setCount4(Count4 + 1); setIconPosterImc(iconPosters[10]);}
        if(Count4 === 10) { setCount4(0); setIconPosterImc(iconPosters[0]);}
    }

    const prev4 = () => {
        if(Count4 === 0) { setCount4(10); setIconPosterImc(iconPosters[10]);}
        if(Count4 === 1) { setCount4(Count4 - 1); setIconPosterImc(iconPosters[0]);}
        if(Count4 === 2) { setCount4(Count4 - 1); setIconPosterImc(iconPosters[1]);}
        if(Count4 === 3) { setCount4(Count4 - 1); setIconPosterImc(iconPosters[2]);}
        if(Count4 === 4) { setCount4(Count4 - 1); setIconPosterImc(iconPosters[3]);}
        if(Count4 === 5) { setCount4(Count4 - 1); setIconPosterImc(iconPosters[4]);}
        if(Count4 === 6) { setCount4(Count4 - 1); setIconPosterImc(iconPosters[5]);}
        if(Count4 === 7) { setCount4(Count4 - 1); setIconPosterImc(iconPosters[6]);}
        if(Count4 === 8) { setCount4(Count4 - 1); setIconPosterImc(iconPosters[7]);}
        if(Count4 === 9) { setCount4(Count4 - 1); setIconPosterImc(iconPosters[8]);}
        if(Count4 === 10) { setCount4(Count4 - 1); setIconPosterImc(iconPosters[9]);}
    }

    const next5 = () => {
        if(Count5 === 0) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[1]);}
        if(Count5 === 1) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[2]);}
        if(Count5 === 2) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[3]);}
        if(Count5 === 3) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[4]);}
        if(Count5 === 4) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[5]);}
        if(Count5 === 5) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[6]);}
        if(Count5 === 6) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[7]);}
        if(Count5 === 7) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[8]);}
        if(Count5 === 8) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[9]);}
        if(Count5 === 9) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[10]);}
        if(Count5 === 10) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[11]);}
        if(Count5 === 11) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[12]);}
        if(Count5 === 12) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[13]);}
        if(Count5 === 13) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[14]);}
        if(Count5 === 14) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[15]);}
        if(Count5 === 15) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[16]);}
        if(Count5 === 16) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[17]);}
        if(Count5 === 17) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[18]);}
        if(Count5 === 18) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[19]);}
        if(Count5 === 19) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[20]);}
        if(Count5 === 20) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[21]);}
        if(Count5 === 21) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[22]);}
        if(Count5 === 22) { setCount5(Count5 + 1); setStudentIconImg(studentIcons[23]);}
        if(Count5 === 23) { setCount5(0); setStudentIconImg(studentIcons[0]);}
    }

    const prev5 = () => {
        if(Count5 === 0) { setCount5(23); setStudentIconImg(studentIcons[23]);}
        if(Count5 === 1) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[0]);}
        if(Count5 === 2) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[1]);}
        if(Count5 === 3) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[2]);}
        if(Count5 === 4) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[3]);}
        if(Count5 === 5) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[4]);}
        if(Count5 === 6) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[5]);}
        if(Count5 === 7) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[6]);}
        if(Count5 === 8) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[7]);}
        if(Count5 === 9) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[8]);}
        if(Count5 === 10) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[9]);}
        if(Count5 === 11) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[10]);}
        if(Count5 === 12) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[11]);}
        if(Count5 === 13) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[12]);}
        if(Count5 === 14) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[13]);}
        if(Count5 === 15) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[14]);}
        if(Count5 === 16) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[15]);}
        if(Count5 === 17) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[16]);}
        if(Count5 === 18) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[17]);}
        if(Count5 === 19) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[18]);}
        if(Count5 === 20) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[19]);}
        if(Count5 === 21) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[20]);}
        if(Count5 === 22) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[21]);}
        if(Count5 === 23) { setCount5(Count5 - 1); setStudentIconImg(studentIcons[22]);}
    }

    const next6 = () => {
        if(Count6 === 0) { setCount6(Count6 + 1); setCiPosterImg(ciPosters[1]);}
        if(Count6 === 1) { setCount6(Count6 + 1); setCiPosterImg(ciPosters[2]);}
        if(Count6 === 2) { setCount6(Count6 + 1); setCiPosterImg(ciPosters[3]);}
        if(Count6 === 3) { setCount6(Count6 + 1); setCiPosterImg(ciPosters[4]);}
        if(Count6 === 4) { setCount6(0); setCiPosterImg(ciPosters[0]);}
    }

    const prev6 = () => {
        if(Count6 === 0) { setCount6(4); setCiPosterImg(ciPosters[4]);}
        if(Count6 === 1) { setCount6(Count6 - 1); setCiPosterImg(ciPosters[0]);}
        if(Count6 === 2) { setCount6(Count6 - 1); setCiPosterImg(ciPosters[1]);}
        if(Count6 === 3) { setCount6(Count6 - 1); setCiPosterImg(ciPosters[2]);}
        if(Count6 === 4) { setCount6(Count6 - 1); setCiPosterImg(ciPosters[3]);}
    }

    const setImg1 = (i, image) => {
        setCount(i);
        setciCardImg(image);
    }

    const setImg2 = (i, image) => {
        setCount2(i);
        setStudentCiImg(image);
    }

    const setImg3 = (i, image) => {
        setCount3(i);
        setDcIconImg(image);
    }

    const setImg4 = (i, image) => {
        setCount4(i);
        setIconPosterImc(image);
    }

    const setImg5 = (i, image) => {
        setCount5(i);
        setStudentIconImg(image);
    }

    const setImg6 = (i, image) => {
        setCount6(i);
        setCiPosterImg(image);
    }

    return(
        <div className='container'>
            <div className='col-12 buttons mt-1'>
                <div className='row'>
                    <div className='mt-1 col-lg-4 offset-lg-2 col-sm-6'>
                        <h4 className='dc-select-title'>Depth and Complexity</h4>
                        <select className='form-select col-12' onChange={ChangeSelected1}>
                            <option value="">Select Depth and Complexity...</option>
                            <option value={1}>Depth & Complexity Icon Cards</option>
                            <option value={2}>Depth & Complexity Student Icon Cards</option>
                            <option value={3}>Depth & Complexity Posters</option>
                        </select>
                    </div>
                    <div className='mt-1 col-lg-4 col-sm-6'>
                        <h4 className='dc-select-title'>Content Imperatives</h4>
                        <select className='form-select col-12' onChange={ChangeSelected2}>
                            <option value="">Select Content Imperatives...</option>
                            <option value={1}>Content Imperatives Icon Cards</option>
                            <option value={2}>Content Imperatives Student Icon Cards</option>
                            <option value={3}>Content Imperatives Posters</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='allCards mt-1'>
            {ciCard &&
                <>
                    <div className='col-12 CI_Cards'>
                        <div className='col-sm-10 offset-sm-2 row'>
                            <a href="#" onClick={prev} className='dc-prev mt-5' style={{textDecoration:'none', textShadow: '2px 2px 3px gray'}}> &#8249; </a>
                            <FullScreen handle={handle}>
                                <div>
                                    {loaded ? null : (
                                        <div className='loader'>
                                            <Loader show={true} message="" />
                                        </div>
                                    )}
                                    <img src={ciCardImg} alt="CI Card" draggable={false} onClick={handle.enter} onLoad={() => setLoaded(true)} style={loaded ? {} : { display: 'none' }}/>
                                </div>
                            </FullScreen>
                            <a href="#" onClick={next} className='dc-next mt-5' style={{textDecoration:'none', textShadow: '2px 2px 3px gray'}}> &#8250; </a>
                        </div>
                        <div className='dc-overlay mt-5' style={loaded ? {} : { display: 'none' }}>
                            {ciCards.map((image, i) => {return <img key={i} className='thumb' style={{height: '75px', width: 'auto', display: 'block', opacity: '0.5', margin:'5px'}} src={image} onClick={(e) => setImg1(i, image)} />})}
                        </div>
                    </div>
                </>
            }

            {dcStudent &&
                <>
                    <div className='col-12 Student_CI_Cards'>
                        <div className='col-sm-10 offset-sm-2 row'>
                            <a href="#" onClick={prev2} className='dc-prev mt-5' style={{textDecoration:'none', textShadow: '2px 2px 3px gray'}}> &#8249; </a>
                            <FullScreen handle={handle}>
                                <div>
                                {loaded ? null : (
                                    <div className='loader'>
                                        <Loader show={true} message="" />
                                    </div>
                                )}
                                    <img src={studentCiImg} alt="Student CI Card" draggable={false} onClick ={handle.enter} onLoad={() => setLoaded(true)} style={loaded ? {} : { display: 'none' }}/>
                                </div>
                            </FullScreen>
                            <a href="#" onClick={next2} className='dc-next mt-5' style={{textDecoration:'none', textShadow: '2px 2px 3px gray'}}> &#8250; </a>
                        </div>
                        <div className='dc-overlay mt-5' style={loaded ? {} : { display: 'none' }}>
                            {studentCards.map((image, i) => {return <img key={i} className='thumb' style={{height: '75px', width: 'auto', display: 'block', opacity: '0.5', margin:'5px'}} src={image} onClick={(e) => setImg2(i, image)} />})}
                        </div>
                    </div>
                </>
            }
            {dcIcon &&
                <>
                    <div className='col-12 DC_Icon_Cards'>
                        <div className='col-sm-10 offset-sm-2 row'>
                            <a href="#" onClick={prev3} className='dc-prev mt-5' style={{textDecoration:'none', textShadow: '2px 2px 3px gray'}}> &#8249; </a>
                            <FullScreen handle={handle}>
                                <div>
                                {loaded ? null : (
                                    <div className='loader'>
                                        <Loader show={true} message="" />
                                    </div>
                                )}
                                    <img src={dcIconImg} alt="DC Icon Card" draggable={false} onClick ={handle.enter} onLoad={() => setLoaded(true)} style={loaded ? {} : { display: 'none' }}/>            
                                </div>
                            </FullScreen>
                            <a href="#" onClick={next3} className='dc-next mt-5' style={{textDecoration:'none', textShadow: '2px 2px 3px gray'}}> &#8250; </a>
                        </div>
                        <div className='dc-overlay mt-5' style={loaded ? {} : { display: 'none' }}>
                            {dcIconCards.map((image, i) => {return <img key={i} className='thumb' style={{height: '75px', width: 'auto', display: 'block', opacity: '0.5', margin:'5px'}} src={image} onClick={(e) => setImg3(i, image)} />})}
                        </div>
                    </div>
                </>
            }

            {dcPoster &&
                <>
                    <div className='col-12 DC_Icon_Posters'>
                        <a href="#" onClick={prev4} className='prevPost' style={{textDecoration:'none', textShadow: '2px 2px 3px gray'}}> &#8249; </a>
                        <FullScreen handle={handle}>
                            <div>
                            {loaded ? null : (
                                <div className='loader'>
                                    <Loader show={true} message="" />
                                </div>
                            )}
                                <img src={iconPosterImg} alt="DC Icon Poster" draggable={false} onClick ={handle.enter} onLoad={() => setLoaded(true)} style={loaded ? {} : { display: 'none' }}/>
                            </div>
                        </FullScreen>
                        <a href="#" onClick={next4} className='nextPost' style={{textDecoration:'none', textShadow: '2px 2px 3px gray'}}> &#8250; </a>
                        <div className='overlayPost' style={loaded ? {} : { display: 'none' }}>
                            {iconPosters.map((image, i) => {return <img key={i} className='thumb' style={{height: '50px', width: 'auto', display: 'inline', opacity: '0.5', margin:'5px'}} src={image} onClick={(e) => setImg4(i, image)}/>})}
                        </div>
                    </div>
                </>
            }

            {studentIcon &&
                <>
                    <div className='col-12 Student_Icon_Cards'>
                        <div className='col-sm-10 offset-sm-2 row'>
                            <a href="#" onClick={prev5} className='dc-prev mt-5' style={{textDecoration:'none', textShadow: '2px 2px 3px gray'}}> &#8249; </a>
                            <FullScreen handle={handle}>
                                <div>
                                {loaded ? null : (
                                    <div className='loader'>
                                        <Loader show={true} message="" />
                                    </div>
                                )}
                                    <img src={studentIconImg}  draggable={false} alt='Student Icon Card' onClick ={handle.enter} onLoad={() => setLoaded(true)} style={loaded ? {} : { display: 'none' }}/>
                                </div>
                            </FullScreen>
                            <a href="#" onClick={next5} className='dc-next mt-5' style={{textDecoration:'none', textShadow: '2px 2px 3px gray'}}> &#8250; </a>
                        </div>
                        <div className='dc-overlay mt-5' style={loaded ? {} : { display: 'none' }}>
                            {studentIcons.map((image, i) => {return <img key={i} className='thumb' style={{height: '75px', width: 'auto', display: 'block', opacity: '0.5', margin:'5px'}} src={image} onClick={(e) => setImg5(i, image)}/>})}
                        </div>
                    </div>
                </>
            }

            {ciPoster &&
                <>
                    <div className='col-12 CI_Posters'>
                        <a href="#" onClick={prev6} className='prevPost' style={{textDecoration:'none', textShadow: '2px 2px 3px gray'}}> &#8249; </a>
                        <FullScreen handle={handle}>
                            <div>
                            {loaded ? null : (
                                <div className='loader'>
                                    <Loader show={true} message="" />
                                </div>
                            )}
                                <img src={ciPosterImg}  draggable={false} alt='CI Poster' onClick ={handle.enter} onLoad={() => setLoaded(true)} style={loaded ? {} : { display: 'none' }}/>
                            </div>
                        </FullScreen>
                        <a href="#" onClick={next6} className='nextPost' style={{textDecoration:'none', textShadow: '2px 2px 3px gray'}}> &#8250; </a>
                        <div className='overlayPost' style={loaded ? {} : { display: 'none' }}>
                            {ciPosters.map((image, i) => {return <img key={i} className='thumb' style={{height: '50px', width: 'auto', display: 'inline', opacity: '0.5', margin:'5px'}} src={image} onClick={(e) => setImg6(i, image)}/>})}
                        </div>
                    </div>
                </>
            }
            </div>
        </div>
    )
};

export default DCVirtual;