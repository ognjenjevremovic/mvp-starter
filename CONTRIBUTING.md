# How to become a contributor and submit your own code to {{name}}

I really appreciate your interest and effort to contribute to {{name}}. It's people like you that make the open source community such a great community!
All efforts to contribute are highly appreciated and encouraged.
I recommend you open an issue first describing your feature request (bug report, documentation change, etc) prior to spending a lot of time making a PR that may not align with the project roadmap.

Any type of contribution is more than welcome, not only in code. You can help with many things, such as:
* ***QA***: filing a bug report - the more details you can give the better. Please, if possible, include the screenshots (with console outputs), logs / errors, provide steps on how to reproduce the issue or even provide the link to the code where the issue is present, 
* ***Marketing***: write blog posts, howto articles, gists with usage examples, answer the questions on the issues tab or stackoverflow or any other way you see fit and help your fellow developers,
* ***Code***: take a look at the open issues here on Github. Even if you can't write code yourself, commenting on the issue, showing that you care about it, providing instructions for others, including the logs or any activity on the matter is welcomed. It helps me prioritize and triage the issues more easily.
* ***Donation***: Thank you! I welcome financial contributions in full transparency on my [Buy Me a Coffee page](https://www.buymeacoffee.com/ogisa) page (as *Github sponsor* program, is unavailable in my country of residence).


## Your First Contribution
Working on your first Pull Request?
You can learn how from this *free* series, [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).
*(P.S. It requires the *egghead* account in order to access the lessons, but I promise you *it is 100% free!*)*


## Reporting an issue
I am using GitHub Issues to manage any public (known) bugs.
I tend to keep a close eye on the Issues panel so please, before filing a new issue, try to make sure the problem does not already exist.

Remember to also be active on any issues that you are following, as that helps me prioritize and triage the issues more easily.
It would be great if you could post screenshots, exceptions, full stack trace, platform you're running your code on and steps on how to reproduce the issue.
Feel free to join a discussion on an existing issue in any point of time and provide more context, give feedback or your expertise on how we can resolve the issue.

Before submitting an issue, please make sure:
* You are experiencing a concrete technical issue with {{name}},
* You have already searched for related issues and found none open (if you found a related closed issue, please link to it from your issue),
* Your issue title is concise, on-topic and polite,
* You can and do provide steps to reproduce your issue,
* You have ensured the application you are using to reproduce the issue has a clean `node_modules` directory, meaning:
    * no dependencies are linked (e.g. you haven't run `npm link`),
    * you haven't made any inline changes to files from within the `node_modules` folder,
    * you don't have any weird global dependency loops.
    * The easiest way to double-check any of the above, if you aren't sure, is to run: ```$ rm -rf node_modules && npm cache clear && npm install``` from the root of your project.


## Before Submitting a Pull Request
I will review your pull request and will either merge it, request changes to it or close it.

Before submitting your pull request make sure the following requirements are fulfilled:
* Fork the repository and create your branch from `master`,
* If you’ve fixed a bug or added the code that should be tested, add/change the appropriate tests,
* Link the corresponding issue in either your commit or your PR,
* Ensure the tests are passing,
* Make sure your code lints.


## Contribution Prerequisites
Prior to contributing to the project, please ensure that:
* You have `Node >= v12` or higher installed on your machine,
* You are using `npm >= 6.9+` or higher,
* You are familiar with `Git` (and git workflow explained in *Submitting your code* section).


## Submitting your code
You consider contributing changes to {{name}} – **thank you!**
Any code change should be submitted as a **pull request**.

Please consider these guidelines when filing a pull request:
* Commits follow the Angular commit convention,
* JavaScript is written using ES2015 features,
* 4 spaces indentation,
* Features and bug fixes should be covered by test cases.

Please, do follow the standard procedure when submitting your PR for review (the projects I maintain adhere to the *"fork-and-pull"* Git workflow):
1. Submit an issue describing your proposed change to the project (or join a conversation of an already existing issue),
2. I will respond to your issue as soon as possible,
3. Fork the repository and create your branch from `master`,
4. Clone the project to your machine and work on your fork,
    * Make your changes,
        * Most of your changes should be focused on files inside `src/` and `test/` directories and/or `README.md`.
    * Change or add new test cases when needed,
    * Run tests and make sure they pass,
    * Add changes to README.md when needed. 
5. Commit your changes to your own (feature) branch in your fork,
6. Make sure you merge the latest changes from the *"upstream"* and resolve any conflicts prior to submitting the PR,
7. Ensure that your code adheres to the existing style in the sample to which you are contributing (in terms of linting, code style, test coverage, commenting guidelines, etc),
8. Push your work back up to your fork,
9. Submit pull request using a template provided and try to give as much context about your change as possible (it would be great if you could manually test your changes prior to making a PR).


## Code review process
The bigger the pull request, the longer it will take to review and merge.
Try to break down large pull requests into smaller chunks that are easier to review and merge.

It is also always helpful to have some context regarding the pull request, ie. explain:
* what the code does,
* what issue(s) does it resolve,
* is it a *breaking change* (non-backward compatible),
* what was the purpose of the change.


## Rules
There are a few basic ground-rules for contributors:
1. No `--force` push to main branch is allowed,
2. No modifying the Git history in any way after a PR has been merged,
3. Non-master branches ought to be used for ongoing work,
4. External API changes and significant modifications ought to be subject to an internal pull-request to solicit feedback from other contributors,
5. Internal pull-requests to solicit feedback are encouraged for any other non-trivial contribution but left to the discretion of the contributor,
6. Contributors should attempt to adhere to the prevailing code-style,
7. A contributor with write access must approve pull-requests prior to merging,
8. All integrated CI services must be green before a pull-request can be merged,
9. All releases must adhere to [Semantic Versioning](http://semver.org/),
10. In case it is not possible to reach consensus in a pull-request, the decision is left to the lead maintainer.


## Code of Conduct
Everyone participating is governed by the [Code of Conduct](CODE_OF_CONDUCT).
By participating, you are expected to uphold this code. Please read the full text so that you can read which actions may or may not be tolerated.

```$ npm ci```

## Running the tests
You can run the test suites by using the following command:

```$ npm run test```


## Credits
Thank you to all the people who have already contributed to {{name}}!


## Developer's Certificate of Origin 1.1
By making a contribution to this project, I certify that:
* (a) The contribution was created in whole or in part by me and I have the right to submit it under the open source license indicated in the file; or
* (b) The contribution is based upon previous work that, to the best of my knowledge, is covered under an appropriate open source license and I have the right under that license to submit that work with modifications, whether created in whole or in part by me, under the same open source license (unless I am permitted to submit under a different license), as indicated in the file; or
* (c) The contribution was provided directly to me by some other person who certified (a), (b) or (c) and I have not modified it.
* (d) I understand and agree that this project and the contribution are public and that a record of the contribution (including all personal information I submit with it, including my sign-off) is maintained indefinitely and may be redistributed consistent with this project or the open source license(s) involved.


## License (MIT)
Copyright (c) 2021 Ognjen Jevremovic <https://github.com/ognjenjevremovic> (https://ognjenjevremovic.me)

```md
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
