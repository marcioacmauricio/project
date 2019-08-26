import React from 'react';
import ImageUploader from 'react-images-upload';
 
class ImageUpload extends React.Component {
 
	constructor(props) {
		super(props);
		 this.state = { pictures: [] };
		 this.onDrop = this.onDrop.bind(this);
	}
 
	onDrop(picture) {
		debugger
		this.setState({
			pictures: this.state.pictures.concat(picture),
		});
	}
 
	render() {
		return (
			<ImageUploader
				withIcon={true}
				buttonText='Selecionar Imagem'
				onChange={this.onDrop}
				imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif']}
				maxFileSize={5242880}
			/>
		);
	}
}
export default ImageUpload;