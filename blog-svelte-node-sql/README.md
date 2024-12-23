# Final project - A personal blogging system - Team Kind Koalas

This repository contains a starting point for your team's final project. We look forward to seeing your progress and your final results this semester!

Your team should update this README to include the information required, as presented in the project handout available on Canvas.

Your team members are:
- Zhaozhao Huang
- Jamal Rizki
- Vivian Yeh
- Lana Fernandes
- Lucas You
- Christopher Lei Sam

## Development Environment Setup & Commit Guidelines

It is important each team member has the right development environment setup on their computer.
Please update this with any other processes your group is following.

Extensions to install:

- [VSCode Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [VSCode Svelete](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- _Add other optional extensions here :)_

Commands to run before commits:

- In Backend `npm run format` to double check code is formatted
- In Frontend `npm run format` to double check code is formatted

All commits MUST have a brief descriptive message

## Git

> [!IMPORTANT]
> It is always easier to merge files that are either new files, or files that no one else has changed. Create new modules / components to reduce the chance of Git Conflicts! However expect conflicts to occur as part of normal development.

> [!TIP]
> The below assumes you have experience with GIT Pull requests, if not please address this.

All groups MUST use Pull Requests (PR) with at least 1 peer review for merging code into main, this is to improve code quality and to give team members an opportunity to understand your code in case they need to use it.

If team-members don't need to use PR, then they should be working on feature branches and get latest commits in main by merging main into their feature branch (`git merge main`, or `git rebase main`).

> [!TIP]
> Consider a branch naming convention `feature/<some-meaningful-feature-name>`

Correct and **timely** execution of the PR process with evidence of good code review can contribute **significantly** to a better codebase and team member collaboration.

![](./backend/public/images/Kind%20Koalas.webp)
a.	A brief introduction to your webapp.  

Our web app is a travel blog platform designed for travel enthusiasts to share their experiences and stories. Users can create their own articles, complete with images and tips, allowing them to document their adventures and inspire others. Additionally, the platform provides an opportunity for users to explore articles written by fellow travelers, gaining insights into new destinations, travel hacks, and personal journeys.

b.	A description of the extent to which your team has completed the compulsory features.  

We have completed all the compulsory features.  

In the user-related section, users can create accounts, and on the signup page, they can select an avatar from a list, input their username, first name, last name, email, password, date of birth, and a blurb. If the entered username already exists, a prompt will notify the user. Alerts are also provided if the passwords do not match or do not meet the required length. Passwords are stored as hashed passwords. After successfully creating an account, users can log in and log out, edit their profile, and delete their account.  

In the article-related section, all articles can be viewed on the homepage regardless of login status. Once logged in, users can see all articles as well as a "My Articles" page where they can view their own articles and create, edit, or delete them. For creating and editing article content, we used the Quill editor, and users can upload their own images. The entire website has a consistent look and feel and is responsive.

c.	A description of the extra features your team has implemented.  

-**Featured article**: Our system includes an extra feature called "Featured Article," which highlights specific travel articles that are curated for their quality and relevance.  

-**Like/Unlike**: Users have the ability to like or unlike featured articles, allowing them to express their appreciation for the content and help others find popular articles.  

-**Share**: Each featured article includes sharing options, enabling users to share their favorite articles on social media platforms.  

-**Search bar**: A search bar is available, allowing users to quickly find specific featured articles or explore topics of interest.  

-**Styled Cursor**: Our system features a custom cursor that changes its style when browsing and interacting with page elements.


d.	Instructions on what the database file (*.db file) should be named.  

project-database.db

e. Does the marker need to do anything prior to running your webapp, other than npm install?  

No, the marker only needs to run npm install.  

f. Does the marker need to do anything special to run your webapp, other than running npm start? 

the marker should run npm run dev instead of npm start to run the web app. Thank you!  

g. At least one username / password combination for an existing user in your system with some already-published articles.  

-**username**: john_doe  **password**: p12345  

-**username**: michael_brown  **password**: p12345  

-**username**: lisa_wong  **password**: p12345  


h. Any other instructions / comments you wish to make to your markers.  

Please run npm install followed by npm run dev. If you need to use npm start, you should add "start": "vite preview --port 5173" to the scripts section of the frontend's package.json. Thank you!

