# Github proxy API

An [API deployed on AWS](https://grecco.bondiola.dev/api/users/GreccoOliva-Franco/details) to proxy/enclose/shadow some of Github's `~/api/users` functionalities.

## Installation

### Requirements

1. Make sure you have node.js installed with 

```bash
node -v 
// v16.17.0 or some other version
```

2. Make sure you have npm installed with

```bash
npm -v
// 8.1.0 or some other version
```

3. Make sure you have git installed with

```bash
git --version
// git version 2.33.0 or some other version
```

### InstallationSteps

1. Clone this repo

```bash
git clone https://github.com/GreccoOliva-Franco/github-api-proxy.git .
```

2. Move to the project's root directory

```bash
cd github-api-proxy
```

3. Install dependencies

```bash
npm i
```

4. Create a `.env` file in the root directory of the project and add the following lines (replace the values with your own if you want to)

```bash
cp .env.example .env
```

5. Run the project

```bash
npm start
```

## Endpoints

## ~/api/users

- Functionality: `Get a list of users`

- Method: `GET`

- Query parameters:
    - since: 
        - Type: `number`
        - Description: `A user ID. Only return users with an ID greater than this ID.`
        - Required: `false`

    - page: 
        - Type: `number`
        - Description: `The page number to return. Default is 1.`
        - Required: `false`

- Response:
    - Status: 200
    - Body: 
        - Type: `PaginatedResponse<User>`
        - Data: `User[]`
        - Description: `An array of users and a link to the next page of users.`
        - Example: 
            ```json
            {
                statusCode: 200,
                statusMessage: "OK",
                data: [<User>,...],
                link: string
            }
            ```

## ~/api/users/{username}/details

- Functionality: `Get a user's public details`

- Method: `GET`

- Path parameters:
    - username: 
        - Type: `string`
        - Description: `The username of the user to get details from.`
        - Required: `true`

- Response:
    - Status: 200
        - Type: `SuccessResponse<UserDetails>`
        - Description: `A user's public details.`
        - Example: 
            ```json
            {
                statusCode: 200,
                statusMessage: "OK",
                data: <UserDetails>
            }
            ```
    - Status: 400
        - Type: `ErrorResponse`
        - Description: `Parameter "username" is required.`
        - Example: 
            ```json
            {
                statusCode: 400,
                statusMessage: "Bad Request",
                mesage: "Parameter \"username\" is required."
            }
            ```
    - Status: 500
        - Type: `ErrorResponse`
        - Description: `Service unavaliable.`
        - Example: 
            ```json
            {
                statusCode: 500,
                statusMessage: "Internal Server Error",
                mesage: "Service unavaliable."
            }
            ```

## ~/api/users/{username}/repositories

- Functionality: `Get a user's public repositories`

- Method: `GET`

- Path parameters:
    - username: 
        - Type: `string`
        - Description: `The username of the user to get repositories from.`
        - Required: `true`

- Response
    - Status: 200
        - Type: `SuccessResponse<Repository>`
        - Data: `Repository[]`
        - Description: `A user's list of repositories`
        - Example: 
            ```json
            {
                statusCode: 200,
                statusMessage: "OK",
                data: [<Repository>,...],
            }
            ```
    - Status: 400
        - Type: `ErrorResponse`
        - Description: `Parameter "username" is required.`
        - Example: 
            ```json
            {
                statusCode: 400,
                statusMessage: "Bad Request",
                mesage: "Parameter \"username\" is required."
            }
            ```
    - Status: 500
        - Type: `ErrorResponse`
        - Description: `Service unavaliable.`
        - Example: 
            ```json
            {
                statusCode: 500,
                statusMessage: "Internal Server Error",
                mesage: "Service unavaliable."
            }
            ```

## Interfaces

### User

```typescript
interface User {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: boolean;
    bio: string;
    twitter_username: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}
```

### UserDetails

```typescript
interface UserDetails {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: boolean;
    bio: string;
    twitter_username: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
    total_private_repos: number;
    owned_private_repos: number;
    private_gists: number;
    disk_usage: number;
    collaborators: number;
    two_factor_authentication: boolean;
    plan: Plan;
}
```

### Repository

```typescript
interface Repository {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: Owner;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    forks_count: number;
    mirror_url: string;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: License;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
}
```

### SuccessResponse

```typescript
interface SuccessResponse<T> {
    statusCode: number;
    statusMessage: string;
    data: T;
}
```

### ErrorResponse

```typescript
interface ErrorResponse {
    statusCode: number;
    statusMessage: string;
    message: string;
}
```

### PaginatedResponse

```typescript
interface PaginatedResponse<T> {
    statusCode: number;
    statusMessage: string;
    data: T[];
    link: string;
}
```
