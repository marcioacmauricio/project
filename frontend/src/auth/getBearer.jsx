import { Url } from 'reducers/getUrl'

export default async function getBearer(){
	let Bearer = ""
	let ObjectCredentials = {}
	let StringCredentials = await localStorage.getItem('AuthenticatedUser')
	if (typeof StringCredentials === 'string'){
		try {
			ObjectCredentials = await JSON.parse(StringCredentials)
			if ((ObjectCredentials.LocalTime + ObjectCredentials.ExpiresIn) > parseInt((new Date().getTime() / 1000), 10)){
				if (typeof ObjectCredentials.Bearer === 'string'){
					Bearer = ObjectCredentials.Bearer
				}
			} else {
				let OptionsData = {
					"Method": "refreshToken"
				} 
				// console.log('second bearer', ObjectCredentials.RefreshToken)
				const result = await fetch(
					Url + '/Register', 
					{ 
						method : 'POST',
						headers : {
							'content-type': 'Application/json',
							'Authorization': 'Bearer ' + ObjectCredentials.RefreshToken
						},
						body: JSON.stringify(OptionsData)
					}
				)
				const PayloadOptions = await result.json()
				if (PayloadOptions.Status){
					let Item = PayloadOptions.Item
					Item.LocalTime = parseInt((new Date().getTime() / 1000), 10)
					let UserItemString = await JSON.stringify(Item)
					await localStorage.setItem('AuthenticatedUser', UserItemString )
					Bearer = PayloadOptions.Item.Bearer
				}				
			}
		} catch (e){
			console.log(e)
		}
	}
	return Bearer
}
