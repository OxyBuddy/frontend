import './start.css'

const start = () => {
  return (
    <div className="App">
      <div className='header'>
        <ul style={{padding: 0,listStyle:'none', flex: 1,flexDirection: 'row', display: 'flex', justifyContent: 'space-around'}}>
          <li><a className="navi_content" style={{color: '#E56767'}}>프로필</a></li>
          <li><a className="navi_content" style={{color: '#E56767'}}>대화분석</a></li>
          <li><a className="navi_content" style={{color: '#E56767'}}>기록</a></li>
        </ul>
      </div>
      <div className="content_container">
        <p style={{color:'#F1A7A7', fontSize: '40px', fontWeight: 'bold',marginTop:'20px', marginBottom:'60px', textAlign: 'center'}}>그 사람과의 연애 가능성이 궁금하시다구요?</p>
        <div style={{ margin: '0 auto', width: '800px', textAlign: 'center'}}><p style={{color:'#FDC0C0', fontSize: '25px', textAlign:'left'}}>"마지막으로 연락한 시간은?"</p>
        <p style={{color:'#FDC0C0', fontSize: '25px', textAlign:'left'}}>"연락 텀은?"</p>
        <p style={{color:'#FDC0C0', fontSize: '25px', textAlign:'left'}}>"연락 응답 시간은?"</p>
        <p style={{color:'#FDC0C0', fontSize: '25px', textAlign:'left'}}>"연락할 때 말투는?"</p>
        <p style={{color:'#FDD4D4',fontSize: '30px', marginBottom:'60px'}}>이젠 <text style={{fontSize: '45px', fontWeight:'bold'}}>고민</text> 그만! AI 대화 분석을 통한 확실한 솔루션</p>
        <a className="solve_problem">문제 해결해 보기!</a>
        </div>
      </div>
    </div>
  );
}

export default start;
