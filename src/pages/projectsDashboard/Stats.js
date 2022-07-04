import { useTkdContext } from "../../context/tkdContext";
import { useAppContext } from '../../context/appContext';



const Stats = () => {
  const { user } = useAppContext();
  const  {createTkdProfile, data}  = useTkdContext();
  const { msg } = data;
  const createProfile = () => {
  createTkdProfile(user)
}

  return (
    <div>
      <button type='button' onClick={createProfile}>Create</button>
      <h1>{msg}</h1>
    </div>
  )
}
export default Stats