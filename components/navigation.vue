<template>
  <nav class="nav">
    <NuxtLink to="/content-management-systems" class="nav__item">
      <span class="nav__item__inner">Content Management Systems (CMS)</span>
    </NuxtLink>

    <NuxtLink to="/shop-systems" class="nav__item">
      <span class="nav__item__inner">Shop Systems</span>
    </NuxtLink>

    <!-- <NuxtLink to="/customer-relationship-management" class="nav__item">
      <span class="nav__item__inner">Customer Relationship Management (CRM)</span>
    </NuxtLink> -->
  </nav>
</template>

<style lang="scss">
.nav {
  display: flex;
  justify-content: center;

  &__item {
    display: inline-block;

    margin-left: .25rem;
    margin-right: .25rem;
    padding: .5rem;

    border-radius: 3px;

    color: #000;

    text-decoration: none;

    &__inner {
      display: inline-block;
      padding-bottom: .25rem;
      border-bottom: 2px solid hsla(180, 25%, 50%, .3);
    }

    &.nuxt-link-active {
      .nav__item__inner {
        border-bottom: 2px solid hsl(180, 50%, 50%);
      }
    }
  }
}
</style>
