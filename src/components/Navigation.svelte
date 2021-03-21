<script type="ts">
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";

  let opened = false;
  const toggleNav = () => {
    opened = !opened;
  };
  const closeOnClick = () => {
    if (!toggleNav) return;

    toggleNav();
  };
</script>

<nav>
  <div class="nav-header-container">
    <span>WorksProgress LLC</span>
    <button type="button" class="btn-toggle-nav" on:click={toggleNav}
      >&#9776;</button
    >
  </div>
  <ul class:opened>
    <li><a href="/" use:link use:active on:click={closeOnClick}>Home</a></li>
    <li>
      <a href="/about" use:link use:active on:click={closeOnClick}>About</a>
    </li>
    <li>
      <a href="/architecture" use:link use:active on:click={closeOnClick}
        >Architecture</a
      >
    </li>
    <li>
      <a href="/planning" use:link use:active on:click={closeOnClick}
        >Planning</a
      >
    </li>
    <li>
      <a href="/research" use:link use:active on:click={closeOnClick}
        >Research</a
      >
    </li>
    <li>
      <a href="/educational" use:link use:active on:click={closeOnClick}
        >Educational</a
      >
    </li>
    <li>
      <a href="/publication" use:link use:active on:click={closeOnClick}
        >Publication</a
      >
    </li>
  </ul>
</nav>

<style lang="scss">
  @import "../scss/framework";

  :global(li a.active) {
    font-style: italic;
  }

  nav {
    margin: 0 auto;
    max-width: map-get($breakpoints, lg);
    position: relative;
    width: 100%;
  }

  .nav-header-container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    line-height: rem(40px);

    span {
      font-size: rem(40px);
    }
    button {
      background: $transparent;
      border: none;
      display: block;
      font-size: rem(32px);

      @include breakpoint(md) {
        display: none;
      }
    }
  }

  ul {
    border-bottom: rem(1px) solid $black;
    display: none;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    margin: rem(0 0 24px);
    padding: 0;
    &.opened {
      background-color: $white;
      display: flex;
      position: absolute;
      width: 100%;
      z-index: 1001;

      @include breakpoint(md) {
        position: relative;
      }
    }

    @include breakpoint(md) {
      display: flex;
      flex-direction: row;
    }

    li {
      margin: 0;
      padding: rem(8px 16px);

      a {
        color: $black;
        font-size: rem(20px);
        text-decoration: none;
        width: 100%;

        &:hover {
          text-decoration: underline;
        }

        @include breakpoint(md) {
          width: auto;
        }
      }

      @include breakpoint(md) {
        & + li {
          margin-left: rem(16px);
        }
      }
    }
  }
</style>
