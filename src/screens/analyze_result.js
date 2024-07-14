import './analyze_result.css'

const analyze = () => {
  
  return (
    <div className="App">
      <div className='header'>
        <ul style={{padding: 0,listStyle:'none', flex: 1,flexDirection: 'row', display: 'flex', justifyContent: 'space-around'}}>
          <li><a className="navi_content" style={{color: '#E56767'}}>프로필</a></li>
          <li><a className="navi_content" style={{color: '#ffffff', backgroundColor: '#FDD4D4'}}>대화분석</a></li>
          <li><a className="navi_content" style={{color: '#E56767'}}>기록</a></li>
        </ul>
      </div>
      <div className='content_container'>
      <div className="analyze_result">
        <h1 style={{fontSize:'40px', fontWeight:'bold', color:'#F1A7A7', marginBottom:'20px'}}>대화 내용 분석</h1>
        <p className='result'>상대와 당신의 연애 확률은 78%입니다.</p>
      </div>
      <div className="analyze_result">
        <h1 style={{fontSize:'40px', fontWeight:'bold', color:'#F1A7A7', marginBottom:'20px'}}>해야할 노력</h1>
        <p className='result'>78%는 높은 수치이긴 하지만 확실한 수치는 아니기 때문에 연애 수치를 올리고 싶으시면, 상대에게 더 적극적으로 행동하는 것을 추천합니다.</p>
      </div>
      </div>
    </div>
  );
}

export default analyze;
