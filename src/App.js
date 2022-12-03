import { fromJSON } from 'postcss';
import React from 'react';
import {Header, MainContainer, CreateContainer} from './components';
import { AnimatePresence } from 'framer-motion';
import {Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <AnimatePresence>
    <div className='w-screen h-auto flex flex-col bg-primary'>
      <Header />
    <main className='mt-20 md:mt-20 px-8 md:px-16 py-4 w-full'>
        <Routes>
          <Route path='/*' element={< MainContainer />} />
          <Route path='/createItem' element={< CreateContainer />} />
        </Routes>
    </main>
    </div>
    </AnimatePresence>
  );
};

export default App
