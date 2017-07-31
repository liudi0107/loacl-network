/**
 * 封装AJAX
 */
function ajax(obj){
    var xhr=createXHR();//创建一个对象；
    var par=paragraph();
    //obj.url=
    if(obj.async){
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){//如果数据加载完毕
                callBack();
            }
        }
    }
    if(obj.method=="get"){//get
        obj.url+=(obj.url.indexOf("?")==-1?"?":"&");
        xhr.open(obj.method,obj.url+par,obj.async);
        xhr.send(null);
    }else{//post
        xhr.open(obj.method,obj.url,obj.async);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');//模拟表单提交
        xhr.send(par);
    }

    if(!obj.async){
        callBack();
    }
    function paragraph(){
        var arr=[];
        for(var str in obj.data){
            arr.push(encodeURIComponent(str)+"="+encodeURIComponent(obj.data[str]));
        }
        return arr.join("&");
    }

    function callBack(){
        if(xhr.status==200){//如果成功
            obj.success(xhr.responseText);
        }else{
            obj.error("网络连接错误。错误编号是"+xhr.status+"错误信息是："+xhr.statusText);
        }
    }
    //创建XHR对象
    function createXHR(){
        if(typeof XMLHttpRequest=="undefined"){
            return new ActiveXObject("MSXML2.XMLHttp");
        }else{
            return new XMLHttpRequest();
        }
    }
}