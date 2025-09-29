import db from "../db/queries.js";

async function getUsernames(req, res) {
  try {
    const users = await db.getAllUsernames();
    console.log("users", users);
    res.render("index", { users });
  } catch (error) {
    console.error("Error fetching usernames:", error);
    res.status(500).send("Error fetching usernames");
  }
}

async function createUsernameGet(req, res) {
  res.render("form");
}

async function createUsernamePost(req, res) {
  try {
    const { username } = req.body;
    
    // Basic validation
    if (!username || username.trim() === '') {
      return res.status(400).send("Username is required");
    }
    
    await db.insertUsername(username.trim());
    res.redirect("/");
  } catch (error) {
    console.error("Error creating username:", error);
    res.status(500).send("Error creating username");
  }
}

export { getUsernames, createUsernameGet, createUsernamePost };