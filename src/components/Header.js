import React, {Component} from 'react';
import Logo from '../statics/logo.png';
import Lupa from '../statics/lupa.png'
import Cuenta from '../statics/account.png'
import './css/Header.css';
export class Header extends Component{
    render(){
        return(
            <header>
                <div className="menu">
                    <div className="logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <div className="div-search">
                        <input type="text" placeholder="O que está procurando?" />
                        <img src={Lupa} alt=""/>
                    </div>
                    <div className="user">
                        <img src={Cuenta} alt=""/>
                        <span> Minha Conta</span>
                    </div>

                </div>
            </header>
        )
    }
}
export default Header 