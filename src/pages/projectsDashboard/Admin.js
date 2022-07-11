import styled from 'styled-components';
import { useState } from 'react';
import { useAppContext } from '../../context/appContext';


const defaultData = {
  name: '',
  complete: false,
  content: '',
  poomsaeVid: '',
}
const Admin = () => {
  const [formData, setFormData] = useState(defaultData)
  const { addTapes, tapeName } = useAppContext();
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
      
    })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTapes(formData);
  }

  return (
    <Wrapper>
      <div>Admin Page get busy.. No it not pretty!</div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name='name' value={formData.name} onChange={handleOnChange} placeholder='tape name'/>
        <input type="text" name='complete' value={formData.complete} onChange={handleOnChange} placeholder='complete'/>
        <input type="text" name='content' value={formData.content} onChange={handleOnChange} placeholder='content'/>
        <input type="text" name='poomsaeVid' value={formData.poomsaeVid} onChange={handleOnChange} placeholder='poomsae url' />
        <button>Submit</button>
      </form>
      <div className="confirm">
        {tapeName}
      </div>


    </Wrapper>


  )
}



const Wrapper = styled.section`

`
export default Admin