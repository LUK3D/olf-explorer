import { FileSizes } from "renderer/utils"


export interface Settings{
    darkmod?:boolean,
    folderListType?:FolderListType,
    tmpFolders:TmpFolders
}



export interface TmpFolders{
    repositories:string,
    
}

export enum FolderListType{
    grid,
    list
}

export interface FileDroped{
    Context: string,
    Path: string,
    Base64ImageData: string,
    sizes?:FileSizes
}