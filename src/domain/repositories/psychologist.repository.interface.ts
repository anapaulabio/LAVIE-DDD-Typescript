import { IPsychologistEntity } from "../entities/psychologists/psychologists.entity";

export interface IPsychologistRepository {
    readById(resourceId: number): Promise<IPsychologistEntity | undefined>
    create(resource: IPsychologistEntity): Promise<IPsychologistEntity>
    deleteById(resourceId: number): Promise<void>
    list(): Promise<IPsychologistEntity[]>
    updateById(resource: IPsychologistEntity): Promise<IPsychologistEntity | undefined>
}