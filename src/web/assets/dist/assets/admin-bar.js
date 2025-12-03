var $t=e=>{throw TypeError(e)},_t=(e,t,o)=>t.has(e)||$t("Cannot "+o),dt=(e,t,o)=>(_t(e,t,"read from private field"),o?o.call(e):t.get(e)),Wt=(e,t,o)=>t.has(e)?$t("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),Gt=(e,t,o,r)=>(_t(e,t,"write to private field"),t.set(e,o),o);const G=globalThis,et=G.ShadowRoot&&(G.ShadyCSS===void 0||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ot=Symbol(),ct=new WeakMap;let xt=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==ot)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(et&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=ct.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&ct.set(t,e))}return e}toString(){return this.cssText}};const Kt=e=>new xt(typeof e=="string"?e:e+"",void 0,ot),A=(e,...t)=>{const o=e.length===1?e[0]:t.reduce(((r,a,s)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[s+1]),e[0]);return new xt(o,e,ot)},Xt=(e,t)=>{if(et)e.adoptedStyleSheets=t.map((o=>o instanceof CSSStyleSheet?o:o.styleSheet));else for(const o of t){const r=document.createElement("style"),a=G.litNonce;a!==void 0&&r.setAttribute("nonce",a),r.textContent=o.cssText,e.appendChild(r)}},ht=et?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let o="";for(const r of t.cssRules)o+=r.cssText;return Kt(o)})(e):e,{is:Jt,defineProperty:Zt,getOwnPropertyDescriptor:Yt,getOwnPropertyNames:Qt,getOwnPropertySymbols:te,getPrototypeOf:ee}=Object,J=globalThis,pt=J.trustedTypes,oe=pt?pt.emptyScript:"",re=J.reactiveElementPolyfillSupport,H=(e,t)=>e,K={toAttribute(e,t){switch(t){case Boolean:e=e?oe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=e!==null;break;case Number:o=e===null?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},rt=(e,t)=>!Jt(e,t),ut={attribute:!0,type:String,converter:K,reflect:!1,useDefault:!1,hasChanged:rt};Symbol.metadata??=Symbol("metadata"),J.litPropertyMetadata??=new WeakMap;let B=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ut){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(e,o,t);r!==void 0&&Zt(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){const{get:r,set:a}=Yt(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:r,set(s){const i=r?.call(this);a?.call(this,s),this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ut}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;const e=ee(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){const t=this.properties,o=[...Qt(t),...te(t)];for(const r of o)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,r]of t)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const r=this._$Eu(t,o);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const r of o)t.unshift(ht(r))}else e!==void 0&&t.push(ht(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(r!==void 0&&o.reflect===!0){const a=(o.converter?.toAttribute!==void 0?o.converter:K).toAttribute(t,o.type);this._$Em=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,t){const o=this.constructor,r=o._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const a=o.getPropertyOptions(r),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:K;this._$Em=r;const i=s.fromAttribute(t,a.type);this[r]=i??this._$Ej?.get(r)??i,this._$Em=null}}requestUpdate(e,t,o){if(e!==void 0){const r=this.constructor,a=this[e];if(o??=r.getPropertyOptions(e),!((o.hasChanged??rt)(a,t)||o.useDefault&&o.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:r,wrapped:a},s){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),a!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,a]of o){const{wrapped:s}=a,i=this[r];s!==!0||this._$AL.has(r)||i===void 0||this.C(r,void 0,a,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((o=>o.hostUpdate?.())),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};B.elementStyles=[],B.shadowRootOptions={mode:"open"},B[H("elementProperties")]=new Map,B[H("finalized")]=new Map,re?.({ReactiveElement:B}),(J.reactiveElementVersions??=[]).push("2.1.1");const at=globalThis,X=at.trustedTypes,bt=X?X.createPolicy("lit-html",{createHTML:e=>e}):void 0,wt="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,At="?"+S,ae=`<${At}>`,P=document,I=()=>P.createComment(""),z=e=>e===null||typeof e!="object"&&typeof e!="function",st=Array.isArray,se=e=>st(e)||typeof e?.[Symbol.iterator]=="function",Y=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,mt=/>/g,E=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,ft=/"/g,kt=/^(?:script|style|textarea|title)$/i,ie=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),l=ie(1),T=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),yt=new WeakMap,C=P.createTreeWalker(P,129);function St(e,t){if(!st(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return bt!==void 0?bt.createHTML(t):t}const ne=(e,t)=>{const o=e.length-1,r=[];let a,s=t===2?"<svg>":t===3?"<math>":"",i=R;for(let c=0;c<o;c++){const n=e[c];let u,m,p=-1,y=0;for(;y<n.length&&(i.lastIndex=y,m=i.exec(n),m!==null);)y=i.lastIndex,i===R?m[1]==="!--"?i=gt:m[1]!==void 0?i=mt:m[2]!==void 0?(kt.test(m[2])&&(a=RegExp("</"+m[2],"g")),i=E):m[3]!==void 0&&(i=E):i===E?m[0]===">"?(i=a??R,p=-1):m[1]===void 0?p=-2:(p=i.lastIndex-m[2].length,u=m[1],i=m[3]===void 0?E:m[3]==='"'?ft:vt):i===ft||i===vt?i=E:i===gt||i===mt?i=R:(i=E,a=void 0);const $=i===E&&e[c+1].startsWith("/>")?" ":"";s+=i===R?n+ae:p>=0?(r.push(u),n.slice(0,p)+wt+n.slice(p)+S+$):n+S+(p===-2?c:$)}return[St(e,s+(e[o]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class q{constructor({strings:t,_$litType$:o},r){let a;this.parts=[];let s=0,i=0;const c=t.length-1,n=this.parts,[u,m]=ne(t,o);if(this.el=q.createElement(u,r),C.currentNode=this.el.content,o===2||o===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(a=C.nextNode())!==null&&n.length<c;){if(a.nodeType===1){if(a.hasAttributes())for(const p of a.getAttributeNames())if(p.endsWith(wt)){const y=m[i++],$=a.getAttribute(p).split(S),W=/([.?@])?(.*)/.exec(y);n.push({type:1,index:s,name:W[2],strings:$,ctor:W[1]==="."?de:W[1]==="?"?ce:W[1]==="@"?he:Z}),a.removeAttribute(p)}else p.startsWith(S)&&(n.push({type:6,index:s}),a.removeAttribute(p));if(kt.test(a.tagName)){const p=a.textContent.split(S),y=p.length-1;if(y>0){a.textContent=X?X.emptyScript:"";for(let $=0;$<y;$++)a.append(p[$],I()),C.nextNode(),n.push({type:2,index:++s});a.append(p[y],I())}}}else if(a.nodeType===8)if(a.data===At)n.push({type:2,index:s});else{let p=-1;for(;(p=a.data.indexOf(S,p+1))!==-1;)n.push({type:7,index:s}),p+=S.length-1}s++}}static createElement(t,o){const r=P.createElement("template");return r.innerHTML=t,r}}function N(e,t,o=e,r){if(t===T)return t;let a=r!==void 0?o._$Co?.[r]:o._$Cl;const s=z(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(e),a._$AT(e,o,r)),r!==void 0?(o._$Co??=[])[r]=a:o._$Cl=a),a!==void 0&&(t=N(e,a._$AS(e,t.values),a,r)),t}class le{constructor(t,o){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:o},parts:r}=this._$AD,a=(t?.creationScope??P).importNode(o,!0);C.currentNode=a;let s=C.nextNode(),i=0,c=0,n=r[0];for(;n!==void 0;){if(i===n.index){let u;n.type===2?u=new j(s,s.nextSibling,this,t):n.type===1?u=new n.ctor(s,n.name,n.strings,this,t):n.type===6&&(u=new pe(s,this,t)),this._$AV.push(u),n=r[++c]}i!==n?.index&&(s=C.nextNode(),i++)}return C.currentNode=P,a}p(t){let o=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,o),o+=r.strings.length-2):r._$AI(t[o])),o++}}class j{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,o,r,a){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=r,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&t?.nodeType===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=N(this,t,o),z(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):se(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:o,_$litType$:r}=t,a=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=q.createElement(St(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===a)this._$AH.p(o);else{const s=new le(a,this),i=s.u(this.options);s.p(o),this.T(i),this._$AH=s}}_$AC(t){let o=yt.get(t.strings);return o===void 0&&yt.set(t.strings,o=new q(t)),o}k(t){st(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let r,a=0;for(const s of t)a===o.length?o.push(r=new j(this.O(I()),this.O(I()),this,this.options)):r=o[a],r._$AI(s),a++;a<o.length&&(this._$AR(r&&r._$AB.nextSibling,a),o.length=a)}_$AR(t=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,o,r,a,s){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=o,this._$AM=a,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=h}_$AI(t,o=this,r,a){const s=this.strings;let i=!1;if(s===void 0)t=N(this,t,o,0),i=!z(t)||t!==this._$AH&&t!==T,i&&(this._$AH=t);else{const c=t;let n,u;for(t=s[0],n=0;n<s.length-1;n++)u=N(this,c[r+n],o,n),u===T&&(u=this._$AH[n]),i||=!z(u)||u!==this._$AH[n],u===h?t=h:t!==h&&(t+=(u??"")+s[n+1]),this._$AH[n]=u}i&&!a&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class de extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class ce extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class he extends Z{constructor(t,o,r,a,s){super(t,o,r,a,s),this.type=5}_$AI(t,o=this){if((t=N(this,t,o,0)??h)===T)return;const r=this._$AH,a=t===h&&r!==h||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==h&&(r===h||a);a&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class pe{constructor(t,o,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=o,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const ue=at.litHtmlPolyfillSupport;ue?.(q,j),(at.litHtmlVersions??=[]).push("3.3.1");const be=(e,t,o)=>{const r=o?.renderBefore??t;let a=r._$litPart$;if(a===void 0){const s=o?.renderBefore??null;r._$litPart$=a=new j(t.insertBefore(I(),s),s,void 0,o??{})}return a._$AI(e),a},it=globalThis;let f=class extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=be(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}};f._$litElement$=!0,f.finalized=!0,it.litElementHydrateSupport?.({LitElement:f});const ge=it.litElementPolyfillSupport;ge?.({LitElement:f});(it.litElementVersions??=[]).push("4.2.1");const me={ATTRIBUTE:1},ve=e=>(...t)=>({_$litDirective$:e,values:t});class fe{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,r){this._$Ct=t,this._$AM=o,this._$Ci=r}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}const V=ve(class extends fe{constructor(e){if(super(e),e.type!==me.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((r=>r!==""))));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const o=e.element.classList;for(const r of this.st)r in t||(o.remove(r),this.st.delete(r));for(const r in t){const a=!!t[r];a===this.st.has(r)||this.nt?.has(r)||(a?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return T}}),ye={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:rt},$e=(e=ye,t,o)=>{const{kind:r,metadata:a}=o;let s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(o.name,e),r==="accessor"){const{name:i}=o;return{set(c){const n=t.get.call(this);t.set.call(this,c),this.requestUpdate(i,n,e)},init(c){return c!==void 0&&this.C(i,void 0,e,c),c}}}if(r==="setter"){const{name:i}=o;return function(c){const n=this[i];t.call(this,c),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+r)};function d(e){return(t,o)=>typeof o=="object"?$e(e,t,o):((r,a,s)=>{const i=a.hasOwnProperty(s);return a.constructor.createProperty(s,r),i?Object.getOwnPropertyDescriptor(a,s):void 0})(e,t,o)}function _(e){return d({...e,state:!0,attribute:!1})}const _e=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,o),o);function Et(e){return(t,o)=>{const{slot:r,selector:a}=e??{},s="slot"+(r?`[name=${r}]`:":not([name])");return _e(t,o,{get(){const i=this.renderRoot?.querySelector(s),c=i?.assignedElements(e)??[];return a===void 0?c:c.filter((n=>n.matches(a)))}})}}var xe=Object.defineProperty,nt=(e,t,o,r)=>{for(var a=void 0,s=e.length-1,i;s>=0;s--)(i=e[s])&&(a=i(t,o,a)||a);return a&&xe(t,o,a),a};const Ct=class extends f{constructor(){super(...arguments),this.progressValue=0,this._progressState="reset",this._progressWidth=0}_onProgressAnimationEnd(){["error","success"].includes(this._progressState)&&(this._progressState="reset")}render(){return l` <div class="wrapper">
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
    </div>`}willUpdate(t){t.has("progressValue")&&(this._progressWidth=0,this.progressValue<0?(this._progressState="error",this._progressWidth=100):this.progressValue>=100?(this._progressState="success",this._progressWidth=100):this.progressValue>=0&&this.progressValue<100&&(this._progressState="display",this._progressWidth=this.progressValue))}};Ct.styles=A`
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
  `;let F=Ct;nt([d({attribute:"progress-value",type:Number})],F.prototype,"progressValue");nt([_()],F.prototype,"_progressState");nt([_()],F.prototype,"_progressWidth");function O(){return A`1px solid color-mix(in oklch, var(--admin-bar-color-text), transparent 90%)`}function Pt(){return A`
    & {
      background-color: color-mix(in srgb, var(--admin-bar-button-color-text, white), transparent 90%);
      outline: 3px solid color-mix(in srgb, var(--admin-bar-color-highlight), transparent 10%);
      outline-offset: -3px;
    }
  `}function Tt(){return A`
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
  `}function D(){return A`
    & {
      clip: rect(0 0 0 0);
      clip-path: inset(100%);
      position: absolute;
      width: 1px;
      height: 1px;
      white-space: nowrap;
      overflow: hidden;
    }
  `}var we=Object.defineProperty,Ae=(e,t,o,r)=>{for(var a=void 0,s=e.length-1,i;s>=0;s--)(i=e[s])&&(a=i(t,o,a)||a);return a&&we(t,o,a),a};const Ut=class extends f{constructor(){super(...arguments),this.textContent=""}render(){return l`<span class="admin-bar-badge"><slot>${this.textContent}</slot></span>`}};Ut.styles=A`
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
  `;let lt=Ut;Ae([d({attribute:"text-content"})],lt.prototype,"textContent");var ke=Object.defineProperty,x=(e,t,o,r)=>{for(var a=void 0,s=e.length-1,i;s>=0;s--)(i=e[s])&&(a=i(t,o,a)||a);return a&&ke(t,o,a),a};const Q=class extends f{constructor(){super(),this.badgeContent="",this.badgePosition="before",this.label="",this.isGreetingButton=!1,this.isLogoutButton=!1,this._hasPopoverSlot=!1,this._inVertical=!1,this._popoverOpen=!1,customElements.get("admin-bar-badge")||customElements.define("admin-bar-badge",lt),customElements.get("admin-bar-surface")||customElements.define("admin-bar-surface",F)}_onVerticalPopoverButtonClick(){this._inVertical&&(this._popoverOpen=!this._popoverOpen)}_onPopoverButtonKeyDown(t){if(["ArrowUp","ArrowDown"].includes(t.key)){if(t.preventDefault(),!this._popoverOpen){const o=this.shadowRoot?.querySelector("[popovertarget]")??null;o&&o.click()}if(this._popoverFocusableChildren.length){const o='admin-bar-button, admin-bar-checkbox, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';let r=this._popoverFocusableChildren.filter(a=>a.matches(o));if(!r.length){r=[];const a=this.isGreetingButton?this._popoverFocusableChildren[0].querySelector("slot")?.assignedNodes({flatten:!0}):this._popoverFocusableChildren;a&&a.forEach(s=>{const i=s.querySelectorAll(o);for(const c of i)r.push(c)})}if(r.length){let a=null;const s=r.findIndex(i=>i===document.activeElement);t.key==="ArrowUp"?s<=0?a=r[r.length-1]:a=r[s-1]:t.key==="ArrowDown"&&(s>=r.length-1?a=r[0]:a=r[s+1]),a&&(a.tagName==="ADMIN-BAR-BUTTON"?a=a.shadowRoot?.querySelector("a, button")??null:a.tagName==="ADMIN-BAR-CHECKBOX"&&(a=a.shadowRoot?.querySelector("input")??null),a&&a.focus())}}}}updateInVertical(){this._popoverOpen=!1,this._inVertical=window.getComputedStyle(this).getPropertyValue("--admin-bar-vertical")==="true"}_onPopoverToggle(t){this._popoverOpen=t.newState==="open",this.dispatchEvent(new Se(t.oldState,t.newState)),this._popoverOpen?this.dispatchEvent(new Ee):this.dispatchEvent(new Ce)}_handlePopoverSlotchange(t){const o=t.target.assignedNodes({flatten:!0});this._hasPopoverSlot=o.length>0}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onPopoverButtonKeyDown),this.updateInVertical()}render(){const t={"admin-bar-button":!0},o=this.badgeContent?l`<admin-bar-badge class="badge" text-content="${this.badgeContent}" part="badge"></admin-bar-badge>`:null,r=l`<slot name="before-label"></slot>${this.badgeContent&&this.badgePosition==="before"?o:h}<slot>${this.label??!1?l`<span>${this.label}</span>`:h}</slot>${this.badgeContent&&this.badgePosition==="after"?o:h}<slot name="after-label"></slot>`;if(this.href)return l`<a
        class="${V(t)}"
        aria-label="${this.buttonAriaLabel??h}"
        href="${this.href}"
        >${r}</a
      >`;if(this._hasPopoverSlot){const a=l`<button
        class="${V(t)}"
        aria-label="${this.buttonAriaLabel??h}"
        popovertarget="${this._inVertical?h:"admin-bar-button-popover"}"
        @click="${this._onVerticalPopoverButtonClick}"
      >
        ${r}
      </button>`;return this._inVertical?l`${a}
          <div class="vertical-popover" ?data-open="${this._popoverOpen}">
            <slot name="popover" @slotchange="${this._handlePopoverSlotchange}"></slot>
          </div>`:l`${a}<admin-bar-surface
          popover
          id="admin-bar-button-popover"
          part="popover"
          @toggle="${this._onPopoverToggle}"
          ><slot name="popover" @slotchange="${this._handlePopoverSlotchange}"></slot
        ></admin-bar-surface>`}return l`<button class="${V(t)}" aria-label="${this.buttonAriaLabel??h}">
        ${r}</button
      ><slot name="popover" @slotchange="${this._handlePopoverSlotchange}"></slot>`}};Q.shadowRootOptions={...f.shadowRootOptions,delegatesFocus:!0},Q.styles=A`
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
      ${Tt()}
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
        ${Pt()}
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
  `;let v=Q;x([d({attribute:"badge-content"})],v.prototype,"badgeContent");x([d({attribute:"badge-position"})],v.prototype,"badgePosition");x([d({attribute:"button-aria-label"})],v.prototype,"buttonAriaLabel");x([d({attribute:"button-href"})],v.prototype,"href");x([d({attribute:"label-text"})],v.prototype,"label");x([d({attribute:"greeting-button",type:Boolean})],v.prototype,"isGreetingButton");x([d({attribute:"logout-button",type:Boolean})],v.prototype,"isLogoutButton");x([_()],v.prototype,"_hasPopoverSlot");x([_()],v.prototype,"_inVertical");x([_()],v.prototype,"_popoverOpen");x([Et({flatten:!0,slot:"popover"})],v.prototype,"_popoverFocusableChildren");const Ot=class Bt extends Event{constructor(t,o){super(Bt.eventName,{bubbles:!0,composed:!0}),this.newState="closed",this.oldState="closed",this.open=!1,this.newState=o,this.oldState=t,this.open=o==="open"}};Ot.eventName="toggle";let Se=Ot;const Nt=class Lt extends Event{constructor(){super(Lt.eventName,{bubbles:!0,composed:!0})}};Nt.eventName="opened";let Ee=Nt;const Rt=class Dt extends Event{constructor(){super(Dt.eventName,{bubbles:!0,composed:!0})}};Rt.eventName="closed";let Ce=Rt;function Pe(e,t){function o(s){if(s.button!==0)return;let{x:i,y:c}=e.eventToCoordinates(s);e.dragging={dx:e.pos.x-i,dy:e.pos.y-c},t.classList.add("dragging"),t.setPointerCapture(s.pointerId),t.style.userSelect="none",t.style.webkitUserSelect="none"}function r(){e.dragging=null,t.classList.remove("dragging"),t.style.userSelect="",t.style.webkitUserSelect=""}function a(s){if(!e.dragging)return;let{x:i,y:c}=e.eventToCoordinates(s);e.pos={x:i+e.dragging.dx,y:c+e.dragging.dy}}t.addEventListener("pointerdown",o),t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),t.addEventListener("pointermove",a),t.addEventListener("touchstart",s=>s.preventDefault()),t.addEventListener("dragstart",s=>s.preventDefault())}l`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="20px"
  height="20px"
  fill="currentColor"
  viewBox="0 -960 960 960"
>
  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224z" />
</svg>`;const Te=l`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="currentColor"
  viewBox="0 -960 960 960"
>
  <path d="M440-440v240h-80v-160H200v-80zm160-320v160h160v80H520v-240z" />
</svg>`,Ue=l`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="20px"
  height="20px"
  fill="currentColor"
  viewBox="0 0 228.93 228.72"
>
  <path
    d="M227.35,48.35a14.64,14.64,0,0,0-2.79-17L197.84,4.58a15.47,15.47,0,0,0-17.42-3.17l-5.95,4.74L14.29,166.33,0,228.72l62.39-14.29L222.57,54.26ZM32.59,210.92a30,30,0,0,0-14.84-14.58l5.53-24.15,14.14,6.91,13.06,13.06,6.86,13,0,0Z"
  />
</svg>`,Oe=l`<svg
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
</svg>`;var Be=Object.defineProperty,g=(e,t,o,r)=>{for(var a=void 0,s=e.length-1,i;s>=0;s--)(i=e[s])&&(a=i(t,o,a)||a);return a&&Be(t,o,a),a},M;const Mt=class extends f{constructor(){super(),Wt(this,M),this.avatarAlt="Avatar of logged in user.",this.logoutHref="#",this.logoutLabel="Sign out",this.progressValue=0,this.showEnvironment=!1,this.showGreeting=!1,this.showLogout=!1,this.toolbarToggle=void 0,this.toolbarToggleDrag=void 0,this.toolbarToggleDragHandleDescription="Click to drag the toggle button to another position on the page.",this.toolbarToggleInnerDescription="Click to collapse toolbar.",this.toolbarToggleOuterDescription="Click to expand toolbar.",this.toolbarVertical=!1,this._outerToggleDraggableState=void 0,this._hasGreetingPopoverSlot=!1,this._hostWidth=0,customElements.get("admin-bar-button")||customElements.define("admin-bar-button",v),customElements.get("admin-bar-surface")||customElements.define("admin-bar-surface",F)}_toggleVerticalAdminBar(t){this.toolbarToggle=t}_handleGreetingPopoverSlotchange(t){const o=t.target.assignedNodes({flatten:!0});this._hasGreetingPopoverSlot=o.length>0}connectedCallback(){super.connectedCallback(),this.parentElement&&(Gt(this,M,new ResizeObserver(t=>{for(const o of t){const r=Math.round(o.contentRect.width);if(r!==this._hostWidth&&this.autoToggleVertical){const a=r<this.autoToggleVertical;this.toolbarVertical!==a&&(a?this.toolbarVertical=!0:this.toolbarVertical=!1)}this._hostWidth=r}})),dt(this,M).observe(this))}disconnectedCallback(){super.disconnectedCallback(),dt(this,M)?.disconnect()}firstUpdated(){if(this.toolbarToggle===""&&(this.toolbarToggle=this.toolbarVertical?"button":"toolbar"),this.toolbarToggleDrag===""&&(this.toolbarToggleDrag="reset"),this.toolbarToggleDrag){const t=this.shadowRoot?.querySelector(".outer-toggle")??null,o=t?.querySelector(".drag-handle")??null;t&&o&&(this._outerToggleDraggableState={eventToCoordinates(r){return{x:r.clientX,y:r.clientY}},dragging:null,_pos:{x:0,y:0},get pos(){return this._pos},set pos(r){this._pos=r,t.style.transform=`translate(${this._pos.x}px,${this._pos.y}px)`}},Pe(this._outerToggleDraggableState,o))}}render(){const t={"admin-bar":!0,"glass-surface":!0},o=this.environmentDescription?l`<p>${this.environmentDescription}</p>`:h,r=l`<div data-testid="greeting-content" class="greeting-content">
      ${this.avatarSrc?l`<img alt="${this.avatarAlt}" src="${this.avatarSrc}" width="25px" height="25px" part="avatar" />`:h}
      <span><slot name="greeting">${this.greetingText??Ue}</slot></span>
    </div>`,a=this._hasGreetingPopoverSlot?l`
          <admin-bar-button
            class="greeting"
            button-aria-label="${this.greetingButtonAriaLabel??h}"
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
        `:l`<div class="greeting">
          ${r}<slot
            data-testid="greeting-popover--empty"
            name="greeting-popover"
            @slotchange="${this._handleGreetingPopoverSlotchange}"
          ></slot>
        </div>`,s=this.showLogout?l`<slot name="logout"
          ><admin-bar-button logout-button button-href="${this.logoutHref}">${this.logoutLabel}</admin-bar-button></slot
        >`:h;return l`
      <admin-bar-surface class="outer-toggle" data-testid="outer-toggle">
        <div>
          <admin-bar-button @click="${()=>this._toggleVerticalAdminBar("toolbar")}"
            ><p>${this.toolbarToggleOuterDescription}</p>
            <slot name="outer-toggle">${r}</slot></admin-bar-button
          >
          <div class="drag-handle" data-testid="drag-handle">
            ${Oe}
            <p>${this.toolbarToggleDragHandleDescription}</p>
          </div>
        </div>
      </admin-bar-surface>

      <admin-bar-surface
        class="${V(t)}"
        progress-value="${this.progressValue}"
        part="toolbar"
        data-testid="toolbar"
      >
        <div>
          <div data-testid="environment" class="environment">${o}</div>
          ${this.showGreeting?a:l`<div class="greeting"></div>`}
          <div class="buttons">
            <div class="buttons-content" part="buttons"><slot></slot></div>
          </div>
          <div class="logout">${s}</div>
          <admin-bar-button
            class="inner-toggle"
            data-testid="inner-toggle"
            @click="${()=>this._toggleVerticalAdminBar("button")}"
            ><p>${this.toolbarToggleInnerDescription}</p>
            <slot name="inner-toggle">${Te}</slot></admin-bar-button
          >
        </div>
      </admin-bar-surface>
    `}updated(t){if(t.has("toolbarVertical")&&(this.autoToggleVertical&&(this.toolbarVertical?this.toolbarToggle="button":this.toolbarToggle="toolbar"),this._adminBarButtonChildren.length))for(const o of this._adminBarButtonChildren)o?.updateInVertical()}};M=new WeakMap,Mt.styles=A`
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
        ${D()}
      }
      .drag-handle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 100%;
        border-inline-start: ${O()};
        color: var(--admin-bar-color-text);
        cursor: grab;

        &.dragging {
          cursor: grabbing;
        }
        & > p {
          ${D()}
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

      :host([vertical]) & {
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
        ${D()}
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
      border-inline-start: ${O()};

      :host([toolbar-toggle]) & {
        display: var(--admin-bar-toolbar-toggle-display, inline-flex);
      }

      p {
        ${D()}
      }
    }

    .buttons {
      grid-area: buttons;
      position: relative;
      width: 100%;
      height: 100%;

      :host([show-greeting]) & {
        border-inline-start: ${O()};

        @container style(--admin-bar-vertical: true) {
          & {
            border-block-start: ${O()};
            border-inline-start: none;
          }
        }
      }

      :host([show-logout]) & {
        border-inline-end: ${O()};

        @container style(--admin-bar-vertical: true) {
          & {
            border-block-end: ${O()};
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
  `;let b=Mt;g([d({attribute:"auto-toggle-vertical",type:Number})],b.prototype,"autoToggleVertical");g([d({attribute:"avatar-alt"})],b.prototype,"avatarAlt");g([d({attribute:"avatar-src"})],b.prototype,"avatarSrc");g([d({attribute:"environment-description"})],b.prototype,"environmentDescription");g([d({attribute:"greeting-button-aria-label"})],b.prototype,"greetingButtonAriaLabel");g([d({attribute:"greeting-text"})],b.prototype,"greetingText");g([d({attribute:"logout-href"})],b.prototype,"logoutHref");g([d({attribute:"logout-label"})],b.prototype,"logoutLabel");g([d({attribute:"progress",type:Number})],b.prototype,"progressValue");g([d({attribute:"show-environment",type:Boolean})],b.prototype,"showEnvironment");g([d({attribute:"show-greeting",type:Boolean})],b.prototype,"showGreeting");g([d({attribute:"show-logout",type:Boolean})],b.prototype,"showLogout");g([d({attribute:"toolbar-toggle",reflect:!0})],b.prototype,"toolbarToggle");g([d({attribute:"toolbar-toggle-drag",reflect:!0})],b.prototype,"toolbarToggleDrag");g([d({attribute:"toolbar-toggle-drag-handle-description"})],b.prototype,"toolbarToggleDragHandleDescription");g([d({attribute:"toolbar-toggle-inner-description"})],b.prototype,"toolbarToggleInnerDescription");g([d({attribute:"toolbar-toggle-outer-description"})],b.prototype,"toolbarToggleOuterDescription");g([d({attribute:"vertical",reflect:!0,type:Boolean})],b.prototype,"toolbarVertical");g([_()],b.prototype,"_outerToggleDraggableState");g([_()],b.prototype,"_hasGreetingPopoverSlot");g([_()],b.prototype,"_hostWidth");g([Et({flatten:!0,selector:"admin-bar-button"})],b.prototype,"_adminBarButtonChildren");var Ne=Object.defineProperty,k=(e,t,o,r)=>{for(var a=void 0,s=e.length-1,i;s>=0;s--)(i=e[s])&&(a=i(t,o,a)||a);return a&&Ne(t,o,a),a};const tt=class extends f{constructor(){super(...arguments),this.inputChecked=!1,this.inputDisabled=!1,this.inputLabel="",this.inputName="checkbox",this.inputSwitch=!1,this.labelPosition="after",this._hasCheckedIconSlot=!1,this._hasUncheckedIconSlot=!1,this._readyForUpdates=!1}handleCheckedIconSlotchange(t){const o=t.target.assignedNodes({flatten:!0});this._hasCheckedIconSlot=o.length>0}handleUncheckedIconSlotchange(t){const o=t.target.assignedNodes({flatten:!0});this._hasUncheckedIconSlot=o.length>0}_toggleChecked(){this.inputChecked=!this.inputChecked}firstUpdated(t){this._readyForUpdates=!0}render(){const t=l`<slot>${this.inputLabel}</slot>`,o=this.inputChecked?l`<slot name="checked-icon" @slotchange="${this.handleCheckedIconSlotchange}"></slot>`:l`<slot name="unchecked-icon" @slotchange="${this.handleUncheckedIconSlotchange}"></slot>`,r={"admin-bar-checkbox":!0,"admin-bar-checkbox--disabled":this.inputDisabled,"admin-bar-checkbox--has-icon":this.inputChecked?this._hasCheckedIconSlot:this._hasUncheckedIconSlot};return l`<label class="${V(r)}"
      >${this.labelPosition==="before"?t:h}${o}<input
        id="${this.inputName}"
        name="${this.inputName}"
        ?switch="${this.inputSwitch}"
        ?checked="${this.inputChecked?"checked":h}"
        ?disabled="${this.inputDisabled?"disabled":h}"
        aria-label="${this.inputAriaLabel??h}"
        type="checkbox"
        @click="${this._toggleChecked}"
      />${this.labelPosition==="after"?t:h}</label
    >`}willUpdate(t){this._readyForUpdates&&t.has("inputChecked")&&(this.dispatchEvent(new Le(this.inputChecked)),this.inputChecked?this.dispatchEvent(new Re):this.dispatchEvent(new De))}};tt.shadowRootOptions={...f.shadowRootOptions,delegatesFocus:!0},tt.styles=A`
    :host {
      display: block;
      height: var(--admin-bar-height, 43px);
    }
    .admin-bar-checkbox {
      ${Tt()}
      display: flex;
      flex-wrap: nowrap;
      gap: 5px;
      align-items: center;
      padding: var(--admin-bar-text-padding, var(--admin-bar-block-padding) var(--admin-bar-inline-padding));
      height: 100%;
      accent-color: var(--admin-bar-color-highlight);
      white-space: nowrap;

      &:has(:focus-visible) {
        ${Pt()}
      }

      input {
        outline: none;
      }
      &.admin-bar-checkbox--disabled {
        cursor: not-allowed;
      }
      &.admin-bar-checkbox--has-icon input[type='checkbox'] {
        ${D()}
      }
    }
  `;let w=tt;k([d({attribute:"input-aria-label"})],w.prototype,"inputAriaLabel");k([d({attribute:"checked",reflect:!0,type:Boolean,useDefault:!0})],w.prototype,"inputChecked");k([d({attribute:"disabled",type:Boolean})],w.prototype,"inputDisabled");k([d({attribute:"label-text"})],w.prototype,"inputLabel");k([d({attribute:"input-name"})],w.prototype,"inputName");k([d({attribute:"input-switch",type:Boolean})],w.prototype,"inputSwitch");k([d({attribute:"label-position"})],w.prototype,"labelPosition");k([_()],w.prototype,"_hasCheckedIconSlot");k([_()],w.prototype,"_hasUncheckedIconSlot");k([_()],w.prototype,"_readyForUpdates");const Ht=class Vt extends Event{constructor(t){super(Vt.eventName,{bubbles:!0,composed:!0}),this.checked=!1,this.checked=t}};Ht.eventName="change";let Le=Ht;const It=class zt extends Event{constructor(){super(zt.eventName,{bubbles:!0,composed:!0})}};It.eventName="checked";let Re=It;const qt=class jt extends Event{constructor(){super(jt.eventName,{bubbles:!0,composed:!0})}};qt.eventName="unchecked";let De=qt;var Me=Object.defineProperty,L=(e,t,o,r)=>{for(var a=void 0,s=e.length-1,i;s>=0;s--)(i=e[s])&&(a=i(t,o,a)||a);return a&&Me(t,o,a),a};const Ft=class extends f{constructor(){super(),this.dlContent=[],this.badgeContent="",this.badgePosition="before",this.multiLine=!1,this.tableContent={rows:[]},this.textContent="",customElements.get("admin-bar-badge")||customElements.define("admin-bar-badge",lt)}render(){const t=[];this.textContent??!1?t.push(l`<span class="text">${this.textContent}</span>`):this.dlContent.length?t.push(l`<dl part="dl">
          ${this.dlContent.map(r=>l`<dt>${r[0]??""}</dt>
                <dd>${r[1]??""}</dd>`)}
        </dl>`):this.tableContent?.rows?.length&&t.push(l`<table part="table">
          ${this.tableContent?.headers?.length?l`<thead>
                <tr>
                  ${this.tableContent.headers.map(r=>l`<th>${r??""}</th>`)}
                </tr>
              </thead>`:h}
          ${l`<tbody>
            ${this.tableContent.rows.map(r=>l`<tr>
                  ${r.map(a=>l`<td>${a}</td>`)}
                </tr>`)}
          </tbody>`}
          ${this.tableContent?.footers?.length?l`<tfoot>
                <tr>
                  ${this.tableContent.footers.map(r=>l`<td>${r??""}</td>`)}
                </tr>
              </tfoot>`:h}
        </table>`);let o=l`<slot>${t}</slot>`;return(this.badgeContent??!1)&&(o=this.badgePosition==="before"?l`<admin-bar-badge part="badge">${this.badgeContent}</admin-bar-badge>${o}`:l`${o}<admin-bar-badge part="badge">${this.badgeContent}</admin-bar-badge>`),l`<span class="admin-bar-text${this.multiLine?" multi-line":""}">${o}</span>`}};Ft.styles=A`
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
  `;let U=Ft;L([d({attribute:"dl-content",type:Array})],U.prototype,"dlContent");L([d({attribute:"badge-content"})],U.prototype,"badgeContent");L([d({attribute:"badge-position"})],U.prototype,"badgePosition");L([d({attribute:"multi-line",type:Boolean})],U.prototype,"multiLine");L([d({attribute:"table-content",type:Object})],U.prototype,"tableContent");L([d({attribute:"text-content"})],U.prototype,"textContent");function He(e=[]){e.forEach(t=>{const o=`admin-bar-${t}`;if(!customElements.get(o))switch(t){case"button":customElements.define(o,v);break;case"checkbox":customElements.define(o,w);break;case"text":customElements.define(o,U);break}}),customElements.get("admin-bar")||customElements.define("admin-bar",b)}class Ve extends HTMLElement{static observedAttributes=["data-api-status"];#t=null;_actionUrl=void 0;_csrfToken=void 0;_requestStatus;_sessionActionUrl=void 0;attributeChangedCallback(t,o,r){t==="data-api-status"&&["errored","loading","ready","resolved"].includes(r)&&(r==="errored"&&(this._csrfToken=void 0),this._requestStatus=r)}connectedCallback(){this.#t=document.getElementById(this.dataset.adminBar??"")??null,this._actionUrl=this.dataset.actionUrl,this._sessionActionUrl=this.dataset.sessionActionUrl,this.setApiStatus("ready"),this.setUpDebugToolbarCheckbox()}async actionRequest(t,o=""){if(this._requestStatus!=="loading"){if(this._actionUrl===void 0)return{message:"action-url-invalid",status:"error"};if(this._csrfToken===void 0){const r=await this.getSessionInfo();if(r.csrfTokenValue)this._csrfToken=r.csrfTokenValue;else return{message:"csrf-token-invalid",status:"error"}}try{this.setApiStatus("loading");const r=new FormData;r.append("requestHandle",t),o&&r.append("params",o);const a=await fetch(this._actionUrl,{body:r,headers:{Accept:"application/json","X-CSRF-Token":this._csrfToken??"","X-Requested-With":"XMLHttpRequest"},method:"POST"});if(!a.ok)throw this.setApiStatus("errored"),new Error(`Response status: ${a.status}`);const s=await a.json();if(s.status!=="success")throw s.message;return this.setApiStatus("resolved"),s}catch(r){return this.setApiStatus("errored"),{message:r,status:"error"}}}}async getSessionInfo(){if(this._sessionActionUrl)return fetch(this._sessionActionUrl,{headers:{Accept:"application/json"}}).then(t=>t.json())}setApiStatus(t){if(this.#t)switch(t){case"errored":this.#t.setAttribute("progress","-1");break;case"loading":this.#t.setAttribute("progress","50");break;case"resolved":this.#t.setAttribute("progress","100");break}this.dataset.apiStatus=t}setUpDebugToolbarCheckbox(){const t=this.#t?.querySelector("#admin-bar-checkbox-debug-toolbar");t&&t.addEventListener("change",async o=>{t.setAttribute("disabled",!0),await window.adminBarPostRequest(document.getElementById(this.dataset.adminBar??""),"admin-bar-debug-toolbar-toggle",JSON.stringify({query:o.checked})),t.removeAttribute("disabled")})}}customElements.define("craft-admin-bar",Ve);class Ie extends HTMLElement{_searchForm=null;_resultsElement=null;_onSearchFormSubmit=async t=>{t.preventDefault();const o=this.shadowRoot?.querySelector('input[type="search"]')??null;if(o){const r=await window.adminBarPostRequest(this.closest("admin-bar"),"craft-search-search",JSON.stringify({query:o.value}));if(this._resultsElement){let a,s;if(r.searchResultsStatus==="OK"){a=document.getElementById("admin-bar-search-results-template"),s=a.content;const i=document.createElement("ul");r.searchResults.forEach(c=>{const u=s.cloneNode(!0).querySelector("li"),m=u.querySelector("admin-bar-button.edit");c.cpEditUrl?(m.setAttribute("button-href",c.cpEditUrl),m.setAttribute("label-text",c.title)):u.removeChild(m);const p=u.querySelector("admin-bar-button.view"),y=p.querySelector("admin-bar-text"),$=u.querySelector("admin-bar-text.view");c.url??!1?(p.setAttribute("button-href",c.url),p.setAttribute("badge-content",c.status),y.setAttribute("text-content",c.title),$.remove()):($.setAttribute("text-content",c.title),p.remove()),i.append(u)}),this._resultsElement.replaceChildren(i)}else a=document.getElementById("admin-bar-search-no-results-template"),s=a.content,this._resultsElement.replaceChildren(s.cloneNode(!0))}}};constructor(){super();const o=document.getElementById("admin-bar-search-template").content;this.attachShadow({mode:"open"}).appendChild(o.cloneNode(!0)),this._searchForm=this.shadowRoot?.querySelector("form")??null,this._resultsElement=this.shadowRoot?.querySelector("form + div")??null}connectedCallback(){this._searchForm?.addEventListener("submit",this._onSearchFormSubmit)}disconnectedCallback(){this._searchForm?.removeEventListener("submit",this._onSearchFormSubmit)}}customElements.define("craft-admin-bar-search",Ie);He(["button","checkbox","text"]);window.adminBarPostRequest=async(e,t,o="")=>{try{const r=document.querySelector(`[data-admin-bar="${e?.id}"]`),a=await r?.actionRequest(t,o);if(a?.status==="success"){if(a.refreshPage)location.reload();else if(setTimeout(()=>{r&&(r.dataset.apiStatus="ready")},3e3),a.data)return a.data}else throw a?.message}catch(r){console.error(`Admin Bar: ${r}`)}};
