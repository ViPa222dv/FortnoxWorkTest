import logo from './logo.svg';
import './App.less';

function App() {
    return (
      <div className="App">
        <button>Form</button>
        <button>List</button>
        <form>
        <label>
          Name
          <textarea
            name="name"            
            type="checkbox"
          />
        </label>
        <br />
        <label>
          Weight
          <textarea
            name="weight"           
            type="number"
          />
        </label>
        <br />
        <label>
          Box colour
          <input
            name="boxcolour"           
            type="color"
          />
        </label>
        <br />
        <label>
          Country
          <select name="country">            
            <option value="sweden">Sweden</option>
            <option value="china">China</option>
            <option value="brazil">Brazil</option>
            <option value="australia">Australia</option>
          </select>
        </label>
      </form>
      </div>
    );
}

export default App;
