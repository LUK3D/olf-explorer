import { exec,spawn } from "child_process";


export function fragMentFile(filePath:string, onMessage?:Function, onError?:Function){
    exec(`luk-fragments fgm "${filePath}"`, (error, stdout, stderr) => {
        if (error) {
            if(onError){
                onError("ERR1:",error.message)
            }
            return;
        }
        if (stderr) {

            if(onError){
                onError("ERR2:",stderr)
            }
            
            return;
        }
        if(onMessage){
            onMessage("MSG:",stdout);
        }
    },);
}


export function fragmentFile2(filePath:string, onMessage?:Function, onError?:Function, onDone?:Function){

        const ls = spawn("luk-fragments", ["fgm",filePath],{cwd:"C:"});

        ls.stdout.on("data", data => {
            if(onMessage){
                onMessage(data)
            }
        });

        ls.stderr.on("data", data => {
            if(onError){
                onError(data)
            }
            console.log(`ERROR: ${data}`);
        });

        ls.on('error', (error) => {
            if(onError){
                onError(error)
            }
        });

        ls.on("FINISH:", code => {
            if(onDone){
                onDone(code);
            }
        });
}