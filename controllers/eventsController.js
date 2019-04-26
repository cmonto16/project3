const db = require("../models");


module.exports = {
  findAll: function (req, res) {
    db.Event
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Event
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Event
      .create(req.body)
      .then(dbModel => {
        let userUpdates = req.body.members.map(user => {
          return db.User
            .findOneAndUpdate({
              member_number: user.member_number
            }, {
                $inc: {
                  hours: user.hours
                }
              })
        }
        );
        Promise.all(userUpdates)
          .then(dbModel => {
            res.json(dbModel)
          })
          .catch(err => res.status(422).json(err));

      })
      .catch(err => res.status(422).json(err));

  },
  update: function (req, res) {
    db.Event
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Event
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
