<script type="ts">
  import type { EducationalProps } from "../interfaces";

  export let props: EducationalProps;
</script>

<p>{props.content}</p>

<style lang="scss">
  @import "../scss/framework";
</style>
