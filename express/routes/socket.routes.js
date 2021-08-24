function socketRouter(io) {

    io.on("connection", (socket) => {

        socket.on("new-message", async (data) => {
            console.log(data.message)
        })
        socket.on("disconnect", () => {
            console.log("disconnect")
       })
    })
}

module.exports = {socketRouter}

