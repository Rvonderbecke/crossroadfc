import { useState } from "react"
import { NavLink } from "react-router-dom"
import { GrUserAdmin } from 'react-icons/gr';
import { FormRow, Alert} from '../../components'
import { useAppContext } from "../../context/appContext"
import Wrapper from '../../assets/wrappers/DashboardFormPage'


const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } = useAppContext();

  const [fName, setfName] = useState(user?.fName);
  const [email, setEmail] = useState(user?.email);
  const [lName, setlastName] = useState(user?.lName);
  const [zipCode, setZip] = useState(user?.zipCode);
  const [displayName, setdisplayName] = useState(user?.displayName);
  

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) {
      displayAlert()
      return
    }
    updateUser({ email, lName, fName, zipCode, displayName });
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow type='text' name='fName' value={fName} labelText='First Name'onChange={(e) => setfName(e.target.value)} />
          <FormRow type='text' name='lName' value={lName} labelText='Last Name'onChange={(e) => setlastName(e.target.value)} />
          <FormRow type='text' name='email' value={email} labelText='Email'onChange={(e) => setEmail(e.target.value)} />
          <FormRow type='text' name='zipCode' value={zipCode} labelText='Zip Code'onChange={(e) => setZip(e.target.value)} />
          <FormRow type='text' name='displayName' value={displayName} labelText='Display Name' onChange={(e) => setdisplayName(e.target.value)} />
          <button className="btn btn-block" type='submit' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'Save Changes'}
          </button>
        </div>
        {user.admin && (
						<NavLink
							to='/admin'
							className={({ isActive }) =>
								isActive ? 'nav-link active' : 'nav-link'
							}
							key='6'
							>
							<span className='icon'><GrUserAdmin /></span>
							Admin
						</NavLink>
					)}


      </form>
    </Wrapper>
  )
}
export default Profile