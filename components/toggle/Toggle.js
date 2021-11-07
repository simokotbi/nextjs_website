import React from 'react';
import PropTypes from 'prop-types';
import {HiMoon} from 'react-icons/hi';
import {CgSun} from 'react-icons/cg';
import {Togglebtn,Btncontainer} from './ToggleStyles';
const Toggle=({theme,toggletheme})=>{

const icon=theme==='light'?<HiMoon size={40}/>:<CgSun size={40}/>
    return(
        <Btncontainer>
        <Togglebtn onClick={toggletheme}>
            {icon}
        </Togglebtn>
        </Btncontainer>
    );
};
Toggle.propTypes ={
theme: PropTypes.string,
toggletheme:PropTypes.func,
}
export default Toggle;