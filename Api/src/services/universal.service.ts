

import { AppDataSource } from '../data-source';
import { CustomAppError } from '../utils/custom-app-error';
import { ErrorCodes } from '../utils/error-codes';

class UniversalService {

    async bulkRemove(ids: number[], table: string): Promise<void> {
        if (!ids.length) throw new CustomAppError('No IDs provided for deletion.', 400, ErrorCodes.INVALID_INPUT.code, 'validation_failed', ErrorCodes.INVALID_INPUT.label);

        const validTables = ['users', 'roles', 'permissions'];
        if (!validTables.includes(table.toLowerCase())) throw new CustomAppError('Invalid table name.', 400, ErrorCodes.INVALID_INPUT.code, 'validation_failed', ErrorCodes.INVALID_INPUT.label);

        const queryRunner = AppDataSource.createQueryRunner();
        await queryRunner.connect();

        try {
            await queryRunner.startTransaction();
            await queryRunner.manager.createQueryBuilder().update(table).set({ is_deleted: true }).where("id IN (:...ids)", { ids }).andWhere("is_deleted = false").execute();
            await queryRunner.commitTransaction();
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw new CustomAppError('Failed to remove records.', 500, ErrorCodes.DELETION_FAILED.code, 'not_found', ErrorCodes.DELETION_FAILED.label);
        } finally {
            await queryRunner.release();
        }
    }

}

export default new UniversalService();
