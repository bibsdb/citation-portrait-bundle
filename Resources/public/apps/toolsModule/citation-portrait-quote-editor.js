angular.module('toolsModule').directive('citationPortraitQuoteEditor', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      slide:'=',
      close: '&'
    },
    templateUrl: '/bundles/bibsdbcitationportrait/apps/toolsModule/citation-portrait-quote-editor.html'
  };
});
