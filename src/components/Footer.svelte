<script type="ts">
  let date = new Date().getFullYear();
</script>
<footer>&copy; { date } WorksProgress LLC.</footer>

<style lang="scss">
  @import "../scss/framework";

  footer {
    margin: 0 auto;
    max-width: map-get($breakpoints, lg);
    padding: rem(24px 0);
    width: 100%;
  }
</style>
