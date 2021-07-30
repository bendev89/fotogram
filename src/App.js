import React from 'react';
import UploadForm from './components/UploadForm';
import Title from './components/Title';
import ImageGrid from './components/ImageGrid';

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
