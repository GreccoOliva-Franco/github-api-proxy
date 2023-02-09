// Interfaces
import { Request } from 'express';
import { ObjectUtilities } from '../utilities/object.utilities';
import {
    IController,
    PaginatedResponseBody,
    ResponseErrorBody,
    ResponseSuccessBody,
} from './interfaces/controller.interface';

export class Controller implements IController {
    buildSuccessResponse(statusCode: number, data: unknown = null): ResponseSuccessBody {
        const body: ResponseSuccessBody = {
            statusCode,
            statusMessage: "some status message depending on the status code",
        }

        if (data) body.data = data;

        return body;
    };

    buildPaginatedResponse(req: Request, statusCode: number, data: unknown = null): PaginatedResponseBody {
        const responseBody = this.buildSuccessResponse(statusCode, data);

        req.query.page = req.query.page || '1';

        const filteredQuery = ObjectUtilities.removeByValue(req.query, [undefined, null]);
        const queryString = Object.entries(filteredQuery)
            .map(([key, value]) => {
                return key === 'page' ? `${key}=${parseInt(value) + 1}` : `${key}=${value}`;
            })
            .join('&');
        const baseUrl = `${req.protocol}://${req.get('host')}${req.baseUrl}`;
        const link = `${baseUrl}?${queryString}`;

        return { ...responseBody, link };
    };

    buildErrorResponse(statusCode: number, message: string): ResponseErrorBody {
        return {
            statusCode,
            statusMessage: "some message",
            error: { message },
        }
    };
}
