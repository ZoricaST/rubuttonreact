import './App.css';
import Button from './components/Button';
function App() {
  
  const onClick1 = (e) => {
    console.log('kliknuto je Dugme1')
    }

    const onClick2 = (e) => {
      console.log('kliknuto je Dugme2 ')
      }

  return (
    <div className="container">
    <h1>Reusable Button</h1>
    <Button color='green' text='Click 1' onClick={onClick1}/>
    <hr />
    <Button color='blue' text='Click2' onClick={onClick2}/>
    </div>
  );
}

export default App;
