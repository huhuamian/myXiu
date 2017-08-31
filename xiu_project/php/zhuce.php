<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/8/26 0031
 * Time: 下午 9:00
 */
//服务器端支持跨域
header('Access-Control-Allow-Origin:*');
header("Content-Type:text/html;charset=utf8");

//接受浏览器端提交过来的参数
$username = $_POST["username"];//用户名
$password = $_POST["password"];//密码

//检测是否有相同用户
$conn = new mysqli("127.0.0.1","root","","xiudata") or die("连接失败");
$sql = "select * from user where username='$username'";
$result = $conn->query($sql);
if($result && $result->num_rows>0){

   //进入if则存在相同用户名
    echo "该用户已存在" ;

}else{

    //进入else说明不存在相同用户名
    //注册（其实就是插入数据）
    $sql = "insert into books(username,password) values('$username','$password')";
    $result = $conn->query($sql);
    if($result){
        echo "注册成功";
    }else{
        echo "注册失败";
    }

}
$conn->close();