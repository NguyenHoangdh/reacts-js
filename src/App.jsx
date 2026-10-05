import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { myData, EXAMPLES } from "../data";
import TabButton from "./TabButton";
import {useState} from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  console.log("App được gọi");
  
  function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
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
            {/* <li><button>Components</button></li>
            <li><button>JSX</button></li>
            <li><button>Props</button></li>
            <li><button>State</button></li> */}

            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            {/* <TabButton aaa ="Components"></TabButton> */}
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            {/* <h3>{EXAMPLES.selectedTopic.title}</h3> */}
              {/* bracket notation */}
            <h3>{EXAMPLES[selectedTopic].title}</h3> 
            <p>{EXAMPLES[selectedTopic].desc}</p> 
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
