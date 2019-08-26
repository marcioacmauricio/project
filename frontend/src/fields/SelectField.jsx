import React from 'react'
import { connect } from 'react-redux'
import { fetchOptions } from '../reducers/HelpersReducer/Actions'
import Entitys from '../components/Entitys'
import Select from 'react-select'



class SelectField extends React.Component {
	constructor() {
		super()
		this.state = {
			Completed: false,
			Value: { value: '', label: "Selecione" },
			Options: {}
		}		

	}
	onInputChange(Value){
		if (Value.length > 2){
			let Parameters = this.props.DataField.parameters
			let Post = {
				Method: "getOptions",
				ColumnName: this.props.DataField.nickname,
				TableSchema: Parameters.TableSchema,
				TableSchemaFK: Parameters.TableSchemaPredesc,
				ValuePredesc: 0,
				Term: Value
			}

			let EntityPredesc = Entitys[Parameters.TableSchemaPredesc]
			if (EntityPredesc.EntityPredesc !== ""){
				let Breadcrumbs = {}
				let BreadcrumbsString = localStorage.getItem('Breadcrumbs')
				if (BreadcrumbsString !== ""){
					Breadcrumbs = JSON.parse(BreadcrumbsString)
				}
				if (Object.values(Breadcrumbs).length > 0){
					Post['ValuePredesc'] = Breadcrumbs[EntityPredesc.EntityPredesc].Value
				}				
			}		
			this.props.fetchOptions(Post)
		}

	}
	componentWillReceiveProps(nextProps) {

		let newState = this.state
		if ((typeof nextProps.value === 'object') && (nextProps.value !== null)){
			newState = {...newState, Value: nextProps.value, Options: {...this.state.Options, [nextProps.value.value]: nextProps.value}}
			this.setState(newState)
		} else {
			newState = {...newState, Value: {value: null, label: "Selecione"}}
			this.setState(newState)
		}
		if (!Object.values(nextProps.Payload).length > 0){
			return
		}
		if ( !nextProps.Payload.ReturnCount > 0 ){
			return
		}

		if (
			(nextProps.Payload.params.Method === 'getOptions') && 
			(nextProps.Payload.params.TableSchema === this.props.DataField.parameters.TableSchema) &&
			(nextProps.Payload.params.ColumnName === this.props.DataField.nickname)
		){
			let Completed = this.state.Completed
			if((nextProps.Payload.ReturnCount === nextProps.Payload.SearchCount) && (nextProps.Payload.SearchCount > 0)){
				Completed = true
			}
			let Opts = { ...nextProps.Payload.Items, '': { value: '', label: "Selecione" } }
			newState = {...newState, Options: {...Opts, [this.state.Value.value]: this.state.Value}, Completed}		
			this.setState(newState)
		}		
	}
	onChange(Value) {
		this.props.ChangeState(this.props.DataField.nickname, Value)
	}
	onMenuOpen(){
		// debugger
		let Post = {}
		let Parameters = {}
		let EntityPredesc = {}
		let Breadcrumbs = {}
		let BreadcrumbsString = {}
		if (!this.state.Completed) {
			Parameters = this.props.DataField.parameters
			Post = {
				Method: "getOptions",
				ColumnName: this.props.DataField.nickname,
				TableSchema: Parameters.TableSchema,
				TableSchemaPredesc: Parameters.TableSchemaPredesc,
				CurrentEntity: "",
				CurrentValue: 0
			}
			EntityPredesc = Entitys[Parameters.TableSchema]
			
			// debugger
			if (EntityPredesc.EntityPredesc !== ""){
				BreadcrumbsString = localStorage.getItem('Breadcrumbs')
				if (BreadcrumbsString !== ""){
					Breadcrumbs = JSON.parse(BreadcrumbsString)
				}
				
				if (EntityPredesc.EntityPredesc !== undefined){
					if (EntityPredesc.EntityPredesc.length){
						Post.CurrentEntity = EntityPredesc.EntityPredesc
					}
				}

				if (Object.values(Breadcrumbs).length > 0){
					Post['CurrentValue'] = Breadcrumbs[EntityPredesc.EntityPredesc].Value
				}				
			}

			this.props.fetchOptions(Post)
		}
	}
	render() {
		return <Select onMenuOpen={this.onMenuOpen.bind(this)} onInputChange={this.onInputChange.bind(this)} isClearable onChange={this.onChange.bind(this)} options={Object.values(this.state.Options)} value={ this.state.Value } />
	}
}


const mapStateToProps = (state, props) => {
	return {
		Payload: state.HelpersReducer.items
	}	
}
export default connect(mapStateToProps, { fetchOptions })(SelectField);