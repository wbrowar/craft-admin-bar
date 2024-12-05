/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,Y=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),Q=new WeakMap;let pt=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o;const t=this.t;if(Y&&i===void 0){const e=t!==void 0&&t.length===1;e&&(i=Q.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&Q.set(t,i))}return i}toString(){return this.cssText}};const vt=i=>new pt(typeof i=="string"?i:i+"",void 0,F),W=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,o,n)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[n+1],i[0]);return new pt(e,i,F)},$t=(i,t)=>{if(Y)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),o=j.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=e.cssText,i.appendChild(r)}},X=Y?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return vt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ft,defineProperty:_t,getOwnPropertyDescriptor:yt,getOwnPropertyNames:At,getOwnPropertySymbols:xt,getPrototypeOf:wt}=Object,P=globalThis,tt=P.trustedTypes,Et=tt?tt.emptyScript:"",et=P.reactiveElementPolyfillSupport,U=(i,t)=>i,D={toAttribute(i,t){switch(t){case Boolean:i=i?Et:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},J=(i,t)=>!ft(i,t),rt={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:J};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),P.litPropertyMetadata??(P.litPropertyMetadata=new WeakMap);class k extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=rt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,e);o!==void 0&&_t(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){const{get:o,set:n}=yt(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const l=o==null?void 0:o.call(this);n.call(this,s),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??rt}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const t=wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,r=[...At(e),...xt(e)];for(const o of r)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,o]of e)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const o=this._$Eu(e,r);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)e.unshift(X(o))}else t!==void 0&&e.push(X(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var r;const o=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,o);if(n!==void 0&&o.reflect===!0){const s=(((r=o.converter)==null?void 0:r.toAttribute)!==void 0?o.converter:D).toAttribute(e,o.type);this._$Em=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){var r;const o=this.constructor,n=o._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const s=o.getPropertyOptions(n),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)==null?void 0:r.fromAttribute)!==void 0?s.converter:D;this._$Em=n,this[n]=l.fromAttribute(e,s.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??J)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,s]of o)s.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],s)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$EO)==null||t.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(r)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[U("elementProperties")]=new Map,k[U("finalized")]=new Map,et==null||et({ReactiveElement:k}),(P.reactiveElementVersions??(P.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,V=I.trustedTypes,it=V?V.createPolicy("lit-html",{createHTML:i=>i}):void 0,ut="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,bt="?"+f,St=`<${bt}>`,x=document,O=()=>x.createComment(""),H=i=>i===null||typeof i!="object"&&typeof i!="function",K=Array.isArray,kt=i=>K(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",G=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,nt=/>/g,_=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,at=/"/g,gt=/^(?:script|style|textarea|title)$/i,Pt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),b=Pt(1),w=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),lt=new WeakMap,y=x.createTreeWalker(x,129);function mt(i,t){if(!K(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(t):t}const Ct=(i,t)=>{const e=i.length-1,r=[];let o,n=t===2?"<svg>":t===3?"<math>":"",s=T;for(let l=0;l<e;l++){const a=i[l];let c,p,h=-1,m=0;for(;m<a.length&&(s.lastIndex=m,p=s.exec(a),p!==null);)m=s.lastIndex,s===T?p[1]==="!--"?s=ot:p[1]!==void 0?s=nt:p[2]!==void 0?(gt.test(p[2])&&(o=RegExp("</"+p[2],"g")),s=_):p[3]!==void 0&&(s=_):s===_?p[0]===">"?(s=o??T,h=-1):p[1]===void 0?h=-2:(h=s.lastIndex-p[2].length,c=p[1],s=p[3]===void 0?_:p[3]==='"'?at:st):s===at||s===st?s=_:s===ot||s===nt?s=T:(s=_,o=void 0);const $=s===_&&i[l+1].startsWith("/>")?" ":"";n+=s===T?a+St:h>=0?(r.push(c),a.slice(0,h)+ut+a.slice(h)+f+$):a+f+(h===-2?l:$)}return[mt(i,n+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class N{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let n=0,s=0;const l=t.length-1,a=this.parts,[c,p]=Ct(t,e);if(this.el=N.createElement(c,r),y.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=y.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(ut)){const m=p[s++],$=o.getAttribute(h).split(f),z=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:z[2],strings:$,ctor:z[1]==="."?Ut:z[1]==="?"?Ot:z[1]==="@"?Ht:q}),o.removeAttribute(h)}else h.startsWith(f)&&(a.push({type:6,index:n}),o.removeAttribute(h));if(gt.test(o.tagName)){const h=o.textContent.split(f),m=h.length-1;if(m>0){o.textContent=V?V.emptyScript:"";for(let $=0;$<m;$++)o.append(h[$],O()),y.nextNode(),a.push({type:2,index:++n});o.append(h[m],O())}}}else if(o.nodeType===8)if(o.data===bt)a.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf(f,h+1))!==-1;)a.push({type:7,index:n}),h+=f.length-1}n++}}static createElement(t,e){const r=x.createElement("template");return r.innerHTML=t,r}}function C(i,t,e=i,r){var o,n;if(t===w)return t;let s=r!==void 0?(o=e._$Co)==null?void 0:o[r]:e._$Cl;const l=H(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==l&&((n=s==null?void 0:s._$AO)==null||n.call(s,!1),l===void 0?s=void 0:(s=new l(i),s._$AT(i,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=s:e._$Cl=s),s!==void 0&&(t=C(i,s._$AS(i,t.values),s,r)),t}class Tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??x).importNode(e,!0);y.currentNode=o;let n=y.nextNode(),s=0,l=0,a=r[0];for(;a!==void 0;){if(s===a.index){let c;a.type===2?c=new R(n,n.nextSibling,this,t):a.type===1?c=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(c=new Nt(n,this,t)),this._$AV.push(c),a=r[++l]}s!==(a==null?void 0:a.index)&&(n=y.nextNode(),s++)}return y.currentNode=x,o}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class R{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),H(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):kt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=N.createElement(mt(o.h,o.h[0]),this.options)),o);if(((e=this._$AH)==null?void 0:e._$AD)===n)this._$AH.p(r);else{const s=new Tt(n,this),l=s.u(this.options);s.p(r),this.T(l),this._$AH=s}}_$AC(t){let e=lt.get(t.strings);return e===void 0&&lt.set(t.strings,e=new N(t)),e}k(t){K(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const n of t)o===e.length?e.push(r=new R(this.O(O()),this.O(O()),this,this.options)):r=e[o],r._$AI(n),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}_$AI(t,e=this,r,o){const n=this.strings;let s=!1;if(n===void 0)t=C(this,t,e,0),s=!H(t)||t!==this._$AH&&t!==w,s&&(this._$AH=t);else{const l=t;let a,c;for(t=n[0],a=0;a<n.length-1;a++)c=C(this,l[r+a],e,a),c===w&&(c=this._$AH[a]),s||(s=!H(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c??"")+n[a+1]),this._$AH[a]=c}s&&!o&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ut extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Ot extends q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Ht extends q{constructor(t,e,r,o,n){super(t,e,r,o,n),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??d)===w)return;const r=this._$AH,o=t===d&&r!==d||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==d&&(r===d||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Nt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const ht=I.litHtmlPolyfillSupport;ht==null||ht(N,R),(I.litHtmlVersions??(I.litHtmlVersions=[])).push("3.2.1");const Rt=(i,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const n=(e==null?void 0:e.renderBefore)??null;r._$litPart$=o=new R(t.insertBefore(O(),n),n,void 0,e??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let A=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(i){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=Rt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)==null||i.setConnected(!1)}render(){return w}};var dt;A._$litElement$=!0,A.finalized=!0,(dt=globalThis.litElementHydrateSupport)==null||dt.call(globalThis,{LitElement:A});const ct=globalThis.litElementPolyfillSupport;ct==null||ct({LitElement:A});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Lt=i=>(...t)=>({_$litDirective$:i,values:t});class zt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=Lt(class extends zt{constructor(i){var t;if(super(i),i.type!==Mt.ATTRIBUTE||i.name!=="class"||((t=i.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,r;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!((e=this.nt)!=null&&e.has(n))&&this.st.add(n);return this.render(t)}const o=i.element.classList;for(const n of this.st)n in t||(o.remove(n),this.st.delete(n));for(const n in t){const s=!!t[n];s===this.st.has(n)||(r=this.nt)!=null&&r.has(n)||(s?(o.add(n),this.st.add(n)):(o.remove(n),this.st.delete(n)))}return w}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:J},Bt=(i=jt,t,e)=>{const{kind:r,metadata:o}=e;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(e.name,i),r==="accessor"){const{name:s}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,i)},init(l){return l!==void 0&&this.P(s,void 0,i),l}}}if(r==="setter"){const{name:s}=e;return function(l){const a=this[s];t.call(this,l),this.requestUpdate(s,a,i)}}throw Error("Unsupported decorator location: "+r)};function u(i){return(t,e)=>typeof e=="object"?Bt(i,t,e):((r,o,n)=>{const s=o.hasOwnProperty(n);return o.constructor.createProperty(n,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(o,n):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dt(i){return u({...i,state:!0,attribute:!1})}var It=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,M=(i,t,e,r)=>{for(var o=r>1?void 0:r?Vt(t,e):t,n=i.length-1,s;n>=0;n--)(s=i[n])&&(o=(r?s(t,e,o):s(o))||o);return r&&o&&It(t,e,o),o};let E=class extends A{constructor(){super(...arguments),this.label="",this.isLogoutButton=!1,this._hasPopoverSlot=!1}handlePopoverSlotchange(i){const t=i.target.assignedNodes({flatten:!0});this._hasPopoverSlot=t.length>0}render(){const i={"admin-bar-button":!0,"admin-bar-button--el-a":!1,"admin-bar-button--el-button":!1,"admin-bar-button--el-select":!1,"admin-bar-button--logout":this.isLogoutButton},t=b`<slot name="label-before"></slot
      ><slot>${this.label??!1?b`<span>${this.label}</span>`:d}</slot
      ><slot name="label-after"></slot>`;return this.href?(i["admin-bar-button--el-a"]=!0,b`<a class="${B(i)}" href="${this.href}">${t}</a>`):(i["admin-bar-button--el-button"]=!0,this._hasPopoverSlot?b`<button class="${B(i)}" popovertarget="admin-bar-button-popover">
          ${t}
        </button>
        <div popover id="admin-bar-button-popover">
          <div class="glass-surface"></div>
          <div class="glass-edge"></div>
          <slot name="popover" @slotchange="${this.handlePopoverSlotchange}"></slot>
        </div>`:b`<button class="${B(i)}">${t}</button
      ><slot name="popover" @slotchange="${this.handlePopoverSlotchange}"></slot>`)}};E.styles=W`
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
      display: flex;
      flex-wrap: nowrap;
      gap: 5px;
      align-items: center;
      padding: 0 clamp(4px, 1vw, 13px);
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

    @position-try --popover-top {
      margin: 0 0 2px 0;
      top: auto;
      top: anchor(var(--achor-name) none);
      bottom: anchor(var(--achor-name) top);
    }
    [popover] {
      padding: 0;
      border: 0;
      background: var(--admin-bar-button-popover-bg, var(--admin-bar-bg-color));
      backdrop-filter: var(--admin-bar-backdrop-filter, blur(20px) saturate(200%));
      border: 2px solid color-mix(in srgb, var(--admin-bar-button-color-bg-hover), transparent 80%);
      border-radius: var(--admin-bar-button-popover-border-radius, var(--admin-bar-border-radius));
      box-shadow: var(--admin-bar-shadow);
      color: var(--admin-bar-button-color-text, white);

      @supports (position-anchor: --popover-anchor) and (position-try-fallbacks: --popover-top) {
        & {
          position-anchor: --popover-anchor;
          position-try-fallbacks: --popover-top;
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
  `;M([u({attribute:"button-href",type:[String,Function,Array]})],E.prototype,"href",2);M([u({attribute:"label-text"})],E.prototype,"label",2);M([u({attribute:"logout-button",type:Boolean})],E.prototype,"isLogoutButton",2);M([Dt()],E.prototype,"_hasPopoverSlot",2);E=M([Z("admin-bar-button")],E);function Wt(){return W`
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
  `}var qt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,v=(i,t,e,r)=>{for(var o=r>1?void 0:r?Gt(t,e):t,n=i.length-1,s;n>=0;n--)(s=i[n])&&(o=(r?s(t,e,o):s(o))||o);return r&&o&&qt(t,e,o),o};let g=class extends A{constructor(){super(...arguments),this.avatarAlt="Avatar of logged in user.",this.greetingText="Hello",this.logoutHref="#",this.logoutLabel="Sign out",this.showEnvironment=!1,this.showGreeting=!1,this.showLogout=!1}render(){const i={"admin-bar":!0,"admin-bar--environment":this.showEnvironment,"admin-bar--greeting":this.showGreeting,"admin-bar--logout":this.showLogout},t=this.showGreeting?b`
          ${this.avatarSrc?b`<img alt="${this.avatarAlt}" src="${this.avatarSrc}" width="25px" height="25px" />`:d}
          <span><slot name="greeting">${this.greetingText}</slot></span>
        `:d,e=this.showLogout?b`<slot name="logout"
          ><admin-bar-button
            logout-button
            button-href="${this.logoutHref}"
            label-text="${this.logoutLabel}"
          ></admin-bar-button
        ></slot>`:d;return b`
      <nav class="${B(i)}">
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
  `;v([u({attribute:"avatar-alt"})],g.prototype,"avatarAlt",2);v([u({attribute:"avatar-src"})],g.prototype,"avatarSrc",2);v([u({attribute:"greeting-text"})],g.prototype,"greetingText",2);v([u({attribute:"logout-href"})],g.prototype,"logoutHref",2);v([u({attribute:"logout-label"})],g.prototype,"logoutLabel",2);v([u({attribute:"show-environment",type:Boolean})],g.prototype,"showEnvironment",2);v([u({attribute:"show-greeting",type:Boolean})],g.prototype,"showGreeting",2);v([u({attribute:"show-logout",type:Boolean})],g.prototype,"showLogout",2);g=v([Z("admin-bar")],g);var Yt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,L=(i,t,e,r)=>{for(var o=r>1?void 0:r?Ft(t,e):t,n=i.length-1,s;n>=0;n--)(s=i[n])&&(o=(r?s(t,e,o):s(o))||o);return r&&o&&Yt(t,e,o),o};let S=class extends A{constructor(){super(...arguments),this.labelContent="",this.labelPosition="after",this.multiLine=!1,this.textContent=""}render(){let i=b`<slot
      >${this.textContent??!1?b`<span>${this.textContent}</span>`:d}</slot
    >`;return(this.labelContent??!1)&&(i=this.labelPosition==="before"?b`<span class="label">${this.labelContent}</span>${i}`:b`${i}<span class="label">${this.labelContent}</span>`),b`<span class="admin-bar-text${this.multiLine?" multi-line":""}">${i}</span>`}};S.styles=W`
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

      &.multi-line {
        padding: var(--admin-bar-text-padding, clamp(4px, 1vw, 13px));
        height: unset;
        white-space: unset;
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
  `;L([u({attribute:"label-content"})],S.prototype,"labelContent",2);L([u({attribute:"label-position"})],S.prototype,"labelPosition",2);L([u({attribute:"multi-line",type:Boolean})],S.prototype,"multiLine",2);L([u({attribute:"text-content"})],S.prototype,"textContent",2);S=L([Z("admin-bar-text")],S);
