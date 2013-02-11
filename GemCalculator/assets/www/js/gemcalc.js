$(function(){
	function ViewModel() {
		this.self = this;
		this.costFlawless = ko.observable(0);
		this.costTome = ko.observable(0);
		this.sellProfit = ko.computed(function(){
			console.log('computing value. flawless cost: ' + this.costFlawless() + ' tom cost: ' + this.costTome());
			var totalCost = (this.costFlawless() * 27) + (this.costTome() * 54);
			var profitAmount = (totalCost + 500000) / 0.85;
			console.log('Found profit amount: ' + profitAmount);
			return Math.ceil(profitAmount) + ' gold';
		}, this);
	}
	
	ko.applyBindings(new ViewModel());
});