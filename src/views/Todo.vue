<template>
  <section class="todo">
    <h1 class="display-4 text-xs-center">To-do list</h1>
    <v-container grid-list-xs>
      <v-layout row justify-center>
        <v-flex xs6>
          <v-list v-for="(list, index) in todo_lists.lists" :key="index">
            <v-list-tile
              v-for="(item, key) in list.items"
              :key="key"
              avatar
              @click="revertCheck(key)"
            >
              <v-list-tile-action>
                <v-icon v-if="item.checked" color="pink">star</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title v-text="item.name"></v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-avatar></v-list-tile-avatar>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script lang="js">
import GETLIST from "@/graphql/GetTodo.gql";
  export default  {
    name: 'todo',
    props: [],
    mounted() {

    },
    data() {
      return {
      }
    },
    apollo: {
      todo_lists: GETLIST
    },
    methods: {
      revertCheck(key) {
        /*
        this.$apollo.mutate({
          mutation: CHECKITEM,
          variables: {
            id: this.todo[key].id,
            value: !this.todo[key].checked
          }
        });
        this.$apollo.queries.GETLIST.refetch();
        */
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
