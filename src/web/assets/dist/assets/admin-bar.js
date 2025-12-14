var $t=e=>{throw TypeError(e)},_t=(e,t,o)=>t.has(e)||$t("Cannot "+o),dt=(e,t,o)=>(_t(e,t,"read from private field"),o?o.call(e):t.get(e)),Ft=(e,t,o)=>t.has(e)?$t("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),Gt=(e,t,o,r)=>(_t(e,t,"write to private field"),t.set(e,o),o);const G=globalThis,et=G.ShadowRoot&&(G.ShadyCSS===void 0||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ot=Symbol(),ct=new WeakMap;let wt=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==ot)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(et&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=ct.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&ct.set(t,e))}return e}toString(){return this.cssText}};const Jt=e=>new wt(typeof e=="string"?e:e+"",void 0,ot),k=(e,...t)=>{const o=e.length===1?e[0]:t.reduce(((r,a,s)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[s+1]),e[0]);return new wt(o,e,ot)},Xt=(e,t)=>{if(et)e.adoptedStyleSheets=t.map((o=>o instanceof CSSStyleSheet?o:o.styleSheet));else for(const o of t){const r=document.createElement("style"),a=G.litNonce;a!==void 0&&r.setAttribute("nonce",a),r.textContent=o.cssText,e.appendChild(r)}},ht=et?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let o="";for(const r of t.cssRules)o+=r.cssText;return Jt(o)})(e):e,{is:Qt,defineProperty:Kt,getOwnPropertyDescriptor:Zt,getOwnPropertyNames:Yt,getOwnPropertySymbols:te,getPrototypeOf:ee}=Object,Q=globalThis,ut=Q.trustedTypes,oe=ut?ut.emptyScript:"",re=Q.reactiveElementPolyfillSupport,q=(e,t)=>e,J={toAttribute(e,t){switch(t){case Boolean:e=e?oe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=e!==null;break;case Number:o=e===null?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},rt=(e,t)=>!Qt(e,t),pt={attribute:!0,type:String,converter:J,reflect:!1,useDefault:!1,hasChanged:rt};Symbol.metadata??=Symbol("metadata"),Q.litPropertyMetadata??=new WeakMap;let R=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(e,o,t);r!==void 0&&Kt(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){const{get:r,set:a}=Zt(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:r,set(s){const i=r?.call(this);a?.call(this,s),this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pt}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;const e=ee(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){const t=this.properties,o=[...Yt(t),...te(t)];for(const r of o)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,r]of t)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const r=this._$Eu(t,o);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const r of o)t.unshift(ht(r))}else e!==void 0&&t.push(ht(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(r!==void 0&&o.reflect===!0){const a=(o.converter?.toAttribute!==void 0?o.converter:J).toAttribute(t,o.type);this._$Em=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,t){const o=this.constructor,r=o._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const a=o.getPropertyOptions(r),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:J;this._$Em=r;const i=s.fromAttribute(t,a.type);this[r]=i??this._$Ej?.get(r)??i,this._$Em=null}}requestUpdate(e,t,o){if(e!==void 0){const r=this.constructor,a=this[e];if(o??=r.getPropertyOptions(e),!((o.hasChanged??rt)(a,t)||o.useDefault&&o.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:r,wrapped:a},s){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),a!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,a]of o){const{wrapped:s}=a,i=this[r];s!==!0||this._$AL.has(r)||i===void 0||this.C(r,void 0,a,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((o=>o.hostUpdate?.())),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};R.elementStyles=[],R.shadowRootOptions={mode:"open"},R[q("elementProperties")]=new Map,R[q("finalized")]=new Map,re?.({ReactiveElement:R}),(Q.reactiveElementVersions??=[]).push("2.1.1");const at=globalThis,X=at.trustedTypes,bt=X?X.createPolicy("lit-html",{createHTML:e=>e}):void 0,xt="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,kt="?"+S,ae=`<${kt}>`,T=document,H=()=>T.createComment(""),I=e=>e===null||typeof e!="object"&&typeof e!="function",st=Array.isArray,se=e=>st(e)||typeof e?.[Symbol.iterator]=="function",Z=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,mt=/>/g,C=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,ft=/"/g,At=/^(?:script|style|textarea|title)$/i,ie=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),d=ie(1),P=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),yt=new WeakMap,E=T.createTreeWalker(T,129);function St(e,t){if(!st(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return bt!==void 0?bt.createHTML(t):t}const ne=(e,t)=>{const o=e.length-1,r=[];let a,s=t===2?"<svg>":t===3?"<math>":"",i=N;for(let h=0;h<o;h++){const n=e[h];let p,m,u=-1,$=0;for(;$<n.length&&(i.lastIndex=$,m=i.exec(n),m!==null);)$=i.lastIndex,i===N?m[1]==="!--"?i=gt:m[1]!==void 0?i=mt:m[2]!==void 0?(At.test(m[2])&&(a=RegExp("</"+m[2],"g")),i=C):m[3]!==void 0&&(i=C):i===C?m[0]===">"?(i=a??N,u=-1):m[1]===void 0?u=-2:(u=i.lastIndex-m[2].length,p=m[1],i=m[3]===void 0?C:m[3]==='"'?ft:vt):i===ft||i===vt?i=C:i===gt||i===mt?i=N:(i=C,a=void 0);const _=i===C&&e[h+1].startsWith("/>")?" ":"";s+=i===N?n+ae:u>=0?(r.push(p),n.slice(0,u)+xt+n.slice(u)+S+_):n+S+(u===-2?h:_)}return[St(e,s+(e[o]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class V{constructor({strings:t,_$litType$:o},r){let a;this.parts=[];let s=0,i=0;const h=t.length-1,n=this.parts,[p,m]=ne(t,o);if(this.el=V.createElement(p,r),E.currentNode=this.el.content,o===2||o===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(a=E.nextNode())!==null&&n.length<h;){if(a.nodeType===1){if(a.hasAttributes())for(const u of a.getAttributeNames())if(u.endsWith(xt)){const $=m[i++],_=a.getAttribute(u).split(S),F=/([.?@])?(.*)/.exec($);n.push({type:1,index:s,name:F[2],strings:_,ctor:F[1]==="."?de:F[1]==="?"?ce:F[1]==="@"?he:K}),a.removeAttribute(u)}else u.startsWith(S)&&(n.push({type:6,index:s}),a.removeAttribute(u));if(At.test(a.tagName)){const u=a.textContent.split(S),$=u.length-1;if($>0){a.textContent=X?X.emptyScript:"";for(let _=0;_<$;_++)a.append(u[_],H()),E.nextNode(),n.push({type:2,index:++s});a.append(u[$],H())}}}else if(a.nodeType===8)if(a.data===kt)n.push({type:2,index:s});else{let u=-1;for(;(u=a.data.indexOf(S,u+1))!==-1;)n.push({type:7,index:s}),u+=S.length-1}s++}}static createElement(t,o){const r=T.createElement("template");return r.innerHTML=t,r}}function O(e,t,o=e,r){if(t===P)return t;let a=r!==void 0?o._$Co?.[r]:o._$Cl;const s=I(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(e),a._$AT(e,o,r)),r!==void 0?(o._$Co??=[])[r]=a:o._$Cl=a),a!==void 0&&(t=O(e,a._$AS(e,t.values),a,r)),t}class le{constructor(t,o){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:o},parts:r}=this._$AD,a=(t?.creationScope??T).importNode(o,!0);E.currentNode=a;let s=E.nextNode(),i=0,h=0,n=r[0];for(;n!==void 0;){if(i===n.index){let p;n.type===2?p=new z(s,s.nextSibling,this,t):n.type===1?p=new n.ctor(s,n.name,n.strings,this,t):n.type===6&&(p=new ue(s,this,t)),this._$AV.push(p),n=r[++h]}i!==n?.index&&(s=E.nextNode(),i++)}return E.currentNode=T,a}p(t){let o=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,o),o+=r.strings.length-2):r._$AI(t[o])),o++}}class z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,o,r,a){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=r,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&t?.nodeType===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=O(this,t,o),I(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==P&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):se(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:o,_$litType$:r}=t,a=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=V.createElement(St(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===a)this._$AH.p(o);else{const s=new le(a,this),i=s.u(this.options);s.p(o),this.T(i),this._$AH=s}}_$AC(t){let o=yt.get(t.strings);return o===void 0&&yt.set(t.strings,o=new V(t)),o}k(t){st(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let r,a=0;for(const s of t)a===o.length?o.push(r=new z(this.O(H()),this.O(H()),this,this.options)):r=o[a],r._$AI(s),a++;a<o.length&&(this._$AR(r&&r._$AB.nextSibling,a),o.length=a)}_$AR(t=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class K{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,o,r,a,s){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=o,this._$AM=a,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=c}_$AI(t,o=this,r,a){const s=this.strings;let i=!1;if(s===void 0)t=O(this,t,o,0),i=!I(t)||t!==this._$AH&&t!==P,i&&(this._$AH=t);else{const h=t;let n,p;for(t=s[0],n=0;n<s.length-1;n++)p=O(this,h[r+n],o,n),p===P&&(p=this._$AH[n]),i||=!I(p)||p!==this._$AH[n],p===c?t=c:t!==c&&(t+=(p??"")+s[n+1]),this._$AH[n]=p}i&&!a&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class de extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class ce extends K{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class he extends K{constructor(t,o,r,a,s){super(t,o,r,a,s),this.type=5}_$AI(t,o=this){if((t=O(this,t,o,0)??c)===P)return;const r=this._$AH,a=t===c&&r!==c||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==c&&(r===c||a);a&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ue{constructor(t,o,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=o,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const pe=at.litHtmlPolyfillSupport;pe?.(V,z),(at.litHtmlVersions??=[]).push("3.3.1");const be=(e,t,o)=>{const r=o?.renderBefore??t;let a=r._$litPart$;if(a===void 0){const s=o?.renderBefore??null;r._$litPart$=a=new z(t.insertBefore(H(),s),s,void 0,o??{})}return a._$AI(e),a},it=globalThis;let f=class extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=be(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return P}};f._$litElement$=!0,f.finalized=!0,it.litElementHydrateSupport?.({LitElement:f});const ge=it.litElementPolyfillSupport;ge?.({LitElement:f});(it.litElementVersions??=[]).push("4.2.1");const me={ATTRIBUTE:1},ve=e=>(...t)=>({_$litDirective$:e,values:t});class fe{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,r){this._$Ct=t,this._$AM=o,this._$Ci=r}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}const M=ve(class extends fe{constructor(e){if(super(e),e.type!==me.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((r=>r!==""))));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const o=e.element.classList;for(const r of this.st)r in t||(o.remove(r),this.st.delete(r));for(const r in t){const a=!!t[r];a===this.st.has(r)||this.nt?.has(r)||(a?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return P}}),ye={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:rt},$e=(e=ye,t,o)=>{const{kind:r,metadata:a}=o;let s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(o.name,e),r==="accessor"){const{name:i}=o;return{set(h){const n=t.get.call(this);t.set.call(this,h),this.requestUpdate(i,n,e)},init(h){return h!==void 0&&this.C(i,void 0,e,h),h}}}if(r==="setter"){const{name:i}=o;return function(h){const n=this[i];t.call(this,h),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+r)};function l(e){return(t,o)=>typeof o=="object"?$e(e,t,o):((r,a,s)=>{const i=a.hasOwnProperty(s);return a.constructor.createProperty(s,r),i?Object.getOwnPropertyDescriptor(a,s):void 0})(e,t,o)}function w(e){return l({...e,state:!0,attribute:!1})}const _e=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,o),o);function Ct(e){return(t,o)=>{const{slot:r,selector:a}=e??{},s="slot"+(r?`[name=${r}]`:":not([name])");return _e(t,o,{get(){const i=this.renderRoot?.querySelector(s),h=i?.assignedElements(e)??[];return a===void 0?h:h.filter((n=>n.matches(a)))}})}}var we=Object.defineProperty,nt=(e,t,o,r)=>{for(var a=void 0,s=e.length-1,i;s>=0;s--)(i=e[s])&&(a=i(t,o,a)||a);return a&&we(t,o,a),a};const Et=class extends f{constructor(){super(...arguments),this.progressValue=0,this._progressState="reset",this._progressWidth=0}_onProgressAnimationEnd(){["error","success"].includes(this._progressState)&&(this._progressState="reset")}render(){return d` <div class="wrapper">
      <div class="effect"></div>
      <div class="tint"></div>
      <div class="shine"></div>
      <div
        data-testid="surface-progress"
        class="progress ${this._progressState}"
        @animationend="${this._onProgressAnimationEnd}"
        style="--_progress-width: ${this._progressWidth}%;"
      ></div>
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
    </div>`}willUpdate(t){t.has("progressValue")&&(this._progressWidth=0,this.progressValue<0?(this._progressState="error",this._progressWidth=100):this.progressValue>=100?(this._progressState="success",this._progressWidth=100):this.progressValue>=0&&this.progressValue<100&&(this._progressState="display",this._progressWidth=this.progressValue))}};Et.styles=k`
    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    .wrapper {
      display: grid;
      position: relative;
      height: 100%;
      border-radius: var(--admin-bar-border-radius);
      box-shadow:
        0 6px 6px rgba(0, 0, 0, 0.2),
        0 0 20px rgba(0, 0, 0, 0.1);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2);
      overflow: hidden;

      & > div:not(.progress) {
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

    .progress {
      --_progress-color: var(--admin-bar-progress-color, oklch(0.6 0.24 253.14 / 0.7));
      position: absolute;
      inset-block-end: 0;
      height: var(--admin-bar-progress-height, var(--admin-bar-height));
      width: var(--_progress-width, 0);
      background-color: var(--_progress-color);
      border-radius: var(--admin-bar-border-radius);
      box-shadow:
        0 0 5px color-mix(in oklch, var(--_progress-color), transparent 10%),
        0 0 40px color-mix(in oklch, var(--_progress-color), transparent 50%);
      transition:
        background-color var(--admin-bar-transition-duration) ease-out,
        box-shadow var(--admin-bar-transition-duration) ease-out,
        width var(--admin-bar-transition-duration) ease-out;
      z-index: 3;

      &:is(.error, .success) {
        animation: fadeOut calc(var(--admin-bar-transition-duration) * 2) ease-out forwards 2s;

        &.error {
          animation-delay: 5s;
        }
      }
      &.reset {
        transition:
          background-color var(--admin-bar-transition-duration) ease-out,
          box-shadow var(--admin-bar-transition-duration) ease-out,
          width 0s ease-out;
        width: 0;
      }
      &.error {
        --_progress-color: var(--admin-bar-progress-color-error, oklch(0.66 0.29 30.27 / 0.7));
      }
      &.success {
        --_progress-color: var(--admin-bar-progress-color-success, oklch(0.85 0.36 146.38 / 0.7));
      }
    }

    .content {
      z-index: 4;
    }
  `;let W=Et;nt([l({attribute:"progress-value",type:Number})],W.prototype,"progressValue");nt([w()],W.prototype,"_progressState");nt([w()],W.prototype,"_progressWidth");function B(){return k`1px solid color-mix(in oklch, var(--admin-bar-color-text), transparent 90%)`}function Tt(){return k`
    & {
      background-color: color-mix(in srgb, var(--admin-bar-button-color-text, white), transparent 90%);
      outline: 3px solid color-mix(in srgb, var(--admin-bar-color-highlight), transparent 10%);
      outline-offset: -3px;
    }
  `}function Pt(){return k`
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

    &:hover {
      --admin-bar-button-color-bg: var(--admin-bar-button-color-bg-hover, var(--admin-bar-button-color-text, white));
      --admin-bar-text-label-color-bg: var(--admin-bar-color-highlight);
      --admin-bar-text-label-color-text: var(--admin-bar-button-color-bg-hover);
      color: var(--admin-bar-color-highlight, oklch(0.6 0.4 83));
    }
  `}function L(){return k`
    & {
      clip: rect(0 0 0 0);
      clip-path: inset(100%);
      position: absolute;
      width: 1px;
      height: 1px;
      white-space: nowrap;
      overflow: hidden;
    }
  `}var xe=Object.defineProperty,ke=(e,t,o,r)=>{for(var a=void 0,s=e.length-1,i;s>=0;s--)(i=e[s])&&(a=i(t,o,a)||a);return a&&xe(t,o,a),a};const Ut=class extends f{constructor(){super(...arguments),this.textContent=""}render(){return d`<span class="admin-bar-badge"><slot>${this.textContent}</slot></span>`}};Ut.styles=k`
    :host {
      padding: 0.4em;
      background-color: var(--admin-bar-badge-color-bg, rgb(255 255 255 / 0.9));
      border-radius: 4px;
      text-box: trim-both cap alphabetic;
      font-size: 0.8em;
      color: var(--admin-bar-badge-color-text, black);
      transition:
        background var(--admin-bar-transition-duration, 0.3s) ease-out,
        color var(--admin-bar-transition-duration, 0.3s) ease-out;
    }
  `;let lt=Ut;ke([l({attribute:"text-content"})],lt.prototype,"textContent");var Ae=Object.defineProperty,y=(e,t,o,r)=>{for(var a=void 0,s=e.length-1,i;s>=0;s--)(i=e[s])&&(a=i(t,o,a)||a);return a&&Ae(t,o,a),a};const Y=class extends f{constructor(){super(),this.badgeContent="",this.badgePosition="before",this.buttonDisabled=!1,this.label="",this.isGreetingButton=!1,this.isLogoutButton=!1,this._hasPopoverSlot=!1,this._inVertical=!1,this._popoverOpen=!1,customElements.get("admin-bar-badge")||customElements.define("admin-bar-badge",lt),customElements.get("admin-bar-surface")||customElements.define("admin-bar-surface",W)}_onVerticalPopoverButtonClick(){this._inVertical&&(this._popoverOpen=!this._popoverOpen)}_onPopoverButtonKeyDown(t){if(["ArrowUp","ArrowDown"].includes(t.key)){if(t.preventDefault(),!this._popoverOpen){const o=this.shadowRoot?.querySelector("[popovertarget]")??null;o&&o.click()}if(this._popoverFocusableChildren.length){const o='admin-bar-button, admin-bar-checkbox, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';let r=this._popoverFocusableChildren.filter(a=>a.matches(o));if(!r.length){r=[];const a=this.isGreetingButton?this._popoverFocusableChildren[0].querySelector("slot")?.assignedNodes({flatten:!0}):this._popoverFocusableChildren;a&&a.forEach(s=>{const i=s.querySelectorAll(o);for(const h of i)r.push(h)})}if(r.length){let a=null;const s=r.findIndex(i=>i===document.activeElement);t.key==="ArrowUp"?s<=0?a=r[r.length-1]:a=r[s-1]:t.key==="ArrowDown"&&(s>=r.length-1?a=r[0]:a=r[s+1]),a&&(a.tagName==="ADMIN-BAR-BUTTON"?a=a.shadowRoot?.querySelector("a, button")??null:a.tagName==="ADMIN-BAR-CHECKBOX"&&(a=a.shadowRoot?.querySelector("input")??null),a&&a.focus())}}}}updateInVertical(){this._popoverOpen=!1,this._inVertical=window.getComputedStyle(this).getPropertyValue("--admin-bar-vertical")==="true"}_onPopoverToggle(t){this._popoverOpen=t.newState==="open",this.dispatchEvent(new Se(t.oldState,t.newState)),this._popoverOpen?this.dispatchEvent(new Ce):this.dispatchEvent(new Ee)}_handlePopoverSlotchange(t){const o=t.target.assignedNodes({flatten:!0});this._hasPopoverSlot=o.length>0}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onPopoverButtonKeyDown),this.updateInVertical()}render(){const t={"admin-bar-button":!0,"admin-bar-button--disabled":this.buttonDisabled},o=this.badgeContent?d`<admin-bar-badge class="badge" text-content="${this.badgeContent}" part="badge"></admin-bar-badge>`:null,r=d`<slot name="before-label"></slot>${this.badgeContent&&this.badgePosition==="before"?o:c}<slot>${this.label??!1?d`<span>${this.label}</span>`:c}</slot>${this.badgeContent&&this.badgePosition==="after"?o:c}<slot name="after-label"></slot>`;if(this.href)return d`<a
        class="${M(t)}"
        aria-label="${this.buttonAriaLabel??c}"
        href="${this.buttonDisabled?c:this.href}"
        ?disabled="${this.buttonDisabled?"disabled":c}"
        >${r}</a
      >`;if(this._hasPopoverSlot){const a=d`<button
        class="${M(t)}"
        aria-label="${this.buttonAriaLabel??c}"
        ?disabled="${this.buttonDisabled?"disabled":c}"
        popovertarget="${this._inVertical?c:"admin-bar-button-popover"}"
        @click="${this._onVerticalPopoverButtonClick}"
      >
        ${r}
      </button>`;return this._inVertical?d`${a}
          <div class="vertical-popover" ?data-open="${this._popoverOpen}">
            <slot name="popover" @slotchange="${this._handlePopoverSlotchange}"></slot>
          </div>`:d`${a}<admin-bar-surface
          popover
          id="admin-bar-button-popover"
          part="popover"
          @toggle="${this._onPopoverToggle}"
          ><slot name="popover" @slotchange="${this._handlePopoverSlotchange}"></slot
        ></admin-bar-surface>`}return d`<button
        class="${M(t)}"
        aria-label="${this.buttonAriaLabel??c}"
        ?disabled="${this.buttonDisabled?"disabled":c}"
      >
        ${r}</button
      ><slot name="popover" @slotchange="${this._handlePopoverSlotchange}"></slot>`}};Y.shadowRootOptions={...f.shadowRootOptions,delegatesFocus:!0},Y.styles=k`
    @position-try --popover-above {
      inset: auto;
      bottom: anchor(top);
    }
    @position-try --popover-below {
      inset: auto;
      top: anchor(bottom);
    }
    :host {
      --popover-name: --popover-anchor;
      display: block;
      text-box: trim-both cap alphabetic;
    }

    .admin-bar-button {
      ${Pt()}
      anchor-name: var(--popover-name);
      appearance: none;
      box-sizing: border-box;
      display: flex;
      flex-wrap: nowrap;
      gap: 5px;
      align-items: center;
      padding: var(--admin-bar-block-padding) var(--admin-bar-inline-padding);
      min-width: 100%;
      min-height: var(--admin-bar-height, 43px);
      height: 100%;
      border: none;
      font-family: var(--admin-bar-font-stack);
      font-size: var(--font-size);
      text-decoration: none;
      outline: none;
      white-space: nowrap;

      &:focus-visible {
        ${Tt()}
      }
      :host([disabled]) & {
        cursor: not-allowed;
      }

      :host([logout-button]) &:hover {
        background-color: var(--admin-bar-color-highlight-logout, var(--admin-bar-color-highlight));
        color: var(--admin-bar-color-text-logout);
      }
      &:hover {
        .badge {
          background-color: var(--admin-bar-color-highlight);
          color: var(--admin-bar-color-text);
        }
      }
    }
    [popovertarget]:has(+ [popover]:popover-open) {
      --admin-bar-button-color-bg: color-mix(in srgb, var(--admin-bar-button-color-bg-hover), transparent 85%);

      &:hover {
        --admin-bar-button-color-bg: var(--admin-bar-button-color-bg-hover, var(--admin-bar-button-color-text, white));
        color: var(--admin-bar-color-highlight, oklch(0.6 0.4 83));

        .badge {
          background-color: var(--admin-bar-color-highlight);
          color: var(--admin-bar-color-text);
        }
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
          inset-block-start: calc(anchor(end) + 4px);
          margin: 0 4px;
          height: auto;

          @container style(--admin-bar-class-bottom: true) {
            position-try-fallbacks: --popover-below;
            inset: auto;
            inset-block-end: anchor(start);
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

    .vertical-popover {
      display: none;
      box-sizing: border-box;
      position: relative;
      margin: 5px;
      height: auto;
      background-color: var(--admin-bar-button-popover-bg, var(--admin-bar-bg-color));
      border-radius: var(--admin-bar-button-popover-border-radius, var(--admin-bar-border-radius));

      &[data-open] {
        display: flex;
      }
    }
  `;let v=Y;y([l({attribute:"badge-content"})],v.prototype,"badgeContent");y([l({attribute:"badge-position"})],v.prototype,"badgePosition");y([l({attribute:"button-aria-label"})],v.prototype,"buttonAriaLabel");y([l({attribute:"button-href"})],v.prototype,"href");y([l({attribute:"disabled",type:Boolean})],v.prototype,"buttonDisabled");y([l({attribute:"label-text"})],v.prototype,"label");y([l({attribute:"greeting-button",type:Boolean})],v.prototype,"isGreetingButton");y([l({attribute:"logout-button",type:Boolean})],v.prototype,"isLogoutButton");y([w()],v.prototype,"_hasPopoverSlot");y([w()],v.prototype,"_inVertical");y([w()],v.prototype,"_popoverOpen");y([Ct({flatten:!0,slot:"popover"})],v.prototype,"_popoverFocusableChildren");const Bt=class Rt extends Event{constructor(t,o){super(Rt.eventName,{bubbles:!0,composed:!0}),this.newState="closed",this.oldState="closed",this.open=!1,this.newState=o,this.oldState=t,this.open=o==="open"}};Bt.eventName="toggle";let Se=Bt;const Ot=class Dt extends Event{constructor(){super(Dt.eventName,{bubbles:!0,composed:!0})}};Ot.eventName="opened";let Ce=Ot;const Nt=class Lt extends Event{constructor(){super(Lt.eventName,{bubbles:!0,composed:!0})}};Nt.eventName="closed";let Ee=Nt;function Te(e,t){function o(s){if(s.button!==0)return;let{x:i,y:h}=e.eventToCoordinates(s);e.dragging={dx:e.pos.x-i,dy:e.pos.y-h},t.classList.add("dragging"),t.setPointerCapture(s.pointerId),t.style.userSelect="none",t.style.webkitUserSelect="none"}function r(){e.dragging=null,t.classList.remove("dragging"),t.style.userSelect="",t.style.webkitUserSelect=""}function a(s){if(!e.dragging)return;let{x:i,y:h}=e.eventToCoordinates(s);e.pos={x:i+e.dragging.dx,y:h+e.dragging.dy}}t.addEventListener("pointerdown",o),t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),t.addEventListener("pointermove",a),t.addEventListener("touchstart",s=>s.preventDefault()),t.addEventListener("dragstart",s=>s.preventDefault())}d`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="20px"
  height="20px"
  fill="currentColor"
  viewBox="0 -960 960 960"
>
  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224z" />
</svg>`;const Pe=d`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="currentColor"
  viewBox="0 -960 960 960"
>
  <path d="M440-440v240h-80v-160H200v-80zm160-320v160h160v80H520v-240z" />
</svg>`,Ue=d`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="20px"
  height="20px"
  fill="currentColor"
  viewBox="0 0 228.93 228.72"
>
  <path
    d="M227.35,48.35a14.64,14.64,0,0,0-2.79-17L197.84,4.58a15.47,15.47,0,0,0-17.42-3.17l-5.95,4.74L14.29,166.33,0,228.72l62.39-14.29L222.57,54.26ZM32.59,210.92a30,30,0,0,0-14.84-14.58l5.53-24.15,14.14,6.91,13.06,13.06,6.86,13,0,0Z"
  />
</svg>`,Be=d`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="20px"
  height="20px"
  fill="currentColor"
  viewBox="0 0 16 16"
>
  <path
    fill-rule="evenodd"
    d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10M.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8"
  />
</svg>`;var Re=Object.defineProperty,g=(e,t,o,r)=>{for(var a=void 0,s=e.length-1,i;s>=0;s--)(i=e[s])&&(a=i(t,o,a)||a);return a&&Re(t,o,a),a},j;const jt=class extends f{constructor(){super(),Ft(this,j),this.avatarAlt="Avatar of logged in user.",this.logoutHref="#",this.logoutLabel="Sign out",this.progressValue=0,this.showEnvironment=!1,this.showGreeting=!1,this.showLogout=!1,this.toolbarToggle=void 0,this.toolbarToggleDrag=void 0,this.toolbarToggleDragHandleDescription="Click to drag the toggle button to another position on the page.",this.toolbarToggleInnerDescription="Click to collapse toolbar.",this.toolbarToggleOuterDescription="Click to expand toolbar.",this.toolbarVertical=!1,this._outerToggleDraggableState=void 0,this._hasGreetingPopoverSlot=!1,this._hostWidth=0,customElements.get("admin-bar-button")||customElements.define("admin-bar-button",v),customElements.get("admin-bar-surface")||customElements.define("admin-bar-surface",W)}_toggleVerticalAdminBar(t){this.toolbarToggle=t}_handleGreetingPopoverSlotchange(t){const o=t.target.assignedNodes({flatten:!0});this._hasGreetingPopoverSlot=o.length>0}connectedCallback(){super.connectedCallback(),this.parentElement&&(Gt(this,j,new ResizeObserver(t=>{for(const o of t){const r=Math.round(o.contentRect.width);if(r!==this._hostWidth&&this.autoToggleVertical){const a=r<this.autoToggleVertical;this.toolbarVertical!==a&&(a?this.toolbarVertical=!0:this.toolbarVertical=!1)}this._hostWidth=r}})),dt(this,j).observe(this))}disconnectedCallback(){super.disconnectedCallback(),dt(this,j)?.disconnect()}firstUpdated(){if(this.toolbarToggle===""&&(this.toolbarToggle=this.toolbarVertical?"button":"toolbar"),this.toolbarToggleDrag===""&&(this.toolbarToggleDrag="reset"),this.toolbarToggleDrag){const t=this.shadowRoot?.querySelector(".outer-toggle")??null,o=t?.querySelector(".drag-handle")??null;t&&o&&(this._outerToggleDraggableState={eventToCoordinates(r){return{x:r.clientX,y:r.clientY}},dragging:null,_pos:{x:0,y:0},get pos(){return this._pos},set pos(r){this._pos=r,t.style.transform=`translate(${this._pos.x}px,${this._pos.y}px)`}},Te(this._outerToggleDraggableState,o))}}render(){const t={"admin-bar":!0,"glass-surface":!0},o=this.environmentDescription?d`<p>${this.environmentDescription}</p>`:c,r=d`<div data-testid="greeting-content" class="greeting-content">
      ${this.avatarSrc?d`<img alt="${this.avatarAlt}" src="${this.avatarSrc}" width="25px" height="25px" part="avatar" />`:c}
      <span><slot name="greeting">${this.greetingText??Ue}</slot></span>
    </div>`,a=this._hasGreetingPopoverSlot?d`
          <admin-bar-button
            class="greeting"
            button-aria-label="${this.greetingButtonAriaLabel??c}"
            greeting-button
          >
            ${r}
            <div slot="popover">
              <slot
                data-testid="greeting-popover--slotted"
                name="greeting-popover"
                @slotchange="${this._handleGreetingPopoverSlotchange}"
              ></slot>
            </div>
          </admin-bar-button>
        `:d`<div class="greeting">
          ${r}<slot
            data-testid="greeting-popover--empty"
            name="greeting-popover"
            @slotchange="${this._handleGreetingPopoverSlotchange}"
          ></slot>
        </div>`,s=this.showLogout?d`<slot name="logout"
          ><admin-bar-button logout-button button-href="${this.logoutHref}">${this.logoutLabel}</admin-bar-button></slot
        >`:c;return d`
      <admin-bar-surface class="outer-toggle" data-testid="outer-toggle">
        <div>
          <admin-bar-button @click="${()=>this._toggleVerticalAdminBar("toolbar")}"
            ><p>${this.toolbarToggleOuterDescription}</p>
            <slot name="outer-toggle">${r}</slot></admin-bar-button
          >
          <div class="drag-handle" data-testid="drag-handle">
            ${Be}
            <p>${this.toolbarToggleDragHandleDescription}</p>
          </div>
        </div>
      </admin-bar-surface>

      <admin-bar-surface
        class="${M(t)}"
        progress-value="${this.progressValue}"
        part="toolbar"
        data-testid="toolbar"
      >
        <div>
          <div data-testid="environment" class="environment">${o}</div>
          ${this.showGreeting?a:d`<div class="greeting"></div>`}
          <div class="buttons">
            <nav class="buttons-content" part="buttons"><slot></slot></nav>
          </div>
          <div class="logout">${s}</div>
          <admin-bar-button
            class="inner-toggle"
            data-testid="inner-toggle"
            @click="${()=>this._toggleVerticalAdminBar("button")}"
            ><p>${this.toolbarToggleInnerDescription}</p>
            <slot name="inner-toggle">${Pe}</slot></admin-bar-button
          >
        </div>
      </admin-bar-surface>
    `}updated(t){if(t.has("toolbarVertical")&&(this.autoToggleVertical&&(this.toolbarVertical?this.toolbarToggle="button":this.toolbarToggle="toolbar"),this._adminBarButtonChildren.length))for(const o of this._adminBarButtonChildren)o?.updateInVertical()}};j=new WeakMap,jt.styles=k`
    :host {
      container-name: admin-bar;
      container-type: inline-size;
      display: block;
    }
    :host(.fixed) {
      --admin-bar-class-fixed: true;
    }
    :host(.sticky) {
      --admin-bar-class-sticky: true;
    }
    :host(.bottom) {
      --admin-bar-class-bottom: true;
    }
    :host([vertical]) {
      --admin-bar-vertical: true;
    }

    * {
      position: relative;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .outer-toggle {
      display: inline-block;

      & > div {
        display: grid;
        grid-template-columns: max-content max-content;
      }
      p {
        ${L()}
      }
      .drag-handle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 100%;
        border-inline-start: ${B()};
        color: var(--admin-bar-color-text);
        cursor: grab;

        &.dragging {
          cursor: grabbing;
        }
        & > p {
          ${L()}
        }

        :host(:not([toolbar-toggle-drag])) & {
          display: none;
        }
      }

      :host([toolbar-toggle='toolbar']) &,
      :host(:not([toolbar-toggle])) & {
        display: none;
      }
    }

    .admin-bar {
      display: block;
      box-sizing: border-box;
      height: 100%;
      height: stretch;

      & > div {
        display: grid;
        grid-template-areas:
          'environment environment environment environment'
          'greeting buttons logout toggle';
        grid-template-columns: max-content 1fr max-content max-content;
        grid-template-rows: auto var(--admin-bar-height, 43px);
        align-items: center;
        background: var(--admin-bar-bg);
        border-radius: var(--admin-bar-border-radius);
        font-family: var(--admin-bar-font-stack);
        font-size: var(--admin-bar-font-size, 0.9rem);
        color: var(--admin-bar-color-text, oklch(1 0 89.876 / 0.8));

        :host([show-environment]) & {
          --admin-bar-show-environment: true;
        }
        :host([show-greeting]) & {
          --admin-bar-show-greeting: true;
        }
        :host([show-logout]) & {
          --admin-bar-show-logout: true;
        }

        :host([vertical]) & {
          grid-template-areas:
            'environment environment'
            'greeting toggle'
            'buttons buttons'
            'logout logout';
          grid-template-columns: 1fr max-content;
          grid-template-rows: auto var(--admin-bar-height, 43px) 1fr var(--admin-bar-height, 43px);
          align-items: stretch;
          height: 100%;
        }
      }

      :host(.vertical-fullscreen) & {
        height: auto;
      }

      :host([toolbar-toggle='button']) & {
        display: none;
      }
    }

    .environment {
      grid-area: environment;
      height: 0;
      border-radius: var(--admin-bar-border-radius) var(--admin-bar-border-radius) 0 0;

      :host([show-environment]) & {
        height: var(--admin-bar-environment-height, 4px);
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

      p {
        ${L()}
      }
    }

    admin-bar-button:is([greeting-button], [logout-button]),
    .logout,
    .inner-toggle {
      display: block;
      height: 100%;
    }
    .greeting {
      --admin-bar-vertical: false;
      grid-area: greeting;
      display: grid;

      &:not(admin-bar-button):not(:empty) {
        padding-inline: var(--admin-bar-inline-padding);
      }
      &::part(popover) {
        max-height: calc(100dvh - calc(var(--admin-bar-height, 43px) * 2));
      }
    }
    .greeting-content {
      --grid-template-columns: max-content;
      display: grid;
      grid-template-columns: var(--grid-template-columns);
      gap: 7px;
      align-items: center;
      margin-block-start: var(--margin-block-start, 0.5rem);
      margin-block-end: var(--margin-block-end, 0.5rem);
      border-end-start-radius: var(--admin-bar-border-radius);
      border-end-end-radius: var(--admin-bar-border-radius);
      white-space: nowrap;

      &:has(img) {
        --grid-template-columns: max-content max-content;
      }

      img {
        display: block;
        aspect-ratio: 1 / 1;
        width: var(--admin-bar-avatar-size, 25px);
        height: auto;
        background-size: cover;
        border-radius: 50%;
        box-shadow: var(--admin-bar-shadow-elements);
      }

      @container (width < 700px) and (not style(--admin-bar-vertical: true)) {
        &:has(img) {
          --grid-template-columns: max-content;
          display: grid;

          span {
            display: none;
          }
        }
      }
    }

    .inner-toggle {
      grid-area: toggle;
      display: none;
      border-inline-start: ${B()};

      :host([toolbar-toggle]) & {
        display: var(--admin-bar-toolbar-toggle-display, inline-flex);
      }

      p {
        ${L()}
      }
    }

    .buttons {
      grid-area: buttons;
      position: relative;
      width: 100%;
      height: 100%;

      :host([show-greeting]) & {
        border-inline-start: ${B()};

        @container style(--admin-bar-vertical: true) {
          & {
            border-block-start: ${B()};
            border-inline-start: none;
          }
        }
      }

      :host([show-logout]) & {
        border-inline-end: ${B()};

        @container style(--admin-bar-vertical: true) {
          & {
            border-block-end: ${B()};
            border-inline-end: none;
          }
        }
      }
    }
    .buttons-content {
      display: flex;
      flex-flow: row nowrap;
      position: absolute;
      inset: 0;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scrollbar-color: color-mix(in oklch, var(--admin-bar-color-text), transparent 20%)
        color-mix(in oklch, var(--admin-bar-bg-color), transparent 20%);
      scrollbar-width: thin;

      @container style(--admin-bar-vertical: true) {
        & {
          display: grid;
          align-items: start;
          overflow-x: unset;
          overflow: auto;
        }
      }
    }

    .logout {
      grid-area: logout;
    }
  `;let b=jt;g([l({attribute:"auto-toggle-vertical",type:Number})],b.prototype,"autoToggleVertical");g([l({attribute:"avatar-alt"})],b.prototype,"avatarAlt");g([l({attribute:"avatar-src"})],b.prototype,"avatarSrc");g([l({attribute:"environment-description"})],b.prototype,"environmentDescription");g([l({attribute:"greeting-button-aria-label"})],b.prototype,"greetingButtonAriaLabel");g([l({attribute:"greeting-text"})],b.prototype,"greetingText");g([l({attribute:"logout-href"})],b.prototype,"logoutHref");g([l({attribute:"logout-label"})],b.prototype,"logoutLabel");g([l({attribute:"progress",type:Number})],b.prototype,"progressValue");g([l({attribute:"show-environment",type:Boolean})],b.prototype,"showEnvironment");g([l({attribute:"show-greeting",type:Boolean})],b.prototype,"showGreeting");g([l({attribute:"show-logout",type:Boolean})],b.prototype,"showLogout");g([l({attribute:"toolbar-toggle",reflect:!0})],b.prototype,"toolbarToggle");g([l({attribute:"toolbar-toggle-drag",reflect:!0})],b.prototype,"toolbarToggleDrag");g([l({attribute:"toolbar-toggle-drag-handle-description"})],b.prototype,"toolbarToggleDragHandleDescription");g([l({attribute:"toolbar-toggle-inner-description"})],b.prototype,"toolbarToggleInnerDescription");g([l({attribute:"toolbar-toggle-outer-description"})],b.prototype,"toolbarToggleOuterDescription");g([l({attribute:"vertical",reflect:!0,type:Boolean})],b.prototype,"toolbarVertical");g([w()],b.prototype,"_outerToggleDraggableState");g([w()],b.prototype,"_hasGreetingPopoverSlot");g([w()],b.prototype,"_hostWidth");g([Ct({flatten:!0,selector:"admin-bar-button"})],b.prototype,"_adminBarButtonChildren");var Oe=Object.defineProperty,A=(e,t,o,r)=>{for(var a=void 0,s=e.length-1,i;s>=0;s--)(i=e[s])&&(a=i(t,o,a)||a);return a&&Oe(t,o,a),a};const tt=class extends f{constructor(){super(...arguments),this.inputChecked=!1,this.inputDisabled=!1,this.inputLabel="",this.inputName="checkbox",this.inputSwitch=!1,this.labelPosition="after",this._hasCheckedIconSlot=!1,this._hasUncheckedIconSlot=!1,this._readyForUpdates=!1}handleCheckedIconSlotchange(t){const o=t.target.assignedNodes({flatten:!0});this._hasCheckedIconSlot=o.length>0}handleUncheckedIconSlotchange(t){const o=t.target.assignedNodes({flatten:!0});this._hasUncheckedIconSlot=o.length>0}_toggleChecked(){this.inputChecked=!this.inputChecked}firstUpdated(t){this._readyForUpdates=!0}render(){const t=d`<slot>${this.inputLabel}</slot>`,o=this.inputChecked?d`<slot name="checked-icon" @slotchange="${this.handleCheckedIconSlotchange}"></slot>`:d`<slot name="unchecked-icon" @slotchange="${this.handleUncheckedIconSlotchange}"></slot>`,r={"admin-bar-checkbox":!0,"admin-bar-checkbox--disabled":this.inputDisabled,"admin-bar-checkbox--has-icon":this.inputChecked?this._hasCheckedIconSlot:this._hasUncheckedIconSlot};return d`<label class="${M(r)}"
      >${this.labelPosition==="before"?t:c}${o}<input
        id="${this.inputName}"
        name="${this.inputName}"
        ?switch="${this.inputSwitch}"
        ?checked="${this.inputChecked?"checked":c}"
        ?disabled="${this.inputDisabled?"disabled":c}"
        aria-label="${this.inputAriaLabel??c}"
        type="checkbox"
        @click="${this._toggleChecked}"
      />${this.labelPosition==="after"?t:c}</label
    >`}willUpdate(t){this._readyForUpdates&&t.has("inputChecked")&&(this.dispatchEvent(new De(this.inputChecked)),this.inputChecked?this.dispatchEvent(new Ne):this.dispatchEvent(new Le))}};tt.shadowRootOptions={...f.shadowRootOptions,delegatesFocus:!0},tt.styles=k`
    :host {
      display: block;
      height: var(--admin-bar-height, 43px);
    }
    .admin-bar-checkbox {
      ${Pt()}
      display: flex;
      flex-wrap: nowrap;
      gap: 5px;
      align-items: center;
      padding: var(--admin-bar-text-padding, var(--admin-bar-block-padding) var(--admin-bar-inline-padding));
      height: 100%;
      accent-color: var(--admin-bar-color-highlight);
      white-space: nowrap;

      &:has(:focus-visible) {
        ${Tt()}
      }

      input {
        outline: none;
      }
      :host([disabled]) & {
        cursor: not-allowed;
      }
      &.admin-bar-checkbox--has-icon input[type='checkbox'] {
        ${L()}
      }
    }
  `;let x=tt;A([l({attribute:"input-aria-label"})],x.prototype,"inputAriaLabel");A([l({attribute:"checked",reflect:!0,type:Boolean,useDefault:!0})],x.prototype,"inputChecked");A([l({attribute:"disabled",type:Boolean})],x.prototype,"inputDisabled");A([l({attribute:"label-text"})],x.prototype,"inputLabel");A([l({attribute:"input-name"})],x.prototype,"inputName");A([l({attribute:"input-switch",type:Boolean})],x.prototype,"inputSwitch");A([l({attribute:"label-position"})],x.prototype,"labelPosition");A([w()],x.prototype,"_hasCheckedIconSlot");A([w()],x.prototype,"_hasUncheckedIconSlot");A([w()],x.prototype,"_readyForUpdates");const qt=class Mt extends Event{constructor(t){super(Mt.eventName,{bubbles:!0,composed:!0}),this.checked=!1,this.checked=t}};qt.eventName="change";let De=qt;const Ht=class It extends Event{constructor(){super(It.eventName,{bubbles:!0,composed:!0})}};Ht.eventName="checked";let Ne=Ht;const Vt=class zt extends Event{constructor(){super(zt.eventName,{bubbles:!0,composed:!0})}};Vt.eventName="unchecked";let Le=Vt;var je=Object.defineProperty,D=(e,t,o,r)=>{for(var a=void 0,s=e.length-1,i;s>=0;s--)(i=e[s])&&(a=i(t,o,a)||a);return a&&je(t,o,a),a};const Wt=class extends f{constructor(){super(),this.dlContent=[],this.badgeContent="",this.badgePosition="before",this.multiLine=!1,this.tableContent={rows:[]},this.textContent="",customElements.get("admin-bar-badge")||customElements.define("admin-bar-badge",lt)}render(){const t=[];this.textContent??!1?t.push(d`<span class="text">${this.textContent}</span>`):this.dlContent.length?t.push(d`<dl part="dl">
          ${this.dlContent.map(r=>d`<dt>${r[0]??""}</dt>
                <dd>${r[1]??""}</dd>`)}
        </dl>`):this.tableContent?.rows?.length&&t.push(d`<table part="table">
          ${this.tableContent?.headers?.length?d`<thead>
                <tr>
                  ${this.tableContent.headers.map(r=>d`<th>${r??""}</th>`)}
                </tr>
              </thead>`:c}
          ${d`<tbody>
            ${this.tableContent.rows.map(r=>d`<tr>
                  ${r.map(a=>d`<td>${a}</td>`)}
                </tr>`)}
          </tbody>`}
          ${this.tableContent?.footers?.length?d`<tfoot>
                <tr>
                  ${this.tableContent.footers.map(r=>d`<td>${r??""}</td>`)}
                </tr>
              </tfoot>`:c}
        </table>`);let o=d`<slot>${t}</slot>`;return(this.badgeContent??!1)&&(o=this.badgePosition==="before"?d`<admin-bar-badge part="badge">${this.badgeContent}</admin-bar-badge>${o}`:d`${o}<admin-bar-badge part="badge">${this.badgeContent}</admin-bar-badge>`),d`<span class="admin-bar-text${this.multiLine?" multi-line":""}">${o}</span>`}};Wt.styles=k`
    :host {
      display: flex;
      align-items: center;
      min-height: var(--admin-bar-height, 43px);
      text-box: trim-both cap alphabetic;
    }
    .admin-bar-text {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      gap: 5px;
      padding: var(--admin-bar-text-padding, var(--admin-bar-block-padding) var(--admin-bar-inline-padding));
      height: 100%;
      background-color: var(--admin-bar-text-color-bg, transparent);
      font-size: var(--font-size);
      color: var(--admin-bar-color-text, rgb(255 255 255 / 0.8));
      white-space: nowrap;
      transition:
        background var(--admin-bar-transition-duration, 0.3s) ease-out,
        color var(--admin-bar-transition-duration, 0.3s) ease-out;

      &:is(.multi-line, :has(dl, table)) {
        padding: var(--admin-bar-text-padding, var(--admin-bar-inline-padding));
        height: unset;
        white-space: normal;

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
          background-color: var(--admin-bar-badge-color-bg);
          color: var(--admin-bar-badge-color-text);

          & th:first-child {
            border-start-start-radius: var(--table-border-radius);
          }
          & th:last-child {
            border-start-end-radius: var(--table-border-radius);
          }
        }
        & tfoot {
          background-color: color-mix(in srgb, var(--admin-bar-badge-color-bg), transparent 80%);

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
  `;let U=Wt;D([l({attribute:"dl-content",type:Array})],U.prototype,"dlContent");D([l({attribute:"badge-content"})],U.prototype,"badgeContent");D([l({attribute:"badge-position"})],U.prototype,"badgePosition");D([l({attribute:"multi-line",type:Boolean})],U.prototype,"multiLine");D([l({attribute:"table-content",type:Object})],U.prototype,"tableContent");D([l({attribute:"text-content"})],U.prototype,"textContent");function qe(e=[]){e.forEach(t=>{const o=`admin-bar-${t}`;if(!customElements.get(o))switch(t){case"button":customElements.define(o,v);break;case"checkbox":customElements.define(o,x);break;case"text":customElements.define(o,U);break}}),customElements.get("admin-bar")||customElements.define("admin-bar",b)}class Me extends HTMLElement{static observedAttributes=["data-api-status"];#t=null;_actionUrl=void 0;_csrfToken=void 0;_requestStatus;_sessionActionUrl=void 0;attributeChangedCallback(t,o,r){t==="data-api-status"&&["errored","loading","ready","resolved"].includes(r)&&(r==="errored"&&(this._csrfToken=void 0),this._requestStatus=r)}connectedCallback(){this.#t=document.getElementById(this.dataset.adminBar??"")??null,this._actionUrl=this.dataset.actionUrl,this._sessionActionUrl=this.dataset.sessionActionUrl,this.setApiStatus("ready",!0),this.setUpDebugToolbarCheckbox()}async actionRequest(t,o="",r=!0){if(!(r&&this._requestStatus==="loading")){if(this._actionUrl===void 0)return{message:"action-url-invalid",status:"error"};if(this._csrfToken===void 0){const a=await this.getSessionInfo();if(a.csrfTokenValue)this._csrfToken=a.csrfTokenValue;else return{message:"csrf-token-invalid",status:"error"}}try{this.setApiStatus("loading",r);const a=new FormData;a.append("requestHandle",t),o&&a.append("params",o);const s=await fetch(this._actionUrl,{body:a,headers:{Accept:"application/json","X-CSRF-Token":this._csrfToken??"","X-Requested-With":"XMLHttpRequest"},method:"POST"});if(!s.ok)throw new Error(`Response status: ${s.status}`);const i=await s.json();if(i.status!=="success")throw i.message;if(i.followupAction){const h=this._actionUrl.replace("admin-bar/admin-bar",i.followupAction),n=await fetch(h,{headers:{Accept:"application/json","X-CSRF-Token":this._csrfToken??"","X-Requested-With":"XMLHttpRequest"},method:"POST"});if(!n.ok)throw new Error(`Response status: ${n.status}`)}return this.setApiStatus("resolved",r),i}catch(a){return this.setApiStatus("errored",!0),{message:a,status:"error"}}}}async getSessionInfo(){if(this._sessionActionUrl)return fetch(this._sessionActionUrl,{headers:{Accept:"application/json"}}).then(t=>t.json())}setApiStatus(t,o){if(this.#t&&o)switch(t){case"errored":this.#t.setAttribute("progress","-1");break;case"loading":this.#t.setAttribute("progress","50");break;case"resolved":this.#t.setAttribute("progress","100");break}this.dataset.apiStatus=t}setUpDebugToolbarCheckbox(){const t=this.#t?.querySelector("#admin-bar-checkbox-debug-toolbar");t&&t.addEventListener("change",async o=>{t.setAttribute("disabled",!0),await window.adminBarPostRequest(document.getElementById(this.dataset.adminBar??""),"admin-bar-debug-toolbar-toggle",JSON.stringify({query:o.checked})),t.removeAttribute("disabled")})}}customElements.define("craft-admin-bar",Me);class He extends HTMLElement{static observedAttributes=["data-queue-total"];#t=null;#e=[];#a=0;#s=0;#o=null;#r={};#i=null;_checkQueue=async()=>{const t=await window.adminBarPostRequest(this.closest("admin-bar"),"craft-queue-check","{}",!0);t&&(this._setJobTotals({jobsWaiting:t.jobsWaiting,jobsDelayed:t.jobsDelayed,jobsReserved:t.jobsReserved,jobsFailed:t.jobsFailed}),this.setAttribute("data-queue-total",t.totalJobs.toString()))};_setJobTotals({jobsWaiting:t,jobsDelayed:o,jobsReserved:r,jobsFailed:a}){this.#e=[],t>0&&this.#e.push([t,this.#r.jobStatusWaiting]),o>0&&this.#e.push([o,this.#r.jobStatusDelayed]),r>0&&this.#e.push([r,this.#r.jobStatusReserved]),a>0&&this.#e.push([a,this.#r.jobStatusFailed])}_onRunButtonClick=()=>{this._runQueue()};_runQueue=async()=>{await window.adminBarPostRequest(this.closest("admin-bar"),"craft-queue-run","{}"),this._checkQueue()};_updateJobStatus=async t=>{const s=document.getElementById("admin-bar-queue-job-status-template").content.cloneNode(!0).querySelector(`.${t}`);this.#t&&(this.#t.replaceChildren(s),t==="has-jobs"?(this.#t.querySelector(".has-jobs")?.setAttribute("dl-content",JSON.stringify(this.#e)),this.#a===0&&(this.#a=setInterval(this._checkQueue,1e4))):(clearInterval(this.#a),this.#a=0))};constructor(){super();const o=document.getElementById("admin-bar-queue-template").content;this.attachShadow({mode:"open"}).appendChild(o.cloneNode(!0)),this.#r=JSON.parse(this.getAttribute("data-t-messages")??"{}")??{},this.#o=this.shadowRoot?.querySelector(".run-jobs")??null,this.#t=this.shadowRoot?.querySelector(".job-status")??null,this.#i=this.closest("admin-bar-button")??null}attributeChangedCallback(t,o,r){t==="data-queue-total"&&this.#o&&(this.#s=parseInt(r),this.#s>0?(this.#i.setAttribute("badge-content",r),this.#o.style.display="block",this._updateJobStatus("has-jobs")):(this.#i.removeAttribute("badge-content"),this.#o.style.display="none",this._updateJobStatus("no-jobs")))}async connectedCallback(){const t=JSON.parse(this.getAttribute("data-job-totals")??"{}");this._setJobTotals({jobsWaiting:t.jobsWaiting??0,jobsDelayed:t.jobsDelayed??0,jobsReserved:t.jobsReserved??0,jobsFailed:t.jobsFailed??0}),this._updateJobStatus(this.#s?"has-jobs":"no-jobs"),this.#o?.addEventListener("click",this._onRunButtonClick),this.#s>0&&await window.adminBarPostRequest(this.closest("admin-bar"),"craft-queue-run","{}",!0)}disconnectedCallback(){this.#o?.removeEventListener("click",this._onRunButtonClick)}}customElements.define("craft-admin-bar-queue",He);class Ie extends HTMLElement{#t=null;#e=null;_onSearchFormSubmit=async t=>{t.preventDefault();const o=this.#t?.querySelector('input[type="search"]')??null;if(o){const r=await window.adminBarPostRequest(this.closest("admin-bar"),"craft-search-search",JSON.stringify({query:o.value}));if(this.#e){let a,s;if(r.searchResultsStatus==="OK"){a=document.getElementById("admin-bar-search-results-template"),s=a.content;const i=document.createElement("ul");r.searchResults.forEach(h=>{const p=s.cloneNode(!0).querySelector("li"),m=p.querySelector("admin-bar-button.edit");h.cpEditUrl?(m.setAttribute("button-href",h.cpEditUrl),m.setAttribute("label-text",h.title)):p.removeChild(m);const u=p.querySelector("admin-bar-button.view"),$=u.querySelector("admin-bar-text"),_=p.querySelector("admin-bar-text.view");h.url??!1?(u.setAttribute("button-href",h.url),u.setAttribute("badge-content",h.status),$.setAttribute("text-content",h.title),_.remove()):(_.setAttribute("text-content",h.title),u.remove()),i.append(p)}),this.#e.replaceChildren(i)}else a=document.getElementById("admin-bar-search-no-results-template"),s=a.content,this.#e.replaceChildren(s.cloneNode(!0))}}};constructor(){super();const o=document.getElementById("admin-bar-search-template").content;this.attachShadow({mode:"open"}).appendChild(o.cloneNode(!0)),this.#t=this.shadowRoot?.querySelector("form")??null,this.#e=this.shadowRoot?.querySelector("form + div")??null}connectedCallback(){this.#t?.addEventListener("submit",this._onSearchFormSubmit)}disconnectedCallback(){this.#t?.removeEventListener("submit",this._onSearchFormSubmit)}}customElements.define("craft-admin-bar-search",Ie);qe(["button","checkbox","text"]);window.adminBarPostRequest=async(e,t,o="",r=!1)=>{try{const a=document.querySelector(`[data-admin-bar="${e?.id}"]`),s=await a?.actionRequest(t,o,!r);if(s?.status==="success"){if(s.refreshPage)location.reload();else if(setTimeout(()=>{a&&(a.dataset.apiStatus="ready")},3e3),s.data)return s.data}else throw s?.message}catch(a){console.error(`Admin Bar: ${a}`)}};
