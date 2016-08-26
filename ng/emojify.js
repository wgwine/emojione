//example angular filter for converting emojione shortnames to emoji images
//example usage:  ng-bind-html='::emoji| emojify | unsafe'
angular.module('emojione.slim')
.filter('emojify', ['$sce', function ($sce) {
    return function (input) {
        return input.replace(/(:[\dA-Za-z\_\+\-]+:)/g, function (txt) {
        	//emojione returns the input text if it doesn't find a match
            //trustAsHtml has risks in that case, but we only apply it to text that looks like it might be a standard shortname
            return $sce.trustAsHtml(emojione.toImage(txt));
        });
    };
}]);