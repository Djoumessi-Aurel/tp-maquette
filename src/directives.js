import Vue from 'vue';

/* Création de la directive qui permet de détecter lorsqu'on clique à l'extérieur d'un élément,
 sauf sur un élément "y" donné.
 Le dernier attribut est le code qu'on donne à la directive. On peut créer plusieurs directives de ce genre.
 Ce code permet de les différencier. Le nom de la directive sera click-outside-"code" */

 //NB: Si on ne veut rien exclure, on met y à null
 export default function createClickOutsideExclude(y, code)
 {
    Vue.directive('click-outside-'+code, {
        bind: function (el, binding, vnode) {
          el.clickOutsideEvent = function (event) {
            // here I check that click was outside the el and his children
            if (!(el == event.target || el.contains(event.target) || y == event.target)) {
              // and if it did, call method provided in attribute value
              // console.log('Directive lancée: ','click-outside-'+code,'\n','Element exclu: ', y );
              // console.log("cible: ",event.target);
              vnode.context[binding.expression](event);
            }
          };
          document.body.addEventListener('click', el.clickOutsideEvent)
        },
        unbind: function (el) {
          document.body.removeEventListener('click', el.clickOutsideEvent)
        },
      });
 }
