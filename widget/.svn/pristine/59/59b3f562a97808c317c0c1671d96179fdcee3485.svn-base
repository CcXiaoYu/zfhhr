var db, dbname = "kltx_db";
var selectBid='select id from kltx_db';
//打开数据库
function openDatabase(name) {
	//如果库不存在  则创建
	executeSql(name, "create database if not exists " + name);
	var ret = db.openDatabaseSync({
		name : name
	});
	return ret;
}

//关闭数据库
function closeDatabase(name) {
	var ret = db.closeDatabaseSync({
		name : name
	});
	return ret;
}

//执行sql语句
function executeSql(name, sql) {
	//sql : 'drop table if exists xzg_login'  //删除表如果存在
	//sql : 'CREATE TABLE if not exists xzg_login(id char(32), loginName char(32), loginTime datetime)'  //创建登录表
	//sql : 'insert into xzg_login values(7,"13296905340",datetime("now"))' //添加登录数据
	//sql : 'delete from xzg_login' //删除所有数据

		var ret = db.executeSqlSync({
			name : name,
			sql : sql
		});
		//alert(JSON.stringify(ret));
		return ret;
}

//查询sql语句
function selectSql(name, sql) {
	var status=openDatabase(dbname).status;
	if(status){
		var ret = db.selectSqlSync({
			name : name,
			sql : sql
		});
		return ret.data;
	}
}

//退出登录
function exitLogin() {
	sqliteHeader();
	//清理数据
	executeSql(dbname, 'delete from wld_login');
	sqliteFooter();
}


function sqliteHeader() {
	db = api.require('db');
	//打开数据库
	openDatabase(dbname);
	//如果没有该数据表则创建
	var createTableSql = 'CREATE TABLE if not exists wld_login(id int,uid char(32),loginTel char(32), loginTime datetime)';
	executeSql(dbname, createTableSql);
	//执行sql，创建登录表
}

//记住登录状态
function loginS(id, uid,loginTel) {
	sqliteHeader();
	//添加数据，用在服务器端返回登录成功时
	var insertIntoSql = 'insert into wld_login values("' + id + '","' + uid + '","' + loginTel + '",datetime("now"))';
	//alert(insertIntoSql);
	var dd=executeSql(dbname, insertIntoSql);

	sqliteFooter();
}

function sqliteFooter() {

	closeDatabase(dbname);
}


//获取登录信息
function sqliteGetLogin() {
	//检索是否登录
	sqliteHeader();
	var selectRowSql = 'select * from wld_login order by loginTime desc limit 1';
	var ret = selectSql(dbname, selectRowSql);
	if (ret.data.length > 0) {
		var $return = ret.data[0];
	} else {
		var $return = false;
	}
	sqliteFooter();
	return $return;
}

function getLoginData() {
	//检索是否登录
    var data = sqliteGetLogin();
    if(data == false){
    	//退出到登录页
    	openW('login');
    }
    return data;
}

//获取登录信息
function selectData(dbname,selectRowSql) {
	//检索是否登录
	sqliteHeader();
	var ret = selectSql(dbname, selectRowSql);
	if (ret.data.length > 0) {
		var $return = ret.data[0];
	} else {
		var $return = false;
	}
	sqliteFooter();
	return $return;
}
