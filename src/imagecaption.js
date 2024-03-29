/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module image/imagecaption
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import RNImageCaptionEditing from './imagecaption/imagecaptionediting';

import '../theme/imagecaption.css';

/**
 * The image caption plugin.
 *
 * For a detailed overview, check the {@glink features/image#image-captions image caption} documentation.
 *
 * @extends module:core/plugin~Plugin
 */
export default class RNImageCaption extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ RNImageCaptionEditing ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'RNImageCaption';
	}
}
