import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from './screens/start';
import Analyze from './screens/analyze';
import Profile from './screens/profile';
import Record from './screens/record';
import AnalyzeResult from './screens/analyze_result'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/start' element={<Start />} />
                <Route path='/Profile' element={<Profile />} />
                <Route path='/analyze' element={<Analyze />} />
                <Route path='/record' element={<Record />} />
                <Route path='/analyze_result' element={<AnalyzeResult />} />
            </Routes>
        </Router>
    )
}
export default App;