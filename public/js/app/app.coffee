angular

.module('app', [
  'ngNewRouter'
])

.config ($componentLoaderProvider) ->
  $componentLoaderProvider.setTemplateMapping (name) ->    
    return name + '.tpl.html';

