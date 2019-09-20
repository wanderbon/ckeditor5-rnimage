import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

export default class RNImageUploadUI extends Plugin {	
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
				if(window.ReactNativeWebView) {
					window.ReactNativeWebView.postMessage(JSON.stringify({
						event: 'uploadImage'
					}));
				}
			} );

			return view;
		} );
	}
}
