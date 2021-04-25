import React from "react";
import Principal from '../img/coordinadora-principal.png'
import '../App.css';

const Header = ()=>{
    const h= new Date();
    const m= new Date();
    const s= new Date();


    return (
        <div>
            <img src={Principal} alt="Principal" className="imagen-principal"  />
            <div className="principal">
                <div className="texto-principal">
                    All systems operational {'     '}
                </div>
                <div className="texto">                    
                    Refreshes {'  '} {(h.getHours())} : {'  '}  {(m.getMinutes())} : {'  '} {(s.getSeconds())} {' '} UTC-0400
                    
                </div>
            </div>
        </div>
    )
}

export default Header;
