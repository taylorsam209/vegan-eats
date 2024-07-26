import express from "express";
import axios from "axios";

const app = express();

const port = 5000;

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

// app.get('/api/getListing/:location', async (req, res) => {
//   try {
//     const location = req.params.location
//     const response = await axios.get(`https://api.yelp.com/v3/businesses/search?term=vegan&categories=restaurants,food,vegan,vegetarian,organic_stores,farmersmarket,ethicgrocery&radius=20000&limit=50&location=${location}`,
//       { headers: { "Authorization": `Bearer ${process.env.YELP_ACCESS_TOKEN}` } })
//       res.status(200).send(response.data.business)
//     } catch(error) {
//       console.error
//     }

//       // .then(response => res.status(200).send(response.data.businesses))
//       // .catch(error=>console.error)
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
