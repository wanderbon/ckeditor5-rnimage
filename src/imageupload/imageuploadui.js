import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

export default class RNImageUploadUI extends Plugin {
	componentDidMount() {
		this.messageListener = document.addEventListener('message', this.addImageToContent);	
	}

	componentWillUnmount() {
		document.removeEventListener(this.messageListener);
	}
	
	addImageToContent() {
		alert('message');
	}
	
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'rnimageUpload', locale => {
			const view = new ButtonView( locale );

			view.set( {
					label: 'Insert image',
					icon: imageIcon,
					tooltip: true
			} );

			view.on( 'execute', () => {
					window.ReactNativeWebView.postMessage(JSON.stringify({
						event: 'uploadImage'
					}));

					// editor.model.change( writer => {
					// 		const imageElement = writer.createElement( 'image', {
					// 				src: imageUrl
					// 		} );

					// 		editor.model.insertContent( imageElement, editor.model.document.selection );
					// } );
			} );

			return view;
		} );
	}
}
