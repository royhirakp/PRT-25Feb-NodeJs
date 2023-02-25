const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

 const RecipiSchma = new Schema({
    
    title: String,
    author: String,
    image: {
        data: Buffer,
        contentType: String
      },
    ingredients: Array,
    directions:  String,
    user: {type: ObjectId, ref: "User"}
 })
const RecipiModel = mongoose.model('Recipis',RecipiSchma)
module.exports = RecipiModel;


// https://docs.google.com/document/d/139HWZIOomqNGqbZ_WqTJGHl8m_zL0eKZD2WLSrt5wXs/edit?usp=sharing
// {
//     "title": "Chocolate Chip Cookies",
//     "author": "Jane Smith",
//     "image": {
//       "url": "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/classic-chocolate-chip-cookies.jpg" ,
//       "type": "image"
//     },
//     "ingredients": [
//       "all-purpose flour",
//       "baking soda",
//       "salt",
//       "unsalted butter",
//       "brown sugar",
//       "granulated sugar",
//       "large egg",
//       "vanilla extract",
//       "chocolate chips"
//     ],
//     "directions": "Preheat oven to 350°F. In a medium bowl, whisk together the flour, baking soda, and salt. In a separate large bowl, beat the butter, brown sugar, and granulated sugar until creamy. Add in the egg and vanilla extract and mix well. Gradually stir in the dry ingredients until well-combined. Fold in the chocolate chips. Drop the dough by rounded tablespoons onto a baking sheet and bake for 10-12 minutes, or until the edges are lightly golden. Cool on the baking sheet for a few minutes, then transfer to a wire rack to cool completely."
//   },


