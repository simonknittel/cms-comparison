<template>
  <td class="cell">
    <div v-if="Object.keys(systemData).length">
      <div v-if="systemData[category]">
        <div v-if="category === 'homepage'" class="homepage">
          <a
            :href="systemData[category].url"
            target="_blank"
            rel="noopener"
          >{{ systemData[category].text }}</a>
        </div>

        <div v-else-if="category === 'programming_language'" class="programming_language">
          <small v-if="systemData[category].text === '/'">Not applicable</small>
          <span v-else>{{ systemData[category].text }}</span>
        </div>

        <div v-else-if="category === 'database'" class="database">
          <small v-if="systemData[category].text === '/'">Not applicable</small>
          <span v-else>{{ systemData[category].text }}</span>

          <a
            v-if="systemData[category].source"
            :href="systemData[category].source"
            target="_blank"
            rel="noopener"
            class="source"
          >Source</a>
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

      <small v-else class="missing">
        Missing data.<br>See <a href="#">here</a> on how to add.
      </small>
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
  font-size: .9rem;
}

.homepage {}

.programming_language {
  small {
    color: grey;
    font-size: inherit;
  }
}

.database {
  small {
    color: grey;
    font-size: inherit;
  }
}

.missing {
  font-size: .8rem;
  color: grey;

  a {
    color: inherit;
  }
}

.source {
  display: block;
  margin-top: .25rem;
  font-size: .8rem;
  color: grey;
}
</style>
