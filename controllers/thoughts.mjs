import thoughts from "../database/random_thoughts.mjs";
import moment from "moment/moment.js";

// controller that send thoughts list to the client
export const index = (req, res) => {
  // filtering out thoughts that are not deleted
  const filtered_thoughts = thoughts.filter((thought) => {
    if (!thought.deleted) {
      return thought;
    }
  });

  // sending filtered thoughts to the client
  res.status(200).send(filtered_thoughts);
};

// controller that adds a new thought in the thoughts list
export const create = (req, res) => {
  // creating thought object from the req.body
  const thought = {
    userIP: req.body.userIP,
    id: new Date().valueOf(),
    title: req.body.title,
    desc: req.body.desc,
    likes: 0,
    posted: moment().format("LL"),
    location: req.body.location,
    deleted: false,
  };

  // pushing thought object to the thoughts array
  thoughts.push(thought);

  // returning response to the client
  res
    .status(201)
    .send({ thought: thought, message: "Thought Posted Successfully!" });
};

// controller that adds or remove like to a thought in the thoughts list
export const like = (req, res) => {
  // getting id from the url
  const thought_id = req.params.id;

  // finding index of the thought to be updated
  let thoughtIndex = thoughts.findIndex((thought) => thought.id == thought_id);

  // getting current likes
  let current_likes = thoughts[thoughtIndex].likes;

  // incrementing the like count of the thought object of that index
  thoughts[thoughtIndex] = {
    ...thoughts[thoughtIndex],
    likes: current_likes + 1,
  };

  // returning response to the client
  res.status(201).send({
    thought: thoughts[thoughtIndex],
    message: "Thought Liked Successfully!",
  });
};

// controller that updates a thought in the thoughts list
export const update = (req, res) => {
  // getting id from the url
  const thought_id = req.params.id;

  // finding index of the thought to be updated
  var thoughtIndex = thoughts.findIndex((thought) => thought.id == thought_id);

  // updating the object of that index if user matches
  if (thoughts[thoughtIndex].userIP == req.body.userIP) {
    // updating thought
    thoughts[thoughtIndex] = {
      ...thoughts[thoughtIndex],
      title: req.body.title,
      desc: req.body.desc,
    };

    // returning response to the client
    res.status(204).send({
      thought: thoughts[thoughtIndex],
      message: "Thought Updated Successfully!",
    });
    return;
  } else {
    // returning response to the client
    res.status(401).send({
      message: "You are not authorized to perform this action.",
    });
    return;
  }
};

// controller that deletes a thought from the thoughts list
export const destroy = (req, res) => {
  // getting id from the url
  const thought_id = req.params.id;

  // finding index of the thought to be updated
  var thoughtIndex = thoughts.findIndex((thought) => thought.id == thought_id);

  // deleting the object of that index if user matches
  if (thoughts[thoughtIndex].userIP == req.body.userIP) {
    // deleting thought
    thoughts[thoughtIndex] = {
      ...thoughts[thoughtIndex],
      deleted: true,
    };

    // returning response to the client
    res.status(200).send({
      message: "Thought Deleted Successfully!",
    });
    return;
  } else {
    // returning response to the client
    res.status(401).send({
      message: "You are not authorized to perform this action.",
    });
    return;
  }
};
