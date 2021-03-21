import { writable } from 'svelte/store';
import type { ProjectsProps } from '../interfaces';

class ProjectsStore {
  private write = writable([] as ProjectsProps[]);
  private update = this.write.update;

  private async fetchData() {
    const req = await fetch('data/projects.json');
    const data: ProjectsProps[] = await req.json();

    this.write.set(data);
  }

  public get subscribe() {
    return this.write.subscribe;
  }

  public async load() {
    this.update((d) => {
      if (!d.length) this.fetchData();

      return d;
    });

    return void 0;
  }
}

export const projectStore = new ProjectsStore();
