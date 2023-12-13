import React from 'react'
import './parfumlist.css'
import AddParfum from './AddParfum';
import Data from '../database/Data';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
export default function ParfumsList() {
    //inisialization with data
    const [parfums,setParfums]=useState(Data)
    //function to add the new car
    const handleAddParfum=(newParfum)=>{
        const updateParfum=[...parfums,{...newParfum, id:parfums.length+1}]
        setParfums(updateParfum)
    }

  return (
    <div>
        <h1 style={{color:'blue'}}>YOUR FAV PARFUM LIST</h1>
      {
        parfums.map((parfum)=>(
            <div className="card mb-3" style={{width: "540px"}} key={parfum.id}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={parfum.image} className="img-fluid rounded-start" alt='...' />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" >{parfum.name}</h5>
        <p className="card-text">{parfum.type}</p>
        <p className="card-text"><small className="text-body-secondary">{parfum.prix}</small></p>
      </div>
    </div>
  </div>
</div>
        ))
      }
      <AddParfum onAddParfum={handleAddParfum}/>
      
    </div>
  )
}
