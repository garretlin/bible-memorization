# Contributing to bible memorization

We would love for you to contribute to README Template and help make it even better than it is today! As a contributor, here are the guidelines we would like you to follow:

- [Contributing to bible memorization](#contributing-to-bible-memorization)
  - [Getting Started](#getting-started)
  - [Pulls Requests](#pulls-requests)
  - [Submitting a Pull Request](#submitting-a-pull-request)

## Getting Started

Start by **starring** the repo or [forking](https://github.com/garretlin/bible-memorization/fork) it.

## Pulls Requests

PRs can be [opened](#submitting-a-pull-request) on our [GitHub Repository][GitHub] and used for the following purposes adhering to their respective guidelines

When deciding if we merge in a pull request, we will require:

* at least 1 review
* good quality code
    * no spelling mistakes
    * good grammer
    * clearly stated changes

## Submitting a Pull Request

Follow these steps and guidelines when starting with a PR:
* Make your changes in a new local git branch:
     ```shell
     git checkout -b BRANCH_NAME origin/master
     ```
* Use one branch per fix / feature, and each branch should have the prefix `feature` or `bugfix` followed by a backslash
* Commit your changes
    * Please provide a git message that explains what you've done
    * Make sure your commit messages follow the [conventional guidelines](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53#file-commit-message-guidelines-md)
    * Commit to the forked repository

        Example :pencil2: :
        ```
        $ git commit -am 'Adding Details in Deployment Section'
        ```
    * Push to the branch in the forked repository
        
        Example :pencil2: :
        ```
        $ git push origin BRANCH_NAME
        ```

After making sure that all above guidelines have been followed completely,

* Make a pull request to the `master` branch in the [main repo][github]
* Make required updates to the changes
* Make sure there are no merge conflicts    
* Once your PR is approved and you are done with any follow up changes:
    * Rebase to the current master to pre-emptively address any merge conflicts.

        ```shell
        git rebase master -i
        git push -f
        ```

[GitHub]: https://github.com/garretlin/bible-memorization