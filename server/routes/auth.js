const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");

//=================================
//             Auth
//=================================

router.get("/", auth, (req, res) => {
  // 메인페이지에서 로그인
  res.status(200).json({
    _id: req.user._id,
    isAuth: true,
    id: req.user.id,
    password: req.user.password,
    email: req.user.email,
    nickname: req.user.nickname,
    entranceYear: req.user.entranceYear,
    school: req.user.school,
  });
});

module.exports = router;
