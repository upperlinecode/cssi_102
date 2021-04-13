# Project Mode Guide

1. [Mindsets](#mindsets)
2. [Ideation & Group Formation](#ideation)
3. [MVP & Versioning](#versioning)
4. [Workflows](#workflows)
5. [Troubleshooting](#troubleshooting)
6. [Graduation](#graduation)

## Mindsets <a id="mindsets"></a>

Project mode is challenging for students - they need to overcome a fair number of understandable but disadvantageous mindsets if they are to succeed during this time. Here are some of the most common challenges:
* Students want to work alone, which means they will not have peers to help them debug. At best, this doubles or triples the demand on the instructor, and at worst allows them to silently give up and stop working.
* Students will introduce bugs into one another's code. They will do this significantly more if they are live-editing the same repo from different locations without being on a call together.
* Some students will bite off more than they can chew, and will struggle to narrow their project down to a manageable level.
* Other students will scope something entirely too simple and declare that they are done after 1 day - see the [troubleshooting](#troubleshooting) section for some solutions for this one.
* Some students will feel the need to use this experience as a way to "beat" the peers, including their group members, and will view project mode as a competitive endeavor.

In order to proactively counteract each of these mindsets, it's generally a good idea to highlight and then consistently refer back to some healthier mindsets.
* **Great things are built in teams.** - Almost any app you use or website you access on your phone is the result of collaborative work of a team, not a maverick developer in a dark basement somewhere. At Google, we all work collaboratively, and the ability to work collaboratively is actually a rarer, more valuable, and more promotable skill than the ability to code something all by yourself. If you think you'd work better alone, then definitely DO work alone outside of this program, but while we're all here together, seize the opportunity to hone your ability to work with others.
* **No project is ever finished.** - Any website you're used to using is constantly being updated - new features added, new visual design added over the top, and so on. Even games which used to be distributed as physical software are now maintained through constant updates and evolving over time in response to user feedback. If companies like Google, Snapchat, or Instagram had stopped with their first finished product, none of them would be where they are today. They launch their products when they are good enough to deliver value, and then make them better and better over time.
* **You have to break code to make it better.** - Nearly every improvement made to a project starts by adding lines of code that will break the project. In production, we hide this from users by having development and production builds, but now that you are all developers, you need to get used to the idea that your screen will be showing errors 90% of the time.
* **No code snobs allowed.** - We were all beginners once, and there will be plenty of opportunities to show off how much you learned later on in life, like in coding interviews. In this context, there are no code snobs allowed, and we expect you to encourage and support one another.  

## Ideation & Group Formation <a id="ideation"></a>

#### Ideation

There are a dozen ways to handle ideation, but the bright lines are these:
* Come up with more ideas than you need.
* Give students lots of choice, but help keep them from choosing something that will self-destruct.
* Help students stay positive and very "yes-and" throughout this process. We can prune ideas later.

As long as you're following those guidelines, you're probably in good shape. Here's one example of what that might look like:
1. Show some example finished projects, and/or make a list of every concept we've learned so far. This can help put some guardrails on ideation and keep us from getting to wildly carried away.
2. Send students to small groups for 3-10 minutes, and challenge them to come up with 5-10 project ideas. Their goal is to write these down in some common place like a Google Doc, giving a one-sentence summary of what each might be, without falling into the rabbit hole of completely building out any one idea. At this brainstorming phase, no idea is a bad idea; write it down and move on. Generally these projects are likely to fit into three major categories:
    * Interactive Art Projects - things like our rainbow color canvas allow students to create a tool that users can use to create art.
    * Meditative Animations - things like our bouncing balls offer the user a chance to simply enjoy created art without interacting with it.
    * Games - these may be remakes of classic arcade games like we've demonstrated, but they may also be clones of more modern games like Angry Birds, or more original designs.  
3. Bring students back and have them identify the top 2-3 projects they are interested in. You can use an upvoting platform to narrow down ideas when the group is too large for every single students to weigh in on every idea.
4. Go over the top ideas (usually 20-25 or so) and talk through the difficulty of each one. Here's a useful scale:
    * ⭐ - A one is a project that is perfectly in line with what we've built so far - it's essentially a reskinning of an earlier idea. A one rating does not mean the project is too easy; rather it means that the project is accurately scoped to within the course.
    * ⭐⭐ - A two is a project that will require you to synthesize multiple concepts from different days in a way we've not tried before. A two will be challenging, but is likely doable in the time we have.
    * ⭐⭐⭐ - A three will require at least one new concept, idea, or tactic that we haven't covered yet. You'll need to watch some tutorials to get it off the ground, and depending on how that process of learning something new goes, you may not finish the app in the way you envision it. Anything that uses websockets or another library like "p5 Play" to ramp up a game that we've already built will fall into this category.
    * ⭐⭐⭐⭐ - A four will require multiple new concepts, ideas, or tactics, and as such has a lot of potential to go wrong or be more complicated than you envision it. You will likely only finish a much more primitive version of this app, so make sure you're okay with that before starting. Anything that uses a call to a machine learning API might fall into this category.
    * ⭐⭐⭐⭐⭐ - A five is something that the instructors are not confident that they themselves could build, are not certain can be built, and are fairly certain they'd be unable to help debug later on. Calling a project a five doesn't exactly mean "no, you may not make this," but by making it clear that you're washing your hands of this responsibility, you help your students to avoid picking something for clout that will leave them frustrated. If a student picks a five anyways, you also pave the way for difficult conversations later on where you have to tell students that you are unable to debug what they have built, and that they may need to choose a new project.

#### Group Formation

5. Have students fill out a survey, and name that you'll do your best to match them up, but that through a sheer numbers game, you cannot make any promises. On this survey, ask students to do each of the following:
    * Rank their top 3-5 project choices - leave this fairly open-ended, because some students won't care much between their first and third choices, and other students will list three to comply with your instructions, but will only be happy if they get their first choice.
    * Identify a peer (or multiple peers) who they'd like to work with. Consider also asking who they think they'd work productively with, who they think they could help, and who they think might help them - asking this question multiple times in different ways helps students push beyond "who do I think is cool" and think more reflectively about the nature and purpose of this project and these partnerships. Be sure to name that working alone isn't an option, and reinforce that students who wish to work alone should do so, but should do it on their own time, and not throw away this rare opportunity to collaborate in a low-stakes environment.
    * Identify a peer (or multiple peers) who they have serious reservations about working with. Be sure not to pair someone with a person they list here.
6. Review these surveys and spend some time pairing students off into groups of 2 (or three if absolutely necessary). Prioritize student choice - try to make sure that at least one (if not all) of their survey responses are dignified.
7. Communicate these pairings to students along with whatever expectations you have for their process of getting started.

## MVP & Versioning <a id="versioning"></a>

The most critical part of this process for students is taking time to define their MVP, and then asking them to identify what additional features they will layer in as time goes on, and to estimate how difficult each of those features might be. Generally we ask students to do this in two parts - first identify everything that might be part of the final finished project, and then work backwards to identify the simplest possible version of that thing - something that can be built in a single day.

For example, if a student were to try to build the classic arcade game brick breaker, they might choose to version the project as follows:
1. The paddle moves horizontally with the mouse, there is at least one (hardcoded) brick on screen, and the brick breaks when the ball collides with it.
2. There is a full set of bricks on screen, and there are lives and scoring systems.
3. There are power-ups that fall from certain bricks.
4. There are multiple levels, either designed programmatically or manually.

As students go, they may choose to reorganize these features, drop some off the roadmap, or add others in as they realize what their project needs more specifically. Encourage students to give themselves grace to make these changes as they go, but make absolutely sure that their MVP is scoped as simply as possible. Most students instinctively describe an MVP that is actually more suited to a version 2 or 3, so whatever they say can be built in a day, challenge them to scale it down even further, with the reminder that if they finish early, they can always move on to version 2 earlier than expected.

## Workflows <a id="workflows"></a>

Project mode workflows are important to establish early, and they can be modified to accommodate both in-person and remote learning.

Here are some of the structures that have proven most successful:
* **Daily stand-ups** - Have students meet and post-mortem the previous day's work, scope out the goals for the day in order of priority, and then identify any blockers for the upcoming day's work.
* **Instructor check-ins** -  Instuctors can easily spend every minute of a class day debugging, so setting aside time to check in with individual students at a more holistic level can be really helpful in identifying what each group might need, as well as any trends that make sense for whole-group intervention.
* **PSP (problem-solving protocols)** - In general, students need to try to triage their problem solving in the following order, allowing maybe 2-5 minutes per step: Run the code and add debugging statements, Google your error, Rubber duck your code, Ask a peer, Ask a teacher and take a break. Any time a student spends more then about 10-15 minutes in frustration, they've left productive struggle, and ought to have progressed through this hierarchy and signaled their instructor or TAs for help.
* **Breaks** - Include breaks at both the whole-group level, and allow student freedom to take them additionally on a more individual level. Consider enforcing a pomodoro protocol if students are struggling to identify when they need to take breaks on their own.
* **End-of-day forks** -  At the end of each day's work, encourage students to create a fork/remix of their current project, name it something like `sarah-project-day-2-checkpoint` and submit a link to that snapshot as the end of that day's work (perhaps as a part of daily snippets). This is a sort of a stand in for git commits and the way you have to manually specify your commits. This will also help prevent disaster later, when a student accidentally breaks their code and struggles to revert back to a working state.

## Troubleshooting <a id="troubleshooting"></a>

Here are the challenges students are likely to face more individually, as well as our recommended strategies for solving those feelings:

* **"I'm stuck"** - this might happen for two reasons: either the student doesn't know WHAT they want to do next, or they don't know HOW to do what comes next. The problem here is that there are usually 3x more students stuck than there are instructors to unstick them, so try to route them to each *other* for help instead of solving everything on your own. If you already helped one group with something complicated like gravity, then consider sending the second group that asks over to meet with the first, and then ask the first group if they'd be willing to demo their code for the second group. Asking students to help each other while attaching high honor to helping someone else is the best way for you to multiply the impact of every one-off lesson you teach to an individual group.
* **Interpersonal tension** - It's really common for some groups to get frustrated with each other. The root cause can vary, so it's important to do a lot of listening first before recommending any action. One of the most common situations is for one group member to be ignoring the input of another member, and one of the best solutions to that issue is simply to point out that it's happening. Most of the time, the more dominant group member will back down and make room if they're simply called out on their behavior.
* **Unequal distribution of work** - Sometimes if two students with wildly different levels are paired up, one will do most of the work while the other simply watches, and that spectator role gets boring after about 30 minutes. Similarly to the above, you can usually fix this by calling attention to it, and then asking students to solve the problem before moving ahead.
* **Overriding / undoing one another's work** - In a world where students are consistently making changes to the same work from two different terminals, it's possible for one to introduce a bug that the other isn't aware of. In general, the best solution is to switch them to a pair programming protocol, but if that's not possible, try to segment the work into different functions, files, or even sketches so that each person can work on a feature without disrupting the other, and then manually merge those features back in by copy pasting, and do that together, debugging any naming convention shifts that need to be debugged along the way.  
* **Not communicating** - This broadly encompasses a lot of the previous items, but a LOT of these problems can be solved if students are live on a VC and screensharing for most of their time together. If you can trace the problems back to the fact that students are working without any open lines of communication (or they're relying too much on text / chat), getting them on a VC together might be the solution.
* **Not making progress, but not asking for help** - This one is hard to notice, but easy to solve. Some groups are more comfortable living in struggle than they are are asking for help, and there will be enough groups asking for help that it's easy not to notice that these quieter groups are struggling. Make sure to review the end-of-day code submissions for any individual who you didn't get to work with directly.
* **"I'm done!"** - Sometimes students will show up halfway through project mode and say "I'm finished!" This can come from one of a few different root causes, but here are some of the most common causes:
    * Students need some outside help / user testing to get feedback on what needs to be made better - one of the best ways to fix this is by having all students do a prototype presentation halfway through project mode. Students are often jealous of or inspired by the work of their peers.
    * Students are afraid to mess with something that works for fear they might break it, and need to be reminded to make a checkpoint and then code recklessly.
    * Students actually don't really like this project or their partner, and need to be given permission to start on something totally new, or start something by working alone.
* **Rabbit hole** - It's really common for students to start working on something that is not essential for their finished product, but they get so wrapped up in it that it takes 3 days instead of an hour. If the student and their partner are making progress, seem truly happy, and aren't worried about getting left behind for final projects, just let them work as is. But if it's clear they are frustrated, sometimes it is helpful to put time limits on a certain rabbit hole: "It's really cool that you're attempting this challenging thing, but it also seems frustrating, and like it's going to take a lot of work. Here's my recommendation: let's take another hour on this one, and then at the end of the hour, if you haven't got it yet, let's set this aside for a while. You can work on another feature, and if you finish that other one, we can come back to this one and look at it with fresh eyes later."

## Graduation <a id="graduation"></a>

One of the most important finishing touches is graduation - an opportunity for students to showcase their work and talk about their process. The goal here is that students find joy in what they create, feel empowered to solve any problem by persevering and asking for help, and leave hungry for more CS skills. The purpose here is to build community and a reflective nature that will serve them when they start digging deeper in more traditional CS classes in college.

#### Presentations

Presentations can look any number of ways, but here is a sample agenda for a remote graduation:
1. Build a showcase or gallery and allow students to explore each other's projects.
2. Have each group present on their project. Presentations are generally very short (3-5 minutes) and include an opportunity for the students to answer some of the following questions:
    * What did you originally set out to build? Who is it for?
    * [Demo the code]
    * What was the hardest part? How did you get past that hard part?
    * How did the project evolve over time as you worked on it?
    * What bugs do you have left that are still "bugging" you?
    * If you had more time, what other features / ideas would you add?
3. Answer any number of audience questions.
4. Cheer! Celebrate! Applaud each group!

#### Feelings Friday

After everyone has presented, make some time and space for folks to discuss their experience overall. Here's a good set of prompts for this, which is often better handled in smaller cohorts:
* How are you feeling?
* What's something new you learned about yourself?
* What's a victory you're claiming from this experience? More specifically, what's an obstacle you overcame that you'll remember and look back on when you need a reminder that you're awesome in the future?
