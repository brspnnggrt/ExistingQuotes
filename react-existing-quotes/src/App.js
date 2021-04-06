import logo from './logo.svg';
import './App.css';

import { Component } from 'react'
import MaterialTable from 'material-table'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <MaterialTable
            columns={[
              { title: 'Adı', field: 'name' },
              { title: 'Soyadı', field: 'surname' },
              { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
              { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
            ]}
            data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
            title="Demo Title"
            actions={[
              {
                icon: 'save',
                tooltip: 'Save User',
                onClick: (event, rowData) => {
                  // Do save operation
                }
              }
            ]}
          />
      </div>
    );
  }
}

export default App;
