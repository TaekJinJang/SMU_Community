const express = require("express");
const router = express.Router();
const { Board } = require("../models/Board");

//=================================
//             Board
//=================================

router.post("/upload", (req, res) => {
  const board = new Board(req.body);
  board.save((err, board) => {
    if (err)
      return res.json({
        success: false,
        message: err,
      });
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/getBoard/1", (req, res) => {
  // 자유게시판 페이지네이션
  const Page = req.body.page;
  Board.countDocuments({ boardSort: 1 }, (err, count) => {
    if (err) {
      return res.status(400).send(err);
    } else {
      Board.find()
        .sort({ createdAt: -1 })
        .skip((Page - 1) * 5)
        .limit(5)
        .populate("userFrom")
        .exec((err, boards) => {
          if (err) return res.status(400).send(err);
          res.status(200).json({ success: true, boards, count });
        });
    }
  });
});
router.post("/getBoard/2", (req, res) => {
  // 구인게시판 페이지네이션
  const Page = req.body.page;
  Board.countDocuments({ boardSort: 2 }, (err, count) => {
    if (err) {
      return res.status(400).send(err);
    } else {
      Board.find()
        .sort({ createdAt: -1 })
        .skip((Page - 1) * 5)
        .limit(5)
        .populate("userFrom")
        .exec((err, boards) => {
          if (err) return res.status(400).send(err);
          res.status(200).json({ success: true, boards, count });
        });
    }
  });
});
router.post("/getBoard/3", (req, res) => {
  // 자랑게시판 페이지네이션
  const Page = req.body.page;
  Board.countDocuments({ boardSort: 3 }, (err, count) => {
    if (err) {
      return res.status(400).send(err);
    } else {
      Board.find()
        .sort({ createdAt: -1 })
        .skip((Page - 1) * 5)
        .limit(5)
        .populate("userFrom")
        .exec((err, boards) => {
          if (err) return res.status(400).send(err);
          res.status(200).json({ success: true, boards, count });
        });
    }
  });
});

router.post("/deleteBoard", (req, res) => {
  Board.findOneAndDelete({
    userFrom: req.body.userFrom,
    _id: req.body.boardFrom,
  }).exec((err, result) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, result });
  });
});

router.post("/:id", (req, res) => {
  Board.findOne({ _id: req.body.boardId }, (err, board) => {
    if (board) return res.json({ success: true, board });
    else
      return res.status(404).json({
        success: false,
      });
  });
});

module.exports = router;
