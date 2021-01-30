### Pour pusher des modifications sur le site :

- 1 Vérifier qu'on est synchroniser avec le repo distant (sinon, git pull)
- 2 Créer une branche de développement (develop ou autre)
- 3 stash and merge le commit, puis pusher la branch (git push -u origin develop)
- 4 sur github : gérer la PR
- 5 Si tout est ok, squash and merge (ou merge) sur master
- Supprimer la branch de travail
- VSC : retourner sur master, git pull pour recupéré le master distant
- puis git branch -d develop pour supprimer la branch.
- Recréer une branche develop pour être sur dene jamais travailler directement sur master

- Mémo : créer une nouvelle branche et switcher dessus : git switch -c non-existing-branch
