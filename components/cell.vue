<template>
  <td class="cell">
    <div v-if="Object.keys(systemData).length" class="cell__inner">
      <div v-if="systemData[category]">
        <div v-if="category === 'homepage' || category === 'plugin_store'">
          <a
            :href="systemData[category].url"
            target="_blank"
            rel="noopener"
          >{{ systemData[category].text }}</a>
        </div>

        <div v-else>
          {{ systemData[category].text }}

          <a
            v-if="systemData[category].source"
            :href="systemData[category].source"
            target="_blank"
            rel="noopener"
            class="source"
          >Source</a>
        </div>
      </div>

      <a v-else class="missing" href="">
        <span>
          Missing data.<br>
          Click here to contribute.
        </span>
      </a>
    </div>

    <small v-else>
      LOADING!
    </small>
  </td>
</template>

<script>
export default {
  props: {
    systemData: {
      type: Object
    },
    category: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.cell {
  position: relative;
  padding: .5rem;

  &__inner {}
}

.source {
  display: block;
  margin-top: .125rem;
  color: hsla(0, 0%, 0%, .3);
}

.missing {
  opacity: 0;

  position: absolute;
  left: .5rem;
  right: .5rem;
  top: .5rem;
  bottom: .5rem;

  padding: .5rem;

  background-color: hsla(180, 25%, 50%, .1);
  color: hsla(0, 0%, 0%, .3);

  font-size: .8rem;
  line-height: 1.2;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }
}
</style>
