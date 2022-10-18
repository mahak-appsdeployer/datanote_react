import React, { useContext, useEffect, useRef , useState} from 'react';
import { useHistory } from 'react-router-dom';
import datacontext from '../../context/data/dataContext';
import AddRecord from './AddRecord';
import Recorditem from './Recorditem';

const AllRecord = (props) => {
    const fetchalldatacontext = useContext(datacontext)
    const { state1, getallrecord , editrecord} = fetchalldatacontext
    let history = useHistory()

    useEffect(() => {
    
      if(localStorage.getItem('token')){
        console.log("valid token")
        
        getallrecord()
       
      }
      else{
history.push('/login')
      }
  // eslint-disable-next-line

    }, []
    )

    

    const ref = useRef(null)
    const refsave = useRef(null)

    const [updatenewrecord, setupdatenewrecord] = useState({id: "", utitle: "", udescription: "", utag: ""})
    const updaterecord = (newrecord) => {
        ref.current.click()
        setupdatenewrecord({id: newrecord._id,utitle: newrecord.title, udescription: newrecord.description, utag: newrecord.tag})
            }

    const handleupdaterecord = (event) => {
        refsave.current.click()
        console.log("updating.......")
   editrecord(updatenewrecord.id, updatenewrecord.utitle, updatenewrecord.udescription, updatenewrecord.utag)
   console.log("updated............")
   props.showAlert("Updated successfully ", "Success")


    }

    const onChange = (e) =>  {
        
        setupdatenewrecord({...updatenewrecord, [e.target.name]: e.target.value})

    }

    return (
        <>
            <AddRecord showAlert={props.showalert}/>
            
<button  ref={ref}  type="button" className="btn btn-primary d-none"  data-bs-toggle="modal" data-bs-target="#exampleModal">
 
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Update Your Record</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="mb-3">
    <label htmlFor="dataupdatetitle" className="form-label">Title</label>
    <input type="text" className="form-control" id="dataupdatetitle" name="utitle"  value = {updatenewrecord.utitle} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="datadescription" className="form-label">Description</label>
    <input type="text" className="form-control" id="dataupdatedescription" name="udescription" value = {updatenewrecord.udescription} onChange={onChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="dataupdatetag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="dataupdatetag" name="utag"  value = {updatenewrecord.utag} onChange={onChange} />
  </div>



</form>
      </div>
      <div className="modal-footer">
        <button  ref={refsave} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button   type="button" className="btn btn-dark" onClick={handleupdaterecord}>Save changes</button>
      </div>
    </div>
  </div>
</div>
            <div className='container'>
                <h2 className='my-3'>Your Records</h2>

                <div className="row my-3">
                  <div className="containerr">
                    {state1.length===0 && 'No records to display!!'}
                  </div>
                    {state1.map((datarecord) => {
                        return <Recorditem key={datarecord._id} updaterecord ={updaterecord} record={datarecord}  showAlert={props.showAlert}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default AllRecord