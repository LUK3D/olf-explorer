import { Octokit } from "@octokit/rest";

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


    
}