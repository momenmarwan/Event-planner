const {
  getAllEvents,
  addEvent,
  addUser,
  login,
  getAttendee
} = require("../controllers/index");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello");
});
router.get("/events", getAllEvents);
router.post("/users", addUser);
router.post("/event", addEvent);
router.post('/login',login);
router.post('/getAttendee',getAttendee)
module.exports = router;
