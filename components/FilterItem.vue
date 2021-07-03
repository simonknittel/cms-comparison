<template>
  <label :class="{
    label: true,
    'is-child': isChild
  }">
    <input class="checkbox" type="checkbox" @change="onChange" :checked="disabled">
    <span class="fake-checkbox"></span>
    {{ title }}
  </label>
</template>

<script>
export default {
  name: 'FilterItem',
  props: {
    title: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    },
    isChild: {
      type: Boolean,
    },
    onChange: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@use '../assets/scss/colors';



.label {
  display: block;
  position: relative;

  padding-top: .25rem;
  padding-bottom: .25rem;

  &:hover {
    cursor: pointer;
  }

  &.is-child {
    --checkbox-size: 1.5rem;
    margin-left: calc(var(--checkbox-size) + .9rem);
  }
}

.checkbox {
  visibility: hidden;

  position: absolute;

  height: 0;
  width: 0;
}

.fake-checkbox {
  display: inline-block;
  vertical-align: middle;

  --checkbox-size: 1.5rem;
  width: var(--checkbox-size);
  height: var(--checkbox-size);

  margin-right: .5rem;

  border: 1px solid colors.$accent;
  border-radius: 2px;

  .checkbox:checked + &,
  .label:hover & {
    background-color: colors.$accent;
  }

  .checkbox:checked + & {
    background-image: url('~assets/icons/check-solid-white.svg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 70%;
  }
}
</style>
