module.exports = function (content, file, conf) {
	//将tpl中对静态图片的引用替换为绝对地址
	var temp = String(content).replace(/(\'\.\.\/)|(\'\/)img/g, "'" + conf.path);
  	return temp;
}