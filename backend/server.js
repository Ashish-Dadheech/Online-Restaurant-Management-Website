import app from "./app.js";
import dotenv from "dotenv";

// Load env and provide a sensible default port for local development
dotenv.config();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`SERVER HAS STARTED AT http://localhost:${PORT}`);
    console.log(
        `FRONTEND_ORIGIN (configured): ${process.env.FRONTEND_URL || "not set (falling back to http://localhost:5173)"}`
    );
});
