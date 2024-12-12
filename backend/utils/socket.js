module.exports = (io) => {
  let users = {};
  let socketToRoom = {};
  const max = 10;
  io.on("connection", (socket) => {
    socket.on("join_room", (data) => {
      if (users[data.room]) {
        const len = users[data.room].length;
        if (len === max) {
          socket.to(socket.id).emit("room_full");
          return;
        }
        users[data.room].push({ id: socket.id });
      } else {
        users[data.room] = [{ id: socket.id }];
      }
      socketToRoom[socket.id] = data.room;
      socket.join(data.room);
      console.log("User joined room: ", data.room);
      const usersInThisRoom = users[data.room].filter(
        (user) => user.id !== socket.id
      );

      console.log(usersInThisRoom);
      io.sockets.to(socket.id).emit("all_users", usersInThisRoom);
    });
    socket.on("offer", (data) => {
      socket.to(data.offerReceiveID).emit("getOffer", {
        sdp: data.sdp,
        offerSendID: data.offerSendID,
        offerSendEmail: data.offerSendEmail,
      });
    });
    socket.on("answer", (data) => {
      socket.to(data.answerReceiveID).emit("getAnswer", {
        sdp: data.sdp,
        answerSendID: data.answerSendID,
      });
    });

    socket.on("candidate", (data) => {
      socket.to(data.candidateReceiveID).emit("getCandidate", {
        candidate: data.candidate,
        candidateSendID: data.candidateSendID,
      });
    });

    socket.on("disconnect", () => {
      console.log(`[${socketToRoom[socket.id]}]: ${socket.id} exit`);
      const roomID = socketToRoom[socket.id];
      let room = users[roomID];
      if (room) {
        room = room.filter((user) => user.id !== socket.id);
        users[roomID] = room;
        if (room.length === 0) {
          delete users[roomID];
          return;
        }
      }
      socket.to(roomID).emit("user_exit", { id: socket.id });
      console.log(users);
    });
  });
};
