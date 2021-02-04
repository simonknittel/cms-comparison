<template>
  <nav>
    <NuxtLink to="/content-management-systems" class="item" title="Show comparison for Content Management Systems (CMS)">
      <h2 class="inner">Content Management Systems (CMS)</h2>
    </NuxtLink>

    <!-- <NuxtLink to="/shop-systems" class="item" title="Show comparison for Shop Systems">
      <span class="inner">Shop Systems</span>
    </NuxtLink> -->

    <!-- <span class="item disabled">
      <span class="inner">Shop Systems</span>
    </span> -->

    <!-- <NuxtLink to="/customer-relationship-management" class="item" title="Show comparison for Customer Relationship Management (CMR)">
      <span class="inner">Customer Relationship Management (CRM)</span>
    </NuxtLink> -->

    <!-- <span class="item disabled">
      <span class="inner">Customer Relationship Management</span>
    </span> -->
  </nav>
</template>

<style lang="scss" scoped>
@use '../assets/scss/colors';

nav {
  display: flex;
}

.item {
  display: inline-block;

  margin-left: .5rem;
  margin-right: .5rem;

  border-radius: 3px;

  color: #000;

  text-decoration: none;

  &:hover {
    .inner {
      border-bottom: 2px solid colors.$accent;
    }
  }

  &.nuxt-link-active {
    font-weight: bold;

    .inner {
      border-bottom: 2px solid colors.$accent;
    }
  }

  // &.disabled {
  //   pointer-events: none;
  //   opacity: .25;
  //   filter: grayscale(1);
  // }
}

.inner {
  display: inline-block;
  padding-bottom: .25rem;
  border-bottom: 2px solid hsla(180, 25%, 50%, .3);
  font-size: 1.5rem;
  font-weight: normal;
}
</style>
