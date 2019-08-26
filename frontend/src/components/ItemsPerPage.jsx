import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export class ItemsPerPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle color="default" caret>
          10
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>10</DropdownItem>
          <DropdownItem>20</DropdownItem>
          <DropdownItem>50</DropdownItem>          
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}