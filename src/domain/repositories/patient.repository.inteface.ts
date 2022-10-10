import {IPatientEntity} from '../entities/patients/patients.entity';

export interface IPatientRepository {
    readById(resourseId: number): Promise<IPatientEntity | undefined>
    create(resource: IPatientEntity): Promise<IPatientEntity>
    deleteById(resourseId: number): Promise<void>
    list(): Promise<IPatientEntity[]>
    update(resource: IPatientEntity): Promise<IPatientEntity | undefined>
}