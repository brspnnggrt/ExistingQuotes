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
        return { 
            api: q.api,
            function: q.function,
            data: await (swaggerApi as any)[q.api] ? 
                        (swaggerApi as any)[q.api][q.function](...q.arguments) : 
                        (customApi as any)[q.api][q.function](...q.arguments)
        }
    }));
    request.status = 'response';
    let iframe: HTMLIFrameElement = document.getElementById(request.iframe) as HTMLIFrameElement;
    iframe.contentWindow?.postMessage(request, "https://brspnnggrt.github.io/");
});
