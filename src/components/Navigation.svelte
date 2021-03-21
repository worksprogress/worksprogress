<script type="ts">
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
</script>

<nav>
  <ul>
    <li><a href="/" use:link use:active>Home</a></li>
    <li><a href="/about" use:link use:active>About</a></li>
    <li><a href="/architecture" use:link use:active>Architecture</a></li>
    <li><a href="/planning" use:link use:active>Planning</a></li>
    <li><a href="/research" use:link use:active>Research</a></li>
    <li><a href="/educational" use:link use:active>Educational</a></li>
    <li><a href="/publication" use:link use:active>Publication</a></li>
  </ul>
</nav>

<style lang="scss">
  @import "../scss/framework";

  :global(li a.active) {
    font-style: italic;
  }

  ul {
    border-bottom: rem(1px) solid $black;
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: rem(0 0 24px);
    padding: 0;

    li {
      margin: 0;
      padding: rem(8px 16px);

      a {
        color: $black;
        font-size: rem(20px);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      & + li {
        margin-left: rem(16px);
      }
    }
  }
</style>
