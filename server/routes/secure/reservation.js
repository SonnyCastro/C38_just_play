const router = require('express').Router();
const Reservation = require('../../db/models/eventRegister'),
  { sendReservationEmail } = require('../../emails/index');

router.post('/events/reservation', async (req, res) => {
  try {
    const reservation = await new Reservation({
      ...req.body,
      user: req.user._id,
    });
    sendReservationEmail(req.user.email, req.user.name);
    reservation.save();
    res.json(reservation);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
