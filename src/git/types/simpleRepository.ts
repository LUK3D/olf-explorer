import { User } from "./userModel";

/**
 * ## Repoistory Model
 */
export interface SimpleRepository {
    /**
     * @description A unique identifier of the repository.
     * @example 1296269
     */
    id: number;
    /**
     * @description The GraphQL identifier of the repository.
     * @example MDEwOlJlcG9zaXRvcnkxMjk2MjY5
     */
    node_id: string;
    /**
     * @description The name of the repository.
     * @example Hello-World
     */
    name: string;
    /**
     * @description The full, globally unique, name of the repository.
     * @example octocat/Hello-World
     */
    full_name: string;
    owner: User,
    /** @description Whether the repository is private. */
    private: boolean;
    /**
     * Format: uri
     * @description The URL to view the repository on GitHub.com.
     * @example https://github.com/octocat/Hello-World
     */
    html_url: string;
    /**
     * @description The repository description.
     * @example This your first repo!
     */
    description: string | null;
    /** @description Whether the repository is a fork. */
    fork: boolean;
    /**
     * Format: uri
     * @description The URL to get more information about the repository from the GitHub API.
     * @example https://api.github.com/repos/octocat/Hello-World
     */
    url: string;
    /**
     * @description A template for the API URL to download the repository as an archive.
     * @example https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}
     */
    archive_url: string;
    /**
     * @description A template for the API URL to list the available assignees for issues in the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/assignees{/user}
     */
    assignees_url: string;
    /**
     * @description A template for the API URL to create or retrieve a raw Git blob in the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}
     */
    blobs_url: string;
    /**
     * @description A template for the API URL to get information about branches in the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/branches{/branch}
     */
    branches_url: string;
    /**
     * @description A template for the API URL to get information about collaborators of the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}
     */
    collaborators_url: string;
    /**
     * @description A template for the API URL to get information about comments on the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/comments{/number}
     */
    comments_url: string;
    /**
     * @description A template for the API URL to get information about commits on the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/commits{/sha}
     */
    commits_url: string;
    /**
     * @description A template for the API URL to compare two commits or refs.
     * @example https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}
     */
    compare_url: string;
    /**
     * @description A template for the API URL to get the contents of the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/contents/{+path}
     */
    contents_url: string;
    /**
     * Format: uri
     * @description A template for the API URL to list the contributors to the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/contributors
     */
    contributors_url: string;
    /**
     * Format: uri
     * @description The API URL to list the deployments of the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/deployments
     */
    deployments_url: string;
    /**
     * Format: uri
     * @description The API URL to list the downloads on the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/downloads
     */
    downloads_url: string;
    /**
     * Format: uri
     * @description The API URL to list the events of the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/events
     */
    events_url: string;
    /**
     * Format: uri
     * @description The API URL to list the forks of the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/forks
     */
    forks_url: string;
    /**
     * @description A template for the API URL to get information about Git commits of the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}
     */
    git_commits_url: string;
    /**
     * @description A template for the API URL to get information about Git refs of the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}
     */
    git_refs_url: string;
    /**
     * @description A template for the API URL to get information about Git tags of the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}
     */
    git_tags_url: string;
    /**
     * @description A template for the API URL to get information about issue comments on the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}
     */
    issue_comment_url: string;
    /**
     * @description A template for the API URL to get information about issue events on the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/issues/events{/number}
     */
    issue_events_url: string;
    /**
     * @description A template for the API URL to get information about issues on the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/issues{/number}
     */
    issues_url: string;
    /**
     * @description A template for the API URL to get information about deploy keys on the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/keys{/key_id}
     */
    keys_url: string;
    /**
     * @description A template for the API URL to get information about labels of the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/labels{/name}
     */
    labels_url: string;
    /**
     * Format: uri
     * @description The API URL to get information about the languages of the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/languages
     */
    languages_url: string;
    /**
     * Format: uri
     * @description The API URL to merge branches in the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/merges
     */
    merges_url: string;
    /**
     * @description A template for the API URL to get information about milestones of the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/milestones{/number}
     */
    milestones_url: string;
    /**
     * @description A template for the API URL to get information about notifications on the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}
     */
    notifications_url: string;
    /**
     * @description A template for the API URL to get information about pull requests on the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/pulls{/number}
     */
    pulls_url: string;
    /**
     * @description A template for the API URL to get information about releases on the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/releases{/id}
     */
    releases_url: string;
    /**
     * Format: uri
     * @description The API URL to list the stargazers on the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/stargazers
     */
    stargazers_url: string;
    /**
     * @description A template for the API URL to get information about statuses of a commit.
     * @example https://api.github.com/repos/octocat/Hello-World/statuses/{sha}
     */
    statuses_url: string;
    /**
     * Format: uri
     * @description The API URL to list the subscribers on the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/subscribers
     */
    subscribers_url: string;
    /**
     * Format: uri
     * @description The API URL to subscribe to notifications for this repository.
     * @example https://api.github.com/repos/octocat/Hello-World/subscription
     */
    subscription_url: string;
    /**
     * Format: uri
     * @description The API URL to get information about tags on the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/tags
     */
    tags_url: string;
    /**
     * Format: uri
     * @description The API URL to list the teams on the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/teams
     */
    teams_url: string;
    /**
     * @description A template for the API URL to create or retrieve a raw Git tree of the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}
     */
    trees_url: string;
    /**
     * Format: uri
     * @description The API URL to list the hooks on the repository.
     * @example https://api.github.com/repos/octocat/Hello-World/hooks
     */
    hooks_url: string;
  }