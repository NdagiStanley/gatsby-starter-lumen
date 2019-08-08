---
template: post
title: 'Tip: Dark mode for Jupyter Notebooks'
slug: dark-mode-jupyter-notebook
draft: false
date: 2019-08-08T11:30:19.757Z
description: |-
  Dark mode everything!
  Dark mode looks awesome and here's how to have it on Jupyter Notebook.
category: tips
tags:
  - tips
  - code
  - python
  - jupyter
---
If this was an article it would be entitled **_Theming Jupyter notebook_**. However, since it falls in the tip category, I'll make it short hence the current title.

[Jupyter](https://jupyter.org/) makes code writing interactive and allows you to publish as you would an article. You can teach with it, learn on it and publish a notebook/s on several platforms like [Github](https://github.com/NdagiStanley/dsa/blob/master/DSA%20-%20Medium.ipynb) and [Google Colab](https://colab.research.google.com/notebooks/basic_features_overview.ipynb) (examples linked).

A notebook is usually plain white like this:

After going through the installation guide [here](https://jupyter.readthedocs.io/en/latest/install.html) simply run `pip install jupyterthemes` and `jt -t onedork` (in the same virtual environment) before starting the notebook. 

The complete list of commands to run in your terminal or command prompt:

```bash
pip install jupyter
pip install jupyterthemes
jt -t onedork
jupyter notebook
```

Then click on the link in the output starting with the following: `http://localhost:8888/?token=` ...

Before:

![plain-jupyter-theme](/media/screenshot-2019-08-08-14.59.03.png)

After:

![jupyter-dark-mode](/media/screenshot-2019-08-08-14.56.28.png)

To reset simply kill the server, **Ctrl+C** then run `jt -r`. More details are in the [jupyter-themes' github page](https://github.com/dunovank/jupyter-themes).

- - -

[This gist for All things Python](https://gist.github.com/NdagiStanley/bf9db623e8a96ef2ab631a28c9a1eba8) has proved useful overtime for me, help yourself to it. Feedback is welcome.

Catch more tips [here](https://stanmd.tk/category/tips/).
