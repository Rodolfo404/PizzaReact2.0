import React, { Component } from 'react';
import { ReactComponent as Delete } from '../../assets/del.svg';
class SaborTable extends Component {
    
    constructor(props){
        super(props);
        this.sabor_list = props.saborList

    }
    
    render() { 
        return (
          <section>
            <table>
              <thead>
                <tr>
                  <th>Cadastre o sabor da pizza</th>
                </tr>
              </thead>
              <tbody>
                {this.sabor_list.map((s, i) => (
                  <tr key={i}>
                    <td>{s}</td>
                    </tr>

                ))}
              </tbody>
            </table>
          </section>
        );
    }
}
 
export default SaborTable;