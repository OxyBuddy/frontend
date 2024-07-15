import './profile.css'
import { useNavigate } from 'react-router';

const baby_name = '김유진';

const Profile = () => {

  const navigate = useNavigate();

  return (
    <div className="App">
      <div className='header'>
        
      </div>
      <div className="content_container">
        <div className='me' style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{color:'#E56767', fontSize:'20px', fontWeight:'bold'}}>나</p>
          <div className='image' style={{backgroundColor:'white', width:'300px', height:'300px', borderRadius:'150px', padding:'10px', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src='/Vector.png' style={{width:'200px', height:'220px', backgroundColor:'white'}} alt='vector image'></img>
          </div>
        </div>
        <h1 style={{color:'#E56767', alignSelf:'center'}}>78%</h1>
        <div className='baby' style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{color:'#E56767', fontSize:'20px', fontWeight:'bold'}}>{baby_name}</p>
          <div className='image' style={{backgroundColor:'white', width:'300px', height:'300px', borderRadius:'150px', padding:'10px', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src='/Vector.png' style={{width:'200px', height:'220px', backgroundColor:'white'}} alt='vector image'></img>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Profile;
