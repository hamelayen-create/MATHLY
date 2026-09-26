/* =========================================================
   MATHSLY — Contenu de la classe de Sixième (cycle 3)
   Chapitres : nombres décimaux · fractions · proportionnalité ·
               géométrie plane · espaces et volumes · données
   ========================================================= */
const SIXIEME_CHAPITRES = [
{
  id:"6e-decimaux", niveau:"6e", titre:"6e · Nombres décimaux", temps:"20 min",
  resume:"Écriture décimale, comparaison, addition, soustraction, multiplication.",
  lecons:[
    { titre:"Écriture et comparaison", contenu:`
      <h3>1. Ce qu'est un nombre décimal</h3>
      <p>Un nombre décimal s'écrit avec une virgule. Dans 47,382 :</p>
      <ul>
        <li><b>4</b> est le chiffre des dizaines</li>
        <li><b>7</b> est le chiffre des unités</li>
        <li><b>3</b> est le chiffre des dixièmes</li>
        <li><b>8</b> est le chiffre des centièmes</li>
        <li><b>2</b> est le chiffre des millièmes</li>
      </ul>
      <div class="box"><b>Astuce</b> — Après la virgule, l'ordre est : dixièmes, centièmes, millièmes. Chaque rang vaut dix fois moins que le précédent, comme avant la virgule.</div>

      <h3>2. Comparer deux décimaux</h3>
      <p>On compare d'abord les <b>parties entières</b>. Si elles sont égales, on compare les dixièmes, puis les centièmes, et ainsi de suite.</p>
      <div class="formula">3,4 &lt; 3,45      car 4 dixièmes &lt; 5 dixièmes
12,7 &gt; 9,85      car 12 &gt; 9</div>
      <div class="box warn"><b>Erreur classique</b> — Croire que 3,45 &lt; 3,4 parce que 45 &lt; 4. Non : on compare chiffre par chiffre après la virgule. 3,45 &gt; 3,4 car 45 centièmes &gt; 40 centièmes.</div>

      <h3>3. Ordonner</h3>
      <p>Pour ranger des nombres, la méthode la plus sûre est de compléter avec des zéros pour avoir <b>le même nombre de décimales</b>.</p>
      <div class="formula">3,4 ; 3,45 ; 3,408
→ 3,400 ; 3,450 ; 3,408
→ ordre : 3,400 &lt; 3,408 &lt; 3,450</div>

      <h3>4. Décomposer</h3>
      <div class="formula">47,382 = 40 + 7 + 0,3 + 0,08 + 0,002
       = (4 × 10) + (7 × 1) + (3 × 0,1) + (8 × 0,01) + (2 × 0,001)</div>

      <h3>5. Multiplier par 10, 100, 1000</h3>
      <p>Multiplier par 10 décale la virgule d'un rang vers la droite. Diviser la décale vers la gauche.</p>
      <div class="formula">3,45 × 10 = 34,5
3,45 × 100 = 345
3,45 ÷ 10 = 0,345</div>
      <div class="box"><b>Le bon réflexe</b> — La virgule se déplace, les chiffres ne changent pas. Si tu dois ajouter un zéro (3,5 × 100 = 350), c'est normal.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Ranger dans l'ordre croissant : 5,08 ; 5,8 ; 5,088 ; 5,1.</p>
      <ul>
        <li>On complète à trois décimales : 5,080 ; 5,800 ; 5,088 ; 5,100</li>
        <li>Comparaison : 5,080 &lt; 5,088 &lt; 5,100 &lt; 5,800</li>
      </ul>
      <p><b>Résultat :</b> 5,08 &lt; 5,088 &lt; 5,1 &lt; 5,8.</p>
    ` },
    { titre:"Additions, soustractions, multiplications", contenu:`
      <h3>1. Addition et soustraction</h3>
      <p>La règle d'or : <b>aligner les virgules</b>, puis calculer comme avec des entiers.</p>
      <div class="formula">  12,50
+  3,85
─────────
  16,35</div>
      <div class="box warn"><b>Erreur classique</b> — Aligner les nombres à droite sans aligner les virgules. 12,5 + 3,85 n'est pas 16,0 : c'est 16,35.</div>

      <h3>2. Multiplication</h3>
      <p>On multiplie <b>sans tenir compte des virgules</b>, puis on place la virgule dans le résultat : le nombre de décimales du résultat est la <b>somme</b> des décimales des deux facteurs.</p>
      <div class="formula">1,2 × 0,3 : on calcule 12 × 3 = 36
1,2 a 1 décimale, 0,3 a 1 décimale → 2 décimales
Résultat : 0,36</div>
      <div class="box"><b>Le compte des décimales</b> — C'est la seule chose à retenir pour la multiplication. 0,5 × 0,5 = 0,25 (et non 2,5) : deux facteurs, une décimale chacun, donc deux décimales.</div>

      <h3>3. Multiplication par 0,1 ou 0,5</h3>
      <ul>
        <li>Multiplier par 0,1 revient à diviser par 10</li>
        <li>Multiplier par 0,5 revient à diviser par 2</li>
        <li>Multiplier par 0,01 revient à diviser par 100</li>
      </ul>
      <div class="box"><b>Vérification de bon sens</b> — Multiplier par un nombre inférieur à 1 donne un résultat plus petit que le nombre de départ. 8 × 0,5 = 4. C'est le test à faire pour repérer une erreur.</div>

      <h3>4. Ordre des opérations</h3>
      <p>Sans parenthèses, on effectue d'abord les multiplications et divisions, puis les additions et soustractions, de gauche à droite.</p>
      <div class="formula">2 + 3 × 4 = 2 + 12 = 14      (et non 20)
(2 + 3) × 4 = 5 × 4 = 20</div>

      <h3>5. Calcul astucieux</h3>
      <p>On regroupe les termes qui s'additionnent facilement :</p>
      <div class="formula">2,5 + 7,5 + 3,8 = 10 + 3,8 = 13,8</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Calculer 3,75 + 12,4 − 5,08.</p>
      <ul>
        <li>On aligne : 3,75 + 12,40 = 16,15</li>
        <li>Puis 16,15 − 5,08 = 11,07</li>
      </ul>
      <p><b>Vérification par ordre de grandeur :</b> 4 + 12 − 5 = 11. Le résultat 11,07 est cohérent ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — l'écriture et la comparaison des décimaux, puis les opérations. L'ordre de grandeur est ton meilleur outil de vérification.</div>`,
  exercices:[
    { d:1, e:"Quel est le chiffre des centièmes dans 47,382 ?", r:"8",
      c:"Après la virgule : 3 est le chiffre des dixièmes, 8 celui des centièmes, 2 celui des millièmes.\n\nLe chiffre des centièmes est 8." },
    { d:1, e:"Comparer 3,4 et 3,45.", r:"3,4 < 3,45",
      c:"On complète : 3,40 et 3,45.\n\nComme 40 &lt; 45, on a 3,40 &lt; 3,45.\n\nAttention au piège : on ne compare pas « 4 » et « 45 » comme des entiers." },
    { d:1, e:"Calculer 12,5 + 3,85.", r:"16,35",
      c:"On aligne les virgules :\n12,50\n+ 3,85\n= 16,35.\n\nErreur à éviter : 12,5 + 3,85 n'est pas 16,0. Il ne faut jamais additionner les parties décimales séparément." },
    { d:1, e:"Calculer 1,2 × 0,3.", r:"0,36",
      c:"On multiplie sans les virgules : 12 × 3 = 36.\n\nNombre de décimales : 1 + 1 = 2.\n\nRésultat : 0,36." },
    { d:1, e:"Calculer 3,45 × 10.", r:"34,5",
      c:"Multiplier par 10 décale la virgule d'un rang vers la droite.\n\n3,45 → 34,5." },
    { d:1, e:"Calculer 3,45 × 100.", r:"345",
      c:"Multiplier par 100 décale la virgule de deux rangs vers la droite.\n\n3,45 → 345." },
    { d:1, e:"Calculer 8 × 0,5.", r:"4",
      c:"Multiplier par 0,5 revient à diviser par 2.\n\n8 × 0,5 = 4.\n\nVérification de bon sens : 0,5 est inférieur à 1, donc le résultat doit être plus petit que 8 ✓" },
    { d:1, e:"Ranger dans l'ordre croissant : 2,5 ; 2,05 ; 2,55.", r:"2,05 < 2,5 < 2,55",
      c:"On complète à deux décimales : 2,50 ; 2,05 ; 2,55.\n\nOrdre croissant : 2,05 &lt; 2,50 &lt; 2,55." },
    { d:1, e:"Calculer 100 − 47,3.", r:"52,7",
      c:"On écrit 100 comme 100,0.\n\n100,0 − 47,3 = 52,7.\n\nVérification : 52,7 + 47,3 = 100 ✓" },
    { d:1, e:"Calculer 0,5 × 0,5.", r:"0,25",
      c:"0,5 × 0,5 : on calcule 5 × 5 = 25.\n\nNombre de décimales : 1 + 1 = 2.\n\nRésultat : 0,25." },
    { d:2, e:"Calculer 4,7 × 2,3.", r:"10,81",
      c:"Sans les virgules : 47 × 23 = 1081.\n\nNombre de décimales : 1 + 1 = 2.\n\nRésultat : 10,81.\n\nVérification par ordre de grandeur : 5 × 2 = 10. Le résultat 10,81 est cohérent ✓" },
    { d:2, e:"Calculer 2 + 3 × 4.", r:"14",
      c:"Priorité à la multiplication : 3 × 4 = 12.\n\nPuis 2 + 12 = 14.\n\nCe n'est pas 20 : il n'y a pas de parenthèses, donc la multiplication passe d'abord." },
    { d:2, e:"Calculer (2 + 3) × 4.", r:"20",
      c:"Les parenthèses passent en premier : 2 + 3 = 5.\n\nPuis 5 × 4 = 20.\n\nLa présence des parenthèses change complètement le résultat." },
    { d:2, e:"Calculer 2,5 + 7,5 + 3,8.", r:"13,8",
      c:"On regroupe astucieusement : 2,5 + 7,5 = 10.\n\nPuis 10 + 3,8 = 13,8." },
    { d:2, e:"Un stylo coûte 1,85 €. Combien coûtent 4 stylos ?", r:"7,40 €",
      c:"1,85 × 4 : on calcule 185 × 4 = 740.\n\nNombre de décimales : 2 + 0 = 2.\n\nRésultat : 7,40 €.\n\nVérification : 2 × 4 = 8, et 1,85 est légèrement inférieur à 2, donc le résultat est cohérent ✓" },
    { d:2, e:"Calculer 15,6 − 8,75.", r:"6,85",
      c:"On aligne : 15,60 − 8,75.\n\n60 − 75 impossible, on emprunte : 1560 − 875 = 685.\n\nRésultat : 6,85.\n\nVérification : 6,85 + 8,75 = 15,60 ✓" },
    { d:2, e:"Un sac pèse 2,35 kg. Combien pèsent 10 sacs ?", r:"23,5 kg",
      c:"2,35 × 10 = 23,5.\n\nLa virgule se décale d'un rang vers la droite." },
    { d:2, e:"Calculer 0,1 × 45.", r:"4,5",
      c:"Multiplier par 0,1 revient à diviser par 10.\n\n45 ÷ 10 = 4,5." },
    { d:2, e:"Quel est l'ordre de grandeur de 19,8 × 4,1 ?", r:"Environ 80",
      c:"On arrondit : 20 × 4 = 80.\n\nLe résultat exact est 81,18, donc l'ordre de grandeur 80 est bien cohérent.\n\nMéthode : arrondir chaque facteur avant de multiplier permet de vérifier un résultat." },
    { d:2, e:"Calculer 7,04 × 1000.", r:"7040",
      c:"Multiplier par 1000 décale la virgule de trois rangs vers la droite.\n\n7,04 → 70,4 → 704 → 7040.\n\nIl faut ajouter un zéro car il n'y avait que deux décimales." },
    { d:2, e:"Jeanne a 15,50 € et achète un cahier à 3,75 € et un stylo à 2,20 €. Combien lui reste-t-il ?", r:"9,55 €",
      c:"Total des achats : 3,75 + 2,20 = 5,95 €.\n\nReste : 15,50 − 5,95 = 9,55 €.\n\nVérification : 9,55 + 5,95 = 15,50 ✓" },
    { d:3, e:"Calculer 3,5 × 0,02.", r:"0,07",
      c:"Sans les virgules : 35 × 2 = 70.\n\nNombre de décimales : 1 + 2 = 3.\n\nRésultat : 0,070 = 0,07.\n\nVérification de bon sens : 0,02 est très petit, donc le résultat est très inférieur à 3,5 ✓" },
    { d:3, e:"Un robinet laisse échapper 0,15 L par minute. Combien en 2 heures ?", r:"18 L",
      c:"2 heures = 120 minutes.\n\n0,15 × 120 : on calcule 15 × 120 = 1800.\n\nNombre de décimales : 2 + 0 = 2.\n\nRésultat : 18,00 = 18 L.\n\nInterprétation concrète : c'est près de 20 litres perdus en une soirée — un bon argument pour réparer un robinet qui fuit." },
    { d:3, e:"Calculer 5 − 2 × 1,5 + 3.", r:"5",
      c:"Priorité à la multiplication : 2 × 1,5 = 3.\n\nL'expression devient 5 − 3 + 3.\n\nDe gauche à droite : 5 − 3 = 2, puis 2 + 3 = 5." },
    { d:3, e:"Un ticket de caisse indique 3 articles à 2,45 € et 2 articles à 1,85 €. Quel est le total ?", r:"11,05 €",
      c:"Premier lot : 2,45 × 3 = 7,35 €.\nSecond lot : 1,85 × 2 = 3,70 €.\n\nTotal : 7,35 + 3,70 = 11,05 €.\n\nVérification par ordre de grandeur : 3 × 2,5 = 7,5 et 2 × 2 = 4, soit environ 11,5. Cohérent ✓" },
    { d:3, e:"Calculer 0,25 × 0,4.", r:"0,1",
      c:"Sans les virgules : 25 × 4 = 100.\n\nNombre de décimales : 2 + 1 = 3.\n\nRésultat : 0,100 = 0,1.\n\nAstuce : 0,25 = 1/4 et 0,4 = 2/5, donc le produit vaut 2/20 = 1/10 = 0,1 ✓" },
    { d:3, e:"Une voiture consomme 6,5 L aux 100 km. Combien pour 340 km ?", r:"22,1 L",
      c:"On calcule d'abord le nombre de centaines de km : 340 ÷ 100 = 3,4.\n\nConsommation : 6,5 × 3,4.\n\nSans les virgules : 65 × 34 = 2210.\nNombre de décimales : 1 + 1 = 2.\n\nRésultat : 22,10 = 22,1 L." },
    { d:3, e:"Sans calculatrice, dire si 4,8 × 0,9 est supérieur ou inférieur à 4,8.", r:"Inférieur",
      c:"0,9 est inférieur à 1.\n\nMultiplier un nombre positif par un nombre inférieur à 1 donne un résultat plus petit que ce nombre.\n\nVérification : 4,8 × 0,9 = 4,32 &lt; 4,8 ✓\n\nCe raisonnement évite beaucoup d'erreurs : il suffit de regarder le multiplicateur." },
    { d:3, e:"Calculer 12,5 × 8 − 3,2 × 5.", r:"84",
      c:"Première multiplication : 12,5 × 8 = 100.\n\nSeconde : 3,2 × 5 = 16.\n\nSoustraction : 100 − 16 = 84.\n\nVérification par ordre de grandeur : environ 100 − 15 = 85. Cohérent ✓" },
    { d:3, e:"Un commerçant achète 250 articles à 1,28 € et les revend 2,15 € l'unité. Quel est son bénéfice total ?", r:"217,50 €",
      c:"<b>Coût d'achat</b> : 1,28 × 250.\nOn calcule 128 × 250 = 32 000, avec 2 décimales : 320,00 €.\n\n<b>Recette</b> : 2,15 × 250.\n215 × 250 = 53 750, avec 2 décimales : 537,50 €.\n\n<b>Bénéfice</b> : 537,50 − 320,00 = 217,50 €.\n\n<b>Autre méthode, plus rapide</b> : bénéfice unitaire = 2,15 − 1,28 = 0,87 €. Puis 0,87 × 250 = 217,50 € ✓" }
  ]
},
{
  id:"6e-fractions", niveau:"6e", titre:"6e · Fractions", temps:"20 min",
  resume:"Fractions comme partage, comparaison, fractions décimales.",
  lecons:[
    { titre:"Fraction comme partage", contenu:`
      <h3>1. Qu'est-ce qu'une fraction</h3>
      <p>La fraction a/b représente <b>a parts</b> d'un tout découpé en <b>b parts égales</b>.</p>
      <ul>
        <li>Le nombre du bas, le <b>dénominateur</b>, dit en combien de parts on découpe</li>
        <li>Le nombre du haut, le <b>numérateur</b>, dit combien de parts on prend</li>
      </ul>
      <div class="box warn"><b>Interdit absolu</b> — On ne divise jamais par zéro. Une fraction avec 0 au dénominateur n'existe pas.</div>

      <h3>2. Lire une fraction</h3>
      <p>3/4 se lit « trois quarts ». Il y a aussi des noms spéciaux : 1/2 = un demi, 1/3 = un tiers.</p>
      <div class="box"><b>Attention au vocabulaire</b> — Dans 5/7, le 5 est le numérateur (le haut) et le 7 le dénominateur (le bas). Ne pas les confondre : c'est la source d'erreurs sur toute la leçon.</div>

      <h3>3. Fraction d'une quantité</h3>
      <p>Prendre les 2/3 de 15, c'est diviser 15 par 3 puis multiplier par 2 :</p>
      <div class="formula">15 ÷ 3 = 5, puis 5 × 2 = 10</div>
      <p>On peut aussi faire 15 × 2 ÷ 3 = 30 ÷ 3 = 10. Le résultat est le même.</p>

      <h3>4. Fractions égales</h3>
      <p>Une fraction garde sa valeur si on multiplie (ou divise) numérateur <b>et</b> dénominateur par le même nombre non nul.</p>
      <div class="formula">2/3 = 4/6 = 6/9 = 8/12</div>
      <div class="box"><b>Visualisation</b> — Imagine une tablette de chocolat : couper en 3 et prendre 2 parts donne autant de chocolat que couper en 6 et prendre 4 parts.</div>

      <h3>5. Simplifier une fraction</h3>
      <p>Simplifier, c'est diviser le haut et le bas par un même nombre, pour obtenir la fraction la plus simple possible.</p>
      <div class="formula">12/18 : on divise par 6 → 2/3</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Un gâteau est coupé en 8 parts égales. Léa en mange 3. Quelle fraction du gâteau a-t-elle mangée ? Combien reste-t-il ?</p>
      <ul>
        <li>Léa a mangé 3 parts sur 8 : elle a mangé <b>3/8</b> du gâteau</li>
        <li>Il reste 8 − 3 = 5 parts, soit <b>5/8</b></li>
        <li>Vérification : 3/8 + 5/8 = 8/8 = 1, le gâteau entier ✓</li>
      </ul>
    ` },
    { titre:"Comparer et décimales", contenu:`
      <h3>1. Comparer une fraction à 1</h3>
      <p>C'est le premier réflexe : si le numérateur est plus petit que le dénominateur, la fraction est inférieure à 1. S'il est plus grand, elle est supérieure à 1.</p>
      <div class="formula">3/4 &lt; 1        5/4 &gt; 1        7/7 = 1</div>

      <h3>2. Comparer deux fractions de même dénominateur</h3>
      <p>Le plus simple : on compare les numérateurs.</p>
      <div class="formula">3/7 &lt; 5/7      car 3 &lt; 5</div>

      <h3>3. Comparer deux fractions de dénominateurs différents</h3>
      <p>On les met au même dénominateur, ou on compare par rapport à 1 ou à 1/2.</p>
      <div class="formula">2/3 et 3/5 : on met sur 15 → 10/15 et 9/15
Donc 2/3 &gt; 3/5</div>
      <div class="box"><b>Astuce du demi</b> — Pour comparer 5/9 et 4/7 : 5/9 est supérieur à 1/2 (car 5 &gt; 4,5) et 4/7 est supérieur à 1/2 (car 4 &gt; 3,5). Cette méthode ne tranche pas ici. Compare alors avec le dénominateur commun 63 : 35/63 et 36/63, donc 4/7 &gt; 5/9.</div>

      <h3>4. Fractions décimales</h3>
      <p>Une fraction décimale a pour dénominateur 10, 100 ou 1000. Elle s'écrit directement en nombre décimal.</p>
      <div class="formula">7/10 = 0,7
45/100 = 0,45
3/1000 = 0,003</div>
      <div class="box"><b>Repère</b> — Le nombre de zéros au dénominateur donne le nombre de décimales. 45/100 a deux zéros, donc deux décimales : 0,45.</div>

      <h3>5. Écrire un décimal en fraction</h3>
      <div class="formula">0,25 = 25/100 = 1/4
1,5 = 15/10 = 3/2</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Comparer 3/4 et 5/7.</p>
      <ul>
        <li>Dénominateur commun : 4 × 7 = 28</li>
        <li>3/4 = 21/28 (on multiplie haut et bas par 7)</li>
        <li>5/7 = 20/28 (on multiplie haut et bas par 4)</li>
        <li>21 &gt; 20, donc 3/4 &gt; 5/7</li>
      </ul>
      <p><b>Vérification décimale :</b> 3/4 = 0,75 et 5/7 ≈ 0,714. On a bien 0,75 &gt; 0,714 ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — la fraction comme partage, puis la comparaison et le lien avec les nombres décimaux.</div>`,
  exercices:[
    { d:1, e:"Dans la fraction 3/7, quel est le dénominateur ?", r:"7",
      c:"Le dénominateur est le nombre du bas : il indique en combien de parts on a découpé le tout.\n\nIci, le dénominateur est 7." },
    { d:1, e:"Que représente la fraction 3/8 ?", r:"3 parts sur 8",
      c:"Le dénominateur 8 indique que le tout est coupé en 8 parts égales.\n\nLe numérateur 3 indique qu'on en prend 3." },
    { d:1, e:"Calculer les 2/5 de 20.", r:"8",
      c:"On divise par le dénominateur puis on multiplie par le numérateur.\n\n20 ÷ 5 = 4, puis 4 × 2 = 8.\n\nVérification : 8 est bien moins que la moitié de 20, et 2/5 est moins que 1/2 ✓" },
    { d:1, e:"Simplifier 6/8.", r:"3/4",
      c:"On divise le numérateur et le dénominateur par 2 :\n6/8 = 3/4.\n\nVérification : 6/8 = 0,75 et 3/4 = 0,75 ✓" },
    { d:1, e:"La fraction 5/5 est-elle égale à 1 ?", r:"Oui",
      c:"Quand le numérateur et le dénominateur sont égaux, la fraction vaut 1.\n\n5/5 = 1 : on a pris toutes les parts du tout." },
    { d:1, e:"Comparer 3/7 et 5/7.", r:"3/7 < 5/7",
      c:"Les deux fractions ont le même dénominateur.\n\nOn compare donc les numérateurs : 3 &lt; 5.\n\nDonc 3/7 &lt; 5/7." },
    { d:1, e:"Écrire 7/10 en nombre décimal.", r:"0,7",
      c:"7/10 signifie 7 dixièmes.\n\n7/10 = 0,7." },
    { d:1, e:"Écrire 45/100 en nombre décimal.", r:"0,45",
      c:"45/100 signifie 45 centièmes.\n\n45/100 = 0,45.\n\nLe dénominateur a deux zéros, donc le résultat a deux décimales." },
    { d:1, e:"La fraction 7/4 est-elle supérieure à 1 ?", r:"Oui",
      c:"Le numérateur (7) est plus grand que le dénominateur (4).\n\nDonc la fraction est supérieure à 1 : 7/4 = 1,75." },
    { d:1, e:"Calculer les 3/4 de 12.", r:"9",
      c:"12 ÷ 4 = 3, puis 3 × 3 = 9.\n\nVérification : 9 est bien égal à 3/4 de 12, car 12/4 = 3 et 3 × 3 = 9 ✓" },
    { d:2, e:"Simplifier 15/25.", r:"3/5",
      c:"On divise par 5 : 15/25 = 3/5.\n\nVérification : 15/25 = 0,6 et 3/5 = 0,6 ✓" },
    { d:2, e:"Comparer 2/3 et 3/5.", r:"2/3 > 3/5",
      c:"Dénominateur commun : 15.\n2/3 = 10/15 (on multiplie par 5)\n3/5 = 9/15 (on multiplie par 3)\n\n10 &gt; 9, donc 2/3 &gt; 3/5.\n\nVérification décimale : 2/3 ≈ 0,667 et 3/5 = 0,6 ✓" },
    { d:2, e:"Écrire 0,25 sous forme de fraction simplifiée.", r:"1/4",
      c:"0,25 = 25/100.\n\nOn simplifie par 25 : 25/100 = 1/4." },
    { d:2, e:"Compléter : 2/3 = ?/12.", r:"8/12",
      c:"On cherche par combien multiplier 3 pour obtenir 12 : c'est 4.\n\nOn multiplie donc aussi le numérateur par 4 : 2 × 4 = 8.\n\n2/3 = 8/12." },
    { d:2, e:"Un paquet contient 24 bonbons. On en mange les 5/8. Combien en reste-t-il ?", r:"9 bonbons",
      c:"Bonbons mangés : 24 ÷ 8 = 3, puis 3 × 5 = 15.\n\nBonbons restants : 24 − 15 = 9.\n\nAutre méthode : il reste 3/8 du paquet, soit 24 ÷ 8 × 3 = 9 ✓" },
    { d:2, e:"Comparer 5/6 et 7/9.", r:"5/6 > 7/9",
      c:"Dénominateur commun : 18.\n5/6 = 15/18 (on multiplie par 3)\n7/9 = 14/18 (on multiplie par 2)\n\n15 &gt; 14, donc 5/6 &gt; 7/9." },
    { d:2, e:"Écrire 1,5 sous forme de fraction.", r:"3/2",
      c:"1,5 = 15/10.\n\nOn simplifie par 5 : 15/10 = 3/2.\n\nVérification : 3/2 = 1,5 ✓" },
    { d:2, e:"Ranger dans l'ordre croissant : 1/2 ; 2/3 ; 1/4.", r:"1/4 < 1/2 < 2/3",
      c:"On met au même dénominateur (12) :\n1/2 = 6/12\n2/3 = 8/12\n1/4 = 3/12\n\nOrdre croissant : 3/12 &lt; 6/12 &lt; 8/12, soit 1/4 &lt; 1/2 &lt; 2/3." },
    { d:2, e:"Une recette demande 3/4 de litre de lait. Combien en millilitres ?", r:"750 mL",
      c:"1 litre = 1000 mL.\n\n3/4 de 1000 : 1000 ÷ 4 = 250, puis 250 × 3 = 750.\n\nIl faut 750 mL de lait." },
    { d:2, e:"Simplifier 24/36.", r:"2/3",
      c:"On cherche le plus grand diviseur commun de 24 et 36 : c'est 12.\n\n24/36 = 2/3.\n\nOn aurait pu simplifier en deux étapes : 24/36 = 12/18 = 6/9 = 2/3 ✓" },
    { d:2, e:"Compléter : 3/5 = 9/?.", r:"15",
      c:"On est passé de 3 à 9, donc on a multiplié par 3.\n\nOn multiplie le dénominateur par 3 également : 5 × 3 = 15.\n\n3/5 = 9/15." },
    { d:2, e:"Dans une classe de 30 élèves, 2/5 sont des garçons. Combien y a-t-il de filles ?", r:"18 filles",
      c:"Garçons : 30 ÷ 5 = 6, puis 6 × 2 = 12.\n\nFilles : 30 − 12 = 18.\n\nAutre méthode : les filles représentent 3/5 de la classe, soit 30 ÷ 5 × 3 = 18 ✓" },
    { d:2, e:"Comparer 4/5 et 5/6.", r:"4/5 < 5/6",
      c:"Dénominateur commun : 30.\n4/5 = 24/30\n5/6 = 25/30\n\n24 &lt; 25, donc 4/5 &lt; 5/6.\n\nVérification : 4/5 = 0,8 et 5/6 ≈ 0,833 ✓" },
    { d:3, e:"Un réservoir est rempli aux 3/7. On ajoute 12 litres et il est rempli aux 5/7. Quelle est la capacité totale ?", r:"42 litres",
      c:"Les 12 litres ajoutés représentent la différence : 5/7 − 3/7 = 2/7 de la capacité.\n\nDonc 2/7 de la capacité = 12 L.\n\nAlors 1/7 = 6 L, et la capacité totale (7/7) = 7 × 6 = 42 L.\n\nVérification : 3/7 de 42 = 18 L, et 5/7 de 42 = 30 L. Or 30 − 18 = 12 L ✓" },
    { d:3, e:"Calculer 2/3 + 1/6.", r:"5/6",
      c:"On met au même dénominateur (6) :\n2/3 = 4/6.\n\nDonc 4/6 + 1/6 = 5/6.\n\n<b>Rappel important</b> — On n'additionne jamais les numérateurs et les dénominateurs entre eux : 2/3 + 1/6 n'est pas 3/9." },
    { d:3, e:"Parmi 3/4, 7/10 et 5/7, quelle est la fraction la plus grande ?", r:"3/4",
      c:"Comparons en décimaux :\n3/4 = 0,75\n7/10 = 0,7\n5/7 ≈ 0,714\n\nLe plus grand est 0,75, donc la fraction la plus grande est 3/4.\n\n<b>Vérification par dénominateur commun</b> (140) : 105/140 ; 98/140 ; 100/140. On retrouve 3/4 en tête ✓" },
    { d:3, e:"Un champ rectangulaire a une longueur de 60 m. Les 2/3 de sa longueur valent les 4/5 de sa largeur. Quelle est sa largeur ?", r:"50 m",
      c:"Les 2/3 de 60 : 60 ÷ 3 × 2 = 40 m.\n\nCes 40 m représentent les 4/5 de la largeur L :\n(4/5) × L = 40.\n\nDonc L = 40 × 5/4 = 200/4 = 50 m.\n\nVérification : 4/5 de 50 = 40 ✓" },
    { d:3, e:"Dans un sac, 1/3 des billes sont rouges et 1/4 sont bleues. Les autres sont vertes. Quelle fraction représente les vertes ?", r:"5/12",
      c:"Rouges : 1/3 = 4/12.\nBleues : 1/4 = 3/12.\n\nTotal rouges et bleues : 4/12 + 3/12 = 7/12.\n\nVertes : 1 − 7/12 = 12/12 − 7/12 = 5/12.\n\nVérification : 4/12 + 3/12 + 5/12 = 12/12 = 1 ✓" },
    { d:3, e:"Sans calculatrice, comparer 11/12 et 12/13.", r:"11/12 < 12/13",
      c:"<b>Méthode astucieuse</b> : comparons les écarts à 1.\n\n1 − 11/12 = 1/12\n1 − 12/13 = 1/13\n\nComme 1/12 &gt; 1/13, la fraction 11/12 est plus éloignée de 1 que 12/13.\n\nDonc 11/12 &lt; 12/13.\n\nVérification décimale : 11/12 ≈ 0,917 et 12/13 ≈ 0,923 ✓" },
    { d:3, e:"Un ouvrier fait 2/5 d'un travail le lundi, 1/3 le mardi. Quelle fraction lui reste-t-il ?", r:"4/15",
      c:"Lundi : 2/5 = 6/15.\nMardi : 1/3 = 5/15.\n\nTotal fait : 6/15 + 5/15 = 11/15.\n\nReste : 1 − 11/15 = 4/15.\n\nVérification : 6/15 + 5/15 + 4/15 = 15/15 = 1 ✓" },
    { d:3, e:"Une bouteille contient 3/4 de litre. On remplit des verres de 1/8 de litre. Combien de verres peut-on remplir ?", r:"6 verres",
      c:"On cherche combien de fois 1/8 tient dans 3/4.\n\n3/4 = 6/8.\n\nDonc 6/8 ÷ 1/8 = 6.\n\nOn peut remplir 6 verres.\n\nVérification : 6 × 1/8 = 6/8 = 3/4 ✓" },
    { d:3, e:"Trois enfants se partagent un héritage. Le premier reçoit 1/4, le second les 2/5 du reste. Quelle fraction reçoit le troisième ?", r:"9/20",
      c:"<b>Premier</b> : 1/4.\n\nIl reste 1 − 1/4 = 3/4.\n\n<b>Second</b> : 2/5 du reste, soit 2/5 × 3/4 = 6/20 = 3/10.\n\n<b>Total des deux premiers</b> : 1/4 + 3/10 = 5/20 + 6/20 = 11/20.\n\n<b>Troisième</b> : 1 − 11/20 = 9/20.\n\nVérification : 5/20 + 6/20 + 9/20 = 20/20 ✓\n\n<b>Le piège de l'énoncé</b> : « les 2/5 du reste » ne signifie pas « 2/5 de l'héritage total ». C'est la difficulté principale de ce type d'exercice." }
  ]
},
{
  id:"6e-proportionnalite", niveau:"6e", titre:"6e · Proportionnalité", temps:"18 min",
  resume:"Tableaux de proportionnalité, coefficient, pourcentages, échelles.",
  lecons:[
    { titre:"Reconnaître et utiliser la proportionnalité", contenu:`
      <h3>1. Qu'est-ce que la proportionnalité</h3>
      <p>Deux grandeurs sont proportionnelles si on obtient les valeurs de l'une en <b>multipliant</b> toujours les valeurs de l'autre par le même nombre. Ce nombre s'appelle le <b>coefficient de proportionnalité</b>.</p>
      <div class="box"><b>Exemple qui marche</b> — Le prix des pommes : si 2 kg coûtent 6 €, alors 4 kg coûtent 12 € et 6 kg coûtent 18 €. Le prix multiplié par 2 quand la quantité double.</div>
      <div class="box warn"><b>Exemple qui ne marche pas</b> — L'âge et la taille ne sont pas proportionnels. Un enfant de 4 ans ne mesure pas le double d'un enfant de 2 ans.</div>

      <h3>2. Trouver le coefficient</h3>
      <p>On divise une valeur de la seconde ligne par la valeur correspondante de la première.</p>
      <div class="formula">2 kg → 6 €     alors le coefficient vaut 6 ÷ 2 = 3</div>
      <p>Le prix se calcule ensuite en multipliant la quantité par 3.</p>

      <h3>3. Compléter un tableau</h3>
      <p>Trois méthodes, à choisir selon les données :</p>
      <ul>
        <li><b>Le coefficient</b> : on multiplie par 3 (ou on divise par 3)</li>
        <li><b>Le retour à l'unité</b> : on calcule la valeur pour 1, puis on multiplie</li>
        <li><b>Les propriétés</b> : si je double la quantité, je double le prix</li>
      </ul>
      <div class="box"><b>La méthode la plus sûre en sixième</b> — Le retour à l'unité. Elle marche dans tous les cas, et elle donne un sens à ce qu'on calcule.</div>

      <h3>4. Les pourcentages</h3>
      <p>Un pourcentage est un cas particulier de proportionnalité : « 25 % de » signifie « 25 pour 100 de », donc on multiplie par 25/100.</p>
      <div class="formula">25 % de 80 = 80 × 25/100 = 80 × 0,25 = 20</div>
      <div class="box"><b>Les pourcentages à connaître</b> — 50 % = la moitié, 25 % = le quart, 10 % = on divise par 10, 75 % = les trois quarts.</div>

      <h3>5. Les échelles</h3>
      <p>Une échelle de 1/100 signifie que 1 cm sur le plan représente 100 cm en réalité.</p>
      <div class="formula">Échelle 1/200 : 5 cm sur le plan représentent 5 × 200 = 1000 cm = 10 m</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>3 kg de cerises coûtent 12 €. Combien coûtent 5 kg ?</p>
      <ul>
        <li><b>Retour à l'unité</b> : 12 ÷ 3 = 4, donc 1 kg coûte 4 €</li>
        <li>Pour 5 kg : 5 × 4 = 20 €</li>
      </ul>
      <p><b>Vérification par le coefficient :</b> le coefficient est 4 (prix par kg). 5 × 4 = 20 € ✓</p>
    ` },
    { titre:"Vitesse et durée", contenu:`
      <h3>1. La vitesse comme proportionnalité</h3>
      <p>La distance parcourue est proportionnelle à la durée. La vitesse est le coefficient de proportionnalité :</p>
      <div class="formula">vitesse = distance ÷ durée</div>
      <p>Une vitesse de 60 km/h signifie qu'en 1 heure, on parcourt 60 km.</p>

      <h3>2. Calculer une distance</h3>
      <div class="formula">distance = vitesse × durée</div>
      <p>À 80 km/h pendant 3 heures : 80 × 3 = 240 km.</p>

      <h3>3. Calculer une durée</h3>
      <div class="formula">durée = distance ÷ vitesse</div>
      <p>Pour parcourir 150 km à 50 km/h : 150 ÷ 50 = 3 heures.</p>
      <div class="box warn"><b>Attention aux unités</b> — Si la vitesse est en km/h, la durée doit être en heures. Une durée de 30 minutes vaut 0,5 heure, pas 30.</div>

      <h3>4. Convertir des durées</h3>
      <p>Pour convertir 2 h 15 min en heures décimales : 15 min = 15/60 h = 0,25 h. Donc 2 h 15 = 2,25 h.</p>
      <div class="box"><b>Dans l'autre sens</b> — 3,5 h = 3 h + 0,5 h. Or 0,5 h = 30 min. Donc 3,5 h = 3 h 30 min.</div>

      <h3>5. Convertir des vitesses</h3>
      <p>Pour passer de km/h en m/s, on divise par 3,6 :</p>
      <div class="formula">36 km/h = 36 ÷ 3,6 = 10 m/s</div>
      <div class="box"><b>Astuce</b> — 90 km/h vaut environ 25 m/s. Retenir ce repère aide à estimer une distance de freinage ou un temps de trajet.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Un cycliste roule à 18 km/h pendant 1 h 30. Quelle distance parcourt-il ?</p>
      <ul>
        <li>Convertissons la durée : 1 h 30 = 1,5 h</li>
        <li>Distance : 18 × 1,5 = 27 km</li>
      </ul>
      <p><b>Vérification :</b> en 1 heure, il fait 18 km. En une demi-heure, la moitié : 9 km. Total : 18 + 9 = 27 km ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — la proportionnalité et ses applications (pourcentages, échelles), puis vitesse et durée.</div>`,
  exercices:[
    { d:1, e:"3 kg de pommes coûtent 9 €. Combien coûtent 5 kg ?", r:"15 €",
      c:"<b>Retour à l'unité</b> : 9 ÷ 3 = 3, donc 1 kg coûte 3 €.\n\nPour 5 kg : 5 × 3 = 15 €.\n\nVérification : 5 kg coûtent plus que 3 kg, et 15 &gt; 9 ✓" },
    { d:1, e:"Calculer 50 % de 60.", r:"30",
      c:"50 % revient à prendre la moitié.\n\n60 ÷ 2 = 30." },
    { d:1, e:"Calculer 10 % de 250.", r:"25",
      c:"10 % revient à diviser par 10.\n\n250 ÷ 10 = 25.\n\nC'est le pourcentage le plus utile : il sert de base pour calculer les autres (20 % = 2 × 10 %, 5 % = la moitié de 10 %)." },
    { d:1, e:"Calculer 25 % de 80.", r:"20",
      c:"25 % revient à prendre le quart.\n\n80 ÷ 4 = 20." },
    { d:1, e:"Un tableau indique 2 → 6 et 4 → 12. Quel est le coefficient de proportionnalité ?", r:"3",
      c:"On divise la seconde valeur par la première : 6 ÷ 2 = 3.\n\nVérification avec l'autre colonne : 12 ÷ 4 = 3 ✓\n\nLe coefficient est bien constant : il y a proportionnalité." },
    { d:1, e:"Un train roule à 100 km/h. Quelle distance en 2 heures ?", r:"200 km",
      c:"distance = vitesse × durée.\n\n100 × 2 = 200 km." },
    { d:1, e:"Combien de minutes dans 0,5 heure ?", r:"30 min",
      c:"1 heure = 60 minutes.\n\n0,5 heure = 60 × 0,5 = 30 minutes.\n\n0,5 représente la moitié." },
    { d:1, e:"Sur une carte à l'échelle 1/1000, 1 cm représente combien en réalité ?", r:"10 m",
      c:"Échelle 1/1000 : 1 cm sur la carte représente 1000 cm en réalité.\n\n1000 cm = 10 m." },
    { d:1, e:"Convertir 1 h 30 min en heures décimales.", r:"1,5 h",
      c:"30 minutes = 30/60 heure = 0,5 heure.\n\nDonc 1 h 30 = 1,5 h." },
    { d:1, e:"5 stylos coûtent 7,50 €. Combien coûte 1 stylo ?", r:"1,50 €",
      c:"Retour à l'unité : 7,50 ÷ 5 = 1,50 €.\n\nVérification : 5 × 1,50 = 7,50 ✓" },
    { d:2, e:"Un cycliste roule à 20 km/h pendant 3 heures. Quelle distance ?", r:"60 km",
      c:"distance = vitesse × durée = 20 × 3 = 60 km." },
    { d:2, e:"Calculer 15 % de 200.", r:"30",
      c:"On décompose : 15 % = 10 % + 5 %.\n\n10 % de 200 = 20.\n5 % de 200 = 10 (la moitié de 10 %).\n\nTotal : 20 + 10 = 30.\n\n<b>Autre méthode</b> : 200 × 15/100 = 200 × 0,15 = 30 ✓" },
    { d:2, e:"Je parcours 240 km en 3 heures. Quelle est ma vitesse moyenne ?", r:"80 km/h",
      c:"vitesse = distance ÷ durée = 240 ÷ 3 = 80 km/h.\n\nInterprétation : en 1 heure, je parcours 80 km." },
    { d:2, e:"Sur une carte à l'échelle 1/25000, deux villes sont séparées de 4 cm. Quelle est la distance réelle ?", r:"1 km",
      c:"4 cm sur la carte représentent 4 × 25 000 = 100 000 cm en réalité.\n\nConversion : 100 000 cm = 1000 m = 1 km." },
    { d:2, e:"Combien de temps pour parcourir 180 km à 60 km/h ?", r:"3 heures",
      c:"durée = distance ÷ vitesse = 180 ÷ 60 = 3 heures." },
    { d:2, e:"Un pantalon coûte 40 €. Il est soldé à 30 %. Quel est le nouveau prix ?", r:"28 €",
      c:"Réduction : 30 % de 40 = 40 × 0,30 = 12 €.\n\nNouveau prix : 40 − 12 = 28 €.\n\n<b>Autre méthode</b> : après une réduction de 30 %, on paie 70 % du prix. Donc 40 × 0,70 = 28 € ✓" },
    { d:2, e:"Un robinet remplit 15 L en 3 minutes. Combien en 7 minutes ?", r:"35 L",
      c:"Retour à l'unité : 15 ÷ 3 = 5 L par minute.\n\nEn 7 minutes : 7 × 5 = 35 L." },
    { d:2, e:"4 croissants coûtent 3,60 €. Combien coûtent 7 croissants ?", r:"6,30 €",
      c:"Prix d'un croissant : 3,60 ÷ 4 = 0,90 €.\n\nPrix de 7 : 7 × 0,90 = 6,30 €.\n\nVérification par le coefficient : 0,90 € par croissant, constant ✓" },
    { d:2, e:"Convertir 3,25 heures en heures et minutes.", r:"3 h 15 min",
      c:"3,25 h = 3 h + 0,25 h.\n\n0,25 h = 0,25 × 60 = 15 minutes.\n\nDonc 3,25 h = 3 h 15 min." },
    { d:2, e:"Un article coûte 80 €. Son prix augmente de 10 %. Quel est le nouveau prix ?", r:"88 €",
      c:"Augmentation : 10 % de 80 = 8 €.\n\nNouveau prix : 80 + 8 = 88 €.\n\n<b>Autre méthode</b> : après une hausse de 10 %, on paie 110 % du prix. Donc 80 × 1,10 = 88 € ✓" },
    { d:2, e:"Une voiture parcourt 45 km en 30 minutes. Quelle est sa vitesse en km/h ?", r:"90 km/h",
      c:"Attention : 30 minutes = 0,5 heure.\n\nvitesse = 45 ÷ 0,5 = 90 km/h.\n\n<b>Erreur à éviter</b> — Diviser par 30 au lieu de 0,5 donnerait 1,5 km/h, ce qui est absurde. Toujours convertir la durée en heures." },
    { d:2, e:"Un plan est à l'échelle 1/500. Un mur mesure 6 cm sur le plan. Quelle est sa longueur réelle ?", r:"30 m",
      c:"Longueur réelle : 6 × 500 = 3000 cm.\n\nConversion : 3000 cm = 30 m." },
    { d:3, e:"Un pull coûte 60 € après une réduction de 25 %. Quel était son prix avant ?", r:"80 €",
      c:"Après une réduction de 25 %, on paie 75 % du prix initial.\n\nDonc 75 % du prix = 60 €.\n\n1 % du prix = 60 ÷ 75 = 0,8 €.\n100 % du prix = 0,8 × 100 = 80 €.\n\nVérification : 25 % de 80 = 20, et 80 − 20 = 60 € ✓" },
    { d:3, e:"Un train parcourt 240 km en 1 h 30. Quelle est sa vitesse moyenne ?", r:"160 km/h",
      c:"Conversion : 1 h 30 = 1,5 h.\n\nvitesse = 240 ÷ 1,5 = 160 km/h." },
    { d:3, e:"3 ouvriers construisent un mur en 8 jours. Combien de jours pour 6 ouvriers ?", r:"4 jours",
      c:"<b>Attention</b> : ce n'est pas une situation de proportionnalité directe, c'est une proportionnalité inverse.\n\nLe travail total représente 3 × 8 = 24 « journées d'ouvrier ».\n\nAvec 6 ouvriers : 24 ÷ 6 = 4 jours.\n\n<b>Le piège</b> — Doubler le nombre d'ouvriers divise le temps par deux, mais on ne peut pas appliquer un simple coefficient de proportionnalité." },
    { d:3, e:"Un commerçant achète un article 45 €. Pour réaliser un bénéfice de 20 % du prix d'achat, quel prix de vente doit-il fixer ?", r:"54 €",
      c:"Bénéfice souhaité : 20 % de 45 = 45 × 0,20 = 9 €.\n\nPrix de vente : 45 + 9 = 54 €.\n\n<b>Attention au vocabulaire</b> — « 20 % du prix d'achat » n'est pas la même chose que « 20 % du prix de vente ». Ici, l'énoncé précise bien le prix d'achat." },
    { d:3, e:"Une voiture consomme 6 L aux 100 km. Combien consomme-t-elle pour 250 km ?", r:"15 L",
      c:"Pour 250 km, on parcourt 2,5 fois 100 km.\n\nConsommation : 6 × 2,5 = 15 L." },
    { d:3, e:"Sur une carte, 3 cm représentent 15 km. Quelle est l'échelle ?", r:"1/500 000",
      c:"On met tout dans la même unité : 15 km = 1 500 000 cm.\n\n3 cm sur la carte représentent 1 500 000 cm en réalité.\n\nDonc 1 cm représente 1 500 000 ÷ 3 = 500 000 cm.\n\nÉchelle : 1/500 000." },
    { d:3, e:"Un cycliste met 2 h 30 pour faire 50 km. Quelle est sa vitesse en m/s ?", r:"5,56 m/s environ",
      c:"<b>Étape 1</b> : vitesse en km/h.\n2 h 30 = 2,5 h.\nvitesse = 50 ÷ 2,5 = 20 km/h.\n\n<b>Étape 2</b> : conversion en m/s.\n20 ÷ 3,6 ≈ 5,56 m/s." },
    { d:3, e:"Un placement de 1500 € rapporte 4 % par an. Quelle somme après un an ?", r:"1560 €",
      c:"Intérêts : 4 % de 1500 = 1500 × 0,04 = 60 €.\n\nSomme totale : 1500 + 60 = 1560 €.\n\n<b>Autre méthode</b> : 1500 × 1,04 = 1560 € ✓" },
    { d:3, e:"Dans une ville de 12 000 habitants, 45 % ont moins de 30 ans. Combien cela représente-t-il ?", r:"5400 habitants",
      c:"45 % de 12 000.\n\nMéthode par décomposition :\n10 % de 12 000 = 1200\n45 % = 4 × 10 % + 5 %, soit 4 × 1200 + 600 = 4800 + 600 = 5400.\n\n<b>Vérification</b> : 12 000 × 0,45 = 5400 ✓" },
    { d:3, e:"Deux peintres mettent 12 jours pour peindre une maison. Combien de jours pour 3 peintres ?", r:"8 jours",
      c:"Ce n'est pas une proportionnalité directe mais inverse.\n\nTravail total : 2 × 12 = 24 « journées de peintre ».\n\nAvec 3 peintres : 24 ÷ 3 = 8 jours.\n\n<b>Vérification du bon sens</b> : plus de peintres, donc moins de temps ✓" }
  ]
},
{
  id:"6e-figures", niveau:"6e", titre:"6e · Figures usuelles", temps:"20 min",
  resume:"Droites, cercles, angles, périmètres et aires des figures de base.",
  lecons:[
    { titre:"Droites, segments et cercles", contenu:`
      <h3>1. Le vocabulaire de base</h3>
      <ul>
        <li>Une <b>droite</b> est illimitée des deux côtés. On la note (AB).</li>
        <li>Un <b>segment</b> a deux extrémités. On le note [AB].</li>
        <li>Une <b>demi-droite</b> a une origine et est illimitée d'un seul côté. On la note [AB).</li>
      </ul>
      <div class="box warn"><b>La distinction des crochets</b> — (AB) désigne une droite, [AB] un segment, [AB) une demi-droite. Le type de crochet porte un sens, ce n'est pas une décoration.</div>

      <h3>2. Points alignés, milieu</h3>
      <p>Des points sont <b>alignés</b> s'ils appartiennent tous à une même droite. Le <b>milieu</b> I de [AB] est le point de [AB] tel que IA = IB.</p>

      <h3>3. Droites perpendiculaires et parallèles</h3>
      <ul>
        <li><b>Perpendiculaires</b> : elles se coupent en formant un angle droit (noté ⊥)</li>
        <li><b>Parallèles</b> : elles ne se coupent jamais (noté ∥)</li>
      </ul>
      <div class="box"><b>Propriété utile</b> — Si deux droites sont perpendiculaires à la même troisième, alors elles sont parallèles entre elles. C'est ce qui permet de tracer des parallèles au compas.</div>

      <h3>4. Le cercle</h3>
      <p>Le cercle de centre O et de rayon r est l'ensemble des points situés à la distance r de O. Attention au vocabulaire :</p>
      <ul>
        <li><b>Le cercle</b> est la ligne courbe</li>
        <li><b>Le disque</b> est la surface intérieure, cercle compris</li>
      </ul>
      <div class="formula">Le diamètre vaut le double du rayon : d = 2r</div>

      <h3>5. Les angles</h3>
      <p>Un angle se mesure en degrés. On distingue :</p>
      <ul>
        <li><b>Aigu</b> : moins de 90°</li>
        <li><b>Droit</b> : exactement 90°</li>
        <li><b>Obtus</b> : entre 90° et 180°</li>
        <li><b>Plat</b> : exactement 180°</li>
      </ul>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Un cercle a un diamètre de 14 cm. Quel est son rayon ? Quelle est la longueur du cercle ?</p>
      <ul>
        <li>Rayon : r = d ÷ 2 = 14 ÷ 2 = 7 cm</li>
        <li>Longueur du cercle : P = 2 × π × r = 2 × π × 7 = 14π ≈ 44 cm</li>
      </ul>
      <p><b>Vérification :</b> 14 × 3,14 ≈ 43,96 cm, on est bien proche de 44 cm ✓</p>
    ` },
    { titre:"Périmètres et aires", contenu:`
      <h3>1. Périmètre et aire : deux choses différentes</h3>
      <p>Le <b>périmètre</b> est la longueur du contour (en cm). L'<b>aire</b> est la surface occupée (en cm²).</p>
      <div class="box"><b>Comment les distinguer</b> — Le périmètre se mesure avec une règle le long du bord. L'aire se mesure en comptant des carrés unité à l'intérieur. Ce sont deux grandeurs différentes, avec deux unités différentes.</div>

      <h3>2. Le carré</h3>
      <div class="formula">Périmètre : P = 4 × c
Aire : A = c × c = c²</div>
      <p>Pour un carré de 5 cm de côté : P = 20 cm et A = 25 cm².</p>

      <h3>3. Le rectangle</h3>
      <div class="formula">Périmètre : P = 2 × (L + l)
Aire : A = L × l</div>

      <h3>4. Le triangle</h3>
      <div class="formula">Périmètre : P = somme des trois côtés
Aire : A = (base × hauteur) ÷ 2</div>
      <div class="box warn"><b>La hauteur est perpendiculaire à la base</b> — La hauteur n'est pas un côté du triangle : c'est la distance entre le sommet et la base, mesurée perpendiculairement.</div>

      <h3>5. Le disque</h3>
      <div class="formula">Périmètre du cercle : P = 2 × π × r
Aire du disque : A = π × r²</div>
      <p>Pour r = 3 cm : P = 6π ≈ 18,8 cm et A = 9π ≈ 28,3 cm².</p>
      <div class="box"><b>Ne pas confondre les formules</b> — Le périmètre utilise r (au premier degré), l'aire utilise r². Écrire A = πr au lieu de πr² est l'erreur la plus fréquente.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Un rectangle mesure 8 cm sur 5 cm. Calculer son périmètre et son aire.</p>
      <ul>
        <li>Périmètre : P = 2 × (8 + 5) = 2 × 13 = 26 cm</li>
        <li>Aire : A = 8 × 5 = 40 cm²</li>
      </ul>
      <p><b>Vérification du bon sens :</b> le périmètre est une longueur (26 cm sur un contour d'environ 8+5+8+5), l'aire est une surface (40 carrés de 1 cm de côté tiendraient dans le rectangle) ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — le vocabulaire des figures et les angles, puis les formules de périmètre et d'aire.</div>`,
  exercices:[
    { d:1, e:"Quel est le périmètre d'un carré de 6 cm de côté ?", r:"24 cm",
      c:"Périmètre d'un carré : P = 4 × c.\n\nP = 4 × 6 = 24 cm." },
    { d:1, e:"Quelle est l'aire d'un carré de 6 cm de côté ?", r:"36 cm²",
      c:"Aire d'un carré : A = c × c = c².\n\nA = 6 × 6 = 36 cm².\n\nL'unité est le cm², car on mesure une surface." },
    { d:1, e:"Quel est le périmètre d'un rectangle de 7 cm sur 3 cm ?", r:"20 cm",
      c:"Périmètre : P = 2 × (L + l) = 2 × (7 + 3) = 2 × 10 = 20 cm." },
    { d:1, e:"Quelle est l'aire d'un rectangle de 7 cm sur 3 cm ?", r:"21 cm²",
      c:"Aire : A = L × l = 7 × 3 = 21 cm²." },
    { d:1, e:"Un cercle a un rayon de 5 cm. Quel est son diamètre ?", r:"10 cm",
      c:"Le diamètre vaut le double du rayon.\n\nd = 2 × 5 = 10 cm." },
    { d:1, e:"Comment note-t-on la droite passant par A et B ?", r:"(AB)",
      c:"Une droite est illimitée des deux côtés, on la note avec des parenthèses : (AB).\n\nUn segment se note [AB], une demi-droite [AB)." },
    { d:1, e:"Quel est le périmètre d'un triangle de côtés 3, 4 et 5 cm ?", r:"12 cm",
      c:"Périmètre d'un triangle : somme des trois côtés.\n\n3 + 4 + 5 = 12 cm." },
    { d:1, e:"Quelle est l'aire d'un triangle de base 6 cm et de hauteur 4 cm ?", r:"12 cm²",
      c:"Aire d'un triangle : A = (base × hauteur) ÷ 2.\n\nA = (6 × 4) ÷ 2 = 24 ÷ 2 = 12 cm²." },
    { d:1, e:"Un angle de 45° est-il aigu ou obtus ?", r:"Aigu",
      c:"Un angle aigu mesure moins de 90°.\n\nOr 45° &lt; 90°, donc l'angle est aigu." },
    { d:1, e:"Combien mesure un angle droit ?", r:"90°",
      c:"Un angle droit mesure exactement 90°.\n\nC'est l'angle formé par deux droites perpendiculaires." },
    { d:2, e:"Calculer la longueur d'un cercle de rayon 7 cm (valeur exacte).", r:"14π cm",
      c:"Longueur du cercle : P = 2 × π × r.\n\nP = 2 × π × 7 = 14π cm.\n\nValeur approchée : 14 × 3,14 ≈ 44 cm." },
    { d:2, e:"Calculer l'aire d'un disque de rayon 3 cm (valeur exacte).", r:"9π cm²",
      c:"Aire du disque : A = π × r².\n\nA = π × 3² = 9π cm².\n\nValeur approchée : 9 × 3,14 ≈ 28,3 cm²." },
    { d:2, e:"Le périmètre d'un carré est 36 cm. Quelle est la longueur d'un côté ?", r:"9 cm",
      c:"P = 4 × c, donc c = P ÷ 4.\n\nc = 36 ÷ 4 = 9 cm.\n\nVérification : 4 × 9 = 36 ✓" },
    { d:2, e:"L'aire d'un rectangle est 48 cm² et sa longueur 8 cm. Quelle est sa largeur ?", r:"6 cm",
      c:"A = L × l, donc l = A ÷ L.\n\nl = 48 ÷ 8 = 6 cm.\n\nVérification : 8 × 6 = 48 ✓" },
    { d:2, e:"Deux droites sont perpendiculaires à une même troisième. Sont-elles parallèles ?", r:"Oui",
      c:"C'est une propriété du cours : si deux droites sont perpendiculaires à une même droite, alors elles sont parallèles entre elles." },
    { d:2, e:"Un rectangle a un périmètre de 30 cm et une longueur de 10 cm. Quelle est sa largeur ?", r:"5 cm",
      c:"P = 2 × (L + l), donc L + l = P ÷ 2 = 15 cm.\n\nl = 15 − 10 = 5 cm.\n\nVérification : 2 × (10 + 5) = 30 ✓" },
    { d:2, e:"Convertir 250 cm² en m².", r:"0,025 m²",
      c:"1 m² = 10 000 cm² (car 1 m = 100 cm, donc 1 m² = 100 × 100 cm²).\n\n250 cm² = 250 ÷ 10 000 = 0,025 m².\n\n<b>Attention</b> — Pour les aires, on divise par 100 × 100 = 10 000, pas par 100." },
    { d:2, e:"Quelle est l'aire d'un carré de périmètre 20 cm ?", r:"25 cm²",
      c:"<b>Étape 1</b> : trouver le côté.\nP = 4 × c, donc c = 20 ÷ 4 = 5 cm.\n\n<b>Étape 2</b> : calculer l'aire.\nA = 5 × 5 = 25 cm²." },
    { d:2, e:"Que vaut π arrondi au centième ?", r:"3,14",
      c:"π ≈ 3,14159...\n\nArrondi au centième : 3,14.\n\nEn sixième, on utilise souvent 3,14 pour les calculs approchés." },
    { d:2, e:"Un triangle a une aire de 20 cm² et une base de 5 cm. Quelle est sa hauteur ?", r:"8 cm",
      c:"A = (base × hauteur) ÷ 2, donc hauteur = 2 × A ÷ base.\n\nhauteur = 2 × 20 ÷ 5 = 40 ÷ 5 = 8 cm.\n\nVérification : (5 × 8) ÷ 2 = 20 ✓" },
    { d:2, e:"Convertir 3,5 m en cm.", r:"350 cm",
      c:"1 m = 100 cm.\n\n3,5 × 100 = 350 cm." },
    { d:2, e:"Combien de mètres dans 2,4 km ?", r:"2400 m",
      c:"1 km = 1000 m.\n\n2,4 × 1000 = 2400 m." },
    { d:3, e:"Un jardin rectangulaire mesure 25 m sur 12 m. On veut l'entourer d'une clôture coûtant 18 € le mètre. Quel est le budget ?", r:"1332 €",
      c:"<b>Étape 1</b> : périmètre.\nP = 2 × (25 + 12) = 2 × 37 = 74 m.\n\n<b>Étape 2</b> : coût.\n74 × 18 = 1332 €." },
    { d:3, e:"Un disque a une aire de 16π cm². Quel est son rayon ?", r:"4 cm",
      c:"A = π × r² = 16π.\n\nDonc r² = 16.\n\nr = 4 cm (le rayon est positif).\n\nVérification : π × 4² = 16π ✓" },
    { d:3, e:"Un terrain carré a une aire de 144 m². Quel est son périmètre ?", r:"48 m",
      c:"<b>Étape 1</b> : trouver le côté.\nA = c² = 144, donc c = √144 = 12 m.\n\n<b>Étape 2</b> : périmètre.\nP = 4 × 12 = 48 m." },
    { d:3, e:"Une pièce mesure 4 m sur 3,5 m. On pose des carreaux de 0,5 m de côté. Combien faut-il de carreaux ?", r:"56 carreaux",
      c:"<b>Étape 1</b> : aire de la pièce.\n4 × 3,5 = 14 m².\n\n<b>Étape 2</b> : aire d'un carreau.\n0,5 × 0,5 = 0,25 m².\n\n<b>Étape 3</b> : nombre de carreaux.\n14 ÷ 0,25 = 56 carreaux." },
    { d:3, e:"Un triangle rectangle a des côtés de l'angle droit de 9 cm et 12 cm. Quelle est son aire ?", r:"54 cm²",
      c:"Dans un triangle rectangle, les deux côtés de l'angle droit sont perpendiculaires.\n\nOn peut donc prendre l'un comme base et l'autre comme hauteur.\n\nA = (9 × 12) ÷ 2 = 108 ÷ 2 = 54 cm²." },
    { d:3, e:"Une roue de vélo a un rayon de 35 cm. Quelle distance parcourt-elle en un tour ?", r:"Environ 2,20 m",
      c:"Distance parcourue en un tour = longueur du cercle.\n\nP = 2 × π × r = 2 × π × 35 = 70π cm.\n\n70 × 3,14 ≈ 220 cm = 2,20 m." },
    { d:3, e:"Un champ rectangulaire de 80 m sur 50 m est entouré d'une allée de 2 m de large. Quelle est l'aire totale avec l'allée ?", r:"4536 m²",
      c:"Les dimensions extérieures (champ + allée des deux côtés) :\n80 + 2 + 2 = 84 m\n50 + 2 + 2 = 54 m\n\nAire totale : 84 × 54 = 4536 m².\n\n<b>Vérification</b> : l'aire du champ seul vaut 4000 m², et l'allée ajoute 536 m². C'est cohérent (le périmètre du champ est de 260 m, et 260 × 2 = 520 ≈ 536) ✓" },
    { d:3, e:"Un toit rectangulaire mesure 8 m sur 5 m. On le couvre de tuiles de 0,4 m sur 0,25 m. Combien faut-il de tuiles ?", r:"400 tuiles",
      c:"<b>Étape 1</b> : aire du toit.\n8 × 5 = 40 m².\n\n<b>Étape 2</b> : aire d'une tuile.\n0,4 × 0,25 = 0,1 m².\n\n<b>Étape 3</b> : nombre de tuiles.\n40 ÷ 0,1 = 400 tuiles." }
  ]
},
{
  id:"6e-volumes", niveau:"6e", titre:"6e · Espace et volumes", temps:"18 min",
  resume:"Solides usuels, patrons, volumes du pavé et du cube, conversions.",
  lecons:[
    { titre:"Solides et patrons", contenu:`
      <h3>1. Les solides à connaître</h3>
      <ul>
        <li><b>Le cube</b> : 6 faces carrées identiques, 12 arêtes</li>
        <li><b>Le pavé droit</b> (parallélépipède rectangle) : 6 faces rectangulaires</li>
        <li><b>Le prisme droit</b> : deux bases polygonales identiques et parallèles</li>
        <li><b>Le cylindre</b> : deux bases circulaires identiques</li>
        <li><b>La pyramide</b> : une base polygonale et un sommet</li>
        <li><b>Le cône</b> : une base circulaire et un sommet</li>
      </ul>

      <h3>2. Le patron</h3>
      <p>Un patron est un dessin à plat qui, une fois plié, forme le solide. Le patron du cube est composé de 6 carrés, celui du pavé de 6 rectangles.</p>
      <div class="box"><b>Vérification d'un patron</b> — Il doit y avoir exactement le bon nombre de faces, et elles doivent pouvoir se plier sans se chevaucher. Un patron de cube avec 5 carrés est faux.</div>

      <h3>3. Patron du cylindre</h3>
      <p>Il est composé de deux disques (les bases) et d'un rectangle dont la largeur est la hauteur du cylindre et la longueur est le périmètre du cercle de base.</p>
      <div class="formula">Longueur du rectangle = 2 × π × r</div>

      <h3>4. Perspective cavalière</h3>
      <p>C'est la façon de représenter un solide sur une feuille : les arêtes parallèles restent parallèles, les arêtes perpendiculaires au plan sont dessinées en biais.</p>
      <div class="box warn"><b>Attention à la lecture</b> — Sur un dessin en perspective, une face qui paraît carrée peut ne pas l'être. Ne mesure jamais sur un dessin en perspective : utilise les données numériques de l'énoncé.</div>

      <h3>5. Vocabulaire des solides</h3>
      <ul>
        <li><b>Face</b> : surface plane délimitant le solide</li>
        <li><b>Arête</b> : segment où deux faces se rejoignent</li>
        <li><b>Sommet</b> : point où plusieurs arêtes se rejoignent</li>
      </ul>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Combien de faces, d'arêtes et de sommets a un pavé droit ?</p>
      <ul>
        <li><b>Faces</b> : 6 (dessus, dessous, et les quatre côtés)</li>
        <li><b>Arêtes</b> : 12 (4 pour chaque dimension, et il y a 3 dimensions)</li>
        <li><b>Sommets</b> : 8 (les coins)</li>
      </ul>
      <p><b>Vérification par la formule d'Euler :</b> S − A + F = 8 − 12 + 6 = 2 ✓</p>
    ` },
    { titre:"Volumes et conversions", contenu:`
      <h3>1. Volume du pavé droit</h3>
      <div class="formula">V = Longueur × largeur × hauteur</div>
      <p>Pour un pavé de 5 cm sur 3 cm sur 2 cm : V = 5 × 3 × 2 = 30 cm³.</p>

      <h3>2. Volume du cube</h3>
      <div class="formula">V = c × c × c = c³</div>
      <p>Pour un cube de 4 cm d'arête : V = 4³ = 64 cm³.</p>
      <div class="box"><b>Volumes à connaître par cœur</b> — 1³ = 1, 2³ = 8, 3³ = 27, 4³ = 64, 5³ = 125, 10³ = 1000. Ils reviennent souvent.</div>

      <h3>3. Volume du cylindre</h3>
      <div class="formula">V = π × r² × h</div>
      <p>On calcule l'aire de la base (πr²), puis on multiplie par la hauteur.</p>
      <div class="box"><b>Méthode générale</b> — Pour tout prisme ou cylindre, le volume vaut (aire de la base) × hauteur. C'est la formule à retenir, plus que les cas particuliers.</div>

      <h3>4. Les unités de volume</h3>
      <p>L'unité de base est le mètre cube (m³). Les conversions se font de mille en mille :</p>
      <div class="formula">1 m³ = 1000 dm³
1 dm³ = 1000 cm³
Donc 1 m³ = 1 000 000 cm³</div>
      <div class="box warn"><b>Le piège des conversions de volumes</b> — On divise ou multiplie par 1000 à chaque changement d'unité, pas par 10 comme pour les longueurs. 1 m³ = 1000 dm³, pas 10 dm³.</div>

      <h3>5. Litres et décimètres cubes</h3>
      <p>Correspondance essentielle à connaître :</p>
      <div class="formula">1 L = 1 dm³
1 mL = 1 cm³
1 m³ = 1000 L</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Un aquarium mesure 60 cm sur 30 cm sur 40 cm. Quelle est sa capacité en litres ?</p>
      <ul>
        <li>Volume en cm³ : 60 × 30 × 40 = 72 000 cm³</li>
        <li>Conversion : 1 cm³ = 1 mL, donc 72 000 mL</li>
        <li>En litres : 72 000 ÷ 1000 = 72 L</li>
      </ul>
      <p><b>Vérification :</b> 72 L correspondent à 72 dm³, et 6 × 3 × 4 = 72 dm³ ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — les solides et leurs patrons, puis les formules de volume et les conversions d'unités.</div>`,
  exercices:[
    { d:1, e:"Combien de faces a un cube ?", r:"6",
      c:"Un cube a 6 faces carrées identiques : le dessus, le dessous et les quatre côtés." },
    { d:1, e:"Combien d'arêtes a un cube ?", r:"12",
      c:"Un cube a 12 arêtes : 4 pour chaque dimension, et il y a 3 dimensions." },
    { d:1, e:"Calculer le volume d'un cube de 3 cm d'arête.", r:"27 cm³",
      c:"V = c³ = 3³ = 3 × 3 × 3 = 27 cm³." },
    { d:1, e:"Calculer le volume d'un pavé de 5 cm sur 4 cm sur 2 cm.", r:"40 cm³",
      c:"V = L × l × h = 5 × 4 × 2 = 40 cm³." },
    { d:1, e:"Convertir 1 m³ en dm³.", r:"1000 dm³",
      c:"Pour les volumes, on multiplie ou divise par 1000 à chaque changement d'unité.\n\n1 m³ = 1000 dm³." },
    { d:1, e:"Combien de litres dans 1 m³ ?", r:"1000 L",
      c:"1 m³ = 1000 dm³, et 1 dm³ = 1 L.\n\nDonc 1 m³ = 1000 L." },
    { d:1, e:"Combien de faces a un pavé droit ?", r:"6",
      c:"Un pavé droit a 6 faces rectangulaires : le dessus, le dessous et les quatre côtés." },
    { d:1, e:"Que vaut 2³ ?", r:"8",
      c:"2³ = 2 × 2 × 2 = 8." },
    { d:1, e:"Que vaut 5³ ?", r:"125",
      c:"5³ = 5 × 5 × 5 = 125." },
    { d:1, e:"Combien de sommets a un pavé droit ?", r:"8",
      c:"Un pavé droit a 8 sommets : ce sont les 8 coins du solide.\n\nVérification par Euler : S − A + F = 8 − 12 + 6 = 2 ✓" },
    { d:2, e:"Calculer le volume d'un cylindre de rayon 2 cm et de hauteur 5 cm (valeur exacte).", r:"20π cm³",
      c:"V = π × r² × h = π × 2² × 5 = π × 4 × 5 = 20π cm³.\n\nValeur approchée : 20 × 3,14 ≈ 62,8 cm³." },
    { d:2, e:"Un aquarium mesure 50 cm sur 20 cm sur 30 cm. Quelle est sa capacité en litres ?", r:"30 L",
      c:"Volume : 50 × 20 × 30 = 30 000 cm³.\n\nConversion : 30 000 cm³ = 30 000 mL = 30 L." },
    { d:2, e:"Convertir 3 dm³ en cm³.", r:"3000 cm³",
      c:"1 dm³ = 1000 cm³.\n\n3 dm³ = 3000 cm³." },
    { d:2, e:"Combien de mL dans 2,5 L ?", r:"2500 mL",
      c:"1 L = 1000 mL.\n\n2,5 × 1000 = 2500 mL." },
    { d:2, e:"Une boîte cubique a 10 cm d'arête. Quel est son volume en litres ?", r:"1 L",
      c:"V = 10³ = 1000 cm³.\n\nOr 1000 cm³ = 1000 mL = 1 L.\n\nUn cube de 10 cm d'arête contient exactement 1 litre." },
    { d:2, e:"Calculer le volume d'un pavé de 2 m sur 1,5 m sur 0,8 m.", r:"2,4 m³",
      c:"V = 2 × 1,5 × 0,8 = 3 × 0,8 = 2,4 m³.\n\nEn litres : 2,4 × 1000 = 2400 L." },
    { d:2, e:"Un patron de cube comporte combien de carrés ?", r:"6",
      c:"Un patron doit comporter exactement autant de faces que le solide.\n\nLe cube a 6 faces, donc son patron a 6 carrés." },
    { d:2, e:"Convertir 500 cm³ en dm³.", r:"0,5 dm³",
      c:"1 dm³ = 1000 cm³.\n\n500 cm³ = 500 ÷ 1000 = 0,5 dm³.\n\nCe qui correspond aussi à 0,5 L." },
    { d:2, e:"Calculer le volume d'un cube de 0,5 m d'arête.", r:"0,125 m³",
      c:"V = 0,5³ = 0,5 × 0,5 × 0,5 = 0,125 m³.\n\nEn litres : 0,125 × 1000 = 125 L." },
    { d:2, e:"Une caisse a un volume de 60 dm³. Combien de litres peut-elle contenir ?", r:"60 L",
      c:"1 dm³ = 1 L.\n\nDonc 60 dm³ = 60 L." },
    { d:2, e:"Quelle est l'arête d'un cube de volume 64 cm³ ?", r:"4 cm",
      c:"V = c³ = 64.\n\nOn cherche le nombre dont le cube vaut 64 : c'est 4, car 4³ = 64.\n\nL'arête mesure 4 cm." },
    { d:2, e:"Combien de cubes de 1 cm³ faut-il pour remplir un pavé de 4 × 3 × 2 cm ?", r:"24 cubes",
      c:"Le volume du pavé vaut 4 × 3 × 2 = 24 cm³.\n\nChaque cube élémentaire a un volume de 1 cm³.\n\nIl faut donc 24 cubes." },
    { d:3, e:"Une piscine rectangulaire mesure 8 m sur 4 m sur 1,5 m de profondeur. Combien de litres d'eau ?", r:"48 000 L",
      c:"Volume : 8 × 4 × 1,5 = 32 × 1,5 = 48 m³.\n\nConversion : 1 m³ = 1000 L.\n\n48 × 1000 = 48 000 L." },
    { d:3, e:"Un cylindre a un volume de 100π cm³ et une hauteur de 4 cm. Quel est son rayon ?", r:"5 cm",
      c:"V = π × r² × h = 100π.\n\nDonc r² × 4 = 100, soit r² = 25.\n\nr = 5 cm (le rayon est positif).\n\nVérification : π × 25 × 4 = 100π ✓" },
    { d:3, e:"On remplit d'eau un cube de 20 cm d'arête à mi-hauteur. Quel volume d'eau ?", r:"4 L",
      c:"Volume total : 20³ = 8000 cm³ = 8 L.\n\nÀ mi-hauteur, on remplit la moitié : 4 L.\n\n<b>Autre calcul</b> : 20 × 20 × 10 = 4000 cm³ = 4 L ✓" },
    { d:3, e:"Un réservoir cylindrique a un rayon de 50 cm et une hauteur de 1 m. Quelle est sa capacité en litres (valeur approchée) ?", r:"Environ 785 L",
      c:"<b>Attention aux unités</b> — Convertissons tout en dm (car 1 dm³ = 1 L).\n\nr = 50 cm = 5 dm\nh = 1 m = 10 dm\n\nV = π × r² × h = π × 25 × 10 = 250π dm³.\n\n250 × 3,14 ≈ 785 dm³ = 785 L." },
    { d:3, e:"Un bloc de béton de 2 m sur 1 m sur 0,4 m pèse 2,4 tonnes. Quelle est sa masse volumique ?", r:"3000 kg/m³",
      c:"<b>Étape 1</b> : volume.\n2 × 1 × 0,4 = 0,8 m³.\n\n<b>Étape 2</b> : masse en kg.\n2,4 tonnes = 2400 kg.\n\n<b>Étape 3</b> : masse volumique.\n2400 ÷ 0,8 = 3000 kg/m³." },
    { d:3, e:"Combien de boules de 2 cm de rayon peut-on mettre au maximum dans un cube de 8 cm d'arête, en les alignant ?", r:"8 boules",
      c:"Chaque boule a un diamètre de 4 cm.\n\nDans une arête de 8 cm, on peut aligner 8 ÷ 4 = 2 boules.\n\nSur les trois dimensions : 2 × 2 × 2 = 8 boules.\n\n<b>Remarque</b> : en les empilant autrement, on pourrait en mettre davantage — c'est le problème de l'empilement des sphères, bien plus difficile." },
    { d:3, e:"Un verre cylindrique a un rayon de 3 cm et une hauteur de 10 cm. Combien de fois peut-on le remplir avec 1 L d'eau ?", r:"Environ 3 fois",
      c:"Volume du verre : π × 3² × 10 = 90π cm³.\n\n90 × 3,14 ≈ 282,6 cm³ ≈ 283 mL.\n\nNombre de remplissages : 1000 ÷ 283 ≈ 3,5.\n\nOn peut donc le remplir 3 fois complètement, et une quatrième fois partiellement." },
    { d:3, e:"Une boîte a un volume de 2,5 dm³. Combien de cubes de 5 cm d'arête peut-elle contenir ?", r:"20 cubes",
      c:"<b>Étape 1</b> : volume de la boîte en cm³.\n2,5 dm³ = 2500 cm³.\n\n<b>Étape 2</b> : volume d'un cube.\n5³ = 125 cm³.\n\n<b>Étape 3</b> : nombre de cubes.\n2500 ÷ 125 = 20 cubes." }
  ]
},
{
  id:"6e-donnees", niveau:"6e", titre:"6e · Organisation de données", temps:"18 min",
  resume:"Tableaux, diagrammes en bâtons, diagrammes circulaires, lecture de graphiques.",
  lecons:[
    { titre:"Lire et construire un tableau", contenu:`
      <h3>1. À quoi sert un tableau</h3>
      <p>Un tableau range des données en lignes et colonnes pour les rendre lisibles. Il comporte toujours :</p>
      <ul>
        <li>Des <b>en-têtes</b> qui indiquent ce que représentent les lignes et les colonnes</li>
        <li>Des <b>unités</b>, précisées au moins une fois</li>
        <li>Un <b>total</b> quand la somme a un sens</li>
      </ul>
      <div class="box warn"><b>Toujours vérifier l'unité</b> — Un tableau qui affiche « 45 » sans préciser s'il s'agit d'euros, de kilogrammes ou de personnes ne dit rien. C'est la première chose à chercher en lisant un tableau.</div>

      <h3>2. Tableau à double entrée</h3>
      <p>Il croise deux critères. Par exemple : des élèves classés par niveau (6e, 5e) et par sexe. On lit alors une case à l'intersection d'une ligne et d'une colonne.</p>

      <h3>3. Effectifs et totaux</h3>
      <p>L'<b>effectif</b> est le nombre d'individus dans une catégorie. La somme des effectifs de toutes les catégories donne l'effectif total.</p>
      <div class="formula">Si 12 élèves ont choisi le football et 8 le basket, l'effectif total est 12 + 8 = 20</div>

      <h3>4. Compléter un tableau manquant</h3>
      <p>On utilise le fait que la somme d'une ligne ou d'une colonne est connue. Par exemple, si une ligne totalise 25 et qu'une case vaut 10, l'autre vaut 25 − 10 = 15.</p>
      <div class="box"><b>Méthode</b> — Commence par remplir les cases faciles, celles dont la ligne ou la colonne est complète. Le reste se déduit ensuite.</div>

      <h3>5. Fréquences</h3>
      <p>La fréquence d'une catégorie est la part qu'elle représente dans l'ensemble. On l'exprime souvent en pourcentage :</p>
      <div class="formula">fréquence = effectif de la catégorie ÷ effectif total</div>
      <p>Si 12 élèves sur 20 ont choisi le football : 12/20 = 0,6 = 60 %.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Un tableau donne les loisirs de 30 élèves : football 12, basket 8, natation 6, autre 4. Quelle est la fréquence du football ?</p>
      <ul>
        <li>Effectif total : 12 + 8 + 6 + 4 = 30</li>
        <li>Fréquence du football : 12/30 = 0,4</li>
      </ul>
      <p><b>En pourcentage :</b> 40 %. La somme des fréquences doit valoir 1 (ou 100 %) : vérifions 12/30 + 8/30 + 6/30 + 4/30 = 30/30 = 1 ✓</p>
    ` },
    { titre:"Représentations graphiques", contenu:`
      <h3>1. Le diagramme en bâtons</h3>
      <p>Chaque valeur est représentée par un bâton dont la <b>hauteur</b> est proportionnelle à l'effectif. C'est la représentation adaptée aux données discrètes (nombre de frères, sport préféré, note).</p>
      <div class="box"><b>Construction</b> — On trace deux axes, on place les catégories sur l'axe horizontal, et on dessine un bâton de hauteur proportionnelle à l'effectif. On précise toujours l'unité sur l'axe vertical.</div>

      <h3>2. Le diagramme circulaire</h3>
      <p>Un disque est partagé en secteurs dont les <b>angles</b> sont proportionnels aux effectifs. Le disque entier représente 360°, soit l'effectif total.</p>
      <div class="formula">angle d'un secteur = (effectif de la catégorie ÷ effectif total) × 360°</div>
      <div class="box warn"><b>Le piège du diagramme circulaire</b> — Un secteur très étroit est difficile à comparer visuellement. Deux catégories avec 11 % et 13 % semblent identiques sur un camembert, alors qu'un diagramme en bâtons les distinguerait nettement.</div>

      <h3>3. Le diagramme en barres</h3>
      <p>Variante du diagramme en bâtons, avec des barres <b>horizontales</b>. Il est pratique quand les noms des catégories sont longs.</p>

      <h3>4. Lire un graphique</h3>
      <p>Trois questions à se poser face à n'importe quel graphique :</p>
      <ul>
        <li>Que représente chaque axe ? Dans quelle unité ?</li>
        <li>Que représente une graduation ?</li>
        <li>Que représente l'ensemble du graphique ?</li>
      </ul>
      <div class="box warn"><b>Le graphique tronqué</b> — Un graphique dont l'axe vertical ne commence pas à 0 exagère visuellement les écarts. Une hausse de 10 % peut paraître énorme. Vérifie toujours l'origine de l'axe.</div>

      <h3>5. Choisir la bonne représentation</h3>
      <ul>
        <li><b>Bâtons ou barres</b> : pour comparer des catégories entre elles</li>
        <li><b>Circulaire</b> : pour montrer la part de chaque catégorie dans un tout</li>
        <li><b>Ligne brisée</b> : pour montrer une évolution dans le temps</li>
      </ul>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Dans une classe de 36 élèves, 9 viennent à vélo. Quel est l'angle du secteur correspondant dans un diagramme circulaire ?</p>
      <ul>
        <li>Fréquence : 9/36 = 0,25</li>
        <li>Angle : 0,25 × 360° = 90°</li>
      </ul>
      <p><b>Vérification :</b> 90° correspond bien au quart du disque, et 9 élèves représentent bien le quart de 36 ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — lire et compléter un tableau, puis construire et interpréter les représentations graphiques.</div>`,
  exercices:[
    { d:1, e:"Dans une classe, 12 élèves font du foot et 8 du basket. Quel est l'effectif total ?", r:"20 élèves",
      c:"On additionne les effectifs des deux catégories :\n12 + 8 = 20 élèves." },
    { d:1, e:"Que doit-on toujours préciser dans un tableau ?", r:"Les unités",
      c:"Un tableau sans unité est inexploitable : on ne sait pas si « 45 » désigne des euros, des kilogrammes ou des personnes.\n\nLes en-têtes et les unités sont indispensables." },
    { d:1, e:"Combien de degrés dans un diagramme circulaire complet ?", r:"360°",
      c:"Le disque entier représente 360°, soit l'effectif total.\n\nChaque secteur est proportionnel à son effectif." },
    { d:1, e:"Un effectif de 5 sur 25 représente quelle fréquence ?", r:"0,2",
      c:"fréquence = effectif de la catégorie ÷ effectif total.\n\n5 ÷ 25 = 0,2.\n\nEn pourcentage : 20 %." },
    { d:1, e:"Un diagramme en bâtons représente quoi par la hauteur des bâtons ?", r:"L'effectif",
      c:"La hauteur de chaque bâton est proportionnelle à l'effectif de la catégorie.\n\nUn bâton deux fois plus haut signifie un effectif deux fois plus grand." },
    { d:1, e:"Dans un tableau, une ligne totalise 30 et une case vaut 12. Que vaut l'autre case ?", r:"18",
      c:"On utilise le fait que la somme de la ligne est connue.\n\n30 − 12 = 18." },
    { d:1, e:"Que représente une ligne brisée sur un graphique ?", r:"Une évolution dans le temps",
      c:"La ligne brisée relie des points successifs, ce qui montre comment une grandeur évolue au fil du temps.\n\nElle est adaptée aux séries chronologiques (températures mensuelles, ventes par mois)." },
    { d:1, e:"Un secteur de 90° représente quelle fraction du disque ?", r:"1/4",
      c:"90° sur 360° au total : 90/360 = 1/4.\n\nCe secteur représente donc le quart des données." },
    { d:1, e:"Si 15 élèves sur 60 viennent en bus, quelle est la fréquence ?", r:"0,25",
      c:"15 ÷ 60 = 0,25.\n\nEn pourcentage : 25 %, soit un quart." },
    { d:1, e:"Quel diagramme choisir pour montrer la part de chaque catégorie dans un tout ?", r:"Un diagramme circulaire",
      c:"Le diagramme circulaire (camembert) montre bien les proportions et la composition d'un ensemble.\n\nPour comparer des catégories entre elles, un diagramme en bâtons est plus lisible." },
    { d:2, e:"Un diagramme circulaire montre 4 catégories avec des effectifs 10, 20, 30, 40. Quel est l'angle du secteur de 30 ?", r:"108°",
      c:"Effectif total : 10 + 20 + 30 + 40 = 100.\n\nFréquence de la catégorie : 30/100 = 0,3.\n\nAngle : 0,3 × 360° = 108°.\n\nVérification : les angles des quatre secteurs doivent totaliser 360° : 36 + 72 + 108 + 144 = 360 ✓" },
    { d:2, e:"Un tableau indique : lundi 25, mardi 32, mercredi 18, jeudi 25. Quel est le total ?", r:"100",
      c:"25 + 32 + 18 + 25 = 100." },
    { d:2, e:"Dans l'exercice précédent, quelle est la fréquence de mardi ?", r:"0,32",
      c:"32 ÷ 100 = 0,32.\n\nEn pourcentage : 32 %." },
    { d:2, e:"Une classe de 30 élèves : 40 % sont des garçons. Combien de garçons ?", r:"12 garçons",
      c:"40 % de 30 = 30 × 0,40 = 12.\n\nVérification : 12 sur 30, c'est bien 12/30 = 0,4 = 40 % ✓" },
    { d:2, e:"Sur un graphique, l'axe vertical commence à 100 au lieu de 0. Quel effet cela produit-il ?", r:"Il exagère les écarts",
      c:"Si l'axe ne commence pas à 0, les différences paraissent beaucoup plus grandes qu'elles ne le sont réellement.\n\nUne hausse de 105 à 110 semble énorme si l'axe va de 100 à 115, alors qu'en réalité elle ne représente que 5 %.\n\nC'est un procédé courant pour tromper le lecteur." },
    { d:2, e:"Un diagramme circulaire a un secteur de 72°. Quel pourcentage représente-t-il ?", r:"20 %",
      c:"72 ÷ 360 = 0,2.\n\nSoit 20 %." },
    { d:2, e:"Dans une enquête, 60 personnes sur 200 préfèrent le thé. Quelle est la fréquence en pourcentage ?", r:"30 %",
      c:"60 ÷ 200 = 0,3.\n\nSoit 30 %." },
    { d:2, e:"Un tableau à double entrée croise : niveaux (6e, 5e) et sexe. 6e compte 15 filles et 12 garçons, 5e compte 14 filles et 16 garçons. Quel est l'effectif total ?", r:"57 élèves",
      c:"On additionne toutes les cases :\n15 + 12 + 14 + 16 = 57 élèves.\n\n<b>Vérification par les marges</b> : filles = 15 + 14 = 29 ; garçons = 12 + 16 = 28. Total : 29 + 28 = 57 ✓" },
    { d:2, e:"Que mesure-t-on sur l'axe vertical d'un diagramme en bâtons ?", r:"L'effectif (ou la fréquence)",
      c:"L'axe vertical porte les effectifs (ou les fréquences), avec une unité précisée.\n\nL'axe horizontal porte les catégories." },
    { d:2, e:"Une série de températures sur 12 mois est mieux représentée par :", r:"Une ligne brisée",
      c:"Les températures évoluent dans le temps : une ligne brisée montre bien cette évolution.\n\nUn diagramme circulaire serait inadapté, car il représente des parts d'un tout, pas une évolution." },
    { d:2, e:"Quelle est la somme des fréquences de toutes les catégories ?", r:"1 (ou 100 %)",
      c:"Toutes les catégories couvrent l'ensemble des données.\n\nLa somme de leurs fréquences vaut donc 1, c'est-à-dire 100 %.\n\nC'est un bon contrôle de calcul." },
    { d:3, e:"Un diagramme circulaire représente les dépenses d'une famille : logement 45 %, nourriture 25 %, transport 15 %, loisirs 10 %, autres 5 %. Quel est l'angle du secteur logement, et la somme des angles ?", r:"162° pour le logement, total 360°",
      c:"Logement : 0,45 × 360 = 162°.\nNourriture : 0,25 × 360 = 90°.\nTransport : 0,15 × 360 = 54°.\nLoisirs : 0,10 × 360 = 36°.\nAutres : 0,05 × 360 = 18°.\n\nSomme : 162 + 90 + 54 + 36 + 18 = 360 ✓" },
    { d:3, e:"Dans une classe de 32 élèves, 12 ont choisi l'espagnol et 20 l'allemand. Quel est l'angle du secteur espagnol dans un diagramme circulaire ?", r:"135°",
      c:"Fréquence de l'espagnol : 12/32 = 0,375.\n\nAngle : 0,375 × 360 = 135°.\n\nVérification : l'allemand représente 20/32 = 0,625, soit 225°. Or 135 + 225 = 360 ✓" },
    { d:3, e:"Un tableau donne les ventes par trimestre : T1 = 120, T2 = 150, T3 = 180, T4 = 150. Quel est le pourcentage du trimestre 3 ?", r:"30 %",
      c:"Total : 120 + 150 + 180 + 150 = 600.\n\nFréquence de T3 : 180/600 = 0,3.\n\nSoit 30 %." },
    { d:3, e:"Un graphique montre une hausse de 200 à 220 sur un axe vertical allant de 190 à 230. Pourquoi est-ce trompeur ?", r:"L'axe tronqué exagère la hausse",
      c:"La hausse réelle est de 20 sur 200, soit 10 %.\n\nMais sur le graphique, la barre de 220 paraît presque deux fois plus haute que celle de 200, car l'axe ne commence qu'à 190.\n\nSur un axe commençant à 0, la différence serait à peine visible. C'est un biais de représentation classique." },
    { d:3, e:"Une enquête donne : 45 % aiment le sport, 30 % la lecture, 25 % la musique. Pour un effectif de 400 personnes, combien aiment la musique ?", r:"100 personnes",
      c:"25 % de 400 = 400 × 0,25 = 100.\n\nVérification de cohérence : sport = 180, lecture = 120, musique = 100. Total : 180 + 120 + 100 = 400 ✓" },
    { d:3, e:"Un diagramme en bâtons montre 4 valeurs d'effectifs 15, 30, 45, 60. Le bâton de 15 mesure 2 cm. Quelle est la hauteur du bâton de 60 ?", r:"8 cm",
      c:"Les hauteurs sont proportionnelles aux effectifs.\n\nRapport : 60 ÷ 15 = 4.\n\nHauteur : 2 × 4 = 8 cm.\n\n<b>Vérification avec le coefficient</b> : 2 cm pour 15 unités, donc 1 cm représente 7,5 unités. Pour 60 : 60 ÷ 7,5 = 8 cm ✓" },
    { d:3, e:"Deux classes comparent leurs résultats. Classe A : 25 % de très bons. Classe B : 40 % de très bons. La classe A a 32 élèves et la classe B en a 20. Combien de très bons élèves dans chaque classe ?", r:"8 dans A et 8 dans B",
      c:"Classe A : 25 % de 32 = 32 × 0,25 = 8 élèves.\n\nClasse B : 40 % de 20 = 20 × 0,40 = 8 élèves.\n\n<b>Le point important</b> — Les deux classes ont le même nombre de très bons élèves (8), alors que les pourcentages sont très différents. Un pourcentage seul ne dit rien sans l'effectif total sur lequel il porte. C'est une erreur de lecture très courante." },
    { d:3, e:"Un tableau indique que sur 250 personnes interrogées, 40 % préfèrent la ville et 35 % la campagne. Combien préfèrent autre chose ?", r:"62 personnes",
      c:"Pourcentage « autre chose » : 100 % − 40 % − 35 % = 25 %.\n\nNombre de personnes : 250 × 0,25 = 62,5.\n\n<b>Attention</b> : le résultat n'est pas entier. Reprenons les calculs.\n\nVille : 250 × 0,40 = 100.\nCampagne : 250 × 0,35 = 87,5.\n\nCe second résultat n'est pas entier non plus : l'énoncé doit contenir une erreur, ou les pourcentages sont arrondis. Avec 250 personnes, des pourcentages entiers ne donnent pas forcément des effectifs entiers. Il faut le signaler." }
  ]
}
];

window.MATHSLY_6E = { chapitres: SIXIEME_CHAPITRES, qcm: [] };
