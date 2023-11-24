/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=window,Y=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),X=new WeakMap;let ct=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Y&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=X.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&X.set(t,e))}return e}toString(){return this.cssText}};const _t=e=>new ct(typeof e=="string"?e:e+"",void 0,Q),ut=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new ct(i,e,Q)},yt=(e,t)=>{Y?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{const r=document.createElement("style"),o=R.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=i.cssText,e.appendChild(r)})},tt=Y?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return _t(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j;const z=window,et=z.trustedTypes,At=et?et.emptyScript:"",it=z.reactiveElementPolyfillSupport,K={toAttribute(e,t){switch(t){case Boolean:e=e?At:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},pt=(e,t)=>t!==e&&(t==t||e==e),D={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:pt},J="finalized";let E=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=D){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||D}static finalize(){if(this.hasOwnProperty(J))return!1;this[J]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(tt(r))}else e!==void 0&&t.push(tt(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return yt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=D){var r;const o=this.constructor._$Ep(e,i);if(o!==void 0&&i.reflect===!0){const s=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:K).toAttribute(t,i.type);this._$El=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,o=r._$Ev.get(e);if(o!==void 0&&this._$El!==o){const s=r.getPropertyOptions(o),n=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:K;this._$El=o,this[o]=n.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||pt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,o)=>this[o]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};E[J]=!0,E.elementProperties=new Map,E.elementStyles=[],E.shadowRootOptions={mode:"open"},it==null||it({ReactiveElement:E}),((j=z.reactiveElementVersions)!==null&&j!==void 0?j:z.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I;const L=window,S=L.trustedTypes,rt=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,Z="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,vt="?"+b,wt=`<${vt}>`,A=document,U=()=>A.createComment(""),T=e=>e===null||typeof e!="object"&&typeof e!="function",mt=Array.isArray,Et=e=>mt(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",V=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,st=/>/g,f=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,at=/"/g,gt=/^(?:script|style|textarea|title)$/i,xt=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),_=xt(1),w=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),lt=new WeakMap,y=A.createTreeWalker(A,129,null,!1);function bt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return rt!==void 0?rt.createHTML(t):t}const St=(e,t)=>{const i=e.length-1,r=[];let o,s=t===2?"<svg>":"",n=k;for(let h=0;h<i;h++){const a=e[h];let l,d,c=-1,p=0;for(;p<a.length&&(n.lastIndex=p,d=n.exec(a),d!==null);)p=n.lastIndex,n===k?d[1]==="!--"?n=ot:d[1]!==void 0?n=st:d[2]!==void 0?(gt.test(d[2])&&(o=RegExp("</"+d[2],"g")),n=f):d[3]!==void 0&&(n=f):n===f?d[0]===">"?(n=o??k,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,l=d[1],n=d[3]===void 0?f:d[3]==='"'?at:nt):n===at||n===nt?n=f:n===ot||n===st?n=k:(n=f,o=void 0);const v=n===f&&e[h+1].startsWith("/>")?" ":"";s+=n===k?a+wt:c>=0?(r.push(l),a.slice(0,c)+Z+a.slice(c)+b+v):a+b+(c===-2?(r.push(void 0),h):v)}return[bt(e,s+(e[i]||"<?>")+(t===2?"</svg>":"")),r]};class H{constructor({strings:t,_$litType$:i},r){let o;this.parts=[];let s=0,n=0;const h=t.length-1,a=this.parts,[l,d]=St(t,i);if(this.el=H.createElement(l,r),y.currentNode=this.el.content,i===2){const c=this.el.content,p=c.firstChild;p.remove(),c.append(...p.childNodes)}for(;(o=y.nextNode())!==null&&a.length<h;){if(o.nodeType===1){if(o.hasAttributes()){const c=[];for(const p of o.getAttributeNames())if(p.endsWith(Z)||p.startsWith(b)){const v=d[n++];if(c.push(p),v!==void 0){const ft=o.getAttribute(v.toLowerCase()+Z).split(b),N=/([.?@])?(.*)/.exec(v);a.push({type:1,index:s,name:N[2],strings:ft,ctor:N[1]==="."?Pt:N[1]==="?"?Ut:N[1]==="@"?Tt:M})}else a.push({type:6,index:s})}for(const p of c)o.removeAttribute(p)}if(gt.test(o.tagName)){const c=o.textContent.split(b),p=c.length-1;if(p>0){o.textContent=S?S.emptyScript:"";for(let v=0;v<p;v++)o.append(c[v],U()),y.nextNode(),a.push({type:2,index:++s});o.append(c[p],U())}}}else if(o.nodeType===8)if(o.data===vt)a.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(b,c+1))!==-1;)a.push({type:7,index:s}),c+=b.length-1}s++}}static createElement(t,i){const r=A.createElement("template");return r.innerHTML=t,r}}function C(e,t,i=e,r){var o,s,n,h;if(t===w)return t;let a=r!==void 0?(o=i._$Co)===null||o===void 0?void 0:o[r]:i._$Cl;const l=T(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,i,r)),r!==void 0?((n=(h=i)._$Co)!==null&&n!==void 0?n:h._$Co=[])[r]=a:i._$Cl=a),a!==void 0&&(t=C(e,a._$AS(e,t.values),a,r)),t}class Ct{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:r},parts:o}=this._$AD,s=((i=t==null?void 0:t.creationScope)!==null&&i!==void 0?i:A).importNode(r,!0);y.currentNode=s;let n=y.nextNode(),h=0,a=0,l=o[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new O(n,n.nextSibling,this,t):l.type===1?d=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(d=new Ht(n,this,t)),this._$AV.push(d),l=o[++a]}h!==(l==null?void 0:l.index)&&(n=y.nextNode(),h++)}return y.currentNode=A,s}v(t){let i=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}}class O{constructor(t,i,r,o){var s;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=o,this._$Cp=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=C(this,t,i),T(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Et(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var i;const{values:r,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=H.createElement(bt(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.v(r);else{const n=new Ct(s,this),h=n.u(this.options);n.v(r),this.$(h),this._$AH=n}}_$AC(t){let i=lt.get(t.strings);return i===void 0&&lt.set(t.strings,i=new H(t)),i}T(t){mt(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,o=0;for(const s of t)o===i.length?i.push(r=new O(this.k(U()),this.k(U()),this,this.options)):r=i[o],r._$AI(s),o++;o<i.length&&(this._$AR(r&&r._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cp=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}}class M{constructor(t,i,r,o,s){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,r,o){const s=this.strings;let n=!1;if(s===void 0)t=C(this,t,i,0),n=!T(t)||t!==this._$AH&&t!==w,n&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=C(this,h[r+a],i,a),l===w&&(l=this._$AH[a]),n||(n=!T(l)||l!==this._$AH[a]),l===u?t=u:t!==u&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}n&&!o&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pt extends M{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const kt=S?S.emptyScript:"";class Ut extends M{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,kt):this.element.removeAttribute(this.name)}}class Tt extends M{constructor(t,i,r,o,s){super(t,i,r,o,s),this.type=5}_$AI(t,i=this){var r;if((t=(r=C(this,t,i,0))!==null&&r!==void 0?r:u)===w)return;const o=this._$AH,s=t===u&&o!==u||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==u&&(o===u||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,r;typeof this._$AH=="function"?this._$AH.call((r=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class Ht{constructor(t,i,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const ht=L.litHtmlPolyfillSupport;ht==null||ht(H,O),((I=L.litHtmlVersions)!==null&&I!==void 0?I:L.litHtmlVersions=[]).push("2.8.0");const Ot=(e,t,i)=>{var r,o;const s=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:t;let n=s._$litPart$;if(n===void 0){const h=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=n=new O(t.insertBefore(U(),h),h,void 0,i??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W,G;class x extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const r=super.createRenderRoot();return(t=(i=this.renderOptions).renderBefore)!==null&&t!==void 0||(i.renderBefore=r.firstChild),r}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ot(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return w}}x.finalized=!0,x._$litElement$=!0,(W=globalThis.litElementHydrateSupport)===null||W===void 0||W.call(globalThis,{LitElement:x});const dt=globalThis.litElementPolyfillSupport;dt==null||dt({LitElement:x});((G=globalThis.litElementVersions)!==null&&G!==void 0?G:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Rt=e=>(...t)=>({_$litDirective$:e,values:t});let zt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=Rt(class extends zt{constructor(e){var t;if(super(e),e.type!==Nt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,r;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((i=this.nt)===null||i===void 0)&&i.has(s))&&this.it.add(s);return this.render(t)}const o=e.element.classList;this.it.forEach(s=>{s in t||(o.remove(s),this.it.delete(s))});for(const s in t){const n=!!t[s];n===this.it.has(s)||!((r=this.nt)===null||r===void 0)&&r.has(s)||(n?(o.add(s),this.it.add(s)):(o.remove(s),this.it.delete(s)))}return w}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=e=>t=>typeof t=="function"?((i,r)=>(customElements.define(i,r),r))(e,t):((i,r)=>{const{kind:o,elements:s}=r;return{kind:o,elements:s,finisher(n){customElements.define(i,n)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}},Mt=(e,t,i)=>{t.constructor.createProperty(i,e)};function g(e){return(t,i)=>i!==void 0?Mt(e,t,i):Lt(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q;((q=window.HTMLSlotElement)===null||q===void 0?void 0:q.prototype.assignedElements)!=null;var Bt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,B=(e,t,i,r)=>{for(var o=r>1?void 0:r?jt(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(o=(r?n(t,i,o):n(o))||o);return r&&o&&Bt(t,i,o),o};let P=class extends x{constructor(){super(...arguments),this.label="",this.isLogoutButton=!1}render(){const e={"admin-bar-button":!0,"admin-bar-button--el-a":!1,"admin-bar-button--el-button":!1,"admin-bar-button--el-select":!1,"admin-bar-button--logout":this.isLogoutButton},t=_`<slot name="label-before"></slot><slot><span>${this.label}</span></slot
      ><slot name="label-after"></slot>`;return this.href?(e["admin-bar-button--el-a"]=!0,_`<a class="${F(e)}" href="${this.href}">${t}</a>`):(e["admin-bar-button--el-button"]=!0,_`<button class="${F(e)}">${t}</button>`)}};P.styles=ut`
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
  `;B([g({attribute:"button-href",type:[String,Function,Array]})],P.prototype,"href",2);B([g({attribute:"label-text"})],P.prototype,"label",2);B([g({attribute:"logout-button",type:Boolean})],P.prototype,"isLogoutButton",2);P=B([$t("admin-bar-button")],P);var Dt=Object.defineProperty,It=Object.getOwnPropertyDescriptor,$=(e,t,i,r)=>{for(var o=r>1?void 0:r?It(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(o=(r?n(t,i,o):n(o))||o);return r&&o&&Dt(t,i,o),o};let m=class extends x{constructor(){super(...arguments),this.avatarAlt="Avatar of logged in user.",this.logoutHref="#",this.logoutLabel="Sign out",this.showEnvironment=!1,this.showGreeting=!1,this.showLogout=!1}render(){const e={"admin-bar":!0,"admin-bar--environment":this.showEnvironment,"admin-bar--greeting":this.showGreeting,"admin-bar--logout":this.showLogout},t=this.showGreeting?_`
          ${this.avatarSrc?_`<img src="${this.avatarSrc}" alt="${this.avatarAlt}" />`:u}
          <span><slot name="greeting">Hello</slot></span>
        `:u,i=this.showLogout?_`<slot name="logout"
          ><admin-bar-button
            logout-button
            button-href="${this.logoutHref}"
            label-text="${this.logoutLabel}"
          ></admin-bar-button
        ></slot>`:u;return _`
      <div class="${F(e)}">
        <div class="environment"></div>
        <div class="greeting">${t}</div>
        <div class="buttons"><slot></slot></div>
        <div class="logout">${i}</div>
      </div>
    `}};m.styles=ut`
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
  `;$([g({attribute:"avatar-alt"})],m.prototype,"avatarAlt",2);$([g({attribute:"avatar-src"})],m.prototype,"avatarSrc",2);$([g({attribute:"logout-href"})],m.prototype,"logoutHref",2);$([g({attribute:"logout-label"})],m.prototype,"logoutLabel",2);$([g({attribute:"show-environment",type:Boolean})],m.prototype,"showEnvironment",2);$([g({attribute:"show-greeting",type:Boolean})],m.prototype,"showGreeting",2);$([g({attribute:"show-logout",type:Boolean})],m.prototype,"showLogout",2);m=$([$t("admin-bar")],m);
