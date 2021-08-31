import React, {Component } from 'react';
import { ReactComponent as Delete } from '../../assets/del.svg';
class PizzaTables extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.lista_pizza = props.list;

  }
  handlerDelete(id, event){
    event.stopPropagation();
    event.preventDefault();
    this.props.delete(id);
  }
  render() {
    return (
      <section>
      <table id="pizza-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Sabor</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {this.lista_pizza.map((c, i) => {
            return (
              <tr key={i}>
                <td>{c.id}</td>
                <td>{c.sabor}</td>
                <td>{c.valor}</td>
                <td><Delete title="deletar item" onClick={this.handlerDelete.bind(this, c.id)}/></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </section>
    );
  }
}
 
export default PizzaTables;

