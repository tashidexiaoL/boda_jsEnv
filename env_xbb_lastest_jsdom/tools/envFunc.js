// 浏览器接口具体的实现
!function () {
    bodavm.envFunc.window_Error=function (){
        res=bodavm.memory.globalobj['Error']
        console.log_copy(`window_Error ->`,`res -> ${res}`);
        return res
    }
    bodavm.envFunc.HTMLInputElement_value_set=function (){
        arg=arguments[0]
        console.log_copy(`HTMLInputElement_value_set -> `,`arg -> `,arg,);
        this._boarg.value=arg
        return arg
    }
    bodavm.envFunc.HTMLOptionElement_disabled_get=function (){
        res=this._boarg.disabled
        console.log_copy(`HTMLOptionElement_disabled_get -> `,`res ->`,res);
        return res
    }


    bodavm.envFunc.HTMLSelectElement_disabled_set=function (){
        arg=arguments[0]
        this._disabled=arg
        console.log_copy(`HTMLSelectElement_disabled_set -> `,arg);
    }
    bodavm.envFunc.HTMLOptionElement_selected_get=function (){

        console.log_copy(`HTMLOptionElement_selected_get ->`,`res ->`,true ,`默认为true  需要根据实际修改`);
        return true

    }

    bodavm.envFunc.CSSStyleDeclaration_cssText_set=function (){
        // arg=
        
        arg=arguments[0]
        this._boarg.cssText=arg
        console.log_copy(`CSSStyleDeclaration_cssText_set ->`,`res ->`,res);
        return res 
    }
    bodavm.envFunc.Document_createDocumentFragment=function(){
        let dofrag={}

        dofrag._boarg=this._boarg.createDocumentFragment()
        console.log_copy(`Document_createDocumentFragment ->` ,`res ->`,dofrag);
        dofrag.__proto__=DocumentFragment.prototype

        return dofrag
    }

    bodavm.envFunc.Document_readyState_get=function (){
        res=this._boarg.readyState
        console.log_copy(`Document_readyState_get ->`,`res ->`,res,`需要根据网站具体变化`);
        return res
    }

    bodavm.envFunc.HTMLAnchorElement_toString=function (){
        // arg=arguments[0]
        res=this._boarg.toString()
        console.log_copy(`HTMLAnchorElement_toString ->`,`res ->`,res);
        return res 
    }
    bodavm.envFunc.Node_compareDocumentPosition=function (){
        arg=arguments[0]
        res=this._boarg.compareDocumentPosition(arg)
        console.log_copy(`Node_compareDocumentPosition ->`,`res ->`,res);
        return res 
    }

    bodavm.envFunc.Element_matches=function (){
        arg=arguments[0]
        res=this._boarg.matches(arg)
        console.log_copy(`Element_matches ->`,`res ->`,res);
        return res 

    }

    bodavm.envFunc.Element_querySelectorAll=function (){
        arg=arguments[0]
        
        if ((!bodavm.memory.cache['Element_querySelectorAll'][arg])){
            bodavm.memory.cache['Element_querySelectorAll'][arg]={
                'this':this
            }
        }else{
            if (bodavm.memory.cache['Element_querySelectorAll'][arg]['this'] ==this){
                console.log_copy(`Element_querySelectorAll ->`,`arg->`,arg,'已存在直接返回')
                return bodavm.memory.cache['Element_querySelectorAll'][arg]
            }
            
        }
        console.log_copy(`Element_querySelectorAll ->`,`arg ->`,arg)

        let names = bodavm.memory.cache['Element_querySelectorAll'][arg]
        nodeList=this._boarg.querySelectorAll(arg)
        names.__proto__=NodeList.prototype
        names._boarg=nodeList
        return names
    }

    bodavm.envFunc.Document_getElementsByName=function (){
        arg=arguments[0]
        if ((!bodavm.memory.cache['Document_getElementsByName'][arg])){
            bodavm.memory.cache['Document_getElementsByName'][arg]={}
        }else{
            console.log_copy(`Document_getElementsByName ->`,`arg->`,arg,'已存在直接返回')
            return bodavm.memory.cache['Document_getElementsByName'][arg]
        }
        console.log_copy(`Document_getElementsByName ->`,`arg ->`,arg)

        let names = bodavm.memory.cache['Document_getElementsByName'][arg]
        nodeList=this._boarg.getElementsByName(arg)
        names.__proto__=NodeList.prototype
        names._boarg=nodeList
        return names
    }


    bodavm.envFunc.Document_createComment=function (){
        let comment={}
        arg=arguments[0]
        comment.__proto__=Comment.prototype
        comment._boarg=this._boarg.createComment(arg)
        console.log_copy(`Document_createComment ->`,`arg ->`,arg)
        return comment
    }
    bodavm.envFunc.NodeList_length_get=function (){
        res=this._boarg.length
        console.log_copy(`NodeList_length_get ->`,`res ->`,res)
        return res
    }
    bodavm.envFunc.Node_contains=function (){
        debugger
        let arg=arguments[0]
        let cont=this._boarg.contains(arg._boarg)
        console.log_copy(`Node_contains ->`,`-> res ->${cont}`);
        return cont
    }
    bodavm.envFunc.HTMLIFrameElement_contentDocument_get=function (){
        let res=bodavm.memory.cache['HTMLIFrameElement_contentDocument_get']
        // debugger
        res._boarg=this._boarg.contentDocument
        res.__proto__=HTMLDocument.prototype
        res._boisinit=true
        res._contentiframe=true
        console.log_copy(`HTMLIFrameElement_contentDocument_get ->`,`-> res ->${res} 获取iframe下的document !!!!`);
        return res
    }
    bodavm.envFunc.Document_head_get=function (){
        res=bodavm.memory.cache['Document_head_get']
        
        res._boarg=bodaobj.window.document.head
        res.__proto__=HTMLHeadElement.prototype
        console.log_copy(`Document_head_get ->`,`-> res ->${res}`);
        return res
    }

    bodavm.envFunc.HTMLAllCollection_item=function (){
        debugger
        let arg=arguments[0]
        res=this[arg]
        console.log_copy(`HTMLAllCollection_item ->`,`arg ->${arg} `,`-> res -> ${res}`);
        return res
    }
    bodavm.envFunc.location_valueOf=function (){
        // debugger
        // res=window.location
        let location_ = bodavm.memory.globalobj.location
        location_._boarg= bodaobj.window['location']

        // console.log_copy(`window_location_get `, `location_->`, location_);
        // return location_
        console.log_copy(`location_valueOf `, `-> res ->`,location_);
        return location_
    }

    bodavm.envFunc.StorageManager_estimate=function (){
        // debugger
        
            let res = {
                quota:bodavm.memory.estimate['quota'],
                usage:bodavm.memory.estimate['usage'],
                usageDetails:{indexedDB:bodavm.memory.estimate['indexedDB']}
            }
            let promise = new Promise((resolve, reject) => {
                resolve(res)
            })
            console.log_copy(`StorageManager_estimate `, `-> res ->${promise}`);

            return promise

    }
    bodavm.envFunc.HTMLScriptElement_src_set=function (){
        // debugger
        this._boarg.src=arguments[0]
        let res=this._boarg.src
        console.log_copy(`HTMLScriptElement_src_set ->`,`-> res->${res}`);
        return res
    }
    bodavm.envFunc.PerformanceEntry_name_get=function (){
        // debugger
        let name=this.name
        console.log_copy(`PerformanceEntry_name_get ->`,`-> res ->${name}`);
        return name
    }
    bodavm.envFunc.Performance_getEntriesByType=function (){
        let type=arguments[0]
        if (type =='resource'){
            let reslist=bodavm.memory.Performance['getEntriesByType']
            reslist._boisinit=bodavm.config.isinit
            for (let i of reslist){
                i._boisinit=bodavm.config.isinit
                i.__proto__ =PerformanceResourceTiming.prototype
            }
            //  debugger
            console.log_copy(`Performance_getEntriesByType- >`,`arg->${type}`,`-> res ->${reslist}`);
            return reslist
        }

    }
    bodavm.envFunc.Document_hasFocus=function (){
        console.log_copy(`Document_hasFocus ->`,`当前页面有没有获取焦点,默认返回true`)
        return true
    }
    bodavm.envFunc.Performance_timeOrigin_get=function (){
        let date=bodavm.memory.Performance['timeOrigin']
        console.log_copy(`Performance_timeOrigin_get-> `,`-> res ->${date}`);
        return date
    }

    bodavm.envFunc.Image_src_set=function (){
        // debugger
        console.log_copy(`Image_src_set->`,`-> res ->${arguments[0]}`);
        this._boarg.src=arguments[0]
        return this._boarg.src
    }
    bodavm.envFunc.Performance_now=function (){
        let now=window.performance._boarg.now()
        console.log_copy(`Performance_now `,`-> res ->${now}`);
        return now
    }

    bodavm.envFunc.window_Image = function window_Image() {
        // debugger
        let arg=bodavm.memory.globalobj['Image']
        arg._boarg=bodaobj.window.Image
        console.log_copy(`window_Image `, `-> res -> ${arg}`);

        return arg
    }
    bodavm.envFunc.window_scheduler_get=function (){let arg=bodavm.memory.globalobj['scheduler']?bodavm.memory.globalobj['scheduler']:null;console.log_copy(`window_scheduler_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_crossOriginIsolated_get=function (){let arg=bodavm.memory.globalobj['crossOriginIsolated']?bodavm.memory.globalobj['crossOriginIsolated']:null;console.log_copy(`window_crossOriginIsolated_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onpointerrawupdate_get=function (){let arg=bodavm.memory.globalobj['onpointerrawupdate']?bodavm.memory.globalobj['onpointerrawupdate']:null;console.log_copy(`window_onpointerrawupdate_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_originAgentCluster_get=function (){let arg=bodavm.memory.globalobj['originAgentCluster']?bodavm.memory.globalobj['originAgentCluster']:null;console.log_copy(`window_originAgentCluster_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onbeforematch_get=function (){let arg=bodavm.memory.globalobj['onbeforematch']?bodavm.memory.globalobj['onbeforematch']:null;console.log_copy(`window_onbeforematch_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ondeviceorientationabsolute_get=function (){let arg=bodavm.memory.globalobj['ondeviceorientationabsolute']?bodavm.memory.globalobj['ondeviceorientationabsolute']:null;console.log_copy(`window_ondeviceorientationabsolute_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ondeviceorientation_get=function (){let arg=bodavm.memory.globalobj['ondeviceorientation']?bodavm.memory.globalobj['ondeviceorientation']:null;console.log_copy(`window_ondeviceorientation_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ondevicemotion_get=function (){let arg=bodavm.memory.globalobj['ondevicemotion']?bodavm.memory.globalobj['ondevicemotion']:null;console.log_copy(`window_ondevicemotion_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onunload_get=function (){let arg=bodavm.memory.globalobj['onunload']?bodavm.memory.globalobj['onunload']:null;console.log_copy(`window_onunload_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onunhandledrejection_get=function (){let arg=bodavm.memory.globalobj['onunhandledrejection']?bodavm.memory.globalobj['onunhandledrejection']:null;console.log_copy(`window_onunhandledrejection_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onstorage_get=function (){let arg=bodavm.memory.globalobj['onstorage']?bodavm.memory.globalobj['onstorage']:null;console.log_copy(`window_onstorage_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onrejectionhandled_get=function (){let arg=bodavm.memory.globalobj['onrejectionhandled']?bodavm.memory.globalobj['onrejectionhandled']:null;console.log_copy(`window_onrejectionhandled_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onpopstate_get=function (){let arg=bodavm.memory.globalobj['onpopstate']?bodavm.memory.globalobj['onpopstate']:null;console.log_copy(`window_onpopstate_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onpageshow_get=function (){let arg=bodavm.memory.globalobj['onpageshow']?bodavm.memory.globalobj['onpageshow']:null;console.log_copy(`window_onpageshow_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onpagehide_get=function (){let arg=bodavm.memory.globalobj['onpagehide']?bodavm.memory.globalobj['onpagehide']:null;console.log_copy(`window_onpagehide_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ononline_get=function (){let arg=bodavm.memory.globalobj['ononline']?bodavm.memory.globalobj['ononline']:null;console.log_copy(`window_ononline_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onoffline_get=function (){let arg=bodavm.memory.globalobj['onoffline']?bodavm.memory.globalobj['onoffline']:null;console.log_copy(`window_onoffline_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onmessageerror_get=function (){let arg=bodavm.memory.globalobj['onmessageerror']?bodavm.memory.globalobj['onmessageerror']:null;console.log_copy(`window_onmessageerror_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onlanguagechange_get=function (){let arg=bodavm.memory.globalobj['onlanguagechange']?bodavm.memory.globalobj['onlanguagechange']:null;console.log_copy(`window_onlanguagechange_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onhashchange_get=function (){let arg=bodavm.memory.globalobj['onhashchange']?bodavm.memory.globalobj['onhashchange']:null;console.log_copy(`window_onhashchange_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onbeforeprint_get=function (){let arg=bodavm.memory.globalobj['onbeforeprint']?bodavm.memory.globalobj['onbeforeprint']:null;console.log_copy(`window_onbeforeprint_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onafterprint_get=function (){let arg=bodavm.memory.globalobj['onafterprint']?bodavm.memory.globalobj['onafterprint']:null;console.log_copy(`window_onafterprint_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ontransitioncancel_get=function (){let arg=bodavm.memory.globalobj['ontransitioncancel']?bodavm.memory.globalobj['ontransitioncancel']:null;console.log_copy(`window_ontransitioncancel_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ontransitionend_get=function (){let arg=bodavm.memory.globalobj['ontransitionend']?bodavm.memory.globalobj['ontransitionend']:null;console.log_copy(`window_ontransitionend_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ontransitionstart_get=function (){let arg=bodavm.memory.globalobj['ontransitionstart']?bodavm.memory.globalobj['ontransitionstart']:null;console.log_copy(`window_ontransitionstart_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ontransitionrun_get=function (){let arg=bodavm.memory.globalobj['ontransitionrun']?bodavm.memory.globalobj['ontransitionrun']:null;console.log_copy(`window_ontransitionrun_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onanimationstart_get=function (){let arg=bodavm.memory.globalobj['onanimationstart']?bodavm.memory.globalobj['onanimationstart']:null;console.log_copy(`window_onanimationstart_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onanimationiteration_get=function (){let arg=bodavm.memory.globalobj['onanimationiteration']?bodavm.memory.globalobj['onanimationiteration']:null;console.log_copy(`window_onanimationiteration_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onanimationend_get=function (){let arg=bodavm.memory.globalobj['onanimationend']?bodavm.memory.globalobj['onanimationend']:null;console.log_copy(`window_onanimationend_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onselectionchange_get=function (){let arg=bodavm.memory.globalobj['onselectionchange']?bodavm.memory.globalobj['onselectionchange']:null;console.log_copy(`window_onselectionchange_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onselectstart_get=function (){let arg=bodavm.memory.globalobj['onselectstart']?bodavm.memory.globalobj['onselectstart']:null;console.log_copy(`window_onselectstart_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onpointerleave_get=function (){let arg=bodavm.memory.globalobj['onpointerleave']?bodavm.memory.globalobj['onpointerleave']:null;console.log_copy(`window_onpointerleave_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onpointerenter_get=function (){let arg=bodavm.memory.globalobj['onpointerenter']?bodavm.memory.globalobj['onpointerenter']:null;console.log_copy(`window_onpointerenter_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onpointerout_get=function (){let arg=bodavm.memory.globalobj['onpointerout']?bodavm.memory.globalobj['onpointerout']:null;console.log_copy(`window_onpointerout_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onpointerover_get=function (){let arg=bodavm.memory.globalobj['onpointerover']?bodavm.memory.globalobj['onpointerover']:null;console.log_copy(`window_onpointerover_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onpointercancel_get=function (){let arg=bodavm.memory.globalobj['onpointercancel']?bodavm.memory.globalobj['onpointercancel']:null;console.log_copy(`window_onpointercancel_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onpointerup_get=function (){let arg=bodavm.memory.globalobj['onpointerup']?bodavm.memory.globalobj['onpointerup']:null;console.log_copy(`window_onpointerup_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onpointermove_get=function (){let arg=bodavm.memory.globalobj['onpointermove']?bodavm.memory.globalobj['onpointermove']:null;console.log_copy(`window_onpointermove_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onpointerdown_get=function (){let arg=bodavm.memory.globalobj['onpointerdown']?bodavm.memory.globalobj['onpointerdown']:null;console.log_copy(`window_onpointerdown_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onlostpointercapture_get=function (){let arg=bodavm.memory.globalobj['onlostpointercapture']?bodavm.memory.globalobj['onlostpointercapture']:null;console.log_copy(`window_onlostpointercapture_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ongotpointercapture_get=function (){let arg=bodavm.memory.globalobj['ongotpointercapture']?bodavm.memory.globalobj['ongotpointercapture']:null;console.log_copy(`window_ongotpointercapture_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onauxclick_get=function (){let arg=bodavm.memory.globalobj['onauxclick']?bodavm.memory.globalobj['onauxclick']:null;console.log_copy(`window_onauxclick_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onwheel_get=function (){let arg=bodavm.memory.globalobj['onwheel']?bodavm.memory.globalobj['onwheel']:null;console.log_copy(`window_onwheel_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onwebkittransitionend_get=function (){let arg=bodavm.memory.globalobj['onwebkittransitionend']?bodavm.memory.globalobj['onwebkittransitionend']:null;console.log_copy(`window_onwebkittransitionend_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onwebkitanimationstart_get=function (){let arg=bodavm.memory.globalobj['onwebkitanimationstart']?bodavm.memory.globalobj['onwebkitanimationstart']:null;console.log_copy(`window_onwebkitanimationstart_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onwebkitanimationiteration_get=function (){let arg=bodavm.memory.globalobj['onwebkitanimationiteration']?bodavm.memory.globalobj['onwebkitanimationiteration']:null;console.log_copy(`window_onwebkitanimationiteration_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onwebkitanimationend_get=function (){let arg=bodavm.memory.globalobj['onwebkitanimationend']?bodavm.memory.globalobj['onwebkitanimationend']:null;console.log_copy(`window_onwebkitanimationend_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onwaiting_get=function (){let arg=bodavm.memory.globalobj['onwaiting']?bodavm.memory.globalobj['onwaiting']:null;console.log_copy(`window_onwaiting_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onvolumechange_get=function (){let arg=bodavm.memory.globalobj['onvolumechange']?bodavm.memory.globalobj['onvolumechange']:null;console.log_copy(`window_onvolumechange_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ontoggle_get=function (){let arg=bodavm.memory.globalobj['ontoggle']?bodavm.memory.globalobj['ontoggle']:null;console.log_copy(`window_ontoggle_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ontimeupdate_get=function (){let arg=bodavm.memory.globalobj['ontimeupdate']?bodavm.memory.globalobj['ontimeupdate']:null;console.log_copy(`window_ontimeupdate_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onsuspend_get=function (){let arg=bodavm.memory.globalobj['onsuspend']?bodavm.memory.globalobj['onsuspend']:null;console.log_copy(`window_onsuspend_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onsubmit_get=function (){let arg=bodavm.memory.globalobj['onsubmit']?bodavm.memory.globalobj['onsubmit']:null;console.log_copy(`window_onsubmit_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onstalled_get=function (){let arg=bodavm.memory.globalobj['onstalled']?bodavm.memory.globalobj['onstalled']:null;console.log_copy(`window_onstalled_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onslotchange_get=function (){let arg=bodavm.memory.globalobj['onslotchange']?bodavm.memory.globalobj['onslotchange']:null;console.log_copy(`window_onslotchange_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onselect_get=function (){let arg=bodavm.memory.globalobj['onselect']?bodavm.memory.globalobj['onselect']:null;console.log_copy(`window_onselect_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onseeking_get=function (){let arg=bodavm.memory.globalobj['onseeking']?bodavm.memory.globalobj['onseeking']:null;console.log_copy(`window_onseeking_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onseeked_get=function (){let arg=bodavm.memory.globalobj['onseeked']?bodavm.memory.globalobj['onseeked']:null;console.log_copy(`window_onseeked_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onsecuritypolicyviolation_get=function (){let arg=bodavm.memory.globalobj['onsecuritypolicyviolation']?bodavm.memory.globalobj['onsecuritypolicyviolation']:null;console.log_copy(`window_onsecuritypolicyviolation_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onscroll_get=function (){let arg=bodavm.memory.globalobj['onscroll']?bodavm.memory.globalobj['onscroll']:null;console.log_copy(`window_onscroll_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onresize_get=function (){let arg=bodavm.memory.globalobj['onresize']?bodavm.memory.globalobj['onresize']:null;console.log_copy(`window_onresize_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onreset_get=function (){let arg=bodavm.memory.globalobj['onreset']?bodavm.memory.globalobj['onreset']:null;console.log_copy(`window_onreset_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onratechange_get=function (){let arg=bodavm.memory.globalobj['onratechange']?bodavm.memory.globalobj['onratechange']:null;console.log_copy(`window_onratechange_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onprogress_get=function (){let arg=bodavm.memory.globalobj['onprogress']?bodavm.memory.globalobj['onprogress']:null;console.log_copy(`window_onprogress_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onplaying_get=function (){let arg=bodavm.memory.globalobj['onplaying']?bodavm.memory.globalobj['onplaying']:null;console.log_copy(`window_onplaying_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onplay_get=function (){let arg=bodavm.memory.globalobj['onplay']?bodavm.memory.globalobj['onplay']:null;console.log_copy(`window_onplay_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onpause_get=function (){let arg=bodavm.memory.globalobj['onpause']?bodavm.memory.globalobj['onpause']:null;console.log_copy(`window_onpause_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onmousewheel_get=function (){let arg=bodavm.memory.globalobj['onmousewheel']?bodavm.memory.globalobj['onmousewheel']:null;console.log_copy(`window_onmousewheel_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onmouseup_get=function (){let arg=bodavm.memory.globalobj['onmouseup']?bodavm.memory.globalobj['onmouseup']:null;console.log_copy(`window_onmouseup_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onmouseover_get=function (){let arg=bodavm.memory.globalobj['onmouseover']?bodavm.memory.globalobj['onmouseover']:null;console.log_copy(`window_onmouseover_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onmouseout_get=function (){let arg=bodavm.memory.globalobj['onmouseout']?bodavm.memory.globalobj['onmouseout']:null;console.log_copy(`window_onmouseout_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onmousemove_get=function (){let arg=bodavm.memory.globalobj['onmousemove']?bodavm.memory.globalobj['onmousemove']:null;console.log_copy(`window_onmousemove_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onmouseleave_get=function (){let arg=bodavm.memory.globalobj['onmouseleave']?bodavm.memory.globalobj['onmouseleave']:null;console.log_copy(`window_onmouseleave_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onmouseenter_get=function (){let arg=bodavm.memory.globalobj['onmouseenter']?bodavm.memory.globalobj['onmouseenter']:null;console.log_copy(`window_onmouseenter_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onmousedown_get=function (){let arg=bodavm.memory.globalobj['onmousedown']?bodavm.memory.globalobj['onmousedown']:null;console.log_copy(`window_onmousedown_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onloadstart_get=function (){let arg=bodavm.memory.globalobj['onloadstart']?bodavm.memory.globalobj['onloadstart']:null;console.log_copy(`window_onloadstart_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onloadedmetadata_get=function (){let arg=bodavm.memory.globalobj['onloadedmetadata']?bodavm.memory.globalobj['onloadedmetadata']:null;console.log_copy(`window_onloadedmetadata_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onloadeddata_get=function (){let arg=bodavm.memory.globalobj['onloadeddata']?bodavm.memory.globalobj['onloadeddata']:null;console.log_copy(`window_onloadeddata_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onload_get=function (){let arg=bodavm.memory.globalobj['onload']?bodavm.memory.globalobj['onload']:null;console.log_copy(`window_onload_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onkeyup_get=function (){let arg=bodavm.memory.globalobj['onkeyup']?bodavm.memory.globalobj['onkeyup']:null;console.log_copy(`window_onkeyup_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onkeypress_get=function (){let arg=bodavm.memory.globalobj['onkeypress']?bodavm.memory.globalobj['onkeypress']:null;console.log_copy(`window_onkeypress_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onkeydown_get=function (){let arg=bodavm.memory.globalobj['onkeydown']?bodavm.memory.globalobj['onkeydown']:null;console.log_copy(`window_onkeydown_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_oninvalid_get=function (){let arg=bodavm.memory.globalobj['oninvalid']?bodavm.memory.globalobj['oninvalid']:null;console.log_copy(`window_oninvalid_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_oninput_get=function (){let arg=bodavm.memory.globalobj['oninput']?bodavm.memory.globalobj['oninput']:null;console.log_copy(`window_oninput_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onformdata_get=function (){let arg=bodavm.memory.globalobj['onformdata']?bodavm.memory.globalobj['onformdata']:null;console.log_copy(`window_onformdata_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onfocus_get=function (){let arg=bodavm.memory.globalobj['onfocus']?bodavm.memory.globalobj['onfocus']:null;console.log_copy(`window_onfocus_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onerror_get=function (){let arg=bodavm.memory.globalobj['onerror']?bodavm.memory.globalobj['onerror']:null;console.log_copy(`window_onerror_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onended_get=function (){let arg=bodavm.memory.globalobj['onended']?bodavm.memory.globalobj['onended']:null;console.log_copy(`window_onended_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onemptied_get=function (){let arg=bodavm.memory.globalobj['onemptied']?bodavm.memory.globalobj['onemptied']:null;console.log_copy(`window_onemptied_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ondurationchange_get=function (){let arg=bodavm.memory.globalobj['ondurationchange']?bodavm.memory.globalobj['ondurationchange']:null;console.log_copy(`window_ondurationchange_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ondrop_get=function (){let arg=bodavm.memory.globalobj['ondrop']?bodavm.memory.globalobj['ondrop']:null;console.log_copy(`window_ondrop_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ondragstart_get=function (){let arg=bodavm.memory.globalobj['ondragstart']?bodavm.memory.globalobj['ondragstart']:null;console.log_copy(`window_ondragstart_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ondragover_get=function (){let arg=bodavm.memory.globalobj['ondragover']?bodavm.memory.globalobj['ondragover']:null;console.log_copy(`window_ondragover_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ondragleave_get=function (){let arg=bodavm.memory.globalobj['ondragleave']?bodavm.memory.globalobj['ondragleave']:null;console.log_copy(`window_ondragleave_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ondragenter_get=function (){let arg=bodavm.memory.globalobj['ondragenter']?bodavm.memory.globalobj['ondragenter']:null;console.log_copy(`window_ondragenter_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ondragend_get=function (){let arg=bodavm.memory.globalobj['ondragend']?bodavm.memory.globalobj['ondragend']:null;console.log_copy(`window_ondragend_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ondrag_get=function (){let arg=bodavm.memory.globalobj['ondrag']?bodavm.memory.globalobj['ondrag']:null;console.log_copy(`window_ondrag_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_ondblclick_get=function (){let arg=bodavm.memory.globalobj['ondblclick']?bodavm.memory.globalobj['ondblclick']:null;console.log_copy(`window_ondblclick_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_oncuechange_get=function (){let arg=bodavm.memory.globalobj['oncuechange']?bodavm.memory.globalobj['oncuechange']:null;console.log_copy(`window_oncuechange_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_oncontextrestored_get=function (){let arg=bodavm.memory.globalobj['oncontextrestored']?bodavm.memory.globalobj['oncontextrestored']:null;console.log_copy(`window_oncontextrestored_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_oncontextmenu_get=function (){let arg=bodavm.memory.globalobj['oncontextmenu']?bodavm.memory.globalobj['oncontextmenu']:null;console.log_copy(`window_oncontextmenu_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_oncontextlost_get=function (){let arg=bodavm.memory.globalobj['oncontextlost']?bodavm.memory.globalobj['oncontextlost']:null;console.log_copy(`window_oncontextlost_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onclose_get=function (){let arg=bodavm.memory.globalobj['onclose']?bodavm.memory.globalobj['onclose']:null;console.log_copy(`window_onclose_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onclick_get=function (){let arg=bodavm.memory.globalobj['onclick']?bodavm.memory.globalobj['onclick']:null;console.log_copy(`window_onclick_get`,`-> res ->${arg}`);return arg}
    bodavm.envFunc.window_onchange_get=function (){let arg=bodavm.memory.globalobj['onchange']?bodavm.memory.globalobj['onchange']:null;console.log_copy(`window_onchange_get`,`-> res ->${arg}`);return arg}

    bodavm.envFunc.window_$x = function () { let arg = bodavm.memory.globalobj['$x']; console.log_copy(`window_$x`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_$$ = function () { let arg = bodavm.memory.globalobj['$$']; console.log_copy(`window_$$`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_$ = function () { let arg = bodavm.memory.globalobj['$']; console.log_copy(`window_$`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_unmonitorEvents = function () { let arg = bodavm.memory.globalobj['unmonitorEvents']; console.log_copy(`window_unmonitorEvents`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_monitorEvents = function () { let arg = bodavm.memory.globalobj['monitorEvents']; console.log_copy(`window_monitorEvents`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_getAccessibleRole = function () { let arg = bodavm.memory.globalobj['getAccessibleRole']; console.log_copy(`window_getAccessibleRole`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_getAccessibleName = function () { let arg = bodavm.memory.globalobj['getAccessibleName']; console.log_copy(`window_getAccessibleName`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_getEventListeners = function () { let arg = bodavm.memory.globalobj['getEventListeners']; console.log_copy(`window_getEventListeners`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_queryObjects = function () { let arg = bodavm.memory.globalobj['queryObjects']; console.log_copy(`window_queryObjects`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_copy = function () { let arg = bodavm.memory.globalobj['copy']; console.log_copy(`window_copy`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_inspect = function () { let arg = bodavm.memory.globalobj['inspect']; console.log_copy(`window_inspect`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_unmonitor = function () { let arg = bodavm.memory.globalobj['unmonitor']; console.log_copy(`window_unmonitor`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_monitor = function () { let arg = bodavm.memory.globalobj['monitor']; console.log_copy(`window_monitor`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_undebug = function () { let arg = bodavm.memory.globalobj['undebug']; console.log_copy(`window_undebug`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_debug = function () { let arg = bodavm.memory.globalobj['debug']; console.log_copy(`window_debug`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_values = function () { let arg = bodavm.memory.globalobj['values']; console.log_copy(`window_values`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_keys = function () { let arg = bodavm.memory.globalobj['keys']; console.log_copy(`window_keys`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_table = function () { let arg = bodavm.memory.globalobj['table']; console.log_copy(`window_table`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_clear = function () { let arg = bodavm.memory.globalobj['clear']; console.log_copy(`window_clear`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_profileEnd = function () { let arg = bodavm.memory.globalobj['profileEnd']; console.log_copy(`window_profileEnd`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_profile = function () { let arg = bodavm.memory.globalobj['profile']; console.log_copy(`window_profile`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_dirxml = function () { let arg = bodavm.memory.globalobj['dirxml']; console.log_copy(`window_dirxml`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_dir = function () { let arg = bodavm.memory.globalobj['dir']; console.log_copy(`window_dir`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_webkitResolveLocalFileSystemURL = function () { let arg = bodavm.memory.globalobj['webkitResolveLocalFileSystemURL']; console.log_copy(`window_webkitResolveLocalFileSystemURL`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_webkitSpeechRecognitionEvent = function () { let arg = bodavm.memory.globalobj['webkitSpeechRecognitionEvent']; console.log_copy(`window_webkitSpeechRecognitionEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_webkitSpeechRecognitionError = function () { let arg = bodavm.memory.globalobj['webkitSpeechRecognitionError']; console.log_copy(`window_webkitSpeechRecognitionError`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_webkitSpeechRecognition = function () { let arg = bodavm.memory.globalobj['webkitSpeechRecognition']; console.log_copy(`window_webkitSpeechRecognition`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_webkitSpeechGrammarList = function () { let arg = bodavm.memory.globalobj['webkitSpeechGrammarList']; console.log_copy(`window_webkitSpeechGrammarList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_webkitSpeechGrammar = function () { let arg = bodavm.memory.globalobj['webkitSpeechGrammar']; console.log_copy(`window_webkitSpeechGrammar`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XSLTProcessor = function () { let arg = bodavm.memory.globalobj['XSLTProcessor']; console.log_copy(`window_XSLTProcessor`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_VirtualKeyboardGeometryChangeEvent = function () { let arg = bodavm.memory.globalobj['VirtualKeyboardGeometryChangeEvent']; console.log_copy(`window_VirtualKeyboardGeometryChangeEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_VideoPlaybackQuality = function () { let arg = bodavm.memory.globalobj['VideoPlaybackQuality']; console.log_copy(`window_VideoPlaybackQuality`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_URLPattern = function () { let arg = bodavm.memory.globalobj['URLPattern']; console.log_copy(`window_URLPattern`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TrustedTypePolicy = function () { let arg = bodavm.memory.globalobj['TrustedTypePolicy']; console.log_copy(`window_TrustedTypePolicy`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TrustedScriptURL = function () { let arg = bodavm.memory.globalobj['TrustedScriptURL']; console.log_copy(`window_TrustedScriptURL`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TrustedScript = function () { let arg = bodavm.memory.globalobj['TrustedScript']; console.log_copy(`window_TrustedScript`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TrustedHTML = function () { let arg = bodavm.memory.globalobj['TrustedHTML']; console.log_copy(`window_TrustedHTML`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SpeechSynthesisUtterance = function () { let arg = bodavm.memory.globalobj['SpeechSynthesisUtterance']; console.log_copy(`window_SpeechSynthesisUtterance`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SpeechSynthesisEvent = function () { let arg = bodavm.memory.globalobj['SpeechSynthesisEvent']; console.log_copy(`window_SpeechSynthesisEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SpeechSynthesisErrorEvent = function () { let arg = bodavm.memory.globalobj['SpeechSynthesisErrorEvent']; console.log_copy(`window_SpeechSynthesisErrorEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SharedWorker = function () { let arg = bodavm.memory.globalobj['SharedWorker']; console.log_copy(`window_SharedWorker`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TaskSignal = function () { let arg = bodavm.memory.globalobj['TaskSignal']; console.log_copy(`window_TaskSignal`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TaskPriorityChangeEvent = function () { let arg = bodavm.memory.globalobj['TaskPriorityChangeEvent']; console.log_copy(`window_TaskPriorityChangeEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TaskController = function () { let arg = bodavm.memory.globalobj['TaskController']; console.log_copy(`window_TaskController`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Scheduler = function () { let arg = bodavm.memory.globalobj['Scheduler']; console.log_copy(`window_Scheduler`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RemotePlayback = function () { let arg = bodavm.memory.globalobj['RemotePlayback']; console.log_copy(`window_RemotePlayback`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PushSubscriptionOptions = function () { let arg = bodavm.memory.globalobj['PushSubscriptionOptions']; console.log_copy(`window_PushSubscriptionOptions`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PushSubscription = function () { let arg = bodavm.memory.globalobj['PushSubscription']; console.log_copy(`window_PushSubscription`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PushManager = function () { let arg = bodavm.memory.globalobj['PushManager']; console.log_copy(`window_PushManager`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PictureInPictureWindow = function () { let arg = bodavm.memory.globalobj['PictureInPictureWindow']; console.log_copy(`window_PictureInPictureWindow`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PictureInPictureEvent = function () { let arg = bodavm.memory.globalobj['PictureInPictureEvent']; console.log_copy(`window_PictureInPictureEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Permissions = function () { let arg = bodavm.memory.globalobj['Permissions']; console.log_copy(`window_Permissions`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PermissionStatus = function () { let arg = bodavm.memory.globalobj['PermissionStatus']; console.log_copy(`window_PermissionStatus`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PeriodicSyncManager = function () { let arg = bodavm.memory.globalobj['PeriodicSyncManager']; console.log_copy(`window_PeriodicSyncManager`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PaymentRequestUpdateEvent = function () { let arg = bodavm.memory.globalobj['PaymentRequestUpdateEvent']; console.log_copy(`window_PaymentRequestUpdateEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PaymentManager = function () { let arg = bodavm.memory.globalobj['PaymentManager']; console.log_copy(`window_PaymentManager`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PaymentInstruments = function () { let arg = bodavm.memory.globalobj['PaymentInstruments']; console.log_copy(`window_PaymentInstruments`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Notification = function () { let arg = bodavm.memory.globalobj['Notification']; console.log_copy(`window_Notification`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_NavigatorUAData = function () { let arg = bodavm.memory.globalobj['NavigatorUAData']; console.log_copy(`window_NavigatorUAData`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_NavigationTransition = function () { let arg = bodavm.memory.globalobj['NavigationTransition']; console.log_copy(`window_NavigationTransition`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_NavigationHistoryEntry = function () { let arg = bodavm.memory.globalobj['NavigationHistoryEntry']; console.log_copy(`window_NavigationHistoryEntry`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_NavigationDestination = function () { let arg = bodavm.memory.globalobj['NavigationDestination']; console.log_copy(`window_NavigationDestination`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_NavigationCurrentEntryChangeEvent = function () { let arg = bodavm.memory.globalobj['NavigationCurrentEntryChangeEvent']; console.log_copy(`window_NavigationCurrentEntryChangeEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_NavigateEvent = function () { let arg = bodavm.memory.globalobj['NavigateEvent']; console.log_copy(`window_NavigateEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaStreamTrack = function () { let arg = bodavm.memory.globalobj['MediaStreamTrack']; console.log_copy(`window_MediaStreamTrack`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SourceBufferList = function () { let arg = bodavm.memory.globalobj['SourceBufferList']; console.log_copy(`window_SourceBufferList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SourceBuffer = function () { let arg = bodavm.memory.globalobj['SourceBuffer']; console.log_copy(`window_SourceBuffer`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaSource = function () { let arg = bodavm.memory.globalobj['MediaSource']; console.log_copy(`window_MediaSource`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaSession = function () { let arg = bodavm.memory.globalobj['MediaSession']; console.log_copy(`window_MediaSession`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaMetadata = function () { let arg = bodavm.memory.globalobj['MediaMetadata']; console.log_copy(`window_MediaMetadata`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Ink = function () { let arg = bodavm.memory.globalobj['Ink']; console.log_copy(`window_Ink`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DelegatedInkTrailPresenter = function () { let arg = bodavm.memory.globalobj['DelegatedInkTrailPresenter']; console.log_copy(`window_DelegatedInkTrailPresenter`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CustomStateSet = function () { let arg = bodavm.memory.globalobj['CustomStateSet']; console.log_copy(`window_CustomStateSet`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CaptureHandleChangeEvent = function () { let arg = bodavm.memory.globalobj['CaptureHandleChangeEvent']; console.log_copy(`window_CaptureHandleChangeEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSFontPaletteValuesRule = function () { let arg = bodavm.memory.globalobj['CSSFontPaletteValuesRule']; console.log_copy(`window_CSSFontPaletteValuesRule`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_BluetoothUUID = function () { let arg = bodavm.memory.globalobj['BluetoothUUID']; console.log_copy(`window_BluetoothUUID`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_BackgroundFetchRegistration = function () { let arg = bodavm.memory.globalobj['BackgroundFetchRegistration']; console.log_copy(`window_BackgroundFetchRegistration`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_BackgroundFetchRecord = function () { let arg = bodavm.memory.globalobj['BackgroundFetchRecord']; console.log_copy(`window_BackgroundFetchRecord`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_BackgroundFetchManager = function () { let arg = bodavm.memory.globalobj['BackgroundFetchManager']; console.log_copy(`window_BackgroundFetchManager`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DocumentTimeline = function () { let arg = bodavm.memory.globalobj['DocumentTimeline']; console.log_copy(`window_DocumentTimeline`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSTransition = function () { let arg = bodavm.memory.globalobj['CSSTransition']; console.log_copy(`window_CSSTransition`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSAnimation = function () { let arg = bodavm.memory.globalobj['CSSAnimation']; console.log_copy(`window_CSSAnimation`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AnimationTimeline = function () { let arg = bodavm.memory.globalobj['AnimationTimeline']; console.log_copy(`window_AnimationTimeline`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AnimationPlaybackEvent = function () { let arg = bodavm.memory.globalobj['AnimationPlaybackEvent']; console.log_copy(`window_AnimationPlaybackEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_showSaveFilePicker = function () { let arg = bodavm.memory.globalobj['showSaveFilePicker']; console.log_copy(`window_showSaveFilePicker`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_showOpenFilePicker = function () { let arg = bodavm.memory.globalobj['showOpenFilePicker']; console.log_copy(`window_showOpenFilePicker`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_showDirectoryPicker = function () { let arg = bodavm.memory.globalobj['showDirectoryPicker']; console.log_copy(`window_showDirectoryPicker`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_getScreenDetails = function () { let arg = bodavm.memory.globalobj['getScreenDetails']; console.log_copy(`window_getScreenDetails`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRLightProbe = function () { let arg = bodavm.memory.globalobj['XRLightProbe']; console.log_copy(`window_XRLightProbe`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRLightEstimate = function () { let arg = bodavm.memory.globalobj['XRLightEstimate']; console.log_copy(`window_XRLightEstimate`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRTransientInputHitTestSource = function () { let arg = bodavm.memory.globalobj['XRTransientInputHitTestSource']; console.log_copy(`window_XRTransientInputHitTestSource`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRTransientInputHitTestResult = function () { let arg = bodavm.memory.globalobj['XRTransientInputHitTestResult']; console.log_copy(`window_XRTransientInputHitTestResult`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRRay = function () { let arg = bodavm.memory.globalobj['XRRay']; console.log_copy(`window_XRRay`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRHitTestSource = function () { let arg = bodavm.memory.globalobj['XRHitTestSource']; console.log_copy(`window_XRHitTestSource`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRHitTestResult = function () { let arg = bodavm.memory.globalobj['XRHitTestResult']; console.log_copy(`window_XRHitTestResult`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRWebGLDepthInformation = function () { let arg = bodavm.memory.globalobj['XRWebGLDepthInformation']; console.log_copy(`window_XRWebGLDepthInformation`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRDepthInformation = function () { let arg = bodavm.memory.globalobj['XRDepthInformation']; console.log_copy(`window_XRDepthInformation`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRCPUDepthInformation = function () { let arg = bodavm.memory.globalobj['XRCPUDepthInformation']; console.log_copy(`window_XRCPUDepthInformation`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRWebGLLayer = function () { let arg = bodavm.memory.globalobj['XRWebGLLayer']; console.log_copy(`window_XRWebGLLayer`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRViewport = function () { let arg = bodavm.memory.globalobj['XRViewport']; console.log_copy(`window_XRViewport`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRViewerPose = function () { let arg = bodavm.memory.globalobj['XRViewerPose']; console.log_copy(`window_XRViewerPose`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRView = function () { let arg = bodavm.memory.globalobj['XRView']; console.log_copy(`window_XRView`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRSystem = function () { let arg = bodavm.memory.globalobj['XRSystem']; console.log_copy(`window_XRSystem`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRSpace = function () { let arg = bodavm.memory.globalobj['XRSpace']; console.log_copy(`window_XRSpace`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRSessionEvent = function () { let arg = bodavm.memory.globalobj['XRSessionEvent']; console.log_copy(`window_XRSessionEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRSession = function () { let arg = bodavm.memory.globalobj['XRSession']; console.log_copy(`window_XRSession`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRRigidTransform = function () { let arg = bodavm.memory.globalobj['XRRigidTransform']; console.log_copy(`window_XRRigidTransform`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRRenderState = function () { let arg = bodavm.memory.globalobj['XRRenderState']; console.log_copy(`window_XRRenderState`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRReferenceSpaceEvent = function () { let arg = bodavm.memory.globalobj['XRReferenceSpaceEvent']; console.log_copy(`window_XRReferenceSpaceEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRReferenceSpace = function () { let arg = bodavm.memory.globalobj['XRReferenceSpace']; console.log_copy(`window_XRReferenceSpace`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRPose = function () { let arg = bodavm.memory.globalobj['XRPose']; console.log_copy(`window_XRPose`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRInputSourcesChangeEvent = function () { let arg = bodavm.memory.globalobj['XRInputSourcesChangeEvent']; console.log_copy(`window_XRInputSourcesChangeEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRInputSourceEvent = function () { let arg = bodavm.memory.globalobj['XRInputSourceEvent']; console.log_copy(`window_XRInputSourceEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRInputSourceArray = function () { let arg = bodavm.memory.globalobj['XRInputSourceArray']; console.log_copy(`window_XRInputSourceArray`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRInputSource = function () { let arg = bodavm.memory.globalobj['XRInputSource']; console.log_copy(`window_XRInputSource`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRFrame = function () { let arg = bodavm.memory.globalobj['XRFrame']; console.log_copy(`window_XRFrame`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRBoundedReferenceSpace = function () { let arg = bodavm.memory.globalobj['XRBoundedReferenceSpace']; console.log_copy(`window_XRBoundedReferenceSpace`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRAnchorSet = function () { let arg = bodavm.memory.globalobj['XRAnchorSet']; console.log_copy(`window_XRAnchorSet`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRAnchor = function () { let arg = bodavm.memory.globalobj['XRAnchor']; console.log_copy(`window_XRAnchor`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebTransportError = function () { let arg = bodavm.memory.globalobj['WebTransportError']; console.log_copy(`window_WebTransportError`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebTransportDatagramDuplexStream = function () { let arg = bodavm.memory.globalobj['WebTransportDatagramDuplexStream']; console.log_copy(`window_WebTransportDatagramDuplexStream`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebTransportBidirectionalStream = function () { let arg = bodavm.memory.globalobj['WebTransportBidirectionalStream']; console.log_copy(`window_WebTransportBidirectionalStream`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebTransport = function () { let arg = bodavm.memory.globalobj['WebTransport']; console.log_copy(`window_WebTransport`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WakeLockSentinel = function () { let arg = bodavm.memory.globalobj['WakeLockSentinel']; console.log_copy(`window_WakeLockSentinel`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WakeLock = function () { let arg = bodavm.memory.globalobj['WakeLock']; console.log_copy(`window_WakeLock`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_VirtualKeyboard = function () { let arg = bodavm.memory.globalobj['VirtualKeyboard']; console.log_copy(`window_VirtualKeyboard`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_USBOutTransferResult = function () { let arg = bodavm.memory.globalobj['USBOutTransferResult']; console.log_copy(`window_USBOutTransferResult`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_USBIsochronousOutTransferResult = function () { let arg = bodavm.memory.globalobj['USBIsochronousOutTransferResult']; console.log_copy(`window_USBIsochronousOutTransferResult`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_USBIsochronousOutTransferPacket = function () { let arg = bodavm.memory.globalobj['USBIsochronousOutTransferPacket']; console.log_copy(`window_USBIsochronousOutTransferPacket`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_USBIsochronousInTransferResult = function () { let arg = bodavm.memory.globalobj['USBIsochronousInTransferResult']; console.log_copy(`window_USBIsochronousInTransferResult`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_USBIsochronousInTransferPacket = function () { let arg = bodavm.memory.globalobj['USBIsochronousInTransferPacket']; console.log_copy(`window_USBIsochronousInTransferPacket`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_USBInterface = function () { let arg = bodavm.memory.globalobj['USBInterface']; console.log_copy(`window_USBInterface`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_USBInTransferResult = function () { let arg = bodavm.memory.globalobj['USBInTransferResult']; console.log_copy(`window_USBInTransferResult`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_USBEndpoint = function () { let arg = bodavm.memory.globalobj['USBEndpoint']; console.log_copy(`window_USBEndpoint`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_USBDevice = function () { let arg = bodavm.memory.globalobj['USBDevice']; console.log_copy(`window_USBDevice`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_USBConnectionEvent = function () { let arg = bodavm.memory.globalobj['USBConnectionEvent']; console.log_copy(`window_USBConnectionEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_USBConfiguration = function () { let arg = bodavm.memory.globalobj['USBConfiguration']; console.log_copy(`window_USBConfiguration`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_USBAlternateInterface = function () { let arg = bodavm.memory.globalobj['USBAlternateInterface']; console.log_copy(`window_USBAlternateInterface`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_USB = function () { let arg = bodavm.memory.globalobj['USB']; console.log_copy(`window_USB`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SerialPort = function () { let arg = bodavm.memory.globalobj['SerialPort']; console.log_copy(`window_SerialPort`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Serial = function () { let arg = bodavm.memory.globalobj['Serial']; console.log_copy(`window_Serial`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ScreenDetails = function () { let arg = bodavm.memory.globalobj['ScreenDetails']; console.log_copy(`window_ScreenDetails`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ScreenDetailed = function () { let arg = bodavm.memory.globalobj['ScreenDetailed']; console.log_copy(`window_ScreenDetailed`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Scheduling = function () { let arg = bodavm.memory.globalobj['Scheduling']; console.log_copy(`window_Scheduling`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Profiler = function () { let arg = bodavm.memory.globalobj['Profiler']; console.log_copy(`window_Profiler`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PresentationRequest = function () { let arg = bodavm.memory.globalobj['PresentationRequest']; console.log_copy(`window_PresentationRequest`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PresentationReceiver = function () { let arg = bodavm.memory.globalobj['PresentationReceiver']; console.log_copy(`window_PresentationReceiver`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PresentationConnectionList = function () { let arg = bodavm.memory.globalobj['PresentationConnectionList']; console.log_copy(`window_PresentationConnectionList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PresentationConnectionCloseEvent = function () { let arg = bodavm.memory.globalobj['PresentationConnectionCloseEvent']; console.log_copy(`window_PresentationConnectionCloseEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PresentationConnectionAvailableEvent = function () { let arg = bodavm.memory.globalobj['PresentationConnectionAvailableEvent']; console.log_copy(`window_PresentationConnectionAvailableEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PresentationConnection = function () { let arg = bodavm.memory.globalobj['PresentationConnection']; console.log_copy(`window_PresentationConnection`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PresentationAvailability = function () { let arg = bodavm.memory.globalobj['PresentationAvailability']; console.log_copy(`window_PresentationAvailability`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Presentation = function () { let arg = bodavm.memory.globalobj['Presentation']; console.log_copy(`window_Presentation`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PaymentMethodChangeEvent = function () { let arg = bodavm.memory.globalobj['PaymentMethodChangeEvent']; console.log_copy(`window_PaymentMethodChangeEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PaymentResponse = function () { let arg = bodavm.memory.globalobj['PaymentResponse']; console.log_copy(`window_PaymentResponse`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PaymentRequest = function () { let arg = bodavm.memory.globalobj['PaymentRequest']; console.log_copy(`window_PaymentRequest`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PaymentAddress = function () { let arg = bodavm.memory.globalobj['PaymentAddress']; console.log_copy(`window_PaymentAddress`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_OTPCredential = function () { let arg = bodavm.memory.globalobj['OTPCredential']; console.log_copy(`window_OTPCredential`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaStreamTrackProcessor = function () { let arg = bodavm.memory.globalobj['MediaStreamTrackProcessor']; console.log_copy(`window_MediaStreamTrackProcessor`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaStreamTrackGenerator = function () { let arg = bodavm.memory.globalobj['MediaStreamTrackGenerator']; console.log_copy(`window_MediaStreamTrackGenerator`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_IdleDetector = function () { let arg = bodavm.memory.globalobj['IdleDetector']; console.log_copy(`window_IdleDetector`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HIDInputReportEvent = function () { let arg = bodavm.memory.globalobj['HIDInputReportEvent']; console.log_copy(`window_HIDInputReportEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HIDDevice = function () { let arg = bodavm.memory.globalobj['HIDDevice']; console.log_copy(`window_HIDDevice`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HIDConnectionEvent = function () { let arg = bodavm.memory.globalobj['HIDConnectionEvent']; console.log_copy(`window_HIDConnectionEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HID = function () { let arg = bodavm.memory.globalobj['HID']; console.log_copy(`window_HID`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_GravitySensor = function () { let arg = bodavm.memory.globalobj['GravitySensor']; console.log_copy(`window_GravitySensor`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_FragmentDirective = function () { let arg = bodavm.memory.globalobj['FragmentDirective']; console.log_copy(`window_FragmentDirective`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_FileSystemWritableFileStream = function () { let arg = bodavm.memory.globalobj['FileSystemWritableFileStream']; console.log_copy(`window_FileSystemWritableFileStream`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_FileSystemHandle = function () { let arg = bodavm.memory.globalobj['FileSystemHandle']; console.log_copy(`window_FileSystemHandle`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_FileSystemFileHandle = function () { let arg = bodavm.memory.globalobj['FileSystemFileHandle']; console.log_copy(`window_FileSystemFileHandle`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_FileSystemDirectoryHandle = function () { let arg = bodavm.memory.globalobj['FileSystemDirectoryHandle']; console.log_copy(`window_FileSystemDirectoryHandle`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_EyeDropper = function () { let arg = bodavm.memory.globalobj['EyeDropper']; console.log_copy(`window_EyeDropper`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_BluetoothRemoteGATTService = function () { let arg = bodavm.memory.globalobj['BluetoothRemoteGATTService']; console.log_copy(`window_BluetoothRemoteGATTService`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_BluetoothRemoteGATTServer = function () { let arg = bodavm.memory.globalobj['BluetoothRemoteGATTServer']; console.log_copy(`window_BluetoothRemoteGATTServer`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_BluetoothRemoteGATTDescriptor = function () { let arg = bodavm.memory.globalobj['BluetoothRemoteGATTDescriptor']; console.log_copy(`window_BluetoothRemoteGATTDescriptor`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_BluetoothRemoteGATTCharacteristic = function () { let arg = bodavm.memory.globalobj['BluetoothRemoteGATTCharacteristic']; console.log_copy(`window_BluetoothRemoteGATTCharacteristic`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_BluetoothDevice = function () { let arg = bodavm.memory.globalobj['BluetoothDevice']; console.log_copy(`window_BluetoothDevice`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_BluetoothCharacteristicProperties = function () { let arg = bodavm.memory.globalobj['BluetoothCharacteristicProperties']; console.log_copy(`window_BluetoothCharacteristicProperties`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Bluetooth = function () { let arg = bodavm.memory.globalobj['Bluetooth']; console.log_copy(`window_Bluetooth`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PublicKeyCredential = function () { let arg = bodavm.memory.globalobj['PublicKeyCredential']; console.log_copy(`window_PublicKeyCredential`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AuthenticatorResponse = function () { let arg = bodavm.memory.globalobj['AuthenticatorResponse']; console.log_copy(`window_AuthenticatorResponse`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AuthenticatorAttestationResponse = function () { let arg = bodavm.memory.globalobj['AuthenticatorAttestationResponse']; console.log_copy(`window_AuthenticatorAttestationResponse`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AuthenticatorAssertionResponse = function () { let arg = bodavm.memory.globalobj['AuthenticatorAssertionResponse']; console.log_copy(`window_AuthenticatorAssertionResponse`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_VideoEncoder = function () { let arg = bodavm.memory.globalobj['VideoEncoder']; console.log_copy(`window_VideoEncoder`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_VideoDecoder = function () { let arg = bodavm.memory.globalobj['VideoDecoder']; console.log_copy(`window_VideoDecoder`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ImageDecoder = function () { let arg = bodavm.memory.globalobj['ImageDecoder']; console.log_copy(`window_ImageDecoder`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AudioEncoder = function () { let arg = bodavm.memory.globalobj['AudioEncoder']; console.log_copy(`window_AudioEncoder`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AudioDecoder = function () { let arg = bodavm.memory.globalobj['AudioDecoder']; console.log_copy(`window_AudioDecoder`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_VideoFrame = function () { let arg = bodavm.memory.globalobj['VideoFrame']; console.log_copy(`window_VideoFrame`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_VideoColorSpace = function () { let arg = bodavm.memory.globalobj['VideoColorSpace']; console.log_copy(`window_VideoColorSpace`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ImageTrackList = function () { let arg = bodavm.memory.globalobj['ImageTrackList']; console.log_copy(`window_ImageTrackList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ImageTrack = function () { let arg = bodavm.memory.globalobj['ImageTrack']; console.log_copy(`window_ImageTrack`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_EncodedVideoChunk = function () { let arg = bodavm.memory.globalobj['EncodedVideoChunk']; console.log_copy(`window_EncodedVideoChunk`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_EncodedAudioChunk = function () { let arg = bodavm.memory.globalobj['EncodedAudioChunk']; console.log_copy(`window_EncodedAudioChunk`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AudioData = function () { let arg = bodavm.memory.globalobj['AudioData']; console.log_copy(`window_AudioData`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRWebGLBinding = function () { let arg = bodavm.memory.globalobj['XRWebGLBinding']; console.log_copy(`window_XRWebGLBinding`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRLayer = function () { let arg = bodavm.memory.globalobj['XRLayer']; console.log_copy(`window_XRLayer`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XRDOMOverlayState = function () { let arg = bodavm.memory.globalobj['XRDOMOverlayState']; console.log_copy(`window_XRDOMOverlayState`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Worklet = function () { let arg = bodavm.memory.globalobj['Worklet']; console.log_copy(`window_Worklet`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SubtleCrypto = function () { let arg = bodavm.memory.globalobj['SubtleCrypto']; console.log_copy(`window_SubtleCrypto`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_StorageManager = function () { let arg = bodavm.memory.globalobj['StorageManager']; console.log_copy(`window_StorageManager`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ServiceWorkerRegistration = function () { let arg = bodavm.memory.globalobj['ServiceWorkerRegistration']; console.log_copy(`window_ServiceWorkerRegistration`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ServiceWorkerContainer = function () { let arg = bodavm.memory.globalobj['ServiceWorkerContainer']; console.log_copy(`window_ServiceWorkerContainer`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ServiceWorker = function () { let arg = bodavm.memory.globalobj['ServiceWorker']; console.log_copy(`window_ServiceWorker`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SensorErrorEvent = function () { let arg = bodavm.memory.globalobj['SensorErrorEvent']; console.log_copy(`window_SensorErrorEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Sensor = function () { let arg = bodavm.memory.globalobj['Sensor']; console.log_copy(`window_Sensor`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RelativeOrientationSensor = function () { let arg = bodavm.memory.globalobj['RelativeOrientationSensor']; console.log_copy(`window_RelativeOrientationSensor`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCIceTransport = function () { let arg = bodavm.memory.globalobj['RTCIceTransport']; console.log_copy(`window_RTCIceTransport`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PasswordCredential = function () { let arg = bodavm.memory.globalobj['PasswordCredential']; console.log_copy(`window_PasswordCredential`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_OrientationSensor = function () { let arg = bodavm.memory.globalobj['OrientationSensor']; console.log_copy(`window_OrientationSensor`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_NavigatorManagedData = function () { let arg = bodavm.memory.globalobj['NavigatorManagedData']; console.log_copy(`window_NavigatorManagedData`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_NavigationPreloadManager = function () { let arg = bodavm.memory.globalobj['NavigationPreloadManager']; console.log_copy(`window_NavigationPreloadManager`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaKeys = function () { let arg = bodavm.memory.globalobj['MediaKeys']; console.log_copy(`window_MediaKeys`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaKeySystemAccess = function () { let arg = bodavm.memory.globalobj['MediaKeySystemAccess']; console.log_copy(`window_MediaKeySystemAccess`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaKeyStatusMap = function () { let arg = bodavm.memory.globalobj['MediaKeyStatusMap']; console.log_copy(`window_MediaKeyStatusMap`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaKeySession = function () { let arg = bodavm.memory.globalobj['MediaKeySession']; console.log_copy(`window_MediaKeySession`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaKeyMessageEvent = function () { let arg = bodavm.memory.globalobj['MediaKeyMessageEvent']; console.log_copy(`window_MediaKeyMessageEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaDevices = function () { let arg = bodavm.memory.globalobj['MediaDevices']; console.log_copy(`window_MediaDevices`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaDeviceInfo = function () { let arg = bodavm.memory.globalobj['MediaDeviceInfo']; console.log_copy(`window_MediaDeviceInfo`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MIDIPort = function () { let arg = bodavm.memory.globalobj['MIDIPort']; console.log_copy(`window_MIDIPort`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MIDIOutputMap = function () { let arg = bodavm.memory.globalobj['MIDIOutputMap']; console.log_copy(`window_MIDIOutputMap`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MIDIOutput = function () { let arg = bodavm.memory.globalobj['MIDIOutput']; console.log_copy(`window_MIDIOutput`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MIDIMessageEvent = function () { let arg = bodavm.memory.globalobj['MIDIMessageEvent']; console.log_copy(`window_MIDIMessageEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MIDIInputMap = function () { let arg = bodavm.memory.globalobj['MIDIInputMap']; console.log_copy(`window_MIDIInputMap`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MIDIInput = function () { let arg = bodavm.memory.globalobj['MIDIInput']; console.log_copy(`window_MIDIInput`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MIDIConnectionEvent = function () { let arg = bodavm.memory.globalobj['MIDIConnectionEvent']; console.log_copy(`window_MIDIConnectionEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MIDIAccess = function () { let arg = bodavm.memory.globalobj['MIDIAccess']; console.log_copy(`window_MIDIAccess`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_LockManager = function () { let arg = bodavm.memory.globalobj['LockManager']; console.log_copy(`window_LockManager`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Lock = function () { let arg = bodavm.memory.globalobj['Lock']; console.log_copy(`window_Lock`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_LinearAccelerationSensor = function () { let arg = bodavm.memory.globalobj['LinearAccelerationSensor']; console.log_copy(`window_LinearAccelerationSensor`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_KeyboardLayoutMap = function () { let arg = bodavm.memory.globalobj['KeyboardLayoutMap']; console.log_copy(`window_KeyboardLayoutMap`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Keyboard = function () { let arg = bodavm.memory.globalobj['Keyboard']; console.log_copy(`window_Keyboard`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Gyroscope = function () { let arg = bodavm.memory.globalobj['Gyroscope']; console.log_copy(`window_Gyroscope`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_FederatedCredential = function () { let arg = bodavm.memory.globalobj['FederatedCredential']; console.log_copy(`window_FederatedCredential`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DeviceOrientationEvent = function () { let arg = bodavm.memory.globalobj['DeviceOrientationEvent']; console.log_copy(`window_DeviceOrientationEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DeviceMotionEventRotationRate = function () { let arg = bodavm.memory.globalobj['DeviceMotionEventRotationRate']; console.log_copy(`window_DeviceMotionEventRotationRate`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DeviceMotionEventAcceleration = function () { let arg = bodavm.memory.globalobj['DeviceMotionEventAcceleration']; console.log_copy(`window_DeviceMotionEventAcceleration`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DeviceMotionEvent = function () { let arg = bodavm.memory.globalobj['DeviceMotionEvent']; console.log_copy(`window_DeviceMotionEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CryptoKey = function () { let arg = bodavm.memory.globalobj['CryptoKey']; console.log_copy(`window_CryptoKey`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CredentialsContainer = function () { let arg = bodavm.memory.globalobj['CredentialsContainer']; console.log_copy(`window_CredentialsContainer`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Credential = function () { let arg = bodavm.memory.globalobj['Credential']; console.log_copy(`window_Credential`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CookieStoreManager = function () { let arg = bodavm.memory.globalobj['CookieStoreManager']; console.log_copy(`window_CookieStoreManager`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CookieChangeEvent = function () { let arg = bodavm.memory.globalobj['CookieChangeEvent']; console.log_copy(`window_CookieChangeEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ClipboardItem = function () { let arg = bodavm.memory.globalobj['ClipboardItem']; console.log_copy(`window_ClipboardItem`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Clipboard = function () { let arg = bodavm.memory.globalobj['Clipboard']; console.log_copy(`window_Clipboard`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Cache = function () { let arg = bodavm.memory.globalobj['Cache']; console.log_copy(`window_Cache`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AudioWorklet = function () { let arg = bodavm.memory.globalobj['AudioWorklet']; console.log_copy(`window_AudioWorklet`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Accelerometer = function () { let arg = bodavm.memory.globalobj['Accelerometer']; console.log_copy(`window_Accelerometer`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AbsoluteOrientationSensor = function () { let arg = bodavm.memory.globalobj['AbsoluteOrientationSensor']; console.log_copy(`window_AbsoluteOrientationSensor`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_webkitRequestAnimationFrame = function () { let arg = bodavm.memory.globalobj['webkitRequestAnimationFrame']; console.log_copy(`window_webkitRequestAnimationFrame`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_webkitCancelAnimationFrame = function () { let arg = bodavm.memory.globalobj['webkitCancelAnimationFrame']; console.log_copy(`window_webkitCancelAnimationFrame`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_structuredClone = function () { let arg = bodavm.memory.globalobj['structuredClone']; console.log_copy(`window_structuredClone`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_stop = function () { let arg = bodavm.memory.globalobj['stop']; console.log_copy(`window_stop`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_scrollTo = function () { let arg = bodavm.memory.globalobj['scrollTo']; console.log_copy(`window_scrollTo`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_scrollBy = function () { let arg = bodavm.memory.globalobj['scrollBy']; console.log_copy(`window_scrollBy`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_scroll = function () { let arg = bodavm.memory.globalobj['scroll']; console.log_copy(`window_scroll`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_resizeTo = function () { let arg = bodavm.memory.globalobj['resizeTo']; console.log_copy(`window_resizeTo`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_resizeBy = function () { let arg = bodavm.memory.globalobj['resizeBy']; console.log_copy(`window_resizeBy`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_requestIdleCallback = function () { let arg = bodavm.memory.globalobj['requestIdleCallback']; console.log_copy(`window_requestIdleCallback`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_requestAnimationFrame = function () { let arg = bodavm.memory.globalobj['requestAnimationFrame']; console.log_copy(`window_requestAnimationFrame`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_reportError = function () { let arg = bodavm.memory.globalobj['reportError']; console.log_copy(`window_reportError`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_releaseEvents = function () { let arg = bodavm.memory.globalobj['releaseEvents']; console.log_copy(`window_releaseEvents`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_queueMicrotask = function () { let arg = bodavm.memory.globalobj['queueMicrotask']; console.log_copy(`window_queueMicrotask`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_prompt = function () { let arg = bodavm.memory.globalobj['prompt']; console.log_copy(`window_prompt`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_print = function () { let arg = bodavm.memory.globalobj['print']; console.log_copy(`window_print`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_postMessage = function () { let arg = bodavm.memory.globalobj['postMessage']; console.log_copy(`window_postMessage`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_open = function () { let arg = bodavm.memory.globalobj['open']; console.log_copy(`window_open`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_moveTo = function () { let arg = bodavm.memory.globalobj['moveTo']; console.log_copy(`window_moveTo`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_moveBy = function () { let arg = bodavm.memory.globalobj['moveBy']; console.log_copy(`window_moveBy`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_getSelection = function () { let arg = bodavm.memory.globalobj['getSelection']; console.log_copy(`window_getSelection`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_getComputedStyle = function () { let arg = bodavm.memory.globalobj['getComputedStyle']; console.log_copy(`window_getComputedStyle`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_focus = function () { let arg = bodavm.memory.globalobj['focus']; console.log_copy(`window_focus`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_find = function () { let arg = bodavm.memory.globalobj['find']; console.log_copy(`window_find`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_fetch = function () { let arg = bodavm.memory.globalobj['fetch']; console.log_copy(`window_fetch`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_createImageBitmap = function () { let arg = bodavm.memory.globalobj['createImageBitmap']; console.log_copy(`window_createImageBitmap`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_confirm = function () { let arg = bodavm.memory.globalobj['confirm']; console.log_copy(`window_confirm`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_close = function () { let arg = bodavm.memory.globalobj['close']; console.log_copy(`window_close`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_clearTimeout = function () { let arg = bodavm.memory.globalobj['clearTimeout']; console.log_copy(`window_clearTimeout`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_clearInterval = function () { let arg = bodavm.memory.globalobj['clearInterval']; console.log_copy(`window_clearInterval`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_captureEvents = function () { let arg = bodavm.memory.globalobj['captureEvents']; console.log_copy(`window_captureEvents`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_cancelIdleCallback = function () { let arg = bodavm.memory.globalobj['cancelIdleCallback']; console.log_copy(`window_cancelIdleCallback`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_cancelAnimationFrame = function () { let arg = bodavm.memory.globalobj['cancelAnimationFrame']; console.log_copy(`window_cancelAnimationFrame`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AbortController = function () { let arg = bodavm.memory.globalobj['AbortController']; console.log_copy(`window_AbortController`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AbortSignal = function () { let arg = bodavm.memory.globalobj['AbortSignal']; console.log_copy(`window_AbortSignal`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AbstractRange = function () { let arg = bodavm.memory.globalobj['AbstractRange']; console.log_copy(`window_AbstractRange`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AnalyserNode = function () { let arg = bodavm.memory.globalobj['AnalyserNode']; console.log_copy(`window_AnalyserNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Animation = function () { let arg = bodavm.memory.globalobj['Animation']; console.log_copy(`window_Animation`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AnimationEffect = function () { let arg = bodavm.memory.globalobj['AnimationEffect']; console.log_copy(`window_AnimationEffect`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AnimationEvent = function () { let arg = bodavm.memory.globalobj['AnimationEvent']; console.log_copy(`window_AnimationEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Attr = function () { let arg = bodavm.memory.globalobj['Attr']; console.log_copy(`window_Attr`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AudioBuffer = function () { let arg = bodavm.memory.globalobj['AudioBuffer']; console.log_copy(`window_AudioBuffer`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AudioBufferSourceNode = function () { let arg = bodavm.memory.globalobj['AudioBufferSourceNode']; console.log_copy(`window_AudioBufferSourceNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AudioContext = function () { let arg = bodavm.memory.globalobj['AudioContext']; console.log_copy(`window_AudioContext`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AudioDestinationNode = function () { let arg = bodavm.memory.globalobj['AudioDestinationNode']; console.log_copy(`window_AudioDestinationNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AudioListener = function () { let arg = bodavm.memory.globalobj['AudioListener']; console.log_copy(`window_AudioListener`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AudioNode = function () { let arg = bodavm.memory.globalobj['AudioNode']; console.log_copy(`window_AudioNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AudioParam = function () { let arg = bodavm.memory.globalobj['AudioParam']; console.log_copy(`window_AudioParam`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AudioParamMap = function () { let arg = bodavm.memory.globalobj['AudioParamMap']; console.log_copy(`window_AudioParamMap`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AudioProcessingEvent = function () { let arg = bodavm.memory.globalobj['AudioProcessingEvent']; console.log_copy(`window_AudioProcessingEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AudioScheduledSourceNode = function () { let arg = bodavm.memory.globalobj['AudioScheduledSourceNode']; console.log_copy(`window_AudioScheduledSourceNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_AudioWorkletNode = function () { let arg = bodavm.memory.globalobj['AudioWorkletNode']; console.log_copy(`window_AudioWorkletNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_BaseAudioContext = function () { let arg = bodavm.memory.globalobj['BaseAudioContext']; console.log_copy(`window_BaseAudioContext`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_BatteryManager = function () { let arg = bodavm.memory.globalobj['BatteryManager']; console.log_copy(`window_BatteryManager`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_BeforeInstallPromptEvent = function () { let arg = bodavm.memory.globalobj['BeforeInstallPromptEvent']; console.log_copy(`window_BeforeInstallPromptEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_BeforeUnloadEvent = function () { let arg = bodavm.memory.globalobj['BeforeUnloadEvent']; console.log_copy(`window_BeforeUnloadEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_BiquadFilterNode = function () { let arg = bodavm.memory.globalobj['BiquadFilterNode']; console.log_copy(`window_BiquadFilterNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Blob = function () { let arg = bodavm.memory.globalobj['Blob']; console.log_copy(`window_Blob`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_BlobEvent = function () { let arg = bodavm.memory.globalobj['BlobEvent']; console.log_copy(`window_BlobEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_BroadcastChannel = function () { let arg = bodavm.memory.globalobj['BroadcastChannel']; console.log_copy(`window_BroadcastChannel`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ByteLengthQueuingStrategy = function () { let arg = bodavm.memory.globalobj['ByteLengthQueuingStrategy']; console.log_copy(`window_ByteLengthQueuingStrategy`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CDATASection = function () { let arg = bodavm.memory.globalobj['CDATASection']; console.log_copy(`window_CDATASection`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSConditionRule = function () { let arg = bodavm.memory.globalobj['CSSConditionRule']; console.log_copy(`window_CSSConditionRule`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSCounterStyleRule = function () { let arg = bodavm.memory.globalobj['CSSCounterStyleRule']; console.log_copy(`window_CSSCounterStyleRule`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSFontFaceRule = function () { let arg = bodavm.memory.globalobj['CSSFontFaceRule']; console.log_copy(`window_CSSFontFaceRule`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSGroupingRule = function () { let arg = bodavm.memory.globalobj['CSSGroupingRule']; console.log_copy(`window_CSSGroupingRule`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSImageValue = function () { let arg = bodavm.memory.globalobj['CSSImageValue']; console.log_copy(`window_CSSImageValue`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSImportRule = function () { let arg = bodavm.memory.globalobj['CSSImportRule']; console.log_copy(`window_CSSImportRule`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSKeyframeRule = function () { let arg = bodavm.memory.globalobj['CSSKeyframeRule']; console.log_copy(`window_CSSKeyframeRule`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSKeyframesRule = function () { let arg = bodavm.memory.globalobj['CSSKeyframesRule']; console.log_copy(`window_CSSKeyframesRule`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSKeywordValue = function () { let arg = bodavm.memory.globalobj['CSSKeywordValue']; console.log_copy(`window_CSSKeywordValue`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSLayerBlockRule = function () { let arg = bodavm.memory.globalobj['CSSLayerBlockRule']; console.log_copy(`window_CSSLayerBlockRule`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSLayerStatementRule = function () { let arg = bodavm.memory.globalobj['CSSLayerStatementRule']; console.log_copy(`window_CSSLayerStatementRule`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSMathClamp = function () { let arg = bodavm.memory.globalobj['CSSMathClamp']; console.log_copy(`window_CSSMathClamp`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSMathInvert = function () { let arg = bodavm.memory.globalobj['CSSMathInvert']; console.log_copy(`window_CSSMathInvert`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSMathMax = function () { let arg = bodavm.memory.globalobj['CSSMathMax']; console.log_copy(`window_CSSMathMax`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSMathMin = function () { let arg = bodavm.memory.globalobj['CSSMathMin']; console.log_copy(`window_CSSMathMin`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSMathNegate = function () { let arg = bodavm.memory.globalobj['CSSMathNegate']; console.log_copy(`window_CSSMathNegate`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSMathProduct = function () { let arg = bodavm.memory.globalobj['CSSMathProduct']; console.log_copy(`window_CSSMathProduct`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSMathSum = function () { let arg = bodavm.memory.globalobj['CSSMathSum']; console.log_copy(`window_CSSMathSum`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSMathValue = function () { let arg = bodavm.memory.globalobj['CSSMathValue']; console.log_copy(`window_CSSMathValue`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSMatrixComponent = function () { let arg = bodavm.memory.globalobj['CSSMatrixComponent']; console.log_copy(`window_CSSMatrixComponent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSMediaRule = function () { let arg = bodavm.memory.globalobj['CSSMediaRule']; console.log_copy(`window_CSSMediaRule`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSNamespaceRule = function () { let arg = bodavm.memory.globalobj['CSSNamespaceRule']; console.log_copy(`window_CSSNamespaceRule`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSNumericArray = function () { let arg = bodavm.memory.globalobj['CSSNumericArray']; console.log_copy(`window_CSSNumericArray`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSNumericValue = function () { let arg = bodavm.memory.globalobj['CSSNumericValue']; console.log_copy(`window_CSSNumericValue`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSPageRule = function () { let arg = bodavm.memory.globalobj['CSSPageRule']; console.log_copy(`window_CSSPageRule`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSPerspective = function () { let arg = bodavm.memory.globalobj['CSSPerspective']; console.log_copy(`window_CSSPerspective`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSPositionValue = function () { let arg = bodavm.memory.globalobj['CSSPositionValue']; console.log_copy(`window_CSSPositionValue`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSPropertyRule = function () { let arg = bodavm.memory.globalobj['CSSPropertyRule']; console.log_copy(`window_CSSPropertyRule`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSRotate = function () { let arg = bodavm.memory.globalobj['CSSRotate']; console.log_copy(`window_CSSRotate`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSRule = function () { let arg = bodavm.memory.globalobj['CSSRule']; console.log_copy(`window_CSSRule`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSRuleList = function () { let arg = bodavm.memory.globalobj['CSSRuleList']; console.log_copy(`window_CSSRuleList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSScale = function () { let arg = bodavm.memory.globalobj['CSSScale']; console.log_copy(`window_CSSScale`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSSkew = function () { let arg = bodavm.memory.globalobj['CSSSkew']; console.log_copy(`window_CSSSkew`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSSkewX = function () { let arg = bodavm.memory.globalobj['CSSSkewX']; console.log_copy(`window_CSSSkewX`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSSkewY = function () { let arg = bodavm.memory.globalobj['CSSSkewY']; console.log_copy(`window_CSSSkewY`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSStyleDeclaration = function () { let arg = bodavm.memory.globalobj['CSSStyleDeclaration']; console.log_copy(`window_CSSStyleDeclaration`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSStyleRule = function () { let arg = bodavm.memory.globalobj['CSSStyleRule']; console.log_copy(`window_CSSStyleRule`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSStyleSheet = function () { let arg = bodavm.memory.globalobj['CSSStyleSheet']; console.log_copy(`window_CSSStyleSheet`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSStyleValue = function () { let arg = bodavm.memory.globalobj['CSSStyleValue']; console.log_copy(`window_CSSStyleValue`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSSupportsRule = function () { let arg = bodavm.memory.globalobj['CSSSupportsRule']; console.log_copy(`window_CSSSupportsRule`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSTransformComponent = function () { let arg = bodavm.memory.globalobj['CSSTransformComponent']; console.log_copy(`window_CSSTransformComponent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSTransformValue = function () { let arg = bodavm.memory.globalobj['CSSTransformValue']; console.log_copy(`window_CSSTransformValue`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSTranslate = function () { let arg = bodavm.memory.globalobj['CSSTranslate']; console.log_copy(`window_CSSTranslate`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSUnitValue = function () { let arg = bodavm.memory.globalobj['CSSUnitValue']; console.log_copy(`window_CSSUnitValue`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSUnparsedValue = function () { let arg = bodavm.memory.globalobj['CSSUnparsedValue']; console.log_copy(`window_CSSUnparsedValue`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CSSVariableReferenceValue = function () { let arg = bodavm.memory.globalobj['CSSVariableReferenceValue']; console.log_copy(`window_CSSVariableReferenceValue`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CanvasCaptureMediaStreamTrack = function () { let arg = bodavm.memory.globalobj['CanvasCaptureMediaStreamTrack']; console.log_copy(`window_CanvasCaptureMediaStreamTrack`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CanvasFilter = function () { let arg = bodavm.memory.globalobj['CanvasFilter']; console.log_copy(`window_CanvasFilter`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CanvasGradient = function () { let arg = bodavm.memory.globalobj['CanvasGradient']; console.log_copy(`window_CanvasGradient`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CanvasPattern = function () { let arg = bodavm.memory.globalobj['CanvasPattern']; console.log_copy(`window_CanvasPattern`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CanvasRenderingContext2D = function () { let arg = bodavm.memory.globalobj['CanvasRenderingContext2D']; console.log_copy(`window_CanvasRenderingContext2D`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ChannelMergerNode = function () { let arg = bodavm.memory.globalobj['ChannelMergerNode']; console.log_copy(`window_ChannelMergerNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ChannelSplitterNode = function () { let arg = bodavm.memory.globalobj['ChannelSplitterNode']; console.log_copy(`window_ChannelSplitterNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CharacterData = function () { let arg = bodavm.memory.globalobj['CharacterData']; console.log_copy(`window_CharacterData`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ClipboardEvent = function () { let arg = bodavm.memory.globalobj['ClipboardEvent']; console.log_copy(`window_ClipboardEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CloseEvent = function () { let arg = bodavm.memory.globalobj['CloseEvent']; console.log_copy(`window_CloseEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Comment = function () { let arg = bodavm.memory.globalobj['Comment']; console.log_copy(`window_Comment`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CompositionEvent = function () { let arg = bodavm.memory.globalobj['CompositionEvent']; console.log_copy(`window_CompositionEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CompressionStream = function () { let arg = bodavm.memory.globalobj['CompressionStream']; console.log_copy(`window_CompressionStream`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ConstantSourceNode = function () { let arg = bodavm.memory.globalobj['ConstantSourceNode']; console.log_copy(`window_ConstantSourceNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ConvolverNode = function () { let arg = bodavm.memory.globalobj['ConvolverNode']; console.log_copy(`window_ConvolverNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CountQueuingStrategy = function () { let arg = bodavm.memory.globalobj['CountQueuingStrategy']; console.log_copy(`window_CountQueuingStrategy`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Crypto = function () { let arg = bodavm.memory.globalobj['Crypto']; console.log_copy(`window_Crypto`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_CustomEvent = function () { let arg = bodavm.memory.globalobj['CustomEvent']; console.log_copy(`window_CustomEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DOMError = function () { let arg = bodavm.memory.globalobj['DOMError']; console.log_copy(`window_DOMError`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DOMException = function () { let arg = bodavm.memory.globalobj['DOMException']; console.log_copy(`window_DOMException`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DOMImplementation = function () { let arg = bodavm.memory.globalobj['DOMImplementation']; console.log_copy(`window_DOMImplementation`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DOMMatrix = function () { let arg = bodavm.memory.globalobj['DOMMatrix']; console.log_copy(`window_DOMMatrix`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DOMMatrixReadOnly = function () { let arg = bodavm.memory.globalobj['DOMMatrixReadOnly']; console.log_copy(`window_DOMMatrixReadOnly`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DOMParser = function () { let arg = bodavm.memory.globalobj['DOMParser']; console.log_copy(`window_DOMParser`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DOMPoint = function () { let arg = bodavm.memory.globalobj['DOMPoint']; console.log_copy(`window_DOMPoint`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DOMPointReadOnly = function () { let arg = bodavm.memory.globalobj['DOMPointReadOnly']; console.log_copy(`window_DOMPointReadOnly`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DOMQuad = function () { let arg = bodavm.memory.globalobj['DOMQuad']; console.log_copy(`window_DOMQuad`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DOMRect = function () { let arg = bodavm.memory.globalobj['DOMRect']; console.log_copy(`window_DOMRect`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DOMRectList = function () { let arg = bodavm.memory.globalobj['DOMRectList']; console.log_copy(`window_DOMRectList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DOMRectReadOnly = function () { let arg = bodavm.memory.globalobj['DOMRectReadOnly']; console.log_copy(`window_DOMRectReadOnly`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DOMStringList = function () { let arg = bodavm.memory.globalobj['DOMStringList']; console.log_copy(`window_DOMStringList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DOMStringMap = function () { let arg = bodavm.memory.globalobj['DOMStringMap']; console.log_copy(`window_DOMStringMap`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DOMTokenList = function () { let arg = bodavm.memory.globalobj['DOMTokenList']; console.log_copy(`window_DOMTokenList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DataTransfer = function () { let arg = bodavm.memory.globalobj['DataTransfer']; console.log_copy(`window_DataTransfer`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DataTransferItem = function () { let arg = bodavm.memory.globalobj['DataTransferItem']; console.log_copy(`window_DataTransferItem`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DataTransferItemList = function () { let arg = bodavm.memory.globalobj['DataTransferItemList']; console.log_copy(`window_DataTransferItemList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DecompressionStream = function () { let arg = bodavm.memory.globalobj['DecompressionStream']; console.log_copy(`window_DecompressionStream`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DelayNode = function () { let arg = bodavm.memory.globalobj['DelayNode']; console.log_copy(`window_DelayNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DocumentFragment = function () { let arg = bodavm.memory.globalobj['DocumentFragment']; console.log_copy(`window_DocumentFragment`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DocumentType = function () { let arg = bodavm.memory.globalobj['DocumentType']; console.log_copy(`window_DocumentType`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DragEvent = function () { let arg = bodavm.memory.globalobj['DragEvent']; console.log_copy(`window_DragEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_DynamicsCompressorNode = function () { let arg = bodavm.memory.globalobj['DynamicsCompressorNode']; console.log_copy(`window_DynamicsCompressorNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Element = function () { let arg = bodavm.memory.globalobj['Element']; console.log_copy(`window_Element`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ElementInternals = function () { let arg = bodavm.memory.globalobj['ElementInternals']; console.log_copy(`window_ElementInternals`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ErrorEvent = function () { let arg = bodavm.memory.globalobj['ErrorEvent']; console.log_copy(`window_ErrorEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Event = function () { let arg = bodavm.memory.globalobj['Event']; console.log_copy(`window_Event`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_EventCounts = function () { let arg = bodavm.memory.globalobj['EventCounts']; console.log_copy(`window_EventCounts`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_EventSource = function () { let arg = bodavm.memory.globalobj['EventSource']; console.log_copy(`window_EventSource`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_EventTarget = function () { let arg = bodavm.memory.globalobj['EventTarget']; console.log_copy(`window_EventTarget`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_FeaturePolicy = function () { let arg = bodavm.memory.globalobj['FeaturePolicy']; console.log_copy(`window_FeaturePolicy`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_File = function () { let arg = bodavm.memory.globalobj['File']; console.log_copy(`window_File`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_FileList = function () { let arg = bodavm.memory.globalobj['FileList']; console.log_copy(`window_FileList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_FileReader = function () { let arg = bodavm.memory.globalobj['FileReader']; console.log_copy(`window_FileReader`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_FocusEvent = function () { let arg = bodavm.memory.globalobj['FocusEvent']; console.log_copy(`window_FocusEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_FontFace = function () { let arg = bodavm.memory.globalobj['FontFace']; console.log_copy(`window_FontFace`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_FontFaceSetLoadEvent = function () { let arg = bodavm.memory.globalobj['FontFaceSetLoadEvent']; console.log_copy(`window_FontFaceSetLoadEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_FormData = function () { let arg = bodavm.memory.globalobj['FormData']; console.log_copy(`window_FormData`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_FormDataEvent = function () { let arg = bodavm.memory.globalobj['FormDataEvent']; console.log_copy(`window_FormDataEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_GainNode = function () { let arg = bodavm.memory.globalobj['GainNode']; console.log_copy(`window_GainNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Gamepad = function () { let arg = bodavm.memory.globalobj['Gamepad']; console.log_copy(`window_Gamepad`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_GamepadButton = function () { let arg = bodavm.memory.globalobj['GamepadButton']; console.log_copy(`window_GamepadButton`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_GamepadEvent = function () { let arg = bodavm.memory.globalobj['GamepadEvent']; console.log_copy(`window_GamepadEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_GamepadHapticActuator = function () { let arg = bodavm.memory.globalobj['GamepadHapticActuator']; console.log_copy(`window_GamepadHapticActuator`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Geolocation = function () { let arg = bodavm.memory.globalobj['Geolocation']; console.log_copy(`window_Geolocation`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_GeolocationCoordinates = function () { let arg = bodavm.memory.globalobj['GeolocationCoordinates']; console.log_copy(`window_GeolocationCoordinates`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_GeolocationPosition = function () { let arg = bodavm.memory.globalobj['GeolocationPosition']; console.log_copy(`window_GeolocationPosition`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_GeolocationPositionError = function () { let arg = bodavm.memory.globalobj['GeolocationPositionError']; console.log_copy(`window_GeolocationPositionError`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLAllCollection = function () { let arg = bodavm.memory.globalobj['HTMLAllCollection']; console.log_copy(`window_HTMLAllCollection`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLAnchorElement = function () { let arg = bodavm.memory.globalobj['HTMLAnchorElement']; console.log_copy(`window_HTMLAnchorElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLAreaElement = function () { let arg = bodavm.memory.globalobj['HTMLAreaElement']; console.log_copy(`window_HTMLAreaElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLAudioElement = function () { let arg = bodavm.memory.globalobj['HTMLAudioElement']; console.log_copy(`window_HTMLAudioElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLBRElement = function () { let arg = bodavm.memory.globalobj['HTMLBRElement']; console.log_copy(`window_HTMLBRElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLBaseElement = function () { let arg = bodavm.memory.globalobj['HTMLBaseElement']; console.log_copy(`window_HTMLBaseElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLBodyElement = function () { let arg = bodavm.memory.globalobj['HTMLBodyElement']; console.log_copy(`window_HTMLBodyElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLButtonElement = function () { let arg = bodavm.memory.globalobj['HTMLButtonElement']; console.log_copy(`window_HTMLButtonElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLCanvasElement = function () { let arg = bodavm.memory.globalobj['HTMLCanvasElement']; console.log_copy(`window_HTMLCanvasElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLCollection = function () { let arg = bodavm.memory.globalobj['HTMLCollection']; console.log_copy(`window_HTMLCollection`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLDListElement = function () { let arg = bodavm.memory.globalobj['HTMLDListElement']; console.log_copy(`window_HTMLDListElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLDataElement = function () { let arg = bodavm.memory.globalobj['HTMLDataElement']; console.log_copy(`window_HTMLDataElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLDataListElement = function () { let arg = bodavm.memory.globalobj['HTMLDataListElement']; console.log_copy(`window_HTMLDataListElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLDetailsElement = function () { let arg = bodavm.memory.globalobj['HTMLDetailsElement']; console.log_copy(`window_HTMLDetailsElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLDialogElement = function () { let arg = bodavm.memory.globalobj['HTMLDialogElement']; console.log_copy(`window_HTMLDialogElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLDirectoryElement = function () { let arg = bodavm.memory.globalobj['HTMLDirectoryElement']; console.log_copy(`window_HTMLDirectoryElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLDivElement = function () { let arg = bodavm.memory.globalobj['HTMLDivElement']; console.log_copy(`window_HTMLDivElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLDocument = function () { let arg = bodavm.memory.globalobj['HTMLDocument']; console.log_copy(`window_HTMLDocument`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLElement = function () { let arg = bodavm.memory.globalobj['HTMLElement']; console.log_copy(`window_HTMLElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLEmbedElement = function () { let arg = bodavm.memory.globalobj['HTMLEmbedElement']; console.log_copy(`window_HTMLEmbedElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLFieldSetElement = function () { let arg = bodavm.memory.globalobj['HTMLFieldSetElement']; console.log_copy(`window_HTMLFieldSetElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLFontElement = function () { let arg = bodavm.memory.globalobj['HTMLFontElement']; console.log_copy(`window_HTMLFontElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLFormControlsCollection = function () { let arg = bodavm.memory.globalobj['HTMLFormControlsCollection']; console.log_copy(`window_HTMLFormControlsCollection`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLFormElement = function () { let arg = bodavm.memory.globalobj['HTMLFormElement']; console.log_copy(`window_HTMLFormElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLFrameElement = function () { let arg = bodavm.memory.globalobj['HTMLFrameElement']; console.log_copy(`window_HTMLFrameElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLFrameSetElement = function () { let arg = bodavm.memory.globalobj['HTMLFrameSetElement']; console.log_copy(`window_HTMLFrameSetElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLHRElement = function () { let arg = bodavm.memory.globalobj['HTMLHRElement']; console.log_copy(`window_HTMLHRElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLHeadElement = function () { let arg = bodavm.memory.globalobj['HTMLHeadElement']; console.log_copy(`window_HTMLHeadElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLHeadingElement = function () { let arg = bodavm.memory.globalobj['HTMLHeadingElement']; console.log_copy(`window_HTMLHeadingElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLHtmlElement = function () { let arg = bodavm.memory.globalobj['HTMLHtmlElement']; console.log_copy(`window_HTMLHtmlElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLIFrameElement = function () { let arg = bodavm.memory.globalobj['HTMLIFrameElement']; console.log_copy(`window_HTMLIFrameElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLImageElement = function () { let arg = bodavm.memory.globalobj['HTMLImageElement']; console.log_copy(`window_HTMLImageElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLInputElement = function () { let arg = bodavm.memory.globalobj['HTMLInputElement']; console.log_copy(`window_HTMLInputElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLLIElement = function () { let arg = bodavm.memory.globalobj['HTMLLIElement']; console.log_copy(`window_HTMLLIElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLLabelElement = function () { let arg = bodavm.memory.globalobj['HTMLLabelElement']; console.log_copy(`window_HTMLLabelElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLLegendElement = function () { let arg = bodavm.memory.globalobj['HTMLLegendElement']; console.log_copy(`window_HTMLLegendElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLLinkElement = function () { let arg = bodavm.memory.globalobj['HTMLLinkElement']; console.log_copy(`window_HTMLLinkElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLMapElement = function () { let arg = bodavm.memory.globalobj['HTMLMapElement']; console.log_copy(`window_HTMLMapElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLMarqueeElement = function () { let arg = bodavm.memory.globalobj['HTMLMarqueeElement']; console.log_copy(`window_HTMLMarqueeElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLMediaElement = function () { let arg = bodavm.memory.globalobj['HTMLMediaElement']; console.log_copy(`window_HTMLMediaElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLMenuElement = function () { let arg = bodavm.memory.globalobj['HTMLMenuElement']; console.log_copy(`window_HTMLMenuElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLMetaElement = function () { let arg = bodavm.memory.globalobj['HTMLMetaElement']; console.log_copy(`window_HTMLMetaElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLMeterElement = function () { let arg = bodavm.memory.globalobj['HTMLMeterElement']; console.log_copy(`window_HTMLMeterElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLModElement = function () { let arg = bodavm.memory.globalobj['HTMLModElement']; console.log_copy(`window_HTMLModElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLOListElement = function () { let arg = bodavm.memory.globalobj['HTMLOListElement']; console.log_copy(`window_HTMLOListElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLObjectElement = function () { let arg = bodavm.memory.globalobj['HTMLObjectElement']; console.log_copy(`window_HTMLObjectElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLOptGroupElement = function () { let arg = bodavm.memory.globalobj['HTMLOptGroupElement']; console.log_copy(`window_HTMLOptGroupElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLOptionElement = function () { let arg = bodavm.memory.globalobj['HTMLOptionElement']; console.log_copy(`window_HTMLOptionElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLOptionsCollection = function () { let arg = bodavm.memory.globalobj['HTMLOptionsCollection']; console.log_copy(`window_HTMLOptionsCollection`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLOutputElement = function () { let arg = bodavm.memory.globalobj['HTMLOutputElement']; console.log_copy(`window_HTMLOutputElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLParagraphElement = function () { let arg = bodavm.memory.globalobj['HTMLParagraphElement']; console.log_copy(`window_HTMLParagraphElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLParamElement = function () { let arg = bodavm.memory.globalobj['HTMLParamElement']; console.log_copy(`window_HTMLParamElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLPictureElement = function () { let arg = bodavm.memory.globalobj['HTMLPictureElement']; console.log_copy(`window_HTMLPictureElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLPreElement = function () { let arg = bodavm.memory.globalobj['HTMLPreElement']; console.log_copy(`window_HTMLPreElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLProgressElement = function () { let arg = bodavm.memory.globalobj['HTMLProgressElement']; console.log_copy(`window_HTMLProgressElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLQuoteElement = function () { let arg = bodavm.memory.globalobj['HTMLQuoteElement']; console.log_copy(`window_HTMLQuoteElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLScriptElement = function () { let arg = bodavm.memory.globalobj['HTMLScriptElement']; console.log_copy(`window_HTMLScriptElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLSelectElement = function () { let arg = bodavm.memory.globalobj['HTMLSelectElement']; console.log_copy(`window_HTMLSelectElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLSlotElement = function () { let arg = bodavm.memory.globalobj['HTMLSlotElement']; console.log_copy(`window_HTMLSlotElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLSourceElement = function () { let arg = bodavm.memory.globalobj['HTMLSourceElement']; console.log_copy(`window_HTMLSourceElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLSpanElement = function () { let arg = bodavm.memory.globalobj['HTMLSpanElement']; console.log_copy(`window_HTMLSpanElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLStyleElement = function () { let arg = bodavm.memory.globalobj['HTMLStyleElement']; console.log_copy(`window_HTMLStyleElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLTableCaptionElement = function () { let arg = bodavm.memory.globalobj['HTMLTableCaptionElement']; console.log_copy(`window_HTMLTableCaptionElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLTableCellElement = function () { let arg = bodavm.memory.globalobj['HTMLTableCellElement']; console.log_copy(`window_HTMLTableCellElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLTableColElement = function () { let arg = bodavm.memory.globalobj['HTMLTableColElement']; console.log_copy(`window_HTMLTableColElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLTableElement = function () { let arg = bodavm.memory.globalobj['HTMLTableElement']; console.log_copy(`window_HTMLTableElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLTableRowElement = function () { let arg = bodavm.memory.globalobj['HTMLTableRowElement']; console.log_copy(`window_HTMLTableRowElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLTableSectionElement = function () { let arg = bodavm.memory.globalobj['HTMLTableSectionElement']; console.log_copy(`window_HTMLTableSectionElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLTemplateElement = function () { let arg = bodavm.memory.globalobj['HTMLTemplateElement']; console.log_copy(`window_HTMLTemplateElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLTextAreaElement = function () { let arg = bodavm.memory.globalobj['HTMLTextAreaElement']; console.log_copy(`window_HTMLTextAreaElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLTimeElement = function () { let arg = bodavm.memory.globalobj['HTMLTimeElement']; console.log_copy(`window_HTMLTimeElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLTitleElement = function () { let arg = bodavm.memory.globalobj['HTMLTitleElement']; console.log_copy(`window_HTMLTitleElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLTrackElement = function () { let arg = bodavm.memory.globalobj['HTMLTrackElement']; console.log_copy(`window_HTMLTrackElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLUListElement = function () { let arg = bodavm.memory.globalobj['HTMLUListElement']; console.log_copy(`window_HTMLUListElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLUnknownElement = function () { let arg = bodavm.memory.globalobj['HTMLUnknownElement']; console.log_copy(`window_HTMLUnknownElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HTMLVideoElement = function () { let arg = bodavm.memory.globalobj['HTMLVideoElement']; console.log_copy(`window_HTMLVideoElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_HashChangeEvent = function () { let arg = bodavm.memory.globalobj['HashChangeEvent']; console.log_copy(`window_HashChangeEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Headers = function () { let arg = bodavm.memory.globalobj['Headers']; console.log_copy(`window_Headers`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_IDBCursor = function () { let arg = bodavm.memory.globalobj['IDBCursor']; console.log_copy(`window_IDBCursor`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_IDBCursorWithValue = function () { let arg = bodavm.memory.globalobj['IDBCursorWithValue']; console.log_copy(`window_IDBCursorWithValue`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_IDBIndex = function () { let arg = bodavm.memory.globalobj['IDBIndex']; console.log_copy(`window_IDBIndex`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_IDBKeyRange = function () { let arg = bodavm.memory.globalobj['IDBKeyRange']; console.log_copy(`window_IDBKeyRange`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_IDBObjectStore = function () { let arg = bodavm.memory.globalobj['IDBObjectStore']; console.log_copy(`window_IDBObjectStore`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_IDBOpenDBRequest = function () { let arg = bodavm.memory.globalobj['IDBOpenDBRequest']; console.log_copy(`window_IDBOpenDBRequest`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_IDBRequest = function () { let arg = bodavm.memory.globalobj['IDBRequest']; console.log_copy(`window_IDBRequest`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_IDBTransaction = function () { let arg = bodavm.memory.globalobj['IDBTransaction']; console.log_copy(`window_IDBTransaction`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_IDBVersionChangeEvent = function () { let arg = bodavm.memory.globalobj['IDBVersionChangeEvent']; console.log_copy(`window_IDBVersionChangeEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_IIRFilterNode = function () { let arg = bodavm.memory.globalobj['IIRFilterNode']; console.log_copy(`window_IIRFilterNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_IdleDeadline = function () { let arg = bodavm.memory.globalobj['IdleDeadline']; console.log_copy(`window_IdleDeadline`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ImageBitmap = function () { let arg = bodavm.memory.globalobj['ImageBitmap']; console.log_copy(`window_ImageBitmap`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ImageBitmapRenderingContext = function () { let arg = bodavm.memory.globalobj['ImageBitmapRenderingContext']; console.log_copy(`window_ImageBitmapRenderingContext`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ImageCapture = function () { let arg = bodavm.memory.globalobj['ImageCapture']; console.log_copy(`window_ImageCapture`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ImageData = function () { let arg = bodavm.memory.globalobj['ImageData']; console.log_copy(`window_ImageData`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_InputDeviceCapabilities = function () { let arg = bodavm.memory.globalobj['InputDeviceCapabilities']; console.log_copy(`window_InputDeviceCapabilities`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_InputDeviceInfo = function () { let arg = bodavm.memory.globalobj['InputDeviceInfo']; console.log_copy(`window_InputDeviceInfo`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_InputEvent = function () { let arg = bodavm.memory.globalobj['InputEvent']; console.log_copy(`window_InputEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_IntersectionObserver = function () { let arg = bodavm.memory.globalobj['IntersectionObserver']; console.log_copy(`window_IntersectionObserver`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_IntersectionObserverEntry = function () { let arg = bodavm.memory.globalobj['IntersectionObserverEntry']; console.log_copy(`window_IntersectionObserverEntry`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_KeyboardEvent = function () { let arg = bodavm.memory.globalobj['KeyboardEvent']; console.log_copy(`window_KeyboardEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_KeyframeEffect = function () { let arg = bodavm.memory.globalobj['KeyframeEffect']; console.log_copy(`window_KeyframeEffect`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_LargestContentfulPaint = function () { let arg = bodavm.memory.globalobj['LargestContentfulPaint']; console.log_copy(`window_LargestContentfulPaint`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_LayoutShift = function () { let arg = bodavm.memory.globalobj['LayoutShift']; console.log_copy(`window_LayoutShift`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_LayoutShiftAttribution = function () { let arg = bodavm.memory.globalobj['LayoutShiftAttribution']; console.log_copy(`window_LayoutShiftAttribution`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaCapabilities = function () { let arg = bodavm.memory.globalobj['MediaCapabilities']; console.log_copy(`window_MediaCapabilities`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaElementAudioSourceNode = function () { let arg = bodavm.memory.globalobj['MediaElementAudioSourceNode']; console.log_copy(`window_MediaElementAudioSourceNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaEncryptedEvent = function () { let arg = bodavm.memory.globalobj['MediaEncryptedEvent']; console.log_copy(`window_MediaEncryptedEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaError = function () { let arg = bodavm.memory.globalobj['MediaError']; console.log_copy(`window_MediaError`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaList = function () { let arg = bodavm.memory.globalobj['MediaList']; console.log_copy(`window_MediaList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaQueryList = function () { let arg = bodavm.memory.globalobj['MediaQueryList']; console.log_copy(`window_MediaQueryList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaQueryListEvent = function () { let arg = bodavm.memory.globalobj['MediaQueryListEvent']; console.log_copy(`window_MediaQueryListEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaRecorder = function () { let arg = bodavm.memory.globalobj['MediaRecorder']; console.log_copy(`window_MediaRecorder`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaStream = function () { let arg = bodavm.memory.globalobj['MediaStream']; console.log_copy(`window_MediaStream`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaStreamAudioDestinationNode = function () { let arg = bodavm.memory.globalobj['MediaStreamAudioDestinationNode']; console.log_copy(`window_MediaStreamAudioDestinationNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaStreamAudioSourceNode = function () { let arg = bodavm.memory.globalobj['MediaStreamAudioSourceNode']; console.log_copy(`window_MediaStreamAudioSourceNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaStreamEvent = function () { let arg = bodavm.memory.globalobj['MediaStreamEvent']; console.log_copy(`window_MediaStreamEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MediaStreamTrackEvent = function () { let arg = bodavm.memory.globalobj['MediaStreamTrackEvent']; console.log_copy(`window_MediaStreamTrackEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MessageChannel = function () { let arg = bodavm.memory.globalobj['MessageChannel']; console.log_copy(`window_MessageChannel`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MessageEvent = function () { let arg = bodavm.memory.globalobj['MessageEvent']; console.log_copy(`window_MessageEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MessagePort = function () { let arg = bodavm.memory.globalobj['MessagePort']; console.log_copy(`window_MessagePort`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MimeType = function () { let arg = bodavm.memory.globalobj['MimeType']; console.log_copy(`window_MimeType`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MimeTypeArray = function () { let arg = bodavm.memory.globalobj['MimeTypeArray']; console.log_copy(`window_MimeTypeArray`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MouseEvent = function () { let arg = bodavm.memory.globalobj['MouseEvent']; console.log_copy(`window_MouseEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MutationEvent = function () { let arg = bodavm.memory.globalobj['MutationEvent']; console.log_copy(`window_MutationEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_MutationRecord = function () { let arg = bodavm.memory.globalobj['MutationRecord']; console.log_copy(`window_MutationRecord`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_NamedNodeMap = function () { let arg = bodavm.memory.globalobj['NamedNodeMap']; console.log_copy(`window_NamedNodeMap`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_NetworkInformation = function () { let arg = bodavm.memory.globalobj['NetworkInformation']; console.log_copy(`window_NetworkInformation`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Node = function () { let arg = bodavm.memory.globalobj['Node']; console.log_copy(`window_Node`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_NodeFilter = function () { let arg = bodavm.memory.globalobj['NodeFilter']; console.log_copy(`window_NodeFilter`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_NodeIterator = function () { let arg = bodavm.memory.globalobj['NodeIterator']; console.log_copy(`window_NodeIterator`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_NodeList = function () { let arg = bodavm.memory.globalobj['NodeList']; console.log_copy(`window_NodeList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_OfflineAudioCompletionEvent = function () { let arg = bodavm.memory.globalobj['OfflineAudioCompletionEvent']; console.log_copy(`window_OfflineAudioCompletionEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_OfflineAudioContext = function () { let arg = bodavm.memory.globalobj['OfflineAudioContext']; console.log_copy(`window_OfflineAudioContext`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_OffscreenCanvas = function () { let arg = bodavm.memory.globalobj['OffscreenCanvas']; console.log_copy(`window_OffscreenCanvas`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_OffscreenCanvasRenderingContext2D = function () { let arg = bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D']; console.log_copy(`window_OffscreenCanvasRenderingContext2D`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_OscillatorNode = function () { let arg = bodavm.memory.globalobj['OscillatorNode']; console.log_copy(`window_OscillatorNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_OverconstrainedError = function () { let arg = bodavm.memory.globalobj['OverconstrainedError']; console.log_copy(`window_OverconstrainedError`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PageTransitionEvent = function () { let arg = bodavm.memory.globalobj['PageTransitionEvent']; console.log_copy(`window_PageTransitionEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PannerNode = function () { let arg = bodavm.memory.globalobj['PannerNode']; console.log_copy(`window_PannerNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Path2D = function () { let arg = bodavm.memory.globalobj['Path2D']; console.log_copy(`window_Path2D`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PerformanceElementTiming = function () { let arg = bodavm.memory.globalobj['PerformanceElementTiming']; console.log_copy(`window_PerformanceElementTiming`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PerformanceEntry = function () { let arg = bodavm.memory.globalobj['PerformanceEntry']; console.log_copy(`window_PerformanceEntry`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PerformanceEventTiming = function () { let arg = bodavm.memory.globalobj['PerformanceEventTiming']; console.log_copy(`window_PerformanceEventTiming`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PerformanceLongTaskTiming = function () { let arg = bodavm.memory.globalobj['PerformanceLongTaskTiming']; console.log_copy(`window_PerformanceLongTaskTiming`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PerformanceMark = function () { let arg = bodavm.memory.globalobj['PerformanceMark']; console.log_copy(`window_PerformanceMark`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PerformanceMeasure = function () { let arg = bodavm.memory.globalobj['PerformanceMeasure']; console.log_copy(`window_PerformanceMeasure`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PerformanceNavigation = function () { let arg = bodavm.memory.globalobj['PerformanceNavigation']; console.log_copy(`window_PerformanceNavigation`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PerformanceNavigationTiming = function () { let arg = bodavm.memory.globalobj['PerformanceNavigationTiming']; console.log_copy(`window_PerformanceNavigationTiming`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PerformanceObserver = function () { let arg = bodavm.memory.globalobj['PerformanceObserver']; console.log_copy(`window_PerformanceObserver`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PerformanceObserverEntryList = function () { let arg = bodavm.memory.globalobj['PerformanceObserverEntryList']; console.log_copy(`window_PerformanceObserverEntryList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PerformancePaintTiming = function () { let arg = bodavm.memory.globalobj['PerformancePaintTiming']; console.log_copy(`window_PerformancePaintTiming`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PerformanceResourceTiming = function () { let arg = bodavm.memory.globalobj['PerformanceResourceTiming']; console.log_copy(`window_PerformanceResourceTiming`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PerformanceServerTiming = function () { let arg = bodavm.memory.globalobj['PerformanceServerTiming']; console.log_copy(`window_PerformanceServerTiming`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PerformanceTiming = function () { let arg = bodavm.memory.globalobj['PerformanceTiming']; console.log_copy(`window_PerformanceTiming`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PeriodicWave = function () { let arg = bodavm.memory.globalobj['PeriodicWave']; console.log_copy(`window_PeriodicWave`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Plugin = function () { let arg = bodavm.memory.globalobj['Plugin']; console.log_copy(`window_Plugin`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PluginArray = function () { let arg = bodavm.memory.globalobj['PluginArray']; console.log_copy(`window_PluginArray`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PointerEvent = function () { let arg = bodavm.memory.globalobj['PointerEvent']; console.log_copy(`window_PointerEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PopStateEvent = function () { let arg = bodavm.memory.globalobj['PopStateEvent']; console.log_copy(`window_PopStateEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ProcessingInstruction = function () { let arg = bodavm.memory.globalobj['ProcessingInstruction']; console.log_copy(`window_ProcessingInstruction`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ProgressEvent = function () { let arg = bodavm.memory.globalobj['ProgressEvent']; console.log_copy(`window_ProgressEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_PromiseRejectionEvent = function () { let arg = bodavm.memory.globalobj['PromiseRejectionEvent']; console.log_copy(`window_PromiseRejectionEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCCertificate = function () { let arg = bodavm.memory.globalobj['RTCCertificate']; console.log_copy(`window_RTCCertificate`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCDTMFSender = function () { let arg = bodavm.memory.globalobj['RTCDTMFSender']; console.log_copy(`window_RTCDTMFSender`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCDTMFToneChangeEvent = function () { let arg = bodavm.memory.globalobj['RTCDTMFToneChangeEvent']; console.log_copy(`window_RTCDTMFToneChangeEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCDataChannel = function () { let arg = bodavm.memory.globalobj['RTCDataChannel']; console.log_copy(`window_RTCDataChannel`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCDataChannelEvent = function () { let arg = bodavm.memory.globalobj['RTCDataChannelEvent']; console.log_copy(`window_RTCDataChannelEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCDtlsTransport = function () { let arg = bodavm.memory.globalobj['RTCDtlsTransport']; console.log_copy(`window_RTCDtlsTransport`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCEncodedAudioFrame = function () { let arg = bodavm.memory.globalobj['RTCEncodedAudioFrame']; console.log_copy(`window_RTCEncodedAudioFrame`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCEncodedVideoFrame = function () { let arg = bodavm.memory.globalobj['RTCEncodedVideoFrame']; console.log_copy(`window_RTCEncodedVideoFrame`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCError = function () { let arg = bodavm.memory.globalobj['RTCError']; console.log_copy(`window_RTCError`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCErrorEvent = function () { let arg = bodavm.memory.globalobj['RTCErrorEvent']; console.log_copy(`window_RTCErrorEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCIceCandidate = function () { let arg = bodavm.memory.globalobj['RTCIceCandidate']; console.log_copy(`window_RTCIceCandidate`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCPeerConnection = function () { let arg = bodavm.memory.globalobj['RTCPeerConnection']; console.log_copy(`window_RTCPeerConnection`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCPeerConnectionIceErrorEvent = function () { let arg = bodavm.memory.globalobj['RTCPeerConnectionIceErrorEvent']; console.log_copy(`window_RTCPeerConnectionIceErrorEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCPeerConnectionIceEvent = function () { let arg = bodavm.memory.globalobj['RTCPeerConnectionIceEvent']; console.log_copy(`window_RTCPeerConnectionIceEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCRtpReceiver = function () { let arg = bodavm.memory.globalobj['RTCRtpReceiver']; console.log_copy(`window_RTCRtpReceiver`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCRtpSender = function () { let arg = bodavm.memory.globalobj['RTCRtpSender']; console.log_copy(`window_RTCRtpSender`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCRtpTransceiver = function () { let arg = bodavm.memory.globalobj['RTCRtpTransceiver']; console.log_copy(`window_RTCRtpTransceiver`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCSctpTransport = function () { let arg = bodavm.memory.globalobj['RTCSctpTransport']; console.log_copy(`window_RTCSctpTransport`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCSessionDescription = function () { let arg = bodavm.memory.globalobj['RTCSessionDescription']; console.log_copy(`window_RTCSessionDescription`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCStatsReport = function () { let arg = bodavm.memory.globalobj['RTCStatsReport']; console.log_copy(`window_RTCStatsReport`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RTCTrackEvent = function () { let arg = bodavm.memory.globalobj['RTCTrackEvent']; console.log_copy(`window_RTCTrackEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_RadioNodeList = function () { let arg = bodavm.memory.globalobj['RadioNodeList']; console.log_copy(`window_RadioNodeList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Range = function () { let arg = bodavm.memory.globalobj['Range']; console.log_copy(`window_Range`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ReadableByteStreamController = function () { let arg = bodavm.memory.globalobj['ReadableByteStreamController']; console.log_copy(`window_ReadableByteStreamController`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ReadableStream = function () { let arg = bodavm.memory.globalobj['ReadableStream']; console.log_copy(`window_ReadableStream`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ReadableStreamBYOBReader = function () { let arg = bodavm.memory.globalobj['ReadableStreamBYOBReader']; console.log_copy(`window_ReadableStreamBYOBReader`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ReadableStreamBYOBRequest = function () { let arg = bodavm.memory.globalobj['ReadableStreamBYOBRequest']; console.log_copy(`window_ReadableStreamBYOBRequest`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ReadableStreamDefaultController = function () { let arg = bodavm.memory.globalobj['ReadableStreamDefaultController']; console.log_copy(`window_ReadableStreamDefaultController`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ReadableStreamDefaultReader = function () { let arg = bodavm.memory.globalobj['ReadableStreamDefaultReader']; console.log_copy(`window_ReadableStreamDefaultReader`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ReportingObserver = function () { let arg = bodavm.memory.globalobj['ReportingObserver']; console.log_copy(`window_ReportingObserver`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Request = function () { let arg = bodavm.memory.globalobj['Request']; console.log_copy(`window_Request`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ResizeObserver = function () { let arg = bodavm.memory.globalobj['ResizeObserver']; console.log_copy(`window_ResizeObserver`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ResizeObserverEntry = function () { let arg = bodavm.memory.globalobj['ResizeObserverEntry']; console.log_copy(`window_ResizeObserverEntry`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ResizeObserverSize = function () { let arg = bodavm.memory.globalobj['ResizeObserverSize']; console.log_copy(`window_ResizeObserverSize`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Response = function () { let arg = bodavm.memory.globalobj['Response']; console.log_copy(`window_Response`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGAElement = function () { let arg = bodavm.memory.globalobj['SVGAElement']; console.log_copy(`window_SVGAElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGAngle = function () { let arg = bodavm.memory.globalobj['SVGAngle']; console.log_copy(`window_SVGAngle`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGAnimateElement = function () { let arg = bodavm.memory.globalobj['SVGAnimateElement']; console.log_copy(`window_SVGAnimateElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGAnimateMotionElement = function () { let arg = bodavm.memory.globalobj['SVGAnimateMotionElement']; console.log_copy(`window_SVGAnimateMotionElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGAnimateTransformElement = function () { let arg = bodavm.memory.globalobj['SVGAnimateTransformElement']; console.log_copy(`window_SVGAnimateTransformElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGAnimatedAngle = function () { let arg = bodavm.memory.globalobj['SVGAnimatedAngle']; console.log_copy(`window_SVGAnimatedAngle`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGAnimatedBoolean = function () { let arg = bodavm.memory.globalobj['SVGAnimatedBoolean']; console.log_copy(`window_SVGAnimatedBoolean`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGAnimatedEnumeration = function () { let arg = bodavm.memory.globalobj['SVGAnimatedEnumeration']; console.log_copy(`window_SVGAnimatedEnumeration`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGAnimatedInteger = function () { let arg = bodavm.memory.globalobj['SVGAnimatedInteger']; console.log_copy(`window_SVGAnimatedInteger`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGAnimatedLength = function () { let arg = bodavm.memory.globalobj['SVGAnimatedLength']; console.log_copy(`window_SVGAnimatedLength`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGAnimatedLengthList = function () { let arg = bodavm.memory.globalobj['SVGAnimatedLengthList']; console.log_copy(`window_SVGAnimatedLengthList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGAnimatedNumber = function () { let arg = bodavm.memory.globalobj['SVGAnimatedNumber']; console.log_copy(`window_SVGAnimatedNumber`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGAnimatedNumberList = function () { let arg = bodavm.memory.globalobj['SVGAnimatedNumberList']; console.log_copy(`window_SVGAnimatedNumberList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGAnimatedPreserveAspectRatio = function () { let arg = bodavm.memory.globalobj['SVGAnimatedPreserveAspectRatio']; console.log_copy(`window_SVGAnimatedPreserveAspectRatio`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGAnimatedRect = function () { let arg = bodavm.memory.globalobj['SVGAnimatedRect']; console.log_copy(`window_SVGAnimatedRect`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGAnimatedString = function () { let arg = bodavm.memory.globalobj['SVGAnimatedString']; console.log_copy(`window_SVGAnimatedString`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGAnimatedTransformList = function () { let arg = bodavm.memory.globalobj['SVGAnimatedTransformList']; console.log_copy(`window_SVGAnimatedTransformList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGAnimationElement = function () { let arg = bodavm.memory.globalobj['SVGAnimationElement']; console.log_copy(`window_SVGAnimationElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGCircleElement = function () { let arg = bodavm.memory.globalobj['SVGCircleElement']; console.log_copy(`window_SVGCircleElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGClipPathElement = function () { let arg = bodavm.memory.globalobj['SVGClipPathElement']; console.log_copy(`window_SVGClipPathElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGComponentTransferFunctionElement = function () { let arg = bodavm.memory.globalobj['SVGComponentTransferFunctionElement']; console.log_copy(`window_SVGComponentTransferFunctionElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGDefsElement = function () { let arg = bodavm.memory.globalobj['SVGDefsElement']; console.log_copy(`window_SVGDefsElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGDescElement = function () { let arg = bodavm.memory.globalobj['SVGDescElement']; console.log_copy(`window_SVGDescElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGElement = function () { let arg = bodavm.memory.globalobj['SVGElement']; console.log_copy(`window_SVGElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGEllipseElement = function () { let arg = bodavm.memory.globalobj['SVGEllipseElement']; console.log_copy(`window_SVGEllipseElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEBlendElement = function () { let arg = bodavm.memory.globalobj['SVGFEBlendElement']; console.log_copy(`window_SVGFEBlendElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEColorMatrixElement = function () { let arg = bodavm.memory.globalobj['SVGFEColorMatrixElement']; console.log_copy(`window_SVGFEColorMatrixElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEComponentTransferElement = function () { let arg = bodavm.memory.globalobj['SVGFEComponentTransferElement']; console.log_copy(`window_SVGFEComponentTransferElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFECompositeElement = function () { let arg = bodavm.memory.globalobj['SVGFECompositeElement']; console.log_copy(`window_SVGFECompositeElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEConvolveMatrixElement = function () { let arg = bodavm.memory.globalobj['SVGFEConvolveMatrixElement']; console.log_copy(`window_SVGFEConvolveMatrixElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEDiffuseLightingElement = function () { let arg = bodavm.memory.globalobj['SVGFEDiffuseLightingElement']; console.log_copy(`window_SVGFEDiffuseLightingElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEDisplacementMapElement = function () { let arg = bodavm.memory.globalobj['SVGFEDisplacementMapElement']; console.log_copy(`window_SVGFEDisplacementMapElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEDistantLightElement = function () { let arg = bodavm.memory.globalobj['SVGFEDistantLightElement']; console.log_copy(`window_SVGFEDistantLightElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEDropShadowElement = function () { let arg = bodavm.memory.globalobj['SVGFEDropShadowElement']; console.log_copy(`window_SVGFEDropShadowElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEFloodElement = function () { let arg = bodavm.memory.globalobj['SVGFEFloodElement']; console.log_copy(`window_SVGFEFloodElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEFuncAElement = function () { let arg = bodavm.memory.globalobj['SVGFEFuncAElement']; console.log_copy(`window_SVGFEFuncAElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEFuncBElement = function () { let arg = bodavm.memory.globalobj['SVGFEFuncBElement']; console.log_copy(`window_SVGFEFuncBElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEFuncGElement = function () { let arg = bodavm.memory.globalobj['SVGFEFuncGElement']; console.log_copy(`window_SVGFEFuncGElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEFuncRElement = function () { let arg = bodavm.memory.globalobj['SVGFEFuncRElement']; console.log_copy(`window_SVGFEFuncRElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEGaussianBlurElement = function () { let arg = bodavm.memory.globalobj['SVGFEGaussianBlurElement']; console.log_copy(`window_SVGFEGaussianBlurElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEImageElement = function () { let arg = bodavm.memory.globalobj['SVGFEImageElement']; console.log_copy(`window_SVGFEImageElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEMergeElement = function () { let arg = bodavm.memory.globalobj['SVGFEMergeElement']; console.log_copy(`window_SVGFEMergeElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEMergeNodeElement = function () { let arg = bodavm.memory.globalobj['SVGFEMergeNodeElement']; console.log_copy(`window_SVGFEMergeNodeElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEMorphologyElement = function () { let arg = bodavm.memory.globalobj['SVGFEMorphologyElement']; console.log_copy(`window_SVGFEMorphologyElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEOffsetElement = function () { let arg = bodavm.memory.globalobj['SVGFEOffsetElement']; console.log_copy(`window_SVGFEOffsetElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFEPointLightElement = function () { let arg = bodavm.memory.globalobj['SVGFEPointLightElement']; console.log_copy(`window_SVGFEPointLightElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFESpecularLightingElement = function () { let arg = bodavm.memory.globalobj['SVGFESpecularLightingElement']; console.log_copy(`window_SVGFESpecularLightingElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFESpotLightElement = function () { let arg = bodavm.memory.globalobj['SVGFESpotLightElement']; console.log_copy(`window_SVGFESpotLightElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFETileElement = function () { let arg = bodavm.memory.globalobj['SVGFETileElement']; console.log_copy(`window_SVGFETileElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFETurbulenceElement = function () { let arg = bodavm.memory.globalobj['SVGFETurbulenceElement']; console.log_copy(`window_SVGFETurbulenceElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGFilterElement = function () { let arg = bodavm.memory.globalobj['SVGFilterElement']; console.log_copy(`window_SVGFilterElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGForeignObjectElement = function () { let arg = bodavm.memory.globalobj['SVGForeignObjectElement']; console.log_copy(`window_SVGForeignObjectElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGGElement = function () { let arg = bodavm.memory.globalobj['SVGGElement']; console.log_copy(`window_SVGGElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGGeometryElement = function () { let arg = bodavm.memory.globalobj['SVGGeometryElement']; console.log_copy(`window_SVGGeometryElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGGradientElement = function () { let arg = bodavm.memory.globalobj['SVGGradientElement']; console.log_copy(`window_SVGGradientElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGGraphicsElement = function () { let arg = bodavm.memory.globalobj['SVGGraphicsElement']; console.log_copy(`window_SVGGraphicsElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGImageElement = function () { let arg = bodavm.memory.globalobj['SVGImageElement']; console.log_copy(`window_SVGImageElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGLength = function () { let arg = bodavm.memory.globalobj['SVGLength']; console.log_copy(`window_SVGLength`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGLengthList = function () { let arg = bodavm.memory.globalobj['SVGLengthList']; console.log_copy(`window_SVGLengthList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGLineElement = function () { let arg = bodavm.memory.globalobj['SVGLineElement']; console.log_copy(`window_SVGLineElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGLinearGradientElement = function () { let arg = bodavm.memory.globalobj['SVGLinearGradientElement']; console.log_copy(`window_SVGLinearGradientElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGMPathElement = function () { let arg = bodavm.memory.globalobj['SVGMPathElement']; console.log_copy(`window_SVGMPathElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGMarkerElement = function () { let arg = bodavm.memory.globalobj['SVGMarkerElement']; console.log_copy(`window_SVGMarkerElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGMaskElement = function () { let arg = bodavm.memory.globalobj['SVGMaskElement']; console.log_copy(`window_SVGMaskElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGMatrix = function () { let arg = bodavm.memory.globalobj['SVGMatrix']; console.log_copy(`window_SVGMatrix`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGMetadataElement = function () { let arg = bodavm.memory.globalobj['SVGMetadataElement']; console.log_copy(`window_SVGMetadataElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGNumber = function () { let arg = bodavm.memory.globalobj['SVGNumber']; console.log_copy(`window_SVGNumber`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGNumberList = function () { let arg = bodavm.memory.globalobj['SVGNumberList']; console.log_copy(`window_SVGNumberList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGPathElement = function () { let arg = bodavm.memory.globalobj['SVGPathElement']; console.log_copy(`window_SVGPathElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGPatternElement = function () { let arg = bodavm.memory.globalobj['SVGPatternElement']; console.log_copy(`window_SVGPatternElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGPoint = function () { let arg = bodavm.memory.globalobj['SVGPoint']; console.log_copy(`window_SVGPoint`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGPointList = function () { let arg = bodavm.memory.globalobj['SVGPointList']; console.log_copy(`window_SVGPointList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGPolygonElement = function () { let arg = bodavm.memory.globalobj['SVGPolygonElement']; console.log_copy(`window_SVGPolygonElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGPolylineElement = function () { let arg = bodavm.memory.globalobj['SVGPolylineElement']; console.log_copy(`window_SVGPolylineElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGPreserveAspectRatio = function () { let arg = bodavm.memory.globalobj['SVGPreserveAspectRatio']; console.log_copy(`window_SVGPreserveAspectRatio`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGRadialGradientElement = function () { let arg = bodavm.memory.globalobj['SVGRadialGradientElement']; console.log_copy(`window_SVGRadialGradientElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGRect = function () { let arg = bodavm.memory.globalobj['SVGRect']; console.log_copy(`window_SVGRect`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGRectElement = function () { let arg = bodavm.memory.globalobj['SVGRectElement']; console.log_copy(`window_SVGRectElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGSVGElement = function () { let arg = bodavm.memory.globalobj['SVGSVGElement']; console.log_copy(`window_SVGSVGElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGScriptElement = function () { let arg = bodavm.memory.globalobj['SVGScriptElement']; console.log_copy(`window_SVGScriptElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGSetElement = function () { let arg = bodavm.memory.globalobj['SVGSetElement']; console.log_copy(`window_SVGSetElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGStopElement = function () { let arg = bodavm.memory.globalobj['SVGStopElement']; console.log_copy(`window_SVGStopElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGStringList = function () { let arg = bodavm.memory.globalobj['SVGStringList']; console.log_copy(`window_SVGStringList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGStyleElement = function () { let arg = bodavm.memory.globalobj['SVGStyleElement']; console.log_copy(`window_SVGStyleElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGSwitchElement = function () { let arg = bodavm.memory.globalobj['SVGSwitchElement']; console.log_copy(`window_SVGSwitchElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGSymbolElement = function () { let arg = bodavm.memory.globalobj['SVGSymbolElement']; console.log_copy(`window_SVGSymbolElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGTSpanElement = function () { let arg = bodavm.memory.globalobj['SVGTSpanElement']; console.log_copy(`window_SVGTSpanElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGTextContentElement = function () { let arg = bodavm.memory.globalobj['SVGTextContentElement']; console.log_copy(`window_SVGTextContentElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGTextElement = function () { let arg = bodavm.memory.globalobj['SVGTextElement']; console.log_copy(`window_SVGTextElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGTextPathElement = function () { let arg = bodavm.memory.globalobj['SVGTextPathElement']; console.log_copy(`window_SVGTextPathElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGTextPositioningElement = function () { let arg = bodavm.memory.globalobj['SVGTextPositioningElement']; console.log_copy(`window_SVGTextPositioningElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGTitleElement = function () { let arg = bodavm.memory.globalobj['SVGTitleElement']; console.log_copy(`window_SVGTitleElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGTransform = function () { let arg = bodavm.memory.globalobj['SVGTransform']; console.log_copy(`window_SVGTransform`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGTransformList = function () { let arg = bodavm.memory.globalobj['SVGTransformList']; console.log_copy(`window_SVGTransformList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGUnitTypes = function () { let arg = bodavm.memory.globalobj['SVGUnitTypes']; console.log_copy(`window_SVGUnitTypes`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGUseElement = function () { let arg = bodavm.memory.globalobj['SVGUseElement']; console.log_copy(`window_SVGUseElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SVGViewElement = function () { let arg = bodavm.memory.globalobj['SVGViewElement']; console.log_copy(`window_SVGViewElement`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ScreenOrientation = function () { let arg = bodavm.memory.globalobj['ScreenOrientation']; console.log_copy(`window_ScreenOrientation`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ScriptProcessorNode = function () { let arg = bodavm.memory.globalobj['ScriptProcessorNode']; console.log_copy(`window_ScriptProcessorNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SecurityPolicyViolationEvent = function () { let arg = bodavm.memory.globalobj['SecurityPolicyViolationEvent']; console.log_copy(`window_SecurityPolicyViolationEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Selection = function () { let arg = bodavm.memory.globalobj['Selection']; console.log_copy(`window_Selection`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ShadowRoot = function () { let arg = bodavm.memory.globalobj['ShadowRoot']; console.log_copy(`window_ShadowRoot`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_StaticRange = function () { let arg = bodavm.memory.globalobj['StaticRange']; console.log_copy(`window_StaticRange`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_StereoPannerNode = function () { let arg = bodavm.memory.globalobj['StereoPannerNode']; console.log_copy(`window_StereoPannerNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_StorageEvent = function () { let arg = bodavm.memory.globalobj['StorageEvent']; console.log_copy(`window_StorageEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_StylePropertyMap = function () { let arg = bodavm.memory.globalobj['StylePropertyMap']; console.log_copy(`window_StylePropertyMap`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_StylePropertyMapReadOnly = function () { let arg = bodavm.memory.globalobj['StylePropertyMapReadOnly']; console.log_copy(`window_StylePropertyMapReadOnly`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_StyleSheet = function () { let arg = bodavm.memory.globalobj['StyleSheet']; console.log_copy(`window_StyleSheet`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_StyleSheetList = function () { let arg = bodavm.memory.globalobj['StyleSheetList']; console.log_copy(`window_StyleSheetList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SubmitEvent = function () { let arg = bodavm.memory.globalobj['SubmitEvent']; console.log_copy(`window_SubmitEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_SyncManager = function () { let arg = bodavm.memory.globalobj['SyncManager']; console.log_copy(`window_SyncManager`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TaskAttributionTiming = function () { let arg = bodavm.memory.globalobj['TaskAttributionTiming']; console.log_copy(`window_TaskAttributionTiming`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Text = function () { let arg = bodavm.memory.globalobj['Text']; console.log_copy(`window_Text`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TextDecoder = function () { let arg = bodavm.memory.globalobj['TextDecoder']; console.log_copy(`window_TextDecoder`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TextDecoderStream = function () { let arg = bodavm.memory.globalobj['TextDecoderStream']; console.log_copy(`window_TextDecoderStream`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TextEncoder = function () { let arg = bodavm.memory.globalobj['TextEncoder']; console.log_copy(`window_TextEncoder`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TextEncoderStream = function () { let arg = bodavm.memory.globalobj['TextEncoderStream']; console.log_copy(`window_TextEncoderStream`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TextEvent = function () { let arg = bodavm.memory.globalobj['TextEvent']; console.log_copy(`window_TextEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TextMetrics = function () { let arg = bodavm.memory.globalobj['TextMetrics']; console.log_copy(`window_TextMetrics`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TextTrack = function () { let arg = bodavm.memory.globalobj['TextTrack']; console.log_copy(`window_TextTrack`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TextTrackCue = function () { let arg = bodavm.memory.globalobj['TextTrackCue']; console.log_copy(`window_TextTrackCue`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TextTrackCueList = function () { let arg = bodavm.memory.globalobj['TextTrackCueList']; console.log_copy(`window_TextTrackCueList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TextTrackList = function () { let arg = bodavm.memory.globalobj['TextTrackList']; console.log_copy(`window_TextTrackList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TimeRanges = function () { let arg = bodavm.memory.globalobj['TimeRanges']; console.log_copy(`window_TimeRanges`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Touch = function () { let arg = bodavm.memory.globalobj['Touch']; console.log_copy(`window_Touch`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TouchEvent = function () { let arg = bodavm.memory.globalobj['TouchEvent']; console.log_copy(`window_TouchEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TouchList = function () { let arg = bodavm.memory.globalobj['TouchList']; console.log_copy(`window_TouchList`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TrackEvent = function () { let arg = bodavm.memory.globalobj['TrackEvent']; console.log_copy(`window_TrackEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TransformStream = function () { let arg = bodavm.memory.globalobj['TransformStream']; console.log_copy(`window_TransformStream`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TransitionEvent = function () { let arg = bodavm.memory.globalobj['TransitionEvent']; console.log_copy(`window_TransitionEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_TreeWalker = function () { let arg = bodavm.memory.globalobj['TreeWalker']; console.log_copy(`window_TreeWalker`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_UIEvent = function () { let arg = bodavm.memory.globalobj['UIEvent']; console.log_copy(`window_UIEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_URL = function () { let arg = bodavm.memory.globalobj['URL']; console.log_copy(`window_URL`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_URLSearchParams = function () { let arg = bodavm.memory.globalobj['URLSearchParams']; console.log_copy(`window_URLSearchParams`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_UserActivation = function () { let arg = bodavm.memory.globalobj['UserActivation']; console.log_copy(`window_UserActivation`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_VTTCue = function () { let arg = bodavm.memory.globalobj['VTTCue']; console.log_copy(`window_VTTCue`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_ValidityState = function () { let arg = bodavm.memory.globalobj['ValidityState']; console.log_copy(`window_ValidityState`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WaveShaperNode = function () { let arg = bodavm.memory.globalobj['WaveShaperNode']; console.log_copy(`window_WaveShaperNode`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebGL2RenderingContext = function () { let arg = bodavm.memory.globalobj['WebGL2RenderingContext']; console.log_copy(`window_WebGL2RenderingContext`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebGLActiveInfo = function () { let arg = bodavm.memory.globalobj['WebGLActiveInfo']; console.log_copy(`window_WebGLActiveInfo`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebGLBuffer = function () { let arg = bodavm.memory.globalobj['WebGLBuffer']; console.log_copy(`window_WebGLBuffer`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebGLContextEvent = function () { let arg = bodavm.memory.globalobj['WebGLContextEvent']; console.log_copy(`window_WebGLContextEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebGLFramebuffer = function () { let arg = bodavm.memory.globalobj['WebGLFramebuffer']; console.log_copy(`window_WebGLFramebuffer`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebGLProgram = function () { let arg = bodavm.memory.globalobj['WebGLProgram']; console.log_copy(`window_WebGLProgram`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebGLQuery = function () { let arg = bodavm.memory.globalobj['WebGLQuery']; console.log_copy(`window_WebGLQuery`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebGLRenderbuffer = function () { let arg = bodavm.memory.globalobj['WebGLRenderbuffer']; console.log_copy(`window_WebGLRenderbuffer`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebGLRenderingContext = function () { let arg = bodavm.memory.globalobj['WebGLRenderingContext']; console.log_copy(`window_WebGLRenderingContext`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebGLSampler = function () { let arg = bodavm.memory.globalobj['WebGLSampler']; console.log_copy(`window_WebGLSampler`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebGLShader = function () { let arg = bodavm.memory.globalobj['WebGLShader']; console.log_copy(`window_WebGLShader`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebGLShaderPrecisionFormat = function () { let arg = bodavm.memory.globalobj['WebGLShaderPrecisionFormat']; console.log_copy(`window_WebGLShaderPrecisionFormat`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebGLSync = function () { let arg = bodavm.memory.globalobj['WebGLSync']; console.log_copy(`window_WebGLSync`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebGLTexture = function () { let arg = bodavm.memory.globalobj['WebGLTexture']; console.log_copy(`window_WebGLTexture`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebGLTransformFeedback = function () { let arg = bodavm.memory.globalobj['WebGLTransformFeedback']; console.log_copy(`window_WebGLTransformFeedback`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebGLUniformLocation = function () { let arg = bodavm.memory.globalobj['WebGLUniformLocation']; console.log_copy(`window_WebGLUniformLocation`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebGLVertexArrayObject = function () { let arg = bodavm.memory.globalobj['WebGLVertexArrayObject']; console.log_copy(`window_WebGLVertexArrayObject`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebSocket = function () { let arg = bodavm.memory.globalobj['WebSocket']; console.log_copy(`window_WebSocket`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WheelEvent = function () { let arg = bodavm.memory.globalobj['WheelEvent']; console.log_copy(`window_WheelEvent`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Worker = function () { let arg = bodavm.memory.globalobj['Worker']; console.log_copy(`window_Worker`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WritableStream = function () { let arg = bodavm.memory.globalobj['WritableStream']; console.log_copy(`window_WritableStream`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WritableStreamDefaultController = function () { let arg = bodavm.memory.globalobj['WritableStreamDefaultController']; console.log_copy(`window_WritableStreamDefaultController`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WritableStreamDefaultWriter = function () { let arg = bodavm.memory.globalobj['WritableStreamDefaultWriter']; console.log_copy(`window_WritableStreamDefaultWriter`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XMLDocument = function () { let arg = bodavm.memory.globalobj['XMLDocument']; console.log_copy(`window_XMLDocument`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XMLHttpRequest = function () { let arg = bodavm.memory.globalobj['XMLHttpRequest']; console.log_copy(`window_XMLHttpRequest`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XMLHttpRequestEventTarget = function () { let arg = bodavm.memory.globalobj['XMLHttpRequestEventTarget']; console.log_copy(`window_XMLHttpRequestEventTarget`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XMLHttpRequestUpload = function () { let arg = bodavm.memory.globalobj['XMLHttpRequestUpload']; console.log_copy(`window_XMLHttpRequestUpload`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XMLSerializer = function () { let arg = bodavm.memory.globalobj['XMLSerializer']; console.log_copy(`window_XMLSerializer`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XPathEvaluator = function () { let arg = bodavm.memory.globalobj['XPathEvaluator']; console.log_copy(`window_XPathEvaluator`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XPathExpression = function () { let arg = bodavm.memory.globalobj['XPathExpression']; console.log_copy(`window_XPathExpression`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_XPathResult = function () { let arg = bodavm.memory.globalobj['XPathResult']; console.log_copy(`window_XPathResult`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebKitCSSMatrix = function () { let arg = bodavm.memory.globalobj['DOMMatrix']; console.log_copy(`window_WebKitCSSMatrix`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_WebKitMutationObserver = function () { let arg = bodavm.memory.globalobj['MutationObserver']; console.log_copy(`window_WebKitMutationObserver`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_webkitMediaStream = function () { let arg = bodavm.memory.globalobj['webkitMediaStream']; console.log_copy(`window_webkitMediaStream`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_webkitRTCPeerConnection = function () { 
        let arg = bodavm.memory.globalobj['webkitRTCPeerConnection']; console.log_copy(`window_webkitRTCPeerConnection`, `-> res ->${arg}`
        
        ); return arg }
    bodavm.envFunc.window_webkitURL = function () { let arg = bodavm.memory.globalobj['webkitURL']; console.log_copy(`window_webkitURL`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_Audio = function () { let arg = bodavm.memory.globalobj['Audio']; console.log_copy(`window_Audio`, `-> res ->${arg}`); return arg }
    bodavm.envFunc.window_IDBDatabase = function () { let arg = bodavm.memory.globalobj['IDBDatabase']; console.log_copy(`window_IDBDatabase`, `-> res ->${arg}`); return arg }




    bodavm.envFunc.window_MutationObserver = function () {
        // debugger
        // if (arguments.length<1) {
            // arguments[0]=function (){}
        // }
        let arg =bodavm.memory.globalobj['MutationObserver']
        // arg._boarg=new bodaobj.window.MutationObserver(arguments[0])
        console.log_copy(`window_MutationObserver `, `-> res ->${arg}`);
        return arg
    }
    bodavm.envFunc.window_oncanplaythrough_get = function () {
        let arg = bodavm.memory.window['oncanplaythrough']
        // arg._boarg= bodaobj.window['oncanplaythrough']

        console.log_copy(`window_oncanplaythrough_get `, `-> res ->${arg}`);
        return arg
    }
    bodavm.envFunc.window_oncanplay_get = function () {
        let arg = bodavm.memory.window['oncanplay']
        // arg._boarg= bodaobj.window['oncanplay']

        console.log_copy(`window_oncanplay_get `, `-> res ->${arg}`);
        return arg
    }
    bodavm.envFunc.window_oncancel_get = function () {
        let arg = bodavm.memory.window['oncancel']
        // arg._boarg= bodaobj.window['oncancel']
        console.log_copy(`window_oncancel_get `, `-> res ->${arg}`);
        return arg
    }
    bodavm.envFunc.window_onblur_get = function () {
        let arg = bodavm.memory.window['onblur']
        // arg._boarg= bodaobj.window['onblur']

        console.log_copy(`window_onblur_get `, `-> res ->${arg}`);
        return arg
    }
    bodavm.envFunc.window_onappinstalled_get = function () {
        let arg = bodavm.memory.window['onappinstalled']
        // arg._boarg= bodaobj.window['onappinstalled']

        console.log_copy(`window_onappinstalled_get `, `-> res ->${arg}`);
        return arg
    }
    bodavm.envFunc.window_onbeforeinstallprompt_get = function () {
        let arg = bodavm.memory.window['onbeforeinstallprompt']
        // arg._boarg= bodaobj.window['onbeforeinstallprompt']

        console.log_copy(`window_onbeforeinstallprompt_get `, `-> res ->${arg}`);
        return arg
    }
    bodavm.envFunc.window_onbeforexrselect_get = function () {
        let arg = bodavm.memory.window['onbeforexrselect']
        // arg._boarg= bodaobj.window['onbeforexrselect']

        console.log_copy(`window_onbeforexrselect_get `, `-> res ->${arg}`);
        return arg
    }

    bodavm.envFunc.window_onabort_get = function () {
        let arg = bodavm.memory.window['onabort']
        // arg._boarg= bodaobj.window['onabort']
        console.log_copy(`window_onabort_get `, `-> res ->${arg}`);
        return arg
    }
    bodavm.envFunc.window_isSecureContext_get = function () {
        let arg = bodavm.memory.window['isSecureContext']
        arg._boarg= bodaobj.window['isSecureContext']

        console.log_copy(`window_isSecureContext_get `, `-> res ->${arg}`);
        return arg
    }
    bodavm.envFunc.window_onsearch_get = function () {
        // let arg = bodavm.memory.globalobj['onsearch'] ? bodavm.memory.globalobj['onsearch'] : null
        // arg._boarg= bodaobj.window['onsearch']
        let arg = bodavm.memory.window['onsearch']
        console.log_copy(`window_onsearch_get `, `-> res ->${arg}`);
        return arg
    }
    bodavm.envFunc.window_styleMedia_get = function () {
        let arg = bodavm.memory.globalobj['styleMedia'] ? bodavm.memory.globalobj['styleMedia'] : null
        arg._boarg= bodaobj.window['styleMedia']

        console.log_copy(`window_styleMedia_get `, `-> res ->${arg}`);
        return arg
    }
    bodavm.envFunc.window_frameElement_get = function () {
        let arg = {}
        arg._boarg= bodaobj.window['frameElement']

        // arg.
        arg.__proto__=HTMLIFrameElement.prototype
        console.log_copy(`window_frameElement_get `, `-> res ->${arg} `);
        return arg
    }
    bodavm.envFunc.window_opener_get = function () {
        let arg = bodavm.memory.window['opener']
        // arg._boarg= bodaobj.window['opener']
        // let arg= bodaobj.window['opener']
        console.log_copy(`window_opener_get `, `-> res ->${arg}`);
        return arg
    }
    bodavm.envFunc.window_statusbar_get = function () {
        let arg = bodavm.memory.globalobj['statusbar']
        arg._boarg= bodaobj.window['statusbar']

        console.log_copy(`window_statusbar_get `, `-> res ->${arg}`);
        return arg
    }
    bodavm.envFunc.window_scrollbars_get = function () {
        let arg = bodavm.memory.globalobj['scrollbars']
        arg._boarg= bodaobj.window['scrollbars']

        console.log_copy(`window_scrollbars_get `, `-> res ->${arg}`);
        return arg
    }
    bodavm.envFunc.window_locationbar_get = function () {
        let arg = bodavm.memory.globalobj['locationbar']
        arg._boarg= bodaobj.window['locationbar']

        console.log_copy(`window_locationbar_get `, `-> res ->${arg}`);
        return arg
    }
    bodavm.envFunc.window_personalbar_get = function () {
        let arg = bodavm.memory.globalobj['personalbar']
        arg._boarg= bodaobj.window['personalbar']

        console.log_copy(`window_personalbar_get `, `-> res ->${arg}`);
        return arg
    }
    bodavm.envFunc.window_speechSynthesis_get = function () {
        let arg = bodavm.memory.globalobj['speechSynthesis']
        arg._boarg= bodaobj.window['speechSynthesis']

        console.log_copy(`window_speechSynthesis_get `, `-> res ->${arg}`);
        return arg
    }


    bodavm.envFunc.window_trustedTypes_get = function () {
        let arg = bodavm.memory.globalobj['trustedTypes']
        arg._boarg= bodaobj.window['trustedTypes']

        console.log_copy(`window_trustedTypes_get `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_cookieStore_get = function () {
        let arg = bodavm.memory.globalobj['cookieStore']
        arg._boarg= bodaobj.window['cookieStore']

        console.log_copy(`window_cookieStore_get `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_external_get = function () {
        let arg = bodavm.memory.globalobj['external']
        arg._boarg= bodaobj.window['external']

        console.log_copy(`window_external_get `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_caches_get = function () {
        let arg = bodavm.memory.globalobj['caches']
        arg._boarg= bodaobj.window['caches']

        console.log_copy(`window_caches_get `, `-> res -> ${arg}`);
        return arg
    }

    bodavm.envFunc.window_visualViewport_get = function () {
        let arg = bodavm.memory.globalobj['visualViewport']
        arg._boarg= bodaobj.window['visualViewport']

        console.log_copy(`window_visualViewport_get `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_menubar_get = function () {
        let arg = bodavm.memory.globalobj['menubar']
        arg._boarg= bodaobj.window['menubar']

        console.log_copy(`window_menubar_get `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_toolbar_get = function () {
        let arg = bodavm.memory.globalobj['toolbar']
        arg._boarg= bodaobj.window['toolbar']

        console.log_copy(`window_toolbar_get `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_CookieStore = function () {
        let arg = bodavm.memory.globalobj['CookieStore']
        arg._boarg= bodaobj.window['CookieStore']

        console.log_copy(`window_CookieStore `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_Storage = function () {
        let arg = bodavm.memory.globalobj['Storage']
        arg._boarg= bodaobj.window['Storage']

        console.log_copy(`window_Storage `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_Navigation = function () {
        let arg = bodavm.memory.globalobj['Navigation']
        arg._boarg= bodaobj.window['Navigation']

        console.log_copy(`window_Navigation `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_VisualViewport = function () {
        let arg = bodavm.memory.globalobj['VisualViewport']
        arg._boarg= bodaobj.window['VisualViewport']

        console.log_copy(`window_VisualViewport `, `-> res -> ${arg}`);
        return arg
    }

    bodavm.envFunc.window_History = function () {
        let arg = bodavm.memory.globalobj['History']
        arg._boarg= bodaobj.window['History']

        console.log_copy(`window_History `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_IDBFactory = function () {
        let arg = bodavm.memory.globalobj['IDBFactory']
        arg._boarg= bodaobj.window['IDBFactory']

        console.log_copy(`window_IDBFactory `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_TrustedTypePolicyFactory = function () {
        let arg = bodavm.memory.globalobj['TrustedTypePolicyFactory']
        arg._boarg= bodaobj.window['TrustedTypePolicyFactory']

        console.log_copy(`window_TrustedTypePolicyFactory `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_External = function () {
        let arg = bodavm.memory.globalobj['External']
        arg._boarg= bodaobj.window['External']

        console.log_copy(`window_External `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_CacheStorage = function () {
        let arg = bodavm.memory.globalobj['CacheStorage']
        arg._boarg= bodaobj.window['CacheStorage']

        console.log_copy(`window_CacheStorage `, `-> res -> ${arg}`);
        return arg
    }


    bodavm.envFunc.window_CustomElementRegistry = function () {
        let arg = bodavm.memory.globalobj['CustomElementRegistry']
        arg._boarg= bodaobj.window['CustomElementRegistry']

        console.log_copy(`window_CustomElementRegistry `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_Window = function () {
        let arg = bodavm.memory.globalobj['Window']
        arg._boarg= bodaobj.window['Window']

        console.log_copy(`window_Window `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_Screen = function () {
        let arg = bodavm.memory.globalobj['Screen']
        arg._boarg= bodaobj.window['Screen']

        console.log_copy(`window_Screen `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_Navigator = function () {
        let arg = bodavm.memory.globalobj['Navigator']
        arg._boarg= bodaobj.window['Navigator']

        console.log_copy(`window_Navigator `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_Performance = function () {
        let arg = bodavm.memory.globalobj['Performance']
        arg._boarg= bodaobj.window['Performance']

        console.log_copy(`window_Performance `, `-> res -> ${arg}`);
        return arg
    }

    bodavm.envFunc.window_BarProp = function () {
        let arg = bodavm.memory.globalobj['BarProp']
        arg._boarg= bodaobj.window['BarProp']

        console.log_copy(`window_BarProp `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_Location = function () {
        let arg = bodavm.memory.globalobj['Location']
        arg._boarg= bodaobj.window['Location']

        console.log_copy(`window_Location `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_Document = function () {
        let arg = bodavm.memory.globalobj['Document']
        arg._boarg= bodaobj.window['Document']

        console.log_copy(`window_Document `, `-> res -> ${arg}`);
        return arg
    }
    bodavm.envFunc.window_webkitStorageInfo_get = function () {
        let webkitStorageInfo_ = bodavm.memory.globalobj['webkitStorageInfo']
        webkitStorageInfo_._boarg= bodaobj.window['webkitStorageInfo']

        console.log_copy(`window_webkitStorageInfo_get `, `webkitStorageInfo->`, webkitStorageInfo_);
        return webkitStorageInfo_
    }
    bodavm.envFunc.window_navigation_get = function () {
        let navigation_ = bodavm.memory.globalobj['navigation']
        navigation_._boarg= bodaobj.window['navigation']

        console.log_copy(`window_navigation_get `, `navigation->`, navigation_);
        return navigation_
    }
    bodavm.envFunc.window_performance_get = function () {
        let perf = bodavm.memory.globalobj['performance']
        perf._boarg= bodaobj.window['performance']

        console.log_copy(`window_performance_get `, `performance->`, perf);
        // debugger
        return perf
    }
    bodavm.envFunc.window_navigator_get = function () {
        let navigator_ = bodavm.memory.globalobj.navigator
        console.log_copy(`window_navigator_get `, `navigator->`, navigator_);
        navigator_._boarg= bodaobj.window['navigator']

        return navigator_
    }
    bodavm.envFunc.window_customElements_get = function () {
        let customElements_ = bodavm.memory.globalobj.customElements
        customElements_._boarg= bodaobj.window['customElements']

        console.log_copy(`window_customElements_get `, `customElements->`, customElements_);

        return customElements_
    }
    bodavm.envFunc.window_screen_get = function () {
        let screen_ = bodavm.memory.globalobj.screen
        console.log_copy(`window_screen_get `, `screen->`, screen_);
        screen_._boarg= bodaobj.window['screen']

        return screen_
    }


    bodavm.envFunc.window_history_get = function () {
        let history_ = bodavm.memory.globalobj.history
        console.log_copy(`window_history_get `, `history->`, history_);
        history_._boarg= bodaobj.window['history']

        return history_
    }
    bodavm.envFunc.window_localStorage_get = function window_localStorage_get() {
        let localStorage_ = bodavm.memory.globalobj.localStorage
        console.log_copy(`window_localStorage_get `, `localStorage->`, localStorage_);
        // debugger

        // localStorage_._boarg= bodaobj.window['localStorage']
        return localStorage_
    }
    bodavm.envFunc.window_indexedDB_get = function window_indexedDB_get() {
        let indexedDB_ = bodavm.memory.globalobj.indexedDB
        console.log_copy(`window_indexedDB_get `, `indexedDB->`, indexedDB_);
        indexedDB_._boarg= bodaobj.window['indexedDB']

        return indexedDB_
    }
    bodavm.envFunc.window_sessionStorage_get = function window_sessionStorage_get() {
        let sessionStorage_ = bodavm.memory.globalobj.sessionStorage
        console.log_copy(`window_sessionStorage_get `, `sessionStorage->`, sessionStorage_);
        // sessionStorage_._boarg= bodaobj.window['sessionStorage']

        return sessionStorage_
    }
    bodavm.envFunc.window_crypto_get = function window_crypto_get() {
        let crypto_ = bodavm.memory.globalobj.crypto
        // crypto_._boarg= globalobj.window['crypto']

        console.log_copy(`window_crypto_get `, `crypto->`, crypto_);
        return crypto_
    }
    bodavm.envFunc.window_document_get = function window_document_get() {
        // debugger
        let document_ = bodavm.memory.globalobj.document
        document_._boarg= bodaobj.window['document']

        console.log_copy(`window_document_get `, `document->`, document_);
        return document_
    }
    bodavm.envFunc.window_location_get = function window_location_get() {
        // debugger
        let location_ = bodavm.memory.globalobj.location
        location_._boarg= bodaobj.window['location']

        console.log_copy(`window_location_get `, `location_->`, location_);
        return location_
    }
    bodavm.envFunc.window_clientInformation_get = function window_clientInformation_get() {
        // debugger
        let res = navigator
        res._boarg= bodaobj.window['navigator']

        console.log_copy(`window_clientInformation_get `, `-> res- >${res}`);
        return res
    }
    bodavm.envFunc.HTMLAllCollection_length_get = function () {
        debugger
        let length_ = bodavm.memory.all.length
        if (bodavm.memory.rs6  && bodavm.memory.rs6_body==0){
            console.log_copy(`HTMLAllCollection_length_get `, `length_ ->${3}`);

            return 3
        }
        console.log_copy(`HTMLAllCollection_length_get `, `length_ ->${length_}`);
        return length_
    }
   

    bodavm.envFunc.HTMLAnchorElement_hash_get = function HTMLAnchorElement_hash_get() {
        let hash = this._boarg.hash
        console.log_copy(`HTMLAnchorElement_hash_get `, `hash ->${hash}`);
        return hash
    }


    bodavm.envFunc.HTMLAnchorElement_search_get = function HTMLAnchorElement_search_get() {
        let search = this._boarg.search
        console.log_copy(`HTMLAnchorElement_search_get `, `search ->${search}`);
        return search
    }
    bodavm.envFunc.HTMLAnchorElement_href_get = function HTMLAnchorElement_href_get() {
        let href = this._boarg.href
        console.log_copy(`HTMLAnchorElement_href_get `, `href ->${href}`);
        return href
    }


    bodavm.envFunc.HTMLAnchorElement_port_get = function HTMLAnchorElement_port_get() {
        let port = this._boarg.port
        console.log_copy(`HTMLAnchorElement_port_get `, `port ->${port}`);
        return port
    }
    bodavm.envFunc.HTMLAnchorElement_pathname_get = function HTMLAnchorElement_pathname_get() {
        let pathname = this._boarg.pathname
        console.log_copy(`HTMLAnchorElement_pathname_get `, `pathname ->${pathname}`);
        return pathname
    }

    bodavm.envFunc.HTMLAnchorElement_hostname_get = function HTMLAnchorElement_hostname_get() {
        let hostname = this._boarg.hostname
        console.log_copy(`HTMLAnchorElement_hostname_get `, `hostname ->${hostname}`);
        return hostname
    }
    bodavm.envFunc.HTMLAnchorElement_protocol_get = function HTMLAnchorElement_protocol_get() {
        let protocol = this._boarg.protocol
        console.log_copy(`HTMLAnchorElement_protocol_get `, `protocol ->${protocol}`);
        return protocol
    }
    bodavm.envFunc.HTMLAnchorElement_href_set = function HTMLAnchorElement_href_set() {
        let href = arguments[0]
        this._boarg.href = href
        console.log_copy(`HTMLAnchorElement_href_set `, `href ->${href}`);
        return href
    }
    bodavm.envFunc.HTMLInputElement_type_set = function HTMLInputElement_type_set() {
        let type = arguments[0]
        this._boarg.type = type
        console.log_copy(`HTMLInputElement_type_set `, `type->${type}`);
        return type
    }

    bodavm.envFunc.HTMLFormElement_action_get = function HTMLFormElement_action_get() {
        let action = ''
        // debugger
        for (let i = 0; i < bodavm.memory.formlist.length; i++) {
            if (bodavm.memory.formlist[i] == this._boarg) {
                for (let j = 0; j < bodavm.memory.formlist[i]['child'].length; j++) {
                    if (bodavm.memory.formlist[i]['child'][j]._boarg.name != 'action') {
                        action = this._boarg.action
                    } else {
                        // debugger
                        action = bodavm.memory.formlist[i]['child'][j]
                        break
                    }
                }

            }
        }
        // action=this._boarg.action
        // debugger

        console.log_copy(`HTMLFormElement_action_get `, `action ->${action}`, `r6检测点`);
        return action
    }
    bodavm.envFunc.HTMLInputElement_name_set = function HTMLInputElement_name_set() {
        let name = arguments[0]
        this._boarg.name = name
        console.log_copy(`HTMLInputElement_name_set `, `name ->${name}`);
        return name
    }
    bodavm.envFunc.HTMLFormElement_action_set = function HTMLFormElement_action_set() {
        // debugger
        let action = arguments[0]
        this._boarg.action = action
        for (let i; i < bodavm.memory.formlist.length; i++) {
            if (bodavm.memory.formlist[i] == this._boarg) {
                bodavm.memory.formlist[i]['action'] = action

            }
        }
        // debugger
        console.log_copy(`HTMLFormElement_action_set `, `action ->${action}`);
        return action
    }
    bodavm.envFunc.Document_createExpression = function Document_createExpression() {
        // debugger
        let res = {}
        res._boarg = bodaobj.document.createExpression(arguments[0], arguments[1])
        res.__proto__ = bodavm.memory.globalobj['XPathExpression'].prototype
        
        console.log_copy(`Document_createExpression `, `-> res ->${res}`);
        return res
    }

    bodavm.envFunc.BarProp_visible_get = function BarProp_visible_get() {
        // debugger
        let boolres = true
        console.log_copy(`BarProp_visible_get `, `boolres ->${boolres}`,`未完善`);
        return boolres
    }
    bodavm.envFunc.HTMLMediaElement_canPlayType = function HTMLMediaElement_canPlayType() {
        let canplaytype = arguments[0]
        let res = ''
        switch (canplaytype) {
            case 'audio/ogg; codecs="vorbis"':
                res = 'probably'
                break
            case 'audio/wav; codecs="1"':
                res = 'probably'
                break
            case "audio/mpeg;":
                res = 'probably'
                break
            case "audio/x-m4a;audio/aac;":
                res = 'maybe'
                break
            case 'video/ogg; codecs="theora"':
                res = 'probably'
                break
            case 'video/mp4; codecs="avc1.42E01E"':
                res = 'probably'
                break
            case 'video/webm; codecs="vp8, vorbis"':
                res = 'probably'
                break
            case 'video/mp4; codecs="mp4v.20.8, mp4a.40.2"':
                res = ''
                break
            case 'video/mp4; codecs="mp4v.20.240, mp4a.40.2"':
                res = ''
                break
            case 'video/x-matroska; codecs="theora, vorbis"':
                res = ''
                break

            default:
                console.log_copy(`HTMLMediaElement_canPlayType `, `canplaytype->${canplaytype}未实现 `);
        }

        console.log_copy(`HTMLMediaElement_canPlayType `, `canplaytype ->${canplaytype}`, `-> res ->${res}`);
        return res

    }


    bodavm.envFunc.window_matchMedia = function window_matchMedia() {
        // debugger
        let arg = arguments[0]
        let res = {}
        res._media = arg
        res.__proto__ = bodavm.memory.globalobj['MediaQueryList'].prototype
        res._boisinit=true
        console.log_copy(`window_matchMedia `, `arg ->${arg}`, `-> res ->${res}`);

        return res
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onabort_set = function XMLHttpRequestEventTarget_onabort_set() {
        // debugger
        // this._boarg=
        if (arguments.length > 1) { return bodavm.toolsFunc.throwError('TypeError', 'XMLHttpRequestEventTarget_onabort_set') }
        let arg = arguments[0]
        this._boarg.onabort = arg
        console.log_copy(`XMLHttpRequestEventTarget_onabort_set `, `arg->${arg}`);
        return arg
    }

    bodavm.envFunc.XMLHttpRequestEventTarget_onerror_set = function XMLHttpRequestEventTarget_onerror_set() {
        // debugger
        // this._boarg=
        if (arguments.length > 1) { return bodavm.toolsFunc.throwError('TypeError', 'XMLHttpRequestEventTarget_onerror_set') }
        let arg = arguments[0]
        this._boarg.onerror = arg
        console.log_copy(`XMLHttpRequestEventTarget_onerror_set`, `arg->${arg}`);
        return arg
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onload_set = function XMLHttpRequestEventTarget_onload_set() {
        if (arguments.length > 1) { return bodavm.toolsFunc.throwError('TypeError', 'XMLHttpRequestEventTarget_onload_set') }
        let arg = arguments[0]
        this._boarg.onload = arg
        console.log_copy(`XMLHttpRequestEventTarget_onload_set`, `arg->${arg}`);
        return arg
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onloadend_set = function XMLHttpRequestEventTarget_onloadend_set() {
        if (arguments.length > 1) { return bodavm.toolsFunc.throwError('TypeError', 'XMLHttpRequestEventTarget_onloadend_set') }
        let arg = arguments[0]
        this._boarg.onloadend = arg
        console.log_copy(`XMLHttpRequestEventTarget_onloadend_set`, `arg->${arg}`);
        return arg
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onloadstart_set = function XMLHttpRequestEventTarget_onloadstart_set() {
        if (arguments.length > 1) { return bodavm.toolsFunc.throwError('TypeError', 'XMLHttpRequestEventTarget_onloadstart_set') }
        let arg = arguments[0]
        this._boarg.onloadstart = arg
        console.log_copy(`XMLHttpRequestEventTarget_onloadstart_set`, `arg->${arg}`);
        return arg
    }

    bodavm.envFunc.XMLHttpRequestEventTarget_onprogress_set = function XMLHttpRequestEventTarget_onprogress_set() {
        if (arguments.length > 1) { return bodavm.toolsFunc.throwError('TypeError', 'XMLHttpRequestEventTarget_onprogress_set') }
        let arg = arguments[0]
        this._boarg.onprogress = arg
        console.log_copy(`XMLHttpRequestEventTarget_onprogress_set`, `arg->${arg}`);
        return arg
    }

    bodavm.envFunc.XMLHttpRequestEventTarget_ontimeout_set = function XMLHttpRequestEventTarget_ontimeout_set() {
        if (arguments.length > 1) { return bodavm.toolsFunc.throwError('TypeError', 'XMLHttpRequestEventTarget_ontimeout_set') }
        let arg = arguments[0]
        this._boarg.ontimeout = arg
        console.log_copy(`XMLHttpRequestEventTarget_ontimeout_set`, `arg->${arg}`);
        return arg
    }



    bodavm.envFunc.XMLHttpRequest_upload_get = function XMLHttpRequest_upload_get() {
        let upload = this._boarg.upload
        console.log_copy(`XMLHttpRequestEventTarget_upload_get `, `upload -> ${upload}`);
        return upload
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_ontimeout_get = function XMLHttpRequestEventTarget_ontimeout_get() {
        let ontimeout = this._boarg.ontimeout
        console.log_copy(`XMLHttpRequestEventTarget_ontimeout_get `, `ontimeout -> ${ontimeout}`);
        return ontimeout
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onprogress_get = function XMLHttpRequestEventTarget_onprogress_get() {
        let onprogress = this._boarg.onprogress
        console.log_copy(`XMLHttpRequestEventTarget_onprogress_get `, `onprogress -> ${onprogress}`);
        return onprogress
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onloadend_get = function XMLHttpRequestEventTarget_onloadend_get() {
        let onloadend = this._boarg.onloadend
        console.log_copy(`XMLHttpRequestEventTarget_onloadend_get `, `onloadend -> ${onloadend}`);
        return onloadend
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onloadstart_get = function XMLHttpRequestEventTarget_onloadstart_get() {
        // debugger
        let onloadstart = this._boarg.onloadstart
        console.log_copy(`XMLHttpRequestEventTarget_onloadstart_get `, `onloadstart -> ${onloadstart}`);
        return onloadstart
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onerror_get = function XMLHttpRequestEventTarget_onerror_get() {
        let onerror = this._boarg.onerror
        console.log_copy(`XMLHttpRequestEventTarget_onerror_get `, `onerror -> ${onerror}`);
        return onerror
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onload_get = function XMLHttpRequestEventTarget_onload_get() {
        let onload = this._boarg.onload
        console.log_copy(`XMLHttpRequestEventTarget_onload_get `, `onerror -> ${onload}`);
        return onload
    }
    bodavm.envFunc.XMLHttpRequestEventTarget_onabort_get = function XMLHttpRequestEventTarget_onabort_get() {
        // debugger
        let onabort = this._boarg.onabort
        console.log_copy(`XMLHttpRequestEventTarget_onabort_get `, `onabort -> ${onabort}`);
        return onabort
    }
    bodavm.envFunc.XMLHttpRequest_withCredentials_set = function XMLHttpRequest_withCredentials_set() {
        debugger
        let arg = arguments[0]
        this._boarg.withCredentials = arg
        console.log_copy(`XMLHttpRequest_withCredentials_set `, `arg -> ${arg}`);
        return arg
    }
    bodavm.envFunc.CanvasRenderingContext2D_shadowBlur_set = function CanvasRenderingContext2D_shadowBlur_set() {
        // debugger
        if (bodavm.config.isdebug) { debugger };
        let shadowBlur = arguments[0]
        this._bocanvas.shadowBlur = shadowBlur
        console.log_copy(`CanvasRenderingContext2D_shadowBlur_set `, `shadowBlur ->${shadowBlur}`);
        return shadowBlur
    }
    bodavm.envFunc.CanvasRenderingContext2D_arc = function CanvasRenderingContext2D_arc() {
        // debugger
        let arg = arguments[0]
        let arg1 = arguments[1]
        let arg2 = arguments[2]
        let arg3 = arguments[3]
        let arg4 = arguments[4]
        this._bocanvas.arc(arg, arg1, arg2, arg3, arg4)
        //无返回值
        console.log_copy(`CanvasRenderingContext2D_arc `, `arg->${arg} arg1->${arg1} arg2->${arg2} arg2->${arg2} arg3->${arg3} arg4->${arg4}`);

    }
    bodavm.envFunc.CanvasRenderingContext2D_stroke = function CanvasRenderingContext2D_stroke() {
        // debugger
        //无返回值
        this._bocanvas.stroke()
        console.log_copy(`CanvasRenderingContext2D_stroke `);
    }
    bodavm.envFunc.HTMLScriptElement_text_set = function HTMLScriptElement_text_set() {
        if (bodavm.config.isdebug) { debugger };
        let arg = arguments[0]
        this._boarg.text = arg
        console.log_copy(`HTMLScriptElement_text_set `, `arg -> ${arg}`);
        return arg
    }

    bodavm.envFunc.Permissions_query = function Permissions_query() {
        // debugger
        let query = arguments[0]
        if (query['name'] == 'geolocation') {
            let res = {}
            res.__proto__ = bodavm.memory.globalobj['PermissionStatus'].prototype
            let promise = new Promise((resolve, reject) => {
                resolve(res)
            })
            console.log_copy(`Permissions_query `, `-> res ->${promise}`);

            return promise
        } else {
            console.log_copy(`Permissions_query `, `${query} 未实现`);
        }


    }
    bodavm.envFunc.Document_images_get = function () {
        // let imgs = 
        if (bodavm.config.isdebug) { debugger };
        if (bodavm.memory.collection["IMG"]){
            res=bodavm.memory.collection["IMG"]
            console.log_copy(`Document_images_get  bodavm.memory.collection["IMG"]已存在,直接返回`);
            return res
        }

        if (!bodavm.memory.collection["IMG"]){
            bodavm.memory.collection["IMG"]=[]
        }
        // else if (bodavm.memory.collection["IMG"]){
        //     console.log_copy(`Document_images_get `, `已存在bodavm.memory.collection中直接返回 imgs -> ${bodavm.memory.collection["IMG"]}`);
        //     return bodavm.memory.collection["IMG"]
        // }
        // debugger
        taglist = bodaobj.document.images
        for (let i = 0; i < taglist.length; i++) {
            // res={}
            res = bodavm.toolsFunc.setProto(taglist[i].nodeName);
            res._boarg = taglist[i]
            bodavm.memory.collection["IMG"].__proto__=Array.prototype

            // if (bodavm.memory.collection["IMG"].indexOf(res)==-1){
                bodavm.memory.collection["IMG"].push(res)
            // }
        }
        let tags=bodavm.memory.collection['IMG']
        //修改属性描述符writable为false
        for (let ind = 0; ind < tags.length; ind++) {
            Object.defineProperty(tags,ind+'',{
                value:tags[ind],
                writable: false, 
                enumerable: true, 
                configurable:true

            })            
        }
        //防止属性被删除  过检测
        bodavm.memory.collection['IMG']=new Proxy( bodavm.memory.collection['IMG'] ,{
            deleteProperty(target,propkey){
                if (target.__proto__ ==Array.prototype){
                    return true
                }
                console.log_copy(target,`正在删除属性`,propkey,`默认返回false`);
                return false
            }
        })

        bodavm.memory.collection["IMG"].__proto__ = bodavm.memory.globalobj['HTMLCollection'].prototype
        bodavm.memory.collection["IMG"]._boarg = taglist
        bodavm.memory.collection["IMG"].__proto__[Symbol.iterator] = Array.prototype[Symbol.iterator];
        console.log_copy(`Document_images_get `, `imgs -> ${bodavm.memory.collection["IMG"]}`);
        return bodavm.memory.collection["IMG"]
    }
    bodavm.envFunc.Navigator_deviceMemory_get = function Navigator_deviceMemory_get() {
        let deviceMemory = bodavm.memory.navigator['deviceMemory']
        if (bodavm.config.isdebug) { debugger };

        console.log_copy(`Navigator_deviceMemory_get `, `deviceMemory ->${deviceMemory}`);
        return deviceMemory
    }

    bodavm.envFunc.Navigator_credentials_get = function Navigator_credentials_get() {
        let credentials = bodavm.memory.cache['Navigator_credentials_get']
        if (bodavm.config.isdebug) { debugger };

        credentials.__proto__ = bodavm.memory.globalobj['CredentialsContainer'].prototype
        console.log_copy(`Navigator_credentials_get `, `credentials ->${credentials}`);
        return credentials
    }
    bodavm.envFunc.Navigator_storage_get = function Navigator_storage_get() {
        let storage = bodavm.memory.cache['Navigator_storage_get']
        // debugger
        if (bodavm.config.isdebug) { debugger };
        storage._boisinit=true
        storage.__proto__ = bodavm.memory.globalobj['StorageManager'].prototype
        console.log_copy(`Navigator_storage_get `, `storage ->${storage}`);
        return storage
    }
    bodavm.envFunc.Navigator_maxTouchPoints_get = function Navigator_maxTouchPoints_get() {
        let maxTouchPoints = bodavm.memory.navigator['maxTouchPoints']
        if (bodavm.config.isdebug) { debugger };

        console.log_copy(`Navigator_maxTouchPoints_get `, `maxTouchPoints ->${maxTouchPoints}`);
        return maxTouchPoints
    }
    bodavm.envFunc.Navigator_bluetooth_get = function Navigator_bluetooth_get() {
        let bluetooth = bodavm.memory.cache['Navigator_bluetooth_get']
        bluetooth.__proto__ = bodavm.memory.globalobj['Bluetooth'].prototype
        if (bodavm.config.isdebug) { debugger };

        console.log_copy(`Navigator_bluetooth_get `, `bluetooth ->${bluetooth}`);
        return bluetooth
    }
    bodavm.envFunc.Navigator_vendorSub_get = function Navigator_vendorSub_get() {
        let vendorSub = bodavm.memory.navigator['vendorSub']
        if (bodavm.config.isdebug) { debugger };

        console.log_copy(`Navigator_vendorSub_get `, `vendorSub ->${vendorSub}`);
        return vendorSub
    }
    bodavm.envFunc.Navigator_product_get = function Navigator_product_get() {
        let product = bodavm.memory.navigator['product']
        if (bodavm.config.isdebug) { debugger };

        console.log_copy(`Navigator_product_get `, `product ->${product}`);
        return product
    }
    bodavm.envFunc.Navigator_doNotTrack_get = function Navigator_doNotTrack_get() {
        let doNotTrack = null
        if (bodavm.config.isdebug) { debugger };

        console.log_copy(`Navigator_doNotTrack_get `, `doNotTrack ->${doNotTrack}`);
        return doNotTrack
    }
    bodavm.envFunc.RTCPeerConnection_createDataChannel = function RTCPeerConnection_createDataChannel() {
        let label = arguments[0]
        let options = arguments[1]
        if (bodavm.config.isdebug) { debugger };
        if (label == 'label') {
            let DataChannel = {}
            DataChannel.__proto__ = bodavm.memory.globalobj['RTCDataChannel'].prototype
            console.log_copy(`RTCPeerConnection_createDataChannel `, `label->${label} `, `options->${options} `, `DataChannel->${DataChannel}  `);
            return DataChannel
        }


    }
    bodavm.envFunc.RTCPeerConnection_onicegatheringstatechange_set = function RTCPeerConnection_onicegatheringstatechange_set() {
        if (bodavm.config.isdebug) { debugger };

        let change = arguments[0]
        this._onicegatheringstatechange = change
        console.log_copy(`RTCPeerConnection_onicegatheringstatechange_set `, `onicegatheringstatechange ->${_onicegatheringstatechange}`);
        return change
    }



    bodavm.envFunc.WebGLRenderingContext_getContextAttributes = function WebGLRenderingContext_getContextAttributes() {
        if (bodavm.config.isdebug) { debugger };

        let context = {
            "alpha": true,
            "antialias": true,
            "depth": true,
            "desynchronized": false,
            "failIfMajorPerformanceCaveat": false,
            "powerPreference": "default",
            "premultipliedAlpha": true,
            "preserveDrawingBuffer": false,
            "stencil": false,
            "xrCompatible": false
        }
        console.log_copy(`WebGLRenderingContext_getContextAttributes `, `context->${JSON.stringify_bo(context)}`);
        return context
    }

    bodavm.envFunc.document_write = function document_write() {
        let html = arguments[0]
        bodaobj.document.write(html)
        console.log_copy(`document_write `, `html ->${html}`);
    }
    bodavm.envFunc.window_frames_get = function window_frames_get() {
        // let iframe = bodaobj.window
        console.log_copy(`window_frames_get `, ` 返回window`);
        // iframe = bodavm.toolsFunc.proxy(iframe, 'iframewinodow')
        // iframe._bocontentiframe=true
        return window
    }
    bodavm.envFunc.window_closed_get = function window_closed_get() {
        let closed = bodavm.memory.window['closed'];
        console.log_copy(`window_closed_get `, ` window.closed->${closed}`);
        return closed

    }
    bodavm.envFunc.window_status_get = function window_status_get() {
        let status = bodavm.memory.window['status'];
        console.log_copy(`window_status_get `, ` 返回的为jsdom中的window.status->${status}`);
        return status
    }
    bodavm.envFunc.window_origin_get = function window_origin_get() {
        let origin = bodaobj.window.origin;
        console.log_copy(`window_origin_get `, ` 返回的为jsdom中的window.origin->${origin}`);
        return origin
    }
    bodavm.envFunc.window_onmessage_get = function window_onmessage_get() {
        let onmessage = bodaobj.window.onmessage;
        console.log_copy(`window_onmessage_get `, ` 返回的为jsdom中的window.onmessage ->${onmessage}`);
        return onmessage
    }


    bodavm.envFunc.window_webkitRequestFileSystem = function window_webkitRequestFileSystem() {
        debugger
        let webkitRequestFileSystem = bodavm.memory.globalobj['webkitRequestFileSystem'];
        console.log_copy(`window.webkitRequestFileSystem `, ` window.webkitRequestFileSystem 无返回值->${webkitRequestFileSystem}`);
        // return webkitRequestFileSystem
    }
    bodavm.envFunc.window_onbeforeunload_get = function window_onbeforeunload_get() {
        let onbeforeunload = bodaobj.window.onbeforeunload;
        console.log_copy(`window_onbeforeunload_get `, ` 返回的为jsdom中的window.onbeforeunload ->${onbeforeunload}`);
        return onbeforeunload
    }
    bodavm.envFunc.window_length_get = function window_length_get() {
        let _length = bodaobj.window.length;
    
        console.log_copy(`window_length_get `, ` length ->${_length}  boss直聘检测`);

        return _length
    }
    bodavm.envFunc.window_onbeforeunload_set = function window_onbeforeunload_set() {
        let arg = arguments[0]
        bodavm.memory.window['onbeforeunload'] = arg
        console.log_copy(`window_onbeforeunload_set `, ` window.onbeforeunload ->${arg}`);
    }
    bodavm.envFunc.window_openDatabase = function window_openDatabase() {
        let arg = arguments[0]
        let arg1 = arguments[1]
        let arg2 = arguments[2]
        let arg3 = arguments[2]
        // let openDatabase
        // debugger
        let database=bodavm.memory.globalobj['database']
        console.log_copy(`window_openDatabase `, `->${arg}->${arg1}->${arg2}->${arg3} database`);
        return database
    }
    bodavm.envFunc.window_defaultStatus_get = function window_defaultStatus_get() {
        let defaultStatus = bodavm.memory.window['defaultStatus']
        console.log_copy(`window_defaultStatus_get `, `defaultStatus ->${defaultStatus}`);
        return defaultStatus
    }
    bodavm.envFunc.window_defaultstatus_get = function window_defaultstatus_get() {
        let defaultstatus = bodavm.memory.window['defaultstatus']
        console.log_copy(`window_defaultstatus_get `, `defaultstatus ->${defaultstatus}`);
        return defaultstatus
    }
    bodavm.envFunc.window_innerWidth_get = function window_innerWidth_get() {
        let innerWidth = bodaobj.window['innerWidth']
        console.log_copy(`window_innerWidth_get `, `innerWidth ->${innerWidth}`);
        return innerWidth
    }
    bodavm.envFunc.window_devicePixelRatio_get = function window_devicePixelRatio_get() {
        let devicePixelRatio = bodavm.memory.window['devicePixelRatio']
        console.log_copy(`window_innerWidth_get `, `devicePixelRatio ->${devicePixelRatio}`);
        return devicePixelRatio
    }
    bodavm.envFunc.window_innerHeight_get = function window_innerHeight_get() {
        let innerHeight = bodaobj.window['innerHeight']
        console.log_copy(`window_innerHeight_get `, `innerHeight ->${innerHeight}`);
        return innerHeight
    }
    bodavm.envFunc.window_outerHeight_get = function window_outerHeight_get() {
        let outerHeight = bodaobj.window['outerHeight']
        console.log_copy(`window_outerHeight_get `, `outerHeight ->${outerHeight}`);
        return outerHeight
    }
    bodavm.envFunc.window_screenLeft_get = function window_screenLeft_get() {
        let screenLeft = bodaobj.window['screenLeft']
        console.log_copy(`window_screenLeft_get `, `screenLeft ->${screenLeft}`);
        return screenLeft
    }
    bodavm.envFunc.window_screenTop_get = function window_screenTop_get() {
        let screenTop = bodaobj.window['screenTop']
        console.log_copy(`window_screenTop_get `, `screenTop ->${screenTop}`);
        return screenTop
    }

    bodavm.envFunc.window_outerWidth_get = function window_outerWidth_get() {
        let outerWidth = bodaobj.window['outerWidth']
        console.log_copy(`window_outerWidth_get `, `outerWidth ->${outerWidth}`);
        return outerWidth
    }

    bodavm.envFunc.window_screenY_get = function window_screenY_get() {
        let screenY = bodaobj.window['screenY']
        console.log_copy(`window_screenY_get `, `screenY ->${screenY}`);
        return screenY
    }
    bodavm.envFunc.window_screenX_get = function window_screenX_get() {
        let screenX = bodaobj.window['screenX']
        console.log_copy(`window_screenX_get `, `screenX ->${screenX}`);
        return screenX
    }

    bodavm.envFunc.window_pageYOffset_get = function window_pageYOffset_get() {
        let pageYOffset = bodaobj.window.pageYOffset
        console.log_copy(`window_pageYOffset_get `, `pageYOffset ->${pageYOffset}`);
        return pageYOffset
    }
    bodavm.envFunc.window_pageXOffset_get = function window_pageXOffset_get() {
        let pageXOffset = bodaobj.window.pageXOffset
        console.log_copy(`window_pageXOffset_get `, `scrollX ->${pageXOffset}`);
        return pageXOffset
    }
    bodavm.envFunc.window_scrollX_get = function window_scrollX_get() {
        let scrollX = bodaobj.window.scrollX
        console.log_copy(`window_scrollX_get `, `scrollX ->${scrollX}`);
        return scrollX
    }
    bodavm.envFunc.window_scrollY_get = function window_scrollY_get() {
        let scrollY = bodaobj.window.scrollY
        console.log_copy(`window_scrollY_get `, `scrollY ->${scrollY}`);
        return scrollY
    }
    bodavm.envFunc.window_self_get = function () {
        // debugger;
        // if (this._bocontentiframe){debugger}
        console.log_copy(`window_self_get `, `window  `);

        if (bodavm.config.isdebug) { debugger };;

        return window
    }
    bodavm.envFunc.window_parent_get = function window_parent_get() {
        console.log_copy(`window_parent_get `, `window`);
        return window
    }
    bodavm.envFunc.window_top_get = function window_top_get() {
        console.log_copy(`window_top_get `, `window`);
        return window
    }
    bodavm.envFunc.window_name_get = function window_name_get() {
        let name = bodavm.memory.window['name']
        console.log_copy(`window_name_get `, `name ->${name}`);
        return name
    }
    bodavm.envFunc.window_name_set = function window_name_set() {
        let name = arguments[0]
        bodavm.memory.window['name'] = name
        console.log_copy(`window_name_set `, `name ->${name}`);
        return name
    }
    bodavm.envFunc.window_setTimeout = function window_setTimeout() {
        debugger
        let func = arguments[0];
        let delay = arguments[1] || 0;
        let length = arguments.length;
        let argList = [];
        for (let i = 2; i < length; i++) {
            argList.push(arguments[i]);
        }

        func=func.toString().replace(/debugger/, "").replace(/function ()/, "function xxx")

        console.log_copy(`window_setTimeout `, `func->${func} `, `delay->${delay} `, `argList->${argList}  `);
        bodavm.memory.globalInit.timeoutID += 1
        let event = {
            "callback": func,
            "delay": delay,
            "args": argList,
            "type": typeof func == 'function' ? 1 : 0,  //1代表函数,0代表code
            "timeoutID": bodavm.memory.globalInit.timeoutID,
            'settime_name':'setTimeout'
        }
        if (bodavm.memory.asyncEvent.setTimeout === undefined) {
            bodavm.memory.asyncEvent.setTimeout = [];
        }
        // bodavm.toolsFunc.symbolProperty(event)
        bodavm.memory.asyncEvent.setTimeout.push(event);

        return bodavm.memory.globalInit.timeoutID
    }
    bodavm.envFunc.window_clearTimeout = function window_clearTimeout() {
        let id = arguments[0]
        console.log_copy(`window_clearTimeout `, `${id}  `)
        bodavm.memory.asyncEvent.setTimeout.forEach(function (item, index, arr) {
            // if(bodavm.config.isdebug){debugger};

            if (item["timeoutID"] == id) {
                arr.splice(index, 1);
            }
        });
        //     }

    }
    bodavm.envFunc.window_clearInterval = function window_clearInterval() {
        let id = arguments[0]
        console.log_copy(`window_clearInterval `, `${id}  `)
        bodavm.memory.asyncEvent.setTimeout.forEach(function (item, index, arr) {
            // if(bodavm.config.isdebug){debugger};
            if (item["timeoutID"] == id) {
                arr.splice(index, 1);
            }
        });
        //     }

    }
    bodavm.envFunc.window_setInterval = function window_setInterval() {

        let func = arguments[0];
        let delay = arguments[1] || 0;
        let length = arguments.length;
        // bodavm.toolsFunc.symbolProperty(func)
        let argList = [];
        for (let i = 2; i < length; i++) {
            argList.push(arguments[i]);
        }
        func=func.toString().replace(/debugger/, "").replace(/function ()/, "function xxx")

        console.log_copy(`window_setInterval `, `func->${func.toString().length>50?func.toString().substr(0,50)+'...':func} `, `delay->${delay} `, `argList->${argList}  `);

        bodavm.memory.globalInit.timeoutID += 1
        let event = {
            "callback": func,
            "delay": delay,
            "args": argList,
            "type": typeof func == 'function' ? 1 : 0,  //1代表函数,0代表code
            "timeoutID": bodavm.memory.globalInit.timeoutID,
            'settime_name':'setInterval'

        }
        if (bodavm.memory.asyncEvent.setTimeout === undefined) {
            bodavm.memory.asyncEvent.setTimeout = [];
        }
        // bodavm.toolsFunc.symbolProperty(event)
        bodavm.memory.asyncEvent.setTimeout.push(event);

        return bodavm.memory.globalInit.timeoutID
    }


    //Storage
    bodavm.envFunc.Storage_setItem = function Storage_setItem() {

        if (bodavm.config.isdebug) { debugger }
        let keyName = arguments[0];
        let keyValue = arguments[1];
        this[keyName] = keyValue

        console.log_copy(`Storage_setItem `, `keyName->${keyName} `, `keyValue->${keyValue}  `)
    }
    bodavm.envFunc.Storage_getItem = function Storage_getItem() {

        if (bodavm.config.isdebug) { debugger }
        let key = arguments[0]
        
        let item = this[key]
        if (!item){
            _item=bodavm.memory.localStorage[key]
            if (_item){
                console.log_copy(`Storage_getItem `, `key->${key} 存在于bodavm.memory.localStorage中直接取值`, `item->${_item}  `)

                // item=_item
                return _item
            }
        }
        console.log_copy(`Storage_getItem `, `key->${key} `, `item->${item}  `)
        return item

    }
    bodavm.envFunc.Storage_removeItem = function Storage_removeItem() {
        if (bodavm.config.isdebug) { debugger }
        let key = arguments[0]
        console.log_copy(`Storage_removeItem `, `key->${key}  `);

        delete this[key]

    }
    bodavm.envFunc.Storage_key = function Storage_key() {
        if (bodavm.config.isdebug) { debugger }
        // if(bodavm.config.isdebug){debugger};;
        let index = arguments[0];
        let i = 0;
        console.log_copy(`Storage_key `, `index${index}  `)
        for (var key in this) {
            if (key =='hasOwnProperty_bo'){continue}


            if (i === index) {
                return this[key]
            }
            i++
        }
        return null
    }

    bodavm.envFunc.Storage_clear = function Storage_clear() {
        if (bodavm.config.isdebug) { debugger }
        debugger
        // this = {}
        // this.__proto__=Storage.prototype
        console.log_copy(`Storage_clear `, `{}  `);
    }

    bodavm.envFunc.Storage_length_get = function Storage_length_get() {
        let i = 0;
        if (bodavm.config.isdebug) { debugger }
        debugger
        for (var key in Object.getOwnPropertyDescriptors(this)) {
            if (key =='hasOwnProperty_bo'){continue}

            i++
        }
        console.log_copy(`Storage_length_get `, `length->${i}   `);

        return i;
    }

    //Document
    bodavm.envFunc.Document_onbeforecut_get = function Document_onbeforecut_get() { console.log_copy("Document_onbeforecut_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onbeforematch_get = function Document_onbeforematch_get() { console.log_copy("Document_onbeforematch_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onbeforexrselect_get = function Document_onbeforexrselect_get() { console.log_copy("Document_onbeforexrselect_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onblur_get = function Document_onblur_get() { console.log_copy("Document_onblur_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oncancel_get = function Document_oncancel_get() { console.log_copy("Document_oncancel_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oncanplay_get = function Document_oncanplay_get() { console.log_copy("Document_oncanplay_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_xmlVersion_get = function Document_xmlVersion_get() { console.log_copy("Document_xmlVersion_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_xmlStandalone_get = function Document_xmlStandalone_get() { console.log_copy("Document_xmlStandalone_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_xmlEncoding_get = function Document_xmlEncoding_get() { console.log_copy("Document_xmlEncoding_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_webkitVisibilityState_get = function Document_webkitVisibilityState_get() { console.log_copy("Document_webkitVisibilityState_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_webkitIsFullScreen_get = function Document_webkitIsFullScreen_get() { console.log_copy("Document_webkitIsFullScreen_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_webkitHidden_get = function Document_webkitHidden_get() { console.log_copy("Document_webkitHidden_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_webkitFullscreenEnabled_get = function Document_webkitFullscreenEnabled_get() { console.log_copy("Document_webkitFullscreenEnabled_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_webkitFullscreenElement_get = function Document_webkitFullscreenElement_get() { console.log_copy("Document_webkitFullscreenElement_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_webkitCurrentFullScreenElement_get = function Document_webkitCurrentFullScreenElement_get() { console.log_copy("Document_webkitCurrentFullScreenElement_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_wasDiscarded_get = function Document_wasDiscarded_get() { 
        
        console.log_copy("Document_wasDiscarded_get  ", false, "!!!!!!!!!未完善!!!!!!!!!!!!")
        return false
    }
    bodavm.envFunc.Document_vlinkColor_get = function Document_vlinkColor_get() { console.log_copy("Document_vlinkColor_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_visibilityState_get = function Document_visibilityState_get() {
        console.log_copy("Document_visibilityState_get  ", 'visible',)
        return 'visible'
    }
    bodavm.envFunc.Document_timeline_get = function Document_timeline_get() { console.log_copy("Document_timeline_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_styleSheets_get = function Document_styleSheets_get() { console.log_copy("Document_styleSheets_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_rootElement_get = function Document_rootElement_get() { console.log_copy("Document_rootElement_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_pointerLockElement_get = function Document_pointerLockElement_get() { console.log_copy("Document_pointerLockElement_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_plugins_get = function Document_plugins_get() { console.log_copy("Document_plugins_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_pictureInPictureEnabled_get = function Document_pictureInPictureEnabled_get() { console.log_copy("Document_pictureInPictureEnabled_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_pictureInPictureElement_get = function Document_pictureInPictureElement_get() { console.log_copy("Document_pictureInPictureElement_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onwheel_get = function Document_onwheel_get() { console.log_copy("Document_onwheel_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onwebkittransitionend_get = function Document_onwebkittransitionend_get() { console.log_copy("Document_onwebkittransitionend_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onwebkitfullscreenerror_get = function Document_onwebkitfullscreenerror_get() { console.log_copy("Document_onwebkitfullscreenerror_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onwebkitfullscreenchange_get = function Document_onwebkitfullscreenchange_get() { console.log_copy("Document_onwebkitfullscreenchange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onwebkitanimationstart_get = function Document_onwebkitanimationstart_get() { console.log_copy("Document_onwebkitanimationstart_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onwebkitanimationiteration_get = function Document_onwebkitanimationiteration_get() { console.log_copy("Document_onwebkitanimationiteration_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onwebkitanimationend_get = function Document_onwebkitanimationend_get() { console.log_copy("Document_onwebkitanimationend_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onwaiting_get = function Document_onwaiting_get() { console.log_copy("Document_onwaiting_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onvolumechange_get = function Document_onvolumechange_get() { console.log_copy("Document_onvolumechange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onvisibilitychange_get = function Document_onvisibilitychange_get() { console.log_copy("Document_onvisibilitychange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ontransitionstart_get = function Document_ontransitionstart_get() { console.log_copy("Document_ontransitionstart_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ontransitionrun_get = function Document_ontransitionrun_get() { console.log_copy("Document_ontransitionrun_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ontransitionend_get = function Document_ontransitionend_get() { console.log_copy("Document_ontransitionend_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ontransitioncancel_get = function Document_ontransitioncancel_get() { console.log_copy("Document_ontransitioncancel_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ontoggle_get = function Document_ontoggle_get() { console.log_copy("Document_ontoggle_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ontimeupdate_get = function Document_ontimeupdate_get() { console.log_copy("Document_ontimeupdate_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onsuspend_get = function Document_onsuspend_get() { console.log_copy("Document_onsuspend_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onsubmit_get = function Document_onsubmit_get() { console.log_copy("Document_onsubmit_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onstalled_get = function Document_onstalled_get() { console.log_copy("Document_onstalled_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onslotchange_get = function Document_onslotchange_get() { console.log_copy("Document_onslotchange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onselectstart_get = function Document_onselectstart_get() { console.log_copy("Document_onselectstart_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onselect_get = function Document_onselect_get() { console.log_copy("Document_onselect_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onseeking_get = function Document_onseeking_get() { console.log_copy("Document_onseeking_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onseeked_get = function Document_onseeked_get() { console.log_copy("Document_onseeked_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onsecuritypolicyviolation_get = function Document_onsecuritypolicyviolation_get() { console.log_copy("Document_onsecuritypolicyviolation_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onsearch_get = function Document_onsearch_get() { console.log_copy("Document_onsearch_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onscroll_get = function Document_onscroll_get() { console.log_copy("Document_onscroll_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onresume_get = function Document_onresume_get() { console.log_copy("Document_onresume_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onresize_get = function Document_onresize_get() { console.log_copy("Document_onresize_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onreset_get = function Document_onreset_get() { console.log_copy("Document_onreset_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onreadystatechange_get = function Document_onreadystatechange_get() { console.log_copy("Document_onreadystatechange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_activeElement_get = function Document_activeElement_get() { console.log_copy("Document_activeElement_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_adoptedStyleSheets_get = function Document_adoptedStyleSheets_get() { console.log_copy("Document_adoptedStyleSheets_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_alinkColor_get = function Document_alinkColor_get() { console.log_copy("Document_alinkColor_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }

    bodavm.envFunc.Document_anchors_get = function Document_anchors_get() { console.log_copy("Document_anchors_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_applets_get = function Document_applets_get() { console.log_copy("Document_applets_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_bgColor_get = function Document_bgColor_get() { console.log_copy("Document_bgColor_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_childElementCount_get = function Document_childElementCount_get() { console.log_copy("Document_childElementCount_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_children_get = function Document_children_get() { console.log_copy("Document_children_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_currentScript_get = function Document_currentScript_get() { 
        // debugger
        let res=this._boarg.currentScript
        console.log_copy("Document_currentScript_get  ", `-> res ->${res}`, "!!!!!!!!!未完善!!!!!!!!!!!!")
        return res
    }
    bodavm.envFunc.Document_defaultView_get = function Document_defaultView_get() { 
        console.log_copy("Document_defaultView_get ->",`res -> window` ) 
    
        return window
    }
    bodavm.envFunc.Document_doctype_get = function Document_doctype_get() { console.log_copy("Document_doctype_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_embeds_get = function Document_embeds_get() { console.log_copy("Document_embeds_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_featurePolicy_get = function Document_featurePolicy_get() { console.log_copy("Document_featurePolicy_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_fgColor_get = function Document_fgColor_get() { console.log_copy("Document_fgColor_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_firstElementChild_get = function Document_firstElementChild_get() { console.log_copy("Document_firstElementChild_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_fonts_get = function Document_fonts_get() { console.log_copy("Document_fonts_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_fragmentDirective_get = function Document_fragmentDirective_get() { console.log_copy("Document_fragmentDirective_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_fullscreen_get = function Document_fullscreen_get() { console.log_copy("Document_fullscreen_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_fullscreenElement_get = function Document_fullscreenElement_get() { console.log_copy("Document_fullscreenElement_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_fullscreenEnabled_get = function Document_fullscreenEnabled_get() { console.log_copy("Document_fullscreenEnabled_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_lastElementChild_get = function Document_lastElementChild_get() { console.log_copy("Document_lastElementChild_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_linkColor_get = function Document_linkColor_get() { console.log_copy("Document_linkColor_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_links_get = function Document_links_get() { console.log_copy("Document_links_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onabort_get = function Document_onabort_get() { console.log_copy("Document_onabort_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onanimationend_get = function Document_onanimationend_get() { console.log_copy("Document_onanimationend_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onanimationiteration_get = function Document_onanimationiteration_get() { console.log_copy("Document_onanimationiteration_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onanimationstart_get = function Document_onanimationstart_get() { console.log_copy("Document_onanimationstart_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onauxclick_get = function Document_onauxclick_get() { console.log_copy("Document_onauxclick_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onbeforecopy_get = function Document_onbeforecopy_get() { console.log_copy("Document_onbeforecopy_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onbeforepaste_get = function Document_onbeforepaste_get() { console.log_copy("Document_onbeforepaste_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oncanplaythrough_get = function Document_oncanplaythrough_get() { console.log_copy("Document_oncanplaythrough_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onchange_get = function Document_onchange_get() { console.log_copy("Document_onchange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onclick_get = function Document_onclick_get() { console.log_copy("Document_onclick_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onclose_get = function Document_onclose_get() { console.log_copy("Document_onclose_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oncontextlost_get = function Document_oncontextlost_get() { console.log_copy("Document_oncontextlost_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oncontextmenu_get = function Document_oncontextmenu_get() { console.log_copy("Document_oncontextmenu_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oncontextrestored_get = function Document_oncontextrestored_get() { console.log_copy("Document_oncontextrestored_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oncopy_get = function Document_oncopy_get() { console.log_copy("Document_oncopy_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oncuechange_get = function Document_oncuechange_get() { console.log_copy("Document_oncuechange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oncut_get = function Document_oncut_get() { console.log_copy("Document_oncut_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ondblclick_get = function Document_ondblclick_get() { console.log_copy("Document_ondblclick_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ondrag_get = function Document_ondrag_get() { console.log_copy("Document_ondrag_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ondragend_get = function Document_ondragend_get() { console.log_copy("Document_ondragend_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ondragenter_get = function Document_ondragenter_get() { console.log_copy("Document_ondragenter_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ondragleave_get = function Document_ondragleave_get() { console.log_copy("Document_ondragleave_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ondragover_get = function Document_ondragover_get() { console.log_copy("Document_ondragover_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ondragstart_get = function Document_ondragstart_get() { console.log_copy("Document_ondragstart_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ondrop_get = function Document_ondrop_get() { console.log_copy("Document_ondrop_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ondurationchange_get = function Document_ondurationchange_get() { console.log_copy("Document_ondurationchange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onended_get = function Document_onended_get() { console.log_copy("Document_onended_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onemptied_get = function Document_onemptied_get() { console.log_copy("Document_onemptied_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onerror_get = function Document_onerror_get() { console.log_copy("Document_onerror_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onfocus_get = function Document_onfocus_get() { console.log_copy("Document_onfocus_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onformdata_get = function Document_onformdata_get() { console.log_copy("Document_onformdata_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onfreeze_get = function Document_onfreeze_get() { console.log_copy("Document_onfreeze_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onfullscreenchange_get = function Document_onfullscreenchange_get() { console.log_copy("Document_onfullscreenchange_get  ", undefined, "!!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onfullscreenerror_get = function Document_onfullscreenerror_get() { console.log_copy("Document_onfullscreenerror_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_ongotpointercapture_get = function Document_ongotpointercapture_get() { console.log_copy("Document_ongotpointercapture_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oninput_get = function Document_oninput_get() { console.log_copy("Document_oninput_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_oninvalid_get = function Document_oninvalid_get() { console.log_copy("Document_oninvalid_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onkeydown_get = function Document_onkeydown_get() { console.log_copy("Document_onkeydown_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onkeyup_get = function Document_onkeyup_get() { console.log_copy("Document_onkeyup_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onload_get = function Document_onload_get() { console.log_copy("Document_onload_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onloadeddata_get = function Document_onloadeddata_get() { console.log_copy("Document_onloadeddata_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onloadedmetadata_get = function Document_onloadedmetadata_get() { console.log_copy("Document_onloadedmetadata_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onlostpointercapture_get = function Document_onlostpointercapture_get() { console.log_copy("Document_onlostpointercapture_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onloadstart_get = function Document_onloadstart_get() { console.log_copy("Document_onloadstart_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onmousedown_get = function Document_onmousedown_get() { console.log_copy("Document_onmousedown_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onmouseenter_get = function Document_onmouseenter_get() { console.log_copy("Document_onmouseenter_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onmouseleave_get = function Document_onmouseleave_get() { console.log_copy("Document_onmouseleave_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onmouseout_get = function Document_onmouseout_get() { console.log_copy("Document_onmouseout_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onmouseover_get = function Document_onmouseover_get() { console.log_copy("Document_onmouseover_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onmouseup_get = function Document_onmouseup_get() { console.log_copy("Document_onmouseup_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onmousewheel_get = function Document_onmousewheel_get() { console.log_copy("Document_onmousewheel_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpaste_get = function Document_onpaste_get() { console.log_copy("Document_onpaste_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpause_get = function Document_onpause_get() { console.log_copy("Document_onpause_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onplay_get = function Document_onplay_get() { console.log_copy("Document_onplay_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onplaying_get = function Document_onplaying_get() { console.log_copy("Document_onplaying_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointercancel_get = function Document_onpointercancel_get() { console.log_copy("Document_onpointercancel_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointerdown_get = function Document_onpointerdown_get() { console.log_copy("Document_onpointerdown_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointerenter_get = function Document_onpointerenter_get() { console.log_copy("Document_onpointerenter_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointerleave_get = function Document_onpointerleave_get() { console.log_copy("Document_onpointerleave_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointerlockerror_get = function Document_onpointerlockerror_get() { console.log_copy("Document_onpointerlockerror_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointerlockchange_get = function Document_onpointerlockchange_get() { console.log_copy("Document_onpointerlockchange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointermove_get = function Document_onpointermove_get() { console.log_copy("Document_onpointermove_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointerout_get = function Document_onpointerout_get() { console.log_copy("Document_onpointerout_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointerover_get = function Document_onpointerover_get() { console.log_copy("Document_onpointerover_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointerrawupdate_get = function Document_onpointerrawupdate_get() { console.log_copy("Document_onpointerrawupdate_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onpointerup_get = function Document_onpointerup_get() { console.log_copy("Document_onpointerup_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onprogress_get = function Document_onprogress_get() { console.log_copy("Document_onprogress_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_onratechange_get = function Document_onratechange_get() { console.log_copy("Document_onratechange_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Document_querySelector = function Document_querySelector() { 
        arg=arguments[0]
        if ((!bodavm.memory.cache['Document_querySelector'][arg])){
            bodavm.memory.cache['Document_querySelector'][arg]={}
        }else{
            console.log_copy(`Document_querySelector ->`,`arg->`,arg,'已存在直接返回')
            return bodavm.memory.cache['Document_querySelector'][arg]
        }
        select=bodavm.memory.cache['Document_querySelector'][arg]

        let res=this._boarg.querySelector(arg)
        select._boarg=res
        console.log_copy("Document_querySelector ->",`-> res ->${res}`)
        
        res=bodavm.toolsFunc.setProto(res.nodeName)
        // if (res){debugger}
        return res
    }
    bodavm.envFunc.Document_write=function (){
        let html = arguments[0]
        bodaobj.document.write(html)
        console.log_copy(`Document_write `, `html ->${html}`);
    }
    bodavm.envFunc.Document_createEvent = function Document_createEvent() {
        // debugger
        let arg = arguments[0].toUpperCase()
        let event = {}
        switch (arg) {
            case 'MOUSEEVENT':

                event.__proto__ = bodavm.memory.globalobj['MouseEvent'].prototype
                console.log_copy(`Document_createEvent `, event);
                bodavm.toolsFunc.symbolProperty(event)
                return event
            case 'EVENT':
                event.__proto__ = bodavm.memory.globalobj['Event'].prototype
                console.log_copy(`Document_createEvent `, event);
                bodavm.toolsFunc.symbolProperty(event)
                return event

            case "TOUCHEVENT":
                console.log_copy(`Document_createEvent  `, event, `   该事件只有在触摸平面（触摸屏、触摸板等）才会触发`);
                return bodavm.toolsFunc.throwError('DOMException', `Failed to execute 'createEvent'on 'Document': The provided event type ('TouchEvent') is invalid.`)
            default:
                console.log_copy(`Document_createEvent  `, `${arg}  未实现`);

        }


    }
    bodavm.envFunc.Document_scripts_get = function Document_scripts_get() {
        if (bodavm.memory.collection["scripts"]){
            console.log_copy(`Document_scripts_get 在bodavm.memory.collection[${"scripts"}] 已存在,直接返回`)
            return bodavm.memory.collection["scripts"]
        }
        // let res = {}
        if (!bodavm.memory.collection["scripts"]){
            bodavm.memory.collection["scripts"]=[]
        }
        taglist = bodaobj.document.scripts

        for (let i = 0; i < taglist.length; i++) {
            // res={}
            res = bodavm.toolsFunc.setProto(taglist[i].nodeName);
            res._boarg = taglist[i]
            bodavm.memory.collection["scripts"].__proto__=Array.prototype

            // if (bodavm.memory.collection["scripts"].indexOf(res)==-1){
                bodavm.memory.collection["scripts"].push(res)
            // }
        }
        
        let tags=bodavm.memory.collection['scripts']
        //修改属性描述符writable为false
        for (let ind = 0; ind < tags.length; ind++) {
            Object.defineProperty(tags,ind+'',{
                value:tags[ind],
                writable: false, 
                enumerable: true, 
                configurable:true

            },'bobo')            
        }
        //防止属性被删除  过检测
        bodavm.memory.collection['scripts']=new Proxy( bodavm.memory.collection['scripts'] ,{
            deleteProperty(target,propkey){
                if (target.__proto__ ==Array.prototype){
                    return true
                }
                console.log_copy(target,`正在删除属性`,propkey,`默认返回false`);
                return false
            }
        })



        bodavm.memory.collection["scripts"].__proto__ = bodavm.memory.globalobj['HTMLCollection'].prototype
        bodavm.memory.collection["scripts"]._boarg = taglist

        console.log_copy(`Document_scripts_get `, `-> res ->${bodavm.memory.collection["scripts"]}`);
        bodavm.memory.collection["scripts"].__proto__[Symbol.iterator] = Array.prototype[Symbol.iterator];
        return bodavm.memory.collection["scripts"]
    }
    bodavm.envFunc.Document_body_set = function Document_body_set() {


        return bodavm.toolsFunc.throwError('TypeError', `Document_body_set失败  `)
    }
    bodavm.envFunc.Document_forms_get = function Document_forms_get() {
        if (bodavm.config.isdebug) { debugger };;
        let forms = this[0]._tagelements["FORM"]
        console.log_copy(`Document_forms_get `, `${forms}  `);

        return forms

    }


    bodavm.envFunc.Document_URL_get = function Document_URL_get() {
        let URL = bodaobj.document["URL"]
        console.log_copy(`Document_URL_get `, `${URL}  `);
        if (bodavm.config.isdebug) { debugger };;
        return URL
    }



    bodavm.envFunc.Document_lastModified_get = function Document_lastModified_get() {
        let date = new Date();
        let month = date.getMonth() + 1
        month = month > 11 ? month : '0' + month
        let day = date.getDate()
        let year = date.getFullYear()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let time = `${month}/${day}/${year} ${hours}->${minutes}->${seconds}`
        console.log_copy(`Document_lastModified_get `, `${time}  `);
        return time;
    }
    bodavm.envFunc.Document_contentType_get = function Document_contentType_get() {
        let contenttype = bodaobj.document['contentType']
        console.log_copy(`Document_contentType_get `, `${contenttype}  `);
        if (bodavm.config.isdebug) { debugger };;

        return contenttype
    }
    bodavm.envFunc.Document_inputEncoding_get = function Document_inputEncoding_get() {
        let inputEncoding = bodaobj.document['inputEncoding']
        console.log_copy(`Document_inputEncoding_get `, `${inputEncoding}  `);
        if (bodavm.config.isdebug) { debugger };;

        return inputEncoding
    }
    bodavm.envFunc.Document_referrer_get = function Document_referrer_get() {
        if (bodavm.config.isdebug) { debugger }

        let referrer = bodaobj.document["referrer"]
        console.log_copy(`Document_referrer_get `, `${referrer}  `);
        return referrer
    }

    bodavm.envFunc.Document_createElement = function Document_createElement() {
        if (typeof arguments[0] !=='string'){
            return bodavm.toolsFunc.throwError('DOMException',`Failed to execute 'createElement' on 'Document': The tag name provided ('${arguments[0]}') is not a valid name.`)
        }
        let tagName = arguments[0].toLowerCase();
        let options = arguments[1];
        var dom = {}
        if (bodavm.config.isdebug) { debugger };
        switch (tagName) {
            case "option":
                dom._boarg = bodaobj.document.createElement('option')
                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLOptionElement'].prototype)
                break;
            case "select":
                dom._boarg = bodaobj.document.createElement('select')
                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLSelectElement'].prototype)
                break;

            case "ul":

                dom._boarg = bodaobj.document.createElement('ul')
                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLUListElement'].prototype)
                break;
            case "h4":

                dom._boarg = bodaobj.document.createElement('h4')
                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLHeadingElement'].prototype)
                break;
            case "h3":

                dom._boarg = bodaobj.document.createElement('h3')
                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLHeadingElement'].prototype)
                break;
            case "h2":

                dom._boarg = bodaobj.document.createElement('h2')
                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLHeadingElement'].prototype)
                break;

            case "div":

                dom._boarg = bodaobj.document.createElement('div')
                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLDivElement'].prototype)
                break;
            case "meta":
                dom._boarg = bodaobj.document.createElement('meta')
                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLMetaElement'].prototype)
                break;
            case "canvas":
                dom._boarg = bodaobj.document.createElement('canvas')
                dom._bocanvas = bocreateCanvas(300, 150)
                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLCanvasElement'].prototype)
                break;
            case "a":
                dom._boarg = bodaobj.document.createElement('a')

                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLAnchorElement'].prototype)
                break;
            case "script":
                dom._boarg = bodaobj.document.createElement('script')

                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLScriptElement'].prototype)
                break;
            case "style":
                dom._boarg = bodaobj.document.createElement('style')

                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLStyleElement'].prototype)
                break;
            case "head":
                dom._boarg = bodaobj.document.createElement('head')

                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLHeadElement'].prototype)
                break;
            case "body":
                dom._boarg = bodaobj.document.createElement('body')

                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLBodyElement'].prototype)
                break;
            case "form":
                dom._boarg = bodaobj.document.createElement('form')

                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLFormElement'].prototype)
                // dom=new Proxy(dom,{
                //     delete(target,porp){
                //         debugger
                //     }
                // })
                bodavm.memory.formlist.push(dom._boarg)

                break;
            case "p":
                dom._boarg = bodaobj.document.createElement('p')

                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLParagraphElement'].prototype)
                break;
            case "iframe":
                dom._boarg = bodaobj.document.createElement('iframe')

                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLIFrameElement'].prototype)
                break;
            case "span":
                dom._boarg = bodaobj.document.createElement('span')

                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLSpanElement'].prototype)
                break;
            case "img":
                dom._boarg = bodaobj.document.createElement('img')

                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLImageElement'].prototype)
                break;
            case "li":
                dom._boarg = bodaobj.document.createElement('li')

                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLLIElement'].prototype)
                break;
            case 'h1':
                dom._boarg = bodaobj.document.createElement('h1')

                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLHeadingElement'].prototype)
                break;
            case 'audio':
                dom._boarg = bodaobj.document.createElement('audio')
                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLAudioElement'].prototype)
                break
            case 'video':
                dom._boarg = bodaobj.document.createElement('video')
                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLVideoElement'].prototype)
                break
            case 'input':
                dom._boarg = bodaobj.document.createElement('input')
                dom = Object.setPrototypeOf(dom, bodavm.memory.globalobj['HTMLInputElement'].prototype)
                break
            default:
                console.log_copy(`Document_createElement `, `${tagName}属性未实现  `);
                break;
        }
        console.log_copy(`Document_createElement `, `tagName->${tagName} `, dom)
        return dom;

    }
    bodavm.envFunc.Document_body_get = function Document_body_get() {

        if (bodavm.config.isdebug) { debugger };;
        if (bodavm.memory.rs6 && bodavm.memory.rs6_body == 0) {
            bodavm.memory.rs6_body = 1
            console.log_copy(`Document_body_get `, `当前网站为r6使用该功能,否则请关闭`, `body->${null}  `);
            return null
        }
        let res =bodavm.memory.cache['Document_body_get']
        res._boarg = bodaobj.document.body
        res.__proto__=HTMLBodyElement.prototype
        console.log_copy(`Document_body_get `, `body->${res}  `);
        return res

    }
    bodavm.envFunc.Document_domain_get = function Document_domain_get() {
        let domain = bodaobj.document["domain"]
        if (bodavm.config.isdebug) { debugger }
        console.log_copy(`Document_domain_get `, `${domain}  `)
        return domain
    }

    bodavm.envFunc.Document_domain_set = function Document_domain_set() {
        let domain = arguments[0]
        bodaobj.document["domain"] = domain
        console.log_copy(`Document_domain_set `, `${domain}  `)
        if (bodavm.config.isdebug) { debugger }
        return domain
    }
    bodavm.envFunc.Document_getElementById = function Document_getElementById() {
        // debugger
        if (bodavm.config.isdebug) { debugger };

        let id = arguments[0]
        let res = bodaobj.document.getElementById(id)
        if (res) {
            // let value={}
            value = bodavm.toolsFunc.setProto(res.nodeName)
            value._boarg = res  //防止this丢失
            console.log_copy(`Document_getElementById `, `id->${id}`, ` res->${value}`);
            return value
        } else {
            console.log_copy(`Document_getElementById `, `id->${id}`, ` res->${null}`);
            return null

        }

    }

    //'[{"type":"node","tag":"meta",attrs:{"id":id}},{"type":"node","tag":"canvas"},{"type":"node","tag":"a"},{"type":"node","tag":"script"},{"type":"node","tag":"style"}]'
    bodavm.envFunc.Document_getElementsByTagName = function Document_getElementsByTagName() {
        var tagName = arguments[0].toUpperCase()
        // debugger

        if (bodavm.memory.collection[tagName] && bodavm.memory.collection[tagName].length){
            console.log_copy(`Document_getElementsByTagName 在bodavm.memory.collection[${tagName}] 已存在,直接返回`)
            return bodavm.memory.collection[tagName]
        }

        if (!bodavm.memory.collection[tagName]){
            bodavm.memory.collection[tagName]=[]
        }
        
        let taglist = bodaobj.document.getElementsByTagName(tagName)
        num = 0
        for (let i = 0; i < taglist.length; i++) {
            num++
            if (num == 2 && tagName == 'SCRIPT' && bodavm.config.isrs) {
                // debugger
                break

            }
            // res={}
            res = bodavm.toolsFunc.setProto(taglist[i].nodeName);
            res._boarg = taglist[i]
            bodavm.memory.collection[tagName].__proto__=Array.prototype
            bodavm.memory.collection[tagName].push(res)
            
        }
        //过检测 
        let tags=bodavm.memory.collection[tagName]
        //修改属性描述符writable为false
        // for (let ind = 0; ind < tags.length; ind++) {
        //     Object.defineProperty(tags,ind+'',{
        //         value:tags[ind],
        //         writable: false, 
        //         enumerable: true, 
        //         configurable:true

        //     })            
        // }
        //防止属性被删除  过检测
        bodavm.memory.collection[tagName]=new Proxy( bodavm.memory.collection[tagName] ,{
            deleteProperty(target,propkey){
                if (target.__proto__ ==Array.prototype){
                    return true
                }
                console.log_copy(target,`正在删除属性`,propkey,`默认返回false`);
                return false
            }
        })
        
        bodavm.memory.collection[tagName].__proto__ = bodavm.memory.globalobj['HTMLCollection'].prototype
        bodavm.memory.collection[tagName]._boarg = taglist
        console.log_copy(`Document_getElementsByTagName `, `tagName->${tagName} `, ` taglist->${taglist}`);
        bodavm.memory.collection[tagName].__proto__[Symbol.iterator] = Array.prototype[Symbol.iterator];
        // taglist._boisinit=true
        return bodavm.memory.collection[tagName]

    }

    bodavm.envFunc.Document_cookie_get = function Document_cookie_get() {
        // debugger
        if (this._contentiframe){
            console.log_copy(`iframe下的document获取cookie,直接返回''`);
            return ''
        }
        let jsonCookie = bodavm.memory.globalInit.jsonCookie;
        
        let tempCookie ="";
        // debugger
        for (var  key in jsonCookie) {
            if (key =='hasOwnProperty_bo'){continue}
            if (key === "") {
                tempCookie += `${jsonCookie[key]}; `;
            } else {
                tempCookie += `${key}=${jsonCookie[key]}; `;
            }
        }
        // cookie=bodaobj.document.cookie
        console.log_copy(`Document_cookie_get `, `cookie -> ${tempCookie}`);
        return tempCookie;
    }
    bodavm.envFunc.Document_cookie_set = function Document_cookie_set() {
        let cookieValue = arguments[0];
        debugger
        let index = cookieValue.indexOf(";");
        if (index !== -1) {
            cookieValue = cookieValue.substring(0, index);
        }
        if (cookieValue.indexOf("=") === -1) {
            bodavm.memory.globalInit.jsonCookie[""] = cookieValue.trim();
        } else {
            let item = cookieValue.split("=");
            let k = item[0].trim();
            let v = item[1].trim();
            bodavm.memory.globalInit.jsonCookie[k] = v;
        }
        // bodaobj.document.cookie=cookieValue
        console.log_copy(`Document_cookie_set `, `cookie -> ${cookieValue}`);
        return cookieValue
    }
    bodavm.envFunc.document_location_get = function document_location_get() {
        if (bodavm.config.isdebug) { debugger }
        let location_ = bodavm.memory.globalobj.location
        location_._boarg= bodaobj.window['location']

        console.log_copy(`document_location_get `, `location_->`, location_);
        return location_
    }

    bodavm.envFunc.Document_characterSet_get = function Document_characterSet_get() {
        let characterSet = bodaobj.document['characterSet']
        console.log_copy(`Document_characterSet_get `, `${characterSet}  `);
        if (bodavm.config.isdebug) { debugger };;

        return characterSet
    }
    bodavm.envFunc.Document_charset_get = function Document_charset_get() {
        let charset = bodaobj.document['charset']
        console.log_copy(`Document_characterSet_get `, `${charset}  `);
        if (bodavm.config.isdebug) { debugger };;

        return charset
    }

    bodavm.envFunc.Document_title_set = function Document_title_set() {
        let title = arguments[0]
        bodaobj.document["title"] = title

        console.log_copy(`Document_title_set `, `${title}  `)
        if (bodavm.config.isdebug) { debugger };;

        return title
    }
    bodavm.envFunc.Document_title_get = function Document_title_get() {
        let title = bodaobj.document["title"]
        console.log_copy(`Document_title_get `, `${title}  `)
        return title
    }
    bodavm.envFunc.Document_dir_set = function Document_dir_set() {
        let dir = arguments[0]
        bodaobj.document["dir"] = dir
        console.log_copy(`Document_dir_set `, `${dir}  `)
        if (bodavm.config.isdebug) { debugger };;

        return dir
    }
    bodavm.envFunc.Document_dir_get = function Document_dir_get() {
        let dir = bodaobj.document["dir"]
        console.log_copy(`Document_dir_get `, `${dir}  `)
        if (bodavm.config.isdebug) { debugger };;

        return dir
    }

    bodavm.envFunc.Document_designMode_set = function Document_designMode_set() {
        let designMode = arguments[0]
        bodaobj.document["designMode"] = designMode
        console.log_copy(`Document_designMode_set `, `${designMode}  `)
        if (bodavm.config.isdebug) { debugger }
        return designMode
    }
    bodavm.envFunc.Document_designMode_get = function Document_designMode_get() {
        let designMode = bodaobj.document["designMode"]
        console.log_copy(`Document_designMode_get `, `${designMode}  `)
        if (bodavm.config.isdebug) { debugger }
        return designMode
    }
    bodavm.envFunc.Document_documentElement_get = function Document_documentElement_get() {
        if (bodavm.config.isdebug) { debugger }
        // debugger
        // let htmlElement={}
        
        let html = bodaobj.document.documentElement
        res=bodavm.memory.cache['Document_documentElement_get']
        res._boarg=html
        res.__proto__=HTMLHtmlElement.prototype
        // res._boarg=html
        res._boisinit=bodavm.config.isinit

        console.log_copy(`Document_documentElement_get `, `html->${res}  `);
        return res

    }



    bodavm.envFunc.Document_hidden_get = function Document_hidden_get() {
        let hidden = bodaobj.document['hidden']
        console.log_copy(`Document_hidden_get `, `${hidden}  `);
        if (bodavm.config.isdebug) { debugger };;

        return hidden
    }

    bodavm.envFunc.Document_documentURI_get = function Document_documentURI_get() {
        if (bodavm.config.isdebug) { debugger }
        let documentURI = bodaobj.document["documentURI"]
        console.log_copy(`Document_documentURI_get `, `${documentURI}  `);
        return documentURI
    }
    bodavm.envFunc.Document_compatMode_get = function Document_compatMode_get() {
        if (bodavm.config.isdebug) { debugger }
        let compatMode = bodaobj.document["compatMode"]
        console.log_copy(`Document_compatMode_get `, `${compatMode}  `);
        return compatMode
    }

    bodavm.envFunc.Document_onmousemove_get = function Document_onmousemove_get() {
        if (bodavm.config.isdebug) { debugger }
        let onmousemove = bodaobj.document['onmousemove']
        console.log_copy(`Document_onmousemove_get `, `onmousemove->${onmousemove}  `);
        return onmousemove
    }

    bodavm.envFunc.Document_onselectionchange_get = function Document_onselectionchange_get() {
        if (bodavm.config.isdebug) { debugger }
        let onselectionchange = bodaobj.document['onselectionchange']
        console.log_copy(`Document_onselectionchange_get `, `onselectionchange->${onselectionchange}  `);
        return onselectionchange
    }

    bodavm.envFunc.Document_scrollingElement_get = function Document_scrollingElement_get() {
        if (bodavm.config.isdebug) { debugger }
        let res = bodavm.memory.cache['Document_scrollingElement_get']
        let html = bodaobj.document.documentElement
        res = bodavm.toolsFunc.setProto('html')
        res._boarg = html    
        // return onselectionchange
        console.log_copy(`Document_scrollingElement_get==> `, `html->${html}`);
        return html
    }


    //HTMLDivElement
    bodavm.envFunc.HTMLDivElement_align_get = function HTMLDivElement_align_get() {
        let align = bodavm.memory.htmldivelement['align']
        console.log_copy(`HTMLDivElement_align_get `, `${align}  `)
        if (bodavm.config.isdebug) { debugger };;

        return align
    }
    bodavm.envFunc.HTMLDivElement_align_set = function HTMLDivElement_align_set() {
        let value = arguments[0]
        bodavm.memory.htmldivelement['align'] = value
        console.log_copy(`HTMLDivElement_align_set==> `, `${value}  `)
        if (bodavm.config.isdebug) { debugger };;

        return value
    }

    //HTMLMetaElement  
    bodavm.envFunc.HTMLMetaElement_content_get = function HTMLMetaElement_content_get() {
        if (bodavm.config.isdebug) { debugger }
        // debugger
        let content = this._boarg.content
        // let value = self.attr["content"]
        console.log_copy(`HTMLMetaElement_content_get `, `content->${content.length > 50 ? content.substr(0, 30) + '...' : content}  `);
        return content

    }
    bodavm.envFunc.HTMLMetaElement_content_set = function HTMLMetaElement_content_set() {
        var value = arguments[0]
        console.log_copy(`HTMLMetaElement_content_set `, `${value}  `)
        if (bodavm.config.isdebug) { debugger }
        this['_elements'][0].attr["content"] = value
        return value


    }
    bodavm.envFunc.HTMLMetaElement_name_set = function HTMLMetaElement_name_set() {
        var value = arguments[0]
        console.log_copy(`HTMLMetaElement_name_set `, `${value}  `, `!!!!!!!!!未完善!!!!!!!!!!!!`)
        this['_elements'][0].attr["name"] = value
        if (bodavm.config.isdebug) { debugger }

        return value
    }

    bodavm.envFunc.HTMLMetaElement_name_get = function HTMLMetaElement_name_get() {
        let value = this['_elements'][0].attr["name"]
        if (bodavm.config.isdebug) { debugger }

        console.log_copy(`HTMLMetaElement_name_get `, `${value}  `, `!!!!!!!!!未完善!!!!!!!!!!!!`);
        return value
    }


    //Node
    // Node_replaceChild
    bodavm.envFunc.Node_replaceChild = function Node_replaceChild() {
        debugger
        console.log_copy(`Node_replaceChild`, `!!!!!!!!!未完善!!!!!!!!!!!!`);
    }
    bodavm.envFunc.Node_textContent_get = function Node_textContent_get() {
        // debugger
        let content = undefined
        if (this instanceof bodavm.memory.globalobj['HTMLFormElement']) {
            for (let i = 0; i < bodavm.memory.formlist.length; i++) {
                if (bodavm.memory.formlist[i] == this._boarg) {
                    for (let j = 0; j < bodavm.memory.formlist[i]['child'].length; j++) {
                        if (bodavm.memory.formlist[i]['child'][j]._boarg.name == 'textContent') {
                            content = bodavm.memory.formlist[i]['child'][j]
                            break
                        }
                    }
                }
            }
        }else{
            content=this._boarg.textContent
        }
        console.log_copy("Node_textContent_get ", `content ->${content}`, `r6检测点`)
        return content

    }
    bodavm.envFunc.Node_previousSibling_get = function Node_previousSibling_get() { console.log_copy("Node_previousSibling_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Node_ownerDocument_get = function Node_ownerDocument_get() { 
        res=this._boarg.ownerDocument
        console.log_copy("Node_ownerDocument_get ->", `res ->`,res) 
    }
    bodavm.envFunc.Node_baseURI_get = function Node_baseURI_get() { console.log_copy("Node_baseURI_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Node_childNodes_get = function Node_childNodes_get() { 
        // debugger
        let Nodelists={}
        Nodelists._boarg=this._boarg.childNodes
        Nodelists.__proto__=NodeList.prototype
        console.log_copy("Node_childNodes_get ->",`-> res->${Nodelists}`) 
        return Nodelists
    }
    bodavm.envFunc.Node_isConnected_get = function Node_isConnected_get() { console.log_copy("Node_isConnected_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Node_nextSibling_get = function Node_nextSibling_get() {
        // debugger
         res = bodavm.memory.cache['Node_nextSibling_get']
         let _next = this._boarg.nextSibling
        if (_next == null) {
            console.log_copy(`Node_nextSibling_get `, `-> res -> null`);
            return null
        } else {
            res = bodavm.toolsFunc.setProto(_next.nodeName)
            res._boarg = _next
            res._boisinit=bodavm.config.isinit
        }

        console.log_copy(`Node_nextSibling_get `, `-> res->${res}`);
        return res
    }
    bodavm.envFunc.Node_nodeType_get = function Node_nodeType_get() {
        if (bodavm.config.isdebug) { debugger }
        // debugger
        let nodetype = this._boarg.nodeType
        console.log_copy(`Node_nodeType_get `, `nodetype ->${nodetype}`);
        return nodetype
    }
    bodavm.envFunc.Node_nodeValue_get = function Node_nodeValue_get() { console.log_copy("Node_nodeValue_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }

    bodavm.envFunc.Node_nodeName_get = function Node_nodeName_get() {
        // debugger
        nodeName_=this._boarg.nodeName
        if (bodavm.config.isdebug) { debugger }
        console.log_copy(`Node_nodeName_get ->`,` res -> ${ nodeName_}`);
        return nodeName_
    }
    bodavm.envFunc.Node_firstChild_get = function Node_firstChild_get() {
        // debugger
        let res = {
            _boisinit:bodavm.config.isinit
        }
        let frist_ = this._boarg.firstChild
        if (frist_) {
            res = bodavm.toolsFunc.setProto(frist_.nodeName)
            res._boarg = frist_
        } else {
            res = null
        }
        console.log_copy(`Node_firstChild_get `, `-> res->${res}`);

        return res

    }
    bodavm.envFunc.Node_insertBefore = function Node_insertBefore() {
        let newNode = arguments[0]
        let referenceNode = arguments[1]
        console.log_copy(`Node_insertBefore `, `!!!!!!!!!未完善!!!!!!!!!!!! `);


    }
    bodavm.envFunc.Node_lastChild_get = function Node_lastChild_get() {
        if (bodavm.config.isdebug) { debugger }

        console.log_copy(`Node_lastChild_get `, `lastChild->${lastChild} !!!!!!!!!未完善!!!!!!!!!!!! `);
    }

    bodavm.envFunc.Node_cloneNode = function Node_cloneNode() {
        let mode = arguments[0]
        res=this._boarg.cloneNode(mode)
        console.log_copy(`Node_cloneNode ->`, `res ->`,res);

        return res
    }
    bodavm.envFunc.Node_parentNode_get = function Node_parentNode_get() {
        //获取父节点
        // debugger
        
        if (bodavm.config.isdebug) { debugger }
        let parent = this._boarg.parentNode
        if (bodavm.memory.cache['Node_parentNode_get']['parent']==parent){
            console.log_copy(`Node_parentNode_get parent在bodavm.memory.cache['Node_parentNode_get']['parent']已存在,直接返回`);
            return bodavm.memory.cache['Node_parentNode_get']['res']
        }
        let res=bodavm.memory.cache['Node_parentNode_get']['res']
        
        if (parent){
            // if (!(bodavm.memory.cache['Node_parentNode_get']['parent'])){
            //     bodavm.memory.cache['Node_parentNode_get']['parent']=parent
            // }else{
                // 
            // }
        //    debugger
            res = bodavm.toolsFunc.setProto(parent.nodeName)
            res._boarg = parent
            bodavm.memory.cache['Node_parentNode_get']['parent']=parent

            bodavm.memory.cache['Node_parentNode_get']['res']=res
        }else{
            res=null
        }
        
        console.log_copy(`Node_parentNode_get `, `parent->${res}  `);
        return res;
    }
    bodavm.envFunc.Node_removeChild = function Node_removeChild() {
        //删除子节点
        
        if (bodavm.config.isdebug) { debugger };;
        let child = arguments[0]
        this._boarg.removeChild(child._boarg)
        let tagname=child._boarg.nodeName
        console.log_copy(`Node_removeChild `, `child->${child}`);
        if (bodavm.memory.collection[tagname]){
            for (let i = 0; i < bodavm.memory.collection[tagname].length; i++) {
                if (child ==bodavm.memory.collection[tagname][i]){
                    debugger
                    console.log_copy(`当前对象 tagname:${tagname},child:${child} 存在bodavm.memory.collection ,重置bodavm.memory.collection[${tagname}]`)
                    bodavm.memory.collection[tagname].__proto__=Array.prototype
                    bodavm.memory.collection[tagname].splice(i,1)
                    bodavm.memory.collection[tagname].__proto__=bodavm.memory.globalobj['HTMLCollection'].prototype
                }
                
            }
        }
        // debugger

        return child


    }
    bodavm.envFunc.Node_parentElement_get = function Node_parentElement_get() {

        if (bodavm.config.isdebug) { debugger };;
        let parent = {}
        // debugger
        let temp = this._boarg.parentElement
        if (temp){
            parent = bodavm.toolsFunc.setProto(temp.nodeName)
            parent._boarg = temp
        }else{
            parent=null
        }
        console.log_copy(`Node_parentElement_get ->`, `parent ->${parent} `);


        return parent;
    }
    bodavm.envFunc.Node_appendChild = function Node_appendChild() {
        // ;debugger
        if (bodavm.config.isdebug) { debugger };;
        // debugger
        let child = arguments[0]
        // debugger

        if (child ==this){
        }
        if (this instanceof  HTMLFormElement) {
            for (let i = 0; i < bodavm.memory.formlist.length; i++) {
                if (this._boarg == bodavm.memory.formlist[i]) {
                    if (bodavm.memory.formlist[i]['child'] == undefined) {
                        bodavm.memory.formlist[i]['child'] = []
                    }
                    bodavm.memory.formlist[i]['child'].push(child)
                }

            }
        }
        if (child.id && (this==document.body || this ==document.head || this ==document.documentElement)){
            debugger
            // eval(window[child.id]=child=new Proxy(child,{
            //     deleteProperty(target,propkey){

            //         debugger
            //         console.log(`Node_appendChild window[`,child.id,']',`正在删除属性 target ->`,target,`propkey ->`,propkey);
            //         return true
            //     }
            // }))
            // eval(`${arguments[0]=new Proxy(arguments[0],{})}`)
            // window[child.id]=new Proxy(child,{
                
            // })
            // window[child.id]=
            window[child.id]=child
            // window[child.id]=new Proxy(window[child.id],{
            //     deleteProperty(){
            //         debugger
            //     }
            // })
            
        }
        try{
            this._boarg.appendChild(child._boarg)

        }catch{
            return bodavm.toolsFunc.throwError('DOMException',`Failed to execute 'appendChild' on 'Node': The new child element contains the parent.`)

        }
        // bobo$(this._boarg).append(child._boarg)
        console.log_copy(`Node_appendChild `, `child->${child}`);
        return child
    }

    //Element
    bodavm.envFunc.Element_ariaAtomic_get = function Element_ariaAtomic_get() { console.log_copy("Element_ariaAtomic_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaAutoComplete_get = function Element_ariaAutoComplete_get() { console.log_copy("Element_ariaAutoComplete_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaBusy_get = function Element_ariaBusy_get() { console.log_copy("Element_ariaBusy_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaChecked_get = function Element_ariaChecked_get() { console.log_copy("Element_ariaChecked_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaColCount_get = function Element_ariaColCount_get() { console.log_copy("Element_ariaColCount_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaDescription_get = function Element_ariaDescription_get() { console.log_copy("Element_ariaDescription_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaCurrent_get = function Element_ariaCurrent_get() { console.log_copy("Element_ariaCurrent_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaColSpan_get = function Element_ariaColSpan_get() { console.log_copy("Element_ariaColSpan_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaColIndex_get = function Element_ariaColIndex_get() { console.log_copy("Element_ariaColIndex_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaDisabled_get = function Element_ariaDisabled_get() { console.log_copy("Element_ariaDisabled_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaExpanded_get = function Element_ariaExpanded_get() { console.log_copy("Element_ariaExpanded_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaHasPopup_get = function Element_ariaHasPopup_get() { console.log_copy("Element_ariaHasPopup_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaHidden_get = function Element_ariaHidden_get() { console.log_copy("Element_ariaHidden_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaInvalid_get = function Element_ariaInvalid_get() { console.log_copy("Element_ariaInvalid_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaKeyShortcuts_get = function Element_ariaKeyShortcuts_get() { console.log_copy("Element_ariaKeyShortcuts_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaLevel_get = function Element_ariaLevel_get() { console.log_copy("Element_ariaLevel_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaLabel_get = function Element_ariaLabel_get() { console.log_copy("Element_ariaLabel_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaLive_get = function Element_ariaLive_get() { console.log_copy("Element_ariaLive_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaModal_get = function Element_ariaModal_get() { console.log_copy("Element_ariaModal_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaMultiLine_get = function Element_ariaMultiLine_get() { console.log_copy("Element_ariaMultiLine_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaMultiSelectable_get = function Element_ariaMultiSelectable_get() { console.log_copy("Element_ariaMultiSelectable_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaOrientation_get = function Element_ariaOrientation_get() { console.log_copy("Element_ariaOrientation_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaPlaceholder_get = function Element_ariaPlaceholder_get() { console.log_copy("Element_ariaPlaceholder_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaPosInSet_get = function Element_ariaPosInSet_get() { console.log_copy("Element_ariaPosInSet_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaPressed_get = function Element_ariaPressed_get() { console.log_copy("Element_ariaPressed_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaReadOnly_get = function Element_ariaReadOnly_get() { console.log_copy("Element_ariaReadOnly_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaRequired_get = function Element_ariaRequired_get() { console.log_copy("Element_ariaRequired_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaRelevant_get = function Element_ariaRelevant_get() { console.log_copy("Element_ariaRelevant_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaRoleDescription_get = function Element_ariaRoleDescription_get() { console.log_copy("Element_ariaRoleDescription_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaRowCount_get = function Element_ariaRowCount_get() { console.log_copy("Element_ariaRowCount_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaRowIndex_get = function Element_ariaRowIndex_get() { console.log_copy("Element_ariaRowIndex_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaRowSpan_get = function Element_ariaRowSpan_get() { console.log_copy("Element_ariaRowSpan_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaSelected_get = function Element_ariaSelected_get() { console.log_copy("Element_ariaSelected_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaSort_get = function Element_ariaSort_get() { console.log_copy("Element_ariaSort_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaSetSize_get = function Element_ariaSetSize_get() { console.log_copy("Element_ariaSetSize_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaValueMax_get = function Element_ariaValueMax_get() { console.log_copy("Element_ariaValueMax_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaValueMin_get = function Element_ariaValueMin_get() { console.log_copy("Element_ariaValueMin_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaValueNow_get = function Element_ariaValueNow_get() { console.log_copy("Element_ariaValueNow_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_ariaValueText_get = function Element_ariaValueText_get() { console.log_copy("Element_ariaValueText_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_assignedSlot_get = function Element_assignedSlot_get() { console.log_copy("Element_assignedSlot_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_attributeStyleMap_get = function Element_attributeStyleMap_get() { console.log_copy("Element_attributeStyleMap_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_childElementCount_get = function Element_childElementCount_get() { console.log_copy("ElementCount_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_classList_get = function Element_classList_get() { console.log_copy("Element_classList_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_className_get = function Element_className_get() { console.log_copy("Element_className_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_elementTiming_get = function Element_elementTiming_get() { console.log_copy("Element_elementTiming_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_firstElementChild_get = function Element_firstElementChild_get() { console.log_copy("ElementChild_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_lastElementChild_get = function Element_lastElementChild_get() { console.log_copy("ElementChild_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_localName_get = function Element_localName_get() { console.log_copy("Element_localName_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_namespaceURI_get = function Element_namespaceURI_get() { console.log_copy("Element_namespaceURI_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_nextElementSibling_get = function Element_nextElementSibling_get() { console.log_copy("ElementSibling_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_onbeforecopy_get = function Element_onbeforecopy_get() { console.log_copy("Element_onbeforecopy_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_onbeforecut_get = function Element_onbeforecut_get() { console.log_copy("Element_onbeforecut_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_onbeforepaste_get = function Element_onbeforepaste_get() { console.log_copy("Element_onbeforepaste_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_onfullscreenchange_get = function Element_onfullscreenchange_get() { console.log_copy("Element_onfullscreenchange_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_onfullscreenerror_get = function Element_onfullscreenerror_get() { console.log_copy("Element_onfullscreenerror_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_onsearch_get = function Element_onsearch_get() { console.log_copy("Element_onsearch_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_onwebkitfullscreenchange_get = function Element_onwebkitfullscreenchange_get() { console.log_copy("Element_onwebkitfullscreenchange_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_onwebkitfullscreenerror_get = function Element_onwebkitfullscreenerror_get() { console.log_copy("Element_onwebkitfullscreenerror_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_part_get = function Element_part_get() { console.log_copy("Element_part_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_prefix_get = function Element_prefix_get() { console.log_copy("Element_prefix_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_previousElementSibling_get = function Element_previousElementSibling_get() { console.log_copy("ElementSibling_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_scrollHeight_get = function Element_scrollHeight_get() { console.log_copy("Element_scrollHeight_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_shadowRoot_get = function Element_shadowRoot_get() { console.log_copy("Element_shadowRoot_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_scrollWidth_get = function Element_scrollWidth_get() { console.log_copy("Element_scrollWidth_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_slot_get = function Element_slot_get() { console.log_copy("Element_slot_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Element_tagName_get = function Element_tagName_get() {
        let tagname = this._boarg.tagName
        if (bodavm.memory.isdebug) { debugger }
        console.log_copy("Element_tagName_get   ", `tagname->${tagname}`)
        return tagname
    }

    bodavm.envFunc.Element_getElementsByClassName = function Element_getElementsByClassName() {
        class_list={}
        console.log_copy(`Element_getElementsByClassName `, `!!!!!!!!!未完善!!!!!!!!!!!!  `);

        class_list.__proto__ = bodavm.memory.globalobj['HTMLCollection'].prototype
        return class_list

    }
    bodavm.envFunc.Element_append = function Element_append() {
        let child = arguments[0]
        console.log_copy(`Element_append `, `child->${child}`);
        this._boarg.append(child._boarg)
        // debugger

    }
    bodavm.envFunc.Element_id_get = function () {
        if (bodavm.config.isdebug) { debugger }
        let id = this._boarg.id
        // debugger
        if (this instanceof HTMLFormElement) {
            for (let i = 0; i < bodavm.memory.formlist.length; i++) {
                if (bodavm.memory.formlist[i] == this._boarg) {
                    if (bodavm.memory.formlist[i]['child']){
                        for (let j = 0; j < bodavm.memory.formlist[i]['child'].length; j++) {
                            if (bodavm.memory.formlist[i]['child'][j]._boarg.name == 'id') {
                                id = bodavm.memory.formlist[i]['child'][j]
                            }
                        }
                    }
                    
                }
            }
        }
        console.log_copy("Element_id_get ", `id ->${id}`, `r6检测点`)
        return id

    }
    bodavm.envFunc.Element_id_set = function Element_id_set() {
        // let value=arguments[0]

        if (bodavm.config.isdebug) { debugger }
        // debugger
        // bodavm.toolsFunc.setProtoAttr.call(this,'id',id)
        this._boarg['id'] = arguments[0]
        console.log_copy(`Element_id_set `, ` id->${arguments[0]}`);
        return arguments[0]
    }
    bodavm.envFunc.Element_className_set = function () {
        // let className = arguments[0]
        // debugger
        if (bodavm.config.isdebug) { debugger }
        
        // bodavm.toolsFunc.setProtoAttr.call(this, 'className', className)
        this._boarg.className =arguments[0]
        console.log_copy(`Element_className_set -> `, `arg ->`,arguments[0]);
        // return className

    }
    bodavm.envFunc.Element_attributes_get = function () {
        debugger
        console.log_copy(`Element_attributes_get `, `!!!!!!!!!未完善!!!!!!!!!!!! `);

    }
    bodavm.envFunc.Element_scrollLeft_get = function Element_scrollLeft_get() {
        console.log_copy(`Element_scrollLeft_get `, `${0}  `);
        if (bodavm.config.isdebug) { debugger };;

        return 0
    }
    bodavm.envFunc.Element_clientLeft_get = function Element_clientLeft_get() {
        console.log_copy(`Element_clientLeft_get `, `${0}  `);
        if (bodavm.config.isdebug) { debugger };;

        return 0
    }

    bodavm.envFunc.Element_clientTop_get = function Element_clientTop_get() {
        console.log_copy(`Element_clientTop_get `, `${0}  `);
        if (bodavm.config.isdebug) { debugger };;

        return 0
    }
    bodavm.envFunc.Element_scrollTop_get = function Element_scrollTop_get() {

        console.log_copy(`Element_scrollTop_get `, `${0}  `);
        if (bodavm.config.isdebug) { debugger };;

        return 0
    }


    bodavm.envFunc.Element_remove = function Element_remove() {
        if (bodavm.config.isdebug) { debugger };;
        debugger
        // let tagname = this._tagName
        // let self = this
        this._boarg.remove()
        console.log_copy(`Element_remove ->`,'removeobj ->',this)
        // if (class_) {
        //     //取到bodavm.memory.tag[0]._className[class_]列表

        //     for (let i = 0; i < bodavm.memory.tag[0]._className[class_].length; i++) {
        //         if (bodavm.memory.tag[0]._className[class_][i] == this) {
        //             bodavm.memory.tag[0]._className[class_].splice(i, 1)
        //         }

        //     }
        // }
        // for (let i = 0; i < bodavm.memory.tag[0]._tagelements[tagname].length; i++) {
        //     if (bodavm.memory.tag[0]._tagelements[tagname][i] == this) {
        //         bodavm.memory.tag[0]._tagelements[tagname].splice(i, 1)
        //     }

        // }



    }
    bodavm.envFunc.Element_clientHeight_get = function Element_clientHeight_get() {
        let clientHeight = 0
        console.log_copy(`Element_clientHeight_get `, `${clientHeight}  `);
        if (bodavm.config.isdebug) { debugger };;

        return clientHeight
    }
    bodavm.envFunc.Element_removeAttribute = function Element_removeAttribute() {
        let attr = arguments[0]
        //无返回值
        if (bodavm.config.isdebug) { debugger };;
        this._boarg.removeAttribute(attr)
        console.log_copy(`Element_removeAttribute `, `${attr}  `, `=============================!!!!!!!!!未完善!!!!!!!!!!!!`);
        //IE 返回 boolean 类型值，其他返回 undefined
    }
    bodavm.envFunc.Element_setAttribute = function Element_setAttribute() {
        // debugger
        if (bodavm.config.isdebug) { debugger };;
        //无返回值
        let name = arguments[0]
        let value = arguments[1]
        this._boarg.setAttribute(name, value)

        console.log_copy(`Element_setAttribute `, `name->${name} `, `value->${value}  `);
        ;

    }
    bodavm.envFunc.Element_clientWidth_get = function Element_clientWidth_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log_copy(`Element_clientWidth_get  `, `${0}  `);

        return 0
    }
    bodavm.envFunc.Element_outerHTML_get = function Element_outerHTML_get() {

        // let outerHtml = this._elements[0].outerHTML
        let outhtml = this._boarg.outerHTML
        console.log_copy(`Element_outerHTML_get==> `, `outhtml->${outhtml}`,);
        if (bodavm.config.isdebug) { debugger };;
        //腾讯qq邮箱hk

        return outhtml
    }

    bodavm.envFunc.Element_children_get = function Element_children_get() {
        if (bodavm.config.isdebug) { debugger };;

        tagName=this._boarg.nodeName
        if (bodavm.memory.collection[tagName]){
            console.log_copy(`Element_children_get `, `bodavm.memory.collection[${tagName}]已存在直接返回`);
            return bodavm.memory.collection[tagName]
        }
        if (!bodavm.memory.collection[tagName]){
            bodavm.memory.collection[tagName]=[]
        }

        if (bodavm.config.isdebug) { debugger };
        let taglist = this._boarg.children
        for (let i = 0; i < taglist.length; i++) {
            // res={}
            res = bodavm.toolsFunc.setProto(taglist[i].nodeName);
            res._boarg = taglist[i]
            bodavm.memory.collection[tagName].__proto__=Array.prototype
            // if (bodavm.memory.collection[tagName].indexOf(res)==-1){
                bodavm.memory.collection[tagName].push(res)
            // }

        }

        let tags=bodavm.memory.collection[tagName]
        //修改属性描述符writable为false
        for (let ind = 0; ind < tags.length; ind++) {
            Object.defineProperty(tags,ind+'',{
                value:tags[ind],
                writable: false, 
                enumerable: true, 
                configurable:true

            })            
        }
        //防止属性被删除  过检测
        bodavm.memory.collection[tagName]=new Proxy( bodavm.memory.collection[tagName] ,{
            deleteProperty(target,propkey){
                if (target.__proto__ ==Array.prototype){
                    return true
                }
                console.log_copy(target,`正在删除属性`,propkey,`默认返回false`);
                return false
            }
        })

        bodavm.memory.collection[tagName].__proto__ = bodavm.memory.globalobj['HTMLCollection'].prototype
        bodavm.memory.collection[tagName]._boarg = taglist
        console.log_copy(`Element_children_get `, ` taglist->${taglist}`);
        bodavm.memory.collection[tagName].__proto__[Symbol.iterator] = Array.prototype[Symbol.iterator];

        return bodavm.memory.collection[tagName]

    }
    bodavm.envFunc.Element_getBoundingClientRect = function Element_getBoundingClientRect() {
        // debugger
        if (bodavm.config.isdebug) { debugger };;

        console.log_copy(`Element_getBoundingClientRect`, '!!!!!!!!!未完善!!!!!!!!!!!!');
    }
    bodavm.envFunc.Element_innerHTML_get = function Element_innerHTML_get() {
        let res = this._boarg.innerHTML
        if (bodavm.config.isdebug) { debugger };;

        console.log_copy(`Element_innerHTML_get `, `-> res->${res}`);
        return res

    }
    bodavm.envFunc.Element_innerHTML_set = function Element_innerHTML_set() {
        // debugger
        if (bodavm.config.isdebug) { debugger };;
        let html = arguments[0] + '';
        this._boarg.innerHTML = html
        console.log_copy(`Element_innerHTML_set `, `html->${html}`);
        return html
    }
    bodavm.envFunc.Element_getAttribute = function () {
        let attr = arguments[0]
        // debugger
        if (bodavm.config.isdebug) { debugger; }
        let value = this._boarg.getAttribute(attr)
        console.log_copy(`Element_getAttribute `, `attr->${attr} `, `value->${value}  `)

        return value

    }
    //// '[{"type":"node","tag":"meta","id":"","className":""},{"type":"node","tag":"meta","id":"","className":""},{"type":"node","tag":"head","id":"","className":""},{"type":"node","tag":"body","id":"","className":""}]'
    //ok
    bodavm.envFunc.Element_getElementsByTagName = function Element_getElementsByTagName() {
        if (bodavm.config.isdebug) { debugger; }
        // debugger
        let tagName = arguments[0].toUpperCase();
        if (bodavm.memory.collection[tagName]){
            console.log_copy(`Element_getElementsByTagName`,`bodavm.memory.collection[${tagName}] 已存在直接返回`)
            return bodavm.memory.collection[tagName]
        }
        if (!bodavm.memory.collection[tagName]){
            bodavm.memory.collection[tagName]=[]
        }
        if (bodavm.config.isdebug) { debugger };
        let taglist = this._boarg.getElementsByTagName(tagName)

        for (let i = 0; i < taglist.length; i++) {
            // res={}
            res = bodavm.toolsFunc.setProto(taglist[i].nodeName);
            res._boarg = taglist[i]
            bodavm.memory.collection[tagName].__proto__=Array.prototype
            bodavm.memory.collection[tagName].push(res)
        }
        let tags=bodavm.memory.collection[tagName]
        //修改属性描述符writable为false
        for (let ind = 0; ind < tags.length; ind++) {
            Object.defineProperty(tags,ind+'',{
                value:tags[ind],
                writable: false, 
                enumerable: true, 
                configurable:true

            })            
        }
        //防止属性被删除
        bodavm.memory.collection[tagName]=new Proxy( bodavm.memory.collection[tagName] ,{
            deleteProperty(target,propkey){
                if (target.__proto__ ==Array.prototype){
                    return true
                }
                console.log_copy(target,`正在删除属性`,propkey,`默认返回false`);
                return false
            }
        })

        bodavm.memory.collection[tagName].__proto__ = bodavm.memory.globalobj['HTMLCollection'].prototype
        bodavm.memory.collection[tagName]._boarg = taglist
        console.log_copy(`Element_getElementsByTagName `, `tagName->${tagName} `, ` taglist->${taglist}`);
        bodavm.memory.collection[tagName].__proto__[Symbol.iterator] = Array.prototype[Symbol.iterator];
        return bodavm.memory.collection[tagName]
    }

    //Navigator
    bodavm.envFunc.Navigator_clipboard_get = function Navigator_clipboard_get() { console.log_copy("Navigator_clipboard_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_geolocation_get = function Navigator_geolocation_get() { console.log_copy("Navigator_geolocation_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_hid_get = function Navigator_hid_get() { console.log_copy("Navigator_hid_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_ink_get = function Navigator_ink_get() { console.log_copy("Navigator_ink_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_keyboard_get = function Navigator_keyboard_get() { console.log_copy("Navigator_keyboard_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_locks_get = function Navigator_locks_get() {
        let locks = bodavm.memory.cache['Navigator_locks_get']
        locks.__proto__ = bodavm.memory.globalobj['LockManager'].prototype
        console.log_copy("Navigator_locks_get ", `locks ->${locks}`)
        return locks
    }
    bodavm.envFunc.Navigator_managed_get = function Navigator_managed_get() { console.log_copy("Navigator_managed_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_mediaCapabilities_get = function Navigator_mediaCapabilities_get() { console.log_copy("Navigator_mediaCapabilities_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_mediaDevices_get = function Navigator_mediaDevices_get() { console.log_copy("Navigator_mediaDevices_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_mediaSession_get = function Navigator_mediaSession_get() { console.log_copy("Navigator_mediaSession_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_onLine_get = function Navigator_onLine_get() { console.log_copy("Navigator_onLine_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_pdfViewerEnabled_get = function Navigator_pdfViewerEnabled_get() { console.log_copy("Navigator_pdfViewerEnabled_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_permissions_get = function Navigator_permissions_get() {
        // debugger
        let permissions = bodavm.memory.cache['Navigator_permissions_get']
        permissions.__proto__ = bodavm.memory.globalobj['Permissions'].prototype

        console.log_copy("Navigator_permissions_get ", `permissions->${permissions}`)
        return permissions
    }
    bodavm.envFunc.Navigator_presentation_get = function Navigator_presentation_get() { console.log_copy("Navigator_presentation_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_scheduling_get = function Navigator_scheduling_get() { console.log_copy("Navigator_scheduling_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_serial_get = function Navigator_serial_get() { console.log_copy("Navigator_serial_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_serviceWorker_get = function Navigator_serviceWorker_get() { console.log_copy("Navigator_serviceWorker_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_usb_get = function Navigator_usb_get() { console.log_copy("Navigator_usb_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_userActivation_get = function Navigator_userActivation_get() { console.log_copy("Navigator_userActivation_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_virtualKeyboard_get = function Navigator_virtualKeyboard_get() { console.log_copy("Navigator_virtualKeyboard_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_wakeLock_get = function Navigator_wakeLock_get() { console.log_copy("Navigator_wakeLock_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.Navigator_webkitTemporaryStorage_get = function Navigator_webkitTemporaryStorage_get() { console.log_copy("Navigator_webkitTemporaryStorage_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }


    bodavm.envFunc.Navigator_javaEnabled = function () {
        let javaEnabled = bodavm.memory.navigator['javaEnabled']
        console.log_copy(`Navigator_javaEnabled `, `${javaEnabled}  `);
        return javaEnabled
    }
    bodavm.envFunc.Navigator_productSub_get = function () {
        if (bodavm.config.isdebug) { debugger; }
        let productSub = bodavm.memory.navigator["productSub"]
        console.log_copy(`Navigator_productSub_get `, `${productSub}  `);
        return productSub
    }
    bodavm.envFunc.Navigator_userAgentData_get = function () {
        if (bodavm.config.isdebug) { debugger; }

        let userAgentData = bodavm.memory.navigator["userAgentData"]
        console.log_copy(`Navigator_userAgentData_get `, `${userAgentData}  `);
        return userAgentData
    }

    bodavm.envFunc.Navigator_xr_get = function Navigator_xr_get() {
        if (bodavm.config.isdebug) { debugger; }
        let xr = bodavm.memory.navigator["xr"]
        console.log_copy(`Navigator_xr_get `, `${xr}  `);
        return xr
    }

    bodavm.envFunc.Navigator_appCodeName_get = function Navigator_appCodeName_get() {
        let appCodeName = bodavm.memory.navigator["appCodeName"]
        console.log_copy(`Navigator_appCodeName_get `, `${appCodeName}  `);
        if (bodavm.config.isdebug) { debugger };;

        return appCodeName
    }
    bodavm.envFunc.Navigator_appName_get = function Navigator_appName_get() {
        let appName = bodavm.memory.navigator["appName"]
        console.log_copy(`Navigator_appName_get `, `${appName}  `);
        if (bodavm.config.isdebug) { debugger };;

        return appName
    }
    bodavm.envFunc.Navigator_vendor_get = function Navigator_vendor_get() {
        let vendor = bodavm.memory.navigator["vendor"]
        console.log_copy(`Navigator_vendor_get `, `${vendor}  `);
        if (bodavm.config.isdebug) { debugger };;

        return vendor
    }
    bodavm.envFunc.Navigator_platform_get = function Navigator_platform_get() {
        let platform = bodavm.memory.navigator['platform']
        console.log_copy(`Navigator_platform_get `, `${platform}  `);
        if (bodavm.config.isdebug) { debugger };;

        return platform;
    }


    bodavm.envFunc.Navigator_hardwareConcurrency_get = function Navigator_hardwareConcurrency_get() {
        console.log_copy(`Navigator_hardwareConcurrency_get `, `${8}  `);
        return 8
    }
    bodavm.envFunc.Navigator_plugins_get = function Navigator_plugin_get() {
        let plugin = bodavm.memory.globalInit.pluginArray;
        console.log_copy(`Navigator_plugins_get `, `plugin->${plugin}  `)
        res=Object.create(plugin)
        return res
    }
    bodavm.envFunc.Navigator_mimeTypes_get = function Navigator_mimeTypes_get() {

        let mimeTypeArray = bodavm.memory.globalInit["mimeTypeArray"]
        console.log_copy(`Navigator_mimeTypes_get `, `${mimeTypeArray}  `)
        return mimeTypeArray
    }
    bodavm.envFunc.Navigator_userAgent_get = function Navigator_userAgent_get() {
        let ua = bodavm.memory.navigator["userAgent"]
        // debugger
        console.log_copy(`Navigator_userAgent_get `, `${ua}  `)
        // debugger
        return ua
    }
    bodavm.envFunc.Navigator_webkitPersistentStorage_get = function Navigator_webkitPersistentStorage_get() {
        let webkitPersistentStorage = bodavm.memory.navigator['webkitPersistentStorage']
        // DocumentFragment对象
        // debugger
        bodavm.memory.globalobj['DeprecatedStorageQuota'] = function DeprecatedStorageQuota() { }
        bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DeprecatedStorageQuota'], "DeprecatedStorageQuota");

        bodavm.toolsFunc.defineProperty('DeprecatedStorageQuota', "queryUsageAndQuota", { configurable: true, enumerable: true, get: function DeprecatedStorageQuota() { return bodavm.toolsFunc.dispatch(this, DeprecatedStorageQuota.prototype, "DeprecatedStorageQuota", "queryUsageAndQuota_get  ", arguments) }, set: function DeprecatedStorageQuota() { return bodavm.toolsFunc.dispatch(this, DeprecatedStorageQuota.prototype, "DeprecatedStorageQuota", "queryUsageAndQuota_set", arguments) } }, 'prototype');
        bodavm.toolsFunc.defineProperty('DeprecatedStorageQuota', "requestQuota", { configurable: true, enumerable: true, get: function DeprecatedStorageQuota() { return bodavm.toolsFunc.dispatch(this, DeprecatedStorageQuota.prototype, "DeprecatedStorageQuota", "requestQuota_get  ", arguments) }, set: function requestQuota() { return bodavm.toolsFunc.dispatch(this, DeprecatedStorageQuota.prototype, "DeprecatedStorageQuota", "requestQuota_set", arguments) } }, 'prototype');

        Object.setPrototypeOf(webkitPersistentStorage, bodavm.memory.globalobj['DeprecatedStorageQuota'].prototype)
        delete bodavm.memory.globalobj['DeprecatedStorageQuota'].prototype.constructor;
        console.log_copy(`Navigator_webkitPersistentStorage_get `, `${webkitPersistentStorage}  `)
        if (bodavm.config.isdebug) { debugger };;

        return webkitPersistentStorage
    }
    bodavm.envFunc.Navigator_languages_get = function Navigator_languages_get() {
        let languages = bodavm.memory.navigator["languages"]
        console.log_copy(`Navigator_languages_get `, `${languages}  `)
        return languages
    }
    bodavm.envFunc.Navigator_language_get = function Navigator_languages_get() {
        let language = bodavm.memory.navigator["language"]
        console.log_copy(`Navigator_language_get `, `${language}  `)
        return language
    }

    bodavm.envFunc.Navigator_appVersion_get = function Navigator_appVersion_get() {
        let appVersion = bodavm.memory.navigator["appVersion"]
        console.log_copy(`Navigator_appVersion_get `, `${appVersion}  `)
        return appVersion
    }
    bodavm.envFunc.Navigator_getBattery = function Navigator_getBattery() {
        debugger
        let batteryManager = bodavm.memory.cache['Navigator_getBattery'];
        batteryManager._boisinit=true
        console.log_copy(`Navigator_getBattery  `, 'settimeout 添加异步电池信息');
        batteryManager.__proto__ = bodavm.memory.globalobj['BatteryManager'].prototype
        // debugger
        // bodavm.toolsFunc.symbolProperty(batteryManager)
        let promise = new Promise((resolve, reject) => {
            resolve(batteryManager)
        })

        return promise
    }
    bodavm.envFunc.Navigator_webdriver_get = function Navigator_webdriver_get() {
        if (bodavm.config.isdebug) { debugger };;
        console.log_copy(`Navigator_webdriver_get `, `false  `);
        return false
    }
    bodavm.envFunc.Navigator_connection_get = function Navigator_connection_get() {
        if (bodavm.config.isdebug) { debugger };
        let connection = bodavm.memory.navigator['connection']
        console.log_copy(`Navigator_connection_get `, `${connection}  `)
        Object.setPrototypeOf(connection, bodavm.memory.globalobj['NetworkInformation'].prototype)
        return connection
    }
    bodavm.envFunc.Navigator_cookieEnabled_get = function Navigator_cookieEnabled_get() {
        let cookieEnabled = bodavm.memory.navigator['cookieEnabled']
        console.log_copy(`Navigator_cookieEnabled_get`, `${cookieEnabled}  `)

        return cookieEnabled
    }


    bodavm.envFunc.MimeTypeArray_namedItem = function MimeTypeArray_namedItem() {
        let name = arguments[0];
        console.log_copy(`MimeTypeArray_namedItem -> `,`arg -> `,name);

        return this[name];
    }
    bodavm.envFunc.MimeTypeArray_item = function MimeTypeArray_item() {
        let index = arguments[0];
        console.log_copy(`MimeTypeArray_item -> `,`arg -> `,index);

        return this[index];
    }
    bodavm.envFunc.Plugin_namedItem = function Plugin_namedItem() {
        let name = arguments[0];
        console.log_copy(`Plugin_namedItem -> `,`arg -> `,name);

        return this[name];
    }
    bodavm.envFunc.Plugin_item = function Plugin_item() {
        let index = arguments[0];
        console.log_copy(`Plugin_item -> `,`arg -> `,index);

        return this[index];
    }
    bodavm.envFunc.PluginArray_namedItem = function PluginArray_namedItem() {
        let name = arguments[0];
        console.log_copy(`PluginArray_namedItem -> `,`arg -> `,name);

        return this[name];
    }
    bodavm.envFunc.PluginArray_item = function PluginArray_item() {
        let index = arguments[0];
        itemindex=index % 42949672960
        console.log_copy(`PluginArray_item -> `,`arg -> `,index);
        return this[itemindex];
    }
    bodavm.envFunc.Navigator_mimeTypes_get = function Navigator_mimeTypes_get() {
        console.log_copy(`Navigator_mimeTypes_get -> `,`arg -> `);

        return bodavm.memory.globalInit.mimeTypeArray;
    }
    bodavm.envFunc.MimeType_suffixes_get = function MimeType_suffixes_get() {
        console.log_copy(`MimeType_suffixes_get -> `,`arg -> `);

        return bodavm.toolsFunc.getProtoAttr.call(this, "suffixes");
    }
    bodavm.envFunc.MimeType_enabledPlugin_get = function MimeType_enabledPlugin_get() {
        console.log_copy(`MimeType_enabledPlugin_get -> `,`arg -> `);

        return bodavm.toolsFunc.getProtoAttr.call(this, "enabledPlugin");
    }
    bodavm.envFunc.MimeType_description_get = function MimeType_description_get() {
        console.log_copy(`MimeType_description_get -> `,`arg -> `);

        return bodavm.toolsFunc.getProtoAttr.call(this, "description");
    }
    bodavm.envFunc.Plugin_length_get = function Plugin_length_get() {
        console.log_copy(`Plugin_length_get -> `,`arg -> `);

        return bodavm.toolsFunc.getProtoAttr.call(this, "length");
    }
    bodavm.envFunc.Plugin_filename_get = function Plugin_filename_get() {
        console.log_copy(`Plugin_filename_get -> `,`arg -> `);

        return bodavm.toolsFunc.getProtoAttr.call(this, "filename");
    }
    bodavm.envFunc.Plugin_description_get = function Plugin_description_get() {
        console.log_copy(`Plugin_description_get -> `,`arg -> `);

        return bodavm.toolsFunc.getProtoAttr.call(this, "description");
    }
    bodavm.envFunc.Plugin_name_get = function Plugin_name_get() {
        console.log_copy(`Plugin_name_get -> `,`arg -> `);

        return bodavm.toolsFunc.getProtoAttr.call(this, "name");
    }
    bodavm.envFunc.PluginArray_length_get = function PluginArray_length_get() {
        console.log_copy(`PluginArray_length_get -> `,`arg -> `);

        return bodavm.toolsFunc.getProtoAttr.call(this, "length");
    }
    bodavm.envFunc.MimeType_type_get = function MimeType_type_get() {
        console.log_copy(`MimeType_type_get -> `,`arg -> `);

        return bodavm.toolsFunc.getProtoAttr.call(this, "type");
    }
    bodavm.envFunc.MimeTypeArray_length_get = function MimeTypeArray_length_get() {
        console.log_copy(`MimeTypeArray_length_get -> `,`arg -> `);

        return bodavm.toolsFunc.getProtoAttr.call(this, "length");
    }

    //HTMLElement
    bodavm.envFunc.HTMLElement_accessKey_get = function HTMLElement_accessKey_get() { console.log_copy("HTMLElement_accessKey_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_autocapitalize_get = function HTMLElement_autocapitalize_get() { console.log_copy("HTMLElement_autocapitalize_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_autofocus_get = function HTMLElement_autofocus_get() { console.log_copy("HTMLElement_autofocus_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_contentEditable_get = function HTMLElement_contentEditable_get() { console.log_copy("HTMLElement_contentEditable_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_dataset_get = function HTMLElement_dataset_get() { console.log_copy("HTMLElement_dataset_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_dir_get = function HTMLElement_dir_get() { console.log_copy("HTMLElement_dir_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_draggable_get = function HTMLElement_draggable_get() { console.log_copy("HTMLElement_draggable_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_enterKeyHint_get = function HTMLElement_enterKeyHint_get() { console.log_copy("HTMLElement_enterKeyHint_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_hidden_get = function HTMLElement_hidden_get() { console.log_copy("HTMLElement_hidden_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_inputMode_get = function HTMLElement_inputMode_get() { console.log_copy("HTMLElement_inputMode_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_inert_get = function HTMLElement_inert_get() { console.log_copy("HTMLElement_inert_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_isContentEditable_get = function HTMLElement_isContentEditable_get() { console.log_copy("HTMLElement_isContentEditable_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_lang_get = function HTMLElement_lang_get() { console.log_copy("HTMLElement_lang_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_nonce_get = function HTMLElement_nonce_get() { console.log_copy("HTMLElement_nonce_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_offsetTop_get = function HTMLElement_offsetTop_get() { console.log_copy("HTMLElement_offsetTop_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_offsetParent_get = function HTMLElement_offsetParent_get() { console.log_copy("HTMLElement_offsetParent_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_offsetLeft_get = function HTMLElement_offsetLeft_get() { console.log_copy("HTMLElement_offsetLeft_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onabort_get = function HTMLElement_onabort_get() { console.log_copy("HTMLElement_onabort_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onanimationend_get = function HTMLElement_onanimationend_get() { console.log_copy("HTMLElement_onanimationend_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onanimationiteration_get = function HTMLElement_onanimationiteration_get() { console.log_copy("HTMLElement_onanimationiteration_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onanimationstart_get = function HTMLElement_onanimationstart_get() { console.log_copy("HTMLElement_onanimationstart_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onauxclick_get = function HTMLElement_onauxclick_get() { console.log_copy("HTMLElement_onauxclick_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onbeforematch_get = function HTMLElement_onbeforematch_get() { console.log_copy("HTMLElement_onbeforematch_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onbeforexrselect_get = function HTMLElement_onbeforexrselect_get() { console.log_copy("HTMLElement_onbeforexrselect_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onblur_get = function HTMLElement_onblur_get() { console.log_copy("HTMLElement_onblur_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oncancel_get = function HTMLElement_oncancel_get() { console.log_copy("HTMLElement_oncancel_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oncanplay_get = function HTMLElement_oncanplay_get() { console.log_copy("HTMLElement_oncanplay_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oncanplaythrough_get = function HTMLElement_oncanplaythrough_get() { console.log_copy("HTMLElement_oncanplaythrough_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onchange_get = function HTMLElement_onchange_get() { console.log_copy("HTMLElement_onchange_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onclick_get = function HTMLElement_onclick_get() { console.log_copy("HTMLElement_onclick_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onclose_get = function HTMLElement_onclose_get() { console.log_copy("HTMLElement_onclose_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oncontextlost_get = function HTMLElement_oncontextlost_get() { console.log_copy("HTMLElement_oncontextlost_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oncontextmenu_get = function HTMLElement_oncontextmenu_get() { console.log_copy("HTMLElement_oncontextmenu_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oncontextrestored_get = function HTMLElement_oncontextrestored_get() { console.log_copy("HTMLElement_oncontextrestored_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oncopy_get = function HTMLElement_oncopy_get() { console.log_copy("HTMLElement_oncopy_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oncuechange_get = function HTMLElement_oncuechange_get() { console.log_copy("HTMLElement_oncuechange_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ondblclick_get = function HTMLElement_ondblclick_get() { console.log_copy("HTMLElement_ondblclick_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oncut_get = function HTMLElement_oncut_get() { console.log_copy("HTMLElement_oncut_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ondrag_get = function HTMLElement_ondrag_get() { console.log_copy("HTMLElement_ondrag_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ondragleave_get = function HTMLElement_ondragleave_get() { console.log_copy("HTMLElement_ondragleave_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ondragstart_get = function HTMLElement_ondragstart_get() { console.log_copy("HTMLElement_ondragstart_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ondragenter_get = function HTMLElement_ondragenter_get() { console.log_copy("HTMLElement_ondragenter_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ondragend_get = function HTMLElement_ondragend_get() { console.log_copy("HTMLElement_ondragend_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ondragover_get = function HTMLElement_ondragover_get() { console.log_copy("HTMLElement_ondragover_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ondrop_get = function HTMLElement_ondrop_get() { console.log_copy("HTMLElement_ondrop_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ondurationchange_get = function HTMLElement_ondurationchange_get() { console.log_copy("HTMLElement_ondurationchange_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onemptied_get = function HTMLElement_onemptied_get() { console.log_copy("HTMLElement_onemptied_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onended_get = function HTMLElement_onended_get() { console.log_copy("HTMLElement_onended_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onerror_get = function HTMLElement_onerror_get() { console.log_copy("HTMLElement_onerror_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onfocus_get = function HTMLElement_onfocus_get() { console.log_copy("HTMLElement_onfocus_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onformdata_get = function HTMLElement_onformdata_get() { console.log_copy("HTMLElement_onformdata_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ongotpointercapture_get = function HTMLElement_ongotpointercapture_get() { console.log_copy("HTMLElement_ongotpointercapture_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oninput_get = function HTMLElement_oninput_get() { console.log_copy("HTMLElement_oninput_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onkeydown_get = function HTMLElement_onkeydown_get() { console.log_copy("HTMLElement_onkeydown_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onkeypress_get = function HTMLElement_onkeypress_get() { console.log_copy("HTMLElement_onkeypress_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onkeyup_get = function HTMLElement_onkeyup_get() { console.log_copy("HTMLElement_onkeyup_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_oninvalid_get = function HTMLElement_oninvalid_get() { console.log_copy("HTMLElement_oninvalid_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onload_get = function HTMLElement_onload_get() { console.log_copy("HTMLElement_onload_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onloadedmetadata_get = function HTMLElement_onloadedmetadata_get() { console.log_copy("HTMLElement_onloadedmetadata_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onlostpointercapture_get = function HTMLElement_onlostpointercapture_get() { console.log_copy("HTMLElement_onlostpointercapture_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onloadeddata_get = function HTMLElement_onloadeddata_get() { console.log_copy("HTMLElement_onloadeddata_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onloadstart_get = function HTMLElement_onloadstart_get() { console.log_copy("HTMLElement_onloadstart_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onmousedown_get = function HTMLElement_onmousedown_get() { console.log_copy("HTMLElement_onmousedown_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onmouseleave_get = function HTMLElement_onmouseleave_get() { console.log_copy("HTMLElement_onmouseleave_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onmousemove_get = function HTMLElement_onmousemove_get() { console.log_copy("HTMLElement_onmousemove_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onmouseout_get = function HTMLElement_onmouseout_get() { console.log_copy("HTMLElement_onmouseout_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onmouseup_get = function HTMLElement_onmouseup_get() { console.log_copy("HTMLElement_onmouseup_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onmouseover_get = function HTMLElement_onmouseover_get() { console.log_copy("HTMLElement_onmouseover_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onmousewheel_get = function HTMLElement_onmousewheel_get() { console.log_copy("HTMLElement_onmousewheel_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpaste_get = function HTMLElement_onpaste_get() { console.log_copy("HTMLElement_onpaste_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpause_get = function HTMLElement_onpause_get() { console.log_copy("HTMLElement_onpause_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onplay_get = function HTMLElement_onplay_get() { console.log_copy("HTMLElement_onplay_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onplaying_get = function HTMLElement_onplaying_get() { console.log_copy("HTMLElement_onplaying_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpointercancel_get = function HTMLElement_onpointercancel_get() { console.log_copy("HTMLElement_onpointercancel_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpointerdown_get = function HTMLElement_onpointerdown_get() { console.log_copy("HTMLElement_onpointerdown_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpointerleave_get = function HTMLElement_onpointerleave_get() { console.log_copy("HTMLElement_onpointerleave_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpointermove_get = function HTMLElement_onpointermove_get() { console.log_copy("HTMLElement_onpointermove_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpointerover_get = function HTMLElement_onpointerover_get() { console.log_copy("HTMLElement_onpointerover_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpointerout_get = function HTMLElement_onpointerout_get() { console.log_copy("HTMLElement_onpointerout_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpointerenter_get = function HTMLElement_onpointerenter_get() { console.log_copy("HTMLElement_onpointerenter_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpointerrawupdate_get = function HTMLElement_onpointerrawupdate_get() { console.log_copy("HTMLElement_onpointerrawupdate_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onpointerup_get = function HTMLElement_onpointerup_get() { console.log_copy("HTMLElement_onpointerup_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onprogress_get = function HTMLElement_onprogress_get() { console.log_copy("HTMLElement_onprogress_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onratechange_get = function HTMLElement_onratechange_get() { console.log_copy("HTMLElement_onratechange_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onreset_get = function HTMLElement_onreset_get() { console.log_copy("HTMLElement_onreset_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onscroll_get = function HTMLElement_onscroll_get() { console.log_copy("HTMLElement_onscroll_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onsecuritypolicyviolation_get = function HTMLElement_onsecuritypolicyviolation_get() { console.log_copy("HTMLElement_onsecuritypolicyviolation_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onseeked_get = function HTMLElement_onseeked_get() { console.log_copy("HTMLElement_onseeked_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onseeking_get = function HTMLElement_onseeking_get() { console.log_copy("HTMLElement_onseeking_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onselect_get = function HTMLElement_onselect_get() { console.log_copy("HTMLElement_onselect_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onselectionchange_get = function HTMLElement_onselectionchange_get() { console.log_copy("HTMLElement_onselectionchange_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onselectstart_get = function HTMLElement_onselectstart_get() { console.log_copy("HTMLElement_onselectstart_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onslotchange_get = function HTMLElement_onslotchange_get() { console.log_copy("HTMLElement_onslotchange_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onstalled_get = function HTMLElement_onstalled_get() { console.log_copy("HTMLElement_onstalled_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onsuspend_get = function HTMLElement_onsuspend_get() { console.log_copy("HTMLElement_onsuspend_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ontimeupdate_get = function HTMLElement_ontimeupdate_get() { console.log_copy("HTMLElement_ontimeupdate_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onsubmit_get = function HTMLElement_onsubmit_get() { console.log_copy("HTMLElement_onsubmit_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ontoggle_get = function HTMLElement_ontoggle_get() { console.log_copy("HTMLElement_ontoggle_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ontransitioncancel_get = function HTMLElement_ontransitioncancel_get() { console.log_copy("HTMLElement_ontransitioncancel_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ontransitionrun_get = function HTMLElement_ontransitionrun_get() { console.log_copy("HTMLElement_ontransitionrun_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ontransitionstart_get = function HTMLElement_ontransitionstart_get() { console.log_copy("HTMLElement_ontransitionstart_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_ontransitionend_get = function HTMLElement_ontransitionend_get() { console.log_copy("HTMLElement_ontransitionend_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onvolumechange_get = function HTMLElement_onvolumechange_get() { console.log_copy("HTMLElement_onvolumechange_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onwaiting_get = function HTMLElement_onwaiting_get() { console.log_copy("HTMLElement_onwaiting_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onwebkitanimationend_get = function HTMLElement_onwebkitanimationend_get() { console.log_copy("HTMLElement_onwebkitanimationend_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onwebkitanimationiteration_get = function HTMLElement_onwebkitanimationiteration_get() { console.log_copy("HTMLElement_onwebkitanimationiteration_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onwebkitanimationstart_get = function HTMLElement_onwebkitanimationstart_get() { console.log_copy("HTMLElement_onwebkitanimationstart_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onwebkittransitionend_get = function HTMLElement_onwebkittransitionend_get() { console.log_copy("HTMLElement_onwebkittransitionend_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_onwheel_get = function HTMLElement_onwheel_get() { console.log_copy("HTMLElement_onwheel_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_outerText_get = function HTMLElement_outerText_get() { console.log_copy("HTMLElement_outerText_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_spellcheck_get = function HTMLElement_spellcheck_get() { console.log_copy("HTMLElement_spellcheck_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_tabIndex_get = function HTMLElement_tabIndex_get() { console.log_copy("HTMLElement_tabIndex_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_title_get = function HTMLElement_title_get() { console.log_copy("HTMLElement_title_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_translate_get = function HTMLElement_translate_get() { console.log_copy("HTMLElement_translate_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
    bodavm.envFunc.HTMLElement_virtualKeyboardPolicy_get = function HTMLElement_virtualKeyboardPolicy_get() { console.log_copy("HTMLElement_virtualKeyboardPolicy_get ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }


    bodavm.envFunc.HTMLElement_innerText_set = function HTMLElement_innerText_set() {
        let value = arguments[0]

        console.log_copy(`HTMLElement_innerText_set `, ` value->${value}`);
        bobo$(this._boarg).text(value)
        return value
    }
    bodavm.envFunc.HTMLElement_innerText_get = function HTMLElement_innerText_get() {
        // let value=arguments[0]
        // debugger
        let inntext = undefined
        if (this instanceof HTMLFormElement) {
            for (let i = 0; i < bodavm.memory.formlist.length; i++) {
                if (bodavm.memory.formlist[i] == this._boarg) {
                    for (let j = 0; j < bodavm.memory.formlist[i]['child'].length; j++) {
                        if (bodavm.memory.formlist[i]['child'][j]._boarg.id == 'innerText') {
                            inntext = bodavm.memory.formlist[i]['child'][j]
                            break
                        }
                    }
                }
            }
        }
        console.log_copy(`HTMLElement_innerText_get `, ` value->${inntext}`);

        return inntext
    }
    bodavm.envFunc.HTMLElement_offsetHeight_get = function HTMLElement_offsetHeight_get() {

        if (bodavm.config.isdebug) { debugger }
        let fontFamily = this._boarg.style.fontFamily
        if (!fontFamily){
            return this._boarg.offsetHeight
        }
        debugger
        // bodavm.bbbbb.push(fontFamily)

        if (bodavm.memory.globalInit.fontList.indexOf(fontFamily) !== -1) {// 能够识别的字体
            let offsetHeight = bodavm.memory.fontsize[fontFamily][1]
            console.log_copy(`HTMLElement_offsetHeight_get `, ` fontFamily->${fontFamily}->offsetHeight->${offsetHeight} 可识别的字体  `);
            return offsetHeight;
        } else { // 无法识别的字体
            console.log_copy(`HTMLElement_offsetHeight_get `, `fontFamily->${fontFamily}    151 无法识别的字体  `);
            // return 151;
            return 151
        }

    }
    bodavm.envFunc.HTMLElement_offsetWidth_get = function HTMLElement_offsetWidth_get() {
        ;
        if (bodavm.config.isdebug) { debugger }
        // debugger     
        let fontFamily = this._boarg.style.fontFamily
        if (!fontFamily){
            return this._boarg.offsetWidth
        }
        // bodavm.bbbbb.push(fontFamily)
        if (bodavm.memory.globalInit.fontList.indexOf(fontFamily) !== -1) {// 能够识别的字体
            let offsetWidth = bodavm.memory.fontsize[fontFamily][0]
            console.log_copy(`HTMLElement_offsetWidth_get `, ` fontFamily->${fontFamily}->offsetWidth->${offsetWidth} 可识别的字体  `);
            return offsetWidth;
        } else { // 无法识别的字体
            console.log_copy(`HTMLElement_offsetWidth_get  `, `fontFamily->${fontFamily}   1327 无法识别的字体  `);
            return 1327;
        }

    }
    bodavm.envFunc.CSSStyleDeclaration_fontFamily_get = function CSSStyleDeclaration_fontFamily_get() {
        if (bodavm.config.isdebug) { debugger }
        let font = this._boarg.fontFamily
        console.log_copy(`CSSStyleDeclaration_fontFamily_get `, `font ->${font} `);

        return font
    }
    bodavm.envFunc.CSSStyleDeclaration_fontFamily_set = function CSSStyleDeclaration_fontFamily_set() {
        if (bodavm.config.isdebug) { debugger }
        let arg = arguments[0]
        console.log_copy(`CSSStyleDeclaration_fontFamily_set `, `${arg}  `);
        this._boarg.fontFamily = arg
        return arg
    }
    bodavm.envFunc.HTMLElement_style_get = function HTMLElement_style_get() {
        if (bodavm.config.isdebug) { debugger }
        debugger
        if ((!bodavm.memory.cache['HTMLElement_style_get'][this])){
            bodavm.memory.cache['HTMLElement_style_get'][this]={}
        }else{
            console.log_copy(`HTMLElement_style_get ->`,`this->`,this,'已存在直接返回')
            return bodavm.memory.cache['HTMLElement_style_get'][this]
        }
        let style = bodavm.memory.cache['HTMLElement_style_get'][this]
        // debugger
        let oo = this._boarg.style

        style._boarg = oo
        // bodavm.toolsFunc.symbolProperty(style)
        style.__proto__ = bodavm.memory.globalobj['CSSStyleDeclaration'].prototype
        console.log_copy(`HTMLElement_style_get `, `style->${style}`);
        res=bodavm.toolsFunc.style_(style)
        style=null
        return res
    }

    bodavm.envFunc.HTMLElement_style_set = function HTMLElement_style_set() {
        ;
        // this._elements?this._elements[0]["attributes"]["style"]:this.attributes["style"]
        let arg0 = arguments[0]
        // let style = {}
        debugger
        if (bodavm.config.isdebug) { debugger }
        this._attrs['style'] = arg0
        console.log_copy(`HTMLElement_style_set  `, `${style}  `);
        return arg0
    }
    bodavm.envFunc.HTMLElement_onmouseenter_get = function HTMLElement_onmouseenter_get() {
        //鼠标移动事件
        if (bodavm.config.isdebug) { debugger }
        console.log_copy(`HTMLElement_onmouseenter_get `,);
    }

    bodavm.envFunc.HTMLElement_onresize_get = function HTMLElement_onresize_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log_copy(`HTMLElement_onresize_get `, null);
        return null
    }
    bodavm.envFunc.HTMLElement_onload_set = function HTMLElement_onload_set() {
        if (bodavm.config.isdebug) { debugger }

        let func = arguments[0]
        console.log_copy(`HTMLElement_onload_set `,);
        bodavm.memory.asyncEvent['HTMLElement']['onload'].push(func)

    }
    bodavm.envFunc.HTMLElement_onerror_set = function HTMLElement_onerror_set() {
        if (bodavm.config.isdebug) { debugger }
        console.log_copy(`HTMLElement_onerror_set !!!!!!!!!未完善!!!!!!!!!!!!`,);
        this._onerror=arguments[0]

    }
    //HTMLCollection
    bodavm.envFunc.HTMLCollection_item = function HTMLCollection_item() {
        if (bodavm.config.isdebug) { debugger }
        console.log_copy(`HTMLCollection_item !!!!!!!!!未完善!!!!!!!!!!!!`,);

    }
    bodavm.envFunc.HTMLCollection_length_get = function HTMLCollection_length_get() {
        if (bodavm.config.isdebug) { debugger }
        // debugger
        if (bodavm.config.isrs && this[0] instanceof bodavm.memory.globalobj['HTMLScriptElement']) {
            console.log_copy(`HTMLCollection_length_get `, `length:${2},  rs检测点`);
            return 2
        }
        debugger
        let length_ = this._boarg.length
        console.log_copy(`HTMLCollection_length_get `, `length:${length_}`);
        return length_
    }


    //XMLHttpRequest
    bodavm.envFunc.XMLHttpRequest_onreadystatechange_set = function () {
        let readyState = arguments[0];
        if (bodavm.config.isdebug) { debugger };
        this._boarg.myonreadystatechange = readyState
        console.log_copy(`XMLHttpRequest_onreadystatechange_set `, `readyState->${readyState}  `);
        return readyState
    }
    bodavm.envFunc.XMLHttpRequest_onreadystatechange_get = function () {
        let readyState = this._boarg.myonreadystatechange;
        if (bodavm.config.isdebug) { debugger };

        console.log_copy(`XMLHttpRequest_onreadystatechange_set `, `readyState->${readyState}  `);
        return readyState
    }
    bodavm.envFunc.XMLHttpRequest_send = function XMLHttpRequest_send() {
        debugger
        let body = arguments[0]; if (bodavm.config.isdebug) { debugger };
        console.log_copy(`XMLHttpRequest_send `, `body->${body}  `, `!!!!!!!!!未完善!!!!!!!!!!!!`);
        // this._boarg.send(body)

    }
    bodavm.envFunc.XMLHttpRequest_open = function XMLHttpRequest_open() {
        let method = arguments[0]
        let url = arguments[1];
        console.log_copy(`XMLHttpRequest_open `, `[${method}] `, `[${url}]  `)
        if (bodavm.config.isdebug) { debugger }
        this.mymethod=method
        this.myurl=url
        this._boarg.method = method
        this._boarg.url = url
    }

    //EventTarget
    bodavm.envFunc.EventTarget_addEventListener = function EventTarget_addEventListener() {
        let type = arguments[0];
        let callback = arguments[1];
        let options = arguments[2];
        if (bodavm.config.isdebug) { debugger }
        if (bodavm.memory.asyncEvent.listener === undefined) {
            bodavm.memory.asyncEvent.listener = {};
        }
        if (bodavm.memory.asyncEvent.listener[type] === undefined) {
            bodavm.memory.asyncEvent.listener[type] = [];
        }
        let event = {
            "type": type,
            "self": this,
            "options": options,
            "callback": callback,
            'isTrusted': true,
            'target': this,
            '_boisinit':bodavm.config.isinit
        }
        console.log_copy(`EventTarget_addEventListener `, `type->${type} `, `callback->${callback.toString().length>50?callback.toString().substr(0,50)+'...':callback} `, `options->${options ? options : []}  `)

        bodavm.memory.asyncEvent.listener[type].push(event);


    }
    bodavm.envFunc.EventTarget_dispatchEvent = function EventTarget_dispatchEvent() {
        if (bodavm.config.isdebug) { debugger }
        let event = arguments[0]
        let botag = arguments[1]   //用来判断该事件是不是由我代码主动触发
        if (botag == undefined) {
            console.log_copy(`EventTarget_dispatchEvent 被网站代码主动触发`, `事件为${event.type}`)
        }
        let type = event.type
        switch (event.type) {
            case 'click':
                Object.setPrototypeOf(event, bodavm.memory.globalobj['PointerEvent'].prototype)
                break
            case 'load':
                Object.setPrototypeOf(event, bodavm.memory.globalobj['Event'].prototype)
                break
            case 'onload':
                // Object.setPrototypeOf(event)
                break
            default:
                //无需实现的事件unload  popstate
                console.log_copy(`EventTarget_dispatchEvent `, `${event.type} 未实现`)

        }
        // console.log_copy(`EventTarget_dispatchEvent  `, `event->${event}`,` type->${type}`);
        event.callback.call(event.self, event)

    }
    bodavm.envFunc.EventTarget_removeEventListener = function EventTarget_removeEventListener() {
        if (bodavm.config.isdebug) { debugger }
        let type = arguments[0]
        let callback = arguments[1]
        for (let i = 0; i < bodavm.memory.asyncEvent.listener[type].length; i++) {
            if (bodavm.memory.asyncEvent.listener[type][i].callback == callback) {
                console.log_copy(`EventTarget_removeEventListener  `, `type->${type}`, `callback->${callback}`);
                bodavm.memory.asyncEvent.listener[type][i].splice(i, 1)
                break
            }

        }
    }

    //HTMLCanvasElement

    bodavm.envFunc.HTMLCanvasElement_getContext = function HTMLCanvasElement_getContext() {
        let type = arguments[0];
        let context = {_boisinit:bodavm.config.isinit};
        if (bodavm.config.isdebug) { debugger }
        switch (type) {
            case "2d":
                // context = context.getContext('2d')
                context._bocanvas = this._bocanvas.getContext('2d')
                context.__proto__ = bodavm.memory.globalobj['CanvasRenderingContext2D'].prototype;
                console.log_copy(`HTMLCanvasElement_getContext `, `type->${type} `, `-> res -> ${context}`)

                break
            case "webgl":
                // context = context.getContext('2d')
                context.__proto__ = bodavm.memory.globalobj['WebGLRenderingContext'].prototype;
                console.log_copy(`HTMLCanvasElement_getContext `, `type->${type} `, `-> res -> ${context}`)

                break
            case 'experimental-webgl':
                console.log_copy(`HTMLCanvasElement_getContext `, `type->${type} `, `context->${context} !!!!!!!!!未完善!!!!!!!!!!!! `)
                context.__proto__ = bodavm.memory.globalobj['WebGLRenderingContext'].prototype;
                // bodavm.toolsFunc.setProtoAttr.call(context, "canvas", this);
                // bodavm.toolsFunc.setProtoAttr.call(this, "type", type);
                break
            default:
                console.log_copy(`HTMLCanvasElement_getContext `, `${type}属性未实现  `)
                break
        }
        return context
    }

    bodavm.envFunc.HTMLCanvasElement_width_set = function HTMLCanvasElement_width_set() {
        let width = arguments[0]
        this._bocanvas.width = width
        console.log_copy(`HTMLCanvasElement_width_set `, `width->${width}`);
        return width
    }
    bodavm.envFunc.HTMLCanvasElement_height_set = function HTMLCanvasElement_height_set() {
        let height = arguments[0]
        this._bocanvas.height = height
        console.log_copy(`HTMLCanvasElement_width_set `, `height->${height}`);
        return height
    }
    bodavm.envFunc.HTMLCanvasElement_toDataURL = function HTMLCanvasElement_toDataURL() {
        if (this._bocanvas) {
            let res = this._bocanvas.toDataURL()
            res._boisinit=true
            console.log_copy(`HTMLCanvasElement_toDataURL `, `-> res->${res}`);
            return res
            // return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAAAAXNSR0IArs4c6QAAAjZJREFUSEvFlr9L1lEUxj8ujbU66GJ7DuGgc4lbUThJEG41uCm5hRBEPwhcMggSbE3dGpxcapAGEfoHInNoKZpcikfOgePx3O/7Dr52l+/7vfd7zz3Pc57n3HeI0+NvetfrkM1pzX8Xn1341CTwsErIE80JZ3CDBDMKfAAmEi3bwH3gF3AGQMW+78/J/o9q3AFuAg8sqbICFetRQpGQQVYg6/EKsA5sAgJy2z7YrpjNm1seiGAXgVngKbAMLACfAc0/A9YCc4ov9jaAq55IkEZlJsUZK2Kc8UBXBRS48oEYkV41pNF9YBx4DdyzRJ8EUK5vgRWjzu4n4HmRvZKfMoCXkzfKCvTDeGZf7OzY4dLpMPAH2AJ+AKsBQATslYlJyqAaDvRLYt4xdppYIJzt+Nvbalzzg7QmViWZl8C0JT2SALiEIqgMQNW7DtwFvjUadAnAk41Pl0619tiC+1PsPgLeAdeMOR0Uk9UW/84TrCoQmY5+8fklSS6auNVGcwUiIe+BXeCtTXpi30370ngE8NW6ibrIXmC4BSAD9bPdN0e9WmFXv9faETBjxnVmZeiYXASgb8S6DKtK9aqApCRviYg8FHelVYF+PaDg0roPN2hsm60KnEjANnZVQJ5SN1Nb7qxA/gsR2a/WxP488LFhsvOazneGx1X1NnMFslFj1/E19eLfFqWXBM8LRDNOlcAl4LixYw54AbwBvPMMPMmuAyoAt+zW+wkc2n2gK/8GcAC8ugDZ9E3KP5vHqyrasecsAAAAAElFTkSuQmCC'
        } else {
            debugger
            res = bodavm.memory.userInit.canvas_webgl
            res._boisinit=true
            console.log_copy(`HTMLCanvasElement_toDataURL `, `-> res->${res}`);
            return res
            // return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAAAAXNSR0IArs4c6QAAAjZJREFUSEvFlr9L1lEUxj8ujbU66GJ7DuGgc4lbUThJEG41uCm5hRBEPwhcMggSbE3dGpxcapAGEfoHInNoKZpcikfOgePx3O/7Dr52l+/7vfd7zz3Pc57n3HeI0+NvetfrkM1pzX8Xn1341CTwsErIE80JZ3CDBDMKfAAmEi3bwH3gF3AGQMW+78/J/o9q3AFuAg8sqbICFetRQpGQQVYg6/EKsA5sAgJy2z7YrpjNm1seiGAXgVngKbAMLACfAc0/A9YCc4ov9jaAq55IkEZlJsUZK2Kc8UBXBRS48oEYkV41pNF9YBx4DdyzRJ8EUK5vgRWjzu4n4HmRvZKfMoCXkzfKCvTDeGZf7OzY4dLpMPAH2AJ+AKsBQATslYlJyqAaDvRLYt4xdppYIJzt+Nvbalzzg7QmViWZl8C0JT2SALiEIqgMQNW7DtwFvjUadAnAk41Pl0619tiC+1PsPgLeAdeMOR0Uk9UW/84TrCoQmY5+8fklSS6auNVGcwUiIe+BXeCtTXpi30370ngE8NW6ibrIXmC4BSAD9bPdN0e9WmFXv9faETBjxnVmZeiYXASgb8S6DKtK9aqApCRviYg8FHelVYF+PaDg0roPN2hsm60KnEjANnZVQJ5SN1Nb7qxA/gsR2a/WxP488LFhsvOazneGx1X1NnMFslFj1/E19eLfFqWXBM8LRDNOlcAl4LixYw54AbwBvPMMPMmuAyoAt+zW+wkc2n2gK/8GcAC8ugDZ9E3KP5vHqyrasecsAAAAAElFTkSuQmCC'
        }

    }
    //CanvasRenderingContext2D
    bodavm.envFunc.CanvasRenderingContext2D_textBaseline_set = function CanvasRenderingContext2D_textBaseline_set() {
        let textBaseline = arguments[0]
        this._bocanvas.textBaseline = textBaseline
        console.log_copy(`CanvasRenderingContext2D_textBaseline_set `, `textBaseline->${textBaseline}`);
        return textBaseline
    }

    bodavm.envFunc.CanvasRenderingContext2D_font_set = function CanvasRenderingContext2D_font_set() {
        let font = arguments[0]
        this._bocanvas.font = font
        console.log_copy(`CanvasRenderingContext2D_font_set `, `font->${font}`);
        return font
    }
    bodavm.envFunc.CanvasRenderingContext2D_fillStyle_set = function CanvasRenderingContext2D_fillStyle_set() {
        let fillStyle = arguments[0]
        this._bocanvas.fillStyle = fillStyle
        console.log_copy(`CanvasRenderingContext2D_fillStyle_set `, `fillStyle->${fillStyle}`);
        return fillStyle
    }
    bodavm.envFunc.CanvasRenderingContext2D_fillRect = function CanvasRenderingContext2D_fillRect() {
        let arg0 = arguments[0]
        let arg1 = arguments[1]
        let arg2 = arguments[2]
        let arg3 = arguments[3]
        this._bocanvas.fillRect(arg0, arg1, arg2, arg3)
        console.log_copy(`CanvasRenderingContext2D_fillRect `, `fillRect->${arg0},${arg1},${arg2},${arg3}`);
    }

    bodavm.envFunc.CanvasRenderingContext2D_fillText = function CanvasRenderingContext2D_fillText() {
        let arg0 = arguments[0]
        let arg1 = arguments[1]
        let arg2 = arguments[2]
        this._bocanvas.fillText(arg0, arg1, arg2)
        console.log_copy(`CanvasRenderingContext2D_fillText`, `fillText->${arg0},${arg1},${arg2}`);

    }



    //location
    bodavm.envFunc.location_hash_get = function location_hash_get() {
        if (bodavm.config.isdebug) { debugger }
        let hash = bodaobj.location.hash
        console.log_copy(`location_hash_get `, `hash_get->${hash}  `);

        return hash
    }
    bodavm.envFunc.location_hash_set = function location_hash_set() {
        if (bodavm.config.isdebug) { debugger }
        let arg = arguments[0]
        bodaobj.location.hash = arg
        console.log_copy(`location_hash_set `, `hash_set->${arg}  `);

        return arg
    }

    bodavm.envFunc.location_ancestorOrigins_get = function location_ancestorOrigins_get() {
        let ancestorOrigins = bodavm.memory.cache['location_ancestorOrigins_get']
        ancestorOrigins['0']=bodavm.memory.location.ancestorOrigins['0']
        ancestorOrigins.__proto__ = bodavm.memory.globalobj['DOMStringList'].prototype
        console.log_copy(`location_ancestorOrigins_get `, `${ancestorOrigins}  `)
        if (bodavm.config.isdebug) { debugger }
        return ancestorOrigins
    }

    bodavm.envFunc.location_toString = function location_toString() {
        let href_ = bodaobj.location.toString()
        console.log_copy(`location_toString `, `${href_}   `)
        if (bodavm.config.isdebug) { debugger }
        return href_
    }
    bodavm.envFunc.location_href_get = function location_href_get() {
        let href = bodaobj.location.href
        console.log_copy(`location_href_get `, ` ${href}   `)
        if (bodavm.config.isdebug) { debugger }
        return href
    }
    bodavm.envFunc.location_href_set = function location_href_set() {
        let href = arguments[0]
        bodaobj.location.href = href
        console.log_copy(`location_href_set `, `${href}   `)
        if (bodavm.config.isdebug) { debugger }
        return href
    }
    bodavm.envFunc.location_port_set = function location_port_set() {
        let port = arguments[0]
        bodaobj.location.port = port
        console.log_copy(`location_port_set `, `${port}   `); if (bodavm.config.isdebug) { debugger };

        return port
    }
    bodavm.envFunc.location_port_get = function location_port_get() {
        let port = bodaobj.location.port
        console.log_copy(`location_port_get `, `${port}   `)
        if (bodavm.config.isdebug) { debugger }
        return port
    }

    bodavm.envFunc.location_protocol_set = function location_protocol_set() {
        let protocol = arguments[0]
        bodaobj.location["protocol"] = protocol
        console.log_copy(`location_protocol_set `, `${protocol}   `); if (bodavm.config.isdebug) { debugger };


        return protocol
    }
    bodavm.envFunc.location_protocol_get = function location_protocol_get() {
        let protocol = bodaobj.location["protocol"]
        console.log_copy(`location_protocol_get `, `${protocol}   `); if (bodavm.config.isdebug) { debugger };

        return protocol
    }

    bodavm.envFunc.location_host_set = function location_host_set() {
        let host = arguments[0]
        bodaobj.location.host = host
        console.log_copy(`location_host_set `, `${host}   `); if (bodavm.config.isdebug) { debugger };

        return host
    }
    bodavm.envFunc.location_host_get = function location_host_get() {
        let host = bodaobj.location.host
        console.log_copy(`location_host_get `, `${host}   `); if (bodavm.config.isdebug) { debugger };

        return host
    }

    bodavm.envFunc.location_hostname_set = function location_hostname_set() {
        let hostname = arguments[0]
        bodaobj.location.hostname = hostname
        console.log_copy(`location_hostname_set `, `${hostname}   `); if (bodavm.config.isdebug) { debugger };

        return hostname
    }
    bodavm.envFunc.location_hostname_get = function location_hostname_get() {
        let hostname = bodaobj.location.hostname
        console.log_copy(`location_hostname_get `, `${hostname}   `); if (bodavm.config.isdebug) { debugger };

        return hostname
    }

    bodavm.envFunc.location_pathname_set = function location_pathname_set() {
        let pathname = arguments[0]
        bodaobj.location.pathname = pathname
        console.log_copy(`location_pathname_set `, `${pathname}   `); if (bodavm.config.isdebug) { debugger };

        return pathname
    }
    bodavm.envFunc.location_pathname_get = function location_pathname_get() {
        let pathname = bodaobj.location.pathname
        console.log_copy(`location_pathname_get `, `${pathname}  `); if (bodavm.config.isdebug) { debugger };
        // debugger
        return pathname
    }
    bodavm.envFunc.location_replace = function () {
        debugger
        if (bodavm.config.isdebug) { debugger }
        let r = arguments[0]
        // res = bodaobj.location.replace(r)
        console.log_copy(`location_replace `, `replace->${r}`,);
        console.log_copy(`--------------------页面跳转停止执行--------------------`,);
        console.log_copy(`--------------------页面跳转停止执行--------------------`,);
        console.log_copy(`--------------------直接执行lastDeal--------------------`,);
        console.log_copy(document.cookie)
        throw ('End', `--------------------直接执行lastDeal--------------------`)


    }
    bodavm.envFunc.location_search_set = function location_search_set() {
        let search = arguments[0]
        bodavm.memory.location["search"] = search
        console.log_copy(`location_search_set `, `${search}  `); if (bodavm.config.isdebug) { debugger };

        return search
    }
    bodavm.envFunc.location_search_get = function location_search_get() {
        let search = bodavm.memory.location["search"]
        console.log_copy(`location_search_get `, `${search}  `); if (bodavm.config.isdebug) { debugger };

        return search
    }


    bodavm.envFunc.location_origin_get = function location_origin_get() {
        let origin = bodaobj.location["origin"]
        console.log_copy(`location_origin_get `, `${origin}  `); if (bodavm.config.isdebug) { debugger };

        return origin
    }

    //history
    bodavm.envFunc.History_length_get = function History_length_get() { debugger }
    bodavm.envFunc.History_state_get = function History_state_get() { debugger }
    bodavm.envFunc.History_scrollRestoration_set = function History_scrollRestoration_set() {
        let scrollRestoration = arguments[0]
        bodavm.memory.history["scrollRestoration"] = scrollRestoration
        console.log_copy(`History_scrollRestoration_set `, `${scrollRestoration}  `)
        if (bodavm.config.isdebug) { debugger }
        return scrollRestoration
    }
    bodavm.envFunc.History_scrollRestoration_get = function History_scrollRestoration_get() {
        let scrollRestoration = bodavm.memory.history["scrollRestoration"]
        console.log_copy(`History_scrollRestoration_get `, ` ${scrollRestoration}   `)
        if (bodavm.config.isdebug) { debugger }
        return scrollRestoration
    }


    //screen
    bodavm.envFunc.Screen_onchange_set = function Screen_onchange_set() {
        let onchange = arguments[0]
        bodavm.memory.screen["onchange"] = onchange
        console.log_copy(`Screen_onchange_set `, `${onchange}  `)
        if (bodavm.config.isdebug) { debugger }
        return onchange
    }
    bodavm.envFunc.Screen_onchange_get = function Screen_onchange_get() {
        let onchange = bodavm.memory.screen["onchange"]
        console.log_copy(`Screen_onchange_get `, `${onchange}  `)
        if (bodavm.config.isdebug) { debugger }
        return onchange
    }

    bodavm.envFunc.Screen_width_get = function Screen_width_get() {
        let width = bodavm.memory.screen["width"]
        console.log_copy(`Screen_width_get `, `${width}  `)
        if (bodavm.config.isdebug) { debugger }
        return width
    }
    bodavm.envFunc.Screen_height_get = function Screen_height_get() {
        let height = bodavm.memory.screen["height"]
        console.log_copy(`Screen_height_get `, `${height}  `)
        if (bodavm.config.isdebug) { debugger }
        return height
    }
    bodavm.envFunc.Screen_pixelDepth_get = function Screen_pixelDepth_get() {
        let pixelDepth = bodavm.memory.screen["pixelDepth"]
        console.log_copy(`Screen_pixelDepth_get `, `${pixelDepth}  `)
        if (bodavm.config.isdebug) { debugger }
        return pixelDepth
    }
    bodavm.envFunc.Screen_colorDepth_get = function Screen_colorDepth_get() {
        let colorDepth = bodavm.memory.screen["colorDepth"]
        console.log_copy(`Screen_colorDepth_get `, `${colorDepth}  `)
        if (bodavm.config.isdebug) { debugger }
        return colorDepth
    }
    bodavm.envFunc.Screen_availWidth_get = function Screen_availWidth_get() {
        let availWidth = bodavm.memory.screen["availWidth"]
        console.log_copy(`Screen_availWidth_get `, `${availWidth}  `)
        if (bodavm.config.isdebug) { debugger }
        return availWidth
    }
    bodavm.envFunc.Screen_availLeft_get = function Screen_availLeft_get() {
        let availLeft = bodavm.memory.screen["availLeft"]
        console.log_copy(`Screen_availLeft_get `, `${availLeft}  `)
        if (bodavm.config.isdebug) { debugger }
        return availLeft
    }
    bodavm.envFunc.Screen_availTop_get = function Screen_availTop_get() {
        let availTop = bodavm.memory.screen["availTop"]
        console.log_copy(`Screen_availTop_get `, `${availTop}  `)
        if (bodavm.config.isdebug) { debugger }
        return availTop
    }
    bodavm.envFunc.Screen_orientation_get = function Screen_orientation_get() {
        let orientation = bodavm.memory.screen["orientation"]
        console.log_copy(`Screen_orientation_get `, `${orientation}  `)
        if (bodavm.config.isdebug) { debugger }
        Object.setPrototypeOf(orientation, bodavm.memory.globalobj['ScreenOrientation'].prototype)
        return orientation
    }
    bodavm.envFunc.Screen_isExtended_get = function Screen_isExtended_get() {
        let isExtended = bodavm.memory.screen["isExtended"]
        console.log_copy(`Screen_isExtended_get `, `${isExtended}  `)
        if (bodavm.config.isdebug) { debugger }
        return isExtended
    }
    bodavm.envFunc.Screen_availHeight_get = function Screen_availHeight_get() {
        let availHeight = bodavm.memory.screen["availHeight"]
        console.log_copy(`Screen_availHeight_get `, `${availHeight}  `)
        if (bodavm.config.isdebug) { debugger }
        return availHeight
    }



    // IDBFactory
    bodavm.envFunc.IDBFactory_open = function IDBFactory_open() {

        // debugger
        let name = arguments[0]
        let version = arguments[1]

        console.log_copy(`IDBFactory_open `, `name->${name} `, `version->${version}  `)
        let DB = {
            _boisinit:bodavm.config.isinit
        }
        DB = Object.setPrototypeOf(DB, bodavm.memory.globalobj['IDBOpenDBRequest'].prototype)
        if (bodavm.config.isdebug) { debugger }

        return DB
    }
    bodavm.envFunc.IDBRequest_onerror_set = function IDBRequest_onerror_set() {
        let onerror = arguments[0]
        bodavm.memory.IDBRequest['onerror'] = onerror
        console.log_copy(`IDBRequest_onerror_set `, `${onerror} `, `!!!!!!!!!未完善!!!!!!!!!!!!  `)
        if (bodavm.config.isdebug) { debugger }
        return onerror

    }
    bodavm.envFunc.IDBRequest_onerror_get = function IDBRequest_onerror_get() {
        let onerror = bodavm.memory.IDBRequest['onerror'] ? bodavm.memory.IDBRequest['onerror'] : undefined
        console.log_copy(`IDBRequest_onerror_get `, `${onerror} `, `!!!!!!!!!未完善!!!!!!!!!!!!  `)
        if (bodavm.config.isdebug) { debugger }
        return onerror

    }

    bodavm.envFunc.IDBOpenDBRequest_onupgradeneeded_set = function IDBOpenDBRequest_onupgradeneeded_set() {
        let onupgradeneeded = arguments[0]
        bodavm.memory.IDBOpenDBRequest['onupgradeneeded'] = onupgradeneeded
        console.log_copy(`IDBOpenDBRequest_onupgradeneeded_set `, `${onupgradeneeded} `, `!!!!!!!!!未完善!!!!!!!!!!!!  `)
        if (bodavm.config.isdebug) { debugger }
        return onupgradeneeded

    }

    bodavm.envFunc.IDBRequest_onsuccess_set = function IDBRequest_onsuccess_set() {
        let onsuccess = arguments[0]
        bodavm.memory.IDBRequest['onsuccess'] = onsuccess

        console.log_copy(`IDBRequest_onsuccess_set `, `${onsuccess} `, `!!!!!!!!!未完善!!!!!!!!!!!!  `)
        if (bodavm.config.isdebug) { debugger }
        return onsuccess

    }
    bodavm.envFunc.IDBRequest_onsuccess_get = function IDBRequest_onsuccess_get() {

        let onsuccess = bodavm.memory.IDBRequest['onsuccess'] ? bodavm.memory.IDBRequest['onsuccess'] : undefined

        console.log_copy(`IDBRequest_onsuccess_get `, `${onsuccess} `, `!!!!!!!!!未完善!!!!!!!!!!!!  `)
        if (bodavm.config.isdebug) { debugger }
        return onsuccess

    }
    //Event
    bodavm.envFunc.Event_target_get = function Event_target_get() {
        debugger
        if (bodavm.config.isdebug) { debugger }

        let target = this.
            console.log_copy(`Event_target_get `, `target->${target}  `);
        return target
    }
    bodavm.envFunc.Event_srcElement_get = function Event_srcElement_get() {
        debugger
        if (bodavm.config.isdebug) { debugger }
    }
    bodavm.envFunc.Event_timeStamp_get = function Event_timeStamp_get() {
        if (bodavm.config.isdebug) { debugger }
        let timstamp = bodavm.toolsFunc.getProtoAttr.call(this, "timeStamp");
        console.log_copy(`Event_timeStamp_get `, `:timstamp->${timstamp}  `);
        return timstamp
    }

    //MouseEvent
    bodavm.envFunc.MouseEvent_pageY_get = function MouseEvent_pageY_get() {
        if (bodavm.config.isdebug) { debugger }

        let pageY = Math.ceil(Math.random() * 1000)
        console.log_copy(`MouseEvent_pageY_get `, `pageY->${pageY}  `);
        return pageY
    }
    bodavm.envFunc.MouseEvent_clientY_get = function MouseEvent_clientY_get() {
        if (bodavm.config.isdebug) { debugger }
        let clientY = bodavm.toolsFunc.getProtoAttr.call(this, "clientY")
        console.log_copy(`MouseEvent_clientY_get `, `clientY->${clientY}  `);
        return clientY
    }
    bodavm.envFunc.MouseEvent_clientX_get = function MouseEvent_clientX_get() {
        if (bodavm.config.isdebug) { debugger }
        let clientX_ = bodavm.toolsFunc.getProtoAttr.call(this, "clientX")
        console.log_copy(`MouseEvent_clientX_get `, `clientX_->${clientX_}  `);
        return clientX_
    }
    bodavm.envFunc.MouseEvent_screenX_get = function MouseEvent_screenX_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log_copy(`MouseEvent_screenX_get !!!!!!!!!未完善!!!!!!!!!!!! `);

    }
    bodavm.envFunc.MouseEvent_screenY_get = function MouseEvent_screenY_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log_copy(`MouseEvent_screenY_get !!!!!!!!!未完善!!!!!!!!!!!!`, `  `);


    }
    bodavm.envFunc.MouseEvent_button_get = function MouseEvent_button_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log_copy(`MouseEvent_button_get !!!!!!!!!未完善!!!!!!!!!!!!`, `  `);


    }
    bodavm.envFunc.MouseEvent_offsetX_get = function MouseEvent_button_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log_copy(`MouseEvent_offsetX_get `,);


    }
    bodavm.envFunc.MouseEvent_offsetY_get = function MouseEvent_button_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log_copy(`MouseEvent_offsetY_get !!!!!!!!!未完善!!!!!!!!!!!!`);

    }

    bodavm.envFunc.MouseEvent_x_get = function MouseEvent_button_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log_copy(`MouseEvent_x_get !!!!!!!!!未完善!!!!!!!!!!!!`,);

    }
    bodavm.envFunc.MouseEvent_y_get = function MouseEvent_button_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log_copy(`MouseEvent_y_get !!!!!!!!!未完善!!!!!!!!!!!!`,);
    }
    bodavm.envFunc.Event_type_get = function Event_type_get() {
        if (bodavm.config.isdebug) { debugger }
        let type = this._botype
        // debugger
        console.log_copy(`Event_type_get  ->`, `type->${type}`);
        // debugger
        return type

    }
    bodavm.envFunc.MouseEvent_pageX_get = function MouseEvent_pageX_get() {
        if (bodavm.config.isdebug) { debugger }
        let pageX = Math.ceil(Math.random() * 1000)
        console.log_copy(`MouseEvent_pageX_get `, `pageX->${pageX}  `);
        return pageX

    }

    //BatteryManager
    bodavm.envFunc.BatteryManager_level_get = function BatteryManager_level_get() {
        console.log_copy(`BatteryManager_level_get `, `1  `);; if (bodavm.config.isdebug) { debugger };

        return 1;
    }
    bodavm.envFunc.BatteryManager_chargingTime_get = function BatteryManager_chargingTime_get() {
        console.log_copy(`BatteryManager_chargingTime_get `, `0  `);; if (bodavm.config.isdebug) { debugger };

        return 0;
    }
    bodavm.envFunc.BatteryManager_charging_get = function BatteryManager_charging_get() {
        // debugger
        console.log_copy(`BatteryManager_chargingTime_get `, `true  `);
        ; if (bodavm.config.isdebug) { debugger };

        return true;
    }

    bodavm.envFunc.WebGLRenderingContext_drawingBufferHeight_get = function () {
        let drawingBufferHeight = 150; if (bodavm.config.isdebug) { debugger };

        console.log_copy(`WebGLRenderingContext_drawingBufferHeight_get  `, `默认值drawingBufferHeight:${drawingBufferHeight}  `);
        return drawingBufferHeight
    }
    bodavm.envFunc.WebGLRenderingContext_drawingBufferWidth_get = function () {
        let drawingBufferWidth = 300; if (bodavm.config.isdebug) { debugger };

        console.log_copy(`WebGLRenderingContext_drawingBufferWidth_get  `, `默认值drawingBufferWidth:${drawingBufferWidth}  `);
        return drawingBufferWidth
    }
    bodavm.envFunc.WebGLRenderingContext_enableVertexAttribArray = function WebGLRenderingContext_enableVertexAttribArray() {
        let index = arguments[0]; if (bodavm.config.isdebug) { debugger };
        if (bodavm.config.isdebug) { debugger };

        console.log_copy(`WebGLRenderingContext_enableVertexAttribArray !!!!!!!!!未完善!!!!!!!!!!!!`, `index:${index}  `);

    }
    bodavm.envFunc.WebGLRenderingContext_getUniformLocation = function WebGLRenderingContext_getUniformLocation() {
        let program = arguments[0]
        let name = arguments[1];
        if (bodavm.config.isdebug) { debugger }; console.log_copy(`WebGLRenderingContext_getUniformLocation `, `program:${program} name:${name}`, `!!!!!!!!!未完善!!!!!!!!!!!!`);
        return null
    }
    bodavm.envFunc.WebGLRenderingContext_getAttribLocation = function WebGLRenderingContext_getAttribLocation() {
        let program = arguments[0]
        let name = arguments[1]
        console.log_copy(`WebGLRenderingContext_getAttribLocation `, `program:${program} name:${name}  `, `!!!!!!!!!未完善!!!!!!!!!!!!`);

        if (bodavm.config.isdebug) { debugger };
        return null
    }
    bodavm.envFunc.WebGLRenderingContext_getShaderPrecisionFormat = function WebGLRenderingContext_getShaderPrecisionFormat() {
        let shaderType = arguments[0]
        let precisionType = arguments[1]
        console.log_copy(`WebGLRenderingContext_getShaderPrecisionFormat `, `shaderType:${shaderType} precisionType:${precisionType}  `);
        if (shaderType == 35633 && precisionType == 36338) {
            let shade = {}
            shade._boisinit=true
            Object.setPrototypeOf(shade, bodavm.memory.globalobj['WebGLShaderPrecisionFormat'].prototype)
            // bodavm.toolsFunc.symbolProperty(shade)
            return shade
        }
    }
    bodavm.envFunc.WebGLRenderingContext_uniform2f = function WebGLRenderingContext_uniform2f() {
        let location = arguments[0]
        let v0 = arguments[1]
        let v1 = arguments[2]
        if (bodavm.config.isdebug) { debugger };

        console.log_copy(`WebGLRenderingContext_uniform2f !!!!!!!!!未完善!!!!!!!!!!!!`, `location:${location} v0:${v0}  v1:${v1}  `);
    }
    bodavm.envFunc.WebGLRenderingContext_vertexAttribPointer = function WebGLRenderingContext_vertexAttribPointer() {
        let index = arguments[0]
        let size = arguments[1]
        let type = arguments[2]
        let normalized = arguments[3]
        let stride = arguments[4]
        let offset = arguments[5]
        if (bodavm.config.isdebug) { debugger };

        console.log_copy(`WebGLRenderingContext_vertexAttribPointer !!!!!!!!!未完善!!!!!!!!!!!!`, `index:${index}  size:${size} type:${type}  normalized:${normalized}  stride:${stride}  offset${offset}   `);
    }

    bodavm.envFunc.WebGLRenderingContext_drawArrays = function WebGLRenderingContext_drawArrays() {
        let mode = arguments[0]
        let first = arguments[1]
        let count = arguments[2]
        if (bodavm.config.isdebug) { debugger };

        console.log_copy(`WebGLRenderingContext_drawArrays !!!!!!!!!未完善!!!!!!!!!!!!`, `mode:${mode}  first:${first}  count:${count}   `);

    }

    bodavm.envFunc.WebGLRenderingContext_useProgram = function WebGLRenderingContext_useProgram() {
        let program = arguments[0]
        console.log_copy(`WebGLRenderingContext_useProgram !!!!!!!!!未完善!!!!!!!!!!!!`, `program:${program}  `);
        if (bodavm.config.isdebug) { debugger };

    }
    bodavm.envFunc.WebGLRenderingContext_linkProgram = function WebGLRenderingContext_linkProgram() {
        let program = arguments[0]
        console.log_copy(`WebGLRenderingContext_linkProgram !!!!!!!!!未完善!!!!!!!!!!!!`, `program:${program}  `);
        if (bodavm.config.isdebug) { debugger };


    }
    bodavm.envFunc.WebGLRenderingContext_attachShader = function WebGLRenderingContext_attachShader() {
        let program = arguments[0]
        let shader = arguments[1]
        if (bodavm.config.isdebug) { debugger };

        console.log_copy(`WebGLRenderingContext_attachShader !!!!!!!!!未完善!!!!!!!!!!!!`, `program:${program}  shader:${shader}   `);
    }
    bodavm.envFunc.WebGLRenderingContext_createShader = function WebGLRenderingContext_createShader() {
        let type = arguments[0]
        console.log_copy(`WebGLRenderingContext_createShader `, `${type}  `);
        if (bodavm.config.isdebug) { debugger };

        if (type == 35633) {
            let shader = {}
            Object.setPrototypeOf(shader, bodavm.memory.globalobj['WebGLShader'].prototype)
            return shader
        }
        else if (type == 35632) {
            let shader = {}
            Object.setPrototypeOf(shader, bodavm.memory.globalobj['WebGLShader'].prototype)
            return shader
        }
    }

    bodavm.envFunc.WebGLRenderingContext_shaderSource = function WebGLRenderingContext_shaderSource() {
        let shader = arguments[0]
        let source = arguments[1]
        if (bodavm.config.isdebug) { debugger };

        console.log_copy(`WebGLRenderingContext_shaderSource !!!!!!!!!未完善!!!!!!!!!!!!`, `shader:${shader}  source:${source}  `);
    }

    bodavm.envFunc.WebGLRenderingContext_compileShader = function WebGLRenderingContext_shaderSource() {
        let compileShader = arguments[0]
        if (bodavm.config.isdebug) { debugger };

        console.log_copy(`WebGLRenderingContext_compileShader !!!!!!!!!未完善!!!!!!!!!!!!`, `${compileShader}  `);
    }
    bodavm.envFunc.WebGLRenderingContext_canvas_get = function WebGLRenderingContext_canvas_get() {
        let canvas = {}
        if (bodavm.config.isdebug) { debugger };
        canvas._boisinit=true
        console.log_copy(`WebGLRenderingContext_canvas_get `, `${canvas}  `);
        canvas.__proto__ = bodavm.memory.globalobj['HTMLCanvasElement'].prototype
        // bodavm.toolsFunc.symbolProperty(canvas)
        return canvas

    }
    bodavm.envFunc.WebGLRenderingContext_createProgram = function WebGLRenderingContext_createProgram() {
        let program = {};
        if (bodavm.config.isdebug) { debugger };

        program = Object.setPrototypeOf(program, bodavm.memory.globalobj['WebGLProgram'].prototype);
        console.log_copy(`WebGLRenderingContext_createProgram `, `${program}  `);
        return program;
    }

    bodavm.envFunc.WebGLRenderingContext_createBuffer = function WebGLRenderingContext_createBuffer() {
        if (bodavm.config.isdebug) { debugger }
        let buffer = {};
        buffer = Object.setPrototypeOf(buffer, bodavm.memory.globalobj['WebGLBuffer'].prototype);
        console.log_copy(`WebGLRenderingContext_createBuffer `, `${buffer}  `);

        return buffer;

    }
    bodavm.envFunc.WebGLRenderingContext_bindBuffer = function WebGLRenderingContext_bindBuffer() {
        if (bodavm.config.isdebug) { debugger }
        let r1 = arguments[0]
        let r2 = arguments[1]
        console.log_copy(`WebGLRenderingContext_bindBuffer !!!!!!!!!未完善!!!!!!!!!!!!`, `r1:${r1}  r2:${r2}  `);

    }
    bodavm.envFunc.WebGLRenderingContext_bufferData = function WebGLRenderingContext_bufferData() {
        if (bodavm.config.isdebug) { debugger }
        let r1 = arguments[0]
        let r2 = arguments[1]
        let r3 = arguments[2]
        let r4 = arguments[3]
        let r5 = arguments[4]
        console.log_copy(`WebGLRenderingContext_bufferData !!!!!!!!!未完善!!!!!!!!!!!!`, `r1:${r1},r2:${r2},r3:${r3},r4:${r4},r5:${r5}  `);

    }
    bodavm.envFunc.WebGLRenderingContext_getExtension = function WebGLRenderingContext_getExtension() {
        if (bodavm.config.isdebug) { debugger }
        let getExtension = arguments[0]
        console.log_copy(`WebGLRenderingContext_getExtension `, `${getExtension}  `);
        let info = {_boisinit:bodavm.config.isinit}
        switch (getExtension) {
            case "WEBGL_debug_renderer_info":

                WebGLDebugRendererInfo = function WebGLDebugRendererInfo() {this._boisinit=bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(WebGLDebugRendererInfo, "WebGLDebugRendererInfo");
                info = Object.setPrototypeOf(info, WebGLDebugRendererInfo.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLDebugRendererInfo.prototype, "UNMASKED_VENDOR_WEBGL", { configurable: false, enumerable: true, writable: false, value: 37445 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDebugRendererInfo.prototype, "UNMASKED_RENDERER_WEBGL", { configurable: false, enumerable: true, writable: false, value: 37446 });
                delete WebGLDebugRendererInfo.prototype.constructor;
                break;
            case "ANGLE_instanced_arrays":

                ANGLEInstancedArrays = function ANGLEInstancedArrays() {this._boisinit=bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(ANGLEInstancedArrays, "ANGLEInstancedArrays");
                info = Object.setPrototypeOf(info, ANGLEInstancedArrays.prototype)
                bodavm.toolsFunc.windowdefineProperty(ANGLEInstancedArrays.prototype, "VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE", { configurable: false, enumerable: true, writable: false, value: 35070 });
                bodavm.toolsFunc.windowdefineProperty(ANGLEInstancedArrays.prototype, "drawArraysInstancedANGLE", { configurable: true, enumerable: true, writable: true, value: function drawArraysInstancedANGLE() { return bodavm.toolsFunc.dispatch(this, ANGLEInstancedArrays.prototype, "ANGLEInstancedArrays", "drawArraysInstancedANGLE", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(ANGLEInstancedArrays.prototype, "drawElementsInstancedANGLE", { configurable: true, enumerable: true, writable: true, value: function drawElementsInstancedANGLE() { return bodavm.toolsFunc.dispatch(this, ANGLEInstancedArrays.prototype, "ANGLEInstancedArrays", "drawElementsInstancedANGLE", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(ANGLEInstancedArrays.prototype, "vertexAttribDivisorANGLE", { configurable: true, enumerable: true, writable: true, value: function vertexAttribDivisorANGLE() { return bodavm.toolsFunc.dispatch(this, ANGLEInstancedArrays.prototype, "ANGLEInstancedArrays", "vertexAttribDivisorANGLE", arguments) } });
                delete ANGLEInstancedArrays.prototype.constructor;;
                break;
            case "EXT_blend_minmax":
                EXTBlendMinMax = function EXTBlendMinMax() { this._boisinit=bodavm.config.isinit}
                bodavm.toolsFunc.safeProto(EXTBlendMinMax, "EXTBlendMinMax");
                info = Object.setPrototypeOf(info, EXTBlendMinMax.prototype)
                bodavm.toolsFunc.windowdefineProperty(EXTBlendMinMax.prototype, "MIN_EXT", { configurable: false, enumerable: true, writable: false, value: 32775 });
                bodavm.toolsFunc.windowdefineProperty(EXTBlendMinMax.prototype, "MAX_EXT", { configurable: false, enumerable: true, writable: false, value: 32776 });
                delete EXTBlendMinMax.prototype.constructor;
                break;
            case "EXT_color_buffer_half_float":
                EXTColorBufferHalfFloat = function EXTColorBufferHalfFloat() {this._boisinit=bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(EXTColorBufferHalfFloat, "EXTColorBufferHalfFloat");
                info = Object.setPrototypeOf(info, EXTColorBufferHalfFloat.prototype)
                bodavm.toolsFunc.windowdefineProperty(EXTColorBufferHalfFloat.prototype, "RGBA16F_EXT", { configurable: false, enumerable: true, writable: false, value: 34842 });
                bodavm.toolsFunc.windowdefineProperty(EXTColorBufferHalfFloat.prototype, "RGB16F_EXT", { configurable: false, enumerable: true, writable: false, value: 34843 });
                bodavm.toolsFunc.windowdefineProperty(EXTColorBufferHalfFloat.prototype, "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT", { configurable: false, enumerable: true, writable: false, value: 33297 });
                bodavm.toolsFunc.windowdefineProperty(EXTColorBufferHalfFloat.prototype, "UNSIGNED_NORMALIZED_EXT", { configurable: false, enumerable: true, writable: false, value: 35863 });
                delete EXTColorBufferHalfFloat.prototype.constructor;
                break;
            case "EXT_disjoint_timer_query":
                EXTDisjointTimerQuery = function EXTDisjointTimerQuery() {this._boisinit=bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(EXTDisjointTimerQuery, "EXTDisjointTimerQuery");
                info = Object.setPrototypeOf(info, EXTDisjointTimerQuery.prototype)
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "QUERY_COUNTER_BITS_EXT", { configurable: false, enumerable: true, writable: false, value: 34916 });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "CURRENT_QUERY_EXT", { configurable: false, enumerable: true, writable: false, value: 34917 });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "QUERY_RESULT_EXT", { configurable: false, enumerable: true, writable: false, value: 34918 });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "QUERY_RESULT_AVAILABLE_EXT", { configurable: false, enumerable: true, writable: false, value: 34919 });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "TIME_ELAPSED_EXT", { configurable: false, enumerable: true, writable: false, value: 35007 });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "TIMESTAMP_EXT", { configurable: false, enumerable: true, writable: false, value: 36392 });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "GPU_DISJOINT_EXT", { configurable: false, enumerable: true, writable: false, value: 36795 });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "beginQueryEXT", { configurable: true, enumerable: true, writable: true, value: function beginQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "beginQueryEXT", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "createQueryEXT", { configurable: true, enumerable: true, writable: true, value: function createQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "createQueryEXT", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "deleteQueryEXT", { configurable: true, enumerable: true, writable: true, value: function deleteQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "deleteQueryEXT", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "endQueryEXT", { configurable: true, enumerable: true, writable: true, value: function endQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "endQueryEXT", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "getQueryEXT", { configurable: true, enumerable: true, writable: true, value: function getQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "getQueryEXT", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "getQueryObjectEXT", { configurable: true, enumerable: true, writable: true, value: function getQueryObjectEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "getQueryObjectEXT", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "isQueryEXT", { configurable: true, enumerable: true, writable: true, value: function isQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "isQueryEXT", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(EXTDisjointTimerQuery.prototype, "queryCounterEXT", { configurable: true, enumerable: true, writable: true, value: function queryCounterEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "queryCounterEXT", arguments) } });
                delete EXTDisjointTimerQuery.prototype.constructor;

                break;
            case "EXT_float_blend":
                EXTFloatBlend = function EXTFloatBlend() {this._boisinit=bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(EXTFloatBlend, "EXTFloatBlend");
                info = Object.setPrototypeOf(info, EXTFloatBlend.prototype)
                delete EXTFloatBlend.prototype.constructor;
                break;
            case "EXT_shader_texture_lod":
                EXTShaderTextureLOD = function EXTShaderTextureLOD() { this._boisinit=bodavm.config.isinit}
                bodavm.toolsFunc.safeProto(EXTShaderTextureLOD, "EXTShaderTextureLOD");
                info = Object.setPrototypeOf(info, EXTShaderTextureLOD.prototype)
                delete EXTShaderTextureLOD.prototype.constructor;
                break;
            case "EXT_frag_depth":
                EXTFragDepth = function EXTFragDepth() { this._boisinit=bodavm.config.isinit}

                bodavm.toolsFunc.safeProto(EXTFragDepth, "EXTFragDepth");
                info = Object.setPrototypeOf(info, EXTFragDepth.prototype)
                delete EXTFragDepth.prototype.constructor;
                break;
            case "EXT_texture_compression_bptc":
                EXTTextureCompressionBPTC = function EXTTextureCompressionBPTC() { this._boisinit=bodavm.config.isinit}
                bodavm.toolsFunc.safeProto(EXTTextureCompressionBPTC, "EXTTextureCompressionBPTC");
                info = Object.setPrototypeOf(info, EXTTextureCompressionBPTC.prototype)
                bodavm.toolsFunc.windowdefineProperty(EXTTextureCompressionBPTC.prototype, "COMPRESSED_RGBA_BPTC_UNORM_EXT", { configurable: false, enumerable: true, writable: false, value: 36492 });
                bodavm.toolsFunc.windowdefineProperty(EXTTextureCompressionBPTC.prototype, "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT", { configurable: false, enumerable: true, writable: false, value: 36493 });
                bodavm.toolsFunc.windowdefineProperty(EXTTextureCompressionBPTC.prototype, "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT", { configurable: false, enumerable: true, writable: false, value: 36494 });
                bodavm.toolsFunc.windowdefineProperty(EXTTextureCompressionBPTC.prototype, "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT", { configurable: false, enumerable: true, writable: false, value: 36495 });

                delete EXTTextureCompressionBPTC.prototype.constructor;
                break;
            case "EXT_texture_compression_rgtc":
                EXTTextureCompressionRGTC = function EXTTextureCompressionRGTC() {this._boisinit=bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(EXTTextureCompressionRGTC, "EXTTextureCompressionRGTC");
                info = Object.setPrototypeOf(info, EXTTextureCompressionRGTC.prototype)
                bodavm.toolsFunc.windowdefineProperty(EXTTextureCompressionRGTC.prototype, "COMPRESSED_RED_RGTC1_EXT", { configurable: false, enumerable: true, writable: false, value: 36283 });
                bodavm.toolsFunc.windowdefineProperty(EXTTextureCompressionRGTC.prototype, "COMPRESSED_SIGNED_RED_RGTC1_EXT", { configurable: false, enumerable: true, writable: false, value: 36284 });
                bodavm.toolsFunc.windowdefineProperty(EXTTextureCompressionRGTC.prototype, "COMPRESSED_RED_GREEN_RGTC2_EXT", { configurable: false, enumerable: true, writable: false, value: 36285 });
                bodavm.toolsFunc.windowdefineProperty(EXTTextureCompressionRGTC.prototype, "COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT", { configurable: false, enumerable: true, writable: false, value: 36286 });
                delete EXTTextureCompressionRGTC.prototype.constructor;;

                break;
            case "EXT_texture_filter_anisotropic":
                EXTTextureFilterAnisotropic = function EXTTextureFilterAnisotropic() { this._boisinit=bodavm.config.isinit}
                bodavm.toolsFunc.safeProto(EXTTextureFilterAnisotropic, "EXTTextureFilterAnisotropic");
                info = Object.setPrototypeOf(info, EXTTextureFilterAnisotropic.prototype)
                bodavm.toolsFunc.windowdefineProperty(EXTTextureFilterAnisotropic.prototype, "TEXTURE_MAX_ANISOTROPY_EXT", { configurable: false, enumerable: true, writable: false, value: 34046 });
                bodavm.toolsFunc.windowdefineProperty(EXTTextureFilterAnisotropic.prototype, "MAX_TEXTURE_MAX_ANISOTROPY_EXT", { configurable: false, enumerable: true, writable: false, value: 34047 });
                delete EXTTextureFilterAnisotropic.prototype.constructor;;
                break;
            case "WEBKIT_EXT_texture_filter_anisotropic":
                EXTTextureFilterAnisotropic = function EXTTextureFilterAnisotropic() { }
                bodavm.toolsFunc.safeProto(EXTTextureFilterAnisotropic, "EXTTextureFilterAnisotropic");
                info = Object.setPrototypeOf(info, EXTTextureFilterAnisotropic.prototype)
                bodavm.toolsFunc.windowdefineProperty(EXTTextureFilterAnisotropic.prototype, "TEXTURE_MAX_ANISOTROPY_EXT", { configurable: false, enumerable: true, writable: false, value: 34046 });
                bodavm.toolsFunc.windowdefineProperty(EXTTextureFilterAnisotropic.prototype, "MAX_TEXTURE_MAX_ANISOTROPY_EXT", { configurable: false, enumerable: true, writable: false, value: 34047 });
                delete EXTTextureFilterAnisotropic.prototype.constructor;;
                break;
            case "EXT_sRGB":
                EXTsRGB = function EXTsRGB() { this._boisinit=bodavm.config.isinit}
                bodavm.toolsFunc.safeProto(EXTsRGB, "EXTsRGB");
                info = Object.setPrototypeOf(info, EXTsRGB.prototype)
                bodavm.toolsFunc.windowdefineProperty(EXTsRGB.prototype, "SRGB_EXT", { configurable: false, enumerable: true, writable: false, value: 35904 });
                bodavm.toolsFunc.windowdefineProperty(EXTsRGB.prototype, "SRGB_ALPHA_EXT", { configurable: false, enumerable: true, writable: false, value: 35906 });
                bodavm.toolsFunc.windowdefineProperty(EXTsRGB.prototype, "SRGB8_ALPHA8_EXT", { configurable: false, enumerable: true, writable: false, value: 35907 });
                bodavm.toolsFunc.windowdefineProperty(EXTsRGB.prototype, "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT", { configurable: false, enumerable: true, writable: false, value: 33296 });
                delete EXTsRGB.prototype.constructor;;
                break;
            case "KHR_parallel_shader_compile":
                KHRParallelShaderCompile = function KHRParallelShaderCompile() {this._boisinit=bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(KHRParallelShaderCompile, "KHRParallelShaderCompile");
                info = Object.setPrototypeOf(info, KHRParallelShaderCompile.prototype)
                bodavm.toolsFunc.windowdefineProperty(KHRParallelShaderCompile.prototype, "COMPLETION_STATUS_KHR", { configurable: false, enumerable: true, writable: false, value: 37297 });
                delete KHRParallelShaderCompile.prototype.constructor;;
                break;
            case "OES_element_index_uint":
                OESElementIndexUint = function OESElementIndexUint() { this._boisinit=bodavm.config.isinit}
                bodavm.toolsFunc.safeProto(OESElementIndexUint, "OESElementIndexUint");
                info = Object.setPrototypeOf(info, OESElementIndexUint.prototype)
                delete OESElementIndexUint.prototype.constructor;;
                break;
            case "OES_fbo_render_mipmap":
                OESFboRenderMipmap = function OESFboRenderMipmap() {this._boisinit=bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(OESFboRenderMipmap, "OESFboRenderMipmap");
                info = Object.setPrototypeOf(info, OESFboRenderMipmap.prototype)
                delete OESFboRenderMipmap.prototype.constructor;;
                break;
            case "OES_standard_derivatives":
                OESStandardDerivatives = function OESStandardDerivatives() {this._boisinit=bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(OESStandardDerivatives, "OESStandardDerivatives");
                info = Object.setPrototypeOf(info, OESStandardDerivatives.prototype)
                bodavm.toolsFunc.windowdefineProperty(OESStandardDerivatives.prototype, "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", { configurable: false, enumerable: true, writable: false, value: 35723 });
                delete OESStandardDerivatives.prototype.constructor;;
                break;
            case "OES_texture_float":
                OESTextureFloat = function OESTextureFloat() { this._boisinit=bodavm.config.isinit}
                bodavm.toolsFunc.safeProto(OESTextureFloat, "OESTextureFloat");
                info = Object.setPrototypeOf(info, OESTextureFloat.prototype)
                delete OESTextureFloat.prototype.constructor;;
                break;
            case "OES_texture_float_linear":
                OESTextureFloatLinear = function OESTextureFloatLinear() { this._boisinit=bodavm.config.isinit}
                bodavm.toolsFunc.safeProto(OESTextureFloatLinear, "OESTextureFloatLinear");
                info = Object.setPrototypeOf(info, OESTextureFloatLinear.prototype)
                delete OESTextureFloatLinear.prototype.constructor;;
                break;
            case "OES_texture_half_float":
                OESTextureHalfFloat = function OESTextureHalfFloat() { this._boisinit=bodavm.config.isinit}
                bodavm.toolsFunc.safeProto(OESTextureHalfFloat, "OESTextureHalfFloat");
                info = Object.setPrototypeOf(info, OESTextureHalfFloat.prototype)
                bodavm.toolsFunc.windowdefineProperty(OESTextureHalfFloat.prototype, "HALF_FLOAT_OES", { configurable: false, enumerable: true, writable: false, value: 36193 });
                delete OESTextureHalfFloat;
                break;
            case "OES_texture_half_float_linear":
                OESTextureHalfFloatLinear = function OESTextureHalfFloatLinear() { this._boisinit=bodavm.config.isinit}
                bodavm.toolsFunc.safeProto(OESTextureHalfFloatLinear, "OESTextureHalfFloatLinear");
                info = Object.setPrototypeOf(info, OESTextureHalfFloatLinear.prototype)
                delete OESTextureHalfFloatLinear.prototype.constructor;;
                break;
            case "OES_vertex_array_object":
                OESVertexArrayObject = function OESVertexArrayObject() { this._boisinit=bodavm.config.isinit}
                bodavm.toolsFunc.safeProto(OESVertexArrayObject, "OESVertexArrayObject");
                info = Object.setPrototypeOf(info, OESVertexArrayObject.prototype)
                bodavm.toolsFunc.windowdefineProperty(OESVertexArrayObject.prototype, "VERTEX_ARRAY_BINDING_OES", { configurable: false, enumerable: true, writable: false, value: 34229 });
                bodavm.toolsFunc.windowdefineProperty(OESVertexArrayObject.prototype, "bindVertexArrayOES", { configurable: true, enumerable: true, writable: true, value: function bindVertexArrayOES() { return bodavm.toolsFunc.dispatch(this, OESVertexArrayObject.prototype, "OESVertexArrayObject", "bindVertexArrayOES", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(OESVertexArrayObject.prototype, "createVertexArrayOES", { configurable: true, enumerable: true, writable: true, value: function createVertexArrayOES() { return bodavm.toolsFunc.dispatch(this, OESVertexArrayObject.prototype, "OESVertexArrayObject", "createVertexArrayOES", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(OESVertexArrayObject.prototype, "deleteVertexArrayOES", { configurable: true, enumerable: true, writable: true, value: function deleteVertexArrayOES() { return bodavm.toolsFunc.dispatch(this, OESVertexArrayObject.prototype, "OESVertexArrayObject", "deleteVertexArrayOES", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(OESVertexArrayObject.prototype, "isVertexArrayOES", { configurable: true, enumerable: true, writable: true, value: function isVertexArrayOES() { return bodavm.toolsFunc.dispatch(this, OESVertexArrayObject.prototype, "OESVertexArrayObject", "isVertexArrayOES", arguments) } });
                delete OESVertexArrayObject.prototype.constructor;;
                break;
            case "WEBGL_color_buffer_float":
                WebGLColorBufferFloat = function WebGLColorBufferFloat() {this._boisinit=bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(WebGLColorBufferFloat, "WebGLColorBufferFloat");
                info = Object.setPrototypeOf(info, WebGLColorBufferFloat.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLColorBufferFloat.prototype, "RGBA32F_EXT", { configurable: false, enumerable: true, writable: false, value: 34836 });
                bodavm.toolsFunc.windowdefineProperty(WebGLColorBufferFloat.prototype, "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT", { configurable: false, enumerable: true, writable: false, value: 33297 });
                bodavm.toolsFunc.windowdefineProperty(WebGLColorBufferFloat.prototype, "UNSIGNED_NORMALIZED_EXT", { configurable: false, enumerable: true, writable: false, value: 35863 });
                delete WebGLColorBufferFloat.prototype.constructor;;
                break;
            case "WEBGL_compressed_texture_s3tc":
                WebGLCompressedTextureS3TC = function WebGLCompressedTextureS3TC() { this._boisinit=bodavm.config.isinit}
                bodavm.toolsFunc.safeProto(WebGLCompressedTextureS3TC, "WebGLCompressedTextureS3TC");
                info = Object.setPrototypeOf(info, WebGLCompressedTextureS3TC.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGB_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 33776 });
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 33777 });
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT3_EXT", { configurable: false, enumerable: true, writable: false, value: 33778 });
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT5_EXT", { configurable: false, enumerable: true, writable: false, value: 33779 });
                delete WebGLCompressedTextureS3TC.prototype.constructor;;
                break;
            case "WEBKIT_WEBGL_compressed_texture_s3tc":
                WebGLCompressedTextureS3TC = function WebGLCompressedTextureS3TC() { this._boisinit=bodavm.config.isinit}
                bodavm.toolsFunc.safeProto(WebGLCompressedTextureS3TC, "WebGLCompressedTextureS3TC");
                info = Object.setPrototypeOf(info, WebGLCompressedTextureS3TC.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGB_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 33776 });
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 33777 });
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT3_EXT", { configurable: false, enumerable: true, writable: false, value: 33778 });
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT5_EXT", { configurable: false, enumerable: true, writable: false, value: 33779 });
                delete WebGLCompressedTextureS3TC.prototype.constructor;;
                break;
            case "WEBGL_compressed_texture_s3tc_srgb":
                WebGLCompressedTextureS3TCsRGB = function WebGLCompressedTextureS3TCsRGB() { this._boisinit=bodavm.config.isinit}
                bodavm.toolsFunc.safeProto(WebGLCompressedTextureS3TCsRGB, "WebGLCompressedTextureS3TCsRGB");
                info = Object.setPrototypeOf(info, WebGLCompressedTextureS3TCsRGB.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TCsRGB.prototype, "COMPRESSED_SRGB_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 35916 });
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TCsRGB.prototype, "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 35917 });
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TCsRGB.prototype, "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", { configurable: false, enumerable: true, writable: false, value: 35918 });
                bodavm.toolsFunc.windowdefineProperty(WebGLCompressedTextureS3TCsRGB.prototype, "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", { configurable: false, enumerable: true, writable: false, value: 35919 });
                delete WebGLCompressedTextureS3TCsRGB.prototype.constructor;;
                break;
            case "WEBGL_debug_shaders":
                WebGLDebugShaders = function WebGLDebugShaders() {this._boisinit=bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(WebGLDebugShaders, "WebGLDebugShaders");
                info = Object.setPrototypeOf(info, WebGLDebugShaders.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLDebugShaders.prototype, "getTranslatedShaderSource", { configurable: true, enumerable: true, writable: true, value: function getTranslatedShaderSource() { return bodavm.toolsFunc.dispatch(this, WebGLDebugShaders.prototype, "WebGLDebugShaders", "getTranslatedShaderSource", arguments) } });
                delete WebGLDebugShaders.prototype.constructor;;
                break;
            case "WEBGL_depth_texture":
                WebGLDepthTexture = function WebGLDepthTexture() { this._boisinit=bodavm.config.isinit}
                bodavm.toolsFunc.safeProto(WebGLDepthTexture, "WebGLDepthTexture");
                info = Object.setPrototypeOf(info, WebGLDepthTexture.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLDepthTexture.prototype, "UNSIGNED_INT_24_8_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34042 });
                delete WebGLDepthTexture.prototype.constructor;;
                break;
            case "WEBKIT_WEBGL_depth_texture":
                WebGLDepthTexture = function WebGLDepthTexture() {this._boisinit=bodavm.config.isinit}
                bodavm.toolsFunc.safeProto(WebGLDepthTexture, "WebGLDepthTexture");
                info = Object.setPrototypeOf(info, WebGLDepthTexture.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLDepthTexture.prototype, "UNSIGNED_INT_24_8_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34042 });
                delete WebGLDepthTexture.prototype.constructor;;
                break;
            case "WEBGL_draw_buffers":
                WebGLDrawBuffers = function WebGLDrawBuffers() { this._boisinit=bodavm.config.isinit}
                bodavm.toolsFunc.safeProto(WebGLDrawBuffers, "WebGLDrawBuffers");
                info = Object.setPrototypeOf(info, WebGLDrawBuffers.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT0_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36064 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT1_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36065 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT2_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36066 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT3_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36067 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT4_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36068 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT5_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36069 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT6_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36070 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT7_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36071 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT8_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36072 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT9_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36073 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT10_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36074 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT11_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36075 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT12_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36076 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT13_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36077 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT14_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36078 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT15_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36079 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER0_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34853 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER1_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34854 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER2_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34855 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER3_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34856 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER4_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34857 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER5_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34858 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER6_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34859 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER7_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34860 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER8_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34861 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER9_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34862 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER10_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34863 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER11_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34864 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER12_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34865 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER13_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34866 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER14_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34867 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER15_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34868 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "MAX_COLOR_ATTACHMENTS_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36063 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "MAX_DRAW_BUFFERS_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34852 });
                bodavm.toolsFunc.windowdefineProperty(WebGLDrawBuffers.prototype, "drawBuffersWEBGL", { configurable: true, enumerable: true, writable: true, value: function drawBuffersWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLDrawBuffers.prototype, "WebGLDrawBuffers", "drawBuffersWEBGL", arguments) } });
                delete WebGLDrawBuffers.prototype.constructor;;
                break;
            case "WEBGL_lose_context":
                WebGLLoseContext = function WebGLLoseContext() {this._boisinit=bodavm.config.isinit }
                bodavm.toolsFunc.safeProto(WebGLLoseContext, "WebGLLoseContext");
                info = Object.setPrototypeOf(info, WebGLLoseContext.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLLoseContext.prototype, "loseContext", { configurable: true, enumerable: true, writable: true, value: function loseContext() { return bodavm.toolsFunc.dispatch(this, WebGLLoseContext.prototype, "WebGLLoseContext", "loseContext", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(WebGLLoseContext.prototype, "restoreContext", { configurable: true, enumerable: true, writable: true, value: function restoreContext() { return bodavm.toolsFunc.dispatch(this, WebGLLoseContext.prototype, "WebGLLoseContext", "restoreContext", arguments) } });
                delete WebGLLoseContext.prototype.constructor;;
                break;
            case "WEBKIT_WEBGL_lose_context":
                WebGLLoseContext = function WebGLLoseContext() { this._boisinit=bodavm.config.isinit}
                bodavm.toolsFunc.safeProto(WebGLLoseContext, "WebGLLoseContext");
                info = Object.setPrototypeOf(info, WebGLLoseContext.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLLoseContext.prototype, "loseContext", { configurable: true, enumerable: true, writable: true, value: function loseContext() { return bodavm.toolsFunc.dispatch(this, WebGLLoseContext.prototype, "WebGLLoseContext", "loseContext", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(WebGLLoseContext.prototype, "restoreContext", { configurable: true, enumerable: true, writable: true, value: function restoreContext() { return bodavm.toolsFunc.dispatch(this, WebGLLoseContext.prototype, "WebGLLoseContext", "restoreContext", arguments) } });
                delete WebGLLoseContext.prototype.constructor;; break;
            case "WEBGL_multi_draw":
                WebGLMultiDraw = function WebGLMultiDraw() { this._boisinit=bodavm.config.isinit}
                bodavm.toolsFunc.safeProto(WebGLMultiDraw, "WebGLMultiDraw");
                info = Object.setPrototypeOf(info, WebGLMultiDraw.prototype)
                bodavm.toolsFunc.windowdefineProperty(WebGLMultiDraw.prototype, "multiDrawArraysInstancedWEBGL", { configurable: true, enumerable: true, writable: true, value: function multiDrawArraysInstancedWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLMultiDraw.prototype, "WebGLMultiDraw", "multiDrawArraysInstancedWEBGL", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(WebGLMultiDraw.prototype, "multiDrawArraysWEBGL", { configurable: true, enumerable: true, writable: true, value: function multiDrawArraysWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLMultiDraw.prototype, "WebGLMultiDraw", "multiDrawArraysWEBGL", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(WebGLMultiDraw.prototype, "multiDrawElementsInstancedWEBGL", { configurable: true, enumerable: true, writable: true, value: function multiDrawElementsInstancedWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLMultiDraw.prototype, "WebGLMultiDraw", "multiDrawElementsInstancedWEBGL", arguments) } });
                bodavm.toolsFunc.windowdefineProperty(WebGLMultiDraw.prototype, "multiDrawElementsWEBGL", { configurable: true, enumerable: true, writable: true, value: function multiDrawElementsWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLMultiDraw.prototype, "WebGLMultiDraw", "multiDrawElementsWEBGL", arguments) } });
                delete WebGLMultiDraw.prototype.constructor;;
                break;
            default:
                console.log_copy(`WebGLRenderingContext_getExtension `, `${getExtension}属性未实现  `);
                break;
        }

        return info
    }
    bodavm.envFunc.WebGLRenderingContext_getSupportedExtensions = function WebGLRenderingContext_getSupportedExtensions() {
        if (bodavm.config.isdebug) { debugger }
        let SupportedExtensions = [
            "ANGLE_instanced_arrays",
            "EXT_blend_minmax",
            "EXT_color_buffer_half_float",
            "EXT_disjoint_timer_query",
            "EXT_float_blend",
            "EXT_frag_depth",
            "EXT_shader_texture_lod",
            "EXT_texture_compression_bptc",
            "EXT_texture_compression_rgtc",
            "EXT_texture_filter_anisotropic",
            "WEBKIT_EXT_texture_filter_anisotropic",
            "EXT_sRGB",
            "KHR_parallel_shader_compile",
            "OES_element_index_uint",
            "OES_fbo_render_mipmap",
            "OES_standard_derivatives",
            "OES_texture_float",
            "OES_texture_float_linear",
            "OES_texture_half_float",
            "OES_texture_half_float_linear",
            "OES_vertex_array_object",
            "WEBGL_color_buffer_float",
            "WEBGL_compressed_texture_s3tc",
            "WEBKIT_WEBGL_compressed_texture_s3tc",
            "WEBGL_compressed_texture_s3tc_srgb",
            "WEBGL_debug_renderer_info",
            "WEBGL_debug_shaders",
            "WEBGL_depth_texture",
            "WEBKIT_WEBGL_depth_texture",
            "WEBGL_draw_buffers",
            "WEBGL_lose_context",
            "WEBKIT_WEBGL_lose_context",
            "WEBGL_multi_draw"
        ]
        console.log_copy(`WebGLRenderingContext_getSupportedExtensions=== `, `${SupportedExtensions}  `);
        return SupportedExtensions
    }

    bodavm.envFunc.WebGLRenderingContext_getParameter = function WebGLRenderingContext_getParameter() {
        let pname = Number(arguments[0])
        if (bodavm.config.isdebug) { debugger }
        ;
        let resDict = {
            37446: `ANGLE (Intel, Intel(R) UHD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)`,
            37445: 'Google Inc. (Intel)',
            3412: 8,
            3414: 24,
            3411: 8,
            34047: null,
            35661: 32,
            34076: 16384,
            36349: 1024,
            34024: 16384,
            34930: 16,
            3379: 16384,
            36348: 30,
            34921: 16,
            35660: 16,
            36347: 4096,
            35724: 'WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)',
            3415: 0,
            7938: 'WebGL 1.0 (OpenGL ES 2.0 Chromium)'
        }
        res = resDict[pname]
        if (res === undefined) return console.log_copy(`WebGLRenderingContext_getParameter `, `${pname} 未实现`);
        console.log_copy(`WebGLRenderingContext_getParameter `, `${pname}  `, `-> res ->${res}`)
        return res
    }
    //HTMLStyleElement
    bodavm.envFunc.HTMLStyleElement_sheet_get = function HTMLStyleElement_sheet_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log_copy(`HTMLStyleElement_sheet_get `, `${null}  `);
        return null
    }

    //HTMLIFrameElement
    bodavm.envFunc.HTMLIFrameElement_contentWindow_get = function HTMLIFrameElement_contentWindow_get() {
        // debugger;
        if (bodavm.config.isdebug) { debugger }

        contentwindow = this._boarg.contentWindow
        if (contentwindow){
            contentwindow._contentiframe=true
        }
        console.log_copy(`HTMLIFrameElement_contentWindow_get `, `-> res ->${contentwindow}`,`获取iframe下的window!!!`);

        // contentwindow.__proto__ = bodavm.memory.globalobj['Window'].prototype
        // contentwindow['top']='123'
        //这种补法存在问题,待完善
        return contentwindow
    }

    //HTMLAnchorElement


    //CSS
    bodavm.envFunc.CSS_supports = function CSS_supports() {
        let name = arguments[0]
        let value = arguments[1]
        if (bodavm.config.isdebug) { debugger };

        if (name == "overscroll-behavior" && value == "auto") {
            console.log_copy(`CSS_supports `, `name->${name} `, `value->${value} `, "true");
            return true
        }
        if (name == "-webkit-overscroll-behavior" && value == "auto") {
            console.log_copy(`CSS_supports `, `name->${name} `, `value->${value} `, "`false");
            return false
        }
        if (name == "-o-overscroll-behavior" && value == "auto") {
            console.log_copy(`CSS_supports `, `name->${name} `, `value->${value} `, "false");
            return false
        }
        if (name == "-moz-overscroll-behavior" && value == "auto") {
            console.log_copy(`CSS_supports `, `name->${name} `, `value->${value} `, "false");
            return false
        }
        if (name == "-ms-overscroll-behavior" && value == "auto") {
            console.log_copy(`CSS_supports `, `name->${name} `, `value->${value} `, "false");
            return false
        }

    }
    //CSSStyleDeclaration_getPropertyValue
    bodavm.envFunc.CSSStyleDeclaration_getPropertyValue = function CSSStyleDeclaration_getPropertyValue() {
        let getPropertyValue = arguments[0]

        console.log_copy(`CSSStyleDeclaration_getPropertyValue `, getPropertyValue, `!!!!!!!!!未完善!!!!!!!!!!!!   `);

    }
    //RTCPeerConnection_onicecandidate_set
    bodavm.envFunc.RTCPeerConnection_onicecandidate_set = function RTCPeerConnection_onicecandidate_set() {
        let onicecandidate = arguments[0]
        if (bodavm.config.isdebug) { debugger };
        this._onicecandidate = onicecandidate
        console.log_copy(`RTCPeerConnection_onicecandidate_set    `, `onicecandidate->${onicecandidate}`);

        return onicecandidate
    }

    bodavm.envFunc.RTCPeerConnection_createOffer = function RTCPeerConnection_createOffer() {
        let successCallback = arguments[0]
        let failureCallback = arguments[1]
        let options = arguments[3]
        if (bodavm.config.isdebug) { debugger };
        // bodavm.toolsFunc.symbolProperty(successCallback)
        // bodavm.toolsFunc.symbolProperty(failureCallback)

        let  retSessionDescription = {};
        retSessionDescription.__proto__ = bodavm.memory.globalobj['RTCSessionDescription'].prototype
        // debugger
        // bodavm.toolsFunc.symbolProperty(batteryManager)
        console.log_copy(`RTCPeerConnection_createOffer `, `successCallback->${successCallback} `, `failureCallback->${failureCallback} `, `options->${options},!!!!!!!!!未完善!!!!!!!!!!!!  `);

        let promise = new Promise((resolve, reject) => {
            resolve(retSessionDescription)
        })

        return promise
        
        // return new Promise((successCallback, failureCallback) => {
        // }).then(successCallback => {
        //     successCallback()
        // },
        //     failureCallback => {
        //         failureCallback()
        //     }
        // )
    }



    bodavm.envFunc.MutationObserver_observe = function () {
        // debugger
        if (bodavm.config.isdebug) { debugger };
        let target = arguments[0]
        let options = arguments[1]
        debugger
        this._callbacck()
        console.log_copy(`MutationObserver_observe `, `target->${target} `, `options->${options} 直接调用callback 待完善!!!! `);

        // let res = this._boarg.observe(target._boarg, options)
    }
    //HTMLImageElement

    bodavm.envFunc.HTMLImageElement_src_set = function HTMLImageElement_src_set() {
        if (bodavm.config.isdebug) { debugger };
        // debugger
        let img = arguments[0]
        this._boarg.src = img
        // this._elements['0'].attr['img'] = img
        console.log_copy(`HTMLImageElement_src_set `, `img->${img}  `);
        return img
    }

    bodavm.envFunc.HTMLImageElement_height_get = function HTMLImageElement_height_get() {
        let height = 0
        if (bodavm.config.isdebug) { debugger };

        console.log_copy(`HTMLImageElement_height_get `, `height->${height}  `);
        return height
    }
    bodavm.envFunc.HTMLImageElement_width_get = function HTMLImageElement_height_get() {
        let width = 0
        if (bodavm.config.isdebug) { debugger };

        console.log_copy(`HTMLImageElement_width_get `, `width->${width}  `);
        return width
    }
    //MediaQueryList
    bodavm.envFunc.MediaQueryList_matches_get = function MediaQueryList_matches_get() {
        if (bodavm.config.isdebug) { debugger };
        // debugger
        let media_ = this._media
        let resbool = ''
        switch (media_) {
            case "(any-pointer: fine )":
                resbool = true
                console.log_copy(`MediaQueryList_matches_get `, `media_ ->${media_}`, `-> resbool->${resbool}`);
                break
            case "(any-pointer: coarse )":
                resbool = false
                console.log_copy(`MediaQueryList_matches_get `, `media_ ->${media_}`, `-> resbool->${resbool}`);
                break
            case "(any-pointer: none )":
                resbool = false
                console.log_copy(`MediaQueryList_matches_get `, `media_ ->${media_}`, `-> resbool->${resbool}`);
                break
            case "(any-pointer )":
                resbool = true
                console.log_copy(`MediaQueryList_matches_get `, `media_ ->${media_}`, `-> resbool->${resbool}`);
                break
            case "(any-hover: hover )":
                resbool = true
                console.log_copy(`MediaQueryList_matches_get `, `media_ ->${media_}`, `-> resbool->${resbool}`);
                break
            case "(any-hover: on-demand )":
                resbool = false
                console.log_copy(`MediaQueryList_matches_get `, `media_ ->${media_}`, `-> resbool->${resbool}`);
                break

            case "(any-hover: none )":
                resbool = false
                console.log_copy(`MediaQueryList_matches_get `, `media_ ->${media_}`, `-> resbool->${resbool}`);
                break
            case "(any-hover )":
                resbool = true
                console.log_copy(`MediaQueryList_matches_get `, `media_ ->${media_}`, `-> resbool->${resbool}`);
                break
            case "(color-gamut: srgb )":
                resbool = true
                console.log_copy(`MediaQueryList_matches_get `, `media_ ->${media_}`, `-> resbool->${resbool}`);
                break
            case "(color-gamut: p3 )":
                resbool = false
                console.log_copy(`MediaQueryList_matches_get `, `media_ ->${media_}`, `-> resbool->${resbool}`);
                break
            case "(color-gamut: rec2020 )":
                resbool = false
                console.log_copy(`MediaQueryList_matches_get `, `media_ ->${media_}`, `-> resbool->${resbool}`);
                break
            case "(color-gamut )":
                resbool = true
                console.log_copy(`MediaQueryList_matches_get `, `media_ ->${media_}`, `-> resbool->${resbool}`);
                break

            default:
                console.log_copy(`MediaQueryList_matches_get `, `media_ ->${media_} 未实现`);
        }
        return resbool
    }


    //WebGLShaderPrecisionFormat
    bodavm.envFunc.WebGLShaderPrecisionFormat_rangeMin_get = function WebGLShaderPrecisionFormat_rangeMin_get() {
        console.log_copy(`WebGLShaderPrecisionFormat_rangeMin_get `, 127);
        if (bodavm.config.isdebug) { debugger };

        return 127
    }

    bodavm.envFunc.WebGLShaderPrecisionFormat_rangeMax_get = function WebGLShaderPrecisionFormat_rangeMax_get() {
        console.log_copy(`WebGLShaderPrecisionFormat_rangeMax_get `, 127);
        if (bodavm.config.isdebug) { debugger };

        return 127
    }
    bodavm.envFunc.WebGLShaderPrecisionFormat_precision_get = function WebGLShaderPrecisionFormat_precision_get() {
        console.log_copy(`WebGLShaderPrecisionFormat_precision_get `, 23);
        if (bodavm.config.isdebug) { debugger };

        return 23
    }

    //BaseAudioContext
    bodavm.envFunc.BaseAudioContext_createOscillator = function BaseAudioContext_createOscillator() {
        console.log_copy(`BaseAudioContext_createOscillator`, undefined);
        return undefined
    }



    //HTMLInputElement
    bodavm.envFunc.HTMLInputElement_type_get = function HTMLInputElement_type_get() {
        // debugger
        let tpye = this._boarg.type
        console.log_copy(`HTMLInputElement_type_get `, `type->${tpye}`);
        return tpye
    }
    bodavm.envFunc.HTMLInputElement_name_get = function HTMLInputElement_name_get() {
        // debugger
        let name_ = this._boarg.name
        if (bodavm.config.isdebug) { debugger };
        console.log_copy(`HTMLInputElement_name_get `, ` name->${name_}`);
        return name_
    }
    bodavm.envFunc.HTMLInputElement_value_get = function HTMLInputElement_value_get() {
        // debugger

        let value_ = this._boarg.value
        if (bodavm.config.isdebug) { debugger };
        console.log_copy(`HTMLInputElement_value_get `, ` value_->${value_}`);
        return value_
    }
}();
// 