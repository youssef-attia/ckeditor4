/**
 * @license
 * CKEditor - The text editor for Internet - https://ckeditor.com/
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 *
 * Licensed under the terms of any of the following licenses at your
 * choice:
 *
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    https://www.gnu.org/licenses/gpl.html
 *
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    https://www.gnu.org/licenses/lgpl.html
 *
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    https://www.mozilla.org/MPL/MPL-1.1.html
 *
 * You are not required to, but if you want to explicitly declare the
 * license you have chosen to be bound to when using, reproducing,
 * modifying and distributing this software, just include a text file
 * titled "legal.txt" in your version of this software, indicating your
 * license choice. In any case, your choice will not restrict any
 * recipient of your version of this software to use, reproduce, modify
 * and distribute this software under any of the above licenses.
 *
 * Sources of Intellectual Property Included in CKEditor
 * -----------------------------------------------------
 *
 * Where not otherwise indicated, all CKEditor content is authored by
 * CKSource engineers and consists of CKSource-owned intellectual
 * property. In some specific instances, CKEditor will incorporate work
 * done by developers outside of CKSource with their express permission.
 *
 * The following libraries are included in CKEditor under the MIT license:
 *
 * * CKSource Samples Framework (included in the samples) - Copyright (c) 2014-2023, CKSource Holding sp. z o.o.
 * * PicoModal (included in `samples/js/sf.js`) - Copyright (c) 2012 James Frasca.
 * * CodeMirror (included in the samples) - Copyright (C) 2014 by Marijn Haverbeke <marijnh@gmail.com> and others.
 * * ES6Promise - Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors.
 * * A polyfill for `CSS.escape` (adopted with modifications in `core/tools.js`), Mathias Bynens, v1.5.1, https://mths.be/cssescape.
 *
 * Parts of code taken from the following libraries are included in CKEditor under the MIT license:
 *
 * * jQuery (inspired the domReady function, ckeditor_base.js) - Copyright (c) 2011 John Resig, https://jquery.com/
 *
 * The following libraries are included in CKEditor under the SIL Open Font License, Version 1.1:
 *
 * * Font Awesome (included in the toolbar configurator) - Copyright (C) 2012 by Dave Gandy.
 *
 * The following libraries are included in CKEditor under the BSD-3 License:
 *
 * * highlight.js (included in the `codesnippet` plugin) - Copyright (c) 2006, Ivan Sagalaev.
 * * YUI Library (included in the `uicolor` plugin) - Copyright (c) 2009, Yahoo! Inc.
 *
 *
 * Trademarks
 * ----------
 *
 * CKEditor is a trademark of CKSource Holding sp. z o.o. All other brand
 * and product names are trademarks, registered trademarks or service
 * marks of their respective holders.
 *
 * ---
 *
 * SPDX-License-Identifier: MPL-1.1
 * SPDX-License-Identifier: MIT
 */

/**
 * @license
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license/
 */

/**
 * This file was added automatically by CKEditor builder.
 * You may re-use it at any time to build CKEditor again.
 *
 * If you would like to build CKEditor online again
 * (for example to upgrade), visit one the following links:
 *
 * (1) https://ckeditor.com/cke4/builder
 *     Visit online builder to build CKEditor from scratch.
 *
 * (2) https://ckeditor.com/cke4/builder/a8aa95dba9ee088b222578d71ba53988
 *     Visit online builder to build CKEditor, starting with the same setup as before.
 *
 * (3) https://ckeditor.com/cke4/builder/download/a8aa95dba9ee088b222578d71ba53988
 *     Straight download link to the latest version of CKEditor (Optimized) with the same setup as before.
 *
 * NOTE:
 *    This file is not used by CKEditor, you may remove it.
 *    Changing this file will not change your CKEditor configuration.
 */

var CKBUILDER_CONFIG = {
	skin: 'moono',
	preset: 'standard',
	ignore: [
		'.DS_Store',
		'.bender',
		'.editorconfig',
		'.gitattributes',
		'.gitignore',
		'.idea',
		'.jscsrc',
		'.jshintignore',
		'.jshintrc',
		'.mailmap',
		'.npm',
		'.nvmrc',
		'.travis.yml',
		'bender-err.log',
		'bender-out.log',
		'bender.ci.js',
		'bender.js',
		'dev',
		'gruntfile.js',
		'less',
		'node_modules',
		'package-lock.json',
		'package.json',
		'tests'
	],
	plugins : {
		'a11yhelp' : 1,
		'about' : 1,
		'autogrow' : 1,
		'basicstyles' : 1,
		'bidi' : 1,
		'blockquote' : 1,
		'clipboard' : 1,
		'codemirror' : 1,
		'colorbutton' : 1,
		'colordialog' : 1,
		'contextmenu' : 1,
		'dialogadvtab' : 1,
		'div' : 1,
		'elementspath' : 1,
		'enterkey' : 1,
		'entities' : 1,
		'filebrowser' : 1,
		'find' : 1,
		'flash' : 1,
		'floatingspace' : 1,
		'font' : 1,
		'format' : 1,
		'forms' : 1,
		'horizontalrule' : 1,
		'htmlwriter' : 1,
		'iframe' : 1,
		'image' : 1,
		'indentblock' : 1,
		'indentlist' : 1,
		'justify' : 1,
		'language' : 1,
		'link' : 1,
		'list' : 1,
		'liststyle' : 1,
		'magicline' : 1,
		'maximize' : 1,
		'newpage' : 1,
		'pagebreak' : 1,
		'pastefromgdocs' : 1,
		'pastefromword' : 1,
		'pastetext' : 1,
		'preview' : 1,
		'print' : 1,
		'removeformat' : 1,
		'resize' : 1,
		'save' : 1,
		'selectall' : 1,
		'sharedspace' : 1,
		'showborders' : 1,
		'sourcearea' : 1,
		'specialchar' : 1,
		'stylescombo' : 1,
		'tab' : 1,
		'table' : 1,
		'tableselection' : 1,
		'tabletools' : 1,
		'templates' : 1,
		'toolbar' : 1,
		'undo' : 1,
		'uploadimage' : 1,
		'wysiwygarea' : 1
	},
	languages : {
		'af' : 1,
		'ar' : 1,
		'az' : 1,
		'bg' : 1,
		'bn' : 1,
		'bs' : 1,
		'ca' : 1,
		'cs' : 1,
		'cy' : 1,
		'da' : 1,
		'de' : 1,
		'de-ch' : 1,
		'el' : 1,
		'en' : 1,
		'en-au' : 1,
		'en-ca' : 1,
		'en-gb' : 1,
		'eo' : 1,
		'es' : 1,
		'es-mx' : 1,
		'et' : 1,
		'eu' : 1,
		'fa' : 1,
		'fi' : 1,
		'fo' : 1,
		'fr' : 1,
		'fr-ca' : 1,
		'gl' : 1,
		'gu' : 1,
		'he' : 1,
		'hi' : 1,
		'hr' : 1,
		'hu' : 1,
		'id' : 1,
		'is' : 1,
		'it' : 1,
		'ja' : 1,
		'ka' : 1,
		'km' : 1,
		'ko' : 1,
		'ku' : 1,
		'lt' : 1,
		'lv' : 1,
		'mk' : 1,
		'mn' : 1,
		'ms' : 1,
		'nb' : 1,
		'nl' : 1,
		'no' : 1,
		'oc' : 1,
		'pl' : 1,
		'pt' : 1,
		'pt-br' : 1,
		'ro' : 1,
		'ru' : 1,
		'si' : 1,
		'sk' : 1,
		'sl' : 1,
		'sq' : 1,
		'sr' : 1,
		'sr-latn' : 1,
		'sv' : 1,
		'th' : 1,
		'tr' : 1,
		'tt' : 1,
		'ug' : 1,
		'uk' : 1,
		'vi' : 1,
		'zh' : 1,
		'zh-cn' : 1
	}
};