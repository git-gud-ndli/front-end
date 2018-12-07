<template>
  <section class="todo">
    <h1 class="display-4 text-xs-center">To-do lists</h1>
    <v-container grid-list-md>
      <v-layout row justify-center>
        <!-- <v-btn color="success">Create a list</v-btn> -->
        <v-dialog v-model="dialog" width="500">
          <v-btn slot="activator" color="red lighten-2" dark>Create a list</v-btn>

          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>Create a list</v-card-title>

            <v-card-text>
              <v-text-field
                v-model="list_name"
                name="name"
                label="List name"
                id="inputName"
                placeholder="List Name"
              ></v-text-field>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" flat @click="createList">Create List</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
      <v-layout row wrap>
        <v-flex v-for="(list, index) of todo_lists.lists" :key="index" xs4>
          <v-card>
            <v-card-title primary-title>{{ list.name }}</v-card-title>
            <v-card-text>
              <p>hrjkbzhgjoezopkg neziugietrot</p>
            </v-card-text>
            <v-card-actions>
              <v-btn flat :to="`todo/${list.id}`">Access list</v-btn>
              <v-spacer></v-spacer>
              <v-btn flat>Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script lang="js">
import GETLIST from "@/graphql/GetTodo.gql";
import ADDLIST from "@/graphql/AddList.gql";
  export default  {
    name: 'todo',
    props: [],
    mounted() {

    },
    data() {
      return {
        todo_lists: {
          lists: []
        },
        dialog: false,
        list_name: ''
      }
    },
    apollo: {
      todo_lists: GETLIST
    },
    methods: {
      createList() {
        this.$apollo.mutate({
          mutation: ADDLIST,
          variables: {
              name: this.list_name
          }
        });
        this.$apollo.queries.todo_lists.refetch();
        this.dialog = false;
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="less">
.todo {
}
</style>
