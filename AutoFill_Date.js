(function($){
	$.fn.extend({
		AutoFill : function(){
			var $this = $(this);
			$(this).each(function(){
				if(this.nodeName.toLowerCase() != 'input'){
					alert("It is not an input element");
					return
				};
				$(this).dblclick(function(){
					
						var date = new Date;
						this.value = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
					
				});
			})										
			return $(this);
		}
	})
})(jQuery)
