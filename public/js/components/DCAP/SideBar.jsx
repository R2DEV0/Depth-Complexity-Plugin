import React from 'react';
import ReactTooltip from "react-tooltip";

const SideBar = (props) => {
    const{HoverIn, HoverOut, chosen, setChosen, addThink, addImperatives, imps, thinkPro, productHandler, resourceHandler, custom, triggerCustomize} = props;

    // display and highlight the subject the user clicks on //
    const test = [' ELA ',' MATH ',' SS ',' SCI ', ' OTHER '];
    const Subject = ({ active, count, onClick }) => {
        return (
            <div onClick={onClick} className={active ? "subject active text-center" : "subject text-center"} 
                onMouseEnter={(e)=>HoverIn(e.target.style.textShadow="0 0 1px grey")} onMouseLeave={(e)=>HoverOut(e.target.style.textShadow="none")}>
                {count}
                {active}
            </div>
        );
    };

    return(
        <div className='col-lg-2 ml-3 ml-0 sideArea'>
            <div className='col-lg-12 col-md-12 mt-4 sideDiv'>

                <label className='subjectTitle'> Subject: </label>
                <div className="text-center subjectBox col-12">
                    {test.map(t => (<Subject key={t} count={t} active={t === chosen} onClick={() => setChosen(t)} />))}
                    <i className="bi-info-circle notesHelp" data-tip data-for='subjectHelp'></i>
                </div>

                <ReactTooltip id='subjectHelp' place="right" type='dark' effect="solid">
                    <span>
                        &bull; Selecting a subject will help determine what icon/word combinations show up within the sentence(s)
                    </span>
                </ReactTooltip>

                <div className='mt-4 row checkboxes'>
                    {custom ?
                        <>
                            <label className='subjectTitle col-12'>Add-ons: &nbsp; <i className="bi-info-circle addOnHelp" data-tip data-for='addOnHelp'></i></label>
                            <button className='col-lg-12 btn btn-sm btn-outline-secondary side' disabled>Use Content Imperatives</button>
                            <button className='col-lg-12 btn btn-sm btn-outline-secondary mt-2 side' disabled>Think Like a Disciplinarian</button>
                            <input type="text" className="col-lg-12 form-control-sm text-center mt-2 side-text custom" disabled placeholder="Custom Resource" defaultValue=''/>
                            <input type="text" className="col-lg-12 form-control-sm text-center mt-2 side-text custom" disabled placeholder="Custom Product" defaultValue=''/>
                        </>
                    :
                        <>
                            <label className='subjectTitle col-12'>Add-ons: &nbsp; <i className="bi-info-circle addOnHelp" data-tip data-for='addOnHelp'></i></label>
                            <button className={imps ? 'col-lg-12 btn btn-sm btn-warning side' : 'col-lg-12 btn btn-sm btn-outline-secondary side'} onClick={addImperatives}>Use Content Imperatives</button>
                            <button className={thinkPro ? 'col-lg-12 btn btn-sm btn-warning mt-2 side' : 'col-lg-12 btn btn-sm btn-outline-secondary mt-2 side'} onClick={addThink}>Think Like a Disciplinarian</button>
                            <input type="text" className="col-lg-12 form-control-sm text-center mt-2 side-text custom" placeholder="Custom Resource" defaultValue='' onChange={(e) => {resourceHandler(e)}} onClick={(e) => {e.target.value = ''; resourceHandler(e);}}/>
                            <input type="text" className="col-lg-12 form-control-sm text-center mt-2 side-text custom" placeholder="Custom Product" defaultValue='' onChange={(e) => {productHandler(e)}} onClick={(e) => {e.target.value = ''; productHandler(e);}}/>
                        </>
                    }                
                    <button className={custom ? 'col-lg-12 btn btn-sm btn-warning mt-2 side' : 'col-lg-12 btn btn-sm btn-outline-secondary mt-2 side'} onClick={triggerCustomize}>Customize</button>
                </div>

                <ReactTooltip id='addOnHelp' place="right" type='dark' effect="solid" textColor='#ffffff' style={{opacity: '100%'}}>
                    <div>
                        <h3 className='text-center'>Add-on Help</h3>
                        <p> &bull; Selecting 'Use Content Imperatives' will add content imperative icons to the randomized icons generated within the sentence(s)</p>
                        <p> &bull; Selecting 'Think Like a Disciplinarian' will add randomized disciplinarians to the sentence(s) (These can be manually changed if needed)</p>
                        <p> &bull; Typing any content inside the 'Custom Resource' will populate the resource fields within the sentence(s)</p>
                        <p> &bull; Typing any content inside the 'Custom Product' will populate the product fields within the sentence(s)</p>
                        <p> &bull; *Note: When anything is typed in either of these textboxes, the Resource and/or Product fields will not be randomly populated <br/>
                            &nbsp; Click on the 'Custom Resource/Product' textbox again to reset & the fields will be randomized again </p>
                        <p> &bull; Selecting 'Customize' will allow for full customization of all wording and icons in the sentence statement <br/>
                            &nbsp; Click the 'Customize' button again to exit custom mode </p>
                    </div>
                </ReactTooltip>

                <label className="CCRS mt-4">Unit/Teaching Notes:</label>
                <section id="textarea" className='textbox' contentEditable={true} suppressContentEditableWarning={true}>
                    <ul className='textlist'>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <i className="bi-info-circle notesHelp" data-tip data-for='notesHelp' contentEditable={false}></i>
                </section>   
            </div>

            <ReactTooltip id='notesHelp' place="right" type='dark' effect="solid">
                <span>
                    &bull; This section is for any teaching/unit notes for presentation purposes
                </span>
            </ReactTooltip>

        </div>
    );
};

export default SideBar;