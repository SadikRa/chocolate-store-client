// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ChocolatesCard = ({chocalate}) => {
    const {_id, name, country, category, photo} = chocalate;

    const handleDelete = _id =>{
        fetch(`http://localhost:5000/chocolates/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
                Swal.fire(
                    'Deleted!',
                    'Your Coffee has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <div className='my-10'>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className='w-20 rounded pl-5' src={photo} alt="Movie"/></figure>
  <div className="card-body ">
    <div className='flex justify-between'>
    <p>{name}</p>
    <p>{country}</p>
    <p>{country}</p>
    <div className='flex gap-5'>
        
            <Link to={`updateChocolates/${_id}`} className='btn btn-outline btn-info'>
                EDIT
                </Link>
            <Link onClick={() => handleDelete(_id)} className='btn btn-outline btn-info'>X</Link>
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChocolatesCard;