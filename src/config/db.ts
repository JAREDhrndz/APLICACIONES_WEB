import mongoose from "mongoose";

const connectDBmongo = async () :Promise<void> => {
    const mongoUrl= "mongodb://localhost:27017/proyecto";

    try{
        await mongoose.connect(mongoUrl);
        console.log("Conexion con mongo")
    } catch (error) {
        console.log("Error al conectarse con mongo: ", error)
    }

}

export default connectDBmongo;