import { IPsychologistEntity } from '../../entities/psychologists/psychologists.entity';
import { IPsychologistRepository } from '../../repositories/psychologist.repository.interface';
import {IUseCase} from '../usecase.interface';
import PsychologistRepository from '../../../adapter/repositories/psychologist.repository';

class ListPsyUseCase implements IUseCase {

    constructor(private _repository: IPsychologistRepository){}

    async execute(): Promise<IPsychologistEntity[] | undefined> {
        return await this._repository.list()
    }
}

export default new ListPsyUseCase(PsychologistRepository)