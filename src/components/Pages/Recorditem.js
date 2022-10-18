import React, {useContext} from 'react';
import datacontext from '../../context/data/dataContext';

const Recorditem = (props) => {
    const {record, updaterecord} = props
    const adddatacontext = useContext(datacontext)
    const { deleterecord } = adddatacontext
  return (
    <div className='col-md-3'>
      

        <div className="card my-3 ">
  <div className="card-body">
 {/* <h5 className="card-title">Record Title</h5> */}
    <h6 className="card-subtitle mb-2 text-muted">{record.title}</h6>
    <p className="card-text">{record.description}</p>
    <i className="fa-solid fa-trash mx-2" style={{color: "red"}} onClick={ () => {deleterecord(record._id);    props.showAlert("Deleted successfully" , "success")}}>

    </i>
    <i className="fa-solid fa-file-pen mx-2" onClick={ () => updaterecord(record)}></i>
    
  </div>
</div>

    
    </div>
  )
}

export default Recorditem