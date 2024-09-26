export type PricingRules = {
    sku: string;
    name: string;
    price: number;
}
// Use this type when bulk discount should be given when quantity exceeds specific quantity
export type BulkDiscountRule = Required<PricingRules> & {
    quantityMoreThan: number;
    bulkDiscount: number;
}
// Use this type when deal is to pay for only certain quantity if buying quantity is equal to specific quantityexceeds specific quantity
export type PayForOnlyNRule = Required<PricingRules> & {
    quantity: number;
    payOnlyFor: number;
}

export class Checkout {
    constructor(public pricingRules: (PayForOnlyNRule | BulkDiscountRule | PricingRules)[]) {

    }
    cart: string[] = [];
    scan(sku: string): void {
        //check if sku exists in pricing rule
        for (let i = 0; i < this.pricingRules.length; i++) {
            if (this.pricingRules[i]["sku"] === sku) {
                this.cart.push(sku);
                return;
            }
        }

    }
    total(): number {
        let totalPrice = 0;
        if (this.cart.length == 0) {
            return totalPrice;
        }
        let cart: string[] = this.cart;
        let visited: { [key: string]: number } = {};

        // let visited: { [key: string]: number } | {} = {}
        cart.forEach(sku => {
            if (visited[sku] && visited[sku] > 0) {
                visited[sku]++;
            } else {
                visited[sku] = 1;
            }
        });
        let cartItems = Object.keys(visited);
        let ruleMap = new Map<string, BulkDiscountRule | PayForOnlyNRule | PricingRules>();
        this.pricingRules.forEach((rule) => {
            ruleMap.set(rule.sku!, rule);
        });
        for (let i = 0; i < cartItems.length; i++) {
            let quantity = visited[cartItems[i]]
            if (quantity > 0) {
                let rule = ruleMap.get(cartItems[i])
                totalPrice = totalPrice + this.getPrice(quantity, rule!)
            }
        }
        return totalPrice;
    }
    private getPrice(quantity: number, rule: BulkDiscountRule | PayForOnlyNRule | PricingRules): number {
        let price = 0;
        if ('bulkDiscount' in rule) {
            if (quantity > rule.quantityMoreThan) {
                price = quantity * (rule.price - rule.bulkDiscount);
            } else {
                price = quantity * (rule.price);
            }
        } else if ('payOnlyFor' in rule) {
            let n = Math.ceil(quantity / rule.quantity * rule.payOnlyFor);
            // console.log(`pay only for ${n}`)
            price = n * rule.price;
        } else {
            price = quantity * rule.price;
        }
        return price;
    }
}
