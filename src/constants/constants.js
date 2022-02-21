export const projects = [
  {
    title: 'Flatiron Hub',
    description: "React application for Flatiron students to use. Uses React with Hooks and Context for state management. The application has 4 main components. The Chat uses ChatEngine as a rest API to create a chat room. The Games and Learn components, both use external or self hosted APIs. The VideoChat component using PeerJs a WebRTC wrapper to create a peer to peer connection between two users.",
    image: '/images/flatiron.png',
    tags: ['React', 'Firebase'],
    source: 'https://github.com/mtoth003/FlatIron-Hub',
    visit: 'https://flatironhub.org/',
    id: 0,
  },
  {
    title: 'RotoRoundup',
    description:"An application built with a React frontend, Ruby on Rails backend API and a PostgreSQL database. This app allows users to create and account and sign in to the site, sessions are stores in cookies. Once signed in to the app, users can review Fantasy Sports sites, or create a forum thread to discuss any topic. Authorized site admins can delete users and forum threads.",
    image: '/images/rotoroundup.png',
    tags: ['React', 'Ruby on Rails', 'PostgreSQL', 'Active Record'],
    source: 'https://github.com/mtoth003/roto-roundup',
    visit: 'https://roto-roundup.herokuapp.com/',
    id: 1,
  },
  {
    title: 'devsConnect',
    description: "This application was built using a React frontend with a Ruby on Rails backend. The purpose of devsConnect is to serve as a platform for web developers to share interesting and useful programming content. From 'My Feed', the user can view posts from all others users. From 'My Page' update their account information such as Github and LinkedIn, or create a new post.",
    image: '/images/devsconnect.png',
    tags: ['React', 'Ruby on Rails', 'PostgreSQL', 'Actove Record'],
    source: 'https://github.com/mtoth003/devsconnect-app',
    visit: 'https://devsconnect-app.herokuapp.com/',
    id: 2,
  },
  {
    title: 'Subscription Tracker',
    description: "A simple subscription tracker that allows a user to add track their current subscriptions. Data is stored in a Google Firebase Database to for persistance. Users are able to add, edit and delete subscriptions. The site is deployed with Firebase as well.",
    image: '/images/subscriptiontracker.png',
    tags: ['React', 'Firebase'],
    source: 'https://github.com/mtoth003/subscription-tracker',
    visit: 'https://subscription-tracker-9fc70.web.app/',
    id: 3,
  },
];

export const TimeLineData = [
  { month: "August 2021", text: 'Started my journey, starting with HTML, CSS and a bit of JavaScript', },
  { month: "October 2021", text: 'Decided to take my career leap, left job and enrolled fulltime at Flatiron School', },
  { month: "January 2022", text: 'Graduated from Flatiron School with experience using full-stack technologies', },
  { month: "February 2022", text: "Started my career search, this isn't complete quite yet!", },
];