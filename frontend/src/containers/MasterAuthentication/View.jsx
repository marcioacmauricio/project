import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText, Alert, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import { readMasterAuthentication } from 'reducers/MasterAuthentication/Actions'
import { connect } from 'react-redux'
import MasterAuthenticationModel from 'models/MasterAuthenticationModel'
import Fields from 'fields/Fields'
import { MenuHeader, HeaderAdmin } from 'components/Headers'


class MasterAuthenticationView extends React.Component {
	constructor() {
		super();
		this.ColumnsList = ['id', 'ordering', 'state', 'checked_out', 'checked_out_time', 'created_by', 'created_time', 'modified_by', 'modified_time', 'id_user', 'uuid', 'authenticated_at', 'update_at', 'expiration_at', 'status_logged', 'login_data', 'host', 'connection', 'content_length', 'origin', 'user_agent', 'content_type', 'accept', 'referer', 'accept_encoding', 'accept_language', 'remote_ip', 'bearer', 'renewed']
		this.ColumnsFields = {}
		let ColumnData = {}
		let Item = {}
		this.ColumnFKPredesc = 'id_user'
		this.TableShemaPredesc = 'MasterUser'		
		for (let i = 0; i < this.ColumnsList.length; i++){
			let ColumnName = this.ColumnsList[i]
			ColumnData = MasterAuthenticationModel.columns[ColumnName]
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
			this.props.readMasterAuthentication(Posts);
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
			let ColumnData = MasterAuthenticationModel.columns[ColumnName]
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
								<MenuHeader getItem={this.getItem.bind(this)} Entity="MasterAuthentication" ItemValue={ this.state.Item.id } ItemLabel={ this.state.Item.id } View="View" />	    				
							</CardHeader>
							<CardBody>
								<CardTitle><h2>Authentication</h2></CardTitle>
								<CardText tag="div" >{this.renderColumns()}</CardText>
							</CardBody>
							<CardFooter>
								<Button outline color="success" className="float-right" ><Link to={`/Admin/MasterAuthentication/ListItems/MasterUser/${ItemValue}`}>Lista</Link></Button>							    
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
		Payload: state.MasterAuthenticationReducer.item
	}
	
}
export default connect(mapStateToProps, {readMasterAuthentication})(MasterAuthenticationView);