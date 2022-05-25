import { useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import { useSelector} from 'react-redux'


function Dashboard() {
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  })
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Recipes Dashboard</p>
      </section>

      <section className="content">
        Recipes will show up here
      </section>
    </>
  )
}

export default Dashboard
