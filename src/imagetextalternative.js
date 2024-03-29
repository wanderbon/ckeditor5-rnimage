/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module image/imagetextalternative
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import RNImageTextAlternativeEditing from './imagetextalternative/imagetextalternativeediting';
import RNImageTextAlternativeUI from './imagetextalternative/imagetextalternativeui';

/**
 * The image text alternative plugin.
 *
 * For a detailed overview, check the {@glink features/image#image-styles image styles} documentation.
 *
 * This is a "glue" plugin which loads the
 *  {@link module:image/imagetextalternative/imagetextalternativeediting~ImageTextAlternativeEditing}
 * and {@link module:image/imagetextalternative/imagetextalternativeui~ImageTextAlternativeUI} plugins.
 *
 * @extends module:core/plugin~Plugin
 */
export default class RNImageTextAlternative extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ RNImageTextAlternativeEditing, RNImageTextAlternativeUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'RNImageTextAlternative';
	}
}
