import React, { Component } from 'react';
class pizzaForms extends Component {

  constructor(props){
    super(props);
    this.sabor_list = props.saborList
}

    id;
    sabor;
    valor;
   
    handlerInputId(event){
        this.id = event.target.value;
        event.stopPropagation();
        
    }
    handlerSelectSabor(event){
        this.sabor = event.target.value;
        event.stopPropagation();
        
    }
    handlerInputValor(event){
        this.valor = event.target.value;
        event.stopPropagation();
       
    }
    handlerSalvar(event){
        let pizza = {"id":this.id, "valor":this.valor, "sabor":this.sabor}
        event.stopPropagation();
        event.preventDefault();
        this.props.create(pizza);
    }
      
    render() { 
        return (
          <section>
            <form onSubmit={this.handlerSalvar.bind(this)}>
              <label>Id: </label>
              <input
                type="text"
                id="id"
                name="id"
                onChange={this.handlerInputId.bind(this)}
              />
              <br />
              <label>valor: </label>
              <input
                type="text"
                id="valor"
                onChange={this.handlerInputValor.bind(this)}
              />
              <br />
              <label>sabor: </label>
              <select 
                defaultValue="-1"
                onClickCapture={this.handlerSelectSabor.bind(this)}
                name="sabor"
                id="sabor"

                >
                <option value="-1" disabled="disable">Selecione Um Sabor</option>
                {this.sabor_list.map((s, i) => (
                  <option key={i} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <br />
              <input type="submit" value="salvar" />
            </form>
          </section>
        );
    }
}
 
export default pizzaForms;