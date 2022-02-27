import React from 'react'
import { FaTrash } from "react-icons/fa"
import s from './list.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../../../store/slise/sliseData'

const List = () => {
  const dispatch = useDispatch()
  const [user, setUsers] = React.useState([])
  const { users, status } = useSelector(st => st.user)


  React.useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch]);


  React.useEffect(() => {
    setUsers(users)
  }, [users]);



  return (
    <div  >
      <h1 className={s.title}>LIST OF USERS</h1>
      <div className={s.wrapper}>
        {
          status === 'loading' ? <h1>LOUDING....</h1> : ''

        }
        {
          status === 'error' ? <h1>ERROR...</h1> : ''
        }
        {
          user.map(i => <div
            className={s.list}
            key={i.id}>

            <h3>{i.name}</h3>
            <h3>{i.lastName}</h3>
            <div className={s.div}>

              {i.tel.map(k => {
                if (k) { return <span key={k}>{`${k},`}</span> }
              })}

            </div>
            <div className={s.icon}>
              <FaTrash />
            </div>

          </div>
          )
        }

      </div>

    </div>
  )
}
export default List
