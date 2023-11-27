/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,W=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),J=new WeakMap;let at=class{constructor(n,t,e){if(this._$cssResult$=!0,e!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=t}get styleSheet(){let n=this.o;const t=this.t;if(W&&n===void 0){const e=t!==void 0&&t.length===1;e&&(n=J.get(t)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),e&&J.set(t,n))}return n}toString(){return this.cssText}};const mt=n=>new at(typeof n=="string"?n:n+"",void 0,q),lt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,r,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[o+1],n[0]);return new at(e,n,q)},vt=(n,t)=>{if(W)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=N.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,n.appendChild(i)}},K=W?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return mt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:bt,defineProperty:$t,getOwnPropertyDescriptor:ft,getOwnPropertyNames:_t,getOwnPropertySymbols:yt,getPrototypeOf:At}=Object,S=globalThis,Z=S.trustedTypes,wt=Z?Z.emptyScript:"",F=S.reactiveElementPolyfillSupport,U=(n,t)=>n,z={toAttribute(n,t){switch(t){case Boolean:n=n?wt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},G=(n,t)=>!bt(n,t),Y={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:G};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Y){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&$t(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=ft(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get(){return r==null?void 0:r.call(this)},set(s){const l=r==null?void 0:r.call(this);o.call(this,s),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Y}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const t=At(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,i=[..._t(e),...yt(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(K(r))}else t!==void 0&&e.push(K(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$E_)==null||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){var i;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const s=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:z).toAttribute(e,r.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){var i;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:z;this._$Em=o,this[o]=l.fromAttribute(e,s.type),this._$Em=null}}requestUpdate(t,e,i,r=!1,o){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??G)(r?o:this[t],e))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,s]of r)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],s)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$E_)==null||t.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(i)):this._$ET()}catch(r){throw e=!1,this._$ET(),r}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$E_)==null||e.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[U("elementProperties")]=new Map,E[U("finalized")]=new Map,F==null||F({ReactiveElement:E}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,B=L.trustedTypes,Q=B?B.createPolicy("lit-html",{createHTML:n=>n}):void 0,ht="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,dt="?"+b,Et=`<${dt}>`,A=document,O=()=>A.createComment(""),H=n=>n===null||typeof n!="object"&&typeof n!="function",ct=Array.isArray,xt=n=>ct(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",I=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,tt=/>/g,f=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),et=/'/g,it=/"/g,ut=/^(?:script|style|textarea|title)$/i,St=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),_=St(1),w=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),rt=new WeakMap,y=A.createTreeWalker(A,129);function pt(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Q!==void 0?Q.createHTML(t):t}const Ct=(n,t)=>{const e=n.length-1,i=[];let r,o=t===2?"<svg>":"",s=T;for(let l=0;l<e;l++){const a=n[l];let c,u,h=-1,m=0;for(;m<a.length&&(s.lastIndex=m,u=s.exec(a),u!==null);)m=s.lastIndex,s===T?u[1]==="!--"?s=X:u[1]!==void 0?s=tt:u[2]!==void 0?(ut.test(u[2])&&(r=RegExp("</"+u[2],"g")),s=f):u[3]!==void 0&&(s=f):s===f?u[0]===">"?(s=r??T,h=-1):u[1]===void 0?h=-2:(h=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?f:u[3]==='"'?it:et):s===it||s===et?s=f:s===X||s===tt?s=T:(s=f,r=void 0);const v=s===f&&n[l+1].startsWith("/>")?" ":"";o+=s===T?a+Et:h>=0?(i.push(c),a.slice(0,h)+ht+a.slice(h)+b+v):a+b+(h===-2?l:v)}return[pt(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};class k{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,s=0;const l=t.length-1,a=this.parts,[c,u]=Ct(t,e);if(this.el=k.createElement(c,i),y.currentNode=this.el.content,e===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=y.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(ht)){const m=u[s++],v=r.getAttribute(h).split(b),M=/([.?@])?(.*)/.exec(m);a.push({type:1,index:o,name:M[2],strings:v,ctor:M[1]==="."?Tt:M[1]==="?"?Ut:M[1]==="@"?Ot:j}),r.removeAttribute(h)}else h.startsWith(b)&&(a.push({type:6,index:o}),r.removeAttribute(h));if(ut.test(r.tagName)){const h=r.textContent.split(b),m=h.length-1;if(m>0){r.textContent=B?B.emptyScript:"";for(let v=0;v<m;v++)r.append(h[v],O()),y.nextNode(),a.push({type:2,index:++o});r.append(h[m],O())}}}else if(r.nodeType===8)if(r.data===dt)a.push({type:2,index:o});else{let h=-1;for(;(h=r.data.indexOf(b,h+1))!==-1;)a.push({type:7,index:o}),h+=b.length-1}o++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function C(n,t,e=n,i){var r,o;if(t===w)return t;let s=i!==void 0?(r=e._$Co)==null?void 0:r[i]:e._$Cl;const l=H(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==l&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),l===void 0?s=void 0:(s=new l(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=C(n,s._$AS(n,t.values),s,i)),t}class Pt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=((t==null?void 0:t.creationScope)??A).importNode(e,!0);y.currentNode=r;let o=y.nextNode(),s=0,l=0,a=i[0];for(;a!==void 0;){if(s===a.index){let c;a.type===2?c=new R(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Ht(o,this,t)),this._$AV.push(c),a=i[++l]}s!==(a==null?void 0:a.index)&&(o=y.nextNode(),s++)}return y.currentNode=A,r}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class R{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),H(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):xt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==d&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=k.createElement(pt(r.h,r.h[0]),this.options)),r);if(((e=this._$AH)==null?void 0:e._$AD)===o)this._$AH.p(i);else{const s=new Pt(o,this),l=s.u(this.options);s.p(i),this.$(l),this._$AH=s}}_$AC(t){let e=rt.get(t.strings);return e===void 0&&rt.set(t.strings,e=new k(t)),e}T(t){ct(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new R(this.k(O()),this.k(O()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,r){const o=this.strings;let s=!1;if(o===void 0)t=C(this,t,e,0),s=!H(t)||t!==this._$AH&&t!==w,s&&(this._$AH=t);else{const l=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=C(this,l[i+a],e,a),c===w&&(c=this._$AH[a]),s||(s=!H(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}s&&!r&&this.O(t)}O(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Tt extends j{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===d?void 0:t}}class Ut extends j{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Ot extends j{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??d)===w)return;const i=this._$AH,r=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==d&&(i===d||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ht{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const nt=L.litHtmlPolyfillSupport;nt==null||nt(k,R),(L.litHtmlVersions??(L.litHtmlVersions=[])).push("3.1.0");const kt=(n,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let r=i._$litPart$;if(r===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=r=new R(t.insertBefore(O(),o),o,void 0,e??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class x extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return w}}var ot;x._$litElement$=!0,x.finalized=!0,(ot=globalThis.litElementHydrateSupport)==null||ot.call(globalThis,{LitElement:x});const st=globalThis.litElementPolyfillSupport;st==null||st({LitElement:x});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Mt=n=>(...t)=>({_$litDirective$:n,values:t});class Nt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=Mt(class extends Nt{constructor(n){var t;if(super(n),n.type!==Rt.ATTRIBUTE||n.name!=="class"||((t=n.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(t=>n[t]).join(" ")+" "}update(n,[t]){var e,i;if(this.it===void 0){this.it=new Set,n.strings!==void 0&&(this.st=new Set(n.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((e=this.st)!=null&&e.has(o))&&this.it.add(o);return this.render(t)}const r=n.element.classList;for(const o of this.it)o in t||(r.remove(o),this.it.delete(o));for(const o in t){const s=!!t[o];s===this.it.has(o)||(i=this.st)!=null&&i.has(o)||(s?(r.add(o),this.it.add(o)):(r.remove(o),this.it.delete(o)))}return w}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:G},Lt=(n=zt,t,e)=>{const{kind:i,metadata:r}=e;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(e.name,n),i==="accessor"){const{name:s}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,n)},init(l){return l!==void 0&&this.C(s,void 0,n),l}}}if(i==="setter"){const{name:s}=e;return function(l){const a=this[s];t.call(this,l),this.requestUpdate(s,a,n)}}throw Error("Unsupported decorator location: "+i)};function g(n){return(t,e)=>typeof e=="object"?Lt(n,t,e):((i,r,o)=>{const s=r.hasOwnProperty(o);return r.constructor.createProperty(o,s?{...i,wrapped:!0}:i),s?Object.getOwnPropertyDescriptor(r,o):void 0})(n,t,e)}var Bt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,D=(n,t,e,i)=>{for(var r=i>1?void 0:i?jt(t,e):t,o=n.length-1,s;o>=0;o--)(s=n[o])&&(r=(i?s(t,e,r):s(r))||r);return i&&r&&Bt(t,e,r),r};let P=class extends x{constructor(){super(...arguments),this.label="",this.isLogoutButton=!1}render(){const n={"admin-bar-button":!0,"admin-bar-button--el-a":!1,"admin-bar-button--el-button":!1,"admin-bar-button--el-select":!1,"admin-bar-button--logout":this.isLogoutButton},t=_`<slot name="label-before"></slot><slot><span>${this.label}</span></slot
      ><slot name="label-after"></slot>`;return this.href?(n["admin-bar-button--el-a"]=!0,_`<a class="${V(n)}" href="${this.href}">${t}</a>`):(n["admin-bar-button--el-button"]=!0,_`<button class="${V(n)}">${t}</button>`)}};P.styles=lt`
    :host {
      --padding-left: 10px;
      --padding-right: 10px;
      --margin: 4px;
      --border-radius: 4px;
    }
    :host(.flat) {
      --margin: 0px;
      --border-radius: 0;
      --admin-bar-shadow-elements: none;
    }
    .admin-bar-button {
      display: flex;
      flex-wrap: nowrap;
      gap: 5px;
      align-items: center;
      margin: var(--margin);
      border-radius: var(--border-radius);
      padding: 0 clamp(4px, 2vw, 15px);
      height: calc(var(--admin-bar-height, 43px) - calc(var(--margin) * 2));
      background-color: var(--admin-bar-button-color-bg, transparent);
      appearance: none;
      border: none;
      outline-color: var(--admin-bar-color-highlight);
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
        box-shadow: var(--admin-bar-shadow-elements);
      }
      &:not(.admin-bar-button--logout):hover {
        --admin-bar-button-color-bg: var(--admin-bar-button-color-text, white);
        color: var(--admin-bar-color-highlight, oklch(0.6 0.4 83));
      }

      &.admin-bar-button--logout {
        padding: 0 clamp(10px, 4vw, 25px);

        &:hover {
          --admin-bar-button-color-bg: var(--admin-bar-color-highlight-logout, var(--admin-bar-color-highlight));
        }
      }
    }
  `;D([g({attribute:"button-href",type:[String,Function,Array]})],P.prototype,"href",2);D([g({attribute:"label-text"})],P.prototype,"label",2);D([g({attribute:"logout-button",type:Boolean})],P.prototype,"isLogoutButton",2);P=D([gt("admin-bar-button")],P);var Dt=Object.defineProperty,It=Object.getOwnPropertyDescriptor,$=(n,t,e,i)=>{for(var r=i>1?void 0:i?It(t,e):t,o=n.length-1,s;o>=0;o--)(s=n[o])&&(r=(i?s(t,e,r):s(r))||r);return i&&r&&Dt(t,e,r),r};let p=class extends x{constructor(){super(...arguments),this.avatarAlt="Avatar of logged in user.",this.logoutHref="#",this.logoutLabel="Sign out",this.showEnvironment=!1,this.showGreeting=!1,this.showLogout=!1}render(){const n={"admin-bar":!0,"admin-bar--environment":this.showEnvironment,"admin-bar--greeting":this.showGreeting,"admin-bar--logout":this.showLogout},t=this.showGreeting?_`
          ${this.avatarSrc?_`<img src="${this.avatarSrc}" alt="${this.avatarAlt}" />`:d}
          <span><slot name="greeting">Hello</slot></span>
        `:d,e=this.showLogout?_`<slot name="logout"
          ><admin-bar-button
            logout-button
            button-href="${this.logoutHref}"
            label-text="${this.logoutLabel}"
          ></admin-bar-button
        ></slot>`:d;return _`
      <div class="${V(n)}">
        <div class="environment"></div>
        <div class="greeting">${t}</div>
        <div class="buttons"><slot></slot></div>
        <div class="logout">${e}</div>
      </div>
    `}};p.styles=lt`
    :host {
      --environment-height: 0px;
      container-type: size;
      width: var(--admin-bar-width, 100%);
      height: calc(var(--admin-bar-height, 43px) + var(--environment-height));
    }
    :host([show-environment]) {
      --environment-height: var(--admin-bar-environment-height);
    }
    :host(.rtl) {
      direction: rtl;
    }
    :host(.fixed) {
      position: var(--admin-bar-position, fixed);
      top: var(--admin-bar-top, 0);
      right: var(--admin-bar-right, 0);
      left: var(--admin-bar-left, 0);
      z-index: var(--admin-bar-z-index, 1);
    }
    :host(.sticky) {
      position: var(--admin-bar-position, sticky);
      top: var(--admin-bar-top, 0);
      right: var(--admin-bar-right, 0);
      left: var(--admin-bar-left, 0);
      z-index: var(--admin-bar-z-index, 1);
    }
    :host(.bottom) {
      top: var(--admin-bar-top, auto);
      right: var(--admin-bar-right, 0);
      bottom: var(--admin-bar-bottom, 0);
      left: var(--admin-bar-left, 0);
    }

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
      grid-template-rows: 0 var(--admin-bar-height);
      background: var(--admin-bar-bg);
      backdrop-filter: blur(20px) saturate(200%);
      box-shadow: var(--admin-bar-shadow);
      font-family: var(--admin-bar-font-stack);
      font-size: var(--admin-bar-font-size, 0.9rem);
      color: var(--admin-bar-color-text, rgba(255, 255, 255, 0.8));

      &.admin-bar--environment {
        grid-template-rows: var(--environment-height) var(--admin-bar-height);
      }
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
      --grid-template-columns: 1fr;
      grid-area: greeting;
      display: grid;
      grid-template-columns: var(--grid-template-columns);
      gap: 7px;
      align-items: center;
      margin-block-start: 0.5rem;
      margin-block-end: 0.5rem;
      padding: 0 clamp(6px, 2vw, 15px);
      white-space: nowrap;

      &:has(img) {
        --grid-template-columns: var(--admin-bar-avatar-size, 25px) 1fr;
      }

      & img {
        width: var(--admin-bar-avatar-size, 0);
        height: var(--admin-bar-avatar-size);
        background-size: cover;
        border-radius: 50%;
        box-shadow: var(--admin-bar-shadow-elements);
      }

      @container (max-width: 700px) {
        &:has(img) {
          --grid-template-columns: var(--admin-bar-avatar-size, 25px);
          & *:not(img) {
            display: none;
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
  `;$([g({attribute:"avatar-alt"})],p.prototype,"avatarAlt",2);$([g({attribute:"avatar-src"})],p.prototype,"avatarSrc",2);$([g({attribute:"logout-href"})],p.prototype,"logoutHref",2);$([g({attribute:"logout-label"})],p.prototype,"logoutLabel",2);$([g({attribute:"show-environment",type:Boolean})],p.prototype,"showEnvironment",2);$([g({attribute:"show-greeting",type:Boolean})],p.prototype,"showGreeting",2);$([g({attribute:"show-logout",type:Boolean})],p.prototype,"showLogout",2);p=$([gt("admin-bar")],p);
