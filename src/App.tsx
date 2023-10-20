import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import TopAppBar from './app_bar/TopAppBar';
import MainBody from './main_app/MainBody';
import { Box } from '@mui/material';
import MainContent from './main_app/MainContent';
import { Link } from 'react-router-dom';
import Main from './Main';

function App() {

  return (
     <div className="fullHeight flex flex-col ">
       <div><TopAppBar></TopAppBar></div>
       <div className="grow flex">
         <div className="flex w-1/5 border-r-2">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
            <li><Link to='/settings'>Settings</Link></li>
         </div>
         <div className="overflow-y-scroll w-full">
          <Main></Main>
        </div>
       </div>
       <div className="border-t-2">footer</div>
     </div>
   );
}

export default App;   
