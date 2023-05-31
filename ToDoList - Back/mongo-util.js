import mongoose from "mongoose";

export async function mongooseInitiator(server, dbName, userName, password) {
  const uri = `mongodb+srv://${userName}:${password}@${server}/${dbName}?retryWrites=true&w=majority`;
  mongoose.connection.on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
  );
  await mongoose.connect(uri);
}
