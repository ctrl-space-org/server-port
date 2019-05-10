export interface Middleware {
    createMiddleware(...params: any[]): Function
};
