const apiController = require("../Controllers/UsersApiController");
const router = require("express").Router();

// Récupère tout les utilisateurs
// http://localhost:8080/api/users

router.get("/users", apiController.getUsers);
router.get("/users/:id", apiController.getUserById);
router.post("/users", apiController.postAddUser);
router.delete("/users/:id", apiController.deleteUserById);

module.exports = router;
