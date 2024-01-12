<template>
  <div>
    <h2
      class="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 mb-8"
    >
      Product
    </h2>

    <table class="border-collapse table-auto w-full">
      <thead>
        <tr>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            Image
          </th>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            Name
          </th>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            Category
          </th>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            Price
          </th>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products">
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
          >
            <div class="w-10">
              <img :src="product.image" :alt="product.title" />
            </div>
          </td>
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
          >
            {{ product.title }}
          </td>
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
          >
            {{ product.category }}
          </td>
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
          >
            ${{ product.price }}
          </td>
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 text-right"
          >
            <m-button
              @click="editProduct(product)"
              size="small"
              class="rounded mr-2"
            >
              <i class="ion-ios-create"></i>
            </m-button>
            <m-button
              @click="editProduct(product)"
              size="small"
              class="rounded"
            >
              <i class="ion-ios-trash"></i>
            </m-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import MButton from '@/components/MButton.vue';

  export default {
    components: {
      MButton
    },
    props: {
      products: {
        type: Array,
        required: true
      }
    },
    methods: {
      editProduct(item) {
        console.log('Edit product - ', item);
      },
      deleteProduct(item) {
        console.log('Deleting product - ', item);
      }
    }
  };
</script>
