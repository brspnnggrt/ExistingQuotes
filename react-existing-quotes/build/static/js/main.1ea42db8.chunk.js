(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{273:function(t,e,n){t.exports=n.p+"static/media/logo.06e73328.svg"},281:function(t,e,n){t.exports=n(347)},286:function(t,e,n){},287:function(t,e,n){},347:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(14),r=n.n(i),s=(n(286),n(237)),u=n(270),c=n(271),d=n(277),l=n(272),p=n(278),m=n(273),f=n.n(m),g=(n(287),n(274)),I=n.n(g),b=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(d.a)(this,Object(l.a)(e).call(this,t))).requestUpdate=function(){window.parent.postMessage({iframe:"react-existing-quotes",taskId:"react-existing-quotes-query",query:[{api:"quoteList",function:"getInitData",arguments:[{tabId:"0"}]},{api:"quoteList",function:"getData",arguments:[{Columns:["SYSTEM_QUOTATION_NUMBER","CUSTOMER_COMPANY","USER_NAME","DATE_CREATED","cf_Terms","REVISION_ID","cf_QuoteExpirationDate","TOTALAMOUNT","Status"],Skip:0,Take:11,OrderBy:["id","desc"],UsePaging:!0,LoadDelegatedApproversQuotes:!1,TabId:1}]}],response:[],status:"request"},"https://sandbox.webcomcpq.com/")},n.update=function(t){var e=t.data.response.find(function(t){return"quoteList"===t.api&&"getInitData"===t.function}),a=t.data.response.find(function(t){return"quoteList"===t.api&&"getData"===t.function}),o=e.data.VisibilityRules,i=a.data.Rows,r=o.length?o.map(function(t){return{title:t.vrLabel,field:t.vrColumnName}}):n.state.columns,u=i.length?i.map(function(t){var e=Object.entries(t.Data).filter(function(t){var e=Object(s.a)(t,2),n=e[0];return e[1],r.map(function(t){return t.field}).includes(n)}).map(function(t){var e=Object(s.a)(t,2);return[e[0],e[1].Value]});return e.push(["cryptedOwnerId",t.CryptedOwnerId]),e.push(["cryptedCartId",t.CryptedQuoteId]),e.push(["approverId",t.ApproverId]),Object.fromEntries(e)}):n.state.data;n.setState({loading:!1,columns:r,data:u})},n.state={loading:!0,columns:[{title:"Ad\u0131",field:"name"},{title:"Soyad\u0131",field:"surname"},{title:"Do\u011fum Y\u0131l\u0131",field:"birthYear",type:"numeric"},{title:"Do\u011fum Yeri",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63}]},n.onMessageReceivedOld=function(t){console.log(t.data),n.setState({loading:!1,columns:t.data.columns.length?t.data.columns.map(function(t){return{title:t.title,field:t.name}}):n.state.columns,data:t.data.rows.length?t.data.rows.map(function(t){var e=t.cells.slice(1).map(function(t){return t.columnName}),n=t.cells.slice(1).map(function(t){return t.value});return Object.fromEntries(e.map(function(t,a){return[e[a],n[a]]}))}):n.state.data})},n.onMessageReceived=function(t){console.log(t.data),"react-existing-quotes-query"===t.data.taskId&&n.update(t),"react-existing-quotes-executeaction"===t.data.taskId&&n.requestUpdate()},n.runAction=function(t,e){window.parent.postMessage({iframe:"react-existing-quotes",taskId:"react-existing-quotes-executeaction",query:[{api:"quoteList",function:"executeAction",arguments:[{actionId:t,cryptedOwnerId:e.cryptedOwnerId,cryptedCartId:e.cryptedCartId,approverId:e.approverId}]}],response:[],status:"request"},"https://sandbox.webcomcpq.com/")},window.addEventListener("message",n.onMessageReceived,!1),n.requestUpdate(),n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"})),o.a.createElement(I.a,{columns:this.state.columns,data:this.state.data,title:"Existing Quotes",actions:[{icon:"delete",tooltip:"Delete quote",onClick:function(e,n){return t.runAction(2,n)}},{icon:"content_copy",tooltip:"Copy quote",onClick:function(e,n){return t.runAction(4,n)}}]}))}}]),e}(a.Component),h=function(t){t&&t instanceof Function&&n.e(6).then(n.bind(null,727)).then(function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),o(t),i(t),r(t)})};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),h()}},[[281,1,3]]]);
//# sourceMappingURL=main.1ea42db8.chunk.js.map