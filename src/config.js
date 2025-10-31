module.exports = {
  token: process.env.token || "", // Ensure this env variable is set
  channelId: process.env.channelId || "",

  webMonitor: true, // Set to false if you don't want a website
  expressPort: process.env.expressPort || 3000,

  nodes: [
    {
      host: "85.215.137.163", // Your lavalink host address 
      password: "astranode", // Your lavalink password
      port: 13731, // Your lavalink port
      identifier: "Astra Node 1", // Name for your lavalink
      secure: false, // set to true if your lavalink has SSL
      reconnectTimeout: 300000,
      reconnectTries: 100,
    },
    {
      host: "",  
      password: "", 
      port: 0, 
      identifier: "",
      secure: false,
      reconnectTimeout: 300000,
      reconnectTries: 100,
    },
  ],
};
