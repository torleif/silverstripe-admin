<<<<<<< HEAD
webpackJsonp([1],{125:function(e,t){e.exports=ReactApollo},179:function(e,t){e.exports=InsertLinkModal},24:function(e,t){e.exports=i18n},41:function(e,t){e.exports=Injector},930:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(24),o=i(r),a=n(99),l=i(a),s=n(0),d=i(s),u=n(25),c=i(u),f=n(125),p=n(28),m=i(p),x=n(179),k=n(41);l.default.addAction("sslink",{text:o.default._t("Admin.LINKLABEL_EXTERNALURL","Link to external URL"),onclick:function(e){return e.execCommand("sslinkexternal")},priority:52});var L={init:function(e){e.addCommand("sslinkexternal",function(){window.jQuery("#"+e.id).entwine("ss").openLinkExternalDialog()})}},_="insert-link__dialog-wrapper--external",A=(0,k.provideInjector)((0,x.createInsertLinkModal)("SilverStripe\\Admin\\LeftAndMain","EditorExternalLink"));m.default.entwine("ss",function(e){e("textarea.htmleditor").entwine({openLinkExternalDialog:function(){var t=e("#"+_);t.length||(t=e('<div id="'+_+'" />'),e("body").append(t)),t.addClass("insert-link__dialog-wrapper"),t.setElement(this),t.open()}}),e("#"+_).entwine({renderModal:function(e){var t=this,n=ss.store,i=ss.apolloClient,r=function(){return t.close()},a=function(){return t.handleInsert.apply(t,arguments)},l=this.getOriginalAttributes(),s=tinymce.activeEditor.selection,u=s.getContent()||"",p=s.getNode().tagName,m="A"!==p&&""===u.trim();c.default.render(d.default.createElement(f.ApolloProvider,{store:n,client:i},d.default.createElement(A,{show:e,onInsert:a,onHide:r,title:o.default._t("Admin.LINK_EXTERNAL","Insert external link"),bodyClassName:"modal__dialog",className:"insert-link__dialog-wrapper--external",fileAttributes:l,identifier:"Admin.InsertLinkExternalModal",requireLinkText:m})),this[0])},buildAttributes:function(e){var t=this._super(e),n=t.href;return n.match(/:\/\//)||(n=window.location.protocol+"//"+n),n=n.replace(/:\/\/(#.*)$/,"$2"),n.match(/:\/\/$/)&&(n=""),t.href=n,t}})}),tinymce.PluginManager.add("sslinkexternal",function(e){return L.init(e)}),t.default=L},99:function(e,t){e.exports=TinyMCEActionRegistrar}},[930]);
=======
<<<<<<< HEAD
webpackJsonp([1],{125:function(e,t){e.exports=ReactApollo},179:function(e,t){e.exports=InsertLinkModal},24:function(e,t){e.exports=i18n},41:function(e,t){e.exports=Injector},930:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(24),o=i(r),a=n(99),l=i(a),s=n(0),d=i(s),u=n(25),c=i(u),f=n(125),p=n(28),m=i(p),x=n(179),k=n(41);l.default.addAction("sslink",{text:o.default._t("Admin.LINKLABEL_EXTERNALURL","Link to external URL"),onclick:function(e){return e.execCommand("sslinkexternal")}});var L={init:function(e){e.addCommand("sslinkexternal",function(){window.jQuery("#"+e.id).entwine("ss").openLinkExternalDialog()})}},_="insert-link__dialog-wrapper--external",A=(0,k.provideInjector)((0,x.createInsertLinkModal)("SilverStripe\\Admin\\LeftAndMain","EditorExternalLink"));m.default.entwine("ss",function(e){e("textarea.htmleditor").entwine({openLinkExternalDialog:function(){var t=e("#"+_);t.length||(t=e('<div id="'+_+'" />'),e("body").append(t)),t.addClass("insert-link__dialog-wrapper"),t.setElement(this),t.open()}}),e("#"+_).entwine({renderModal:function(e){var t=this,n=ss.store,i=ss.apolloClient,r=function(){return t.close()},a=function(){return t.handleInsert.apply(t,arguments)},l=this.getOriginalAttributes(),s=tinymce.activeEditor.selection,u=s.getContent()||"",p=s.getNode().tagName,m="A"!==p&&""===u.trim();c.default.render(d.default.createElement(f.ApolloProvider,{store:n,client:i},d.default.createElement(A,{show:e,onInsert:a,onHide:r,title:o.default._t("Admin.LINK_EXTERNAL","Insert external link"),bodyClassName:"modal__dialog",className:"insert-link__dialog-wrapper--external",fileAttributes:l,identifier:"Admin.InsertLinkExternalModal",requireLinkText:m})),this[0])},buildAttributes:function(e){var t=this._super(e),n=t.href;return n.match(/:\/\//)||(n=window.location.protocol+"//"+n),n=n.replace(/:\/\/(#.*)$/,"$2"),n.match(/:\/\/$/)&&(n=""),t.href=n,t}})}),tinymce.PluginManager.add("sslinkexternal",function(e){return L.init(e)}),t.default=L},99:function(e,t){e.exports=TinyMCEActionRegistrar}},[930]);
=======
webpackJsonp([1],{100:function(e,t){e.exports=TinyMCEActionRegistrar},125:function(e,t){e.exports=ReactApollo},180:function(e,t){e.exports=InsertLinkModal},24:function(e,t){e.exports=i18n},43:function(e,t){e.exports=Injector},935:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(24),o=i(r),a=n(100),l=i(a),s=n(0),d=i(s),u=n(25),c=i(u),f=n(125),p=n(28),m=i(p),x=n(180),k=n(43);l.default.addAction("sslink",{text:o.default._t("Admin.LINKLABEL_EXTERNALURL","Link to external URL"),onclick:function(e){return e.execCommand("sslinkexternal")}});var L={init:function(e){e.addCommand("sslinkexternal",function(){window.jQuery("#"+e.id).entwine("ss").openLinkExternalDialog()})}},_="insert-link__dialog-wrapper--external",A=(0,k.provideInjector)((0,x.createInsertLinkModal)("SilverStripe\\Admin\\LeftAndMain","EditorExternalLink"));m.default.entwine("ss",function(e){e("textarea.htmleditor").entwine({openLinkExternalDialog:function(){var t=e("#"+_);t.length||(t=e('<div id="'+_+'" />'),e("body").append(t)),t.addClass("insert-link__dialog-wrapper"),t.setElement(this),t.open()}}),e("#"+_).entwine({renderModal:function(e){var t=this,n=ss.store,i=ss.apolloClient,r=function(){return t.close()},a=function(){return t.handleInsert.apply(t,arguments)},l=this.getOriginalAttributes(),s=tinymce.activeEditor.selection,u=s.getContent()||"",p=s.getNode().tagName,m="A"!==p&&""===u.trim();c.default.render(d.default.createElement(f.ApolloProvider,{store:n,client:i},d.default.createElement(A,{show:e,onInsert:a,onHide:r,title:o.default._t("Admin.LINK_EXTERNAL","Insert external link"),bodyClassName:"modal__dialog",className:"insert-link__dialog-wrapper--external",fileAttributes:l,identifier:"Admin.InsertLinkExternalModal",requireLinkText:m})),this[0])},buildAttributes:function(e){var t=this._super(e),n=t.href;return n.match(/:\/\//)||(n=window.location.protocol+"//"+n),n=n.replace(/:\/\/(#.*)$/,"$2"),n.match(/:\/\/$/)&&(n=""),t.href=n,t}})}),tinymce.PluginManager.add("sslinkexternal",function(e){return L.init(e)}),t.default=L}},[935]);
>>>>>>> Extract utility methods into separate file and nd expose as exports. New findTreeByPath prop
>>>>>>> Extract utility methods into separate file and nd expose as exports. New findTreeByPath prop
