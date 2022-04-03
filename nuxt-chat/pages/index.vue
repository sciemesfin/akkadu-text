<template>
  <v-main>
    <v-container>
      <v-card flat height="100%" style="margin-bottom: 100px">
        <v-card-title>Messages</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item
              three-line
              style="max-width: 300px; border-radius: 30px"
              v-for="(item, i) in messages"
              :key="i"
              class="my-3"
              :class="
                sender == item.sender
                  ? 'success lighten-4 ml-auto align-content-end'
                  : 'primary lighten-4 mr-auto align-content-start'
              "
            >
              <v-list-item-content>
                <v-list-item-title>{{ item.sender }} </v-list-item-title>
                <v-list-item-subtitle>
                  {{ item.message }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <small>{{ new Date(item.date).toLocaleString() }} </small>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-container>
    <message-box />
  </v-main>
</template>

<script>
import MessageBox from "../components/MessageBox.vue";
export default {
  components: { MessageBox },
  name: "chat",
  data() {
    return {
      messages: [],
      drawer: false,
      username: "mesfin",
      rooms: ["Room 1", "Room 2", "Room 3"],
      users: ["John", "David", "Michael", "Solomon"],
    };
  },
  computed: {
    sender() {
      return this.$store.state.senderName;
    },
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      channel: "/",
    });
    this.socket.on("message", (msg, cb) => {
      this.messages.push(msg);
    });
  },
};
</script>