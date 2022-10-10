import { IDataBase } from "../../infra/persistence/database.interface";
import { ArrayDataBase } from "../../infra/persistence/array.database";
import { IPsychologistEntity } from '../../domain/entities/psychologists/psychologists.entity'
import { IPsychologistRepository } from '../../domain/repositories/psychologist.repository.interface'

class PsychologistRepository implements IPsychologistRepository{
    private _type: string = 'psychologist'

    constructor (private _database: IDataBase) {}

    async readById(resourceId: number): Promise<IPsychologistEntity | undefined> {
        return this._database.read(this._type, resourceId)
    }

    async create(resource: IPsychologistEntity): Promise<IPsychologistEntity> {
        resource.indexId = this._database.create(this._type, resource)
        return resource
    }

    async updateById(resource: IPsychologistEntity): Promise<IPsychologistEntity | undefined> {
        this._database.update(this._type, resource)
        return resource
    }

    async deleteById(resourceId: number): Promise<void> {
        this._database.delete(this._type, resourceId)
    }

    async list(): Promise<IPsychologistEntity[]> {
        return this._database.list(this._type)
    }
}

export default new PsychologistRepository(
    ArrayDataBase.getInstance()
    );
