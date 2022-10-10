import { IPsychologistEntity } from '../../entities/psychologists/psychologists.entity';
import { IPsychologistRepository } from '../../repositories/psychologist.repository.interface';
import {IUseCase} from '../usecase.interface';
import PsychologistRepository from '../../../adapter/repositories/psychologist.repository'

class CreatePsyUseCase implements IUseCase {
    constructor(private _repository:IPsychologistRepository){}

    async execute(data: IPsychologistEntity): Promise<IPsychologistEntity | undefined> {
        return await this._repository.create(data)       
    }
}

export default new CreatePsyUseCase(PsychologistRepository)