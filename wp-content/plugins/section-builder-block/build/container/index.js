/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/container/edit.js":
/*!*******************************!*\
  !*** ./src/container/edit.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/container/editor.scss");
/* harmony import */ var _vendor_components_responsiveDevices_responsivedevices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../vendor/components/responsiveDevices/responsivedevices */ "./vendor/components/responsiveDevices/responsivedevices.js");



/* eslint-disable no-nested-ternary */

/* eslint-disable @wordpress/no-unsafe-wp-apis */


 // editor style


const {
  Fragment
} = wp.element; // custom component


function Edit(_ref) {
  let {
    attributes,
    setAttributes,
    clientId
  } = _ref;
  const {
    id,
    contentWidth,
    unit,
    paddingDevice,
    deskPadding,
    tabPadding,
    mobPadding,
    marginDevice,
    deskMargin,
    tabMargin,
    mobMargin,
    bgType,
    bgColor,
    bgGradient,
    bgImage,
    bgImagePosition,
    bgImageRepeat,
    bgImageSize,
    bgImageParallax,
    bgImageOverlay,
    overlayColor,
    overlayPopup,
    overlayOpacity,
    bgVideo,
    colorPopup
  } = attributes;
  let containerBg = '';

  if (bgType !== 'none' && bgType === 'image') {
    containerBg = `url(${bgImage})`;
  } else if (bgType !== 'none' && bgType === 'gradient') {
    containerBg = bgGradient;
  } else {
    containerBg = 'none';
  } // set unique id


  setAttributes({
    id: clientId.slice(0, 8)
  }); // // overlay color popup close

  document.addEventListener('click', function (event) {
    if (colorPopup && !event.target.closest('.gut__color_point') && !event.target.closest('.components-color-picker')) {
      setAttributes({
        colorPopup: false
      });
    }
  });
  document.addEventListener('click', function (event) {
    if (overlayPopup && !event.target.closest('.gut__color_point') && !event.target.closest('.components-color-picker')) {
      setAttributes({
        overlayPopup: false
      });
    }
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Content Width', 'section-builder-block'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gut__flex_panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "gut__panel_label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Content Width', 'section-builder-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gut__units_box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    onClick: () => setAttributes({
      unit: 'px'
    }),
    className: unit === 'px' ? 'gut__unit_active' : ''
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('PX', 'section-builder-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    onClick: () => setAttributes({
      unit: '%'
    }),
    className: unit === '%' ? 'gut__unit_active' : ''
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('%', 'section-builder-block')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    value: contentWidth,
    onChange: width => setAttributes({
      contentWidth: width
    }),
    min: 1,
    max: unit === 'px' ? 2000 : 100,
    help: `Content Width in ${unit}`
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Container Padding', 'section-builder-block'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_vendor_components_responsiveDevices_responsivedevices__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Container Padding', 'section-builder-block'),
    value: paddingDevice,
    onChange: value => setAttributes({
      paddingDevice: value
    })
  }), paddingDevice === 'desktop' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Padding on Desktop', 'section-builder-block'),
    values: deskPadding,
    onChange: nextValues => setAttributes({
      deskPadding: nextValues
    }),
    units: []
  }), paddingDevice === 'tablet' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Padding on Tablet', 'section-builder-block'),
    values: tabPadding,
    onChange: nextValues => setAttributes({
      tabPadding: nextValues
    }),
    units: []
  }), paddingDevice === 'smartphone' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Padding on Mobile', 'section-builder-block'),
    values: mobPadding,
    onChange: nextValues => setAttributes({
      mobPadding: nextValues
    }),
    units: []
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Container Margin', 'section-builder-block'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_vendor_components_responsiveDevices_responsivedevices__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Container Margin', 'section-builder-block'),
    value: marginDevice,
    onChange: value => setAttributes({
      marginDevice: value
    })
  }), marginDevice === 'desktop' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Margin on Desktop', 'section-builder-block'),
    values: deskMargin,
    onChange: nextValues => setAttributes({
      deskMargin: nextValues
    }),
    units: []
  }), marginDevice === 'tablet' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Margin on Tablet', 'section-builder-block'),
    values: tabMargin,
    onChange: nextValues => setAttributes({
      tabMargin: nextValues
    }),
    units: []
  }), marginDevice === 'smartphone' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Margin on Mobile', 'section-builder-block'),
    values: mobMargin,
    onChange: nextValues => setAttributes({
      mobMargin: nextValues
    }),
    units: []
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Background', 'section-builder-block'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gut__flex_panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "gut__panel_label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Background Color', 'section-builder-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gut__modal_panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    className: "gut__color_point gut__bg_color_point",
    onClick: () => setAttributes({
      colorPopup: !colorPopup
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorIndicator, {
    colorValue: bgColor
  })), colorPopup && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Popover, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
    color: bgColor,
    disableAlpha: false,
    onChangeComplete: value => setAttributes({
      bgColor: value.hex
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gut__flex_panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "gut__panel_label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Background Type', 'section-builder-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gut__panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSmall: true,
    isPressed: bgType === 'gradient',
    onClick: () => setAttributes({
      bgType: 'gradient'
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    width: "18",
    height: "15",
    viewBox: "0 0 18 15"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("g", {
    transform: "translate(.735 .263)",
    fill: "none"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    className: "svg-stroke",
    x: ".5",
    y: ".5",
    width: "16.072",
    height: "13.474",
    rx: "1"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    className: "svg-fill",
    d: "M.836.763l15.759 13.158h-15.759z"
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSmall: true,
    isPressed: bgType === 'image',
    onClick: () => setAttributes({
      bgType: 'image'
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    width: "18",
    height: "15",
    viewBox: "0 0 18 15"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M16.083.263h-14.446c-.798 0-1.445.648-1.445 1.447v11.579c0 .8.646 1.447 1.445 1.447h14.446c.798 0 1.445-.648 1.445-1.447v-11.579c0-.8-.646-1.447-1.445-1.447zm-4.334 2.171c2.389 0 2.386 3.618 0 3.618-2.385 0-2.39-3.618 0-3.618zm-9.39 10.855l4.334-5.789 2.965 3.961 2.091-2.514 3.611 4.342h-13.001z",
    className: "svg-fill",
    fillRule: "nonzero"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSmall: true,
    isPressed: bgType === 'video',
    onClick: () => setAttributes({
      bgType: 'video'
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    width: "18",
    height: "14",
    viewBox: "0 0 18 14"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M18 1.679v10.929c0 .281-.131.479-.392.593-.087.033-.171.05-.251.05-.181 0-.331-.064-.452-.191l-4.048-4.048v1.667c0 .797-.283 1.478-.849 2.044-.566.566-1.247.849-2.044.849h-7.071c-.797 0-1.478-.283-2.044-.849-.566-.566-.849-1.247-.849-2.044v-7.071c0-.797.283-1.478.849-2.044.566-.566 1.247-.849 2.044-.849h7.071c.797 0 1.478.283 2.044.849.566.566.849 1.247.849 2.044v1.657l4.048-4.038c.121-.127.271-.191.452-.191.08 0 .164.017.251.05.261.114.392.311.392.593z",
    className: "svg-fill",
    fillRule: "nonzero"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSmall: true,
    onClick: () => setAttributes({
      bgType: 'none'
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "dashicons dashicons-image-rotate"
  })))), bgType === 'gradient' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.GradientPicker, {
    value: bgGradient,
    onChange: currentGradient => setAttributes({
      bgGradient: currentGradient
    }),
    gradients: [{
      name: 'JShine',
      gradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
      slug: 'jshine'
    }, {
      name: 'Moonlit Asteroid',
      gradient: 'linear-gradient(135deg, rgb(15, 32, 39) 0%, rgb(32, 58, 67) 0%, rgb(0, 178, 254) 100%)',
      slug: 'moonlit-asteroid'
    }, {
      name: 'Rastafarie',
      gradient: 'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
      slug: 'rastafari'
    }, {
      name: 'Blulish',
      gradient: 'linear-gradient(90deg, rgb(18, 194, 233) 0%, rgb(93, 8, 136) 50%, rgb(156, 79, 79) 100%)',
      slug: 'blulish'
    }, {
      name: 'Redish',
      gradient: 'linear-gradient(90deg, rgb(30, 150, 0) 0%, rgb(255, 0, 70) 0%, rgb(255, 0, 0) 100%)',
      slug: 'redish'
    }, {
      name: 'Sky Blue',
      gradient: 'linear-gradient(90deg, rgb(21, 77, 91) 0%, rgb(250, 250, 250) 100%)',
      slug: 'sky-blue'
    }]
  })), bgType === 'image' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, bgImage ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gut__preview_container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gut__preview_image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FocalPointPicker, {
    url: bgImage,
    value: bgImagePosition,
    onChange: focalPoint => setAttributes({
      bgImagePosition: focalPoint
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gut__preview_actions"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    onClick: () => setAttributes({
      bgImage: ''
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "dashicons dashicons-trash"
  }))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      bgImage: media.url
    }),
    type: "image",
    value: bgImage,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
        className: "gut__custom_upload",
        onClick: open
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
        className: "dashicons dashicons-insert"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
        className: "gut__upload_label"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Add Image', 'section-builder-block')));
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gut__flex_panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "gut__panel_label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Enable Parallax', 'section-builder-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FormToggle, {
    checked: bgImageParallax,
    onChange: () => setAttributes({
      bgImageParallax: !bgImageParallax
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Background Size', 'section-builder-block'),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Default', 'section-builder-block'),
      value: 'initial'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Cover', 'section-builder-block'),
      value: 'cover'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Contain', 'section-builder-block'),
      value: 'contain'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Auto', 'section-builder-block'),
      value: 'auto'
    }],
    onChange: size => {
      setAttributes({
        bgImageSize: size
      });
    },
    value: bgImageSize
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Background Repeat', 'section-builder-block'),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('No Repeat', 'section-builder-block'),
      value: 'no-repeat'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Repeat', 'section-builder-block'),
      value: 'repeat'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Repeat X', 'section-builder-block'),
      value: 'repeat-x'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Repeat Y', 'section-builder-block'),
      value: 'repeat-y'
    }],
    onChange: value => {
      setAttributes({
        bgImageRepeat: value
      });
    },
    value: bgImageRepeat
  })), bgType === 'video' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, bgVideo ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gut__flex_panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "gut__panel_label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Video URL', 'section-builder-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    className: "gut__remove_icon",
    onClick: () => setAttributes({
      bgVideo: null
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "dashicons dashicons-remove"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    readonly: true,
    value: bgVideo
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: video => setAttributes({
      bgVideo: video.url
    }),
    type: "video",
    value: bgVideo,
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
        className: "gut__custom_upload",
        onClick: open
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
        className: "dashicons dashicons-insert"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
        className: "gut__upload_label"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Add Video', 'section-builder-block')));
    }
  }))), (bgType === 'video' || bgType === 'image') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Background Overlay', 'section-builder-block'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gut__flex_panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "gut__panel_label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Enable Overlay', 'section-builder-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FormToggle, {
    checked: bgImageOverlay,
    onChange: () => setAttributes({
      bgImageOverlay: !bgImageOverlay
    })
  })), bgImageOverlay && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gut__flex_panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "gut__panel_label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Overlay Color', 'section-builder-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gut__modal_panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    className: "gut__color_point gut__overlay_point",
    onClick: () => setAttributes({
      overlayPopup: !overlayPopup
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorIndicator, {
    colorValue: overlayColor
  })), overlayPopup && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Popover, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
    color: overlayColor,
    disableAlpha: true,
    onChangeComplete: value => setAttributes({
      overlayColor: value.hex
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Overlay Opacity', 'section-builder-block'),
    value: overlayOpacity,
    onChange: value => setAttributes({
      overlayOpacity: value
    }),
    min: 0.1,
    max: 1,
    step: 0.01
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), {
    style: {
      backgroundColor: bgColor,
      backgroundImage: containerBg,
      backgroundSize: bgType === 'image' && bgImage ? bgImageSize : '',
      backgroundPosition: bgType === 'image' && bgImage ? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%` : '',
      backgroundRepeat: bgType === 'image' && bgImage ? bgImageRepeat : '',
      backgroundAttachment: bgType === 'image' && bgImage && bgImageParallax ? 'fixed' : 'scroll',
      padding: `${deskPadding.top} ${deskPadding.right} ${deskPadding.bottom} ${deskPadding.left}`,
      margin: `${deskMargin.top} ${deskMargin.right} ${deskMargin.bottom} ${deskMargin.left}`
    }
  }), bgType !== 'none' && bgType === 'video' && bgVideo && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    id: "sbb__video"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
    src: bgVideo,
    type: "video/mp4"
  })), (bgType === 'image' || bgType === 'video') && bgType !== 'none' && bgImageOverlay && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "scbb__bg_overlay",
    style: {
      backgroundColor: bgImageOverlay ? overlayColor : '',
      opacity: bgImageOverlay ? overlayOpacity : ''
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "scbb__container",
    style: {
      maxWidth: `${contentWidth}${unit}`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    allowedBlocks: true,
    renderAppender: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.ButtonBlockAppender, null)
  }))));
}

/***/ }),

/***/ "./src/container/index.js":
/*!********************************!*\
  !*** ./src/container/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/container/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/container/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/container/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/container/style.scss");



/**
 * Internal dependencies
 */




/**
 * Block Registration
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M4 2a2 2 0 00-2 2"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
      x1: "8",
      y1: "2",
      x2: "10",
      y2: "2"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
      x1: "14",
      y1: "2",
      x2: "16",
      y2: "2"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M4 22a2 2 0 01-2-2"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
      x1: "22",
      y1: "8",
      x2: "22",
      y2: "10"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
      x1: "22",
      y1: "14",
      x2: "22",
      y2: "16"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M22 20a2 2 0 01-2 2"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
      x1: "14",
      y1: "22",
      x2: "16",
      y2: "22"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
      x1: "8",
      y1: "22",
      x2: "10",
      y2: "22"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M20 2a2 2 0 012 2"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
      x1: "2",
      y1: "14",
      x2: "2",
      y2: "16"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
      x1: "2",
      y1: "8",
      x2: "2",
      y2: "10"
    })),
    foreground: '#fff',
    background: '#0073aa'
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/container/save.js":
/*!*******************************!*\
  !*** ./src/container/save.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



/* eslint-disable no-nested-ternary */
// import { __ } from '@wordpress/i18n';

function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    id,
    contentWidth,
    unit,
    bgType,
    bgColor,
    bgGradient,
    bgImage,
    bgImagePosition,
    bgImageRepeat,
    bgImageSize,
    bgImageParallax,
    bgImageOverlay,
    overlayColor,
    overlayOpacity,
    bgVideo
  } = attributes; // container Background

  let containerBg = '';

  if (bgType !== 'none' && bgType === 'image') {
    containerBg = `url(${bgImage})`;
  } else if (bgType !== 'none' && bgType === 'gradient') {
    containerBg = bgGradient;
  } else {
    containerBg = 'none';
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), {
    style: {
      backgroundColor: bgColor,
      backgroundImage: containerBg,
      backgroundSize: bgType === 'image' && bgImage ? bgImageSize : '',
      backgroundPosition: bgType === 'image' && bgImage ? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%` : '',
      backgroundRepeat: bgType === 'image' && bgImage ? bgImageRepeat : '',
      backgroundAttachment: bgType === 'image' && bgImage && bgImageParallax ? 'fixed' : 'scroll'
    },
    id: `scbb__id_${id}`
  }), bgType !== 'none' && bgType === 'video' && bgVideo && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    id: "sbb__video"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
    src: bgVideo,
    type: "video/mp4"
  })), (bgType === 'image' || bgType === 'video') && bgType !== 'none' && bgImageOverlay && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "scbb__bg_overlay",
    style: {
      backgroundColor: bgImageOverlay ? overlayColor : '',
      opacity: bgImageOverlay ? overlayOpacity : ''
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "scbb__container",
    style: {
      maxWidth: `${contentWidth}${unit}`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)));
}

/***/ }),

/***/ "./vendor/components/responsiveDevices/responsivedevices.js":
/*!******************************************************************!*\
  !*** ./vendor/components/responsiveDevices/responsivedevices.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const GutResponsiveDevices = _ref => {
  let {
    label,
    value,
    onChange
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gut__devices gut__margin"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gut__label"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gut__btns"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => onChange('desktop'),
    isSmall: true,
    isPressed: value === 'desktop'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicons dashicons-desktop"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => onChange('tablet'),
    isSmall: true,
    isPressed: value === 'tablet'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicons dashicons-tablet"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => onChange('smartphone'),
    isSmall: true,
    isPressed: value === 'smartphone'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicons dashicons-smartphone"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (GutResponsiveDevices);

/***/ }),

/***/ "./src/container/editor.scss":
/*!***********************************!*\
  !*** ./src/container/editor.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/container/style.scss":
/*!**********************************!*\
  !*** ./src/container/style.scss ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/container/block.json":
/*!**********************************!*\
  !*** ./src/container/block.json ***!
  \**********************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"scbb/container","version":"0.1.0","title":"Container","category":"design","description":"Build a Reponsive Section","supports":{"html":false,"anchor":true},"keywords":["container","section","row","column","responsive"],"attributes":{"id":{"type":"string"},"contentWidth":{"type":"number","default":1140},"unit":{"type":"string","default":"px"},"paddingDevice":{"type":"string","default":"desktop"},"deskPadding":{"type":"object","default":{"top":"100px","left":"15px","right":"15px","bottom":"100px"}},"tabPadding":{"type":"object","default":{"top":"70px","left":"15px","right":"15px","bottom":"70px"}},"mobPadding":{"type":"object","default":{"top":"50px","left":"10px","right":"10px","bottom":"50px"}},"marginDevice":{"type":"string","default":"desktop"},"deskMargin":{"type":"object","default":{"top":"0px","left":"0px","right":"0px","bottom":"0px"}},"tabMargin":{"type":"object","default":{"top":"0px","left":"0px","right":"0px","bottom":"0px"}},"mobMargin":{"type":"object","default":{"top":"0px","left":"0px","right":"0px","bottom":"0px"}},"bgType":{"type":"string"},"colorPopup":{"type":"boolean","default":false},"bgColor":{"type":"string","default":"#FE7E6D"},"bgGradient":{"type":"string","default":"linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)"},"bgImage":{"type":"string"},"bgImagePosition":{"type":"object","default":{"x":0.5,"y":0.5}},"bgImageParallax":{"type":"boolean","default":false},"bgImageSize":{"type":"string","default":"default"},"bgImageRepeat":{"type":"string","default":"no-repeat"},"bgImageOverlay":{"type":"boolean","default":false},"overlayColor":{"type":"string","default":"#000000"},"overlayPopup":{"type":"boolean","default":false},"overlayOpacity":{"type":"number","default":0.6},"bgVideo":{"type":"string"}},"textdomain":"section-builder-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"container/index": 0,
/******/ 			"container/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkboilerplate"] = self["webpackChunkboilerplate"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["container/style-index"], function() { return __webpack_require__("./src/container/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map