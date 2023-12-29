<template>
  <!-- Use a button or an anchor based on the 'href' prop -->
  <component
    :is="isAnchor ? 'a' : 'button'"
    :class="[getVariantClass(), getSizeClass()]"
    :href="isAnchor ? href : null"
  >
    <slot></slot>
  </component>
</template>

<script>
  export default {
    props: {
      variant: {
        type: String,
        default: 'solid', // Default variant
        validator: (value) => ['solid', 'outline', 'plain'].includes(value)
      },
      size: {
        type: String,
        default: 'medium', // Default size
        validator: (value) => ['small', 'medium', 'large'].includes(value)
      },
      // class: {
      //   type: String,
      //   default: "", // Additional classes
      // },
      href: {
        type: String,
        default: '' // Default href for anchor tags
      },
      primary: {
        type: Boolean,
        default: false
      },
      secondary: {
        type: Boolean,
        default: false
      },
      info: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      isAnchor() {
        // If href is provided, render as an anchor
        return this.href !== '';
      }
    },
    methods: {
      getVariantClass() {
        if (this.variant === 'outline') {
          return 'btn-outline';
        } else if (this.variant === 'plain') {
          return 'btn-plain';
        } else {
          // Default to solid
          return `btn-${this.getVariantColor()}`;
        }
      },
      getVariantColor() {
        if (this.primary) return 'primary';
        if (this.secondary) return 'secondary';
        if (this.info) return 'info';
        // Default color
        return 'primary';
      },
      getSizeClass() {
        return `btn-${this.size}`;
      }
    }
  };
</script>

<style scoped lang="scss">
  /* Add your button styles here */
  .btn-solid {
    /* Solid button styles */
  }

  .btn-outline {
    /* Outline button styles */
  }

  .btn-plain {
    /* Plain button styles */
  }

  .btn-primary {
    display: inline-block;
    padding: 0.5rem;
    text-align: center;
    background-color: var(--m-primary);
    color: #fff;
    border-radius: 0.375rem;

    &:hover {
      background-color: var(--m-primary-hover);
    }
  }

  .btn-secondary {
    /* Secondary color styles */
  }

  .btn-info {
    /* Info color styles */
  }

  .btn-small {
    padding: 0.25rem 0.5rem;
  }

  .btn-medium {
    /* Medium size styles */
  }

  .btn-large {
    /* Large size styles */
  }
</style>
