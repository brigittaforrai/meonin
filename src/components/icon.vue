<template>

  <svg :className="className" :width="width" :height="height">
    <use :xlink:href="glyph" />
  </svg>

</template>

<script>
export default {
  name: 'icon',
  props: ['className', 'glyph', 'width', 'height'],
};
</script>

<style lang="postcss" scoped>
  .icon {
    display: inline-block;
  }
</style>
