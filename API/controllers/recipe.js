import { Recipe } from "../Models/Recipe.js";
import { SavedRecipe } from "../Models/SavedRecipe.js";

export const add = async(req,res)=>{
    const{title,ingredients,instructions,cusinetype,author,image}=req.body

    try {
        const recipe = await Recipe.create({
            title,ingredients,instructions,cusinetype,author,image,user:req.user,
        });
        res.json({message:"Recipe Created Succesfuly",recipe})
    } catch (error) {
        res.json({message:error})
    }
}

export const getAllRecipe = async(req,res)=>{
    const recipe = await Recipe.find();
    res.json({recipe})
}

export const GetRecipeById = async(req,res)=>{
    const id = req.params.id

    try {
        let recipe = await Recipe.findById(id)

        if(!recipe) res.json({  message:'recipe not exist'  })
            res.json({recipe})
    } catch (error) {
        res.json({message:error})
    }
}

export const getRecipeByUserId = async (req,res)=>{
    const userId = req.params.id

    try {
        let recipe = await Recipe.find({user:userId})

        if(!recipe) res.json({  message:'recipe not exist'  })
            res.json({message:"recipe by UserId", recipe})
    } catch (error) {
        res.json({message:error})
    }
}

export const savedRecipeById = async (req,res)=>{
    const id = req.params.id

    let recipe = await SavedRecipe.findOne({recipe:id})

    if(recipe) return res.json({message:"Recipe Already Exist"})

    recipe = await SavedRecipe.create({recipe:id})

    res.json({message:"Recipe saved Succefully"})
}

export const getSavedRecipe = async (req,res)=>{
    const recipe = await SavedRecipe.find()

    res.json({recipe})
}
