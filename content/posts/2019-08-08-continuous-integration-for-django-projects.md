---
template: post
title: Continuous integration for Django projects
slug: circleci-django
draft: false
date: 2019-07-23T12:55:57.672Z
description: >-
  I use CircleCI frequently as my CI-CD tool. In this article, I take readers
  through the simple process of setting up a CI pipeline running through Github
  and CircleCI using a Django project.
category: Code
tags:
  - CI-CD
  - Python
  - Django
  - CircleCI
  - Development Workflow
  - Workflow
---
This is a bit different from the post on introductory CircleCI setup posted [here](https://stanmd.tk/ci-github-and-circleci).

This article focuses on setting up a continuous integration pipeline for a Django project, but the information here can be extended to other Python projects, too. Django is a Python framework that is described as the “web framework for perfectionists with deadlines.” It is considered a great tool for creating Minimal Viable Products (MVPs) because it is easy to set up an application with a database and to run tests. It delivers high quality code and has excellent documentation. These features also benefit your users because it promises the fast shipping of new features.

Here are the steps we will take:

* Create a Django app
* Create tests for the app
* Dockerize the app
* Configure CircleCI
* Run locally
* Push to GitHub
* Add a badge
* Explore optimization with caching


---
<center>
Continue reading more at the circleci.com article <a href="http://bit.ly/2MHirJU" target="_blank">here</a>.
</center>
<br>

Writing this article, prompted me to create a Git repository with Django girls tutorial complete and host it on Github. Feel free to follow the commits through the different branches in the [repo](http://bit.ly/2OVjmJc).
