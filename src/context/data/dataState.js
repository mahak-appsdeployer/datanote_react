import React, { useState } from "react";

import datacontext from './dataContext';



const DataState = (props) => {

  const apiurl = "http://localhost:3002"

  
const data =[]
  


  const [state1, setstate1] = useState(data)
  // const updatestate = () => {
  //     setTimeout(() => {
  //        setstate1({
  //         "name" : "efg"
  //        })
  //     }, 1000);
  // }


  const getallrecord = async () => {
   

    const response = await fetch(`${apiurl}/api/data/fetchalldata`, {
      method: 'GET',

      headers: {
         'Content-Type': 'application/json',
        'authorization-token': localStorage.getItem('token')
      },
      // body data type must match "Content-Type" header
    }
    )

    const responsejson = await response.json()
    console.log("All record fetched" + JSON.stringify(responsejson.data))

    setstate1(responsejson.data)
}




  //add a record
  const addrecord = async (title, description, tag) => {
    console.log("Adding record")

    const response = await fetch(`${apiurl}/api/data/adddata`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization-token': localStorage.getItem('token')
       },
      body: JSON.stringify({title, description, tag}) 
       }
    )

    
    const responsejson = await response.json()
    console.log("add record fetched" + JSON.stringify(responsejson))

    //console.log(" add response " + response.json() + JSON.stringify(response.json()))

    
    // const addrecorddata = {
    //   "_id": "6348f3165a0299cd0a19cc87",
    //   "userid": "6348e2f49851fd0cacbe3ace",
    //   "title": title,
    //   "description": description,
    //   "tag": tag,
    //   "date": "2022-10-14T05:26:46.186Z",
    //   "__v": 0
    // }

    setstate1(state1.concat(responsejson))

  }

  //delete a record
  const deleterecord = async (id) => {
    console.log("deleted record" + id)
    const response = await fetch(`${apiurl}/api/data/deletedata/${id}`, {
      method: 'DELETE',

      headers: {
         'Content-Type': 'application/json',
        'authorization-token': localStorage.getItem('token')
      },
      
    }
    )
    const responsejson = await response.json()
    console.log("delete record fetched" + JSON.stringify(responsejson))


    const newrecord = state1.filter((record) => { return record._id !== id })
    setstate1(newrecord)
  }

  //edit a record
  const editrecord = async (id, title, description, tag) => {

     await fetch(`${apiurl}/api/data/updatedata/${id}`, {
      method: 'PUT',

      headers: {
        'Content-Type': 'application/json',
        "authorization-token": localStorage.getItem('token')
            },
      body: JSON.stringify({ title, description, tag }) 
    }
    );
   
    // parses JSON response into native JavaScript objects

let updaterecord = JSON.parse(JSON.stringify(state1))
    for (let index = 0; index < state1.length; index++) {
      const element = updaterecord[index];
      if (element._id === id) {
       element.title = title
       element.description = description
       element.tag = tag
        break;
      }

    }
    console.log("updated value" + state1)
setstate1(updaterecord)
  }


  return (
    <datacontext.Provider value={{ state1, addrecord, deleterecord, editrecord, getallrecord }}>
      {props.children}
    </datacontext.Provider>
  )
}


export default DataState;


