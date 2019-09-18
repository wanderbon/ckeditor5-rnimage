/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module image/imageupload/imageuploadui
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
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
			const view = new ButtonView( locale );

			view.set( {
					label: 'Insert image',
					icon: imageIcon,
					tooltip: true
			} );

			// Callback executed once the image is clicked.
			view.on( 'execute', () => {
					const imageUrl = prompt( 'Image URL' );

					editor.model.change( writer => {
							const imageElement = writer.createElement( 'image', {
									src: imageUrl
							} );

							// Insert the image in the current selection location.
							editor.model.insertContent( imageElement, editor.model.document.selection );
					} );
			} );

			return view;
		} );
	}
}
