---
template: post
title: Out with the old; in with the NEW (Blog)
slug: old-new-stanmd.tk
draft: false
date: 2019-04-13T17:09:53.831Z
description: >-
  It seems Easter weekend is a great time to do revamps. In 2017 Easter weekend
  I revamped my web-profile. Today, just days to Easter; I've updated my blog on
  stanmd.tk
category: Self
tags:
  - web-profile
  - revamp
---
In 2017, I was hosting my 'static' web-profile on Wordpress. We could say that that was an overkill. What's more, was I still in the LAMP stack age while others thrived in Git-Based content using Jekyll etc.. like in [Github pages](https://pages.github.com/)?

"Wordpress never gets old!" is how I convince myself. With business thriving for theme creators in Envato, see [this](https://themeforest.net/) and [this](https://elements.envato.com/wordpress/themes), among other platforms, I bet a lot of guys agree with me. Plus it still serves for its purpose: providing an easy-to-use CMS that's widely supported by hosting companies; has a myriad of customizable themes and talent to do that for you.

Back to the chronicle, I bought stanmd.pro for the Wordpress-powered web-profile and [we were live](https://web.archive.org/web/20171126072325/http://stanmd.pro/)!! for more than at least one year, [It's still indexed by Google](https://www.google.com/search?q=stanmd.pro) 😅.

### Then
Here are the images of my immediate former blog:
_Home page_
![stanmd.tk home page](/media/stanmd.tk_home.png "stanmd.tk home page")
_Blog_
![stanmd.tk blog](/media/stanmd.tk_blog.png "stanmd.tk blog")

> Technologies

Here I used Netlify and [NuxtJS](https://nuxtjs.org/): A VueJS framework. _VueJS, I've always been a fan._ I used this [template](https://github.com/andreliem/vuecms) by [andreliem](https://twitter.com/andreliem) who runs [VueJS radar](https://www.vuejsradar.com/). _There are a good number of valuable resources on VueJS there_

> Experience

The Blogging experience was great: just push a new markdown file as a post to github and the site is built and hosted by Netlify\[https://netlify.com]. I went ahead and integrated a `Buy Me Coffee` button by [kofi](https://ko-fi.com/M4M5OEAR) _surprise me_ 😉 and a `Meet Me` button by [Vyte](https://www.vyte.in/ndagistanley).

I like the fact that in each page I could add unique meta-tags. _That's good for [SEO](https://www.wordstream.com/meta-tags)_

> Downsides

Just one really. I could not get the slugs to work. Well we can agree that I did not take time to make them work and opted to source an alternative... _A good segue into the now new stanmd.tk_

### Now
You've seen it now that you are here:
![new stanmd.tk home and blog](/media/stanmd.tk_home_blog.png "new stanmd.tk home and blog")

Again, a template as you can see that [this repo](https://github.com/NdagiStanley/lumen) is a fork from this guy's [project](https://github.com/alxshelepenok/gatsby-starter-lumen). I would like to thank [Teddy](https://github.com/teddyotieno) for letting me know of this alternative after I shared my frustrations with the former 😁.

> Technologies

The template/ starter uses [Gatsby](https://www.gatsbyjs.org/) which is a free and open source framework based on React. *So we are using React now* 🙌 
Slugs work out of the box, of course! Pagination, disqus - for commenting, beautiful typography among [other neat features](https://github.com/NdagiStanley/lumen#features) make it standout over its close [competitor](https://github.com/LekoArts/gatsby-starter-minimal-blog) another gatsby starter by LekoArts. LekoArts's [gatsby starter portfolio](https://gatsby-starter-portfolio.netlify.com/) is amazing.
Both use [Netlify CMS](https://www.netlifycms.org/) *still built on React* 🤔 which is amazing once configured (which is not difficult at all) *PS: This a nice read on VueJS and Netlify CMS*

> Experience

My goal in revamping was to get my **writing groove back on**. Could you imagine that I have written three articles in two days as soon as I got this set up? 💪
Now besides writing in markdown, I can write in Markdown or Rich Text (with preview) on the browser, via the [admin](/admin) page. I enabled Google OAuth for the Netlify Identity so I can pretty much blog anywhere. My updates become commits on Github with my Github account. Sweet!
I also like the `draft` option.
I had not written React for some time, so writing this [component](https://github.com/NdagiStanley/lumen/commit/07419997e0a6340f720febefbd1dfa0e7f148562) `TK` was nostalgic 😄. I was intrigued by the use of snapshot for tests. When did that come out?!
In short this brings me the full CMS experience with very little input on my part.

> Downsides

None for now!
I'll mention updates I would like to see or rather that I can push to the project's repo as a PR. The blog could benefit from adding these features:
- Minutes to read
- Dark mode (maybe 🤷🏾‍♂️😁)
- Scheduled toggle from draft to live (I understand [JAM stack](https://jamstack.org/), so this could be a stretch)

### JAMStack
Building blogs and apps on the aforementioned Nuxt and Gatsby lie in the broader spectrum of _built on JAMStack_. I am glad that with this setup I am following JAMstack's [best practices](https://jamstack.org/best-practices/). I consider it worth diving into.

In conclusion, working on this has been amazing. I have learnt a ton! We all have our preferences; others don't like blogging while others love, love doing it! This guy prefers using Vim and a script to push to live 😎. I feel that this revamp is an upgrade.
Till the next one 🥂.
