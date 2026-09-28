import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { myData } from "../data";
import TabButton from "./TabButton";

function App() {
   function handleSelect(selectedButton) {
        alert(`${selectedButton} được click`);
    }
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
          <MainContent {...myData[0]}/>
          <MainContent {...myData[1]}/>
          <MainContent {...myData[2]}/>
          <MainContent {...myData[3]}/>
          
          </ul>
        </section>

        <section id="examples">
          <h2>Example</h2>
          {/* prettier-ignore */}
          <menu>
            <li><button>Components</button></li>
            <li><button>JSX</button></li>
            <li><button>Props</button></li>
            <li><button>State</button></li>

            <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
            {/* <TabButton aaa ="Components"></TabButton> */}
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
        </section>
      </main>
    </>
  );
}

export default App;
