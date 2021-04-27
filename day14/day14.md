# Git and Github Collaboration

1. [Objectives](#objectives)
2. [What We're Building](#what-were-building)
3. [Starting Code](#starting-code)
4. [Stepped Solution](#stepped-solution)
5. [Extensions for Independent Practice](#extensions-for-independent-practice)

## Objectives

- Students will create a repository on GitHub.
- Students will clone repositories locally.
- Students will make changes to local and remote repositories through commits.
- Students will learn to collaborate through branches and pull requests. 

**Key vocabulary: version control, collaboration, branch, clone, merge**

## What We're Building

Students will be manipulating a single README.md file to learn the basics of Git and Github.

## Starting Code

The purpose of this lesson is to build repository to demonstrate Git and Github workflows. There is no starter or final code. Students may have already used Git to back up their day 5 and/or day 10 projects. Acknowledge this, and let them know that some of today may be a refresher, but that they will also be learning how to use Git and Github to collaborate with their classmates.

## Stepped Solution

NOTE: Depending on where your students are at, what styles of collaboration they have naturally gravitated towards, and how ready they appear to be to learn new material, you may wish to teach only the most relevant sections listed below. If students are successfully sharing code through another medium (like Glitch), then branching and merging may not be necessary, and could be offered only to the students who indicate they're eager to learn a more challenging (but more authentic) workflow.

Please teach only as much of this content as your students need. 

### Cloning a repository

Depending on how you've distributed code to students up until this point, it's possible that they might already deeply understand the `git clone` command. If that's the case, feel free to skip to the next section. 

1.  Spend a few minutes explaining distributed version control to students. Make sure they have a basic grasp of the concept before moving on. 

2. This lesson will dive into Git and Github, but give students a primer by discussing the relationship between the two, and the advantages that they offer developers. 

3. Walk students through the steps of creating a new remote repository in Github.

4. Pause to make the distinction between remote and local repositories. Explain that cloning a repo will copy both its contents as well as its Git records.

5. Talk students through the notion of cloning repositories to create a local version. Cloning the repository will be done through the terminal. Use the command line to navigate to where the project will be in your filesystem, then type:

```bash
git clone [repo url]
```

6. Navigate to the newly added local Git repository.

7. Use the command line to a new file in that folder called `README.md`. Have students add some text to the README file and save it. 

### Commit to a repository

8. Back in the command line, type `git status`. Have students inspect the response. Solicit predictions on what the response from Git is telling us. Then clarify by walking them through the response. Explain that in red, Git is telling us that we have certain files that are not yet being tracked by Git. Pause here to talk about *why* the process for mirroring our local changes on GitHub tend to be so tedious.
      * Ask students how they save work on Google Docs. They'll explain that they don't; Google Docs autosaves.
      * Tell students that Git is basically the opposite - not only does it not autosave, saving is in fact a **three-step process*
   * Say: 
      * We use `git add` to say *which* files to save.
      * We use `git commit` to give a *name* to this save point.
      * And finally, we use `git push` to say *where* we want to store this save. 
   * Finally, ask students why this more tedious process for saving our work might be BETTER than autosaving when we're writing code. They can generally come up with pretty wonderful answers, but one compelling one is that code is generally broken while we're working on it, so we may only want to save working (or mostly working) versions.

9. Since Git is a version control system, it needs to know what it should be keeping track of and what it shouldn't be. We want to include this file in our project, so let's add this file to be tracked in our project with `git add README.md`. Then type `git status` again.

10. The file name should now be green, and listed under the header "Changes to be commited". Explain that now that the files are staged to be committed, we actually have to
"commit" these changes to our repo. Students can think of making a commit as "creating a new version". We're adding a new version to our repository - the version that
includes our `README.md` file.

11. The command to make new commits is `git commit -m "description"`, where description should be an actual description of what the changes are. In general, short and sweet commits are idea, no longer than 50 characters, explaining which files were changed and why. For longer commits students can use VIM. Feel free to share this students depending on what their comfort level is with the material so far. 

12. Commit the staged files using this command: `git commit -m "add readme"`. 

13. Type git status again. It should show that there is nothing to commit.

14. Clarify that the commits we've made only affect our local repo. Have students go to their GitHub repo and refresh the
page - the page will still be blank! GitHub doesn't have any knowledge of the most recent commit because it hasn't been pushed up to it. 

15. This can be fixed by pushing these commits to our remote repository - the one originally created on GitHub.

16. Since the local repository was cloned from the remote one, the local repo is aware of the remote. Ask students to confirm this by typing `git remote show origin`. 

17. Since the remote is already set up, all that remains to be done is to push our changes to the remote Github repository. First we'll add this line to rename our default branch from "master" to "main". Remind students that Github recently updated the default name of the primary branch to be more inclusive. Students can change the name of the main branch with this line of code:
```bash
git branch -M main
```
We'll want to sync our remote Github repository to our local directory with this line:
```bash
git remote add origin <remote url>
```
Finally we can push our local code to our remote repository with this command: `git push origin main`. Running this in our terminal will sync the local changes with the remote GitHub repository. 

18. Students may be prompted to enter their username and
password. When entering their password, it won't show up in the terminal, but it's working - just type it in and hit enter.

19. After refreshing the GitHub repo page, the newly updated README.md should be visible. Now the remote repository is up to date with the local copy.

### Collaborating through Git branches 

20. Branches are the meat of Git. They allow users to work on different parts of a project together without interfering with each other.

21. As students begin to work on their final projects they will need to collaborate using Git. Describe the following scenario to students. Assume two or more students are working on the same repo together. They want to work on
different parts of the project at the same time. How can "student A" write her code and ensure it'll be separate from the code that "student B" is writing? They can use git branches.

22. We'll be using branches to add commits to the project without affecting anyone else who is also working on it. By default, git will place us in the `main` branch.

23. The command to create a new branch (and switch to it) is `git checkout -b [branch-name]`. The `-b` will create a new branch. The `checkout` will switch from main to the newly created branch. The name of the branch has to be one word, but dashes and underscores are allowed.

24. Have students checkout a new branch `readme-about`: run the command `git checkout -b readme-about`. From there make changes to the README.md file to demonstrate the use of branches. 

25. Step through the workflow to commit changes.
    * Check the status (`git status`)
    * Add the changed file (`git add README.md`)
    * Check the status to make sure the file is correctly staged (`git status`)
    * Make a commit (`git commit -m "add about section to readme"`)

26. The command we learned for pushing commits previously was `git push origin main` because we were on the local `main` branch, and we wanted to push it to the remote `main` branch. However, this time, we're on a different branch:
`readme-about`. To sync their local changes to the remote repo, students should run the command: `git push origin readme-about`.This will save changes to the remote repository's `readme-about` branch.

### Merging a branch and handling conflicts

27. Ask students: The `main` branch is the default branch - so if changes were pushed to a different branch, how can those changes be added to the `main` once it's
ready?
Explain that to incorporate changes made to a remote branch into the main branch students will need to create a pull request. A pull request is a request for the branch's code to be added to the main branch, or **merged**.

28. Have students go to GitHub and refresh - there should be a message about a recently pushed branch. Students should on the "Compare & pull request" button to initiate a pull request.

29. Walk students through the steps to complete a pull request. 

30. Explain that at this stage, another collaborator would review the PR's code and double check it. Since this is just for educational purposes, students can go ahead and click on
"Merge pull request" and "Confirm merge". After it finishes, click "Delete branch". This only deletes it from the remote repo - and it can always be restored.

31. Occasionally, when collaborating two people will make changes to the same file on two different branches. This requires a special process to resolve conflicting changes. To learn how to resolve conflicts, we will first need to simulate a conflict.

32. In the terminal, run the following commands:
`git checkout main` (switch to the main branch)
`git checkout -b rewrite-about` (create a new branch `rewrite-about` and switch to it).

33. Explain that when a new branch is created, it begins as a clone of the previous branch. In this example, `rewrite-about` contains the same code as `main` on our local branch. This creates a "forced" conflict because the local `main` branch is
different than the remote `main` branch.

34. Update the `README.md` file with some new text, to create a conflict.

35. Step through the workflow to add, commit, and push local changes to the remote repository. 

36. Navigate to Github to create a new pull request. GitHub can't automatically merge the two because there are conflicts. They will have to be fixed manually via GitHub's editor. Click on "Resolve conflicts" to continue.

37. Github will show two labeled versions - one from the current branch, `rewrite-about`, and the other from `main`. Git needs more direction to determine how to proceed, so the file has to be manually edited. Go ahead and edit it to resolve the conflicts.

38. Click on "Mark as resolved" and then "Commit merge". This will create a new commit with the resolved changes. Once completed, merge the pull request as normal.

39. We previously ran `git checkout main` to reset the state of the repo to one where `README.md` didn't exist yet. This means that the `main` branch is out of date, and that the  emote repo contains commits that `main` doesn't have.

40. It's important to keep the `main` branch up to date, and this can be done with a simple command: `git pull origin main`. Students can think of this command as the inverse of `git push origin main`. It will pull all the repo information from the `main` branch of the remote repo. After running the command, the `README.md` should exist and contain the contents from our last merged pull request.

## Extensions for Independent Practice

### Mild

- Create a new HTML file called `index.html` and add it to staging via `git add
index.html`
- Create a new directory called `projects` and commit the folder.

### Medium

- Create and resolve a new merge conflict.

### Spicy

- Reference documentation to figure out how to reset your project to the main branch.
- Reference documentation to figure out how to reset your project to a previous commit. 
