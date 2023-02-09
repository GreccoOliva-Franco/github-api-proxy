export interface IController {
    buildSuccessResponse(statusCode: number, data: unknown): ResponseSuccessBody;
    buildErrorResponse(statusCode: number, message: string): ResponseErrorBody;
};


export interface ResponseSuccessBody extends ResponseBodyStatus {
    data?: unknown;
};

export interface PaginatedResponseBody extends ResponseSuccessBody {
    link: string;
};

export interface ResponseErrorBody extends ResponseBodyStatus {
    error: {
        message: string;
    }
};

interface ResponseBodyStatus {
    statusCode: number;
    statusMessage: string;
};


