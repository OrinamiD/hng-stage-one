import { type Request, type Response } from "express";
export declare const userDetails: {
    name: string;
    email: string;
    stack: string;
};
export declare const fetchUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=user.controller.d.ts.map