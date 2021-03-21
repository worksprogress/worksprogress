<script type="ts">
  import AboutComponent from '../components/About.component.svelte';
  import { aboutStore as state$ } from '../state';

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
  @import '../scss/framework';

  section {
    display: flex;
    flex: 1;
    justify-content: space-between;
    flex-direction: column;

    @include breakpoint(md) {
      flex-direction: row;
    }
  }

  .article-wrapper {
    @include breakpoint(md) {
      & + & {
        margin-left: rem(24px);
      }
    }
  }
</style>
