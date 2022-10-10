import {ICallEntity} from '../entities/calls/calls.entity';

export interface ICallRepository {
    readById(resourseId: number): Promise<ICallEntity | undefined>
    create(resource: ICallEntity): Promise<ICallEntity>
    deleteById(resourceId: number): Promise<void>
    list(): Promise<ICallEntity[]>
    updateById(resource: ICallEntity): Promise<ICallEntity | undefined>
}