export const state = () => ({
    drawer: false,
    receivers: ["John", "Michael"],
    senderName: "Mesfin",
    room: "Room 1"
})
export const mutations = {
    openDrawer: (state) => state.drawer = !state.drawer,
    setReceivers: (state, payload) => state.receivers = payload,
    setSender: (state, payload) => state.senderName = payload,
    setRoom: (state, payload) => state.room = payload
}
