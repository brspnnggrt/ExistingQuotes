import logo from './logo.svg';
import './App.css';

import { Component } from 'react'
import MaterialTable from 'material-table'

// Get data from CPQ using iframe.contentWindow.postMessage(JSON.parse(ko.toJSON(cpq.models.cartList.mainGrid)), "https://brspnnggrt.github.io/")

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      source: null,
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
      if (event.data.identifier === "react-existing-quotes") {
        console.log(event.data);
        this.setState({
          source: event.source,
          loading: false,
          columns: event.data.columns.length ? event.data.columns.map(col => { return { title: col.title, field: col.name}; }) : this.state.columns,
          data: event.data.rows.length ? event.data.rows.map(row => { 
            let keys = row.cells.slice(1).map(t => t.columnName);
            let values = row.cells.slice(1).map(t => t.value);
            let data = Object.fromEntries(keys.map((_, i) => [keys[i], values[i]]));
            return data;
          }) : this.state.data
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
            title="Existing Quotes"
            actions={[
              {
                icon: "Delete",
                tooltip: "Delete the quote",
                onClick: (event, rowData) => {
                  this.state.source.postMessage({
                    "execute": `cpq.models.cartList.mainGrid.rows()[${this.state.data.indexOf(rowData)}].actions()[1].activate`,
                    "identifier": "react-existing-quotes-execute"
                  });
                }
              }
            ]}
          />
      </div>
    );
  }
}

export default App;
