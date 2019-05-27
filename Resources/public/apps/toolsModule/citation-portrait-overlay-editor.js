angular.module('toolsModule').directive('citationPortraitOverlayEditor', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      slide:'=',
      close: '&'
    },
    templateUrl: '/bundles/bibsdbcitationportrait/apps/toolsModule/citation-portrait-overlay-editor.html'
  };
});
