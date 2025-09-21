/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,W=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),Y=new WeakMap;let lt=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(W&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Y.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Y.set(t,e))}return e}toString(){return this.cssText}};const $t=e=>new lt(typeof e=="string"?e:e+"",void 0,V),H=(e,...t)=>{const r=e.length===1?e[0]:t.reduce(((o,i,s)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1]),e[0]);return new lt(r,e,V)},yt=(e,t)=>{if(W)e.adoptedStyleSheets=t.map((r=>r instanceof CSSStyleSheet?r:r.styleSheet));else for(const r of t){const o=document.createElement("style"),i=z.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,e.appendChild(o)}},Q=W?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return $t(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_t,defineProperty:xt,getOwnPropertyDescriptor:At,getOwnPropertyNames:wt,getOwnPropertySymbols:St,getPrototypeOf:Et}=Object,I=globalThis,tt=I.trustedTypes,Ct=tt?tt.emptyScript:"",kt=I.reactiveElementPolyfillSupport,T=(e,t)=>e,q={toAttribute(e,t){switch(t){case Boolean:e=e?Ct:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},J=(e,t)=>!_t(e,t),et={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:J};Symbol.metadata??=Symbol("metadata"),I.litPropertyMetadata??=new WeakMap;let E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=et){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&xt(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:i}=At(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){const a=o?.call(this);i?.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??et}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const e=Et(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const t=this.properties,r=[...wt(t),...St(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(Q(o))}else e!==void 0&&t.push(Q(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:q).toAttribute(t,r.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const i=r.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:q;this._$Em=o;const a=s.fromAttribute(t,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){const o=this.constructor,i=this[e];if(r??=o.getPropertyOptions(e),!((r.hasChanged??J)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,i]of r){const{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[T("elementProperties")]=new Map,E[T("finalized")]=new Map,kt?.({ReactiveElement:E}),(I.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=globalThis,D=K.trustedTypes,rt=D?D.createPolicy("lit-html",{createHTML:e=>e}):void 0,dt="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,ht="?"+$,Pt=`<${ht}>`,A=document,O=()=>A.createComment(""),R=e=>e===null||typeof e!="object"&&typeof e!="function",X=Array.isArray,Ut=e=>X(e)||typeof e?.[Symbol.iterator]=="function",F=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,it=/>/g,_=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,at=/"/g,ct=/^(?:script|style|textarea|title)$/i,Tt=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),h=Tt(1),w=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),nt=new WeakMap,x=A.createTreeWalker(A,129);function pt(e,t){if(!X(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return rt!==void 0?rt.createHTML(t):t}const Ot=(e,t)=>{const r=e.length-1,o=[];let i,s=t===2?"<svg>":t===3?"<math>":"",a=U;for(let d=0;d<r;d++){const n=e[d];let c,u,l=-1,m=0;for(;m<n.length&&(a.lastIndex=m,u=a.exec(n),u!==null);)m=a.lastIndex,a===U?u[1]==="!--"?a=ot:u[1]!==void 0?a=it:u[2]!==void 0?(ct.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=_):u[3]!==void 0&&(a=_):a===_?u[0]===">"?(a=i??U,l=-1):u[1]===void 0?l=-2:(l=a.lastIndex-u[2].length,c=u[1],a=u[3]===void 0?_:u[3]==='"'?at:st):a===at||a===st?a=_:a===ot||a===it?a=U:(a=_,i=void 0);const v=a===_&&e[d+1].startsWith("/>")?" ":"";s+=a===U?n+Pt:l>=0?(o.push(c),n.slice(0,l)+dt+n.slice(l)+$+v):n+$+(l===-2?d:v)}return[pt(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class M{constructor({strings:t,_$litType$:r},o){let i;this.parts=[];let s=0,a=0;const d=t.length-1,n=this.parts,[c,u]=Ot(t,r);if(this.el=M.createElement(c,o),x.currentNode=this.el.content,r===2||r===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=x.nextNode())!==null&&n.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(dt)){const m=u[a++],v=i.getAttribute(l).split($),N=/([.?@])?(.*)/.exec(m);n.push({type:1,index:s,name:N[2],strings:v,ctor:N[1]==="."?Mt:N[1]==="?"?Ht:N[1]==="@"?Bt:G}),i.removeAttribute(l)}else l.startsWith($)&&(n.push({type:6,index:s}),i.removeAttribute(l));if(ct.test(i.tagName)){const l=i.textContent.split($),m=l.length-1;if(m>0){i.textContent=D?D.emptyScript:"";for(let v=0;v<m;v++)i.append(l[v],O()),x.nextNode(),n.push({type:2,index:++s});i.append(l[m],O())}}}else if(i.nodeType===8)if(i.data===ht)n.push({type:2,index:s});else{let l=-1;for(;(l=i.data.indexOf($,l+1))!==-1;)n.push({type:7,index:s}),l+=$.length-1}s++}}static createElement(t,r){const o=A.createElement("template");return o.innerHTML=t,o}}function C(e,t,r=e,o){if(t===w)return t;let i=o!==void 0?r._$Co?.[o]:r._$Cl;const s=R(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,r,o)),o!==void 0?(r._$Co??=[])[o]=i:r._$Cl=i),i!==void 0&&(t=C(e,i._$AS(e,t.values),i,o)),t}class Rt{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:o}=this._$AD,i=(t?.creationScope??A).importNode(r,!0);x.currentNode=i;let s=x.nextNode(),a=0,d=0,n=o[0];for(;n!==void 0;){if(a===n.index){let c;n.type===2?c=new B(s,s.nextSibling,this,t):n.type===1?c=new n.ctor(s,n.name,n.strings,this,t):n.type===6&&(c=new Lt(s,this,t)),this._$AV.push(c),n=o[++d]}a!==n?.index&&(s=x.nextNode(),a++)}return x.currentNode=A,i}p(t){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class B{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,o,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=C(this,t,r),R(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ut(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=M.createElement(pt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{const s=new Rt(i,this),a=s.u(this.options);s.p(r),this.T(a),this._$AH=s}}_$AC(t){let r=nt.get(t.strings);return r===void 0&&nt.set(t.strings,r=new M(t)),r}k(t){X(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const s of t)i===r.length?r.push(o=new B(this.O(O()),this.O(O()),this,this.options)):o=r[i],o._$AI(s),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,o,i,s){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=p}_$AI(t,r=this,o,i){const s=this.strings;let a=!1;if(s===void 0)t=C(this,t,r,0),a=!R(t)||t!==this._$AH&&t!==w,a&&(this._$AH=t);else{const d=t;let n,c;for(t=s[0],n=0;n<s.length-1;n++)c=C(this,d[o+n],r,n),c===w&&(c=this._$AH[n]),a||=!R(c)||c!==this._$AH[n],c===p?t=p:t!==p&&(t+=(c??"")+s[n+1]),this._$AH[n]=c}a&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Mt extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Ht extends G{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Bt extends G{constructor(t,r,o,i,s){super(t,r,o,i,s),this.type=5}_$AI(t,r=this){if((t=C(this,t,r,0)??p)===w)return;const o=this._$AH,i=t===p&&o!==p||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==p&&(o===p||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Lt{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const Nt=K.litHtmlPolyfillSupport;Nt?.(M,B),(K.litHtmlVersions??=[]).push("3.3.1");const zt=(e,t,r)=>{const o=r?.renderBefore??t;let i=o._$litPart$;if(i===void 0){const s=r?.renderBefore??null;o._$litPart$=i=new B(t.insertBefore(O(),s),s,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=globalThis;let y=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=zt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}};y._$litElement$=!0,y.finalized=!0,Z.litElementHydrateSupport?.({LitElement:y});const jt=Z.litElementPolyfillSupport;jt?.({LitElement:y});(Z.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt={ATTRIBUTE:1},Dt=e=>(...t)=>({_$litDirective$:e,values:t});class It{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=Dt(class extends It{constructor(e){if(super(e),e.type!==qt.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((o=>o!==""))));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const i=!!t[o];i===this.st.has(o)||this.nt?.has(o)||(i?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return w}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:J},Ft=(e=Gt,t,r)=>{const{kind:o,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),o==="accessor"){const{name:a}=r;return{set(d){const n=t.get.call(this);t.set.call(this,d),this.requestUpdate(a,n,e)},init(d){return d!==void 0&&this.C(a,void 0,e,d),d}}}if(o==="setter"){const{name:a}=r;return function(d){const n=this[a];t.call(this,d),this.requestUpdate(a,n,e)}}throw Error("Unsupported decorator location: "+o)};function b(e){return(t,r)=>typeof r=="object"?Ft(e,t,r):((o,i,s)=>{const a=i.hasOwnProperty(s);return i.constructor.createProperty(s,o),a?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(e){return b({...e,state:!0,attribute:!1})}const bt=class extends y{render(){return h` <div class="wrapper">
      <div class="effect"></div>
      <div class="tint"></div>
      <div class="shine"></div>
      <div class="content">
        <slot></slot>
      </div>

      <svg width="0" height="0" style="position: absolute;">
        <defs>
          <filter id="filter" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.001 0.015"
              numOctaves="1"
              seed="17"
              result="turbulence"
            />

            <feComponentTransfer in="turbulence" result="mapped">
              <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
              <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
              <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
            </feComponentTransfer>

            <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />

            <feSpecularLighting
              in="softMap"
              surfaceScale="5"
              specularConstant="1"
              specularExponent="100"
              lighting-color="white"
              result="specLight"
            >
              <fePointLight x="-200" y="-200" z="300" />
            </feSpecularLighting>

            <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />

            <feDisplacementMap in="SourceGraphic" in2="softMap" scale="200" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
    </div>`}};bt.styles=H`
    .wrapper {
      display: grid;
      border-radius: var(--admin-bar-border-radius);
      box-shadow:
        0 6px 6px rgba(0, 0, 0, 0.2),
        0 0 20px rgba(0, 0, 0, 0.1);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2);
      overflow: hidden;

      & > div {
        border-radius: var(--admin-bar-border-radius);
      }

      @container style(--admin-bar-context-popover: true) {
        &,
        & > div {
          border-radius: var(--admin-bar-button-popover-border-radius, var(--admin-bar-border-radius));
        }
      }
    }

    .effect {
      position: absolute;
      inset: 0;
      -webkit-backdrop-filter: var(--admin-bar-bg-filter);
      backdrop-filter: var(--admin-bar-bg-filter);
      overflow: hidden;
      z-index: 0;

      @container style(--admin-bar-enable-glass: true) {
        & {
          -webkit-backdrop-filter: var(--admin-bar-bg-filter) url(#filter);
          backdrop-filter: var(--admin-bar-bg-filter) url(#filter);
        }
      }
    }

    .tint {
      position: absolute;
      inset: 0;
      background-color: var(--admin-bar-bg-color);
      background: var(--admin-bar-bg, var(--admin-bar-bg-color));
      z-index: 1;

      @container style(--admin-bar-context-popover: true) {
        & {
          background: var(--admin-bar-button-popover-bg, var(--admin-bar-bg-color));
        }
      }
    }

    .shine {
      position: absolute;
      inset: 0;
      background: linear-gradient(
          140deg,
          color-mix(in oklch, var(--admin-bar-bg-color), oklch(1 0 89.876 / 0.8)),
          10%,
          var(--admin-bar-bg-color) 70%,
          color-mix(in oklch, var(--admin-bar-bg-color), oklch(1 0 89.876 / 0.7))
        )
        border-box;
      border: 1px solid transparent;
      border-radius: var(--admin-bar-border-radius);
      mask:
        linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      mask-composite: exclude;
      overflow: hidden;
      z-index: 2;
    }

    .content {
      z-index: 3;
    }
  `;let mt=bt;function Wt(){return H`
    & {
      background-color: var(--admin-bar-button-color-bg, transparent);
      color: var(--admin-bar-button-color-text, white);
      cursor: pointer;
      transition:
        background var(--admin-bar-transition-duration, 0.4s) ease-out,
        color var(--admin-bar-transition-duration, 0.4s) ease-out;

      &:hover {
        transition-duration: calc(var(--admin-bar-transition-duration, 0.4s) / 2);
      }
    }

    &:not(.admin-bar-button--logout):hover {
      --admin-bar-button-color-bg: var(--admin-bar-button-color-bg-hover, var(--admin-bar-button-color-text, white));
      --admin-bar-text-label-color-bg: var(--admin-bar-color-highlight);
      --admin-bar-text-label-color-text: var(--admin-bar-button-color-bg-hover);
      color: var(--admin-bar-color-highlight, oklch(0.6 0.4 83));
    }
  `}var Vt=Object.defineProperty,L=(e,t,r,o)=>{for(var i=void 0,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=a(t,r,i)||i);return i&&Vt(t,r,i),i};const gt=class extends y{constructor(){super(),this.label="",this.isGreetingButton=!1,this.isLogoutButton=!1,this._hasPopoverSlot=!1,customElements.get("admin-bar-surface")||customElements.define("admin-bar-surface",mt)}handlePopoverSlotchange(t){const r=t.target.assignedNodes({flatten:!0});this._hasPopoverSlot=r.length>0}render(){const t={"admin-bar-button":!0,"admin-bar-button--el-a":!1,"admin-bar-button--el-button":!1,"admin-bar-button--el-select":!1,"admin-bar-button--greeting":this.isGreetingButton,"admin-bar-button--logout":this.isLogoutButton},r=h`<slot name="before-label"></slot><slot name="label-before"></slot
      ><slot>${this.label??!1?h`<span>${this.label}</span>`:p}</slot><slot name="label-after"></slot
      ><slot name="after-label"></slot>`;return this.href?(t["admin-bar-button--el-a"]=!0,h`<a class="${j(t)}" href="${this.href}">${r}</a>`):(t["admin-bar-button--el-button"]=!0,this._hasPopoverSlot?h`<button class="${j(t)}" popovertarget="admin-bar-button-popover">
          ${r}
        </button>
        <admin-bar-surface popover id="admin-bar-button-popover" part="popover">
          <slot name="popover" @slotchange="${this.handlePopoverSlotchange}"></slot>
        </admin-bar-surface>`:h`<button class="${j(t)}">${r}</button
      ><slot name="popover" @slotchange="${this.handlePopoverSlotchange}"></slot>`)}};gt.styles=H`
    @position-try --popover-above {
      inset: auto;
      bottom: anchor(top);
    }
    @position-try --popover-below {
      inset: auto;
      top: anchor(bottom);
    }
    :host {
      display: block;
      text-box: trim-both cap alphabetic;
    }
    .admin-bar-button {
      ${Wt()}
      --popover-name: --popover-anchor;
      anchor-name: var(--popover-name);
      appearance: none;
      box-sizing: border-box;
      display: flex;
      flex-wrap: nowrap;
      gap: 5px;
      align-items: center;
      padding: var(--admin-bar-block-padding) var(--admin-bar-inline-padding);
      min-width: 100%;
      height: var(--admin-bar-height, 43px);
      border: none;
      outline-color: var(--admin-bar-color-highlight);
      font-family: var(--admin-bar-font-stack);
      font-size: var(--font-size);
      text-decoration: none;
      white-space: nowrap;

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
          --admin-bar-button-color-text: var(--admin-bar-color-text-logout);
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

    [popover] {
      --admin-bar-context-popover: true;
      padding: 0;
      border: 0;
      background: transparent;
      border-radius: var(--admin-bar-button-popover-border-radius, var(--admin-bar-border-radius));
      color: var(--admin-bar-button-popover-color-text, rgb(255 255 255));
      box-shadow:
        0 6px 6px rgba(0, 0, 0, 0.2),
        0 0 20px rgba(0, 0, 0, 0.1);
      scrollbar-color: color-mix(in srgb, var(--admin-bar-color-text), transparent 20%) var(--admin-bar-bg-color);
      scrollbar-width: thin;

      @supports (position-anchor: var(--popover-name)) and (position-try-fallbacks: flip-block) {
        & {
          position-anchor: var(--popover-name);
          position: fixed;
          position-try-fallbacks: --popover-above;
          justify-self: anchor-center;
          inset: auto;
          top: anchor(bottom);
          margin: 4px;

          @container style(--admin-bar-class-bottom: true) {
            position-try-fallbacks: --popover-below;
            inset: auto;
            bottom: anchor(top);
          }
        }
      }
      @supports not (position-anchor: --popover-anchor) {
        &::backdrop {
          backdrop-filter: blur(20px) saturate(200%);
          background: var(--admin-bar-button-popover-bg);
        }
      }
    }
  `;let k=gt;L([b({attribute:"button-href"})],k.prototype,"href");L([b({attribute:"label-text"})],k.prototype,"label");L([b({attribute:"greeting-button",type:Boolean})],k.prototype,"isGreetingButton");L([b({attribute:"logout-button",type:Boolean})],k.prototype,"isLogoutButton");L([ut()],k.prototype,"_hasPopoverSlot");customElements.get("admin-bar-button")||customElements.define("admin-bar-button",k);var Jt=Object.defineProperty,f=(e,t,r,o)=>{for(var i=void 0,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=a(t,r,i)||i);return i&&Jt(t,r,i),i};const ft=class extends y{constructor(){super(),this.avatarAlt="Avatar of logged in user.",this.greetingText="Hello",this.logoutHref="#",this.logoutLabel="Sign out",this.showEnvironment=!1,this.showGreeting=!1,this.showLogout=!1,this._hasGreetingPopoverSlot=!1,customElements.get("admin-bar-surface")||customElements.define("admin-bar-surface",mt)}handleGreetingPopoverSlotchange(t){const r=t.target.assignedNodes({flatten:!0});this._hasGreetingPopoverSlot=r.length>0}render(){const t={"admin-bar":!0,"admin-bar--environment":this.showEnvironment,"admin-bar--greeting":this.showGreeting,"admin-bar--logout":this.showLogout,"glass-surface":!0},r=this.showGreeting?h`<div class="greeting">
          ${this.avatarSrc?h`<img alt="${this.avatarAlt}" src="${this.avatarSrc}" width="25px" height="25px" part="avatar" />`:p}
          <span><slot name="greeting">${this.greetingText}</slot></span>
        </div>`:p,o=this._hasGreetingPopoverSlot?h`
          <admin-bar-button greeting-button>
            ${r}
            <div slot="popover">
              <slot name="greeting-popover" @slotchange="${this.handleGreetingPopoverSlotchange}"></slot>
            </div>
          </admin-bar-button>
        `:h`${r}<slot
            name="greeting-popover"
            @slotchange="${this.handleGreetingPopoverSlotchange}"
          ></slot>`,i=this.showLogout?h`<slot name="logout"
          ><admin-bar-button
            logout-button
            button-href="${this.logoutHref}"
            label-text="${this.logoutLabel}"
          ></admin-bar-button
        ></slot>`:p;return h`
      <admin-bar-surface>
        <nav class="${j(t)}">
          <div class="environment"></div>
          ${o}
          <div class="buttons" part="buttons"><slot></slot></div>
          <div class="logout">${i}</div>
        </nav>
      </admin-bar-surface>
    `}};ft.styles=H`
    :host(.fixed) {
      --admin-bar-class-fixed: true;
    }

    :host(.sticky) {
      --admin-bar-class-sticky: true;
    }

    :host(.bottom) {
      --admin-bar-class-bottom: true;
    }

    * {
      position: relative;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    admin-bar-surface {
      display: block;
    }

    .admin-bar {
      --border-color: color-mix(in oklch, var(--admin-bar-color-text), transparent 90%);
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
      color: var(--admin-bar-color-text, oklch(1 0 89.876 / 0.8));
      scrollbar-color: color-mix(in oklch, var(--admin-bar-color-text), transparent 20%) var(--admin-bar-bg-color);
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
  `;let g=ft;f([b({attribute:"avatar-alt"})],g.prototype,"avatarAlt");f([b({attribute:"avatar-src"})],g.prototype,"avatarSrc");f([b({attribute:"greeting-text"})],g.prototype,"greetingText");f([b({attribute:"logout-href"})],g.prototype,"logoutHref");f([b({attribute:"logout-label"})],g.prototype,"logoutLabel");f([b({attribute:"show-environment",type:Boolean})],g.prototype,"showEnvironment");f([b({attribute:"show-greeting",type:Boolean})],g.prototype,"showGreeting");f([b({attribute:"show-logout",type:Boolean})],g.prototype,"showLogout");f([ut()],g.prototype,"_hasGreetingPopoverSlot");customElements.get("admin-bar")||customElements.define("admin-bar",g);var Kt=Object.defineProperty,P=(e,t,r,o)=>{for(var i=void 0,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=a(t,r,i)||i);return i&&Kt(t,r,i),i};const vt=class extends y{constructor(){super(...arguments),this.dlContent=[],this.labelContent="",this.labelPosition="after",this.multiLine=!1,this.tableContent={rows:[]},this.textContent=""}render(){const t=[];this.textContent??!1?t.push(h`<span class="text">${this.textContent}</span>`):this.dlContent.length?t.push(h`<dl part="dl">
          ${this.dlContent.map(o=>h`<dt>${o[0]??""}</dt>
                <dd>${o[1]??""}</dd>`)}
        </dl>`):this.tableContent?.rows?.length&&t.push(h`<table part="table">
          ${this.tableContent?.headers?.length?h`<thead>
                <tr>
                  ${this.tableContent.headers.map(o=>h`<th>${o??""}</th>`)}
                </tr>
              </thead>`:p}
          ${h`<tbody>
            ${this.tableContent.rows.map(o=>h`<tr>
                  ${o.map(i=>h`<td>${i}</td>`)}
                </tr>`)}
          </tbody>`}
          ${this.tableContent?.footers?.length?h`<tfoot>
                <tr>
                  ${this.tableContent.footers.map(o=>h`<td>${o??""}</td>`)}
                </tr>
              </tfoot>`:p}
        </table>`);let r=h`<slot>${t}</slot>`;return(this.labelContent??!1)&&(r=this.labelPosition==="before"?h`<span class="label">${this.labelContent}</span>${r}`:h`${r}<span class="label">${this.labelContent}</span>`),h`<span class="admin-bar-text${this.multiLine?" multi-line":""}">${r}</span>`}};vt.styles=H`
    :host {
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
  `;let S=vt;P([b({attribute:"dl-content",type:Array})],S.prototype,"dlContent");P([b({attribute:"label-content"})],S.prototype,"labelContent");P([b({attribute:"label-position"})],S.prototype,"labelPosition");P([b({attribute:"multi-line",type:Boolean})],S.prototype,"multiLine");P([b({attribute:"table-content",type:Object})],S.prototype,"tableContent");P([b({attribute:"text-content"})],S.prototype,"textContent");customElements.get("admin-bar-text")||customElements.define("admin-bar-text",S);class Xt extends HTMLElement{static observedAttributes=["data-api-status"];_actionUrl=void 0;_csrfToken=void 0;_requestStatus;_sessionActionUrl=void 0;attributeChangedCallback(t,r,o){t==="data-api-status"&&["errored","loading","ready","resolved"].includes(o)&&(o==="errored"&&(this._csrfToken=void 0),this._requestStatus=o)}connectedCallback(){this._actionUrl=this.dataset.actionUrl,this._sessionActionUrl=this.dataset.sessionActionUrl,this.setApiStatus("ready")}async actionRequest(t,r=""){if(this._requestStatus!=="loading"){if(this._actionUrl===void 0)return{message:"action-url-invalid",status:"error"};if(this._csrfToken===void 0){const o=await this.getSessionInfo();if(o.csrfTokenValue)this._csrfToken=o.csrfTokenValue;else return{message:"csrf-token-invalid",status:"error"}}try{this.setApiStatus("loading");const o=new FormData;o.append("requestHandle",t),r&&o.append("params",r);const i=await fetch(this._actionUrl,{body:o,headers:{Accept:"application/json","X-CSRF-Token":this._csrfToken??"","X-Requested-With":"XMLHttpRequest"},method:"POST"});if(!i.ok)throw this.setApiStatus("errored"),new Error(`Response status: ${i.status}`);const s=await i.json();if(s.status!=="success")throw s.message;return this.setApiStatus("resolved"),s}catch(o){return this.setApiStatus("errored"),{message:o,status:"error"}}}}async getSessionInfo(){if(this._sessionActionUrl)return fetch(this._sessionActionUrl,{headers:{Accept:"application/json"}}).then(t=>t.json())}setApiStatus(t){this.dataset.apiStatus=t}}customElements.define("craft-admin-bar",Xt);class Zt extends HTMLElement{_searchForm=null;_resultsElement=null;_onSearchFormSubmit=async t=>{t.preventDefault();const r=this.shadowRoot?.querySelector('input[type="search"]')??null;if(r){const o=await window.adminBarPostRequest(this,"craft-search-search",JSON.stringify({query:r.value}));if(this._resultsElement){let i,s;if(o.searchResultsStatus==="OK"){i=document.getElementById("admin-bar-search-results-template"),s=i.content;const a=document.createElement("ul");o.searchResults.forEach(d=>{const c=s.cloneNode(!0).querySelector("li"),u=c.querySelector("admin-bar-button.edit");d.cpEditUrl?(u.setAttribute("button-href",d.cpEditUrl),u.setAttribute("label-text",d.title)):c.removeChild(u);const l=c.querySelector("admin-bar-button.view"),m=c.querySelector("admin-bar-text.view");d.url??!1?(l.setAttribute("button-href",d.url),l.setAttribute("label-text",d.title),m.remove()):(m.setAttribute("text-content",d.title),l.remove()),a.append(c)}),this._resultsElement.replaceChildren(a)}else i=document.getElementById("admin-bar-search-no-results-template"),s=i.content,this._resultsElement.replaceChildren(s.cloneNode(!0))}}};constructor(){super();const r=document.getElementById("admin-bar-search-template").content;this.attachShadow({mode:"open"}).appendChild(r.cloneNode(!0)),this._searchForm=this.shadowRoot?.querySelector("form")??null,this._resultsElement=this.shadowRoot?.querySelector("form + div")??null}connectedCallback(){this._searchForm?.addEventListener("submit",this._onSearchFormSubmit)}disconnectedCallback(){this._searchForm?.removeEventListener("submit",this._onSearchFormSubmit)}}customElements.define("craft-admin-bar-search",Zt);window.adminBarPostRequest=async(e,t,r="")=>{try{const o=e.closest("craft-admin-bar"),i=await o?.actionRequest(t,r);if(i?.status==="success"){if(i.refreshPage)location.reload();else if(setTimeout(()=>{o&&(o.dataset.apiStatus="ready")},3e3),i.data)return i.data}else throw i?.message}catch(o){console.error(`Admin Bar: ${o}`)}};
