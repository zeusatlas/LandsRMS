import { Request, Response } from 'express';
import { successResponse } from '../utils/response';
import { CustomAppError } from '../utils/custom-app-error';
import { ErrorCodes } from '../utils/error-codes';
import universalService from '../services/universal.service';

class UniversalController {
    async bulkRemove(req: Request, res: Response): Promise<Response> {
        try {
            const { ids, table } = req.body;
            if ((!Array.isArray(ids) && typeof ids !== 'string') || !table) {
                throw new CustomAppError('Invalid Record Id.', 400, ErrorCodes.INVALID_INPUT.code, 'validation_failed', ErrorCodes.INVALID_INPUT.label);
            }
            let parsedIds: number[] = [];
            if (Array.isArray(ids)) {
                parsedIds = ids.map((value: any) => parseInt(value, 10)).filter(value => !isNaN(value));
            } else if (typeof ids === 'string') {
                parsedIds = ids.split(',').map(value => parseInt(value.trim(), 10)).filter(value => !isNaN(value));
            }
            if (!parsedIds.length) {
                throw new CustomAppError('No valid IDs provided.', 400, ErrorCodes.INVALID_INPUT.code, 'validation_failed', ErrorCodes.INVALID_INPUT.label);
            }
            await universalService.bulkRemove(parsedIds, table);
            return successResponse(res, 'Operation performed successfully');
        } catch (error) {
            throw error;
        }
    }
}

export default new UniversalController();
