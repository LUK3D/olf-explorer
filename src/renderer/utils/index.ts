import fs from "fs";



export interface FileSizes{
    bytes:number,
    kb:number,
    mb:number,
    gb:number,
    chunks:number
}
export async  function getFileSize(fileAbsPath:string){
    let sizes:FileSizes|null;
    let stats = await fs.statSync(fileAbsPath);
    let fileSize = stats.size;
    let fileSizeKB = roundOff(fileSize*0.001);
    let fileSizeMB = roundOff(fileSizeKB*0.001);
    let fileSizeGB = roundOff(fileSizeMB*0.001);
    
    sizes  = {
        bytes:fileSize,
        kb:fileSizeKB,
        mb:fileSizeMB,
        gb:fileSizeGB,
        chunks:(fileSizeMB/4.096)-2
    }
    
    return sizes;


}

function roundOff(value:number)
{
return Math.round(value*100)/100;
}