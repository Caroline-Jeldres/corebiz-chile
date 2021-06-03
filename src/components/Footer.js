import React, {Component} from 'react';
import Mail from '../statics/mail.png'
import Audio from '../statics/heatset.png'
import Logo1 from '../statics/logo_alt.png'
import Logo2 from '../statics/vtex.png'
import './css/Footer.css';
export class Footer extends Component{
    render(){
        return(
            <div className="footer">
               <div className="location">
                   <span>Localizacao</span>
                   <div className="separador"></div>
                   <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
                   <p>Alphavile SP</p>
                   <p>brasil@corebiz.ag</p>
                   <p>+55 11 30901039</p>
               </div>
               <div className="contacto">
                   <div>
                       <div>
                          <img src={Mail} alt=""/>
                       </div>
                       
                       <span>ENTRE EM CONTATO </span>
                   </div>
                   <div>
                       <div>
                            <img src={Audio} alt=""/>
                       </div>
                       
                       <span className="spandiv">FALE COM O NOSSO <br/>
                       CONSULTOR ONLINE </span>
                       <span></span>
                   </div>
               </div>
               <div className="logos">
                   <div>
                       <span>Created by</span>
                       <img src={Logo1} alt=""/>
                   </div>
                   <div>
                   <span>Powered by</span>
                       <img src={Logo2} alt=""/>
                   </div>
               </div>
           </div>
        )
    }
}
export default Footer