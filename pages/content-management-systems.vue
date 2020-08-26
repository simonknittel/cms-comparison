<template>
  <main class="cms">
    <div class="table-wrapper">
      <div class="table-wrapper__inner">
        <table>
          <thead>
            <tr>
              <th></th>

              <th v-for="system in systems" :key="system">
                <span>{{ system }}</span>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="category in categories" :key="category">
              <th>
                <span>{{ category }}</span>
              </th>

              <Cell
                v-for="system in systems"
                :key="system"

                :systemData="systemData[system]"
                :category="category"
              />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
import { categories, systems } from '~/assets/cms/config.yml'

const initialSystemData = {}
for (const system of systems) {
  initialSystemData[system] = {}
}

export default {
  name: 'ContentManagementSystems',
  data() {
    return {
      categories,
      systems,
      systemData: initialSystemData
    }
  },
  created() {
    for (const system of systems) {
      const fileName = system.toLowerCase()
      import(`~/assets/cms/${fileName}.yml`)
        .then(yml => {
          console.log(yml.default)
          this.systemData[system] = yml.default ? yml.default : {}
        })
    }
  }
}
</script>

<style lang="scss">
.cms {
  margin-left: 1rem;
  margin-right: 1rem;

}

.table-wrapper {
  position: relative;
  box-shadow: 3px 3px 5px 0 hsla(0, 0%, 0%, .05);
  background-color: #fff;

  // &::before {
  //   content: '';

  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   width: 10rem;
  //   height: 100%;

  //   background: linear-gradient(to right, hsla(0, 0%, 100%, 1), hsla(0, 0%, 0%, 0));
  // }

  &::after {
    content: '';

    position: absolute;
    right: 0;
    top: 0;
    width: 10rem;
    height: 100%;

    background: linear-gradient(to left, hsla(0, 0%, 100%, 1), hsla(0, 0%, 0%, 0));
  }
}

.table-wrapper__inner {
  overflow-x: auto;
}

.table-wrapper__inner::-webkit-scrollbar-track {
  height: .3rem;
  background-color: transparent;
}

.table-wrapper__inner::-webkit-scrollbar {
  height: .3rem;
  background-color: transparent;
}

.table-wrapper__inner::-webkit-scrollbar-thumb {
  background-color: hsla(180, 25%, 50%, .3);
}

table {
  table-layout: fixed;
  width: 100%;
  padding: 1rem;

  line-height: 1.5;
}

th {
  text-align: left;

  span {
    display: inline-block;
    padding-bottom: .25rem;
    border-bottom: 2px solid hsla(180, 25%, 50%, .3);
  }
}

thead {
  th {
    width: 12rem;

    &:first-of-type {
      width: 9rem;

      span {
        border-bottom: none;
      }
    }
  }
}

th, td {
  vertical-align: top;
  padding: .5rem;
}

td {
  &:nth-of-type(odd) {
    background-color: hsla(180, 25%, 50%, .05);
  }

  &:nth-of-type(even) {
    background-color: hsla(180, 25%, 50%, .1);
  }
}


</style>
