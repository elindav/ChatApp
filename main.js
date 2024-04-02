const socket = io();

socket.on('message', (message)=>{


});
socket.on("disconnect", (message)=> {
  console.log(message);
});