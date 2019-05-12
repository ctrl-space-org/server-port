import { Router } from './Router'
export interface Server extends Router{
    listen(port?: string, fun?: Function):void
}
