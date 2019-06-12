import React, { Component } from "react";
import "./App.css";
import formatData from "./functions/formatData";
import Search from "./components/Search";
import Menu from "./components/Menu";

//let newList = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: formatData,
      menuData: [],
      searchText: ""
    };
    this.changeSearchValue = this.changeSearchValue.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  /**
   * Change search value in state
   * @param { Object } event  keyborad event
   * @memberof App
   */
  changeSearchValue(event) {
    this.setState(
      {
        searchText: event.target.value
      },
      () => {
        this.handleSearch();
      }
    );
  }

  /**
   * Handle search functionality 
   * @memberof App
   */
  handleSearch() {
    const { searchText } = this.state;
    let pattern = new RegExp(searchText, "gi");
    let filteredList  = this.state.initialItems;
    let newList = [];

    filteredList.forEach(item => {
      if(item.hasOwnProperty('subcategory')){
        item.subcategory.forEach((item) => {
          if(item.Name.match(pattern)){
            if(item.hasOwnProperty('subcategory')){
              item.subcategory.forEach((item) => {
                if(item.Name.match(pattern)){
                  newList.push(item)
                }
              });
            }
            newList.push(item);
          }
        })        
      }
      if(item.Name.match(pattern)){
        newList.push(item)
      }
    });
    this.setState({menuData: newList});
    if(searchText === ''){
      this.setState({menuData: this.state.initialItems});
    }
  }

  componentDidMount() {
    this.setState({ menuData: formatData });
  }

  render() {
    return (
      <div className="App">
        <section>
          <div className="SearchSection">
            <Search onChange={this.changeSearchValue} />
          </div>
        </section>
        <section>
          <div>
            <Menu menuItems={this.state.menuData} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
