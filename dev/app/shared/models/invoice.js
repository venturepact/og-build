"use strict";
var Invoice = (function () {
    function Invoice(invoice) {
        var _this = this;
        if (invoice) {
            this.id = invoice.id;
            this.customer_id = invoice.customer_id;
            this.subscription_id = invoice.subscription_id;
            this.recurring = invoice.recurring;
            this.status = invoice.status;
            this.price_type = invoice.status;
            this.date = moment.unix(invoice.date).format('MMM Do YYYY');
            this.total = invoice.total / 100;
            this.amount_paid = invoice.amount_paid / 100;
            this.amount_adjusted = invoice.amount_adjusted;
            this.write_off_amount = invoice.write_off_amount;
            this.credits_applied = invoice.credits_applied;
            this.amount_due = invoice.amount_due / 100;
            this.paid_at = moment.unix(invoice.paid_at).format('MMM Do YYYY');
            ;
            this.object = invoice.object;
            this.first_invoice = invoice.first_invoice;
            this.currency_code = invoice.currency_code;
            this.tax = invoice.tax / 100;
            this.line_items = [];
            invoice.line_items.forEach(function (lineItem) {
                _this.line_items.push(new Line_items(lineItem));
            });
            this.sub_total = invoice.sub_total / 100;
            this.linked_payments = [];
            invoice.linked_payments.forEach(function (linkedPayments) {
                _this.linked_payments.push(new Linked_payments(linkedPayments));
            });
            this.applied_credits = [];
            invoice.applied_credits.forEach(function (appliedCredits) {
                _this.applied_credits.push(new Applied_credits(appliedCredits));
            });
            this.adjustment_credit_notes = [];
            invoice.adjustment_credit_notes.forEach(function (adjustmentCreditNotes) {
                _this.adjustment_credit_notes.push(new Adjustment_credit_notes(adjustmentCreditNotes));
            });
            this.issued_credit_notes = [];
            invoice.issued_credit_notes.forEach(function (issuedCreditNotes) {
                _this.issued_credit_notes.push(new Issued_credit_notes(issuedCreditNotes));
            });
            this.linked_orders = [];
            invoice.linked_orders.forEach(function (linkedOrders) {
                _this.linked_orders.push(new Linked_orders(linkedOrders));
            });
        }
    }
    return Invoice;
}());
exports.Invoice = Invoice;
var Line_items = (function () {
    function Line_items(lineItems) {
        if (lineItems) {
            this.id = lineItems.id;
            this.date_from = moment.unix(lineItems.date_from).format('MMM Do YYYY');
            this.date_to = moment.unix(lineItems.date_to).format('MMM Do YYYY');
            this.unit_amount = lineItems.unit_amount / 100;
            this.quantity = lineItems.quantity;
            this.is_taxed = lineItems.is_taxed;
            this.tax_amount = lineItems.tax_amount / 100;
            this.object = lineItems.object;
            this.amount = lineItems.amount / 100;
            this.description = lineItems.description;
            this.entity_type = lineItems.entity_type;
            this.entity_id = lineItems.entity_id;
            this.discount_amount = lineItems.discount_amount / 100;
            this.item_level_discount_amount = lineItems.item_level_discount_amount / 100;
        }
    }
    return Line_items;
}());
exports.Line_items = Line_items;
var Linked_payments = (function () {
    function Linked_payments(linkedpayment) {
        if (linkedpayment) {
            this.txn_id = linkedpayment.txn_id;
            this.applied_amount = linkedpayment.applied_amount / 100;
            this.applied_at = moment.unix(linkedpayment.applied_at).format('MM Do YYYY');
            this.txn_status = linkedpayment.txn_status;
            this.txn_date = moment.unix(linkedpayment.txn_date).format('MM Do YYYY');
            ;
            this.txn_amount = linkedpayment.txn_amount / 100;
        }
    }
    return Linked_payments;
}());
exports.Linked_payments = Linked_payments;
var Applied_credits = (function () {
    function Applied_credits(appliedCredits) {
        this.applied_credit = '';
    }
    return Applied_credits;
}());
exports.Applied_credits = Applied_credits;
var Adjustment_credit_notes = (function () {
    function Adjustment_credit_notes(appliedCredits) {
        this.adjustment_credit_notes = '';
    }
    return Adjustment_credit_notes;
}());
exports.Adjustment_credit_notes = Adjustment_credit_notes;
var Issued_credit_notes = (function () {
    function Issued_credit_notes(appliedCredits) {
        this.issued_credit_notes = '';
    }
    return Issued_credit_notes;
}());
exports.Issued_credit_notes = Issued_credit_notes;
var Linked_orders = (function () {
    function Linked_orders(appliedCredits) {
        this.linked_orders = '';
    }
    return Linked_orders;
}());
exports.Linked_orders = Linked_orders;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL2ludm9pY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBO0lBMEJDLGlCQUFZLE9BQVc7UUExQnhCLGlCQXlFQztRQTlDQyxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUM7WUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEdBQUMsR0FBRyxDQUFDO1lBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQztZQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1lBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQztZQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEdBQUMsR0FBRyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxD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LFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7WUFBQSxDQUFDO1lBQzFFLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLFVBQVUsR0FBQyxHQUFHLENBQUM7UUFDaEQsQ0FBQztJQUNGLENBQUM7SUFDRixzQkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlksdUJBQWUsa0JBaUIzQixDQUFBO0FBQ0Q7SUFFQyx5QkFBWSxjQUFrQjtRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0Ysc0JBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUxZLHVCQUFlLGtCQUszQixDQUFBO0FBQ0Q7SUFFQyxpQ0FBWSxjQUFrQjtRQUM3QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDRiw4QkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFksK0JBQXVCLDBCQUtuQyxDQUFBO0FBQ0Q7SUFFQyw2QkFBWSxjQUFrQjtRQUM3QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDRiwwQkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFksMkJBQW1CLHNCQUsvQixDQUFBO0FBQ0Q7SUFFQyx1QkFBWSxjQUFrQjtRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUxZLHFCQUFhLGdCQUt6QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvbW9kZWxzL2ludm9pY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBtb21lbnQ6YW55O1xyXG5cclxuZXhwb3J0IGNsYXNzIEludm9pY2V7XHJcblx0aWQ6IHN0cmluZztcclxuXHRjdXN0b21lcl9pZDpzdHJpbmc7XHJcblx0c3Vic2NyaXB0aW9uX2lkOnN0cmluZztcclxuXHRyZWN1cnJpbmc6Ym9vbGVhbjtcclxuXHRzdGF0dXM6c3RyaW5nO1xyXG5cdHByaWNlX3R5cGU6c3RyaW5nO1xyXG5cdGRhdGU6bnVtYmVyO1xyXG5cdHRvdGFsOm51bWJlcjtcclxuXHRhbW91bnRfcGFpZDpudW1iZXI7XHJcblx0YW1vdW50X2FkanVzdGVkOm51bWJlcjtcclxuXHR3cml0ZV9vZmZfYW1vdW50Om51bWJlcjtcclxuXHRjcmVkaXRzX2FwcGxpZWQ6bnVtYmVyO1xyXG5cdGFtb3VudF9kdWU6bnVtYmVyO1xyXG5cdHBhaWRfYXQ6bnVtYmVyO1xyXG5cdG9iamVjdDpzdHJpbmc7XHJcblx0Zmlyc3RfaW52b2ljZTpib29sZWFuO1xyXG5cdGN1cnJlbmN5X2NvZGU6c3RyaW5nO1xyXG5cdHRheDpudW1iZXI7XHJcblx0bGluZV9pdGVtczpMaW5lX2l0ZW1zW107XHJcblx0c3ViX3RvdGFsOm51bWJlcjtcclxuXHRsaW5rZWRfcGF5bWVudHM6TGlua2VkX3BheW1lbnRzW11cclxuXHRhcHBsaWVkX2NyZWRpdHM6QXBwbGllZF9jcmVkaXRzW11cclxuXHRhZGp1c3RtZW50X2NyZWRpdF9ub3RlczpBZGp1c3RtZW50X2NyZWRpdF9ub3Rlc1tdXHJcblx0aXNzdWVkX2NyZWRpdF9ub3RlczpJc3N1ZWRfY3JlZGl0X25vdGVzW107XHJcblx0bGlua2VkX29yZGVyczpMaW5rZWRfb3JkZXJzW107XHJcblx0Y29uc3RydWN0b3IoaW52b2ljZTphbnkpe1xyXG5cdFx0aWYoaW52b2ljZSl7XHJcblx0XHRcdHRoaXMuaWQgPSBpbnZvaWNlLmlkO1xyXG5cdFx0XHR0aGlzLmN1c3RvbWVyX2lkID0gaW52b2ljZS5jdXN0b21lcl9pZDtcclxuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb25faWQgPSBpbnZvaWNlLnN1YnNjcmlwdGlvbl9pZDtcclxuXHRcdFx0dGhpcy5yZWN1cnJpbmcgPSBpbnZvaWNlLnJlY3VycmluZztcclxuXHRcdFx0dGhpcy5zdGF0dXMgPSBpbnZvaWNlLnN0YXR1cztcclxuXHRcdFx0dGhpcy5wcmljZV90eXBlID0gaW52b2ljZS5zdGF0dXM7XHJcblx0XHRcdHRoaXMuZGF0ZSA9IG1vbWVudC51bml4KGludm9pY2UuZGF0ZSkuZm9ybWF0KCdNTU0gRG8gWVlZWScpO1xyXG5cdFx0XHR0aGlzLnRvdGFsID0gaW52b2ljZS50b3RhbC8xMDA7XHJcblx0XHRcdHRoaXMuYW1vdW50X3BhaWQgPSBpbnZvaWNlLmFtb3VudF9wYWlkLzEwMDtcclxuXHRcdFx0dGhpcy5hbW91bnRfYWRqdXN0ZWQgPSBpbnZvaWNlLmFtb3VudF9hZGp1c3RlZDtcclxuXHRcdFx0dGhpcy53cml0ZV9vZmZfYW1vdW50ID0gaW52b2ljZS53cml0ZV9vZmZfYW1vdW50O1xyXG5cdFx0XHR0aGlzLmNyZWRpdHNfYXBwbGllZCA9IGludm9pY2UuY3JlZGl0c19hcHBsaWVkO1xyXG5cdFx0XHR0aGlzLmFtb3VudF9kdWUgPSBpbnZvaWNlLmFtb3VudF9kdWUvMTAwO1xyXG5cdFx0XHR0aGlzLnBhaWRfYXQgPSBtb21lbnQudW5peChpbnZvaWNlLnBhaWRfYXQpLmZvcm1hdCgnTU1NIERvIFlZWVknKTs7XHJcblx0XHRcdHRoaXMub2JqZWN0ID0gaW52b2ljZS5vYmplY3Q7XHJcblx0XHRcdHRoaXMuZmlyc3RfaW52b2ljZSA9IGludm9pY2UuZmlyc3RfaW52b2ljZTtcclxuXHRcdFx0dGhpcy5jdXJyZW5jeV9jb2RlID0gaW52b2ljZS5jdXJyZW5jeV9jb2RlO1xyXG5cdFx0XHR0aGlzLnRheCA9IGludm9pY2UudGF4LzEwMDtcclxuXHRcdFx0dGhpcy5saW5lX2l0ZW1zID0gW107XHJcblx0XHRcdGludm9pY2UubGluZV9pdGVtcy5mb3JFYWNoKChsaW5lSXRlbTphbnkpPT57XHJcblx0XHRcdFx0dGhpcy5saW5lX2l0ZW1zLnB1c2gobmV3IExpbmVfaXRlbXMobGluZUl0ZW0pKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuc3ViX3RvdGFsID0gaW52b2ljZS5zdWJfdG90YWwvMTAwO1xyXG5cdFx0XHR0aGlzLmxpbmtlZF9wYXltZW50cyA9IFtdO1xyXG5cdFx0XHRpbnZvaWNlLmxpbmtlZF9wYXltZW50cy5mb3JFYWNoKChsaW5rZWRQYXltZW50czphbnkpPT57XHJcblx0XHRcdFx0dGhpcy5saW5rZWRfcGF5bWVudHMucHVzaChuZXcgTGlua2VkX3BheW1lbnRzKGxpbmtlZFBheW1lbnRzKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmFwcGxpZWRfY3JlZGl0cyA9IFtdO1xyXG5cdFx0XHRpbnZvaWNlLmFwcGxpZWRfY3JlZGl0cy5mb3JFYWNoKChhcHBsaWVkQ3JlZGl0czphbnkpPT57XHJcblx0XHRcdFx0dGhpcy5hcHBsaWVkX2NyZWRpdHMucHVzaChuZXcgQXBwbGllZF9jcmVkaXRzKGFwcGxpZWRDcmVkaXRzKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmFkanVzdG1lbnRfY3JlZGl0X25vdGVzID0gW107XHJcblx0XHRcdGludm9pY2UuYWRqdXN0bWVudF9jcmVkaXRfbm90ZXMuZm9yRWFjaCgoYWRqdXN0bWVudENyZWRpdE5vdGVzOmFueSk9PntcclxuXHRcdFx0XHR0aGlzLmFkanVzdG1lbnRfY3JlZGl0X25vdGVzLnB1c2gobmV3IEFkanVzdG1lbnRfY3JlZGl0X25vdGVzKGFkanVzdG1lbnRDcmVkaXROb3RlcykpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5pc3N1ZWRfY3JlZGl0X25vdGVzID0gW107XHJcblx0XHRcdGludm9pY2UuaXNzdWVkX2NyZWRpdF9ub3Rlcy5mb3JFYWNoKChpc3N1ZWRDcmVkaXROb3RlczphbnkpPT57XHJcblx0XHRcdFx0dGhpcy5pc3N1ZWRfY3JlZGl0X25vdGVzLnB1c2gobmV3IElzc3VlZF9jcmVkaXRfbm90ZXMoaXNzdWVkQ3JlZGl0Tm90ZXMpKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMubGlua2VkX29yZGVycyA9IFtdO1xyXG5cdFx0XHRpbnZvaWNlLmxpbmtlZF9vcmRlcnMuZm9yRWFjaCgobGlua2VkT3JkZXJzOmFueSk9PntcclxuXHRcdFx0XHR0aGlzLmxpbmtlZF9vcmRlcnMucHVzaChuZXcgTGlua2VkX29yZGVycyhsaW5rZWRPcmRlcnMpKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBMaW5lX2l0ZW1ze1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0ZGF0ZV9mcm9tOm51bWJlcjtcclxuXHRkYXRlX3RvOm51bWJlcjtcclxuXHR1bml0X2Ftb3VudDpudW1iZXI7XHJcblx0cXVhbnRpdHk6IG51bWJlcjtcclxuXHRpc190YXhlZDogYm9vbGVhbjtcclxuXHR0YXhfYW1vdW50OiBudW1iZXI7XHJcblx0b2JqZWN0OiBzdHJpbmc7XHJcblx0YW1vdW50OiBudW1iZXI7XHJcblx0ZGVzY3JpcHRpb246IHN0cmluZztcclxuXHRlbnRpdHlfdHlwZTogc3RyaW5nO1xyXG5cdGVudGl0eV9pZDogc3RyaW5nO1xyXG5cdGRpc2NvdW50X2Ftb3VudDogbnVtYmVyO1xyXG5cdGl0ZW1fbGV2ZWxfZGlzY291bnRfYW1vdW50OiBudW1iZXI7XHJcblx0Y29uc3RydWN0b3IobGluZUl0ZW1zOmFueSl7XHJcblx0XHRpZihsaW5lSXRlbXMpe1xyXG5cdFx0XHR0aGlzLmlkID0gbGluZUl0ZW1zLmlkO1xyXG5cdFx0XHR0aGlzLmRhdGVfZnJvbSA9IG1vbWVudC51bml4KGxpbmVJdGVtcy5kYXRlX2Zyb20pLmZvcm1hdCgnTU1NIERvIFlZWVknKTtcclxuXHRcdFx0dGhpcy5kYXRlX3RvID0gbW9tZW50LnVuaXgobGluZUl0ZW1zLmRhdGVfdG8pLmZvcm1hdCgnTU1NIERvIFlZWVknKTtcclxuXHRcdFx0dGhpcy51bml0X2Ftb3VudCA9IGxpbmVJdGVtcy51bml0X2Ftb3VudC8xMDA7XHJcblx0XHRcdHRoaXMucXVhbnRpdHkgPSBsaW5lSXRlbXMucXVhbnRpdHk7XHJcblx0XHRcdHRoaXMuaXNfdGF4ZWQgPSBsaW5lSXRlbXMuaXNfdGF4ZWQ7XHJcblx0XHRcdHRoaXMudGF4X2Ftb3VudCA9IGxpbmVJdGVtcy50YXhfYW1vdW50LzEwMDtcclxuXHRcdFx0dGhpcy5vYmplY3QgPSBsaW5lSXRlbXMub2JqZWN0O1xyXG5cdFx0XHR0aGlzLmFtb3VudCA9IGxpbmVJdGVtcy5hbW91bnQvMTAwO1xyXG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gbGluZUl0ZW1zLmRlc2NyaXB0aW9uO1xyXG5cdFx0XHR0aGlzLmVudGl0eV90eXBlID0gbGluZUl0ZW1zLmVudGl0eV90eXBlO1xyXG5cdFx0XHR0aGlzLmVudGl0eV9pZCA9IGxpbmVJdGVtcy5lbnRpdHlfaWQ7XHJcblx0XHRcdHRoaXMuZGlzY291bnRfYW1vdW50ID0gbGluZUl0ZW1zLmRpc2NvdW50X2Ftb3VudC8xMDA7XHJcblx0XHRcdHRoaXMuaXRlbV9sZXZlbF9kaXNjb3VudF9hbW91bnQgPSBsaW5lSXRlbXMuaXRlbV9sZXZlbF9kaXNjb3VudF9hbW91bnQvMTAwO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5leHBvcnQgY2xhc3MgTGlua2VkX3BheW1lbnRze1xyXG5cdHR4bl9pZDpzdHJpbmc7XHJcblx0YXBwbGllZF9hbW91bnQ6bnVtYmVyO1xyXG5cdGFwcGxpZWRfYXQ6bnVtYmVyO1xyXG5cdHR4bl9zdGF0dXM6c3RyaW5nO1xyXG5cdHR4bl9kYXRlOm51bWJlcjtcclxuXHR0eG5fYW1vdW50Om51bWJlcjtcclxuXHRjb25zdHJ1Y3RvcihsaW5rZWRwYXltZW50OmFueSl7XHJcblx0XHRpZihsaW5rZWRwYXltZW50KXtcclxuXHRcdFx0dGhpcy50eG5faWQgPSBsaW5rZWRwYXltZW50LnR4bl9pZDtcclxuXHRcdFx0dGhpcy5hcHBsaWVkX2Ftb3VudCA9IGxpbmtlZHBheW1lbnQuYXBwbGllZF9hbW91bnQvMTAwO1xyXG5cdFx0XHR0aGlzLmFwcGxpZWRfYXQgPSBtb21lbnQudW5peChsaW5rZWRwYXltZW50LmFwcGxpZWRfYXQpLmZvcm1hdCgnTU0gRG8gWVlZWScpO1xyXG5cdFx0XHR0aGlzLnR4bl9zdGF0dXMgPSBsaW5rZWRwYXltZW50LnR4bl9zdGF0dXM7XHJcblx0XHRcdHRoaXMudHhuX2RhdGUgPSBtb21lbnQudW5peChsaW5rZWRwYXltZW50LnR4bl9kYXRlKS5mb3JtYXQoJ01NIERvIFlZWVknKTs7XHJcblx0XHRcdHRoaXMudHhuX2Ftb3VudCA9IGxpbmtlZHBheW1lbnQudHhuX2Ftb3VudC8xMDA7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBcHBsaWVkX2NyZWRpdHN7XHJcblx0YXBwbGllZF9jcmVkaXQ6c3RyaW5nO1xyXG5cdGNvbnN0cnVjdG9yKGFwcGxpZWRDcmVkaXRzOmFueSl7XHJcblx0XHR0aGlzLmFwcGxpZWRfY3JlZGl0ID0gJyc7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGp1c3RtZW50X2NyZWRpdF9ub3Rlc3tcclxuXHRhZGp1c3RtZW50X2NyZWRpdF9ub3RlczpzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IoYXBwbGllZENyZWRpdHM6YW55KXtcclxuXHRcdHRoaXMuYWRqdXN0bWVudF9jcmVkaXRfbm90ZXMgPSAnJztcclxuXHR9XHJcbn1cclxuZXhwb3J0IGNsYXNzIElzc3VlZF9jcmVkaXRfbm90ZXN7XHJcblx0aXNzdWVkX2NyZWRpdF9ub3RlczpzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IoYXBwbGllZENyZWRpdHM6YW55KXtcclxuXHRcdHRoaXMuaXNzdWVkX2NyZWRpdF9ub3RlcyA9ICcnO1xyXG5cdH1cclxufVxyXG5leHBvcnQgY2xhc3MgTGlua2VkX29yZGVyc3tcclxuXHRsaW5rZWRfb3JkZXJzOnN0cmluZztcclxuXHRjb25zdHJ1Y3RvcihhcHBsaWVkQ3JlZGl0czphbnkpe1xyXG5cdFx0dGhpcy5saW5rZWRfb3JkZXJzID0gJyc7XHJcblx0fVxyXG59Il19
