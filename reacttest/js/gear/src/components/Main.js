import React from 'react';

const Main = React.createClass({
  componentWillMount: function() {
      this.props.getData()
  },

  searchTitle: function(e) {
      this.props.searchTitle(e.target.value)
  },

  clickHandler: function(e, index) {
    this.props.addGearToTrip(index);
  },

  render() {
    // App is busy loading Data from API
    if (this.props.data.isLoaded === false) {
      return (
        <div>Loading...</div>
      )
    }

    // All data loaded, so render it.
    return (
      <div>
        <div className="search">
          <h2>Search</h2>
          <div className="filters">
            <div>
              <label>Title</label>
              <input
                type="text"
                onKeyUp={this.searchTitle}
                />
            </div>
          </div>
        </div>
        <div>
          Showing {this.props.data.filteredData.length} results.
        </div>
          {this.props.data.filteredData.map(function(item, index) {
              return (
                  <div key={index}>
                      <p>{item.attributes.title}</p>
                      <button onClick={addGearToTrip(index)} type="button">Add to trip</button>
                  </div>
              )
          })}
      </div>
    )
  }
});

export default Main;
