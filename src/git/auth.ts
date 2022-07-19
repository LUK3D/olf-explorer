import { Octokit } from "@octokit/rest";
import { Settings } from "types";

/**
 * ## Github api acces functions
 */
export class GetFunctions {

    octokit:Octokit;
    accessToken:string;
    constructor(accessToken:string) {
        this.accessToken = accessToken;
        this.octokit = new Octokit({
            auth: accessToken,
           }); 
    }

    /**
     * ## List of all user Repositories
     */
   async getRepos(){
       return await this.octokit.repos.listForAuthenticatedUser();
    }
 
   async getUserInfo(){
    return await this.octokit.users.getAuthenticated();
   }

    /**
     * ## Create New Repository
     * @param settings Program Settings
     * @param name The name of the repository
     */
   async createRepository(settings:Settings, name:string){
    let user = await this.getUserInfo();

    if(!user){
        return;
    }

       try {
        let repo = await this.octokit.repos.get({
            owner:user.data.login,
            repo:name
        })


        if(repo){
            console.log(repo);
        }
       } catch (error) {
            window.electron.ipcRenderer.sendMessage("ipc-run-cmd",["native-create-repository",settings.tmpFolders.repositories,name]);
        return;
        
       }
   }


    
}