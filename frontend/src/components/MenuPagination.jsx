import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
export class MenuPagination extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ItemsPerPage: 0,
			PageNumber: 0,
			ReturnCount: 0,
			SearchCount: 0
		}
	}
	componentWillReceiveProps(nextProps) {
		this.setState({ItemsPerPage: nextProps.ItemsPerPage, PageNumber: nextProps.PageNumber, ReturnCount: nextProps.ReturnCount, SearchCount: nextProps.SearchCount })
	}
	onClick(PageNumber){
		this.props.updatePageNumber(PageNumber)
	}
	render() {
		// debugger 
		let Pages = []
		let StatusAdd = true
		if (this.state.SearchCount > this.state.ItemsPerPage){
			let Rest = this.state.SearchCount % this.state.ReturnCount
			let LastPage = 0
			let FullPages = this.state.SearchCount - Rest
			if (Rest > 0){
				LastPage = 1
			}
			let TotalPages = (FullPages / this.state.ItemsPerPage) + LastPage

			// debugger

			for (let i = 1; i <= TotalPages; i++){
				if (this.state.PageNumber === i){
					StatusAdd = true
					Pages.push(<PaginationItem key={i} active><PaginationLink tag="span" >{i}</PaginationLink></PaginationItem>)
				} else {
					if ( i === 1 ) {
						StatusAdd = true
						Pages.push(<PaginationItem key={i} ><PaginationLink tag="span" onClick={this.onClick.bind(this, i)} >{i}</PaginationLink></PaginationItem>)
					
					} else if (i === TotalPages){
						StatusAdd = true
						Pages.push(<PaginationItem key={i} ><PaginationLink tag="span" onClick={this.onClick.bind(this, i)} >{i}</PaginationLink></PaginationItem>)
					
					} else if ( (i < this.state.PageNumber) && ( i > this.state.PageNumber - 3) ){
						Pages.push(<PaginationItem key={i} ><PaginationLink tag="span" onClick={this.onClick.bind(this, i)} >{i}</PaginationLink></PaginationItem>)
						StatusAdd = true
					
					} else if ( (i > this.state.PageNumber) && ( i < this.state.PageNumber + 3) ){
						Pages.push(<PaginationItem key={i} ><PaginationLink tag="span" onClick={this.onClick.bind(this, i)} >{i}</PaginationLink></PaginationItem>)
						StatusAdd = true
					
					} else {
						if (StatusAdd){
							Pages.push(<PaginationItem key={i} active disabled><PaginationLink tag="span"><i className="fa fa-eye-slash" aria-hidden="true"></i></PaginationLink></PaginationItem>)
						}
						StatusAdd = false
					}

					
				}
				
			}
		} else {
			Pages.push(<PaginationItem key={1} active disabled><PaginationLink tag="span">1</PaginationLink></PaginationItem>)
		}

		return (
			<Pagination className="float-right" aria-label="Page navigation example">
				<PaginationItem disabled>
					<PaginationLink  previous href="#" />
				</PaginationItem>
				{Pages}
				<PaginationItem>
					<PaginationLink next href="#" />
				</PaginationItem>
			</Pagination>
		);
	}
}