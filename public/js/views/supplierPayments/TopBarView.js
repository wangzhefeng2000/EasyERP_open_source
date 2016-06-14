define([
    'underscore',
    'text!templates/supplierPayments/TopBarTemplate.html',
    'views/topBarViewBase',
    'constants'
], function (_, ContentTopBarTemplate, BaseView, CONSTANTS) {
    var TopBarView = BaseView.extend({
        el         : '#top-bar',
        contentType: CONSTANTS.SUPPLIERPAYMENTS,
        template   : _.template(ContentTopBarTemplate)
    });

    return TopBarView;
});
