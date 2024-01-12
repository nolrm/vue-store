<template>
  <div>
    <h2
      class="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 mb-8"
    >
      Category
    </h2>

    <table class="border-collapse table-auto w-full">
      <thead>
        <tr>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            ID
          </th>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            Name
          </th>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            Description
          </th>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in categories">
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
          >
            #123123
          </td>
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
          >
            {{ item }}
          </td>
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
          >
            Lorem ipsum
          </td>
          <td
            class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 text-right"
          >
            <m-button
              @click="editCategory(item)"
              size="small"
              class="rounded mr-2"
            >
              <i class="ion-ios-create"></i>
            </m-button>
            <m-button
              @click="deleteCategory(item)"
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
      categories: {
        type: Array,
        required: true
      }
    },
    methods: {
      editCategory(item) {
        console.log('Edit product - ', item);
      },
      deleteCategory(item) {
        console.log('Deleting product - ', item);
      }
    }
  };
</script>
