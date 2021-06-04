import logo from './logo.svg';
import './App.css';

import React, { Component }  from 'react';
import MaterialTable from 'material-table';

/*

Usage: 
<iframe id='react-existing-quotes' src="https://brspnnggrt.github.io/ExistingQuotes/react-existing-quotes/build/" style="width: 100%; border: 0px; height: 700px;"></iframe>
<script src='https://brspnnggrt.github.io/ExistingQuotes/react-existing-quotes/build/jsom.js'></script>

*/

class App extends Component 
{

    constructor(props)
    {
        super(props);
        const id = 'react-existing-quotes';
        this.state = {
            loading: true,
            id: id,
            taskIdRequestData: `${id}-requestData`,
            taskIdRunAction: `${id}-runAction`,
            columns: [],
            data: [],
            featureFlag: {'CopyQuote' : 0}
        };
        window.addEventListener("message", this.onMessageReceived, false);
        this.requestData();
    }

    onMessageReceived = event => 
    {
        if (event.data.taskId === this.state.taskIdRequestData) this.update(event);
        if (event.data.taskId === this.state.taskIdRunAction) this.requestData();
    };

    requestData = () => 
    {
        window.parent.postMessage({
            iframe: this.state.id,
            taskId: this.state.taskIdRequestData,
            query: [{
                api: '/api/rd/v1/QuoteList',
                function: 'getInitData',
                arguments: [{
                    'tabId': '0'
                }]
            },{
                api: '/api/rd/v1/QuoteList',
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
            },{
                api: '/CustomAPI',
                function: 'ExecuteScript',
                arguments: [ 'FeatureFlag', { Features: ['CopyQuote']} ]
            }],
            response: [],
            status: 'request'
        }, "https://sandbox.webcomcpq.com/");
    };

    runAction = (actionId, rowData) => 
    {
        window.parent.postMessage({
            iframe: this.state.id,
            taskId: this.state.taskIdRunAction,
            query: [{
                api: '/api/rd/v1/QuoteList',
                function: 'executeAction',
                arguments: [{
                    actionId: actionId,
                    cryptedOwnerId: rowData.cryptedOwnerId,
                    cryptedCartId: rowData.cryptedCartId,
                    approverId: rowData.approverId
                }]
            }],
            response: [],
            status: 'request'
        }, "https://sandbox.webcomcpq.com/");
    };

    update = event => 
    {
        // prepare data
        let getInitData = event.data.response.find(r => r.api === '/api/rd/v1/QuoteList' && r.function === 'getInitData');
        let getData = event.data.response.find(r => r.api === '/api/rd/v1/QuoteList' && r.function === 'getData');
        let featureFlagData = event.data.response.find(r => r.api === '/CustomAPI' && r.function === 'ExecuteScript');
        let visibleColumns = getInitData.data.VisibilityRules;
        let rows = getData.data.Rows;
        let featureFlag = featureFlagData.data;

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
            data: newData,
            featureFlag: featureFlag
        });
    };

    render() 
    {
        let actions = [{ icon: "delete", tooltip: "Delete quote", onClick: (event, rowData) => this.runAction(2, rowData) }];
        
        if (this.state.featureFlag.CopyQuote == 1)
            actions.push({ icon: "content_copy", tooltip: "Copy quote", onClick: (event, rowData) => this.runAction(4, rowData) });

        return (
            <div className="App">
                <header className="n-8 App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <MaterialTable
                    onChangeRowsPerPage
                    columns={this.state.columns}
                    data={this.state.data}
                    title="Existing Quotes"
                    actions={actions}
                />
            </div>
        );
    }
}

export default App;
