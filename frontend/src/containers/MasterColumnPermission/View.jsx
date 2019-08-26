import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText, Alert, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import { readMasterColumnPermission } from 'reducers/MasterColumnPermission/Actions'
import { connect } from 'react-redux'
import MasterColumnPermissionModel from 'models/MasterColumnPermissionModel'
import Fields from 'fields/Fields'
import { MenuHeader, HeaderAdmin } from 'components/Headers'


class MasterColumnPermissionView extends React.Component {
	constructor() {
		super();
		this.ColumnsList = ['id', 'id_model_table', 'ordering', 'state', 'checked_out', 'checked_out_time', 'created_by', 'created_time', 'column_name', 'modified_by', 'modified_time', 'id_table_permission', 'permission']
		this.ColumnsFields = {}
		let ColumnData = {}
		let Item = {}
		this.ColumnFKPredesc = 'id_model_table'
		this.TableShemaPredesc = 'MasterModelTable'		
		for (let i = 0; i < this.ColumnsList.length; i++){
			let ColumnName = this.ColumnsList[i]
			ColumnData = MasterColumnPermissionModel.columns[ColumnName]
			Item[ColumnData.nickname] = ColumnData.parameters.default
			this.ColumnsFields[ColumnName] = Fields(ColumnData, this.onChange)
		}			
		this.state = {
			Status: true,
			Errors: {},
			Item: {}
		}
		this.onDismiss = this.onDismiss.bind(this)
	}
	onDismiss() {
		this.setState({ ...this.state, Status: true });
	}
	componentWillMount() {
		if (this.props.match.params.id > 0){
			let Posts = {
				Id: this.props.match.params.id
			}
			this.props.readMasterColumnPermission(Posts);
		}		
	}
	componentWillReceiveProps(nextProps) {
		if (typeof nextProps.Payload === 'object'){
		    if (nextProps.Payload.Item !== null){
			    this.setState({...this.state, ...nextProps.Payload});
			}
		}
	}
	getItem(){
		return this.state.Item
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
	renderColumns(){
		let Rows = []
		for (let ColumnName in this.state.Item){
			let Value = this.state.Item[ColumnName]
			let Field = this.ColumnsFields[ColumnName]
			let ValueShow = Field.OutPutShow(Value)
			let ColumnData = MasterColumnPermissionModel.columns[ColumnName]
			Rows.push(<tr key={ColumnName}>
					<th scope="row">{ColumnData.title}</th>
					<td>{ValueShow}</td>
				</tr>
			)
		}
		return (
			<Table bordered>
				<tbody>
					{Rows}
				</tbody>
			</Table>
		)	
	}	
	render() {
		let ItemValue = ''
		if (typeof this.state.Item[this.ColumnFKPredesc] === 'object'){
			ItemValue = this.state.Item[this.ColumnFKPredesc].value
		}	
	
		return (
			<>
				<HeaderAdmin />	
				<Container className="mt--7" fluid>		
					<div className="col">
						<Card className="shadow">
							<CardHeader className="border-0">
								<MenuHeader getItem={this.getItem.bind(this)} Entity="MasterColumnPermission" ItemValue={ this.state.Item.id } ItemLabel={ this.state.Item.id } View="View" />	    				
							</CardHeader>
							<CardBody>
								<CardTitle><h2>Column permission</h2></CardTitle>
								<CardText tag="div" >{this.renderColumns()}</CardText>
							</CardBody>
							<CardFooter>
								<Button outline color="success" className="float-right" ><Link to={`/Admin/MasterColumnPermission/ListItems/MasterModelTable/${ItemValue}`}>Lista</Link></Button>							    
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
		Payload: state.MasterColumnPermissionReducer.item
	}
	
}
export default connect(mapStateToProps, {readMasterColumnPermission})(MasterColumnPermissionView);