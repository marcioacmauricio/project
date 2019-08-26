import React from 'react'
import { Row, Col, ButtonGroup, ButtonDropdown, DropdownToggle, DropdownMenu, Button } from 'reactstrap'
import Entitys from 'components/Entitys'
import { Link } from 'react-router-dom'

class MenuHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Breadcrumbs: {
			},
			Options: [],
			Current: ""
		}
	}
	async componentWillMount() {
		let Options = {}
		let EntityData = {}
		let BreadcrumbsString = ""
		let Breadcrumbs = {}
		let newBreadcrumb = {}
		let FirstItem = {}
		// debugger
		if (this.props.Entity === ""){		
			for (let EntityName in Entitys){
				EntityData = Entitys[EntityName]
				if (EntityData.EntityPredesc === ""){
					Options[EntityName] = {Label: EntityData.Title, Value: 0}
				}
			}
			FirstItem = {
				"Value": 0,
				"Label": "",
				"dropdownOpen": false,
				"EntityTitle": "",
				"Options": Options
			}           
			newBreadcrumb = {"Select": FirstItem}
			localStorage.setItem("Breadcrumbs", JSON.stringify(newBreadcrumb));
			// debugger
			this.setState({...this.state, Breadcrumbs: newBreadcrumb })             
		} else {
			BreadcrumbsString = await localStorage.getItem('Breadcrumbs')
			if (BreadcrumbsString !== ""){
				Breadcrumbs = JSON.parse(BreadcrumbsString)
				if (Breadcrumbs === null){
					Breadcrumbs = {}
				}
				this.setState({...this.state, Breadcrumbs })   
			}			
		}

	}
	async componentWillReceiveProps(nextProps) {
		let Breadcrumbs = {}
		let Item = {}
		let	Items = []		
		let ItemsReverse = []
		let newBreadcrumb = {}
		let BreadcrumbsString = await localStorage.getItem('Breadcrumbs')
		if (BreadcrumbsString !== ""){
			Breadcrumbs = JSON.parse(BreadcrumbsString)
		}
		let Options = {}
		let FirstItem ={}
		if (this.props.Entity === ""){
			return      
		}
		let EntityData = {}
		if (this.props.View === "List"){     
			// debugger                   
		    EntityData = Entitys[this.props.Entity]
		    if (EntityData.EntityPredesc === ""){
				Options = this.getOptions("", 0)
				FirstItem = {
					"Value": 0,
					"Label": EntityData.Title,
					"EntityName": this.props.Entity,
					"dropdownOpen": false,
					"EntityTitle": EntityData.Title,
					"Options": Options
				}
				newBreadcrumb = {[this.props.Entity]: FirstItem}
				localStorage.setItem("Breadcrumbs", JSON.stringify(newBreadcrumb));
				// debugger
				this.setState({...this.state, Breadcrumbs: newBreadcrumb })     
		    } else {
				EntityData = Entitys[this.props.Entity]
				FirstItem = {
					"Value": 0,
					"Label": EntityData.Title,
					"EntityName": this.props.Entity,
					"dropdownOpen": false,
					"EntityTitle": "",
					"Options": {}
				}
			Items.push(FirstItem)
			do {
			    FirstItem = Breadcrumbs[EntityData.EntityPredesc]
			    Items.push(FirstItem)
			    EntityData = Entitys[EntityData.EntityPredesc]
			} while (EntityData.EntityPredesc !== "")
			ItemsReverse = Items.reverse()
			Breadcrumbs = {}
			for (let i = 0; i < ItemsReverse.length; i++){
			    Item = ItemsReverse[i]
			    Breadcrumbs[Item.EntityName] = Item
			}       
			localStorage.setItem("Breadcrumbs", JSON.stringify(Breadcrumbs));
			
			// console.log(Breadcrumbs)
			// debugger
			this.setState({...this.state, Breadcrumbs })
		    }
		} else if (this.props.View === "View"){
		    Item = this.props.getItem()
		    EntityData = Entitys[this.props.Entity]
		    if (Item.title === undefined){
		    	Item.title = Item.id
		    }
		    FirstItem = {
				"Value": Item.id,
				"Label": Item.title,
				"EntityName": this.props.Entity,
				"dropdownOpen": false,
				"EntityTitle": EntityData.Title,
				"Options": this.getOptions(this.props.Entity, Item.id)
		    }
		    // debugger
		    if (EntityData.EntityPredesc === ""){
				newBreadcrumb = {[this.props.Entity]: FirstItem}
				localStorage.setItem("Breadcrumbs", JSON.stringify(newBreadcrumb));
				// debugger
				this.setState({...this.state, Breadcrumbs: newBreadcrumb })
		    } else {
				Items.push(FirstItem)
				do {
				    FirstItem = Breadcrumbs[EntityData.EntityPredesc]
				    Items.push(FirstItem)
				    EntityData =  Entitys[EntityData.EntityPredesc]
				} while(EntityData.EntityPredesc !== "")
				ItemsReverse = Items.reverse()
				Breadcrumbs = {}
				for (let i = 0; i < ItemsReverse.length; i++){
					// debugger
				    Item = ItemsReverse[i]
				    Breadcrumbs[Item.EntityName] = Item
				}       
				localStorage.setItem("Breadcrumbs", JSON.stringify(Breadcrumbs));
				// console.log(Breadcrumbs)
				// debugger
				this.setState({...this.state, Breadcrumbs })
		    }
		}
	}
	getOptions(EntityPredesc, Value){
	    let Options = {}
	    let EntityData = {}
	    for (let EntityName in Entitys){
		    EntityData = Entitys[EntityName]
		    if (EntityData.EntityPredesc === EntityPredesc){
			    Options[EntityName] = {Label: EntityData.Title, Value: Value}
		    }
	    } 
	    return Options  
	}
	renderEntitys(){
		if (this.state.Options.length === 0){
			return ""
		} 
		let Options = []
		for (let i in this.state.Options){
			let Option = this.state.Options[i]
			Options.push(<span key={i} ><Link className="btn btn-outline-info" to={`/Admin/${Option.EntityName}/ListItems`}>{Option.Title}</Link> </span>)
		}
		return (
			<Row>
				<Col xs="12">
					{Options}
				</Col>
			</Row>
		)
	}
	renderOptions(Options, Value, EntityPredesc){
		let Links = []
		for (let EntityName in Options){
			let Option = Options[EntityName]
			if (Value === 0){
				Links.push(<Link key={EntityName} className="dropdown-item" to={`/Admin/${EntityName}/ListItems`}>{Option.Label}</Link>)
			} else {
				Links.push(<Link key={EntityName} className="dropdown-item" to={`/Admin/${EntityName}/ListItems/${EntityPredesc}/${Value}`}>{Option.Label}</Link>)                
			}
		}
		return Links
	}
	toggle(EntityName){
		let EntityData = this.state.Breadcrumbs[EntityName]
		let newBreadcrumb = {}
		EntityData.dropdownOpen = !EntityData.dropdownOpen
		newBreadcrumb = {...this.state.Breadcrumbs, [EntityName]: EntityData}
		// debugger
		this.setState({...this.state, Breadcrumbs: newBreadcrumb})
	}
	renderMenu(EntityName, MenuData, EntityPredesc, ValuePredesc){
		let LinkList = ""
		let Menu = []
		if (EntityName === "Select"){
			LinkList = <Button disabled key={`_1-${EntityName}`} outline color="info">Selecione</Button>
		} else if (EntityPredesc === ""){
			LinkList = <Link key={`_1-${EntityName}`} className="btn btn-outline-info" to={`/Admin/${EntityName}/ListItems`}><i className="fa fa-list" aria-hidden="true"></i></Link>
		} else {
			LinkList = <Link key={`_1-${EntityName}`} className="btn btn-outline-info" to={`/Admin/${EntityName}/ListItems/${EntityPredesc}/${MenuData.Value}`}><i className="fa fa-list" aria-hidden="true"></i></Link>
		}   
		Menu.push(LinkList)		
		if (MenuData.Value > 0){
			Menu.push(<Link key={`_2-${EntityName}`} className="btn btn-outline-info" to={`/Admin/${EntityName}/ShowItem/${MenuData.Value}`} >{MenuData.Label}</Link>)
		} else if (EntityName !== "Select") {
			Menu.push( <Button disabled key={`_2-${EntityName}`} outline color="info">{MenuData.Label}</Button>)
		}

		if (Object.values(MenuData.Options).length > 0){
			Menu.push(
				<ButtonDropdown key={`_3-${EntityName}`} isOpen={this.state.Breadcrumbs[EntityName].dropdownOpen} toggle={this.toggle.bind(this, EntityName)}>
					<DropdownToggle outline color="info" caret>
					</DropdownToggle>
					<DropdownMenu>
						{this.renderOptions(MenuData.Options, MenuData.Value, EntityName)}
					</DropdownMenu>
				</ButtonDropdown>
			)   
		}   

		return Menu
	}
	renderMenus(){
		let Menus = []
		let Key = 0
		let EntityPredesc = ""
		let Size = 0
		// debugger
		if (this.state.Breadcrumbs){
			Size = Object.keys(this.state.Breadcrumbs).length
		}
		let Starting = Size - 2
		let MenuData = {}
		for (let i in this.state.Breadcrumbs){

			if (Key !== 0){
				Menus.push(<Button disabled key={Key} outline color="info"><i className="fa fa-angle-double-right" aria-hidden="true"></i></Button>)
			}
			Key++
			MenuData = this.state.Breadcrumbs[i]
			if (Key >= Starting){
				Menus.push(this.renderMenu(i, MenuData, EntityPredesc))
			}
			EntityPredesc = i
		}

		return <ButtonGroup>{Menus}</ButtonGroup>
	}
	render() {
		return (
			<div key={this.props.ItemValue}>
				<Row>
					<Col xs="12">
					{this.renderMenus()}
					</Col>
				</Row>
				<hr/>
				{this.renderEntitys()}
			</div>              
		)
	}
}

export default MenuHeader;