import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;
}

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
    if(connection.isConnected) {
        console.log("Already connected to the database");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})

        connection.isConnected = db.connections[0].readyState

        console.log("DB => ",db);
        console.log("DB.CONNECTIONS => ", db.connections);
        

        console.log("DataBase Connected Successfully");        
    } catch (error) {
        console.log("DataBase Connection Failed", error);
        throw new Error(`Database connection failed: ${error}`);
    }
}

export default dbConnect;