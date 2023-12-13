import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css';
export default function AddParfum({onAddParfum}) {
    const [newParfum,setNewParfum]=useState({
        name:"",    
        type:"",
        prix:"",
        image:""
    })
    const handleAddParfum=()=>{

        if (newParfum.name.trim() === '' || newParfum.type.trim() === '' || newParfum.image.trim() === '' || newParfum.prix.trim() === '') {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please fill in all fields!',
            });
            return;
          }

        onAddParfum(newParfum)
        setNewParfum({
            name:"",
            type:"",
            prix:"",
            image:""
        })

        Swal.fire({
            icon: 'success',
            title: 'Parfum Added!',
            showConfirmButton: false,
            timer: 1500, // Automatically close after 1.5 seconds
          })

    }


  return (
    <div>
        <h1 style={{color:'Blue'}}>Add your fav Parfum</h1>
      <form>
      <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newParfum.name}
            onChange={(e) => setNewParfum({ ...newParfum, name: e.target.value })}
          />
        </div>

       
        
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Type
          </label>
          <input
            type="text"
            id="inputType"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newParfum.type}
            onChange={(e) => setNewParfum({ ...newParfum, type: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Prix
          </label>
          <input
            type="text"
            id="inputColor"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newParfum.prix}
            onChange={(e) => setNewParfum({ ...newParfum, prix: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Image
          </label>
          <input
            type="text"
            id="inputImage"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newParfum.image}
            onChange={(e) => setNewParfum({ ...newParfum, image: e.target.value })}
          />
        </div>

        <button className="btn btn-primary" type="button" onClick={handleAddParfum}>
          Add Parfum
        </button>

      </form>
    </div>
  )
}
