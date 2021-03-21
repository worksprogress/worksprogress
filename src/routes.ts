import About from './pages/About.svelte';
import Educational from './pages/Educational.svelte';
import Home from './pages/Home.svelte';
import Projects from './pages/Projects.svelte';
import Publication from './pages/Publication.svelte';
import Research from './pages/Research.svelte';

export const routes = {
  '/': Home,
  '/about': About,
  '/projects': Projects,
  '/educational': Educational,
  '/publication': Publication,
  '/research': Research,
  '*': Home,
};
