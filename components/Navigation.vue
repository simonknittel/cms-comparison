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

    <a class="github" href="https://github.com/simonknittel/cms-comparison" rel="noopener" title="Open repository on GitHub">
      <GitHubIcon />
      GitHub
    </a>
  </nav>
</template>

<script>
  import GitHubIcon from '../assets/icons/github-brands.svg?inline'

  export default {
    name: 'Navigation',

    components: {
      GitHubIcon
    }
  }
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors';

nav {
  @media (min-width: 40rem) {
    flex: 1 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
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

.github {
  margin-right: -.5rem;
  padding: .5rem;

  text-decoration: none;
  color: inherit;

  svg {
    vertical-align: middle;

    --size: 1.5rem;
    width: var(--size);
    height: var(--size);

    margin-right: .25rem;
    margin-top: -3px;
  }

  &:hover,
  &:focus-visible {
    border-radius: 3px;
    background-color: colors.$accent-light2;
  }
}
</style>
