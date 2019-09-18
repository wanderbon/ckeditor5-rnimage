/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module image/imageupload/imageuploadui
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import FileDialogButtonView from '@ckeditor/ckeditor5-upload/src/ui/filedialogbuttonview';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';
import { isImageType } from './utils';

/**
 * The image upload button plugin.
 *
 * For a detailed overview, check the {@glink features/image-upload/image-upload Image upload feature} documentation.
 *
 * Adds the `'imageUpload'` button to the {@link module:ui/componentfactory~ComponentFactory UI component factory}.
 *
 * @extends module:core/plugin~Plugin
 */
export default class RNImageUploadUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const t = editor.t;

		// Setup `imageUpload` button.
		editor.ui.componentFactory.add( 'rnimageUpload', locale => {
			const view = new FileDialogButtonView( locale );
			const command = editor.commands.get( 'rnimageUpload' );

			view.set( {
				acceptedType: 'image/*',
				allowMultipleFiles: true
			} );

			view.buttonView.set( {
				label: t( 'Insert image' ),
				icon: imageIcon,
				tooltip: true
			} );

			view.buttonView.bind( 'isEnabled' ).to( command );

			view.on( 'done', ( evt, files ) => {
				const imagesToUpload = Array.from( files ).filter( isImageType );

				if ( imagesToUpload.length ) {
					editor.execute( 'rnimageUpload', { file: imagesToUpload } );
				}
			} );

			return view;
		} );
	}
}
