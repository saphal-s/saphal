import React, { useState } from 'react';
import { Drawer } from 'antd';
import './header.css'

function Drawers() {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <div className='dws'>
            <div className="drawer-icon">
                <i onClick={showDrawer} className="far fa-bars"></i>
            </div>
            <Drawer placement="left" onClose={onClose} visible={visible}>
                <ul className='drawers'>
                    <li className='header-option header-option-seperator'><a href="# "><span>Home</span></a></li>
                    <li className='header-option header-option-seperator'><a href="#about" onClick={onClose}><span>About Me</span></a></li>
                    <li className='header-option header-option-seperator'><a href="#resume" onClick={onClose}><span>Resume</span></a></li>
                    <li className='header-option header-option-seperator'><a href="#contact" onClick={onClose}><span>Contact Me</span></a></li>
                </ul>
            </Drawer>
        </div>
    )
}

export default Drawers