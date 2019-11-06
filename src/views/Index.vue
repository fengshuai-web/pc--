<template>
<div>
<!-- 头部引入 -->
<my-header></my-header>
<!--轮播图-->
<div class="carousel my_tu_margin" id="demo"  data-ride="carousel">
    <!--1.轮播图片-->
    <div class="carousel-inner ">
        <div class="carousel-item active">
            <img src="img_ar/adv_left.jpg" id="tu"  alt=""/>
        </div>
        <div class="carousel-item ">
            <img src="img_ar/banner3.jpg" id="tu" alt=""/>
        </div>
        <div class="carousel-item">
            <img src="img_ar/banner4.jpg" id="tu" alt=""/>
        </div>
        <div class="carousel-item">
            <img src="img_ar/banner3.jpg" id="tu" alt=""/>
        </div>
    </div>
    <!--2.左右箭头-->
    <a data-slide="prev" href="#demo" class="carousel-control-prev">
        <span class="carousel-control-prev-icon"></span>
    </a>
    <a data-slide="next" href="#demo" class="carousel-control-next">
        <span class="carousel-control-next-icon"></span>
    </a>

    <!--3.轮播指示器-->
    <ul class="carousel-indicators shou">
        <li data-target="#demo" data-slide-to="0" class="active " ></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
        <li data-target="#demo" data-slide-to="3"></li>
    </ul>
</div>
<div id="zhanshi">
    <div class="row"></div>
    <div class="zz">
        <div class="z2"><img src="" alt=""></div>
        <div class="z3"><img src="" alt=""></div>
        <div class="z4"><img src="" alt=""></div>
    </div>
        <div class="ze" >
            <div class="e1"></div>
            <div class="e2"></div>
        </div>
</div>
<!-- 关于我们 -->
<div class="about_ue">
    <a href="">关于我们>></a>
</div>
<!-- 商品列表 -->
<div class="list">
    <p>精选商品列表</p>
    <span>List of goods</span>
</div>
<div class="list-t">
    <ul class="nav nav-pills">
        <li class="nav-item">
            <a href="" data-toggle="pill"  class="cc nav-link active d-inline mr-1" >全部</a>
            <a href="">卧室</a>
            <a href="">厨房</a>
            <a href="">客厅</a>
            <a href="">浴室</a>
            <a href="">餐厅</a>
        </li>
    </ul>
</div>
<div class="row img_x text-center h-100 jiaju">
    <div class="col-3 ">
        <a href=""><img src="img_ar/product_list1.jpg" class="img_1" alt=""></a>
        <a href="" >扶手椅</a>
        <p>￥ 59.00</p>
    </div>
    <div class="col-3">
        <a href=""><img src="img_ar/product_list2.jpg" class="img_1" alt=""></a>
        <a href="">黑色置物架</a>
        <p>￥ 38.00</p>
    </div>
    <div class="col-3">
        <a href=""><img class="img_1" src="img_ar/product_list3.jpg" alt=""></a>
        <a href="">收纳盆</a>
        <p>￥ 38.00</p>
    </div>
    <div class="col-3">
        <a href=""><img class="img_1" src="img_ar/product_list4.jpg" alt=""></a>
        <a href="">洁具套件</a>
        <p>￥ 366.00</p>
    </div>
    <div class="col-3">
        <a href=""><img class="img_1" src="img_ar/product_list5.jpg" alt=""></a>
        <a href="">单人布艺沙发</a>
        <p>￥ 2999.00</p>
    </div>
    <div class="col-3">
        <a href=""><img class="img_1" src="img_ar/product_list6.jpg" alt=""></a>
        <a href="">单门镜柜</a>
        <p>￥ 895.00</p>
    </div>
    <div class="col-3">
        <a href=""><img class="img_1" src="img_ar/product_list7.jpg" alt=""></a>
        <a href="">化妆镜</a>
        <p>￥ 69.00</p>

    </div>
    <div class="col-3">
        <a href=""><img class="img_1" src="img_ar/product_list8.jpg" alt=""></a>
        <a href="">衣物收纳架</a>
        <p>￥ 88.00</p>

    </div>
    <div class="col-3">
        <a href=""><img class="img_1" src="img_ar/product_list9.jpg" alt=""></a>
        <a href="">置物挂件</a>
        <p>￥ 79.00</p>

    </div>
    <div class="col-3">
        <a href=""><img class="img_1" src="img_ar/product_list10.jpg" alt=""></a>
        <a href="">门把手</a>
        <p>￥ 8.00</p>

    </div>
    <div class="col-3">
        <a href=""><img class="img_1" src="img_ar/product_list11.jpg" alt=""></a>
        <a href="" >木质置物架</a>
        <p>￥ 275.00</p>
    </div>
    <div class="col-3">
        <a href=""><img class="img_1" src="img_ar/product_list12.jpg" alt=""></a>
        <a href="">落地灯</a>
        <p>￥ 299.00</p>
    </div>
</div>
<!--更多商品-->
<div class="text-center my_ge " >
    <a class="p-3 px-5  bg-transparent border border-dark " href="">更多商品>></a>
</div>
<div class="row m-auto my_av h-100 mx-0">
    <div class="col-6 px-0">
        <img src="img_ar/adv_left.jpg" class="img-fluid mt-3" alt=""/>
    </div>
    <div class="col-6 px-0 pl-5">
        <hr/>
        <h4 class="text-right my_war font-weight-bold">体验北欧室内设计最新潮流</h4>
        <p class="text-right ">Beautiful Utensil</p>
        <hr/>
        <p class="mt-5 text-muted h6">对北欧简约风格非常痴迷，轻松、简洁、时尚而又温馨，这也是她对一个家的梦想和要求。这是一个充满梦想的家，处处都流露出与众不同的精设计手法也非常的大胆而巧妙，尤其是在色彩对比运用上更是娴熟自如...</p>
        </div>
</div>
<!--会员俱乐部-->
<div class="my_gao bg-warning text-center">
    <div class="MY_juzhong">
    <h4>会员俱乐部 专享优惠</h4>
    <p>LIET OF GOODS</p>
    </div>
</div>
<div class="MY_g">
<div class="my_zuo ">
    <h4 class="font-weight-bold">会员俱乐部专享优惠</h4>
    <p>the VIP club exclusive privilege</p>
    <div class="row">
        <div class="col-5">
            <img src="img_ar/product_vip1.jpg" alt=""/>
        </div>
        <div class="col-7">
            <img src="img_ar/bigsofa2.jpg " class="img-fluid" alt=""/>
        </div>
        <div class="col-7">
            <img src="img_ar/banner4.jpg" class=" img-fluid" alt=""/>
        </div>
        <div class="col-5">
            <img src="img_ar/product_vip2.jpg" alt=""/>
        </div>
        <div class="col-5">
            <img src="img_ar/register_vip.jpg" class="img-fluid" alt=""/>
        </div>
        <div class="col-7">
            <p class="mt-5 ml-5 ">选择情有独钟的生活生活方式由你原创，万般风情，没有压力.....快来加入我们吧！
            </p>
            <div class="my_zhuce">
            <a href="" class="pt-3 pb-3 pl-5 pr-5 my_zhuce border border-dark ">立即注册>></a>
            </div>
        </div>
    </div>
</div>
</div>
    <my-footer></my-footer>
	<!-- 尾部引入 -->
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#tu{
    width:1680px;
    height:873px;
}
.my_tu_margin{
    margin:80px 126px;
}
#guding{
    background:#fff;
    padding-bottom:30px;
    margin-top:-7px;
}
#zhanshi{
    position:relative;
    width:1024px;height:1024px;
    margin:-160px auto;
    padding-left:21px;
    background-color:#fff;
}
.z2{
    width:657px;height:328px;
    background-image:url(/images/01-index/bigsofa1.jpg);
    background-repeat:no-repeat;
    background-size:657px 328px;
}
.z3{
    width:657px;height:328px;
    background-image:url(/images/01-index/bigstool1.jpg);
    background-repeat:no-repeat;
    background-size:658px 328px;
}
.z4{
    width:657px;height:328px;
    background-image:url(/images/01-index/desk1.jpg);
    background-repeat:no-repeat;
    background-size:658px 328px;
}
.e1{
    width:327px;height:327px;
    background-image:url(/images/01-index/furniture.jpg);
    background-repeat:no-repeat;
    background-size:327px 327px;
}
.e2{
    width:327px;height:654px;
    background-image:url(/images/01-index/furniture2.jpg);
    background-repeat:no-repeat;
    background-size:327px 654px;
}
.zz,.ze{
    float:left;
}
.row{
    padding: 0px;
    width:1024px;height:20px;
}
/*			��������*/
.about_ue{
    width:100%;
    height:172px;
    background-color:#f6f6f6;
    margin-top:161px;
    position:relative;
}
.about_ue a{
    position:absolute;
    top:35%;left:44%;
    padding:15px 50px;
    list-style:none;
    border:2px solid #000;
    outline:none;
    font-family: '΢���ź�';
    font-size: 14px;
    padding: 12px 45px;
    border: 1px solid rgb(186,186,186);
    background-color: transparent;
    color: rgb(145,145,145);
}
/*			��Ʒ�б�*/
.list{
    text-align:center;
    padding-top:50px;

}
.list p{
    padding-bottom:10px;
    font:24px "΢���ź�",normal;
    font-weight:bold;
    color:#222;
}
.list-t{
    border:1px solid #ddd;
    width:1024px;height:43px;
    margin:30px auto;

}
.list-t ul{
    list-style:none;
    padding-top:10px;
}
.list-t ul li a{
    margin:0 18px;
    font-size:14px;
    color:#808080;
}
.p-box{
    text-align:center;
}
.p-box img{
    width:256px;height:256px;
}
.carousel-control-prev,
.carousel-control-next{
    width:2%;height:4%;
    top:40%;
    right:0.2%;
    border-radius: 0.25rem;
    background-color:#959593;
}
.carousel-control-prev{
    margin-left:0.2%;
}
.carousel-indicators li{
    width:0.6rem;height:0.6rem;
    border-radius: 50%;
    background-color:antiquewhite;
    margin:0 0.3rem;
}
.carousel-indicators .active{
    background-color:orange;
}
.carousel-indicators{
    bottom:0%;
    right:-92%;
}
.shou{
    cursor:pointer;
}
.list-t ul li a{
    margin-top:10px;
}
.img_x img{
    width:256px;height:256px;

}
.jiaju{
    margin:0 auto;
}
.my_ge{
    margin-top:100px;
}
.my_av{
    padding:80px 0;
}
.my_war{
    color:#ff6f00;
}
.my_shehua{
    color:aoaoao;
}

.jiaju div a{
    font-size: 13px;
    font-weight: normal;
    color: rgb(136,136,136);
    text-align: center;
    font-family: "����";
    margin-bottom: 6px;
}
.jiaju div p{
    font-size: 22px;
    font-weight: normal;
    color: #191919;
    /* font-family: Raleway; */
}
.my_ge a{
    color:#000;
}
.my_gao{
    width:100%;
    height:357px;
    position:relative;

}
.MY_juzhong{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-200px,-50px);
}
.my_zuo{
    margin:100px 352px;
}
.my_zhuce{
    margin-top:100px ;
    margin-left: 172px;
}
.img_1{
    transition:0.9s;
}
.img_1:hover{
    transform: scale(1.2);
}
.MY_g{
    height:1100px;
}
</style>


