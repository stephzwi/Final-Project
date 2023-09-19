// import express from "express";
// import path from "path";
// import { fileURLToPath } from "url"; // Add this import
// import { dirname } from "path"; // Add this import

// const app = express();
// const port = process.env.PORT || 5173;

// // Use import.meta.url to get the current module's URL
// const currentModuleUrl = import.meta.url;
// const currentModulePath = fileURLToPath(currentModuleUrl);
// const currentModuleDir = dirname(currentModulePath);

// // Serve static files from the "public" directory at the top level
// app.use(express.static(path.join(currentModuleDir, "../../public")));

// // Define a route to serve your React application (assuming it's built)
// app.get("/", (req, res) => {
//   res.sendFile(path.join(currentModuleDir, "../../public", "index.html"));
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
