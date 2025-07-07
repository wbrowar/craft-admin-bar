/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,W=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),Z=new WeakMap;let ct=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o;const t=this.t;if(W&&i===void 0){const e=t!==void 0&&t.length===1;e&&(i=Z.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&Z.set(t,i))}return i}toString(){return this.cssText}};const xt=i=>new ct(typeof i=="string"?i:i+"",void 0,J),G=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,o,n)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[n+1],i[0]);return new ct(e,i,J)},yt=(i,t)=>{if(W)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),o=z.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=e.cssText,i.appendChild(r)}},Q=W?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return xt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:At,defineProperty:wt,getOwnPropertyDescriptor:St,getOwnPropertyNames:Et,getOwnPropertySymbols:Ct,getPrototypeOf:kt}=Object,C=globalThis,Y=C.trustedTypes,Pt=Y?Y.emptyScript:"",tt=C.reactiveElementPolyfillSupport,R=(i,t)=>i,q={toAttribute(i,t){switch(t){case Boolean:i=i?Pt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},K=(i,t)=>!At(i,t),et={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:K};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),C.litPropertyMetadata??(C.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=et){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,e);o!==void 0&&wt(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){const{get:o,set:n}=St(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get(){return o?.call(this)},set(a){const l=o?.call(this);n.call(this,a),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??et}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;const t=kt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){const e=this.properties,r=[...Et(e),...Ct(e)];for(const o of r)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,o]of e)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const o=this._$Eu(e,r);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)e.unshift(Q(o))}else t!==void 0&&e.push(Q(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var r;const o=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,o);if(n!==void 0&&o.reflect===!0){const a=(((r=o.converter)==null?void 0:r.toAttribute)!==void 0?o.converter:q).toAttribute(e,o.type);this._$Em=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,e){var r;const o=this.constructor,n=o._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const a=o.getPropertyOptions(n),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)==null?void 0:r.fromAttribute)!==void 0?a.converter:q;this._$Em=n,this[n]=l.fromAttribute(e,a.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??K)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,a]of o)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$EO)==null||t.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(r)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[R("elementProperties")]=new Map,E[R("finalized")]=new Map,tt?.({ReactiveElement:E}),(C.reactiveElementVersions??(C.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,D=I.trustedTypes,rt=D?D.createPolicy("lit-html",{createHTML:i=>i}):void 0,pt="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,ut="?"+$,Ut=`<${ut}>`,A=document,O=()=>A.createComment(""),H=i=>i===null||typeof i!="object"&&typeof i!="function",X=Array.isArray,Tt=i=>X(i)||typeof i?.[Symbol.iterator]=="function",F=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,it=/>/g,_=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,at=/"/g,bt=/^(?:script|style|textarea|title)$/i,Rt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),c=Rt(1),w=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),st=new WeakMap,x=A.createTreeWalker(A,129);function mt(i,t){if(!X(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return rt!==void 0?rt.createHTML(t):t}const Ot=(i,t)=>{const e=i.length-1,r=[];let o,n=t===2?"<svg>":t===3?"<math>":"",a=T;for(let l=0;l<e;l++){const s=i[l];let d,u,h=-1,m=0;for(;m<s.length&&(a.lastIndex=m,u=a.exec(s),u!==null);)m=a.lastIndex,a===T?u[1]==="!--"?a=ot:u[1]!==void 0?a=it:u[2]!==void 0?(bt.test(u[2])&&(o=RegExp("</"+u[2],"g")),a=_):u[3]!==void 0&&(a=_):a===_?u[0]===">"?(a=o??T,h=-1):u[1]===void 0?h=-2:(h=a.lastIndex-u[2].length,d=u[1],a=u[3]===void 0?_:u[3]==='"'?at:nt):a===at||a===nt?a=_:a===ot||a===it?a=T:(a=_,o=void 0);const f=a===_&&i[l+1].startsWith("/>")?" ":"";n+=a===T?s+Ut:h>=0?(r.push(d),s.slice(0,h)+pt+s.slice(h)+$+f):s+$+(h===-2?l:f)}return[mt(i,n+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class M{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let n=0,a=0;const l=t.length-1,s=this.parts,[d,u]=Ot(t,e);if(this.el=M.createElement(d,r),x.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=x.nextNode())!==null&&s.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(pt)){const m=u[a++],f=o.getAttribute(h).split($),L=/([.?@])?(.*)/.exec(m);s.push({type:1,index:n,name:L[2],strings:f,ctor:L[1]==="."?Mt:L[1]==="?"?Bt:L[1]==="@"?Nt:V}),o.removeAttribute(h)}else h.startsWith($)&&(s.push({type:6,index:n}),o.removeAttribute(h));if(bt.test(o.tagName)){const h=o.textContent.split($),m=h.length-1;if(m>0){o.textContent=D?D.emptyScript:"";for(let f=0;f<m;f++)o.append(h[f],O()),x.nextNode(),s.push({type:2,index:++n});o.append(h[m],O())}}}else if(o.nodeType===8)if(o.data===ut)s.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf($,h+1))!==-1;)s.push({type:7,index:n}),h+=$.length-1}n++}}static createElement(t,e){const r=A.createElement("template");return r.innerHTML=t,r}}function k(i,t,e=i,r){var o,n;if(t===w)return t;let a=r!==void 0?(o=e._$Co)==null?void 0:o[r]:e._$Cl;const l=H(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((n=a?._$AO)==null||n.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=a:e._$Cl=a),a!==void 0&&(t=k(i,a._$AS(i,t.values),a,r)),t}class Ht{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,o=(t?.creationScope??A).importNode(e,!0);x.currentNode=o;let n=x.nextNode(),a=0,l=0,s=r[0];for(;s!==void 0;){if(a===s.index){let d;s.type===2?d=new B(n,n.nextSibling,this,t):s.type===1?d=new s.ctor(n,s.name,s.strings,this,t):s.type===6&&(d=new Lt(n,this,t)),this._$AV.push(d),s=r[++l]}a!==s?.index&&(n=x.nextNode(),a++)}return x.currentNode=A,o}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class B{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),H(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Tt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=M.createElement(mt(o.h,o.h[0]),this.options)),o);if(((e=this._$AH)==null?void 0:e._$AD)===n)this._$AH.p(r);else{const a=new Ht(n,this),l=a.u(this.options);a.p(r),this.T(l),this._$AH=a}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new M(t)),e}k(t){X(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const n of t)o===e.length?e.push(r=new B(this.O(O()),this.O(O()),this,this.options)):r=e[o],r._$AI(n),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}_$AI(t,e=this,r,o){const n=this.strings;let a=!1;if(n===void 0)t=k(this,t,e,0),a=!H(t)||t!==this._$AH&&t!==w,a&&(this._$AH=t);else{const l=t;let s,d;for(t=n[0],s=0;s<n.length-1;s++)d=k(this,l[r+s],e,s),d===w&&(d=this._$AH[s]),a||(a=!H(d)||d!==this._$AH[s]),d===p?t=p:t!==p&&(t+=(d??"")+n[s+1]),this._$AH[s]=d}a&&!o&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Mt extends V{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Bt extends V{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Nt extends V{constructor(t,e,r,o,n){super(t,e,r,o,n),this.type=5}_$AI(t,e=this){if((t=k(this,t,e,0)??p)===w)return;const r=this._$AH,o=t===p&&r!==p||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==p&&(r===p||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Lt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}}const lt=I.litHtmlPolyfillSupport;lt?.(M,B),(I.litHtmlVersions??(I.litHtmlVersions=[])).push("3.2.1");const zt=(i,t,e)=>{const r=e?.renderBefore??t;let o=r._$litPart$;if(o===void 0){const n=e?.renderBefore??null;r._$litPart$=o=new B(t.insertBefore(O(),n),n,void 0,e??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let y=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(i){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=zt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)==null||i.setConnected(!1)}render(){return w}};var dt;y._$litElement$=!0,y.finalized=!0,(dt=globalThis.litElementHydrateSupport)==null||dt.call(globalThis,{LitElement:y});const ht=globalThis.litElementPolyfillSupport;ht?.({LitElement:y});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt={ATTRIBUTE:1},qt=i=>(...t)=>({_$litDirective$:i,values:t});class It{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=qt(class extends It{constructor(i){var t;if(super(i),i.type!==jt.ATTRIBUTE||i.name!=="class"||((t=i.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,r;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!((e=this.nt)!=null&&e.has(n))&&this.st.add(n);return this.render(t)}const o=i.element.classList;for(const n of this.st)n in t||(o.remove(n),this.st.delete(n));for(const n in t){const a=!!t[n];a===this.st.has(n)||(r=this.nt)!=null&&r.has(n)||(a?(o.add(n),this.st.add(n)):(o.remove(n),this.st.delete(n)))}return w}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:K},Gt=(i=Dt,t,e)=>{const{kind:r,metadata:o}=e;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(e.name,i),r==="accessor"){const{name:a}=e;return{set(l){const s=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,s,i)},init(l){return l!==void 0&&this.P(a,void 0,i),l}}}if(r==="setter"){const{name:a}=e;return function(l){const s=this[a];t.call(this,l),this.requestUpdate(a,s,i)}}throw Error("Unsupported decorator location: "+r)};function b(i){return(t,e)=>typeof e=="object"?Gt(i,t,e):((r,o,n)=>{const a=o.hasOwnProperty(n);return o.constructor.createProperty(n,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(o,n):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(i){return b({...i,state:!0,attribute:!1})}function vt(){return G`
    & {
      background: unset;
      z-index: 4;
      box-shadow:
        0 0 0.75px hsl(205 20% 10% / 0.2),
        0.7px 0.8px 1.2px -0.4px hsl(205 20% 10% / 0.1),
        1.3px 1.5px 2.2px -0.8px hsl(205 20% 10% / 0.1),
        2.3px 2.6px 3.9px -1.2px hsl(205 20% 10% / 0.1),
        3.9px 4.4px 6.6px -1.7px hsl(205 20% 10% / 0.1),
        6.5px 7.2px 10.9px -2.1px hsl(205 20% 10% / 0.1),
        8px 9px 14px -2.5px hsl(205 20% 10% / 0.2);
    }

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      border-radius: inherit;
      overflow: hidden;
      z-index: 3;

      -webkit-backdrop-filter: var(--admin-bar-bg-filter);
      backdrop-filter: var(--admin-bar-bg-filter);
      background-color: var(--admin-bar-bg-color);
      background-image: var(--admin-bar-bg-image);
      background-size: 100px;
      background-repeat: repeat;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      border-radius: inherit;
      overflow: hidden;
      z-index: 5;

      box-shadow:
        inset 2px 2px 1px -3px hsl(205 20% 90% / 0.8),
        inset 4px 4px 2px -6px hsl(205 20% 90% / 0.3),
        inset 1.5px 1.5px 1.5px -0.75px hsl(205 20% 90% / 0.15),
        inset 1.5px 1.5px 0.25px hsl(205 20% 90% / 0.03),
        inset 0 0 0.25px 0.5px hsl(205 20% 90% / 0.03);
    }

    & > *,
    & > slot::slotted(*) {
      position: relative;
      z-index: 6;
    }
  `}var Vt=Object.defineProperty,N=(i,t,e,r)=>{for(var o=void 0,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=a(t,e,o)||o);return o&&Vt(t,e,o),o};const ft=class extends y{constructor(){super(...arguments),this.label="",this.isGreetingButton=!1,this.isLogoutButton=!1,this._hasPopoverSlot=!1}handlePopoverSlotchange(t){const e=t.target.assignedNodes({flatten:!0});this._hasPopoverSlot=e.length>0}render(){const t={"admin-bar-button":!0,"admin-bar-button--el-a":!1,"admin-bar-button--el-button":!1,"admin-bar-button--el-select":!1,"admin-bar-button--greeting":this.isGreetingButton,"admin-bar-button--logout":this.isLogoutButton},e=c`<slot name="before-label"></slot><slot name="label-before"></slot
      ><slot>${this.label??!1?c`<span>${this.label}</span>`:p}</slot><slot name="label-after"></slot
      ><slot name="after-label"></slot>`;return this.href?(t["admin-bar-button--el-a"]=!0,c`<a class="${j(t)}" href="${this.href}">${e}</a>`):(t["admin-bar-button--el-button"]=!0,this._hasPopoverSlot?c`<button class="${j(t)}" popovertarget="admin-bar-button-popover">
          ${e}
        </button>
        <div popover id="admin-bar-button-popover" class="glass-surface" part="popover">
          <slot name="popover" @slotchange="${this.handlePopoverSlotchange}"></slot>
        </div>`:c`<button class="${j(t)}">${e}</button
      ><slot name="popover" @slotchange="${this.handlePopoverSlotchange}"></slot>`)}};ft.styles=G`
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
      appearance: none;
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

      &.admin-bar-button--greeting {
        border-start-start-radius: var(--admin-bar-border-radius);
        border-end-start-radius: var(--admin-bar-border-radius);

        @container style(--admin-bar-show-environment) {
          & {
            border-start-start-radius: 0;
          }
        }
      }

      &.admin-bar-button--logout {
        padding: var(--admin-bar-block-padding) clamp(10px, 3vw, 20px);
        border-end-end-radius: var(--admin-bar-border-radius);
        border-start-end-radius: var(--admin-bar-border-radius);

        &:hover {
          --admin-bar-button-color-bg: var(--admin-bar-color-highlight-logout, var(--admin-bar-color-highlight));
        }

        @container style(--admin-bar-show-environment) {
          & {
            border-start-end-radius: 0;
          }
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
      /* Must be at the top to allow background to be overridden. */
      ${vt()}
      padding: 0;
      border: 0;
      background: var(--admin-bar-button-popover-bg);
      border-radius: var(--admin-bar-button-popover-border-radius, var(--admin-bar-border-radius));
      color: var(--admin-bar-button-popover-color-text, rgb(255 255 255));
      scrollbar-color: color-mix(in srgb, var(--admin-bar-color-text), transparent 20%) var(--admin-bar-bg-color);
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
          backdrop-filter: var(--admin-bar-glass-filter, blur(20px) saturate(200%));
          background: var(--admin-bar-button-popover-bg, var(--admin-bar-glass-color));
        }
      }
    }
  `;let P=ft;N([b({attribute:"button-href"})],P.prototype,"href");N([b({attribute:"label-text"})],P.prototype,"label");N([b({attribute:"greeting-button",type:Boolean})],P.prototype,"isGreetingButton");N([b({attribute:"logout-button",type:Boolean})],P.prototype,"isLogoutButton");N([gt()],P.prototype,"_hasPopoverSlot");customElements.get("admin-bar-button")||customElements.define("admin-bar-button",P);var Ft=Object.defineProperty,v=(i,t,e,r)=>{for(var o=void 0,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=a(t,e,o)||o);return o&&Ft(t,e,o),o};const $t=class extends y{constructor(){super(...arguments),this.avatarAlt="Avatar of logged in user.",this.greetingText="Hello",this.logoutHref="#",this.logoutLabel="Sign out",this.showEnvironment=!1,this.showGreeting=!1,this.showLogout=!1,this._hasGreetingPopoverSlot=!1}handleGreetingPopoverSlotchange(t){const e=t.target.assignedNodes({flatten:!0});this._hasGreetingPopoverSlot=e.length>0}render(){const t={"admin-bar":!0,"admin-bar--environment":this.showEnvironment,"admin-bar--greeting":this.showGreeting,"admin-bar--logout":this.showLogout,"glass-surface":!0},e=this.showGreeting?c`<div class="greeting">
          ${this.avatarSrc?c`<img alt="${this.avatarAlt}" src="${this.avatarSrc}" width="25px" height="25px" part="avatar" />`:p}
          <span><slot name="greeting">${this.greetingText}</slot></span>
        </div>`:p,r=this._hasGreetingPopoverSlot?c`
          <admin-bar-button greeting-button>
            ${e}
            <div slot="popover">
              <slot name="greeting-popover" @slotchange="${this.handleGreetingPopoverSlotchange}"></slot>
            </div>
          </admin-bar-button>
        `:c`${e}<slot
            name="greeting-popover"
            @slotchange="${this.handleGreetingPopoverSlotchange}"
          ></slot>`,o=this.showLogout?c`<slot name="logout"
          ><admin-bar-button
            logout-button
            button-href="${this.logoutHref}"
            label-text="${this.logoutLabel}"
          ></admin-bar-button
        ></slot>`:p;return c`
      <nav class="${j(t)}">
        <div class="environment"></div>
        ${r}
        <div class="buttons" part="buttons"><slot></slot></div>
        <div class="logout">${o}</div>
      </nav>
    `}};$t.styles=G`
    * {
      position: relative;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .admin-bar {
      /* Must be at the top to allow background to be overridden. */
      ${vt()}
      --border-color: color-mix(in srgb, currentColor, transparent 80%);
      display: grid;
      grid-template-areas:
        'environment environment environment'
        'greeting buttons logout';
      grid-template-columns: max-content 1fr max-content;
      grid-template-rows: 0 var(--admin-bar-height, 43px);
      align-items: center;
      background: var(--admin-bar-bg);
      border-radius: var(--admin-bar-border-radius);
      font-family: var(--admin-bar-font-stack);
      font-size: var(--admin-bar-font-size, 0.9rem);
      color: var(--admin-bar-color-text, rgb(255 255 255 / 0.8));
      scrollbar-color: color-mix(in srgb, var(--admin-bar-color-text), transparent 20%) var(--admin-bar-bg-color);
      scrollbar-width: thin;

      &.admin-bar--environment {
        --admin-bar-show-environment: true;
        grid-template-rows: var(--environment-height) var(--admin-bar-height, 43px);
      }
      &.admin-bar--greeting {
        --admin-bar-show-greeting: true;
      }
      &.admin-bar--logout {
        --admin-bar-show-logout: true;
      }
    }

    .environment {
      grid-area: environment;
      border-radius: var(--admin-bar-border-radius) var(--admin-bar-border-radius) 0 0;

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
      border-end-start-radius: var(--admin-bar-border-radius);
      border-end-end-radius: var(--admin-bar-border-radius);
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
  `;let g=$t;v([b({attribute:"avatar-alt"})],g.prototype,"avatarAlt");v([b({attribute:"avatar-src"})],g.prototype,"avatarSrc");v([b({attribute:"greeting-text"})],g.prototype,"greetingText");v([b({attribute:"logout-href"})],g.prototype,"logoutHref");v([b({attribute:"logout-label"})],g.prototype,"logoutLabel");v([b({attribute:"show-environment",type:Boolean})],g.prototype,"showEnvironment");v([b({attribute:"show-greeting",type:Boolean})],g.prototype,"showGreeting");v([b({attribute:"show-logout",type:Boolean})],g.prototype,"showLogout");v([gt()],g.prototype,"_hasGreetingPopoverSlot");customElements.get("admin-bar")||customElements.define("admin-bar",g);var Wt=Object.defineProperty,U=(i,t,e,r)=>{for(var o=void 0,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=a(t,e,o)||o);return o&&Wt(t,e,o),o};const _t=class extends y{constructor(){super(...arguments),this.dlContent=[],this.labelContent="",this.labelPosition="after",this.multiLine=!1,this.tableContent={rows:[]},this.textContent=""}render(){var t,e,r,o,n,a;const l=[];this.textContent??!1?l.push(c`<span class="text">${this.textContent}</span>`):this.dlContent.length?l.push(c`<dl part="dl">
          ${this.dlContent.map(d=>c`<dt>${d[0]??""}</dt>
                <dd>${d[1]??""}</dd>`)}
        </dl>`):(e=(t=this.tableContent)==null?void 0:t.rows)!=null&&e.length&&l.push(c`<table part="table">
          ${(o=(r=this.tableContent)==null?void 0:r.headers)!=null&&o.length?c`<thead>
                <tr>
                  ${this.tableContent.headers.map(d=>c`<th>${d??""}</th>`)}
                </tr>
              </thead>`:p}
          ${c`<tbody>
            ${this.tableContent.rows.map(d=>c`<tr>
                  ${d.map(u=>c`<td>${u}</td>`)}
                </tr>`)}
          </tbody>`}
          ${(a=(n=this.tableContent)==null?void 0:n.footers)!=null&&a.length?c`<tfoot>
                <tr>
                  ${this.tableContent.footers.map(d=>c`<td>${d??""}</td>`)}
                </tr>
              </tfoot>`:p}
        </table>`);let s=c`<slot>${l}</slot>`;return(this.labelContent??!1)&&(s=this.labelPosition==="before"?c`<span class="label">${this.labelContent}</span>${s}`:c`${s}<span class="label">${this.labelContent}</span>`),c`<span class="admin-bar-text${this.multiLine?" multi-line":""}">${s}</span>`}};_t.styles=G`
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
  `;let S=_t;U([b({attribute:"dl-content",type:Array})],S.prototype,"dlContent");U([b({attribute:"label-content"})],S.prototype,"labelContent");U([b({attribute:"label-position"})],S.prototype,"labelPosition");U([b({attribute:"multi-line",type:Boolean})],S.prototype,"multiLine");U([b({attribute:"table-content",type:Object})],S.prototype,"tableContent");U([b({attribute:"text-content"})],S.prototype,"textContent");customElements.get("admin-bar-text")||customElements.define("admin-bar-text",S);class Jt extends HTMLElement{static observedAttributes=["data-api-status"];_actionUrl=void 0;_csrfToken=void 0;_requestStatus;_sessionActionUrl=void 0;attributeChangedCallback(t,e,r){t==="data-api-status"&&["errored","loading","ready","resolved"].includes(r)&&(r==="errored"&&(this._csrfToken=void 0),this._requestStatus=r)}connectedCallback(){this._actionUrl=this.dataset.actionUrl,this._sessionActionUrl=this.dataset.sessionActionUrl,this.setApiStatus("ready")}async actionRequest(t,e=""){if(this._requestStatus!=="loading"){if(this._actionUrl===void 0)return{message:"action-url-invalid",status:"error"};if(this._csrfToken===void 0){const r=await this.getSessionInfo();if(r.csrfTokenValue)this._csrfToken=r.csrfTokenValue;else return{message:"csrf-token-invalid",status:"error"}}try{this.setApiStatus("loading");const r=new FormData;r.append("requestHandle",t),e&&r.append("params",e);const o=await fetch(this._actionUrl,{body:r,headers:{Accept:"application/json","X-CSRF-Token":this._csrfToken??"","X-Requested-With":"XMLHttpRequest"},method:"POST"});if(!o.ok)throw this.setApiStatus("errored"),new Error(`Response status: ${o.status}`);const n=await o.json();if(n.status!=="success")throw n.message;return this.setApiStatus("resolved"),n}catch(r){return this.setApiStatus("errored"),{message:r,status:"error"}}}}async getSessionInfo(){if(this._sessionActionUrl)return fetch(this._sessionActionUrl,{headers:{Accept:"application/json"}}).then(t=>t.json())}setApiStatus(t){this.dataset.apiStatus=t}}customElements.define("craft-admin-bar",Jt);class Kt extends HTMLElement{_searchForm=null;_resultsElement=null;_onSearchFormSubmit=async t=>{t.preventDefault();const e=this.shadowRoot?.querySelector('input[type="search"]')??null;if(e){const r=await window.adminBarPostRequest(this,"craft-search-search",JSON.stringify({query:e.value}));if(this._resultsElement){let o,n;if(r.searchResultsStatus==="OK"){o=document.getElementById("admin-bar-search-results-template"),n=o.content;const a=document.createElement("ul");r.searchResults.forEach(l=>{const d=n.cloneNode(!0).querySelector("li"),u=d.querySelector("admin-bar-button.edit");l.cpEditUrl?(u.setAttribute("button-href",l.cpEditUrl),u.setAttribute("label-text",l.title)):d.removeChild(u);const h=d.querySelector("admin-bar-button.view"),m=d.querySelector("admin-bar-text.view");l.url??!1?(h.setAttribute("button-href",l.url),h.setAttribute("label-text",l.title),m.remove()):(m.setAttribute("text-content",l.title),h.remove()),a.append(d)}),this._resultsElement.replaceChildren(a)}else o=document.getElementById("admin-bar-search-no-results-template"),n=o.content,this._resultsElement.replaceChildren(n.cloneNode(!0))}}};constructor(){super();const e=document.getElementById("admin-bar-search-template").content;this.attachShadow({mode:"open"}).appendChild(e.cloneNode(!0)),this._searchForm=this.shadowRoot?.querySelector("form")??null,this._resultsElement=this.shadowRoot?.querySelector("form + div")??null}connectedCallback(){this._searchForm?.addEventListener("submit",this._onSearchFormSubmit)}disconnectedCallback(){this._searchForm?.removeEventListener("submit",this._onSearchFormSubmit)}}customElements.define("craft-admin-bar-search",Kt);window.adminBarPostRequest=async(i,t,e="")=>{try{const r=i.closest("craft-admin-bar"),o=await r?.actionRequest(t,e);if(o?.status==="success"){if(o.refreshPage)location.reload();else if(setTimeout(()=>{r&&(r.dataset.apiStatus="ready")},3e3),o.data)return o.data}else throw o?.message}catch(r){console.error(`Admin Bar: ${r}`)}};
