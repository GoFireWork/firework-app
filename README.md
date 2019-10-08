
 ## Code Conventions
- Only use descriptive, specific capitalized commit messages. 
  - E.g.: 
    - `Add stripe-elements package`, not `add package`
    - `Create user account route when customer enters website URL` not `create user account`
-  If a commit makes more than one change (which is generally not preferred by most companies but I don't mind), please include those changes on another line. ([example](https://github.com/GoFireWork/firework-api/commit/720affeeed87a8ce8feb0433af771108609b56e5))
- It is ok to have more than one commit in a pull request. There seems to be a tendency to only have one commit. Sometimes when there are multiple commits it is easier to digest code changes.
- Use `Present tense verb change`, not `Past tense change`
    - E.g.: `Remove default open file tab in editor` not `No default tab` or `Removed default tab` (Note the extra specificity in the first commit message).
- Component names should be capitalized in commit messages; this makes it clear that what you're referring to is a component, not an element or something else
- Check spelling, especially of component names. Please try to not `git commit` spelling mistakes.
- Pull requests should generally complete issues, therefore, please include the issue your PR completes in parentheses at the end of your PR title if your PR does complete an issue. Another reason to do this is that GitHub provides some automated features when you include issue numbers.  This will help me keep the issues list clean.
  - E.g.: Add Stripe checkout (#147)
- Please use 2-3 word branch names. All lowercase. They should be two words usually, three if the branch really deserves it.

## Interpersonal Guidelines
- You can respond to messages with a reaction, and not another message so others are not notified of messages that only acknowledge receipt of another message.
  - E.g.: react with '👍🏼' instead of typing 'okay'
- Please don't link to PRs in Slack unless I have asked for one or the PR is somehow relevant.  I will check PRs soon in GitHub notifications. If a PR does block someone feel free to override this rule.

## Work Conventions

- I would like to see code that is being worked on pushed to GitHub every day at the end of your day. There are three reasons for this:
  1. So someone else can make sure you're on the right track with your approach
  2. So someone else can make changes to get you on track; course corrections as they say in maritime contexts
  3. Someone else may want to get you to the next level or __need to use your code the following day__. If we don't have access to your code every day, we may be blocked for 24 hours from making progress on something we are working on.
- You should probably `git pull` master and `git --rebase master` every day. At the current very early stage of this project, there are dramatic changes made often.  This prevents later need for merge conflicts and ensures you are not duplicating code.
- Unless otherwise specified, when you submit a pull request, the pull request should complete a feature.  In other words, the feature is ready to be used in production.
  - You can ask yourself "Is this pull request ready to be used or does it just add code?"
  - This prevents others from having to figure your code out to get it ready for production
- Please only work on things that have been requested. There are quite a few reasons for this:
  1. There is likely a plan to add what hasn't been requested
  2. The change or addition could be unnecessary
- Generally, the UI should look like other professional SAAS websites. 
  - For instance, does our pricing page look like any of the pricing pages found in a blog post about some successful pricing pages?  How can we make it look more like the others?
  - Does our header look like how professional websites look? Do we have buttons in our header or just plain, undecorated text?



