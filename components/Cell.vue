<template>
  <td>
    <div v-if="Object.keys(system).length">
      <div v-if="system[categoryId]">
        <div v-if="categoryId === 'homepage' || categoryId === 'plugin_store'">
          <a
            :href="system[categoryId].url"
            target="_blank"
            rel="noopener"
          >{{ system[categoryId].text }}</a>
        </div>

        <div v-else>
          {{ system[categoryId].text }}

          <a
            v-if="system[categoryId].source"
            :href="system[categoryId].source"
            target="_blank"
            rel="noopener"
            class="source"
          >Source</a>
        </div>
      </div>

      <!-- <button v-else class="missing">
        <span>
          Missing data.<br>
          Click here to contribute.
        </span>
      </button> -->
    </div>

    <small v-else>
      LOADING!
    </small>
  </td>
</template>

<script>
export default {
  props: {
    system: Object,
    categoryId: String
  }
}
</script>

<style lang="scss" scoped>
td {
  position: relative;
  padding: 1rem;
}

.source {
  display: block;
  margin-top: .125rem;
  color: hsla(0, 0%, 0%, .3);
}

// .missing {
//   opacity: 0;
//   display: flex;

//   position: absolute;
//   left: .5rem;
//   top: .5rem;
//   bottom: .5rem;

//   width: calc(100% - 1rem);
//   padding: .5rem;

//   border: none;
//   background-color: hsla(0, 0%, 0%, .05);
//   color: hsla(0, 0%, 0%, .4);

//   font-size: .8rem;
//   line-height: 1.2;
//   text-decoration: none;
//   text-align: left;

//   &:hover {
//     cursor: pointer;
//     opacity: 1;
//   }
// }
</style>
