import React , {useContext, useState} from 'react'
import datacontext from '../../context/data/dataContext';

const AddRecord = (props) => {
    const adddatacontext = useContext(datacontext)
    const { addrecord } = adddatacontext

    const [record, setrecord] = useState({title: "", description: "", tag: ""})

    const handleaddrecord = (event) => {
      event.preventDefault()
        addrecord(record.title, record.description, record.tag)
        setrecord({title: "", description: "", tag: ""})
        props.showAlert("Record added  ", "Success")

    }

    const onChange = (e) =>  {
        
        setrecord({...record, [e.target.name]: e.target.value})

    }
  return (
    <div>
        <div className='container my-3'>

<h2>Add Record</h2>
<form>
  <div className="mb-3">
    <label htmlFor="datatitle" className="form-label">Title</label>
    <input type="text" className="form-control" id="datatitle" name="title" aria-describedby="emailHelp" value={record.title} onChange={onChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="datadescription" className="form-label">Description</label>
    <input type="text" className="form-control" id="datadescription" name="description"aria-describedby="emailHelp" value={record.description}  onChange={onChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="datatag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="datatag" name="tag"aria-describedby="emailHelp" value={record.tag} onChange={onChange} />
  </div>


  <button type="submit" className="btn btn-dark" onClick={(event) => handleaddrecord(event)}>Add your record</button>
</form>


</div>
    </div>
  )
}

export default AddRecord