<script type="ts">
  import EducationComponent from '../components/Education.component.svelte';
  import { educationStore as state$ } from '../state';

  state$.load();
</script>

<h1>Educational</h1>

<section>
  {#each $state$ as educationProp}
    <EducationComponent props={educationProp} />
  {/each}
</section>

<style lang="scss">
  @import '../scss/framework';
</style>
