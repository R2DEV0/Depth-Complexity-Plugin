import React, {useState} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Animated} from "react-animated-css";

const SideOptions = (props) => {
    const {compare, setCompare, custom, handleCustomShow, customDisc, handleCustomDisc} = props;
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return(
        <div data-html2canvas-ignore="true">
            <Animated animationIn="fadeInLeft" animationInDuration={800} isVisible={true}>

                {/* checkbox for allowing full customization */}
                <button className={custom ? 'btn btn-sm btn-dark col-12 mt-2' : 'btn btn-sm btn-outline-dark oneQ col-12 mt-2'} name="custom" id="custom" onClick={handleCustomShow}> Custom </button>

                {/* checkbox for showing only compare & Contrash Questions */}
                <button className={compare ? 'btn btn-sm btn-dark col-12 mt-2' : 'btn btn-sm btn-outline-dark oneQ col-12 mt-2'} disabled={custom ? true : false} name="compare" id="compare" onClick={() => setCompare(!compare)}> {compare ? "Two Topics" : "Single Topic"} </button>

                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} style={{width: '100%'}}>
                    <DropdownToggle caret className = 'mt-2 customDiscBtn' size='sm' color='outline-dark' disabled={custom ? true : false}>
                        {customDisc}
                    </DropdownToggle>
                    <DropdownMenu className='discDropdown'>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='an anthropologist'>an anthropologist</DropdownItem>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='a philosopher'>a philosopher</DropdownItem>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='a historian'>a historian</DropdownItem>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='a sociologist'>a sociologist</DropdownItem>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='a political scientist'>a political scientist</DropdownItem>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='an author'>an author</DropdownItem>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='an editor'>an editor</DropdownItem>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='a journalist'>a journalist</DropdownItem>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='a poet'>a poet</DropdownItem>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='a linguist'>a linguist</DropdownItem>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='an economist'>an economist</DropdownItem>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='a mathematician'>a mathematician</DropdownItem>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='a computer scientist'>a computer scientist</DropdownItem>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='an astronomer'>an astronomer</DropdownItem>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='an archaeologist'>an archaeologist</DropdownItem>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='a geographer'>a geographer</DropdownItem>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='a geologist'>a geologist</DropdownItem>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='a marine biologist'>a marine biologist</DropdownItem>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='a paleontologist'>a paleontologist</DropdownItem>
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='a physicist'>a physicist</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={(e) => handleCustomDisc(e)} value='Set Disciplinarian'>Randomize</DropdownItem>
                        <DropdownItem divider />
                        <form className='form-group'>
                            <input type="text" name="enterOwnDisc" onChange={(e) => handleCustomDisc(e)} placeholder='Enter Your Own' id="enterOwnDisc" className='form-control'/>
                            <DropdownItem className='col-sm-12 btn btn-default text-center' type='submit' id='submitDisc'>Submit</DropdownItem>
                        </form>
                    </DropdownMenu>
                </ButtonDropdown>
            </Animated>
        </div>
    )
};

export default SideOptions;