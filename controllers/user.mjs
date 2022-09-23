import fetch from "node-fetch";

// controller that extract information of the visitor/user
const user = async (req, res) => {
  // fetching details with the help of third party API
  const response = await fetch("http://ip-api.com/json");
  const visitor = await response.json();

  // returning visitor
  res.status(200).send({ip: visitor.query, from: `${visitor.city}, ${visitor.country}`});
};

export default user;
