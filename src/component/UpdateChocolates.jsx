// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateChocolates = () => {

    const chocolates = useLoaderData();
    const {_id, name, country, category, photo} = chocolates;

    const handleUpdateChocolate = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const newChocolate = {name, country, category, photo};

        fetch(`http://localhost:5000/chocolates/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newChocolate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount > 0){

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'update success',
                    showConfirmButton: false,
                    timer: 1500
                })
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
        <form onSubmit={handleUpdateChocolate}>
          <div className="p-28 bg-orange-50 rounded">
            <h1 className="text-center font-bold text-2xl mb-5"> Update Chocolates</h1>
            <p className="text-center mb-5"> Use the below form to create a new product</p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
              name="name"
              defaultValue={name}
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
              defaultValue={country}
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
              defaultValue={category}
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
              defaultValue={photo}
                type="text"
                placeholder="PHoto Url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input className="w-full btn btn-primary mt-8" type="submit" value="Update" />
          </div>
        </form>
      </div>
    </div>
    );
};

export default UpdateChocolates;