var _t=Object.defineProperty;var yt=(s,t,e)=>t in s?_t(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var $=(s,t,e)=>yt(s,typeof t!="symbol"?t+"":t,e);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,Y=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),Q=new WeakMap;let ut=class{constructor(s,t,e){if(this._$cssResult$=!0,e!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=s,this.t=t}get styleSheet(){let s=this.o;const t=this.t;if(Y&&s===void 0){const e=t!==void 0&&t.length===1;e&&(s=Q.get(t)),s===void 0&&((this.o=s=new CSSStyleSheet).replaceSync(this.cssText),e&&Q.set(t,s))}return s}toString(){return this.cssText}};const xt=s=>new ut(typeof s=="string"?s:s+"",void 0,J),G=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((r,i,o)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[o+1],s[0]);return new ut(e,s,J)},At=(s,t)=>{if(Y)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),i=z.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,s.appendChild(r)}},tt=Y?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return xt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:wt,defineProperty:St,getOwnPropertyDescriptor:Et,getOwnPropertyNames:kt,getOwnPropertySymbols:Ct,getPrototypeOf:Pt}=Object,U=globalThis,et=U.trustedTypes,Tt=et?et.emptyScript:"",rt=U.reactiveElementPolyfillSupport,H=(s,t)=>s,D={toAttribute(s,t){switch(t){case Boolean:s=s?Tt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},K=(s,t)=>!wt(s,t),it={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:K};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),U.litPropertyMetadata??(U.litPropertyMetadata=new WeakMap);class T extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=it){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);i!==void 0&&St(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:o}=Et(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get(){return i==null?void 0:i.call(this)},set(a){const l=i==null?void 0:i.call(this);o.call(this,a),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??it}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;const t=Pt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){const e=this.properties,r=[...kt(e),...Ct(e)];for(const i of r)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,i]of e)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const i=this._$Eu(e,r);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)e.unshift(tt(i))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return At(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var r;const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){const a=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:D).toAttribute(e,i.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,e){var r;const i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=i.getPropertyOptions(o),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)==null?void 0:r.fromAttribute)!==void 0?a.converter:D;this._$Em=o,this[o]=l.fromAttribute(e,a.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??K)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,a]of i)a.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[H("elementProperties")]=new Map,T[H("finalized")]=new Map,rt==null||rt({ReactiveElement:T}),(U.reactiveElementVersions??(U.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,F=I.trustedTypes,st=F?F.createPolicy("lit-html",{createHTML:s=>s}):void 0,bt="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,mt="?"+y,Ut=`<${mt}>`,E=document,M=()=>E.createComment(""),N=s=>s===null||typeof s!="object"&&typeof s!="function",X=Array.isArray,Ot=s=>X(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",W=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,ot=/>/g,A=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,lt=/"/g,gt=/^(?:script|style|textarea|title)$/i,Rt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),c=Rt(1),k=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),dt=new WeakMap,w=E.createTreeWalker(E,129);function vt(s,t){if(!X(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return st!==void 0?st.createHTML(t):t}const Ht=(s,t)=>{const e=s.length-1,r=[];let i,o=t===2?"<svg>":t===3?"<math>":"",a=R;for(let l=0;l<e;l++){const n=s[l];let h,b,d=-1,m=0;for(;m<n.length&&(a.lastIndex=m,b=a.exec(n),b!==null);)m=a.lastIndex,a===R?b[1]==="!--"?a=at:b[1]!==void 0?a=ot:b[2]!==void 0?(gt.test(b[2])&&(i=RegExp("</"+b[2],"g")),a=A):b[3]!==void 0&&(a=A):a===A?b[0]===">"?(a=i??R,d=-1):b[1]===void 0?d=-2:(d=a.lastIndex-b[2].length,h=b[1],a=b[3]===void 0?A:b[3]==='"'?lt:nt):a===lt||a===nt?a=A:a===at||a===ot?a=R:(a=A,i=void 0);const g=a===A&&s[l+1].startsWith("/>")?" ":"";o+=a===R?n+Ut:d>=0?(r.push(h),n.slice(0,d)+bt+n.slice(d)+y+g):n+y+(d===-2?l:g)}return[vt(s,o+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class L{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let o=0,a=0;const l=t.length-1,n=this.parts,[h,b]=Ht(t,e);if(this.el=L.createElement(h,r),w.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=w.nextNode())!==null&&n.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(bt)){const m=b[a++],g=i.getAttribute(d).split(y),x=/([.?@])?(.*)/.exec(m);n.push({type:1,index:o,name:x[2],strings:g,ctor:x[1]==="."?Nt:x[1]==="?"?Lt:x[1]==="@"?jt:V}),i.removeAttribute(d)}else d.startsWith(y)&&(n.push({type:6,index:o}),i.removeAttribute(d));if(gt.test(i.tagName)){const d=i.textContent.split(y),m=d.length-1;if(m>0){i.textContent=F?F.emptyScript:"";for(let g=0;g<m;g++)i.append(d[g],M()),w.nextNode(),n.push({type:2,index:++o});i.append(d[m],M())}}}else if(i.nodeType===8)if(i.data===mt)n.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(y,d+1))!==-1;)n.push({type:7,index:o}),d+=y.length-1}o++}}static createElement(t,e){const r=E.createElement("template");return r.innerHTML=t,r}}function O(s,t,e=s,r){var i,o;if(t===k)return t;let a=r!==void 0?(i=e._$Co)==null?void 0:i[r]:e._$Cl;const l=N(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((o=a==null?void 0:a._$AO)==null||o.call(a,!1),l===void 0?a=void 0:(a=new l(s),a._$AT(s,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=a:e._$Cl=a),a!==void 0&&(t=O(s,a._$AS(s,t.values),a,r)),t}class Mt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??E).importNode(e,!0);w.currentNode=i;let o=w.nextNode(),a=0,l=0,n=r[0];for(;n!==void 0;){if(a===n.index){let h;n.type===2?h=new j(o,o.nextSibling,this,t):n.type===1?h=new n.ctor(o,n.name,n.strings,this,t):n.type===6&&(h=new Bt(o,this,t)),this._$AV.push(h),n=r[++l]}a!==(n==null?void 0:n.index)&&(o=w.nextNode(),a++)}return w.currentNode=E,i}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class j{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),N(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==k&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ot(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=L.createElement(vt(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)==null?void 0:e._$AD)===o)this._$AH.p(r);else{const a=new Mt(o,this),l=a.u(this.options);a.p(r),this.T(l),this._$AH=a}}_$AC(t){let e=dt.get(t.strings);return e===void 0&&dt.set(t.strings,e=new L(t)),e}k(t){X(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const o of t)i===e.length?e.push(r=new j(this.O(M()),this.O(M()),this,this.options)):r=e[i],r._$AI(o),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}_$AI(t,e=this,r,i){const o=this.strings;let a=!1;if(o===void 0)t=O(this,t,e,0),a=!N(t)||t!==this._$AH&&t!==k,a&&(this._$AH=t);else{const l=t;let n,h;for(t=o[0],n=0;n<o.length-1;n++)h=O(this,l[r+n],e,n),h===k&&(h=this._$AH[n]),a||(a=!N(h)||h!==this._$AH[n]),h===p?t=p:t!==p&&(t+=(h??"")+o[n+1]),this._$AH[n]=h}a&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Nt extends V{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Lt extends V{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class jt extends V{constructor(t,e,r,i,o){super(t,e,r,i,o),this.type=5}_$AI(t,e=this){if((t=O(this,t,e,0)??p)===k)return;const r=this._$AH,i=t===p&&r!==p||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==p&&(r===p||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Bt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const ht=I.litHtmlPolyfillSupport;ht==null||ht(L,j),(I.litHtmlVersions??(I.litHtmlVersions=[])).push("3.2.1");const zt=(s,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;r._$litPart$=i=new j(t.insertBefore(M(),o),o,void 0,e??{})}return i._$AI(s),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let S=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const t=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=t.firstChild),t}update(s){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(s),this._$Do=zt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var s;super.connectedCallback(),(s=this._$Do)==null||s.setConnected(!0)}disconnectedCallback(){var s;super.disconnectedCallback(),(s=this._$Do)==null||s.setConnected(!1)}render(){return k}};var ct;S._$litElement$=!0,S.finalized=!0,(ct=globalThis.litElementHydrateSupport)==null||ct.call(globalThis,{LitElement:S});const pt=globalThis.litElementPolyfillSupport;pt==null||pt({LitElement:S});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt={ATTRIBUTE:1},Dt=s=>(...t)=>({_$litDirective$:s,values:t});class It{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=Dt(class extends It{constructor(s){var t;if(super(s),s.type!==qt.ATTRIBUTE||s.name!=="class"||((t=s.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(t=>s[t]).join(" ")+" "}update(s,[t]){var e,r;if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((e=this.nt)!=null&&e.has(o))&&this.st.add(o);return this.render(t)}const i=s.element.classList;for(const o of this.st)o in t||(i.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||(r=this.nt)!=null&&r.has(o)||(a?(i.add(o),this.st.add(o)):(i.remove(o),this.st.delete(o)))}return k}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:K},Gt=(s=Ft,t,e)=>{const{kind:r,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(e.name,s),r==="accessor"){const{name:a}=e;return{set(l){const n=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,n,s)},init(l){return l!==void 0&&this.P(a,void 0,s),l}}}if(r==="setter"){const{name:a}=e;return function(l){const n=this[a];t.call(this,l),this.requestUpdate(a,n,s)}}throw Error("Unsupported decorator location: "+r)};function u(s){return(t,e)=>typeof e=="object"?Gt(s,t,e):((r,i,o)=>{const a=i.hasOwnProperty(o);return i.constructor.createProperty(o,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(i,o):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(s){return u({...s,state:!0,attribute:!1})}var Vt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,B=(s,t,e,r)=>{for(var i=r>1?void 0:r?Wt(t,e):t,o=s.length-1,a;o>=0;o--)(a=s[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&Vt(t,e,i),i};let C=class extends S{constructor(){super(...arguments),this.label="",this.isLogoutButton=!1,this._hasPopoverSlot=!1}handlePopoverSlotchange(s){const t=s.target.assignedNodes({flatten:!0});this._hasPopoverSlot=t.length>0}render(){const s={"admin-bar-button":!0,"admin-bar-button--el-a":!1,"admin-bar-button--el-button":!1,"admin-bar-button--el-select":!1,"admin-bar-button--logout":this.isLogoutButton},t=c`<slot name="before-label"></slot><slot name="label-before"></slot
      ><slot>${this.label??!1?c`<span>${this.label}</span>`:p}</slot><slot name="label-after"></slot
      ><slot name="after-label"></slot>`;return this.href?(s["admin-bar-button--el-a"]=!0,c`<a class="${q(s)}" href="${this.href}">${t}</a>`):(s["admin-bar-button--el-button"]=!0,this._hasPopoverSlot?c`<button class="${q(s)}" popovertarget="admin-bar-button-popover">
          ${t}
        </button>
        <div popover id="admin-bar-button-popover" part="popover">
          <div class="glass-surface"></div>
          <div class="glass-edge"></div>
          <slot name="popover" @slotchange="${this.handlePopoverSlotchange}"></slot>
        </div>`:c`<button class="${q(s)}">${t}</button
      ><slot name="popover" @slotchange="${this.handlePopoverSlotchange}"></slot>`)}};C.styles=G`
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
  `;B([u({attribute:"button-href",type:[String,Function,Array]})],C.prototype,"href",2);B([u({attribute:"label-text"})],C.prototype,"label",2);B([u({attribute:"logout-button",type:Boolean})],C.prototype,"isLogoutButton",2);B([ft()],C.prototype,"_hasPopoverSlot",2);C=B([Z("admin-bar-button")],C);function Yt(){return G`
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
  `}var Jt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,f=(s,t,e,r)=>{for(var i=r>1?void 0:r?Kt(t,e):t,o=s.length-1,a;o>=0;o--)(a=s[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&Jt(t,e,i),i};let v=class extends S{constructor(){super(...arguments),this.avatarAlt="Avatar of logged in user.",this.greetingText="Hello",this.logoutHref="#",this.logoutLabel="Sign out",this.showEnvironment=!1,this.showGreeting=!1,this.showLogout=!1,this._hasGreetingPopoverSlot=!1}handleGreetingPopoverSlotchange(s){const t=s.target.assignedNodes({flatten:!0});this._hasGreetingPopoverSlot=t.length>0}render(){const s={"admin-bar":!0,"admin-bar--environment":this.showEnvironment,"admin-bar--greeting":this.showGreeting,"admin-bar--logout":this.showLogout},t=this.showGreeting?c`<div class="greeting">
          ${this.avatarSrc?c`<img alt="${this.avatarAlt}" src="${this.avatarSrc}" width="25px" height="25px" part="avatar" />`:p}
          <span><slot name="greeting">${this.greetingText}</slot></span>
        </div>`:p,e=this._hasGreetingPopoverSlot?c`
          <admin-bar-button>
            ${t}
            <div slot="popover">
              <slot name="greeting-popover" @slotchange="${this.handleGreetingPopoverSlotchange}"></slot>
            </div>
          </admin-bar-button>
        `:c`${t}<slot
            name="greeting-popover"
            @slotchange="${this.handleGreetingPopoverSlotchange}"
          ></slot>`,r=this.showLogout?c`<slot name="logout"
          ><admin-bar-button
            logout-button
            button-href="${this.logoutHref}"
            label-text="${this.logoutLabel}"
          ></admin-bar-button
        ></slot>`:p;return c`
      <nav class="${q(s)}">
        <div class="glass-surface"></div>
        <div class="glass-edge"></div>
        <div class="environment"></div>
        ${e}
        <div class="buttons" part="buttons"><slot></slot></div>
        <div class="logout">${r}</div>
      </nav>
    `}};v.styles=G`
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

      ${Yt()}
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
  `;f([u({attribute:"avatar-alt"})],v.prototype,"avatarAlt",2);f([u({attribute:"avatar-src"})],v.prototype,"avatarSrc",2);f([u({attribute:"greeting-text"})],v.prototype,"greetingText",2);f([u({attribute:"logout-href"})],v.prototype,"logoutHref",2);f([u({attribute:"logout-label"})],v.prototype,"logoutLabel",2);f([u({attribute:"show-environment",type:Boolean})],v.prototype,"showEnvironment",2);f([u({attribute:"show-greeting",type:Boolean})],v.prototype,"showGreeting",2);f([u({attribute:"show-logout",type:Boolean})],v.prototype,"showLogout",2);f([ft()],v.prototype,"_hasGreetingPopoverSlot",2);v=f([Z("admin-bar")],v);var Xt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,P=(s,t,e,r)=>{for(var i=r>1?void 0:r?Zt(t,e):t,o=s.length-1,a;o>=0;o--)(a=s[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&Xt(t,e,i),i};let _=class extends S{constructor(){super(...arguments),this.dlContent=[],this.labelContent="",this.labelPosition="after",this.multiLine=!1,this.tableContent={rows:[]},this.textContent=""}render(){var s,t,e,r,i,o;const a=[];this.textContent??!1?a.push(c`<span class="text">${this.textContent}</span>`):this.dlContent.length?a.push(c`<dl part="dl">
          ${this.dlContent.map(n=>c`<dt>${n[0]??""}</dt>
                <dd>${n[1]??""}</dd>`)}
        </dl>`):(t=(s=this.tableContent)==null?void 0:s.rows)!=null&&t.length&&a.push(c`<table part="table">
          ${(r=(e=this.tableContent)==null?void 0:e.headers)!=null&&r.length?c`<thead>
                <tr>
                  ${this.tableContent.headers.map(n=>c`<th>${n??""}</th>`)}
                </tr>
              </thead>`:p}
          ${c`<tbody>
            ${this.tableContent.rows.map(n=>c`<tr>
                  ${n.map(h=>c`<td>${h}</td>`)}
                </tr>`)}
          </tbody>`}
          ${(o=(i=this.tableContent)==null?void 0:i.footers)!=null&&o.length?c`<tfoot>
                <tr>
                  ${this.tableContent.footers.map(n=>c`<td>${n??""}</td>`)}
                </tr>
              </tfoot>`:p}
        </table>`);let l=c`<slot>${a}</slot>`;return(this.labelContent??!1)&&(l=this.labelPosition==="before"?c`<span class="label">${this.labelContent}</span>${l}`:c`${l}<span class="label">${this.labelContent}</span>`),c`<span class="admin-bar-text${this.multiLine?" multi-line":""}">${l}</span>`}};_.styles=G`
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
  `;P([u({attribute:"dl-content",type:Array})],_.prototype,"dlContent",2);P([u({attribute:"label-content"})],_.prototype,"labelContent",2);P([u({attribute:"label-position"})],_.prototype,"labelPosition",2);P([u({attribute:"multi-line",type:Boolean})],_.prototype,"multiLine",2);P([u({attribute:"table-content",type:Object})],_.prototype,"tableContent",2);P([u({attribute:"text-content"})],_.prototype,"textContent",2);_=P([Z("admin-bar-text")],_);class $t extends HTMLElement{constructor(){super(...arguments);$(this,"_actionUrl");$(this,"_csrfToken");$(this,"_requestStatus");$(this,"_sessionActionUrl")}attributeChangedCallback(e,r,i){e==="data-api-status"&&["errored","loading","ready","resolved"].includes(i)&&(i==="errored"&&(this._csrfToken=void 0),this._requestStatus=i)}connectedCallback(){this._actionUrl=this.dataset.actionUrl,this._sessionActionUrl=this.dataset.sessionActionUrl,this.setApiStatus("ready")}async actionRequest(e,r=""){if(this._requestStatus!=="loading"){if(this._actionUrl===void 0)return{message:"action-url-invalid",status:"error"};if(this._csrfToken===void 0){const i=await this.getSessionInfo();if(i.csrfTokenValue)this._csrfToken=i.csrfTokenValue;else return{message:"csrf-token-invalid",status:"error"}}try{this.setApiStatus("loading");const i=new FormData;i.append("requestHandle",e),r&&i.append("params",r);const o=await fetch(this._actionUrl,{body:i,headers:{Accept:"application/json","X-CSRF-Token":this._csrfToken??"","X-Requested-With":"XMLHttpRequest"},method:"POST"});if(!o.ok)throw this.setApiStatus("errored"),new Error(`Response status: ${o.status}`);const a=await o.json();if(a.status!=="success")throw a.message;return this.setApiStatus("resolved"),a}catch(i){return this.setApiStatus("errored"),{message:i,status:"error"}}}}async getSessionInfo(){if(this._sessionActionUrl)return fetch(this._sessionActionUrl,{headers:{Accept:"application/json"}}).then(e=>e.json())}setApiStatus(e){this.dataset.apiStatus=e}}$($t,"observedAttributes",["data-api-status"]);customElements.define("craft-admin-bar",$t);class Qt extends HTMLElement{constructor(){var o,a;super();$(this,"_searchForm",null);$(this,"_resultsElement",null);$(this,"_onSearchFormSubmit",async e=>{var i;e.preventDefault();const r=((i=this.shadowRoot)==null?void 0:i.querySelector('input[type="search"]'))??null;if(r){const o=await window.adminBarPostRequest(this,"craft-search-search",JSON.stringify({query:r.value}));if(this._resultsElement){let a,l;if(o.searchResultsStatus==="OK"){a=document.getElementById("admin-bar-search-results-template"),l=a.content;const n=document.createElement("ul");o.searchResults.forEach(h=>{const d=l.cloneNode(!0).querySelector("li"),m=d.querySelector("admin-bar-button.edit");h.cpEditUrl?(m.setAttribute("button-href",h.cpEditUrl),m.setAttribute("label-text",h.title)):d.removeChild(m);const g=d.querySelector("admin-bar-button.view"),x=d.querySelector("admin-bar-text.view");h.url??!1?(g.setAttribute("button-href",h.url),g.setAttribute("label-text",h.title),x.remove()):(x.setAttribute("text-content",h.title),g.remove()),n.append(d)}),this._resultsElement.replaceChildren(n)}else a=document.getElementById("admin-bar-search-no-results-template"),l=a.content,this._resultsElement.replaceChildren(l.cloneNode(!0))}}});const r=document.getElementById("admin-bar-search-template").content;this.attachShadow({mode:"open"}).appendChild(r.cloneNode(!0)),this._searchForm=((o=this.shadowRoot)==null?void 0:o.querySelector("form"))??null,this._resultsElement=((a=this.shadowRoot)==null?void 0:a.querySelector("form + div"))??null}connectedCallback(){var e;(e=this._searchForm)==null||e.addEventListener("submit",this._onSearchFormSubmit)}disconnectedCallback(){var e;(e=this._searchForm)==null||e.removeEventListener("submit",this._onSearchFormSubmit)}}customElements.define("craft-admin-bar-search",Qt);window.adminBarPostRequest=async(s,t,e="")=>{try{const r=s.closest("craft-admin-bar"),i=await(r==null?void 0:r.actionRequest(t,e));if((i==null?void 0:i.status)==="success"){if(i.refreshPage)location.reload();else if(setTimeout(()=>{r&&(r.dataset.apiStatus="ready")},3e3),i.data)return i.data}else throw i==null?void 0:i.message}catch(r){console.error(`Admin Bar: ${r}`)}};
