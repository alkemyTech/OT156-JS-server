const { Router } = require("express");
const router = Router();
const {
  addActivity,
  updateActivity,
} = require("../controllers/activitiesControllers");

router.post(
  "/",
  /* TODO
    añadir el middleware que valide si el asuario es admin */ addActivity
);
router.put(
  "/:id",
  /* TODO
    añadir el middleware que valide si el asuario es admin */
  updateActivity
);

module.exports = router;
