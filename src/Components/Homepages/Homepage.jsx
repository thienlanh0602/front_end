import * as React from 'react';
import Header from '../Headers/Header';
import Navigation from '../Navigate/Navigate';
import NavigationPost from '../Navigate/NavigatePost';

import './Homepage.css';


export default function Homepage() {
  return (
    <div>
      <Header/>
      <Navigation/>
      <NavigationPost/>
    </div>
    
  
  )
  
}