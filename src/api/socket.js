
import socketIOClient from "socket.io-client";
// const ENDPOINT = "http://192.168.40.1:5000/";
const ENDPOINT = "http://localhost:5000/";

const socket = socketIOClient(ENDPOINT);

export default socket;