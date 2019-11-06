<template>
<div>
    <!-- 	抬头 -->
    <div id="header">
        <div class="f1">
            <ul>
                <li>
                    <span class="c1">0500-6000000</span>
                    <span>上午9点至下午6点</span>
                    <a href="#" class="a1">登录</a>
                    <a href="#">注册</a>
                </li>
            </ul>
        </div>
        <div id="guding">
            <div class="f2 float-left"></div>
            <div class="f3 dropdown float-left">
                <ul class="nav nav-pills ">
                    <li class="nav-item text-center">
                        <a data-toggle="pill" class="nav-link " href="#tab1">客厅
                        </a>
                    </li>
                    <li class="nav-item">
                        <a data-toggle="pill" class="nav-link" href="#tab2">餐厅
                        </a>
                    </li>
                    <li class="nav-item danghao">
                        <a data-toggle="pill" class="nav-link" href="#tab3">厨房
                        </a>
                    </li>
                    <li class="nav-item">
                        <a data-toggle="pill" class="nav-link" href="#tab4">浴室
                        </a>
                    </li>
                    <button href="" data-toggle="dropdown" class="btn btn-warning dropdown-toggle ">关于
                        <ul class="dropdown-menu">
                            <li><a href="">常见问题</a></li>
                            <li><a href="">支付方式</a></li>
                            <li><a href="">加盟方式</a></li>
                            <li><a href="">联系我们</a></li>
                        </ul>
                    </button>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#header ul{
    list-style:none;
    padding:10px 0 10px 0;
}
#header{
    width:1423px;
    height:40px;
    padding:0;
    margin:0 auto;

}
#header .f1{
    background:#f9f9f9;
    width:100%;
    position:relative;
}
.f1 .a1{
    padding:0px 16px 0 960px;
}
.f1 .c1{
    padding-left:50px;
}
#header .f2{
    width:165px;height:40px;
    background-image:url(/images/01-index/logo.png);
    background-repeat:no-repeat;
    background-size:165px 40px;
    margin:20px 0 0 128px;
}
.f3{
    margin:-56px 0 14px 900px;
    position:absolute;
    top:100px;
    z-index: 30;
}
.f3 ul a{
    color:#a5a5a5;
}
.btn-warning{
    background-color:#ff5722 ;
    color:#fff;
}
.nav-pills .nav-link.active, .nav-pills .show > .nav-link{
    background-color:#ff5722 ;
    color:#fff;
}
</style>
