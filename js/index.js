const ws = new WebSocket("ws://localhost:6942");
ws.addEventListener("open", () =>{
    return false;
});
 
ws.addEventListener('message', (data) => {
    console.log(data.data);
});