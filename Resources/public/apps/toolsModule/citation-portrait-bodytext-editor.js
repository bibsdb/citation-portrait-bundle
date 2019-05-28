angular.module('toolsModule').directive('citationPortraitBodytextEditor', function(){
	console.log("hej");
  return {
    restrict: 'E',
    replace: true,
    scope: {
      slide:'=',
      close: '&'
    },
    templateUrl: '/bundles/bibsdbcitationportrait/apps/toolsModule/citation-portrait-bodytext-editor.html'
  };
});