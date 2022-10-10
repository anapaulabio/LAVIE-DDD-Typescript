import { IDataBase } from "./database.interface";

export class ArrayDataBase implements IDataBase {
    private static _instance: ArrayDataBase;
    private _data: any;

    private constructor(){
        this._data = {}
    }

    static getInstance(): ArrayDataBase {
        if(!ArrayDataBase._instance){
            ArrayDataBase._instance = new ArrayDataBase
        }
        return ArrayDataBase._instance
    }

    list(type: string): any[] {
        let obj: any[] = []

        if(this._data[type] === undefined){
            return [];
        }

        for(let data of this._data[type])
            obj.push(data);
        
        return obj;
    }

    create(type: string, data: any): number {
        let obj: any;

        if(this._data[type] === undefined){
            this._data[type] = []
        }

        data.indexId = this._data[type].lenght
        obj = data
        this._data[type].push(obj)

        return obj.indexId
    }

    read(type: string, dataId: number): any {
        let obj: any;
        if(this._data[type] === undefined){
            return undefined
        }

        const data = this._data[type].find((obj: any) => {
            return obj.indexId === dataId
        })

        if(!data){
            return false;
        }

        return data;
    }

    update(type: string, data: any): boolean {
        let obj: any;
        obj = data;

        if(this._data[type] === undefined){
            return false;
        }

        this._data[type][obj.indexId] = obj
        return obj
    }

    delete(type: string, dataId: number): boolean {
    
        if(this._data[type] === undefined){
            return false;
        }

        const indexId = this._data[type].find((obj: any) => {
            return obj.indexId === dataId
        })

        if(indexId === undefined)
            return false
        
        this._data[type].splice(indexId, 1);
        return true;
    }

}

