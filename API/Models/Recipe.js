import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    ingredients: {
            type: String,
            required: true,
        },
      instructions: {
        type: String,
        required: true,
      },
      cusinetype: {
        type: String,
        // enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert'],
        default: 'Lunch',
      },
    //   prepTime: Number, // in minutes
    //   cookTime: Number, // in minutes
    author:{
        type:String,
        required:true
    },
      image:{
        type:String,
        required:true
      },
    //   cloudinary_id: {
    //     type: String,
    //   },
    //   createdAt: {
    //     type: Date,
    //     default: Date.now,
    //   },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
    
},{timestamps:true})

export const Recipe = mongoose.model("recipe",recipeSchema)