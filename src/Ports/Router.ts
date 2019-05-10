export interface Router {
    post(path: string, handler: Function): void
    get(path: string, handler: Function): void
    path(path: string, handler: Function): void
    patch(path: string, handler: Function): void
};
