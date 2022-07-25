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
        let destination1  =filePath.split("/").join('\\').split("\\");
        // destination1.pop();

        let tmpDest = destination1;
        tmpDest.pop();
        tmpDest.push(destination1.at(-1)!.split(' ').join('-').split('--').join('-'))
        destination1 = tmpDest;

        let finalDir = (destination1.join('\\')?.split(".")[0].split(" ").join("-")??"");


        const ls = spawn("luk-fragments", ["fgm",filePath,finalDir],{cwd:finalDir});

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
        let trigged = false;


        ls.on("exit", code => {
            if(!trigged){
                spawn("git", ["add","-A"],{cwd:finalDir}).on('exit', () =>{
                    spawn("git",["commit","-m","\"🚀 Added Fragmented Files\""], {cwd:finalDir}).on('exit', () =>{
                        spawn("git",["push"], {cwd:finalDir}).on('exit', (err) =>{ 
                            if(onDone){
                                onDone(code);
                            }
                        }).stderr.on("data", function (data:any) { 
                            console.log(data.toString());
                        })
                    }).stderr.on("data", function (data:any) { 
                        console.log(data.toString());
                    });
                }).stdout.on("data", function (data:any) { 
                    console.log(data.toString());
                });
                trigged = true;
            }
           


            
        });
}