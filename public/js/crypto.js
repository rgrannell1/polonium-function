
import {components, reactions} from './components.js'

/**
 * mount the body component to the router
 */
m.route(document.body, '/', {
  '/': components.body,
  '/terms': components.termsOfService
})

document.addEventListener('click', reactions.onDocumentClick)
