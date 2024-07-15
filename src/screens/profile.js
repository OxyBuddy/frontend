import './profile.css'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';


const Profile = () => {

  const navigate = useNavigate();
  const [babyName, setBabyName] = useState('김유진');
  const [babyPercent, setBabyPercent] = useState(98);

  useEffect(() => {
    const saveBabyName = localStorage.getItem('babyName');
    const saveBabyPercent = localStorage.getItem('babyPercent');

    if(saveBabyName){
      setBabyName(saveBabyName);
    }
    if(saveBabyPercent){
      setBabyPercent(Number(saveBabyPercent));
    }
  },[]);

  const change_baby = () => {
    if(window.confirm('정말 상대의 이름을 변경하시겠습니까? 분석 퍼센트가 사라집니다.')){
      const new_baby = prompt('상대의 이름을 입력해주세요');
      if(new_baby){
        setBabyName(new_baby);
        setBabyPercent(0);
        localStorage.setItem('babyName', new_baby);
        localStorage.setItem('babyPercent', '0');
      }
    }
  }

  return (
    <div className="App">
      <div className='header'>
        
      </div>
      <div className="content_container" style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
        <div className='me' style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{color:'#E56767', fontSize:'20px', fontWeight:'bold'}}>나</p>
          <div className='image' style={{backgroundColor:'white', width:'300px', height:'300px', borderRadius:'150px', padding:'10px', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src='/Vector.png' style={{width:'200px', height:'220px', backgroundColor:'white'}} alt='vector image'></img>
          </div>
        </div>
        <h1 style={{color:'#E56767', alignSelf:'center'}}>{babyPercent}%</h1>
        <div className='baby' style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{color:'#E56767', fontSize:'20px', fontWeight:'bold'}}>{babyName}</p>
          <div className='image' style={{backgroundColor:'white', width:'300px', height:'300px', borderRadius:'150px', padding:'10px', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src='/Vector.png' style={{width:'200px', height:'220px', backgroundColor:'white'}} alt='vector image'></img>
          </div>
        </div>
      </div>
      <button className='profile_change' onClick={change_baby}>프로필 수정 <img src='/write-pen.png'></img></button>
    </div>
  );
}


export default Profile;
