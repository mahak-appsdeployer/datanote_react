import React from 'react';

import AllRecord from './AllRecord';

//rfc


export default function Home(props) {

  // useEffect(() => {
  //   a.updatestate()


  // }, [])


  return (
    <div>
      
      <AllRecord showAlert={props.showAlert}/>
      
    </div>
  )
}
