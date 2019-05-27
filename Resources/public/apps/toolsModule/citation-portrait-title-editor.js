angular.module('toolsModule').directive('citationPortraitTitleEditor', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      slide:'=',
      close: '&'
    },
    templateUrl: '/bundles/bibsdbcitationportrait/apps/toolsModule/citation-portrait-title-editor.html'
  };
});
