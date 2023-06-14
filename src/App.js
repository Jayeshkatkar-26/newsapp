
import './App.css';
import NavBar from './NavBar';
import React,{useState} from 'react'
import News from './Components/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


// // 0c91c7907544421198c5c378ccab652a

const App = () =>{
  
  const pageSize=10;
  // const apiKey = process.env.REACT_APP_NEWS_API
  const[progress,setProgress]=useState(0)

  
  
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        height={3}
      />
      

        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress}    key="General" pageSize={pageSize} country="in" category="General"/>}></Route> 
          <Route exact path="/Business"element={<News setProgress={setProgress}    key="Business" pageSize={pageSize} country="in" category="Business"/>}></Route> 
          <Route exact path="/Entertainment"element={<News setProgress={setProgress}    key="Entertainment" pageSize={pageSize} country="in" category="Entertainment"/>}></Route> 
          <Route exact path="/Science"element={<News setProgress={setProgress}    key="Science" pageSize={pageSize} country="in" category="Science"/>}></Route> 
          <Route exact path="/Health"element={<News setProgress={setProgress}    key="Health" pageSize={pageSize} country="in" category="Health"/>}></Route> 
          <Route exact path="/Sports"element={<News setProgress={setProgress}    key="Sports" pageSize={pageSize} country="in" category="Sports"/>}></Route> 
          <Route exact path="/Technology"element={<News setProgress={setProgress}    key="Technology" pageSize={pageSize} country="in" category="Technology"/>}></Route> 
          
          </Routes>

        </Router>
        
      </div>
    )
  
}
export default App;




