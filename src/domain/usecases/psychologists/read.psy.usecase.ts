import { IPsychologistRepository } from '../../repositories/psychologist.repository.interface';
import {IUseCase} from '../usecase.interface';
import PsychologistRepository from '../../../adapter/repositories/psychologist.repository';

class ReadPsyUseCase implements IUseCase {
    constructor(private _repository: IPsychologistRepository){}

    async execute(data: {psychologistId: number}){
        return await this._repository.readById(data.psychologistId)
    }
}

export default new ReadPsyUseCase(PsychologistRepository)