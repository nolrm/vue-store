<template>
  <div v-if="isVisible" class="notification" :class="notificationType">
    <div class="flex">
      <div class="notification-icon pr-4">
        <svg
          v-if="notificationType == 'success'"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      <div>{{ message }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      isVisible() {
        return this.$store.state.notification.isVisible;
      },
      message() {
        return this.$store.state.notification.message;
      },
      notificationType() {
        return this.$store.state.notification.type || 'success';
      }
    }
  };
</script>

<style scoped>
  /* Add Tailwind CSS classes for styling */
  .notification {
    position: fixed;
    top: 10px;
    left: 50%;
    max-width: 80%;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    transform: translate(-50%, 0);
  }

  .success {
    background-color: #28a745; /* Green */
  }

  .error {
    background-color: #dc3545; /* Red */
  }
</style>
