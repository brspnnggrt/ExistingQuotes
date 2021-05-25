import * as swaggerApi from './services/swagger';
import * as customApi from './services/custom';

interface IPostMessage {
    iframe: string;
    taskId: string;
    data?: any;
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

(window as any).testtttt = swaggerApi;
window.addEventListener("message", async message => 
{
    let request: IPostMessage = message.data;
    request.response = await Promise.all(request.query.map(async q => {
        let capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);
        let serviceName = capitalize(q.api) + 'Service';
        let functionName = q.api + q.function;
        return { 
            api: q.api,
            function: q.function,
            data: await (swaggerApi as any)[serviceName] ? 
                        (swaggerApi as any)[serviceName][functionName](...q.arguments) : 
                        (customApi as any)[serviceName][functionName](...q.arguments)
        }
    }));
    request.status = 'response';
    let iframe: HTMLIFrameElement = document.getElementById(request.iframe) as HTMLIFrameElement;
    iframe.contentWindow?.postMessage(request, "https://brspnnggrt.github.io/");
});
