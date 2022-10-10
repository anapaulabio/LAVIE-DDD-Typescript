import { IPsychologistEntity } from '../../entities/psychologists/psychologists.entity';
import { IPsychologistRepository } from '../../repositories/psychologist.repository.interface';
import {IUseCase} from '../usecase.interface';
import PsychologistRepository from '../../../adapter/repositories/psychologist.repository';

class DeletePsyUseCase implements IUseCase {
    constructor(private _repository:IPsychologistRepository){}

    async execute(data: {psychologistId: number}): Promise<void> {
        return await this._repository.deleteById(data.psychologistId)         
    }
}

export default new DeletePsyUseCase(PsychologistRepository)