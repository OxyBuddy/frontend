import './analyze.css'
import { useNavigate } from 'react-router';

const Analyze = () => {

  const navigate = useNavigate();

  const handle_submit = (event) => {
        event.preventDefault(); // 버튼 잠시 금지
    
        const formData = new FormData(event.target); // 폼 데이터 생성
        // 서버로 데이터 보내기
        fetch('/api/analyze', { // 서버 엔드포인트로 수정 필요
          method: 'POST',
          body: formData,
        })
          .then((response) => {
            if (response.ok) {
              // 분석 결과 페이지로 이동
              window.location.href = './analyze_result.js';
            } else {
              console.error('서버 응답 에러');
            }
          })
          .catch((error) => {
            console.error('서버 요청 에러:', error);
          });
    
        console.log('분석하기');
      };
  return (
    <div className="App">
      <div className='header'>
        <ul style={{padding: 0,listStyle:'none', flex: 1,flexDirection: 'row', display: 'flex', justifyContent: 'space-around'}}>
        <li>
          <button
            className="navi_content"
            style={{ color: '#E56767', marginLeft: 0, border: 'none', cursor: 'pointer' }}
            onClick={() => navigate('/profile')}
          >
          프로필
          </button>
        </li>
        <li>
          <button
            className="navi_content"
            style={{ color: '#ffffff',backgroundColor: '#FDD4D4', border: 'none', cursor: 'pointer' }}
            onClick={() => navigate('/analyze')}
          >
          대화분석
          </button>
        </li>
        <li>
          <button
            className="navi_content"
            style={{ color: '#E56767',  border: 'none', cursor: 'pointer' }}
            onClick={() => navigate('/record')}
          >
          기록
          </button>
        </li>
        </ul>
      </div>
      <h1 style={{fontSize:'40px', fontWeight:'bold', color:'#F1A7A7', marginBottom:'20px', textAlign:'center'}}>대화 내용 분석</h1>
      <div className="content_container">
        
        <form onSubmit={handle_submit} className='form_content'>
            <div className='left'>
            <label>그 사람과의 관계</label>
            <input type='text' name='relation'/>
            <label>연락 응답 시간</label>
            <input type='text' name="answer_time"/>
            <label>연락 빈도(ex:하루에 한번)</label>
            <input type='text' name='how_much'/>
            <label>연락 한 기간</label>
            <input type='text' name='period'/>
          </div>
          <div className='right'>
            <label>연락 텀(1분~하루이상)</label>
            <input type='range' name='term'/>
            <label>이미지 업로드</label>
            <div style={{}}>
              <input type='file' name='upload' style={{height: '200px', alignContent:'center', fontSize:'0px', color:'white'}}/>
            </div>
          </div>
          <button type='submit'onClick={()=>navigate('/analyze_result')}>➤</button>
        </form>
      </div>
    </div>
  );
}


export default Analyze;
