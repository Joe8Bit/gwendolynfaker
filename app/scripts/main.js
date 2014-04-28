'use strict';

var Gallery = function (options) {
	this.$el = options.el;
	this.$body = $('body');
};

Gallery.prototype.bind = function () {
	var boundHandleClick = this.handleClick.bind(this);
	this.$el.find('img').on('click', boundHandleClick);
};

Gallery.prototype.handleClick = function (e) {
	var popupContents = $(e.currentTarget).parent().clone().addClass('popup');
	this.$body.append(popupContents);
	this.bindPopup();
};

Gallery.prototype.bindPopup = function () {
	this.boundClosePopup = this.closePopup.bind(this);
	this.$popup = $('.popup');
	this.$popup.find('.close').on('click', this.boundClosePopup);
};

Gallery.prototype.closePopup = function () {
	this.$popup.remove();
	this.$popup.find('.close').off('click', this.boundClosePopup);
};

$(document).ready(function () {
	var $el = $('.img-list');
	if ($el.length) {
		var _gall = new Gallery({
			el: $el
		});
		_gall.bind();
	}
});
