(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{273:function(t,e,a){t.exports=a.p+"static/media/logo.06e73328.svg"},281:function(t,e,a){t.exports=a(347)},286:function(t,e,a){},287:function(t,e,a){},347:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),s=a(14),r=a.n(s),i=(a(286),a(237)),c=a(270),u=a(271),d=a(277),p=a(272),l=a(278),f=a(273),m=a.n(f),g=(a(287),a(274)),I=a.n(g),v=function(t){function e(t){var a;Object(c.a)(this,e),(a=Object(d.a)(this,Object(p.a)(e).call(this,t))).onMessageReceived=function(t){t.data.taskId===a.state.taskIdRequestData&&a.update(t),t.data.taskId===a.state.taskIdRunAction&&a.requestUpdate()},a.requestData=function(){window.parent.postMessage({iframe:a.state.id,taskId:a.state.taskIdRequestData,query:[{api:"quoteList",function:"getInitData",arguments:[{tabId:"0"}]},{api:"quoteList",function:"getData",arguments:[{Columns:["SYSTEM_QUOTATION_NUMBER","CUSTOMER_COMPANY","USER_NAME","DATE_CREATED","cf_Terms","REVISION_ID","cf_QuoteExpirationDate","TOTALAMOUNT","Status"],Skip:0,Take:11,OrderBy:["id","desc"],UsePaging:!0,LoadDelegatedApproversQuotes:!1,TabId:1}]}],response:[],status:"request"},"https://sandbox.webcomcpq.com/")},a.runAction=function(t,e){window.parent.postMessage({iframe:a.state.id,taskId:a.state.taskIdRunAction,query:[{api:"quoteList",function:"executeAction",arguments:[{actionId:t,cryptedOwnerId:e.cryptedOwnerId,cryptedCartId:e.cryptedCartId,approverId:e.approverId}]}],response:[],status:"request"},"https://sandbox.webcomcpq.com/")},a.update=function(t){var e=t.data.response.find(function(t){return"quoteList"===t.api&&"getInitData"===t.function}),n=t.data.response.find(function(t){return"quoteList"===t.api&&"getData"===t.function}),o=e.data.VisibilityRules,s=n.data.Rows,r=o.length?o.map(function(t){return{title:t.vrLabel,field:t.vrColumnName}}):a.state.columns,c=s.length?s.map(function(t){var e=Object.entries(t.Data).filter(function(t){var e=Object(i.a)(t,2),a=e[0];return e[1],r.map(function(t){return t.field}).includes(a)}).map(function(t){var e=Object(i.a)(t,2);return[e[0],e[1].Value]});return e.push(["cryptedOwnerId",t.CryptedOwnerId]),e.push(["cryptedCartId",t.CryptedQuoteId]),e.push(["approverId",t.ApproverId]),Object.fromEntries(e)}):a.state.data;a.setState({loading:!1,columns:r,data:c})};var n="react-existing-quotes";return a.state={loading:!0,id:n,taskIdRequestData:"".concat(n,"-requestData"),taskIdRunAction:"".concat(n,"-runAction"),columns:[],data:[]},window.addEventListener("message",a.onMessageReceived,!1),a.requestData(),a}return Object(l.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"})),o.a.createElement(I.a,{onChangeRowsPerPage:!0,columns:this.state.columns,data:this.state.data,title:"Existing Quotes",actions:[{icon:"delete",tooltip:"Delete quote",onClick:function(e,a){return t.runAction(2,a)}},{icon:"content_copy",tooltip:"Copy quote",onClick:function(e,a){return t.runAction(4,a)}}]}))}}]),e}(n.Component),q=function(t){t&&t instanceof Function&&a.e(6).then(a.bind(null,727)).then(function(e){var a=e.getCLS,n=e.getFID,o=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),n(t),o(t),s(t),r(t)})};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),q()}},[[281,1,3]]]);
//# sourceMappingURL=main.f06d553d.chunk.js.map