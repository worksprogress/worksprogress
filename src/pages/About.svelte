<script type="ts">
  import type { AboutProps } from "../interfaces";
  import AboutComponent from "../components/About.component.svelte";
  import { store as state$ } from "../state/About.store";

  state$.load();
</script>

<h1>About</h1>

<section>
  {#each $state$ as aboutProp}
    <div class="article-wrapper">
      <AboutComponent props={aboutProp} />
    </div>
  {/each}
</section>

<style lang="scss">
  @import "../scss/framework";

  h1 {
    font-size: rem(32px);
    margin: rem(0 0 16px);
  }

  section {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }

  .article-wrapper {
    & + & {
      margin-left: rem(24px);
    }
  }
</style>
