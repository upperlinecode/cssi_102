# Mini-Project 1: HTML site (With Bulma and JavaScript)

## Objectives

* Students will ideate and work in collaborative groups.
* Students will synthesize the content they learned in days 1-4 of this course.

## What We're Building

Students should work together to build whatever they want - it is advisable to follow the protocols set forth in the [Project Mode](../projectMode.md) guide with respect to ideation, but skip the more drawn out group formation pieces. Simply assign groups randomly and send students on their way.

Note: Students will not likely use all topics covered so far in their projects - some may not even use JavaScript at all. That's okay! The goal of this project day is for students to feel proud of what they've built, and to deepen friendships with their project partners. There will be plenty of opportunities to dig deeper into JavaScript in the coming weeks. 

Share the following links with students, to give them a idea of the scope of project they should be aiming to build.
* <a href="https://hawaii-travel-site.glitch.me/">Hawai'i Travel Site</a>
* <a href="https://tokyo-travel-page.glitch.me/">Tokyo Trip Builder</a>

## Pushing Projects to Github

Students will be using Git Github later in the course to collaborate on their final project. To begin familiarizing them with Git and version control, it is a good idea to begin encouraging them to use it to backup their work. Encourage them to follow this workflow whenever the want to store their work, but particularly on project days.

1. Students should log into their Github account. If they don't have one yet, give them a few moments to register an account.

2. From their Github profile, they should click the "Repositories" tab, then "New".

3. Give students a moment to step through naming and creating a repository. They can enter a brief description or write a more detailed README later.

4. In the command line, students should initialize Git in their repository. Initializing Git creates a `.git` file in their repo. Though the `.git` file is typically hidden from us, unless we type a special `ls` command to view it, students should be aware that it is there, and it contains all of the information about their repositories history, making version control possible.
First they'll want  to make sure they are in their project directory, then type `git init`.

5. Students can type `git status` to confirm that Git is initialized in their repository and has awareness of all its contents.

6. Though Git is aware of thes files, it doesn't yet know to keep track of them and save changes when they occur. Saving in Git is a three step process, and much more intentional than the "command + S" students might be familiar with to save in Google Docs or Cloud Shell. 

7. The first step in publishing changes is adding all of our files to a local staging area. Though Git is aware of thes files, it doesn't yet know to keep track of them. We must explicitly tell Git to track the files. As students are working locally they can track their incremental progress by using `git add <filename>` to store the changes for an eventual commit. They can replace `<filename>` with `.` to add all of the files. 
Typing `git status` again will update them with which files have now been staged for commit.

8. When students are happy with their changes and would like to capture them and save them, they can commit them.  Encourage students to think of committing to Git as creating snapshots in the chronology of a Git project. These snapshots capture some milestone or meaningful change in the project. Have students enter the command `git commit -m <message>` where `<message>` is a brief summary of the changes they've made to their project. Have students type `git status` again. They should now see that their working tree is clean, all changes they've made locally have been tracked and saved. 

9. They have now saved their changes but only locally. To make their remote repository aware of the updates they've made locally, they must push these changes to their remote repository on Github. The command `git push origin master` will send these local changes to the remote repository hosted on Github. Have students refresh their Github repository to verify that their changes have been synced to their remote repository.

## Notes on Friday

Fridays, especially the first and second Fridays of the course, are intentionally designed with no new content. These "flex days" are critical for student success - the extra time spent without the addition of new material allows them to deepen their understanding by shifting from cognitive to autonomous performance. 

This mini-project sprint that allows them to brainstorm ideas and then try to implement them is one of the best ways to offer a comprehensive review of the topics covered earlier in the week.

That said, if it has become apparent that a specific concept proved more of a stumbling block than was anticipated, that concept is critical to know moving forward,  and a large subset of students are experiencing difficulty with that topic, then **if an instructor wants to offer a review session for that subset of students which covers these topics in a little more detail and formality, the team should try to adjust to make that happen.**
