(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./imageGallery/component.js":function(e,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=m(i("./node_modules/babel-runtime/helpers/extends.js")),n=m(i("./node_modules/babel-runtime/helpers/typeof.js")),l=m(i("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),o=m(i("./node_modules/babel-runtime/helpers/classCallCheck.js")),r=m(i("./node_modules/babel-runtime/helpers/createClass.js")),s=m(i("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),c=m(i("./node_modules/babel-runtime/helpers/inherits.js")),g=m(i("./node_modules/react/index.js"));function m(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function a(e){(0,o.default)(this,a);var i=(0,s.default)(this,(a.__proto__||(0,l.default)(a)).call(this,e));return i.imageSources=[],i.imageOrder={},i.createCustomSizeImage=i.createCustomSizeImage.bind(i),i}return(0,c.default)(a,e),(0,r.default)(a,[{key:"componentDidMount",value:function(){this.prepareImage(this.props.atts.image)}},{key:"componentWillReceiveProps",value:function(e){this.imageSources=[],this.imageOrder={},this.prepareImage(e.atts.image)}},{key:"prepareImage",value:function(e){var a=this;if(e.length&&"object"===(0,n.default)(e[0])){var i=[];e.forEach(function(e,t){var n=e;n.full=n.id?n.full:a.getImageUrl(n.full),n.id=n.id?n.id:Math.random(),i.push(e)}),e=i,this.setImageOrder(e),this.resizeImage(e)}var t=[];e.forEach(function(i){e&&e.id,t.push({imgSrc:a.getImageUrl(i)})}),this.setImgSrcState(t)}},{key:"setImageOrder",value:function(e){var a=this;e.forEach(function(e,i){a.imageOrder[i]=e.id})}},{key:"checkImageSize",value:function(e,a,i){var t=new window.Image;t.onload=function(){var n={width:t.width,height:t.height};a(e,n,i)},t.src=e.full}},{key:"resizeImage",value:function(e){var a=this;e.forEach(function(i){a.checkImageSize(i,a.createCustomSizeImage,e.length)})}},{key:"createCustomSizeImage",value:function(e,a,i){e.orientation=this.checkOrientation(a),this.imageSources.filter(function(a){return a.id===e.id}).length||this.imageSources.push(e),this.imageSources.length===i&&this.orderImages()}},{key:"orderImages",value:function(){var e=this,a=[];this.imageSources.forEach(function(i,t){var n=e.imageSources.filter(function(a){return a.id===e.imageOrder[t]});n[0]&&a.push({imgSrc:e.getImageUrl(n[0],"large"),orientation:n[0].orientation,originalSrc:e.getImageUrl(n[0]),alt:n[0].alt,title:n[0].title})}),this.setImgSrcState(a)}},{key:"checkOrientation",value:function(e){return e.width>=e.height?"landscape":"portrait"}},{key:"setImgSrcState",value:function(e){this.setState({imgSrc:e})}},{key:"getPublicImage",value:function(e){var a=this.props.atts.metaAssetsPath;return e?e.match("^(https?:)?\\/\\/?")?e:a+e:""}},{key:"render",value:function(){var e=this.props,a=e.id,i=e.atts,n=e.editor,l=i.image,o=i.shape,r=i.clickableOptions,s=i.showCaption,c=i.customClass,m=i.metaCustomId,u=i.showCaptionGeneral,p=i.captionAlignment,d="vce-image-gallery",v={},h="div",f=this.state&&this.state.imgSrc;"string"==typeof c&&c&&(d+=" "+c);var y=this.getMixinData("imageGalleryGap");y&&(d+=" vce-image-gallery--gap-"+y.selector),(y=this.getMixinData("imageGalleryColumns"))&&(d+=" vce-image-gallery--columns-"+y.selector),"rounded"===o&&(d+=" vce-image-gallery--border-rounded"),"round"===o&&(d+=" vce-image-gallery--border-round"),m&&(v.id=m),u&&p&&(d+=" vce-image-gallery-caption--align-"+p);var b=[];f&&f.forEach(function(e,i){var n={},o="vce-image-gallery-item-inner",c="vce-image-gallery-img",m={alt:e&&e.alt?e.alt:"",title:e&&e.title?e.title:""},p={};if("portrait"===e.orientation&&(c+=" vce-image-gallery-img--orientation-portrait"),"url"===r&&l[i].link&&l[i].link.url){h="a";var d=l[i].link,f=d.url,y=d.title,x=d.targetBlank,w=d.relNofollow;n={href:f,title:y,target:x?"_blank":void 0,rel:w?"nofollow":void 0}}else"imageNewTab"===r?(h="a",n={href:e.originalSrc||e.imgSrc,target:"_blank"}):"lightbox"===r?(h="a",n={href:e.originalSrc||e.imgSrc,"data-lightbox":"lightbox-"+a}):"photoswipe"===r&&(h="a",n={href:e.originalSrc||e.imgSrc,"data-photoswipe-image":a,"data-photoswipe-index":i},s&&(n["data-photoswipe-caption"]=l[i].caption),v["data-photoswipe-gallery"]=a,p["data-photoswipe-item"]="photoswipe-"+a);l[i].filter&&"normal"!==l[i].filter&&(o+=" vce-image-filter--"+l[i].filter);var k="";u&&l[i].caption&&(k=g.default.createElement("figcaption",null,l[i].caption)),b.push(g.default.createElement("div",(0,t.default)({className:"vce-image-gallery-item",key:"vce-image-gallery-item-"+i+"-"+a},p),g.default.createElement("figure",{className:"vce-image-gallery-item-inner-wrapper"},g.default.createElement(h,(0,t.default)({},n,{className:o}),g.default.createElement("img",(0,t.default)({className:c,src:e.imgSrc},m))),k)))});var x=this.applyDO("all");return g.default.createElement("div",(0,t.default)({className:d},n,v),g.default.createElement("div",(0,t.default)({className:"vce-image-gallery-wrapper vce",id:"el-"+a},x),g.default.createElement("div",{className:"vce-image-gallery-list"},b)))}}]),a}(m(i("./node_modules/vc-cake/index.js")).default.getService("api").elementComponent);a.default=u},"./imageGallery/index.js":function(e,a,i){"use strict";var t=l(i("./node_modules/vc-cake/index.js")),n=l(i("./imageGallery/component.js"));function l(e){return e&&e.__esModule?e:{default:e}}(0,t.default.getService("cook").add)(i("./imageGallery/settings.json"),function(e){e.add(n.default)},{css:i("./node_modules/raw-loader/index.js!./imageGallery/styles.css"),editorCss:i("./node_modules/raw-loader/index.js!./imageGallery/editor.css"),mixins:{imageGalleryColumns:{mixin:i("./node_modules/raw-loader/index.js!./imageGallery/cssMixins/imageGalleryColumns.pcss")},imageGalleryGap:{mixin:i("./node_modules/raw-loader/index.js!./imageGallery/cssMixins/imageGalleryGap.pcss")}}},"")},"./imageGallery/settings.json":function(e){e.exports={image:{type:"attachimage",access:"public",value:["image-1.jpg","image-2.jpg","image-3.jpg","image-4.jpg","image-5.jpg","image-6.jpg"],options:{label:"Images",multiple:!0,onChange:{rules:{clickableOptions:{rule:"value",options:{value:"url"}}},actions:[{action:"attachImageUrls"}]},url:!1,imageFilter:!0}},shape:{type:"buttonGroup",access:"public",value:"square",options:{label:"Shape",values:[{label:"Square",value:"square",icon:"vcv-ui-icon-attribute-shape-square"},{label:"Rounded",value:"rounded",icon:"vcv-ui-icon-attribute-shape-rounded"},{label:"Round",value:"round",icon:"vcv-ui-icon-attribute-shape-round"}]}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["clickableOptions","showCaption","image","showCaptionGeneral","captionAlignment","columns","gap","shape","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},clickableOptions:{type:"dropdown",access:"public",value:"lightbox",options:{label:"OnClick action",values:[{label:"None",value:""},{label:"Lightbox",value:"lightbox"},{label:"PhotoSwipe",value:"photoswipe"},{label:"Open Image in New Tab",value:"imageNewTab"},{label:"Link selector",value:"url"}]}},showCaption:{type:"toggle",access:"public",value:!1,options:{label:"Show image caption in gallery view",onChange:{rules:{clickableOptions:{rule:"value",options:{value:"photoswipe"}}},actions:[{action:"toggleVisibility"}]}}},showCaptionGeneral:{type:"toggle",access:"public",value:!1,options:{label:"Show image caption below every image"}},captionAlignment:{type:"buttonGroup",access:"public",value:"left",options:{label:"Caption alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}],onChange:{rules:{showCaptionGeneral:{rule:"toggle"}},actions:[{action:"toggleVisibility"}]}}},sharedAssetsLibrary:{access:"protected",type:"string",value:{libraries:[{rules:{clickableOptions:{rule:"value",options:{value:"lightbox"}}},libsNames:["lightbox"]},{rules:{clickableOptions:{rule:"value",options:{value:"photoswipe"}}},libsNames:["photoswipe"]}]}},gap:{type:"number",access:"public",value:"10",options:{label:"Gap",description:"Enter gap in pixels (Example: 5).",cssMixin:{mixin:"imageGalleryGap",property:"gap",namePattern:"[\\da-f]+"}}},columns:{type:"number",access:"public",value:"3",options:{label:"Number of Columns",cssMixin:{mixin:"imageGalleryColumns",property:"columns",namePattern:"[\\da-f]+"}}},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}},tag:{access:"protected",type:"string",value:"imageGallery"}}},"./node_modules/raw-loader/index.js!./imageGallery/cssMixins/imageGalleryColumns.pcss":function(e,a){e.exports="@media (min-width: 544px) {\n  .vce-image-gallery {\n\t&--columns-$selector {\n\t  .vce-image-gallery-item {\n\t    @if $columns != false {\n\t      flex: 0 0 calc(100% / $columns);\n\t      max-width: calc(100% / $columns);\n\t    }\n\t  }\n\t}\n  }\n}\n\n"},"./node_modules/raw-loader/index.js!./imageGallery/cssMixins/imageGalleryGap.pcss":function(e,a){e.exports=".vce-image-gallery {\n  &--gap-$selector {\n    .vce-image-gallery-list {\n      @if $gap != false {\n        margin-left: calc(-$(gap)px / 2);\n        margin-right: calc(-$(gap)px / 2);\n        margin-bottom: -$(gap)px;\n      }\n    }\n    .vce-image-gallery-item {\n      @if $gap != false {\n        padding-left: calc($(gap)px / 2);\n        padding-right: calc($(gap)px / 2);\n        margin-bottom: $(gap)px;\n      }\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./imageGallery/editor.css":function(e,a){e.exports=".vce-image-gallery {\n  min-height: 1em;\n}\n"},"./node_modules/raw-loader/index.js!./imageGallery/styles.css":function(e,a){e.exports='.vce-image-gallery-wrapper {\n  overflow: hidden;\n}\n\n.vce-image-gallery-list {\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: stretch;\n  align-content: flex-start;\n  flex-wrap: wrap;\n}\n\n.vce-image-gallery-item {\n  flex: 0 0 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n\n.vce-image-gallery-item-inner-wrapper {\n  overflow: hidden;\n  margin: 0;\n}\n\n.vce-image-gallery-item-inner {\n  position: relative;\n  display: block;\n  overflow: hidden;\n}\n\n.vce-image-gallery-item-inner::after {\n  content: "";\n  padding-bottom: 100%;\n  display: block;\n}\n\n.vce-image-gallery-item-inner img.vce-image-gallery-img {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n  width: auto;\n  max-width: none;\n  height: 101%;\n}\n\n.vce-image-gallery-item-inner img.vce-image-gallery-img--orientation-portrait {\n  width: 101%;\n  height: auto;\n}\n\na.vce-image-gallery-item-inner {\n  color: transparent;\n  border-bottom: 0;\n  text-decoration: none;\n  box-shadow: none;\n}\n\na.vce-image-gallery-item-inner:hover,\na.vce-image-gallery-item-inner:focus {\n  border-bottom: 0;\n  text-decoration: none;\n  box-shadow: none;\n}\n\n.vce-image-gallery--border-rounded .vce-image-gallery-item-inner {\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.vce-image-gallery--border-round .vce-image-gallery-item-inner {\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.vce-image-gallery-item-inner-wrapper figcaption {\n  font-style: italic;\n  margin-top: 10px;\n}\n\n.vce-image-gallery-caption--align-left figcaption {\n  text-align: left;\n}\n\n.vce-image-gallery-caption--align-center figcaption {\n  text-align: center;\n}\n\n.vce-image-gallery-caption--align-right figcaption {\n  text-align: right;\n}'}},[["./imageGallery/index.js"]]]);