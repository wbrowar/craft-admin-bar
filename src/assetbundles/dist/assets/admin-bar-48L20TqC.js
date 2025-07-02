/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,W=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),Y=new WeakMap;let ct=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o;const t=this.t;if(W&&i===void 0){const e=t!==void 0&&t.length===1;e&&(i=Y.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&Y.set(t,i))}return i}toString(){return this.cssText}};const _t=i=>new ct(typeof i=="string"?i:i+"",void 0,J),D=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,s,o)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new ct(e,i,J)},yt=(i,t)=>{if(W)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),s=B.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}},Z=W?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return _t(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xt,defineProperty:At,getOwnPropertyDescriptor:wt,getOwnPropertyNames:St,getOwnPropertySymbols:Et,getPrototypeOf:kt}=Object,k=globalThis,Q=k.trustedTypes,Ct=Q?Q.emptyScript:"",tt=k.reactiveElementPolyfillSupport,U=(i,t)=>i,z={toAttribute(i,t){switch(t){case Boolean:i=i?Ct:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},K=(i,t)=>!xt(i,t),et={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:K};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),k.litPropertyMetadata??(k.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=et){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&At(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:o}=wt(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get(){return s?.call(this)},set(a){const l=s?.call(this);o.call(this,a),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??et}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const t=kt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,r=[...St(e),...Et(e)];for(const s of r)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift(Z(s))}else t!==void 0&&e.push(Z(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var r;const s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){const a=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:z).toAttribute(e,s.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,e){var r;const s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=s.getPropertyOptions(o),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)==null?void 0:r.fromAttribute)!==void 0?a.converter:z;this._$Em=o,this[o]=l.fromAttribute(e,a.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??K)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,a]of s)a.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$EO)==null||t.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[U("elementProperties")]=new Map,E[U("finalized")]=new Map,tt?.({ReactiveElement:E}),(k.reactiveElementVersions??(k.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,I=q.trustedTypes,rt=I?I.createPolicy("lit-html",{createHTML:i=>i}):void 0,pt="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,ut="?"+$,Pt=`<${ut}>`,A=document,R=()=>A.createComment(""),O=i=>i===null||typeof i!="object"&&typeof i!="function",X=Array.isArray,Tt=i=>X(i)||typeof i?.[Symbol.iterator]=="function",V=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,it=/>/g,_=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,at=/"/g,bt=/^(?:script|style|textarea|title)$/i,Ut=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),c=Ut(1),w=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),nt=new WeakMap,y=A.createTreeWalker(A,129);function mt(i,t){if(!X(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return rt!==void 0?rt.createHTML(t):t}const Rt=(i,t)=>{const e=i.length-1,r=[];let s,o=t===2?"<svg>":t===3?"<math>":"",a=T;for(let l=0;l<e;l++){const n=i[l];let d,u,h=-1,m=0;for(;m<n.length&&(a.lastIndex=m,u=a.exec(n),u!==null);)m=a.lastIndex,a===T?u[1]==="!--"?a=st:u[1]!==void 0?a=it:u[2]!==void 0?(bt.test(u[2])&&(s=RegExp("</"+u[2],"g")),a=_):u[3]!==void 0&&(a=_):a===_?u[0]===">"?(a=s??T,h=-1):u[1]===void 0?h=-2:(h=a.lastIndex-u[2].length,d=u[1],a=u[3]===void 0?_:u[3]==='"'?at:ot):a===at||a===ot?a=_:a===st||a===it?a=T:(a=_,s=void 0);const f=a===_&&i[l+1].startsWith("/>")?" ":"";o+=a===T?n+Pt:h>=0?(r.push(d),n.slice(0,h)+pt+n.slice(h)+$+f):n+$+(h===-2?l:f)}return[mt(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class H{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let o=0,a=0;const l=t.length-1,n=this.parts,[d,u]=Rt(t,e);if(this.el=H.createElement(d,r),y.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=y.nextNode())!==null&&n.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(pt)){const m=u[a++],f=s.getAttribute(h).split($),L=/([.?@])?(.*)/.exec(m);n.push({type:1,index:o,name:L[2],strings:f,ctor:L[1]==="."?Ht:L[1]==="?"?Mt:L[1]==="@"?Nt:F}),s.removeAttribute(h)}else h.startsWith($)&&(n.push({type:6,index:o}),s.removeAttribute(h));if(bt.test(s.tagName)){const h=s.textContent.split($),m=h.length-1;if(m>0){s.textContent=I?I.emptyScript:"";for(let f=0;f<m;f++)s.append(h[f],R()),y.nextNode(),n.push({type:2,index:++o});s.append(h[m],R())}}}else if(s.nodeType===8)if(s.data===ut)n.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf($,h+1))!==-1;)n.push({type:7,index:o}),h+=$.length-1}o++}}static createElement(t,e){const r=A.createElement("template");return r.innerHTML=t,r}}function C(i,t,e=i,r){var s,o;if(t===w)return t;let a=r!==void 0?(s=e._$Co)==null?void 0:s[r]:e._$Cl;const l=O(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((o=a?._$AO)==null||o.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=a:e._$Cl=a),a!==void 0&&(t=C(i,a._$AS(i,t.values),a,r)),t}class Ot{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=(t?.creationScope??A).importNode(e,!0);y.currentNode=s;let o=y.nextNode(),a=0,l=0,n=r[0];for(;n!==void 0;){if(a===n.index){let d;n.type===2?d=new M(o,o.nextSibling,this,t):n.type===1?d=new n.ctor(o,n.name,n.strings,this,t):n.type===6&&(d=new Lt(o,this,t)),this._$AV.push(d),n=r[++l]}a!==n?.index&&(o=y.nextNode(),a++)}return y.currentNode=A,s}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class M{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),O(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Tt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=H.createElement(mt(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)==null?void 0:e._$AD)===o)this._$AH.p(r);else{const a=new Ot(o,this),l=a.u(this.options);a.p(r),this.T(l),this._$AH=a}}_$AC(t){let e=nt.get(t.strings);return e===void 0&&nt.set(t.strings,e=new H(t)),e}k(t){X(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const o of t)s===e.length?e.push(r=new M(this.O(R()),this.O(R()),this,this.options)):r=e[s],r._$AI(o),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class F{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}_$AI(t,e=this,r,s){const o=this.strings;let a=!1;if(o===void 0)t=C(this,t,e,0),a=!O(t)||t!==this._$AH&&t!==w,a&&(this._$AH=t);else{const l=t;let n,d;for(t=o[0],n=0;n<o.length-1;n++)d=C(this,l[r+n],e,n),d===w&&(d=this._$AH[n]),a||(a=!O(d)||d!==this._$AH[n]),d===p?t=p:t!==p&&(t+=(d??"")+o[n+1]),this._$AH[n]=d}a&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ht extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Mt extends F{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Nt extends F{constructor(t,e,r,s,o){super(t,e,r,s,o),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??p)===w)return;const r=this._$AH,s=t===p&&r!==p||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==p&&(r===p||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Lt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const lt=q.litHtmlPolyfillSupport;lt?.(H,M),(q.litHtmlVersions??(q.litHtmlVersions=[])).push("3.2.1");const Bt=(i,t,e)=>{const r=e?.renderBefore??t;let s=r._$litPart$;if(s===void 0){const o=e?.renderBefore??null;r._$litPart$=s=new M(t.insertBefore(R(),o),o,void 0,e??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let x=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(i){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=Bt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)==null||i.setConnected(!1)}render(){return w}};var dt;x._$litElement$=!0,x.finalized=!0,(dt=globalThis.litElementHydrateSupport)==null||dt.call(globalThis,{LitElement:x});const ht=globalThis.litElementPolyfillSupport;ht?.({LitElement:x});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt={ATTRIBUTE:1},zt=i=>(...t)=>({_$litDirective$:i,values:t});class qt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=zt(class extends qt{constructor(i){var t;if(super(i),i.type!==jt.ATTRIBUTE||i.name!=="class"||((t=i.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,r;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((e=this.nt)!=null&&e.has(o))&&this.st.add(o);return this.render(t)}const s=i.element.classList;for(const o of this.st)o in t||(s.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||(r=this.nt)!=null&&r.has(o)||(a?(s.add(o),this.st.add(o)):(s.remove(o),this.st.delete(o)))}return w}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:K},Dt=(i=It,t,e)=>{const{kind:r,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,i),r==="accessor"){const{name:a}=e;return{set(l){const n=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,n,i)},init(l){return l!==void 0&&this.P(a,void 0,i),l}}}if(r==="setter"){const{name:a}=e;return function(l){const n=this[a];t.call(this,l),this.requestUpdate(a,n,i)}}throw Error("Unsupported decorator location: "+r)};function b(i){return(t,e)=>typeof e=="object"?Dt(i,t,e):((r,s,o)=>{const a=s.hasOwnProperty(o);return s.constructor.createProperty(o,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(s,o):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(i){return b({...i,state:!0,attribute:!1})}var Ft=Object.defineProperty,G=(i,t,e,r)=>{for(var s=void 0,o=i.length-1,a;o>=0;o--)(a=i[o])&&(s=a(t,e,s)||s);return s&&Ft(t,e,s),s};const vt=class extends x{constructor(){super(...arguments),this.label="",this.isLogoutButton=!1,this._hasPopoverSlot=!1}handlePopoverSlotchange(t){const e=t.target.assignedNodes({flatten:!0});this._hasPopoverSlot=e.length>0}render(){const t={"admin-bar-button":!0,"admin-bar-button--el-a":!1,"admin-bar-button--el-button":!1,"admin-bar-button--el-select":!1,"admin-bar-button--logout":this.isLogoutButton},e=c`<slot name="before-label"></slot><slot name="label-before"></slot
      ><slot>${this.label??!1?c`<span>${this.label}</span>`:p}</slot><slot name="label-after"></slot
      ><slot name="after-label"></slot>`;return this.href?(t["admin-bar-button--el-a"]=!0,c`<a class="${j(t)}" href="${this.href}">${e}</a>`):(t["admin-bar-button--el-button"]=!0,this._hasPopoverSlot?c`<button class="${j(t)}" popovertarget="admin-bar-button-popover">
          ${e}
        </button>
        <div popover id="admin-bar-button-popover" part="popover">
          <div class="glass-surface"></div>
          <div class="glass-edge"></div>
          <slot name="popover" @slotchange="${this.handlePopoverSlotchange}"></slot>
        </div>`:c`<button class="${j(t)}">${e}</button
      ><slot name="popover" @slotchange="${this.handlePopoverSlotchange}"></slot>`)}};vt.styles=D`
    :host {
      --padding-left: 10px;
      --padding-right: 10px;
      --margin: 4px;
      --border-radius: 4px;
      display: block;
      text-box: trim-both cap alphabetic;
      --achor-name: --popover-anchor;
    }
    .admin-bar-button {
      anchor-name: var(--achor-name);
      box-sizing: border-box;
      display: flex;
      flex-wrap: nowrap;
      gap: 5px;
      align-items: center;
      padding: var(--admin-bar-block-padding) var(--admin-bar-inline-padding);
      min-width: 100%;
      height: var(--admin-bar-height, 43px);
      background-color: var(--admin-bar-button-color-bg, transparent);
      appearance: none;
      border: none;
      outline-color: var(--admin-bar-color-highlight);
      font-family: var(--admin-bar-font-stack);
      font-size: var(--font-size);
      text-decoration: none;
      color: var(--admin-bar-button-color-text, white);
      white-space: nowrap;
      cursor: pointer;
      transition:
        background var(--admin-bar-transition-duration, 0.4s) ease-out,
        color var(--admin-bar-transition-duration, 0.4s) ease-out;

      &:hover {
        transition-duration: calc(var(--admin-bar-transition-duration, 0.4s) / 2);
      }
      &:not(.admin-bar-button--logout):hover {
        --admin-bar-button-color-bg: var(--admin-bar-button-color-bg-hover, var(--admin-bar-button-color-text, white));
        --admin-bar-text-label-color-bg: var(--admin-bar-color-highlight);
        --admin-bar-text-label-color-text: var(--admin-bar-button-color-bg-hover);
        color: var(--admin-bar-color-highlight, oklch(0.6 0.4 83));
      }

      &.admin-bar-button--logout {
        padding: var(--admin-bar-block-padding) clamp(10px, 3vw, 20px);

        &:hover {
          --admin-bar-button-color-bg: var(--admin-bar-color-highlight-logout, var(--admin-bar-color-highlight));
        }
      }
    }
    [popovertarget]:has(+ [popover]:popover-open) {
      --admin-bar-button-color-bg: color-mix(in srgb, var(--admin-bar-button-color-bg-hover), transparent 85%);

      &:hover {
        --admin-bar-button-color-bg: var(--admin-bar-button-color-bg-hover, var(--admin-bar-button-color-text, white));
        color: var(--admin-bar-color-highlight, oklch(0.6 0.4 83));
      }
    }

    @position-try --popover-bottom-right {
      position-area: block-end span-inline-start;
    }
    @position-try --popover-top-left {
      position-area: block-start span-inline-start;
    }
    @position-try --popover-top-right {
      position-area: block-start span-inline-end;
    }
    [popover] {
      padding: 0;
      border: 0;
      background: var(--admin-bar-button-popover-bg, var(--admin-bar-bg-color));
      backdrop-filter: var(--admin-bar-backdrop-filter, blur(20px) saturate(200%));
      border: 2px solid color-mix(in srgb, var(--admin-bar-button-color-bg-hover), transparent 80%);
      border-radius: var(--admin-bar-button-popover-border-radius, var(--admin-bar-border-radius));
      box-shadow: var(--admin-bar-shadow);
      color: var(--admin-bar-button-popover-color-text, rgb(255 255 255));
      scrollbar-color: color-mix(in srgb, var(--admin-bar-color-text), transparent 20%)
        color-mix(in srgb, var(--admin-bar-bg-color), transparent 90%);
      scrollbar-width: thin;

      @supports (position-anchor: var(--achor-name)) and (position-try-fallbacks: --popover-top) {
        & {
          position-anchor: var(--achor-name);
          position: fixed;
          position-area: block-end span-inline-end;
          position-try-fallbacks: --popover-bottom-right, --popover-top-left, --popover-top-right;
          margin: 2px 0 calc(var(--environment-height) + 2px);
        }
      }
      @supports not (position-anchor: var(--achor-name)) {
        &::backdrop {
          backdrop-filter: var(--admin-bar-backdrop-filter, blur(20px) saturate(200%));
          background: var(--admin-bar-button-popover-bg, var(--admin-bar-bg-color));
        }
      }
    }
  `;let N=vt;G([b({attribute:"button-href"})],N.prototype,"href");G([b({attribute:"label-text"})],N.prototype,"label");G([b({attribute:"logout-button",type:Boolean})],N.prototype,"isLogoutButton");G([gt()],N.prototype,"_hasPopoverSlot");customElements.get("admin-bar-button")||customElements.define("admin-bar-button",N);function Gt(){return D`
    /*
     * This code gets applied for folks using browsers that support backdrop-filter.
     */
    @supports (backdrop-filter: blur(20px)) or (-webkit-backdrop-filter: blur(20px)) {
      & {
        background: transparent;
      }

      .glass-surface {
        position: absolute;
        height: 100%;
        width: 100%;
        inset: 0;
        -webkit-backdrop-filter: var(--admin-bar-backdrop-filter, blur(20px) saturate(200%));
        backdrop-filter: var(--admin-bar-backdrop-filter, blur(20px) saturate(200%));
        background: var(--admin-bar-glass-bg);
        pointer-events: none;
      }

      .glass-edge {
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        right: 0;
        bottom: 0;
        height: var(--admin-bar-glass-thickness);
        background: hsl(0deg 0% 100% / 0.1);
        -webkit-backdrop-filter: blur(12px) brightness(0.96);
        backdrop-filter: blur(12px) brightness(0.96);
        pointer-events: none;
        transform: translateY(100%);

        :host(.bottom) & {
          transform: translateY(calc(var(--admin-bar-glass-thickness) * -1));
        }
      }
    }
    /*
     * This code gets applied for folks using browsers that support mask-image. This adds the "consider near elements" optimization discussed in this article.
     */
    @supports (mask-image: none) or (-webkit-mask-image: none) {
      .glass-surface {
        height: 200%;
        -webkit-mask-image: linear-gradient(var(--admin-bar-gradient-direction), black 0% 50%, transparent 50% 100%);
        mask-image: linear-gradient(var(--admin-bar-gradient-direction), black 0% 50%, transparent 50% 100%);

        :host(.bottom) & {
          position: absolute;
          inset: auto 0 0 0;
        }
      }
      .glass-edge {
        height: 100%;
        inset: 0;
        -webkit-mask-image: linear-gradient(
          var(--admin-bar-gradient-direction),
          black 0,
          black var(--admin-bar-glass-thickness),
          transparent var(--admin-bar-glass-thickness)
        );
        mask-image: linear-gradient(
          var(--admin-bar-gradient-direction),
          black 0,
          black var(--admin-bar-glass-thickness),
          transparent var(--admin-bar-glass-thickness)
        );

        :host(.bottom) & {
          transform: translateY(-100%);
        }
      }
    }
  `}var Vt=Object.defineProperty,v=(i,t,e,r)=>{for(var s=void 0,o=i.length-1,a;o>=0;o--)(a=i[o])&&(s=a(t,e,s)||s);return s&&Vt(t,e,s),s};const ft=class extends x{constructor(){super(...arguments),this.avatarAlt="Avatar of logged in user.",this.greetingText="Hello",this.logoutHref="#",this.logoutLabel="Sign out",this.showEnvironment=!1,this.showGreeting=!1,this.showLogout=!1,this._hasGreetingPopoverSlot=!1}handleGreetingPopoverSlotchange(t){const e=t.target.assignedNodes({flatten:!0});this._hasGreetingPopoverSlot=e.length>0}render(){const t={"admin-bar":!0,"admin-bar--environment":this.showEnvironment,"admin-bar--greeting":this.showGreeting,"admin-bar--logout":this.showLogout},e=this.showGreeting?c`<div class="greeting">
          ${this.avatarSrc?c`<img alt="${this.avatarAlt}" src="${this.avatarSrc}" width="25px" height="25px" part="avatar" />`:p}
          <span><slot name="greeting">${this.greetingText}</slot></span>
        </div>`:p,r=this._hasGreetingPopoverSlot?c`
          <admin-bar-button>
            ${e}
            <div slot="popover">
              <slot name="greeting-popover" @slotchange="${this.handleGreetingPopoverSlotchange}"></slot>
            </div>
          </admin-bar-button>
        `:c`${e}<slot
            name="greeting-popover"
            @slotchange="${this.handleGreetingPopoverSlotchange}"
          ></slot>`,s=this.showLogout?c`<slot name="logout"
          ><admin-bar-button
            logout-button
            button-href="${this.logoutHref}"
            label-text="${this.logoutLabel}"
          ></admin-bar-button
        ></slot>`:p;return c`
      <nav class="${j(t)}">
        <div class="glass-surface"></div>
        <div class="glass-edge"></div>
        <div class="environment"></div>
        ${r}
        <div class="buttons" part="buttons"><slot></slot></div>
        <div class="logout">${s}</div>
      </nav>
    `}};ft.styles=D`
    * {
      position: relative;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .admin-bar {
      --border-color: color-mix(in srgb, currentColor, transparent 80%);
      display: grid;
      grid-template-areas:
        'environment environment environment'
        'greeting buttons logout';
      grid-template-columns: max-content 1fr max-content;
      grid-template-rows: 0 var(--admin-bar-height, 43px);
      align-items: center;
      background: var(--admin-bar-bg, var(--admin-bar-bg-color, rgba(0 0 0 / 0.8)));
      box-shadow: var(--admin-bar-shadow);
      font-family: var(--admin-bar-font-stack);
      font-size: var(--admin-bar-font-size, 0.9rem);
      color: var(--admin-bar-color-text, rgb(255 255 255 / 0.8));
      scrollbar-color: color-mix(in srgb, var(--admin-bar-color-text), transparent 20%)
        color-mix(in srgb, var(--admin-bar-bg-color), transparent 90%);
      scrollbar-width: thin;

      &.admin-bar--environment {
        grid-template-rows: var(--environment-height) var(--admin-bar-height, 43px);
      }

      ${Gt()}
    }

    .environment {
      grid-area: environment;

      .admin-bar--environment & {
        height: var(--environment-height);
        background-color: red;
        background: var(
          --admin-bar-environment-bg,
          repeating-linear-gradient(
            -45deg,
            var(--admin-bar-environment-bg-color),
            var(--admin-bar-environment-bg-color) 18px,
            transparent 18px,
            transparent 30px
          )
        );
      }
    }

    .admin-bar--greeting .greeting {
      grid-area: greeting;
      display: none;
      grid-template-columns: var(--grid-template-columns, 1fr);
      gap: 7px;
      align-items: center;
      margin-block-start: var(--margin-block-start, 0.5rem);
      margin-block-end: var(--margin-block-end, 0.5rem);
      padding: 0 clamp(6px, 2vw, 15px);
      white-space: nowrap;

      &:has(+ [slot='popover']) {
        padding: 0;
      }

      &:has(img) {
        display: grid;

        & *:not(img) {
          display: none;
        }
      }

      & img {
        display: block;
        aspect-ratio: 1 / 1;
        width: var(--admin-bar-avatar-size, 25px);
        height: auto;
        background-size: cover;
        border-radius: 50%;
        box-shadow: var(--admin-bar-shadow-elements);
      }
    }

    @media (min-width: 700px) {
      .admin-bar--greeting .greeting {
        --grid-template-columns: 1fr;
        display: grid;

        @supports not selector(:has(*)) {
          display: flex;
        }

        &:has(img) {
          --grid-template-columns: var(--admin-bar-avatar-size, 25px) 1fr;

          & *:not(img) {
            display: initial;
          }
        }
      }
    }

    .buttons {
      grid-area: buttons;
      display: flex;
      min-width: 1px;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;

      .admin-bar--greeting & {
        border-left: 1px solid var(--border-color);
      }
      .admin-bar--logout & {
        border-right: 1px solid var(--border-color);
      }
    }

    .logout {
      grid-area: logout;
    }
  `;let g=ft;v([b({attribute:"avatar-alt"})],g.prototype,"avatarAlt");v([b({attribute:"avatar-src"})],g.prototype,"avatarSrc");v([b({attribute:"greeting-text"})],g.prototype,"greetingText");v([b({attribute:"logout-href"})],g.prototype,"logoutHref");v([b({attribute:"logout-label"})],g.prototype,"logoutLabel");v([b({attribute:"show-environment",type:Boolean})],g.prototype,"showEnvironment");v([b({attribute:"show-greeting",type:Boolean})],g.prototype,"showGreeting");v([b({attribute:"show-logout",type:Boolean})],g.prototype,"showLogout");v([gt()],g.prototype,"_hasGreetingPopoverSlot");customElements.get("admin-bar")||customElements.define("admin-bar",g);var Wt=Object.defineProperty,P=(i,t,e,r)=>{for(var s=void 0,o=i.length-1,a;o>=0;o--)(a=i[o])&&(s=a(t,e,s)||s);return s&&Wt(t,e,s),s};const $t=class extends x{constructor(){super(...arguments),this.dlContent=[],this.labelContent="",this.labelPosition="after",this.multiLine=!1,this.tableContent={rows:[]},this.textContent=""}render(){var t,e,r,s,o,a;const l=[];this.textContent??!1?l.push(c`<span class="text">${this.textContent}</span>`):this.dlContent.length?l.push(c`<dl part="dl">
          ${this.dlContent.map(d=>c`<dt>${d[0]??""}</dt>
                <dd>${d[1]??""}</dd>`)}
        </dl>`):(e=(t=this.tableContent)==null?void 0:t.rows)!=null&&e.length&&l.push(c`<table part="table">
          ${(s=(r=this.tableContent)==null?void 0:r.headers)!=null&&s.length?c`<thead>
                <tr>
                  ${this.tableContent.headers.map(d=>c`<th>${d??""}</th>`)}
                </tr>
              </thead>`:p}
          ${c`<tbody>
            ${this.tableContent.rows.map(d=>c`<tr>
                  ${d.map(u=>c`<td>${u}</td>`)}
                </tr>`)}
          </tbody>`}
          ${(a=(o=this.tableContent)==null?void 0:o.footers)!=null&&a.length?c`<tfoot>
                <tr>
                  ${this.tableContent.footers.map(d=>c`<td>${d??""}</td>`)}
                </tr>
              </tfoot>`:p}
        </table>`);let n=c`<slot>${l}</slot>`;return(this.labelContent??!1)&&(n=this.labelPosition==="before"?c`<span class="label">${this.labelContent}</span>${n}`:c`${n}<span class="label">${this.labelContent}</span>`),c`<span class="admin-bar-text${this.multiLine?" multi-line":""}">${n}</span>`}};$t.styles=D`
    :host {
      --padding-left: 10px;
      --padding-right: 10px;
      --margin: 4px;
      --border-radius: 4px;
      display: inline-block;
      text-box: trim-both cap alphabetic;
    }
    .admin-bar-text {
      display: flex;
      flex-wrap: nowrap;
      gap: 5px;
      align-items: center;
      padding: var(--admin-bar-text-padding, var(--admin-bar-block-padding) var(--admin-bar-inline-padding));
      height: var(--admin-bar-height, 43px);
      background-color: var(--admin-bar-text-color-bg, transparent);
      font-size: var(--font-size);
      color: var(--admin-bar-color-text, rgb(255 255 255 / 0.8));
      white-space: nowrap;
      transition:
        background var(--admin-bar-transition-duration, 0.4s) ease-out,
        color var(--admin-bar-transition-duration, 0.4s) ease-out;

      &:is(.multi-line, :has(dl, table)) {
        padding: var(--admin-bar-text-padding, var(--admin-bar-inline-padding));
        height: unset;
        white-space: unset;

        &:has(table) {
          padding: 0;
        }
      }

      & dl {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 1rem;
        margin: 0;

        & :is(dt, dd) {
          text-box: trim-both cap alphabetic;
        }
        & dt {
          max-width: var(--dt-max-width, 50ch);
          font-weight: var(--dt-font-weight, 700);
          text-align: var(--dt-text-align, end);
          text-wrap: var(--dt-text-wrap, balance);
        }
        & dd {
          margin: 0;
          max-width: var(--dd-max-width, 50ch);
          text-wrap: var(--dd-text-wrap, pretty);
        }
      }
      & table {
        --table-border-radius: calc(var(--admin-bar-border-radius) * 0.6);

        & thead {
          background-color: var(--admin-bar-text-label-color-bg);
          color: var(--admin-bar-text-label-color-text);

          & th:first-child {
            border-start-start-radius: var(--table-border-radius);
          }
          & th:last-child {
            border-start-end-radius: var(--table-border-radius);
          }
        }
        & tfoot {
          background-color: color-mix(in srgb, var(--admin-bar-text-label-color-bg), transparent 80%);

          & td:first-child {
            border-end-start-radius: var(--table-border-radius);
          }
          & td:last-child {
            border-end-end-radius: var(--table-border-radius);
          }
        }
        & :is(td, th) {
          padding: var(--admin-bar-text-padding, clamp(4px, 0.8vw, 10px));
          max-width: var(--td-max-width, 50ch);
          font-weight: initial;
          text-wrap: var(--td-text-wrap, pretty);
        }
      }
    }
    .label {
      padding: 0.4em;
      background-color: var(--admin-bar-text-label-color-bg, rgb(255 255 255 / 0.9));
      border-radius: 4px;
      line-height: 1;
      text-box: trim-both cap alphabetic;
      font-size: 0.8em;
      color: var(--admin-bar-text-label-color-text, black);
    }
  `;let S=$t;P([b({attribute:"dl-content",type:Array})],S.prototype,"dlContent");P([b({attribute:"label-content"})],S.prototype,"labelContent");P([b({attribute:"label-position"})],S.prototype,"labelPosition");P([b({attribute:"multi-line",type:Boolean})],S.prototype,"multiLine");P([b({attribute:"table-content",type:Object})],S.prototype,"tableContent");P([b({attribute:"text-content"})],S.prototype,"textContent");customElements.get("admin-bar-text")||customElements.define("admin-bar-text",S);class Jt extends HTMLElement{static observedAttributes=["data-api-status"];_actionUrl=void 0;_csrfToken=void 0;_requestStatus;_sessionActionUrl=void 0;attributeChangedCallback(t,e,r){t==="data-api-status"&&["errored","loading","ready","resolved"].includes(r)&&(r==="errored"&&(this._csrfToken=void 0),this._requestStatus=r)}connectedCallback(){this._actionUrl=this.dataset.actionUrl,this._sessionActionUrl=this.dataset.sessionActionUrl,this.setApiStatus("ready")}async actionRequest(t,e=""){if(this._requestStatus!=="loading"){if(this._actionUrl===void 0)return{message:"action-url-invalid",status:"error"};if(this._csrfToken===void 0){const r=await this.getSessionInfo();if(r.csrfTokenValue)this._csrfToken=r.csrfTokenValue;else return{message:"csrf-token-invalid",status:"error"}}try{this.setApiStatus("loading");const r=new FormData;r.append("requestHandle",t),e&&r.append("params",e);const s=await fetch(this._actionUrl,{body:r,headers:{Accept:"application/json","X-CSRF-Token":this._csrfToken??"","X-Requested-With":"XMLHttpRequest"},method:"POST"});if(!s.ok)throw this.setApiStatus("errored"),new Error(`Response status: ${s.status}`);const o=await s.json();if(o.status!=="success")throw o.message;return this.setApiStatus("resolved"),o}catch(r){return this.setApiStatus("errored"),{message:r,status:"error"}}}}async getSessionInfo(){if(this._sessionActionUrl)return fetch(this._sessionActionUrl,{headers:{Accept:"application/json"}}).then(t=>t.json())}setApiStatus(t){this.dataset.apiStatus=t}}customElements.define("craft-admin-bar",Jt);class Kt extends HTMLElement{_searchForm=null;_resultsElement=null;_onSearchFormSubmit=async t=>{t.preventDefault();const e=this.shadowRoot?.querySelector('input[type="search"]')??null;if(e){const r=await window.adminBarPostRequest(this,"craft-search-search",JSON.stringify({query:e.value}));if(this._resultsElement){let s,o;if(r.searchResultsStatus==="OK"){s=document.getElementById("admin-bar-search-results-template"),o=s.content;const a=document.createElement("ul");r.searchResults.forEach(l=>{const d=o.cloneNode(!0).querySelector("li"),u=d.querySelector("admin-bar-button.edit");l.cpEditUrl?(u.setAttribute("button-href",l.cpEditUrl),u.setAttribute("label-text",l.title)):d.removeChild(u);const h=d.querySelector("admin-bar-button.view"),m=d.querySelector("admin-bar-text.view");l.url??!1?(h.setAttribute("button-href",l.url),h.setAttribute("label-text",l.title),m.remove()):(m.setAttribute("text-content",l.title),h.remove()),a.append(d)}),this._resultsElement.replaceChildren(a)}else s=document.getElementById("admin-bar-search-no-results-template"),o=s.content,this._resultsElement.replaceChildren(o.cloneNode(!0))}}};constructor(){super();const e=document.getElementById("admin-bar-search-template").content;this.attachShadow({mode:"open"}).appendChild(e.cloneNode(!0)),this._searchForm=this.shadowRoot?.querySelector("form")??null,this._resultsElement=this.shadowRoot?.querySelector("form + div")??null}connectedCallback(){this._searchForm?.addEventListener("submit",this._onSearchFormSubmit)}disconnectedCallback(){this._searchForm?.removeEventListener("submit",this._onSearchFormSubmit)}}customElements.define("craft-admin-bar-search",Kt);window.adminBarPostRequest=async(i,t,e="")=>{try{const r=i.closest("craft-admin-bar"),s=await r?.actionRequest(t,e);if(s?.status==="success"){if(s.refreshPage)location.reload();else if(setTimeout(()=>{r&&(r.dataset.apiStatus="ready")},3e3),s.data)return s.data}else throw s?.message}catch(r){console.error(`Admin Bar: ${r}`)}};
