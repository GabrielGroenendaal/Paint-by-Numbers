const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const ProgressOnPuzzle = require('../../models/Progress_on_Puzzle')



router.get('/user/:user_id', (request, response) => {
      ProgressOnPuzzle.find({ user_id: request.params.user_id })
            .then((progresses) => response.json(progresses))
            .catch((err) =>
                  response
                        .status(404)
                        .json({ noProgressFound: "No Progress on Puzzles Found for that User" })
            );
});


router.get("/user/:user_id/:puzzle_id", (request, response) => {
      ProgressOnPuzzle.find({ user_id: request.params.user_id, puzzle_id: request.params.puzzle_id })
            .then(progress => response.json(progress))
            .catch((err) =>
            response
                  .status(404)
                  .json({ noProgressFound: "No Progress on Puzzles Found for that User" })
      );
})

router.post('/',
      passport.authenticate("jwt", { session: false }),
      (request, response) => {
            const newProgress = new ProgressOnPuzzle({
                  progress_data: request.body.progress_data,
                  puzzle_id: request.body.puzzle_id,
                  user_id: request.body.user_id
            })

            newProgress.save().then((progress) => response.json(progress))
      }
)


router.patch('/:id', (request, response) => {
      const updatedProgress = new ProgressOnPuzzle({
            _id: request.params.id,
            progress_data: request.body.progress_data,
            puzzle_id: request.body.puzzle_id,
            user_id: request.body.user_id
      });
      ProgressOnPuzzle.updateOne({ _id: request.params.id }, updatedProgress)
            .then(() => { response.status(201).json({ message: 'Progress updated successfully'})})
            .catch((error) => {response.status(400).json({error: error})})
})

router.delete('/:id', (request, response) => {
      ProgressOnPuzzle.deleteOne({ _id: request.params.id })
            .then(() => { response.status(200).json({ message: 'Deleted!' }) })
            .catch((error) => {response.status(400).json({error: error})})
})

module.exports = router; 