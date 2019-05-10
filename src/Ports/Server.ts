import { Router } from './Router'
export interface Server extends Router{
    use(handler: Function): void
    listen(port?: string, fun?: Function):void

};
