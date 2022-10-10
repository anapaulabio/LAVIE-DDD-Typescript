import express from 'express';
import listPsyUsecase from '../../../domain/usecases/psychologists/list.psy.usecase';
import createPsyUsecase from '../../../domain/usecases/psychologists/create.psy.usecase';
import readPsyUsecase from '../../../domain/usecases/psychologists/read.psy.usecase';
import updatePsyUsecase from '../../../domain/usecases/psychologists/update.psy.usecase';
import deletePsyUsecase from '../../../domain/usecases/psychologists/delete.psy.usecase';

class PsychologistController {
    async listPsy(req: express.Request, res: express.Response) {
        const psychologist = await listPsyUsecase.execute();
        res.status(200).send(psychologist)
    }

    async getClient(req: express.Request, res: express.Response){
        const psychologist = await readPsyUsecase.execute({
            psychologistId: Number(req.params.psychologistId)
        })
        res.status(200).send(psychologist)
    }

    async createPsy(req: express.Request, res: express.Response){
        const psychologist = await createPsyUsecase.execute(req.body)
        res.status(201).send(psychologist)
    }

    async updatePsy(req: express.Request, res: express.Response){
        const psychologist = await updatePsyUsecase.execute(req.body)
        res.status(200).send(psychologist)
    }

    async deletePsyUsecase(req: express.Request, res: express.Response){
        const psychologist = await deletePsyUsecase.execute({
            psychologistId: Number(req.params.psychologistId)
        })
        res.status(204).send()
    }
}

export default new PsychologistController()