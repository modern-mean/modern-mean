# How to contribute

Support and contributions from the open source community are essential for keeping
Modern-Mean up to date and always improving! There are a few guidelines that we need
contributors to follow to keep the project consistent, as well as allow us to keep
maintaining Modern-Mean in a reasonable amount of time.

## Creating an Issue

Before you create a new Issue:
* Check the issues on proper repository to ensure one doesn't already exist.
* Clearly describe the issue, including the steps to reproduce the issue.
* If it's a new feature, enhancement, or restructure, Explain your reasoning on why you think it should be added, as well as a particular use case.
* Titles of issues should follow the same syntax as PR's bug/feat(client/server): description.  
	* Example: bug(server): There is something bad happening
	* Example: feat(server): Add Yahoo Authentication

## Create a pull Request

###Pull Request Requirements
* Be small and concise.  Multiple PR's are preferred over large PR.
* Must pass all travis tests.
* Must not reduce code coverage.
* Should be in the following format
```
Header
Blank Line
Body
Blank Line
Footer

The header should look like:
<type>(<scope>): <subject>

The body should have any necessary detailed info about the commit:
An example, references as to where this idea came from, etc.

The footer should have all the issues tagged:
Fixes #123, Fixes #456

So a commit should like like:
feat(users): Add new Yahoo authentication

Yahoo authentication idea proposed by @codydaig
Example implementation in file.js

Fixes #82
```

* Types:
  * feat - Features, Enhancements, and overall Improvements
  * fix - Fixes, Bugs, HotFixs, etc...
  * doc - Changes to the Documentation and doesn't actually touch any code.
* Scope:
  * The scope should be where the change took place.
  * Examples: users, core, config, articles
* Subject:
  * The subject line should be clear and concise as to what is being accomplished in the commit.
* General Rules:
  * No Line in the Commit message can be longer than 80 characters.
* Reference: [Angular Conventions](https://github.com/ajoslin/conventional-changelog/blob/master/conventions/angular.md)


## Submitting the Pull Request

* Push your changes to your topic branch on your fork of the repo.
* Submit a pull request from your topic branch to the master branch on the Modern-Mean repository.
* Be sure to tag any issues your pull request is taking care of / contributing to.
	* By adding "Closes #xyz" to a commit message will auto close the issue once the pull request is merged in.
* Small changes are usually accepted and merged in within a week (provided that 2 collaborators give the okay)
* Larger changes usually spark further discussion and possible changes prior to being merged in.
