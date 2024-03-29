
<hr>

## Lancer
Intallation module
```bash
npm install
```

Ancienne version
```bash
ts-node initial.ts
```

Test
```bash

```

<hr>

## Resumé

<hr>

## I.  Pourquoi le refactoring

> Lorsque vous devez ajouter une fonctionnalité à un programme, mais que le code n'est pas structuré convenablement, modifiez d'abord le programme pour que l'ajout de la fonctionnalité soit plus facile, puis ajoutez la fonctionnalité.


> Ce sont les programmes qui conduisent à la nécessité d'effectuer le refactoring. Si le code fonctionne et n'a jamais besoin d'évoluer, il est parfaitement correct de ne pas y toucher.
On l'améliore lorsque quelqu'un à besoin de comprendre comment ce code fonctionne et qu'on a du mal à suivre la logique du code.

<br>

## II.  Les étapes du refactoring

1. <u>S'assurer qu'on a des tests solides et suffisants pour la section de code à refactoriser.</u>

Les logiciels incarne la fragilité. Nous pouvons introduit un bug par erreur à tout moment pendant le refactoring. Et le meilleur moyen de se protéger reste les tests.

2. <u>La décomposition de la méthode.</u>
- Identifier les points qui séparent les différentes parties du comportement global.
- On effectue des petits changements et on teste après chaque modification.

--> Extraire méthode, remplacer une variable temporaire par une requête, incorporer variable, Modifier déclaration de fonction

3. <u>Le nommage de fonction.</u>
Nommer est à la fois important et délicat. La décomposition d'une grande fonction en fonction plus petites n'a d'intérêt que si les noms des fonctions sont bien choisis.

--->Utilisation d'une variable shadow, Modifier déclaration de fonction, Déplacer instruction, remplacer une variable temporaire par une requête

4. <u>Le Fractionnement par phase.</u>
On divise la logique en plusieurs : une phase de traitement, une phase de rendu, ...

5. <u>Remplacer boucle par pipeline.</u>
5. <u>Remplacer condition par polymorphisme.</u>