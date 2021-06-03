import React, {Component} from 'react';
import './css/Productos.css';
export class Productos extends Component{
  state ={
    data: []
  }
  async componentDidMount(){
    await this.fetchProductos()
  }
  fetchProductos = async () =>{
    let url = await fetch('https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products')
    let data = await url.json()
    this.setState({data})
    
  }
    render(){
        return(
          <div className="body">
            <h1>Mais Vendidos</h1>
            <div className="separadora"></div>
             <p>{this.state.data.id}</p>
          </div>
        )
    }
}
export default Productos