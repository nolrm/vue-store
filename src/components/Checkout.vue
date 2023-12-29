<template>
  <div>
    <h2 class="text-xl capitalize mb-3">Your Details</h2>

    <div class="checkout-form">
      <form @submit.prevent="submitForm">
        <div class="form-control mb-5">
          <label for="firstname">First name:</label>
          <input
            type="text"
            id="firstname"
            v-model="formData.firstname"
            required
            class="border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
            :class="{ 'is-invalid': validationErrors.firstname }"
          />
          <span v-if="validationErrors.firstname" class="text-red-500"
            >Last name is required</span
          >
        </div>

        <div class="form-control mb-5">
          <label for="lastname">Last name:</label>
          <input
            type="text"
            id="lastname"
            v-model="formData.lastname"
            required
            class="border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
            :class="{ 'is-invalid': validationErrors.lastname }"
          />
          <span v-if="validationErrors.lastname" class="text-red-500">
            Last name is required
          </span>
        </div>

        <div class="form-control mb-5">
          <label for="mobile">Mobile number:</label>
          <input
            type="tel"
            id="mobile"
            v-model="formData.mobile"
            pattern="^(\+?64|0)2[0-9]{7,9}$"
            required
            class="border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
            :class="{ 'is-invalid': validationErrors.mobile }"
          />
          <span v-if="validationErrors.mobile" class="text-red-500"
            >Mobile number is required</span
          >
        </div>

        <div class="form-control mb-5">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            class="border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
            :class="{ 'is-invalid': validationErrors.email }"
          />
          <span v-if="validationErrors.email" class="text-red-500"
            >Email is required</span
          >
        </div>

        <div class="form-control mb-5">
          <label for="notes">Notes:</label>
          <textarea
            id="notes"
            v-model="formData.notes"
            class="border border-gray-300 px-4 py-2 rounded-md focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
            :class="{ 'is-invalid': validationErrors.notes }"
            rows="4"
          ></textarea>
          <span v-if="validationErrors.notes" class="text-red-500"
            >notes is required</span
          >
        </div>

        <ul class="list-disc pl-4">
          <li>No cash accepted and No eftpos facility for online orders.</li>
          <li>Estimate made to order cooking time is minimum 60mins.</li>
          <li>
            Please don't submit same order twice, wait for a confirmation
            message.
          </li>
          <li>No refund/cancellation policy.</li>
          <li>
            We do not accept orders in advance. Kindly place your order for same
            day!
          </li>
        </ul>

        <div>
          <m-button type="submit" primary class="mt-6"> Place Order </m-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import MButton from '@/components/MButton.vue';

  export default {
    components: {
      MButton
    },
    data() {
      return {
        formData: {
          firstname: '',
          lastname: '',
          mobile: '',
          email: '',
          notes: ''
        },
        validationErrors: {
          firstname: false,
          lastname: false,
          mobile: false,
          email: false,
          notes: false
        }
      };
    },
    methods: {
      submitForm() {
        // For simplicity, let's just validate the mandatory fields
        console.log('submitting ... ');

        this.validateFields();
        if (!this.hasValidationErrors()) {
          console.log('Form submitted:', this.formData);
        }
      },
      validateFields() {
        // Reset validation errors
        this.validationErrors = {
          firstname: false,
          lastname: false,
          mobile: false,
          email: false,
          notes: false
        };

        // Validate mandatory fields
        if (!this.formData.firstname.trim()) {
          this.validationErrors.firstname = true;
        }

        if (!this.formData.lastname.trim()) {
          this.validationErrors.lastname = true;
        }

        if (!this.formData.mobile.trim()) {
          this.validationErrors.mobile = true;
        }

        if (!this.formData.email.trim()) {
          this.validationErrors.email = true;
        }

        if (!this.formData.notes.trim()) {
          this.validationErrors.notes = true;
        }
      },
      hasValidationErrors() {
        // Check if there are any validation errors
        return Object.values(this.validationErrors).some((error) => error);
      }
    }
  };
</script>

<style>
  .is-invalid {
    border-color: red; /* Add styles for invalid fields */
  }

  .form-control {
    label {
      display: block;
    }
  }
</style>
