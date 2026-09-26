/* =========================================================
   MATHSLY — Contenu de la classe de Seconde
   Chapitres : nombres réels · arithmétique · équations et inéquations ·
               vecteurs · droites du plan · fonctions · statistiques
   ========================================================= */
const SECONDE_CHAPITRES = [
{
  id:"2de-reels", niveau:"2de", titre:"2de · Nombres réels et intervalles", temps:"22 min",
  resume:"Ensembles de nombres, intervalles, valeur absolue, encadrements.",
  lecons:[
    { titre:"Ensembles de nombres et intervalles", contenu:`
      <h3>1. Les ensembles emboîtés</h3>
      <p>Du plus petit au plus grand : ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Chaque ensemble contient tous ceux qui le précèdent.</p>
      <ul>
        <li><b>ℕ</b> : entiers naturels (0, 1, 2, …)</li>
        <li><b>ℤ</b> : entiers relatifs (…, −2, −1, 0, 1, …)</li>
        <li><b>ℚ</b> : rationnels, quotients de deux entiers (1/3, −5/2, 0,25)</li>
        <li><b>ℝ</b> : tous les réels de la droite graduée (√2, π, e)</li>
      </ul>
      <div class="box"><b>Résultat non évident</b> — √2 n'est pas rationnel. Sa démonstration, faite en seconde, est la première preuve qu'il existe des nombres hors de ℚ. On la fait par l'absurde : si √2 = p/q avec p et q premiers entre eux, alors p² = 2q², donc p est pair, donc q aussi — contradiction avec « premiers entre eux ».</div>

      <h3>2. Les intervalles</h3>
      <p>Un intervalle est une portion de la droite réelle. Les crochets traduisent l'inclusion des bornes :</p>
      <div class="formula">[2 ; 5]     →  2 ≤ x ≤ 5      (bornes incluses)
]2 ; 5[     →  2 &lt; x &lt; 5      (bornes exclues)
[2 ; 5[     →  2 ≤ x &lt; 5      (mixte)
]−∞ ; 3]    →  x ≤ 3
[4 ; +∞[    →  x ≥ 4</div>
      <div class="box warn"><b>Erreur classique</b> — Écrire [−∞ ; 3] avec un crochet fermé. L'infini n'est pas un nombre : son crochet est <b>toujours</b> ouvert.</div>

      <h3>3. Intersection et réunion</h3>
      <ul>
        <li><b>I ∩ J</b> : les réels présents dans les deux intervalles à la fois</li>
        <li><b>I ∪ J</b> : les réels présents dans l'un au moins</li>
      </ul>
      <p>Exemple : [1 ; 4] ∩ [3 ; 7] = [3 ; 4] et [1 ; 4] ∪ [3 ; 7] = [1 ; 7].</p>

      <h3>4. Valeur absolue comme distance</h3>
      <p>|x − a| est la <b>distance</b> entre x et a sur la droite graduée. Cette lecture géométrique résout la plupart des équations et inéquations :</p>
      <div class="formula">|x − a| = r     ⟺  x = a − r  ou  x = a + r
|x − a| ≤ r     ⟺  x ∈ [a − r ; a + r]</div>

      <h3>5. Encadrement et amplitude</h3>
      <p>Encadrer un nombre, c'est donner deux valeurs entre lesquelles il se trouve. L'<b>amplitude</b> est la largeur de l'encadrement : si 3,14 &lt; π &lt; 3,15, l'amplitude vaut 0,01.</p>
      <div class="box"><b>Ce qu'il faut comprendre</b> — Une calculatrice n'affiche jamais la valeur exacte de √2 ou de π, seulement un encadrement. Plus l'amplitude est petite, plus l'encadrement est précis.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Résoudre |2x − 6| ≤ 4 dans ℝ.</p>
      <ul>
        <li>On factorise : |2x − 6| = 2|x − 3|</li>
        <li>L'inéquation devient 2|x − 3| ≤ 4, soit |x − 3| ≤ 2</li>
        <li>Donc x ∈ [3 − 2 ; 3 + 2] = [1 ; 5]</li>
      </ul>
      <p><b>Vérification :</b> pour x = 5, |2×5 − 6| = |4| = 4, l'inégalité est bien vérifiée (cas limite) ✓</p>
    ` },
    { titre:"Calcul numérique et racines carrées", contenu:`
      <h3>1. Les règles sur les racines carrées</h3>
      <p>La racine carrée d'un produit est le produit des racines, mais attention : <b>cela ne marche pas pour une somme</b>.</p>
      <div class="formula">√(ab) = √a × √b        (pour a, b ≥ 0)
√(a/b) = √a / √b
√(a²) = |a|</div>
      <div class="box warn"><b>L'erreur la plus fréquente</b> — √(a + b) n'est <b>pas</b> égale à √a + √b. Exemple : √(9 + 16) = √25 = 5, alors que √9 + √16 = 3 + 4 = 7.</div>

      <h3>2. Simplifier une racine</h3>
      <p>On fait apparaître un carré parfait sous la racine :</p>
      <div class="formula">√48 = √(16 × 3) = 4√3
√75 = √(25 × 3) = 5√3</div>

      <h3>3. Rendre rationnel un dénominateur</h3>
      <p>On multiplie par la quantité conjuguée pour faire disparaître la racine au dénominateur.</p>
      <div class="formula">1/√2 = √2/2
1/(√3 + 1) = (√3 − 1)/[(√3+1)(√3−1)] = (√3 − 1)/2</div>

      <h3>4. Identités remarquables et calcul</h3>
      <p>Les trois identités servent aussi à simplifier des expressions avec racines :</p>
      <div class="formula">(√a + √b)² = a + b + 2√(ab)
(√a − √b)(√a + √b) = a − b</div>

      <h3>5. Équations avec racine carrée</h3>
      <p>Trois conditions, à ne jamais oublier :</p>
      <ul>
        <li>Le contenu de la racine doit être positif</li>
        <li>Le membre de droite doit être positif (une racine ne l'est jamais négative)</li>
        <li>On vérifie toujours la solution dans l'équation de départ</li>
      </ul>
      <div class="box"><b>Pourquoi vérifier</b> — En élevant au carré, on peut introduire des solutions parasites. Par exemple, √x = −1 donnerait x = 1 en élevant au carré, mais √1 = 1 ≠ −1 : la solution est fausse.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Résoudre √(x + 3) = x − 1.</p>
      <ul>
        <li>Conditions : x + 3 ≥ 0 (donc x ≥ −3) et x − 1 ≥ 0 (donc x ≥ 1). Bilan : x ≥ 1.</li>
        <li>On élève au carré : x + 3 = (x − 1)²</li>
        <li>x + 3 = x² − 2x + 1, soit x² − 3x − 2 = 0</li>
        <li>Δ = 9 + 8 = 17, √Δ ≈ 4,123</li>
        <li>x = (3 ± 4,123)/2, soit x ≈ 3,56 ou x ≈ −0,56</li>
        <li>La condition x ≥ 1 élimine −0,56</li>
      </ul>
      <p><b>Conclusion :</b> une seule solution, x = (3 + √17)/2 ≈ 3,56.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — les ensembles de nombres et les intervalles, puis le calcul avec les racines carrées. Ce sont les outils de base de toute la seconde.</div>`,
  exercices:[
    { d:1, e:"À quel ensemble appartient −7 ?", r:"ℤ, mais pas ℕ",
      c:"−7 est un entier relatif, donc dans ℤ.\n\nMais ℕ ne contient que les entiers positifs ou nuls : −7 n'y est pas." },
    { d:1, e:"√2 appartient-il à ℚ ?", r:"Non",
      c:"√2 ≈ 1,41421356… n'est pas un quotient de deux entiers.\n\nC'est un irrationnel : sa démonstration se fait par l'absurde." },
    { d:1, e:"Comment s'écrit l'ensemble des x tels que −2 ≤ x < 5 ?", r:"[−2 ; 5[",
      c:"−2 est inclus (≤), donc crochet fermé.\n5 est exclu (<), donc crochet ouvert.\n\nD'où [−2 ; 5[." },
    { d:1, e:"Comment s'écrit l'ensemble des x tels que x > 3 ?", r:"]3 ; +∞[",
      c:"3 est exclu, donc crochet ouvert.\n\nLe crochet de l'infini est toujours ouvert." },
    { d:1, e:"Que vaut [1 ; 6] ∩ [4 ; 9] ?", r:"[4 ; 6]",
      c:"L'intersection contient les réels présents dans les deux intervalles.\n\nDe 4 (borne basse du second) à 6 (borne haute du premier) : [4 ; 6]." },
    { d:1, e:"Que vaut [1 ; 4] ∪ [3 ; 7] ?", r:"[1 ; 7]",
      c:"La réunion regroupe tous les réels de l'un ou l'autre intervalle.\n\nComme ils se chevauchent, le résultat est un seul intervalle : [1 ; 7]." },
    { d:1, e:"Que vaut |−5| ?", r:"5",
      c:"La valeur absolue est la distance à zéro, toujours positive.\n\n|−5| = 5." },
    { d:1, e:"Simplifier √50.", r:"5√2",
      c:"On cherche un carré parfait dans 50 : 50 = 25 × 2.\n\n√50 = √25 × √2 = 5√2.\n\nVérification : 5√2 ≈ 7,071 et √50 ≈ 7,071 ✓" },
    { d:1, e:"Simplifier √(9 × 4).", r:"6",
      c:"√36 = 6.\n\nOn peut aussi écrire √9 × √4 = 3 × 2 = 6. La propriété fonctionne pour un produit." },
    { d:1, e:"Que vaut √(a²) si a = −3 ?", r:"3",
      c:"√(a²) = √9 = 3, et non −3.\n\nEn général, √(a²) = |a| : la racine carrée donne toujours un résultat positif." },
    { d:2, e:"Résoudre |x − 2| ≤ 3.", r:"x ∈ [−1 ; 5]",
      c:"|x − a| ≤ r équivaut à x ∈ [a − r ; a + r].\n\nIci a = 2 et r = 3, donc x ∈ [2 − 3 ; 2 + 3] = [−1 ; 5]." },
    { d:2, e:"Résoudre |x + 1| = 4.", r:"x = 3 ou x = −5",
      c:"|x − (−1)| = 4 : les points à distance 4 de −1.\n\nx = −1 + 4 = 3 ou x = −1 − 4 = −5." },
    { d:2, e:"Écrire sans valeur absolue |x − 3| pour x ≥ 3.", r:"x − 3",
      c:"Quand x ≥ 3, la quantité x − 3 est positive ou nulle.\n\nLa valeur absolue d'un nombre positif est ce nombre lui-même : |x − 3| = x − 3." },
    { d:2, e:"Simplifier (√5 + 1)(√5 − 1).", r:"4",
      c:"C'est une identité remarquable (a+b)(a−b) = a² − b².\n\n(√5)² − 1² = 5 − 1 = 4." },
    { d:2, e:"Rendre rationnel 1/√3.", r:"√3/3",
      c:"On multiplie numérateur et dénominateur par √3 :\n\n1/√3 = (1 × √3)/(√3 × √3) = √3/3.\n\nVérification : √3/3 ≈ 0,577 et 1/√3 ≈ 0,577 ✓" },
    { d:2, e:"Encadrer √7 par deux entiers consécutifs.", r:"2 < √7 < 3",
      c:"On cherche les carrés autour de 7 :\n4 &lt; 7 &lt; 9.\nDonc √4 &lt; √7 &lt; √9, soit 2 &lt; √7 &lt; 3.\n\nPlus précisément, √7 ≈ 2,646." },
    { d:2, e:"Résoudre √x = 4.", r:"x = 16",
      c:"On élève au carré : x = 16.\n\nVérification : √16 = 4 ✓\n\nCondition : x doit être ≥ 0, ce qui est bien le cas." },
    { d:2, e:"Vrai ou faux : √(a+b) = √a + √b.", r:"Faux",
      c:"Contre-exemple : √(9+16) = √25 = 5, alors que √9 + √16 = 3 + 4 = 7.\n\nLa propriété ne vaut que pour un produit : √(ab) = √a × √b." },
    { d:2, e:"Déterminer l'intersection de ]−∞ ; 5] et [2 ; +∞[.", r:"[2 ; 5]",
      c:"On cherche les réels présents dans les deux : ceux qui sont à la fois ≤ 5 et ≥ 2.\n\nC'est [2 ; 5]." },
    { d:2, e:"Simplifier √8 + √18.", r:"5√2",
      c:"√8 = √(4×2) = 2√2.\n√18 = √(9×2) = 3√2.\n\nSomme : 2√2 + 3√2 = 5√2.\n\nOn ne peut additionner que des racines de même radicande." },
    { d:2, e:"Pour quel x a-t-on |x − 5| < 2 ?", r:"x ∈ ]3 ; 7[",
      c:"|x − 5| < 2 signifie : la distance de x à 5 est inférieure à 2.\n\nDonc x ∈ ]5 − 2 ; 5 + 2[ = ]3 ; 7[.\n\nAttention : les crochets sont ouverts car l'inégalité est stricte." },
    { d:3, e:"Résoudre √(2x + 1) = x − 1.", r:"x = 4",
      c:"Conditions : 2x + 1 ≥ 0 (x ≥ −1/2) et x − 1 ≥ 0 (x ≥ 1). Bilan : x ≥ 1.\n\nOn élève au carré :\n2x + 1 = (x−1)² = x² − 2x + 1\n0 = x² − 4x\n0 = x(x − 4)\n\nSolutions : x = 0 ou x = 4.\n\nLa condition x ≥ 1 élimine 0. Vérification : √9 = 3 et 4 − 1 = 3 ✓\n\nSolution : x = 4." },
    { d:3, e:"Montrer que √2 est irrationnel.", r:"Démonstration par l'absurde",
      c:"Supposons que √2 soit rationnel : il existe p et q entiers, avec q ≠ 0, tels que √2 = p/q, la fraction étant irréductible.\n\nAlors p² = 2q².\n\nDonc p² est pair, ce qui implique que p est pair. Écrivons p = 2k.\n\nAlors (2k)² = 2q², soit 4k² = 2q², donc q² = 2k².\n\nDonc q² est pair, donc q est pair.\n\nMais alors p et q sont tous deux pairs : la fraction p/q n'était pas irréductible. Contradiction.\n\nConclusion : √2 n'est pas rationnel." },
    { d:3, e:"Résoudre x² < 5.", r:"x ∈ ]−√5 ; √5[",
      c:"On écrit x² − 5 < 0, soit (x − √5)(x + √5) < 0.\n\nRacines : −√5 et √5. Comme a = 1 > 0, le trinôme est négatif <b>entre</b> les racines.\n\nSolution : x ∈ ]−√5 ; √5[, soit environ ]−2,236 ; 2,236[." },
    { d:3, e:"Déterminer l'ensemble des x tels que |2x − 1| ≥ 3.", r:"x ≤ −1 ou x ≥ 2",
      c:"|2x − 1| ≥ 3 signifie que la distance est au moins 3, donc le point est <b>à l'extérieur</b> de l'intervalle.\n\nDeux cas :\n2x − 1 ≥ 3 ⟹ 2x ≥ 4 ⟹ x ≥ 2\n2x − 1 ≤ −3 ⟹ 2x ≤ −2 ⟹ x ≤ −1\n\nSolution : x ∈ ]−∞ ; −1] ∪ [2 ; +∞[." },
    { d:3, e:"Simplifier (3 + √2)².", r:"11 + 6√2",
      c:"Identité remarquable : (a+b)² = a² + 2ab + b².\n\n3² + 2×3×√2 + (√2)²\n= 9 + 6√2 + 2\n= 11 + 6√2.\n\nVérification numérique : (3 + 1,414)² ≈ 19,485 et 11 + 8,485 ≈ 19,485 ✓" },
    { d:3, e:"Montrer que la somme d'un rationnel et d'un irrationnel est irrationnelle.", r:"Démonstration",
      c:"Soit r ∈ ℚ et x ∉ ℚ. Montrons par l'absurde que r + x est irrationnel.\n\nSupposons r + x = q avec q ∈ ℚ.\n\nAlors x = q − r. Or q et r sont tous deux rationnels, et ℚ est stable par soustraction : q − r ∈ ℚ.\n\nDonc x serait rationnel. Contradiction, puisque x est irrationnel par hypothèse.\n\nConclusion : r + x n'est pas rationnel." },
    { d:3, e:"Résoudre l'inéquation √x < x.", r:"x > 1",
      c:"Conditions : x ≥ 0 (contenu de la racine) et x ≥ 0 (comparaison à x, qui doit être positif pour être supérieur à une racine).\n\nSur [0 ; +∞[, √x < x ⟺ x < x² (la fonction carré est croissante sur [0 ; +∞[)\n⟺ x² − x > 0\n⟺ x(x − 1) > 0\n\nComme a = 1 > 0, c'est positif à l'extérieur des racines 0 et 1.\n\nSolution : x < 0 ou x > 1. Combiné avec x ≥ 0 : x > 1." },
    { d:3, e:"Trouver deux irrationnels dont la somme est rationnelle.", r:"√2 et −√2",
      c:"Prenons x = √2 (irrationnel) et y = −√2 (irrationnel aussi).\n\nAlors x + y = √2 − √2 = 0, qui est rationnel.\n\nCet exemple montre que l'ensemble des irrationnels n'est pas stable par addition, contrairement à ℚ." },
    { d:3, e:"Déterminer l'encadrement de 1/7 à 10⁻³ près.", r:"0,142 < 1/7 < 0,143",
      c:"Calculons : 1/7 = 0,142857142857…\n\nOn garde trois décimales :\n0,142 < 1/7 < 0,143.\n\nL'amplitude de cet encadrement est 0,001 = 10⁻³, conformément à la demande." },
    { d:3, e:"Montrer que |a| ≤ b équivaut à −b ≤ a ≤ b (pour b ≥ 0).", r:"Démonstration",
      c:"<b>Sens direct</b> : supposons |a| ≤ b.\n\nDeux cas :\n— si a ≥ 0, alors |a| = a, donc a ≤ b. Et a ≥ 0 ≥ −b, donc −b ≤ a ≤ b ✓\n— si a < 0, alors |a| = −a, donc −a ≤ b, soit a ≥ −b. Et a < 0 ≤ b, donc −b ≤ a ≤ b ✓\n\n<b>Sens réciproque</b> : supposons −b ≤ a ≤ b.\n\n— si a ≥ 0, |a| = a ≤ b ✓\n— si a < 0, |a| = −a. Or a ≥ −b donne −a ≤ b ✓\n\nDans tous les cas, |a| ≤ b. C'est cette équivalence qui justifie la traduction |x − a| ≤ r ⟺ x ∈ [a−r ; a+r]." }
  ]
},
{
  id:"2de-arithmetique", niveau:"2de", titre:"2de · Arithmétique", temps:"20 min",
  resume:"Divisibilité, division euclidienne, nombres premiers, congruences.",
  lecons:[
    { titre:"Division euclidienne et divisibilité", contenu:`
      <h3>1. La division euclidienne</h3>
      <p>Pour tout entier a et tout entier b &gt; 0, il existe un unique couple (q, r) tel que :</p>
      <div class="formula">a = b × q + r        avec 0 ≤ r &lt; b</div>
      <p>q est le quotient, r le reste. La condition <b>0 ≤ r &lt; b</b> est ce qui rend le couple unique.</p>
      <div class="box warn"><b>Le reste est toujours positif</b> — On ne dit jamais « −17 = 5 × (−4) + 3 » sans vérifier que 3 &lt; 5. Et pour un nombre négatif, par exemple −17 divisé par 5 : le quotient est −4 et le reste 3, car −17 = 5×(−4) + 3.</div>

      <h3>2. Divisibilité</h3>
      <p>b divise a s'il existe un entier k tel que a = b × k. Le reste de la division euclidienne est alors 0.</p>
      <p>Vocabulaire : b est un <b>diviseur</b> de a, et a est un <b>multiple</b> de b.</p>

      <h3>3. Les critères de divisibilité</h3>
      <ul>
        <li><b>2</b> : le chiffre des unités est pair (0, 2, 4, 6, 8)</li>
        <li><b>3</b> : la somme des chiffres est divisible par 3</li>
        <li><b>5</b> : le chiffre des unités est 0 ou 5</li>
        <li><b>9</b> : la somme des chiffres est divisible par 9</li>
        <li><b>4</b> : le nombre formé des deux derniers chiffres est divisible par 4</li>
      </ul>

      <h3>4. Propriétés de la divisibilité</h3>
      <p>Si d divise a et b, alors d divise toute combinaison linéaire :</p>
      <div class="formula">d | a et d | b  ⟹  d | (au + bv)        pour tous entiers u, v</div>
      <div class="box"><b>Usage typique</b> — Pour montrer que 3 divise n(n+1)(n+2), on étudie les restes possibles de n dans la division par 3. C'est la méthode de la disjonction des cas.</div>

      <h3>5. Nombres premiers</h3>
      <p>Un nombre premier a exactement <b>deux</b> diviseurs : 1 et lui-même. Les premiers sont 2, 3, 5, 7, 11, 13, 17, 19, 23, 29…</p>
      <div class="box warn"><b>Deux exceptions</b> — 1 n'est pas premier (il n'a qu'un diviseur), et 2 est le seul nombre premier pair.</div>
      <p>Tout entier &gt; 1 se décompose de façon <b>unique</b> en produit de facteurs premiers. C'est le théorème fondamental de l'arithmétique.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Déterminer le reste de la division de 1234 par 7.</p>
      <ul>
        <li>On cherche le plus grand multiple de 7 inférieur à 1234</li>
        <li>7 × 176 = 1232</li>
        <li>1234 = 7 × 176 + 2, avec 0 ≤ 2 &lt; 7</li>
      </ul>
      <p><b>Conclusion :</b> quotient 176, reste 2. Vérification : 7 × 176 + 2 = 1232 + 2 = 1234 ✓</p>
    ` },
    { titre:"Congruences et raisonnements", contenu:`
      <h3>1. Définition des congruences</h3>
      <p>a et b sont congrus modulo n si leur différence est divisible par n :</p>
      <div class="formula">a ≡ b [n]   ⟺   n divise (a − b)</div>
      <p>Autrement dit, a et b ont le même reste dans la division euclidienne par n.</p>

      <h3>2. Propriétés</h3>
      <p>Les congruences se comportent comme des égalités :</p>
      <div class="formula">a ≡ b [n] et b ≡ c [n]  ⟹  a ≡ c [n]     (transitivité)
a ≡ b [n] et c ≡ d [n]  ⟹  a + c ≡ b + d [n]  (addition)
a ≡ b [n] et c ≡ d [n]  ⟹  a × c ≡ b × d [n]  (multiplication)
a ≡ b [n]               ⟹  aᵏ ≡ bᵏ [n]        (puissance)</div>
      <div class="box"><b>Attention à la division</b> — Contrairement aux égalités, on ne peut PAS simplifier par un facteur dans une congruence. Par exemple 6 ≡ 0 [6] et 6 ≡ 0 [6], mais en divisant par 3 : 2 ≡ 0 [6] est faux. La division exige des conditions supplémentaires.</div>

      <h3>3. Étudier la parité</h3>
      <p>La parité s'étudie modulo 2. Un entier n est pair si n ≡ 0 [2], impair si n ≡ 1 [2].</p>
      <div class="box"><b>Application</b> — Pour montrer que n² + n est toujours pair : n pair donne n² ≡ 0 et n ≡ 0, somme 0. n impair donne n² ≡ 1 et n ≡ 1, somme 2 ≡ 0 [2]. Dans les deux cas, le résultat est pair.</div>

      <h3>4. Le raisonnement par disjonction des cas</h3>
      <p>Pour étudier une propriété modulo n, on distingue les n cas possibles. Par exemple, pour modulo 3, on étudie n ≡ 0, n ≡ 1 et n ≡ 2.</p>
      <p>C'est la méthode reine pour démontrer qu'une expression est toujours divisible par un entier donné.</p>

      <h3>5. Raisonnement par l'absurde</h3>
      <p>Pour montrer qu'une propriété est vraie, on suppose le contraire et on cherche une contradiction. L'exemple canonique est l'irrationalité de √2, vue dans le chapitre sur les réels.</p>
      <div class="box warn"><b>Structure de rédaction</b> — On annonce clairement l'hypothèse : « Supposons que… ». Puis on déroule jusqu'à la contradiction : « Ceci est impossible car… ». Puis on conclut : « Donc la supposition était fausse, la propriété est vraie. »</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Montrer que pour tout entier n, n(n+1)(n+2) est divisible par 3.</p>
      <ul>
        <li>On distingue les cas selon le reste de n modulo 3</li>
        <li><b>Cas 1</b> : n ≡ 0 [3]. Alors n est divisible par 3, donc le produit aussi.</li>
        <li><b>Cas 2</b> : n ≡ 1 [3]. Alors n + 2 ≡ 1 + 2 = 3 ≡ 0 [3] : c'est n+2 qui est divisible par 3.</li>
        <li><b>Cas 3</b> : n ≡ 2 [3]. Alors n + 1 ≡ 2 + 1 = 3 ≡ 0 [3] : c'est n+1 qui est divisible par 3.</li>
      </ul>
      <p><b>Conclusion :</b> dans tous les cas, l'un des trois facteurs consécutifs est divisible par 3, donc le produit l'est aussi.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — la division euclidienne et les nombres premiers, puis les congruences et les méthodes de raisonnement associées.</div>`,
  exercices:[
    { d:1, e:"3 divise-t-il 123 ?", r:"Oui",
      c:"Critère de divisibilité par 3 : on additionne les chiffres.\n1 + 2 + 3 = 6, divisible par 3.\n\nDonc 123 est divisible par 3. Vérification : 123 = 3 × 41 ✓" },
    { d:1, e:"Le nombre 1 est-il premier ?", r:"Non",
      c:"Un nombre premier a exactement deux diviseurs distincts.\n\nOr 1 n'a qu'un seul diviseur : lui-même. Il n'est pas premier." },
    { d:1, e:"2 est-il premier ?", r:"Oui, et c'est le seul pair",
      c:"2 a exactement deux diviseurs : 1 et 2. Il est donc premier.\n\nC'est le seul nombre premier pair, car tout autre nombre pair est divisible par 2." },
    { d:1, e:"Décomposer 60 en facteurs premiers.", r:"2² × 3 × 5",
      c:"On divise successivement :\n60 = 2 × 30 = 2 × 2 × 15 = 2² × 3 × 5.\n\nVérification : 4 × 3 × 5 = 60 ✓" },
    { d:1, e:"Quel est le reste de la division de 17 par 5 ?", r:"2",
      c:"17 = 5 × 3 + 2, avec 0 ≤ 2 < 5.\n\nLe quotient est 3 et le reste 2." },
    { d:1, e:"5 divise-t-il 87 ?", r:"Non",
      c:"Le chiffre des unités de 87 est 7, qui n'est ni 0 ni 5.\n\nDonc 87 n'est pas divisible par 5. En effet, 87 = 5 × 17 + 2." },
    { d:1, e:"Quels sont les diviseurs de 12 ?", r:"1, 2, 3, 4, 6, 12",
      c:"On cherche tous les entiers qui divisent 12.\n\n12 = 1×12 = 2×6 = 3×4.\n\nLes diviseurs sont 1, 2, 3, 4, 6 et 12." },
    { d:1, e:"Que vaut 10 ≡ ? modulo 3 ?", r:"1",
      c:"10 = 3 × 3 + 1, donc 10 ≡ 1 [3].\n\nAutrement dit, le reste de la division de 10 par 3 est 1." },
    { d:1, e:"Un nombre divisible par 9 est-il divisible par 3 ?", r:"Oui",
      c:"Si 9 divise n, alors n = 9k = 3 × (3k), donc 3 divise n.\n\nLa réciproque est fausse : 6 est divisible par 3 mais pas par 9." },
    { d:1, e:"Que vaut 7 ≡ ? modulo 7 ?", r:"0",
      c:"7 = 7 × 1 + 0, donc 7 ≡ 0 [7].\n\nTout multiple de n est congru à 0 modulo n." },
    { d:2, e:"Montrer que n² + n est toujours pair.", r:"Démonstration",
      c:"On distingue deux cas.\n\n<b>Cas 1</b> : n est pair, donc n = 2k. Alors n² + n = 4k² + 2k = 2(2k² + k), qui est pair.\n\n<b>Cas 2</b> : n est impair, donc n = 2k+1. Alors n² = 4k² + 4k + 1, et n² + n = 4k² + 4k + 1 + 2k + 1 = 4k² + 6k + 2 = 2(2k² + 3k + 1), qui est pair.\n\nDans les deux cas, n² + n est pair.\n\n<b>Méthode plus rapide</b> : n² + n = n(n+1), produit de deux entiers consécutifs. L'un des deux est toujours pair, donc le produit est pair." },
    { d:2, e:"Déterminer le reste de 2¹⁰⁰ dans la division par 3.", r:"1",
      c:"On travaille modulo 3.\n\n2 ≡ 2 [3], et 2 ≡ −1 [3].\n\nDonc 2¹⁰⁰ ≡ (−1)¹⁰⁰ = 1 [3].\n\nLe reste est 1.\n\nAstuce : remplacer 2 par −1 simplifie les puissances, car (−1)ⁿ vaut 1 ou −1." },
    { d:2, e:"Montrer que le produit de deux entiers impairs est impair.", r:"Démonstration",
      c:"Soit a = 2k + 1 et b = 2m + 1 deux entiers impairs.\n\na × b = (2k+1)(2m+1) = 4km + 2k + 2m + 1 = 2(2km + k + m) + 1.\n\nCette écriture est de la forme 2N + 1 avec N entier, donc le produit est impair.\n\n<b>Version congruences</b> : a ≡ 1 [2] et b ≡ 1 [2], donc ab ≡ 1 [2]." },
    { d:2, e:"Décomposer 360 en facteurs premiers.", r:"2³ × 3² × 5",
      c:"360 = 36 × 10 = (6²) × (2 × 5) = (2×3)² × 2 × 5 = 2² × 3² × 2 × 5 = 2³ × 3² × 5.\n\nVérification : 8 × 9 × 5 = 72 × 5 = 360 ✓" },
    { d:2, e:"Montrer que si n est impair, alors n² − 1 est divisible par 8.", r:"Démonstration",
      c:"Soit n = 2k + 1.\n\nn² − 1 = (2k+1)² − 1 = 4k² + 4k + 1 − 1 = 4k² + 4k = 4k(k+1).\n\nOr k(k+1) est le produit de deux entiers consécutifs, donc il est pair : k(k+1) = 2m.\n\nDonc n² − 1 = 4 × 2m = 8m, divisible par 8.\n\nTest : pour n = 5, n² − 1 = 24 = 8 × 3 ✓" },
    { d:2, e:"Que vaut 5 ≡ ? modulo 7, pour 5² ?", r:"4",
      c:"5² = 25.\n25 = 7 × 3 + 4, donc 25 ≡ 4 [7].\n\nAutre méthode : 5 ≡ 5 [7], donc 5² ≡ 25 ≡ 4 [7]." },
    { d:2, e:"Trouver tous les entiers n tels que n ≡ 2 [5] et 0 ≤ n < 20.", r:"2, 7, 12, 17",
      c:"Les entiers congrus à 2 modulo 5 sont de la forme n = 5k + 2.\n\nPour k = 0 : 2\nPour k = 1 : 7\nPour k = 2 : 12\nPour k = 3 : 17\nPour k = 4 : 22 (hors intervalle)\n\nDonc 2, 7, 12 et 17." },
    { d:2, e:"Montrer que la somme de trois entiers consécutifs est divisible par 3.", r:"Démonstration",
      c:"Soit n, n+1, n+2 les trois entiers consécutifs.\n\nSomme : n + (n+1) + (n+2) = 3n + 3 = 3(n + 1).\n\nCette expression est de la forme 3N, donc divisible par 3.\n\nTest : 7 + 8 + 9 = 24 = 3 × 8 ✓" },
    { d:2, e:"Déterminer le reste de la division de 3⁵ par 7.", r:"5",
      c:"Calculons : 3⁵ = 243.\n\n243 = 7 × 34 + 5, car 7 × 34 = 238.\n\nDonc le reste est 5.\n\nAutre méthode par congruences : 3² = 9 ≡ 2 [7], 3⁴ ≡ 4 [7], 3⁵ ≡ 4×3 = 12 ≡ 5 [7] ✓" },
    { d:2, e:"Un entier est divisible par 6 si et seulement si :", r:"Il est divisible par 2 et par 3",
      c:"Comme 6 = 2 × 3 et que 2 et 3 sont <b>premiers entre eux</b>, un nombre est divisible par 6 si et seulement s'il est divisible par les deux.\n\nAttention : ce raisonnement ne marche pas avec 4 et 6 par exemple, qui ne sont pas premiers entre eux." },
    { d:2, e:"Montrer que n² − n est toujours pair.", r:"Démonstration",
      c:"n² − n = n(n − 1), produit de deux entiers consécutifs.\n\nParmi deux entiers consécutifs, l'un est toujours pair.\n\nDonc le produit est pair.\n\nAutre rédaction : si n est pair, n² est pair et n est pair, donc la différence est paire. Si n est impair, n² est impair et n est impair, donc la différence de deux impairs est paire." },
    { d:3, e:"Montrer que 2ⁿ − 1 est divisible par 3 pour n pair.", r:"Démonstration",
      c:"Écrivons n = 2k.\n\n2 ≡ −1 [3], donc 2ⁿ = 2^(2k) = (2²)^k ≡ (−1)^(2k) = 1 [3].\n\nDonc 2ⁿ − 1 ≡ 1 − 1 = 0 [3].\n\nLe nombre est divisible par 3.\n\nTest : pour n = 4, 2⁴ − 1 = 15 = 3 × 5 ✓" },
    { d:3, e:"Montrer qu'un nombre premier supérieur à 3 est congru à 1 ou 5 modulo 6.", r:"Démonstration",
      c:"Soit p un nombre premier > 3.\n\nLa division de p par 6 donne un reste dans {0, 1, 2, 3, 4, 5}.\n\n— reste 0 : p = 6k, divisible par 6, donc pas premier (sauf si p = 6, impossible ici).\n— reste 2 : p = 6k+2 = 2(3k+1), pair et > 2, donc non premier.\n— reste 3 : p = 6k+3 = 3(2k+1), divisible par 3 et > 3, donc non premier.\n— reste 4 : p = 6k+4 = 2(3k+2), pair, donc non premier.\n\nRestent les restes 1 et 5. Donc p ≡ 1 [6] ou p ≡ 5 [6].\n\nTest : 7 ≡ 1 [6], 11 ≡ 5 [6], 13 ≡ 1 [6], 17 ≡ 5 [6] ✓" },
    { d:3, e:"Déterminer les entiers n vérifiant n² ≡ 0 [4].", r:"n pair",
      c:"Si n est pair, n = 2k, donc n² = 4k² ≡ 0 [4]. ✓\n\nSi n est impair, n = 2k+1, donc n² = 4k² + 4k + 1 ≡ 1 [4]. ✗\n\nConclusion : n² ≡ 0 [4] si et seulement si n est pair.\n\nPlus généralement, un carré modulo 4 vaut toujours 0 ou 1, jamais 2 ou 3." },
    { d:3, e:"Montrer que si a ≡ b [n] et c ≡ d [n], alors a×c ≡ b×d [n].", r:"Démonstration",
      c:"Par hypothèse, n divise (a − b) et n divise (c − d).\n\nOn écrit a = b + kn et c = d + ln avec k, l entiers.\n\nAlors :\nac = (b + kn)(d + ln) = bd + bln + knd + kln²\n   = bd + n(bl + kd + kln)\n\nDonc ac − bd = n(bl + kd + kln), qui est divisible par n.\n\nConclusion : ac ≡ bd [n] ✓\n\nC'est la compatibilité des congruences avec la multiplication." },
    { d:3, e:"Résoudre dans ℤ l'équation n² ≡ 2 [5].", r:"Aucune solution",
      c:"Étudions les carrés modulo 5 :\n\nn ≡ 0 : n² ≡ 0\nn ≡ 1 : n² ≡ 1\nn ≡ 2 : n² ≡ 4\nn ≡ 3 : n² ≡ 9 ≡ 4\nn ≡ 4 : n² ≡ 16 ≡ 1\n\nLes carrés modulo 5 sont donc 0, 1 et 4. La valeur 2 n'apparaît jamais.\n\nConclusion : l'équation n² ≡ 2 [5] n'a aucune solution entière." },
    { d:3, e:"Montrer que pour tout n, n⁵ − n est divisible par 5.", r:"Démonstration",
      c:"On distingue les cas selon le reste de n modulo 5.\n\n— Si n ≡ 0 [5], alors n⁵ ≡ 0, donc n⁵ − n ≡ 0.\n— Si n ≢ 0 [5], le petit théorème de Fermat (hors programme, mais démontrable par disjonction) donne n⁴ ≡ 1 [5]. Donc n⁵ ≡ n [5], soit n⁵ − n ≡ 0.\n\n<b>Démonstration élémentaire</b> : n⁵ − n = n(n²−1)(n²+1) = n(n−1)(n+1)(n²+1).\n\nParmi n−1, n, n+1, l'un est divisible par 5 si n ≡ 0, 1 ou 4 [5].\n\nIl reste les cas n ≡ 2 [5] et n ≡ 3 [5]. Dans ces cas, n² ≡ 4 [5], donc n² + 1 ≡ 5 ≡ 0 [5].\n\nDans tous les cas, un facteur est divisible par 5." },
    { d:3, e:"Un entier est-il divisible par 12 si et seulement s'il est divisible par 3 et par 4 ?", r:"Oui",
      c:"Comme 3 et 4 sont premiers entre eux, et 12 = 3 × 4, la propriété est vraie.\n\n<b>Sens direct</b> : si 12 | n, alors n = 12k = 3(4k) = 4(3k), donc 3 | n et 4 | n.\n\n<b>Sens réciproque</b> : si 3 | n et 4 | n, alors n est multiple de 3 et de 4, donc multiple de leur plus petit multiple commun, qui est 12 (car 3 et 4 sont premiers entre eux).\n\nAttention : ce raisonnement échoue avec 4 et 6, qui ont un facteur commun 2 : un nombre divisible par 4 et 6 n'est pas forcément divisible par 24." },
    { d:3, e:"Montrer que la somme de cinq entiers consécutifs est divisible par 5.", r:"Démonstration",
      c:"Soit n, n+1, n+2, n+3, n+4 les cinq entiers consécutifs.\n\nSomme = 5n + (0 + 1 + 2 + 3 + 4) = 5n + 10 = 5(n + 2).\n\nC'est bien un multiple de 5.\n\nTest : 3 + 4 + 5 + 6 + 7 = 25 = 5 × 5 ✓\n\n<b>Généralisation</b> : la somme de n entiers consécutifs à partir de p vaut n·p + n(n−1)/2." }
  ]
},
{
  id:"2de-equations", niveau:"2de", titre:"2de · Équations et inéquations", temps:"22 min",
  resume:"Équations du premier degré, systèmes, inéquations, tableaux de signes.",
  lecons:[
    { titre:"Équations et inéquations du premier degré", contenu:`
      <h3>1. Résoudre une équation du premier degré</h3>
      <p>On isole l'inconnue. Deux opérations sont permises : ajouter ou retrancher le même nombre des deux côtés, multiplier ou diviser par un même nombre <b>non nul</b>.</p>
      <div class="formula">ax + b = 0   ⟹   x = −b/a        (si a ≠ 0)</div>
      <div class="box warn"><b>Les cas dégénérés</b> — Si a = 0 et b = 0, l'équation 0 = 0 est vraie pour tout x : une infinité de solutions. Si a = 0 et b ≠ 0, elle est impossible : aucune solution. Ces deux cas doivent être évoqués.</div>

      <h3>2. Inéquations et sens de l'inégalité</h3>
      <p>La règle cruciale : multiplier ou diviser par un nombre <b>négatif</b> change le sens de l'inégalité.</p>
      <div class="formula">−2x &gt; 6   ⟹   x &lt; −3</div>
      <div class="box warn"><b>L'erreur la plus fréquente du chapitre</b> — Oublier d'inverser le sens en divisant par un négatif. Ecris systématiquement l'inversion quand c'est le cas, pour ne pas la perdre.</div>

      <h3>3. Signe d'une expression du premier degré</h3>
      <p>Une expression ax + b change de signe en x = −b/a, et son signe est celui de a après ce point.</p>
      <div class="box"><b>Tableau de signes</b> — Pour ax + b avec a &gt; 0 : négatif avant −b/a, nul en −b/a, positif après. Pour a &lt; 0, l'ordre s'inverse.</div>

      <h3>4. Inéquations produit</h3>
      <p>Pour (x − a)(x − b) ≤ 0 : on étudie le signe de chaque facteur, puis on applique la règle des signes dans un tableau.</p>
      <div class="box"><b>Règle rapide</b> — Un produit est négatif quand les deux facteurs sont de signes contraires, positif quand ils sont de même signe.</div>

      <h3>5. Inéquations quotient</h3>
      <p>Même méthode, avec une attention supplémentaire : la valeur qui annule le dénominateur est <b>exclue</b> du domaine, et ne peut jamais figurer dans la solution.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Résoudre l'inéquation (2x − 6)/(x + 1) ≤ 0.</p>
      <ul>
        <li><b>Condition</b> : x ≠ −1 (dénominateur non nul)</li>
        <li><b>Numérateur</b> : 2x − 6 = 0 en x = 3. Comme 2 &gt; 0 : négatif avant 3, positif après.</li>
        <li><b>Dénominateur</b> : x + 1 = 0 en x = −1. Comme 1 &gt; 0 : négatif avant −1, positif après.</li>
        <li><b>Tableau de signes</b> : sur ]−∞ ; −1[, quotient (+)/(−) = négatif. Sur ]−1 ; 3], quotient (−)/(+) = négatif. Sur ]3 ; +∞[, (+)/(+) = positif.</li>
      </ul>
      <p><b>Solution</b> : x ∈ ]−∞ ; −1[ ∪ ]−1 ; 3]. Attention : −1 est exclu, mais 3 est inclus (quotient nul).</p>
    ` },
    { titre:"Systèmes et mise en équation", contenu:`
      <h3>1. Système de deux équations à deux inconnues</h3>
      <p>Deux méthodes, à choisir selon la situation :</p>
      <ul>
        <li><b>Substitution</b> : on exprime une inconnue en fonction de l'autre dans une équation, et on remplace dans la seconde</li>
        <li><b>Combinaison linéaire</b> : on multiplie les équations pour éliminer une inconnue par addition</li>
      </ul>

      <h3>2. Méthode par combinaison</h3>
      <p>C'est la plus rapide quand les coefficients s'y prêtent. On aligne les coefficients d'une inconnue, puis on soustrait.</p>
      <div class="formula">Exemple :
2x + 3y = 12
4x − 3y = 6
En additionnant : 6x = 18, donc x = 3. Puis 2(3) + 3y = 12 donne y = 2.</div>

      <h3>3. Interprétation graphique</h3>
      <p>Chaque équation est une droite. Résoudre le système, c'est trouver l'intersection :</p>
      <ul>
        <li>Une solution unique : les droites sont sécantes</li>
        <li>Aucune solution : les droites sont parallèles</li>
        <li>Une infinité : les droites sont confondues</li>
      </ul>
      <div class="box"><b>Lien avec les coefficients</b> — Deux droites ax + by = c et a′x + b′y = c′ sont parallèles si a·b′ − a′·b = 0. Si de plus c·b′ ≠ c′·b, elles sont strictement parallèles (aucune solution) ; sinon elles sont confondues.</div>

      <h3>4. Mettre un problème en équation</h3>
      <p>La démarche en quatre étapes :</p>
      <ul>
        <li>Nommer l'inconnue et préciser son domaine</li>
        <li>Traduire l'énoncé en équation</li>
        <li>Résoudre</li>
        <li>Vérifier que la solution est cohérente avec le contexte</li>
      </ul>
      <div class="box warn"><b>L'étape qu'on oublie</b> — La vérification contextuelle. Une longueur négative ou un nombre de personnes non entier doit alerter : soit le calcul est faux, soit la solution est à écarter.</div>

      <h3>5. Systèmes et problèmes concrets</h3>
      <p>Les systèmes servent typiquement à résoudre des problèmes à deux inconnues : deux tarifs, deux quantités, deux âges.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Un théâtre vend 200 places. Les places assises coûtent 15 €, les debout 8 €. La recette totale est de 2280 €. Combien de places assises ?</p>
      <ul>
        <li>Soit x le nombre de places assises, y le nombre de places debout</li>
        <li>Équation 1 : x + y = 200 (nombre total)</li>
        <li>Équation 2 : 15x + 8y = 2280 (recette)</li>
        <li>De (1) : y = 200 − x</li>
        <li>Dans (2) : 15x + 8(200 − x) = 2280, soit 15x + 1600 − 8x = 2280</li>
        <li>7x = 680, donc x ≈ 97,14</li>
      </ul>
      <p><b>Problème</b> : la solution n'est pas entière. L'énoncé est donc incohérent — vérifie tes données. Avec une recette de 2290 €, on obtiendrait x = 98 et y = 102, ce qui fonctionne.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — les équations et inéquations du premier degré avec tableaux de signes, puis les systèmes et la mise en équation.</div>`,
  exercices:[
    { d:1, e:"Résoudre 3x + 5 = 14.", r:"x = 3",
      c:"3x + 5 = 14\n3x = 9\nx = 3.\n\nVérification : 3×3 + 5 = 14 ✓" },
    { d:1, e:"Résoudre 2x − 7 = 0.", r:"x = 3,5",
      c:"2x = 7, donc x = 7/2 = 3,5." },
    { d:1, e:"Résoudre 5x + 3 = 2x − 9.", r:"x = −4",
      c:"5x + 3 = 2x − 9\n5x − 2x = −9 − 3\n3x = −12\nx = −4.\n\nVérification : 5(−4) + 3 = −17 et 2(−4) − 9 = −17 ✓" },
    { d:1, e:"Résoudre x + 4 &gt; 7.", r:"x > 3",
      c:"x > 7 − 4, donc x > 3.\n\nSolution : x ∈ ]3 ; +∞[." },
    { d:1, e:"Résoudre −x &lt; 5.", r:"x > −5",
      c:"On divise par −1, ce qui <b>inverse</b> le sens de l'inégalité.\n\n−x < 5 ⟹ x > −5.\n\nSolution : x ∈ ]−5 ; +∞[." },
    { d:1, e:"Résoudre 2x ≤ 10.", r:"x ≤ 5",
      c:"On divise par 2, qui est positif : le sens ne change pas.\n\nx ≤ 5." },
    { d:1, e:"Résoudre (x−1)(x+3) = 0.", r:"x = 1 ou x = −3",
      c:"Un produit est nul si et seulement si l'un des facteurs est nul.\n\nx − 1 = 0 donne x = 1.\nx + 3 = 0 donne x = −3." },
    { d:1, e:"Le système 2x + y = 7 et y = 3 donne :", r:"x = 2",
      c:"On remplace y par 3 dans la première équation :\n2x + 3 = 7\n2x = 4\nx = 2." },
    { d:1, e:"Résoudre 4 − 2x = 0.", r:"x = 2",
      c:"4 = 2x, donc x = 2." },
    { d:1, e:"Résoudre x/3 = 4.", r:"x = 12",
      c:"On multiplie par 3 des deux côtés : x = 12." },
    { d:2, e:"Résoudre (2x−1)/(x+2) ≥ 0.", r:"x ∈ ]−∞ ; −2[ ∪ [1/2 ; +∞[",
      c:"<b>Condition</b> : x ≠ −2.\n\n<b>Numérateur</b> : 2x − 1 = 0 en x = 1/2. Comme 2 > 0 : négatif avant, positif après.\n<b>Dénominateur</b> : x + 2 = 0 en x = −2. Positif après −2, négatif avant.\n\nTableau :\n— ]−∞ ; −2[ : (−)/(−) = positif ✓\n— ]−2 ; 1/2] : (−)/(+) = négatif ✗\n— [1/2 ; +∞[ : (+)/(+) = positif ✓\n\nSolution : ]−∞ ; −2[ ∪ [1/2 ; +∞[. La valeur −2 est exclue." },
    { d:2, e:"Résoudre le système : x + y = 10 et x − y = 4.", r:"x = 7, y = 3",
      c:"En additionnant les deux équations :\n(x+y) + (x−y) = 10 + 4\n2x = 14\nx = 7.\n\nPuis 7 + y = 10 donne y = 3.\n\nVérification : 7 − 3 = 4 ✓" },
    { d:2, e:"Résoudre 3(2x − 1) < 4x + 5.", r:"x < 4",
      c:"On développe : 6x − 3 < 4x + 5.\n6x − 4x < 5 + 3\n2x < 8\nx < 4.\n\nSolution : x ∈ ]−∞ ; 4[." },
    { d:2, e:"Étudier le signe de 3x − 12.", r:"Négatif avant 4, positif après",
      c:"3x − 12 = 0 donne x = 4.\n\nComme le coefficient 3 est positif, l'expression est négative avant 4 et positive après.\n\nTableau : < 0 sur ]−∞ ; 4[, = 0 en 4, > 0 sur ]4 ; +∞[." },
    { d:2, e:"Résoudre x² − 4 > 0.", r:"x < −2 ou x > 2",
      c:"On factorise : (x−2)(x+2) > 0.\n\nRacines : −2 et 2. Un produit de deux facteurs est positif quand ils sont de même signe :\n— x < −2 : (−)(−) = positif ✓\n— −2 < x < 2 : (−)(+) = négatif ✗\n— x > 2 : (+)(+) = positif ✓\n\nSolution : ]−∞ ; −2[ ∪ ]2 ; +∞[." },
    { d:2, e:"Un père a 40 ans, son fils 10 ans. Dans combien d'années le père aura-t-il le double de l'âge du fils ?", r:"20 ans",
      c:"Soit x le nombre d'années.\n\nDans x années, le père aura 40 + x ans et le fils 10 + x.\n\nCondition : 40 + x = 2(10 + x)\n40 + x = 20 + 2x\n20 = x\n\nDans 20 ans : le père aura 60 ans, le fils 30 ans. Or 60 = 2 × 30 ✓" },
    { d:2, e:"Résoudre (x+1)(x−2)(x−5) ≤ 0.", r:"x ∈ ]−∞ ; −1] ∪ [2 ; 5]",
      c:"Racines : −1, 2, 5. On étudie le signe de chaque facteur.\n\nLe produit est négatif quand un nombre <b>impair</b> de facteurs est négatif.\n\n— x < −1 : (−)(−)(−) = négatif ✓\n— −1 < x < 2 : (+)(−)(−) = positif ✗\n— 2 < x < 5 : (+)(+)(−) = négatif ✓\n— x > 5 : (+)(+)(+) = positif ✗\n\nSolution : ]−∞ ; −1] ∪ [2 ; 5]." },
    { d:2, e:"Résoudre le système : 3x + 2y = 16 et 2x − y = 6.", r:"x = 4, y = 2",
      c:"De la seconde équation : y = 2x − 6.\n\nEn remplaçant dans la première :\n3x + 2(2x − 6) = 16\n3x + 4x − 12 = 16\n7x = 28\nx = 4.\n\nPuis y = 2(4) − 6 = 2.\n\nVérification : 3×4 + 2×2 = 16 ✓ et 2×4 − 2 = 6 ✓" },
    { d:2, e:"Pour quelles valeurs de x l'expression 1/x est-elle définie ?", r:"x ≠ 0",
      c:"On ne divise jamais par zéro.\n\nDonc l'expression est définie sur ℝ privé de 0 : ]−∞ ; 0[ ∪ ]0 ; +∞[." },
    { d:2, e:"Résoudre 5 − 2x ≥ 1.", r:"x ≤ 2",
      c:"5 − 2x ≥ 1\n−2x ≥ 1 − 5\n−2x ≥ −4\n\nOn divise par −2, qui est négatif : le sens s'inverse.\nx ≤ 2.\n\nSolution : ]−∞ ; 2]." },
    { d:2, e:"Un rectangle a une longueur de 3 cm de plus que sa largeur, et un périmètre de 26 cm. Quelles sont ses dimensions ?", r:"5 cm et 8 cm",
      c:"Soit x la largeur. La longueur vaut x + 3.\n\nPérimètre : 2(x + x + 3) = 26\n2(2x + 3) = 26\n2x + 3 = 13\n2x = 10\nx = 5.\n\nLargeur 5 cm, longueur 8 cm.\n\nVérification : 2 × (5 + 8) = 26 ✓" },
    { d:3, e:"Résoudre l'inéquation (x² − 9)/(x − 1) < 0.", r:"x ∈ ]−∞ ; −3[ ∪ ]1 ; 3[",
      c:"<b>Condition</b> : x ≠ 1.\n\n<b>Numérateur</b> : x² − 9 = (x−3)(x+3). Positif à l'extérieur des racines −3 et 3, négatif entre.\n<b>Dénominateur</b> : x − 1. Négatif avant 1, positif après.\n\nTableau :\n— ]−∞ ; −3[ : (+)/(−) = négatif ✓\n— ]−3 ; 1[ : (−)/(−) = positif ✗\n— ]1 ; 3[ : (−)/(+) = négatif ✓\n— ]3 ; +∞[ : (+)/(+) = positif ✗\n\nSolution : ]−∞ ; −3[ ∪ ]1 ; 3[. La valeur 1 est exclue." },
    { d:3, e:"Un mélange contient 40 % d'alcool. Combien faut-il ajouter d'eau pure à 2 litres pour obtenir un mélange à 25 % ?", r:"1,2 litre",
      c:"Le volume d'alcool pur ne change pas : il vaut 0,40 × 2 = 0,8 litre.\n\nSoit x le volume d'eau ajouté. Le volume total devient 2 + x.\n\nCondition : 0,8/(2 + x) = 0,25\n0,8 = 0,25(2 + x)\n0,8 = 0,5 + 0,25x\n0,3 = 0,25x\nx = 1,2.\n\nIl faut ajouter 1,2 litre d'eau.\n\nVérification : 0,8/3,2 = 0,25 ✓" },
    { d:3, e:"Résoudre le système : x + y + z = 6, x − y = 1, y + z = 4.", r:"x = 3, y = 2, z = 2",
      c:"De x − y = 1 : x = y + 1.\nDe y + z = 4 : z = 4 − y.\n\nEn remplaçant dans la première équation :\n(y+1) + y + (4−y) = 6\ny + 1 + y + 4 − y = 6\ny + 5 = 6\ny = 1.\n\nAlors x = 1 + 1 = 2 et z = 4 − 1 = 3.\n\nVérification : 2 + 1 + 3 = 6 ✓ ; 2 − 1 = 1 ✓ ; 1 + 3 = 4 ✓\n\nSolution : x = 2, y = 1, z = 3." },
    { d:3, e:"Montrer que l'équation x² + x + 1 = 0 n'a pas de solution dans ℝ.", r:"Démonstration",
      c:"<b>Méthode 1, forme canonique</b> :\nx² + x + 1 = (x + 1/2)² − 1/4 + 1 = (x + 1/2)² + 3/4.\n\nUn carré est toujours ≥ 0, donc (x+1/2)² + 3/4 ≥ 3/4 > 0.\n\nL'expression ne s'annule jamais : pas de solution réelle.\n\n<b>Méthode 2, discriminant</b> : Δ = 1 − 4 = −3 < 0, aucune solution réelle." },
    { d:3, e:"Résoudre l'inéquation (2x+1)² ≥ (x−2)².", r:"x ≤ −3 ou x ≥ 1/3",
      c:"On écrit (2x+1)² − (x−2)² ≥ 0, et on factorise avec l'identité a² − b².\n\n[(2x+1) − (x−2)][(2x+1) + (x−2)] ≥ 0\n(x + 3)(3x − 1) ≥ 0\n\nRacines : −3 et 1/3. Le coefficient du produit est 3 > 0, donc positif à l'extérieur des racines.\n\nSolution : ]−∞ ; −3] ∪ [1/3 ; +∞[.\n\nBonne pratique : ne jamais élever au carré les deux membres d'une inéquation sans précaution — factoriser est plus sûr." },
    { d:3, e:"Deux robinets remplissent une piscine. Seul, le premier met 6 heures, le second 4 heures. Combien de temps à deux ?", r:"2,4 heures, soit 2 h 24 min",
      c:"On travaille avec des débits.\nLe premier remplit 1/6 de la piscine par heure.\nLe second remplit 1/4 par heure.\n\nEnsemble : 1/6 + 1/4 = 2/12 + 3/12 = 5/12 par heure.\n\nSoit t la durée totale en heures : (5/12) × t = 1, donc t = 12/5 = 2,4 heures.\n\n2,4 h = 2 h + 0,4 × 60 min = 2 h 24 min.\n\nVérification : en 2,4 h, le premier remplit 2,4/6 = 0,4 et le second 2,4/4 = 0,6. Total : 1 ✓" },
    { d:3, e:"Résoudre l'inéquation √(x+2) ≤ x.", r:"x ≥ 2",
      c:"<b>Conditions</b> : x + 2 ≥ 0 (donc x ≥ −2) et x ≥ 0 (membre de droite positif). Bilan : x ≥ 0.\n\nSur [0 ; +∞[, les deux membres sont positifs, on peut élever au carré :\n\nx + 2 ≤ x²\n0 ≤ x² − x − 2\n0 ≤ (x−2)(x+1)\n\nRacines : 2 et −1. Le produit est positif à l'extérieur : x ≤ −1 ou x ≥ 2.\n\nCombiné avec la condition x ≥ 0 : solution x ≥ 2." },
    { d:3, e:"Un capital placé à 3 % rapporte 150 € d'intérêts la première année. Quel était le capital ?", r:"5000 €",
      c:"Soit C le capital.\n\nIntérêts : C × 0,03 = 150.\nC = 150/0,03 = 5000.\n\nLe capital était de 5000 €.\n\nVérification : 5000 × 3/100 = 150 ✓" },
    { d:3, e:"Résoudre le système : 2x + 3y = 12 et 3x + 2y = 13.", r:"x = 3, y = 2",
      c:"On utilise la combinaison linéaire.\n\nMultiplions la première par 3 : 6x + 9y = 36.\nMultiplions la seconde par 2 : 6x + 4y = 26.\n\nEn soustrayant : 5y = 10, donc y = 2.\n\nPuis 2x + 6 = 12, donc x = 3.\n\nVérification : 3×3 + 2×2 = 13 ✓" },
    { d:3, e:"Pour quelle valeur de m le système mx + y = 3 et x + y = 1 n'a-t-il aucune solution ?", r:"m = 1",
      c:"Deux droites sont parallèles si leurs coefficients sont proportionnels : le déterminant vaut m×1 − 1×1 = m − 1.\n\nIl s'annule pour m = 1.\n\nPour m = 1, le système devient x + y = 3 et x + y = 1 : impossible, car une même somme ne peut valoir 3 et 1.\n\nPour m ≠ 1, il y a une solution unique." }
  ]
},
{
  id:"2de-vecteurs", niveau:"2de", titre:"2de · Vecteurs du plan", temps:"22 min",
  resume:"Translation, somme vectorielle, colinéarité, coordonnées.",
  lecons:[
    { titre:"Vecteurs et opérations", contenu:`
      <h3>1. Un vecteur est une translation</h3>
      <p>Le vecteur AB⃗ représente le déplacement de A vers B. Il possède trois caractéristiques :</p>
      <ul>
        <li>une <b>direction</b> : celle de la droite (AB)</li>
        <li>un <b>sens</b> : de A vers B</li>
        <li>une <b>norme</b> : la longueur AB</li>
      </ul>
      <p>Deux vecteurs sont égaux s'ils ont même direction, même sens et même norme — même si leurs points d'origine diffèrent.</p>

      <h3>2. Relation de Chasles</h3>
      <p>C'est l'outil fondamental : mettre bout à bout deux déplacements revient à faire directement le déplacement total.</p>
      <div class="formula">AB⃗ + BC⃗ = AC⃗</div>

      <h3>3. Vecteur opposé et différence</h3>
      <p>−AB⃗ a la même direction et la même norme que AB⃗, mais le sens contraire : −AB⃗ = BA⃗.</p>
      <div class="formula">AB⃗ − AC⃗ = AB⃗ + CA⃗ = CB⃗</div>
      <div class="box warn"><b>Erreur classique</b> — Écrire AB⃗ − AC⃗ = BC⃗. Refais le calcul avec Chasles : on trouve CB⃗, l'opposé.</div>

      <h3>4. Multiplication par un réel</h3>
      <p>k·u⃗ est le vecteur de même direction que u⃗, de norme |k| × ‖u⃗‖, et de même sens si k &gt; 0, de sens contraire si k &lt; 0.</p>

      <h3>5. Colinéarité</h3>
      <p>Deux vecteurs sont colinéaires s'ils ont la même direction, c'est-à-dire si l'un est un multiple de l'autre :</p>
      <div class="formula">u⃗ = k · v⃗        pour un certain réel k</div>
      <p>C'est l'outil pour démontrer un <b>parallélisme</b> ou un <b>alignement de points</b>.</p>
      <div class="box"><b>Point clé</b> — Trois points A, B, C sont alignés si et seulement si AB⃗ et AC⃗ sont colinéaires. C'est la méthode standard.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Simplifier l'expression AB⃗ + CD⃗ + BC⃗.</p>
      <ul>
        <li>On regroupe les termes qui s'enchaînent : AB⃗ + BC⃗ = AC⃗ (Chasles)</li>
        <li>Donc l'expression vaut AC⃗ + CD⃗</li>
        <li>Par Chasles : AC⃗ + CD⃗ = AD⃗</li>
      </ul>
      <p><b>Conseil</b> — Pour ces simplifications, cherche toujours les lettres qui se suivent : elles s'enchaînent, tout simplement.</p>
    ` },
    { titre:"Coordonnées et colinéarité", contenu:`
      <h3>1. Coordonnées d'un vecteur</h3>
      <p>Dans un repère, les coordonnées d'un vecteur se calculent par différence :</p>
      <div class="formula">AB⃗ (x_B − x_A ; y_B − y_A)</div>

      <h3>2. Opérations en coordonnées</h3>
      <div class="formula">u⃗(x ; y) + v⃗(x′ ; y′) = (x + x′ ; y + y′)
k·u⃗(x ; y) = (k·x ; k·y)</div>

      <h3>3. Norme</h3>
      <div class="formula">‖u⃗‖ = √(x² + y²)</div>
      <p>C'est la distance entre le point de départ et le point d'arrivée.</p>

      <h3>4. Critère de colinéarité</h3>
      <p>Deux vecteurs u⃗(x ; y) et v⃗(x′ ; y′) sont colinéaires si et seulement si :</p>
      <div class="formula">x · y′ − y · x′ = 0</div>
      <div class="box"><b>Comment le retenir</b> — C'est le « produit en croix » : on multiplie en diagonale et on soustrait. Si le résultat est nul, les vecteurs sont colinéaires.</div>

      <h3>5. Milieu d'un segment</h3>
      <p>Le milieu I de [AB] a pour coordonnées les moyennes de celles de A et B :</p>
      <div class="formula">I( (x_A + x_B)/2 ; (y_A + y_B)/2 )</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>A(1 ; 2), B(4 ; 6), C(7 ; 10). Les points sont-ils alignés ?</p>
      <ul>
        <li>AB⃗ = (4−1 ; 6−2) = (3 ; 4)</li>
        <li>AC⃗ = (7−1 ; 10−2) = (6 ; 8)</li>
        <li>Test : 3 × 8 − 4 × 6 = 24 − 24 = 0</li>
      </ul>
      <p><b>Conclusion :</b> les vecteurs sont colinéaires, donc les trois points sont alignés. On remarque même que AC⃗ = 2·AB⃗, donc B est le milieu de [AC].</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — les opérations vectorielles et la relation de Chasles, puis les coordonnées et la colinéarité.</div>`,
  exercices:[
    { d:1, e:"Simplifier AB⃗ + BC⃗.", r:"AC⃗",
      c:"C'est la relation de Chasles : les deux vecteurs s'enchaînent par B.\n\nAB⃗ + BC⃗ = AC⃗." },
    { d:1, e:"Simplifier AB⃗ + BC⃗ + CD⃗.", r:"AD⃗",
      c:"On enchaîne : AB⃗ + BC⃗ = AC⃗, puis AC⃗ + CD⃗ = AD⃗.\n\nAutrement dit, on va de A à B, puis C, puis D : le résultat est AD⃗." },
    { d:1, e:"Que vaut AB⃗ + BA⃗ ?", r:"0⃗",
      c:"BA⃗ = −AB⃗.\n\nDonc AB⃗ + BA⃗ = AB⃗ − AB⃗ = 0⃗, le vecteur nul." },
    { d:1, e:"Calculer les coordonnées de AB⃗ pour A(2;3) et B(5;7).", r:"(3 ; 4)",
      c:"AB⃗ = (x_B − x_A ; y_B − y_A) = (5−2 ; 7−3) = (3 ; 4).\n\nC'est le déplacement de A vers B." },
    { d:1, e:"Calculer AB⃗ − AC⃗.", r:"CB⃗",
      c:"AB⃗ − AC⃗ = AB⃗ + CA⃗.\n\nPar Chasles avec les lettres qui s'enchaînent (C, A, B) : CA⃗ + AB⃗ = CB⃗." },
    { d:1, e:"Calculer la norme de u⃗(3;4).", r:"5",
      c:"‖u⃗‖ = √(3² + 4²) = √(9+16) = √25 = 5." },
    { d:1, e:"Que vaut 2·u⃗ pour u⃗(3;−1) ?", r:"(6 ; −2)",
      c:"On multiplie chaque coordonnée par 2 :\n2 × 3 = 6 et 2 × (−1) = −2.\n\nDonc 2u⃗ = (6 ; −2)." },
    { d:1, e:"Les vecteurs u⃗(2;4) et v⃗(1;2) sont-ils colinéaires ?", r:"Oui",
      c:"Test : x·y′ − y·x′ = 2×2 − 4×1 = 4 − 4 = 0.\n\nLe résultat est nul, donc les vecteurs sont colinéaires.\n\nOn remarque même que u⃗ = 2v⃗." },
    { d:1, e:"Calculer les coordonnées du milieu de [AB] pour A(1;2) et B(5;8).", r:"(3 ; 5)",
      c:"x = (1+5)/2 = 3.\ny = (2+8)/2 = 5.\n\nLe milieu est (3 ; 5)." },
    { d:1, e:"Que vaut −AB⃗ ?", r:"BA⃗",
      c:"L'opposé d'un vecteur a la même direction, la même norme, mais le sens contraire.\n\n−AB⃗ = BA⃗." },
    { d:2, e:"Les points A(0;0), B(2;3) et C(6;9) sont-ils alignés ?", r:"Oui",
      c:"AB⃗ = (2 ; 3) et AC⃗ = (6 ; 9).\n\nTest de colinéarité : 2×9 − 3×6 = 18 − 18 = 0.\n\nLes vecteurs sont colinéaires, donc les trois points sont alignés.\n\nOn remarque que AC⃗ = 3·AB⃗ : le point C est sur la même droite, trois fois plus loin." },
    { d:2, e:"Déterminer x pour que u⃗(x;6) et v⃗(2;3) soient colinéaires.", r:"x = 4",
      c:"Condition de colinéarité : x·3 − 6·2 = 0.\n\n3x − 12 = 0\nx = 4.\n\nVérification : u⃗(4;6) et v⃗(2;3). Or 4×3 − 6×2 = 12 − 12 = 0 ✓" },
    { d:2, e:"Calculer la norme de AB⃗ pour A(1;1) et B(4;5).", r:"5",
      c:"AB⃗ = (3 ; 4).\n\n‖AB⃗‖ = √(9+16) = 5.\n\nC'est la distance entre A et B." },
    { d:2, e:"ABCD est un parallélogramme si :", r:"AB⃗ = DC⃗",
      c:"Dans un parallélogramme ABCD, les côtés [AB] et [DC] sont parallèles et de même longueur.\n\nMais attention au sens : AB⃗ et DC⃗ sont égaux (même direction, même sens, même norme), ce qui traduit correctement le parallélogramme." },
    { d:2, e:"Soit u⃗(1;2) et v⃗(2;1). Calculer u⃗ + 2v⃗.", r:"(5 ; 4)",
      c:"2v⃗ = (4 ; 2).\n\nu⃗ + 2v⃗ = (1 + 4 ; 2 + 2) = (5 ; 4)." },
    { d:2, e:"Déterminer les coordonnées du point D tel que ABCD soit un parallélogramme, avec A(0;0), B(3;1), C(4;4).", r:"D(1 ; 3)",
      c:"Dans un parallélogramme ABCD, on a AB⃗ = DC⃗.\n\nAB⃗ = (3 ; 1).\n\nSoit D(x ; y). Alors DC⃗ = (4 − x ; 4 − y).\n\nAB⃗ = DC⃗ donne :\n3 = 4 − x ⟹ x = 1\n1 = 4 − y ⟹ y = 3\n\nDonc D(1 ; 3).\n\nVérification : DC⃗ = (4−1 ; 4−3) = (3 ; 1) = AB⃗ ✓" },
    { d:2, e:"Montrer que les vecteurs u⃗(3;−2) et v⃗(−6;4) sont colinéaires.", r:"Démonstration",
      c:"Test : x·y′ − y·x′ = 3×4 − (−2)×(−6) = 12 − 12 = 0.\n\nLe résultat est nul, donc les vecteurs sont colinéaires.\n\nOn remarque que v⃗ = −2·u⃗ : ils sont opposés, donc de sens contraires." },
    { d:2, e:"I est le milieu de [AB] avec A(2;5) et B(8;1). Calculer AI⃗.", r:"(3 ; −2)",
      c:"I = ((2+8)/2 ; (5+1)/2) = (5 ; 3).\n\nAI⃗ = (5−2 ; 3−5) = (3 ; −2).\n\nVérification : AB⃗ = (6 ; −4) = 2×AI⃗. I est bien au milieu ✓" },
    { d:2, e:"Trois points A, B, C sont alignés si et seulement si :", r:"AB⃗ et AC⃗ sont colinéaires",
      c:"C'est la caractérisation de l'alignement par les vecteurs.\n\nIl faut que les vecteurs partent du <b>même point</b> (ici A) : c'est ce qui garantit qu'ils sont sur la même droite passant par A." },
    { d:2, e:"Simplifier 2·AB⃗ − 3·AB⃗ + 4·AB⃗.", r:"3·AB⃗",
      c:"On regroupe les coefficients : 2 − 3 + 4 = 3.\n\nDonc l'expression vaut 3·AB⃗.\n\nC'est la linéarité de la multiplication par un réel." },
    { d:2, e:"Déterminer si les points A(1;1), B(2;3), C(3;6) sont alignés.", r:"Non",
      c:"AB⃗ = (1 ; 2) et AC⃗ = (2 ; 5).\n\nTest : 1×5 − 2×2 = 5 − 4 = 1 ≠ 0.\n\nLe produit n'est pas nul, donc les vecteurs ne sont pas colinéaires : les points ne sont pas alignés." },
    { d:3, e:"Montrer que le quadrilatère A(0;0), B(4;1), C(3;5), D(−1;4) est un parallélogramme.", r:"Démonstration",
      c:"Testons AB⃗ = DC⃗.\n\nAB⃗ = (4−0 ; 1−0) = (4 ; 1).\nDC⃗ = (3−(−1) ; 5−4) = (4 ; 1).\n\nLes deux vecteurs sont égaux : le quadrilatère ABCD a deux côtés opposés parallèles et de même longueur, donc c'est un parallélogramme.\n\n<b>Vérification complémentaire</b> : BC⃗ = (−1 ; 4) et AD⃗ = (−1 ; 4). Eux aussi sont égaux." },
    { d:3, e:"Déterminer k pour que les points A(1;2), B(3;6) et C(k;12) soient alignés.", r:"k = 6",
      c:"AB⃗ = (2 ; 4) et AC⃗ = (k−1 ; 10).\n\nCondition d'alignement : colinéarité de AB⃗ et AC⃗.\n2×10 − 4×(k−1) = 0\n20 − 4k + 4 = 0\n24 = 4k\nk = 6.\n\nVérification : AC⃗ = (5 ; 10) = 2,5 × AB⃗ ✓" },
    { d:3, e:"Soit u⃗(2;−1) et v⃗(−4;2). Montrer que 3u⃗ + 2v⃗ est colinéaire à u⃗.", r:"Démonstration",
      c:"Calculons :\n3u⃗ = (6 ; −3)\n2v⃗ = (−8 ; 4)\n\n3u⃗ + 2v⃗ = (6−8 ; −3+4) = (−2 ; 1).\n\nOr u⃗ = (2 ; −1), donc (−2 ; 1) = −u⃗.\n\nLe vecteur 3u⃗ + 2v⃗ est donc colinéaire à u⃗ (puisqu'il vaut −u⃗).\n\n<b>Explication</b> : c'est possible parce que v⃗ = −2u⃗, donc u⃗ et v⃗ sont déjà colinéaires : toute combinaison l'est aussi." },
    { d:3, e:"Exprimer le vecteur AB⃗ en fonction de AC⃗ sachant que B est le milieu de [AC].", r:"AB⃗ = (1/2)·AC⃗",
      c:"Si B est le milieu de [AC], alors les points A, B, C sont alignés dans cet ordre et AB = AC/2.\n\nAB⃗ et AC⃗ ont la même direction et le même sens, et ‖AB⃗‖ = ‖AC⃗‖/2.\n\nDonc AB⃗ = (1/2)·AC⃗." },
    { d:3, e:"A(1;1), B(4;2), C(3;5). Déterminer D tel que AB⃗ = CD⃗.", r:"D(0 ; 4)",
      c:"AB⃗ = (3 ; 1).\n\nSoit D(x ; y). Alors CD⃗ = (x − 3 ; y − 5).\n\nAB⃗ = CD⃗ donne :\n3 = x − 3 ⟹ x = 6\n1 = y − 5 ⟹ y = 6\n\nIl y a une erreur : reprenons. AB⃗ = CD⃗ signifie que le point A se déplace vers B de la même façon que C vers D.\n\nx − 3 = 3 ⟹ x = 6\ny − 5 = 1 ⟹ y = 6\n\nDonc D(6 ; 6).\n\nVérification : CD⃗ = (6−3 ; 6−5) = (3 ; 1) = AB⃗ ✓" },
    { d:3, e:"Montrer que les médianes d'un triangle sont concourantes en utilisant les vecteurs (cas simple).", r:"Hors programme, mais instructif",
      c:"Soit ABC un triangle, et soient I, J, K les milieux respectifs de [BC], [AC] et [AB].\n\nOn pose G le point tel que GA⃗ + GB⃗ + GC⃗ = 0⃗.\n\nOn veut montrer que G appartient à chaque médiane.\n\nGA⃗ + GB⃗ = 2·GI⃗ (car I est le milieu de [BC], donc IB⃗ + IC⃗ = 0⃗ et GA⃗ + GB⃗ = 2·GI⃗ + IA⃗ + IB⃗ = 2·GI⃗).\n\nL'égalité GA⃗ + GB⃗ + GC⃗ = 0⃗ devient donc 2·GI⃗ + GC⃗ = 0⃗, ce qui signifie que G, I et C sont alignés.\n\nDonc G appartient à la médiane issue de C. Par le même raisonnement, G appartient aux trois médianes.\n\n<b>Conclusion</b> : les trois médianes sont concourantes en G, le centre de gravité." },
    { d:3, e:"Dans un repère, u⃗(3;2) et v⃗(x;4). Pour quelle valeur de x a-t-on u⃗ colinéaire à v⃗ ?", r:"x = 6",
      c:"Condition de colinéarité : 3×4 − 2×x = 0.\n\n12 − 2x = 0\nx = 6.\n\nVérification : v⃗(6 ; 4) = 2 × u⃗(3 ; 2) ✓" },
    { d:3, e:"Montrer que si AB⃗ = CD⃗, alors AC⃗ = BD⃗.", r:"Démonstration",
      c:"On part de AC⃗ et on applique Chasles deux fois.\n\nAC⃗ = AB⃗ + BC⃗  (Chasles)\nBD⃗ = BC⃗ + CD⃗  (Chasles)\n\nOr on sait que AB⃗ = CD⃗.\n\nDonc AC⃗ = AB⃗ + BC⃗ = CD⃗ + BC⃗.\nEt BD⃗ = BC⃗ + CD⃗.\n\nComme l'addition de vecteurs est commutative, BC⃗ + CD⃗ = CD⃗ + BC⃗.\n\nConclusion : AC⃗ = BD⃗ ✓\n\n<b>Interprétation géométrique</b> : si AB⃗ = CD⃗, alors ABCD est un parallélogramme (éventuellement aplati), et ses diagonales... non, ses autres côtés — AC et BD sont parallèles et égaux." },
    { d:3, e:"Déterminer l'ensemble des points M tels que MA⃗ + MB⃗ = 0⃗, avec A(1;2) et B(5;6).", r:"Le milieu de [AB], soit (3 ; 4)",
      c:"MA⃗ + MB⃗ = 0⃗ signifie MA⃗ = −MB⃗ = BM⃗.\n\nCela veut dire que M est le milieu de [AB] : la somme des vecteurs du milieu vers les extrémités est nulle.\n\nCoordonnées : ((1+5)/2 ; (2+6)/2) = (3 ; 4).\n\n<b>Résultat général</b> : MA⃗ + MB⃗ = 0⃗ caractérise le milieu de [AB]. C'est pour cela que la somme GA⃗ + GB⃗ + GC⃗ = 0⃗ caractérise le centre de gravité." },
    { d:3, e:"Un bateau se déplace de 3 km vers le nord puis de 4 km vers l'est. Quelle est la norme du déplacement total ?", r:"5 km",
      c:"Les deux déplacements sont perpendiculaires. La norme du déplacement total est celle du vecteur somme.\n\nEn coordonnées : u⃗ = (0 ; 3) et v⃗ = (4 ; 0).\n\nu⃗ + v⃗ = (4 ; 3).\n\n‖u⃗ + v⃗‖ = √(16 + 9) = √25 = 5 km.\n\nC'est encore le triangle 3-4-5. Le déplacement direct est plus court que le trajet en deux étapes." }
  ]
},
{
  id:"2de-droites", niveau:"2de", titre:"2de · Droites du plan", temps:"22 min",
  resume:"Équations de droites, coefficient directeur, vecteur directeur, systèmes.",
  lecons:[
    { titre:"Équations de droites", contenu:`
      <h3>1. Équation réduite</h3>
      <p>Une droite non verticale a une équation de la forme :</p>
      <div class="formula">y = m·x + p</div>
      <p><b>m</b> est le coefficient directeur (l'inclinaison), <b>p</b> l'ordonnée à l'origine (le point où la droite coupe l'axe vertical).</p>

      <h3>2. Calculer le coefficient directeur</h3>
      <div class="formula">m = (y_B − y_A) / (x_B − x_A)        pour deux points A et B</div>
      <div class="box warn"><b>Droites verticales</b> — Si x_A = x_B, le dénominateur est nul : la droite est verticale et n'a <b>pas</b> d'équation réduite. Son équation est x = constante.</div>

      <h3>3. Équation cartésienne</h3>
      <p>Toute droite admet une équation de la forme :</p>
      <div class="formula">a·x + b·y + c = 0</div>
      <p>Cette forme englobe les droites verticales (quand b = 0), ce que l'équation réduite ne permet pas.</p>

      <h3>4. Vecteur directeur</h3>
      <p>Un vecteur directeur indique la direction de la droite. Pour la droite y = mx + p, un vecteur directeur est :</p>
      <div class="formula">u⃗(1 ; m)</div>
      <p>Pour une équation cartésienne ax + by + c = 0, un vecteur directeur est u⃗(−b ; a).</p>

      <h3>5. Point sur une droite</h3>
      <p>Un point appartient à une droite si ses coordonnées vérifient l'équation. C'est le test à faire systématiquement.</p>
      <div class="box"><b>Application</b> — Pour trouver une droite passant par deux points, on peut : calculer le coefficient directeur, puis déterminer p en utilisant l'un des points.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Déterminer l'équation de la droite passant par A(1 ; 5) et B(3 ; 11).</p>
      <ul>
        <li>m = (11 − 5)/(3 − 1) = 6/2 = 3</li>
        <li>La droite s'écrit y = 3x + p</li>
        <li>A appartient à la droite : 5 = 3×1 + p, donc p = 2</li>
      </ul>
      <p><b>Équation :</b> y = 3x + 2. Vérification avec B : 3×3 + 2 = 11 ✓</p>
    ` },
    { titre:"Position relative et systèmes", contenu:`
      <h3>1. Parallélisme</h3>
      <p>Deux droites sont parallèles si elles ont le même coefficient directeur.</p>
      <div class="formula">y = m₁x + p₁  ∥  y = m₂x + p₂   ⟺   m₁ = m₂</div>
      <p>Si de plus p₁ = p₂, elles sont confondues.</p>

      <h3>2. Colinéarité et alignement</h3>
      <p>Trois points sont alignés si les vecteurs formés sont colinéaires, ce qui revient à dire que le coefficient directeur est le même de proche en proche.</p>
      <div class="formula">A, B, C alignés  ⟺  (y_B−y_A)/(x_B−x_A) = (y_C−y_A)/(x_C−x_A)</div>

      <h3>3. Intersection de deux droites</h3>
      <p>Chercher l'intersection, c'est résoudre le système formé par les deux équations. Trois cas :</p>
      <ul>
        <li>Coefficients directeurs différents : les droites se coupent en un point unique</li>
        <li>Même coefficient directeur, ordonnées différentes : parallèles, aucun point commun</li>
        <li>Mêmes coefficient et ordonnée : confondues, une infinité de points communs</li>
      </ul>

      <h3>4. Droites perpendiculaires</h3>
      <p>Pour l'instant (le produit scalaire viendra plus tard), on retient que deux droites sont perpendiculaires si le produit de leurs coefficients directeurs vaut −1 :</p>
      <div class="formula">m₁ × m₂ = −1</div>
      <div class="box"><b>Exemple</b> — Une droite de coefficient directeur 2 est perpendiculaire à une droite de coefficient directeur −1/2.</div>

      <h3>5. Problème concret avec système</h3>
      <p>Deux tarifs, deux forfaits : on écrit chaque situation comme une droite (coût en fonction de la quantité) et le point d'intersection donne la quantité à partir de laquelle une option devient plus avantageuse.</p>
      <div class="box warn"><b>Interpréter le résultat</b> — Après avoir trouvé l'intersection, il faut répondre à la question posée : « à partir de combien de… ». La valeur trouvée est un seuil, pas une réponse finale.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Tarif A : 20 € d'abonnement plus 2 € par séance. Tarif B : 40 € d'abonnement plus 1 € par séance. À partir de combien de séances le tarif B est-il plus avantageux ?</p>
      <ul>
        <li>Tarif A : y = 2x + 20</li>
        <li>Tarif B : y = x + 40</li>
        <li>Intersection : 2x + 20 = x + 40, donc x = 20</li>
        <li>Pour x = 20, les deux tarifs valent 60 €</li>
      </ul>
      <p><b>Conclusion :</b> à partir de 21 séances, le tarif B (coefficient directeur plus faible) devient plus avantageux.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — les équations de droites et le calcul du coefficient directeur, puis les positions relatives et les systèmes.</div>`,
  exercices:[
    { d:1, e:"Quel est le coefficient directeur de la droite y = 3x + 2 ?", r:"3",
      c:"Dans l'équation réduite y = mx + p, le coefficient directeur est m.\n\nIci m = 3." },
    { d:1, e:"Quelle est l'ordonnée à l'origine de y = −2x + 7 ?", r:"7",
      c:"L'ordonnée à l'origine est la valeur de y quand x = 0.\n\nDans y = −2x + 7, on lit p = 7." },
    { d:1, e:"Le point (2;5) appartient-il à la droite y = 2x + 1 ?", r:"Oui",
      c:"On remplace x par 2 : 2×2 + 1 = 5.\n\nOr l'ordonnée du point est justement 5. Le point appartient bien à la droite." },
    { d:1, e:"Le point (1;3) appartient-il à la droite y = 2x + 2 ?", r:"Non",
      c:"On remplace x par 1 : 2×1 + 2 = 4.\n\nOr l'ordonnée du point est 3. Comme 4 ≠ 3, le point n'appartient pas à la droite." },
    { d:1, e:"Quel est le coefficient directeur de la droite passant par (0;0) et (2;6) ?", r:"3",
      c:"m = (6 − 0)/(2 − 0) = 6/2 = 3.\n\nLa droite passe par l'origine, donc son équation est y = 3x." },
    { d:1, e:"Deux droites sont parallèles si :", r:"Elles ont le même coefficient directeur",
      c:"C'est la condition de parallélisme : m₁ = m₂.\n\nSi de plus les ordonnées à l'origine sont égales, les droites sont confondues." },
    { d:1, e:"Quelle est l'équation de la droite horizontale passant par (0;4) ?", r:"y = 4",
      c:"Une droite horizontale a un coefficient directeur nul.\n\nTous ses points ont la même ordonnée : y = 4." },
    { d:1, e:"Quelle est l'équation de la droite verticale passant par (3;0) ?", r:"x = 3",
      c:"Une droite verticale n'a pas d'équation réduite (le coefficient directeur serait infini).\n\nTous ses points ont la même abscisse : x = 3." },
    { d:1, e:"Que vaut y si x = 4 sur la droite y = −x + 10 ?", r:"6",
      c:"y = −4 + 10 = 6.\n\nLe point (4 ; 6) appartient à la droite." },
    { d:1, e:"Les droites y = 2x + 1 et y = 2x + 5 sont :", r:"Parallèles",
      c:"Elles ont le même coefficient directeur (2), mais des ordonnées à l'origine différentes (1 et 5).\n\nElles sont donc strictement parallèles : aucun point commun." },
    { d:2, e:"Déterminer l'équation de la droite passant par A(0;3) et B(2;7).", r:"y = 2x + 3",
      c:"m = (7−3)/(2−0) = 4/2 = 2.\n\nComme A est sur l'axe des ordonnées (x=0), son ordonnée donne directement p : p = 3.\n\nÉquation : y = 2x + 3.\n\nVérification avec B : 2×2 + 3 = 7 ✓" },
    { d:2, e:"Déterminer l'équation de la droite passant par A(1;4) et B(3;10).", r:"y = 3x + 1",
      c:"m = (10−4)/(3−1) = 6/2 = 3.\n\nOn cherche p : avec A, 4 = 3×1 + p, donc p = 1.\n\nÉquation : y = 3x + 1.\n\nVérification avec B : 3×3 + 1 = 10 ✓" },
    { d:2, e:"Les droites y = 2x + 3 et y = −x + 9 se coupent-elles ? Où ?", r:"En (2 ; 7)",
      c:"On résout 2x + 3 = −x + 9.\n3x = 6\nx = 2.\n\nPuis y = 2×2 + 3 = 7.\n\nPoint d'intersection : (2 ; 7).\n\nVérification avec l'autre équation : −2 + 9 = 7 ✓" },
    { d:2, e:"Déterminer un vecteur directeur de la droite y = 3x − 1.", r:"(1 ; 3)",
      c:"Pour une droite y = mx + p, un vecteur directeur est (1 ; m).\n\nIci m = 3, donc u⃗(1 ; 3).\n\nVérification : en avançant de 1 en abscisse, on monte de 3 en ordonnée — c'est bien la pente." },
    { d:2, e:"Déterminer un vecteur directeur de la droite 2x + 3y − 6 = 0.", r:"(−3 ; 2)",
      c:"Pour une équation cartésienne ax + by + c = 0, un vecteur directeur est (−b ; a).\n\nIci a = 2 et b = 3, donc u⃗(−3 ; 2).\n\nVérification : le coefficient directeur de la droite est −a/b = −2/3, et (−3 ; 2) donne bien 2/(−3) = −2/3 ✓" },
    { d:2, e:"Les points A(1;2), B(3;6), C(5;10) sont-ils alignés ?", r:"Oui",
      c:"Coefficient directeur de (AB) : (6−2)/(3−1) = 4/2 = 2.\nCoefficient directeur de (AC) : (10−2)/(5−1) = 8/4 = 2.\n\nLes coefficients sont égaux, donc les points sont alignés.\n\nOn remarque que C est sur la droite AB prolongée : y = 2x, qui passe bien par les trois points." },
    { d:2, e:"Déterminer l'équation de la droite parallèle à y = 3x + 1 passant par A(2;5).", r:"y = 3x − 1",
      c:"Parallèle signifie même coefficient directeur : m = 3.\n\nDonc y = 3x + p. Avec A : 5 = 3×2 + p, donc p = −1.\n\nÉquation : y = 3x − 1." },
    { d:2, e:"Résoudre le système y = 2x − 1 et y = −x + 5.", r:"x = 2, y = 3",
      c:"On égalise : 2x − 1 = −x + 5.\n3x = 6\nx = 2.\n\nPuis y = 2×2 − 1 = 3.\n\nIntersection en (2 ; 3)." },
    { d:2, e:"Une droite a pour coefficient directeur −1/3. Quel est le coefficient directeur d'une droite qui lui est perpendiculaire ?", r:"3",
      c:"Deux droites sont perpendiculaires si m₁ × m₂ = −1.\n\nIci (−1/3) × m₂ = −1, donc m₂ = −1 ÷ (−1/3) = 3." },
    { d:2, e:"Déterminer l'équation de la droite passant par A(−1;2) et de coefficient directeur 4.", r:"y = 4x + 6",
      c:"On part de y = 4x + p.\n\nAvec A : 2 = 4×(−1) + p = −4 + p, donc p = 6.\n\nÉquation : y = 4x + 6." },
    { d:2, e:"Deux forfaits : A = 30 + 2x et B = 50 + x. Pour quelle valeur de x sont-ils égaux ?", r:"x = 20",
      c:"On résout 30 + 2x = 50 + x.\n2x − x = 50 − 30\nx = 20.\n\nPour x = 20, les deux forfaits coûtent 70 €.\n\nPour x > 20, le forfait B (pente plus faible) devient moins cher." },
    { d:3, e:"Montrer que les droites y = 2x + 1 et y = 2x + 5 n'ont aucun point commun.", r:"Démonstration",
      c:"Supposons qu'elles aient un point commun (x ; y).\n\nAlors y = 2x + 1 et y = 2x + 5 simultanément.\n\nDonc 2x + 1 = 2x + 5, soit 1 = 5. C'est absurde.\n\nConclusion : aucune solution, les droites sont strictement parallèles." },
    { d:3, e:"Déterminer m pour que les droites y = (m−1)x + 3 et y = 4x − 2 soient parallèles.", r:"m = 5",
      c:"Condition de parallélisme : coefficients directeurs égaux.\n\nm − 1 = 4\nm = 5.\n\nVérification : la droite devient y = 4x + 3, parallèle à y = 4x − 2 ✓" },
    { d:3, e:"Déterminer l'équation de la médiatrice du segment [AB] avec A(1;2) et B(5;4).", r:"y = −2x + 9",
      c:"<b>Étape 1</b> : le milieu de [AB] est I((1+5)/2 ; (2+4)/2) = (3 ; 3).\n\n<b>Étape 2</b> : le coefficient directeur de (AB) vaut (4−2)/(5−1) = 2/4 = 1/2.\n\n<b>Étape 3</b> : la médiatrice est perpendiculaire à (AB), donc son coefficient vaut −1/(1/2) = −2.\n\n<b>Étape 4</b> : elle passe par I. Donc 3 = −2×3 + p, soit p = 9.\n\nÉquation : y = −2x + 9." },
    { d:3, e:"Trois points A(1;1), B(3;5), C(5;9) sont-ils alignés ? Si oui, donner l'équation de la droite.", r:"Oui, y = 2x − 1",
      c:"Coefficient (AB) : (5−1)/(3−1) = 4/2 = 2.\nCoefficient (AC) : (9−1)/(5−1) = 8/4 = 2.\n\nLes coefficients sont égaux : les points sont alignés.\n\nÉquation : y = 2x + p. Avec A : 1 = 2 + p, donc p = −1.\n\ny = 2x − 1.\n\nVérification avec C : 2×5 − 1 = 9 ✓" },
    { d:3, e:"Un mobile se déplace selon y = 3x + 2. Un second selon y = −x + 10. Se croisent-ils ? Où ?", r:"Oui, en (2 ; 8)",
      c:"On résout 3x + 2 = −x + 10.\n4x = 8\nx = 2.\n\ny = 3×2 + 2 = 8.\n\nPoint de rencontre : (2 ; 8).\n\nVérification : −2 + 10 = 8 ✓" },
    { d:3, e:"Déterminer l'équation de la droite passant par A(2;1) et parallèle à la droite 3x + y − 5 = 0.", r:"y = −3x + 7",
      c:"On met la droite donnée sous forme réduite : y = −3x + 5.\n\nLe coefficient directeur est donc −3.\n\nLa droite cherchée : y = −3x + p, avec A : 1 = −3×2 + p = −6 + p, donc p = 7.\n\nÉquation : y = −3x + 7." },
    { d:3, e:"Montrer que les droites d'équation 2x − y + 1 = 0 et 4x − 2y + 5 = 0 sont parallèles.", r:"Démonstration",
      c:"On met les deux sous forme réduite.\n\nPremière : y = 2x + 1.\nSeconde : 2y = 4x + 5, donc y = 2x + 5/2.\n\nLes coefficients directeurs sont tous deux égaux à 2 : les droites sont parallèles.\n\nElles ne sont pas confondues car 1 ≠ 5/2.\n\n<b>Méthode directe</b> : les coefficients (2 ; −1) et (4 ; −2) sont proportionnels (4 = 2×2 et −2 = 2×(−1)), ce qui traduit le parallélisme." },
    { d:3, e:"Une entreprise a un coût fixe de 500 € et un coût variable de 8 € par unité. Elle vend chaque unité 15 €. À partir de combien d'unités est-elle rentable ?", r:"À partir de 72 unités",
      c:"<b>Coût</b> : C(x) = 500 + 8x.\n<b>Recette</b> : R(x) = 15x.\n\nRentabilité quand R(x) > C(x) :\n15x > 500 + 8x\n7x > 500\nx > 71,43.\n\nComme x est un nombre entier d'unités, il faut x ≥ 72.\n\nVérification : pour x = 72, C = 500 + 576 = 1076 et R = 1080. Bénéfice de 4 €. ✓\nPour x = 71, C = 1068 et R = 1065 : perte de 3 €." },
    { d:3, e:"Déterminer le point d'intersection des droites x + y = 6 et 2x − y = 3.", r:"(3 ; 3)",
      c:"On additionne les deux équations :\n(x+y) + (2x−y) = 6 + 3\n3x = 9\nx = 3.\n\nPuis 3 + y = 6 donne y = 3.\n\nPoint d'intersection : (3 ; 3).\n\nVérification : 2×3 − 3 = 3 ✓" },
    { d:3, e:"Déterminer m pour que la droite y = mx + 2 passe par le point (3;11).", r:"m = 3",
      c:"On remplace : 11 = m×3 + 2.\n\n3m = 9\nm = 3.\n\nVérification : y = 3x + 2, et pour x = 3 : 9 + 2 = 11 ✓" },
    { d:3, e:"Un plan cartésien : quelle est l'ordonnée du point d'abscisse 0 sur la droite 3x + 2y = 12 ?", r:"6",
      c:"On remplace x par 0 : 0 + 2y = 12, donc y = 6.\n\nLe point d'intersection avec l'axe des ordonnées est (0 ; 6).\n\nC'est aussi ce qu'on obtiendrait en mettant la droite sous forme réduite : y = −(3/2)x + 6." }
  ]
},
{
  id:"2de-fonctions", niveau:"2de", titre:"2de · Fonctions et variations", temps:"22 min",
  resume:"Notion de fonction, fonctions de référence, variations, tableaux de signes.",
  lecons:[
    { titre:"Notion de fonction et fonctions de référence", contenu:`
      <h3>1. Définition</h3>
      <p>Une fonction f associe à chaque nombre x de son ensemble de définition <b>au plus un</b> nombre f(x).</p>
      <div class="formula">f : x ↦ f(x)</div>
      <p>Trois lectures d'une même fonction : la <b>formule</b>, le <b>tableau de valeurs</b>, la <b>courbe</b>. Savoir passer de l'une à l'autre est l'objectif du chapitre.</p>

      <h3>2. La fonction carré</h3>
      <div class="formula">f(x) = x²       définie sur ℝ</div>
      <p>Sa courbe est une parabole tournée vers le haut, symétrique par rapport à l'axe des ordonnées. Elle est décroissante sur ]−∞ ; 0] et croissante sur [0 ; +∞[.</p>
      <div class="box"><b>Propriété clé</b> — Un carré est toujours positif : x² ≥ 0 pour tout x. C'est ce qui justifie que l'équation x² = −1 n'ait aucune solution réelle.</div>

      <h3>3. La fonction inverse</h3>
      <div class="formula">f(x) = 1/x       définie sur ℝ privé de 0</div>
      <p>Sa courbe est une hyperbole à deux branches. Attention : elle est décroissante sur ]−∞ ; 0[ et sur ]0 ; +∞[, mais <b>pas</b> sur la réunion des deux.</p>
      <div class="box warn"><b>Piège</b> — Ne jamais écrire que 1/x est décroissante sur ℝ*. La fonction n'y est pas définie en 0, et elle « saute » de −∞ à +∞.</div>

      <h3>4. La fonction racine carrée</h3>
      <div class="formula">f(x) = √x       définie sur [0 ; +∞[</div>
      <p>Elle est strictement croissante sur son ensemble de définition, et √x ≥ 0 toujours.</p>

      <h3>5. Comparer avec les variations</h3>
      <p>Sur [0 ; +∞[ : si 0 ≤ a &lt; b, alors a² &lt; b² et √a &lt; √b.</p>
      <p>Mais sur les négatifs, l'ordre s'inverse pour le carré : (−5)² = 25 &gt; (−2)² = 4.</p>
      <div class="box"><b>Méthode de comparaison</b> — Pour comparer deux nombres avec une fonction, on utilise les variations sur l'intervalle concerné. Vérifie toujours le signe des nombres avant de conclure.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Comparer √7 et √6 + 1 sans calculatrice.</p>
      <ul>
        <li>On sait que 2 &lt; √7 &lt; 3 (car 4 &lt; 7 &lt; 9)</li>
        <li>De même 2 &lt; √6 &lt; 2,5 (car 4 &lt; 6 &lt; 6,25)</li>
        <li>Donc √6 + 1 est compris entre 3 et 3,5</li>
        <li>Or √7 &lt; 3 : tous les termes de l'encadrement de √7 sont inférieurs à ceux de √6 + 1</li>
      </ul>
      <p><b>Conclusion :</b> √7 &lt; √6 + 1.</p>
    ` },
    { titre:"Variations et tableau de signes", contenu:`
      <h3>1. Sens de variation</h3>
      <p>f est <b>croissante</b> sur un intervalle I si pour tous a, b de I avec a &lt; b, on a f(a) ≤ f(b). Elle est <b>décroissante</b> si f(a) ≥ f(b).</p>
      <p>Si les inégalités sont strictes, on parle de croissance (ou décroissance) <b>stricte</b>.</p>

      <h3>2. Tableau de variations</h3>
      <p>Il résume les variations : une flèche montante pour la croissance, descendante pour la décroissance, avec les valeurs remarquables aux extrémités.</p>
      <div class="box"><b>Lecture</b> — Le maximum d'une fonction est la plus grande valeur atteinte, le minimum la plus petite. Attention : un extremum <b>local</b> n'est pas forcément global.</div>

      <h3>3. Fonctions affines</h3>
      <div class="formula">f(x) = ax + b</div>
      <p>Croissante si a &gt; 0, décroissante si a &lt; 0, constante si a = 0. Sa représentation est une droite.</p>
      <div class="box warn"><b>Vocabulaire</b> — « affine » et « linéaire » ne sont pas synonymes : une fonction linéaire (f(x) = ax) est un cas particulier de fonction affine, avec b = 0.</div>

      <h3>4. Tableau de signes</h3>
      <p>Il indique où la fonction est positive, nulle, négative. C'est l'outil qui servira à résoudre les inéquations, en 1re comme en Terminale.</p>
      <div class="formula">Pour f(x) = ax + b avec a &gt; 0 :
 négatif sur ]−∞ ; −b/a[, nul en −b/a, positif sur ]−b/a ; +∞[</div>

      <h3>5. Fonctions paires, impaires</h3>
      <ul>
        <li><b>Paire</b> : f(−x) = f(x). La courbe est symétrique par rapport à l'axe des ordonnées. Exemple : x².</li>
        <li><b>Impaire</b> : f(−x) = −f(x). La courbe est symétrique par rapport à l'origine. Exemple : x³.</li>
      </ul>
      <div class="box"><b>Utilité</b> — Ces propriétés réduisent l'étude de moitié : il suffit d'étudier la fonction sur [0 ; +∞[ puis de compléter par symétrie.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Étudier le signe de f(x) = (x−1)(x+3).</p>
      <ul>
        <li>x − 1 = 0 en x = 1. Négatif avant, positif après.</li>
        <li>x + 3 = 0 en x = −3. Négatif avant, positif après.</li>
        <li>Le produit est positif quand les facteurs sont de même signe : x &lt; −3 ou x &gt; 1</li>
        <li>Il est négatif quand les signes diffèrent : −3 &lt; x &lt; 1</li>
      </ul>
      <p><b>Tableau de signes :</b> f(x) &gt; 0 sur ]−∞ ; −3[ ∪ ]1 ; +∞[, f(x) &lt; 0 sur ]−3 ; 1[.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — la notion de fonction et les fonctions de référence, puis les variations et les tableaux de signes.</div>`,
  exercices:[
    { d:1, e:"Calculer f(3) pour f(x) = 2x + 1.", r:"7",
      c:"On remplace x par 3 : f(3) = 2×3 + 1 = 7." },
    { d:1, e:"Calculer f(−2) pour f(x) = x².", r:"4",
      c:"f(−2) = (−2)² = 4.\n\nUn carré est toujours positif, même si le nombre de départ est négatif." },
    { d:1, e:"Quel est l'ensemble de définition de f(x) = 1/x ?", r:"ℝ privé de 0",
      c:"On ne divise jamais par zéro.\n\nLa fonction est définie sur ]−∞ ; 0[ ∪ ]0 ; +∞[." },
    { d:1, e:"Quel est l'ensemble de définition de f(x) = √x ?", r:"[0 ; +∞[",
      c:"On ne peut pas prendre la racine carrée d'un nombre négatif.\n\nLa fonction est définie pour x ≥ 0." },
    { d:1, e:"La fonction f(x) = x² est-elle paire ?", r:"Oui",
      c:"f(−x) = (−x)² = x² = f(x).\n\nDonc la fonction est paire : sa courbe est symétrique par rapport à l'axe des ordonnées." },
    { d:1, e:"La fonction f(x) = x³ est-elle paire ou impaire ?", r:"Impaire",
      c:"f(−x) = (−x)³ = −x³ = −f(x).\n\nDonc la fonction est impaire : sa courbe est symétrique par rapport à l'origine." },
    { d:1, e:"La fonction f(x) = 3x + 2 est-elle croissante ?", r:"Oui",
      c:"C'est une fonction affine de coefficient directeur 3, qui est positif.\n\nDonc elle est croissante sur ℝ." },
    { d:1, e:"La fonction f(x) = −2x + 5 est-elle croissante ?", r:"Non, décroissante",
      c:"Le coefficient directeur est −2, qui est négatif.\n\nLa fonction est décroissante sur ℝ." },
    { d:1, e:"Quel est le minimum de f(x) = x² ?", r:"0, atteint en x = 0",
      c:"Un carré est toujours positif ou nul : x² ≥ 0.\n\nLe minimum est 0, atteint en x = 0." },
    { d:1, e:"Étudier la parité de f(x) = x² + 1.", r:"Paire",
      c:"f(−x) = (−x)² + 1 = x² + 1 = f(x).\n\nLa fonction est paire. Sa courbe est symétrique par rapport à l'axe des ordonnées." },
    { d:2, e:"Étudier le signe de f(x) = 2x − 6.", r:"Négatif avant 3, positif après",
      c:"2x − 6 = 0 donne x = 3.\n\nComme le coefficient 2 est positif : négatif avant, positif après.\n\nTableau : f < 0 sur ]−∞ ; 3[, f = 0 en 3, f > 0 sur ]3 ; +∞[." },
    { d:2, e:"Étudier le signe de f(x) = (x−2)(x+5).", r:"Positif à l'extérieur de −5 et 2, négatif entre",
      c:"Racines : −5 et 2.\n\nUn produit de deux facteurs est positif quand ils sont de même signe.\n\n— x < −5 : (−)(−) = positif\n— −5 < x < 2 : (−)(+) = négatif\n— x > 2 : (+)(+) = positif\n\nTableau : f > 0 sur ]−∞ ; −5[ ∪ ]2 ; +∞[, f < 0 sur ]−5 ; 2[." },
    { d:2, e:"Comparer f(2) et f(5) pour f(x) = x².", r:"f(2) < f(5)",
      c:"f(2) = 4 et f(5) = 25.\n\nDonc f(2) < f(5).\n\nC'est cohérent : la fonction carré est croissante sur [0 ; +∞[, donc elle conserve l'ordre pour des nombres positifs." },
    { d:2, e:"Comparer 1/3 et 1/7.", r:"1/3 > 1/7",
      c:"La fonction inverse est décroissante sur ]0 ; +∞[.\n\nComme 3 < 7, on a 1/3 > 1/7.\n\nVérification numérique : 1/3 ≈ 0,333 et 1/7 ≈ 0,143 ✓" },
    { d:2, e:"Déterminer l'ensemble de définition de f(x) = √(x − 3).", r:"[3 ; +∞[",
      c:"Le contenu de la racine doit être positif ou nul : x − 3 ≥ 0, soit x ≥ 3.\n\nLa fonction est définie sur [3 ; +∞[." },
    { d:2, e:"Déterminer l'ensemble de définition de f(x) = 1/(x−2).", r:"ℝ privé de 2",
      c:"Le dénominateur ne doit pas s'annuler : x − 2 ≠ 0, soit x ≠ 2.\n\nEnsemble de définition : ]−∞ ; 2[ ∪ ]2 ; +∞[." },
    { d:2, e:"Comparer √5 et √8.", r:"√5 < √8",
      c:"La fonction racine carrée est croissante sur [0 ; +∞[.\n\nComme 5 < 8, on a √5 < √8.\n\nVérification : √5 ≈ 2,236 et √8 ≈ 2,828 ✓" },
    { d:2, e:"Comparer (−3)² et (−5)².", r:"(−3)² < (−5)²",
      c:"(−3)² = 9 et (−5)² = 25.\n\nDonc (−3)² < (−5)².\n\n<b>Attention</b> : sur les négatifs, la fonction carré inverse l'ordre. −3 > −5, mais (−3)² < (−5)²." },
    { d:2, e:"f(x) = x². Résoudre f(x) = 9.", r:"x = 3 ou x = −3",
      c:"x² = 9 donne x = 3 ou x = −3.\n\nDeux solutions, car la fonction carré n'est pas injective sur ℝ : deux nombres opposés ont le même carré." },
    { d:2, e:"Étudier le signe de f(x) = 3x + 12.", r:"Négatif avant −4, positif après",
      c:"3x + 12 = 0 donne x = −4.\n\nComme le coefficient est positif : négatif avant −4, positif après." },
    { d:2, e:"Comparer 1/(−2) et 1/(−5).", r:"1/(−2) > 1/(−5)",
      c:"1/(−2) = −0,5 et 1/(−5) = −0,2.\n\nDonc −0,5 < −0,2, soit 1/(−2) < 1/(−5).\n\nReprenons : −0,5 est plus petit que −0,2. Donc 1/(−2) < 1/(−5).\n\nSur les négatifs, la fonction inverse est aussi décroissante : comme −2 > −5, on a 1/(−2) < 1/(−5) ✓" },
    { d:3, e:"Montrer que f(x) = x² + 2x + 2 est toujours strictement positive.", r:"Démonstration",
      c:"On transforme l'expression :\nx² + 2x + 2 = (x² + 2x + 1) + 1 = (x+1)² + 1.\n\nUn carré est toujours positif ou nul, donc (x+1)² + 1 ≥ 1 > 0.\n\nL'expression est toujours strictement positive." },
    { d:3, e:"Résoudre l'inéquation 1/x < 2 sur ]0 ; +∞[.", r:"x > 1/2",
      c:"Sur ]0 ; +∞[, x est positif, donc on peut multiplier sans changer le sens :\n\n1/x < 2\n1 < 2x\nx > 1/2.\n\nSolution sur ]0 ; +∞[ : ]1/2 ; +∞[.\n\n<b>Attention</b> : si on travaillait sur ℝ entier, il faudrait distinguer les cas — multiplier par x change le sens quand x est négatif." },
    { d:3, e:"Étudier les variations de f(x) = x² sur ℝ.", r:"Décroissante sur ]−∞;0], croissante sur [0;+∞[",
      c:"La courbe est une parabole tournée vers le haut, de sommet (0 ; 0).\n\nEn prenant des valeurs : f(−3) = 9, f(−2) = 4, f(−1) = 1, f(0) = 0 : la fonction décroît jusqu'à 0.\nPuis f(1) = 1, f(2) = 4, f(3) = 9 : elle croît ensuite.\n\nTableau de variations : décroissante sur ]−∞ ; 0], croissante sur [0 ; +∞[.\nMinimum : 0 en x = 0." },
    { d:3, e:"$f(x) = \\sqrt{x}$. Résoudre f(x) = 3.", r:"x = 9",
      c:"√x = 3 donne x = 9 en élevant au carré.\n\nVérification : √9 = 3 ✓\n\nCondition : x ≥ 0, bien respectée." },
    { d:3, e:"Montrer que la fonction f(x) = −x² est décroissante sur [0 ; +∞[.", r:"Démonstration",
      c:"Soit 0 ≤ a < b.\n\nAlors a² < b² (car la fonction carré est croissante sur [0 ; +∞[).\n\nEn multipliant par −1, l'inégalité s'inverse : −a² > −b².\n\nDonc f(a) > f(b) : la fonction est décroissante sur [0 ; +∞[.\n\n<b>Interprétation</b> — La courbe de −x² est une parabole tournée vers le bas : elle descend à partir du sommet." },
    { d:3, e:"Déterminer l'ensemble de définition de f(x) = √(2x − 6)/(x − 5).", r:"[3 ; 5[ ∪ ]5 ; +∞[",
      c:"<b>Condition 1</b> (racine) : 2x − 6 ≥ 0, soit x ≥ 3.\n\n<b>Condition 2</b> (dénominateur) : x − 5 ≠ 0, soit x ≠ 5.\n\nEn combinant : x ≥ 3 et x ≠ 5.\n\nEnsemble de définition : [3 ; 5[ ∪ ]5 ; +∞[." },
    { d:3, e:"Comparer 2 + √3 et 3 sans calculatrice.", r:"2 + √3 > 3",
      c:"On compare √3 et 1.\n\nOr 3 > 1, donc √3 > √1 = 1 (la racine carrée est croissante).\n\nDonc 2 + √3 > 2 + 1 = 3.\n\nVérification : √3 ≈ 1,732, donc 2 + √3 ≈ 3,732 > 3 ✓" },
    { d:3, e:"Étudier la parité de f(x) = x/(x² + 1).", r:"Impaire",
      c:"f(−x) = (−x)/((−x)² + 1) = −x/(x² + 1) = −f(x).\n\nComme f(−x) = −f(x), la fonction est impaire.\n\nSa courbe est symétrique par rapport à l'origine du repère." },
    { d:3, e:"Montrer que si f est croissante et g est croissante, alors f + g est croissante.", r:"Démonstration",
      c:"Soit a < b deux réels de l'intervalle considéré.\n\nComme f est croissante : f(a) ≤ f(b).\nComme g est croissante : g(a) ≤ g(b).\n\nEn additionnant les deux inégalités (ce qui est permis) :\nf(a) + g(a) ≤ f(b) + g(b).\n\nDonc (f+g)(a) ≤ (f+g)(b) : la fonction f+g est croissante.\n\n<b>Attention</b> — Ce résultat est faux pour un produit : le produit de deux fonctions croissantes n'est pas forcément croissant." },
    { d:3, e:"Résoudre x² ≥ 4 graphiquement et algébriquement.", r:"x ≤ −2 ou x ≥ 2",
      c:"<b>Algébriquement</b> : x² − 4 ≥ 0, soit (x−2)(x+2) ≥ 0.\n\nRacines : −2 et 2. Le produit est positif à l'extérieur des racines.\n\nSolution : ]−∞ ; −2] ∪ [2 ; +∞[.\n\n<b>Graphiquement</b> : on cherche où la parabole y = x² est au-dessus de la droite y = 4. C'est le cas en dehors de l'intervalle [−2 ; 2]." },
    { d:3, e:"Un rectangle a un périmètre de 20 m. Exprimer son aire en fonction de sa largeur x, et donner l'ensemble de définition.", r:"A(x) = x(10 − x) sur ]0 ; 10[",
      c:"Le demi-périmètre vaut 10, donc longueur + largeur = 10.\n\nSi la largeur est x, la longueur est 10 − x.\n\nAire : A(x) = x(10 − x) = 10x − x².\n\n<b>Ensemble de définition</b> : la largeur doit être positive (x > 0) et la longueur aussi (10 − x > 0, soit x < 10).\n\nDonc x ∈ ]0 ; 10[.\n\nCette fonction sera étudiée en 1re : elle admet un maximum de 25 m² pour x = 5, ce qui correspond au carré." }
  ]
},
{
  id:"2de-statistiques", niveau:"2de", titre:"2de · Statistiques descriptives", temps:"20 min",
  resume:"Moyenne, médiane, quartiles, écart type, représentations graphiques.",
  lecons:[
    { titre:"Indicateurs de position et de dispersion", contenu:`
      <h3>1. Moyenne</h3>
      <p>La moyenne d'une série de n valeurs est la somme divisée par l'effectif :</p>
      <div class="formula">x̄ = (x₁ + x₂ + … + xₙ) / n</div>
      <p>Avec des effectifs (valeurs répétées), on pondère :</p>
      <div class="formula">x̄ = (n₁x₁ + n₂x₂ + …) / (n₁ + n₂ + …)</div>

      <h3>2. Médiane</h3>
      <p>La médiane est la valeur qui <b>partage la série en deux</b> : au moins 50 % des valeurs lui sont inférieures ou égales, au moins 50 % supérieures ou égales.</p>
      <ul>
        <li>Effectif impair : c'est la valeur du milieu de la liste ordonnée</li>
        <li>Effectif pair : c'est la moyenne des deux valeurs centrales</li>
      </ul>
      <div class="box"><b>Moyenne vs médiane</b> — La moyenne est sensible aux valeurs extrêmes, la médiane non. Pour des salaires, la médiane est plus représentative que la moyenne. C'est un point d'interprétation important.</div>

      <h3>3. Quartiles</h3>
      <p>Le premier quartile Q1 est la plus petite valeur telle qu'au moins 25 % des données lui soient inférieures ou égales. Le troisième quartile Q3 correspond à 75 %.</p>
      <div class="formula">L'écart interquartile vaut Q3 − Q1</div>
      <p>Il mesure la dispersion de la moitié centrale des données, en ignorant les extrêmes.</p>

      <h3>4. Étendue et écart type</h3>
      <div class="formula">Étendue = valeur maximale − valeur minimale</div>
      <p>L'<b>écart type</b> σ mesure la dispersion autour de la moyenne. Plus il est grand, plus les valeurs sont éloignées de la moyenne.</p>
      <div class="box warn"><b>Ne pas confondre</b> — L'étendue ne dépend que des deux valeurs extrêmes, l'écart type prend en compte <b>toutes</b> les valeurs. Deux séries peuvent avoir la même étendue et des écarts types très différents.</div>

      <h3>5. Choisir le bon indicateur</h3>
      <ul>
        <li>Pour comparer deux séries : comparer à la fois un indicateur de position (moyenne ou médiane) et un de dispersion (écart type ou écart interquartile)</li>
        <li>Si la série contient des valeurs aberrantes, préférer la médiane et l'écart interquartile</li>
      </ul>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Série : 4, 7, 9, 11, 15.</p>
      <ul>
        <li><b>Moyenne</b> : (4 + 7 + 9 + 11 + 15)/5 = 46/5 = 9,2</li>
        <li><b>Médiane</b> : effectif impair, la 3e valeur vaut 9</li>
        <li><b>Étendue</b> : 15 − 4 = 11</li>
        <li><b>Premier quartile</b> : 5 × 0,25 = 1,25, on prend la 2e valeur : Q1 = 7</li>
        <li><b>Troisième quartile</b> : 5 × 0,75 = 3,75, on prend la 4e valeur : Q3 = 11</li>
      </ul>
      <p><b>Interprétation :</b> l'écart interquartile vaut 11 − 7 = 4. La moitié centrale des valeurs se situe entre 7 et 11.</p>
    ` },
    { titre:"Représentations et interprétation", contenu:`
      <h3>1. Diagramme en bâtons et histogramme</h3>
      <p>Le diagramme en bâtons représente des valeurs discrètes (nombre de frères et sœurs, notes). L'histogramme représente des classes de valeurs continues (tranches d'âge, de salaire).</p>
      <div class="box warn"><b>Différence essentielle</b> — Dans un histogramme, l'aire de chaque rectangle est proportionnelle à l'effectif, pas la hauteur. Si les classes ont des largeurs différentes, c'est l'aire qu'il faut comparer.</div>

      <h3>2. Diagramme en boîte (boîte à moustaches)</h3>
      <p>Il résume cinq valeurs : le minimum, Q1, la médiane, Q3 et le maximum. Il permet de comparer deux séries d'un seul coup d'œil.</p>
      <ul>
        <li>La boîte contient la moitié centrale des données</li>
        <li>Une boîte longue signifie une forte dispersion</li>
        <li>Une médiane décalée dans la boîte signale une distribution asymétrique</li>
      </ul>

      <h3>3. Polygone des effectifs cumulés</h3>
      <p>Il sert à lire la médiane et les quartiles graphiquement : on trace la courbe des effectifs cumulés croissants, puis on lit l'abscisse pour la moitié (médiane) ou les quarts de l'effectif total.</p>

      <h3>4. Interpréter, pas seulement calculer</h3>
      <p>Un indicateur n'a de sens que replacé dans le contexte. « La moyenne est de 12 » ne dit rien si on ne sait pas de quoi on parle, ni quelle est la dispersion.</p>
      <div class="box"><b>Ce qu'attend un correcteur</b> — Une phrase d'interprétation : « les élèves du groupe A ont une moyenne plus élevée mais aussi une dispersion plus grande, donc des résultats plus hétérogènes ».</div>

      <h3>5. Comparer deux séries</h3>
      <p>La démarche complète :</p>
      <ul>
        <li>Comparer les positions (moyennes ou médianes)</li>
        <li>Comparer les dispersions (écarts types ou interquartiles)</li>
        <li>Conclure en une phrase claire sur ce que ça signifie concrètement</li>
      </ul>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Deux classes ont les résultats suivants au même devoir. Classe A : moyenne 12, écart type 2. Classe B : moyenne 12, écart type 5.</p>
      <ul>
        <li>Même moyenne : le niveau moyen des deux classes est identique</li>
        <li>L'écart type de B est plus du double de celui de A</li>
      </ul>
      <p><b>Interprétation :</b> la classe A est plus homogène — les élèves ont des résultats proches les uns des autres. La classe B est plus hétérogène : certains élèves sont très au-dessus et d'autres très en dessous de la moyenne. Une moyenne identique peut cacher des réalités très différentes.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — les indicateurs de position et de dispersion, puis les représentations graphiques et l'interprétation.</div>`,
  exercices:[
    { d:1, e:"Calculer la moyenne de 4, 8, 6, 10, 12.", r:"8",
      c:"Somme : 4 + 8 + 6 + 10 + 12 = 40.\nEffectif : 5.\n\nMoyenne : 40/5 = 8." },
    { d:1, e:"Quelle est la médiane de 2, 5, 7, 9, 11 ?", r:"7",
      c:"La série est déjà ordonnée, avec un effectif impair (5 valeurs).\n\nLa médiane est la 3e valeur : 7.\n\nIl y a deux valeurs avant (2 et 5) et deux après (9 et 11)." },
    { d:1, e:"Quelle est l'étendue de 3, 12, 7, 5, 20 ?", r:"17",
      c:"Étendue = maximum − minimum = 20 − 3 = 17." },
    { d:1, e:"Calculer la moyenne pondérée : 3 fois 10 et 2 fois 15.", r:"12",
      c:"Moyenne = (3×10 + 2×15)/(3+2) = (30 + 30)/5 = 60/5 = 12." },
    { d:1, e:"Quelle est la médiane de 3, 5, 8, 10 (effectif pair) ?", r:"6,5",
      c:"Effectif pair : on prend la moyenne des deux valeurs centrales.\n\nLes 2e et 3e valeurs sont 5 et 8.\n\nMédiane = (5 + 8)/2 = 6,5." },
    { d:1, e:"Qu'indique un écart type élevé ?", r:"Une forte dispersion des valeurs",
      c:"L'écart type mesure l'éloignement moyen des valeurs par rapport à la moyenne.\n\nUn écart type élevé signifie que les valeurs sont très dispersées ; faible, qu'elles sont regroupées autour de la moyenne." },
    { d:1, e:"Que vaut le premier quartile pour une série de 8 valeurs ?", r:"La 2e valeur",
      c:"On calcule 8 × 0,25 = 2.\n\nQ1 est la 2e valeur de la série ordonnée.\n\n(Convention : on prend la valeur au rang ⌈0,25n⌉.)" },
    { d:1, e:"Quelle est l'étendue de la série 12, 15, 13, 14 ?", r:"3",
      c:"Maximum : 15. Minimum : 12.\n\nÉtendue = 15 − 12 = 3.\n\nLes valeurs sont très regroupées." },
    { d:1, e:"Calculer la moyenne de 15, 12, 9, 18, 16.", r:"14",
      c:"Somme : 15 + 12 + 9 + 18 + 16 = 70.\nEffectif : 5.\n\nMoyenne : 70/5 = 14." },
    { d:1, e:"Dans un histogramme, qu'est-ce qui est proportionnel à l'effectif ?", r:"L'aire du rectangle",
      c:"C'est la règle de l'histogramme : c'est l'<b>aire</b> qui est proportionnelle à l'effectif.\n\nQuand toutes les classes ont la même largeur, l'aire et la hauteur sont proportionnelles. Mais si les largeurs diffèrent, seule l'aire compte." },
    { d:2, e:"Calculer la médiane de 3, 5, 7, 8, 12, 15.", r:"7,5",
      c:"Effectif pair (6 valeurs).\n\nLes 3e et 4e valeurs sont 7 et 8.\n\nMédiane = (7 + 8)/2 = 7,5." },
    { d:2, e:"Calculer l'écart interquartile pour Q1 = 8 et Q3 = 15.", r:"7",
      c:"Écart interquartile = Q3 − Q1 = 15 − 8 = 7.\n\nLa moitié centrale des données s'étend sur 7 unités." },
    { d:2, e:"Calculer la moyenne pondérée : 5 fois 8, 10 fois 12, 5 fois 16.", r:"12",
      c:"Moyenne = (5×8 + 10×12 + 5×16)/(5+10+5)\n= (40 + 120 + 80)/20\n= 240/20 = 12." },
    { d:2, e:"Une série a pour moyenne 15 et écart type 0. Que peut-on dire ?", r:"Toutes les valeurs valent 15",
      c:"Un écart type nul signifie qu'aucune valeur ne s'écarte de la moyenne.\n\nDonc toutes les valeurs sont égales à 15. La série est constante." },
    { d:2, e:"Série : 2, 4, 4, 6, 8, 10, 12. Calculer Q1 et Q3.", r:"Q1 = 4 et Q3 = 10",
      c:"Effectif : 7.\n\nQ1 : 7 × 0,25 = 1,75, on prend la 2e valeur : 4.\nQ3 : 7 × 0,75 = 5,25, on prend la 6e valeur : 10.\n\nVérification : la boîte va de 4 à 10, avec la médiane en 6 (4e valeur)." },
    { d:2, e:"Comparer les moyennes de deux séries : A = 10, 12, 14 et B = 11, 12, 13.", r:"Mêmes moyennes : 12",
      c:"Série A : (10 + 12 + 14)/3 = 36/3 = 12.\nSérie B : (11 + 12 + 13)/3 = 36/3 = 12.\n\nMêmes moyennes.\n\nMais les dispersions diffèrent : l'étendue de A vaut 4, celle de B vaut 2. La série B est plus homogène." },
    { d:2, e:"Quelle est la médiane de 1, 2, 3, 100 ?", r:"2,5",
      c:"Effectif pair : les 2e et 3e valeurs sont 2 et 3.\n\nMédiane = (2 + 3)/2 = 2,5.\n\nRemarque : la moyenne vaut (1+2+3+100)/4 = 26,5, très influencée par la valeur aberrante 100. La médiane est beaucoup plus représentative ici." },
    { d:2, e:"Calculer la moyenne de la série : 5, 5, 5, 15.", r:"7,5",
      c:"Somme : 5 + 5 + 5 + 15 = 30.\nEffectif : 4.\n\nMoyenne : 30/4 = 7,5.\n\nMais la médiane vaut (5+5)/2 = 5, bien différente de la moyenne." },
    { d:2, e:"Série : 10, 12, 14, 16, 18, 20. Calculer Q1.", r:"12",
      c:"Effectif : 6.\n\nQ1 : 6 × 0,25 = 1,5, on arrondit à la 2e valeur.\n\nQ1 = 12." },
    { d:2, e:"Deux séries ont la même étendue. Ont-elles la même dispersion ?", r:"Pas nécessairement",
      c:"L'étendue ne dépend que des deux valeurs extrêmes.\n\nExemple : (0, 5, 5, 5, 10) et (0, 0, 5, 10, 10) ont la même étendue (10) mais des dispersions très différentes.\n\nL'écart type les distinguerait." },
    { d:2, e:"Calculer la moyenne de la série groupée : [0;10[ effectif 5, [10;20[ effectif 15, [20;30[ effectif 5.", r:"15",
      c:"On utilise les centres de classe : 5, 15 et 25.\n\nMoyenne = (5×5 + 15×15 + 5×25)/25\n= (25 + 225 + 125)/25\n= 375/25 = 15." },
    { d:3, e:"Deux classes ont pour résultats : A : moyenne 13, écart type 1,5. B : moyenne 13, écart type 4. Comparer.", r:"Même niveau moyen, B plus hétérogène",
      c:"Les deux classes ont la même moyenne : le niveau moyen est identique.\n\nMais l'écart type de B est plus de deux fois supérieur à celui de A.\n\n<b>Interprétation</b> : la classe A est homogène, tous les élèves ont des résultats proches. La classe B est hétérogène : elle contient à la fois des élèves très performants et en grande difficulté.\n\nC'est le point important : une moyenne identique peut masquer des situations très différentes." },
    { d:3, e:"Montrer que si on ajoute 5 à toutes les valeurs d'une série, la moyenne augmente de 5.", r:"Démonstration",
      c:"Soit x₁, …, xₙ les valeurs initiales, de moyenne x̄.\n\nNouvelles valeurs : yᵢ = xᵢ + 5.\n\nNouvelle moyenne :\nȳ = (y₁ + … + yₙ)/n = ((x₁+5) + … + (xₙ+5))/n\n= (x₁ + … + xₙ + 5n)/n\n= (x₁ + … + xₙ)/n + 5\n= x̄ + 5 ✓\n\n<b>Et pour l'écart type ?</b> Il ne change pas : ajouter une constante décale toutes les valeurs, mais ne modifie pas leur dispersion." },
    { d:3, e:"Une série a pour moyenne 20 et pour écart type 3. Entre quelles valeurs se situe la majorité des données ?", r:"Environ entre 14 et 26",
      c:"Règle usuelle : la majorité des valeurs se situe à moins de deux écarts types de la moyenne.\n\n20 − 2×3 = 14 et 20 + 2×3 = 26.\n\nLa majorité des données se situe donc entre 14 et 26.\n\nCette règle découle de l'inégalité de Bienaymé-Tchebychev, qui garantit qu'au moins 75 % des valeurs sont dans cet intervalle." },
    { d:3, e:"La moyenne d'une classe est 12. Un élève a 18. Peut-on en déduire que la classe est bonne ?", r:"Non, sans la dispersion",
      c:"La moyenne seule ne suffit pas à juger.\n\nUn élève à 18 pourrait être un cas isolé dans une classe faible, ou un élève parmi beaucoup d'autres bons.\n\nIl faut aussi l'écart type ou la médiane.\n\n<b>Exemple</b> : une classe avec moyenne 12 et écart type 5 est très hétérogène (certains élèves sont à 17, d'autres à 7). Une classe avec moyenne 12 et écart type 1 est homogène (tous autour de 12)." },
    { d:3, e:"Montrer que la somme des écarts à la moyenne est nulle.", r:"Démonstration",
      c:"On calcule Σ(xᵢ − x̄) = Σxᵢ − Σx̄.\n\nOr Σx̄ = n·x̄ (on ajoute n fois la même valeur).\n\nEt Σxᵢ = n·x̄, par définition de la moyenne.\n\nDonc Σ(xᵢ − x̄) = n·x̄ − n·x̄ = 0 ✓\n\n<b>Conséquence</b> — C'est pour cette raison qu'on ne peut pas mesurer la dispersion en faisant la moyenne des écarts : elle vaudrait toujours 0. D'où l'idée de mettre les écarts <b>au carré</b> avant de moyenner, ce qui donne la variance." },
    { d:3, e:"Série : 5, 7, 7, 9, 10, 12, 15, 20. Calculer la médiane et Q3.", r:"Médiane = 9,5 et Q3 = 13,5",
      c:"Effectif : 8.\n\n<b>Médiane</b> : les 4e et 5e valeurs sont 9 et 10.\nMédiane = (9 + 10)/2 = 9,5.\n\n<b>Q3</b> : 8 × 0,75 = 6, on prend... au rang 6 la valeur est 12. Mais une convention courante donne la moyenne des 6e et 7e valeurs.\n\nPrenons la convention du programme : Q3 est la valeur de rang ⌈0,75 × n⌉ = ⌈6⌉ = 6, soit 12.\n\nSelon les conventions, on trouve 12 ou (12+15)/2 = 13,5. Retiens la convention de ton cours." },
    { d:3, e:"Pourquoi utilise-t-on la médiane plutôt que la moyenne pour les salaires ?", r:"À cause des valeurs extrêmes",
      c:"Dans une distribution de salaires, quelques très hauts salaires tirent la moyenne vers le haut.\n\nExemple : 9 personnes à 1500 € et 1 à 20 000 €.\n\nMoyenne = (9×1500 + 20000)/10 = (13500 + 20000)/10 = 3350 €.\n\nMédiane = 1500 € (la 5e et 6e valeurs sont toutes deux à 1500 €).\n\nLa médiane dit mieux la réalité : « la moitié des gens gagne moins de 1500 € ». La moyenne est biaisée par un seul cas extrême." },
    { d:3, e:"Deux séries ont pour médianes 10 et 12. Peut-on dire que la seconde est meilleure ?", r:"Non, cela dépend du contexte",
      c:"« Meilleur » n'a de sens qu'en fonction de ce qu'on mesure.\n\nPour des notes, une médiane plus élevée est effectivement préférable. Pour des temps de course, non — un temps plus court est meilleur.\n\nDe plus, une médiane ne dit rien de la dispersion : les deux séries peuvent avoir des écarts très différents autour de leur médiane.\n\n<b>En rédaction</b> — Ne jamais conclure « c'est mieux » sans préciser le critère et l'interprétation contextuelle." },
    { d:3, e:"Calculer l'écart type de la série 2, 4, 4, 6, 4.", r:"1,26 environ",
      c:"<b>Étape 1</b> : moyenne.\n(2 + 4 + 4 + 6 + 4)/5 = 20/5 = 4.\n\n<b>Étape 2</b> : écarts au carré.\n(2−4)² = 4\n(4−4)² = 0\n(4−4)² = 0\n(6−4)² = 4\n(4−4)² = 0\n\n<b>Étape 3</b> : variance.\n(4 + 0 + 0 + 4 + 0)/5 = 8/5 = 1,6.\n\n<b>Étape 4</b> : écart type.\nσ = √1,6 ≈ 1,26.\n\nLes valeurs s'écartent en moyenne d'environ 1,26 unité de la moyenne." }
  ]
},
{
  id:"2de-information-chiffree", niveau:"2de", titre:"2de · Information chiffrée et évolutions", temps:"22 min",
  resume:"Proportions, pourcentages, taux d'évolution, coefficient multiplicateur, évolutions successives.",
  lecons:[
    { titre:"Proportions et pourcentages", contenu:`
      <h3>1. Proportion d'une partie dans un tout</h3>
      <p>Une proportion mesure la part qu'une partie représente dans un ensemble :</p>
      <div class="formula">proportion = effectif de la partie / effectif total</div>
      <p>Le résultat est un nombre compris entre 0 et 1, qu'on peut exprimer en fraction, en décimal ou en pourcentage.</p>
      <div class="social">
        <b>Exemple</b> — Dans un lycée de 800 élèves, 260 sont en seconde. La proportion vaut 260/800 = 0,325 = 32,5 %.
      </div>

      <h3>2. Calculer une partie connaissant le tout</h3>
      <p>Pour prendre t % d'un nombre N, on multiplie :</p>
      <div class="formula">partie = N × t/100</div>
      <p>Prendre 15 % de 240 : 240 × 0,15 = 36.</p>

      <h3>3. Calculer le tout connaissant une partie</h3>
      <p>Démarche inverse, souvent mal maîtrisée : si une partie P représente t % du tout, alors :</p>
      <div class="formula">tout = partie / (t/100) = partie × 100/t</div>
      <div class="box warn"><b>Erreur classique</b> — Si 30 élèves représentent 40 % d'une classe, la classe compte 30/0,40 = 75 élèves, et non 30 × 0,40 = 12. Le sens de l'opération est décisif.</div>

      <h3>4. Proportion de proportion</h3>
      <p>Pour calculer une proportion dans une sous-population, on multiplie les proportions :</p>
      <div class="formula">proportion de A dans C = proportion de A dans B × proportion de B dans C</div>
      <p>Exemple : 60 % des élèves sont des filles, et 25 % des filles font du latin. Alors 0,60 × 0,25 = 0,15, soit 15 % des élèves font du latin.</p>
      <div class="social">
        <b>Vérification avec un effectif</b> — Sur 200 élèves : 120 filles, dont 30 latinistes. Or 30/200 = 15 % ✓
      </div>

      <h3>5. Comparer des proportions</h3>
      <p>Attention à une idée fausse fréquente : <b>une proportion plus grande dans chaque sous-groupe n'implique pas une proportion plus grande au total</b>. Cela dépend des effectifs de chaque sous-groupe.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Dans une entreprise de 250 salariés, 40 % sont des cadres. Parmi les cadres, 30 % ont plus de 50 ans. Combien de cadres de plus de 50 ans ?</p>
      <ul>
        <li>Nombre de cadres : 250 × 0,40 = 100</li>
        <li>Cadres de plus de 50 ans : 100 × 0,30 = 30</li>
      </ul>
      <p><b>Méthode directe :</b> 250 × 0,40 × 0,30 = 250 × 0,12 = 30 ✓</p>
      <p>Les 30 cadres âgés représentent 30/250 = 12 % de l'entreprise.</p>
    ` },
    { titre:"Taux d'évolution et coefficient multiplicateur", contenu:`
      <h3>1. Taux d'évolution</h3>
      <p>Le taux d'évolution mesure la variation relative entre une valeur de départ V_D et une valeur d'arrivée V_A :</p>
      <div class="formula">t = (V_A − V_D) / V_D</div>
      <p>Le résultat est un nombre, souvent exprimé en pourcentage. Il est positif pour une hausse, négatif pour une baisse.</p>

      <h3>2. Coefficient multiplicateur</h3>
      <p>C'est l'outil central du chapitre. Un seul nombre résume l'évolution :</p>
      <div class="formula">CM = V_A / V_D = 1 + t</div>
      <div class="box"><b>Les deux sens</b> — Une hausse de 25 % donne CM = 1,25. Une baisse de 25 % donne CM = 0,75. Retiens « 1 + t » avec t algébrique.</div>

      <h3>3. Les coefficients à connaître</h3>
      <div class="formula">+10 %  →  × 1,10        −10 %  →  × 0,90
+50 %  →  × 1,50        −50 %  →  × 0,50
+100 % →  × 2,00        −20 %  →  × 0,80
+5 %   →  × 1,05        −1 %   →  × 0,99</div>

      <h3>4. Évolutions successives</h3>
      <p>Pour plusieurs évolutions qui se suivent, on <b>multiplie</b> les coefficients :</p>
      <div class="formula">CM global = CM₁ × CM₂ × … × CMₙ</div>
      <div class="social">
        <b>Exemple</b> — Une hausse de 20 % suivie d'une baisse de 20 % : 1,20 × 0,80 = 0,96. Le résultat est une <b>baisse</b> de 4 %, pas un retour au point de départ.
      </div>
      <div class="box warn"><b>Erreur classique</b> — Croire que +20 % puis −20 % ramène à la valeur initiale. C'est faux : les deux pourcentages ne portent pas sur la même base.</div>

      <h3>5. Évolution réciproque</h3>
      <p>Pour revenir à la valeur de départ après une évolution de coefficient CM, on multiplie par 1/CM.</p>
      <div class="formula">Après +25 % (CM = 1,25), il faut × 1/1,25 = 0,80, soit une baisse de 20 %</div>
      <div class="box"><b>Le piège de l'asymétrie</b> — Une hausse de 25 % se rattrape par une baisse de 20 %. Les deux pourcentages ne sont pas égaux, car ils ne portent pas sur la même base.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Un article coûte 80 €. Son prix augmente de 15 %, puis baisse de 10 %. Quel est le prix final ?</p>
      <ul>
        <li>Première évolution : CM₁ = 1,15, prix intermédiaire = 80 × 1,15 = 92 €</li>
        <li>Seconde évolution : CM₂ = 0,90, prix final = 92 × 0,90 = 82,80 €</li>
      </ul>
      <p><b>Méthode directe :</b> CM global = 1,15 × 0,90 = 1,035, donc 80 × 1,035 = 82,80 € ✓</p>
      <p><b>Lecture :</b> l'évolution globale est une hausse de 3,5 %.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — les proportions et les pourcentages, puis les taux d'évolution et les coefficients multiplicateurs. Le coefficient multiplicateur est l'outil à maîtriser absolument.</div>`,
  exercices:[
    { d:1, e:"Calculer 20 % de 150.", r:"30",
      c:"150 × 0,20 = 30." },
    { d:1, e:"Calculer 15 % de 240.", r:"36",
      c:"240 × 0,15 = 36." },
    { d:1, e:"Dans une classe de 30 élèves, 18 sont des filles. Quelle est la proportion de filles ?", r:"0,6",
      c:"18/30 = 0,6 = 60 %." },
    { d:1, e:"Un article coûte 50 € et augmente de 10 %. Quel est son nouveau prix ?", r:"55 €",
      c:"Coefficient multiplicateur : 1,10.\n\n50 × 1,10 = 55 €." },
    { d:1, e:"Un article coûte 80 € et baisse de 25 %. Quel est son nouveau prix ?", r:"60 €",
      c:"Coefficient multiplicateur : 0,75.\n\n80 × 0,75 = 60 €." },
    { d:1, e:"Quel coefficient multiplicateur correspond à une hausse de 30 % ?", r:"1,30",
      c:"CM = 1 + t = 1 + 0,30 = 1,30." },
    { d:1, e:"Quel coefficient correspond à une baisse de 12 % ?", r:"0,88",
      c:"CM = 1 + t = 1 − 0,12 = 0,88." },
    { d:1, e:"Un prix double. Quelle est le taux d'évolution ?", r:"+100 %",
      c:"Si le prix double, alors CM = 2.\n\nOr CM = 1 + t, donc t = 1 = 100 %.\n\nC'est une hausse de 100 %." },
    { d:1, e:"Un prix est divisé par 2. Quel est le taux d'évolution ?", r:"−50 %",
      c:"CM = 0,5 = 1 + t, donc t = −0,5 = −50 %." },
    { d:1, e:"Que vaut 5/8 en pourcentage ?", r:"62,5 %",
      c:"5/8 = 0,625 = 62,5 %." },
    { d:2, e:"Un prix passe de 120 € à 150 €. Quel est le taux d'évolution ?", r:"+25 %",
      c:"t = (V_A − V_D)/V_D = (150 − 120)/120 = 30/120 = 0,25.\n\nSoit +25 %." },
    { d:2, e:"Un prix passe de 200 € à 170 €. Quel est le taux d'évolution ?", r:"−15 %",
      c:"t = (170 − 200)/200 = −30/200 = −0,15.\n\nSoit −15 %." },
    { d:2, e:"Un prix augmente de 20 % puis de 30 %. Quel est le taux global ?", r:"+56 %",
      c:"CM global = 1,20 × 1,30 = 1,56.\n\nDonc t = 0,56, soit +56 %.\n\n<b>Attention</b> — Ce n'est pas +50 % : les pourcentages ne s'additionnent pas." },
    { d:2, e:"Un prix augmente de 25 % puis baisse de 25 %. Quel est le taux global ?", r:"−6,25 %",
      c:"CM global = 1,25 × 0,75 = 0,9375.\n\nDonc t = −0,0625, soit −6,25 %.\n\nLe prix final est <b>inférieur</b> au prix initial." },
    { d:2, e:"Après une hausse de 40 %, quelle baisse ramène au prix initial ?", r:"−28,57 % environ",
      c:"CM = 1,40. Pour revenir, il faut multiplier par 1/1,40 ≈ 0,7143.\n\nDonc t = 0,7143 − 1 = −0,2857, soit environ −28,6 %.\n\n<b>Le point clé</b> — Ce n'est pas −40 % : la baisse porte sur le prix déjà augmenté." },
    { d:2, e:"Dans un lycée de 750 élèves, 45 % sont des garçons. Combien de garçons ?", r:"337,5",
      c:"750 × 0,45 = 337,5.\n\n<b>Remarque</b> — Le résultat n'est pas entier : l'énoncé contient une incohérence, ou il faut arrondir. Avec 720 élèves, on obtiendrait 324 garçons." },
    { d:2, e:"25 élèves représentent 20 % d'une classe. Combien d'élèves dans la classe ?", r:"125",
      c:"tout = partie / proportion = 25/0,20 = 125.\n\n<b>Erreur à éviter</b> — Ce n'est pas 25 × 0,20 = 5. Il faut diviser, pas multiplier." },
    { d:2, e:"Un produit coûte 45 € après une hausse de 12,5 %. Quel était son prix initial ?", r:"40 €",
      c:"CM = 1,125.\n\nprix initial = 45/1,125 = 40 €.\n\nVérification : 40 × 1,125 = 45 ✓" },
    { d:2, e:"70 % des élèves sont des filles, et 40 % des filles font du sport. Quel pourcentage des élèves cela représente-t-il ?", r:"28 %",
      c:"0,70 × 0,40 = 0,28.\n\nSoit 28 % des élèves." },
    { d:2, e:"Un salaire augmente de 5 % chaque année pendant 3 ans. Quel est le taux global ?", r:"≈ 15,76 %",
      c:"CM global = 1,05³.\n\n1,05³ = 1,157625.\n\nDonc t ≈ 0,1576, soit environ 15,76 %.\n\n<b>Attention</b> — Une hausse de 5 % par an pendant 3 ans ne donne pas +15 %, mais +15,76 % : les intérêts se composent." },
    { d:2, e:"Un prix subit une hausse de 10 %, puis une hausse de 10 %, puis une baisse de 20 %. Quel est le taux global ?", r:"−3,2 %",
      c:"CM global = 1,10 × 1,10 × 0,80 = 1,21 × 0,80 = 0,968.\n\nDonc t = −0,032, soit −3,2 %.\n\nLe prix final est inférieur au prix initial." },
    { d:3, e:"Une entreprise a vu son chiffre d'affaires augmenter de 8 % en 2024 et baisser de 8 % en 2025. Est-elle revenue à son niveau de 2023 ?", r:"Non, elle est en dessous",
      c:"CM global = 1,08 × 0,92 = 0,9936.\n\nDonc t = −0,0064, soit une baisse de 0,64 %.\n\nLe chiffre d'affaires est <b>légèrement inférieur</b> au niveau de 2023.\n\n<b>Le principe</b> — Une hausse suivie d'une baisse du même pourcentage ne ramène jamais au point de départ, car les deux portent sur des bases différentes." },
    { d:3, e:"Un prix a augmenté de 60 %. Quelle baisse en pourcentage le ramènerait à son prix initial ?", r:"−37,5 %",
      c:"CM = 1,60, donc pour revenir : 1/1,60 = 0,625.\n\nt = 0,625 − 1 = −0,375, soit −37,5 %.\n\nVérification : 1,60 × 0,625 = 1 ✓" },
    { d:3, e:"Un article coûte 250 € TTC avec une TVA de 20 %. Quel est son prix hors taxe ?", r:"≈ 208,33 €",
      c:"Le prix TTC est le prix HT majoré de 20 %.\n\nDonc TTC = HT × 1,20.\n\nHT = 250/1,20 ≈ 208,33 €.\n\n<b>Erreur classique</b> — Retirer 20 % de 250 donne 200 €, ce qui est faux. La TVA porte sur le prix HT, pas sur le prix TTC." },
    { d:3, e:"Une population augmente de 2 % par an. En combien d'années double-t-elle environ ?", r:"≈ 35 ans",
      c:"Il faut résoudre 1,02ⁿ = 2.\n\nPar tâtonnement :\n1,02³⁵ ≈ 2,00.\n\nDonc environ 35 ans.\n\n<b>La règle des 70</b> — Pour un taux faible t %, le temps de doublement est d'environ 70/t années. Ici 70/2 = 35 ans ✓" },
    { d:3, e:"Un prix baisse de 30 %, puis augmente de 50 %. Quel est le taux global ?", r:"+5 %",
      c:"CM global = 0,70 × 1,50 = 1,05.\n\nDonc t = +5 %.\n\n<b>Observation</b> — La hausse (50 %) est plus grande en pourcentage que la baisse (30 %), mais l'effet est asymétrique : les pourcentages portent sur des bases différentes." },
    { d:3, e:"Dans une entreprise, 30 % des salariés sont des cadres et 60 % des cadres sont des hommes. Par ailleurs, 50 % des non-cadres sont des hommes. Quelle proportion de l'entreprise sont des hommes ?", r:"53 %",
      c:"<b>Étape 1</b> : proportion d'hommes parmi les cadres.\n0,30 × 0,60 = 0,18 de l'entreprise.\n\n<b>Étape 2</b> : proportion d'hommes parmi les non-cadres.\nLes non-cadres représentent 70 % de l'entreprise.\n0,70 × 0,50 = 0,35 de l'entreprise.\n\n<b>Étape 3</b> : total.\n0,18 + 0,35 = 0,53.\n\nSoit 53 % d'hommes dans l'entreprise." },
    { d:3, e:"Un produit voit son prix multiplié par 1,5 puis divisé par 1,5. Retrouve-t-on le prix initial ?", r:"Oui, exactement",
      c:"CM global = 1,5 × (1/1,5) = 1,5 × 0,6667 = 1.\n\nDonc t = 0, et le prix revient exactement au niveau initial.\n\n<b>La différence avec les pourcentages</b> — Ici on a utilisé la multiplication inverse exacte. Quand on dit « baisser de 33,33 % », le calcul est une approximation ; en multipliant directement par 1/1,5, on retrouve exactement la valeur de départ." },
    { d:3, e:"Un article coûte 180 € après deux hausses successives de 20 % chacune. Quel était son prix initial ?", r:"125 €",
      c:"CM global = 1,20 × 1,20 = 1,44.\n\nprix initial = 180/1,44 = 125 €.\n\nVérification : 125 × 1,20 = 150, puis 150 × 1,20 = 180 ✓" },
    { d:3, e:"Deux magasins appliquent des remises différentes. Le premier annonce « −30 % puis −20 % supplémentaires », le second « −50 % directement ». Lequel est le plus avantageux ?", r:"Le second (−50 %)",
      c:"<b>Premier magasin</b> : CM = 0,70 × 0,80 = 0,56.\n\nSoit une remise globale de 44 %.\n\n<b>Second magasin</b> : CM = 0,50.\n\nSoit une remise de 50 %.\n\nLe second est plus avantageux.\n\n<b>Le piège du « encore plus »</b> — Les remises successives ne s'additionnent pas. « −30 % puis −20 % » donne −44 %, pas −50 %." },
    { d:3, e:"Un placement rapporte 4 % la première année, puis 6 % la deuxième. Quel est le taux de rendement global sur deux ans ?", r:"≈ 10,24 %",
      c:"CM global = 1,04 × 1,06 = 1,1024.\n\nDonc t = 0,1024, soit environ 10,24 %.\n\nCe n'est pas 10 %, car les intérêts de la première année produisent eux aussi des intérêts la deuxième. C'est l'effet des intérêts composés." },
    { d:3, e:"Une entreprise affirme avoir augmenté ses ventes de 150 %. Un journaliste titre « les ventes ont plus que doublé ». Est-ce exact ?", r:"Oui, c'est exact",
      c:"CM = 1 + 1,50 = 2,50.\n\nLes ventes ont donc été multipliées par 2,5.\n\n« Plus que doublé » signifie dépasser le double, soit un CM supérieur à 2.\n\nOr 2,5 &gt; 2 : l'affirmation est exacte.\n\n<b>Vocabulaire</b> — « Augmenter de 100 % » est synonyme de « doubler ». « Augmenter de 200 % » signifie tripler." },
    { d:3, e:"Un prix augmente de 10 % puis baisse de 10 %, puis augmente de 10 % puis baisse de 10 %. Quel est le taux global ?", r:"≈ −3,96 %",
      c:"CM global = (1,10 × 0,90)² = 0,99².\n\n0,99² = 0,9801.\n\nDonc t = −0,0199, soit environ −1,99 %.\n\nReprenons : 0,99² = 0,9801, donc t = −0,0199 ≈ −1,99 %.\n\n<b>Observation</b> — Chaque paire « +10 %/−10 % » fait perdre 1 %. Deux paires en font perdre environ 2 % (0,99⁴ = 0,9606, soit −3,94 %).\n\nLe calcul exact pour quatre évolutions : 0,99⁴ = 0,96059601, soit −3,94 %." }
  ]
},
{
  id:"2de-variables-qualitatives", niveau:"2de", titre:"2de · Croisement de deux variables qualitatives", temps:"20 min",
  resume:"Tableaux croisés, effectifs, fréquences conditionnelles, lecture de données.",
  lecons:[
    { titre:"Tableaux croisés d'effectifs", contenu:`
      <h3>1. Deux variables qualitatives</h3>
      <p>Une variable <b>qualitative</b> prend des valeurs qui ne sont pas numériques : le sexe, la couleur des yeux, le sport préféré. Croiser deux variables qualitatives, c'est étudier la répartition d'une population selon deux critères à la fois.</p>

      <h3>2. Le tableau à double entrée</h3>
      <p>C'est l'outil central. Les lignes portent une variable, les colonnes l'autre. Chaque case donne l'effectif de l'intersection.</p>
      <div class="formula">Une case en (ligne i, colonne j) contient le nombre d'individus
qui appartiennent à la catégorie i ET à la catégorie j</div>

      <h3>3. Les marges</h3>
      <p>Les <b>effectifs marginaux</b> sont les totaux de chaque ligne et de chaque colonne. Ils donnent la répartition selon une seule variable.</p>
      <div class="social">
        <b>Exemple type</b><br>
        Sur 100 élèves : 45 filles et 55 garçons.<br>
        Parmi les filles : 20 font du latin, 25 non.<br>
        Parmi les garçons : 10 font du latin, 45 non.
      </div>
      <div class="box"><b>Le contrôle à faire</b> — La somme des effectifs marginaux des lignes doit égaler celle des colonnes, et les deux doivent valoir l'effectif total. Si ce n'est pas le cas, il y a une erreur.</div>

      <h3>4. Lire un tableau croisé</h3>
      <p>Trois lectures différentes, à ne pas confondre :</p>
      <ul>
        <li><b>L'effectif</b> d'une case : le nombre d'individus de cette catégorie</li>
        <li><b>La fréquence globale</b> : l'effectif rapporté à l'effectif total</li>
        <li><b>La fréquence conditionnelle</b> : l'effectif rapporté à la marge de la ligne ou de la colonne</li>
      </ul>
      <div class="box warn"><b>L'erreur la plus fréquente</b> — Confondre fréquence globale et fréquence conditionnelle. « 20 % des élèves sont des filles latinistes » et « 20 % des filles font du latin » sont deux affirmations différentes.</div>

      <h3>5. Compléter un tableau</h3>
      <p>Avec les effectifs marginaux connus, on déduit les cases manquantes par soustraction.</p>
      <div class="social">
        <b>Méthode</b> — On commence par les lignes ou colonnes où une seule case est inconnue. On calcule, puis on propage.
      </div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Reprenons le tableau : 100 élèves, dont 45 filles (20 latinistes, 25 non) et 55 garçons (10 latinistes, 45 non). Quelle est la fréquence globale des latinistes ?</p>
      <ul>
        <li>Nombre total de latinistes : 20 + 10 = 30</li>
        <li>Effectif total : 100</li>
        <li>Fréquence globale : 30/100 = 0,30</li>
      </ul>
      <p><b>En pourcentage :</b> 30 % des élèves font du latin.</p>
      <p><b>Comparaison :</b> cette fréquence globale (30 %) est différente de la fréquence conditionnelle chez les filles (20/45 ≈ 44,4 %) et chez les garçons (10/55 ≈ 18,2 %).</p>
    ` },
    { titre:"Fréquences conditionnelles et comparaison", contenu:`
      <h3>1. La fréquence conditionnelle</h3>
      <p>C'est la fréquence d'une catégorie <b>restreinte</b> à une sous-population :</p>
      <div class="formula">fréquence de A sachant B = effectif de (A et B) / effectif de B</div>
      <div class="social">
        <b>Exemple</b> — Parmi les filles (45), 20 font du latin. La fréquence conditionnelle est 20/45 ≈ 0,444, soit environ 44,4 %.
      </div>

      <h3>2. Comparer deux sous-populations</h3>
      <p>C'est l'objectif principal du chapitre : la fréquence conditionnelle permet de comparer le comportement de deux groupes.</p>
      <ul>
        <li>Chez les filles : 44,4 % font du latin</li>
        <li>Chez les garçons : 18,2 % font du latin</li>
      </ul>
      <p>La pratique du latin est nettement plus répandue chez les filles dans cet exemple.</p>
      <div class="box"><b>La question à se poser</b> — Quelle population sert de référence ? C'est toujours à elle que se rapporte la fréquence conditionnelle.</div>

      <h3>3. Le piège de la fréquence globale</h3>
      <p>Comparer les effectifs bruts peut induire en erreur. Si les filles sont plus nombreuses que les garçons, elles auront mécaniquement plus de latinistes, sans que la pratique soit plus répandue chez elles.</p>
      <div class="box warn"><b>Règle de méthode</b> — Pour comparer deux sous-populations de tailles différentes, on compare les <b>fréquences conditionnelles</b>, jamais les effectifs.</div>

      <h3>4. Le paradoxe de Simpson</h3>
      <p>Il arrive qu'une tendance observée dans chaque sous-groupe s'inverse quand on regroupe les données. C'est un phénomène contre-intuitif mais réel.</p>
      <div class="social">
        <b>Illustration</b> — Un traitement peut sembler efficace dans chaque tranche d'âge, mais paraître inefficace sur l'ensemble, si les tranches d'âge sont inégalement réparties entre les groupes.
      </div>
      <div class="box"><b>Ce qu'il faut en retenir</b> — L'agrégation de données peut créer des effets artificiels. Il faut toujours se demander sur quelle population on calcule une fréquence.</div>

      <h3>5. Représenter le croisement</h3>
      <p>Plusieurs représentations sont possibles :</p>
      <ul>
        <li><b>Diagrammes en barres juxtaposées</b> : une barre par modalité de chaque variable</li>
        <li><b>Diagrammes empilés</b> : pour montrer la composition de chaque catégorie</li>
        <li><b>Diagrammes circulaires</b> : pour montrer les parts dans chaque sous-population</li>
      </ul>
      <div class="box warn"><b>Le choix de la base</b> — Un diagramme peut être construit en pourcentage du total ou en pourcentage de chaque ligne. Le message visuel change complètement. Vérifie toujours la base de calcul du graphique.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Dans un lycée, on étudie la pratique du sport selon le niveau. En seconde : 60 sportifs sur 200 élèves. En terminale : 80 sportifs sur 250 élèves. Où la pratique est-elle la plus répandue ?</p>
      <ul>
        <li>Seconde : 60/200 = 0,30, soit 30 %</li>
        <li>Terminale : 80/250 = 0,32, soit 32 %</li>
      </ul>
      <p><b>Conclusion :</b> la pratique est légèrement plus répandue en terminale (32 % contre 30 %), alors que l'effectif brut de sportifs y est plus élevé (80 contre 60) — mais les effectifs totaux diffèrent aussi.</p>
      <p><b>Sans le calcul des fréquences,</b> on aurait pu conclure à tort que la différence d'effectifs reflétait une différence de pratique.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — les tableaux croisés d'effectifs, puis les fréquences conditionnelles et la comparaison de sous-populations.</div>`,
  exercices:[
    { d:1, e:"Qu'est-ce qu'une variable qualitative ?", r:"Une variable dont les valeurs ne sont pas numériques",
      c:"Une variable qualitative prend des valeurs non numériques : sexe, couleur, sport préféré.\n\nElle s'oppose à une variable quantitative, comme la taille ou l'âge." },
    { d:1, e:"Que sont les effectifs marginaux d'un tableau croisé ?", r:"Les totaux des lignes et des colonnes",
      c:"Ce sont les totaux partiels figurant en marge du tableau.\n\nIls donnent la répartition selon une seule variable." },
    { d:1, e:"Sur 80 élèves, 32 font du latin. Quelle est la fréquence globale ?", r:"0,4",
      c:"32/80 = 0,4 = 40 %." },
    { d:1, e:"Dans un tableau, la somme des effectifs de toutes les cases vaut quoi ?", r:"L'effectif total",
      c:"Toutes les cases couvrent l'ensemble de la population.\n\nLeur somme vaut donc l'effectif total." },
    { d:1, e:"Quelle est la différence entre effectif et fréquence ?", r:"L'effectif est un nombre d'individus, la fréquence est une proportion",
      c:"L'effectif compte les individus (par exemple 45 filles).\n\nLa fréquence est un rapport (par exemple 0,45 ou 45 %)." },
    { d:1, e:"Dans une classe, 12 filles sur 30 élèves font du sport. Quelle est la fréquence conditionnelle chez les filles ?", r:"0,4",
      c:"La fréquence conditionnelle se calcule sur la sous-population.\n\nIci, sur les 30 élèves (si les 30 sont les filles) : 12/30 = 0,4.\n\nSi la classe compte 50 élèves dont 30 filles, alors la fréquence chez les filles est 12/30 = 0,4." },
    { d:1, e:"Un tableau croisé peut-il comporter plus de deux variables ?", r:"Non, il en croise deux",
      c:"Un tableau à double entrée croise exactement deux variables : une en lignes, une en colonnes.\n\nPour trois variables, il faudrait plusieurs tableaux." },
    { d:1, e:"Que contrôle-t-on dans un tableau croisé bien construit ?", r:"Que les marges totales concordent",
      c:"La somme des effectifs marginaux des lignes doit égaler celle des colonnes, et valoir l'effectif total.\n\nC'est le contrôle de cohérence à faire systématiquement." },
    { d:1, e:"Pour comparer deux sous-populations de tailles différentes, on compare :", r:"Les fréquences conditionnelles",
      c:"Les effectifs bruts ne sont pas comparables si les groupes ont des tailles différentes.\n\nIl faut rapporter chaque effectif à son groupe : c'est la fréquence conditionnelle." },
    { d:1, e:"Sur 50 garçons, 15 font du théâtre. Quelle est la fréquence conditionnelle ?", r:"0,3",
      c:"15/50 = 0,3 = 30 %." },
    { d:2, e:"Sur 200 élèves, 120 sont des filles. Sur 80 filles, 24 font du latin. Quelle est la fréquence conditionnelle chez les filles ?", r:"0,3",
      c:"On rapporte au groupe des filles : 24/80 = 0,3.\n\nSoit 30 % des filles font du latin." },
    { d:2, e:"Dans la situation précédente, quelle est la fréquence globale des filles latinistes ?", r:"0,12",
      c:"24/200 = 0,12 = 12 %.\n\n<b>Attention</b> — Cette fréquence (12 %) est différente de la fréquence conditionnelle chez les filles (30 %). Il faut toujours préciser la base de calcul." },
    { d:2, e:"Un tableau donne : 40 filles dont 16 sportives, 60 garçons dont 30 sportifs. Où le sport est-il le plus répandu ?", r:"Chez les garçons",
      c:"Filles : 16/40 = 0,4 = 40 %.\nGarçons : 30/60 = 0,5 = 50 %.\n\nLe sport est plus répandu chez les garçons (50 % contre 40 %).\n\n<b>Remarque</b> — L'effectif brut de sportifs est plus élevé chez les garçons (30 contre 16), mais les effectifs totaux diffèrent aussi : seule la fréquence conditionnelle permet de comparer." },
    { d:2, e:"Dans la situation précédente, quelle est la fréquence globale des sportifs ?", r:"0,46",
      c:"Total sportifs : 16 + 30 = 46.\nEffectif total : 100.\n\nFréquence globale : 46/100 = 0,46 = 46 %." },
    { d:2, e:"Un lycée compte 300 élèves en seconde et 200 en terminale. 90 secondes et 70 terminales font du sport. Comparer.", r:"Seconde : 30 %, terminale : 35 %",
      c:"Seconde : 90/300 = 0,30 = 30 %.\nTerminale : 70/200 = 0,35 = 35 %.\n\nLa pratique est plus répandue en terminale, alors que l'effectif brut de sportifs est plus élevé en seconde." },
    { d:2, e:"Que signifie une fréquence conditionnelle de 0,25 ?", r:"Un quart de la sous-population",
      c:"0,25 = 25 %, soit un quart.\n\nCela signifie que dans la sous-population considérée, 25 % des individus présentent le caractère étudié." },
    { d:2, e:"Pourquoi ne peut-on pas comparer directement les effectifs de deux sous-populations ?", r:"Parce que les tailles des groupes diffèrent",
      c:"Si un groupe est deux fois plus grand, il aura mécaniquement des effectifs plus élevés, sans que le phénomène soit plus fréquent.\n\nIl faut rapporter à la taille du groupe : c'est le rôle de la fréquence conditionnelle." },
    { d:2, e:"Un tableau indique 45 % de filles dans un lycée, dont 20 % font du latin. Quel pourcentage des élèves cela représente-t-il ?", r:"9 %",
      c:"0,45 × 0,20 = 0,09.\n\nSoit 9 % des élèves sont des filles latinistes." },
    { d:2, e:"Dans un échantillon, 30 % des individus ont les yeux bleus et 40 % des blonds ont les yeux bleus. Les blonds sont-ils surreprésentés parmi les yeux bleus ?", r:"Impossible à dire sans plus d'informations",
      c:"Il manque la proportion de blonds dans l'échantillon.\n\nSi les blonds représentent 50 % de l'échantillon et que 40 % d'entre eux ont les yeux bleus, alors les blonds fournissent 0,50 × 0,40 = 20 % des individus, sur 30 % d'yeux bleus : ils sont bien surreprésentés.\n\nMais sans cette donnée, on ne peut pas conclure." },
    { d:2, e:"Que montre un diagramme en barres juxtaposées ?", r:"La comparaison de plusieurs catégories",
      c:"Les barres sont placées côte à côte pour comparer visuellement les effectifs ou les fréquences.\n\nC'est la représentation adaptée à la comparaison de sous-populations." },
    { d:2, e:"Un tableau donne : 25 cadres dont 15 femmes, 75 ouvriers dont 30 femmes. Où les femmes sont-elles le plus représentées ?", r:"Chez les cadres",
      c:"Cadres : 15/25 = 0,6 = 60 %.\nOuvriers : 30/75 = 0,4 = 40 %.\n\nLes femmes sont plus représentées chez les cadres (60 % contre 40 %), alors que l'effectif brut de femmes est plus élevé chez les ouvriers (30 contre 15)." },
    { d:3, e:"Dans une entreprise, 60 % des hommes sont cadres et 40 % des femmes sont cadres. Les hommes sont-ils plus nombreux parmi les cadres ?", r:"Cela dépend de la proportion d'hommes",
      c:"Non, on ne peut pas conclure sans connaître la répartition hommes/femmes.\n\n<b>Exemple 1</b> — Si l'entreprise compte 90 hommes et 10 femmes :\ncadres hommes = 54, cadres femmes = 4. Les hommes dominent (93 %).\n\n<b>Exemple 2</b> — Si l'entreprise compte 10 hommes et 90 femmes :\ncadres hommes = 6, cadres femmes = 36. Les femmes dominent (86 %).\n\nMalgré une fréquence plus élevée chez les hommes dans les deux cas, la conclusion s'inverse complètement." },
    { d:3, e:"Un médicament guérit 90 % des hommes et 80 % des femmes dans chaque hôpital. Peut-il être globalement plus efficace chez les femmes ?", r:"Oui, c'est le paradoxe de Simpson",
      c:"Oui, c'est possible si la répartition des patients diffère entre les hôpitaux et si la gravité des cas varie.\n\n<b>Exemple</b> — Hôpital A (cas légers) : 90 % d'hommes, 10 % de femmes.\nHôpital B (cas graves) : 10 % d'hommes, 90 % de femmes.\n\nSi le taux de guérison global est plus faible dans l'hôpital B, les femmes — majoritaires dans B — auront un taux global plus faible, malgré un meilleur taux dans chaque hôpital.\n\n<b>C'est le paradoxe de Simpson</b> : l'agrégation peut inverser une tendance." },
    { d:3, e:"Montrer que la fréquence globale est une moyenne pondérée des fréquences conditionnelles.", r:"Démonstration",
      c:"Soit deux sous-populations B₁ et B₂, d'effectifs n₁ et n₂, et N = n₁ + n₂ l'effectif total.\n\nSoit A un caractère, de fréquences conditionnelles f₁ = P(A|B₁) et f₂ = P(A|B₂).\n\nEffectif de A : n_A = n₁f₁ + n₂f₂.\n\nFréquence globale :\nf = n_A/N = (n₁f₁ + n₂f₂)/(n₁ + n₂)\n= (n₁/N)·f₁ + (n₂/N)·f₂\n\nC'est bien une moyenne pondérée des fréquences conditionnelles, les poids étant les proportions de chaque groupe.\n\n<b>Conséquence</b> — La fréquence globale dépend à la fois des fréquences dans chaque groupe ET de la taille des groupes. C'est ce qui explique le paradoxe de Simpson." },
    { d:3, e:"Un tableau donne les résultats de deux traitements selon la gravité. Traitement A : 70 % de guérison sur les cas légers (100 patients) et 20 % sur les cas graves (100 patients). Traitement B : 80 % sur les cas légers (50 patients) et 15 % sur les cas graves (150 patients). Lequel est le meilleur globalement ?", r:"Traitement B",
      c:"<b>Traitement A</b> :\nGuérisons = 100 × 0,70 + 100 × 0,20 = 70 + 20 = 90 sur 200.\nTaux global : 90/200 = 45 %.\n\n<b>Traitement B</b> :\nGuérisons = 50 × 0,80 + 150 × 0,15 = 40 + 22,5 = 62,5 sur 200.\nTaux global : 62,5/200 ≈ 31 %.\n\nLe traitement A est meilleur globalement.\n\n<b>Le paradoxe</b> — Le traitement B est meilleur sur les cas légers (80 % contre 70 %) mais il est appliqué majoritairement à des cas graves, où tous deux sont peu efficaces. L'agrégation des données masque cette différence de répartition.\n\n<b>Leçon de méthode</b> — Toujours vérifier la comparabilité des groupes avant d'agréger." },
    { d:3, e:"Pourquoi le choix de la base est-il essentiel dans un diagramme croisé ?", r:"Parce que le message visuel change",
      c:"Un diagramme construit en pourcentage du total et un diagramme construit en pourcentage de chaque ligne ne racontent pas la même histoire.\n\n<b>Exemple</b> — Si les filles sont plus nombreuses que les garçons, un diagramme en pourcentage du total montrera plus de filles latinistes en valeur absolue, sans que la pratique soit plus répandue.\n\nLe diagramme en pourcentage de chaque ligne (ou colonne) rend correctement compte de la fréquence conditionnelle.\n\n<b>Conseil de lecture</b> — Face à un graphique statistique, cherche toujours la base de calcul dans la légende." },
    { d:3, e:"Dans une étude, 10 % des non-fumeurs et 30 % des fumeurs ont une maladie respiratoire. Par ailleurs, 20 % de la population fume. Quelle est la proportion de malades dans la population ?", r:"14 %",
      c:"<b>Étape 1</b> : malades chez les fumeurs.\n0,20 × 0,30 = 0,06 de la population.\n\n<b>Étape 2</b> : malades chez les non-fumeurs.\nLes non-fumeurs représentent 80 %.\n0,80 × 0,10 = 0,08 de la population.\n\n<b>Étape 3</b> : total.\n0,06 + 0,08 = 0,14.\n\nSoit 14 % de la population est malade." },
    { d:3, e:"Dans la situation précédente, quelle proportion des malades sont des fumeurs ?", r:"≈ 42,9 %",
      c:"Malades fumeurs : 0,06 de la population.\nMalades au total : 0,14 de la population.\n\nProportion : 0,06/0,14 ≈ 0,4286.\n\nSoit environ 42,9 % des malades sont des fumeurs.\n\n<b>Remarque</b> — Bien que les fumeurs aient trois fois plus de risque, ils ne représentent que 43 % des malades, car ils ne sont que 20 % de la population. C'est le même mécanisme que pour les tests de dépistage." },
    { d:3, e:"Expliquer pourquoi on ne peut pas déduire une causalité d'une association entre deux variables.", r:"Explication méthodologique",
      c:"Une association statistique entre deux variables ne prouve pas qu'une cause l'autre. Trois explications alternatives existent au moins :\n\n<b>1. Causalité inverse</b> — C'est peut-être B qui cause A.\n\n<b>2. Facteur confondant</b> — Une troisième variable C cause à la fois A et B. Exemple : les ventes de glaces et les noyades augmentent ensemble, mais c'est la chaleur qui cause les deux.\n\n<b>3. Hasard</b> — Sur un échantillon limité, une association peut apparaître par fluctuation d'échantillonnage.\n\nLes études observationnelles ne permettent donc que de formuler des hypothèses. Pour établir une causalité, il faut des protocoles contrôlés." },
    { d:3, e:"Un lycée a 60 % de filles. Chez les filles, 25 % font du latin. Chez les garçons, 12 % font du latin. Quel pourcentage des latinistes sont des filles ?", r:"≈ 69,4 %",
      c:"<b>Étape 1</b> : proporton de latinistes chez les filles dans l'établissement.\n0,60 × 0,25 = 0,15.\n\n<b>Étape 2</b> : chez les garçons.\nLes garçons représentent 40 %.\n0,40 × 0,12 = 0,048.\n\n<b>Étape 3</b> : total des latinistes.\n0,15 + 0,048 = 0,198.\n\n<b>Étape 4</b> : proportion de filles parmi les latinistes.\n0,15/0,198 ≈ 0,7576.\n\nSoit environ 75,8 % des latinistes sont des filles." }
  ]
},
{
  id:"2de-echantillonnage", niveau:"2de", titre:"2de · Fluctuation d'échantillonnage", temps:"20 min",
  resume:"Échantillon, fluctuation, intervalle de fluctuation, simulation et prise de décision.",
  lecons:[
    { titre:"Échantillonnage et fluctuation", contenu:`
      <h3>1. Échantillon et population</h3>
      <p>Un <b>échantillon</b> est un sous-ensemble de la population étudiée. On l'étudie pour estimer des caractéristiques de la population entière, quand une étude exhaustive serait trop coûteuse.</p>
      <div class="box"><b>Condition essentielle</b> — L'échantillon doit être constitué <b>au hasard</b>, de façon que chaque individu ait la même chance d'être choisi. Sinon, il est biaisé et les conclusions sont fausses.</div>

      <h3>2. Fluctuation d'échantillonnage</h3>
      <p>Si on prélève plusieurs échantillons de même taille dans une population, les fréquences observées <b>ne sont pas identiques</b> : elles fluctuent autour de la proportion réelle.</p>
      <div class="social">
        <b>Exemple</b> — Une pièce équilibrée donne 50 % de pile en théorie. Sur 100 lancers, on peut obtenir 47, 53, ou même 58 piles. C'est la fluctuation.
      </div>
      <div class="box warn"><b>Distinction à faire</b> — La fluctuation d'échantillonnage n'est pas une erreur de mesure, c'est une propriété fondamentale du hasard. Elle diminue quand la taille de l'échantillon augmente.</div>

      <h3>3. L'intervalle de fluctuation</h3>
      <p>Pour une proportion p et un échantillon de taille n, on admet que dans environ 95 % des cas, la fréquence observée f se situe dans :</p>
      <div class="formula">I = [p − 1/√n ; p + 1/√n]</div>
      <div class="box"><b>Conditions de validité</b> — Cette formule simplifiée exige n ≥ 25 et 0,2 ≤ p ≤ 0,8.</div>

      <h3>4. Comment l'utiliser</h3>
      <p>On calcule les bornes de l'intervalle, puis on vérifie si la fréquence observée s'y trouve.</p>
      <ul>
        <li>La fréquence est <b>dans</b> l'intervalle : l'observation est compatible avec l'hypothèse</li>
        <li>La fréquence est <b>hors</b> de l'intervalle : c'est très improbable sous cette hypothèse</li>
      </ul>

      <h3>5. Effet de la taille de l'échantillon</h3>
      <p>Plus n est grand, plus l'intervalle est étroit :</p>
      <div class="formula">Pour n = 100 : amplitude ≈ 0,20
Pour n = 400 : amplitude ≈ 0,10
Pour n = 1600 : amplitude ≈ 0,05</div>
      <p>Quadrupler la taille divise l'amplitude par deux.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>On lance 400 fois un dé et on obtient 54 fois un six, soit une fréquence de 0,135. Le dé est-il équilibré ?</p>
      <ul>
        <li>Si le dé est équilibré, p = 1/6 ≈ 0,167</li>
        <li>Marge : 1/√400 = 1/20 = 0,05</li>
        <li>Intervalle de fluctuation : [0,167 − 0,05 ; 0,167 + 0,05] = [0,117 ; 0,217]</li>
        <li>La fréquence observée 0,135 est dans cet intervalle</li>
      </ul>
      <p><b>Conclusion :</b> on ne peut pas rejeter l'hypothèse que le dé soit équilibré. L'écart observé est compatible avec la fluctuation d'échantillonnage.</p>
    ` },
    { titre:"Simulation et prise de décision", contenu:`
      <h3>1. La simulation</h3>
      <p>Quand le calcul exact est difficile, on <b>simule</b> l'expérience un grand nombre de fois et on observe la distribution des fréquences. C'est la méthode de Monte-Carlo.</p>
      <div class="box"><b>Principe</b> — On répète N fois une expérience aléatoire simulée par ordinateur, on calcule la fréquence observée, et on recommence plusieurs fois pour voir la dispersion.</div>

      <h3>2. Étapes d'une simulation</h3>
      <ul>
        <li>Modéliser l'expérience (probabilités de chaque issue)</li>
        <li>Répéter un grand nombre de fois</li>
        <li>Calculer la fréquence observée sur chaque série</li>
        <li>Comparer la dispersion obtenue à la théorie</li>
      </ul>
      <div class="box warn"><b>Le nombre de répétitions compte</b> — Sur 10 séries de 100 lancers, la dispersion sera grande. Sur 10 séries de 10 000 lancers, elle sera faible. C'est ce que la théorie permet de vérifier.</div>

      <h3>3. Prise de décision</h3>
      <p>La démarche complète pour tester une hypothèse :</p>
      <ul>
        <li>Formuler l'hypothèse sur la proportion p</li>
        <li>Calculer l'intervalle de fluctuation au seuil de 95 %</li>
        <li>Comparer la fréquence observée à cet intervalle</li>
        <li>Conclure : on rejette ou non l'hypothèse</li>
      </ul>
      <div class="box"><b>Ce que signifie « rejeter »</b> — Cela ne prouve pas que l'hypothèse est fausse avec certitude. Cela signifie que les données observées la rendent très improbable (moins de 5 % de chances). On parle de « rejet au seuil de 5 % ».</div>

      <h3>4. Application aux sondages</h3>
      <p>Un sondage sur n personnes donne une fréquence f. L'intervalle de confiance à 95 % pour la proportion réelle est :</p>
      <div class="formula">[f − 1/√n ; f + 1/√n]</div>
      <div class="social">
        <b>Ordre de grandeur</b> — Pour un sondage sur 1000 personnes, la marge est d'environ ±3 %. Pour ±1 %, il faut 10 000 personnes.
      </div>

      <h3>5. La loi des grands nombres (aperçu)</h3>
      <p>Le résultat fondamental qui justifie tout le chapitre : quand la taille de l'échantillon augmente, la fréquence observée se rapproche de la probabilité théorique.</p>
      <div class="formula">Plus n est grand, plus l'écart |f − p| est petit en probabilité</div>
      <p>Ce théorème sera démontré et approfondi en classe de Terminale.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Un candidat est annoncé à 45 % d'intentions de vote. Un sondage sur 900 personnes lui donne 420 voix, soit 46,7 %. Le sondage est-il compatible avec l'annonce ?</p>
      <ul>
        <li>Hypothèse : p = 0,45</li>
        <li>Marge : 1/√900 = 1/30 ≈ 0,033</li>
        <li>Intervalle de fluctuation : [0,45 − 0,033 ; 0,45 + 0,033] = [0,417 ; 0,483]</li>
        <li>La fréquence observée 0,467 est bien dans cet intervalle</li>
      </ul>
      <p><b>Conclusion :</b> le sondage est compatible avec l'hypothèse d'une intention de vote de 45 %. L'écart observé n'est pas significatif.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — la fluctuation d'échantillonnage et l'intervalle de fluctuation, puis la simulation et la prise de décision.</div>`,
  exercices:[
    { d:1, e:"Qu'est-ce qu'un échantillon ?", r:"Un sous-ensemble de la population",
      c:"Un échantillon est une partie de la population étudiée.\n\nOn l'étudie pour estimer des caractéristiques de la population entière." },
    { d:1, e:"Calculer 1/√100.", r:"0,1",
      c:"√100 = 10, donc 1/√100 = 1/10 = 0,1." },
    { d:1, e:"Calculer 1/√400.", r:"0,05",
      c:"√400 = 20, donc 1/√400 = 1/20 = 0,05." },
    { d:1, e:"Que signifie la fluctuation d'échantillonnage ?", r:"Les fréquences varient d'un échantillon à l'autre",
      c:"Si on prélève plusieurs échantillons de même taille, les fréquences observées diffèrent.\n\nElles fluctuent autour de la proportion réelle." },
    { d:1, e:"Quelle est l'amplitude de l'intervalle de fluctuation pour n = 100 ?", r:"0,2",
      c:"L'amplitude vaut 2/√n = 2/10 = 0,2." },
    { d:1, e:"Un échantillon doit-il être constitué au hasard ?", r:"Oui, c'est indispensable",
      c:"Si l'échantillon n'est pas aléatoire, il est biaisé.\n\nLes conclusions tirées seraient fausses, quelle que soit la taille de l'échantillon." },
    { d:1, e:"Pour diviser l'amplitude de l'intervalle par 2, il faut multiplier l'échantillon par :", r:"4",
      c:"L'amplitude vaut 2/√n.\n\nPour la diviser par 2, il faut que √n double, donc que n quadruple." },
    { d:1, e:"Que signifie « rejeter une hypothèse au seuil de 5 % » ?", r:"Les données la rendent très improbable",
      c:"Cela signifie que si l'hypothèse était vraie, la fréquence observée aurait eu moins de 5 % de chances de se produire.\n\nCe n'est pas une preuve de fausseté, mais un doute sérieux." },
    { d:1, e:"Une fréquence observée dans l'intervalle de fluctuation signifie :", r:"L'hypothèse n'est pas remise en cause",
      c:"Si la fréquence tombe dans l'intervalle, l'observation est compatible avec l'hypothèse.\n\nOn ne peut pas la rejeter." },
    { d:1, e:"Pour un sondage sur 1000 personnes, quelle est la marge d'erreur approximative ?", r:"±3 %",
      c:"Marge = 1/√1000 ≈ 0,032.\n\nSoit environ ±3 %." },
    { d:2, e:"Un dé équilibré a p = 1/6. Quel est l'intervalle de fluctuation pour n = 900 ?", r:"[0,134 ; 0,200]",
      c:"Marge = 1/√900 = 1/30 ≈ 0,033.\n\nIntervalle : [0,167 − 0,033 ; 0,167 + 0,033] = [0,134 ; 0,200]." },
    { d:2, e:"Sur 500 lancers d'une pièce, on obtient 245 piles. La pièce est-elle équilibrée ?", r:"Oui, compatible",
      c:"<b>Étape 1</b> : fréquence observée.\nf = 245/500 = 0,49.\n\n<b>Étape 2</b> : intervalle de fluctuation.\nMarge = 1/√500 ≈ 0,045.\nI = [0,5 − 0,045 ; 0,5 + 0,045] = [0,455 ; 0,545].\n\n<b>Étape 3</b> : comparaison.\n0,49 est dans l'intervalle.\n\nConclusion : on ne peut pas rejeter l'hypothèse d'équilibre." },
    { d:2, e:"Sur 100 lancers d'une pièce, on obtient 62 piles. Que peut-on conclure ?", r:"L'hypothèse d'équilibre est rejetée",
      c:"f = 0,62.\n\nMarge = 1/√100 = 0,10.\nI = [0,40 ; 0,60].\n\nOr 0,62 est hors de l'intervalle.\n\nOn rejette l'hypothèse que la pièce soit équilibrée au seuil de 5 %." },
    { d:2, e:"Un candidat est annoncé à 30 %. Un sondage sur 400 personnes lui donne 140 voix. Que conclure ?", r:"Compatible",
      c:"f = 140/400 = 0,35.\n\nMarge = 1/√400 = 0,05.\nI = [0,25 ; 0,35].\n\nOr 0,35 est exactement à la borne de l'intervalle. On considère qu'il est dedans.\n\nConclusion : le sondage est compatible avec l'hypothèse de 30 %." },
    { d:2, e:"Pourquoi un échantillon biaisé invalide-t-il une étude ?", r:"Parce qu'il ne représente pas la population",
      c:"Les fréquences obtenues ne reflètent pas celles de la population réelle.\n\nAucune correction statistique ne peut rattraper un biais de recrutement.\n\n<b>Exemple</b> — Un sondage sur internet exclut les personnes non connectées, qui peuvent avoir des opinions très différentes." },
    { d:2, e:"Une entreprise affirme que 5 % de ses pièces sont défectueuses. Sur un échantillon de 400 pièces, 32 sont défectueuses. Que conclure ?", r:"Hypothèse rejetée",
      c:"f = 32/400 = 0,08.\n\nMarge = 1/√400 = 0,05.\nI = [0,05 − 0,05 ; 0,05 + 0,05] = [0 ; 0,10].\n\nOr 0,08 est dans l'intervalle.\n\nDonc on ne peut pas rejeter l'hypothèse.\n\n<b>Remarque</b> — Comme p = 0,05 est hors de la zone de validité (0,2 ≤ p ≤ 0,8), la formule simplifiée est peu fiable. Il faudrait utiliser la forme exacte." },
    { d:2, e:"Que se passe-t-il si on augmente la taille de l'échantillon ?", r:"L'intervalle se resserre",
      c:"L'amplitude vaut 2/√n, qui diminue quand n augmente.\n\nL'intervalle se resserre : la précision de l'estimation s'améliore." },
    { d:2, e:"Un test de dépistage appliqué à 1600 personnes donne 120 positifs, alors que la prévalence attendue est de 8 %. Que conclure ?", r:"Compatible",
      c:"f = 120/1600 = 0,075.\n\nMarge = 1/√1600 = 0,025.\nI = [0,08 − 0,025 ; 0,08 + 0,025] = [0,055 ; 0,105].\n\nOr 0,075 est dans l'intervalle.\n\nConclusion : l'observation est compatible avec une prévalence de 8 %." },
    { d:2, e:"Pourquoi la simulation donne-t-elle des résultats différents à chaque exécution ?", r:"À cause du hasard",
      c:"Chaque simulation utilise une suite de nombres aléatoires différente.\n\nC'est exactement la fluctuation d'échantillonnage." },
    { d:2, e:"Combien de personnes faut-il interroger pour une marge de ±5 % ?", r:"400",
      c:"On veut 1/√n = 0,05.\n\nDonc √n = 20, et n = 400.\n\nIl faut 400 personnes." },
    { d:2, e:"Un lycée compte 55 % de filles. Sur un échantillon de 200 élèves, on compte 100 filles. Que conclure ?", r:"Compatible",
      c:"f = 100/200 = 0,50.\n\nMarge = 1/√200 ≈ 0,071.\nI = [0,55 − 0,071 ; 0,55 + 0,071] = [0,479 ; 0,621].\n\nOr 0,50 est dans l'intervalle.\n\nConclusion : l'échantillon est compatible avec la composition annoncée." },
    { d:3, e:"Montrer que quadrupler l'échantillon divise l'amplitude par 2.", r:"Démonstration",
      c:"Amplitude pour n : 2/√n.\nAmplitude pour 4n : 2/√(4n) = 2/(2√n) = 1/√n.\n\nLe rapport :\n(1/√n) / (2/√n) = 1/2.\n\nL'amplitude est bien divisée par 2.\n\n<b>Application</b> — Pour passer d'une marge de ±3 % à ±1,5 %, il faut passer de 1000 à 4000 personnes interrogées." },
    { d:3, e:"Un médicament guérit 60 % des patients. Sur 100 patients, on n'observe que 48 guérisons. Peut-on remettre en cause l'efficacité annoncée ?", r:"Non, compatible",
      c:"f = 0,48.\n\nMarge = 1/√100 = 0,10.\nI = [0,50 ; 0,70].\n\nOr 0,48 est <b>hors</b> de l'intervalle.\n\nOn rejette donc l'hypothèse d'une efficacité de 60 % au seuil de 5 %.\n\n<b>Réserve</b> — Le résultat est proche de la borne (0,50 contre 0,48) : le rejet est fragile. Avec un échantillon plus grand, on aurait une conclusion plus fiable." },
    { d:3, e:"Expliquer pourquoi la loi des grands nombres justifie l'usage des sondages.", r:"Explication",
      c:"La loi des grands nombres affirme que la fréquence observée converge vers la probabilité théorique quand la taille de l'échantillon augmente.\n\n<b>Conséquence pour les sondages</b> — Si l'échantillon est aléatoire et suffisamment grand, la fréquence observée est proche de la proportion réelle dans la population.\n\nLa marge d'erreur 1/√n quantifie cet écart probable.\n\n<b>Deux conditions indispensables</b> — L'échantillon doit être aléatoire (sinon il est biaisé) et suffisamment grand (sinon la marge est énorme)." },
    { d:3, e:"Un sondage sur 2500 personnes donne 52 % pour un candidat. Donner l'intervalle de confiance et conclure.", r:"[0,50 ; 0,54], majorité limite",
      c:"Marge = 1/√2500 = 1/50 = 0,02.\n\nIntervalle : [0,52 − 0,02 ; 0,52 + 0,02] = [0,50 ; 0,54].\n\n<b>Conclusion</b> — La borne inférieure est exactement 0,50. On est donc à la limite : le candidat pourrait être à 50 %, soit à égalité.\n\nOn ne peut pas affirmer qu'il est majoritaire avec une confiance de 95 %." },
    { d:3, e:"Deux sondages donnent 48 % et 51 % pour le même candidat, avec des marges de ±3 %. Sont-ils contradictoires ?", r:"Non, compatibles",
      c:"Premier : [0,45 ; 0,51].\nSecond : [0,48 ; 0,54].\n\nCes intervalles se recoupent sur [0,48 ; 0,51].\n\nUne valeur réelle de 0,50 serait compatible avec les deux sondages.\n\n<b>Leçon</b> — Deux estimations différentes ne sont pas contradictoires : il faut comparer les intervalles." },
    { d:3, e:"Un test de dépistage appliqué à 400 personnes donne 60 positifs, alors que la prévalence attendue est de 10 %. Que conclure ?", r:"Hypothèse rejetée",
      c:"f = 60/400 = 0,15.\n\nMarge = 1/√400 = 0,05.\nI = [0,10 − 0,05 ; 0,10 + 0,05] = [0,05 ; 0,15].\n\nOr 0,15 est exactement à la borne supérieure.\n\nOn considère qu'il est dans l'intervalle ou à sa limite : la conclusion est fragile. Il faudrait un échantillon plus grand pour trancher." },
    { d:3, e:"Pourquoi la marge d'erreur ne suffit-elle pas à juger de la qualité d'un sondage ?", r:"À cause des biais possibles",
      c:"La marge mesure seulement l'incertitude liée à l'échantillonnage aléatoire.\n\nElle ne dit rien des autres sources d'erreur :\n— un échantillon non représentatif\n— des questions orientées\n— les non-réponses\n— la différence entre ce que les gens déclarent et ce qu'ils font réellement\n\n<b>Conclusion</b> — Un sondage avec une faible marge mais un échantillon biaisé peut être complètement faux. La marge est une condition nécessaire, pas suffisante." },
    { d:3, e:"Un journal affirme « 60 % des Français sont favorables, avec une marge de 2 % ». Quelle formulation serait plus rigoureuse ?", r:"L'intervalle de confiance",
      c:"La formulation rigoureuse : « Sur un échantillon de 2500 personnes, 60 % se déclarent favorables. L'intervalle de confiance à 95 % est [58 % ; 62 %]. »\n\n<b>Trois précisions manquantes</b> dans la formulation du journal :\n— la taille de l'échantillon\n— le niveau de confiance (95 %)\n— la méthode d'échantillonnage\n\nSans ces informations, le chiffre ne peut pas être évalué." },
    { d:3, e:"Montrer que la marge d'erreur d'un sondage sur 1000 personnes est d'environ 3 %.", r:"Démonstration",
      c:"Marge = 1/√n = 1/√1000.\n\nOr √1000 ≈ 31,62.\n\nDonc 1/√1000 ≈ 0,0316.\n\nSoit environ 3,2 %, que l'on arrondit couramment à 3 %.\n\n<b>Le repère à retenir</b> — 1000 personnes → ±3 %. C'est la taille typique des sondages nationaux, et cette marge est jugée acceptable pour les sondeurs." },
    { d:3, e:"Une usine affirme que 90 % de ses pièces sont conformes. Sur un échantillon de 400 pièces, 340 sont conformes. Que conclure ?", r:"Hypothèse rejetée",
      c:"f = 340/400 = 0,85.\n\nMarge = 1/√400 = 0,05.\nI = [0,90 − 0,05 ; 0,90 + 0,05] = [0,85 ; 0,95].\n\nOr 0,85 est exactement à la borne inférieure.\n\nLa conclusion est à la limite : l'observation est tout juste compatible. Un échantillon plus grand serait nécessaire pour trancher.\n\n<b>Remarque</b> — Avec p = 0,90, on est à la limite de la zone de validité (0,2 ≤ p ≤ 0,8). La formule simplifiée est peu fiable." }
  ]
}
];

window.MATHSLY_2DE = { chapitres: SECONDE_CHAPITRES, qcm: [] };
