import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { myData, EXAMPLES } from "../data";
import TabButton from "./TabButton";
import {useState} from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Vui lòng chọn chủ đề</p>;
  if (selectedTopic) {
    tabContent = (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3> 
            <p>{EXAMPLES[selectedTopic].desc}</p> 
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
    );
  }
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
            {/* dùng toán tử 3 ngôi */}
            {/* {!selectedTopic ? (<p>Vui lòng click vào nút để lựa chọn chủ đề</p>) :
              (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3> 
            <p>{EXAMPLES[selectedTopic].desc}</p> 
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)
            } */}
            {/* cách 2: && */}
            {/* {!selectedTopic && <p>Vui lòng click vào nút để chọn 1 chủ đề</p>}
            {selectedTopic && (
              <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3> 
            <p>{EXAMPLES[selectedTopic].desc}</p> 
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
            )} */}
            {/* cách 3: */}
            <TabButton isSelected={selectedTopic==="components"} onSelect={() => handleSelect('components')}>Components</TabButton>
            {/* <TabButton aaa ="Components"></TabButton> */}
            <TabButton isSelected = {selectedTopic==="jsx"} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected = {selectedTopic==="props"} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected = {selectedTopic==="state"} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
