(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[6],{26:function(e,t,a){"use strict";var n=a(0),r=a(5),c=a.n(r);t.a=e=>{let t,{label:a,screenReaderLabel:r,wrapperElement:o,wrapperProps:s={}}=e;const l=null!=a,i=null!=r;return!l&&i?(t=o||"span",s={...s,className:c()(s.className,"screen-reader-text")},Object(n.createElement)(t,s,r)):(t=o||n.Fragment,l&&i&&a!==r?Object(n.createElement)(t,s,Object(n.createElement)("span",{"aria-hidden":"true"},a),Object(n.createElement)("span",{className:"screen-reader-text"},r)):Object(n.createElement)(t,s,a))}},261:function(e,t){},262:function(e,t){},265:function(e,t,a){"use strict";var n=a(12),r=a.n(n),c=a(0),o=a(5),s=a.n(o);a(266),t.a=e=>{let{children:t,className:a,headingLevel:n,...o}=e;const l=s()("wc-block-components-title",a),i="h"+n;return Object(c.createElement)(i,r()({className:l},o),t)}},266:function(e,t){},272:function(e,t){},273:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a(198);a(261);const c=e=>{let{errorMessage:t="",propertyName:a="",elementId:c=""}=e;const{getValidationError:o,getValidationErrorId:s}=Object(r.b)();if(!t||"string"!=typeof t){const e=o(a)||{};if(!e.message||e.hidden)return null;t=e.message}return Object(n.createElement)("div",{className:"wc-block-components-validation-error",role:"alert"},Object(n.createElement)("p",{id:s(c)},t))}},275:function(e,t,a){"use strict";var n=a(1);t.a=e=>{let{defaultTitle:t=Object(n.__)("Step","woo-gutenberg-products-block"),defaultDescription:a=Object(n.__)("Step description text.","woo-gutenberg-products-block"),defaultShowStepNumber:r=!0}=e;return{title:{type:"string",default:t},description:{type:"string",default:a},showStepNumber:{type:"boolean",default:r}}}},295:function(e,t,a){"use strict";var n=a(0),r=a(5),c=a.n(r),o=a(265);a(272);const s=e=>{let{title:t,stepHeadingContent:a}=e;return Object(n.createElement)("div",{className:"wc-block-components-checkout-step__heading"},Object(n.createElement)(o.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},t),!!a&&Object(n.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},a))};t.a=e=>{let{id:t,className:a,title:r,legend:o,description:l,children:i,disabled:u=!1,showStepNumber:d=!0,stepHeadingContent:b=(()=>{})}=e;const p=o||r?"fieldset":"div";return Object(n.createElement)(p,{className:c()(a,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":d,"wc-block-components-checkout-step--disabled":u}),id:t,disabled:u},!(!o&&!r)&&Object(n.createElement)("legend",{className:"screen-reader-text"},o||r),!!r&&Object(n.createElement)(s,{title:r,stepHeadingContent:b()}),Object(n.createElement)("div",{className:"wc-block-components-checkout-step__container"},!!l&&Object(n.createElement)("p",{className:"wc-block-components-checkout-step__description"},l),Object(n.createElement)("div",{className:"wc-block-components-checkout-step__content"},i)))}},297:function(e,t,a){"use strict";var n=a(12),r=a.n(n),c=a(0),o=a(1),s=a(3),l=a(5),i=a.n(l),u=a(198),d=a(273),b=a(11),p=a(52),m=a(26);a(262);var g=Object(s.forwardRef)((e,t)=>{let{className:a,id:n,type:o="text",ariaLabel:s,ariaDescribedBy:l,label:u,screenReaderLabel:d,disabled:b,help:p,autoCapitalize:g="off",autoComplete:h="off",value:O="",onChange:f,required:j=!1,onBlur:v=(()=>{}),feedback:E,...k}=e;const[y,C]=Object(c.useState)(!1);return Object(c.createElement)("div",{className:i()("wc-block-components-text-input",a,{"is-active":y||O})},Object(c.createElement)("input",r()({type:o,id:n,value:O,ref:t,autoCapitalize:g,autoComplete:h,onChange:e=>{f(e.target.value)},onFocus:()=>C(!0),onBlur:e=>{v(e.target.value),C(!1)},"aria-label":s||u,disabled:b,"aria-describedby":p&&!l?n+"__help":l,required:j},k)),Object(c.createElement)(m.a,{label:u,screenReaderLabel:d||u,wrapperElement:"label",wrapperProps:{htmlFor:n},htmlFor:n}),!!p&&Object(c.createElement)("p",{id:n+"__help",className:"wc-block-components-text-input__help"},p),E)});t.a=Object(b.withInstanceId)(e=>{let{className:t,instanceId:a,id:n,ariaDescribedBy:l,errorId:b,focusOnMount:m=!1,onChange:h,showError:O=!0,errorMessage:f="",value:j="",...v}=e;const[E,k]=Object(s.useState)(!0),y=Object(s.useRef)(null),{getValidationError:C,hideValidationError:w,setValidationErrors:N,clearValidationError:_,getValidationErrorId:I}=Object(u.b)(),L=void 0!==n?n:"textinput-"+a,A=void 0!==b?b:L,S=Object(s.useCallback)((function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=y.current||null;if(!t)return;t.value=t.value.trim();const a=t.checkValidity();a?_(A):N({[A]:{message:t.validationMessage||Object(o.__)("Invalid value.","woo-gutenberg-products-block"),hidden:e}})}),[_,A,N]);Object(s.useEffect)(()=>{var e;E&&m&&(null===(e=y.current)||void 0===e||e.focus()),k(!1)},[m,E,k]),Object(s.useEffect)(()=>{var e,t;(null===(e=y.current)||void 0===e||null===(t=e.ownerDocument)||void 0===t?void 0:t.activeElement)!==y.current&&S(!0)},[j,S]),Object(s.useEffect)(()=>()=>{_(A)},[_,A]);const q=C(A)||{};Object(p.a)(f)&&""!==f&&(q.message=f);const M=q.message&&!q.hidden,B=O&&M&&I(A)?I(A):l;return Object(c.createElement)(g,r()({className:i()(t,{"has-error":M}),"aria-invalid":!0===M,id:L,onBlur:()=>{S(!1)},feedback:O&&Object(c.createElement)(d.a,{errorMessage:f,propertyName:A}),ref:y,onChange:e=>{w(A),h(e)},ariaDescribedBy:B,value:j},v))})},312:function(e,t){},313:function(e,t){},314:function(e,t){},337:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(2),r=a(0),c=a(35),o=a(66),s=a(64);const l=()=>{const{needsShipping:e}=Object(s.a)(),{useShippingAsBilling:t,setUseShippingAsBilling:a}=Object(c.b)(),{billingAddress:l,setBillingAddress:i,shippingAddress:u,setShippingAddress:d}=Object(o.a)(),b=Object(r.useCallback)(e=>{i({email:e})},[i]),p=Object(r.useCallback)(e=>{i({phone:e})},[i]),m=Object(r.useCallback)(e=>{d({phone:e})},[d]);return{shippingAddress:u,billingAddress:l,setShippingAddress:d,setBillingAddress:i,setEmail:b,setBillingPhone:p,setShippingPhone:m,defaultAddressFields:n.defaultAddressFields,useShippingAsBilling:t,setUseShippingAsBilling:a,showShippingFields:e,showBillingFields:!e||!t}}},338:function(e,t,a){"use strict";var n=a(12),r=a.n(n),c=a(0),o=a(44),s=a(50);const l=["BUTTON","FIELDSET","INPUT","OPTGROUP","OPTION","SELECT","TEXTAREA","A"];t.a=e=>{let{children:t,style:a={},...n}=e;const i=Object(c.useRef)(null),u=()=>{i.current&&o.focus.focusable.find(i.current).forEach(e=>{l.includes(e.nodeName)&&e.setAttribute("tabindex","-1"),e.hasAttribute("contenteditable")&&e.setAttribute("contenteditable","false")})},d=Object(s.a)(u,0,{leading:!0});return Object(c.useLayoutEffect)(()=>{let e;return u(),i.current&&(e=new window.MutationObserver(d),e.observe(i.current,{childList:!0,attributes:!0,subtree:!0})),()=>{e&&e.disconnect(),d.cancel()}},[d]),Object(c.createElement)("div",r()({ref:i,"aria-disabled":"true",style:{userSelect:"none",pointerEvents:"none",cursor:"normal",...a}},n),t)}},339:function(e,t,a){"use strict";var n=a(0),r=a(1),c=a(297);t.a=e=>{let{id:t="phone",isRequired:a=!1,value:o="",onChange:s}=e;return Object(n.createElement)(c.a,{id:t,type:"tel",autoComplete:"tel",required:a,label:a?Object(r.__)("Phone","woo-gutenberg-products-block"):Object(r.__)("Phone (optional)","woo-gutenberg-products-block"),value:o,onChange:s})}},398:function(e,t,a){"use strict";var n=a(0),r=a(297),c=a(12),o=a.n(c),s=a(46),l=a(1),i=a(18),u=a(5),d=a.n(u),b=a(11),p=a(434),m=a(198),g=a(273),h=a(20);a(313);var O=Object(b.withInstanceId)(e=>{let{id:t,className:a,label:r,onChange:c,options:o,value:s,required:i=!1,errorMessage:u=Object(l.__)("Please select a value.","woo-gutenberg-products-block"),errorId:b,instanceId:O="0",autoComplete:f="off"}=e;const{getValidationError:j,setValidationErrors:v,clearValidationError:E}=Object(m.b)(),k=Object(n.useRef)(null),y=t||"control-"+O,C=b||y,w=j(C)||{message:"",hidden:!1};return Object(n.useEffect)(()=>(!i||s?E(C):v({[C]:{message:u,hidden:!0}}),()=>{E(C)}),[E,s,C,u,i,v]),Object(n.createElement)("div",{id:y,className:d()("wc-block-components-combobox",a,{"is-active":s,"has-error":w.message&&!w.hidden}),ref:k},Object(n.createElement)(p.a,{className:"wc-block-components-combobox-control",label:r,onChange:c,onFilterValueChange:e=>{if(e.length){const t=Object(h.a)(k.current)?k.current.ownerDocument.activeElement:void 0;if(t&&Object(h.a)(k.current)&&k.current.contains(t))return;const a=e.toLocaleUpperCase(),n=o.find(e=>e.label.toLocaleUpperCase().startsWith(a)||e.value.toLocaleUpperCase()===a);n&&c(n.value)}},options:o,value:s||"",allowReset:!1,autoComplete:f,"aria-invalid":w.message&&!w.hidden}),Object(n.createElement)(g.a,{propertyName:C}))});a(312);var f=e=>{let{className:t,countries:a,id:r,label:c,onChange:o,value:s="",autoComplete:u="off",required:b=!1,errorId:p,errorMessage:m=Object(l.__)("Please select a country.","woo-gutenberg-products-block")}=e;const g=Object(n.useMemo)(()=>Object.entries(a).map(e=>{let[t,a]=e;return{value:t,label:Object(i.decodeEntities)(a)}}),[a]);return Object(n.createElement)("div",{className:d()(t,"wc-block-components-country-input")},Object(n.createElement)(O,{id:r,label:c,onChange:o,options:g,value:s,errorId:p,errorMessage:m,required:b,autoComplete:u}),"off"!==u&&Object(n.createElement)("input",{type:"text","aria-hidden":!0,autoComplete:u,value:s,onChange:e=>{const t=e.target.value.toLocaleUpperCase(),a=g.find(e=>2!==t.length&&e.label.toLocaleUpperCase()===t||2===t.length&&e.value.toLocaleUpperCase()===t);o(a?a.value:"")},style:{minHeight:"0",height:"0",border:"0",padding:"0",position:"absolute"},tabIndex:-1}))},j=e=>Object(n.createElement)(f,o()({countries:s.g},e)),v=e=>Object(n.createElement)(f,o()({countries:s.a},e));a(314);const E=(e,t)=>{const a=t.find(t=>t.label.toLocaleUpperCase()===e.toLocaleUpperCase()||t.value.toLocaleUpperCase()===e.toLocaleUpperCase());return a?a.value:""};var k=e=>{let{className:t,id:a,states:c,country:o,label:s,onChange:u,autoComplete:b="off",value:p="",required:m=!1}=e;const g=c[o],h=Object(n.useMemo)(()=>g?Object.keys(g).map(e=>({value:e,label:Object(i.decodeEntities)(g[e])})):[],[g]),f=Object(n.useCallback)(e=>{u(h.length>0?E(e,h):e)},[u,h]),j=Object(n.useRef)(p);return Object(n.useEffect)(()=>{j.current!==p&&(j.current=p)},[p]),Object(n.useEffect)(()=>{if(h.length>0&&j.current){const e=E(j.current,h);e!==j.current&&f(e)}},[h,f]),h.length>0?Object(n.createElement)(n.Fragment,null,Object(n.createElement)(O,{className:d()(t,"wc-block-components-state-input"),id:a,label:s,onChange:f,options:h,value:p,errorMessage:Object(l.__)("Please select a state.","woo-gutenberg-products-block"),required:m,autoComplete:b}),"off"!==b&&Object(n.createElement)("input",{type:"text","aria-hidden":!0,autoComplete:b,value:p,onChange:e=>f(e.target.value),style:{minHeight:"0",height:"0",border:"0",padding:"0",position:"absolute"},tabIndex:-1})):Object(n.createElement)(r.a,{className:t,id:a,label:s,onChange:f,autoComplete:b,value:p,required:m})},y=e=>Object(n.createElement)(k,o()({states:s.h},e)),C=e=>Object(n.createElement)(k,o()({states:s.b},e)),w=a(32),N=a(2),_=a(47);t.a=Object(b.withInstanceId)(e=>{let{id:t="",fields:a=Object.keys(N.defaultAddressFields),fieldConfig:c={},instanceId:o,onChange:s,type:i="shipping",values:u}=e;const{getValidationError:d,setValidationErrors:b,clearValidationError:p}=Object(m.b)(),g=Object(w.a)(a),h=d("shipping-missing-country")||{},O=Object(n.useMemo)(()=>Object(_.a)(g,c,u.country),[g,c,u.country]);return Object(n.useEffect)(()=>{O.forEach(e=>{e.hidden&&u[e.key]&&s({...u,[e.key]:""})})},[O,s,u]),Object(n.useEffect)(()=>{"shipping"===i&&((e,t,a,n)=>{n||e.country||!(e.city||e.state||e.postcode)||t({"shipping-missing-country":{message:Object(l.__)("Please select a country to calculate rates.","woo-gutenberg-products-block"),hidden:!1}}),n&&e.country&&a("shipping-missing-country")})(u,b,p,!!h.message&&!h.hidden)},[u,h.message,h.hidden,b,p,i]),t=t||o,Object(n.createElement)("div",{id:t,className:"wc-block-components-address-form"},O.map(e=>{if(e.hidden)return null;if("country"===e.key){const a="shipping"===i?j:v;return Object(n.createElement)(a,{key:e.key,id:`${t}-${e.key}`,label:e.required?e.label:e.optionalLabel,value:u.country,autoComplete:e.autocomplete,onChange:e=>s({...u,country:e,state:""}),errorId:"shipping"===i?"shipping-missing-country":null,errorMessage:e.errorMessage,required:e.required})}if("state"===e.key){const a="shipping"===i?y:C;return Object(n.createElement)(a,{key:e.key,id:`${t}-${e.key}`,country:u.country,label:e.required?e.label:e.optionalLabel,value:u.state,autoComplete:e.autocomplete,onChange:e=>s({...u,state:e}),errorMessage:e.errorMessage,required:e.required})}return Object(n.createElement)(r.a,{key:e.key,id:`${t}-${e.key}`,className:"wc-block-components-address-form__"+e.key,label:e.required?e.label:e.optionalLabel,value:u[e.key],autoCapitalize:e.autocapitalize,autoComplete:e.autocomplete,onChange:t=>s({...u,[e.key]:t}),errorMessage:e.errorMessage,required:e.required})}))})}}]);