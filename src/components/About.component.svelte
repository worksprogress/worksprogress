<script type="ts">
  import type { AboutProps } from "../interfaces";
  export let props: AboutProps;
</script>

<article>
  <h2>{props.title}</h2>
  <div>{props.tag}</div>
  <p>{props.content}</p>
</article>

<style lang="scss">
  @import "../scss/framework";

  article {
    width: 100%;

  }
  h2 {
    font-size: rem(20px);
    margin: rem(0 0 4px);
  }

  div {
    font-size: rem(14px);
    line-height: rem(16px);
    margin: rem(0 0 16px);
  }
</style>
