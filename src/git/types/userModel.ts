/**
 *## User Model 
 */
export interface User{
    login: string;
    id: number;
    node_id: string;
    /** Format: uri */
    avatar_url: string;
    gravatar_id: string | null;
    /** Format: uri */
    url: string;
    /** Format: uri */
    html_url: string;
    /** Format: uri */
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    /** Format: uri */
    subscriptions_url: string;
    /** Format: uri */
    organizations_url: string;
    /** Format: uri */
    repos_url: string;
    events_url: string;
    /** Format: uri */
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string | null;
    company: string | null;
    blog: string | null;
    location: string | null;
    /** Format: email */
    email: string | null;
    hireable: boolean | null;
    bio: string | null;
    twitter_username?: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    /** Format: date-time */
    created_at: string;
    /** Format: date-time */
    updated_at: string;
    plan?: {
      collaborators: number;
      name: string;
      space: number;
      private_repos: number;
    };
    /** Format: date-time */
    suspended_at?: string | null;
    /** @example 1 */
    private_gists?: number;
    /** @example 2 */
    total_private_repos?: number;
    /** @example 2 */
    owned_private_repos?: number;
    /** @example 1 */
    disk_usage?: number;
    /** @example 3 */
    collaborators?: number;
  }