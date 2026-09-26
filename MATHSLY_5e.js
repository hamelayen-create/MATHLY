/* =========================================================
   MATHSLY — Contenu de la classe de Cinquième (cycle 4)
   Chapitres : nombres relatifs · fractions · puissances ·
               calcul littéral · triangles · parallélogrammes · statistiques
   ========================================================= */
const CINQUIEME_CHAPITRES = [
{
  id:"5e-relatifs", niveau:"5e", titre:"5e · Nombres relatifs", temps:"20 min",
  resume:"Addition, soustraction, repérage, comparaison des nombres négatifs.",
  lecons:[
    { titre:"Repérer et comparer", contenu:`
      <h3>1. Qu'est-ce qu'un nombre relatif</h3>
      <p>Un nombre relatif porte un <b>signe</b> : positif (+) ou négatif (−). Il sert à représenter des grandeurs qui peuvent aller dans les deux sens : température, altitude, solde bancaire, étage d'un immeuble.</p>
      <p>Sur une droite graduée, les positifs sont à droite de 0 et les négatifs à gauche. La <b>distance à zéro</b> s'appelle la valeur absolue : |−7| = 7.</p>

      <h3>2. Comparer deux relatifs</h3>
      <p>Sur une droite graduée, le plus grand est toujours <b>le plus à droite</b>.</p>
      <div class="formula">−7 &lt; −3        et        −1 &lt; 0</div>
      <div class="box warn"><b>Erreur classique</b> — Croire que −7 &gt; −3 « parce que 7 &gt; 3 ». Non : plus un négatif est grand en valeur absolue, plus il est petit. Repère-le sur une droite graduée, tu verras immédiatement.</div>

      <h3>3. Repérage dans le plan</h3>
      <p>Un point du plan est repéré par deux coordonnées : <b>l'abscisse</b> (horizontale, d'abord) puis <b>l'ordonnée</b> (verticale, ensuite). On note A(x ; y).</p>
      <div class="box"><b>L'ordre compte</b> — A(3 ; −2) et B(−2 ; 3) sont deux points différents. On donne toujours l'abscisse en premier.</div>

      <h3>4. Opposé d'un nombre</h3>
      <p>L'opposé de a est −a. Deux nombres opposés ont la même distance à zéro mais des signes contraires.</p>
      <div class="formula">L'opposé de 5 est −5
L'opposé de −3 est 3
L'opposé de 0 est 0</div>

      <h3>5. Comparer une série de relatifs</h3>
      <p>Pour ranger des nombres relatifs dans l'ordre croissant, place-les mentalement sur une droite graduée, du plus à gauche au plus à droite.</p>
      <div class="formula">−8 &lt; −3 &lt; −0,5 &lt; 0 &lt; 2 &lt; 7</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Ranger dans l'ordre croissant : −4 ; 2 ; −7 ; 0 ; −1.</p>
      <ul>
        <li>Les négatifs d'abord, du plus petit au plus grand : −7 &lt; −4 &lt; −1</li>
        <li>Puis 0, puis les positifs : 0 &lt; 2</li>
      </ul>
      <p><b>Résultat :</b> −7 &lt; −4 &lt; −1 &lt; 0 &lt; 2.</p>
    ` },
    { titre:"Addition et soustraction", contenu:`
      <h3>1. Additionner deux relatifs</h3>
      <p>Deux cas seulement, à distinguer par les signes :</p>
      <ul>
        <li><b>Mêmes signes</b> : on additionne les distances à zéro et on garde le signe commun</li>
        <li><b>Signes contraires</b> : on soustrait les distances à zéro et on garde le signe du plus « fort »</li>
      </ul>
      <div class="formula">(−8) + (−5) = −13
(−8) + (+5) = −3
(−8) + (+11) = +3</div>

      <h3>2. Soustraire, c'est ajouter l'opposé</h3>
      <p>C'est la règle qui évite la moitié des erreurs de signe :</p>
      <div class="formula">a − b = a + (−b)</div>
      <p>Exemple : (−4) − (−9) = (−4) + (+9) = +5.</p>
      <div class="box"><b>Astuce mentale</b> — Moins par moins donne plus. Deux signes qui se suivent se combinent : −(−9) devient +9.</div>

      <h3>3. Somme algébrique</h3>
      <p>Quand il y a plusieurs termes, on peut tout écrire en ligne et regrouper les positifs d'un côté, les négatifs de l'autre :</p>
      <div class="formula">(−3) + (+7) + (−5) + (+2) = (7 + 2) − (3 + 5) = 9 − 8 = +1</div>

      <h3>4. Distance entre deux points</h3>
      <p>La distance entre deux points d'abscisses a et b vaut |a − b|.</p>
      <div class="formula">Distance entre −3 et 5 : |5 − (−3)| = |8| = 8</div>
      <div class="box"><b>Vérification</b> — Compte les graduations sur une droite entre −3 et 5 : tu en trouves bien 8.</div>

      <h3>5. Suites d'opérations</h3>
      <p>On effectue les calculs de gauche à droite quand il n'y a que des additions et soustractions, ou on regroupe astucieusement.</p>
      <div class="formula">5 − 12 + 8 − 3 = (5 + 8) − (12 + 3) = 13 − 15 = −2</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Calculer A = (−12) − (−5) + (−3) − (+7).</p>
      <ul>
        <li>On transforme les soustractions : −(−5) = +5 et −(+7) = −7</li>
        <li>A = (−12) + 5 + (−3) + (−7)</li>
        <li>Positifs : 5. Négatifs : −12 − 3 − 7 = −22</li>
        <li>A = 5 − 22 = −17</li>
      </ul>
      <p><b>Vérification de cohérence :</b> le résultat est fortement négatif, ce qui est logique — trois termes négatifs contre un seul positif.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — repérer et comparer les relatifs, puis les additionner et les soustraire. La droite graduée est ton meilleur outil de vérification.</div>`,
  exercices:[
    { d:1, e:"Quel est l'opposé de −7 ?", r:"7",
      c:"L'opposé de a est −a.\n\nL'opposé de −7 est donc −(−7) = 7." },
    { d:1, e:"Comparer −5 et −2.", r:"−5 < −2",
      c:"Sur une droite graduée, −5 est plus à gauche que −2.\n\nDonc −5 est plus petit : −5 &lt; −2.\n\nC'est le piège classique : 5 &gt; 2, mais −5 &lt; −2." },
    { d:1, e:"Calculer (−3) + (−6).", r:"−9",
      c:"Mêmes signes : on additionne les distances à zéro (3 + 6 = 9) et on garde le signe commun, le négatif.\n\nRésultat : −9." },
    { d:1, e:"Calculer (−8) + (+3).", r:"−5",
      c:"Signes contraires : on soustrait les distances à zéro (8 − 3 = 5) et on garde le signe du plus fort, ici le négatif.\n\nRésultat : −5." },
    { d:1, e:"Calculer 5 − 9.", r:"−4",
      c:"5 − 9 = 5 + (−9).\n\nSignes contraires : 9 − 5 = 4, et le signe du plus fort est négatif.\n\nRésultat : −4." },
    { d:1, e:"Calculer (−4) − (−6).", r:"2",
      c:"On transforme : (−4) − (−6) = (−4) + (+6).\n\nSignes contraires : 6 − 4 = 2, signe du plus fort positif.\n\nRésultat : 2." },
    { d:1, e:"Quel est l'opposé de 0 ?", r:"0",
      c:"L'opposé de 0 est 0 : c'est le seul nombre égal à son propre opposé.\n\nIl n'est ni positif ni négatif." },
    { d:1, e:"Que vaut |−12| ?", r:"12",
      c:"La valeur absolue est la distance à zéro, donc toujours positive.\n\n|−12| = 12." },
    { d:1, e:"Ranger dans l'ordre croissant : −2 ; 3 ; −5.", r:"−5 < −2 < 3",
      c:"Les négatifs d'abord, du plus petit au plus grand : −5 &lt; −2.\n\nPuis les positifs : 3.\n\nOrdre : −5 &lt; −2 &lt; 3." },
    { d:1, e:"Quelles sont les coordonnées du point A placé 3 unités à droite et 2 unités en bas de l'origine ?", r:"A(3 ; −2)",
      c:"L'abscisse est le déplacement horizontal : 3.\nL'ordonnée est le déplacement vertical : −2 (vers le bas).\n\nA(3 ; −2)." },
    { d:2, e:"Calculer (−7) + (−4) + (+10).", r:"−1",
      c:"On regroupe : négatifs −7 − 4 = −11, positifs +10.\n\n−11 + 10 = −1." },
    { d:2, e:"Calculer 12 − 15 + 3 − 8.", r:"−8",
      c:"Positifs : 12 + 3 = 15.\nNégatifs : −15 − 8 = −23.\n\nTotal : 15 − 23 = −8." },
    { d:2, e:"Quelle est la distance entre −7 et 3 sur une droite graduée ?", r:"10",
      c:"distance = |3 − (−7)| = |10| = 10.\n\nVérification en comptant : de −7 à 0 on a 7 unités, de 0 à 3 on a 3 unités. Total 10 ✓" },
    { d:2, e:"Un plongeur descend de 15 m puis remonte de 8 m. À quelle profondeur se trouve-t-il ?", r:"−7 m",
      c:"On modélise : −15 + 8 = −7.\n\nIl se trouve à 7 m sous la surface, soit à l'altitude −7 m." },
    { d:2, e:"Calculer (−2,5) + (−1,5).", r:"−4",
      c:"Mêmes signes : 2,5 + 1,5 = 4, et on garde le signe négatif.\n\nRésultat : −4." },
    { d:2, e:"Calculer 3 − (−7) + (−2).", r:"8",
      c:"On transforme : 3 + 7 + (−2).\n\n3 + 7 = 10, puis 10 − 2 = 8.\n\nRésultat : 8." },
    { d:2, e:"Un solde bancaire est de −45 €. On effectue un virement de 120 €. Quel est le nouveau solde ?", r:"75 €",
      c:"Nouveau solde : −45 + 120 = 75 €.\n\nLe compte est de nouveau positif." },
    { d:2, e:"Calculer (−6) × (−3).", r:"18",
      c:"<b>Règle des signes pour la multiplication</b> : moins par moins donne plus.\n\nDonc (−6) × (−3) = +18." },
    { d:2, e:"Calculer (−5) × 4.", r:"−20",
      c:"Un facteur négatif : le produit est négatif.\n\n(−5) × 4 = −20." },
    { d:2, e:"La température était de −3 °C le matin et a augmenté de 11 °C. Quelle est la température maintenant ?", r:"8 °C",
      c:"−3 + 11 = 8.\n\nLa température est de 8 °C." },
    { d:2, e:"Calculer −8 + 3 − 5 + 12.", r:"2",
      c:"Positifs : 3 + 12 = 15.\nNégatifs : −8 − 5 = −13.\n\nTotal : 15 − 13 = 2." },
    { d:2, e:"Un ascenseur part du 3e sous-sol et monte de 7 étages. Où arrive-t-il ?", r:"4e étage",
      c:"Le 3e sous-sol correspond à l'étage −3.\n\n−3 + 7 = 4.\n\nL'ascenseur arrive au 4e étage." },
    { d:3, e:"Calculer A = (−7) + 12 − (−5) − 8 + (−3).", r:"−1",
      c:"On transforme les soustractions :\nA = (−7) + 12 + 5 + (−8) + (−3).\n\nPositifs : 12 + 5 = 17.\nNégatifs : −7 − 8 − 3 = −18.\n\nA = 17 − 18 = −1." },
    { d:3, e:"Un sous-marin est à −250 m. Il remonte de 80 m, puis descend de 120 m. Où se trouve-t-il ?", r:"−290 m",
      c:"−250 + 80 = −170.\n\nPuis −170 − 120 = −290.\n\nLe sous-marin se trouve à 290 m de profondeur." },
    { d:3, e:"Calculer la somme de tous les entiers relatifs de −5 à 5.", r:"0",
      c:"La somme vaut :\n(−5) + (−4) + (−3) + (−2) + (−1) + 0 + 1 + 2 + 3 + 4 + 5.\n\nLes opposés s'annulent deux à deux : (−5) + 5 = 0, (−4) + 4 = 0, etc.\n\nIl ne reste que 0. La somme vaut 0." },
    { d:3, e:"Un jeu donne +5 points pour une bonne réponse et −2 points pour une erreur. Un joueur a 7 bonnes réponses et 4 erreurs. Quel est son score ?", r:"27 points",
      c:"Bonnes réponses : 7 × 5 = 35 points.\nErreurs : 4 × (−2) = −8 points.\n\nScore : 35 − 8 = 27 points." },
    { d:3, e:"Vérifier que (−8) − (−3) ≠ −8 − 3.", r:"(−8) − (−3) = −5 et −8 − 3 = −11",
      c:"Premier calcul : (−8) − (−3) = (−8) + 3 = −5.\n\nSecond calcul : −8 − 3 = −11.\n\nLes deux résultats diffèrent : −5 ≠ −11.\n\n<b>Leçon</b> — Un signe moins devant une parenthèse change le signe de ce qui est à l'intérieur. C'est la source d'erreur la plus fréquente du chapitre." },
    { d:3, e:"Calculer (−3)² et −3².", r:"9 et −9",
      c:"(−3)² : le carré s'applique à (−3), donc (−3) × (−3) = +9.\n\n−3² : le carré s'applique à 3 seulement, puis on applique le signe moins. Donc −(3 × 3) = −9.\n\n<b>La différence</b> — Les parenthèses changent tout. (−3)² = 9 mais −3² = −9. C'est une distinction essentielle." },
    { d:3, e:"Un thermomètre indique −7 °C à 6 h. La température monte de 3 °C par heure pendant 5 heures. Quelle est la température à 11 h ?", r:"8 °C",
      c:"Hausse totale : 3 × 5 = 15 °C.\n\nTempérature finale : −7 + 15 = 8 °C." },
    { d:3, e:"Trouver deux entiers relatifs consécutifs dont la somme vaut −15.", r:"−8 et −7",
      c:"Soit n et n+1 les deux entiers consécutifs.\n\nn + (n+1) = −15\n2n + 1 = −15\n2n = −16\nn = −8.\n\nLes deux entiers sont −8 et −7.\n\nVérification : −8 + (−7) = −15 ✓" },
    { d:3, e:"Calculer (−2)³.", r:"−8",
      c:"(−2)³ = (−2) × (−2) × (−2).\n\n(−2) × (−2) = 4, puis 4 × (−2) = −8.\n\n<b>Règle</b> — Une puissance impaire d'un nombre négatif est négative ; une puissance paire est positive." },
    { d:3, e:"Un compte passe de −120 € à +35 €. De combien a-t-il varié ?", r:"+155 €",
      c:"Variation : 35 − (−120) = 35 + 120 = 155 €.\n\nLe compte a augmenté de 155 €.\n\n<b>Vérification</b> : −120 + 155 = 35 ✓" }
  ]
},
{
  id:"5e-fractions", niveau:"5e", titre:"5e · Opérations sur les fractions", temps:"20 min",
  resume:"Addition, soustraction, multiplication de fractions, simplification.",
  lecons:[
    { titre:"Additionner et soustraire", contenu:`
      <h3>1. Le principe : même dénominateur</h3>
      <p>Pour additionner ou soustraire des fractions, il faut d'abord qu'elles aient <b>le même dénominateur</b>.</p>
      <div class="formula">a/c + b/c = (a + b)/c</div>
      <p>Quand les dénominateurs diffèrent, on cherche un dénominateur commun.</p>

      <h3>2. Chercher un dénominateur commun</h3>
      <p>La méthode la plus simple : multiplier les deux dénominateurs. Mais c'est souvent lourd. Mieux vaut chercher le <b>plus petit multiple commun</b>.</p>
      <div class="formula">1/4 + 1/6 : le plus petit commun multiple de 4 et 6 est 12
1/4 = 3/12 et 1/6 = 2/12
Donc 1/4 + 1/6 = 5/12</div>

      <h3>3. Un cas particulier : un dénominateur multiple de l'autre</h3>
      <p>C'est le cas le plus fréquent en exercice. On ne convertit qu'une seule fraction.</p>
      <div class="formula">2/3 + 1/6 : 6 est multiple de 3
2/3 = 4/6
Donc 4/6 + 1/6 = 5/6</div>
      <div class="box"><b>Le réflexe à avoir</b> — Avant de multiplier les dénominateurs, vérifie si l'un est multiple de l'autre. Tu gagneras du temps et éviteras les grands nombres.</div>

      <h3>4. L'erreur à ne jamais commettre</h3>
      <div class="box warn"><b>Non !</b> — 1/2 + 1/3 n'est pas 2/5. On n'additionne jamais les numérateurs entre eux et les dénominateurs entre eux. La bonne réponse est 5/6.</div>
      <p>Pour t'en convaincre : 1/2 = 0,5 et 1/3 ≈ 0,333, leur somme vaut 0,833. Or 2/5 = 0,4. C'est très différent.</p>

      <h3>5. Soustraire</h3>
      <p>La méthode est identique, avec une soustraction au numérateur.</p>
      <div class="formula">3/4 − 1/3 : dénominateur commun 12
3/4 = 9/12 et 1/3 = 4/12
Donc 9/12 − 4/12 = 5/12</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Calculer 5/6 + 3/8.</p>
      <ul>
        <li>Le plus petit multiple commun de 6 et 8 est 24</li>
        <li>5/6 = 20/24 (on multiplie haut et bas par 4)</li>
        <li>3/8 = 9/24 (on multiplie haut et bas par 3)</li>
        <li>Somme : 20/24 + 9/24 = 29/24</li>
      </ul>
      <p><b>Remarque :</b> le résultat est supérieur à 1, ce qui est normal puisque 5/6 + 3/8 ≈ 0,833 + 0,375 = 1,208.</p>
    ` },
    { titre:"Multiplier des fractions", contenu:`
      <h3>1. La règle de multiplication</h3>
      <p>C'est la plus simple : on multiplie les numérateurs entre eux et les dénominateurs entre eux. Pas besoin de dénominateur commun !</p>
      <div class="formula">a/b × c/d = (a × c)/(b × d)</div>
      <div class="formula">2/3 × 4/5 = 8/15</div>

      <h3>2. Simplifier avant de multiplier</h3>
      <p>C'est l'astuce la plus utile : on simplifie les facteurs communs <b>avant</b> d'effectuer le produit, ce qui évite les grands nombres.</p>
      <div class="formula">4/9 × 3/8 : on simplifie 4 avec 8 (÷4) et 3 avec 9 (÷3)
= 1/3 × 1/2 = 1/6</div>
      <div class="box"><b>Pourquoi ça marche</b> — Simplifier avant ou après donne le même résultat, mais les calculs sont beaucoup plus légers. Prends-en l'habitude.</div>

      <h3>3. Fraction d'une fraction</h3>
      <p>« Les 2/3 des 3/4 » se traduit par une multiplication :</p>
      <div class="formula">2/3 × 3/4 = 6/12 = 1/2</div>
      <p>Le mot « de » après une fraction signifie presque toujours « multiplié par ».</p>

      <h3>4. Diviser par une fraction</h3>
      <p>Diviser, c'est multiplier par l'inverse :</p>
      <div class="formula">(a/b) ÷ (c/d) = (a/b) × (d/c) = (a × d)/(b × c)</div>
      <div class="formula">(3/4) ÷ (2/5) = 3/4 × 5/2 = 15/8</div>
      <div class="box warn"><b>Attention à l'inverse</b> — L'inverse de 2/5 est 5/2. On retourne la fraction : le dénominateur devient le numérateur. Ne pas confondre avec l'opposé, qui est −2/5.</div>

      <h3>5. Puissance d'une fraction</h3>
      <div class="formula">(a/b)ⁿ = aⁿ/bⁿ</div>
      <div class="formula">(2/3)³ = 8/27</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Calculer A = 3/5 × 10/9.</p>
      <ul>
        <li>Avant de multiplier, on simplifie : 10 et 5 se simplifient par 5 (10/5 = 2 et 5/5 = 1)</li>
        <li>Reste 3/1 × 2/9</li>
        <li>On simplifie encore 3 et 9 par 3 : 1/1 × 2/3</li>
        <li>Résultat : 2/3</li>
      </ul>
      <p><b>Vérification sans simplifier :</b> (3 × 10)/(5 × 9) = 30/45 = 2/3 ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — addition et soustraction (avec dénominateur commun), puis multiplication et division (plus simples).</div>`,
  exercices:[
    { d:1, e:"Calculer 1/4 + 1/4.", r:"1/2",
      c:"Même dénominateur : on additionne les numérateurs.\n\n1/4 + 1/4 = 2/4 = 1/2 (après simplification)." },
    { d:1, e:"Calculer 2/7 + 3/7.", r:"5/7",
      c:"Même dénominateur : 2 + 3 = 5.\n\nRésultat : 5/7." },
    { d:1, e:"Calculer 2/3 × 5/7.", r:"10/21",
      c:"Multiplication : on multiplie les numérateurs entre eux et les dénominateurs entre eux.\n\n(2 × 5)/(3 × 7) = 10/21." },
    { d:1, e:"Calculer 1/2 × 4/5.", r:"2/5",
      c:"(1 × 4)/(2 × 5) = 4/10.\n\nOn simplifie par 2 : 4/10 = 2/5." },
    { d:1, e:"Que vaut l'inverse de 3/4 ?", r:"4/3",
      c:"L'inverse de a/b est b/a : on retourne la fraction.\n\nL'inverse de 3/4 est 4/3." },
    { d:1, e:"Calculer 1/3 + 1/6.", r:"1/2",
      c:"6 est multiple de 3, donc on convertit seulement la première :\n\n1/3 = 2/6.\n\nPuis 2/6 + 1/6 = 3/6 = 1/2." },
    { d:1, e:"Calculer 3/4 − 1/4.", r:"1/2",
      c:"Même dénominateur : 3 − 1 = 2.\n\nRésultat : 2/4 = 1/2." },
    { d:1, e:"Calculer 5/8 × 8/5.", r:"1",
      c:"(5 × 8)/(8 × 5) = 40/40 = 1.\n\n<b>Remarque</b> — Multiplier une fraction par son inverse donne toujours 1. C'est la définition de l'inverse." },
    { d:1, e:"Calculer (1/2)³.", r:"1/8",
      c:"(1/2)³ = 1³/2³ = 1/8.\n\nVérification : 1/2 × 1/2 × 1/2 = 1/8 ✓" },
    { d:1, e:"Calculer 2/9 + 4/9.", r:"2/3",
      c:"Même dénominateur : 2 + 4 = 6.\n\nRésultat : 6/9.\n\nOn simplifie par 3 : 6/9 = 2/3." },
    { d:2, e:"Calculer 1/2 + 1/3.", r:"5/6",
      c:"Dénominateur commun : 6.\n\n1/2 = 3/6 et 1/3 = 2/6.\n\nSomme : 3/6 + 2/6 = 5/6.\n\n<b>Rappel</b> — Ce n'est pas 2/5 ! On n'additionne jamais les dénominateurs." },
    { d:2, e:"Calculer 3/4 + 2/5.", r:"23/20",
      c:"Dénominateur commun : 20.\n\n3/4 = 15/20 et 2/5 = 8/20.\n\nSomme : 15/20 + 8/20 = 23/20.\n\nLe résultat dépasse 1, ce qui est normal (0,75 + 0,4 = 1,15)." },
    { d:2, e:"Calculer 5/6 − 1/3.", r:"1/2",
      c:"6 est multiple de 3.\n\n1/3 = 2/6.\n\nDifférence : 5/6 − 2/6 = 3/6 = 1/2." },
    { d:2, e:"Calculer 3/5 × 10/9.", r:"2/3",
      c:"On simplifie avant de multiplier :\n10 et 5 se simplifient par 5 : 10/5 = 2.\n3 et 9 se simplifient par 3 : 3/9 = 1/3.\n\nReste : 1/1 × 2/3 = 2/3." },
    { d:2, e:"Calculer (2/3) ÷ (4/5).", r:"5/6",
      c:"Diviser, c'est multiplier par l'inverse.\n\n(2/3) × (5/4) = 10/12 = 5/6." },
    { d:2, e:"Les 2/3 des élèves d'une classe de 27 ont choisi l'anglais. Combien cela représente-t-il ?", r:"18 élèves",
      c:"27 × 2/3 : on divise par 3 puis on multiplie par 2.\n\n27 ÷ 3 = 9, puis 9 × 2 = 18.\n\n18 élèves." },
    { d:2, e:"Calculer 7/8 − 1/2.", r:"3/8",
      c:"8 est multiple de 2.\n\n1/2 = 4/8.\n\nDifférence : 7/8 − 4/8 = 3/8." },
    { d:2, e:"Calculer 2/5 × 3/4 × 5/3.", r:"1/2",
      c:"On simplifie tout ce qui peut l'être :\n3 (numérateur) se simplifie avec 3 (dénominateur).\n5 (dénominateur) se simplifie avec 5 (numérateur).\n\nReste : 2/1 × 1/4 = 2/4 = 1/2." },
    { d:2, e:"Calculer 1/2 × 2/3 × 3/4.", r:"1/4",
      c:"Simplification en chaîne :\n1/2 × 2/3 = 1/3 (le 2 s'annule).\nPuis 1/3 × 3/4 = 1/4 (le 3 s'annule).\n\nRésultat : 1/4.\n\n<b>Le principe</b> — Dans un produit de fractions, chaque numérateur peut s'annuler avec un dénominateur identique." },
    { d:2, e:"Un réservoir contient 3/4 de sa capacité, soit 60 L. Quelle est sa capacité totale ?", r:"80 L",
      c:"Si 3/4 de la capacité = 60 L, alors 1/4 = 20 L.\n\nCapacité totale (4/4) : 4 × 20 = 80 L.\n\nVérification : 80 × 3/4 = 60 ✓" },
    { d:2, e:"Calculer 4/5 ÷ 2.", r:"2/5",
      c:"2 peut s'écrire 2/1.\n\nDiviser par 2/1, c'est multiplier par 1/2 :\n4/5 × 1/2 = 4/10 = 2/5.\n\n<b>Vérification</b> : la moitié de 4/5 est bien 2/5 ✓" },
    { d:2, e:"Calculer 5/6 + 1/4 − 1/3.", r:"3/4",
      c:"Dénominateur commun : 12.\n5/6 = 10/12\n1/4 = 3/12\n1/3 = 4/12\n\nCalcul : 10/12 + 3/12 − 4/12 = 9/12 = 3/4." },
    { d:3, e:"Un réservoir est rempli aux 2/5. On ajoute 12 L et il est aux 4/5. Quelle est sa capacité ?", r:"30 L",
      c:"Les 12 L ajoutés représentent 4/5 − 2/5 = 2/5 de la capacité.\n\nDonc 2/5 de la capacité = 12 L.\nAlors 1/5 = 6 L, et la capacité totale = 5 × 6 = 30 L.\n\nVérification : 2/5 de 30 = 12 L et 4/5 de 30 = 24 L. Or 24 − 12 = 12 ✓" },
    { d:3, e:"Calculer (2/3 + 1/6) × 4/5.", r:"2/3",
      c:"<b>Étape 1</b> : la parenthèse.\n2/3 = 4/6, donc 4/6 + 1/6 = 5/6.\n\n<b>Étape 2</b> : la multiplication.\n5/6 × 4/5 : le 5 s'annule (numérateur et dénominateur).\nReste 4/6 = 2/3." },
    { d:3, e:"Trois amis se partagent un gâteau. Le premier prend 1/3, le second 1/4. Quelle fraction reste pour le troisième ?", r:"5/12",
      c:"Part du premier : 1/3 = 4/12.\nPart du second : 1/4 = 3/12.\n\nTotal pris : 4/12 + 3/12 = 7/12.\n\nReste : 1 − 7/12 = 5/12.\n\nVérification : 4/12 + 3/12 + 5/12 = 12/12 = 1 ✓" },
    { d:3, e:"Calculer 1 − 1/2 − 1/4 − 1/8.", r:"1/8",
      c:"Dénominateur commun : 8.\n\n1 = 8/8\n1/2 = 4/8\n1/4 = 2/8\n1/8 = 1/8\n\nCalcul : 8/8 − 4/8 − 2/8 − 1/8 = 1/8.\n\n<b>Interprétation</b> — C'est le principe du partage par moitiés successives : il reste toujours la dernière fraction." },
    { d:3, e:"Une cuve est remplie aux 3/8. On y verse 25 L et elle est aux 7/8. Quelle est sa capacité ?", r:"50 L",
      c:"Les 25 L représentent 7/8 − 3/8 = 4/8 = 1/2 de la capacité.\n\nDonc 1/2 de la capacité = 25 L.\n\nCapacité totale : 50 L.\n\nVérification : 3/8 de 50 = 18,75 L et 7/8 de 50 = 43,75 L. Or 43,75 − 18,75 = 25 ✓" },
    { d:3, e:"Calculer (3/4)² ÷ (3/4).", r:"3/4",
      c:"(3/4)² = 9/16.\n\nDiviser par 3/4, c'est multiplier par 4/3 :\n9/16 × 4/3 = 36/48 = 3/4.\n\n<b>Vérification par les exposants</b> : (3/4)² ÷ (3/4) = (3/4)²⁻¹ = (3/4)¹ = 3/4 ✓" },
    { d:3, e:"Dans une classe, 2/5 des élèves sont des filles et parmi elles, 1/3 font du latin. Quelle fraction de la classe représente les filles latinistes ?", r:"2/15",
      c:"On multiplie les fractions :\n2/5 × 1/3 = 2/15.\n\nLes filles latinistes représentent 2/15 de la classe.\n\n<b>Vérification avec un effectif de 30</b> : 2/5 de 30 = 12 filles, et 1/3 de 12 = 4 latinistes. Or 2/15 de 30 = 4 ✓" },
    { d:3, e:"Calculer 1/(1/2 + 1/3).", r:"6/5",
      c:"<b>Étape 1</b> : la somme au dénominateur.\n1/2 + 1/3 = 3/6 + 2/6 = 5/6.\n\n<b>Étape 2</b> : l'inverse.\n1 ÷ (5/6) = 1 × 6/5 = 6/5.\n\nLe résultat est bien inférieur à 1/... non, 6/5 = 1,2. Et la somme 1/2 + 1/3 ≈ 0,833. Or 1/0,833 ≈ 1,2 ✓" },
    { d:3, e:"Un ouvrier fait 1/4 d'un travail le matin et 2/5 l'après-midi. Quelle fraction lui reste-t-il pour le lendemain ?", r:"7/20",
      c:"Matin : 1/4 = 5/20.\nAprès-midi : 2/5 = 8/20.\n\nTotal fait : 5/20 + 8/20 = 13/20.\n\nReste : 1 − 13/20 = 7/20.\n\nVérification : 5/20 + 8/20 + 7/20 = 20/20 ✓" },
    { d:3, e:"Calculer 2/3 × (1 − 1/4).", r:"1/2",
      c:"<b>Étape 1</b> : la parenthèse.\n1 − 1/4 = 3/4.\n\n<b>Étape 2</b> : la multiplication.\n2/3 × 3/4 : le 3 s'annule.\nReste 2/4 = 1/2." }
  ]
},
{
  id:"5e-puissances", niveau:"5e", titre:"5e · Puissances", temps:"18 min",
  resume:"Notation puissance, formules de calcul, puissances de 10, écriture scientifique.",
  lecons:[
    { titre:"Notation et règles de calcul", contenu:`
      <h3>1. Définition</h3>
      <p>Une puissance est une multiplication répétée. Dans aⁿ, <b>a</b> est la base et <b>n</b> l'exposant :</p>
      <div class="formula">aⁿ = a × a × … × a     (n facteurs égaux à a)</div>
      <p>Exemple : 2⁵ = 2 × 2 × 2 × 2 × 2 = 32.</p>
      <div class="box warn"><b>Erreur classique</b> — 2⁵ n'est pas 2 × 5 = 10, mais 32. La puissance n'est pas une multiplication par l'exposant.</div>

      <h3>2. Les cas particuliers à connaître</h3>
      <div class="formula">a¹ = a
a⁰ = 1        (pour a ≠ 0)
a⁻ⁿ = 1 / aⁿ</div>
      <p>L'exposant négatif ne rend pas le nombre négatif : il donne l'<b>inverse</b>. Par exemple 2⁻³ = 1/8.</p>

      <h3>3. Les formules de calcul</h3>
      <p>Elles ne fonctionnent que si la base est la même :</p>
      <div class="formula">aᵐ × aⁿ = aᵐ⁺ⁿ
aᵐ / aⁿ = aᵐ⁻ⁿ
(aᵐ)ⁿ = aᵐˣⁿ</div>
      <div class="box"><b>Repère mental</b> — Dans un produit, on <b>additionne</b> les exposants. Dans une puissance de puissance, on les <b>multiplie</b>. Ne jamais confondre les deux.</div>

      <h3>4. Attention aux sommes</h3>
      <div class="box warn"><b>Aucune formule pour aᵐ + aⁿ</b> — Une somme de puissances se calcule terme à terme, elle ne se simplifie pas. Par exemple 2³ + 2⁵ = 8 + 32 = 40, et non 2⁸ = 256.</div>

      <h3>5. Puissances de 10</h3>
      <div class="formula">10ⁿ = 1 suivi de n zéros
10⁻ⁿ = 1 / 10ⁿ   (n zéros après la virgule)</div>
      <p>Exemples : 10³ = 1000 · 10⁻² = 0,01 · 3,5 × 10⁴ = 35 000.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Simplifier B = (3² × 3⁵) / 3⁴ puis calculer sa valeur.</p>
      <ul>
        <li>Au numérateur : 3² × 3⁵ = 3⁷</li>
        <li>Donc B = 3⁷ / 3⁴ = 3⁷⁻⁴ = 3³</li>
        <li>B = 27</li>
      </ul>
      <p><b>Vérification :</b> en développant, 9 × 243 = 2187 et 2187 ÷ 81 = 27 ✓</p>
    ` },
    { titre:"Écriture scientifique", contenu:`
      <h3>1. Définition</h3>
      <p>Un nombre est en notation scientifique quand il s'écrit sous la forme :</p>
      <div class="formula">a × 10ⁿ        avec 1 ≤ a &lt; 10 et n entier</div>
      <p>La condition sur a est essentielle : un seul chiffre avant la virgule, et il ne doit pas être 0.</p>

      <h3>2. Convertir en écriture scientifique</h3>
      <p>On place la virgule juste après le premier chiffre significatif, et on compte les rangs parcourus.</p>
      <div class="formula">45 000 = 4,5 × 10⁴      (virgule déplacée de 4 rangs vers la gauche)
0,000 72 = 7,2 × 10⁻⁴   (déplacée de 4 rangs vers la droite)</div>
      <div class="box"><b>Le sens de l'exposant</b> — Nombre grand (≥ 10) : exposant positif. Nombre petit (&lt; 1) : exposant négatif. Le signe de l'exposant donne le sens du déplacement de la virgule.</div>

      <h3>3. Reconnaître une écriture mal formée</h3>
      <div class="box warn"><b>Attention</b> — 45 × 10³ et 0,45 × 10⁵ sont égaux à 45 000, mais <b>ne sont pas</b> des écritures scientifiques : le premier facteur doit être compris entre 1 et 10.</div>

      <h3>4. Comparer grâce à l'écriture scientifique</h3>
      <p>On compare d'abord les <b>exposants</b> : le nombre avec le plus grand exposant est le plus grand. Si les exposants sont égaux, on compare les premiers facteurs.</p>
      <div class="formula">3 × 10⁵ &gt; 9 × 10⁴     car 5 &gt; 4</div>

      <h3>5. Opérations en écriture scientifique</h3>
      <div class="formula">(a × 10ᵐ) × (b × 10ⁿ) = (a × b) × 10ᵐ⁺ⁿ
(a × 10ᵐ) / (b × 10ⁿ) = (a / b) × 10ᵐ⁻ⁿ</div>
      <p>Il faut ensuite vérifier que le résultat est bien en écriture scientifique : si a × b ≥ 10, il faut le retravailler.</p>
      <p>Exemple : 4 × 10³ × 5 × 10² = 20 × 10⁵ = 2 × 10⁶.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Écrire 0,000 43 en notation scientifique.</p>
      <ul>
        <li>On place la virgule après le 4 : 4,3</li>
        <li>On a déplacé la virgule de 4 rangs vers la droite</li>
        <li>Donc l'exposant est −4</li>
      </ul>
      <p><b>Résultat :</b> 4,3 × 10⁻⁴.</p>
      <p><b>Vérification :</b> 4,3 × 0,0001 = 0,000 43 ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — la notation puissance et ses règles de calcul, puis l'écriture scientifique pour les très grands et très petits nombres.</div>`,
  exercices:[
    { d:1, e:"Calculer 2⁴.", r:"16",
      c:"2⁴ = 2 × 2 × 2 × 2 = 16.\n\nCe n'est pas 2 × 4 = 8." },
    { d:1, e:"Calculer 3³.", r:"27",
      c:"3³ = 3 × 3 × 3 = 27." },
    { d:1, e:"Que vaut 5⁰ ?", r:"1",
      c:"Tout nombre non nul élevé à la puissance 0 vaut 1.\n\n5⁰ = 1." },
    { d:1, e:"Que vaut 7¹ ?", r:"7",
      c:"Tout nombre élevé à la puissance 1 vaut lui-même.\n\n7¹ = 7." },
    { d:1, e:"Simplifier 3⁴ × 3².", r:"3⁶",
      c:"Même base : on additionne les exposants.\n\n3⁴⁺² = 3⁶.\n\nOn ne multiplie jamais les exposants dans un produit." },
    { d:1, e:"Simplifier 5⁷ / 5³.", r:"5⁴",
      c:"Même base : on soustrait les exposants.\n\n5⁷⁻³ = 5⁴." },
    { d:1, e:"Simplifier (2³)².", r:"2⁶",
      c:"Puissance de puissance : on multiplie les exposants.\n\n(2³)² = 2³ˣ² = 2⁶.\n\nVérification : 2³ = 8, et 8² = 64 = 2⁶ ✓" },
    { d:1, e:"Que vaut 2⁻³ ?", r:"1/8",
      c:"Un exposant négatif donne l'inverse, pas un signe négatif.\n\n2⁻³ = 1/2³ = 1/8." },
    { d:1, e:"Écrire 10³ en nombre entier.", r:"1000",
      c:"10³ signifie 1 suivi de 3 zéros.\n\n10³ = 1000." },
    { d:1, e:"Écrire 10⁻² en nombre décimal.", r:"0,01",
      c:"10⁻² = 1/10² = 1/100 = 0,01." },
    { d:2, e:"Simplifier (4² × 4⁵) / 4⁶.", r:"4¹ = 4",
      c:"Numérateur : 4² × 4⁵ = 4⁷.\n\nQuotient : 4⁷ / 4⁶ = 4⁷⁻⁶ = 4¹ = 4." },
    { d:2, e:"Vrai ou faux : 2³ + 2⁴ = 2⁷.", r:"Faux",
      c:"Il n'y a <b>aucune</b> formule pour la somme de puissances.\n\n2³ + 2⁴ = 8 + 16 = 24.\n\nOr 2⁷ = 128. Les deux résultats sont très différents." },
    { d:2, e:"Écrire 45 000 en notation scientifique.", r:"4,5 × 10⁴",
      c:"On place la virgule après le premier chiffre : 4,5.\n\nOn l'a déplacée de 4 rangs vers la gauche.\n\nDonc l'exposant est +4 : 4,5 × 10⁴." },
    { d:2, e:"Écrire 0,000 72 en notation scientifique.", r:"7,2 × 10⁻⁴",
      c:"On place la virgule après le 7 : 7,2.\n\nDéplacement de 4 rangs vers la droite, donc exposant −4.\n\n7,2 × 10⁻⁴." },
    { d:2, e:"Calculer 2 × 10³ × 5.", r:"10 000",
      c:"2 × 5 = 10, puis 10 × 10³ = 10 × 1000 = 10 000.\n\nEn notation scientifique : 1 × 10⁴." },
    { d:2, e:"Calculer 3³ − 2³.", r:"19",
      c:"3³ = 27 et 2³ = 8.\n\n27 − 8 = 19.\n\nUne différence de puissances se calcule terme à terme." },
    { d:2, e:"Comparer 5 × 10⁶ et 9 × 10⁵.", r:"5 × 10⁶ > 9 × 10⁵",
      c:"On compare d'abord les exposants : 6 &gt; 5.\n\nDonc 5 × 10⁶ &gt; 9 × 10⁵, même si 5 &lt; 9.\n\nVérification : 5 000 000 &gt; 900 000 ✓" },
    { d:2, e:"Écrire 3,5 × 10³ en nombre décimal.", r:"3500",
      c:"3,5 × 1000 = 3500.\n\nLa virgule se décale de 3 rangs vers la droite." },
    { d:2, e:"Quelle est l'écriture scientifique de 0,0035 ?", r:"3,5 × 10⁻³",
      c:"On place la virgule après le 3 : 3,5.\n\nDéplacement de 3 rangs vers la droite, donc exposant −3.\n\n3,5 × 10⁻³." },
    { d:2, e:"Simplifier (10³)⁴.", r:"10¹²",
      c:"Puissance de puissance : on multiplie les exposants.\n\n(10³)⁴ = 10³ˣ⁴ = 10¹²." },
    { d:2, e:"Calculer 4 × 10⁻².", r:"0,04",
      c:"10⁻² = 0,01.\n\n4 × 0,01 = 0,04." },
    { d:2, e:"Écrire 12 500 000 en notation scientifique.", r:"1,25 × 10⁷",
      c:"On place la virgule après le 1 : 1,25.\n\nOn a déplacé la virgule de 7 rangs vers la gauche.\n\nDonc 1,25 × 10⁷." },
    { d:3, e:"Calculer (2 × 10³) × (3 × 10⁵) et donner le résultat en notation scientifique.", r:"6 × 10⁸",
      c:"On regroupe : (2 × 3) × (10³ × 10⁵).\n\n= 6 × 10⁸.\n\nVérification : 2000 × 300 000 = 600 000 000 = 6 × 10⁸ ✓" },
    { d:3, e:"Calculer (8 × 10⁶) / (2 × 10²).", r:"4 × 10⁴",
      c:"On sépare : (8/2) × (10⁶/10²) = 4 × 10⁴.\n\nVérification : 8 000 000 ÷ 200 = 40 000 = 4 × 10⁴ ✓" },
    { d:3, e:"Combien de fois le nombre 10²⁰ est-il plus grand que 10¹⁷ ?", r:"1000 fois",
      c:"Rapport : 10²⁰ / 10¹⁷ = 10²⁰⁻¹⁷ = 10³ = 1000.\n\n10²⁰ est 1000 fois plus grand que 10¹⁷." },
    { d:3, e:"Simplifier (2³ × 5³) sous la forme d'une seule puissance.", r:"10³ = 1000",
      c:"On utilise la propriété aⁿ × bⁿ = (a × b)ⁿ.\n\n2³ × 5³ = (2 × 5)³ = 10³ = 1000.\n\nVérification : 8 × 125 = 1000 ✓" },
    { d:3, e:"Un grain de sable a une masse de 2 × 10⁻⁵ kg. Quelle est la masse de 3 × 10⁶ grains ?", r:"60 kg",
      c:"Masse totale : (2 × 10⁻⁵) × (3 × 10⁶).\n\n= 6 × 10⁻⁵⁺⁶ = 6 × 10¹ = 60 kg." },
    { d:3, e:"La distance Terre-Soleil est de 1,5 × 10⁸ km. Combien de secondes met la lumière à nous parvenir, sachant qu'elle parcourt 3 × 10⁵ km par seconde ?", r:"500 secondes",
      c:"<b>Étape 1</b> : diviser la distance par la vitesse.\n\ntemps = (1,5 × 10⁸) / (3 × 10⁵)\n\n< b>Étape 2</b> : calculer.\ntemps = (1,5/3) × 10⁸⁻⁵ = 0,5 × 10³ = 5 × 10² = 500.\n\nLa lumière met 500 secondes, soit environ 8 minutes et 20 secondes." },
    { d:3, e:"Écrire en notation scientifique : 0,000 000 0805.", r:"8,05 × 10⁻⁸",
      c:"On place la virgule après le 8 : 8,05.\n\nComptons les déplacements : de 0,0000000805 à 8,05, on a déplacé de 8 rangs vers la droite.\n\nDonc 8,05 × 10⁻⁸." },
    { d:3, e:"Calculer (5 × 10³ + 2 × 10⁴) en notation scientifique.", r:"2,5 × 10⁴",
      c:"On met les deux termes à la même puissance.\n\n5 × 10³ = 0,5 × 10⁴.\n\nSomme : 0,5 × 10⁴ + 2 × 10⁴ = 2,5 × 10⁴.\n\nVérification : 5000 + 20 000 = 25 000 = 2,5 × 10⁴ ✓" },
    { d:3, e:"Un cheveu a un diamètre de 7 × 10⁻⁵ m. Combien de cheveux peut-on aligner sur 1 m ?", r:"Environ 14 286",
      c:"Nombre de cheveux : 1 / (7 × 10⁻⁵) = (1/7) × 10⁵ ≈ 0,1429 × 10⁵ ≈ 14 286.\n\nSoit environ 14 000 cheveux pour couvrir un mètre." },
    { d:3, e:"Comparer 2 × 10⁻³ et 3 × 10⁻⁴.", r:"2 × 10⁻³ > 3 × 10⁻⁴",
      c:"On compare les exposants : −3 &gt; −4.\n\nDonc 2 × 10⁻³ &gt; 3 × 10⁻⁴, même si 2 &lt; 3.\n\nVérification : 0,002 &gt; 0,0003 ✓" },
    { d:3, e:"Simplifier (6 × 10⁵)³.", r:"2,16 × 10¹⁷",
      c:"(6 × 10⁵)³ = 6³ × (10⁵)³ = 216 × 10¹⁵.\n\nOn remet en notation scientifique : 216 = 2,16 × 10².\n\nDonc 2,16 × 10² × 10¹⁵ = 2,16 × 10¹⁷." },
    { d:3, e:"La population mondiale est d'environ 8 × 10⁹ habitants et la surface des terres émergées de 1,5 × 10⁸ km². Quelle est la densité moyenne ?", r:"Environ 53 habitants par km²",
      c:"Densité = (8 × 10⁹) / (1,5 × 10⁸).\n\n= (8/1,5) × 10¹ = 5,333 × 10¹ ≈ 53.\n\nEnviron 53 habitants par km² en moyenne." }
  ]
},
{
  id:"5e-calcul-litteral", niveau:"5e", titre:"5e · Calcul littéral", temps:"20 min",
  resume:"Expressions littérales, distributivité, réduire, tester une égalité.",
  lecons:[
    { titre:"Écrire et réduire une expression", contenu:`
      <h3>1. Pourquoi des lettres</h3>
      <p>Une lettre remplace un nombre qu'on ne connaît pas encore, ou qui peut varier. Écrire x + 5, c'est décrire <b>tous</b> les nombres augmentés de 5.</p>
      <div class="box"><b>Convention d'écriture</b> — On n'écrit pas le signe × devant une lettre : 3 × x s'écrit 3x. De même a × b s'écrit ab. Mais 3 × 4 reste 12, on calcule.</div>

      <h3>2. Vocabulaire</h3>
      <ul>
        <li><b>Terme</b> : chaque élément séparé par un + ou un −</li>
        <li><b>Facteur</b> : chaque élément séparé par un ×</li>
        <li><b>Coefficient</b> : le nombre qui multiplie la lettre (dans 7x, le coefficient est 7)</li>
      </ul>

      <h3>3. Réduire une expression</h3>
      <p>Réduire, c'est regrouper les termes de même nature. On compte les x avec les x, les nombres avec les nombres.</p>
      <div class="formula">3x + 5x = 8x
7x + 4 − 2x = 5x + 4</div>
      <div class="box warn"><b>Erreur classique</b> — 3x + 5 n'est pas 8x. On ne peut additionner que des termes qui contiennent <b>la même lettre</b>. Ici, 3x et 5 ne sont pas de même nature : le résultat reste 3x + 5.</div>

      <h3>4. Supprimer des parenthèses précédées d'un signe</h3>
      <div class="formula">a + (b + c) = a + b + c
a − (b + c) = a − b − c</div>
      <div class="box warn"><b>Le piège du signe moins</b> — Quand une parenthèse est précédée d'un signe −, tous les signes à l'intérieur changent. 15 − (3 + x) = 15 − 3 − x = 12 − x.</div>

      <h3>5. Tester une égalité</h3>
      <p>Pour vérifier qu'une égalité est vraie, on remplace la lettre par une valeur et on calcule chaque membre séparément.</p>
      <div class="formula">3(x + 2) = 3x + 6 est-elle vraie pour x = 5 ?
Membre de gauche : 3 × 7 = 21
Membre de droite : 15 + 6 = 21 ✓</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Réduire A = 5x + 3 − 2x + 7 − x.</p>
      <ul>
        <li>On regroupe les x : 5x − 2x − x = 2x</li>
        <li>On regroupe les nombres : 3 + 7 = 10</li>
      </ul>
      <p><b>Résultat :</b> A = 2x + 10.</p>
      <p><b>Vérification avec x = 2 :</b> A = 10 + 3 − 4 + 7 − 2 = 14, et 2×2 + 10 = 14 ✓</p>
    ` },
    { titre:"Développer avec la distributivité", contenu:`
      <h3>1. La distributivité simple</h3>
      <p>On distribue le facteur sur chaque terme de la parenthèse :</p>
      <div class="formula">k(a + b) = ka + kb</div>
      <div class="formula">3(x + 5) = 3x + 15</div>

      <h3>2. Attention aux signes</h3>
      <div class="formula">−2(x + 3) = −2x − 6
−2(x − 3) = −2x + 6</div>
      <div class="box warn"><b>Le signe porte sur tout</b> — Quand on distribue un nombre négatif, tous les termes changent de signe à l'intérieur de la parenthèse. C'est l'erreur la plus fréquente du chapitre.</div>

      <h3>3. Développer puis réduire</h3>
      <p>Beaucoup d'exercices demandent de développer <b>puis</b> de réduire. Les deux étapes se suivent.</p>
      <div class="formula">2(x + 3) + 5x = 2x + 6 + 5x = 7x + 6</div>

      <h3>4. Développer un produit de deux sommes</h3>
      <p>On distribue chaque terme du premier facteur sur chaque terme du second :</p>
      <div class="formula">(a + b)(c + d) = ac + ad + bc + bd</div>
      <div class="formula">(x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6</div>
      <div class="box"><b>Vérification par un cas particulier</b> — Avec x = 1 : (1+2)(1+3) = 3 × 4 = 12, et 1 + 5 + 6 = 12 ✓. Cette vérification numérique permet de repérer une erreur de calcul.</div>

      <h3>5. Factoriser, l'opération inverse</h3>
      <p>Factoriser, c'est transformer une somme en produit. On cherche le facteur commun :</p>
      <div class="formula">3x + 15 = 3(x + 5)
7x + 7y = 7(x + y)</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Développer et réduire B = 4(2x − 3) − 2(x + 5).</p>
      <ul>
        <li><b>Premier développement</b> : 4(2x − 3) = 8x − 12</li>
        <li><b>Second</b> : −2(x + 5) = −2x − 10</li>
        <li><b>Réduction</b> : 8x − 12 − 2x − 10 = 6x − 22</li>
      </ul>
      <p><b>Vérification avec x = 1 :</b> B = 4(−1) − 2(6) = −4 − 12 = −16, et 6 − 22 = −16 ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — écrire et réduire une expression, puis développer avec la distributivité. La vérification numérique est ton meilleur outil.</div>`,
  exercices:[
    { d:1, e:"Simplifier l'écriture de 3 × x.", r:"3x",
      c:"Par convention, on n'écrit pas le signe × devant une lettre.\n\n3 × x = 3x." },
    { d:1, e:"Réduire 5x + 3x.", r:"8x",
      c:"Les deux termes contiennent la même lettre x : on peut les additionner.\n\n5x + 3x = 8x." },
    { d:1, e:"Réduire 7 + 4.", r:"11",
      c:"Ce sont deux nombres, on les additionne simplement.\n\n7 + 4 = 11." },
    { d:1, e:"Réduire 9x − 2x.", r:"7x",
      c:"Même lettre : on soustrait les coefficients.\n\n9x − 2x = 7x." },
    { d:1, e:"Développer 3(x + 4).", r:"3x + 12",
      c:"On distribue le 3 sur chaque terme.\n\n3 × x = 3x et 3 × 4 = 12.\n\nRésultat : 3x + 12." },
    { d:1, e:"Développer 5(x − 2).", r:"5x − 10",
      c:"On distribue le 5 :\n5 × x = 5x et 5 × (−2) = −10.\n\nRésultat : 5x − 10." },
    { d:1, e:"Réduire 4x + 5 + 2x.", r:"6x + 5",
      c:"On regroupe les x : 4x + 2x = 6x.\n\nLe 5 reste seul, car il ne contient pas de lettre.\n\nRésultat : 6x + 5.\n\n<b>Erreur à éviter</b> — Ce n'est pas 11x : on n'additionne que les termes de même nature." },
    { d:1, e:"Que vaut 3x pour x = 4 ?", r:"12",
      c:"On remplace x par 4 : 3 × 4 = 12." },
    { d:1, e:"Que vaut 2x + 5 pour x = 3 ?", r:"11",
      c:"2 × 3 + 5 = 6 + 5 = 11." },
    { d:1, e:"Factoriser 5x + 10.", r:"5(x + 2)",
      c:"Le facteur commun est 5.\n\n5x + 10 = 5 × x + 5 × 2 = 5(x + 2).\n\nVérification : 5(x+2) = 5x + 10 ✓" },
    { d:2, e:"Réduire 8x + 3 − 5x + 7.", r:"3x + 10",
      c:"Les x : 8x − 5x = 3x.\nLes nombres : 3 + 7 = 10.\n\nRésultat : 3x + 10." },
    { d:2, e:"Développer et réduire 2(x + 3) + 4x.", r:"6x + 6",
      c:"<b>Étape 1</b> : développement.\n2(x + 3) = 2x + 6.\n\n<b>Étape 2</b> : réduction.\n2x + 6 + 4x = 6x + 6." },
    { d:2, e:"Développer −3(x + 2).", r:"−3x − 6",
      c:"On distribue −3 :\n−3 × x = −3x\n−3 × 2 = −6\n\nRésultat : −3x − 6.\n\n<b>Attention</b> — Le signe moins affecte les deux termes de la parenthèse." },
    { d:2, e:"Développer −2(x − 5).", r:"−2x + 10",
      c:"On distribue −2 :\n−2 × x = −2x\n−2 × (−5) = +10 (moins par moins donne plus)\n\nRésultat : −2x + 10." },
    { d:2, e:"Simplifier 15 − (3 + x).", r:"12 − x",
      c:"La parenthèse est précédée d'un signe − : tous les signes intérieurs changent.\n\n15 − (3 + x) = 15 − 3 − x = 12 − x." },
    { d:2, e:"Développer et réduire 3(2x − 1) + 2(x + 4).", r:"8x + 5",
      c:"Premier développement : 6x − 3.\nSecond : 2x + 8.\n\nRéduction : 6x − 3 + 2x + 8 = 8x + 5." },
    { d:2, e:"Développer (x + 1)(x + 4).", r:"x² + 5x + 4",
      c:"On distribue chaque terme du premier facteur sur chaque terme du second.\n\nx × x = x²\nx × 4 = 4x\n1 × x = x\n1 × 4 = 4\n\nTotal : x² + 4x + x + 4 = x² + 5x + 4." },
    { d:2, e:"Tester l'égalité 2(x + 3) = 2x + 6 pour x = 7.", r:"Vraie",
      c:"Membre de gauche : 2 × (7 + 3) = 2 × 10 = 20.\nMembre de droite : 2 × 7 + 6 = 14 + 6 = 20.\n\nLes deux membres sont égaux : l'égalité est vraie pour x = 7." },
    { d:2, e:"Factoriser 4x + 12.", r:"4(x + 3)",
      c:"Facteur commun : 4.\n\n4x + 12 = 4 × x + 4 × 3 = 4(x + 3)." },
    { d:2, e:"Réduire 6x + 2y + 3x + 5y.", r:"9x + 7y",
      c:"On regroupe par lettre :\nLes x : 6x + 3x = 9x.\nLes y : 2y + 5y = 7y.\n\nRésultat : 9x + 7y.\n\nOn ne peut pas réduire davantage : x et y sont deux lettres différentes." },
    { d:2, e:"Développer (x + 2)(x − 5).", r:"x² − 3x − 10",
      c:"x × x = x²\nx × (−5) = −5x\n2 × x = 2x\n2 × (−5) = −10\n\nTotal : x² − 5x + 2x − 10 = x² − 3x − 10.\n\n<b>Vérification avec x = 1</b> : (3)(−4) = −12 et 1 − 3 − 10 = −12 ✓" },
    { d:3, e:"Développer et réduire 5(2x + 3) − 3(x − 4).", r:"7x + 27",
      c:"Premier : 5(2x + 3) = 10x + 15.\nSecond : −3(x − 4) = −3x + 12.\n\nRéduction : 10x + 15 − 3x + 12 = 7x + 27.\n\n<b>Vérification avec x = 0</b> : 5(3) − 3(−4) = 15 + 12 = 27, et 0 + 27 = 27 ✓" },
    { d:3, e:"Quelle expression est égale à (x + 3)² ?", r:"x² + 6x + 9",
      c:"(x + 3)² = (x + 3)(x + 3).\n\nx × x = x²\nx × 3 = 3x\n3 × x = 3x\n3 × 3 = 9\n\nTotal : x² + 6x + 9.\n\n<b>Erreur classique</b> — Ce n'est pas x² + 9 ! Le terme 6x est indispensable." },
    { d:3, e:"Montrer que 3(x + 4) et 3x + 12 sont toujours égaux.", r:"Démonstration",
      c:"On développe le premier membre :\n3(x + 4) = 3 × x + 3 × 4 = 3x + 12.\n\nL'expression obtenue est identique au second membre, pour <b>toute</b> valeur de x.\n\nC'est exactement ce que dit la distributivité : k(a + b) = ka + kb." },
    { d:3, e:"Un rectangle a pour longueur (x + 5) et pour largeur 3. Exprimer son périmètre.", r:"2x + 16",
      c:"Périmètre : P = 2 × (L + l).\n\nP = 2 × ((x + 5) + 3) = 2 × (x + 8) = 2x + 16.\n\n<b>Vérification avec x = 2</b> : L = 7, l = 3, P = 2 × 10 = 20. Et 2×2 + 16 = 20 ✓" },
    { d:3, e:"Factoriser 6x + 9.", r:"3(2x + 3)",
      c:"Facteur commun : 3 (car 6 = 3×2 et 9 = 3×3).\n\n6x + 9 = 3 × 2x + 3 × 3 = 3(2x + 3).\n\nVérification : 3(2x+3) = 6x + 9 ✓" },
    { d:3, e:"Un cinéma propose : prix d'entrée 8 € plus 15 € d'abonnement annuel. Exprimer le coût pour n séances.", r:"8n + 15",
      c:"Coût des séances : 8 € par séance, donc 8n.\n\nAjouté à l'abonnement : 8n + 15.\n\n<b>Vérification avec n = 5</b> : 5 séances coûtent 40 €, plus 15 € d'abonnement = 55 €. Et 8×5 + 15 = 55 ✓" },
    { d:3, e:"Développer (2x + 1)(x − 3).", r:"2x² − 5x − 3",
      c:"2x × x = 2x²\n2x × (−3) = −6x\n1 × x = x\n1 × (−3) = −3\n\nTotal : 2x² − 6x + x − 3 = 2x² − 5x − 3.\n\n<b>Vérification avec x = 1</b> : (3)(−2) = −6, et 2 − 5 − 3 = −6 ✓" },
    { d:3, e:"Simplifier 4x − (2x + 3) + 5(x − 1).", r:"7x − 8",
      c:"<b>Étape 1</b> : supprimer la parenthèse précédée d'un moins.\n4x − (2x + 3) = 4x − 2x − 3.\n\n<b>Étape 2</b> : développer la seconde.\n5(x − 1) = 5x − 5.\n\n<b>Étape 3</b> : réduire.\n4x − 2x − 3 + 5x − 5 = 7x − 8." },
    { d:3, e:"Avec x = 3, comparer 2x² et (2x)².", r:"18 et 36 : ils sont différents",
      c:"2x² = 2 × 3² = 2 × 9 = 18.\n\n(2x)² = (2 × 3)² = 6² = 36.\n\nLes deux résultats sont différents : 18 ≠ 36.\n\n<b>Le point important</b> — Dans 2x², le carré s'applique seulement à x. Dans (2x)², il s'applique à tout le produit. La place des parenthèses change tout." },
    { d:3, e:"Montrer que (x + 2)² − (x + 1)(x + 3) est constant.", r:"Toujours égal à 1",
      c:"On développe les deux termes.\n\n(x + 2)² = x² + 4x + 4.\n(x + 1)(x + 3) = x² + 3x + x + 3 = x² + 4x + 3.\n\nDifférence : (x² + 4x + 4) − (x² + 4x + 3) = 1.\n\nLes termes en x disparaissent : le résultat vaut 1 quelle que soit la valeur de x.\n\n<b>Vérification avec x = 5</b> : 7² − 6 × 8 = 49 − 48 = 1 ✓" }
  ]
},
{
  id:"5e-triangles", niveau:"5e", titre:"5e · Triangles et angles", temps:"20 min",
  resume:"Somme des angles, inégalité triangulaire, droites remarquables, constructions.",
  lecons:[
    { titre:"Angles et triangles", contenu:`
      <h3>1. La somme des angles</h3>
      <p>Dans <b>tout</b> triangle, la somme des trois angles vaut 180°. C'est la propriété la plus utilisée du chapitre.</p>
      <div class="formula">Â + B̂ + Ĉ = 180°</div>
      <div class="box warn"><b>Attention</b> — Cette propriété n'est vraie que pour un triangle. Un quadrilatère totalise 360°, un pentagone 540°.</div>

      <h3>2. L'inégalité triangulaire</h3>
      <p>Trois longueurs forment un triangle si et seulement si la plus grande est <b>inférieure à la somme des deux autres</b> :</p>
      <div class="formula">a &lt; b + c     (où a est le plus grand côté)</div>
      <p>Exemple : 3, 4 et 9 ne forment pas un triangle, car 9 &gt; 3 + 4 = 7. Imagine deux tiges de 3 et 4 cm : elles ne peuvent pas se rejoindre si la troisième mesure 9 cm.</p>
      <div class="box"><b>Cas d'égalité</b> — Si a = b + c, les trois points sont alignés : on dit que le triangle est « plat ». Il n'existe donc pas comme surface.</div>

      <h3>3. Les triangles particuliers</h3>
      <ul>
        <li><b>Isocèle</b> : deux côtés égaux, et les deux angles à la base égaux</li>
        <li><b>Équilatéral</b> : trois côtés égaux, donc trois angles de 60°</li>
        <li><b>Rectangle</b> : un angle droit ; les deux autres angles sont alors complémentaires (somme 90°)</li>
      </ul>
      <div class="box"><b>Propriété de l'isocèle</b> — Dans un triangle isocèle, les angles à la base sont égaux. C'est ce qui permet de calculer les angles sans aucune mesure.</div>

      <h3>4. Angles et droites parallèles</h3>
      <p>Quand deux droites parallèles sont coupées par une sécante :</p>
      <ul>
        <li>Les angles <b>alternes-internes</b> sont égaux</li>
        <li>Les angles <b>correspondants</b> sont égaux</li>
      </ul>
      <p>Réciproquement, si deux angles alternes-internes sont égaux, les droites sont parallèles.</p>

      <h3>5. Angles et bissectrice</h3>
      <p>La bissectrice d'un angle le partage en deux angles égaux. C'est aussi l'ensemble des points à égale distance des deux côtés de l'angle.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>ABC est isocèle en A, avec B̂ = 42°. Calculer Â.</p>
      <ul>
        <li>Le triangle est isocèle en A, donc AB = AC, et les angles à la base sont égaux : Ĉ = B̂ = 42°</li>
        <li>Donc B̂ + Ĉ = 84°</li>
        <li>Â = 180° − 84° = 96°</li>
      </ul>
      <p><b>Vérification :</b> 96° + 42° + 42° = 180° ✓</p>
    ` },
    { titre:"Droites remarquables du triangle", contenu:`
      <h3>1. La médiatrice d'un segment</h3>
      <p>C'est la droite perpendiculaire au segment, passant par son milieu.</p>
      <div class="box"><b>Propriété clé</b> — Tout point de la médiatrice d'un segment est à égale distance des deux extrémités. Réciproquement, tout point équidistant des extrémités est sur la médiatrice.</div>
      <p>C'est cette propriété qui permet de construire le cercle circonscrit au compas.</p>

      <h3>2. Les quatre droites remarquables</h3>
      <p>Elles ont chacune une définition précise, à ne pas confondre :</p>
      <ul>
        <li><b>Médiatrice</b> : perpendiculaire à un côté, passant par son milieu</li>
        <li><b>Médiane</b> : passe par un sommet et par le milieu du côté opposé</li>
        <li><b>Hauteur</b> : passe par un sommet et est perpendiculaire au côté opposé</li>
        <li><b>Bissectrice</b> : coupe un angle en deux angles égaux</li>
      </ul>
      <div class="box warn"><b>Ne pas confondre médiane et médiatrice</b> — La médiane vient d'un sommet, la médiatrice est perpendiculaire à un côté. Leurs noms se ressemblent, leurs définitions n'ont rien à voir.</div>

      <h3>3. Intersection des droites remarquables</h3>
      <p>Chaque famille de droites remarquables est concourante :</p>
      <ul>
        <li>Les trois <b>médiatrices</b> se coupent au centre du cercle circonscrit</li>
        <li>Les trois <b>médianes</b> se coupent au centre de gravité</li>
        <li>Les trois <b>hauteurs</b> se coupent à l'orthocentre</li>
        <li>Les trois <b>bissectrices</b> se coupent au centre du cercle inscrit</li>
      </ul>

      <h3>4. Cercle circonscrit</h3>
      <p>C'est le cercle qui passe par les trois sommets du triangle. Son centre est le point d'intersection des médiatrices, à égale distance des trois sommets.</p>
      <div class="box"><b>Construction</b> — On trace deux médiatrices ; leur intersection est le centre. On ouvre le compas jusqu'à un sommet et on trace le cercle : il passe par les trois.</div>

      <h3>5. Cercle inscrit</h3>
      <p>C'est le cercle tangent aux trois côtés, à l'intérieur du triangle. Son centre est l'intersection des bissectrices.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Dans un triangle ABC, Â = 60° et B̂ = 70°. Le triangle peut-il être rectangle ?</p>
      <ul>
        <li>On calcule le troisième angle : Ĉ = 180 − 60 − 70 = 50°</li>
        <li>Les trois angles sont 60°, 70° et 50°</li>
        <li>Aucun ne vaut 90°</li>
      </ul>
      <p><b>Conclusion :</b> le triangle n'est pas rectangle.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — angles et triangles, puis les droites remarquables et les cercles associés.</div>`,
  exercices:[
    { d:1, e:"Dans un triangle, deux angles mesurent 60° et 50°. Combien mesure le troisième ?", r:"70°",
      c:"La somme des angles d'un triangle vaut 180°.\n\n180 − 60 − 50 = 70°." },
    { d:1, e:"Combien mesure chacun des angles d'un triangle équilatéral ?", r:"60°",
      c:"Les trois angles sont égaux, et leur somme vaut 180°.\n\n180 ÷ 3 = 60°." },
    { d:1, e:"Les longueurs 2, 3 et 8 peuvent-elles former un triangle ?", r:"Non",
      c:"Le plus grand côté est 8.\n\nOr 2 + 3 = 5 &lt; 8 : l'inégalité triangulaire n'est pas vérifiée.\n\nCes longueurs ne forment pas un triangle." },
    { d:1, e:"Les longueurs 4, 5 et 7 peuvent-elles former un triangle ?", r:"Oui",
      c:"Le plus grand côté est 7.\n\nOr 4 + 5 = 9 &gt; 7 : l'inégalité triangulaire est vérifiée.\n\nUn triangle est possible." },
    { d:1, e:"Un triangle isocèle a deux angles de 70°. Combien mesure le troisième ?", r:"40°",
      c:"La somme des deux angles connus : 70 + 70 = 140°.\n\nTroisième angle : 180 − 140 = 40°." },
    { d:1, e:"Que mesure un angle droit ?", r:"90°",
      c:"Un angle droit mesure exactement 90°." },
    { d:1, e:"Dans un triangle rectangle, les deux autres angles sont :", r:"Complémentaires (somme 90°)",
      c:"La somme totale vaut 180°, dont 90° pour l'angle droit.\n\nLes deux autres totalisent donc 180 − 90 = 90° : ils sont complémentaires." },
    { d:1, e:"La médiatrice d'un segment est :", r:"Perpendiculaire au segment et passe par son milieu",
      c:"C'est la définition : perpendiculaire au segment en son milieu.\n\nTout point de cette droite est à égale distance des deux extrémités." },
    { d:1, e:"Combien de médiatrices a un triangle ?", r:"3",
      c:"Un triangle a trois côtés, donc trois médiatrices.\n\nElles se coupent toutes les trois en un même point : le centre du cercle circonscrit." },
    { d:1, e:"Un triangle avec deux angles de 90° est-il possible ?", r:"Non",
      c:"Deux angles droits totaliseraient déjà 180°.\n\nIl ne resterait rien pour le troisième angle : un triangle ne peut avoir qu'un seul angle droit au maximum." },
    { d:2, e:"ABC est isocèle en A avec B̂ = 55°. Calculer Â.", r:"70°",
      c:"Isocèle en A signifie AB = AC, donc les angles à la base sont égaux : Ĉ = B̂ = 55°.\n\nB̂ + Ĉ = 110°.\n\nÂ = 180 − 110 = 70°." },
    { d:2, e:"Peut-on construire un triangle avec des côtés de 5, 5 et 11 cm ?", r:"Non",
      c:"Le plus grand côté est 11.\n\nOr 5 + 5 = 10 &lt; 11 : l'inégalité triangulaire n'est pas vérifiée.\n\nMême avec deux côtés égaux, le triangle est impossible : les deux tiges de 5 cm ne peuvent pas se rejoindre." },
    { d:2, e:"Dans un triangle rectangle, un angle mesure 35°. Combien mesure l'autre angle aigu ?", r:"55°",
      c:"Les deux angles aigus sont complémentaires : leur somme vaut 90°.\n\n90 − 35 = 55°." },
    { d:2, e:"Une médiane passe par :", r:"Un sommet et le milieu du côté opposé",
      c:"C'est la définition de la médiane.\n\nElle relie un sommet au milieu du côté opposé. Ne pas la confondre avec la médiatrice, qui est perpendiculaire à un côté." },
    { d:2, e:"Dans un triangle, Â = 90° et B̂ = 45°. Que peut-on dire du triangle ?", r:"Il est rectangle et isocèle",
      c:"Le troisième angle : Ĉ = 180 − 90 − 45 = 45°.\n\nComme B̂ = Ĉ = 45°, les côtés opposés sont égaux : le triangle est isocèle.\n\nIl est à la fois rectangle (en A) et isocèle (en A)." },
    { d:2, e:"Les trois médianes d'un triangle se coupent en un point appelé :", r:"Le centre de gravité",
      c:"Le point d'intersection des médianes est le centre de gravité du triangle.\n\nC'est le point d'équilibre si on découpe le triangle dans une plaque rigide." },
    { d:2, e:"Un triangle a des angles de 30°, 60° et 90°. Sa plus grande longueur est l'hypoténuse. Quel est l'angle opposé au plus petit côté ?", r:"30°",
      c:"Dans un triangle, le plus petit côté est opposé au plus petit angle.\n\nLe plus petit angle est 30°, donc il est opposé au plus petit côté.\n\nInversement, l'hypoténuse est toujours opposée à l'angle droit (90°), donc c'est bien le plus grand côté." },
    { d:2, e:"Un triangle isocèle a un angle au sommet de 100°. Que valent les angles à la base ?", r:"40° chacun",
      c:"La somme des angles à la base : 180 − 100 = 80°.\n\nIls sont égaux, donc chacun vaut 80 ÷ 2 = 40°." },
    { d:2, e:"Combien mesure la somme des angles d'un quadrilatère ?", r:"360°",
      c:"On peut partager un quadrilatère en deux triangles en traçant une diagonale.\n\nChaque triangle totalise 180°, donc le quadrilatère totalise 2 × 180 = 360°." },
    { d:2, e:"Deux droites parallèles sont coupées par une sécante. Un angle vaut 65°. Que vaut son angle alterne-interne ?", r:"65°",
      c:"Les angles alternes-internes formés par deux parallèles et une sécante sont égaux.\n\nDonc l'angle alterne-interne vaut aussi 65°." },
    { d:2, e:"Qu'est-ce que le cercle circonscrit à un triangle ?", r:"Le cercle passant par les trois sommets",
      c:"Le cercle circonscrit passe par les trois sommets du triangle.\n\nSon centre est le point d'intersection des médiatrices." },
    { d:3, e:"Un triangle a des côtés de 6, 8 et 10 cm. Est-il rectangle ?", r:"Oui",
      c:"Le plus grand côté est 10.\n\nVérifions : 6² + 8² = 36 + 64 = 100, et 10² = 100.\n\nL'égalité est vérifiée : le triangle est rectangle (théorème de Pythagore, vu en 4e).\n\n<b>Inégalité triangulaire</b> : 6 + 8 = 14 &gt; 10, le triangle existe bien." },
    { d:3, e:"Un triangle a deux angles égaux de 50°. Quelle est sa nature ?", r:"Isocèle",
      c:"Si deux angles sont égaux, les côtés opposés le sont aussi.\n\nLe triangle est donc isocèle.\n\nLe troisième angle vaut 180 − 100 = 80°." },
    { d:3, e:"Trois points A, B, C sont tels que AB = 3, BC = 4 et AC = 7. Que peut-on dire ?", r:"Les points sont alignés",
      c:"On a AB + BC = 3 + 4 = 7 = AC.\n\nC'est exactement le cas d'égalité de l'inégalité triangulaire : le triangle est « plat ».\n\nLes trois points sont alignés, avec B entre A et C." },
    { d:3, e:"Dans un triangle ABC, la bissectrice de l'angle Â le partage en deux angles de 25°. Que vaut Â ?", r:"50°",
      c:"La bissectrice partage l'angle en deux angles égaux.\n\nDonc Â = 2 × 25 = 50°." },
    { d:3, e:"Peut-on construire un triangle dont les angles mesurent 100°, 50° et 40° ?", r:"Non",
      c:"La somme vaut 100 + 50 + 40 = 190°.\n\nOr la somme des angles d'un triangle doit valoir exactement 180°.\n\nCe triangle est impossible." },
    { d:3, e:"Un triangle isocèle a un périmètre de 20 cm et sa base mesure 6 cm. Que valent les deux autres côtés ?", r:"7 cm chacun",
      c:"Périmètre : base + 2 × côté = 20.\n\n6 + 2c = 20\n2c = 14\nc = 7 cm.\n\n<b>Vérification par l'inégalité triangulaire</b> : 6 + 7 = 13 &gt; 7 ✓ Le triangle existe bien." },
    { d:3, e:"Dans un triangle ABC rectangle en A, la hauteur issue de A est-elle confondue avec un côté ?", r:"Non, sauf si le triangle est isocèle rectangle",
      c:"La hauteur issue de A est perpendiculaire à (BC).\n\nOr (AB) est perpendiculaire à (AC), pas à (BC) en général.\n\nElle n'est donc pas confondue avec un côté, sauf dans le cas particulier où le triangle est isocèle rectangle en A : la hauteur est alors aussi la médiane et la bissectrice issues de A." },
    { d:3, e:"Deux triangles ont les mêmes trois angles. Sont-ils superposables ?", r:"Non, ils ont la même forme mais pas forcément la même taille",
      c:"Deux triangles avec les mêmes angles sont <b>semblables</b> : ils ont la même forme.\n\nMais leurs côtés peuvent être proportionnels avec un coefficient différent : l'un peut être deux fois plus grand que l'autre.\n\nPour être superposables, il faut aussi qu'un côté soit égal." },
    { d:3, e:"Dans un triangle, la médiane issue de A coupe [BC] en M. Que peut-on dire des aires des triangles ABM et ACM ?", r:"Elles sont égales",
      c:"Les deux triangles ABM et ACM ont des bases égales (BM = MC, car M est le milieu) et la <b>même hauteur</b> issue de A.\n\nAire de ABM = (BM × h)/2 et aire de ACM = (MC × h)/2.\n\nComme BM = MC, les deux aires sont égales.\n\n<b>Propriété générale</b> : une médiane partage le triangle en deux triangles de même aire." },
    { d:3, e:"Un triangle a un angle de 120°. Les deux autres sont égaux. Que valent-ils ?", r:"30° chacun",
      c:"La somme des deux angles égaux : 180 − 120 = 60°.\n\nChacun vaut 60 ÷ 2 = 30°.\n\n<b>Remarque</b> : un angle de 120° est obtus, donc les deux autres sont forcément aigus." },
    { d:3, e:"Dans un triangle ABC, I est le milieu de [AB] et J le milieu de [AC]. Que peut-on dire de (IJ) par rapport à (BC) ?", r:"(IJ) est parallèle à (BC)",
      c:"C'est le théorème des milieux.\n\nI est le milieu de [AB] et J le milieu de [AC], donc (IJ) est parallèle à (BC).\n\nDe plus, IJ = BC/2.\n\n<b>Ce théorème est étudié en 4e</b>, mais il découle directement de la configuration des milieux vue ici." },
    { d:3, e:"Un triangle équilatéral a un périmètre de 18 cm. Quel est son côté ?", r:"6 cm",
      c:"Les trois côtés sont égaux.\n\n18 ÷ 3 = 6 cm.\n\nVérification de l'inégalité triangulaire : 6 + 6 = 12 &gt; 6, donc le triangle existe bien ✓" }
  ]
},
{
  id:"5e-parallelogrammes", niveau:"5e", titre:"5e · Parallélogrammes", temps:"18 min",
  resume:"Propriétés des parallélogrammes, losanges, rectangles, aires des figures.",
  lecons:[
    { titre:"Propriétés du parallélogramme", contenu:`
      <h3>1. Définition</h3>
      <p>Un parallélogramme est un quadrilatère dont les côtés opposés sont <b>parallèles deux à deux</b>.</p>
      <div class="formula">Si (AB) ∥ (DC) et (AD) ∥ (BC), alors ABCD est un parallélogramme</div>

      <h3>2. Propriétés des côtés et des angles</h3>
      <ul>
        <li>Les côtés opposés sont <b>égaux</b> : AB = DC et AD = BC</li>
        <li>Les angles opposés sont <b>égaux</b> : Â = Ĉ et B̂ = D̂</li>
        <li>Deux angles consécutifs sont <b>supplémentaires</b> : leur somme vaut 180°</li>
      </ul>
      <div class="box"><b>Vérification rapide</b> — La somme des quatre angles vaut 360°. Si les angles opposés sont égaux deux à deux, la vérification est immédiate.</div>

      <h3>3. Les diagonales</h3>
      <p>C'est la propriété la plus utile :</p>
      <div class="box"><b>Propriété clé</b> — Les diagonales d'un parallélogramme se coupent en leur <b>milieu</b>.</div>
      <p>C'est ce qui permet de le reconnaître : si un quadrilatère a des diagonales qui se coupent en leur milieu, c'est un parallélogramme.</p>

      <h3>4. Les parallélogrammes particuliers</h3>
      <ul>
        <li><b>Le rectangle</b> : un parallélogramme avec un angle droit (et donc quatre)</li>
        <li><b>Le losange</b> : un parallélogramme avec quatre côtés égaux</li>
        <li><b>Le carré</b> : à la fois un rectangle et un losange</li>
      </ul>
      <div class="box warn"><b>Hiérarchie des familles</b> — Tout carré est un rectangle, tout carré est un losange, tout rectangle et tout losange sont des parallélogrammes. Mais un rectangle n'est pas forcément un carré.</div>

      <h3>5. Diagonales des parallélogrammes particuliers</h3>
      <ul>
        <li><b>Rectangle</b> : les diagonales sont de même longueur</li>
        <li><b>Losange</b> : les diagonales sont perpendiculaires</li>
        <li><b>Carré</b> : les diagonales sont égales <b>et</b> perpendiculaires</li>
      </ul>

      <h3>6. Exemple entièrement résolu</h3>
      <p>ABCD est un parallélogramme avec Â = 65°. Donner les trois autres angles.</p>
      <ul>
        <li>Les angles opposés sont égaux : Ĉ = Â = 65°</li>
        <li>Deux angles consécutifs sont supplémentaires : B̂ = 180 − 65 = 115°</li>
        <li>Et D̂ = B̂ = 115° (angles opposés)</li>
      </ul>
      <p><b>Vérification :</b> 65 + 115 + 65 + 115 = 360° ✓</p>
    ` },
    { titre:"Aires des figures", contenu:`
      <h3>1. Aire du rectangle et du carré</h3>
      <div class="formula">Rectangle : A = L × l
Carré : A = c × c = c²</div>

      <h3>2. Aire du parallélogramme</h3>
      <p>On utilise la même formule que pour le rectangle, mais avec la <b>hauteur</b> et non le côté oblique :</p>
      <div class="formula">A = base × hauteur</div>
      <div class="box warn"><b>Le piège de la hauteur</b> — La hauteur n'est pas un côté du parallélogramme : c'est la distance entre les deux bases, mesurée perpendiculairement. Utiliser le côté oblique donne une aire trop grande.</div>

      <h3>3. Aire du triangle</h3>
      <div class="formula">A = (base × hauteur) ÷ 2</div>
      <p>Un triangle occupe la moitié du parallélogramme construit sur la même base et de même hauteur.</p>

      <h3>4. Aire du losange</h3>
      <p>On utilise les diagonales :</p>
      <div class="formula">A = (d₁ × d₂) ÷ 2</div>
      <p>Pour un losange de diagonales 8 cm et 6 cm : A = (8 × 6) ÷ 2 = 24 cm².</p>

      <h3>5. Aire du trapèze</h3>
      <div class="formula">A = ((petite base + grande base) × hauteur) ÷ 2</div>
      <div class="box"><b>Moyenne des bases</b> — On peut retenir : aire du trapèze = moyenne des deux bases × hauteur. C'est cohérent avec la formule.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Un parallélogramme a une base de 9 cm et une hauteur de 4 cm. Quelle est son aire ?</p>
      <ul>
        <li>On applique A = base × hauteur</li>
        <li>A = 9 × 4 = 36 cm²</li>
      </ul>
      <p><b>Vérification :</b> l'aire est bien celle d'un rectangle de 9 sur 4. Le parallélogramme « penché » occupe la même surface que le rectangle droit de même base et même hauteur ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — les propriétés du parallélogramme et ses cas particuliers, puis les formules d'aires.</div>`,
  exercices:[
    { d:1, e:"Dans un parallélogramme, que peut-on dire des côtés opposés ?", r:"Ils sont parallèles et égaux",
      c:"C'est la double propriété : le parallélogramme a ses côtés opposés parallèles (par définition) et égaux (conséquence)." },
    { d:1, e:"Les diagonales d'un parallélogramme se coupent :", r:"En leur milieu",
      c:"C'est la propriété caractéristique du parallélogramme.\n\nRéciproquement, si les diagonales d'un quadrilatère se coupent en leur milieu, c'est un parallélogramme." },
    { d:1, e:"Quelle est l'aire d'un rectangle de 8 cm sur 5 cm ?", r:"40 cm²",
      c:"A = L × l = 8 × 5 = 40 cm²." },
    { d:1, e:"Quelle est l'aire d'un carré de 6 cm de côté ?", r:"36 cm²",
      c:"A = c² = 6² = 36 cm²." },
    { d:1, e:"Un parallélogramme a un angle de 70°. Que vaut l'angle opposé ?", r:"70°",
      c:"Dans un parallélogramme, les angles opposés sont égaux.\n\nDonc l'angle opposé vaut aussi 70°." },
    { d:1, e:"Un parallélogramme a un angle de 70°. Que vaut un angle consécutif ?", r:"110°",
      c:"Deux angles consécutifs d'un parallélogramme sont supplémentaires : leur somme vaut 180°.\n\n180 − 70 = 110°." },
    { d:1, e:"Un rectangle est-il un parallélogramme ?", r:"Oui",
      c:"Un rectangle a ses côtés opposés parallèles deux à deux.\n\nC'est donc un parallélogramme particulier, avec en plus quatre angles droits." },
    { d:1, e:"Quelle est l'aire d'un triangle de base 8 cm et de hauteur 5 cm ?", r:"20 cm²",
      c:"A = (base × hauteur) ÷ 2 = (8 × 5) ÷ 2 = 40 ÷ 2 = 20 cm²." },
    { d:1, e:"Un losange a-t-il quatre côtés égaux ?", r:"Oui",
      c:"C'est la définition du losange : un parallélogramme dont les quatre côtés sont égaux." },
    { d:1, e:"Que valent les diagonales d'un rectangle ?", r:"Elles sont égales",
      c:"Les diagonales d'un rectangle ont la même longueur.\n\nC'est une propriété caractéristique : elle permet de reconnaître un rectangle parmi les parallélogrammes." },
    { d:2, e:"Un parallélogramme a Â = 115°. Donner les trois autres angles.", r:"Ĉ = 115°, B̂ = D̂ = 65°",
      c:"Angles opposés égaux : Ĉ = Â = 115°.\n\nAngles consécutifs supplémentaires : B̂ = 180 − 115 = 65°.\n\nEt D̂ = B̂ = 65°.\n\nVérification : 115 + 65 + 115 + 65 = 360° ✓" },
    { d:2, e:"Un parallélogramme a une base de 12 cm et une hauteur de 7 cm. Quelle est son aire ?", r:"84 cm²",
      c:"A = base × hauteur = 12 × 7 = 84 cm²." },
    { d:2, e:"Un losange a des diagonales de 10 cm et 8 cm. Quelle est son aire ?", r:"40 cm²",
      c:"A = (d₁ × d₂) ÷ 2 = (10 × 8) ÷ 2 = 80 ÷ 2 = 40 cm²." },
    { d:2, e:"Dans un parallélogramme ABCD, les diagonales se coupent en O. Que peut-on dire de AO et OC ?", r:"AO = OC",
      c:"Les diagonales se coupent en leur milieu, donc O est le milieu de [AC].\n\nPar conséquent, AO = OC.\n\nDe même, BO = OD." },
    { d:2, e:"Un carré est-il un losange ?", r:"Oui",
      c:"Un carré a quatre côtés égaux, donc c'est un losange.\n\nIl a aussi quatre angles droits, donc c'est aussi un rectangle.\n\nLe carré est l'intersection des deux familles." },
    { d:2, e:"Un trapèze a des bases de 6 cm et 10 cm, et une hauteur de 4 cm. Quelle est son aire ?", r:"32 cm²",
      c:"A = ((petite base + grande base) × hauteur) ÷ 2\n= ((6 + 10) × 4) ÷ 2\n= (16 × 4) ÷ 2 = 64 ÷ 2 = 32 cm²." },
    { d:2, e:"Que valent les diagonales d'un losange ?", r:"Elles sont perpendiculaires",
      c:"Les diagonales d'un losange sont perpendiculaires.\n\nElles se coupent aussi en leur milieu, puisque le losange est un parallélogramme." },
    { d:2, e:"Un terrain rectangulaire mesure 25 m sur 12 m. Quelle est son aire ?", r:"300 m²",
      c:"A = 25 × 12 = 300 m²." },
    { d:2, e:"Un triangle a une aire de 36 cm² et une base de 9 cm. Quelle est sa hauteur ?", r:"8 cm",
      c:"A = (base × hauteur) ÷ 2 = 36.\n\nDonc base × hauteur = 72.\n\nhauteur = 72 ÷ 9 = 8 cm." },
    { d:2, e:"Dans un parallélogramme, si un angle est droit, que peut-on dire ?", r:"C'est un rectangle",
      c:"Si un parallélogramme a un angle droit, alors les angles consécutifs valent aussi 90° (car supplémentaires).\n\nLes quatre angles sont droits : c'est un rectangle." },
    { d:2, e:"Quelle est l'aire d'un losange dont le côté mesure 5 cm et la hauteur 4 cm ?", r:"20 cm²",
      c:"Un losange est un parallélogramme : A = base × hauteur.\n\nA = 5 × 4 = 20 cm².\n\n<b>Attention</b> — On peut aussi utiliser les diagonales, mais ici on ne les connaît pas. La formule base × hauteur fonctionne pour tout parallélogramme." },
    { d:3, e:"Un jardin a la forme d'un trapèze de bases 15 m et 9 m, de hauteur 6 m. Quel est son prix à 12 € le m² ?", r:"864 €",
      c:"<b>Étape 1</b> : aire.\nA = ((15 + 9) × 6) ÷ 2 = (24 × 6) ÷ 2 = 144 ÷ 2 = 72 m².\n\n<b>Étape 2</b> : prix.\n72 × 12 = 864 €." },
    { d:3, e:"Un losange a des diagonales de 12 cm et 16 cm. Quel est son périmètre ?", r:"40 cm",
      c:"<b>Étape 1</b> : les diagonales se coupent en leur milieu et sont perpendiculaires.\n\nElles forment quatre triangles rectangles dont les côtés de l'angle droit mesurent 6 cm et 8 cm.\n\n<b>Étape 2</b> : calculer le côté du losange.\nPar Pythagore : côté² = 6² + 8² = 36 + 64 = 100.\nDonc côté = 10 cm.\n\n<b>Étape 3</b> : périmètre.\n4 × 10 = 40 cm." },
    { d:3, e:"Montrer que si les diagonales d'un quadrilatère se coupent en leur milieu, c'est un parallélogramme.", r:"Démonstration",
      c:"Soit ABCD un quadrilatère, et O le milieu de [AC] et de [BD].\n\nDans le triangle ABC, O est le milieu de [AC]. Il faudrait aussi connaître un autre milieu...\n\nRaisonnons autrement. Considérons les triangles AOB et COD.\n\nAO = OC (O milieu de [AC])\nBO = OD (O milieu de [BD])\nLes angles AOB et COD sont opposés par le sommet, donc égaux.\n\nLes triangles AOB et COD ont un angle égal compris entre deux côtés égaux : ils sont superposables.\n\nDonc AB = CD, et les angles ABO et CDO sont égaux. Ces angles alternes-internes égaux montrent que (AB) ∥ (CD).\n\nDe même, on démontre (AD) ∥ (BC).\n\nConclusion : ABCD est un parallélogramme." },
    { d:3, e:"Un champ rectangulaire mesure 40 m sur 25 m. On veut l'entourer d'une clôture à 15 € le mètre. Quel est le coût ?", r:"1950 €",
      c:"<b>Étape 1</b> : périmètre.\nP = 2 × (40 + 25) = 2 × 65 = 130 m.\n\n<b>Étape 2</b> : coût.\n130 × 15 = 1950 €." },
    { d:3, e:"Une pièce rectangulaire mesure 5 m sur 4 m. On pose des dalles carrées de 50 cm de côté. Combien en faut-il ?", r:"80 dalles",
      c:"<b>Étape 1</b> : aire de la pièce.\n5 × 4 = 20 m².\n\n<b>Étape 2</b> : aire d'une dalle.\n0,5 × 0,5 = 0,25 m².\n\n<b>Étape 3</b> : nombre de dalles.\n20 ÷ 0,25 = 80 dalles." },
    { d:3, e:"Un parallélogramme et un rectangle ont la même base et la même hauteur. Que peut-on dire de leurs aires ?", r:"Elles sont égales",
      c:"C'est une conséquence directe de la formule.\n\nAire du rectangle = base × hauteur.\nAire du parallélogramme = base × hauteur.\n\nLes deux formules sont identiques : les aires sont donc égales.\n\n<b>Visualisation</b> — Si on « découpe » le triangle qui dépasse à gauche du parallélogramme et qu'on le replace à droite, on obtient exactement le rectangle." },
    { d:3, e:"Un terrain a la forme d'un parallélogramme de base 30 m et de hauteur 20 m. On le divise en deux par une diagonale. Quelle est l'aire de chaque moitié ?", r:"300 m²",
      c:"<b>Étape 1</b> : aire totale.\nA = 30 × 20 = 600 m².\n\n<b>Étape 2</b> : moitié.\n600 ÷ 2 = 300 m².\n\n<b>Justification</b> — Une diagonale partage un parallélogramme en deux triangles superposables, donc de même aire. Chacun vaut 300 m², ce qui correspond bien à (base × hauteur)/2." },
    { d:3, e:"Quel quadrilatère a ses diagonales égales ET perpendiculaires ?", r:"Le carré",
      c:"<b>Diagonales égales</b> : propriété du rectangle.\n<b>Diagonales perpendiculaires</b> : propriété du losange.\n\nUn quadrilatère qui a les deux est à la fois un rectangle et un losange : c'est un carré.\n\nAttention : les diagonales doivent aussi se couper en leur milieu, ce qui est vrai pour tout parallélogramme." },
    { d:3, e:"Une table rectangulaire mesure 1,60 m sur 0,90 m. On veut la recouvrir d'une nappe qui dépasse de 20 cm de chaque côté. Quelle est l'aire de la nappe ?", r:"4 m²",
      c:"<b>Étape 1</b> : dimensions de la nappe.\nLongueur : 1,60 + 0,20 + 0,20 = 2,00 m\nLargeur : 0,90 + 0,20 + 0,20 = 1,30 m\n\n<b>Étape 2</b> : aire.\n2,00 × 1,30 = 2,6 m².\n\nReprenons : la nappe dépasse de 20 cm de chaque côté, donc on ajoute 40 cm à chaque dimension.\n\nAire = 2,0 × 1,3 = 2,6 m²." },
    { d:3, e:"Un losange a un côté de 13 cm et des diagonales de 10 cm et 24 cm. Vérifier que le côté est cohérent.", r:"Vérifié : 5² + 12² = 13²",
      c:"Les diagonales se coupent en leur milieu et perpendiculairement.\n\nElles forment des triangles rectangles dont les côtés de l'angle droit mesurent 10/2 = 5 cm et 24/2 = 12 cm.\n\nVérifions par Pythagore : 5² + 12² = 25 + 144 = 169.\nN 13² = 169 également.\n\nL'égalité est vérifiée : le côté de 13 cm est bien cohérent avec ces diagonales." }
  ]
},
{
  id:"5e-statistiques", niveau:"5e", titre:"5e · Statistiques", temps:"18 min",
  resume:"Effectifs, fréquences, moyenne, médiane, diagrammes.",
  lecons:[
    { titre:"Effectifs et fréquences", contenu:`
      <h3>1. Vocabulaire de base</h3>
      <ul>
        <li><b>Population</b> : l'ensemble étudié (les élèves d'une classe)</li>
        <li><b>Caractère</b> : ce qu'on observe (la couleur des yeux, la taille)</li>
        <li><b>Effectif</b> : le nombre d'individus d'une catégorie</li>
        <li><b>Effectif total</b> : le nombre d'individus de toute la population</li>
      </ul>

      <h3>2. La fréquence</h3>
      <p>La fréquence d'une catégorie est la part qu'elle représente dans l'ensemble :</p>
      <div class="formula">fréquence = effectif de la catégorie ÷ effectif total</div>
      <p>On l'exprime souvent en pourcentage, en multipliant par 100.</p>
      <div class="box"><b>Contrôle de calcul</b> — La somme de toutes les fréquences vaut toujours 1 (ou 100 %). Si tu ne trouves pas ça, il y a une erreur.</div>

      <h3>3. Effectifs cumulés croissants</h3>
      <p>Pour chaque valeur, on additionne son effectif à ceux des valeurs précédentes. C'est ce qui permet de lire la médiane facilement.</p>
      <div class="formula">Valeurs 2, 4, 6 avec effectifs 3, 5, 2
Effectifs cumulés : 3, 8, 10</div>

      <h3>4. Moyenne</h3>
      <p>On additionne toutes les valeurs et on divise par l'effectif total :</p>
      <div class="formula">moyenne = somme des valeurs ÷ effectif total</div>
      <p>Avec des effectifs (valeurs répétées), on pondère :</p>
      <div class="formula">moyenne = (n₁x₁ + n₂x₂ + …) ÷ (n₁ + n₂ + …)</div>
      <div class="box"><b>Astuce de calcul</b> — Avec des effectifs identiques, la moyenne ne change pas si on ajoute une même valeur à tous les nombres. Exemple : la moyenne de 2, 3, 4 est 3, et celle de 12, 13, 14 est 13 (on a ajouté 10).</div>

      <h3>5. Moyenne pondérée</h3>
      <p>Quand les valeurs n'ont pas la même importance, on affecte un <b>coefficient</b> à chacune. C'est le cas des notes avec coefficients.</p>
      <div class="formula">Note 12 coefficient 4, note 15 coefficient 2 :
moyenne = (12×4 + 15×2) ÷ (4 + 2) = (48 + 30) ÷ 6 = 78 ÷ 6 = 13</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Voici les notes d'un élève : 8, 12, 15, 12, 13. Quelle est sa moyenne ?</p>
      <ul>
        <li>Somme : 8 + 12 + 15 + 12 + 13 = 60</li>
        <li>Effectif : 5 notes</li>
        <li>Moyenne : 60 ÷ 5 = 12</li>
      </ul>
      <p><b>Remarque :</b> la note 12 apparaît deux fois, mais cela ne change pas la méthode — on additionne simplement toutes les valeurs.</p>
    ` },
    { titre:"Médiane et représentations", contenu:`
      <h3>1. La médiane</h3>
      <p>La médiane est la valeur qui <b>partage la série en deux</b> : la moitié des valeurs sont inférieures ou égales, la moitié supérieures ou égales.</p>
      <ul>
        <li><b>Effectif impair</b> : c'est la valeur du milieu de la liste ordonnée</li>
        <li><b>Effectif pair</b> : c'est la moyenne des deux valeurs centrales</li>
      </ul>
      <div class="box warn"><b>Il faut ordonner la série</b> — On ne peut pas trouver la médiane sans avoir rangé les valeurs dans l'ordre croissant. C'est l'étape qu'on oublie le plus souvent.</div>

      <h3>2. Moyenne ou médiane ?</h3>
      <p>Les deux indiquent une position, mais pas la même chose :</p>
      <div class="box"><b>La différence essentielle</b> — La moyenne est sensible aux valeurs extrêmes, la médiane non. Si une valeur est très différente des autres, la moyenne est tirée vers elle, mais la médiane reste stable.</div>
      <p>Exemple : pour 1, 2, 3, 4, 100, la moyenne vaut 22 mais la médiane vaut 3.</p>

      <h3>3. Étendue</h3>
      <p>L'étendue est la différence entre la plus grande et la plus petite valeur :</p>
      <div class="formula">étendue = valeur maximale − valeur minimale</div>
      <p>Elle mesure la dispersion, mais uniquement en considérant les extrêmes.</p>

      <h3>4. Tableaux d'effectifs</h3>
      <p>Quand beaucoup de valeurs se répètent, on les regroupe dans un tableau d'effectifs. C'est plus lisible que de lister toutes les valeurs.</p>
      <div class="formula">Valeur : 10 | 12 | 15
Effectif : 3 | 5 | 2</div>
      <p>La moyenne se calcule alors : (10×3 + 12×5 + 15×2) ÷ 10 = (30 + 60 + 30) ÷ 10 = 12.</p>

      <h3>5. Les diagrammes</h3>
      <ul>
        <li><b>En bâtons</b> : hauteur proportionnelle à l'effectif, adapté aux valeurs discrètes</li>
        <li><b>Circulaire</b> : secteurs proportionnels aux effectifs, pour montrer les parts d'un tout</li>
        <li><b>Histogramme</b> : pour des classes de valeurs continues</li>
      </ul>
      <div class="box warn"><b>Attention à l'axe tronqué</b> — Un graphique dont l'axe vertical ne part pas de zéro exagère les différences. Vérifie toujours l'origine de l'axe avant d'interpréter.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Série : 7, 9, 11, 13, 15. Calculer la moyenne, la médiane et l'étendue.</p>
      <ul>
        <li><b>Moyenne</b> : (7 + 9 + 11 + 13 + 15) ÷ 5 = 55 ÷ 5 = 11</li>
        <li><b>Médiane</b> : la 3e valeur (effectif impair) = 11</li>
        <li><b>Étendue</b> : 15 − 7 = 8</li>
      </ul>
      <p><b>Interprétation :</b> la moyenne et la médiane sont égales (11), ce qui indique une répartition régulière des valeurs autour du centre.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — effectifs, fréquences et moyenne, puis médiane, étendue et représentations graphiques.</div>`,
  exercices:[
    { d:1, e:"Calculer la moyenne de 5, 8, 11.", r:"8",
      c:"Somme : 5 + 8 + 11 = 24.\nEffectif : 3.\n\nMoyenne : 24 ÷ 3 = 8." },
    { d:1, e:"Quelle est la médiane de 3, 7, 9, 12, 15 ?", r:"9",
      c:"La série est ordonnée, avec un effectif impair (5 valeurs).\n\nLa médiane est la 3e valeur : 9." },
    { d:1, e:"Quelle est l'étendue de 4, 9, 15, 7, 2 ?", r:"13",
      c:"Valeur maximale : 15. Valeur minimale : 2.\n\nÉtendue : 15 − 2 = 13." },
    { d:1, e:"Un effectif de 6 sur un total de 30 représente quelle fréquence ?", r:"0,2",
      c:"fréquence = 6 ÷ 30 = 0,2.\n\nEn pourcentage : 20 %." },
    { d:1, e:"Calculer la moyenne de 12, 14, 16, 18.", r:"15",
      c:"Somme : 12 + 14 + 16 + 18 = 60.\nEffectif : 4.\n\nMoyenne : 60 ÷ 4 = 15." },
    { d:1, e:"Quelle est la médiane de 2, 4, 6, 8 (effectif pair) ?", r:"5",
      c:"Effectif pair : on fait la moyenne des deux valeurs centrales.\n\nLes 2e et 3e valeurs sont 4 et 6.\n\nMédiane : (4 + 6) ÷ 2 = 5." },
    { d:1, e:"Que vaut la somme de toutes les fréquences ?", r:"1 (ou 100 %)",
      c:"Toutes les catégories couvrent l'ensemble de la population.\n\nLa somme des fréquences vaut donc 1, soit 100 %." },
    { d:1, e:"Calculer la moyenne pondérée : note 10 coefficient 2, note 15 coefficient 3.", r:"13",
      c:"(10 × 2 + 15 × 3) ÷ (2 + 3) = (20 + 45) ÷ 5 = 65 ÷ 5 = 13." },
    { d:1, e:"Une série a pour valeurs extrêmes 5 et 25. Quelle est son étendue ?", r:"20",
      c:"Étendue = 25 − 5 = 20." },
    { d:1, e:"Dans un tableau : valeur 10 effectif 4, valeur 12 effectif 1. Quel est l'effectif total ?", r:"5",
      c:"Effectif total : 4 + 1 = 5." },
    { d:2, e:"Série : 8, 12, 10, 14, 6. Calculer la moyenne.", r:"10",
      c:"Somme : 8 + 12 + 10 + 14 + 6 = 50.\nEffectif : 5.\n\nMoyenne : 50 ÷ 5 = 10." },
    { d:2, e:"Série : 8, 12, 10, 14, 6. Calculer la médiane.", r:"10",
      c:"<b>Étape 1</b> : ordonner la série.\n6, 8, 10, 12, 14.\n\n<b>Étape 2</b> : prendre la valeur centrale (effectif impair).\nLa 3e valeur est 10.\n\nMédiane : 10." },
    { d:2, e:"Sur 25 élèves, 10 font du sport. Quelle est la fréquence en pourcentage ?", r:"40 %",
      c:"fréquence = 10 ÷ 25 = 0,4.\n\nEn pourcentage : 40 %." },
    { d:2, e:"Un élève a les notes 12 (coef 1), 9 (coef 2), 15 (coef 3). Quelle est sa moyenne ?", r:"12",
      c:"(12 × 1 + 9 × 2 + 15 × 3) ÷ (1 + 2 + 3)\n= (12 + 18 + 45) ÷ 6\n= 75 ÷ 6 = 12,5.\n\nReprenons : 12 + 18 + 45 = 75, et 75 ÷ 6 = 12,5.\n\nLa moyenne est 12,5." },
    { d:2, e:"Une série a pour moyenne 15. Si on ajoute 3 à toutes les valeurs, quelle est la nouvelle moyenne ?", r:"18",
      c:"Ajouter la même valeur à toutes les données augmente la moyenne de cette valeur.\n\n15 + 3 = 18.\n\n<b>Vérification avec un exemple</b> : la série 14, 15, 16 a pour moyenne 15. En ajoutant 3 : 17, 18, 19, de moyenne 18 ✓" },
    { d:2, e:"Un tableau donne : 0 frère (5 élèves), 1 frère (12 élèves), 2 frères (8 élèves). Quel est l'effectif total ?", r:"25 élèves",
      c:"5 + 12 + 8 = 25 élèves." },
    { d:2, e:"Dans l'exercice précédent, calculer le nombre moyen de frères.", r:"1,12",
      c:"Moyenne pondérée :\n(0 × 5 + 1 × 12 + 2 × 8) ÷ 25\n= (0 + 12 + 16) ÷ 25\n= 28 ÷ 25 = 1,12.\n\nChaque élève a en moyenne 1,12 frère." },
    { d:2, e:"Pourquoi la médiane est-elle préférable à la moyenne pour les salaires ?", r:"À cause des valeurs extrêmes",
      c:"Quelques très hauts salaires tirent la moyenne vers le haut.\n\nLa médiane reste stable, car elle ne dépend que de la position centrale : elle indique le salaire tel que la moitié des gens gagne moins.\n\nC'est plus représentatif de la situation réelle." },
    { d:2, e:"Une série : 3, 5, 5, 7, 9. Calculer la moyenne et la médiane.", r:"Moyenne 5,8 et médiane 5",
      c:"<b>Moyenne</b> : (3 + 5 + 5 + 7 + 9) ÷ 5 = 29 ÷ 5 = 5,8.\n\n<b>Médiane</b> : la 3e valeur, soit 5.\n\nLes deux sont différentes ici : la valeur 9 tire la moyenne vers le haut." },
    { d:2, e:"Dans une classe, la moyenne de 15 filles est 12 et celle de 10 garçons est 14. Quelle est la moyenne générale ?", r:"12,8",
      c:"C'est une moyenne pondérée par les effectifs.\n\nMoyenne = (15 × 12 + 10 × 14) ÷ (15 + 10)\n= (180 + 140) ÷ 25\n= 320 ÷ 25 = 12,8.\n\n<b>Attention</b> — Ce n'est pas (12 + 14) ÷ 2 = 13, car les deux groupes n'ont pas le même effectif." },
    { d:3, e:"Série : 12, 8, 15, 8, 12, 10, 8. Calculer la moyenne.", r:"10,43 environ",
      c:"Somme : 12 + 8 + 15 + 8 + 12 + 10 + 8 = 73.\nEffectif : 7.\n\nMoyenne : 73 ÷ 7 ≈ 10,43.\n\n<b>Méthode par effectifs</b> : 8 apparaît 3 fois, 12 apparaît 2 fois, 15 une fois, 10 une fois.\n(8×3 + 12×2 + 15 + 10) ÷ 7 = (24 + 24 + 15 + 10) ÷ 7 = 73 ÷ 7 ✓" },
    { d:3, e:"Une série a pour médiane 12. Que peut-on dire ?", r:"Au moins la moitié des valeurs sont ≤ 12",
      c:"Par définition, la médiane sépare la série en deux moitiés.\n\nAu moins 50 % des valeurs sont inférieures ou égales à 12, et au moins 50 % sont supérieures ou égales à 12." },
    { d:3, e:"Deux classes ont les mêmes moyennes (12) mais des étendues différentes (3 et 10). Comparer.", r:"La première est plus homogène",
      c:"Les deux classes ont le même niveau moyen : 12.\n\nMais la première a une étendue de 3 (les notes vont de 10,5 à 13,5 environ), la seconde de 10 (de 7 à 17 environ).\n\n<b>Interprétation</b> — La première classe est homogène, tous les élèves ont un niveau proche. La seconde est hétérogène, avec de grands écarts entre élèves." },
    { d:3, e:"Un tableau donne : 10 (effectif 3), 12 (effectif 5), 14 (effectif 2). Calculer la médiane.", r:"12",
      c:"Effectif total : 3 + 5 + 2 = 10.\n\nLes valeurs ordonnées : trois 10, puis cinq 12, puis deux 14.\n\nLes 5e et 6e valeurs sont au cœur du bloc des 12.\n\nMédiane = (12 + 12) ÷ 2 = 12." },
    { d:3, e:"Montrer que si on double toutes les valeurs, la moyenne double.", r:"Démonstration",
      c:"Soit x₁, …, xₙ les valeurs, et m leur moyenne.\n\nNouvelles valeurs : yᵢ = 2xᵢ.\n\nNouvelle moyenne :\n(2x₁ + 2x₂ + … + 2xₙ) ÷ n\n= 2 × (x₁ + x₂ + … + xₙ) ÷ n\n= 2 × m.\n\nLa moyenne double. En revanche, l'étendue double aussi, mais la médiane double également." },
    { d:3, e:"Une entreprise a 5 salariés gagnant 1500 € et 1 directeur gagnant 12 000 €. Quelle est la moyenne ? La médiane ?", r:"Moyenne 3250 € et médiane 1500 €",
      c:"<b>Moyenne</b> : (5 × 1500 + 12 000) ÷ 6 = (7500 + 12 000) ÷ 6 = 19 500 ÷ 6 = 3250 €.\n\n<b>Médiane</b> : effectif pair (6). Les 3e et 4e valeurs sont toutes deux 1500 € (car il y a 5 salariés à 1500 €).\nMédiane = 1500 €.\n\n<b>Interprétation</b> — La moyenne est très supérieure à la médiane, ce qui signale une forte inégalité. Le seul haut salaire tire la moyenne vers le haut." },
    { d:3, e:"Dans un tableau : 5 (effectif 2), 10 (effectif 4), 15 (effectif 6), 20 (effectif 3). Calculer la moyenne.", r:"13",
      c:"Somme pondérée :\n(5 × 2 + 10 × 4 + 15 × 6 + 20 × 3) ÷ (2 + 4 + 6 + 3)\n= (10 + 40 + 90 + 60) ÷ 15\n= 200 ÷ 15 ≈ 13,33.\n\nReprenons : 200 ÷ 15 = 13,333...\n\nLa moyenne est d'environ 13,33." },
    { d:3, e:"Expliquer pourquoi la somme des fréquences vaut toujours 1.", r:"Démonstration",
      c:"Les fréquences sont définies par fᵢ = nᵢ/N, où nᵢ est l'effectif d'une catégorie et N l'effectif total.\n\nLa somme des effectifs vaut N : n₁ + n₂ + … + nₖ = N.\n\nDonc la somme des fréquences :\n(n₁ + n₂ + … + nₖ) ÷ N = N ÷ N = 1.\n\nC'est une conséquence directe du fait que les catégories recouvrent toute la population." },
    { d:3, e:"Un élève a une moyenne de 11 sur 5 notes. Il obtient 15 au contrôle suivant. Quelle est sa nouvelle moyenne ?", r:"11,67 environ",
      c:"<b>Étape 1</b> : total des 5 premières notes.\n11 × 5 = 55.\n\n<b>Étape 2</b> : nouvelle note.\n55 + 15 = 70.\n\n<b>Étape 3</b> : nouvelle moyenne.\n70 ÷ 6 ≈ 11,67.\n\nLa moyenne progresse de 0,67 point." },
    { d:3, e:"Peut-on avoir une moyenne de 12 et une médiane de 15 ?", r:"Oui",
      c:"Exemple : la série 5, 6, 7, 15, 20, 20.\n\nMédiane : (7 + 15) ÷ 2 = 11. Essayons autre chose.\n\nPrenons 1, 2, 15, 16, 17.\nMoyenne : (1 + 2 + 15 + 16 + 17) ÷ 5 = 51 ÷ 5 = 10,2.\nMédiane : 15.\n\nVoilà un cas où la médiane (15) est supérieure à la moyenne (10,2). C'est possible quand il y a des valeurs très basses qui tirent la moyenne vers le bas." },
    { d:3, e:"Dans une enquête, 45 % de 120 personnes préfèrent le thé. Combien cela représente-t-il ?", r:"54 personnes",
      c:"45 % de 120 = 120 × 0,45 = 54.\n\n<b>Méthode par décomposition</b> : 10 % de 120 = 12. Donc 40 % = 48, et 5 % = 6. Total : 48 + 6 = 54 ✓" },
    { d:3, e:"Une série a une moyenne de 14 et une étendue de 2. Les valeurs sont-elles proches les unes des autres ?", r:"Oui, la série est très homogène",
      c:"Une étendue de 2 signifie que l'écart entre la plus petite et la plus grande valeur est de 2.\n\nComme la moyenne est 14, les valeurs sont toutes comprises entre 13 et 15 (environ).\n\nLa série est donc très resserrée : tous les individus ont des valeurs proches." }
  ]
}
];

window.MATHSLY_5E = { chapitres: CINQUIEME_CHAPITRES, qcm: [] };
