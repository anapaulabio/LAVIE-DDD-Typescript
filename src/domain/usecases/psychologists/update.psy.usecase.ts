import { IPsychologistEntity } from '../../entities/psychologists/psychologists.entity';
import { IPsychologistRepository } from '../../repositories/psychologist.repository.interface';
import {IUseCase} from '../usecase.interface';
import PsychologistRepository from '../../../adapter/repositories/psychologist.repository';

class UpdatePsyUseCase implements IUseCase {
    constructor(private _repository: IPsychologistRepository){}

    async execute(data: IPsychologistEntity): Promise<IPsychologistEntity | undefined> {
        return await this._repository.updateById(data)
    }
}

export default new UpdatePsyUseCase(PsychologistRepository)