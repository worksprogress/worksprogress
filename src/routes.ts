import About from './pages/About.svelte';
import Architecture from './pages/Architecture.svelte';
import CRM from './pages/CRM.svelte';
import Educational from './pages/Educational.svelte';
import Home from './pages/Home.svelte';
import Planning from './pages/Planning.svelte';
import Publication from './pages/Publication.svelte';
import Research from './pages/Research.svelte';

export const routes = {
  '/': Home,
  '/about': About,
  '/architecture': Architecture,
  '/crm': CRM,
  '/educational': Educational,
  '/planning': Planning,
  '/publication': Publication,
  '/research': Research,
  '*': Home,
};
