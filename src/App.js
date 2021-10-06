import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [image, setImage] = useState('');

  const onChangeLine1 = function(event) {
    setLine1(event.target.value)
  }

  const onChangeLine2 = function(event) {
    setLine2(event.target.value)
  }

  const onChangeImage = function(event) {
    setImage(event.target.value)
  }

  const onClickExport = function(event) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">

      <select onChange={onChangeImage}>
        <option value="fire">Burning house</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select> <br />

      <input onChange={onChangeLine1} type="text" placeholder="Line 1" /> <br />
      <input onChange={onChangeLine2} type="text" placeholder="Line 2" /> <br />
      <button onClick={onClickExport}>Export</button>

      <div className="meme" id="meme">
        <span>{line1}</span> <br />
        <span>{line2}</span>
        <img src={"/img/" + image + ".jpg"} />
      </div>

    </div>
  );
}

export default App;
