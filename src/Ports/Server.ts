import { Router } from './Router'
import { Plugins } from './Plugins'
export interface Server extends Router{
    plugins: Plugins
    listen(port?: string, fun?: Function):void
}
