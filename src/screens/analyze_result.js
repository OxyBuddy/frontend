import './analyze_result.css'
import { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router';

const AnalyzeResult = () => {
  //const navigate = useNavigate();
  const [analysisResult, setAnalysisResult] = useState({
    response: ''
  });

  useEffect(() => {
    fetch('/analyze_result') // 서버의 엔드포인트에 맞게 수정 필요
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch analysis result');
        }
        return response.json();
      })
      .then(data => {
        console.log('Analysis result:', data);
        setAnalysisResult({
          response: data.response
        });
      })
      .catch(error => {
        console.error('Error fetching analysis result:', error);
      });
  }, []);


  return (
    <div className="App">
      <div className='content_container'>
      <div className="analyze_result">
        <h1 style={{fontSize:'40px', fontWeight:'bold', color:'#F1A7A7', marginBottom:'20px'}}>대화 내용 분석</h1>
        <p className='result'>{analysisResult.response}</p>
      </div>
      </div>
    </div>
  );
}

export default AnalyzeResult;
