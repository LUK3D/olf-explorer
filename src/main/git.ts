import fs from 'fs';
import { Settings } from './../types/index';
import { Octokit } from '@octokit/rest';
import {  spawn } from 'child_process';





export class GitCommands {
    

 
   async createRempo(args:{location:string, repoName:string, url:string, onMessage?:Function,onError?:Function,onComplete?:Function}){
       
       
   let appFolder = args.location.split(".")[0];


    await fs.mkdirSync(appFolder,{recursive:true});

    let wcd = args.location.split("/").join('\\').split('\\');
    wcd.pop();

        const ls = spawn("git", ["clone",args.url],{cwd:wcd.join('\\')});

        ls.stdout.on("data", data => {
            if(args.onMessage){
                args.onMessage(data)
            }
        });

        ls.stderr.on("data", data => {
            if(args.onError){
                args.onError(data)
            }
            console.log(`ERROR: ${data.toString()}`);
        });

        ls.on('error', (error) => {
            if(args.onError){
                args.onError(error)
            }
        });

        ls.on("close", async code => {


           let response = await fs.writeFileSync(appFolder+"\\README.md",`
# Open Linked Fragments

## Open Linkend Fragments Explorer Folder

Welcome 🖖 This is a folder generated automatically by Open Linked Fragments Explorer.

We are creating an easy way to manage your fragmented files by creating a File Explorer with moder User Interface and User Experience.

            
            `);
            
            let trigged = false;

            spawn("git", ["add","-A"],{cwd:appFolder}).on('close', () =>{
                spawn("git",["commit","-m","\"Initial Commit for Readme\""], {cwd:appFolder}).on('close', () =>{
                    spawn("git",["push"], {cwd:appFolder}).on('close', async (err) =>{ 
                        if(args.onComplete && !trigged){
                                // await fs.rmdirSync(appFolder)
                                args.onComplete(code,appFolder);
                                trigged = true;
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

           
           


            
        });
    }
}