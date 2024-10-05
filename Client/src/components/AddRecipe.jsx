import React, { useContext, useState } from 'react'
import { AppContext } from '../context/App_Context'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
    const navigate = useNavigate()
    const { addrecipe } = useContext(AppContext);

    const [formData, setformData] = useState({
        title:"",ingredients:"",instructions:"",cusinetype:"",author:"",image:""
    })
    const onChangeHandler = (e)=>{
        const {name,value} = e.target
        setformData({...formData,[name]:value})
    }
    const onSubmitHandler = async(e)=>{
        e.preventDefault()

        const { title,ingredients,instructions,cusinetype,author,image} = formData;

        const result = await addrecipe(title,ingredients,instructions,cusinetype,author,image);
        toast(result.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
      
          // console.log(result.data);
          setTimeout(() => {
            navigate('/')
          }, 1500);
        console.log("add Recipe",result);
        
    }
    return (
        <>
        <ToastContainer/>
            <div className="container my-3 p-5" style={{ width: "600px", border: '2px solid yellow', borderRadius: "10px" }}>
                <h2 className='text-center'>Add Recipe</h2>
                <form onSubmit={onSubmitHandler} style={{
                    width: "400px",
                    margin: "auto"
                }}
                    className='my-3'
                >
                    <div className="mb-3">
                        <label for="exampleInputtext" className="form-label">Title : </label>
                        <input value={formData.title} onChange={onChangeHandler} name='title' type="text" className="form-control" id="exampleInputtext" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputtext" className="form-label">Ingredients : </label>
                        <input value={formData.ingredients} onChange={onChangeHandler} name='ingredients'  type="text" className="form-control" id="exampleInputtext" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputtext" className="form-label">Instructions : </label>
                        <input value={formData.instructions} onChange={onChangeHandler} name='instructions' type="text" className="form-control" id="exampleInputtext" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputtext" className="form-label">Cusinetype : </label>
                        <input value={formData.cusinetype} onChange={onChangeHandler} name='cusinetype' type="text" className="form-control" id="exampleInputtext" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputtext" className="form-label">Author : </label>
                        <input value={formData.author} onChange={onChangeHandler} name='author' type="text" className="form-control" id="exampleInputtext" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputtext" className="form-label">image : </label>
                        <input value={formData.image} onChange={onChangeHandler} name='image' type="text" className="form-control" id="exampleInputtext" />
                    </div>

                    <div className="container d-grid col-6">
                        <button type="submit" className="btn btn-primary mt-3">AddRecipe</button>
                    </div>


                </form>
            </div>
        </>
    )
}

export default AddRecipe;

