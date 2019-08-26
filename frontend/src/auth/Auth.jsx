import FormLogin from "views/register/FormLogin"

export default class Auth {
	constructor() {
		this.Status = false
		this.Item = {}
		this.setUser = this.setUser.bind(this)
		this.Logout = this.Logout.bind(this)
		this.reload()
	}

	setUser = async (UserData) => {
		if (UserData.Status){
			this.Status = true
			this.Item = await UserData.Item
			this.Item.LocalTime = parseInt((new Date().getTime() / 1000), 10)
			let UserItemString = await JSON.stringify(this.Item)
			await localStorage.setItem('AuthenticatedUser', UserItemString )
			return true
		} else {
			this.Status = false
			this.Item = {}
			return false
		}
	}
	reload(){
		let StringCredentials = localStorage.getItem('AuthenticatedUser')
		if (typeof StringCredentials === 'string'){
			let ObjectCredentials = {}
			try {
				ObjectCredentials = JSON.parse(StringCredentials)
			} catch (e) {
				console.log(e)
			}
			if ((ObjectCredentials.LocalTime + ObjectCredentials.ExpiresIn) > parseInt((new Date().getTime() / 1000), 10)){
				this.Status = true
				this.Item = ObjectCredentials
			} else {
				this.Status = false
				this.Item = {}
			}
		} else {
			this.Status = false
			this.Item = {}			
		}
	}
	isLoged(){
		// debugger
		return this.Status
	}
	getUser() {
		let User = {}
		if (this.Item.User){
			User = this.Item.User
		}
		return User
	}
	async Logout(){
		await localStorage.setItem('AuthenticatedUser', '{}')
		await this.reload()
	}
	authorizeComponent( Component ){
		// debugger
		if ( this.isLoged() ){
			return Component
		} else {
			return FormLogin
		}		
	}
}