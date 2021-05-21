declare var csrfToken: string;

interface IUtils {
    _buildPairString: (query: object) => string;
    buildQueryString: (query: object) => string;
    buildBodyString: (body: object) => string;
    get: (endpoint: string, query: object) => Promise<{}>;
    post: (endpoint: string, body: object) => Promise<{}>;
}

interface IApi {
    quoteList: {
        getInitData(query: {
            'tabId': number
        }): {};
        getData(query: {
            'searchString'?: string;
            'columns[]': string[];
            'criteria[]': string[];
            'skip': number;
            'take': number;
            'orderBy[]': string[];
            'usePaging': boolean;
            'tabId': number;
            'loadDelegatedApproversQuotes': boolean;
        }): {};
        executeAction(query: {
            "actionId": number,
            "cryptedOwnerId": string,
            "cryptedCartId": string,
            "approverId": number
        }): {};
    };
}

interface IPostMessage {
    iframe: string;
    taskId: string;
    query: {
        api: string;
        function: string;
        arguments: any[];
    }[];
    response: {
        api: string;
        function: string;
        data: any;
    }[];
    status: string;
}

(() => {
        
    var utils: IUtils = {
        _buildPairString: (query: object) => {
            let keysList = Object.keys(query);
            let pairString: string = '';
            for (let [key, value] of Object.entries(query)) {
                if (Array.isArray(value)) {
                    for (let valuePart of value) {
                        pairString += `${key}=${encodeURIComponent(valuePart)}`;
                        if (value.lastIndexOf(valuePart) != value.length - 1)
                            pairString += '&';
                    }
                }
                else pairString += `${key}=${encodeURIComponent(value)}`;
                if (keysList.lastIndexOf(key) != keysList.length - 1) pairString += '&';
            }
            return pairString;
        },
        buildQueryString: (query: object) => {
            return '?' + utils._buildPairString(query);
        },
        buildBodyString: (body: object) => {
            return JSON.stringify(body);
        },
        get: async (endpoint: string, query: object) => {
            const url = endpoint + utils.buildQueryString(query);
            const response = await fetch(url);
            return await response.json();
        },
        post: async (endpoint: string, body: object) => {
            const response = await fetch(endpoint, {
                method: 'post',
                body: utils.buildBodyString(body),
                headers: {
                    'X-CSRF-Token': csrfToken,
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json'
                }
            });
            return await response.json();
        }
    };

    var api: IApi = {
        quoteList: {
            getInitData: async query => utils.get('/api/rd/v1/QuoteList/GetInitData', query),
            getData: async query => utils.get('/api/rd/v1/QuoteList/GetData', query),
            executeAction: async body => utils.post('/api/rd/v1/QuoteList/ExecuteAction', body)
        }
    };

    window.addEventListener("message", async message => 
    {
        let request: IPostMessage = message.data;
        request.response = await Promise.all(request.query.map(async q => {
            return { 
                api: q.api,
                function: q.function,
                data: await api[q.api][q.function](...q.arguments)
            }
        }));
        request.status = 'response';
        let iframe: HTMLIFrameElement = document.getElementById(request.iframe) as HTMLIFrameElement;
        iframe.contentWindow.postMessage(request, "https://brspnnggrt.github.io/");
    });

})();