'use strict';

const d = new Date();
const year = d.getFullYear();
const name = 'NdagiStanley';

module.exports = {
  url: 'https://stanmd.tk',
  title: 'Stan_MD',
  subtitle: 'Ndagi Stanley',
  copyright: `© Stan_MD™ ה | AD-${year}`,
  disqusShortname: 'stanmd-tk',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-92241514-1',
  menu: [
    {
      label: 'Hackathons',
      path: '/category/hackathons/'
    },
    {
      label: 'Tips',
      path: '/category/tips/'
    },
    {
      label: 'Travel',
      path: '/category/travel/'
    }
  ],
  author: {
    name: 'Ndagi Stanley',
    photo: '/stan.png',
    bio: 'Software Engineer',
    contacts: {
      twitter: name,
      github: name,
      linkedin: name
    }
  }
};
