
(function () {
	
	'use strict';


	angular.module("ShoppingListCheckOff", [])
		.controller("ToBuyController", ToBuyController )
		.controller("AlreadyBoughtController", AlreadyBoughtController )
		.service("ShoppingListCheckOffService" , ShoppingListCheckOffService);


	ToBuyController.$inject=["ShoppingListCheckOffService"];
	function ToBuyController  (ShoppingListCheckOffService) {
		var toBuy = this;
		toBuy.toBuyList = ShoppingListCheckOffService.getToBuyList();
		toBuy.checkOff = function (itemIndex) {
			ShoppingListCheckOffService.checkOff(itemIndex);

		}
	};

	AlreadyBoughtController.$inject=["ShoppingListCheckOffService"];
	function AlreadyBoughtController (ShoppingListCheckOffService)  {
		var bought = this;
		bought.boughtList = ShoppingListCheckOffService.getBoughtList();

	};

	function ShoppingListCheckOffService() {
		var service = this;


//List of bought items
		var boughtList = [];

//List of items to buy
		var toBuyList = [
						{ name: "pears", quantity: 3},
						{ name: "apples", quantity: 8}, 
						{ name: "cheese", quantity: 2},
						{ name: "wine", quantity: 1},
						{ name: "crackers", quantity: 1}
					];

		service.getToBuyList = function () {
			return toBuyList;
		};

		service.getBoughtList = function () {
			return boughtList;
		};
		service.checkOff = function(itemIndex) {
			var boughtItem = toBuyList.splice(itemIndex, 1)[0] ;
			boughtList.push(boughtItem);
				debugger;
		};
	}

})();	


