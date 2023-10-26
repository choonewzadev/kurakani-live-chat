require("dotenv").config();
const roomRoutes = require("./routes/roomRoutes");
const { app, server } = require("./routes/socket");
const debugPrint = require("./utils/debugPrint");

app.use("/rooms", roomRoutes);

const PORT = process.env.PORT | 3011;
server.listen(PORT, () => {
  debugPrint("SERVER RUNNING on "+PORT);
});
