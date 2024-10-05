import express from "express";
import { add, getAllRecipe, GetRecipeById, getRecipeByUserId, getSavedRecipe, savedRecipeById } from "../controllers/recipe.js";
import { Authentication } from "../middlewares/auth.js";

const router = express.Router();

// Create Recipe
router.post('/add',Authentication,add)

//Get All Recipe
router.get('/',getAllRecipe)

//Get All Saved Recipe
router.get('/saved',getSavedRecipe)

//Get Recipe By Id
router.get('/:id',GetRecipeById)

//Get Recipe By User
router.get('/user/:id',getRecipeByUserId)

//saved Recipe By Id
router.post('/:id',Authentication,savedRecipeById)


export default router;