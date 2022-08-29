import React, {useContext} from 'react';
import {UserContext, ColorContext} from './MyContext'

const ContentData = () => {

  const user = useContext(UserContext);
  const color = useContext(ColorContext);

  return (

    <div className="card card-body" style={{backgroundColor: color, color: color}}>
        <ul className={`list-group text-${color === 'red' && 'danger' }`}  >
        <li className="list-group-item">Name: {user.name}  </li>
          <li className="list-group-item">Age: {user.age} </li>
        </ul>
    </div>

  )


  //  return (

  //     <UserContext.Consumer>
  //       {
  //         user => {

  //           return (

  //             <ColorContext.Consumer>

  //               {
  //                 colorUser => {

  //                   return (


  //                   <div className="card card-body" style={{backgroundColor: colorUser, color: colorUser}}>
  //                     <ul className={`list-group text-${colorUser === 'red' && 'danger' }`}  >
  //                       <li className="list-group-item">Name: {user.name}  </li>
  //                       <li className="list-group-item">Age: {user.age} </li>
  //                     </ul>
  //                   </div>

  //                   )
  //                 }
  //               }
  //             </ColorContext.Consumer>


  //           )
  //         }
  //       }
  //     </UserContext.Consumer>


  //       )
      }
export default ContentData
