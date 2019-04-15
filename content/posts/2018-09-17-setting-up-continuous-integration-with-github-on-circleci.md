---
template: post
title: Setting up continuous integration with GitHub (On CircleCI)
slug: ci-github-and-circleci
draft: false
date: 2018-09-17T10:42:30.737Z
description: >-
  I use CircleCI frequently as my CI-CD tool. In this article, I take readers
  through the simple process of setting up a CI pipeline running through Github
  and CircleCI using a Python application.
category: Code
tags:
  - CI-CD
  - Python
  - CircleCI
  - Development Workflow
  - Workflow
---
[Continuous Integration (CI)](https://circleci.com/continuous-integration/) involves the test automation of feature branches before they are merged to the main Git branch in a project. This ensures that a codebase does not get updated with changes that could break something. Continuous Delivery (CD), on the other hand, builds upon CI by automating releases of these branches and/or the main branch. This allows small incremental updates to reach your users faster, in line with Agile software development philosophy.

In this article, I will take you through setting up CI with GitHub. We will use a Python application to demonstrate our CI pipeline.

Here are the steps we will take: ...

---
<center>
Continue reading more at the circleci.com article <a href="https://circleci.com/blog/setting-up-continuous-integration-with-github/" target="_blank">here</a>.
