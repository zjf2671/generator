//iframe自适应
$(window).on('resize', function() {
	var $content = $('.content');
	$content.height($(this).height() - 120);
	$content.find('iframe').each(function() {
		$(this).height($content.height());
	});
}).resize();


var vm = new Vue({
	el:'#rrapp',
	data:{
		main:"main.html",
        navTitle:"欢迎页"
	},
    methods: {
        donate: function () {
            layer.open({
                type: 2,
                title: false,
                area: ['806px', '467px'],
                closeBtn: 1,
                shadeClose: false,
                content: ['http://pic.daydaycook.com/production/images/20151204/ad87d2c7-c200-4c0a-85db-f5fe96130ed8', 'no']
            });
        }
    }
});

//路由
var router = new Router();
var menus = ["main.html","generator.html"];
routerList(router, menus);
router.start();

function routerList(router, menus){
	for(var index in menus){
		router.add('#'+menus[index], function() {
			var url = window.location.hash;

			//替换iframe的url
			vm.main = url.replace('#', '');

			//导航菜单展开
			$(".treeview-menu li").removeClass("active");
			$("a[href='"+url+"']").parents("li").addClass("active");

			vm.navTitle = $("a[href='"+url+"']").text();
		});
	}
}
