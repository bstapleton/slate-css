import React from 'react';
import './scss/themes/dark.scss';

const App = (() => {
   return (
       <main>
           <h1>Component render test</h1>
           <div className={'card card--success card--noHeader card--noFooter'}>
               <div className={'card__content'}>Some text here</div>
           </div>
       </main>
   )
});

export default App;