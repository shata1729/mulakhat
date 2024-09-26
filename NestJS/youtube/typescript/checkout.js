"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkout = void 0;
var Checkout = /** @class */ (function () {
    function Checkout(pricingRules) {
        this.pricingRules = pricingRules;
        this.cart = [];
    }
    Checkout.prototype.scan = function (sku) {
        //check if sku exists in pricing rule
        for (var i = 0; i < this.pricingRules.length; i++) {
            if (this.pricingRules[i]["sku"] === sku) {
                this.cart.push(sku);
                return;
            }
        }
    };
    Checkout.prototype.total = function () {
        var totalPrice = 0;
        if (this.cart.length == 0) {
            return totalPrice;
        }
        var cart = this.cart;
        var visited = {};
        // let visited: { [key: string]: number } | {} = {}
        cart.forEach(function (sku) {
            if (visited[sku] && visited[sku] > 0) {
                visited[sku]++;
            }
            else {
                visited[sku] = 1;
            }
        });
        var cartItems = Object.keys(visited);
        var ruleMap = new Map();
        this.pricingRules.forEach(function (rule) {
            ruleMap.set(rule.sku, rule);
        });
        for (var i = 0; i < cartItems.length; i++) {
            var quantity = visited[cartItems[i]];
            if (quantity > 0) {
                var rule = ruleMap.get(cartItems[i]);
                totalPrice = totalPrice + this.getPrice(quantity, rule);
            }
        }
        return totalPrice;
    };
    Checkout.prototype.getPrice = function (quantity, rule) {
        var price = 0;
        if ('bulkDiscount' in rule) {
            if (quantity > rule.quantityMoreThan) {
                price = quantity * (rule.price - rule.bulkDiscount);
            }
            else {
                price = quantity * (rule.price);
            }
        }
        else if ('payOnlyFor' in rule) {
            var n = Math.ceil(quantity / rule.quantity * rule.payOnlyFor);
            // console.log(`pay only for ${n}`)
            price = n * rule.price;
        }
        else {
            price = quantity * rule.price;
        }
        return price;
    };
    return Checkout;
}());
exports.Checkout = Checkout;
// ipd	Super iPad	$549.99
// mbp	MacBook Pro	$1399.99
// atv	Apple TV	$109.50
// vga	VGA adapter	$30.00
// let rules = [{
//     sku: "ipd",
//     name: "Super iPad",
//     price: 549.99,
//     quantityMoreThan: 4,
//     bulkDiscount: 50
// },
// {
//     sku: "atv",
//     name: "Apple TV",
//     price: 109.5,
//     quantity: 3,
//     payOnlyFor: 2
// }]
// const co = new Checkout(rules);
// co.scan("atv");
// co.scan("atv");
// co.scan("atv");
// co.scan("atv");
// co.scan("ipd");
// co.scan("ipd");
// co.scan("ipd");
// co.scan("ipd");
// co.scan("ipd");
// co.total();
