<template>
  <v-navigation-drawer app v-model="drawer">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Users </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
    <v-list dense nav>
      <v-list-item v-for="user in users" :key="user" link @click="setReceivers">
        <v-checkbox
          v-model="receivers"
          :label="user"
          :value="user"
        ></v-checkbox>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "chat",
  computed: {
    drawer() {
      return this.$store.state.drawer;
    },
  },
  data() {
    return {
      receivers: ["John", "Michael"],
      rooms: ["Room 1", "Room 2", "Room 3"],
      users: ["John", "David", "Michael", "Solomon"],
    };
  },
  methods: {
    setReceivers() {
      this.$store.commit("setReceivers", this.receivers);
      this.$store.commit("openDrawer");
    },
  },
};
</script>