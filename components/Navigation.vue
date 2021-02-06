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
  @media (min-width: 40rem) {
    display: flex;
  }
}

.item {
  display: block;

  border-radius: 3px;

  color: #000;

  text-decoration: none;

  @media (min-width: 40rem) {
    margin-left: .5rem;
    margin-right: .5rem;
  }

  &:hover {
    .inner {
      &::after {
        background-color: colors.$accent;
      }
    }
  }

  &.nuxt-link-active {
    font-weight: bold;

    .inner {
      &::after {
        background-color: colors.$accent;
      }
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

  position: relative;

  font-size: 1rem;
  line-height: 1rem;
  font-weight: normal;

  @media (min-width: 40rem) {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: calc(100% + .5rem);

    width: 100%;
    height: 2px;
    background-color: hsla(180, 25%, 50%, .3);
  }
}
</style>
