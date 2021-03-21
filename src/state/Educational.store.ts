import { writable } from "svelte/store";
import type { EducationalProps } from "../interfaces";

class EducationalStore {
  private write = writable([] as EducationalProps[]);
  private update = this.write.update;

  private async fetchData() {
    const req = await fetch("data/educational.json");
    const data: EducationalProps[] = await req.json();

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

export const store = new EducationalStore();
