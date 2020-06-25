import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    tabContents: [
      { name: "tab1", content: "This is article One" },
      { name: "tab2", content: "This is article Two" },
      { name: "tab3", content: "This is article Three" },
      { name: "tab4", content: "This is article Four" },
    ],
    currentTab: "tab1"
  };

  changeCurrentTab = (nextTabName) => {
    this.setState({ currentTab: nextTabName });
  };

  renderActicle = () => {
    const targetTab = this.state.tabContents.find(tab => tab.name === this.state.currentTab);

    return <p>{targetTab.content}</p>;
  };

  render() {
    const { currentTab, tabContents } = this.state;

    return (
      <div className="App">
        <div>
          {tabContents.map(tab => {
            let className = "Tab";
            if (tab.name === currentTab) {
              className = className + " Active";
            }
            return (
              <div
                className={className}
                onClick={() => this.changeCurrentTab(tab.name)}
              >
                {tab.name}
              </div>
            );
          })}
        </div>
        <div>
          <p>
            {this.renderActicle()}
          </p>
        </div>
      </div>
    );
  }
}

export default App;