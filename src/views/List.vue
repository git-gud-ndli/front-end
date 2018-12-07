<template lang="html">

  <section class="list">
    <h2 class="display-3 text-xs-center">{{ list.name }}</h2>
    <v-container grid-list-xs justify-center text-xs-center>
      <!-- <v-btn color="success">Add an item</v-btn> -->
      <v-dialog v-model="dialog" width="500">
      <v-btn slot="activator" color="red lighten-2" dark>Add an item</v-btn>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Add an item</v-card-title>

        <v-card-text>
          <v-text-field
            v-model="item_name"
            name="name"
            label="Item name"
            id="inputName"
            placeholder="Item Name"
          ></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="addItem">Add Item</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      <v-list>
        <v-list-tile @click="" v-for="(item, index) of list.items" :key="index">
            <v-list-tile-action>
              <v-checkbox v-model="item.checked"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content @click="checkItem(item.id, item.checked)">
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
              <v-list-tile-sub-title>Allow notifications</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
      </v-list>
    </v-container>
  </section>

</template>

<script lang="js">
import GETLIST from "@/graphql/GetList.gql";
import CHECKITEM from "@/graphql/CheckTodo.gql";
import ADDITEM from "@/graphql/AddItem.gql";
  export default  {
    name: 'list',
    props: [],
    mounted() {

    },
    data() {
      return {
        list: {},
        dialog: false,
        item_name: ''
      }
    },
    apollo: {
      list: {
        query: GETLIST,
        variables() {
          return {
            id: this.$route.params.id
          }
        }
      }
    },
    methods: {
      checkItem(uuid, checked) {
        this.$apollo.mutate({
          mutation: CHECKITEM,
          variables: {
            uuid,
            value: !checked
          }
        });
      },
      addItem() {
        this.$apollo.mutate({
          mutation: ADDITEM,
          variables: {
              id: this.list.id,
              item: { name: this.item_name }
          }
        })
        .then(() => {
          this.$apollo.queries.list.refetch();
        });
        this.dialog = false;
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="less">
.list {
}
</style>
