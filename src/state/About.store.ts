import { writable } from 'svelte/store';
import type { AboutProps } from '../interfaces';

class AboutStore {
  private write = writable([] as AboutProps[]);
  private update = this.write.update;

  private async fetchData() {
    const req = await fetch('data/about.json');
    const data: AboutProps[] = await req.json()

    this.write.set(data);
  }

  public get subscribe() {
    return this.write.subscribe;
  }

  public async load() {
    this.update(d => {
      if (!d.length) this.fetchData();

      return d;
    });

    return void 0;
  }


}

export const store = new AboutStore();
