/* =========================================================
   MATHSLY — Contenu de la classe de Troisième (cycle 4)
   Chapitres : arithmétique · équations et inéquations · fonctions ·
               trigonométrie · vecteurs · statistiques
   ========================================================= */
const TROISIEME_CHAPITRES = [
{
  id:"3e-arithmetique", niveau:"3e", titre:"3e · Arithmétique", temps:"20 min",
  resume:"Diviseurs, nombres premiers, PGCD, fractions irréductibles.",
  lecons:[
    { titre:"Divisibilité et nombres premiers", contenu:`
      <h3>1. Divisibilité</h3>
      <p>b divise a s'il existe un entier k tel que a = b × k. On dit aussi que b est un <b>diviseur</b> de a, et que a est un <b>multiple</b> de b.</p>
      <p>Les critères de divisibilité à connaître par cœur :</p>
      <ul>
        <li><b>2</b> : le chiffre des unités est pair</li>
        <li><b>3</b> : la somme des chiffres est divisible par 3</li>
        <li><b>4</b> : le nombre formé des deux derniers chiffres est divisible par 4</li>
        <li><b>5</b> : le chiffre des unités est 0 ou 5</li>
        <li><b>9</b> : la somme des chiffres est divisible par 9</li>
      </ul>
      <div class="box warn"><b>Attention au critère de 9</b> — Un nombre divisible par 9 est aussi divisible par 3, mais l'inverse est faux. 6 est divisible par 3 sans l'être par 9.</div>

      <h3>2. Nombres premiers</h3>
      <p>Un nombre premier a exactement <b>deux</b> diviseurs : 1 et lui-même. Les premiers sont 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…</p>
      <div class="box warn"><b>Deux exceptions à retenir</b> — 1 n'est pas premier (il n'a qu'un seul diviseur), et 2 est le seul nombre premier pair.</div>

      <h3>3. Décomposition en facteurs premiers</h3>
      <p>Tout entier supérieur à 1 se décompose de façon <b>unique</b> en produit de facteurs premiers. C'est le théorème fondamental de l'arithmétique.</p>
      <div class="formula">360 = 2³ × 3² × 5</div>
      <p>La méthode : on divise par 2 autant que possible, puis par 3, puis par 5, et ainsi de suite.</p>

      <h3>4. Utiliser la décomposition</h3>
      <p>Elle sert à <b>simplifier des fractions</b> et à <b>calculer des PGCD</b>. C'est l'outil central du chapitre.</p>
      <div class="formula">84 = 2² × 3 × 7
126 = 2 × 3² × 7</div>

      <h3>5. Trouver tous les diviseurs</h3>
      <p>À partir de la décomposition, on peut lister tous les diviseurs. Pour 12 = 2² × 3, les diviseurs sont 1, 2, 3, 4, 6 et 12.</p>
      <div class="box"><b>Astuce</b> — Les diviseurs vont par paires : si d divise n, alors n/d divise aussi n. On cherche donc jusqu'à √n seulement.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Décomposer 792 en facteurs premiers.</p>
      <ul>
        <li>792 ÷ 2 = 396</li>
        <li>396 ÷ 2 = 198</li>
        <li>198 ÷ 2 = 99</li>
        <li>99 ÷ 3 = 33, puis 33 ÷ 3 = 11</li>
        <li>11 est premier</li>
      </ul>
      <p><b>Résultat :</b> 792 = 2³ × 3² × 11.</p>
      <p><b>Vérification :</b> 8 × 9 × 11 = 72 × 11 = 792 ✓</p>
    ` },
    { titre:"PGCD et fractions irréductibles", contenu:`
      <h3>1. Le PGCD</h3>
      <p>Le PGCD de deux nombres est le <b>plus grand diviseur commun</b> à ces deux nombres.</p>
      <p>Méthode par décomposition : on prend les facteurs premiers <b>communs</b>, affectés du <b>plus petit</b> exposant.</p>
      <div class="formula">360 = 2³ × 3² × 5  et  252 = 2² × 3² × 7
PGCD = 2² × 3² = 36</div>
      <div class="box warn"><b>Le plus petit exposant, pas le plus grand</b> — Pour le PGCD, on prend le minimum des exposants. Pour le PPCM, on prendrait le maximum. C'est une confusion fréquente.</div>

      <h3>2. Nombres premiers entre eux</h3>
      <p>Deux nombres sont <b>premiers entre eux</b> quand leur PGCD vaut 1. Ils n'ont alors aucun facteur premier commun.</p>
      <p>Exemple : 8 et 9 sont premiers entre eux, car 8 = 2³ et 9 = 3².</p>

      <h3>3. Fractions irréductibles</h3>
      <p>Une fraction est irréductible quand son numérateur et son dénominateur sont premiers entre eux. Pour la rendre irréductible, on divise les deux par leur PGCD.</p>
      <div class="formula">360/252 : PGCD = 36, donc 360/252 = 10/7</div>

      <h3>4. L'algorithme d'Euclide</h3>
      <p>Quand les nombres sont grands, la décomposition est longue. L'algorithme d'Euclide est plus rapide : on effectue des divisions euclidiennes successives jusqu'à obtenir un reste nul. Le dernier reste non nul est le PGCD.</p>
      <div class="formula">PGCD(1071 ; 1029) :
1071 = 1029 × 1 + 42
1029 = 42 × 24 + 21
42 = 21 × 2 + 0
Le PGCD est 21.</div>

      <h3>5. Résoudre un problème de partage</h3>
      <p>Les problèmes de PGCD sont souvent des problèmes de <b>partage équitable</b> : répartir des objets en groupes identiques les plus grands possibles.</p>
      <div class="box"><b>Reconnaître le PGCD dans un énoncé</b> — Dès qu'on parle de « groupes identiques », « parts égales », « découper en morceaux égaux les plus grands possibles », c'est un PGCD.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Un pâtissier a 84 macarons et 126 chocolats. Il veut faire des boîtes identiques sans reste. Combien de boîtes au maximum, et que contient chacune ?</p>
      <ul>
        <li>On cherche le PGCD de 84 et 126</li>
        <li>84 = 2² × 3 × 7 et 126 = 2 × 3² × 7</li>
        <li>PGCD = 2 × 3 × 7 = 42</li>
        <li>Chaque boîte contient 84/42 = 2 macarons et 126/42 = 3 chocolats</li>
      </ul>
      <p><b>Le nombre maximum de boîtes est 42.</b></p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — la divisibilité et les nombres premiers, puis le PGCD et les fractions irréductibles.</div>`,
  exercices:[
    { d:1, e:"Le nombre 17 est-il premier ?", r:"Oui",
      c:"17 n'est divisible que par 1 et 17.\n\nDonc il est premier." },
    { d:1, e:"Le nombre 1 est-il premier ?", r:"Non",
      c:"Un nombre premier a exactement deux diviseurs distincts.\n\nOr 1 n'a qu'un seul diviseur : lui-même. Il n'est pas premier." },
    { d:1, e:"Le nombre 51 est-il divisible par 3 ?", r:"Oui",
      c:"Somme des chiffres : 5 + 1 = 6, divisible par 3.\n\nDonc 51 est divisible par 3. Vérification : 51 = 3 × 17 ✓" },
    { d:1, e:"Décomposer 24 en facteurs premiers.", r:"2³ × 3",
      c:"24 = 2 × 12 = 2 × 2 × 6 = 2 × 2 × 2 × 3 = 2³ × 3.\n\nVérification : 8 × 3 = 24 ✓" },
    { d:1, e:"Quels sont les diviseurs de 10 ?", r:"1, 2, 5, 10",
      c:"10 = 1 × 10 = 2 × 5.\n\nLes diviseurs sont 1, 2, 5 et 10." },
    { d:1, e:"Calculer le PGCD de 12 et 18.", r:"6",
      c:"12 = 2² × 3 et 18 = 2 × 3².\n\nFacteurs communs au plus petit exposant : 2 × 3 = 6.\n\nPGCD = 6." },
    { d:1, e:"8 et 9 sont-ils premiers entre eux ?", r:"Oui",
      c:"8 = 2³ et 9 = 3².\n\nIls n'ont aucun facteur premier commun, donc leur PGCD vaut 1.\n\nIls sont premiers entre eux." },
    { d:1, e:"Simplifier 12/18.", r:"2/3",
      c:"PGCD(12 ; 18) = 6.\n\n12/18 = 2/3." },
    { d:1, e:"Le nombre 2 est-il premier ?", r:"Oui, et c'est le seul pair",
      c:"2 a exactement deux diviseurs : 1 et 2.\n\nC'est le seul nombre premier pair, car tout autre pair est divisible par 2." },
    { d:1, e:"Décomposer 100 en facteurs premiers.", r:"2² × 5²",
      c:"100 = 10 × 10 = (2 × 5) × (2 × 5) = 2² × 5².\n\nVérification : 4 × 25 = 100 ✓" },
    { d:2, e:"Décomposer 180 en facteurs premiers.", r:"2² × 3² × 5",
      c:"180 = 18 × 10 = (2 × 3²) × (2 × 5) = 2² × 3² × 5.\n\nVérification : 4 × 9 × 5 = 180 ✓" },
    { d:2, e:"Calculer le PGCD de 84 et 126.", r:"42",
      c:"84 = 2² × 3 × 7\n126 = 2 × 3² × 7\n\nFacteurs communs au plus petit exposant : 2 × 3 × 7 = 42.\n\nPGCD = 42." },
    { d:2, e:"Simplifier 84/126.", r:"2/3",
      c:"PGCD(84 ; 126) = 42.\n\n84/42 = 2 et 126/42 = 3.\n\n84/126 = 2/3." },
    { d:2, e:"Décomposer 252 en facteurs premiers.", r:"2² × 3² × 7",
      c:"252 = 4 × 63 = 2² × (9 × 7) = 2² × 3² × 7.\n\nVérification : 4 × 9 × 7 = 252 ✓" },
    { d:2, e:"Calculer le PGCD de 45 et 75.", r:"15",
      c:"45 = 3² × 5\n75 = 3 × 5²\n\nPGCD = 3 × 5 = 15." },
    { d:2, e:"Simplifier 45/60.", r:"3/4",
      c:"PGCD(45 ; 60) = 15.\n\n45/15 = 3 et 60/15 = 4.\n\n45/60 = 3/4." },
    { d:2, e:"Un nombre divisible par 9 est-il divisible par 3 ?", r:"Oui",
      c:"Si 9 divise n, alors n = 9k = 3 × (3k).\n\nDonc 3 divise n.\n\nLa réciproque est fausse : 6 est divisible par 3 mais pas par 9." },
    { d:2, e:"Décomposer 462 en facteurs premiers.", r:"2 × 3 × 7 × 11",
      c:"462 = 2 × 231 = 2 × 3 × 77 = 2 × 3 × 7 × 11.\n\nVérification : 2 × 3 × 7 × 11 = 6 × 77 = 462 ✓" },
    { d:2, e:"Calculer le PGCD de 156 et 84 avec l'algorithme d'Euclide.", r:"12",
      c:"156 = 84 × 1 + 72\n84 = 72 × 1 + 12\n72 = 12 × 6 + 0\n\nLe dernier reste non nul est 12.\n\nPGCD = 12." },
    { d:2, e:"Deux nombres ont un PGCD de 1. Comment les appelle-t-on ?", r:"Premiers entre eux",
      c:"Quand le PGCD vaut 1, les deux nombres n'ont aucun facteur premier commun.\n\nOn dit qu'ils sont premiers entre eux." },
    { d:2, e:"Un fleuriste a 108 roses et 72 tulipes. Il veut faire des bouquets identiques. Combien au maximum ?", r:"36 bouquets",
      c:"PGCD(108 ; 72) :\n108 = 2² × 3³\n72 = 2³ × 3²\n\nPGCD = 2² × 3² = 36.\n\nChaque bouquet contient 3 roses et 2 tulipes." },
    { d:3, e:"Calculer le PGCD de 1071 et 1029.", r:"21",
      c:"1071 = 1029 × 1 + 42\n1029 = 42 × 24 + 21\n42 = 21 × 2 + 0\n\nPGCD = 21." },
    { d:3, e:"Deux roues dentées ont 48 et 36 dents. Après combien de tours se retrouvent-elles dans la position initiale ?", r:"4 tours et 3 tours",
      c:"On cherche le plus petit nombre de dents commun aux deux roues.\n\nPPCM(48 ; 36) : 48 = 2⁴ × 3 et 36 = 2² × 3².\nPPCM = 2⁴ × 3² = 144 dents.\n\nRoue de 48 : 144 ÷ 48 = 3 tours.\nRoue de 36 : 144 ÷ 36 = 4 tours.\n\nAprès 3 tours de la première et 4 tours de la seconde, elles reviennent en position initiale." },
    { d:3, e:"Montrer que si d divise a et b, alors d divise a + b.", r:"Démonstration",
      c:"Par hypothèse, a = d × k et b = d × l avec k et l entiers.\n\nAlors a + b = dk + dl = d(k + l).\n\nComme k + l est un entier, d divise a + b.\n\n<b>Généralisation</b> — Si d divise a et b, alors d divise toute combinaison linéaire au + bv." },
    { d:3, e:"Trouver deux entiers dont le produit vaut 360 et le PGCD vaut 6.", r:"Exemple : 6 et 60, ou 12 et 30, ou 18 et 20",
      c:"Soit a et b les deux nombres, avec PGCD(a,b) = 6.\n\nOn écrit a = 6p et b = 6q, avec p et q premiers entre eux.\n\nProduit : 36pq = 360, donc pq = 10.\n\nLes couples (p,q) premiers entre eux dont le produit vaut 10 : (1,10) et (2,5).\n\nDonc (a,b) = (6,60) ou (12,30).\n\n<b>Vérification</b> : PGCD(6 ; 60) = 6 ✓ et PGCD(12 ; 30) = 6 ✓" },
    { d:3, e:"Un terrain rectangulaire mesure 105 m sur 75 m. On veut le paver avec des carreaux carrés identiques les plus grands possibles. Quelle est leur taille ?", r:"15 m de côté",
      c:"Il faut que le côté divise à la fois 105 et 75 : on cherche le PGCD.\n\n105 = 3 × 5 × 7\n75 = 3 × 5²\n\nPGCD = 3 × 5 = 15.\n\nLes carreaux mesurent 15 m de côté.\n\nNombre de carreaux : (105/15) × (75/15) = 7 × 5 = 35 carreaux." },
    { d:3, e:"Montrer que le produit de deux nombres est égal au produit de leur PGCD et de leur PPCM.", r:"Démonstration",
      c:"Soit a = 2^α × 3^β × … et b = 2^γ × 3^δ × … leur décomposition.\n\nPGCD prend le minimum des exposants, PPCM le maximum.\n\nPour chaque facteur premier p, on a :\nmin(α, γ) + max(α, γ) = α + γ.\n\nDonc le produit PGCD × PPCM a pour exposant α + γ sur chaque facteur premier, ce qui correspond exactement à l'exposant de a × b.\n\nConclusion : PGCD(a,b) × PPCM(a,b) = a × b ✓\n\n<b>Vérification</b> : 12 et 18. PGCD = 6, PPCM = 36. Or 6 × 36 = 216 = 12 × 18 ✓" },
    { d:3, e:"Montrer que la somme de trois entiers consécutifs est divisible par 3.", r:"Démonstration",
      c:"Soit n, n+1, n+2.\n\nSomme : n + (n+1) + (n+2) = 3n + 3 = 3(n + 1).\n\nC'est un multiple de 3.\n\n<b>Test</b> : 7 + 8 + 9 = 24 = 3 × 8 ✓" },
    { d:3, e:"Un engrenage a des pignons de 60 et 45 dents. Combien de tours fait chaque pignon avant de revenir en position initiale ?", r:"45 tours et 60 tours",
      c:"PPCM(60 ; 45) :\n60 = 2² × 3 × 5\n45 = 3² × 5\n\nPPCM = 2² × 3² × 5 = 180 dents.\n\nPignon de 60 : 180 ÷ 60 = 3 tours.\nPignon de 45 : 180 ÷ 45 = 4 tours.\n\nAprès 3 tours du premier et 4 du second, la position initiale est retrouvée." },
    { d:3, e:"Deux entiers ont pour somme 96 et pour PGCD 12. Quels sont-ils ?", r:"36 et 60, ou 12 et 84",
      c:"Soit a = 12p et b = 12q avec p, q premiers entre eux.\n\nSomme : 12(p + q) = 96, donc p + q = 8.\n\nCouples premiers entre eux dont la somme vaut 8 : (1,7), (3,5).\n\nDonc (a,b) = (12, 84) ou (36, 60).\n\n<b>Vérification</b> : 36 + 60 = 96 ✓ et PGCD(36 ; 60) = 12 ✓" },
    { d:3, e:"Montrer qu'un nombre premier supérieur à 3 est congru à 1 ou 5 modulo 6.", r:"Démonstration",
      c:"Soit p premier > 3.\n\nLa division de p par 6 donne un reste dans {0, 1, 2, 3, 4, 5}.\n\n— reste 0 : p = 6k, divisible par 6, donc non premier.\n— reste 2 : p = 6k+2 = 2(3k+1), pair et > 2, donc non premier.\n— reste 3 : p = 6k+3 = 3(2k+1), divisible par 3 et > 3, donc non premier.\n— reste 4 : p = 6k+4 = 2(3k+2), pair, donc non premier.\n\nRestent les restes 1 et 5.\n\nDonc p ≡ 1 [6] ou p ≡ 5 [6].\n\n<b>Test</b> : 7 ≡ 1 [6], 11 ≡ 5 [6], 13 ≡ 1 [6], 17 ≡ 5 [6] ✓" }
  ]
},
{
  id:"3e-equations", niveau:"3e", titre:"3e · Équations et inéquations", temps:"22 min",
  resume:"Équations du premier degré, inéquations, systèmes, mise en équation.",
  lecons:[
    { titre:"Équations du premier degré", contenu:`
      <h3>1. Résoudre une équation</h3>
      <p>Résoudre une équation, c'est trouver toutes les valeurs de l'inconnue qui rendent l'égalité vraie.</p>
      <p>Deux opérations sont permises, à condition de les appliquer aux <b>deux membres</b> :</p>
      <ul>
        <li>Ajouter ou retrancher la même quantité</li>
        <li>Multiplier ou diviser par un même nombre non nul</li>
      </ul>

      <h3>2. Méthode générale</h3>
      <div class="formula">Résoudre 7x − 4 = 3x + 12
Étape 1 — regrouper les x à gauche :  7x − 3x = 12 + 4
Étape 2 — réduire :                   4x = 16
Étape 3 — diviser :                   x = 4</div>
      <div class="box"><b>Toujours vérifier</b> — On remplace x par la valeur trouvée : 7×4 − 4 = 24 et 3×4 + 12 = 24 ✓. Cette vérification prend dix secondes.</div>

      <h3>3. Équations avec parenthèses</h3>
      <p>On développe d'abord, puis on résout.</p>
      <div class="formula">4(x − 3) = 2x + 6
4x − 12 = 2x + 6
2x = 18
x = 9</div>

      <h3>4. Équations avec fractions</h3>
      <p>On multiplie les deux membres par le dénominateur commun.</p>
      <div class="formula">(2x + 1)/3 = 5
2x + 1 = 15
2x = 14
x = 7</div>

      <h3>5. Équations produit nul</h3>
      <p>Quand on peut factoriser, on utilise la propriété : un produit est nul si et seulement si l'un de ses facteurs est nul.</p>
      <div class="formula">(x − 5)(2x + 3) = 0  ⟹  x = 5 ou x = −3/2</div>
      <div class="box warn"><b>Ne jamais diviser par une expression contenant l'inconnue</b> — Cela ferait perdre des solutions. On factorise toujours.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Un rectangle a une longueur de (2x + 3) et une largeur de (x − 1). Son périmètre est 34. Trouver x.</p>
      <ul>
        <li>Périmètre : 2 × [(2x + 3) + (x − 1)] = 34</li>
        <li>2 × (3x + 2) = 34</li>
        <li>6x + 4 = 34</li>
        <li>6x = 30, donc x = 5</li>
      </ul>
      <p><b>Vérification :</b> longueur 13, largeur 4, périmètre 2 × 17 = 34 ✓</p>
    ` },
    { titre:"Inéquations et systèmes", contenu:`
      <h3>1. Résoudre une inéquation</h3>
      <p>La méthode est la même que pour une équation, avec une règle supplémentaire essentielle :</p>
      <div class="box warn"><b>Multiplier ou diviser par un nombre négatif change le sens de l'inégalité</b> — C'est l'erreur la plus fréquente. −2x &gt; 6 donne x &lt; −3, et non x &gt; −3.</div>

      <h3>2. Représenter les solutions</h3>
      <p>On représente l'ensemble des solutions sur une droite graduée :</p>
      <ul>
        <li>Crochet fermé si l'inégalité est large (≤ ou ≥)</li>
        <li>Crochet ouvert si elle est stricte (&lt; ou &gt;)</li>
      </ul>
      <div class="formula">x ≤ 3 se note ]−∞ ; 3]
x &gt; 3 se note ]3 ; +∞[</div>

      <h3>3. Systèmes de deux équations</h3>
      <p>Deux méthodes :</p>
      <ul>
        <li><b>Substitution</b> : on exprime une inconnue en fonction de l'autre</li>
        <li><b>Combinaison</b> : on multiplie les équations pour éliminer une inconnue</li>
      </ul>
      <div class="formula">Par combinaison :
2x + 3y = 12
4x − 3y = 6
En additionnant : 6x = 18, donc x = 3, puis y = 2</div>

      <h3>4. Interprétation graphique</h3>
      <p>Chaque équation est une droite. Résoudre le système revient à chercher leur point d'intersection.</p>
      <div class="box"><b>Trois cas possibles</b> — Une solution unique (droites sécantes), aucune solution (parallèles), une infinité (confondues).</div>

      <h3>5. Mettre un problème en équation</h3>
      <p>La démarche en quatre étapes :</p>
      <ul>
        <li>Nommer l'inconnue et préciser son domaine</li>
        <li>Traduire l'énoncé en équation</li>
        <li>Résoudre</li>
        <li>Vérifier la cohérence avec le contexte</li>
      </ul>
      <div class="box warn"><b>L'étape qu'on oublie</b> — La vérification contextuelle. Une longueur négative ou un nombre de personnes non entier doit alerter.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Un théâtre vend 200 places : assises à 15 €, debout à 8 €. La recette est de 2290 €. Combien de places assises ?</p>
      <ul>
        <li>Soit x les places assises, y les places debout</li>
        <li>x + y = 200</li>
        <li>15x + 8y = 2290</li>
        <li>De (1) : y = 200 − x</li>
        <li>15x + 8(200 − x) = 2290 donne 15x + 1600 − 8x = 2290</li>
        <li>7x = 690, donc x ≈ 98,6</li>
      </ul>
      <p><b>La solution n'est pas entière</b> : l'énoncé contient une incohérence. Avec 2288 € ou 2295 €, on obtiendrait un entier. Je le signale plutôt que de forcer un résultat.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — les équations du premier degré, puis les inéquations et les systèmes.</div>`,
  exercices:[
    { d:1, e:"Résoudre x + 7 = 15.", r:"x = 8",
      c:"x = 15 − 7 = 8.\n\nVérification : 8 + 7 = 15 ✓" },
    { d:1, e:"Résoudre 4x = 32.", r:"x = 8",
      c:"x = 32/4 = 8.\n\nVérification : 4 × 8 = 32 ✓" },
    { d:1, e:"Résoudre x − 5 = 12.", r:"x = 17",
      c:"x = 12 + 5 = 17." },
    { d:1, e:"Résoudre 2x + 3 = 13.", r:"x = 5",
      c:"2x = 10, donc x = 5.\n\nVérification : 2×5 + 3 = 13 ✓" },
    { d:1, e:"Résoudre x/3 = 4.", r:"x = 12",
      c:"On multiplie par 3 : x = 12." },
    { d:1, e:"Résoudre 5 − x = 2.", r:"x = 3",
      c:"−x = 2 − 5 = −3, donc x = 3.\n\nVérification : 5 − 3 = 2 ✓" },
    { d:1, e:"Résoudre x + 4 > 10.", r:"x > 6",
      c:"x > 10 − 4, donc x > 6.\n\nSolution : ]6 ; +∞[." },
    { d:1, e:"Résoudre 3x ≤ 15.", r:"x ≤ 5",
      c:"On divise par 3, qui est positif : le sens ne change pas.\n\nx ≤ 5." },
    { d:1, e:"Résoudre le système x + y = 10 et x − y = 2.", r:"x = 6, y = 4",
      c:"En additionnant : 2x = 12, donc x = 6.\n\nPuis 6 + y = 10, donc y = 4." },
    { d:1, e:"Résoudre (x − 3)(x + 2) = 0.", r:"x = 3 ou x = −2",
      c:"Produit nul : x − 3 = 0 ou x + 2 = 0.\n\nDonc x = 3 ou x = −2." },
    { d:2, e:"Résoudre 3x − 5 = x + 7.", r:"x = 6",
      c:"3x − x = 7 + 5\n2x = 12\nx = 6.\n\nVérification : 18 − 5 = 13 et 6 + 7 = 13 ✓" },
    { d:2, e:"Résoudre −2x > 8.", r:"x < −4",
      c:"On divise par −2, qui est <b>négatif</b> : le sens de l'inégalité s'inverse.\n\nx < −4.\n\nSolution : ]−∞ ; −4[." },
    { d:2, e:"Résoudre 2(x + 3) = 14.", r:"x = 4",
      c:"2x + 6 = 14\n2x = 8\nx = 4.\n\nVérification : 2(4 + 3) = 14 ✓" },
    { d:2, e:"Résoudre le système 2x + y = 11 et y = 3.", r:"x = 4",
      c:"On remplace y par 3 dans la première équation :\n2x + 3 = 11\n2x = 8\nx = 4." },
    { d:2, e:"Résoudre 2x + 5 ≤ 3x − 1.", r:"x ≥ 6",
      c:"2x − 3x ≤ −1 − 5\n−x ≤ −6\n\nOn divise par −1 : le sens s'inverse.\nx ≥ 6.\n\nSolution : [6 ; +∞[." },
    { d:2, e:"Un père a 35 ans, son fils 8. Dans combien d'années le père aura-t-il le double de l'âge du fils ?", r:"Dans 19 ans",
      c:"35 + x = 2(8 + x)\n35 + x = 16 + 2x\n35 − 16 = 2x − x\n19 = x.\n\nVérification : dans 19 ans, père 54 ans et fils 27 ans. Or 54 = 2 × 27 ✓" },
    { d:2, e:"Résoudre x² = 25.", r:"x = 5 ou x = −5",
      c:"x² − 25 = 0, soit (x−5)(x+5) = 0.\n\nDonc x = 5 ou x = −5.\n\n<b>Attention</b> — Une équation x² = a avec a > 0 admet <b>deux</b> solutions." },
    { d:2, e:"Résoudre 4x/(x+2) = 3 avec x ≠ −2.", r:"x = 6",
      c:"4x = 3(x + 2)\n4x = 3x + 6\nx = 6.\n\nVérification : 24/8 = 3 ✓" },
    { d:2, e:"Résoudre le système 3x + 2y = 16 et x − y = 2.", r:"x = 4, y = 2",
      c:"De la seconde : x = y + 2.\n\nEn remplaçant : 3(y + 2) + 2y = 16\n3y + 6 + 2y = 16\n5y = 10\ny = 2, puis x = 4." },
    { d:2, e:"Résoudre 5 − 2(x − 1) < 3x.", r:"x > 7/5",
      c:"5 − 2x + 2 < 3x\n7 − 2x < 3x\n7 < 5x\nx > 7/5.\n\nSolution : ]7/5 ; +∞[." },
    { d:2, e:"Un rectangle a un périmètre de 36 cm. Sa longueur dépasse sa largeur de 4 cm. Quelles sont ses dimensions ?", r:"8 cm et 12 cm",
      c:"Soit l la largeur, l + 4 la longueur.\n\n2(l + l + 4) = 36\n2(2l + 4) = 36\n2l + 4 = 18\n2l = 14\nl = 7.\n\nReprenons : l = 7, longueur = 11.\n\nVérification : 2 × (7 + 11) = 36 ✓\n\nDimensions : 7 cm et 11 cm." },
    { d:3, e:"Résoudre le système 2x + 3y = 12 et 3x + 2y = 13.", r:"x = 3, y = 2",
      c:"Multiplions la première par 3 : 6x + 9y = 36.\nMultiplions la seconde par 2 : 6x + 4y = 26.\n\nEn soustrayant : 5y = 10, donc y = 2.\n\nPuis 2x + 6 = 12, donc x = 3.\n\nVérification : 3×3 + 2×2 = 13 ✓" },
    { d:3, e:"Résoudre (2x − 1)(x + 4) = 0.", r:"x = 1/2 ou x = −4",
      c:"Produit nul :\n2x − 1 = 0 donne x = 1/2.\nx + 4 = 0 donne x = −4." },
    { d:3, e:"Résoudre x² − 4x = 0.", r:"x = 0 ou x = 4",
      c:"On factorise par x : x(x − 4) = 0.\n\nDonc x = 0 ou x = 4.\n\n<b>Ne jamais diviser par x</b> — Ce serait perdre la solution x = 0." },
    { d:3, e:"Deux nombres ont pour somme 45 et pour différence 11. Quels sont-ils ?", r:"28 et 17",
      c:"x + y = 45\nx − y = 11\n\nEn additionnant : 2x = 56, donc x = 28.\n\nPuis y = 45 − 28 = 17.\n\nVérification : 28 − 17 = 11 ✓" },
    { d:3, e:"Résoudre 3/(x−1) = 2 avec x ≠ 1.", r:"x = 5/2",
      c:"3 = 2(x − 1)\n3 = 2x − 2\n5 = 2x\nx = 5/2 = 2,5.\n\nVérification : 3/(2,5 − 1) = 3/1,5 = 2 ✓" },
    { d:3, e:"Un capital placé à 4 % rapporte 120 € la première année. Quel était le capital ?", r:"3000 €",
      c:"Soit C le capital.\n\nC × 0,04 = 120\nC = 120/0,04 = 3000 €.\n\nVérification : 3000 × 4/100 = 120 ✓" },
    { d:3, e:"Résoudre l'inéquation (x − 2)/(x + 1) ≥ 0.", r:"x < −1 ou x ≥ 2",
      c:"<b>Condition</b> : x ≠ −1.\n\nNumérateur : x − 2 = 0 en x = 2, positif après.\nDénominateur : x + 1 = 0 en x = −1, positif après.\n\nTableau :\n— x &lt; −1 : quotient (−)/(−) = positif ✓\n— −1 &lt; x &lt; 2 : (−)/(+) = négatif ✗\n— x ≥ 2 : (+)/(+) = positif ✓\n\nSolution : ]−∞ ; −1[ ∪ [2 ; +∞[." },
    { d:3, e:"Un mobile part d'un point A à 60 km/h. Un second part du même point 1 h plus tard à 80 km/h. Après combien de temps le second rattrape-t-il le premier ?", r:"3 heures après le départ du second",
      c:"Soit t le temps de parcours du second (en heures).\n\nLe premier a roulé t + 1 heures.\n\nDistances égales : 60(t + 1) = 80t\n60t + 60 = 80t\n60 = 20t\nt = 3.\n\nLe second rattrape le premier après 3 heures.\n\nVérification : premier a roulé 4 h, soit 240 km. Second a roulé 3 h, soit 240 km ✓" },
    { d:3, e:"Résoudre le système 5x − 2y = 3 et 3x + y = 7.", r:"x = 1, y = 1",
      c:"De la seconde : y = 7 − 3x.\n\nEn remplaçant : 5x − 2(7 − 3x) = 3\n5x − 14 + 6x = 3\n11x = 17\nx = 17/11.\n\nReprenons le calcul.\n\n5x − 14 + 6x = 3 donne 11x = 17, soit x = 17/11 ≈ 1,545.\ny = 7 − 3(17/11) = (77 − 51)/11 = 26/11 ≈ 2,36.\n\nVérification : 5(17/11) − 2(26/11) = (85 − 52)/11 = 33/11 = 3 ✓" },
    { d:3, e:"Montrer que l'équation 2x + 3 = 2x + 5 n'a pas de solution.", r:"Démonstration",
      c:"2x + 3 = 2x + 5\n3 = 5 : impossible.\n\nLes termes en x s'annulent des deux côtés, laissant une égalité fausse.\n\nConclusion : aucune solution.\n\n<b>Interprétation graphique</b> — Les deux droites y = 2x + 3 et y = 2x + 5 sont parallèles : elles ne se coupent jamais." },
    { d:3, e:"Un mélange contient 40 % d'alcool. Combien faut-il ajouter d'eau pure à 2 litres pour obtenir un mélange à 25 % ?", r:"1,2 litre",
      c:"Le volume d'alcool pur ne change pas : 0,40 × 2 = 0,8 L.\n\nSoit x le volume d'eau ajouté.\n\n0,8/(2 + x) = 0,25\n0,8 = 0,25(2 + x) = 0,5 + 0,25x\n0,3 = 0,25x\nx = 1,2 L.\n\nVérification : 0,8/3,2 = 0,25 ✓" },
    { d:3, e:"Résoudre x² + 2x − 15 = 0.", r:"x = 3 ou x = −5",
      c:"On cherche deux nombres dont le produit vaut −15 et la somme 2 : ce sont 5 et −3.\n\nx² + 2x − 15 = (x + 5)(x − 3) = 0.\n\nDonc x = −5 ou x = 3.\n\nVérification : 3² + 6 − 15 = 0 ✓ et (−5)² − 10 − 15 = 0 ✓" },
    { d:3, e:"Résoudre l'inéquation 2x + 1 ≤ 5 − 2x.", r:"x ≤ 1",
      c:"2x + 2x ≤ 5 − 1\n4x ≤ 4\nx ≤ 1.\n\nSolution : ]−∞ ; 1]." }
  ]
},
{
  id:"3e-fonctions", niveau:"3e", titre:"3e · Fonctions linéaires et affines", temps:"22 min",
  resume:"Notion de fonction, linéaire, affine, coefficient directeur, représentation.",
  lecons:[
    { titre:"Fonctions linéaires et affines", contenu:`
      <h3>1. Notion de fonction</h3>
      <p>Une fonction f associe à chaque nombre x <b>au plus un</b> nombre f(x). On note :</p>
      <div class="formula">f : x ↦ f(x)</div>
      <p>L'ensemble des x pour lesquels f existe est son <b>ensemble de définition</b>.</p>

      <h3>2. Fonction linéaire</h3>
      <p>Une fonction linéaire s'écrit f(x) = a·x. Sa représentation graphique est une <b>droite passant par l'origine</b>.</p>
      <div class="formula">f(x) = 2x : f(1) = 2, f(3) = 6, f(−2) = −4</div>
      <p>Elle modélise les situations de <b>proportionnalité</b> : doubler x double f(x).</p>
      <div class="box"><b>Le coefficient a</b> — Il s'appelle le coefficient de proportionnalité. C'est le nombre par lequel on multiplie toujours x.</div>

      <h3>3. Fonction affine</h3>
      <p>Une fonction affine s'écrit f(x) = a·x + b. Sa représentation est une <b>droite</b>, qui ne passe pas forcément par l'origine.</p>
      <div class="formula">f(x) = 2x + 3 : f(1) = 5, f(3) = 9</div>
      <ul>
        <li><b>a</b> est le coefficient directeur : il mesure l'inclinaison</li>
        <li><b>b</b> est l'ordonnée à l'origine : c'est f(0), le point où la droite coupe l'axe vertical</li>
      </ul>
      <div class="box warn"><b>Ne pas confondre « affine » et « linéaire »</b> — Une fonction linéaire est un cas particulier de fonction affine, avec b = 0. Toutes les fonctions linéaires sont affines, mais l'inverse est faux.</div>

      <h3>4. Calculer le coefficient directeur</h3>
      <p>Si on connaît deux points de la droite :</p>
      <div class="formula">a = (y₂ − y₁) / (x₂ − x₁)</div>
      <p>Exemple : A(1 ; 5) et B(3 ; 11) donnent a = (11 − 5)/(3 − 1) = 3.</p>

      <h3>5. Sens de variation</h3>
      <ul>
        <li><b>a &gt; 0</b> : la droite monte, la fonction est croissante</li>
        <li><b>a &lt; 0</b> : la droite descend, la fonction est décroissante</li>
        <li><b>a = 0</b> : la droite est horizontale, la fonction est constante</li>
      </ul>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Déterminer la fonction affine dont la droite passe par A(1 ; 5) et B(3 ; 11).</p>
      <ul>
        <li>a = (11 − 5)/(3 − 1) = 6/2 = 3</li>
        <li>La fonction s'écrit f(x) = 3x + b</li>
        <li>A appartient à la droite : 5 = 3×1 + b, donc b = 2</li>
      </ul>
      <p><b>Résultat :</b> f(x) = 3x + 2. Vérification avec B : 3×3 + 2 = 11 ✓</p>
    ` },
    { titre:"Applications et lecture graphique", contenu:`
      <h3>1. Reconnaître une situation proportionnelle</h3>
      <p>Deux grandeurs sont proportionnelles quand l'une s'obtient en multipliant l'autre par un nombre fixe. Dans ce cas, la fonction qui les relie est <b>linéaire</b>.</p>
      <div class="box warn"><b>Attention aux cas déguisés</b> — Un forfait téléphonique avec abonnement fixe n'est pas proportionnel : c'est une fonction affine (a·x + b), avec b l'abonnement.</div>

      <h3>2. Comparer deux tarifs</h3>
      <p>C'est l'application la plus courante. On écrit chaque tarif comme une fonction affine, puis on cherche le point où l'une devient plus avantageuse que l'autre.</p>
      <div class="formula">Tarif A : f(x) = 2x + 20
Tarif B : g(x) = x + 40
Égalité : 2x + 20 = x + 40, donc x = 20</div>
      <p>Pour x &gt; 20, le tarif B devient plus avantageux, car son coefficient directeur est plus faible.</p>

      <h3>3. Lire un graphique</h3>
      <p>Trois lectures à savoir faire :</p>
      <ul>
        <li>Trouver l'image d'un nombre : on part de l'abscisse, on monte jusqu'à la droite, on lit l'ordonnée</li>
        <li>Trouver l'antécédent : on part de l'ordonnée, on va horizontalement jusqu'à la droite, on lit l'abscisse</li>
        <li>Déterminer le coefficient directeur : on repère deux points et on applique la formule</li>
      </ul>
      <div class="box"><b>Le coefficient comme « pente »</b> — Sur un graphique, quand on avance de 1 horizontalement, on monte de a verticalement. C'est la lecture la plus rapide du coefficient directeur.</div>

      <h3>4. Utiliser une fonction pour calculer</h3>
      <p>Une fois la fonction déterminée, il suffit de remplacer x par la valeur demandée.</p>
      <div class="formula">f(x) = 2,5x + 10
Pour x = 8 : f(8) = 2,5 × 8 + 10 = 30</div>

      <h3>5. Résoudre une équation avec une fonction</h3>
      <p>Chercher l'antécédent de k, c'est résoudre f(x) = k.</p>
      <div class="formula">f(x) = 3x − 5, chercher l'antécédent de 7 :
3x − 5 = 7
3x = 12
x = 4</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Un plombier facture 40 € de déplacement plus 25 € par heure. Exprimer le coût en fonction du nombre d'heures, puis calculer pour 3 h 30.</p>
      <ul>
        <li>Coût : f(x) = 25x + 40, où x est le nombre d'heures</li>
        <li>3 h 30 = 3,5 heures</li>
        <li>f(3,5) = 25 × 3,5 + 40 = 87,5 + 40 = 127,50 €</li>
      </ul>
      <p><b>Interprétation des coefficients :</b> 25 € est le tarif horaire (coefficient directeur), 40 € le déplacement (ordonnée à l'origine).</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — les fonctions linéaires et affines, puis les applications et la lecture graphique.</div>`,
  exercices:[
    { d:1, e:"f(x) = 3x. Calculer f(4).", r:"12",
      c:"f(4) = 3 × 4 = 12." },
    { d:1, e:"f(x) = 2x + 5. Calculer f(3).", r:"11",
      c:"f(3) = 2 × 3 + 5 = 6 + 5 = 11." },
    { d:1, e:"Une fonction linéaire passe par l'origine ?", r:"Oui, toujours",
      c:"Une fonction linéaire s'écrit f(x) = ax.\n\nOr f(0) = a × 0 = 0.\n\nSa droite passe donc toujours par l'origine du repère." },
    { d:1, e:"Quel est le coefficient directeur de f(x) = 4x − 1 ?", r:"4",
      c:"Dans f(x) = ax + b, le coefficient directeur est a.\n\nIci a = 4." },
    { d:1, e:"Quelle est l'ordonnée à l'origine de f(x) = 3x + 7 ?", r:"7",
      c:"L'ordonnée à l'origine est b, la valeur de f(0).\n\nf(0) = 3 × 0 + 7 = 7." },
    { d:1, e:"f(x) = −2x + 3. La fonction est-elle croissante ?", r:"Non, décroissante",
      c:"Le coefficient directeur vaut −2, qui est négatif.\n\nLa fonction est donc décroissante." },
    { d:1, e:"Une fonction affine avec b = 0 est :", r:"Linéaire",
      c:"Si b = 0, la fonction s'écrit f(x) = ax.\n\nC'est une fonction linéaire." },
    { d:1, e:"f(x) = 5x. Calculer l'antécédent de 20.", r:"x = 4",
      c:"On résout 5x = 20.\n\nx = 4." },
    { d:1, e:"Deux grandeurs proportionnelles sont reliées par :", r:"Une fonction linéaire",
      c:"La proportionnalité se traduit par une fonction linéaire f(x) = ax.\n\nLe coefficient a est le coefficient de proportionnalité." },
    { d:1, e:"f(x) = x + 2. Que vaut f(0) ?", r:"2",
      c:"f(0) = 0 + 2 = 2.\n\nC'est l'ordonnée à l'origine." },
    { d:2, e:"Déterminer la fonction affine passant par A(0;3) et B(2;7).", r:"f(x) = 2x + 3",
      c:"a = (7 − 3)/(2 − 0) = 4/2 = 2.\n\nComme A est sur l'axe des ordonnées (x = 0), son ordonnée donne b : b = 3.\n\nf(x) = 2x + 3.\n\nVérification avec B : 2×2 + 3 = 7 ✓" },
    { d:2, e:"Résoudre f(x) = 0 pour f(x) = 3x − 12.", r:"x = 4",
      c:"3x − 12 = 0\n3x = 12\nx = 4.\n\nC'est l'abscisse du point où la droite coupe l'axe des abscisses." },
    { d:2, e:"f(x) = 4x + 1. Calculer l'antécédent de 13.", r:"x = 3",
      c:"4x + 1 = 13\n4x = 12\nx = 3." },
    { d:2, e:"Un taxi facture 5 € de prise en charge plus 2 € par km. Exprimer le prix pour x km.", r:"f(x) = 2x + 5",
      c:"Le prix de base (5 €) est l'ordonnée à l'origine.\n\nLe prix par km (2 €) est le coefficient directeur.\n\nf(x) = 2x + 5." },
    { d:2, e:"Déterminer la fonction affine passant par A(1;4) et B(3;10).", r:"f(x) = 3x + 1",
      c:"a = (10 − 4)/(3 − 1) = 6/2 = 3.\n\nf(x) = 3x + b. Avec A : 4 = 3 + b, donc b = 1.\n\nf(x) = 3x + 1." },
    { d:2, e:"Deux forfaits : A = 30 + 2x et B = 50 + x. Pour quelle valeur de x sont-ils égaux ?", r:"x = 20",
      c:"30 + 2x = 50 + x\n2x − x = 50 − 30\nx = 20.\n\nPour 20 unités, les deux forfaits coûtent 70 €." },
    { d:2, e:"f(x) = −3x + 6. Pour quel x a-t-on f(x) = 0 ?", r:"x = 2",
      c:"−3x + 6 = 0\n−3x = −6\nx = 2." },
    { d:2, e:"Quel est le coefficient directeur de la droite passant par (2;5) et (4;11) ?", r:"3",
      c:"a = (11 − 5)/(4 − 2) = 6/2 = 3." },
    { d:2, e:"Une droite passe par l'origine et par le point (3;12). Quelle est sa fonction ?", r:"f(x) = 4x",
      c:"Comme elle passe par l'origine, c'est une fonction linéaire : f(x) = ax.\n\nAvec (3;12) : 12 = 3a, donc a = 4.\n\nf(x) = 4x." },
    { d:2, e:"f(x) = 2x − 3. La fonction est-elle croissante ou décroissante ?", r:"Croissante",
      c:"Le coefficient directeur vaut 2, qui est positif.\n\nLa fonction est croissante : la droite monte." },
    { d:2, e:"Un abonnement coûte 15 € puis 8 € par séance. Combien pour 6 séances ?", r:"63 €",
      c:"f(x) = 8x + 15.\n\nf(6) = 8 × 6 + 15 = 48 + 15 = 63 €." },
    { d:3, e:"Trouver la fonction affine telle que f(2) = 7 et f(5) = 16.", r:"f(x) = 3x + 1",
      c:"a = (16 − 7)/(5 − 2) = 9/3 = 3.\n\nf(x) = 3x + b. Avec f(2) = 7 : 7 = 6 + b, donc b = 1.\n\nf(x) = 3x + 1.\n\nVérification : f(5) = 15 + 1 = 16 ✓" },
    { d:3, e:"Un cinéma propose : 9 € la place, ou une carte à 45 € donnant la place à 4 €. À partir de combien de places la carte est-elle rentable ?", r:"À partir de 10 places",
      c:"Tarif sans carte : f(x) = 9x.\nTarif avec carte : g(x) = 4x + 45.\n\nÉgalité : 9x = 4x + 45\n5x = 45\nx = 9.\n\nPour x = 9, les deux tarifs donnent 81 €.\n\nÀ partir de <b>10 places</b>, la carte devient plus avantageuse." },
    { d:3, e:"Une voiture consomme 6 L aux 100 km et le carburant coûte 1,80 €/L. Exprimer le coût pour x km.", r:"f(x) = 0,108x",
      c:"Consommation pour x km : (6/100) × x = 0,06x litres.\n\nCoût : 0,06x × 1,80 = 0,108x €.\n\nC'est une fonction linéaire : pas de frais fixes.\n\nPour 500 km : 0,108 × 500 = 54 €." },
    { d:3, e:"Deux plombiers : A facture 30 € de déplacement + 40 €/h. B facture 60 € + 30 €/h. Pour quelle durée sont-ils au même prix ?", r:"3 heures",
      c:"A(x) = 40x + 30\nB(x) = 30x + 60\n\nÉgalité : 40x + 30 = 30x + 60\n10x = 30\nx = 3.\n\nPour 3 heures, les deux facturent 150 €.\n\nPour plus de 3 h, B (coefficient plus faible) devient moins cher." },
    { d:3, e:"Montrer qu'une fonction affine qui vérifie f(0) = 0 est linéaire.", r:"Démonstration",
      c:"Une fonction affine s'écrit f(x) = ax + b.\n\nOr f(0) = a × 0 + b = b.\n\nSi f(0) = 0, alors b = 0.\n\nLa fonction s'écrit donc f(x) = ax, ce qui est la forme d'une fonction linéaire.\n\nRéciproquement, une fonction linéaire vérifie bien f(0) = 0." },
    { d:3, e:"Le graphique d'une fonction affine passe par (0;5) et coupe l'axe des abscisses en x = 2,5. Quelle est cette fonction ?", r:"f(x) = −2x + 5",
      c:"La droite passe par (0;5), donc b = 5.\n\nElle coupe l'axe des abscisses en x = 2,5 : le point (2,5 ; 0) appartient à la droite.\n\nDonc 0 = a × 2,5 + 5\n−5 = 2,5a\na = −2.\n\nf(x) = −2x + 5." },
    { d:3, e:"f(x) = 3x + 2 et g(x) = −x + 10. Pour quel x a-t-on f(x) = g(x) ?", r:"x = 2",
      c:"3x + 2 = −x + 10\n3x + x = 10 − 2\n4x = 8\nx = 2.\n\nPour x = 2, f(2) = 8 et g(2) = 8.\n\nC'est le point d'intersection des deux droites." },
    { d:3, e:"Une entreprise a un coût fixe de 200 € et un coût unitaire de 12 €. Elle vend à 20 € l'unité. À partir de combien d'unités est-elle rentable ?", r:"À partir de 25 unités",
      c:"Coût : C(x) = 12x + 200.\nRecette : R(x) = 20x.\n\nRentabilité quand R(x) > C(x) :\n20x > 12x + 200\n8x > 200\nx > 25.\n\nÀ partir de 26 unités, l'entreprise est rentable.\n\nVérification : pour x = 25, C = 500 et R = 500 : équilibre. Pour x = 26, C = 512 et R = 520 : bénéfice de 8 €." },
    { d:3, e:"Montrer que si deux fonctions affines ont le même coefficient directeur, leurs droites sont parallèles.", r:"Démonstration",
      c:"Soit f(x) = ax + b et g(x) = ax + c deux fonctions affines de même coefficient directeur a.\n\nÉtudions la différence : f(x) − g(x) = (ax + b) − (ax + c) = b − c.\n\nC'est une constante, indépendante de x.\n\nDonc les deux droites sont toujours séparées de la même distance verticale : elles ne se coupent jamais si b ≠ c.\n\nSi b = c, les deux fonctions sont identiques et les droites sont confondues." },
    { d:3, e:"Une piscine se remplit à 15 m³ par heure et contient déjà 30 m³. Combien de temps pour atteindre 180 m³ ?", r:"10 heures",
      c:"V(t) = 15t + 30, où t est en heures.\n\nOn résout 15t + 30 = 180.\n15t = 150\nt = 10 heures.\n\nVérification : 15 × 10 + 30 = 180 ✓" },
    { d:3, e:"Déterminer la fonction affine dont la droite coupe l'axe des ordonnées en 4 et passe par le point (3;13).", r:"f(x) = 3x + 4",
      c:"Couper l'axe des ordonnées en 4 signifie f(0) = 4, donc b = 4.\n\nLa droite passe par (3;13) : 13 = 3a + 4\n9 = 3a\na = 3.\n\nf(x) = 3x + 4." },
    { d:3, e:"Deux mobiles : le premier part d'un point à 50 km/h. Le second part 2 h plus tard à 70 km/h. Après combien de temps le second rattrape-t-il le premier ?", r:"5 heures après le départ du second",
      c:"<b>Étape 1</b> : positions en fonction du temps.\nPremier : d₁(t) = 50(t + 2), t étant le temps du second.\nSecond : d₂(t) = 70t.\n\n<b>Étape 2</b> : égalité.\n50(t + 2) = 70t\n50t + 100 = 70t\n100 = 20t\nt = 5.\n\nLe second rattrape le premier après 5 heures.\n\nVérification : premier a roulé 7 h, soit 350 km. Second a roulé 5 h, soit 350 km ✓" },
    { d:3, e:"Une fonction affine f vérifie f(1) = 2 et f(3) = −4. Déterminer f, puis calculer f(0).", r:"f(x) = −3x + 5, f(0) = 5",
      c:"a = (−4 − 2)/(3 − 1) = −6/2 = −3.\n\nf(x) = −3x + b. Avec f(1) = 2 : 2 = −3 + b, donc b = 5.\n\nf(x) = −3x + 5.\n\nf(0) = 5 : c'est l'ordonnée à l'origine.\n\nVérification : f(3) = −9 + 5 = −4 ✓" },
    { d:3, e:"La droite d'une fonction affine passe par A(−1;7) et B(2;−2). Déterminer cette fonction.", r:"f(x) = −3x + 4",
      c:"a = (−2 − 7)/(2 − (−1)) = −9/3 = −3.\n\nf(x) = −3x + b. Avec A : 7 = −3(−1) + b = 3 + b, donc b = 4.\n\nf(x) = −3x + 4.\n\nVérification avec B : −6 + 4 = −2 ✓" },
    { d:3, e:"Un fournisseur propose deux tarifs : 100 € de base + 3 €/unité, ou 200 € de base + 2 €/unité. À partir de combien d'unités le second est-il plus avantageux ?", r:"À partir de 101 unités",
      c:"A(x) = 3x + 100\nB(x) = 2x + 200\n\nB devient plus avantageux quand B(x) < A(x) :\n2x + 200 < 3x + 100\n200 − 100 < 3x − 2x\n100 < x.\n\nÀ partir de 101 unités, le tarif B est plus avantageux.\n\nPour x = 100, les deux coûtent 400 €." },
    { d:3, e:"Montrer qu'une fonction affine croissante vérifie f(x₁) < f(x₂) quand x₁ < x₂.", r:"Démonstration",
      c:"Soit f(x) = ax + b avec a > 0.\n\nSoit x₁ < x₂.\n\nAlors f(x₂) − f(x₁) = (ax₂ + b) − (ax₁ + b) = a(x₂ − x₁).\n\nComme a > 0 et x₂ − x₁ > 0, leur produit est positif.\n\nDonc f(x₂) − f(x₁) > 0, soit f(x₁) < f(x₂).\n\nLa fonction est bien croissante." }
  ]
},
{
  id:"3e-trigonometrie", niveau:"3e", titre:"3e · Trigonométrie", temps:"22 min",
  resume:"Cosinus, sinus, tangente, calcul d'un angle ou d'une longueur.",
  lecons:[
    { titre:"Les trois rapports trigonométriques", contenu:`
      <h3>1. Le cadre d'utilisation</h3>
      <p>Les formules de trigonométrie ne s'appliquent que dans un <b>triangle rectangle</b>. Pour un angle aigu donné, on définit trois rapports :</p>
      <div class="formula">cos(angle) = adjacent / hypoténuse
sin(angle) = opposé / hypoténuse
tan(angle) = opposé / adjacent</div>
      <div class="box"><b>Moyen mnémotechnique</b> — « CAH SOH TOA » : Cosinus = Adjacent/Hypoténuse, Sinus = Opposé/Hypoténuse, Tangente = Opposé/Adjacent.</div>

      <h3>2. Reconnaître les côtés</h3>
      <p>Pour l'angle considéré :</p>
      <ul>
        <li><b>L'hypoténuse</b> : opposée à l'angle droit, toujours le plus long côté</li>
        <li><b>Le côté opposé</b> : celui qui ne touche pas l'angle</li>
        <li><b>Le côté adjacent</b> : celui qui touche l'angle, sans être l'hypoténuse</li>
      </ul>
      <div class="box warn"><b>Les côtés changent avec l'angle</b> — Ce qui est « adjacent » pour un angle devient « opposé » pour l'autre angle aigu. Repère bien l'angle dont tu parles avant de nommer les côtés.</div>

      <h3>3. Choisir le bon rapport</h3>
      <p>On écrit les trois rapports possibles, puis on choisit celui où figurent les deux longueurs connues et l'inconnue :</p>
      <ul>
        <li>Hypoténuse + opposé → <b>sinus</b></li>
        <li>Hypoténuse + adjacent → <b>cosinus</b></li>
        <li>Opposé + adjacent → <b>tangente</b></li>
      </ul>
      <div class="box"><b>C'est l'étape décisive</b> — La plupart des erreurs viennent d'un mauvais choix de rapport, pas d'une erreur de calcul. Prends le temps d'écrire les trois formules avant de choisir.</div>

      <h3>4. Calculer une longueur</h3>
      <p>On écrit le rapport, puis on isole l'inconnue.</p>
      <div class="formula">Si on cherche l'opposé avec l'hypoténuse connue :
opposé = hypoténuse × sin(angle)</div>

      <h3>5. Calculer un angle</h3>
      <p>On calcule le rapport, puis on utilise les touches cos⁻¹, sin⁻¹ ou tan⁻¹ de la calculatrice.</p>
      <div class="formula">Si tan(x) = 0,75, alors x = tan⁻¹(0,75) ≈ 36,9°</div>
      <div class="box warn"><b>Vérifie le mode DEG</b> — La calculatrice doit être en degrés, pas en radians. C'est l'erreur la plus fréquente de ce chapitre.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>ABC est rectangle en B. L'angle en A vaut 35°, et AB (côté adjacent à Â) mesure 8 cm. Calculer BC (côté opposé à Â).</p>
      <ul>
        <li>On connaît l'adjacent et on cherche l'opposé → <b>tangente</b></li>
        <li>tan(35°) = BC/AB = BC/8</li>
        <li>BC = 8 × tan(35°) ≈ 8 × 0,700 ≈ 5,6 cm</li>
      </ul>
      <p><b>Vérification de cohérence :</b> l'angle de 35° est petit, donc le côté opposé doit être plus petit que l'adjacent. 5,6 &lt; 8 ✓</p>
    ` },
    { titre:"Applications et valeurs remarquables", contenu:`
      <h3>1. Les valeurs remarquables</h3>
      <div class="formula">          30°        45°        60°
cos       √3/2       √2/2       1/2
sin       1/2        √2/2       √3/2
tan       √3/3       1          √3</div>
      <div class="box"><b>Rien à mémoriser par cœur</b> — Il suffit de retenir les deux colonnes extrêmes. Le sinus et le cosinus s'échangent entre 30° et 60° (cos 30° = sin 60°), et pour 45°, les deux valent √2/2.</div>

      <h3>2. Relation entre les trois rapports</h3>
      <p>Deux relations à connaître :</p>
      <div class="formula">tan(x) = sin(x) / cos(x)
cos²(x) + sin²(x) = 1</div>
      <p>La seconde se démontre avec le théorème de Pythagore.</p>

      <h3>3. Reconnaître une situation trigonométrique</h3>
      <p>Dès qu'un énoncé parle de pente, d'inclinaison, d'angle d'élévation, de dénivelé, c'est de la trigonométrie.</p>
      <div class="box"><b>Vocabulaire concret</b> — L'« angle d'élévation » est l'angle entre l'horizontale et la ligne de visée vers le haut. L'« angle de dépression » est vers le bas.</div>

      <h3>4. Calculer une hauteur inaccessible</h3>
      <p>C'est l'application classique : mesurer une distance au sol et un angle, puis calculer la hauteur.</p>
      <div class="formula">hauteur = distance × tan(angle d'élévation)</div>
      <p>Exemple : à 50 m d'un immeuble, l'angle d'élévation est de 40°. Hauteur ≈ 50 × tan(40°) ≈ 50 × 0,839 ≈ 42 m.</p>

      <h3>5. Pente d'une route</h3>
      <p>Une pente de 10 % signifie qu'on monte de 10 m pour 100 m parcourus horizontalement. On peut la convertir en angle :</p>
      <div class="formula">tan(angle) = 10/100 = 0,1, donc angle ≈ 5,7°</div>
      <div class="box warn"><b>Pente et angle ne sont pas proportionnels</b> — Une pente de 20 % n'est pas le double de 5,7°. Elle vaut arctan(0,2) ≈ 11,3°.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Une échelle de 5 m est posée contre un mur. Son pied est à 2 m du mur. Quel angle forme-t-elle avec le sol ?</p>
      <ul>
        <li>L'échelle est l'hypoténuse (5 m), la distance au sol est l'adjacent (2 m)</li>
        <li>On cherche l'angle entre l'échelle et le sol</li>
        <li>Avec hypoténuse et adjacent → <b>cosinus</b></li>
        <li>cos(angle) = 2/5 = 0,4</li>
      </ul>
      <p><b>Résultat :</b> angle = cos⁻¹(0,4) ≈ 66,4°.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — les trois rapports trigonométriques et le choix du bon rapport, puis les applications et les valeurs remarquables.</div>`,
  exercices:[
    { d:1, e:"Dans un triangle rectangle, sin(angle) = ?", r:"opposé / hypoténuse",
      c:"C'est la définition du sinus d'un angle aigu.\n\nLe rapport entre le côté opposé à l'angle et l'hypoténuse." },
    { d:1, e:"Que vaut tan(45°) ?", r:"1",
      c:"Valeur remarquable : tan(45°) = 1.\n\nCela signifie que l'opposé et l'adjacent sont égaux : le triangle est isocèle rectangle." },
    { d:1, e:"Que vaut sin(30°) ?", r:"0,5",
      c:"Valeur remarquable : sin(30°) = 1/2 = 0,5." },
    { d:1, e:"Que vaut cos(60°) ?", r:"0,5",
      c:"Valeur remarquable : cos(60°) = 1/2 = 0,5.\n\nRemarque : cos(60°) = sin(30°). C'est une symétrie fondamentale." },
    { d:1, e:"Que vaut tan(angle) en fonction de sin et cos ?", r:"sin/cos",
      c:"tan(x) = sin(x)/cos(x).\n\nCette relation découle directement des définitions : (opposé/hypoténuse) ÷ (adjacent/hypoténuse) = opposé/adjacent." },
    { d:1, e:"Dans un triangle rectangle, quel côté est le plus long ?", r:"L'hypoténuse",
      c:"L'hypoténuse est toujours le plus long côté d'un triangle rectangle.\n\nC'est pour cela que cos et sin sont toujours inférieurs à 1." },
    { d:1, e:"Que vaut tan(0°) ?", r:"0",
      c:"tan(0°) = 0.\n\nQuand l'angle tend vers 0, le côté opposé devient nul." },
    { d:1, e:"Pour calculer un angle connaissant tan(x) = 0,5, on utilise :", r:"La touche tan⁻¹ de la calculatrice",
      c:"On utilise la fonction inverse de la tangente, notée tan⁻¹ ou arctan.\n\ntan⁻¹(0,5) ≈ 26,6°." },
    { d:1, e:"Vrai ou faux : cos²(x) + sin²(x) = 1.", r:"Vrai",
      c:"C'est la relation fondamentale de la trigonométrie.\n\nElle découle du théorème de Pythagore appliqué au triangle rectangle." },
    { d:1, e:"Que vaut sin(90°) ?", r:"1",
      c:"sin(90°) = 1.\n\nQuand l'angle tend vers 90°, le côté opposé se confond avec l'hypoténuse." },
    { d:2, e:"ABC rectangle en B, angle Â = 40°, AC = 10. Calculer BC (opposé à Â).", r:"≈ 6,4",
      c:"On connaît l'hypoténuse (AC) et on cherche l'opposé → sinus.\n\nsin(40°) = BC/AC = BC/10.\n\nBC = 10 × sin(40°) ≈ 10 × 0,643 ≈ 6,4." },
    { d:2, e:"ABC rectangle en B, AB = 8 (adjacent à Â), BC = 6 (opposé à Â). Calculer tan(Â).", r:"0,75",
      c:"tan(Â) = opposé / adjacent = BC/AB = 6/8 = 0,75.\n\nOn en déduit que Â ≈ 36,9°." },
    { d:2, e:"Calculer l'angle dont le sinus vaut 0,5.", r:"30°",
      c:"sin⁻¹(0,5) = 30°.\n\nC'est une valeur remarquable à connaître." },
    { d:2, e:"ABC rectangle en B, angle Â = 30°, AB = 10 (adjacent). Calculer BC (opposé).", r:"≈ 5,77",
      c:"On connaît l'adjacent et on cherche l'opposé → tangente.\n\ntan(30°) = BC/AB = BC/10.\n\nBC = 10 × tan(30°) ≈ 10 × 0,577 ≈ 5,77." },
    { d:2, e:"Un triangle rectangle a un angle de 25° et une hypoténuse de 12 cm. Quelle est la longueur du côté opposé ?", r:"≈ 5,07 cm",
      c:"opposé = hypoténuse × sin(25°)\n≈ 12 × 0,423 ≈ 5,07 cm." },
    { d:2, e:"Calculer l'angle dont le cosinus vaut 0,4.", r:"≈ 66,4°",
      c:"cos⁻¹(0,4) ≈ 66,4°.\n\nOn utilise la touche cos⁻¹ de la calculatrice, en mode degrés." },
    { d:2, e:"Un arbre vu à 30 m sous un angle de 35° : quelle est sa hauteur (œil au sol) ?", r:"≈ 21 m",
      c:"hauteur = distance × tan(angle)\n= 30 × tan(35°)\n≈ 30 × 0,700 ≈ 21 m." },
    { d:2, e:"Vérifier que cos²(45°) + sin²(45°) = 1.", r:"Vérifié",
      c:"cos(45°) = √2/2, donc cos²(45°) = 2/4 = 1/2.\nsin(45°) = √2/2, donc sin²(45°) = 1/2.\n\nSomme : 1/2 + 1/2 = 1 ✓" },
    { d:2, e:"Une route a une pente de 15 %. Quel est son angle ?", r:"≈ 8,5°",
      c:"Une pente de 15 % correspond à tan(angle) = 15/100 = 0,15.\n\nangle = tan⁻¹(0,15) ≈ 8,5°." },
    { d:2, e:"ABC rectangle en B, BC = 5 (opposé), AB = 12 (adjacent). Calculer AC.", r:"13",
      c:"On peut utiliser Pythagore : AC² = 5² + 12² = 25 + 144 = 169, donc AC = 13.\n\nOu bien : tan(Â) = 5/12 ≈ 0,4167, donc Â ≈ 22,6°, puis sin(22,6°) = 5/AC donne AC ≈ 13." },
    { d:2, e:"Que représente l'angle d'élévation ?", r:"L'angle entre l'horizontale et la ligne de visée vers le haut",
      c:"L'angle d'élévation se mesure depuis l'horizontale, vers le haut.\n\nIl sert à calculer des hauteurs à partir d'une distance au sol connue." },
    { d:2, e:"Un cerf-volant est retenu par un fil de 50 m formant un angle de 40° avec le sol. Quelle est son altitude ?", r:"≈ 32 m",
      c:"Le fil est l'hypoténuse, l'altitude est le côté opposé à l'angle de 40°.\n\naltitude = 50 × sin(40°) ≈ 50 × 0,643 ≈ 32 m." },
    { d:2, e:"Calculer sin(60°) × 2.", r:"≈ 1,732",
      c:"sin(60°) = √3/2.\n\nDonc sin(60°) × 2 = √3 ≈ 1,732.\n\n<b>Remarque</b> — Un sinus ne peut pas dépasser 1, mais multiplié par 2, le résultat peut être supérieur." },
    { d:2, e:"Un triangle rectangle a un côté opposé de 4 cm et une hypoténuse de 8 cm. Calculer l'angle.", r:"30°",
      c:"sin(angle) = opposé / hypoténuse = 4/8 = 0,5.\n\nangle = sin⁻¹(0,5) = 30°." },
    { d:3, e:"Un observateur voit le sommet d'une tour sous un angle de 28°. Il s'avance de 20 m et l'angle devient 45°. Quelle est la hauteur de la tour ?", r:"≈ 42,6 m",
      c:"Soit h la hauteur et d la distance initiale.\n\nPremier cas : tan(28°) = h/d, donc h = d × tan(28°) ≈ 0,532d.\nSecond cas : tan(45°) = h/(d − 20) = 1, donc h = d − 20.\n\nÉgalons : 0,532d = d − 20\n20 = d − 0,532d = 0,468d\nd ≈ 42,7 m.\n\nEt h = d − 20 ≈ 22,7 m.\n\nHmm, vérifions : h = 0,532 × 42,7 ≈ 22,7 m.\n\nLa hauteur est d'environ 22,7 m." },
    { d:3, e:"Un escalier a une pente telle que l'angle avec l'horizontale est de 32°. La hauteur à franchir est de 3 m. Quelle longueur d'escalier faut-il ?", r:"≈ 5,66 m",
      c:"La hauteur est le côté opposé, la longueur de l'escalier est l'hypoténuse.\n\nsin(32°) = 3/longueur\n0,530 = 3/longueur\nlongueur = 3/0,530 ≈ 5,66 m." },
    { d:3, e:"Montrer que tan(x) = sin(x)/cos(x).", r:"Démonstration",
      c:"Par définition :\nsin(x) = opposé / hypoténuse\ncos(x) = adjacent / hypoténuse\n\nCalculons le quotient :\nsin(x)/cos(x) = (opposé/hypoténuse) ÷ (adjacent/hypoténuse)\n= (opposé/hypoténuse) × (hypoténuse/adjacent)\n= opposé/adjacent\n\nOr c'est exactement la définition de tan(x).\n\nDonc tan(x) = sin(x)/cos(x) ✓" },
    { d:3, e:"Une rampe d'accès doit avoir un angle maximal de 5°. La hauteur à franchir est de 0,50 m. Quelle longueur minimale de rampe ?", r:"≈ 5,74 m",
      c:"La hauteur est l'opposé, la rampe est l'hypoténuse.\n\nsin(5°) = 0,50/longueur\n0,0872 = 0,50/longueur\nlongueur = 0,50/0,0872 ≈ 5,74 m.\n\n<i>Note : la norme française pour les rampes PMR est effectivement d'environ 5 % de pente, ce qui correspond à peu près à cet angle.</i>" },
    { d:3, e:"Deux immeubles : du point d'observation, le sommet du premier (30 m de haut, à 40 m) et du second (à 80 m) sont alignés. Quelle est la hauteur du second ?", r:"≈ 60 m",
      c:"Les deux angles d'élévation sont égaux (alignement).\n\ntan(angle) = 30/40 = 0,75.\n\nPour le second : tan(angle) = h/80\n0,75 = h/80\nh = 60 m.\n\nLa hauteur du second immeuble est de 60 m." },
    { d:3, e:"Un bâteau s'approche d'une falaise de 80 m. L'angle d'élévation passe de 20° à 45° après avoir parcouru une distance d. Quelle est cette distance ?", r:"≈ 140 m",
      c:"Position initiale : tan(20°) = 80/d₁, donc d₁ = 80/tan(20°) ≈ 80/0,364 ≈ 219,8 m.\n\nPosition finale : tan(45°) = 80/d₂, donc d₂ = 80/1 = 80 m.\n\nDistance parcourue : d = d₁ − d₂ ≈ 219,8 − 80 ≈ 139,8 m.\n\nSoit environ 140 m." },
    { d:3, e:"Montrer que dans un triangle rectangle, sin(Â) = cos(90° − Â).", r:"Démonstration",
      c:"Soit ABC rectangle en B, avec Â l'angle en A.\n\nL'angle en C vaut 90° − Â (car les deux angles aigus sont complémentaires).\n\nsin(Â) = BC/AC (opposé sur hypoténuse pour l'angle en A).\n\nOr, pour l'angle en C, le côté BC est... adjacent ! Car BC touche l'angle C et n'est pas l'hypoténuse.\n\nDonc cos(C) = BC/AC = sin(Â).\n\nEt C = 90° − Â.\n\nConclusion : sin(Â) = cos(90° − Â) ✓\n\n<b>Conséquence</b> : sin(30°) = cos(60°) et sin(60°) = cos(30°), ce qu'on retrouve dans les valeurs remarquables." },
    { d:3, e:"Un toit a une pente de 35°. La maison a une largeur de 10 m. Quelle est la hauteur du toit au faîtage (par rapport aux gouttières) ?", r:"≈ 3,50 m",
      c:"Le demi-toit forme un triangle rectangle dont la base est 5 m (demi-largeur) et l'angle à la base est 35°.\n\nLa hauteur est le côté opposé.\n\ntan(35°) = h/5\n0,700 = h/5\nh = 3,50 m.\n\nLa hauteur au faîtage est de 3,50 m au-dessus des gouttières." }
  ]
},
{
  id:"3e-vecteurs", niveau:"3e", titre:"3e · Translations et vecteurs", temps:"20 min",
  resume:"Translation, vecteurs, somme vectorielle, coordonnées.",
  lecons:[
    { titre:"Translation et vecteurs", contenu:`
      <h3>1. La translation</h3>
      <p>Une <b>translation</b> est un déplacement défini par une direction, un sens et une longueur. Tous les points de la figure se déplacent de la même façon.</p>
      <div class="box"><b>Propriété fondamentale</b> — Une translation conserve les longueurs, les angles, les aires et l'alignement. La figure est déplacée, pas déformée.</div>

      <h3>2. Le vecteur</h3>
      <p>Le vecteur AB⃗ représente le déplacement de A vers B. Il possède trois caractéristiques :</p>
      <ul>
        <li>une <b>direction</b> : celle de la droite (AB)</li>
        <li>un <b>sens</b> : de A vers B</li>
        <li>une <b>norme</b> : la longueur AB</li>
      </ul>
      <p>Deux vecteurs sont <b>égaux</b> s'ils ont même direction, même sens et même norme — même si leurs points d'origine diffèrent.</p>

      <h3>3. Danger de confusion</h3>
      <div class="box warn"><b>AB⃗ et BA⃗ ne sont pas égaux</b> — Ils ont la même direction et la même norme, mais des sens contraires. BA⃗ = −AB⃗, c'est le vecteur opposé.</div>

      <h3>4. Somme de deux vecteurs</h3>
      <p>Pour additionner deux vecteurs, on les met bout à bout :</p>
      <div class="formula">AB⃗ + BC⃗ = AC⃗</div>
      <p>C'est la <b>relation de Chasles</b> : les lettres intermédiaires se simplifient.</p>
      <div class="box"><b>Lecture rapide</b> — Dans AB⃗ + BC⃗, le B disparaît, laissant AC⃗. C'est le réflexe à automatiser.</div>

      <h3>5. Coordonnées d'un vecteur</h3>
      <p>Dans un repère, les coordonnées se calculent par différence :</p>
      <div class="formula">AB⃗ (x_B − x_A ; y_B − y_A)</div>
      <p>Exemple : A(2 ; 3) et B(5 ; 7) donnent AB⃗(3 ; 4).</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Simplifier AB⃗ + CD⃗ + BC⃗.</p>
      <ul>
        <li>On cherche les lettres qui s'enchaînent</li>
        <li>AB⃗ + BC⃗ = AC⃗ (Chasles)</li>
        <li>Donc l'expression devient AC⃗ + CD⃗</li>
        <li>Par Chasles : AC⃗ + CD⃗ = AD⃗</li>
      </ul>
      <p><b>Résultat :</b> AD⃗.</p>
    ` },
    { titre:"Applications et colinéarité", contenu:`
      <h3>1. Démontrer une égalité vectorielle</h3>
      <p>On transforme une expression avec Chasles et les opposés, jusqu'à obtenir la forme voulue.</p>
      <div class="box"><b>Technique</b> — Pour démontrer une égalité, on part d'un membre et on transforme jusqu'à obtenir l'autre. On ne modifie jamais les deux côtés en même temps.</div>

      <h3>2. Vecteurs colinéaires</h3>
      <p>Deux vecteurs sont <b>colinéaires</b> s'ils ont la même direction, c'est-à-dire si l'un est un multiple de l'autre :</p>
      <div class="formula">u⃗ = k · v⃗        pour un certain réel k</div>
      <p>C'est l'outil pour démontrer un <b>parallélisme</b> ou un <b>alignement de points</b>.</p>

      <h3>3. Alignement de trois points</h3>
      <p>C'est l'application la plus fréquente :</p>
      <div class="box"><b>Méthode</b> — Trois points A, B, C sont alignés si et seulement si AB⃗ et AC⃗ sont colinéaires. Il faut que les deux vecteurs partent du <b>même point</b>.</div>

      <h3>4. Critère de colinéarité en coordonnées</h3>
      <p>Deux vecteurs u⃗(x ; y) et v⃗(x′ ; y′) sont colinéaires si et seulement si :</p>
      <div class="formula">x · y′ − y · x′ = 0</div>
      <div class="box"><b>Comment le retenir</b> — C'est un « produit en croix » : on multiplie en diagonale et on soustrait. Si le résultat est nul, les vecteurs sont colinéaires.</div>

      <h3>5. Parallélogramme et vecteurs</h3>
      <p>ABCD est un parallélogramme si et seulement si :</p>
      <div class="formula">AB⃗ = DC⃗</div>
      <p>Cette égalité vectorielle traduit à la fois le parallélisme et l'égalité des longueurs.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>A(1 ; 2), B(4 ; 6), C(7 ; 10). Les trois points sont-ils alignés ?</p>
      <ul>
        <li>AB⃗ = (4−1 ; 6−2) = (3 ; 4)</li>
        <li>AC⃗ = (7−1 ; 10−2) = (6 ; 8)</li>
        <li>Test : 3 × 8 − 4 × 6 = 24 − 24 = 0</li>
      </ul>
      <p><b>Conclusion :</b> les vecteurs sont colinéaires, donc les trois points sont alignés. On remarque même que AC⃗ = 2·AB⃗, donc B est le milieu de [AC].</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — la translation et les vecteurs avec la relation de Chasles, puis la colinéarité et l'alignement.</div>`,
  exercices:[
    { d:1, e:"Simplifier AB⃗ + BC⃗.", r:"AC⃗",
      c:"Relation de Chasles : les lettres qui s'enchaînent se simplifient.\n\nAB⃗ + BC⃗ = AC⃗." },
    { d:1, e:"Que vaut AB⃗ + BA⃗ ?", r:"0⃗",
      c:"BA⃗ = −AB⃗.\n\nDonc AB⃗ + BA⃗ = 0⃗, le vecteur nul." },
    { d:1, e:"Calculer AB⃗ − AC⃗.", r:"CB⃗",
      c:"AB⃗ − AC⃗ = AB⃗ + CA⃗.\n\nPar Chasles avec C, A, B : CA⃗ + AB⃗ = CB⃗." },
    { d:1, e:"Quelles sont les coordonnées de AB⃗ pour A(1;2) et B(4;6) ?", r:"(3 ; 4)",
      c:"AB⃗ = (4 − 1 ; 6 − 2) = (3 ; 4)." },
    { d:1, e:"Deux vecteurs égaux ont :", r:"Même direction, même sens et même norme",
      c:"C'est la définition de l'égalité de deux vecteurs.\n\nLeur point d'origine peut être différent." },
    { d:1, e:"Que vaut −AB⃗ ?", r:"BA⃗",
      c:"L'opposé d'un vecteur a la même direction et la même norme, mais le sens contraire.\n\n−AB⃗ = BA⃗." },
    { d:1, e:"Une translation conserve-t-elle les longueurs ?", r:"Oui",
      c:"Une translation est un déplacement rigide.\n\nElle conserve les longueurs, les angles, les aires et l'alignement." },
    { d:1, e:"Calculer la norme de AB⃗ pour A(0;0) et B(3;4).", r:"5",
      c:"AB⃗ = (3 ; 4).\n\n‖AB⃗‖ = √(3² + 4²) = √25 = 5." },
    { d:1, e:"Deux vecteurs colinéaires ont :", r:"La même direction",
      c:"Colinéaire signifie « même direction ».\n\nCela ne préjuge pas du sens ni de la norme." },
    { d:1, e:"ABCD est un parallélogramme si et seulement si :", r:"AB⃗ = DC⃗",
      c:"Cette égalité vectorielle traduit le parallélisme et l'égalité des longueurs des côtés opposés." },
    { d:2, e:"Les points A(0;0), B(2;3) et C(4;6) sont-ils alignés ?", r:"Oui",
      c:"AB⃗ = (2 ; 3) et AC⃗ = (4 ; 6).\n\nTest : 2 × 6 − 3 × 4 = 12 − 12 = 0.\n\nLes vecteurs sont colinéaires : les points sont alignés.\n\nOn remarque que AC⃗ = 2 × AB⃗." },
    { d:2, e:"Simplifier AB⃗ + BC⃗ + CD⃗.", r:"AD⃗",
      c:"AB⃗ + BC⃗ = AC⃗, puis AC⃗ + CD⃗ = AD⃗.\n\nAutrement dit, on va de A à D en passant par B et C." },
    { d:2, e:"Les vecteurs u⃗(2;4) et v⃗(1;2) sont-ils colinéaires ?", r:"Oui",
      c:"Test : 2 × 2 − 4 × 1 = 4 − 4 = 0.\n\nLes vecteurs sont colinéaires.\n\nOn remarque que u⃗ = 2v⃗." },
    { d:2, e:"Déterminer x pour que u⃗(x;6) et v⃗(2;3) soient colinéaires.", r:"x = 4",
      c:"Condition : x × 3 − 6 × 2 = 0.\n3x − 12 = 0\nx = 4." },
    { d:2, e:"Calculer les coordonnées du point D tel que AB⃗ = DC⃗, avec A(0;0), B(3;1), C(4;4).", r:"D(1 ; 3)",
      c:"AB⃗ = (3 ; 1).\n\nSoit D(x ; y). DC⃗ = (4 − x ; 4 − y).\n\nAB⃗ = DC⃗ donne 3 = 4 − x, donc x = 1, et 1 = 4 − y, donc y = 3.\n\nD(1 ; 3)." },
    { d:2, e:"Les vecteurs u⃗(3;−2) et v⃗(−6;4) sont-ils colinéaires ?", r:"Oui",
      c:"Test : 3 × 4 − (−2) × (−6) = 12 − 12 = 0.\n\nLes vecteurs sont colinéaires.\n\nOn remarque que v⃗ = −2u⃗ : ils sont opposés." },
    { d:2, e:"Calculer la norme de AB⃗ pour A(1;1) et B(4;5).", r:"5",
      c:"AB⃗ = (3 ; 4).\n\n‖AB⃗‖ = √(9 + 16) = 5." },
    { d:2, e:"Simplifier 2AB⃗ + 3AB⃗.", r:"5AB⃗",
      c:"On regroupe les coefficients : 2 + 3 = 5.\n\nRésultat : 5AB⃗." },
    { d:2, e:"Les points A(1;1), B(2;3), C(3;6) sont-ils alignés ?", r:"Non",
      c:"AB⃗ = (1 ; 2) et AC⃗ = (2 ; 5).\n\nTest : 1 × 5 − 2 × 2 = 5 − 4 = 1 ≠ 0.\n\nLes vecteurs ne sont pas colinéaires : les points ne sont pas alignés." },
    { d:2, e:"Montrer que A(0;0), B(4;1), C(3;5), D(−1;4) forment un parallélogramme.", r:"Démonstration",
      c:"AB⃗ = (4 ; 1).\nDC⃗ = (3 − (−1) ; 5 − 4) = (4 ; 1).\n\nComme AB⃗ = DC⃗, le quadrilatère ABCD a deux côtés opposés parallèles et égaux : c'est un parallélogramme." },
    { d:2, e:"Que vaut la somme des vecteurs AB⃗ + BC⃗ + CD⃗ + DA⃗ ?", r:"0⃗",
      c:"Chaque lettre s'enchaîne : AB⃗ + BC⃗ + CD⃗ + DA⃗.\n\nDe proche en proche : on part de A et on y revient.\n\nLa somme vaut 0⃗." },
    { d:2, e:"Déterminer k pour que u⃗(6;k) et v⃗(2;3) soient colinéaires.", r:"k = 9",
      c:"Condition : 6 × 3 − k × 2 = 0.\n18 − 2k = 0\nk = 9.\n\nVérification : u⃗(6;9) = 3 × v⃗(2;3) ✓" },
    { d:3, e:"Montrer que le point I, milieu de [AB], vérifie IA⃗ + IB⃗ = 0⃗.", r:"Démonstration",
      c:"I est le milieu de [AB], donc IA = IB.\n\nDe plus, A et B sont de part et d'autre de I : les vecteurs IA⃗ et IB⃗ ont la même direction, la même norme, mais des sens contraires.\n\nDonc IB⃗ = −IA⃗.\n\nD'où IA⃗ + IB⃗ = IA⃗ − IA⃗ = 0⃗ ✓\n\n<b>Réciproque</b> — Si IA⃗ + IB⃗ = 0⃗, alors I est le milieu de [AB]." },
    { d:3, e:"Montrer que si AB⃗ = CD⃗, alors AC⃗ = BD⃗.", r:"Démonstration",
      c:"Partons de AC⃗ et appliquons Chasles.\n\nAC⃗ = AB⃗ + BC⃗.\n\nComme AB⃗ = CD⃗, on remplace :\nAC⃗ = CD⃗ + BC⃗ = BC⃗ + CD⃗.\n\nEt par Chasles, BC⃗ + CD⃗ = BD⃗.\n\nDonc AC⃗ = BD⃗ ✓" },
    { d:3, e:"Déterminer l'ensemble des points M tels que MA⃗ + MB⃗ = 0⃗, avec A(1;2) et B(5;6).", r:"Le point (3 ; 4)",
      c:"MA⃗ + MB⃗ = 0⃗ signifie MA⃗ = −MB⃗ = BM⃗.\n\nCela veut dire que M est le milieu de [AB].\n\nCoordonnées : ((1+5)/2 ; (2+6)/2) = (3 ; 4)." },
    { d:3, e:"Montrer que les points A, B, C sont alignés si et seulement si AB⃗ et AC⃗ sont colinéaires.", r:"Démonstration",
      c:"<b>Sens direct</b> : si A, B, C sont alignés, alors les droites (AB) et (AC) sont confondues.\n\nDonc les vecteurs AB⃗ et AC⃗ ont la même direction : ils sont colinéaires.\n\n<b>Sens réciproque</b> : si AB⃗ et AC⃗ sont colinéaires, ils ont la même direction.\n\nLes droites (AB) et (AC) ont donc la même direction. Comme elles passent toutes deux par A, elles sont confondues.\n\nDonc B et C sont sur la droite passant par A : les trois points sont alignés." },
    { d:3, e:"Dans un repère, u⃗(3;2) et v⃗(−6;−4). Montrer que 2u⃗ + v⃗ = 0⃗.", r:"Démonstration",
      c:"2u⃗ = (6 ; 4).\n\n2u⃗ + v⃗ = (6 + (−6) ; 4 + (−4)) = (0 ; 0) = 0⃗.\n\n<b>Interprétation</b> — v⃗ = −2u⃗ : les deux vecteurs sont opposés et colinéaires." },
    { d:3, e:"Un bateau se déplace de 3 km vers le nord puis de 4 km vers l'est. Quelle est la norme du déplacement total ?", r:"5 km",
      c:"Modélisons : u⃗ = (0 ; 3) et v⃗ = (4 ; 0).\n\nu⃗ + v⃗ = (4 ; 3).\n\n‖u⃗ + v⃗‖ = √(16 + 9) = √25 = 5 km.\n\nC'est le triangle 3-4-5." },
    { d:3, e:"Montrer que si A(1;2), B(3;6) et C(5;10), alors B est le milieu de [AC].", r:"Démonstration",
      c:"AB⃗ = (2 ; 4) et BC⃗ = (2 ; 4).\n\nDonc AB⃗ = BC⃗.\n\nCela signifie que B est le milieu du segment [AC] : les deux vecteurs ont la même direction, la même norme et le même sens, et B est commun.\n\n<b>Vérification par les coordonnées</b> : le milieu de [AC] est ((1+5)/2 ; (2+10)/2) = (3 ; 6), qui est bien B ✓" },
    { d:3, e:"Montrer que les milieux des côtés d'un quadrilatère quelconque forment un parallélogramme.", r:"Démonstration (hors programme mais classique)",
      c:"Soit ABCD un quadrilatère, et I, J, K, L les milieux respectifs de [AB], [BC], [CD], [DA].\n\nDans le triangle ABC, I est le milieu de [AB] et J celui de [BC].\n\nD'après le théorème des milieux, IJ⃗ = (1/2)AC⃗.\n\nDe même, dans le triangle ACD, K milieu de [CD] et L milieu de [DA] donnent LK⃗ = (1/2)AC⃗.\n\nDonc IJ⃗ = LK⃗.\n\nCette égalité vectorielle signifie que IJKL est un parallélogramme." },
    { d:3, e:"Déterminer les coordonnées du point M tel que AM⃗ = 2AB⃗, avec A(1;1) et B(3;4).", r:"M(5 ; 7)",
      c:"AB⃗ = (2 ; 3).\n\n2AB⃗ = (4 ; 6).\n\nSoit M(x ; y). AM⃗ = (x − 1 ; y − 1).\n\nAM⃗ = 2AB⃗ donne x − 1 = 4, donc x = 5, et y − 1 = 6, donc y = 7.\n\nM(5 ; 7)." },
    { d:3, e:"Montrer que la somme des vecteurs d'un triangle fermé est nulle.", r:"Démonstration",
      c:"Soit ABC un triangle.\n\nOn considère AB⃗ + BC⃗ + CA⃗.\n\nPar Chasles : AB⃗ + BC⃗ = AC⃗.\n\nDonc AB⃗ + BC⃗ + CA⃗ = AC⃗ + CA⃗ = 0⃗ (car CA⃗ = −AC⃗).\n\nLa somme vaut bien 0⃗.\n\n<b>Interprétation</b> — Parcourir le triangle A → B → C → A ramène au point de départ : le déplacement total est nul." },
    { d:3, e:"Les points A(−2;3), B(2;5) et C(6;7) sont-ils alignés ? Si oui, donner la relation vectorielle.", r:"Oui, AC⃗ = 2AB⃗",
      c:"AB⃗ = (2 − (−2) ; 5 − 3) = (4 ; 2).\nAC⃗ = (6 − (−2) ; 7 − 3) = (8 ; 4).\n\nTest : 4 × 4 − 2 × 8 = 16 − 16 = 0.\n\nLes vecteurs sont colinéaires : les points sont alignés.\n\nDe plus, AC⃗ = (8 ; 4) = 2 × (4 ; 2) = 2AB⃗.\n\nDonc B est le milieu de [AC]." },
    { d:3, e:"Un avion vole 200 km vers le nord puis 150 km vers l'est. Quelle est la distance à vol d'oiseau jusqu'au point de départ ?", r:"250 km",
      c:"Modélisons : déplacement nord = (0 ; 200), est = (150 ; 0).\n\nSomme : (150 ; 200).\n\nNorme : √(150² + 200²) = √(22500 + 40000) = √62500 = 250 km.\n\n<i>C'est un triangle 150-200-250, multiple de 3-4-5.</i>" },
    { d:3, e:"Montrer que si I est le milieu de [AB], alors pour tout point M, MA⃗ + MB⃗ = 2MI⃗.", r:"Démonstration",
      c:"Appliquons Chasles en introduisant I.\n\nMA⃗ = MI⃗ + IA⃗\nMB⃗ = MI⃗ + IB⃗\n\nSomme : MA⃗ + MB⃗ = MI⃗ + IA⃗ + MI⃗ + IB⃗ = 2MI⃗ + (IA⃗ + IB⃗).\n\nOr, I étant le milieu de [AB], on a IA⃗ + IB⃗ = 0⃗.\n\nDonc MA⃗ + MB⃗ = 2MI⃗ ✓\n\n<b>Application</b> — Cette relation sert à démontrer que les médianes d'un triangle sont concourantes." }
  ]
},
{
  id:"3e-statistiques", niveau:"3e", titre:"3e · Statistiques", temps:"20 min",
  resume:"Moyenne, médiane, quartiles, étendue, diagrammes, comparaison de séries.",
  lecons:[
    { titre:"Indicateurs statistiques", contenu:`
      <h3>1. Moyenne</h3>
      <div class="formula">moyenne = somme des valeurs / effectif total</div>
      <p>Avec des effectifs, on pondère : chaque valeur compte autant de fois que son effectif.</p>

      <h3>2. Médiane</h3>
      <p>La médiane partage la série en deux : au moins 50 % des valeurs lui sont inférieures ou égales.</p>
      <ul>
        <li>Effectif impair : la valeur du milieu de la liste ordonnée</li>
        <li>Effectif pair : la moyenne des deux valeurs centrales</li>
      </ul>
      <div class="box warn"><b>Il faut ordonner la série</b> — C'est l'étape qu'on oublie. Sans ordre croissant, la médiane n'a aucun sens.</div>

      <h3>3. Quartiles</h3>
      <p>Le premier quartile Q1 sépare les 25 % inférieurs ; le troisième Q3, les 75 % inférieurs. On les lit sur la liste ordonnée : Q1 est la valeur de rang ⌈n/4⌉ et Q3 celle de rang ⌈3n/4⌉.</p>
      <div class="formula">Écart interquartile = Q3 − Q1</div>
      <p>Il mesure la dispersion de la moitié centrale des données.</p>

      <h3>4. Étendue</h3>
      <div class="formula">étendue = valeur maximale − valeur minimale</div>
      <p>Elle ne dépend que des deux extrêmes, ce qui la rend sensible aux valeurs aberrantes.</p>

      <h3>5. Moyenne ou médiane ?</h3>
      <div class="box"><b>La différence essentielle</b> — La moyenne est tirée par les valeurs extrêmes, la médiane non. Pour des salaires ou des prix immobiliers, la médiane est plus représentative.</div>
      <p>Exemple : pour la série 1, 2, 3, 4, 100, la moyenne vaut 22 mais la médiane vaut 3.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Série : 7, 9, 11, 13, 15, 17, 19, 21.</p>
      <ul>
        <li><b>Moyenne</b> : (7+9+11+13+15+17+19+21)/8 = 112/8 = 14</li>
        <li><b>Médiane</b> : effectif pair, les 4e et 5e valeurs sont 13 et 15, donc (13+15)/2 = 14</li>
        <li><b>Étendue</b> : 21 − 7 = 14</li>
        <li><b>Q1</b> : rang 2, valeur 9. <b>Q3</b> : rang 6, valeur 17. Écart interquartile : 8.</li>
      </ul>
      <p><b>Interprétation :</b> moyenne et médiane égales à 14 : la répartition est régulière autour du centre.</p>
    ` },
    { titre:"Comparer et représenter", contenu:`
      <h3>1. Comparer deux séries</h3>
      <p>La démarche complète, en trois temps :</p>
      <ul>
        <li>Comparer les <b>positions</b> (moyennes ou médianes)</li>
        <li>Comparer les <b>dispersions</b> (étendues ou écarts interquartiles)</li>
        <li>Conclure en une phrase qui interprète les deux</li>
      </ul>
      <div class="box warn"><b>Ne jamais conclure sur une seule valeur</b> — Dire « la classe A est meilleure » sur la seule moyenne est insuffisant : il faut aussi regarder l'homogénéité.</div>

      <h3>2. Le diagramme en boîte</h3>
      <p>Il représente cinq valeurs : minimum, Q1, médiane, Q3, maximum. Il permet de comparer deux séries d'un seul coup d'œil.</p>
      <ul>
        <li>Une boîte longue = forte dispersion de la moitié centrale</li>
        <li>Une médiane décalée dans la boîte = distribution asymétrique</li>
      </ul>

      <h3>3. Effectifs cumulés croissants</h3>
      <p>À partir des effectifs cumulés, on lit la médiane et les quartiles par interpolation ou par lecture directe.</p>
      <div class="formula">Effectif total N : la médiane correspond à l'effectif cumulé N/2</div>

      <h3>4. Les autres représentations</h3>
      <ul>
        <li><b>Diagramme en bâtons</b> : pour des valeurs discrètes</li>
        <li><b>Histogramme</b> : pour des classes de valeurs continues. C'est l'<b>aire</b> qui est proportionnelle à l'effectif</li>
        <li><b>Diagramme circulaire</b> : pour montrer la part de chaque catégorie</li>
      </ul>
      <div class="box warn"><b>Attention à l'axe tronqué</b> — Un axe vertical qui ne part pas de zéro exagère les écarts. Vérifie toujours l'origine de l'axe avant d'interpréter.</div>

      <h3>5. Effet d'un décalage ou d'une homothétie</h3>
      <div class="formula">Si on ajoute k à toutes les valeurs :
— la moyenne augmente de k
— la médiane augmente de k
— l'étendue et l'écart interquartile ne changent pas

Si on multiplie toutes les valeurs par k :
— moyenne, médiane, étendue et quartiles sont multipliés par k</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Deux classes ont les résultats suivants. A : moyenne 12, écart interquartile 3. B : moyenne 12, écart interquartile 8.</p>
      <ul>
        <li>Même moyenne : le niveau moyen est identique</li>
        <li>L'écart interquartile de B est très supérieur</li>
      </ul>
      <p><b>Interprétation :</b> la classe A est homogène — la moitié centrale des élèves est regroupée dans un intervalle étroit. La classe B est hétérogène : les résultats sont très dispersés. Une moyenne identique masque deux situations très différentes, et cela a des conséquences pédagogiques opposées.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — les indicateurs statistiques, puis la comparaison de séries et les représentations.</div>`,
  exercices:[
    { d:1, e:"Calculer la moyenne de 8, 12, 10, 14, 6.", r:"10",
      c:"Somme : 8 + 12 + 10 + 14 + 6 = 50.\n\nEffectif : 5.\n\nMoyenne : 50/5 = 10." },
    { d:1, e:"Quelle est la médiane de 3, 7, 9, 12, 15 ?", r:"9",
      c:"Série ordonnée, effectif impair (5 valeurs).\n\nLa médiane est la 3e valeur : 9." },
    { d:1, e:"Quelle est l'étendue de 4, 9, 15, 7, 2 ?", r:"13",
      c:"Maximum 15, minimum 2.\n\nÉtendue : 15 − 2 = 13." },
    { d:1, e:"Quelle est la médiane de 2, 4, 6, 8 ?", r:"5",
      c:"Effectif pair : moyenne des deux valeurs centrales.\n\n(4 + 6)/2 = 5." },
    { d:1, e:"Un effectif de 5 sur 25 représente quelle fréquence ?", r:"0,2",
      c:"5/25 = 0,2 = 20 %." },
    { d:1, e:"Que vaut la somme de toutes les fréquences ?", r:"1",
      c:"Les fréquences couvrent l'ensemble de la population.\n\nLeur somme vaut 1, soit 100 %." },
    { d:1, e:"Calculer la moyenne de 12, 14, 16, 18, 20.", r:"16",
      c:"Somme : 12 + 14 + 16 + 18 + 20 = 80.\n\nMoyenne : 80/5 = 16." },
    { d:1, e:"Quelle est l'étendue de 10, 15, 12, 18, 20 ?", r:"10",
      c:"Maximum 20, minimum 10.\n\nÉtendue : 20 − 10 = 10." },
    { d:1, e:"Dans un tableau : 5 (coef 2), 10 (coef 3). Calculer la moyenne pondérée.", r:"8",
      c:"(5 × 2 + 10 × 3)/(2 + 3) = (10 + 30)/5 = 40/5 = 8." },
    { d:1, e:"Que mesure l'écart interquartile ?", r:"La dispersion de la moitié centrale",
      c:"L'écart interquartile vaut Q3 − Q1.\n\nIl mesure l'étendue de la moitié centrale des données, en ignorant les valeurs extrêmes." },
    { d:2, e:"Série : 5, 7, 8, 10, 12, 15. Calculer la médiane.", r:"9",
      c:"Effectif pair (6 valeurs).\n\nLes 3e et 4e valeurs sont 8 et 10.\n\nMédiane : (8 + 10)/2 = 9." },
    { d:2, e:"Série : 2, 4, 4, 6, 8, 10, 12. Calculer Q1 et Q3.", r:"Q1 = 4 et Q3 = 10",
      c:"Effectif : 7.\n\nQ1 : rang ⌈7/4⌉ = 2, valeur 4.\nQ3 : rang ⌈21/4⌉ = 6, valeur 10." },
    { d:2, e:"Une classe a 30 élèves. La moyenne des filles (18 élèves) est 13, celle des garçons est 11. Quelle est la moyenne générale ?", r:"12,2",
      c:"<b>Attention</b> — Les effectifs diffèrent, il faut pondérer.\n\nMoyenne : (18 × 13 + 12 × 11)/30\n= (234 + 132)/30\n= 366/30 = 12,2." },
    { d:2, e:"Série : 1, 2, 3, 4, 100. Calculer moyenne et médiane.", r:"Moyenne 22 et médiane 3",
      c:"Moyenne : (1+2+3+4+100)/5 = 110/5 = 22.\n\nMédiane : la 3e valeur, soit 3.\n\n<b>Interprétation</b> — La valeur 100 est aberrante : elle tire la moyenne très haut, mais la médiane reste stable à 3. C'est pourquoi la médiane est préférable pour les salaires." },
    { d:2, e:"Un tableau donne : 0 (effectif 5), 1 (effectif 10), 2 (effectif 5). Calculer la moyenne.", r:"1",
      c:"(0 × 5 + 1 × 10 + 2 × 5)/20\n= (0 + 10 + 10)/20\n= 20/20 = 1." },
    { d:2, e:"Une série a pour moyenne 12. On ajoute 3 à toutes les valeurs. Quelle est la nouvelle moyenne ?", r:"15",
      c:"Ajouter la même valeur à toutes les données augmente la moyenne de cette valeur.\n\n12 + 3 = 15.\n\n<b>Et l'étendue ?</b> Elle ne change pas : le décalage ne modifie pas la dispersion." },
    { d:2, e:"Série : 8, 12, 10, 14, 16. Calculer la moyenne et l'étendue.", r:"Moyenne 12 et étendue 8",
      c:"Moyenne : (8+12+10+14+16)/5 = 60/5 = 12.\n\nÉtendue : 16 − 8 = 8." },
    { d:2, e:"Deux séries ont la même moyenne et le même effectif. Peut-on dire qu'elles sont identiques ?", r:"Non",
      c:"La moyenne ne dit rien de la dispersion.\n\nExemple : (1, 5, 9) et (4, 5, 6) ont toutes deux une moyenne de 5, mais des dispersions très différentes (étendues 8 et 2)." },
    { d:2, e:"Pourquoi la médiane est-elle plus représentative que la moyenne pour les prix immobiliers ?", r:"À cause des valeurs extrêmes",
      c:"Quelques ventes très chères tirent la moyenne vers le haut.\n\nLa médiane indique le prix tel que la moitié des biens se vend moins cher : c'est plus représentatif du marché réel." },
    { d:2, e:"Dans un histogramme, qu'est-ce qui est proportionnel à l'effectif ?", r:"L'aire du rectangle",
      c:"C'est la règle de l'histogramme : c'est l'aire qui est proportionnelle à l'effectif, pas la hauteur.\n\nQuand les classes ont des largeurs différentes, seule l'aire est significative." },
    { d:2, e:"Une série a pour Q1 = 6 et Q3 = 14. Quel est l'écart interquartile ?", r:"8",
      c:"Écart interquartile : Q3 − Q1 = 14 − 6 = 8." },
    { d:3, e:"Montrer que si on multiplie toutes les valeurs par 2, la moyenne double.", r:"Démonstration",
      c:"Soit x₁, …, xₙ les valeurs et m leur moyenne.\n\nNouvelles valeurs : 2x₁, …, 2xₙ.\n\nNouvelle moyenne :\n(2x₁ + … + 2xₙ)/n = 2(x₁ + … + xₙ)/n = 2m ✓\n\n<b>L'étendue double aussi</b> : (2x_max − 2x_min) = 2(x_max − x_min)." },
    { d:3, e:"Deux classes ont une moyenne de 12. La première a un écart interquartile de 2, la seconde de 7. Comparer.", r:"La première est homogène, la seconde hétérogène",
      c:"Même moyenne : le niveau moyen est identique.\n\nMais l'écart interquartile de la première est de 2 : la moitié centrale des élèves s'étale sur 2 points seulement. Pour la seconde, elle s'étale sur 7 points.\n\n<b>Conséquence pédagogique</b> — Dans la première classe, une remédiation collective a du sens. Dans la seconde, il faut différencier : certains élèves ont besoin de soutien, d'autres d'approfondissement." },
    { d:3, e:"Série : 3, 5, 5, 7, 8, 9, 12, 15. Calculer Q1, la médiane et Q3.", r:"Q1 = 5, médiane = 7,5, Q3 = 12",
      c:"Effectif : 8.\n\nQ1 : rang ⌈8/4⌉ = 2, valeur 5.\nMédiane : moyenne des 4e et 5e valeurs, (7+8)/2 = 7,5.\nQ3 : rang ⌈24/4⌉ = 6, valeur 9.\n\nReprenons Q3 : ⌈3×8/4⌉ = ⌈6⌉ = 6, la 6e valeur est 9.\n\nDonc Q1 = 5, médiane = 7,5, Q3 = 9." },
    { d:3, e:"Expliquer pourquoi la somme des fréquences vaut toujours 1.", r:"Démonstration",
      c:"Soit n₁, …, nₖ les effectifs des k catégories, et N l'effectif total.\n\nPar définition de l'effectif total : n₁ + n₂ + … + nₖ = N.\n\nLa somme des fréquences :\n(n₁/N) + (n₂/N) + … + (nₖ/N)\n= (n₁ + n₂ + … + nₖ)/N\n= N/N = 1 ✓\n\nC'est une conséquence directe du fait que les catégories recouvrent toute la population." },
    { d:3, e:"Une entreprise compte 9 salariés à 1500 € et 1 directeur à 15000 €. Calculer la moyenne et la médiane. Laquelle est la plus représentative ?", r:"Moyenne 2850 € et médiane 1500 €",
      c:"Moyenne : (9 × 1500 + 15000)/10 = (13500 + 15000)/10 = 28500/10 = 2850 €.\n\nMédiane : effectif pair, les 5e et 6e valeurs sont toutes deux 1500 € (car il y a 9 salariés à ce montant).\nMédiane = 1500 €.\n\n<b>La médiane est plus représentative</b> : la moyenne est fortement tirée vers le haut par un seul salaire. Dire « le salaire moyen est 2850 € » donne une image fausse de l'entreprise : 9 salariés sur 10 gagnent 1500 €." },
    { d:3, e:"Une série a une moyenne de 15 et un écart interquartile de 4. Que peut-on dire des valeurs ?", r:"La moitié centrale des valeurs est dans un intervalle de largeur 4",
      c:"L'écart interquartile de 4 signifie que Q3 − Q1 = 4.\n\nLa moitié centrale des données (entre Q1 et Q3) s'étale sur 4 unités.\n\nPar exemple, on pourrait avoir Q1 = 12 et Q3 = 16 : la moitié centrale des valeurs est entre 12 et 16." },
    { d:3, e:"Un élève a une moyenne de 12 avec des notes allant de 4 à 20. Un autre a une moyenne de 12 avec des notes allant de 10 à 14. Qui a le plus progressé potentiellement ?", r:"Le premier, mais l'interprétation dépend du contexte",
      c:"Les deux ont la même moyenne, mais des profils très différents.\n\nLe premier a des résultats hétérogènes : il maîtrise certaines notions et en rate d'autres. Une remédiation ciblée peut le faire progresser vite.\n\nLe second est régulier : il maîtrise partiellement tout, sans point fort ni point faible marqué.\n\n<b>Le point important</b> — La moyenne seule ne permet pas de juger. C'est l'étendue qui révèle le profil d'apprentissage. Deux élèves avec la même moyenne peuvent avoir des besoins radicalement différents." },
    { d:3, e:"Série : 10, 12, 12, 14, 16, 18, 20, 22, 24, 26. Calculer la médiane et les quartiles.", r:"Médiane 17, Q1 = 12, Q3 = 23",
      c:"Effectif : 10.\n\n<b>Médiane</b> : moyenne des 5e et 6e valeurs, (16 + 18)/2 = 17.\n\n<b>Q1</b> : rang ⌈10/4⌉ = ⌈2,5⌉ = 3, valeur 12.\n\n<b>Q3</b> : rang ⌈30/4⌉ = ⌈7,5⌉ = 8, valeur 22.\n\nDonc Q1 = 12, médiane = 17, Q3 = 22.\n\nÉcart interquartile : 22 − 12 = 10." },
    { d:3, e:"Parmi 200 personnes, 45 % préfèrent la ville. Combien cela représente-t-il ?", r:"90 personnes",
      c:"45 % de 200 = 200 × 0,45 = 90.\n\n<b>Vérification par décomposition</b> : 10 % de 200 = 20, donc 40 % = 80, et 5 % = 10. Total : 90 ✓" },
    { d:3, e:"Deux séries ont les mêmes quartiles mais des moyennes différentes. Que peut-on en déduire ?", r:"La dispersion centrale est la même, mais la position diffère",
      c:"Mêmes quartiles signifie que la moitié centrale des données occupe le même intervalle dans les deux séries.\n\nMais des moyennes différentes indiquent que la répartition n'est pas la même : l'une peut avoir plus de valeurs extrêmes d'un côté, ou une distribution plus asymétrique.\n\n<b>Leçon</b> — Les indicateurs se complètent. Aucun ne suffit seul à décrire une série." },
    { d:3, e:"Une entreprise a un chiffre d'affaires trimestriel de 120, 150, 180 et 150 milliers d'euros. Quel est le pourcentage du meilleur trimestre ?", r:"30 %",
      c:"Total : 120 + 150 + 180 + 150 = 600.\n\nMeilleur trimestre : 180.\n\nPourcentage : 180/600 = 0,3 = 30 %." },
    { d:3, e:"Une série a une moyenne de 20 et une médiane de 15. Que peut-on dire de sa distribution ?", r:"Elle est asymétrique, tirée vers le haut",
      c:"La moyenne (20) est supérieure à la médiane (15).\n\nCela signifie que quelques valeurs très élevées tirent la moyenne vers le haut, alors que la moitié centrale des données reste plus basse.\n\nUne distribution symétrique aurait une moyenne proche de la médiane.\n\n<b>Exemple typique</b> — Les salaires : quelques très hauts revenus font monter la moyenne, tandis que le salaire médian reste modeste." }
  ]
}
];

window.MATHSLY_3E = { chapitres: TROISIEME_CHAPITRES, qcm: [] };
