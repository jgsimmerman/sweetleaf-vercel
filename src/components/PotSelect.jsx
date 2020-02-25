import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'Plastic', label: 'Plastic' },
  { value: 'TerraCotta', label: 'Terra Cotta' },
  // { value: 'vanilla', label: 'Vanilla' },
];

class PotSelect extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default PotSelect;