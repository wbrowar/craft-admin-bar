var ft=e=>{throw TypeError(e)},yt=(e,t,r)=>t.has(e)||ft("Cannot "+r),nt=(e,t,r)=>(yt(e,t,"read from private field"),r?r.call(e):t.get(e)),zt=(e,t,r)=>t.has(e)?ft("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),jt=(e,t,r,o)=>(yt(e,t,"write to private field"),t.set(e,r),r);const W=globalThis,tt=W.ShadowRoot&&(W.ShadyCSS===void 0||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),lt=new WeakMap;let _t=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(tt&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=lt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&lt.set(t,e))}return e}toString(){return this.cssText}};const Ft=e=>new _t(typeof e=="string"?e:e+"",void 0,et),S=(e,...t)=>{const r=e.length===1?e[0]:t.reduce(((o,a,s)=>o+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[s+1]),e[0]);return new _t(r,e,et)},Wt=(e,t)=>{if(tt)e.adoptedStyleSheets=t.map((r=>r instanceof CSSStyleSheet?r:r.styleSheet));else for(const r of t){const o=document.createElement("style"),a=W.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=r.cssText,e.appendChild(o)}},dt=tt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return Ft(r)})(e):e,{is:Gt,defineProperty:Kt,getOwnPropertyDescriptor:Xt,getOwnPropertyNames:Jt,getOwnPropertySymbols:Zt,getPrototypeOf:Yt}=Object,X=globalThis,ct=X.trustedTypes,Qt=ct?ct.emptyScript:"",te=X.reactiveElementPolyfillSupport,M=(e,t)=>e,G={toAttribute(e,t){switch(t){case Boolean:e=e?Qt:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},rt=(e,t)=>!Gt(e,t),ht={attribute:!0,type:String,converter:G,reflect:!1,useDefault:!1,hasChanged:rt};Symbol.metadata??=Symbol("metadata"),X.litPropertyMetadata??=new WeakMap;let O=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ht){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Kt(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:a}=Xt(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){const i=o?.call(this);a?.call(this,s),this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ht}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;const e=Yt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){const t=this.properties,r=[...Jt(t),...Zt(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(dt(o))}else e!==void 0&&t.push(dt(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Wt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const a=(r.converter?.toAttribute!==void 0?r.converter:G).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:G;this._$Em=o;const i=s.fromAttribute(t,a.type);this[o]=i??this._$Ej?.get(o)??i,this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){const o=this.constructor,a=this[e];if(r??=o.getPropertyOptions(e),!((r.hasChanged??rt)(a,t)||r.useDefault&&r.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:a},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),a!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,a]of r){const{wrapped:s}=a,i=this[o];s!==!0||this._$AL.has(o)||i===void 0||this.C(o,void 0,a,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};O.elementStyles=[],O.shadowRootOptions={mode:"open"},O[M("elementProperties")]=new Map,O[M("finalized")]=new Map,te?.({ReactiveElement:O}),(X.reactiveElementVersions??=[]).push("2.1.1");const ot=globalThis,K=ot.trustedTypes,pt=K?K.createPolicy("lit-html",{createHTML:e=>e}):void 0,$t="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,xt="?"+k,ee=`<${xt}>`,T=document,V=()=>T.createComment(""),I=e=>e===null||typeof e!="object"&&typeof e!="function",at=Array.isArray,re=e=>at(e)||typeof e?.[Symbol.iterator]=="function",Z=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ut=/-->/g,bt=/>/g,E=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gt=/'/g,mt=/"/g,wt=/^(?:script|style|textarea|title)$/i,oe=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),l=oe(1),P=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),vt=new WeakMap,C=T.createTreeWalker(T,129);function At(e,t){if(!at(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return pt!==void 0?pt.createHTML(t):t}const ae=(e,t)=>{const r=e.length-1,o=[];let a,s=t===2?"<svg>":t===3?"<math>":"",i=N;for(let d=0;d<r;d++){const n=e[d];let u,m,p=-1,v=0;for(;v<n.length&&(i.lastIndex=v,m=i.exec(n),m!==null);)v=i.lastIndex,i===N?m[1]==="!--"?i=ut:m[1]!==void 0?i=bt:m[2]!==void 0?(wt.test(m[2])&&(a=RegExp("</"+m[2],"g")),i=E):m[3]!==void 0&&(i=E):i===E?m[0]===">"?(i=a??N,p=-1):m[1]===void 0?p=-2:(p=i.lastIndex-m[2].length,u=m[1],i=m[3]===void 0?E:m[3]==='"'?mt:gt):i===mt||i===gt?i=E:i===ut||i===bt?i=N:(i=E,a=void 0);const y=i===E&&e[d+1].startsWith("/>")?" ":"";s+=i===N?n+ee:p>=0?(o.push(u),n.slice(0,p)+$t+n.slice(p)+k+y):n+k+(p===-2?d:y)}return[At(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class q{constructor({strings:t,_$litType$:r},o){let a;this.parts=[];let s=0,i=0;const d=t.length-1,n=this.parts,[u,m]=ae(t,r);if(this.el=q.createElement(u,o),C.currentNode=this.el.content,r===2||r===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(a=C.nextNode())!==null&&n.length<d;){if(a.nodeType===1){if(a.hasAttributes())for(const p of a.getAttributeNames())if(p.endsWith($t)){const v=m[i++],y=a.getAttribute(p).split(k),F=/([.?@])?(.*)/.exec(v);n.push({type:1,index:s,name:F[2],strings:y,ctor:F[1]==="."?ie:F[1]==="?"?ne:F[1]==="@"?le:J}),a.removeAttribute(p)}else p.startsWith(k)&&(n.push({type:6,index:s}),a.removeAttribute(p));if(wt.test(a.tagName)){const p=a.textContent.split(k),v=p.length-1;if(v>0){a.textContent=K?K.emptyScript:"";for(let y=0;y<v;y++)a.append(p[y],V()),C.nextNode(),n.push({type:2,index:++s});a.append(p[v],V())}}}else if(a.nodeType===8)if(a.data===xt)n.push({type:2,index:s});else{let p=-1;for(;(p=a.data.indexOf(k,p+1))!==-1;)n.push({type:7,index:s}),p+=k.length-1}s++}}static createElement(t,r){const o=T.createElement("template");return o.innerHTML=t,o}}function B(e,t,r=e,o){if(t===P)return t;let a=o!==void 0?r._$Co?.[o]:r._$Cl;const s=I(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(e),a._$AT(e,r,o)),o!==void 0?(r._$Co??=[])[o]=a:r._$Cl=a),a!==void 0&&(t=B(e,a._$AS(e,t.values),a,o)),t}class se{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:o}=this._$AD,a=(t?.creationScope??T).importNode(r,!0);C.currentNode=a;let s=C.nextNode(),i=0,d=0,n=o[0];for(;n!==void 0;){if(i===n.index){let u;n.type===2?u=new z(s,s.nextSibling,this,t):n.type===1?u=new n.ctor(s,n.name,n.strings,this,t):n.type===6&&(u=new de(s,this,t)),this._$AV.push(u),n=o[++d]}i!==n?.index&&(s=C.nextNode(),i++)}return C.currentNode=T,a}p(t){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,o,a){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=B(this,t,r),I(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==P&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):re(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=q.createElement(At(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===a)this._$AH.p(r);else{const s=new se(a,this),i=s.u(this.options);s.p(r),this.T(i),this._$AH=s}}_$AC(t){let r=vt.get(t.strings);return r===void 0&&vt.set(t.strings,r=new q(t)),r}k(t){at(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,a=0;for(const s of t)a===r.length?r.push(o=new z(this.O(V()),this.O(V()),this,this.options)):o=r[a],o._$AI(s),a++;a<r.length&&(this._$AR(o&&o._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,o,a,s){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=r,this._$AM=a,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=h}_$AI(t,r=this,o,a){const s=this.strings;let i=!1;if(s===void 0)t=B(this,t,r,0),i=!I(t)||t!==this._$AH&&t!==P,i&&(this._$AH=t);else{const d=t;let n,u;for(t=s[0],n=0;n<s.length-1;n++)u=B(this,d[o+n],r,n),u===P&&(u=this._$AH[n]),i||=!I(u)||u!==this._$AH[n],u===h?t=h:t!==h&&(t+=(u??"")+s[n+1]),this._$AH[n]=u}i&&!a&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ie extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class ne extends J{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class le extends J{constructor(t,r,o,a,s){super(t,r,o,a,s),this.type=5}_$AI(t,r=this){if((t=B(this,t,r,0)??h)===P)return;const o=this._$AH,a=t===h&&o!==h||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==h&&(o===h||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class de{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const ce=ot.litHtmlPolyfillSupport;ce?.(q,z),(ot.litHtmlVersions??=[]).push("3.3.1");const he=(e,t,r)=>{const o=r?.renderBefore??t;let a=o._$litPart$;if(a===void 0){const s=r?.renderBefore??null;o._$litPart$=a=new z(t.insertBefore(V(),s),s,void 0,r??{})}return a._$AI(e),a},st=globalThis;let _=class extends O{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=he(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return P}};_._$litElement$=!0,_.finalized=!0,st.litElementHydrateSupport?.({LitElement:_});const pe=st.litElementPolyfillSupport;pe?.({LitElement:_});(st.litElementVersions??=[]).push("4.2.1");const ue={ATTRIBUTE:1},be=e=>(...t)=>({_$litDirective$:e,values:t});class ge{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}const H=be(class extends ge{constructor(e){if(super(e),e.type!==ue.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((o=>o!==""))));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||this.nt?.has(o)||(a?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return P}}),me={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:rt},ve=(e=me,t,r)=>{const{kind:o,metadata:a}=r;let s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),o==="accessor"){const{name:i}=r;return{set(d){const n=t.get.call(this);t.set.call(this,d),this.requestUpdate(i,n,e)},init(d){return d!==void 0&&this.C(i,void 0,e,d),d}}}if(o==="setter"){const{name:i}=r;return function(d){const n=this[i];t.call(this,d),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+o)};function c(e){return(t,r)=>typeof r=="object"?ve(e,t,r):((o,a,s)=>{const i=a.hasOwnProperty(s);return a.constructor.createProperty(s,o),i?Object.getOwnPropertyDescriptor(a,s):void 0})(e,t,r)}function f(e){return c({...e,state:!0,attribute:!1})}const fe=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);function kt(e){return(t,r)=>{const{slot:o,selector:a}=e??{},s="slot"+(o?`[name=${o}]`:":not([name])");return fe(t,r,{get(){const i=this.renderRoot?.querySelector(s),d=i?.assignedElements(e)??[];return a===void 0?d:d.filter((n=>n.matches(a)))}})}}var ye=Object.defineProperty,it=(e,t,r,o)=>{for(var a=void 0,s=e.length-1,i;s>=0;s--)(i=e[s])&&(a=i(t,r,a)||a);return a&&ye(t,r,a),a};const St=class extends _{constructor(){super(...arguments),this.progressValue=0,this._progressState="reset",this._progressWidth=0}_onProgressAnimationEnd(){["error","success"].includes(this._progressState)&&(this._progressState="reset")}render(){return l` <div class="wrapper">
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
    </div>`}willUpdate(t){t.has("progressValue")&&(this._progressWidth=0,this.progressValue<0?(this._progressState="error",this._progressWidth=100):this.progressValue>=100?(this._progressState="success",this._progressWidth=100):this.progressValue>=0&&this.progressValue<100&&(this._progressState="display",this._progressWidth=this.progressValue))}};St.styles=S`
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
  `;let j=St;it([c({attribute:"progress-value",type:Number})],j.prototype,"progressValue");it([f()],j.prototype,"_progressState");it([f()],j.prototype,"_progressWidth");function Et(){return S`
    & {
      background-color: color-mix(in srgb, var(--admin-bar-button-color-text, white), transparent 90%);
      outline: 3px solid color-mix(in srgb, var(--admin-bar-color-highlight), transparent 10%);
      outline-offset: -3px;
    }
  `}function Ct(){return S`
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
  `}function R(){return S`
    & {
      clip: rect(0 0 0 0);
      clip-path: inset(100%);
      position: absolute;
      width: 1px;
      height: 1px;
      white-space: nowrap;
      overflow: hidden;
    }
  `}var _e=Object.defineProperty,A=(e,t,r,o)=>{for(var a=void 0,s=e.length-1,i;s>=0;s--)(i=e[s])&&(a=i(t,r,a)||a);return a&&_e(t,r,a),a};const Y=class extends _{constructor(){super(),this.label="",this.isGreetingButton=!1,this.isLogoutButton=!1,this._hasPopoverSlot=!1,this._inVertical=!1,this._popoverOpen=!1,customElements.get("admin-bar-surface")||customElements.define("admin-bar-surface",j)}_onVerticalPopoverButtonClick(){this._inVertical&&(this._popoverOpen=!this._popoverOpen)}_onPopoverButtonKeyDown(t){if(["ArrowUp","ArrowDown"].includes(t.key)){if(t.preventDefault(),!this._popoverOpen){const r=this.shadowRoot?.querySelector("[popovertarget]")??null;r&&r.click()}if(this._popoverFocusableChildren.length){const r='admin-bar-button, admin-bar-checkbox, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';let o=this._popoverFocusableChildren.filter(a=>a.matches(r));if(!o.length){o=[];const a=this.isGreetingButton?this._popoverFocusableChildren[0].querySelector("slot")?.assignedNodes({flatten:!0}):this._popoverFocusableChildren;a&&a.forEach(s=>{const i=s.querySelectorAll(r);for(const d of i)o.push(d)})}if(o.length){let a=null;const s=o.findIndex(i=>i===document.activeElement);t.key==="ArrowUp"?s<=0?a=o[o.length-1]:a=o[s-1]:t.key==="ArrowDown"&&(s>=o.length-1?a=o[0]:a=o[s+1]),a&&(a.tagName==="ADMIN-BAR-BUTTON"?a=a.shadowRoot?.querySelector("a, button")??null:a.tagName==="ADMIN-BAR-CHECKBOX"&&(a=a.shadowRoot?.querySelector("input")??null),a&&a.focus())}}}}updateInVertical(){this._popoverOpen=!1,this._inVertical=window.getComputedStyle(this).getPropertyValue("--admin-bar-vertical")==="true"}_onPopoverToggle(t){this._popoverOpen=t.newState==="open",this.dispatchEvent(new $e(t.oldState,t.newState)),this._popoverOpen?this.dispatchEvent(new xe):this.dispatchEvent(new we)}_handlePopoverSlotchange(t){const r=t.target.assignedNodes({flatten:!0});this._hasPopoverSlot=r.length>0}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onPopoverButtonKeyDown),this.updateInVertical()}render(){const t={"admin-bar-button":!0},r=l`<slot name="before-label"></slot
      ><slot>${this.label??!1?l`<span>${this.label}</span>`:h}</slot
      ><slot name="after-label"></slot>`;if(this.href)return l`<a
        class="${H(t)}"
        aria-label="${this.buttonAriaLabel??h}"
        href="${this.href}"
        >${r}</a
      >`;if(this._hasPopoverSlot){const o=l`<button
        class="${H(t)}"
        aria-label="${this.buttonAriaLabel??h}"
        popovertarget="${this._inVertical?h:"admin-bar-button-popover"}"
        @click="${this._onVerticalPopoverButtonClick}"
      >
        ${r}
      </button>`;return this._inVertical?l`${o}
          <div class="vertical-popover" ?data-open="${this._popoverOpen}">
            <slot name="popover" @slotchange="${this._handlePopoverSlotchange}"></slot>
          </div>`:l`${o}<admin-bar-surface
          popover
          id="admin-bar-button-popover"
          part="popover"
          @toggle="${this._onPopoverToggle}"
          ><slot name="popover" @slotchange="${this._handlePopoverSlotchange}"></slot
        ></admin-bar-surface>`}return l`<button class="${H(t)}" aria-label="${this.buttonAriaLabel??h}">
        ${r}</button
      ><slot name="popover" @slotchange="${this._handlePopoverSlotchange}"></slot>`}};Y.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0},Y.styles=S`
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
      ${Ct()}
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
        ${Et()}
      }

      :host([logout-button]) &:hover {
        background-color: var(--admin-bar-color-highlight-logout, var(--admin-bar-color-highlight));
        color: var(--admin-bar-color-text-logout);
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
          inset-block-start: calc(anchor(end) + 4px);
          margin: 0;
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
  `;let $=Y;A([c({attribute:"button-aria-label"})],$.prototype,"buttonAriaLabel");A([c({attribute:"button-href"})],$.prototype,"href");A([c({attribute:"label-text"})],$.prototype,"label");A([c({attribute:"greeting-button",type:Boolean})],$.prototype,"isGreetingButton");A([c({attribute:"logout-button",type:Boolean})],$.prototype,"isLogoutButton");A([f()],$.prototype,"_hasPopoverSlot");A([f()],$.prototype,"_inVertical");A([f()],$.prototype,"_popoverOpen");A([kt({flatten:!0,slot:"popover"})],$.prototype,"_popoverFocusableChildren");const Tt=class Pt extends Event{constructor(t,r){super(Pt.eventName,{bubbles:!0,composed:!0}),this.newState="closed",this.oldState="closed",this.open=!1,this.newState=r,this.oldState=t,this.open=r==="open"}};Tt.eventName="toggle";let $e=Tt;const Ut=class Ot extends Event{constructor(){super(Ot.eventName,{bubbles:!0,composed:!0})}};Ut.eventName="opened";let xe=Ut;const Bt=class Lt extends Event{constructor(){super(Lt.eventName,{bubbles:!0,composed:!0})}};Bt.eventName="closed";let we=Bt;function Ae(e,t){function r(s){if(s.button!==0)return;let{x:i,y:d}=e.eventToCoordinates(s);e.dragging={dx:e.pos.x-i,dy:e.pos.y-d},t.classList.add("dragging"),t.setPointerCapture(s.pointerId),t.style.userSelect="none",t.style.webkitUserSelect="none"}function o(){e.dragging=null,t.classList.remove("dragging"),t.style.userSelect="",t.style.webkitUserSelect=""}function a(s){if(!e.dragging)return;let{x:i,y:d}=e.eventToCoordinates(s);e.pos={x:i+e.dragging.dx,y:d+e.dragging.dy}}t.addEventListener("pointerdown",r),t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),t.addEventListener("pointermove",a),t.addEventListener("touchstart",s=>s.preventDefault()),t.addEventListener("dragstart",s=>s.preventDefault())}l`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="20px"
  height="20px"
  fill="currentColor"
  viewBox="0 -960 960 960"
>
  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224z" />
</svg>`;const ke=l`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="currentColor"
  viewBox="0 -960 960 960"
>
  <path d="M440-440v240h-80v-160H200v-80zm160-320v160h160v80H520v-240z" />
</svg>`,Se=l`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="20px"
  height="20px"
  fill="currentColor"
  viewBox="0 0 228.93 228.72"
>
  <path
    d="M227.35,48.35a14.64,14.64,0,0,0-2.79-17L197.84,4.58a15.47,15.47,0,0,0-17.42-3.17l-5.95,4.74L14.29,166.33,0,228.72l62.39-14.29L222.57,54.26ZM32.59,210.92a30,30,0,0,0-14.84-14.58l5.53-24.15,14.14,6.91,13.06,13.06,6.86,13,0,0Z"
  />
</svg>`,Ee=l`<svg
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
</svg>`;var Ce=Object.defineProperty,g=(e,t,r,o)=>{for(var a=void 0,s=e.length-1,i;s>=0;s--)(i=e[s])&&(a=i(t,r,a)||a);return a&&Ce(t,r,a),a},D;const Nt=class extends _{constructor(){super(),zt(this,D),this.autoToggleVertical=!1,this.avatarAlt="Avatar of logged in user.",this.logoutHref="#",this.logoutLabel="Sign out",this.progressValue=0,this.showEnvironment=!1,this.showGreeting=!1,this.showLogout=!1,this.toolbarToggle=void 0,this.toolbarToggleDrag=void 0,this.toolbarToggleDragHandleDescription="Click to drag the toggle button to another position on the page.",this.toolbarToggleInnerDescription="Click to collapse toolbar.",this.toolbarToggleOuterDescription="Click to expand toolbar.",this._outerToggleDraggableState=void 0,this._hasGreetingPopoverSlot=!1,this._hostWidth=0,this._isVertical=!1,customElements.get("admin-bar-button")||customElements.define("admin-bar-button",$),customElements.get("admin-bar-surface")||customElements.define("admin-bar-surface",j)}_toggleVerticalAdminBar(t){this.toolbarToggle=t}_handleGreetingPopoverSlotchange(t){const r=t.target.assignedNodes({flatten:!0});this._hasGreetingPopoverSlot=r.length>0}connectedCallback(){super.connectedCallback(),this.parentElement&&(jt(this,D,new ResizeObserver(t=>{for(const r of t){if(Math.round(r.contentRect.width)!==this._hostWidth){const o=window.getComputedStyle(this).getPropertyValue("--admin-bar-vertical")==="true";if(this._isVertical!==o&&(this._isVertical=o,this.autoToggleVertical&&(o?this.toolbarToggle="button":this.toolbarToggle="toolbar"),this._adminBarButtonChildren.length))for(const a of this._adminBarButtonChildren)a?.updateInVertical()}this._hostWidth=Math.round(r.contentRect.width)}})),nt(this,D).observe(this.parentElement))}disconnectedCallback(){super.disconnectedCallback(),nt(this,D)?.disconnect()}firstUpdated(){if(this.toolbarToggle===""&&(this.toolbarToggle=this._isVertical?"button":"toolbar"),this.toolbarToggleDrag===""&&(this.toolbarToggleDrag="reset"),this.toolbarToggleDrag){const t=this.shadowRoot?.querySelector(".outer-toggle")??null,r=t?.querySelector(".drag-handle")??null;t&&r&&(this._outerToggleDraggableState={eventToCoordinates(o){return{x:o.clientX,y:o.clientY}},dragging:null,_pos:{x:0,y:0},get pos(){return this._pos},set pos(o){this._pos=o,t.style.transform=`translate(${this._pos.x}px,${this._pos.y}px)`}},Ae(this._outerToggleDraggableState,r))}}render(){const t={"admin-bar":!0,"glass-surface":!0},r=this.environmentDescription?l`<p>${this.environmentDescription}</p>`:h,o=l`<div data-testid="greeting-content" class="greeting-content">
      ${this.avatarSrc?l`<img alt="${this.avatarAlt}" src="${this.avatarSrc}" width="25px" height="25px" part="avatar" />`:h}
      <span><slot name="greeting">${this.greetingText??Se}</slot></span>
    </div>`,a=this._hasGreetingPopoverSlot?l`
          <admin-bar-button
            class="greeting"
            button-aria-label="${this.greetingButtonAriaLabel??h}"
            greeting-button
          >
            ${o}
            <div slot="popover">
              <slot
                data-testid="greeting-popover--slotted"
                name="greeting-popover"
                @slotchange="${this._handleGreetingPopoverSlotchange}"
              ></slot>
            </div>
          </admin-bar-button>
        `:l`<div class="greeting">
          ${o}<slot
            data-testid="greeting-popover--empty"
            name="greeting-popover"
            @slotchange="${this._handleGreetingPopoverSlotchange}"
          ></slot>
        </div>`,s=this.showLogout?l`<slot name="logout"
          ><admin-bar-button
            logout-button
            button-href="${this.logoutHref}"
            label-text="${this.logoutLabel}"
          ></admin-bar-button
        ></slot>`:h;return l`
      <admin-bar-surface class="outer-toggle" data-testid="outer-toggle">
        <div>
          <admin-bar-button @click="${()=>this._toggleVerticalAdminBar("toolbar")}"
            ><p>${this.toolbarToggleOuterDescription}</p>
            <slot name="outer-toggle">${o}</slot></admin-bar-button
          >
          <div class="drag-handle" data-testid="drag-handle">
            ${Ee}
            <p>${this.toolbarToggleDragHandleDescription}</p>
          </div>
        </div>
      </admin-bar-surface>

      <admin-bar-surface
        class="${H(t)}"
        progress-value="${this.progressValue}"
        part="toolbar"
        data-testid="toolbar"
      >
        <div>
          <div data-testid="environment" class="environment">${r}</div>
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
            <slot name="inner-toggle">${ke}</slot></admin-bar-button
          >
        </div>
      </admin-bar-surface>
    `}};D=new WeakMap,Nt.styles=S`
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
        ${R()}
      }
      .drag-handle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 100%;
        color: var(--admin-bar-color-text);
        cursor: grab;

        &.dragging {
          cursor: grabbing;
        }
        & > p {
          ${R()}
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
      height: auto;

      & > div {
        --border-color: color-mix(in oklch, var(--admin-bar-color-text), transparent 90%);
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

        @container style(--admin-bar-vertical: true) {
          & {
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
        ${R()}
      }
    }

    admin-bar-button:is([greeting-button], [logout-button]),
    .logout {
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

      :host([toolbar-toggle]) & {
        display: var(--admin-bar-toolbar-toggle-display, inline-flex);
      }

      p {
        ${R()}
      }
    }

    .buttons {
      grid-area: buttons;
      position: relative;
      width: 100%;
      height: 100%;

      :host([show-greeting]) & {
        border-left: 1px solid var(--border-color);

        @container style(--admin-bar-vertical: true) {
          & {
            border-top: 1px solid var(--border-color);
            border-left: none;
          }
        }
      }

      :host([show-logout]) & {
        border-right: 1px solid var(--border-color);

        @container style(--admin-bar-vertical: true) {
          & {
            border-bottom: 1px solid var(--border-color);
            border-right: none;
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
  `;let b=Nt;g([c({attribute:"auto-toggle-vertical",type:Boolean})],b.prototype,"autoToggleVertical");g([c({attribute:"avatar-alt"})],b.prototype,"avatarAlt");g([c({attribute:"avatar-src"})],b.prototype,"avatarSrc");g([c({attribute:"environment-description"})],b.prototype,"environmentDescription");g([c({attribute:"greeting-button-aria-label"})],b.prototype,"greetingButtonAriaLabel");g([c({attribute:"greeting-text"})],b.prototype,"greetingText");g([c({attribute:"logout-href"})],b.prototype,"logoutHref");g([c({attribute:"logout-label"})],b.prototype,"logoutLabel");g([c({attribute:"progress",type:Number})],b.prototype,"progressValue");g([c({attribute:"show-environment",type:Boolean})],b.prototype,"showEnvironment");g([c({attribute:"show-greeting",type:Boolean})],b.prototype,"showGreeting");g([c({attribute:"show-logout",type:Boolean})],b.prototype,"showLogout");g([c({attribute:"toolbar-toggle",reflect:!0})],b.prototype,"toolbarToggle");g([c({attribute:"toolbar-toggle-drag",reflect:!0})],b.prototype,"toolbarToggleDrag");g([c({attribute:"toolbar-toggle-drag-handle-description"})],b.prototype,"toolbarToggleDragHandleDescription");g([c({attribute:"toolbar-toggle-inner-description"})],b.prototype,"toolbarToggleInnerDescription");g([c({attribute:"toolbar-toggle-outer-description"})],b.prototype,"toolbarToggleOuterDescription");g([f()],b.prototype,"_outerToggleDraggableState");g([f()],b.prototype,"_hasGreetingPopoverSlot");g([f()],b.prototype,"_hostWidth");g([f()],b.prototype,"_isVertical");g([kt({flatten:!0,selector:"admin-bar-button"})],b.prototype,"_adminBarButtonChildren");var Te=Object.defineProperty,w=(e,t,r,o)=>{for(var a=void 0,s=e.length-1,i;s>=0;s--)(i=e[s])&&(a=i(t,r,a)||a);return a&&Te(t,r,a),a};const Q=class extends _{constructor(){super(...arguments),this.inputChecked=!1,this.inputDisabled=!1,this.inputLabel="",this.inputName="checkbox",this.inputSwitch=!1,this.labelPosition="after",this._hasCheckedIconSlot=!1,this._hasUncheckedIconSlot=!1,this._readyForUpdates=!1}handleCheckedIconSlotchange(t){const r=t.target.assignedNodes({flatten:!0});this._hasCheckedIconSlot=r.length>0}handleUncheckedIconSlotchange(t){const r=t.target.assignedNodes({flatten:!0});this._hasUncheckedIconSlot=r.length>0}_toggleChecked(){this.inputChecked=!this.inputChecked}firstUpdated(t){this._readyForUpdates=!0}render(){const t=l`<slot>${this.inputLabel}</slot>`,r=this.inputChecked?l`<slot name="checked-icon" @slotchange="${this.handleCheckedIconSlotchange}"></slot>`:l`<slot name="unchecked-icon" @slotchange="${this.handleUncheckedIconSlotchange}"></slot>`,o={"admin-bar-checkbox":!0,"admin-bar-checkbox--disabled":this.inputDisabled,"admin-bar-checkbox--has-icon":this.inputChecked?this._hasCheckedIconSlot:this._hasUncheckedIconSlot};return l`<label class="${H(o)}"
      >${this.labelPosition==="before"?t:h}${r}<input
        id="${this.inputName}"
        name="${this.inputName}"
        ?switch="${this.inputSwitch}"
        ?checked="${this.inputChecked?"checked":h}"
        ?disabled="${this.inputDisabled?"disabled":h}"
        aria-label="${this.inputAriaLabel??h}"
        type="checkbox"
        @click="${this._toggleChecked}"
      />${this.labelPosition==="after"?t:h}</label
    >`}willUpdate(t){this._readyForUpdates&&t.has("inputChecked")&&(this.dispatchEvent(new Pe(this.inputChecked)),this.inputChecked?this.dispatchEvent(new Ue):this.dispatchEvent(new Oe))}};Q.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0},Q.styles=S`
    :host {
      display: block;
      height: var(--admin-bar-height, 43px);
    }
    .admin-bar-checkbox {
      ${Ct()}
      display: flex;
      flex-wrap: nowrap;
      gap: 5px;
      align-items: center;
      padding: var(--admin-bar-text-padding, var(--admin-bar-block-padding) var(--admin-bar-inline-padding));
      height: 100%;
      accent-color: var(--admin-bar-color-highlight);
      white-space: nowrap;

      &:has(:focus-visible) {
        ${Et()}
      }

      input {
        outline: none;
      }
      &.admin-bar-checkbox--disabled {
        cursor: not-allowed;
      }
      &.admin-bar-checkbox--has-icon input[type='checkbox'] {
        ${R()}
      }
    }
  `;let x=Q;w([c({attribute:"input-aria-label"})],x.prototype,"inputAriaLabel");w([c({attribute:"checked",reflect:!0,type:Boolean,useDefault:!0})],x.prototype,"inputChecked");w([c({attribute:"disabled",type:Boolean})],x.prototype,"inputDisabled");w([c({attribute:"label-text"})],x.prototype,"inputLabel");w([c({attribute:"input-name"})],x.prototype,"inputName");w([c({attribute:"input-switch",type:Boolean})],x.prototype,"inputSwitch");w([c({attribute:"label-position"})],x.prototype,"labelPosition");w([f()],x.prototype,"_hasCheckedIconSlot");w([f()],x.prototype,"_hasUncheckedIconSlot");w([f()],x.prototype,"_readyForUpdates");const Rt=class Dt extends Event{constructor(t){super(Dt.eventName,{bubbles:!0,composed:!0}),this.checked=!1,this.checked=t}};Rt.eventName="change";let Pe=Rt;const Mt=class Ht extends Event{constructor(){super(Ht.eventName,{bubbles:!0,composed:!0})}};Mt.eventName="checked";let Ue=Mt;const Vt=class It extends Event{constructor(){super(It.eventName,{bubbles:!0,composed:!0})}};Vt.eventName="unchecked";let Oe=Vt;var Be=Object.defineProperty,L=(e,t,r,o)=>{for(var a=void 0,s=e.length-1,i;s>=0;s--)(i=e[s])&&(a=i(t,r,a)||a);return a&&Be(t,r,a),a};const qt=class extends _{constructor(){super(...arguments),this.dlContent=[],this.badgeContent="",this.badgePosition="before",this.multiLine=!1,this.tableContent={rows:[]},this.textContent=""}render(){const t=[];this.textContent??!1?t.push(l`<span class="text">${this.textContent}</span>`):this.dlContent.length?t.push(l`<dl part="dl">
          ${this.dlContent.map(o=>l`<dt>${o[0]??""}</dt>
                <dd>${o[1]??""}</dd>`)}
        </dl>`):this.tableContent?.rows?.length&&t.push(l`<table part="table">
          ${this.tableContent?.headers?.length?l`<thead>
                <tr>
                  ${this.tableContent.headers.map(o=>l`<th>${o??""}</th>`)}
                </tr>
              </thead>`:h}
          ${l`<tbody>
            ${this.tableContent.rows.map(o=>l`<tr>
                  ${o.map(a=>l`<td>${a}</td>`)}
                </tr>`)}
          </tbody>`}
          ${this.tableContent?.footers?.length?l`<tfoot>
                <tr>
                  ${this.tableContent.footers.map(o=>l`<td>${o??""}</td>`)}
                </tr>
              </tfoot>`:h}
        </table>`);let r=l`<slot>${t}</slot>`;return(this.badgeContent??!1)&&(r=this.badgePosition==="before"?l`<span class="badge">${this.badgeContent}</span>${r}`:l`${r}<span class="badge">${this.badgeContent}</span>`),l`<span class="admin-bar-text${this.multiLine?" multi-line":""}">${r}</span>`}};qt.styles=S`
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
        background var(--admin-bar-transition-duration, 0.4s) ease-out,
        color var(--admin-bar-transition-duration, 0.4s) ease-out;

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
          background-color: var(--admin-bar-text-badge-color-bg);
          color: var(--admin-bar-text-badge-color-text);

          & th:first-child {
            border-start-start-radius: var(--table-border-radius);
          }
          & th:last-child {
            border-start-end-radius: var(--table-border-radius);
          }
        }
        & tfoot {
          background-color: color-mix(in srgb, var(--admin-bar-text-badge-color-bg), transparent 80%);

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
    .badge {
      padding: 0.4em;
      background-color: var(--admin-bar-text-badge-color-bg, rgb(255 255 255 / 0.9));
      border-radius: 4px;
      line-height: 1;
      text-box: trim-both cap alphabetic;
      font-size: 0.8em;
      color: var(--admin-bar-text-badge-color-text, black);
    }
  `;let U=qt;L([c({attribute:"dl-content",type:Array})],U.prototype,"dlContent");L([c({attribute:"badge-content"})],U.prototype,"badgeContent");L([c({attribute:"badge-position"})],U.prototype,"badgePosition");L([c({attribute:"multi-line",type:Boolean})],U.prototype,"multiLine");L([c({attribute:"table-content",type:Object})],U.prototype,"tableContent");L([c({attribute:"text-content"})],U.prototype,"textContent");function Le(e=[]){e.forEach(t=>{const r=`admin-bar-${t}`;if(!customElements.get(r))switch(t){case"button":customElements.define(r,$);break;case"checkbox":customElements.define(r,x);break;case"text":customElements.define(r,U);break}}),customElements.get("admin-bar")||customElements.define("admin-bar",b)}class Ne extends HTMLElement{static observedAttributes=["data-api-status"];#t=null;_actionUrl=void 0;_csrfToken=void 0;_requestStatus;_sessionActionUrl=void 0;attributeChangedCallback(t,r,o){t==="data-api-status"&&["errored","loading","ready","resolved"].includes(o)&&(o==="errored"&&(this._csrfToken=void 0),this._requestStatus=o)}connectedCallback(){this.#t=document.getElementById(this.dataset.adminBar??"")??null,this._actionUrl=this.dataset.actionUrl,this._sessionActionUrl=this.dataset.sessionActionUrl,this.setApiStatus("ready"),this.setUpDebugToolbarCheckbox()}async actionRequest(t,r=""){if(this._requestStatus!=="loading"){if(this._actionUrl===void 0)return{message:"action-url-invalid",status:"error"};if(this._csrfToken===void 0){const o=await this.getSessionInfo();if(o.csrfTokenValue)this._csrfToken=o.csrfTokenValue;else return{message:"csrf-token-invalid",status:"error"}}try{this.setApiStatus("loading");const o=new FormData;o.append("requestHandle",t),r&&o.append("params",r);const a=await fetch(this._actionUrl,{body:o,headers:{Accept:"application/json","X-CSRF-Token":this._csrfToken??"","X-Requested-With":"XMLHttpRequest"},method:"POST"});if(!a.ok)throw this.setApiStatus("errored"),new Error(`Response status: ${a.status}`);const s=await a.json();if(s.status!=="success")throw s.message;return this.setApiStatus("resolved"),s}catch(o){return this.setApiStatus("errored"),{message:o,status:"error"}}}}async getSessionInfo(){if(this._sessionActionUrl)return fetch(this._sessionActionUrl,{headers:{Accept:"application/json"}}).then(t=>t.json())}setApiStatus(t){if(this.#t)switch(t){case"errored":this.#t.setAttribute("progress","-1");break;case"loading":this.#t.setAttribute("progress","50");break;case"resolved":this.#t.setAttribute("progress","100");break}this.dataset.apiStatus=t}setUpDebugToolbarCheckbox(){const t=this.#t?.querySelector("#admin-bar-checkbox-debug-toolbar");t&&t.addEventListener("change",async r=>{t.setAttribute("disabled",!0),await window.adminBarPostRequest(document.getElementById(this.dataset.adminBar??""),"admin-bar-debug-toolbar-toggle",JSON.stringify({query:r.checked})),t.removeAttribute("disabled")})}}customElements.define("craft-admin-bar",Ne);class Re extends HTMLElement{_searchForm=null;_resultsElement=null;_onSearchFormSubmit=async t=>{t.preventDefault();const r=this.shadowRoot?.querySelector('input[type="search"]')??null;if(r){const o=await window.adminBarPostRequest(this.closest("admin-bar"),"craft-search-search",JSON.stringify({query:r.value}));if(this._resultsElement){let a,s;if(o.searchResultsStatus==="OK"){a=document.getElementById("admin-bar-search-results-template"),s=a.content;const i=document.createElement("ul");o.searchResults.forEach(d=>{const u=s.cloneNode(!0).querySelector("li"),m=u.querySelector("admin-bar-button.edit");d.cpEditUrl?(m.setAttribute("button-href",d.cpEditUrl),m.setAttribute("label-text",d.title)):u.removeChild(m);const p=u.querySelector("admin-bar-button.view"),v=p.querySelector("admin-bar-text"),y=u.querySelector("admin-bar-text.view");d.url??!1?(p.setAttribute("button-href",d.url),v.setAttribute("badge-content",d.status),v.setAttribute("text-content",d.title),y.remove()):(y.setAttribute("text-content",d.title),p.remove()),i.append(u)}),this._resultsElement.replaceChildren(i)}else a=document.getElementById("admin-bar-search-no-results-template"),s=a.content,this._resultsElement.replaceChildren(s.cloneNode(!0))}}};constructor(){super();const r=document.getElementById("admin-bar-search-template").content;this.attachShadow({mode:"open"}).appendChild(r.cloneNode(!0)),this._searchForm=this.shadowRoot?.querySelector("form")??null,this._resultsElement=this.shadowRoot?.querySelector("form + div")??null}connectedCallback(){this._searchForm?.addEventListener("submit",this._onSearchFormSubmit)}disconnectedCallback(){this._searchForm?.removeEventListener("submit",this._onSearchFormSubmit)}}customElements.define("craft-admin-bar-search",Re);Le(["button","checkbox","text"]);window.adminBarPostRequest=async(e,t,r="")=>{try{const o=document.querySelector(`[data-admin-bar="${e?.id}"]`),a=await o?.actionRequest(t,r);if(a?.status==="success"){if(a.refreshPage)location.reload();else if(setTimeout(()=>{o&&(o.dataset.apiStatus="ready")},3e3),a.data)return a.data}else throw a?.message}catch(o){console.error(`Admin Bar: ${o}`)}};
