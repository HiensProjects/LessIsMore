(function($) {
	$.fn.tipsy.elementOptions = function(ele, options) {
        return $.extend({}, options, { gravity: $(ele).attr('tipsy-gravity') || 'n' });
    };
})(jQuery);