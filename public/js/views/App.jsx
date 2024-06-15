import React, { useState } from 'react';
import Dashboard from './Dashboard';
import DCQuestioning from './DCQuestioning';
import DCAP from './DCAP';
import DCQ3Cards from './DCQ3Cards';
import DCVirtual from './DCVirtual';

const App = () => {

    //#region Universal Variables
    const[showDashboard, setShowDashboard] = useState(true);
    const[showDCAP, setShowDCAP] = useState(false);
    const[showDCQuestioning, setShowDCQuestioning] = useState(false);
    const[showDCQ3Cards, setShowDCQ3Cards] = useState(false);
    const[showDCVirtual, setShowDCVirtual] = useState(false);
    
    const [printing, setPrinting] = useState(false);

    // Database Statement Save Variables
    const [openSaveAs, setOpenSaveAs] = useState(false);
    const [openSaved, setOpenSaved] = useState(false);
    const [saveFileName, setSaveFileName] = useState("");
    const [toggleSavedModal, setToggleSavedModal] = useState(false);
    //#endregion

    //#region DCAP Variables
    const [hide1, setHide1] = useState(true);
    const [hide2, setHide2] = useState(false);
    const [hide3, setHide3] = useState(true);
    //#endregion

    //#region Q3Card Variables
    const [soundOn, setSoundOn] = useState(false);
    //#endregion

    //#region StartSaveProcessDCQuestioning
    const handleOpenSaveAsShow = () => {
        setOpenSaveAs(true);
        setSaveFileName("");
    };
    //#endregion

    //#region ChangeView
    const ChangeView = (e) => {
        if(e.target.value == 1){
            setShowDashboard(false);
            setShowDCAP(true);
            setShowDCQuestioning(false);
            setShowDCQ3Cards(false);
            setShowDCVirtual(false);
        } else if(e.target.value == 2){
            setShowDashboard(false);
            setShowDCAP(false);
            setShowDCQuestioning(true);
            setShowDCQ3Cards(false);
            setShowDCVirtual(false);
        } else if(e.target.value == 3){
            setShowDashboard(false);
            setShowDCAP(false);
            setShowDCQuestioning(false);
            setShowDCQ3Cards(true);
            setShowDCVirtual(false);
        } else if(e.target.value == 4){
            setShowDashboard(false);
            setShowDCAP(false);
            setShowDCQuestioning(false);
            setShowDCQ3Cards(false);
            setShowDCVirtual(true);
        } else{
            setShowDashboard(true);
            setShowDCAP(false);
            setShowDCQuestioning(false);
            setShowDCQ3Cards(false);
            setShowDCVirtual(false);
        }
    }
    //#endregion

    return (
        <div className='col-12 mt-3 mb-5'>

            <select className={showDashboard ? 'form-control glowSelect col-lg-5 col-md-6 col-sm-12' : 'form-control col-lg-4 col-md-6 col-sm-12'} onChange={(e) => ChangeView(e)}>                  
                <option value={0} defaultValue = {showDashboard ? true : false}>Dashboard</option>
                <option value={1} defaultValue = {showDCAP ? true : false}>DCAP Differentiation Task Statement Software</option>
                <option value={2} defaultValue = {showDCQuestioning ? true : false}>Q4 Question Creator Software</option>
                <option value={3} defaultValue = {showDCQ3Cards ? true : false}>Virtual Q3 Question Stem Cards</option>
                <option value={4} defaultValue = {showDCVirtual ? true : false}>DC & CI Cards and Posters</option>
            </select>

            { showDashboard &&
                <Dashboard />
            }

            { showDCAP &&
                    <DCAP hide1={hide1} setHide1={setHide1} hide2={hide2} setHide2={setHide2} hide3={hide3} setHide3={setHide3} 
                        toggleSavedModal={toggleSavedModal} setToggleSavedModal={setToggleSavedModal} 
                        printing={printing} setPrinting={setPrinting} />
            }

            { showDCQuestioning &&
                <DCQuestioning openSaveAs={openSaveAs} setOpenSaveAs={setOpenSaveAs} 
                    openSaved={openSaved} setOpenSaved={setOpenSaved} setSaveFileName={setSaveFileName} 
                    saveFileName={saveFileName} toggleSavedModal={toggleSavedModal} 
                    setToggleSavedModal={setToggleSavedModal} printing={printing} setPrinting={setPrinting} 
                    handleOpenSaveAsShow={handleOpenSaveAsShow} />
            }

            { showDCQ3Cards &&
                <DCQ3Cards soundOn={soundOn} setSoundOn={setSoundOn} />
            }

            { showDCVirtual &&
                <DCVirtual />
            }

        </div>
    )
};

export default App;