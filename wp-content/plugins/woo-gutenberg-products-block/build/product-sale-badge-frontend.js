(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[64],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n(103);var c=n(46);const r=()=>c.m>1},137:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return b}));var c=n(72),r=n(115),s=n(52),a=n(20);const o=e=>Object(s.a)(e)?JSON.parse(e)||{}:Object(a.a)(e)?e:{},l=e=>{if(!Object(r.a)()||"function"!=typeof c.__experimentalGetSpacingClassesAndStyles)return{style:{}};const t=Object(a.a)(e)?e:{},n=o(t.style);return Object(c.__experimentalGetSpacingClassesAndStyles)({...t,style:n})},u=e=>{const t=Object(a.a)(e)?e:{},n=o(t.style),c=Object(a.a)(n.typography)?n.typography:{};return{style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:c.fontSize,lineHeight:c.lineHeight,fontWeight:c.fontWeight,textTransform:c.textTransform,fontFamily:t.fontFamily}}},i=e=>{if(!Object(r.a)())return{className:"",style:{}};const t=Object(a.a)(e)?e:{},n=o(t.style);return Object(c.__experimentalUseColorProps)({...t,style:n})},b=e=>{if(!Object(r.a)())return{className:"",style:{}};const t=Object(a.a)(e)?e:{},n=o(t.style);return Object(c.__experimentalUseBorderProps)({...t,style:n})}},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}));const c=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function r(e,t){return c(e)&&t in e}},26:function(e,t,n){"use strict";var c=n(0),r=n(5),s=n.n(r);t.a=e=>{let t,{label:n,screenReaderLabel:r,wrapperElement:a,wrapperProps:o={}}=e;const l=null!=n,u=null!=r;return!l&&u?(t=a||"span",o={...o,className:s()(o.className,"screen-reader-text")},Object(c.createElement)(t,o,r)):(t=a||c.Fragment,l&&u&&n!==r?Object(c.createElement)(t,o,Object(c.createElement)("span",{"aria-hidden":"true"},n),Object(c.createElement)("span",{className:"screen-reader-text"},r)):Object(c.createElement)(t,o,n))}},300:function(e,t){},317:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n(5),a=n.n(s),o=n(26),l=n(45),u=n(119),i=(n(300),n(137));t.default=Object(u.withProductDataContext)(e=>{const{className:t,align:n}=e,{parentClassName:s}=Object(l.useInnerBlockLayoutContext)(),{product:u}=Object(l.useProductDataContext)(),b=Object(i.a)(e),p=Object(i.b)(e),d=Object(i.d)(e),f=Object(i.c)(e);if(!u.id||!u.on_sale)return null;const O="string"==typeof n?"wc-block-components-product-sale-badge--align-"+n:"";return Object(c.createElement)("div",{className:a()("wc-block-components-product-sale-badge",t,O,{[s+"__product-onsale"]:s},p.className,b.className),style:{...p.style,...b.style,...d.style,...f.style}},Object(c.createElement)(o.a,{label:Object(r.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(r.__)("Product on sale","woo-gutenberg-products-block")}))})}}]);