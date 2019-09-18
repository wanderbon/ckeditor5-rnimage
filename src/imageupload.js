/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module image/imageupload
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import RNImageUploadUI from './imageupload/imageuploadui';
import RNImageUploadProgress from './imageupload/imageuploadprogress';
import RNImageUploadEditing from './imageupload/imageuploadediting';

/**
 * The image upload plugin.
 *
 * For a detailed overview, check the {@glink features/image-upload/image-upload image upload feature} documentation.
 *
 * This plugin does not do anything directly, but it loads a set of specific plugins to enable image uploading:
 *
 * * {@link module:image/imageupload/imageuploadediting~ImageUploadEditing},
 * * {@link module:image/imageupload/imageuploadui~ImageUploadUI},
 * * {@link module:image/imageupload/imageuploadprogress~ImageUploadProgress}.
 *
 * @extends module:core/plugin~Plugin
 */
export default class RNImageUpload extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'RNImageUpload';
	}

	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ RNImageUploadUI, RNImageUploadEditing, RNImageUploadProgress ];
	}
}
