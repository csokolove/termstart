/*
  Consts
*/

const LS_KEY = "links";
const LS_ENGINE_KEY = "engine";
const LS_THEME_KEY = "theme";

const ENGINES = {
  google: "https://google.com/search?q=",
  ddg: "https://duckduckgo.com/?q=",
  bing: "https://www.bing.com/search?q=",
};

const THEMES = [
  "gruvbox-dark",
  "gruvbox-light",
  "nord",
  "dracula",
  "vice",
  "decaf",
  "pastel",
];

const COMM = [
  { name: 'ls', description: 'list links', args: '' },
  { name: 'add', description: 'add a site', args: 'name, url' },
  { name: 'del', description: 'delete a site', args: 'name' },
  { name: 'open', description: 'open a site', args: 'url' },
  { name: 'search', description: 'search on google/ddg', args: 'string' },
  { name: 'theme', description: 'change theme', args: 'theme' },
  { name: 'themes', description: 'list themes', args: '' },
  { name: 'clear', description: 'clear the "terminal"', args: '' }
];
