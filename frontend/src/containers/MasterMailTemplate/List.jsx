import React from 'react'
import { InputGroup, Input,	InputGroupAddon, Button, Table, Row, Col, ButtonGroup, Alert, Container, Card, CardHeader, CardBody, CardFooter, Form, FormGroup, Label } from 'reactstrap'
import { fetchMasterMailTemplate, deleteMasterMailTemplate } from '../../reducers/MasterMailTemplate/Actions'
import { connect } from 'react-redux'
import MasterMailTemplateModel from 'models/MasterMailTemplateModel'
import { MenuPagination } from 'components/MenuPagination'
import { ItemsPerPage } from 'components/ItemsPerPage'
import Resume from 'components/Resume'
import { Link } from 'react-router-dom'
import Fields from 'fields/Fields'
import { MenuHeader, HeaderAdmin } from 'components/Headers'

class MasterMailTemplateList extends React.Component {
	constructor() {
		super();
		this.state = {
		    Search: "",
			Filters: {
				Show: true
			},
			Columns: {},
			Status: true,
			Errors: {},
			ItemsPerPage: 10,
			PageNumber: 1,
			ReturnCount: 0,
			SearchCount: 0,
			Items: {}
		}
		this.ColumnsList = ['id', 'title']
		this.onChangeFilter = this.onChangeFilter.bind(this)
		this.ColumnsFields = {}
		this.onDismiss = this.onDismiss.bind(this)
		this.changeSearch = this.changeSearch.bind(this)
	}
	onDismiss() {
		this.setState({ ...this.state, Status: true });
	}
	onChangeFilter(ColName, Value) {
		let DataFilter = this.getDataFilter(ColName, Value)
		this.fetchItems(DataFilter)
	}	
	getDataFilter(ColName = undefined, Value = undefined){
		let UserId = this.props.auth.getUser()
		let StrDataUser = localStorage.getItem(UserId)
		let DataUser = {}
		if (StrDataUser !== null){
			DataUser = JSON.parse(StrDataUser)
		}
		let AllFilters = {}
		if (DataUser.Filters !== undefined){
			AllFilters = DataUser.Filters
		}
		let MasterMailTemplate = {}
		if (AllFilters.MasterMailTemplate !== undefined){
			MasterMailTemplate = AllFilters.MasterMailTemplate
		} 
		let Filters = {}
		for (let i = 0; i < this.ColumnsList.length; i++){
			let ColumnName = this.ColumnsList[i]
			let Param = {
				order: null,
				show: true
			}
			if (MasterMailTemplate[ColumnName] !== undefined){
				Param = MasterMailTemplate[ColumnName]
			} else {
				if (ColumnName === 'id') {
					Param.order = "ASC"
				}
			} 
			if (ColumnName === 'id_enterprise'){
				Param.value = this.props.match.params.IdPredesc
			} else if (ColumnName === ColName){
				Param.value = Value
			}

			Filters[ColumnName] = Param
		}
		AllFilters.MasterMailTemplate = Filters		
		DataUser.Filters = AllFilters
		localStorage.setItem( UserId, JSON.stringify(DataUser))	
		return Filters
	}
	setDataFilter(Filters){
		let UserId = this.props.auth.getUser()
		let StrDataUser = localStorage.getItem( UserId )
		let DataUser = {}
		if (StrDataUser !== null){
			DataUser = JSON.parse(StrDataUser)
		}
		let AllFilters = {}
		if (DataUser.Filters !== undefined){
			AllFilters = DataUser.Filters
		}
		AllFilters.MasterMailTemplate = Filters		
		DataUser.Filters = AllFilters
		localStorage.setItem( UserId , JSON.stringify(DataUser))

	}
	componentWillMount() {
		let DataFilter = this.getDataFilter()
		let Filters = {}
		for (let ColumnName in DataFilter){
			let Data = DataFilter[ColumnName]
			Filters[ColumnName] = Data
			let ColumnMetaData = MasterMailTemplateModel.columns[ColumnName]
			this.ColumnsFields[ColumnName] = Fields(ColumnMetaData, this.onChangeFilter )
			Filters[ColumnName] = Data
		}
		this.fetchItems(Filters)
	}
	fetchItems(DataFilter){
		let Filters = {}
		for (let ColumnName in DataFilter){
			let Data = DataFilter[ColumnName]
			if (Data.value !== undefined){
				if (Data.value === null){
					Data.value = undefined
				} else {
					Data.value = this.ColumnsFields[ColumnName].OutPutFilter(Data.value)
				}				
			}
			Filters[ColumnName] = Data			
		}
		let Post = {
			Filters,
			ItemsPerPage: this.state.ItemsPerPage,
			PageNumber: this.state.PageNumber
		}
		this.props.fetchMasterMailTemplate(Post);
	}
	updateOrderBy(ColumnName){
		let DataFilter = this.getDataFilter()
		if (DataFilter[ColumnName].order === null){
			DataFilter[ColumnName].order = 'ASC'
		} else if (DataFilter[ColumnName].order === 'ASC'){
			DataFilter[ColumnName].order = 'DESC'
		} else if (DataFilter[ColumnName].order === 'DESC'){
			DataFilter[ColumnName].order = null
		} else {
			DataFilter[ColumnName].order = null
		}
		this.setDataFilter(DataFilter)
		this.fetchItems(DataFilter)
	}
	ClearFilters(){
		let UserId = this.props.auth.getUser()
		localStorage.removeItem( UserId )
		let DataFilter = this.getDataFilter()
		this.fetchItems(DataFilter)
	}


	changeSearch(e){
		let UserId = this.props.auth.getUser()
		let StrDataUser = localStorage.getItem( UserId )
		let DataUser = {}
		if (StrDataUser !== null){
			DataUser = JSON.parse(StrDataUser)
		}

		let AllFilters = {}
		if (DataUser.Filters !== undefined){
			AllFilters = DataUser.Filters
		}
		console.log(AllFilters)
		debugger
	}
	
	renderTR(){
		let FilterTR = []
		let Trs = []
		let ColumnMetaData = {}
		let ColumnData = {}
		let DataFilter = this.getDataFilter()
		for (let ColumnName in DataFilter){
			ColumnData = DataFilter[ColumnName]
			ColumnMetaData = MasterMailTemplateModel.columns[ColumnName]
			let ClassIcon = ''
			if (DataFilter[ColumnName].order === null){
				ClassIcon = "fa fa-sort"
			} else if (DataFilter[ColumnName].order === 'ASC'){
				ClassIcon = "fa fa-caret-down"
			} else if (DataFilter[ColumnName].order === 'DESC') {
				ClassIcon = "fa fa-caret-up"
			} else {
				ClassIcon = "fa fa-sort"
			}
			if (ColumnData.show){
				Trs.push(
					<th  key={ColumnMetaData.nickname} >
						<ButtonGroup onClick={this.updateOrderBy.bind(this, ColumnName)}>
							<Button color="link">{this.ColumnsFields[ColumnMetaData.nickname].renderTR(ColumnMetaData, ColumnData)} </Button>
							<Button color="link">
								<i className={ClassIcon} aria-hidden="true"></i>
							</Button>
						</ButtonGroup>						

					</th>
				)
				if (['CreatedBy', 'ForeignKey', 'SelectList'].indexOf( ColumnMetaData.field_type ) >= 0) {
					FilterTR.push(<FormGroup key={ColumnMetaData.nickname + "-field"} ><Label>{ColumnMetaData.title}</Label> {this.ColumnsFields[ColumnMetaData.nickname].renderFilter(ColumnData.value)} </FormGroup>)
				}
			}
		}
		let Filters = null
		if (this.state.Filters.Show){
			Filters = <InputGroup>
				<Input onChange={ this.changeSearch } placeholder="Search" />
				<InputGroupAddon addonType="append">
					<Button outline onClick={this.ClearFilters.bind(this)} color="info"> <i className="fa fa-times" aria-hidden="true"></i> </Button>
					<Button outline color="info"> <i className="fa fa-search" aria-hidden="true"></i> </Button>
				</InputGroupAddon>
			</InputGroup>
		}
		return {
			Trs: (
				<thead className="thead-light">
					<tr>
						<th><ButtonGroup><Link className="btn btn-link" to={`/Admin/MasterMailTemplate/NewItem`}><i className="fa fa-plus" aria-hidden="true"></i></Link><Button onClick={this.ShowFilters.bind(this)} color="link"><i className="fa fa-search-plus" aria-hidden="true"></i></Button></ButtonGroup></th>					
						{Trs}
					</tr>
				</thead>
			),
			Filters: (
				<Form>	
					{Filters}
					{ FilterTR } 
				</Form>
			)
		}

		
	}
	renderRow(Item){
		let Cels = []
		let ColumnData = {}
		let DataFilter = this.getDataFilter()		
		Cels.push(<td key="button"><ButtonGroup><Link className="btn btn-outline-info" to={`/Admin/MasterMailTemplate/ShowItem/${Item.id}`} ><i className="fa fa-check" aria-hidden="true"></i></Link><Link className="btn btn-outline-info" to={`/Admin/MasterMailTemplate/EditItem/${Item.id}`}><i className="fa fa-edit" aria-hidden="true"></i></Link><Button outline color="danger"><i className="fa fa-trash" aria-hidden="true"></i></Button></ButtonGroup></td>)
		for (let Key in this.ColumnsList){
			let ColumnName = this.ColumnsList[Key]
			ColumnData = DataFilter[ColumnName]
			if (ColumnData.show){
				Cels.push(<td key={Key}>{ Resume( Item[ColumnName] ) }</td>)
			}
		}
		
		return (
			<tr key={Item.id}>
				{Cels}
			</tr>
		)
	}
	ShowFilters() {
		this.setState({...this.state, Filters: {...this.state.Filters, Show: !this.state.Filters.Show } })
	}
	renderBody(){
		let Rows = []
		for (let idItem in this.state.Items){
			Rows.push(this.renderRow(this.state.Items[idItem]))
		}

		return (
			<tbody>
				{Rows}
			</tbody>
		)
	}
	componentWillReceiveProps(nextProps) {
		if (typeof nextProps.Payloads === 'object'){
			this.setState({...this.state, ...nextProps.Payloads});
		}		
	}
	renderAlert(){
		let Visible = !this.state.Status
		let Messages = []
		for (let ColumnName in this.state.Errors){
			let ItemErro = this.state.Errors[ColumnName]
			Messages.push(<p key={ColumnName}>{ItemErro}</p>)
		}
		return (
			<Alert color="danger" isOpen={Visible} toggle={this.onDismiss}>
				{Messages}
			</Alert>
		)
	}
	updatePageNumber(PageNumber){
		let DataFilter = this.getDataFilter()
		this.setState({...this.state, PageNumber})
		let Post = {
			Filters: DataFilter,
			ItemsPerPage: this.state.ItemsPerPage,
			PageNumber: PageNumber
		}
		this.props.fetchMasterMailTemplate(Post);	
	}
	render() {
		let ItemLabel = ""
		let ItemValue = 0
		let renderTR = this.renderTR()
		return (
			<>
				<HeaderAdmin />	
				<Container className="mt--7" fluid>		
					<div className="col">
						<Card className="shadow">
							<CardHeader className="border-0">
								<MenuHeader Entity="MasterMailTemplate" ItemValue={ItemValue} ItemLabel={ItemLabel} View="List" />
							</CardHeader>		
							<CardBody>
								<Row>
									<Col xs="3">
										{ renderTR.Filters }
									</Col>
									<Col xs="9">
											{this.renderAlert()}
										<Table className="align-items-center table-flush">
											{ renderTR.Trs }
											{this.renderBody()}
										</Table>
									</Col>
								</Row>
							</CardBody>
							<CardFooter className="py-4">                				
								<Row>
									<Col xs="12">
										<ItemsPerPage Value={this.state.ItemsPerPage} />
										<MenuPagination updatePageNumber={this.updatePageNumber.bind(this)}  ItemsPerPage={this.state.ItemsPerPage} PageNumber={this.state.PageNumber} ReturnCount={this.state.ReturnCount} SearchCount={this.state.SearchCount} />
									</Col>
								</Row>
							</CardFooter>
						</Card>
					</div>	                				
				</Container>
			</>
		);
	}
}
const mapStateToProps = (state, props) => {
	return {
		Payload: state.MasterMailTemplateReducer.item,
		Payloads: state.MasterMailTemplateReducer.items,
		auth: state.Register.auth
	}
}
export default connect(mapStateToProps, {fetchMasterMailTemplate, deleteMasterMailTemplate})(MasterMailTemplateList);