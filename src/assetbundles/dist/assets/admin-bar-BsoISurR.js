/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,Y=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),Q=new WeakMap;let pt=class{constructor(o,t,e){if(this._$cssResult$=!0,e!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=o,this.t=t}get styleSheet(){let o=this.o;const t=this.t;if(Y&&o===void 0){const e=t!==void 0&&t.length===1;e&&(o=Q.get(t)),o===void 0&&((this.o=o=new CSSStyleSheet).replaceSync(this.cssText),e&&Q.set(t,o))}return o}toString(){return this.cssText}};const vt=o=>new pt(typeof o=="string"?o:o+"",void 0,F),W=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((r,i,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new pt(e,o,F)},$t=(o,t)=>{if(Y)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),i=j.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,o.appendChild(r)}},X=Y?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return vt(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ft,defineProperty:_t,getOwnPropertyDescriptor:yt,getOwnPropertyNames:xt,getOwnPropertySymbols:At,getPrototypeOf:wt}=Object,P=globalThis,tt=P.trustedTypes,Et=tt?tt.emptyScript:"",et=P.reactiveElementPolyfillSupport,U=(o,t)=>o,D={toAttribute(o,t){switch(t){case Boolean:o=o?Et:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},J=(o,t)=>!ft(o,t),rt={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:J};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),P.litPropertyMetadata??(P.litPropertyMetadata=new WeakMap);class C extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=rt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);i!==void 0&&_t(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:s}=yt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const l=i==null?void 0:i.call(this);s.call(this,n),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??rt}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const t=wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,r=[...xt(e),...At(e)];for(const i of r)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,i]of e)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const i=this._$Eu(e,r);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)e.unshift(X(i))}else t!==void 0&&e.push(X(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var r;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:D).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var r;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:D;this._$Em=s,this[s]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??J)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,n]of i)n.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],n)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[U("elementProperties")]=new Map,C[U("finalized")]=new Map,et==null||et({ReactiveElement:C}),(P.reactiveElementVersions??(P.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,V=I.trustedTypes,ot=V?V.createPolicy("lit-html",{createHTML:o=>o}):void 0,ut="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,bt="?"+_,St=`<${bt}>`,w=document,H=()=>w.createComment(""),M=o=>o===null||typeof o!="object"&&typeof o!="function",K=Array.isArray,kt=o=>K(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",G=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,nt=/>/g,y=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,at=/"/g,gt=/^(?:script|style|textarea|title)$/i,Ct=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),d=Ct(1),E=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),lt=new WeakMap,x=w.createTreeWalker(w,129);function mt(o,t){if(!K(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ot!==void 0?ot.createHTML(t):t}const Pt=(o,t)=>{const e=o.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",n=O;for(let l=0;l<e;l++){const a=o[l];let p,b,h=-1,m=0;for(;m<a.length&&(n.lastIndex=m,b=n.exec(a),b!==null);)m=n.lastIndex,n===O?b[1]==="!--"?n=it:b[1]!==void 0?n=nt:b[2]!==void 0?(gt.test(b[2])&&(i=RegExp("</"+b[2],"g")),n=y):b[3]!==void 0&&(n=y):n===y?b[0]===">"?(n=i??O,h=-1):b[1]===void 0?h=-2:(h=n.lastIndex-b[2].length,p=b[1],n=b[3]===void 0?y:b[3]==='"'?at:st):n===at||n===st?n=y:n===it||n===nt?n=O:(n=y,i=void 0);const f=n===y&&o[l+1].startsWith("/>")?" ":"";s+=n===O?a+St:h>=0?(r.push(p),a.slice(0,h)+ut+a.slice(h)+_+f):a+_+(h===-2?l:f)}return[mt(o,s+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class N{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let s=0,n=0;const l=t.length-1,a=this.parts,[p,b]=Pt(t,e);if(this.el=N.createElement(p,r),x.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=x.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(ut)){const m=b[n++],f=i.getAttribute(h).split(_),z=/([.?@])?(.*)/.exec(m);a.push({type:1,index:s,name:z[2],strings:f,ctor:z[1]==="."?Ot:z[1]==="?"?Ut:z[1]==="@"?Ht:q}),i.removeAttribute(h)}else h.startsWith(_)&&(a.push({type:6,index:s}),i.removeAttribute(h));if(gt.test(i.tagName)){const h=i.textContent.split(_),m=h.length-1;if(m>0){i.textContent=V?V.emptyScript:"";for(let f=0;f<m;f++)i.append(h[f],H()),x.nextNode(),a.push({type:2,index:++s});i.append(h[m],H())}}}else if(i.nodeType===8)if(i.data===bt)a.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(_,h+1))!==-1;)a.push({type:7,index:s}),h+=_.length-1}s++}}static createElement(t,e){const r=w.createElement("template");return r.innerHTML=t,r}}function T(o,t,e=o,r){var i,s;if(t===E)return t;let n=r!==void 0?(i=e._$Co)==null?void 0:i[r]:e._$Cl;const l=M(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==l&&((s=n==null?void 0:n._$AO)==null||s.call(n,!1),l===void 0?n=void 0:(n=new l(o),n._$AT(o,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=n:e._$Cl=n),n!==void 0&&(t=T(o,n._$AS(o,t.values),n,r)),t}class Tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??w).importNode(e,!0);x.currentNode=i;let s=x.nextNode(),n=0,l=0,a=r[0];for(;a!==void 0;){if(n===a.index){let p;a.type===2?p=new R(s,s.nextSibling,this,t):a.type===1?p=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(p=new Mt(s,this,t)),this._$AV.push(p),a=r[++l]}n!==(a==null?void 0:a.index)&&(s=x.nextNode(),n++)}return x.currentNode=w,i}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class R{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),M(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):kt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=N.createElement(mt(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)==null?void 0:e._$AD)===s)this._$AH.p(r);else{const n=new Tt(s,this),l=n.u(this.options);n.p(r),this.T(l),this._$AH=n}}_$AC(t){let e=lt.get(t.strings);return e===void 0&&lt.set(t.strings,e=new N(t)),e}k(t){K(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const s of t)i===e.length?e.push(r=new R(this.O(H()),this.O(H()),this,this.options)):r=e[i],r._$AI(s),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,s){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=c}_$AI(t,e=this,r,i){const s=this.strings;let n=!1;if(s===void 0)t=T(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{const l=t;let a,p;for(t=s[0],a=0;a<s.length-1;a++)p=T(this,l[r+a],e,a),p===E&&(p=this._$AH[a]),n||(n=!M(p)||p!==this._$AH[a]),p===c?t=c:t!==c&&(t+=(p??"")+s[a+1]),this._$AH[a]=p}n&&!i&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ot extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class Ut extends q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class Ht extends q{constructor(t,e,r,i,s){super(t,e,r,i,s),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??c)===E)return;const r=this._$AH,i=t===c&&r!==c||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==c&&(r===c||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Mt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const ht=I.litHtmlPolyfillSupport;ht==null||ht(N,R),(I.litHtmlVersions??(I.litHtmlVersions=[])).push("3.2.1");const Nt=(o,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const s=(e==null?void 0:e.renderBefore)??null;r._$litPart$=i=new R(t.insertBefore(H(),s),s,void 0,e??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let A=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;const t=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=t.firstChild),t}update(o){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(o),this._$Do=Nt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var o;super.connectedCallback(),(o=this._$Do)==null||o.setConnected(!0)}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this._$Do)==null||o.setConnected(!1)}render(){return E}};var dt;A._$litElement$=!0,A.finalized=!0,(dt=globalThis.litElementHydrateSupport)==null||dt.call(globalThis,{LitElement:A});const ct=globalThis.litElementPolyfillSupport;ct==null||ct({LitElement:A});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Lt=o=>(...t)=>({_$litDirective$:o,values:t});class zt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=Lt(class extends zt{constructor(o){var t;if(super(o),o.type!==Rt.ATTRIBUTE||o.name!=="class"||((t=o.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var e,r;if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((e=this.nt)!=null&&e.has(s))&&this.st.add(s);return this.render(t)}const i=o.element.classList;for(const s of this.st)s in t||(i.remove(s),this.st.delete(s));for(const s in t){const n=!!t[s];n===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(n?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return E}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:J},Bt=(o=jt,t,e)=>{const{kind:r,metadata:i}=e;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(e.name,o),r==="accessor"){const{name:n}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,o)},init(l){return l!==void 0&&this.P(n,void 0,o),l}}}if(r==="setter"){const{name:n}=e;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,o)}}throw Error("Unsupported decorator location: "+r)};function u(o){return(t,e)=>typeof e=="object"?Bt(o,t,e):((r,i,s)=>{const n=i.hasOwnProperty(s);return i.constructor.createProperty(s,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(i,s):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dt(o){return u({...o,state:!0,attribute:!1})}var It=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,L=(o,t,e,r)=>{for(var i=r>1?void 0:r?Vt(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(i=(r?n(t,e,i):n(i))||i);return r&&i&&It(t,e,i),i};let S=class extends A{constructor(){super(...arguments),this.label="",this.isLogoutButton=!1,this._hasPopoverSlot=!1}handlePopoverSlotchange(o){const t=o.target.assignedNodes({flatten:!0});this._hasPopoverSlot=t.length>0}render(){const o={"admin-bar-button":!0,"admin-bar-button--el-a":!1,"admin-bar-button--el-button":!1,"admin-bar-button--el-select":!1,"admin-bar-button--logout":this.isLogoutButton},t=d`<slot name="label-before"></slot
      ><slot>${this.label??!1?d`<span>${this.label}</span>`:c}</slot
      ><slot name="label-after"></slot>`;return this.href?(o["admin-bar-button--el-a"]=!0,d`<a class="${B(o)}" href="${this.href}">${t}</a>`):(o["admin-bar-button--el-button"]=!0,this._hasPopoverSlot?d`<button class="${B(o)}" popovertarget="admin-bar-button-popover">
          ${t}
        </button>
        <div popover id="admin-bar-button-popover">
          <div class="glass-surface"></div>
          <div class="glass-edge"></div>
          <slot name="popover" @slotchange="${this.handlePopoverSlotchange}"></slot>
        </div>`:d`<button class="${B(o)}">${t}</button
      ><slot name="popover" @slotchange="${this.handlePopoverSlotchange}"></slot>`)}};S.styles=W`
    :host {
      --padding-left: 10px;
      --padding-right: 10px;
      --margin: 4px;
      --border-radius: 4px;
      display: block;
      --achor-name: --popover-anchor;
    }
    .admin-bar-button {
      anchor-name: var(--achor-name);
      box-sizing: border-box;
      display: flex;
      flex-wrap: nowrap;
      gap: 5px;
      align-items: center;
      padding: 0 clamp(4px, 1vw, 13px);
      min-width: 100%;
      height: var(--admin-bar-height, 43px);
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
      }
      &:not(.admin-bar-button--logout):hover {
        --admin-bar-button-color-bg: var(--admin-bar-button-color-bg-hover, var(--admin-bar-button-color-text, white));
        --admin-bar-text-label-color-bg: var(--admin-bar-color-highlight);
        --admin-bar-text-label-color-text: var(--admin-bar-button-color-bg-hover);
        color: var(--admin-bar-color-highlight, oklch(0.6 0.4 83));
      }

      &.admin-bar-button--logout {
        padding: 0 clamp(10px, 3vw, 20px);

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
      left: auto;
      right: anchor(var(--achor-name) right);
    }
    @position-try --popover-top-left {
      margin: 0 0 2px 0;
      top: auto;
      top: anchor(var(--achor-name) none);
      bottom: anchor(var(--achor-name) top);
    }
    @position-try --popover-top-right {
      margin: 0 0 2px 0;
      top: auto;
      top: anchor(var(--achor-name) none);
      bottom: anchor(var(--achor-name) top);
      left: auto;
      right: anchor(var(--achor-name) right);
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

      @supports (position-anchor: --popover-anchor) and (position-try-fallbacks: --popover-top) {
        & {
          position-anchor: --popover-anchor;
          position-try-fallbacks: --popover-bottom-right, --popover-top-left, --popover-top-right;
          position: fixed;
          top: anchor(var(--achor-name) bottom);
          left: anchor(var(--achor-name) left);
          margin: 2px 0 0 0;
        }
      }
      @supports not (position-anchor: --popover-anchor) {
        &::backdrop {
          backdrop-filter: var(--admin-bar-backdrop-filter, blur(20px) saturate(200%));
          background: var(--admin-bar-button-popover-bg, var(--admin-bar-bg-color));
        }
      }
    }
  `;L([u({attribute:"button-href",type:[String,Function,Array]})],S.prototype,"href",2);L([u({attribute:"label-text"})],S.prototype,"label",2);L([u({attribute:"logout-button",type:Boolean})],S.prototype,"isLogoutButton",2);L([Dt()],S.prototype,"_hasPopoverSlot",2);S=L([Z("admin-bar-button")],S);function Wt(){return W`
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
  `}var qt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,$=(o,t,e,r)=>{for(var i=r>1?void 0:r?Gt(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(i=(r?n(t,e,i):n(i))||i);return r&&i&&qt(t,e,i),i};let g=class extends A{constructor(){super(...arguments),this.avatarAlt="Avatar of logged in user.",this.greetingText="Hello",this.logoutHref="#",this.logoutLabel="Sign out",this.showEnvironment=!1,this.showGreeting=!1,this.showLogout=!1}render(){const o={"admin-bar":!0,"admin-bar--environment":this.showEnvironment,"admin-bar--greeting":this.showGreeting,"admin-bar--logout":this.showLogout},t=this.showGreeting?d`
          ${this.avatarSrc?d`<img alt="${this.avatarAlt}" src="${this.avatarSrc}" width="25px" height="25px" />`:c}
          <span><slot name="greeting">${this.greetingText}</slot></span>
        `:c,e=this.showLogout?d`<slot name="logout"
          ><admin-bar-button
            logout-button
            button-href="${this.logoutHref}"
            label-text="${this.logoutLabel}"
          ></admin-bar-button
        ></slot>`:c;return d`
      <nav class="${B(o)}">
        <div class="glass-surface"></div>
        <div class="glass-edge"></div>
        <div class="environment"></div>
        <div class="greeting">${t}</div>
        <div class="buttons"><slot></slot></div>
        <div class="logout">${e}</div>
      </nav>
    `}};g.styles=W`
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

      &.admin-bar--environment {
        grid-template-rows: var(--environment-height) var(--admin-bar-height, 43px);
      }

      ${Wt()}
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
  `;$([u({attribute:"avatar-alt"})],g.prototype,"avatarAlt",2);$([u({attribute:"avatar-src"})],g.prototype,"avatarSrc",2);$([u({attribute:"greeting-text"})],g.prototype,"greetingText",2);$([u({attribute:"logout-href"})],g.prototype,"logoutHref",2);$([u({attribute:"logout-label"})],g.prototype,"logoutLabel",2);$([u({attribute:"show-environment",type:Boolean})],g.prototype,"showEnvironment",2);$([u({attribute:"show-greeting",type:Boolean})],g.prototype,"showGreeting",2);$([u({attribute:"show-logout",type:Boolean})],g.prototype,"showLogout",2);g=$([Z("admin-bar")],g);var Yt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,k=(o,t,e,r)=>{for(var i=r>1?void 0:r?Ft(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(i=(r?n(t,e,i):n(i))||i);return r&&i&&Yt(t,e,i),i};let v=class extends A{constructor(){super(...arguments),this.dlContent=[],this.labelContent="",this.labelPosition="after",this.multiLine=!1,this.tableContent={rows:[]},this.textContent=""}render(){var o,t,e,r,i,s;const n=[];this.textContent??!1?n.push(d`<span class="text">${this.textContent}</span>`):this.dlContent.length?n.push(d`<dl>
          ${this.dlContent.map(a=>d`<dt>${a[0]??""}</dt>
                <dd>${a[1]??""}</dd>`)}
        </dl>`):(t=(o=this.tableContent)==null?void 0:o.rows)!=null&&t.length&&n.push(d`<table>
          ${(r=(e=this.tableContent)==null?void 0:e.headers)!=null&&r.length?d`<thead>
                <tr>
                  ${this.tableContent.headers.map(a=>d`<th>${a??""}</th>`)}
                </tr>
              </thead>`:c}
          ${d`<tbody>
            ${this.tableContent.rows.map(a=>d`<tr>
                  ${a.map(p=>d`<td>${p}</td>`)}
                </tr>`)}
          </tbody>`}
          ${(s=(i=this.tableContent)==null?void 0:i.footers)!=null&&s.length?d`<tfoot>
                <tr>
                  ${this.tableContent.footers.map(a=>d`<td>${a??""}</td>`)}
                </tr>
              </tfoot>`:c}
        </table>`);let l=d`<slot>${n}</slot>`;return(this.labelContent??!1)&&(l=this.labelPosition==="before"?d`<span class="label">${this.labelContent}</span>${l}`:d`${l}<span class="label">${this.labelContent}</span>`),d`<span class="admin-bar-text${this.multiLine?" multi-line":""}">${l}</span>`}};v.styles=W`
    :host {
      --padding-left: 10px;
      --padding-right: 10px;
      --margin: 4px;
      --border-radius: 4px;
      display: inline-block;
    }
    .admin-bar-text {
      display: flex;
      flex-wrap: nowrap;
      gap: 5px;
      align-items: center;
      padding: var(--admin-bar-text-padding, 0 clamp(4px, 1vw, 13px));
      height: var(--admin-bar-height, 43px);
      background-color: var(--admin-bar-text-color-bg, transparent);
      font-size: var(--font-size);
      color: var(--admin-bar-color-text, rgb(255 255 255 / 0.8));
      white-space: nowrap;
      transition:
        background var(--admin-bar-transition-duration, 0.4s) ease-out,
        color var(--admin-bar-transition-duration, 0.4s) ease-out;

      &:is(.multi-line, :has(dl, table)) {
        padding: var(--admin-bar-text-padding, clamp(4px, 1vw, 13px));
        height: unset;
        white-space: unset;

        &:has(table) {
          padding: 0;
        }
      }

      & dl {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 0.5rem 1rem;
        margin: 0;

        & dt {
          font-weight: 700;
          text-align: end;
          text-wrap: balance;
        }
        & dd {
          margin: 0;
          max-width: 50ch;
          text-wrap: pretty;
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
          max-width: 50ch;
          font-weight: initial;
          text-wrap: pretty;
        }
      }
    }
    .label {
      padding: 3px 5px;
      background-color: var(--admin-bar-text-label-color-bg, rgb(255 255 255 / 0.9));
      border-radius: 4px;
      line-height: 1;
      font-size: 0.8em;
      color: var(--admin-bar-text-label-color-text, black);
    }
  `;k([u({attribute:"dl-content",type:Array})],v.prototype,"dlContent",2);k([u({attribute:"label-content"})],v.prototype,"labelContent",2);k([u({attribute:"label-position"})],v.prototype,"labelPosition",2);k([u({attribute:"multi-line",type:Boolean})],v.prototype,"multiLine",2);k([u({attribute:"table-content",type:Object})],v.prototype,"tableContent",2);k([u({attribute:"text-content"})],v.prototype,"textContent",2);v=k([Z("admin-bar-text")],v);
