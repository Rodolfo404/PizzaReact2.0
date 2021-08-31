import  { Component } from 'react';
import PizzaForms from './Components/pizza-forms/PizzaForms';
import PizzaTables from './Components/pizza-tables/PizzaTables';
import SaborTable from './Components/sabor-table/SaborTable';
import SaborForms from './Components/sabor-forms/SaborForms'; 





class App extends Component {
   list = [];
   saborList = [];

   constructor(){
     super();
     this.state = {
       list : this.list,
       saborList : this.saborList
     }
  }
  create(model){
    this.list.push(model);
    this.setState({
      list : this.list
    })
  }
  createSabor(model){
    this.saborList.push(model);
    this.setState({
     saborList : this.saborList
    })
    console.log(this.saborList)
  }

  delete(id){
    this.list.splice(this.list.find((p) => p.id === id),1);
    this.setState({list : this.list})
  }
  render(){
    return (
      <section>
        <h1>Pizzas</h1>
        <PizzaForms create = {this.create.bind(this)} saborList = {this.state.saborList} />
        <PizzaTables list = {this.state.list} delete ={this.delete.bind(this)}/>
        <SaborForms createSabor = {this.createSabor.bind(this)} />
        <SaborTable saborList = {this.state.saborList}/>
        </section>
    );
  }
}

export default App;
