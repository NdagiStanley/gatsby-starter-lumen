'use strict';

var d = new Date()
var year = d.getFullYear()
var name = 'NdagiStanley'

module.exports = {
  url: 'https://stanmd.tk',
  title: 'Stan_MD',
  subtitle: 'Ndagi Stanley',
  copyright: '© Stan_MD™ ה | AD-' + year,
  disqusShortname: 'stanmd-tk',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-92241514-1',
  menu: [
    {
      label: 'Articles',
      path: '/'
    }
  ],
  author: {
    name: 'Ndagi Stanley',
    photo: '/stan.png',
    bio: 'Software Engineer',
    contacts: {
      twitter: name,
      github: name
    }
  }
};
