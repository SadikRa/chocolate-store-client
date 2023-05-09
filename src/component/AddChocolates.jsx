// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const AddChocolates = () => {


    const handleAddChocolate = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const newChocolate = {name, country, category, photo}
        console.log(newChocolate)
        fetch('http://localhost:5000/chocolates',{
            method: 'POST',
            headers:{ 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newChocolate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  form.reset()
            }
        })
    }

  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-4xl bg-amber-950	rounded p-4 ">
        Chocolate Management System
      </h1>
      <Link to="/">
        <button className="btn my-6 btn-outline btn-success">Home</button>
      </Link>
      <div className="my-6">
        <form onSubmit={handleAddChocolate}>
          <div className="p-28 bg-orange-50 rounded">
            <h1 className="text-center font-bold text-2xl mb-5"> New Chocolates</h1>
            <p className="text-center mb-5"> Use the below form to create a new product</p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
              name="name"
                type="text"
                placeholder="chocolate name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control my-8">
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <label className="input-group">
              <input
              name="country"
                type="text"
                placeholder="Country name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
              name="category"
                type="text"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control mt-8">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              <input
              name="photo"
                type="text"
                placeholder="PHoto Url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input className="w-full btn btn-primary mt-8" type="submit" value="Save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddChocolates;
