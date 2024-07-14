import './screens/record.css'

const records = ['박민서와의 기록 1번째','김유진과의 기록 1번째','박민서와의 기록 2번째','김유진과의 기록 2번째','',''];

const Record = () => {

  //const navigate = useNavigate();

  return (
    <div className="App">
      <div className='header'>
        <ul style={{padding: 0,listStyle:'none', flex: 1,flexDirection: 'row', display: 'flex', justifyContent: 'space-around'}}>
          <li><a className="navi_content" style={{color: '#E56767', marginLeft:0}}>프로필</a></li>
          <li><a className="navi_content" style={{color: '#E56767'}}>대화분석</a></li>
          <li><a className="navi_content" style={{color: '#ffffff', backgroundColor: '#FDD4D4'}}>기록</a></li>
        </ul>
      </div>
      <h1 style={{textAlign: 'left', marginLeft:'7%', color:'#F1A7A7', marginBottom:'70px'}}>지금까지 한 기록보기</h1>
      <div className="content_container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 35%)', gap: '80px', width:'100%', justifyContent:'space-around'}}>
            {records.map((record, index) => (
              <div key={index} className="records" style={{ border: 'none', padding: '10px', textAlign: 'center' }}>
                {record!=''? '기록'+(index+1) : 'ㅡ'}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}


export default Record;
