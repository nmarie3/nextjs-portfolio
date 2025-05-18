import createMiddleware from 'next-intl/middleware';
import { routing } from "./i18n/routing";


export default createMiddleware(routing);

export const config = {
    //match only internationalized pathnames
    matcher: ['/', '/(en|jp)/:path*']
};