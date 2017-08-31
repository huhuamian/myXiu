<?php
/**
 * Created by PhpStorm.
 * User: ijeff
 * Date: 17/8/26
 * Time: 下午4:52
 */

//服务器端支持跨域
header('Access-Control-Allow-Origin:*');
header("Content-Type:text/html;charset=utf8");

//1.接受浏览器端提交过来的数据
$username = $_POST["username"];
$password = $_POST["password"];

//类
class  Res{
    public  $status;
    public  $msg;
}
//登录
$conn = new mysqli("127.0.0.1", "root", "", "xiudata") or die("连接失败");
$sql = "select * from books where username='$username' and password='$password'";
$result = $conn->query($sql);
if ($result && $result->num_rows>0) {
    //说明登录成功
    $res = new Res();
    $res->status = 1;
    $res->msg = "登录成功！";
    echo  json_encode($res);
}
else {
    //说明登录失败
    $res = new Res();
    $res->status = 0;
    $res->msg = "登录失败！";
    echo  json_encode($res);
}










