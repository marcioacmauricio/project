import React from 'react'
import { ButtonGroup, Col, Form, Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Alert, FormGroup, Label, Container } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createMasterResource, readMasterResource, updateMasterResource } from 'reducers/MasterResource/Actions'
import MasterResourceModel from 'models/MasterResourceModel'
import Fields from 'fields/Fields'
import { MenuHeader, HeaderAdmin } from 'components/Headers'
class MasterResourceEdit extends React.Component {
	constructor() {
		super()
		this.ColumnsList = ['id', 'ordering', 'state', 'checked_out', 'checked_out_time', 'created_by', 'created_time', 'modified_by', 'title', 'description', 'modified_time']
		this.ColumnsFields = {}
		let ColumnData = {}
		let Item = {}
		this.ColumnFKPredesc = ''
		this.TableShemaPredesc = ''


		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
		this.onDismiss = this.onDismiss.bind(this)
		this.onChange = this.onChange.bind(this)
		
		
		for (let i = 0; i < this.ColumnsList.length; i++){
			let ColumnName = this.ColumnsList[i]
			ColumnData = MasterResourceModel.columns[ColumnName]
			let Field = Fields( ColumnData, this.onChange )
			Item[ColumnData.nickname] = Field.getDefault()
			this.ColumnsFields[ColumnName] = Field
		}			
		this.state = {
			Status: true,
			Errors: {},
			Item
		}
	}
	onDismiss() {
		this.setState({ ...this.state, Status: true });
	}	
	onSubmit(e) {

		let Values = {}
		for (let ColumnName in this.state.Item){
			let Field = this.ColumnsFields[ColumnName]
			Values[ColumnName] = Field.OutPut(this.state.Item[ColumnName])
		}
		if (this.props.match.params.id > 0){
			this.props.updateMasterResource(Values);
		} else {
			this.props.createMasterResource(Values);
		}
		e.preventDefault();	   
	}
	componentWillMount() {
		if (this.props.match.params.id > 0){
			let Posts = {
				Id: this.props.match.params.id
			}
			this.props.readMasterResource( Posts );
		} else {
			if (this.ColumnFKPredesc !== ""){
				let newState = { ...this.state }
				newState.Item[this.ColumnFKPredesc] = { value: this.props.match.params.IdPredesc} 
				this.setState( newState )
			}
		}		
	}	
	componentDidMount() {
	}
	componentWillReceiveProps(nextProps) {
		if (( this.props.match.params.EntityPredesc !== "" ) && ( this.props.match.params.EntityPredesc !== undefined ) && ( this.props.match.params.EntityPredesc !== null ) && (nextProps.Payload.Item !== null)){
			if (nextProps.Payload.Item.id > 0){
				this.props.history.push(`/Admin/MasterResource/EditItem/${nextProps.Payload.Item.id}`)
				return
			}			
		}
		if (typeof nextProps.Payload === 'object'){
			let NewItem = {}
			for (let ColumnName in nextProps.Payload.Item){
				NewItem[ColumnName] = this.ColumnsFields[ColumnName].getDefault( nextProps.Payload.Item[ ColumnName ] )
			}
			this.setState({...this.state, ...nextProps.Payload, Item: {...this.state.Item, ...NewItem}});
		}
			
	}	
	onChange(ColumnName, Value) {
		this.setState({...this.state, Item: {...this.state.Item, [ColumnName]: Value }});
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
	renderField(ColumnName){
		let ColumnData = MasterResourceModel.columns[ColumnName]
		return (
			<FormGroup key={ColumnData.nickname} row>
				<Label for={ColumnData.nickname} sm={2}>{ColumnData.title}</Label>
				<Col sm={10}>
					{this.ColumnsFields[ColumnName].renderField(this.state.Item, ColumnName)}
				</Col>
			</FormGroup>
		)
	}	
	render() {
		let ItemLabel = ""
		let ItemValue = ''
		return (
			<>   
				<HeaderAdmin />				
				<Container className="mt--7" fluid>		
					<div className="col">
						<Card className="shadow">
							<CardHeader className="border-0">
								<MenuHeader Entity="MasterResource" ItemValue={ItemValue} ItemLabel={ItemLabel} View="List" />
								<ButtonGroup>
								    <Button  onClick={this.onSubmit.bind(this)} outline color="success"><i className="fa fa-save" aria-hidden="true"></i> Salvar</Button>
								    <Link className="btn btn-outline-info" to="/Admin/MasterResource/ListItems"><i className="fa fa-times" aria-hidden="true"></i> Fechar</Link>
								</ButtonGroup>
							</CardHeader>
							<CardBody>
								<CardTitle>Adicionar</CardTitle>
								<CardText tag="div">
									{this.renderAlert()}
									<Form>
										{this.renderField('title')}
										{this.renderField('description')}
									</Form>
								</CardText>
							</CardBody>
							<CardFooter>
								<ButtonGroup>
									<Button onClick={this.onSubmit.bind(this)} outline color="success"><i className="fa fa-save" aria-hidden="true"></i> Salvar</Button>
						        	<Link className="btn btn-outline-info" to="/Admin/MasterResource/ListItems"><i className="fa fa-times" aria-hidden="true"></i> Fechar</Link>

								</ButtonGroup>
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
		Payload: state.MasterResourceReducer.item
	}
	
}
export default connect(mapStateToProps, {readMasterResource, createMasterResource, updateMasterResource})(MasterResourceEdit);