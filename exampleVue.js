new Vue({
    el: '#app',
    data: {
      deleteLater: "hello world",
      connectedUsers: [],
      messages: [],
      message: {
        "type": "",
        "action": "",
        "user": "",
        "text": "",
        "timestamp": ""
      },
      areTyping: []
    },
    created: function () {

    },
    methods: {
        send: function () {

        },
        userIsTyping: function (username) {

        },
        usersAreTyping: function () {

        },
        stoppedTyping: function () {

        }
    }
})
