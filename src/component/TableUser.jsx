import React,{useEffect , useState} from 'react'


// import local css style  file 
import '../component/TableUser.css';

const TableUser = () => {
    // api link this save container 
    const API = "https://jsonplaceholder.typicode.com/users";
    // useState handling api response data to save this state 
    const [author, setAuthor] = useState([])

    //  get request for api 
       const fetchUser = async (url) => {
        try {
            const reponse = await fetch(url);
            const data = await reponse.json();
            setAuthor(data);
        } catch (e) {
            console.error(e)
        }
    }

    //  site effect this function call 
    useEffect(() => {
        fetchUser(API);
    }, [])
  return (

    <>
            <h1 className='table-heading'> user details </h1>
          <div className="table-show-user">
              <table>
                  <thead>
                      <tr>
                          <th>id</th>
                          <th>FristName</th>
                          <th>Email</th>
                          <th>Address</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          author.map((currentUser,id) => {
                            //   const { id, Fristname, lastname, phone, email, gender, age } = currentUser;
                              const { city, street, zipcode, suite } = currentUser.address
                              return <>
                                  <tr key={id}>
                                      <td>{currentUser.id}</td>
                                      <td>{currentUser.name}</td>
                                      <td>{currentUser.email}</td>
                                      <td>{city}  {street} {zipcode} {suite}</td>
                                  </tr>
                              </>
                          })
                      }
                  </tbody>
              </table>
          </div>
    </>
  )
}

export default TableUser





