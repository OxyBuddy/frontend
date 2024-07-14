import './profile.css'

const baby_name = '박민서';

const Profile = () => {

  //const navigate = useNavigate();

  return (
    <div className="App">
      <div className='header'>
        <ul style={{padding: 0,listStyle:'none', flex: 1,flexDirection: 'row', display: 'flex', justifyContent: 'space-around'}}>
          <li><a className="navi_content" style={{color: '#ffffff', backgroundColor: '#FDD4D4'}}>프로필</a></li>
          <li><a className="navi_content" style={{color: '#E56767'}}>대화분석</a></li>
          <li><a className="navi_content" style={{color: '#E56767'}}>기록</a></li>
        </ul>
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
