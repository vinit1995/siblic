import{a as rt}from"./chunk-TV2QDRMW.js";import{e as at,f as lt,g as ct,h as st,i as pt,j as mt,k as dt,m as ut,n as _t,o as U,p as gt}from"./chunk-GPD6LUVK.js";import{A as Ue,B as Ze,E as Je,F as Ge,I as Xe,J as Ye,K as $e,N as et,O as tt,R as it,S as nt,U as ot,V as K,w as qe,x as He,y as ze,z as Ke}from"./chunk-YEP54JEY.js";import{Ca as Ve,Ga as je,Ia as Be,Ja as Oe,La as Le,Ma as Re,Na as We,Pa as Fe,V as ke,eb as z,fb as Ae,ka as ie,kb as Ne,la as P,lb as Qe,ma as V,qa as q,ta as De,ua as Pe,va as H,wa as ne,x as O}from"./chunk-JLMXQQJQ.js";import{$ as ce,$a as de,Db as r,Eb as a,Fb as f,Ib as W,Jb as b,Lb as x,Mb as c,Nb as fe,Oa as me,Ob as Ce,Oc as we,Pa as X,Qc as A,Rb as w,Sb as he,Tb as T,Ua as s,Ub as S,Uc as Ee,V as ae,Va as I,W as le,Wc as Me,Xb as ye,Yb as u,Yc as N,Zb as B,a as re,ac as C,bc as h,cc as y,dc as F,ec as D,ed as Ie,fb as k,fc as be,fd as Y,gb as ue,ha as _,hc as xe,hd as Q,ia as g,jb as _e,jd as $,kd as ee,la as se,lb as ge,mb as d,md as te,oc as Te,qa as L,qc as Se,ra as pe,sc as v,ub as p,xb as j,xc as E,yb as R,yc as ve,zb as M}from"./chunk-UPRAEGDK.js";var Tt=({dt:t})=>`
.p-confirmdialog .p-dialog-content {
    display: flex;
    align-items: center;
    gap:  ${t("confirmdialog.content.gap")};
}

.p-confirmdialog .p-confirmdialog-icon {
    color: ${t("confirmdialog.icon.color")};
    font-size: ${t("confirmdialog.icon.size")};
    width: ${t("confirmdialog.icon.size")};
    height: ${t("confirmdialog.icon.size")};
}
`,St={root:"p-confirmdialog",icon:"p-confirmdialog-icon",message:"p-confirmdialog-message",pcRejectButton:"p-confirmdialog-reject-button",pcAcceptButton:"p-confirmdialog-accept-button"},ft=(()=>{class t extends Ve{name="confirmdialog";theme=Tt;classes=St;static \u0275fac=(()=>{let e;return function(i){return(e||(e=se(t)))(i||t)}})();static \u0275prov=ae({token:t,factory:t.\u0275fac})}return t})();var vt=["header"],wt=["footer"],Et=["rejecticon"],Mt=["accepticon"],It=["message"],kt=["icon"],Dt=["headless"],Pt=[[["p-footer"]]],Vt=["p-footer"],jt=(t,n,e)=>({$implicit:t,onAccept:n,onReject:e}),Bt=t=>({$implicit:t});function Ot(t,n){t&1&&W(0)}function Lt(t,n){if(t&1&&d(0,Ot,1,0,"ng-container",5),t&2){let e=c(2);p("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)("ngTemplateOutletContext",xe(2,jt,e.confirmation,e.onAccept.bind(e),e.onReject.bind(e)))}}function Rt(t,n){t&1&&d(0,Lt,1,6,"ng-template",null,2,v)}function Wt(t,n){t&1&&W(0)}function Ft(t,n){if(t&1&&(r(0,"div",6),d(1,Wt,1,0,"ng-container",7),a()),t&2){let e=c(2);p("ngClass",e.cx("header")),s(),p("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function At(t,n){}function Nt(t,n){t&1&&d(0,At,0,0,"ng-template")}function Qt(t,n){if(t&1&&d(0,Nt,1,0,null,7),t&2){let e=c(3);p("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}function qt(t,n){if(t&1&&f(0,"i",6),t&2){let e=c(4);R(e.option("icon")),p("ngClass",e.cx("icon"))}}function Ht(t,n){if(t&1&&d(0,qt,1,3,"i",10),t&2){let e=c(3);p("ngIf",e.option("icon"))}}function zt(t,n){}function Kt(t,n){t&1&&d(0,zt,0,0,"ng-template")}function Ut(t,n){if(t&1&&d(0,Kt,1,0,null,5),t&2){let e=c(3);p("ngTemplateOutlet",e.messageTemplate||e._messageTemplate)("ngTemplateOutletContext",be(2,Bt,e.confirmation))}}function Zt(t,n){if(t&1&&f(0,"span",9),t&2){let e=c(3);p("ngClass",e.cx("message"))("innerHTML",e.option("message"),me)}}function Jt(t,n){if(t&1&&d(0,Qt,1,1)(1,Ht,1,1,"i",8)(2,Ut,1,4)(3,Zt,1,2,"span",9),t&2){let e=c(2);M(e.iconTemplate||e._iconTemplate?0:!e.iconTemplate&&!e._iconTemplate&&!e._messageTemplate&&!e.messageTemplate?1:-1),s(2),M(e.messageTemplate||e._messageTemplate?2:3)}}function Gt(t,n){if(t&1&&d(0,Ft,2,2,"div",6)(1,Jt,4,2,"ng-template",null,3,v),t&2){let e=c();M(e.headerTemplate||e._headerTemplate?0:-1)}}function Xt(t,n){t&1&&W(0)}function Yt(t,n){if(t&1&&(Ce(0),d(1,Xt,1,0,"ng-container",7)),t&2){let e=c(2);s(),p("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function $t(t,n){if(t&1&&f(0,"i"),t&2){let e=c(5);R(e.option("rejectIcon"))}}function ei(t,n){if(t&1&&d(0,$t,1,2,"i",14),t&2){let e=c(4);p("ngIf",e.option("rejectIcon"))}}function ti(t,n){}function ii(t,n){t&1&&d(0,ti,0,0,"ng-template")}function ni(t,n){if(t&1){let e=b();r(0,"p-button",12),x("onClick",function(){_(e);let i=c(3);return g(i.onReject())}),d(1,ei,1,1,"i",13)(2,ii,1,0,null,7),a()}if(t&2){let e=c(3);p("label",e.rejectButtonLabel)("styleClass",e.getButtonStyleClass("pcRejectButton","rejectButtonStyleClass"))("ariaLabel",e.option("rejectButtonProps","ariaLabel"))("buttonProps",e.getRejectButtonProps()),s(),M(e.rejectIcon&&!e.rejectIconTemplate&&!e._rejectIconTemplate?1:-1),s(),p("ngTemplateOutlet",e.rejectIconTemplate||e._rejectIconTemplate)}}function oi(t,n){if(t&1&&f(0,"i"),t&2){let e=c(5);R(e.option("acceptIcon"))}}function ri(t,n){if(t&1&&d(0,oi,1,2,"i",14),t&2){let e=c(4);p("ngIf",e.option("acceptIcon"))}}function ai(t,n){}function li(t,n){t&1&&d(0,ai,0,0,"ng-template")}function ci(t,n){if(t&1){let e=b();r(0,"p-button",12),x("onClick",function(){_(e);let i=c(3);return g(i.onAccept())}),d(1,ri,1,1,"i",13)(2,li,1,0,null,7),a()}if(t&2){let e=c(3);p("label",e.acceptButtonLabel)("styleClass",e.getButtonStyleClass("pcAcceptButton","acceptButtonStyleClass"))("ariaLabel",e.option("acceptButtonProps","ariaLabel"))("buttonProps",e.getAcceptButtonProps()),s(),M(e.acceptIcon&&!e._acceptIconTemplate&&!e.acceptIconTemplate?1:-1),s(),p("ngTemplateOutlet",e.acceptIconTemplate||e._acceptIconTemplate)}}function si(t,n){if(t&1&&d(0,ni,3,6,"p-button",11)(1,ci,3,6,"p-button",11),t&2){let e=c(2);p("ngIf",e.option("rejectVisible")),s(),p("ngIf",e.option("acceptVisible"))}}function pi(t,n){if(t&1&&d(0,Yt,2,1)(1,si,2,2),t&2){let e=c();M(e.footerTemplate||e._footerTemplate?0:-1),s(),M(!e.footerTemplate&&!e._footerTemplate?1:-1)}}var mi=ee([Q({transform:"{{transform}}",opacity:0}),Y("{{transition}}",Q({transform:"none",opacity:1}))]),di=ee([Y("{{transition}}",Q({transform:"{{transform}}",opacity:0}))]),oe=(()=>{class t extends We{confirmationService;zone;header;icon;message;get style(){return this._style}set style(e){this._style=e,this.cd.markForCheck()}styleClass;maskStyleClass;acceptIcon;acceptLabel;closeAriaLabel;acceptAriaLabel;acceptVisible=!0;rejectIcon;rejectLabel;rejectAriaLabel;rejectVisible=!0;acceptButtonStyleClass;rejectButtonStyleClass;closeOnEscape=!0;dismissableMask;blockScroll=!0;rtl=!1;closable=!0;appendTo="body";key;autoZIndex=!0;baseZIndex=0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";focusTrap=!0;defaultFocus="accept";breakpoints;get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.maskVisible&&(this.maskVisible=!0),this.cd.markForCheck()}get position(){return this._position}set position(e){switch(this._position=e,e){case"topleft":case"bottomleft":case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"topright":case"bottomright":case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break;default:this.transformOptions="scale(0.7)";break}}onHide=new L;footer;_componentStyle=ce(ft);headerTemplate;footerTemplate;rejectIconTemplate;acceptIconTemplate;messageTemplate;iconTemplate;headlessTemplate;templates;_headerTemplate;_footerTemplate;_rejectIconTemplate;_acceptIconTemplate;_messageTemplate;_iconTemplate;_headlessTemplate;confirmation;_visible;_style;maskVisible;dialog;wrapper;contentContainer;subscription;preWidth;_position="center";transformOptions="scale(0.7)";styleElement;id=ie("pn_id_");ariaLabelledBy=this.getAriaLabelledBy();translationSubscription;get containerClass(){return this.cx("root")+" "+this.styleClass||" "}constructor(e,o){super(),this.confirmationService=e,this.zone=o,this.subscription=this.confirmationService.requireConfirmation$.subscribe(i=>{if(!i){this.hide();return}i.key===this.key&&(this.confirmation=i,Object.keys(i).forEach(m=>{this[m]=i[m]}),this.confirmation.accept&&(this.confirmation.acceptEvent=new L,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new L,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0)})}ngOnInit(){super.ngOnInit(),this.breakpoints&&this.createStyle(),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.visible&&this.cd.markForCheck()})}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"message":this._messageTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"rejecticon":this._rejectIconTemplate=e.template;break;case"accepticon":this._acceptIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break}})}getAriaLabelledBy(){return this.header!==null?ie("pn_id_")+"_header":null}option(e,o){let i=this||this;if(i.hasOwnProperty(e))return o?i[o]:i[e]}getButtonStyleClass(e,o){let i=this.cx(e),l=this.option(o);return[i,l].filter(Boolean).join(" ")}getElementToFocus(){switch(this.option("defaultFocus")){case"accept":return O(this.dialog.el.nativeElement,".p-confirm-dialog-accept");case"reject":return O(this.dialog.el.nativeElement,".p-confirm-dialog-reject");case"close":return O(this.dialog.el.nativeElement,".p-dialog-header-close");case"none":return null;default:return O(this.dialog.el.nativeElement,".p-confirm-dialog-accept")}}createStyle(){if(!this.styleElement){this.styleElement=this.document.createElement("style"),this.styleElement.type="text/css",this.document.head.appendChild(this.styleElement);let e="";for(let o in this.breakpoints)e+=`
                    @media screen and (max-width: ${o}) {
                        .p-dialog[${this.id}] {
                            width: ${this.breakpoints[o]} !important;
                        }
                    }
                `;this.styleElement.innerHTML=e,ke(this.styleElement,"nonce",this.config?.csp()?.nonce)}}close(e){this.confirmation?.rejectEvent&&this.confirmation.rejectEvent.emit(P.CANCEL),this.hide(P.CANCEL),e.preventDefault()}hide(e){this.onHide.emit(e),this.visible=!1,this.confirmation=null}destroyStyle(){this.styleElement&&(this.document.head.removeChild(this.styleElement),this.styleElement=null)}ngOnDestroy(){this.subscription.unsubscribe(),this.translationSubscription&&this.translationSubscription.unsubscribe(),this.destroyStyle(),super.ngOnDestroy()}onAccept(){this.confirmation&&this.confirmation.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide(P.ACCEPT)}onReject(){this.confirmation&&this.confirmation.rejectEvent&&this.confirmation.rejectEvent.emit(P.REJECT),this.hide(P.REJECT)}get acceptButtonLabel(){return this.option("acceptLabel")||this.config.getTranslation(ne.ACCEPT)}get rejectButtonLabel(){return this.option("rejectLabel")||this.config.getTranslation(ne.REJECT)}getAcceptButtonProps(){return this.option("acceptButtonProps")}getRejectButtonProps(){return this.option("rejectButtonProps")}static \u0275fac=function(o){return new(o||t)(I(V),I(pe))};static \u0275cmp=k({type:t,selectors:[["p-confirmDialog"],["p-confirmdialog"],["p-confirm-dialog"]],contentQueries:function(o,i,l){if(o&1&&(w(l,De,5),w(l,vt,4),w(l,wt,4),w(l,Et,4),w(l,Mt,4),w(l,It,4),w(l,kt,4),w(l,Dt,4),w(l,Pe,4)),o&2){let m;T(m=S())&&(i.footer=m.first),T(m=S())&&(i.headerTemplate=m.first),T(m=S())&&(i.footerTemplate=m.first),T(m=S())&&(i.rejectIconTemplate=m.first),T(m=S())&&(i.acceptIconTemplate=m.first),T(m=S())&&(i.messageTemplate=m.first),T(m=S())&&(i.iconTemplate=m.first),T(m=S())&&(i.headlessTemplate=m.first),T(m=S())&&(i.templates=m)}},inputs:{header:"header",icon:"icon",message:"message",style:"style",styleClass:"styleClass",maskStyleClass:"maskStyleClass",acceptIcon:"acceptIcon",acceptLabel:"acceptLabel",closeAriaLabel:"closeAriaLabel",acceptAriaLabel:"acceptAriaLabel",acceptVisible:[2,"acceptVisible","acceptVisible",E],rejectIcon:"rejectIcon",rejectLabel:"rejectLabel",rejectAriaLabel:"rejectAriaLabel",rejectVisible:[2,"rejectVisible","rejectVisible",E],acceptButtonStyleClass:"acceptButtonStyleClass",rejectButtonStyleClass:"rejectButtonStyleClass",closeOnEscape:[2,"closeOnEscape","closeOnEscape",E],dismissableMask:[2,"dismissableMask","dismissableMask",E],blockScroll:[2,"blockScroll","blockScroll",E],rtl:[2,"rtl","rtl",E],closable:[2,"closable","closable",E],appendTo:"appendTo",key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",E],baseZIndex:[2,"baseZIndex","baseZIndex",ve],transitionOptions:"transitionOptions",focusTrap:[2,"focusTrap","focusTrap",E],defaultFocus:"defaultFocus",breakpoints:"breakpoints",visible:"visible",position:"position"},outputs:{onHide:"onHide"},features:[F([ft]),ge,_e],ngContentSelectors:Vt,decls:6,vars:12,consts:[["dialog",""],["footer",""],["headless",""],["content",""],["role","alertdialog",3,"visibleChange","visible","closable","styleClass","modal","header","closeOnEscape","blockScroll","appendTo","position"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[4,"ngTemplateOutlet"],[3,"ngClass","class"],[3,"ngClass","innerHTML"],[3,"ngClass","class",4,"ngIf"],[3,"label","styleClass","ariaLabel","buttonProps","onClick",4,"ngIf"],[3,"onClick","label","styleClass","ariaLabel","buttonProps"],[3,"class"],[3,"class",4,"ngIf"]],template:function(o,i){if(o&1){let l=b();fe(Pt),r(0,"p-dialog",4,0),y("visibleChange",function(G){return _(l),h(i.visible,G)||(i.visible=G),g(G)}),d(2,Rt,2,0)(3,Gt,3,1)(4,pi,2,2,"ng-template",null,1,v),a()}o&2&&(j(i.style),C("visible",i.visible),p("closable",i.option("closable"))("styleClass",i.containerClass)("modal",!0)("header",i.option("header"))("closeOnEscape",i.option("closeOnEscape"))("blockScroll",i.option("blockScroll"))("appendTo",i.option("appendTo"))("position",i.position),s(2),M(i.headlessTemplate||i._headlessTemplate?2:3))},dependencies:[N,we,A,Ee,z,U,H],encapsulation:2,data:{animation:[Ie("animation",[$("void => visible",[te(mi)]),$("visible => void",[te(di)])])]},changeDetection:0})}return t})(),ht=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=ue({type:t});static \u0275inj=le({imports:[oe,H,H]})}return t})();var gi=["dt"],fi=()=>["name","country.name","representative.name","status"],Ci=()=>({"min-width":"75rem"}),hi=()=>[10,20,30],yt=()=>({width:"450px"});function yi(t,n){if(t&1){let e=b();r(0,"p-button",11),x("onClick",function(){_(e);let i=c();return g(i.openNew())}),a(),r(1,"p-button",12),x("onClick",function(){_(e);let i=c();return g(i.deleteSelectedProducts())}),a()}if(t&2){let e=c();s(),p("disabled",!e.selectedProducts||!e.selectedProducts.length)}}function bi(t,n){if(t&1){let e=b();r(0,"p-button",13),x("onClick",function(){_(e);let i=c();return g(i.exportCSV())}),a()}}function xi(t,n){if(t&1){let e=b();r(0,"div",14)(1,"h5",15),u(2,"Manage Products"),a(),r(3,"p-iconfield"),f(4,"p-inputicon",16),r(5,"input",17),x("input",function(i){_(e);let l=c(),m=ye(6);return g(l.onGlobalFilter(m,i))}),a()()()}}function Ti(t,n){t&1&&(r(0,"tr")(1,"th",18),f(2,"p-tableHeaderCheckbox"),a(),r(3,"th",19),u(4,"Code"),a(),r(5,"th",20),u(6," Name "),f(7,"p-sortIcon",21),a(),r(8,"th"),u(9,"Image"),a(),r(10,"th",22),u(11," Price "),f(12,"p-sortIcon",23),a(),r(13,"th",24),u(14," Category "),f(15,"p-sortIcon",25),a(),r(16,"th",26),u(17," Reviews "),f(18,"p-sortIcon",27),a(),r(19,"th",28),u(20," Status "),f(21,"p-sortIcon",29),a(),f(22,"th",30),a())}function Si(t,n){if(t&1){let e=b();r(0,"tr")(1,"td",18),f(2,"p-tableCheckbox",31),a(),r(3,"td",30),u(4),a(),r(5,"td",19),u(6),a(),r(7,"td"),f(8,"img",32),a(),r(9,"td"),u(10),Te(11,"currency"),a(),r(12,"td"),u(13),a(),r(14,"td")(15,"p-rating",33),y("ngModelChange",function(i){let l=_(e).$implicit;return h(l.rating,i)||(l.rating=i),g(i)}),a()(),r(16,"td"),f(17,"p-tag",34),a(),r(18,"td")(19,"p-button",35),x("click",function(){let i=_(e).$implicit,l=c();return g(l.editProduct(i))}),a(),r(20,"p-button",36),x("click",function(){let i=_(e).$implicit,l=c();return g(l.deleteProduct(i))}),a()()()}if(t&2){let e=n.$implicit,o=c();s(2),p("value",e),s(2),B(e.code),s(2),B(e.name),s(2),p("src","https://primefaces.org/cdn/primeng/images/demo/product/"+e.image,X)("alt",e.name),s(2),B(Se(11,15,e.price,"USD")),s(3),B(e.category),s(2),C("ngModel",e.rating),p("readonly",!0),s(2),p("value",e.inventoryStatus)("severity",o.getSeverity(e.inventoryStatus)),s(2),p("rounded",!0)("outlined",!0),s(),p("rounded",!0)("outlined",!0)}}function vi(t,n){if(t&1&&f(0,"img",62),t&2){let e=c(2);p("src","https://primefaces.org/cdn/primeng/images/demo/product/"+e.product.image,X)("alt",e.product.image)}}function wi(t,n){t&1&&(r(0,"small",63),u(1,"Name is required."),a())}function Ei(t,n){if(t&1){let e=b();r(0,"div",37),d(1,vi,1,2,"img",38),r(2,"div")(3,"label",39),u(4,"Name"),a(),r(5,"input",40),y("ngModelChange",function(i){_(e);let l=c();return h(l.product.name,i)||(l.product.name=i),g(i)}),a(),d(6,wi,2,0,"small",41),a(),r(7,"div")(8,"label",42),u(9,"Description"),a(),r(10,"textarea",43),y("ngModelChange",function(i){_(e);let l=c();return h(l.product.description,i)||(l.product.description=i),g(i)}),a()(),r(11,"div")(12,"label",44),u(13,"Inventory Status"),a(),r(14,"p-select",45),y("ngModelChange",function(i){_(e);let l=c();return h(l.product.inventoryStatus,i)||(l.product.inventoryStatus=i),g(i)}),a()(),r(15,"div")(16,"span",46),u(17,"Category"),a(),r(18,"div",47)(19,"div",48)(20,"p-radiobutton",49),y("ngModelChange",function(i){_(e);let l=c();return h(l.product.category,i)||(l.product.category=i),g(i)}),a(),r(21,"label",50),u(22,"Accessories"),a()(),r(23,"div",48)(24,"p-radiobutton",51),y("ngModelChange",function(i){_(e);let l=c();return h(l.product.category,i)||(l.product.category=i),g(i)}),a(),r(25,"label",52),u(26,"Clothing"),a()(),r(27,"div",48)(28,"p-radiobutton",53),y("ngModelChange",function(i){_(e);let l=c();return h(l.product.category,i)||(l.product.category=i),g(i)}),a(),r(29,"label",54),u(30,"Electronics"),a()(),r(31,"div",48)(32,"p-radiobutton",55),y("ngModelChange",function(i){_(e);let l=c();return h(l.product.category,i)||(l.product.category=i),g(i)}),a(),r(33,"label",56),u(34,"Fitness"),a()()()(),r(35,"div",47)(36,"div",57)(37,"label",58),u(38,"Price"),a(),r(39,"p-inputnumber",59),y("ngModelChange",function(i){_(e);let l=c();return h(l.product.price,i)||(l.product.price=i),g(i)}),a()(),r(40,"div",57)(41,"label",60),u(42,"Quantity"),a(),r(43,"p-inputnumber",61),y("ngModelChange",function(i){_(e);let l=c();return h(l.product.quantity,i)||(l.product.quantity=i),g(i)}),a()()()()}if(t&2){let e=c();s(),p("ngIf",e.product.image),s(4),C("ngModel",e.product.name),s(),p("ngIf",e.submitted&&!e.product.name),s(4),C("ngModel",e.product.description),s(4),C("ngModel",e.product.inventoryStatus),p("options",e.statuses),s(6),C("ngModel",e.product.category),s(4),C("ngModel",e.product.category),s(4),C("ngModel",e.product.category),s(4),C("ngModel",e.product.category),s(7),C("ngModel",e.product.price),s(4),C("ngModel",e.product.quantity)}}function Mi(t,n){if(t&1){let e=b();r(0,"p-button",64),x("click",function(){_(e);let i=c();return g(i.hideDialog())}),a(),r(1,"p-button",65),x("click",function(){_(e);let i=c();return g(i.saveProduct())}),a()}}var Z=class t{constructor(n,e,o){this.productService=n;this.messageService=e;this.confirmationService=o}productDialog=!1;products=de([]);product;selectedProducts;submitted=!1;statuses;dt;exportColumns;cols;exportCSV(){this.dt.exportCSV()}ngOnInit(){this.loadDemoData()}loadDemoData(){this.productService.getProducts().then(n=>{this.products.set(n)}),this.statuses=[{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}],this.cols=[{field:"code",header:"Code",customExportHeader:"Product Code"},{field:"name",header:"Name"},{field:"image",header:"Image"},{field:"price",header:"Price"},{field:"category",header:"Category"}],this.exportColumns=this.cols.map(n=>({title:n.header,dataKey:n.field}))}onGlobalFilter(n,e){n.filterGlobal(e.target.value,"contains")}openNew(){this.product={},this.submitted=!1,this.productDialog=!0}editProduct(n){this.product=re({},n),this.productDialog=!0}deleteSelectedProducts(){this.confirmationService.confirm({message:"Are you sure you want to delete the selected products?",header:"Confirm",icon:"pi pi-exclamation-triangle",accept:()=>{this.products.set(this.products().filter(n=>!this.selectedProducts?.includes(n))),this.selectedProducts=null,this.messageService.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})}})}hideDialog(){this.productDialog=!1,this.submitted=!1}deleteProduct(n){this.confirmationService.confirm({message:"Are you sure you want to delete "+n.name+"?",header:"Confirm",icon:"pi pi-exclamation-triangle",accept:()=>{this.products.set(this.products().filter(e=>e.id!==n.id)),this.product={},this.messageService.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})}})}findIndexById(n){let e=-1;for(let o=0;o<this.products().length;o++)if(this.products()[o].id===n){e=o;break}return e}createId(){let n="";for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<5;o++)n+=e.charAt(Math.floor(Math.random()*e.length));return n}getSeverity(n){switch(n){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger";default:return"info"}}saveProduct(){this.submitted=!0;let n=this.products();this.product.name?.trim()&&(this.product.id?(n[this.findIndexById(this.product.id)]=this.product,this.products.set([...n]),this.messageService.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(this.product.id=this.createId(),this.product.image="product-placeholder.svg",this.messageService.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3}),this.products.set([...n,this.product])),this.productDialog=!1,this.product={})}static \u0275fac=function(e){return new(e||t)(I(K),I(q),I(V))};static \u0275cmp=k({type:t,selectors:[["app-crud"]],viewQuery:function(e,o){if(e&1&&he(gi,5),e&2){let i;T(i=S())&&(o.dt=i.first)}},features:[F([q,K,V])],decls:19,vars:21,consts:[["start",""],["end",""],["dt",""],["caption",""],["header",""],["body",""],["content",""],["footer",""],["styleClass","mb-6"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} products",3,"selectionChange","value","rows","columns","paginator","globalFilterFields","tableStyle","selection","rowHover","showCurrentPageReport","rowsPerPageOptions"],["header","Product Details",3,"visibleChange","visible","modal"],["label","New","icon","pi pi-plus","severity","secondary",1,"mr-2",3,"onClick"],["severity","secondary","label","Delete","icon","pi pi-trash","outlined","",3,"onClick","disabled"],["label","Export","icon","pi pi-upload","severity","secondary",3,"onClick"],[1,"flex","items-center","justify-between"],[1,"m-0"],["styleClass","pi pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],[2,"width","3rem"],[2,"min-width","16rem"],["pSortableColumn","name",2,"min-width","16rem"],["field","name"],["pSortableColumn","price",2,"min-width","8rem"],["field","price"],["pSortableColumn","category",2,"min-width","10rem"],["field","category"],["pSortableColumn","rating",2,"min-width","12rem"],["field","rating"],["pSortableColumn","inventoryStatus",2,"min-width","12rem"],["field","inventoryStatus"],[2,"min-width","12rem"],[3,"value"],[1,"rounded",2,"width","64px",3,"src","alt"],[3,"ngModelChange","ngModel","readonly"],[3,"value","severity"],["icon","pi pi-pencil",1,"mr-2",3,"click","rounded","outlined"],["icon","pi pi-trash","severity","danger",3,"click","rounded","outlined"],[1,"flex","flex-col","gap-6"],["class","block m-auto pb-4",3,"src","alt",4,"ngIf"],["for","name",1,"block","font-bold","mb-3"],["type","text","pInputText","","id","name","required","","autofocus","","fluid","",3,"ngModelChange","ngModel"],["class","text-red-500",4,"ngIf"],["for","description",1,"block","font-bold","mb-3"],["id","description","pTextarea","","required","","rows","3","cols","20","fluid","",3,"ngModelChange","ngModel"],["for","inventoryStatus",1,"block","font-bold","mb-3"],["inputId","inventoryStatus","optionLabel","label","optionValue","label","placeholder","Select a Status","fluid","",3,"ngModelChange","ngModel","options"],[1,"block","font-bold","mb-4"],[1,"grid","grid-cols-12","gap-4"],[1,"flex","items-center","gap-2","col-span-6"],["id","category1","name","category","value","Accessories",3,"ngModelChange","ngModel"],["for","category1"],["id","category2","name","category","value","Clothing",3,"ngModelChange","ngModel"],["for","category2"],["id","category3","name","category","value","Electronics",3,"ngModelChange","ngModel"],["for","category3"],["id","category4","name","category","value","Fitness",3,"ngModelChange","ngModel"],["for","category4"],[1,"col-span-6"],["for","price",1,"block","font-bold","mb-3"],["id","price","mode","currency","currency","USD","locale","en-US","fluid","",3,"ngModelChange","ngModel"],["for","quantity",1,"block","font-bold","mb-3"],["id","quantity","fluid","",3,"ngModelChange","ngModel"],[1,"block","m-auto","pb-4",3,"src","alt"],[1,"text-red-500"],["label","Cancel","icon","pi pi-times","text","",3,"click"],["label","Save","icon","pi pi-check",3,"click"]],template:function(e,o){if(e&1){let i=b();r(0,"p-toolbar",8),d(1,yi,2,1,"ng-template",null,0,v)(3,bi,1,0,"ng-template",null,1,v),a(),r(5,"p-table",9,2),y("selectionChange",function(m){return _(i),h(o.selectedProducts,m)||(o.selectedProducts=m),g(m)}),d(7,xi,6,0,"ng-template",null,3,v)(9,Ti,23,0,"ng-template",null,4,v)(11,Si,21,18,"ng-template",null,5,v),a(),r(13,"p-dialog",10),y("visibleChange",function(m){return _(i),h(o.productDialog,m)||(o.productDialog=m),g(m)}),d(14,Ei,44,12,"ng-template",null,6,v)(16,Mi,2,0,"ng-template",null,7,v),a(),f(18,"p-confirmdialog")}e&2&&(s(5),p("value",o.products())("rows",10)("columns",o.cols)("paginator",!0)("globalFilterFields",D(16,fi))("tableStyle",D(17,Ci)),C("selection",o.selectedProducts),p("rowHover",!0)("showCurrentPageReport",!0)("rowsPerPageOptions",D(18,hi)),s(8),j(D(19,yt)),C("visible",o.productDialog),p("modal",!0),s(5),j(D(20,yt)))},dependencies:[N,A,Me,ot,$e,et,tt,it,nt,Re,je,Be,Le,Oe,Ae,z,Fe,at,_t,ut,pt,st,Qe,Ne,ct,lt,Ge,Je,Ye,Xe,He,qe,gt,U,dt,mt,Ze,Ue,Ke,ze,ht,oe],encapsulation:2})};var J=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-empty"]],decls:5,vars:0,consts:[[1,"card"],[1,"font-semibold","text-xl","mb-4"]],template:function(e,o){e&1&&(r(0,"div",0)(1,"div",1),u(2,"Empty Page"),a(),r(3,"p"),u(4,"Use this page to start from scratch and place your custom content."),a()())},encapsulation:2})};var Nn=[{path:"documentation",component:rt},{path:"crud",component:Z},{path:"empty",component:J},{path:"**",redirectTo:"/notfound"}];export{Nn as default};
