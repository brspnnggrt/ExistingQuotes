import logo from './logo.svg';
import './App.css';

import { Component } from 'react'
import MaterialTable from 'material-table'

// Get data from CPQ using iframe.contentWindow.postMessage(ko.toJSON(cpq.models.cartList.mainGrid), "https://brspnnggrt.github.io/")

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      // default columns & row data
      columns: [
        { title: 'Adı', field: 'name' },
        { title: 'Soyadı', field: 'surname' },
        { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
        { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
      ],
      data: [{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }],
    };
    this.onMessageReceived = event => {
      if (!event.data.source) {
        console.log(event.data);
        this.setState({
          loading: false,
          columns: event.data.columns.map(col => { return { title: col.title, field: col.name}; }),
          data: event.data.rows.map(row => { 
            let keys = row.cells.slice(1).map(t => t.columnName);
            let values = row.cells.slice(1).map(t => t.value);
            let data = Object.fromEntries(keys.map((_, i) => [keys[i], values[i]]));
            return data;
          })
        });
      }
    };
    window.addEventListener("message", this.onMessageReceived, false);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <MaterialTable
            columns={this.state.columns}
            data={this.state.data}
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
