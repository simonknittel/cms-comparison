<template>
  <nav>
    <NuxtLink to="/content-management-systems" class="item" title="Show comparison for Content Management Systems (CMS)">
      <span class="inner">Content Management Systems (CMS)</span>
    </NuxtLink>

    <!-- <NuxtLink to="/shop-systems" class="item" title="Show comparison for Shop Systems">
      <span class="inner">Shop Systems</span>
    </NuxtLink> -->

    <!-- <NuxtLink to="/customer-relationship-management" class="item" title="Show comparison for Customer Relationship Management (CMR)">
      <span class="inner">Customer Relationship Management (CRM)</span>
    </NuxtLink> -->
  </nav>
</template>

<style lang="scss" scoped>
@use '../assets/scss/colors';

nav {
  display: flex;
  justify-content: center;

  margin-top: 2rem;
}

.item {
  display: inline-block;

  margin-left: .25rem;
  margin-right: .25rem;
  padding: .5rem;

  border-radius: 3px;

  color: #000;

  text-decoration: none;

  &.nuxt-link-active {
    font-weight: bold;

    .inner {
      border-bottom: 2px solid colors.$accent;
    }
  }
}

.inner {
  display: inline-block;
  padding-bottom: .25rem;
  border-bottom: 2px solid hsla(180, 25%, 50%, .3);
}
</style>
