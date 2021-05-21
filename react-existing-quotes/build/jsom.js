(() => {
    const utils = {
        _buildPairString: (query) => {
            let keysList = Object.keys(query);
            let pairString = '';
            for (let [key, value] of Object.entries(query)) {
                if (Array.isArray(value)) {
                    for (let valuePart of value) {
                        pairString += `${key}=${encodeURIComponent(valuePart)}`;
                        if (value.lastIndexOf(valuePart) != value.length - 1)
                            pairString += '&';
                    }
                }
                else
                    pairString += `${key}=${encodeURIComponent(value)}`;
                if (keysList.lastIndexOf(key) != keysList.length - 1)
                    pairString += '&';
            }
            return pairString;
        },
        buildQueryString: (query) => {
            return '?' + utils._buildPairString(query);
        },
        buildBodyString: (body) => {
            return JSON.stringify(body);
        },
        get: async (endpoint, query) => {
            const url = endpoint + utils.buildQueryString(query);
            const response = await fetch(url);
            return await response.json();
        },
        post: async (endpoint, body) => {
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
    const api = {
        quoteList: {
            getInitData: async (query) => utils.get('/api/rd/v1/QuoteList/GetInitData', query),
            getData: async (query) => utils.get('/api/rd/v1/QuoteList/GetData', query),
            executeAction: async (body) => utils.post('/api/rd/v1/QuoteList/ExecuteAction', body)
        }
    };
    window.addEventListener("message", async (message) => {
        let request = message.data;
        request.response = await Promise.all(request.query.map(async (q) => {
            return {
                api: q.api,
                function: q.function,
                data: await api[q.api][q.function](...q.arguments)
            };
        }));
        request.status = 'response';
        let iframe = document.getElementById(request.iframe);
        iframe.contentWindow.postMessage(request, "https://brspnnggrt.github.io/");
    });
})();
