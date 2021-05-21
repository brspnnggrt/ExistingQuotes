import logo from './logo.svg';
import './App.css';

import React, { Component }  from 'react';
import MaterialTable from 'material-table'
// import { v4 as uuidv4 } from 'uuid';

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
            columns: [
                { title: 'Adı', field: 'name' },
                { title: 'Soyadı', field: 'surname' },
                { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
                { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
            ],
            data: [{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]
        };
        this.onMessageReceivedOld = event => { /* quote 1.0 cartlist */
            console.log(event.data);
            this.setState({
                loading: false,
                columns: event.data.columns.length ? event.data.columns.map(col => { return { title: col.title, field: col.name }; }) : this.state.columns,
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

            if (event.data.taskId === 'react-existing-quotes-query') this.update(event);
        };
        this.runAction = (actionId, rowData) => {
            window.parent.postMessage({
                iframe: 'react-existing-quotes',
                taskId: 'react-existing-quotes-executeaction',
                queries: [{
                    api: 'quoteList',
                    function: 'executeAction',
                    arguments: [{
                        actionId: actionId,
                        cryptedOwnerId: rowData.cryptedOwnerId,
                        cryptedCartId: rowData.cryptedCartId,
                        approverId: rowData.approverId
                    }]
                }],
                data: [],
                status: 'request'
            }, "https://sandbox.webcomcpq.com/");
        };
        window.addEventListener("message", this.onMessageReceived, false);
        window.parent.postMessage({
            iframe: 'react-existing-quotes',
            taskId: 'react-existing-quotes-query',
            queries: [{
                api: 'quoteList',
                function: 'getInitData',
                arguments: [{
                    'tabId': '0'
                }]
            },{
                api: 'quoteList',
                function: 'getData',
                arguments: [{
                    'Columns': ['SYSTEM_QUOTATION_NUMBER', 'CUSTOMER_COMPANY', 'USER_NAME', 'DATE_CREATED', 'cf_Terms',
                                'REVISION_ID', 'cf_QuoteExpirationDate', 'TOTALAMOUNT', 'Status'],
                    'Skip': 0,
                    'Take': 11,
                    'OrderBy': ['id', 'desc'],
                    'UsePaging': true,
                    'LoadDelegatedApproversQuotes': false,
                    'TabId': 1
                }]
            }],
            data: [],
            status: 'request'
        }, "https://sandbox.webcomcpq.com/");
    }

    update = (event) => {
        // prepare data
        let getInitData = event.data.response.find(r => r.api === 'quoteList' && r.function === 'getInitData');
        let getData = event.data.response.find(r => r.api === 'quoteList' && r.function === 'getData');
        let visibleColumns = getInitData.data.VisibilityRules;
        let rows = getData.data.Rows;

        // transform data
        let mapColumns = c => c.map(col => { return { title: col.vrLabel, field: col.vrColumnName }; });
        let newColumns = visibleColumns.length ? mapColumns(visibleColumns) : this.state.columns;
        let mapRowsToData = r => r.map(row => {
            let filteredEntries = Object.entries(row.Data).filter(([k, v]) => newColumns.map(nc => nc.field).includes(k));
            let mappedEntries = filteredEntries.map(([k, v]) => [k, v.Value]);
            mappedEntries.push(['cryptedOwnerId', row.CryptedOwnerId]);
            mappedEntries.push(['cryptedCartId', row.CryptedQuoteId]);
            mappedEntries.push(['approverId', row.ApproverId]);
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
                    actions={[{ icon: "delete", tooltip: "Delete quote", onClick: (event, rowData) => this.runAction(2, rowData) },
                    { icon: "content_copy", tooltip: "Copy quote", onClick: (event, rowData) => this.runAction(4, rowData) }]}
                />
            </div>
        );
    }
}

export default App;
