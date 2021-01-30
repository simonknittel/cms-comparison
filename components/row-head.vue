<template>
  <th>
    <span>{{ title }}</span>
  </th>
</template>

<script>
export default {
  name: 'RowHead',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
th {
  text-align: left;
}
</style>
