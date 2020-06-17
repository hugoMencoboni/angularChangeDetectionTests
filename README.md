# Change detection

Ce projet a pour but de tester les stratégies mises en place par **[Angular](https://angular.io/)** pour garantir la détection de changement.

Le projet se compose de plusieurs composants inclus les un dans les autres simulant un arbre de composant que l'on trouverait dans un projet.

La profondeur de ceux-ci est représentée par couleur. Chaque composant génère également son propre UUID pour être identifié plus facilement.

Le process de détection de changement peut être provoqué par le clic sur n'importe quel composant. **Si la détection de changement et déclenchée sur un composant, celui-ci laissera un log en console.**

Différents scénarios sont testables via différentes branches
  - **[Master](https://github.com/hugoMencoboni/angularChangeDetectionTests/tree/master)** représente le comportement par défaut. On y observe qu'**un événement  provoque le processus de détection de changements dans l'ensemble de l'arbre**, quelle que soit la profondeur du composant où l'événement a été déclenché.