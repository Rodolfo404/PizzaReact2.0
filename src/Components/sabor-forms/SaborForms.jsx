import React, { Component } from 'react';
class SaborForms extends Component {
    
    sabor;

       
    handlerEnter(event){
        if(event.keyCode === 13){
            this.sabor = event.target.value;
            console.log(this.sabor);
            event.stopPropagation();
            event.preventDefault();
            this.props.createSabor(this.sabor);
        }
    }

    render() { 
        return (
            <section>
                <form>
                    <input
                    type="text"
                    id="sabor"
                    placeholder="Cadastre o sabor"
                    onKeyDown={this.handlerEnter.bind(this)}
                    />
                </form>
            </section>
          );
    }
}
export default SaborForms;
