import logo from './logo.svg';
import './App.css';

import { Component } from 'react'
import MaterialTable from 'material-table'

/*


<iframe src="https://brspnnggrt.github.io/ExistingQuotes/react-existing-quotes/build/index.html" onload="initializeFrame()"></iframe>

<script>

initializeFrame = () => {

  let data = JSON.parse(ko.toJSON(cpq.models.cartList.mainGrid));
  iframe.contentWindow.postMessage(data, "https://brspnnggrt.github.io/");
  window.addEventListener("message", m => eval(m.data["execute"] + "()"));

}

</script>

*/

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
    this.onMessageReceivedOld = event => { /* quote 1.0 cartlist */
      console.log(event.data);
      this.setState({
        loading: false,
        columns: event.data.columns.length ? event.data.columns.map(col => { return { title: col.title, field: col.name}; }) : this.state.columns,
        data: event.data.rows.length ? event.data.rows.map(row => { 
          let keys = row.cells.slice(1).map(t => t.columnName);
          let values = row.cells.slice(1).map(t => t.value);
          let data = Object.fromEntries(keys.map((_, i) => [keys[i], values[i]]));
          return data;
        }) : this.state.data
      });
    };
    this.onMessageReceived = event => { /* quote 2.0 quotelist */
      console.log(event.data);

      // prepare data
      let visibleColumns = event.data.initData.VisibilityRules;
      let rows = event.data.data.Rows;
      
      // transform functions
      let mapColumns = c => c.map(col => { return { title: col.vrLabel, field: col.vrColumnName }; });
      let newColumns = visibleColumns.length ? mapColumns(visibleColumns): this.state.columns;
      let mapRowsToData = r => r.map(row => { 
        let filteredEntries = Object.entries(row.Data).filter(([k,v]) => newColumns.map(nc => nc.field).includes(k));
        let mappedEntries = filteredEntries.map(([k,v]) => [k, v.Value]);
        return Object.fromEntries(mappedEntries);
      });
      let newData = rows.length ? mapRowsToData(rows) : this.state.data;

      // update state if data available
      this.setState({
        loading: false,
        columns: newColumns,
        data: newData
      });
    };
    this.runAction = (target, action) => {
      let index = target.closest("tr").attributes["index"].value;
      window.parent.postMessage({
        "execute": `cpq.models.cartList.mainGrid.rows()[${index}].actions().find(a => a.name == "${action}").activate`,
        "identifier": "react-existing-quotes-execute"
      }, "https://sandbox.webcomcpq.com/");
    };
    this.onDelete = event => {
      this.runAction(event.target, "Delete");
    };
    this.onCopy = event => {
      this.runAction(event.target, "Copy");
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
            actions={[{ icon: "delete", tooltip: "Delete quote", onClick: this.onDelete.bind(this) },
                      { icon: "content_copy", tooltip: "Copy quote", onClick: this.onCopy.bind(this) }]}
          />
      </div>
    );
  }
}

export default App;
