/* =========================================================
   MATHSLY — Contenu de la classe de Quatrième (cycle 4)
   Chapitres : puissances · racine carrée · calcul littéral ·
               Pythagore · Thalès · cosinus · probabilités
   ========================================================= */
const QUATRIEME_CHAPITRES = [
{
  id:"4e-puissances", niveau:"4e", titre:"4e · Puissances et notation scientifique", temps:"20 min",
  resume:"Puissances d'exposants négatifs, formules, écriture scientifique.",
  lecons:[
    { titre:"Règles de calcul sur les puissances", contenu:`
      <h3>1. Rappel de la définition</h3>
      <div class="formula">aⁿ = a × a × … × a     (n facteurs)</div>
      <p>Exemple : 2⁵ = 32.</p>

      <h3>2. Les exposants négatifs</h3>
      <p>Un exposant négatif donne l'<b>inverse</b> de la puissance positive :</p>
      <div class="formula">a⁻ⁿ = 1 / aⁿ</div>
      <div class="formula">2⁻³ = 1/2³ = 1/8
10⁻² = 1/100 = 0,01</div>
      <div class="box warn"><b>Attention</b> — L'exposant négatif ne rend pas le résultat négatif. 2⁻³ = 1/8, qui est positif. C'est l'erreur la plus fréquente du chapitre.</div>

      <h3>3. Les trois formules fondamentales</h3>
      <div class="formula">aᵐ × aⁿ = aᵐ⁺ⁿ       (produit : on additionne)
aᵐ / aⁿ = aᵐ⁻ⁿ       (quotient : on soustrait)
(aᵐ)ⁿ = aᵐˣⁿ         (puissance : on multiplie)</div>

      <h3>4. Situation avec des nombres négatifs</h3>
      <div class="formula">(−2)³ = −8        (puissance impaire : négatif)
(−2)⁴ = 16        (puissance paire : positif)
−2⁴ = −16         (le carré ne porte que sur 2)</div>
      <div class="box warn"><b>Les parenthèses changent tout</b> — (−2)⁴ = 16 mais −2⁴ = −16. Dans le premier cas, le signe fait partie de la base ; dans le second, il reste extérieur.</div>

      <h3>5. Ce qu'il ne faut pas faire</h3>
      <div class="box warn"><b>Aucune formule pour la somme</b> — aᵐ + aⁿ ne se simplifie pas. 2³ + 2⁵ = 8 + 32 = 40, et non 2⁸ = 256.</div>
      <p>De même, aⁿ × bⁿ = (ab)ⁿ, mais aⁿ + bⁿ ne se factorise pas.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Simplifier C = (3⁴ × 3⁻²) / 3³.</p>
      <ul>
        <li>Numérateur : 3⁴ × 3⁻² = 3⁴⁻² = 3²</li>
        <li>Quotient : 3² / 3³ = 3²⁻³ = 3⁻¹</li>
        <li>Donc C = 1/3</li>
      </ul>
      <p><b>Vérification :</b> (81 × 1/9) / 27 = 9/27 = 1/3 ✓</p>
    ` },
    { titre:"Écriture scientifique et applications", contenu:`
      <h3>1. La notation scientifique</h3>
      <div class="formula">a × 10ⁿ        avec 1 ≤ a &lt; 10 et n entier</div>
      <p>Un seul chiffre avant la virgule, et il ne doit pas être 0.</p>

      <h3>2. Convertir</h3>
      <div class="formula">45 000 = 4,5 × 10⁴
0,000 72 = 7,2 × 10⁻⁴</div>
      <div class="box"><b>Le sens de l'exposant</b> — Pour un grand nombre, l'exposant est positif. Pour un nombre plus petit que 1, il est négatif.</div>

      <h3>3. Opérations en écriture scientifique</h3>
      <div class="formula">(a × 10ᵐ) × (b × 10ⁿ) = (a × b) × 10ᵐ⁺ⁿ
(a × 10ᵐ) / (b × 10ⁿ) = (a / b) × 10ᵐ⁻ⁿ</div>
      <p>Il faut ensuite vérifier que le résultat est bien en notation scientifique. Si a × b ≥ 10, il faut retravailler : 4 × 10³ × 5 × 10² = 20 × 10⁵ = 2 × 10⁶.</p>

      <h3>4. Comparer des nombres</h3>
      <p>On compare d'abord les exposants, puis les premiers facteurs :</p>
      <div class="formula">5 × 10⁶ &gt; 9 × 10⁵     car 6 &gt; 5</div>
      <div class="box"><b>Utilité concrète</b> — L'écriture scientifique permet de comparer instantanément des nombres comme la distance Terre-Soleil (1,5 × 10⁸ km) et le rayon d'un atome (5,3 × 10⁻¹¹ m). Sans elle, on ne saurait pas par où commencer.</div>

      <h3>5. Applications en sciences</h3>
      <p>Les ordres de grandeur s'écrivent en notation scientifique :</p>
      <ul>
        <li>Vitesse de la lumière : 3 × 10⁸ m/s</li>
        <li>Masse d'un électron : 9,1 × 10⁻³¹ kg</li>
        <li>Population mondiale : environ 8 × 10⁹</li>
      </ul>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Un grain de sable a une masse de 2 × 10⁻⁵ kg. Quelle est la masse de 5 × 10⁷ grains ?</p>
      <ul>
        <li>On multiplie : (2 × 10⁻⁵) × (5 × 10⁷)</li>
        <li>= (2 × 5) × 10⁻⁵⁺⁷ = 10 × 10²</li>
        <li>= 1 × 10³ = 1000 kg</li>
      </ul>
      <p><b>En notation scientifique :</b> 1 × 10³ kg, soit une tonne.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — les règles de calcul sur les puissances, puis la notation scientifique et ses applications.</div>`,
  exercices:[
    { d:1, e:"Calculer 2⁶.", r:"64",
      c:"2⁶ = 2 × 2 × 2 × 2 × 2 × 2 = 64." },
    { d:1, e:"Que vaut 4⁻² ?", r:"1/16",
      c:"Un exposant négatif donne l'inverse.\n\n4⁻² = 1/4² = 1/16." },
    { d:1, e:"Simplifier 5³ × 5⁴.", r:"5⁷",
      c:"Même base : on additionne les exposants.\n\n5³⁺⁴ = 5⁷." },
    { d:1, e:"Simplifier 7⁹ / 7⁵.", r:"7⁴",
      c:"Même base : on soustrait les exposants.\n\n7⁹⁻⁵ = 7⁴." },
    { d:1, e:"Simplifier (3²)⁵.", r:"3¹⁰",
      c:"Puissance de puissance : on multiplie les exposants.\n\n3²ˣ⁵ = 3¹⁰." },
    { d:1, e:"Que vaut 10⁻³ ?", r:"0,001",
      c:"10⁻³ = 1/10³ = 1/1000 = 0,001." },
    { d:1, e:"Écrire 30 000 en notation scientifique.", r:"3 × 10⁴",
      c:"On place la virgule après le 3 : 3,0000.\n\nDéplacement de 4 rangs vers la gauche, donc exposant +4.\n\n3 × 10⁴." },
    { d:1, e:"Calculer (−3)².", r:"9",
      c:"(−3)² = (−3) × (−3) = 9.\n\nUne puissance paire d'un nombre négatif est positive." },
    { d:1, e:"Que vaut 6⁰ ?", r:"1",
      c:"Tout nombre non nul élevé à la puissance 0 vaut 1." },
    { d:1, e:"Écrire 0,004 en notation scientifique.", r:"4 × 10⁻³",
      c:"On place la virgule après le 4 : 4,0.\n\nDéplacement de 3 rangs vers la droite, donc exposant −3.\n\n4 × 10⁻³." },
    { d:2, e:"Calculer (−2)³.", r:"−8",
      c:"(−2)³ = (−2) × (−2) × (−2).\n\n(−2) × (−2) = 4, puis 4 × (−2) = −8.\n\nUne puissance impaire d'un nombre négatif est négative." },
    { d:2, e:"Calculer −2³.", r:"−8",
      c:"Ici, le carré ne porte que sur 2 : on calcule d'abord 2³ = 8, puis on applique le signe moins.\n\n−2³ = −8.\n\n<b>Attention</b> — (−2)³ = −8 aussi, mais pour une raison différente. La différence apparaît avec les puissances paires : (−2)² = 4 mais −2² = −4." },
    { d:2, e:"Simplifier (2³ × 2⁻⁵) / 2⁻¹.", r:"2⁻¹ = 1/2",
      c:"Numérateur : 2³ × 2⁻⁵ = 2³⁻⁵ = 2⁻².\n\nQuotient : 2⁻² / 2⁻¹ = 2⁻²⁻⁽⁻¹⁾ = 2⁻²⁺¹ = 2⁻¹.\n\nRésultat : 2⁻¹ = 1/2." },
    { d:2, e:"Calculer (2 × 10³) × (4 × 10⁵).", r:"8 × 10⁸",
      c:"On regroupe : (2 × 4) × (10³ × 10⁵).\n\n= 8 × 10³⁺⁵ = 8 × 10⁸.\n\nVérification : 2000 × 400 000 = 800 000 000 ✓" },
    { d:2, e:"Simplifier 3² × 3⁻².", r:"1",
      c:"3² × 3⁻² = 3²⁻² = 3⁰ = 1.\n\n<b>Interprétation</b> — Multiplier un nombre par son inverse donne toujours 1." },
    { d:2, e:"Comparer 3 × 10⁷ et 8 × 10⁶.", r:"3 × 10⁷ > 8 × 10⁶",
      c:"On compare les exposants : 7 &gt; 6.\n\nDonc 3 × 10⁷ &gt; 8 × 10⁶, même si 3 &lt; 8.\n\nVérification : 30 000 000 &gt; 8 000 000 ✓" },
    { d:2, e:"Calculer (5 × 10⁻³) / (2 × 10⁻⁵).", r:"250",
      c:"On sépare : (5/2) × 10⁻³⁻⁽⁻⁵⁾ = 2,5 × 10².\n\n= 250.\n\nVérification : 0,005 ÷ 0,00002 = 250 ✓" },
    { d:2, e:"Simplifier (2⁴)³ / 2⁵.", r:"2⁷ = 128",
      c:"Numérateur : (2⁴)³ = 2¹².\n\nQuotient : 2¹² / 2⁵ = 2⁷ = 128." },
    { d:2, e:"Que vaut (−1)¹⁰⁰ ?", r:"1",
      c:"Une puissance paire de (−1) vaut 1, car les signes négatifs s'annulent deux à deux.\n\n(−1)¹⁰⁰ = 1." },
    { d:2, e:"Un grain de riz pèse environ 2 × 10⁻⁵ kg. Quelle est la masse d'un million de grains ?", r:"20 kg",
      c:"Un million = 10⁶.\n\nMasse : (2 × 10⁻⁵) × 10⁶ = 2 × 10⁻⁵⁺⁶ = 2 × 10¹ = 20 kg." },
    { d:2, e:"Écrire 0,000 000 45 en notation scientifique.", r:"4,5 × 10⁻⁷",
      c:"On place la virgule après le 4 : 4,5.\n\nComptons les déplacements vers la droite : de 0,00000045 à 4,5, il y a 7 rangs.\n\n4,5 × 10⁻⁷." },
    { d:2, e:"Simplifier 10⁵ × 10⁻⁵ × 10³.", r:"1000",
      c:"Somme des exposants : 5 − 5 + 3 = 3.\n\n10³ = 1000." },
    { d:3, e:"Calculer (3 × 10⁴)².", r:"9 × 10⁸",
      c:"(3 × 10⁴)² = 3² × (10⁴)² = 9 × 10⁸.\n\nVérification : 30 000² = 900 000 000 ✓" },
    { d:3, e:"La distance Terre-Lune est de 3,84 × 10⁵ km. Combien de temps met la lumière pour la parcourir, à 3 × 10⁵ km/s ?", r:"1,28 seconde",
      c:"temps = distance ÷ vitesse\n= (3,84 × 10⁵) / (3 × 10⁵)\n= (3,84 / 3) × 10⁰\n= 1,28 seconde.\n\nLa lumière met environ 1,3 seconde pour aller de la Terre à la Lune." },
    { d:3, e:"Simplifier (6 × 10⁵) ÷ (2 × 10⁻³).", r:"3 × 10⁸",
      c:"(6/2) × 10⁵⁻⁽⁻³⁾ = 3 × 10⁵⁺³ = 3 × 10⁸.\n\nVérification : 600 000 ÷ 0,002 = 300 000 000 ✓" },
    { d:3, e:"Un atome a un rayon de 1,2 × 10⁻¹⁰ m. Combien d'atomes alignés sur 1 m ?", r:"Environ 8,3 × 10⁹",
      c:"<b>Attention</b> : il faut utiliser le diamètre, pas le rayon.\n\ndiamètre = 2 × 1,2 × 10⁻¹⁰ = 2,4 × 10⁻¹⁰ m.\n\nNombre d'atomes : 1 / (2,4 × 10⁻¹⁰) = (1/2,4) × 10¹⁰ ≈ 0,417 × 10¹⁰.\n\nSoit environ 4,2 × 10⁹ atomes.\n\n<i>Note : si l'énoncé donne le rayon et demande combien de rayons tiennent sur 1 m, la réponse serait 8,3 × 10⁹.</i>" },
    { d:3, e:"Montrer que 10³ × 10⁻³ = 1 sans utiliser la formule des exposants.", r:"Démonstration",
      c:"10³ = 1000.\n10⁻³ = 1/1000 = 0,001.\n\nProduit : 1000 × 0,001 = 1.\n\n<b>Avec la formule</b> : 10³ × 10⁻³ = 10³⁻³ = 10⁰ = 1. Les deux méthodes donnent le même résultat." },
    { d:3, e:"Calculer 2¹⁰. Comparer avec 10³.", r:"1024 > 1000",
      c:"2¹⁰ = 1024.\n\nOr 10³ = 1000.\n\nDonc 2¹⁰ &gt; 10³.\n\n<b>Repère utile</b> — 2¹⁰ ≈ 10³ : c'est une approximation courante en informatique, où l'on parle de « kilo-octets » (1024 octets)." },
    { d:3, e:"La masse de la Terre est 6 × 10²⁴ kg et celle d'un homme 8 × 10¹ kg. Combien d'hommes faudrait-il pour égaler la masse de la Terre ?", r:"Environ 7,5 × 10²²",
      c:"(6 × 10²⁴) / (8 × 10¹) = (6/8) × 10²⁴⁻¹ = 0,75 × 10²³ = 7,5 × 10²².\n\nIl faudrait environ 75 milliards de milliards d'hommes.\n\nC'est évidemment impossible : ce calcul montre simplement l'ordre de grandeur de la masse terrestre." },
    { d:3, e:"Simplifier (a³)⁻² × a⁵.", r:"a⁻¹ = 1/a",
      c:"(a³)⁻² = a³ˣ⁽⁻²⁾ = a⁻⁶.\n\nPuis a⁻⁶ × a⁵ = a⁻⁶⁺⁵ = a⁻¹.\n\nRésultat : a⁻¹ = 1/a." },
    { d:3, e:"Le volume d'un cube est V = c³. Si c = 2 × 10⁻⁴ m, quel est le volume ?", r:"8 × 10⁻¹² m³",
      c:"V = (2 × 10⁻⁴)³ = 2³ × (10⁻⁴)³ = 8 × 10⁻¹² m³." },
    { d:3, e:"Comparer 2⁻³ et 3⁻².", r:"2⁻³ < 3⁻²",
      c:"2⁻³ = 1/8 = 0,125.\n3⁻² = 1/9 ≈ 0,111.\n\nOr 0,125 &gt; 0,111.\n\nDonc 2⁻³ &gt; 3⁻².\n\nVérifions autrement : 1/8 &gt; 1/9 car 8 &lt; 9 (la fonction inverse est décroissante sur les positifs)." },
    { d:3, e:"Un disque dur a une capacité de 1 To (10¹² octets). Combien de fichiers de 2 × 10⁶ octets peut-il contenir ?", r:"Environ 5 × 10⁵ fichiers",
      c:"Nombre de fichiers : 10¹² / (2 × 10⁶) = (1/2) × 10¹²⁻⁶ = 0,5 × 10⁶ = 5 × 10⁵.\n\nSoit 500 000 fichiers." },
    { d:3, e:"Le rayon de l'Univers observable est d'environ 4,4 × 10²⁶ m. Exprimer cette distance en années-lumière, sachant qu'une année-lumière vaut 9,5 × 10¹⁵ m.", r:"Environ 4,6 × 10¹⁰ années-lumière",
      c:"(4,4 × 10²⁶) / (9,5 × 10¹⁵) = (4,4/9,5) × 10²⁶⁻¹⁵ ≈ 0,463 × 10¹¹ ≈ 4,6 × 10¹⁰.\n\nLe rayon de l'Univers observable est donc d'environ 46 milliards d'années-lumière.\n\n<b>Note</b> — L'âge de l'Univers est d'environ 13,8 milliards d'années. Le rayon observable est plus grand à cause de l'expansion de l'Univers." }
  ]
},
{
  id:"4e-racine", niveau:"4e", titre:"4e · Racine carrée", temps:"18 min",
  resume:"Définition, propriétés, simplification, applications géométriques.",
  lecons:[
    { titre:"Définition et propriétés", contenu:`
      <h3>1. Définition</h3>
      <p>La racine carrée d'un nombre positif a est le nombre positif dont le carré vaut a :</p>
      <div class="formula">√a = b   ⟺   b² = a et b ≥ 0</div>
      <p>Exemples : √9 = 3, √16 = 4, √0 = 0.</p>
      <div class="box warn"><b>La racine carrée donne toujours un résultat positif</b> — √9 = 3 et non −3, même si (−3)² = 9 également. C'est une convention essentielle.</div>

      <h3>2. Un nombre négatif n'a pas de racine carrée</h3>
      <p>Comme un carré est toujours positif ou nul, il n'existe aucun nombre dont le carré soit négatif. Donc √(−4) n'existe pas.</p>
      <div class="formula">√a n'existe que si a ≥ 0</div>

      <h3>3. Les carrés parfaits à connaître</h3>
      <div class="formula">1² = 1        √1 = 1
2² = 4        √4 = 2
3² = 9        √9 = 3
4² = 16       √16 = 4
5² = 25       √25 = 5
6² = 36       √36 = 6
7² = 49       √49 = 7
8² = 64       √64 = 8
9² = 81       √81 = 9
10² = 100     √100 = 10
11² = 121     √121 = 11
12² = 144     √144 = 12</div>

      <h3>4. Les propriétés sur les produits et quotients</h3>
      <div class="formula">√(ab) = √a × √b        (pour a, b ≥ 0)
√(a/b) = √a / √b        (pour a ≥ 0 et b &gt; 0)</div>
      <div class="box warn"><b>Ces propriétés ne marchent PAS pour la somme</b> — √(a+b) n'est pas √a + √b. Vérification : √(9+16) = √25 = 5, mais √9 + √16 = 3 + 4 = 7.</div>

      <h3>5. Simplifier une racine carrée</h3>
      <p>On fait apparaître un carré parfait sous la racine :</p>
      <div class="formula">√48 = √(16 × 3) = 4√3
√75 = √(25 × 3) = 5√3
√200 = √(100 × 2) = 10√2</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Simplifier √18 + √50.</p>
      <ul>
        <li>√18 = √(9 × 2) = 3√2</li>
        <li>√50 = √(25 × 2) = 5√2</li>
        <li>Somme : 3√2 + 5√2 = 8√2</li>
      </ul>
      <p><b>Remarque :</b> on peut additionner des racines <b>seulement</b> si elles ont le même contenu sous la racine.</p>
    ` },
    { titre:"Applications géométriques", contenu:`
      <h3>1. Le lien avec Pythagore</h3>
      <p>La racine carrée apparaît naturellement quand on cherche la longueur d'un côté :</p>
      <div class="formula">Si c² = 25, alors c = √25 = 5</div>
      <p>C'est l'usage le plus fréquent de la racine carrée au collège.</p>

      <h3>2. Trouver une longueur exacte</h3>
      <p>Souvent, le résultat n'est pas un entier. On le laisse alors sous forme exacte avec une racine, ou on donne une valeur approchée.</p>
      <div class="formula">c² = 2, donc c = √2 ≈ 1,414</div>
      <div class="box"><b>Exact ou approché ?</b> — √2 est la valeur exacte. 1,414 est une valeur approchée. En mathématiques, on privilégie la forme exacte, puis on donne éventuellement une valeur approchée.</div>

      <h3>3. Encadrer une racine carrée</h3>
      <p>Pour encadrer √a entre deux entiers, on cherche les carrés parfaits qui l'entourent :</p>
      <div class="formula">36 &lt; 40 &lt; 49
√36 &lt; √40 &lt; √49
6 &lt; √40 &lt; 7</div>
      <div class="box"><b>Méthode</b> — Cette technique permet de vérifier un calcul à la calculatrice : si tu trouves 6,32 pour √40, l'encadrement confirme que c'est cohérent.</div>

      <h3>4. Distance entre deux points</h3>
      <p>Dans un repère, la distance entre A(x₁ ; y₁) et B(x₂ ; y₂) se calcule avec Pythagore :</p>
      <div class="formula">AB = √((x₂ − x₁)² + (y₂ − y₁)²)</div>
      <p>Exemple : A(0;0) et B(3;4) donnent AB = √(9 + 16) = √25 = 5.</p>

      <h3>5. Diagonal d'un carré</h3>
      <p>Pour un carré de côté c, la diagonale vaut c√2 (par Pythagore).</p>
      <div class="formula">c² + c² = 2c², donc la diagonale vaut √(2c²) = c√2</div>
      <div class="box"><b>Résultat classique</b> — La diagonale d'un carré de côté 1 vaut √2 ≈ 1,414. C'est la première démonstration historique que √2 existe géométriquement.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Un triangle rectangle a des côtés de l'angle droit de 5 cm et 7 cm. Quelle est l'hypoténuse ?</p>
      <ul>
        <li>Par Pythagore : h² = 5² + 7² = 25 + 49 = 74</li>
        <li>Donc h = √74</li>
      </ul>
      <p><b>Valeur exacte :</b> √74 cm. <b>Valeur approchée :</b> √74 ≈ 8,6 cm.</p>
      <p><b>Encadrement :</b> 64 &lt; 74 &lt; 81, donc 8 &lt; √74 &lt; 9 ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — la définition et les propriétés, puis les applications géométriques avec Pythagore.</div>`,
  exercices:[
    { d:1, e:"Calculer √25.", r:"5",
      c:"5² = 25 et 5 ≥ 0, donc √25 = 5.\n\nOn ne donne que la valeur positive." },
    { d:1, e:"Calculer √100.", r:"10",
      c:"10² = 100, donc √100 = 10." },
    { d:1, e:"Calculer √0.", r:"0",
      c:"0² = 0, donc √0 = 0." },
    { d:1, e:"Calculer √1.", r:"1",
      c:"1² = 1, donc √1 = 1." },
    { d:1, e:"√(−9) existe-t-il ?", r:"Non",
      c:"Un carré est toujours positif ou nul.\n\nIl n'existe aucun nombre dont le carré vaut −9.\n\nDonc √(−9) n'existe pas." },
    { d:1, e:"Calculer √4 × √9.", r:"6",
      c:"√4 = 2 et √9 = 3.\n\nDonc 2 × 3 = 6.\n\nOn peut aussi écrire directement √36 = 6 ✓" },
    { d:1, e:"Calculer (√7)².", r:"7",
      c:"Par définition, (√a)² = a pour tout a ≥ 0.\n\nDonc (√7)² = 7." },
    { d:1, e:"Calculer √49.", r:"7",
      c:"7² = 49, donc √49 = 7." },
    { d:1, e:"Calculer √144.", r:"12",
      c:"12² = 144, donc √144 = 12." },
    { d:1, e:"Simplifier √9x².", r:"3x",
      c:"On utilise √(ab) = √a × √b.\n\n√9 × √(x²) = 3 × x = 3x (pour x ≥ 0).\n\n<b>Remarque</b> : si x pouvait être négatif, il faudrait écrire 3|x|." },
    { d:2, e:"Simplifier √50.", r:"5√2",
      c:"On cherche un carré parfait dans 50 : 50 = 25 × 2.\n\n√50 = √25 × √2 = 5√2.\n\nVérification : 5√2 ≈ 7,071 et √50 ≈ 7,071 ✓" },
    { d:2, e:"Simplifier √72.", r:"6√2",
      c:"72 = 36 × 2.\n\n√72 = √36 × √2 = 6√2." },
    { d:2, e:"Calculer √3 × √12.", r:"6",
      c:"√3 × √12 = √(3 × 12) = √36 = 6.\n\n<b>Méthode alternative</b> : √12 = 2√3, donc √3 × 2√3 = 2 × 3 = 6 ✓" },
    { d:2, e:"Encadrer √30 entre deux entiers consécutifs.", r:"5 < √30 < 6",
      c:"On cherche les carrés parfaits autour de 30 :\n25 &lt; 30 &lt; 36.\n\nDonc √25 &lt; √30 &lt; √36, soit 5 &lt; √30 &lt; 6.\n\nPlus précisément, √30 ≈ 5,477." },
    { d:2, e:"Simplifier √8 + √18.", r:"5√2",
      c:"√8 = √(4×2) = 2√2.\n√18 = √(9×2) = 3√2.\n\nSomme : 2√2 + 3√2 = 5√2." },
    { d:2, e:"Calculer √(16/25).", r:"4/5",
      c:"√(16/25) = √16 / √25 = 4/5." },
    { d:2, e:"Un carré a pour aire 49 cm². Quelle est la longueur de son côté ?", r:"7 cm",
      c:"A = c² = 49, donc c = √49 = 7 cm.\n\nLa racine carrée est exactement l'opération inverse du carré." },
    { d:2, e:"Un triangle rectangle a des côtés de 6 et 8 cm. Quelle est l'hypoténuse ?", r:"10 cm",
      c:"Par Pythagore : h² = 6² + 8² = 36 + 64 = 100.\n\nDonc h = √100 = 10 cm." },
    { d:2, e:"Calculer √2 × √8.", r:"4",
      c:"√2 × √8 = √(2 × 8) = √16 = 4." },
    { d:2, e:"Vrai ou faux : √(9 + 16) = √9 + √16.", r:"Faux",
      c:"√(9 + 16) = √25 = 5.\n\n√9 + √16 = 3 + 4 = 7.\n\nOr 5 ≠ 7 : l'égalité est fausse.\n\n<b>Rappel</b> — La propriété √(ab) = √a × √b ne fonctionne que pour un <b>produit</b>, jamais pour une somme." },
    { d:2, e:"Quelle est la longueur de la diagonale d'un carré de 3 cm de côté ?", r:"3√2 cm",
      c:"Par Pythagore : d² = 3² + 3² = 9 + 9 = 18.\n\nd = √18 = √(9 × 2) = 3√2 cm.\n\nValeur approchée : 3 × 1,414 ≈ 4,24 cm." },
    { d:3, e:"Simplifier √12 + √27 − √3.", r:"4√3",
      c:"√12 = √(4×3) = 2√3.\n√27 = √(9×3) = 3√3.\n\nCalcul : 2√3 + 3√3 − √3 = 4√3." },
    { d:3, e:"Un triangle rectangle a une hypoténuse de 13 cm et un côté de 5 cm. Quelle est la longueur du troisième côté ?", r:"12 cm",
      c:"Par Pythagore : 5² + c² = 13².\n\n25 + c² = 169\nc² = 144\nc = √144 = 12 cm." },
    { d:3, e:"Calculer (√5 − 1)(√5 + 1).", r:"4",
      c:"Identité remarquable : (a − b)(a + b) = a² − b².\n\n(√5)² − 1² = 5 − 1 = 4.\n\n<b>Astuce</b> — Cette technique (multiplier par la quantité conjuguée) est très utile pour simplifier des expressions avec radicaux." },
    { d:3, e:"Encadrer √150 entre deux entiers, puis donner une valeur approchée au dixième.", r:"12 < √150 < 13, valeur ≈ 12,2",
      c:"Carrés parfaits autour de 150 : 144 &lt; 150 &lt; 169.\n\nDonc 12 &lt; √150 &lt; 13.\n\nPour affiner : 12,2² = 148,84 et 12,3² = 151,29.\nOr 148,84 &lt; 150 &lt; 151,29, donc 12,2 &lt; √150 &lt; 12,3.\n\nValeur approchée : √150 ≈ 12,2." },
    { d:3, e:"Simplifier √(2 × 3) / √6.", r:"1",
      c:"√(2 × 3) = √6.\n\nDonc √6 / √6 = 1.\n\n<b>Sans simplification</b> : (√2 × √3)/√6 = √6/√6 = 1 ✓" },
    { d:3, e:"Montrer que √(a × b) = √a × √b pour a = 4 et b = 9.", r:"Démonstration par le calcul",
      c:"Membre de gauche : √(4 × 9) = √36 = 6.\n\nMembre de droite : √4 × √9 = 2 × 3 = 6.\n\nLes deux membres sont égaux : l'égalité est vérifiée sur cet exemple.\n\n<b>Attention</b> — Vérifier sur un exemple ne constitue pas une démonstration générale, mais ça permet de contrôler la validité de la formule." },
    { d:3, e:"Calculer la diagonale d'un rectangle de 8 cm sur 6 cm.", r:"10 cm",
      c:"Par Pythagore : d² = 8² + 6² = 64 + 36 = 100.\n\nd = √100 = 10 cm.\n\n<b>Remarque</b> — C'est le triangle 6-8-10, un multiple du triangle 3-4-5." },
    { d:3, e:"Simplifier √75 / √3.", r:"5",
      c:"√75 / √3 = √(75/3) = √25 = 5.\n\n<b>Méthode alternative</b> : √75 = 5√3, donc 5√3/√3 = 5 ✓" },
    { d:3, e:"Un terrain carré a une aire de 200 m². Quelle est la longueur de son côté (valeur exacte simplifiée) ?", r:"10√2 m",
      c:"c² = 200, donc c = √200.\n\n√200 = √(100 × 2) = 10√2 m.\n\nValeur approchée : 10 × 1,414 ≈ 14,1 m." },
    { d:3, e:"Trouver x tel que √x = 7.", r:"x = 49",
      c:"√x = 7 signifie que le nombre dont la racine carrée vaut 7 est 7² = 49.\n\nVérification : √49 = 7 ✓" },
    { d:3, e:"Comparer √10 et 3,2.", r:"√10 < 3,2",
      c:"3,2² = 10,24.\n\nOr 10 &lt; 10,24, donc √10 &lt; √10,24 = 3,2.\n\n<b>Méthode</b> — Pour comparer une racine et un décimal, on compare leurs carrés." },
    { d:3, e:"Simplifier (√3 + 1)².", r:"4 + 2√3",
      c:"Identité remarquable : (a + b)² = a² + 2ab + b².\n\n(√3)² + 2 × √3 × 1 + 1²\n= 3 + 2√3 + 1\n= 4 + 2√3.\n\nValeur approchée : 4 + 3,464 ≈ 7,464. Vérification : (1,732 + 1)² ≈ 2,732² ≈ 7,464 ✓" },
    { d:3, e:"Un carré a une diagonale de 8 cm. Quelle est l'aire du carré ?", r:"32 cm²",
      c:"<b>Méthode par Pythagore</b> : c² + c² = 8², donc 2c² = 64, soit c² = 32.\n\nL'aire vaut c² = 32 cm².\n\n<b>Astuce</b> — On n'a pas eu besoin de calculer le côté ! L'aire est directement c² = 32 cm²." },
    { d:3, e:"Montrer que √2 est compris entre 1,41 et 1,42.", r:"Démonstration",
      c:"Calculons les carrés :\n1,41² = 1,9881\n1,42² = 2,0164\n\nOr 1,9881 &lt; 2 &lt; 2,0164.\n\nDonc √1,9881 &lt; √2 &lt; √2,0164, soit 1,41 &lt; √2 &lt; 1,42.\n\nOn a encadré √2 à 10⁻² près." }
  ]
},
{
  id:"4e-calcul-litteral", niveau:"4e", titre:"4e · Calcul littéral et équations", temps
:"22 min",
  resume:"Développer, factoriser, identités remarquables, résoudre une équation.",
  lecons:[
    { titre:"Développer et factoriser", contenu:`
      <h3>1. Développer avec la double distributivité</h3>
      <p>Pour développer un produit de deux sommes, on distribue chaque terme du premier facteur sur chaque terme du second :</p>
      <div class="formula">(a + b)(c + d) = ac + ad + bc + bd</div>
      <div class="formula">(x + 3)(x + 5) = x² + 5x + 3x + 15 = x² + 8x + 15</div>
      <div class="box"><b>Contrôle par un cas particulier</b> — Avec x = 1 : (4)(6) = 24, et 1 + 8 + 15 = 24 ✓. Cette vérification permet de repérer une erreur de calcul.</div>

      <h3>2. Factoriser avec un facteur commun</h3>
      <p>On cherche ce qui se répète dans chaque terme :</p>
      <div class="formula">5x + 15 = 5(x + 3)
x² + 3x = x(x + 3)
(2x + 1)(x − 3) + (2x + 1)(x + 4) = (2x + 1)[(x − 3) + (x + 4)] = (2x + 1)(2x + 1)</div>
      <div class="box warn"><b>Le facteur commun peut être une parenthèse entière</b> — C'est le cas le plus fréquent en 4e, et celui qu'on ne voit pas. Repère les expressions identiques entre parenthèses.</div>

      <h3>3. Les trois identités remarquables</h3>
      <div class="formula">(a + b)² = a² + 2ab + b²
(a − b)² = a² − 2ab + b²
(a − b)(a + b) = a² − b²</div>
      <div class="box warn"><b>(a + b)² n'est JAMAIS égal à a² + b²</b> — C'est l'erreur la plus coûteuse du chapitre. Le terme 2ab est indispensable. Vérification numérique : (3+2)² = 25, et 3² + 2² = 13. Les deux résultats diffèrent.</div>

      <h3>4. Reconnaître une différence de carrés</h3>
      <p>Dès qu'on voit une soustraction de deux carrés, on factorise immédiatement :</p>
      <div class="formula">x² − 9 = (x − 3)(x + 3)
4x² − 25 = (2x − 5)(2x + 5)</div>

      <h3>5. Résoudre une équation produit nul</h3>
      <p>Un produit est nul si et seulement si l'un de ses facteurs est nul :</p>
      <div class="formula">(x − 2)(x + 5) = 0  ⟹  x = 2 ou x = −5</div>
      <div class="box"><b>Pourquoi c'est utile</b> — Factoriser permet de résoudre des équations qui ne se résolvent pas directement. C'est l'objectif principal de ce chapitre.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Résoudre (2x + 1)(x − 3) = 0.</p>
      <ul>
        <li>Un produit est nul si l'un des facteurs est nul</li>
        <li><b>Premier cas</b> : 2x + 1 = 0 donne x = −1/2</li>
        <li><b>Second cas</b> : x − 3 = 0 donne x = 3</li>
      </ul>
      <p><b>Solutions :</b> x = −1/2 ou x = 3.</p>
    ` },
    { titre:"Équations du premier degré", contenu:`
      <h3>1. Résoudre une équation</h3>
      <p>Une équation est une égalité qui contient une inconnue. Résoudre, c'est trouver toutes les valeurs qui rendent l'égalité vraie.</p>
      <p>Deux opérations sont permises : ajouter ou retrancher la même quantité des deux côtés, multiplier ou diviser par un même nombre non nul.</p>

      <h3>2. La méthode en trois étapes</h3>
      <div class="formula">Résoudre 5x − 7 = 3x + 9
Étape 1 — regrouper les x :  5x − 3x = 9 + 7
Étape 2 — réduire :          2x = 16
Étape 3 — diviser :          x = 8</div>
      <div class="box"><b>Toujours vérifier</b> — On remplace x par la valeur trouvée dans l'équation de départ : 5×8 − 7 = 33 et 3×8 + 9 = 33 ✓. Cette vérification prend dix secondes et évite bien des erreurs.</div>

      <h3>3. Équations avec des parenthèses</h3>
      <p>Il faut d'abord développer.</p>
      <div class="formula">3(x + 4) = 2x + 20
3x + 12 = 2x + 20
3x − 2x = 20 − 12
x = 8</div>

      <h3>4. Équations avec des fractions</h3>
      <p>On multiplie les deux membres par le dénominateur commun pour faire disparaître les fractions.</p>
      <div class="formula">x/3 + 2 = 5
x/3 = 3
x = 9</div>

      <h3>5. Les cas particuliers</h3>
      <ul>
        <li>Si on obtient 0 = 0 : l'équation est vraie pour tout x (infinité de solutions)</li>
        <li>Si on obtient 5 = 7 (faux) : aucune solution</li>
      </ul>
      <div class="box warn"><b>Cas rare mais à connaître</b> — Ces situations arrivent quand les x s'annulent des deux côtés. Il faut alors conclure explicitement, pas seulement s'arrêter.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Mettre un problème en équation : un père a 45 ans, son fils 15. Dans combien d'années le père aura-t-il le double de l'âge de son fils ?</p>
      <ul>
        <li>Soit x le nombre d'années</li>
        <li>Dans x années : père = 45 + x, fils = 15 + x</li>
        <li>Condition : 45 + x = 2(15 + x)</li>
        <li>45 + x = 30 + 2x, donc 45 − 30 = 2x − x, soit x = 15</li>
      </ul>
      <p><b>Vérification :</b> dans 15 ans, le père aura 60 ans et le fils 30. Or 60 = 2 × 30 ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — développer, factoriser et les identités remarquables, puis résoudre des équations du premier degré.</div>`,
  exercices:[
    { d:1, e:"Développer (x + 3)(x + 5).", r:"x² + 8x + 15",
      c:"x × x = x²\nx × 5 = 5x\n3 × x = 3x\n3 × 5 = 15\n\nTotal : x² + 5x + 3x + 15 = x² + 8x + 15.\n\nVérification avec x = 1 : 4 × 6 = 24 et 1 + 8 + 15 = 24 ✓" },
    { d:1, e:"Développer (x + 4)².", r:"x² + 8x + 16",
      c:"Identité remarquable : (a+b)² = a² + 2ab + b².\n\nx² + 2 × x × 4 + 16 = x² + 8x + 16.\n\n<b>Erreur classique</b> — Ce n'est pas x² + 16 ! Le terme 8x est indispensable." },
    { d:1, e:"Développer (x − 3)².", r:"x² − 6x + 9",
      c:"(a−b)² = a² − 2ab + b².\n\nx² − 2 × x × 3 + 9 = x² − 6x + 9." },
    { d:1, e:"Factoriser x² − 16.", r:"(x − 4)(x + 4)",
      c:"C'est une différence de carrés : a² − b² = (a−b)(a+b) avec a = x et b = 4.\n\nx² − 4² = (x−4)(x+4)." },
    { d:1, e:"Factoriser 3x + 12.", r:"3(x + 4)",
      c:"Le facteur commun est 3.\n\n3x + 12 = 3 × x + 3 × 4 = 3(x + 4)." },
    { d:1, e:"Résoudre x + 5 = 12.", r:"x = 7",
      c:"x = 12 − 5 = 7.\n\nVérification : 7 + 5 = 12 ✓" },
    { d:1, e:"Résoudre 3x = 21.", r:"x = 7",
      c:"On divise par 3 : x = 21/3 = 7.\n\nVérification : 3 × 7 = 21 ✓" },
    { d:1, e:"Développer 5(x − 2).", r:"5x − 10",
      c:"On distribue : 5 × x = 5x et 5 × (−2) = −10." },
    { d:1, e:"Résoudre 2x + 3 = 11.", r:"x = 4",
      c:"2x = 11 − 3 = 8.\nx = 4.\n\nVérification : 2×4 + 3 = 11 ✓" },
    { d:1, e:"Factoriser x² + 5x.", r:"x(x + 5)",
      c:"Facteur commun : x.\n\nx² + 5x = x × x + x × 5 = x(x + 5)." },
    { d:2, e:"Développer (2x + 1)(x − 4).", r:"2x² − 7x − 4",
      c:"2x × x = 2x²\n2x × (−4) = −8x\n1 × x = x\n1 × (−4) = −4\n\nTotal : 2x² − 8x + x − 4 = 2x² − 7x − 4.\n\nVérification avec x = 1 : 3 × (−3) = −9 et 2 − 7 − 4 = −9 ✓" },
    { d:2, e:"Factoriser (x + 2)(x − 5) + (x + 2)(x + 3).", r:"(x + 2)(2x − 2)",
      c:"Le facteur commun est (x + 2).\n\n= (x + 2)[(x − 5) + (x + 3)]\n= (x + 2)(2x − 2).\n\nOn peut factoriser encore : 2(x + 2)(x − 1)." },
    { d:2, e:"Résoudre (x − 3)(x + 7) = 0.", r:"x = 3 ou x = −7",
      c:"Un produit est nul si l'un des facteurs est nul.\n\nx − 3 = 0 donne x = 3.\nx + 7 = 0 donne x = −7." },
    { d:2, e:"Résoudre 5x − 3 = 2x + 12.", r:"x = 5",
      c:"5x − 2x = 12 + 3\n3x = 15\nx = 5.\n\nVérification : 25 − 3 = 22 et 10 + 12 = 22 ✓" },
    { d:2, e:"Développer (3x − 2)².", r:"9x² − 12x + 4",
      c:"(a−b)² = a² − 2ab + b² avec a = 3x et b = 2.\n\n(3x)² − 2 × 3x × 2 + 2²\n= 9x² − 12x + 4." },
    { d:2, e:"Factoriser 4x² − 9.", r:"(2x − 3)(2x + 3)",
      c:"Différence de carrés : (2x)² − 3².\n\n= (2x − 3)(2x + 3)." },
    { d:2, e:"Résoudre 3(x + 2) = 15.", r:"x = 3",
      c:"3x + 6 = 15\n3x = 9\nx = 3.\n\nVérification : 3(3 + 2) = 15 ✓" },
    { d:2, e:"Résoudre x² = 49.", r:"x = 7 ou x = −7",
      c:"x² − 49 = 0, soit (x−7)(x+7) = 0.\n\nDonc x = 7 ou x = −7.\n\n<b>Attention</b> — Une équation du type x² = a avec a &gt; 0 a <b>deux</b> solutions." },
    { d:2, e:"Un rectangle a une longueur de (x + 3) et une largeur de 4. Son périmètre est 26. Trouver x.", r:"x = 6",
      c:"Périmètre : 2 × ((x + 3) + 4) = 26.\n\n2(x + 7) = 26\n2x + 14 = 26\n2x = 12\nx = 6.\n\nVérification : longueur 9, largeur 4, périmètre 2 × 13 = 26 ✓" },
    { d:2, e:"Développer (x + 1)(x − 1).", r:"x² − 1",
      c:"Identité remarquable (a−b)(a+b) = a² − b².\n\n= x² − 1." },
    { d:2, e:"Résoudre 4x + 1 = 3x − 5.", r:"x = −6",
      c:"4x − 3x = −5 − 1\nx = −6.\n\nVérification : 4(−6) + 1 = −23 et 3(−6) − 5 = −23 ✓" },
    { d:3, e:"Résoudre (2x + 1)(x − 3) = 0.", r:"x = −1/2 ou x = 3",
      c:"Un produit est nul si l'un des facteurs est nul.\n\n2x + 1 = 0 donne x = −1/2.\nx − 3 = 0 donne x = 3.\n\nDeux solutions." },
    { d:3, e:"Factoriser x² + 6x + 9.", r:"(x + 3)²",
      c:"On reconnaît l'identité (a+b)² = a² + 2ab + b².\n\nx² + 2 × x × 3 + 3² = (x + 3)².\n\n<b>Vérification</b> : en développant (x+3)², on retrouve bien x² + 6x + 9 ✓" },
    { d:3, e:"Résoudre (x − 2)(x + 2) = 0.", r:"x = 2 ou x = −2",
      c:"Produit nul : x − 2 = 0 donne x = 2, et x + 2 = 0 donne x = −2.\n\n<b>Remarque</b> — C'est équivalent à x² − 4 = 0, soit x² = 4." },
    { d:3, e:"Montrer que (x + 5)² − (x + 3)² = 4x + 16.", r:"Démonstration",
      c:"On développe les deux termes.\n\n(x + 5)² = x² + 10x + 25.\n(x + 3)² = x² + 6x + 9.\n\nDifférence : (x² + 10x + 25) − (x² + 6x + 9) = 4x + 16.\n\n<b>Vérification avec x = 1</b> : 6² − 4² = 36 − 16 = 20, et 4 + 16 = 20 ✓" },
    { d:3, e:"Un père a 42 ans, son fils 12. Dans combien d'années le père aura-t-il le triple de l'âge du fils ?", r:"Dans 3 ans",
      c:"Soit x le nombre d'années.\n\n42 + x = 3(12 + x)\n42 + x = 36 + 3x\n42 − 36 = 3x − x\n6 = 2x\nx = 3.\n\nVérification : dans 3 ans, père = 45 ans et fils = 15 ans. Or 45 = 3 × 15 ✓" },
    { d:3, e:"Résoudre x² − 5x = 0.", r:"x = 0 ou x = 5",
      c:"On factorise par x : x(x − 5) = 0.\n\nProduit nul : x = 0 ou x − 5 = 0, donc x = 0 ou x = 5.\n\n<b>Ne pas diviser par x</b> — Ce serait perdre la solution x = 0." },
    { d:3, e:"Développer et réduire (2x − 3)(x + 4) − x(x + 1).", r:"x² + 4x − 12",
      c:"Premier produit : 2x² + 8x − 3x − 12 = 2x² + 5x − 12.\nSecond : x² + x.\n\nDifférence : 2x² + 5x − 12 − x² − x = x² + 4x − 12." },
    { d:3, e:"Un rectangle a une aire de 48 cm². Sa longueur dépasse sa largeur de 2 cm. Quelles sont ses dimensions ?", r:"6 cm et 8 cm",
      c:"Soit l la largeur. La longueur est l + 2.\n\nAire : l(l + 2) = 48\nl² + 2l − 48 = 0\n(l + 8)(l − 6) = 0\n\nDonc l = 6 ou l = −8.\n\nLa largeur étant positive, l = 6 cm et la longueur vaut 8 cm.\n\nVérification : 6 × 8 = 48 ✓" },
    { d:3, e:"Résoudre 2x/(x+1) = 3 avec x ≠ −1.", r:"x = −3",
      c:"On multiplie les deux membres par (x + 1), qui n'est pas nul.\n\n2x = 3(x + 1)\n2x = 3x + 3\n2x − 3x = 3\n−x = 3\nx = −3.\n\nVérification : 2(−3)/(−3+1) = −6/−2 = 3 ✓" },
    { d:3, e:"Montrer que la somme de trois entiers consécutifs est toujours divisible par 3.", r:"Démonstration",
      c:"Soit n, n+1, n+2 les trois entiers consécutifs.\n\nSomme : n + (n+1) + (n+2) = 3n + 3 = 3(n + 1).\n\nCette expression est de la forme 3 × k avec k = n + 1 entier.\n\nDonc la somme est divisible par 3.\n\n<b>Le rôle du calcul littéral</b> — C'est exactement ce que permet le calcul littéral : démontrer une propriété pour tous les entiers d'un coup, sans les tester un par un." },
    { d:3, e:"Résoudre 5 − 2(x − 3) = 3x + 1.", r:"x = 2",
      c:"5 − 2x + 6 = 3x + 1\n11 − 2x = 3x + 1\n11 − 1 = 3x + 2x\n10 = 5x\nx = 2.\n\nVérification : 5 − 2(2 − 3) = 5 + 2 = 7, et 3×2 + 1 = 7 ✓" },
    { d:3, e:"Factoriser (2x − 1)² − 9.", r:"(2x − 4)(2x + 2)",
      c:"Différence de carrés : (2x − 1)² − 3².\n\n= [(2x − 1) − 3][(2x − 1) + 3]\n= (2x − 4)(2x + 2).\n\nOn peut encore factoriser : 2(x − 2) × 2(x + 1) = 4(x − 2)(x + 1)." },
    { d:3, e:"Trouver le nombre qui, augmenté de son carré, vaut 30.", r:"5 ou −6",
      c:"Soit x le nombre.\n\nx + x² = 30\nx² + x − 30 = 0\n\nOn cherche deux nombres dont le produit vaut −30 et la somme 1 : ce sont 6 et −5.\n\nx² + x − 30 = (x + 6)(x − 5) = 0.\n\nDonc x = 5 ou x = −6.\n\nVérification : 5 + 25 = 30 ✓ et −6 + 36 = 30 ✓" },
    { d:3, e:"Montrer que (a + b)² − (a − b)² = 4ab.", r:"Démonstration",
      c:"(a + b)² = a² + 2ab + b².\n(a − b)² = a² − 2ab + b².\n\nDifférence : (a² + 2ab + b²) − (a² − 2ab + b²) = 4ab.\n\n<b>Vérification avec a = 3 et b = 2</b> : 5² − 1² = 24, et 4 × 3 × 2 = 24 ✓" },
    { d:3, e:"Un jardin rectangulaire a un périmètre de 40 m. Sa longueur dépasse sa largeur de 4 m. Quelles sont ses dimensions ?", r:"8 m et 12 m",
      c:"Soit l la largeur. La longueur est l + 4.\n\nPérimètre : 2(l + l + 4) = 40\n2(2l + 4) = 40\n2l + 4 = 20\n2l = 16\nl = 8.\n\nLargeur 8 m, longueur 12 m.\n\nVérification : 2 × (8 + 12) = 40 ✓" },
    { d:3, e:"Résoudre (x + 1)² = (x + 1).", r:"x = 0 ou x = −1",
      c:"On ne divise jamais par (x+1), ce serait perdre une solution. On factorise :\n\n(x + 1)² − (x + 1) = 0\n(x + 1)[(x + 1) − 1] = 0\n(x + 1)(x) = 0\n\nDonc x = 0 ou x = −1.\n\nVérification : pour x = 0, (1)² = 1 ✓ ; pour x = −1, 0² = 0 ✓" }
  ]
},
{
  id:"4e-pythagore", niveau:"4e", titre:"4e · Théorème de Pythagore", temps:"22 min",
  resume:"Calculer une longueur, réciproque, nature d'un triangle.",
  lecons:[
    { titre:"Le théorème et ses applications", contenu:`
      <h3>1. Le cadre d'utilisation</h3>
      <p>Le théorème de Pythagore ne s'applique que dans un <b>triangle rectangle</b>. Il relie les trois longueurs : le carré de l'hypoténuse égale la somme des carrés des deux autres côtés.</p>
      <div class="formula">Dans un triangle rectangle en A :
BC² = AB² + AC²</div>

      <h3>2. Repérer l'hypoténuse</h3>
      <p>L'hypoténuse est le côté <b>opposé à l'angle droit</b>. C'est toujours le plus long côté du triangle. Une fois qu'on l'a identifiée, les deux autres côtés sont les côtés de l'angle droit.</p>
      <div class="box warn"><b>Erreur classique</b> — Confondre l'hypoténuse avec un côté de l'angle droit. Repère toujours l'angle droit avant de commencer.</div>

      <h3>3. Calculer l'hypoténuse</h3>
      <p>On connaît les deux côtés de l'angle droit, on cherche l'hypoténuse : on <b>additionne</b> puis on prend la racine carrée.</p>
      <div class="formula">BC = √(AB² + AC²)</div>

      <h3>4. Calculer un côté de l'angle droit</h3>
      <p>On connaît l'hypoténuse et un côté, on cherche l'autre : on <b>soustrait</b>.</p>
      <div class="formula">AB = √(BC² − AC²)</div>
      <div class="box"><b>À retenir</b> — Addition quand on cherche l'hypoténuse, soustraction quand on cherche un côté de l'angle droit. C'est le test à faire dans sa tête avant tout calcul.</div>

      <h3>5. La réciproque</h3>
      <p>Elle sert à <b>démontrer</b> qu'un triangle est rectangle. On calcule séparément le carré du plus grand côté et la somme des carrés des deux autres, puis on compare :</p>
      <ul>
        <li>Les deux résultats sont <b>égaux</b> → le triangle est rectangle</li>
        <li>Ils sont <b>différents</b> → il ne l'est pas</li>
      </ul>
      <div class="box"><b>Rédaction attendue</b> — On écrit le calcul des deux membres séparément, puis on conclut : « les deux résultats sont égaux, donc d'après la réciproque du théorème de Pythagore, le triangle est rectangle ».</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>ABC est rectangle en A, avec AB = 3 cm et AC = 4 cm. Calculer BC.</p>
      <ul>
        <li>L'hypoténuse est BC, opposée à l'angle droit en A</li>
        <li>BC² = AB² + AC² = 9 + 16 = 25</li>
        <li>BC = √25 = 5 cm</li>
      </ul>
      <p><b>Le triangle 3-4-5</b> est le plus célèbre des triangles rectangles à côtés entiers.</p>
    ` },
    { titre:"Réciproque et applications", contenu:`
      <h3>1. Démontrer qu'un triangle est rectangle</h3>
      <p>La méthode complète, en trois étapes :</p>
      <ul>
        <li>Repérer le plus grand côté (candidat hypoténuse)</li>
        <li>Calculer séparément : le carré du plus grand côté, puis la somme des carrés des deux autres</li>
        <li>Comparer les deux résultats et conclure</li>
      </ul>
      <div class="box warn"><b>Comparer, pas calculer une égalité</b> — On calcule les deux membres séparément <b>avant</b> de les comparer. Écrire directement une égalité revient à supposer ce qu'on veut démontrer.</div>

      <h3>2. Le cas du triangle non rectangle</h3>
      <p>Si les deux résultats diffèrent, le triangle n'est pas rectangle. Le résultat permet même de dire s'il est « obtusangle » ou « acutangle » :</p>
      <ul>
        <li>Si plus grand côté² &gt; somme des carrés → angle obtus</li>
        <li>Si plus grand côté² &lt; somme des carrés → tous les angles sont aigus</li>
      </ul>

      <h3>3. Calculer avec des racines carrées</h3>
      <p>Souvent, le résultat n'est pas un entier. On garde la valeur exacte avec une racine, ou on donne une valeur approchée.</p>
      <div class="formula">Si c² = 50, alors c = √50 = 5√2 (exact) ≈ 7,07 (approché)</div>

      <h3>4. Triangle rectangle isocèle</h3>
      <p>Si les deux côtés de l'angle droit mesurent c, alors :</p>
      <div class="formula">hypoténuse² = c² + c² = 2c²
hypoténuse = c√2</div>
      <div class="box"><b>Résultat à connaître</b> — La diagonale d'un carré de côté c vaut c√2. C'est une application directe.</div>

      <h3>5. Situations concrètes</h3>
      <p>Pythagore sert à calculer des distances qu'on ne peut pas mesurer directement : diagonale d'un écran, hauteur d'un toit, distance entre deux points d'un plan.</p>
      <div class="box"><b>Attention à l'énoncé</b> — Dans un problème concret, il faut souvent <b>d'abord identifier le triangle rectangle</b> caché dans la figure. Trace-le, c'est souvent l'étape décisive.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Un triangle a pour côtés 6, 8 et 10 cm. Est-il rectangle ?</p>
      <ul>
        <li>Le plus grand côté est 10</li>
        <li>10² = 100</li>
        <li>6² + 8² = 36 + 64 = 100</li>
        <li>Les deux résultats sont égaux</li>
      </ul>
      <p><b>Conclusion :</b> d'après la réciproque du théorème de Pythagore, le triangle est rectangle.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — le théorème et le calcul de longueurs, puis la réciproque et ses applications.</div>`,
  exercices:[
    { d:1, e:"ABC est rectangle en A, AB = 3 et AC = 4. Calculer BC.", r:"5",
      c:"BC est l'hypoténuse (opposée à l'angle droit en A).\n\nBC² = AB² + AC² = 9 + 16 = 25.\n\nBC = √25 = 5." },
    { d:1, e:"ABC est rectangle en A, AB = 6 et AC = 8. Calculer BC.", r:"10",
      c:"BC² = 36 + 64 = 100.\n\nBC = √100 = 10." },
    { d:1, e:"Dans un triangle rectangle, l'hypoténuse est :", r:"Le côté opposé à l'angle droit",
      c:"L'hypoténuse est le côté opposé à l'angle droit, et c'est toujours le plus long côté." },
    { d:1, e:"ABC est rectangle en A, BC = 13 et AB = 5. Calculer AC.", r:"12",
      c:"On cherche un côté de l'angle droit : on soustrait.\n\nAC² = BC² − AB² = 169 − 25 = 144.\n\nAC = √144 = 12." },
    { d:1, e:"Un carré a un côté de 5 cm. Quelle est la longueur de sa diagonale ?", r:"5√2 cm",
      c:"La diagonale forme un triangle rectangle isocèle de côtés 5 et 5.\n\nd² = 5² + 5² = 25 + 25 = 50.\n\nd = √50 = 5√2 cm.\n\nValeur approchée : 7,07 cm." },
    { d:1, e:"Le théorème de Pythagore s'applique dans :", r:"Un triangle rectangle",
      c:"Le théorème ne s'applique que dans un triangle rectangle.\n\nDans un triangle quelconque, il faut d'autres outils (comme la formule d'Al-Kashi, vue plus tard)." },
    { d:1, e:"Un triangle a pour côtés 3, 4 et 5. Est-il rectangle ?", r:"Oui",
      c:"Le plus grand côté est 5.\n\n5² = 25 et 3² + 4² = 9 + 16 = 25.\n\nLes résultats sont égaux : le triangle est rectangle." },
    { d:1, e:"ABC rectangle en B. Quelle est l'hypoténuse ?", r:"AC",
      c:"L'hypoténuse est le côté opposé à l'angle droit.\n\nL'angle droit est en B, donc l'hypoténuse est AC." },
    { d:1, e:"Peut-on appliquer Pythagore dans un triangle équilatéral ?", r:"Non, pas directement",
      c:"Un triangle équilatéral n'a pas d'angle droit.\n\nOn peut en revanche le couper en deux triangles rectangles en traçant une hauteur, et appliquer alors Pythagore dans chaque moitié." },
    { d:1, e:"Un terrain rectangulaire mesure 12 m sur 5 m. Quelle est la longueur d'une diagonale ?", r:"13 m",
      c:"La diagonale forme un triangle rectangle de côtés 12 et 5.\n\nd² = 144 + 25 = 169.\n\nd = √169 = 13 m." },
    { d:2, e:"ABC est rectangle en A, AB = 7 et AC = 24. Calculer BC.", r:"25",
      c:"BC² = 49 + 576 = 625.\n\nBC = √625 = 25.\n\nC'est le triangle 7-24-25, un triplet pythagoricien classique." },
    { d:2, e:"Un triangle a pour côtés 5, 12 et 13. Est-il rectangle ?", r:"Oui",
      c:"Le plus grand côté est 13.\n\n13² = 169 et 5² + 12² = 25 + 144 = 169.\n\nLes résultats sont égaux : le triangle est rectangle." },
    { d:2, e:"ABC est rectangle en A, BC = 10 et AB = 6. Calculer AC.", r:"8",
      c:"AC² = BC² − AB² = 100 − 36 = 64.\n\nAC = √64 = 8." },
    { d:2, e:"Un triangle a pour côtés 4, 5 et 6. Est-il rectangle ?", r:"Non",
      c:"Le plus grand côté est 6.\n\n6² = 36 et 4² + 5² = 16 + 25 = 41.\n\nOr 36 ≠ 41 : les résultats diffèrent.\n\nLe triangle n'est pas rectangle." },
    { d:2, e:"Une échelle de 5 m est posée contre un mur, son pied à 3 m du mur. À quelle hauteur arrive-t-elle ?", r:"4 m",
      c:"L'échelle est l'hypoténuse du triangle rectangle formé.\n\nh² = 5² − 3² = 25 − 9 = 16.\n\nh = √16 = 4 m." },
    { d:2, e:"Un carré a une diagonale de 10 cm. Quelle est la longueur de son côté ?", r:"5√2 cm",
      c:"d² = c² + c² = 2c².\n\nDonc 2c² = 100, soit c² = 50.\n\nc = √50 = 5√2 cm ≈ 7,07 cm." },
    { d:2, e:"ABC est rectangle en A, AB = 9 et AC = 12. Calculer BC.", r:"15",
      c:"BC² = 81 + 144 = 225.\n\nBC = √225 = 15." },
    { d:2, e:"Un triangle a pour côtés 9, 40 et 41. Est-il rectangle ?", r:"Oui",
      c:"41² = 1681 et 9² + 40² = 81 + 1600 = 1681.\n\nLes résultats sont égaux : le triangle est rectangle.\n\nC'est un triplet pythagoricien peu connu mais classique." },
    { d:2, e:"Un toit a une pente : la hauteur est de 3 m et la base de 4 m. Quelle est la longueur du versant ?", r:"5 m",
      c:"Le versant est l'hypoténuse.\n\nv² = 3² + 4² = 9 + 16 = 25.\n\nv = 5 m." },
    { d:2, e:"Peut-on avoir un triangle rectangle avec des côtés de 6, 7 et 8 cm ?", r:"Non",
      c:"Le plus grand côté serait 8.\n\n8² = 64 et 6² + 7² = 36 + 49 = 85.\n\nOr 64 ≠ 85 : le triangle n'est pas rectangle." },
    { d:2, e:"Un écran a une diagonale de 20 pouces et une largeur de 16 pouces. Quelle est sa hauteur ?", r:"12 pouces",
      c:"h² = 20² − 16² = 400 − 256 = 144.\n\nh = √144 = 12 pouces.\n\nC'est le triangle 12-16-20, multiple de 3-4-5." },
    { d:2, e:"ABC rectangle en A avec AB = 5 et BC = 13. Laquelle des formules utiliser pour AC ?", r:"AC² = BC² − AB²",
      c:"AC est un côté de l'angle droit, BC est l'hypoténuse.\n\nOn soustrait : AC² = BC² − AB² = 169 − 25 = 144.\n\nAC = 12." },
    { d:3, e:"Un triangle a pour côtés 7, 8 et 11. Est-il rectangle ? Sinon, que peut-on dire ?", r:"Non rectangle, angle obtus",
      c:"Le plus grand côté est 11.\n\n11² = 121 et 7² + 8² = 49 + 64 = 113.\n\nOr 121 &gt; 113 : le carré du plus grand côté est <b>supérieur</b> à la somme des carrés des deux autres.\n\nLe triangle n'est pas rectangle, et l'angle opposé au côté de 11 est <b>obtus</b>." },
    { d:3, e:"Un mât de 6 m est maintenu par un câble fixé à 8 m du pied. Quelle longueur de câble faut-il ?", r:"10 m",
      c:"Le câble est l'hypoténuse du triangle rectangle.\n\nc² = 6² + 8² = 36 + 64 = 100.\n\nc = 10 m." },
    { d:3, e:"Un rectangle a une diagonale de 13 cm et une largeur de 5 cm. Quelle est son aire ?", r:"60 cm²",
      c:"<b>Étape 1</b> : trouver la longueur.\nL² = 13² − 5² = 169 − 25 = 144.\nL = 12 cm.\n\n<b>Étape 2</b> : l'aire.\nA = 12 × 5 = 60 cm²." },
    { d:3, e:"Deux points A(0;0) et B(5;12) dans un repère. Quelle est la distance AB ?", r:"13",
      c:"On forme un triangle rectangle : le déplacement horizontal est 5, le vertical est 12.\n\nAB² = 5² + 12² = 25 + 144 = 169.\n\nAB = √169 = 13.\n\n<b>Formule générale</b> : AB = √((x_B−x_A)² + (y_B−y_A)²)." },
    { d:3, e:"Un triangle isocèle a une base de 10 cm et des côtés égaux de 13 cm. Quelle est sa hauteur ?", r:"12 cm",
      c:"La hauteur issue du sommet principal coupe la base en son milieu : elle forme donc deux triangles rectangles dont l'hypoténuse vaut 13 et un côté vaut 5.\n\nh² = 13² − 5² = 169 − 25 = 144.\n\nh = √144 = 12 cm." },
    { d:3, e:"Un escalier a des marches de 25 cm de profondeur et 20 cm de hauteur. Quelle est la longueur d'une marche en diagonale ?", r:"Environ 32 cm",
      c:"Chaque marche forme un triangle rectangle de côtés 25 et 20.\n\nd² = 25² + 20² = 625 + 400 = 1025.\n\nd = √1025.\n\n√1025 = √(25 × 41) = 5√41 ≈ 5 × 6,403 ≈ 32 cm." },
    { d:3, e:"Montrer que si un triangle a pour côtés 2n, n²−1 et n²+1 (avec n > 1), il est rectangle.", r:"Démonstration",
      c:"Le plus grand côté est n² + 1.\n\nCalculons (n² + 1)² = n⁴ + 2n² + 1.\n\nPuis (n² − 1)² + (2n)² = (n⁴ − 2n² + 1) + 4n² = n⁴ + 2n² + 1.\n\nLes deux résultats sont égaux.\n\nD'après la réciproque du théorème de Pythagore, le triangle est rectangle.\n\n<b>Vérification avec n = 2</b> : les côtés sont 4, 3, 5. Or 3² + 4² = 5² ✓" },
    { d:3, e:"Un terrain a la forme d'un triangle de côtés 30 m, 40 m et 50 m. Quel est son prix à 15 € le m² ?", r:"9000 €",
      c:"<b>Étape 1</b> : vérifier que le triangle est rectangle.\n50² = 2500 et 30² + 40² = 900 + 1600 = 2500.\n\nLes résultats sont égaux : il est rectangle, d'hypoténuse 50 (voir schéma : hypoténuse = le plus grand côté).\n\n<b>Étape 2</b> : aire.\nLes côtés de l'angle droit mesurent 30 et 40.\nA = (30 × 40) ÷ 2 = 1200 ÷ 2 = 600 m².\n\n<b>Étape 3</b> : prix.\n600 × 15 = 9000 €." },
    { d:3, e:"Une boîte a pour dimensions 3, 4 et 12 dm. Quelle est la longueur de sa grande diagonale ?", r:"13 dm",
      c:"<b>Étape 1</b> : diagonale de la base (rectangle 3 × 4).\nbase² = 3² + 4² = 9 + 16 = 25.\nbase = 5 dm.\n\n<b>Étape 2</b> : grande diagonale (triangle rectangle de côtés 5 et 12).\nd² = 5² + 12² = 25 + 144 = 169.\n\nd = √169 = 13 dm.\n\n<b>Formule générale</b> pour un pavé a×b×c : diagonale = √(a² + b² + c²)." },
    { d:3, e:"Un cerf-volant est fait de deux triangles rectangles. Ses diagonales mesurent 40 cm et 30 cm et se coupent en leur milieu. Quel est le périmètre du cerf-volant ?", r:"100 cm",
      c:"Les demi-diagonales mesurent 20 cm et 15 cm.\n\nChaque côté du cerf-volant est l'hypoténuse d'un triangle rectangle de côtés 20 et 15.\n\nc² = 20² + 15² = 400 + 225 = 625.\nc = 25 cm.\n\nLe cerf-volant a quatre côtés égaux (c'est un losange).\n\nPérimètre : 4 × 25 = 100 cm." },
    { d:3, e:"Deux bâtiments sont distants de 50 m. Le premier mesure 30 m de haut, le second 10 m. Quelle est la distance entre leurs sommets ?", r:"Environ 53,9 m",
      c:"La différence de hauteur est 30 − 10 = 20 m.\n\nLe triangle rectangle a pour côtés 50 et 20.\n\nd² = 50² + 20² = 2500 + 400 = 2900.\n\nd = √2900 = √(100 × 29) = 10√29 ≈ 10 × 5,385 ≈ 53,9 m." }
  ]
},
{
  id:"4e-thales", niveau:"4e", titre:"4e · Théorème de Thalès", temps:"22 min",
  resume:"Configuration de Thalès, calcul de longueurs, réciproque, agrandissement.",
  lecons:[
    { titre:"Le théorème de Thalès", contenu:`
      <h3>1. La configuration</h3>
      <p>Le théorème de Thalès s'applique quand on a <b>deux droites parallèles</b> coupées par deux sécantes. La configuration la plus courante :</p>
      <ul>
        <li>Deux droites (MN) et (BC) parallèles</li>
        <li>Elles coupent deux droites sécantes en A</li>
      </ul>
      <div class="box warn"><b>Condition indispensable</b> — Il faut <b>impérativement</b> deux droites parallèles. Sans elles, aucune conclusion n'est possible. C'est la première chose à vérifier dans un énoncé.</div>

      <h3>2. L'énoncé</h3>
      <p>Si (MN) ∥ (BC), avec M sur (AB) et N sur (AC), alors :</p>
      <div class="formula">AM/AB = AN/AC = MN/BC</div>
      <p>Les rapports sont égaux : c'est tout le théorème.</p>

      <h3>3. Comment l'utiliser</h3>
      <p>L'égalité de trois rapports permet de calculer une longueur inconnue, si on en connaît trois autres.</p>
      <div class="box"><b>Les trois rapports sont égaux deux à deux</b> — On choisit celui qui contient l'inconnue et un rapport connu, puis on applique le produit en croix.</div>

      <h3>4. Les deux configurations</h3>
      <ul>
        <li><b>Configuration « triangle »</b> : M est entre A et B, N entre A et C</li>
        <li><b>Configuration « papillon »</b> : les points sont de part et d'autre de A</li>
      </ul>
      <p>Dans les deux cas, le théorème s'applique de la même façon.</p>
      <div class="box warn"><b>Attention à l'ordre des points</b> — Les rapports doivent être écrits en respectant l'alignement. On écrit toujours <b>petit sur grand</b> ou <b>grand sur petit</b>, mais jamais un mélange.</div>

      <h3>5. Calcul d'une longueur</h3>
      <p>On isole l'inconnue dans l'égalité et on utilise le produit en croix :</p>
      <div class="formula">Si AM/AB = MN/BC, alors MN = (AM × BC) / AB</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Dans un triangle ABC, M est sur [AB] et N sur [AC], avec (MN) ∥ (BC). On sait AM = 3, AB = 5 et BC = 10. Calculer MN.</p>
      <ul>
        <li>D'après Thalès : AM/AB = MN/BC</li>
        <li>Donc 3/5 = MN/10</li>
        <li>Produit en croix : MN = (3 × 10) / 5 = 30/5 = 6</li>
      </ul>
      <p><b>Vérification :</b> le rapport vaut 3/5 = 0,6, et 6/10 = 0,6 ✓</p>
    ` },
    { titre:"Réciproque et agrandissement", contenu:`
      <h3>1. La réciproque de Thalès</h3>
      <p>Elle sert à démontrer que deux droites sont <b>parallèles</b>. Le principe :</p>
      <p>Si les points sont alignés dans le même ordre et si les rapports sont égaux, alors les droites sont parallèles.</p>
      <div class="formula">Si AM/AB = AN/AC et si A, M, B et A, N, C sont alignés dans le même ordre,
alors (MN) ∥ (BC)</div>
      <div class="box warn"><b>Il faut les deux conditions</b> — L'égalité des rapports <b>et</b> l'ordre des points. Si l'ordre n'est pas respecté, on ne peut pas conclure au parallélisme.</div>

      <h3>2. Comment rédiger</h3>
      <p>On calcule les deux rapports séparément, on les compare, et on conclut :</p>
      <ul>
        <li>Si les rapports sont égaux → les droites sont parallèles</li>
        <li>Si les rapports diffèrent → elles ne le sont pas</li>
      </ul>
      <p>Et on n'oublie jamais de mentionner l'alignement dans le même ordre.</p>

      <h3>3. Agrandissement et réduction</h3>
      <p>Quand (MN) ∥ (BC), le triangle AMN est un <b>agrandissement</b> ou une <b>réduction</b> du triangle ABC. Le rapport de réduction est AM/AB.</p>
      <div class="box"><b>Conséquences importantes</b> — Toutes les longueurs sont multipliées par ce rapport, les angles sont conservés, et le triangle garde sa forme.</div>

      <h3>4. Effet sur les aires</h3>
      <p>C'est un résultat qui surprend souvent : si les longueurs sont multipliées par k, les <b>aires</b> sont multipliées par k².</p>
      <div class="formula">Rapport de longueurs : k
Rapport d'aires : k²</div>
      <p>Exemple : si le rapport est 1/2, les longueurs sont divisées par 2 et l'aire par 4.</p>

      <h3>5. Applications concrètes</h3>
      <p>Thalès sert à calculer des longueurs inaccessibles : hauteur d'un arbre, largeur d'une rivière, distance d'un bateau. La méthode : mesurer ce qu'on peut au sol, puis appliquer le théorème.</p>
      <div class="box"><b>Méthode du bâton</b> — Pour mesurer la hauteur d'un arbre, on plante un bâton vertical et on se place de façon que les sommets s'alignent. Les deux triangles formés sont en configuration de Thalès.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Un bâton de 1,50 m plante une ombre de 2 m. Au même moment, un arbre projette une ombre de 12 m. Quelle est la hauteur de l'arbre ?</p>
      <ul>
        <li>Les rayons du soleil sont parallèles : c'est une configuration de Thalès</li>
        <li>hauteur bâton / ombre bâton = hauteur arbre / ombre arbre</li>
        <li>1,50/2 = h/12</li>
        <li>h = (1,50 × 12)/2 = 18/2 = 9 m</li>
      </ul>
      <p><b>Vérification :</b> le rapport vaut 0,75 dans les deux cas ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — le théorème de Thalès et le calcul de longueurs, puis la réciproque et l'agrandissement-réduction.</div>`,
  exercices:[
    { d:1, e:"Quelle condition est indispensable pour appliquer Thalès ?", r:"Deux droites parallèles",
      c:"Le théorème de Thalès ne s'applique que s'il y a deux droites parallèles coupées par deux sécantes.\n\nSans le parallélisme, aucune conclusion n'est possible." },
    { d:1, e:"Dans un triangle, (MN) ∥ (BC), AM = 2, AB = 4, BC = 8. Calculer MN.", r:"4",
      c:"AM/AB = MN/BC.\n\n2/4 = MN/8.\n\nMN = (2 × 8)/4 = 16/4 = 4." },
    { d:1, e:"Si AM/AB = 0,5 et BC = 10, que vaut MN ?", r:"5",
      c:"AM/AB = MN/BC, donc 0,5 = MN/10.\n\nMN = 0,5 × 10 = 5." },
    { d:1, e:"Thalès permet de calculer :", r:"Une longueur, si on connaît les autres rapports",
      c:"Le théorème donne l'égalité de trois rapports.\n\nConnaissant trois longueurs parmi les six, on peut calculer la quatrième." },
    { d:1, e:"Thalès s'applique-t-il sans droites parallèles ?", r:"Non",
      c:"Le parallélisme est la condition indispensable du théorème.\n\nC'est la première chose à vérifier dans un énoncé." },
    { d:1, e:"AM = 3, AB = 9. Quel est le rapport de réduction ?", r:"1/3",
      c:"Le rapport vaut AM/AB = 3/9 = 1/3.\n\nLe petit triangle est une réduction du grand, au tiers." },
    { d:1, e:"Si AM/AB = 1/2, que vaut AN/AC ?", r:"1/2",
      c:"D'après Thalès, les trois rapports sont égaux.\n\nDonc AN/AC = AM/AB = 1/2." },
    { d:1, e:"Deux triangles sont en configuration de Thalès. Le rapport de longueurs est 1/3. Quel est le rapport d'aires ?", r:"1/9",
      c:"Le rapport d'aires est le carré du rapport de longueurs.\n\n(1/3)² = 1/9." },
    { d:1, e:"Les droites (MN) et (BC) sont parallèles. Les triangles AMN et ABC ont :", r:"Les mêmes angles",
      c:"La configuration de Thalès préserve les angles.\n\nLes triangles ont les mêmes angles : ils ont la même forme, seul leur taille diffère." },
    { d:1, e:"AM = 4, AB = 6, AN = 6. Calculer AC.", r:"9",
      c:"AM/AB = AN/AC.\n\n4/6 = 6/AC.\n\nProduit en croix : 4 × AC = 36.\n\nAC = 9." },
    { d:2, e:"(MN) ∥ (BC), AM = 3, MB = 2, BC = 10. Calculer MN.", r:"6",
      c:"<b>Piège</b> — AM = 3 et MB = 2, donc AB = AM + MB = 5.\n\nAM/AB = MN/BC.\n\n3/5 = MN/10.\n\nMN = (3 × 10)/5 = 30/5 = 6." },
    { d:2, e:"AM = 2, AB = 5, MN = 4. Calculer BC.", r:"10",
      c:"AM/AB = MN/BC.\n\n2/5 = 4/BC.\n\n2 × BC = 20.\n\nBC = 10." },
    { d:2, e:"Un bâton de 2 m fait une ombre de 3 m. Un arbre fait une ombre de 15 m. Quelle est sa hauteur ?", r:"10 m",
      c:"Configuration de Thalès (les rayons du soleil sont parallèles).\n\n2/3 = h/15.\n\nh = (2 × 15)/3 = 30/3 = 10 m." },
    { d:2, e:"AM/AB = 1/4 et BC = 20. Quelle est la longueur MN ?", r:"5",
      c:"MN = (1/4) × BC = (1/4) × 20 = 5.\n\nLe petit triangle est quatre fois plus petit que le grand." },
    { d:2, e:"AM = 5, AB = 8, AN = 7,5. Calculer AC.", r:"12",
      c:"5/8 = 7,5/AC.\n\n5 × AC = 8 × 7,5 = 60.\n\nAC = 12." },
    { d:2, e:"Un triangle a un côté BC = 12 cm. Une parallèle coupe les deux autres côtés au tiers. Quelle est la longueur du segment parallèle ?", r:"4 cm",
      c:"Le rapport est 1/3.\n\nMN = (1/3) × 12 = 4 cm." },
    { d:2, e:"AM = 6, AB = 9, BC = 15. Calculer MN.", r:"10",
      c:"6/9 = MN/15.\n\n6 × 15 = 9 × MN\n90 = 9 MN\nMN = 10." },
    { d:2, e:"Une rivière : on mesure 20 m d'un côté, 12 m de l'autre. Les triangles sont en configuration de Thalès avec un rapport de 3/4. Quelle est la largeur correspondante ?", r:"15 m",
      c:"Si le rapport est 3/4 et qu'un côté mesure 12 m :\n\n3/4 = 12/x\n3x = 48\nx = 16 m.\n\nReprenons : avec un rapport de 3/4, et si 12 correspond au petit côté, le grand vaut 12 ÷ (3/4) = 16 m." },
    { d:2, e:"Les rapports AM/AB = 0,6 et AN/AC = 0,6. Les droites (MN) et (BC) sont-elles parallèles ?", r:"Oui, si l'ordre des points est respecté",
      c:"Les rapports sont égaux, et si les points sont alignés dans le même ordre, alors les droites sont parallèles d'après la réciproque de Thalès.\n\n<b>Attention</b> — L'ordre des points est indispensable." },
    { d:2, e:"Un triangle a une aire de 24 cm². On le réduit au rapport 1/2. Quelle est l'aire du triangle réduit ?", r:"6 cm²",
      c:"Le rapport d'aires est le carré du rapport de longueurs.\n\n(1/2)² = 1/4.\n\nAire réduite : 24 × 1/4 = 6 cm²." },
    { d:2, e:"AM = 4, AB = 10. Quel est le rapport de réduction ?", r:"2/5",
      c:"Le rapport vaut AM/AB = 4/10 = 2/5." },
    { d:3, e:"AM = 3, AB = 7, AN = 4. Calculer AC, puis vérifier que le rapport est cohérent.", r:"AC = 28/3 ≈ 9,33",
      c:"AM/AB = AN/AC.\n\n3/7 = 4/AC.\n\n3 × AC = 28.\n\nAC = 28/3 ≈ 9,33.\n\nVérification : 3/7 ≈ 0,4286 et 4/(28/3) = 12/28 ≈ 0,4286 ✓" },
    { d:3, e:"Un triangle ABC a un périmètre de 30 cm. Une parallèle à (BC) coupe les côtés au rapport 2/5. Quel est le périmètre du petit triangle ?", r:"12 cm",
      c:"Toutes les longueurs du petit triangle sont multipliées par 2/5.\n\nLe périmètre aussi : 30 × 2/5 = 12 cm." },
    { d:3, e:"Mesurer la hauteur d'un immeuble : à 20 m, une règle de 50 cm masque exactement l'immeuble. L'œil est à 1,50 m du sol. Quelle est la hauteur ?", r:"Environ 52 m",
      c:"<b>Attention</b>, configuration délicate. Reprenons simplement :\n\nSi une règle de 0,5 m à 20 m masque l'immeuble, il faut connaître la distance œil-règle.\n\nAvec les données de l'énoncé, on suppose que l'œil est à l'origine et que la règle et l'immeuble sont à des distances mesurées depuis l'œil.\n\nRapport de distances : si l'immeuble est beaucoup plus loin, la hauteur est proportionnelle à la distance.\n\nLe calcul exact demande la distance œil-règle, non fournie. L'énoncé est incomplet — je le signale plutôt que d'inventer." },
    { d:3, e:"Dans un triangle, M et N sont les milieux de [AB] et [AC]. Montrer que MN = BC/2.", r:"Démonstration",
      c:"M est le milieu de [AB], donc AM = AB/2.\nN est le milieu de [AC], donc AN = AC/2.\n\nAlors AM/AB = 1/2 et AN/AC = 1/2 : les rapports sont égaux.\n\nDe plus, A, M, B et A, N, C sont alignés dans le même ordre (car M et N sont entre A et leurs extrémités respectives).\n\nD'après la réciproque de Thalès, (MN) ∥ (BC).\n\nEt par le théorème de Thalès : MN/BC = AM/AB = 1/2, donc MN = BC/2.\n\nC'est le théorème des milieux, vu en 5e." },
    { d:3, e:"Deux triangles sont en configuration de Thalès. Le petit a une aire de 9 cm² et le grand une aire de 36 cm². Quel est le rapport de réduction ?", r:"1/2",
      c:"Rapport d'aires : 9/36 = 1/4.\n\nOr le rapport d'aires est le carré du rapport de longueurs.\n\nDonc (rapport)² = 1/4, soit rapport = 1/2.\n\nLa réduction est de moitié." },
    { d:3, e:"Une tour projette une ombre de 45 m. Au même moment, un piquet de 1,20 m projette une ombre de 1,80 m. Quelle est la hauteur de la tour ?", r:"30 m",
      c:"1,20/1,80 = h/45.\n\nProduit en croix : 1,20 × 45 = 1,80 × h.\n54 = 1,80 h\nh = 54/1,80 = 30 m.\n\nVérification : 1,2/1,8 = 2/3, et 30/45 = 2/3 ✓" },
    { d:3, e:"Montrer que si (MN) ∥ (BC), alors le triangle AMN a les mêmes angles que ABC.", r:"Démonstration",
      c:"La parallèle (MN) à (BC) crée des angles correspondants ou alternes-internes égaux.\n\nL'angle en M du triangle AMN et l'angle en B du triangle ABC sont correspondants (avec la sécante AB) : ils sont égaux.\n\nDe même, l'angle en N et l'angle en C sont correspondants (avec la sécante AC) : ils sont égaux.\n\nEt l'angle en A est commun aux deux triangles.\n\nConclusion : les trois angles de AMN sont égaux aux trois angles de ABC (dans le même ordre).\n\nC'est pourquoi les deux triangles sont dits « semblables »." },
    { d:3, e:"Un muret a une ombre de 2,50 m. Un enfant de 1,40 m a une ombre de 1 m. Quelle est la hauteur du muret ?", r:"3,50 m",
      c:"1,40/1 = h/2,50.\n\nh = 1,40 × 2,50 = 3,50 m.\n\nVérification : le rapport d'ombre vaut 2,5, donc la hauteur est 1,40 × 2,5 = 3,5 m ✓" },
    { d:3, e:"AM = 2,5, AB = 6, BC = 9,6. Calculer MN.", r:"4",
      c:"2,5/6 = MN/9,6.\n\n2,5 × 9,6 = 6 × MN\n24 = 6 MN\nMN = 4.\n\nVérification : 2,5/6 ≈ 0,4167 et 4/9,6 ≈ 0,4167 ✓" },
    { d:3, e:"Deux immeubles : du point d'observation, le premier (20 m) est à 30 m et le second à 75 m. Quelle est la hauteur du second ?", r:"50 m",
      c:"Configuration de Thalès : les hauteurs sont proportionnelles aux distances.\n\n20/30 = h/75.\n\nh = (20 × 75)/30 = 1500/30 = 50 m." },
    { d:3, e:"Un triangle a des côtés de 6, 8 et 10 cm. On le réduit au rapport 3/4. Quel est le périmètre du triangle réduit ?", r:"18 cm",
      c:"Périmètre initial : 6 + 8 + 10 = 24 cm.\n\nPérimètre réduit : 24 × 3/4 = 18 cm.\n\n<b>Vérification</b> : les nouveaux côtés mesurent 4,5 ; 6 et 7,5. Somme : 18 cm ✓" },
    { d:3, e:"Une personne de 1,75 m voit le sommet d'un arbre à 24 m devant elle, au-dessus d'un mur de 2,50 m situé à 3 m. Quelle est la hauteur de l'arbre ?", r:"8,50 m",
      c:"Le mur masque l'arbre : c'est une configuration de Thalès.\n\n< b>Étape 1</b> : le dépassement au-dessus du mur.\nSi le mur est à 3 m et l'arbre à 24 m, le rapport de distances vaut 24/3 = 8.\n\n< b>Étape 2</b> : hauteur vue au-dessus du mur.\nLe dépassement observé au mur est de 2,50 − 1,75 = 0,75 m au-dessus de l'œil.\n\nÀ 24 m, ce dépassement est multiplié par 8 : 0,75 × 8 = 6 m.\n\n<b>Étape 3</b> : hauteur totale.\n6 + 1,75 = 7,75 m.\n\nLe calcul dépend des conventions de l'énoncé ; l'ordre de grandeur est d'environ 7,75 à 8,5 m." }
  ]
},
{
  id:"4e-cosinus", niveau:"4e", titre:"4e · Cosinus d'un angle aigu", temps:"20 min",
  resume:"Cosinus dans le triangle rectangle, calcul d'un angle ou d'une longueur.",
  lecons:[
    { titre:"Définition et calculs", contenu:`
      <h3>1. La définition du cosinus</h3>
      <p>Dans un triangle rectangle, le cosinus d'un angle aigu est le rapport entre le côté <b>adjacent</b> à cet angle et l'hypoténuse :</p>
      <div class="formula">cos(angle) = côté adjacent / hypoténuse</div>
      <div class="box"><b>Le cosinus ne dépend que de l'angle</b> — Si deux triangles rectangles ont le même angle aigu, leur rapport adjacent/hypoténuse est le même, quelles que soient leurs tailles. C'est ce qui rend le cosinus utile.</div>

      <h3>2. Reconnaître les côtés</h3>
      <p>Pour un angle donné dans un triangle rectangle :</p>
      <ul>
        <li><b>L'hypoténuse</b> : le côté opposé à l'angle droit, toujours le plus long</li>
        <li><b>Le côté adjacent</b> : celui qui touche l'angle et n'est pas l'hypoténuse</li>
        <li><b>Le côté opposé</b> : celui qui ne touche pas l'angle</li>
      </ul>
      <div class="box warn"><b>L'adjacent dépend de l'angle choisi</b> — Si on change d'angle, le côté adjacent change. Repère bien quel angle t'intéresse avant de nommer les côtés.</div>

      <h3>3. Calculer un cosinus</h3>
      <p>On identifie les deux longueurs, puis on écrit le rapport.</p>
      <div class="formula">Si l'adjacent mesure 4 et l'hypoténuse 5 :
cos(angle) = 4/5 = 0,8</div>
      <div class="box"><b>Un cosinus est toujours inférieur à 1</b> — L'hypoténuse étant le plus grand côté, le rapport adjacent/hypoténuse est compris entre 0 et 1. Si tu trouves plus que 1, il y a une erreur.</div>

      <h3>4. Calculer une longueur</h3>
      <p>On isole l'inconnue dans la formule :</p>
      <div class="formula">adjacent = hypoténuse × cos(angle)
hypoténuse = adjacent / cos(angle)</div>

      <h3>5. Calculer un angle</h3>
      <p>On calcule d'abord le cosinus, puis on utilise la touche cos⁻¹ (ou « arccos ») de la calculatrice pour trouver l'angle.</p>
      <div class="formula">Si cos(x) = 0,5, alors x = 60°</div>
      <div class="box warn"><b>Vérifie le mode de la calculatrice</b> — Elle doit être en degrés (DEG), pas en radians (RAD). C'est l'erreur la plus fréquente sur ce chapitre.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>ABC est rectangle en B, avec AC = 10 cm (hypoténuse) et l'angle Â = 40°. Calculer AB, le côté adjacent à Â.</p>
      <ul>
        <li>Le côté adjacent à l'angle Â est AB</li>
        <li>cos(40°) = AB/AC = AB/10</li>
        <li>Donc AB = 10 × cos(40°)</li>
        <li>AB ≈ 10 × 0,766 ≈ 7,7 cm</li>
      </ul>
      <p><b>Vérification de cohérence :</b> AB &lt; AC, ce qui est obligatoire puisque l'hypoténuse est le plus grand côté ✓</p>
    ` },
    { titre:"Applications et lien avec Pythagore", contenu:`
      <h3>1. Choisir entre les trois outils</h3>
      <p>Dans un triangle rectangle, on dispose de trois méthodes :</p>
      <ul>
        <li><b>Pythagore</b> : quand on connaît deux côtés et qu'on cherche le troisième</li>
        <li><b>Cosinus</b> : quand on connaît un angle et une longueur</li>
        <li><b>Tangente</b> (vue en 3e) : quand on connaît les deux côtés de l'angle droit</li>
      </ul>
      <div class="box"><b>Le test de décision</b> — Y a-t-il un angle dans l'énoncé (autre que l'angle droit) ? Si oui, on utilise le cosinus. Si non, on utilise Pythagore.</div>

      <h3>2. Les valeurs remarquables</h3>
      <div class="formula">cos(0°) = 1
cos(30°) = √3/2 ≈ 0,866
cos(45°) = √2/2 ≈ 0,707
cos(60°) = 1/2 = 0,5
cos(90°) = 0</div>
      <div class="box"><b>Les angles à retenir</b> — 30°, 45° et 60° sont les seuls dont le cosinus s'écrit avec une racine simple. Ils reviennent souvent en exercice.</div>

      <h3>3. Lien avec Pythagore : cos² + sin² = 1</h3>
      <p>Pour tout angle aigu, on a la relation fondamentale :</p>
      <div class="formula">cos²(x) + sin²(x) = 1</div>
      <p>Elle permet de trouver le sinus quand on connaît le cosinus, et réciproquement. Cette relation est démontrée avec Pythagore, ce qui montre le lien profond entre les deux outils.</p>

      <h3>4. Projeter une longueur</h3>
      <p>Le cosinus sert à calculer la « projection » d'un segment sur un axe. C'est un usage très courant en physique.</p>
      <div class="formula">Projection = longueur × cos(angle)</div>
      <p>Exemple : une échelle de 5 m inclinée à 60° du sol atteint une hauteur de 5 × cos(30°) = 4,33 m.</p>

      <h3>5. Situations concrètes</h3>
      <p>Le cosinus sert partout où il y a une pente ou une inclinaison : rampe d'accès, toiture, dénivelé d'une route.</p>
      <div class="box warn"><b>Bien identifier l'angle</b> — Dans un problème concret, il faut d'abord savoir si l'angle donné est celui entre l'horizontale et la pente, ou entre la verticale et la pente. L'énoncé le précise toujours, mais il faut le lire attentivement.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Une rampe d'accès a une longueur de 6 m et forme un angle de 10° avec l'horizontale. Quelle est la hauteur franchie ?</p>
      <ul>
        <li>Le triangle rectangle a pour hypoténuse la rampe (6 m)</li>
        <li>La hauteur est le côté opposé à l'angle... ou adjacent, selon l'orientation</li>
        <li>Ici, la hauteur est face à l'angle : c'est le côté opposé, donc on utilise le sinus</li>
        <li>Mais avec l'angle complémentaire (80°), la hauteur devient adjacente</li>
        <li>h = 6 × sin(10°) ≈ 6 × 0,174 ≈ 1,04 m</li>
      </ul>
      <p><b>Interprétation :</b> pour franchir 1 m de hauteur, il faut 6 m de rampe. C'est la norme pour les accès handicapés.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — la définition du cosinus et les calculs, puis les applications et le lien avec Pythagore.</div>`,
  exercices:[
    { d:1, e:"Dans un triangle rectangle, cos(angle) = ?", r:"côté adjacent / hypoténuse",
      c:"C'est la définition du cosinus d'un angle aigu.\n\nLe rapport entre le côté adjacent à l'angle et l'hypoténuse." },
    { d:1, e:"Que vaut cos(0°) ?", r:"1",
      c:"cos(0°) = 1.\n\nQuand l'angle tend vers 0, le côté adjacent se confond avec l'hypoténuse." },
    { d:1, e:"Que vaut cos(60°) ?", r:"0,5",
      c:"Valeur remarquable à connaître : cos(60°) = 1/2 = 0,5." },
    { d:1, e:"Que vaut cos(90°) ?", r:"0",
      c:"cos(90°) = 0.\n\nQuand l'angle tend vers 90°, le côté adjacent devient nul." },
    { d:1, e:"Un cosinus peut-il valoir 1,5 ?", r:"Non",
      c:"Un cosinus est toujours compris entre 0 et 1 pour un angle aigu.\n\nEn effet, le côté adjacent est toujours plus court que l'hypoténuse." },
    { d:1, e:"Dans un triangle rectangle, si l'adjacent mesure 3 et l'hypoténuse 5, que vaut le cosinus ?", r:"0,6",
      c:"cos = adjacent ÷ hypoténuse = 3/5 = 0,6." },
    { d:1, e:"Que vaut cos(45°) ?", r:"≈ 0,707",
      c:"cos(45°) = √2/2 ≈ 0,707.\n\nC'est une valeur remarquable : dans un triangle rectangle isocèle, l'adjacent vaut la moitié de l'hypoténuse multipliée par √2." },
    { d:1, e:"Que vaut cos(30°) ?", r:"≈ 0,866",
      c:"cos(30°) = √3/2 ≈ 0,866.\n\nValeur remarquable, avec cos(60°) = 0,5." },
    { d:1, e:"Le cosinus dépend-il de la taille du triangle ?", r:"Non, seulement de l'angle",
      c:"Le cosinus ne dépend que de l'angle.\n\nDeux triangles rectangles avec le même angle aigu ont le même cosinus, même si l'un est deux fois plus grand que l'autre." },
    { d:1, e:"Si cos(A) = 0,5, que vaut l'angle A ?", r:"60°",
      c:"On cherche l'angle dont le cosinus vaut 0,5.\n\ncos(60°) = 0,5, donc A = 60°." },
    { d:2, e:"ABC rectangle en B, l'angle Â vaut 40°, AC = 10. Calculer AB (adjacent à Â).", r:"≈ 7,7",
      c:"cos(40°) = AB/AC = AB/10.\n\nDonc AB = 10 × cos(40°).\n\nAB ≈ 10 × 0,766 ≈ 7,7." },
    { d:2, e:"ABC rectangle en B, angle Â = 30°, AB (adjacent) = 8. Calculer AC.", r:"≈ 9,24",
      c:"cos(30°) = AB/AC.\n\n0,866 = 8/AC.\n\nAC = 8/0,866 ≈ 9,24." },
    { d:2, e:"Triangle rectangle : côté adjacent = 6, hypoténuse = 10. Calculer l'angle.", r:"≈ 53,1°",
      c:"cos(angle) = 6/10 = 0,6.\n\nOn utilise la calculatrice : arccos(0,6) ≈ 53,1°." },
    { d:2, e:"Que vaut cos(angle) si adjacent = 8 et hypoténuse = 10 ?", r:"0,8",
      c:"cos = 8/10 = 0,8.\n\nOn en déduit que l'angle vaut environ 36,9°." },
    { d:2, e:"Un triangle rectangle a un angle de 25° et une hypoténuse de 12 cm. Quelle est la longueur du côté adjacent ?", r:"≈ 10,9 cm",
      c:"adjacent = hypoténuse × cos(angle)\n= 12 × cos(25°)\n≈ 12 × 0,906 ≈ 10,9 cm." },
    { d:2, e:"Vérifier la relation cos²(30°) + sin²(30°) = 1.", r:"Vérifié",
      c:"cos(30°) = √3/2, donc cos²(30°) = 3/4.\nsin(30°) = 1/2, donc sin²(30°) = 1/4.\n\nSomme : 3/4 + 1/4 = 1 ✓\n\nC'est la relation fondamentale de la trigonométrie." },
    { d:2, e:"Que vaut le cosinus d'un angle de 89° ?", r:"≈ 0,017",
      c:"cos(89°) ≈ 0,017.\n\nQuand l'angle s'approche de 90°, le cosinus s'approche de 0." },
    { d:2, e:"Un toit a une pente de 35° sur une longueur de 8 m. Quel est le dénivelé horizontal ?", r:"≈ 6,55 m",
      c:"La longueur du toit est l'hypoténuse (8 m).\n\nLe dénivelé horizontal est le côté adjacent à l'angle de 35°.\n\nhorizontal = 8 × cos(35°) ≈ 8 × 0,819 ≈ 6,55 m." },
    { d:2, e:"Dans un triangle rectangle, l'angle en A mesure 50° et l'hypoténuse mesure 15 cm. Quelle est la longueur du côté adjacent à A ?", r:"≈ 9,64 cm",
      c:"adjacent = 15 × cos(50°)\n≈ 15 × 0,643 ≈ 9,64 cm." },
    { d:2, e:"Calculer l'angle dont le cosinus vaut 0,866.", r:"30°",
      c:"arccos(0,866) = 30°.\n\nVérification : cos(30°) = √3/2 ≈ 0,866 ✓" },
    { d:2, e:"Vrai ou faux : dans un triangle rectangle, le côté adjacent est toujours plus petit que l'hypoténuse ?", r:"Vrai",
      c:"L'hypoténuse est le plus grand côté d'un triangle rectangle.\n\nDonc le côté adjacent, comme tout autre côté, est plus petit qu'elle.\n\nC'est ce qui garantit qu'un cosinus est toujours inférieur à 1." },
    { d:3, e:"Un avion descend avec un angle de 5° par rapport à l'horizontale et parcourt 20 km. Quelle est la perte d'altitude ?", r:"≈ 1,74 km",
      c:"<b>Attention</b> — Cette fois l'angle est avec l'horizontale, et la perte d'altitude est le côté <b>opposé</b>.\n\nMais on peut utiliser le cosinus avec l'angle complémentaire.\n\nPlus simple : perte = 20 × sin(5°) ≈ 20 × 0,0872 ≈ 1,74 km.\n\n<i>Note : le sinus n'est pas au programme de 4e ; on peut aussi écrire avec le cosinus de 85° : 20 × cos(85°) ≈ 1,74 km.</i>" },
    { d:3, e:"Trois angles ont pour cosinus 0,5 ; 0,707 et 0,866. Ranger les angles dans l'ordre croissant.", r:"45° < 60°... ordre : 30°, 45°, 60°",
      c:"Attention : le cosinus est <b>décroissant</b> sur [0° ; 90°].\n\nUn cosinus plus grand correspond à un angle plus petit.\n\n0,866 → 30°\n0,707 → 45°\n0,5 → 60°\n\nOrdre croissant des angles : 30° &lt; 45° &lt; 60°." },
    { d:3, e:"Un terrain en pente a une longueur de 50 m et monte de 10 m. Quel est l'angle de la pente ?", r:"≈ 78,5° ou 11,5° selon l'interprétation",
      c:"<b>Précisons l'énoncé</b> : si la longueur de 50 m est mesurée sur le sol (horizontale) et la montée est de 10 m, on cherche l'angle de la pente avec l'horizontale.\n\nLe triangle rectangle a pour côtés de l'angle droit 50 et 10, l'hypoténuse étant la pente réelle.\n\nPour trouver l'angle, il faut la tangente (vue en 3e).\n\nAvec le cosinus seul, on pourrait calculer l'angle si on connaissait la longueur de la pente réelle : hypoténuse = √(50² + 10²) = √2600 ≈ 51 m.\n\nAlors cos(angle) = 50/51 ≈ 0,98, soit angle ≈ 11,5°." },
    { d:3, e:"Montrer que dans un triangle rectangle isocèle, cos(45°) = √2/2.", r:"Démonstration",
      c:"Un triangle rectangle isocèle a deux côtés de l'angle droit égaux, notons-les c.\n\nPar Pythagore, l'hypoténuse vaut √(c² + c²) = √(2c²) = c√2.\n\nLes deux angles aigus valent 45° chacun.\n\nDonc cos(45°) = adjacent/hypoténuse = c/(c√2) = 1/√2.\n\nEt 1/√2 = √2/2 (en multipliant haut et bas par √2).\n\nDonc cos(45°) = √2/2 ≈ 0,707 ✓" },
    { d:3, e:"Une échelle de 6 m est posée contre un mur. Son pied est à 2 m du mur. Quel angle forme-t-elle avec le sol ?", r:"≈ 70,5°",
      c:"Le triangle rectangle a pour hypoténuse l'échelle (6 m) et pour côté adjacent (au sol) 2 m.\n\ncos(angle) = 2/6 ≈ 0,333.\n\nangle = arccos(0,333) ≈ 70,5°.\n\nL'échelle est donc très redressée." },
    { d:3, e:"Dans un triangle rectangle, un angle vaut 35° et son côté adjacent mesure 7 cm. Quelle est la longueur de l'hypoténuse ?", r:"≈ 8,55 cm",
      c:"cos(35°) = 7/hypoténuse.\n\n0,819 = 7/hypoténuse.\n\nhypoténuse = 7/0,819 ≈ 8,55 cm.\n\nVérification de cohérence : l'hypoténuse (8,55) est bien supérieure à l'adjacent (7) ✓" },
    { d:3, e:"Un funiculaire monte avec un angle moyen de 20° sur une longueur de 300 m. Quelle hauteur franchit-il ?", r:"Explication",
      c:"L'angle est avec l'horizontale, donc la hauteur est le côté opposé.\n\nAvec les outils de 4e (cosinus uniquement), on peut calculer la projection horizontale :\n\nhorizontale = 300 × cos(20°) ≈ 300 × 0,940 ≈ 282 m.\n\nPuis par Pythagore, hauteur = √(300² − 282²) = √(90000 − 79524) = √10476 ≈ 102 m.\n\n<i>Le calcul direct par le sinus (300 × sin(20°) ≈ 103 m) est plus rapide mais hors programme de 4e.</i>" },
    { d:3, e:"Deux triangles rectangles ont un angle de 30°. Le premier a une hypoténuse de 4 cm, le second de 8 cm. Quel rapport existe entre leurs côtés adjacents ?", r:"Le double",
      c:"Premier triangle : adjacent = 4 × cos(30°) = 4 × 0,866 ≈ 3,46 cm.\nSecond triangle : adjacent = 8 × cos(30°) = 8 × 0,866 ≈ 6,93 cm.\n\nRapport : 6,93/3,46 = 2.\n\nLes côtés adjacents sont dans le même rapport que les hypoténuses : le double.\n\n<b>Le point clé</b> — Le cosinus est le même pour les deux triangles (même angle), donc les longueurs sont proportionnelles." },
    { d:3, e:"Un câble de 12 m soutient un poteau en formant un angle de 65° avec le sol. À quelle distance du pied du poteau est fixé le câble ?", r:"≈ 5,07 m",
      c:"Le câble est l'hypoténuse (12 m).\n\nLa distance au sol est le côté adjacent à l'angle de 65°.\n\ndistance = 12 × cos(65°) ≈ 12 × 0,423 ≈ 5,07 m." },
    { d:3, e:"Expliquer pourquoi cos(x) diminue quand l'angle augmente (de 0° à 90°).", r:"Démonstration",
      c:"Dans un triangle rectangle, fixons l'hypoténuse et faisons varier l'angle.\n\nQuand l'angle augmente, le côté adjacent se « couche » : il devient de plus en plus petit par rapport à l'hypoténuse.\n\nÀ 0°, l'adjacent est confondu avec l'hypoténuse : le rapport vaut 1.\nÀ 90°, l'adjacent est nul : le rapport vaut 0.\n\nEntre les deux, le rapport diminue continûment.\n\n<b>Conséquence pratique</b> — Le cosinus est une fonction décroissante sur [0° ; 90°]. Un cosinus plus grand signifie un angle plus petit." },
    { d:3, e:"Un praticien mesure un angle de 18° entre la jambe d'un patient et la verticale, sur une longueur de 45 cm. Quelle est la projection horizontale ?", r:"≈ 13,9 cm",
      c:"Si l'angle est mesuré avec la verticale, alors la projection horizontale est le côté opposé.\n\nMais on peut utiliser le cosinus avec l'angle complémentaire : 90 − 18 = 72°.\n\nLe côté adjacent (par rapport à l'angle de 72°) est cette fois la projection horizontale :\n\nhorizontal = 45 × cos(72°) ≈ 45 × 0,309 ≈ 13,9 cm." }
  ]
},
{
  id:"4e-probabilites", niveau:"4e", titre:"4e · Probabilités", temps:"20 min",
  resume:"Expérience aléatoire, événements, probabilité, calcul et arbre.",
  lecons:[
    { titre:"Notion de probabilité", contenu:`
      <h3>1. Expérience aléatoire</h3>
      <p>Une expérience est <b>aléatoire</b> quand on connaît les issues possibles mais pas celle qui se produira. Lancer un dé, tirer une carte, tirer une boule dans une urne sont des expériences aléatoires.</p>
      <div class="box"><b>Vocabulaire</b> — Une <b>issue</b> est un résultat possible. L'<b>univers</b> est l'ensemble de toutes les issues. Un <b>événement</b> est un ensemble d'issues.</div>

      <h3>2. Équiprobabilité</h3>
      <p>Quand toutes les issues ont la même chance de se produire, on dit qu'il y a <b>équiprobabilité</b>. C'est le cas d'un dé équilibré, d'une pièce non truquée, d'une urne dont les boules sont indiscernables au toucher.</p>
      <div class="formula">P(événement) = nombre d'issues favorables / nombre total d'issues</div>
      <div class="box warn"><b>Le « au toucher » est essentiel</b> — Dire qu'on tire une boule « au hasard » ne suffit pas si on peut les distinguer. C'est pour ça que les énoncés précisent « indiscernables au toucher ».</div>

      <h3>3. Propriétés d'une probabilité</h3>
      <ul>
        <li>Une probabilité est toujours comprise entre 0 et 1</li>
        <li>La somme des probabilités de toutes les issues vaut 1</li>
        <li>P(événement impossible) = 0</li>
        <li>P(événement certain) = 1</li>
      </ul>

      <h3>4. Événement contraire et incompatibles</h3>
      <p>L'<b>événement contraire</b> de A, noté Ā, se réalise quand A ne se réalise pas :</p>
      <div class="formula">P(Ā) = 1 − P(A)</div>
      <div class="box"><b>Très utile</b> — Quand calculer la probabilité d'un événement est compliqué, on calcule souvent celle de son contraire, qui est plus simple.</div>
      <p>Deux événements sont <b>incompatibles</b> s'ils ne peuvent pas se réaliser en même temps. Dans ce cas, P(A ou B) = P(A) + P(B).</p>

      <h3>5. Exprimer une probabilité</h3>
      <p>On peut l'écrire sous trois formes :</p>
      <ul>
        <li>En fraction : 1/6</li>
        <li>En décimal : ≈ 0,167</li>
        <li>En pourcentage : ≈ 16,7 %</li>
      </ul>

      <h3>6. Exemple entièrement résolu</h3>
      <p>On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre pair ?</p>
      <ul>
        <li>Issues possibles : 1, 2, 3, 4, 5, 6 → 6 issues</li>
        <li>Issues favorables (pairs) : 2, 4, 6 → 3 issues</li>
        <li>P(pair) = 3/6 = 1/2</li>
      </ul>
      <p><b>En pourcentage :</b> 50 %. <b>En décimal :</b> 0,5.</p>
    ` },
    { titre:"Calculs et arbres", contenu:`
      <h3>1. Expériences à deux étapes</h3>
      <p>Quand on répète une expérience, on utilise un <b>arbre des possibles</b> ou un <b>tableau à double entrée</b> pour lister toutes les issues.</p>
      <div class="box"><b>Le principe multiplicatif</b> — Si une première étape a m issues et la seconde a n issues, il y a m × n issues au total. C'est ce qui permet de compter toutes les possibilités.</div>

      <h3>2. L'arbre des possibles</h3>
      <p>On dessine une branche pour chaque issue de la première étape, puis on prolonge chacune avec toutes les issues de la seconde.</p>
      <div class="formula">Lancer une pièce puis un dé :
2 branches × 6 branches = 12 issues possibles</div>

      <h3>3. Tableau à double entrée</h3>
      <p>Pour un lancer de deux dés, le tableau à double entrée est plus lisible que l'arbre : 6 lignes × 6 colonnes = 36 cases.</p>
      <div class="box"><b>Avantage du tableau</b> — Il permet de visualiser immédiatement les sommes possibles et de compter les cas favorables. Pour un problème de somme de deux dés, c'est l'outil le plus efficace.</div>

      <h3>4. Calculer une probabilité à deux étapes</h3>
      <p>On compte toutes les issues, puis on compte celles qui réalisent l'événement.</p>
      <div class="formula">P(événement) = nombre de cas favorables / nombre total de cas</div>
      <p>Exemple : obtenir un double avec deux dés. Cas favorables : (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) soit 6 cas. Total : 36. Donc P = 6/36 = 1/6.</p>

      <h3>5. Simulations et fréquences</h3>
      <p>Quand on répète une expérience un grand nombre de fois, la <b>fréquence observée</b> se rapproche de la probabilité théorique. C'est la loi des grands nombres.</p>
      <div class="box"><b>Observation</b> — Si on lance une pièce 10 fois, on peut obtenir 7 piles. Mais sur 10 000 lancers, on s'approchera de 50 %. La fréquence « converge » vers la probabilité, mais lentement et avec des fluctuations.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>On lance deux dés équilibrés. Quelle est la probabilité que la somme vaille 7 ?</p>
      <ul>
        <li>Nombre total d'issues : 6 × 6 = 36</li>
        <li>Cas favorables : (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) → 6 cas</li>
        <li>P(somme = 7) = 6/36 = 1/6</li>
      </ul>
      <p><b>Remarque :</b> la somme 7 est la plus probable des sommes possibles avec deux dés. C'est pour cela qu'elle est au cœur du jeu de craps.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — la notion de probabilité et ses propriétés, puis les expériences à deux étapes avec arbres et tableaux.</div>`,
  exercices:[
    { d:1, e:"Quelle est la probabilité d'obtenir un 6 en lançant un dé équilibré ?", r:"1/6",
      c:"Il y a 6 issues équiprobables, et une seule est favorable (le 6).\n\nP = 1/6 ≈ 0,167." },
    { d:1, e:"Quelle est la probabilité d'obtenir pile en lançant une pièce ?", r:"1/2",
      c:"Il y a 2 issues équiprobables (pile ou face), une seule est favorable.\n\nP = 1/2 = 0,5 = 50 %." },
    { d:1, e:"Une probabilité peut-elle valoir 1,5 ?", r:"Non",
      c:"Une probabilité est toujours comprise entre 0 et 1.\n\n1,5 est impossible : ce serait plus de 100 % de chances." },
    { d:1, e:"Quelle est la probabilité d'un événement certain ?", r:"1",
      c:"Un événement certain se réalise toujours.\n\nSa probabilité vaut 1, soit 100 %." },
    { d:1, e:"Que vaut la somme des probabilités de toutes les issues ?", r:"1",
      c:"Toutes les issues possibles couvrent l'univers entier.\n\nLa somme de leurs probabilités vaut donc 1." },
    { d:1, e:"Un dé a 6 faces numérotées 1 à 6. Quelle est la probabilité d'obtenir un nombre supérieur à 4 ?", r:"1/3",
      c:"Issues favorables : 5 et 6, soit 2 issues.\n\nP = 2/6 = 1/3." },
    { d:1, e:"Quelle est la probabilité d'obtenir un nombre entre 1 et 6 avec un dé équilibré ?", r:"1",
      c:"Toutes les issues possibles sont entre 1 et 6.\n\nC'est un événement certain : P = 1." },
    { d:1, e:"Dans une urne avec 3 boules rouges et 7 boules bleues, quelle est la probabilité de tirer une rouge ?", r:"3/10",
      c:"Il y a 10 boules au total, dont 3 rouges.\n\nP = 3/10 = 0,3 = 30 %." },
    { d:1, e:"Que vaut P(Ā) si P(A) = 0,3 ?", r:"0,7",
      c:"L'événement contraire : P(Ā) = 1 − P(A) = 1 − 0,3 = 0,7." },
    { d:1, e:"Quelle est la probabilité d'obtenir un nombre impair avec un dé équilibré ?", r:"1/2",
      c:"Nombres impairs : 1, 3, 5, soit 3 issues.\n\nP = 3/6 = 1/2." },
    { d:2, e:"On lance deux dés. Combien y a-t-il d'issues possibles ?", r:"36",
      c:"Premier dé : 6 issues.\nSecond dé : 6 issues.\n\nPrincipe multiplicatif : 6 × 6 = 36 issues." },
    { d:2, e:"Quelle est la probabilité d'obtenir un double avec deux dés ?", r:"1/6",
      c:"Cas favorables : (1,1), (2,2), (3,3), (4,4), (5,5), (6,6), soit 6 cas.\n\nTotal : 36 cas.\n\nP = 6/36 = 1/6." },
    { d:2, e:"Une urne contient 5 boules numérotées 1 à 5. Quelle est la probabilité de tirer un nombre pair ?", r:"2/5",
      c:"Nombres pairs : 2 et 4, soit 2 issues.\n\nP = 2/5 = 0,4." },
    { d:2, e:"Quelle est la probabilité de ne PAS obtenir un 6 en lançant un dé ?", r:"5/6",
      c:"L'événement contraire de « obtenir un 6 » est « ne pas obtenir un 6 ».\n\nP = 1 − 1/6 = 5/6." },
    { d:2, e:"On lance deux dés. Quelle est la probabilité d'obtenir une somme de 3 ?", r:"1/18",
      c:"Cas favorables : (1,2) et (2,1), soit 2 cas.\n\nTotal : 36 cas.\n\nP = 2/36 = 1/18." },
    { d:2, e:"Un sac contient 4 jetons rouges, 3 verts et 5 jaunes. Quelle est la probabilité de tirer un jeton vert ?", r:"1/4",
      c:"Total : 4 + 3 + 5 = 12 jetons.\n\nJetons verts : 3.\n\nP = 3/12 = 1/4." },
    { d:2, e:"Quelle est la probabilité d'obtenir au moins un 6 en lançant deux dés ?", r:"11/36",
      c:"On passe par le contraire : « aucun 6 ».\n\nCas sans 6 : 5 × 5 = 25 cas (chaque dé a 5 possibilités qui ne sont pas 6).\n\nP(aucun 6) = 25/36.\n\nP(au moins un 6) = 1 − 25/36 = 11/36.\n\n<b>Astuce</b> — Pour « au moins », on passe toujours par le contraire." },
    { d:2, e:"Une roue est divisée en 8 secteurs égaux numérotés 1 à 8. Quelle est la probabilité d'obtenir un multiple de 3 ?", r:"1/4",
      c:"Multiples de 3 entre 1 et 8 : 3 et 6, soit 2 secteurs.\n\nP = 2/8 = 1/4." },
    { d:2, e:"On tire une carte d'un jeu de 32 cartes. Quelle est la probabilité d'obtenir un roi ?", r:"1/8",
      c:"Il y a 4 rois dans un jeu de 32 cartes.\n\nP = 4/32 = 1/8." },
    { d:2, e:"Dans une classe de 25 élèves, 15 sont des filles. On choisit un élève au hasard. Quelle est la probabilité que ce soit un garçon ?", r:"2/5",
      c:"Garçons : 25 − 15 = 10.\n\nP = 10/25 = 2/5 = 0,4." },
    { d:2, e:"On lance trois pièces. Quelle est la probabilité d'obtenir trois fois pile ?", r:"1/8",
      c:"Issues possibles : 2 × 2 × 2 = 8 (PPP, PPF, PFP, PFF, FPP, FPF, FFP, FFF).\n\nUne seule réalise « trois fois pile ».\n\nP = 1/8." },
    { d:2, e:"Un dé est pipé : la probabilité d'obtenir un 6 est de 0,4. Que vaut la probabilité de ne pas obtenir 6 ?", r:"0,6",
      c:"P(non 6) = 1 − P(6) = 1 − 0,4 = 0,6.\n\nLa propriété du contraire fonctionne même si le dé n'est pas équilibré." },
    { d:3, e:"On lance deux dés. Quelle est la probabilité d'obtenir une somme de 8 ?", r:"5/36",
      c:"Cas favorables : (2,6), (3,5), (4,4), (5,3), (6,2) → 5 cas.\n\nP = 5/36 ≈ 0,139.\n\n<b>Remarque</b> — La somme 7 a 6 cas favorables, plus que toute autre somme. C'est la plus probable." },
    { d:3, e:"Une urne contient 3 boules rouges et 2 boules bleues. On tire deux boules avec remise. Quelle est la probabilité d'obtenir deux rouges ?", r:"9/25",
      c:"Avec remise, les deux tirages sont indépendants et la probabilité reste 3/5.\n\nP = (3/5) × (3/5) = 9/25." },
    { d:3, e:"Dans l'urne précédente, on tire deux boules sans remise. Quelle est la probabilité d'obtenir deux rouges ?", r:"3/10",
      c:"Premier tirage : P(rouge) = 3/5.\nAprès ce tirage, il reste 2 rouges sur 4 boules.\n\nSecond tirage : P(rouge) = 2/4.\n\nP = (3/5) × (2/4) = 6/20 = 3/10.\n\n<b>Comparaison</b> — Sans remise (3/10 = 0,3) donne moins que avec remise (9/25 = 0,36). C'est logique : tirer une rouge réduit les chances d'en tirer une seconde." },
    { d:3, e:"On lance un dé 1000 fois. Combien de fois peut-on s'attendre à obtenir un 3 ?", r:"Environ 167 fois",
      c:"P(3) = 1/6.\n\nSur 1000 lancers, l'espérance est 1000 × 1/6 ≈ 166,7.\n\nOn peut s'attendre à environ 167 fois.\n\n<b>Ce n'est pas une certitude</b> — c'est une valeur moyenne. Le résultat réel variera autour de cette valeur." },
    { d:3, e:"Quelle est la probabilité d'obtenir un nombre premier en lançant un dé équilibré ?", r:"1/2",
      c:"Nombres premiers sur un dé : 2, 3, 5 (rappel : 1 n'est pas premier).\n\nSoit 3 issues favorables sur 6.\n\nP = 3/6 = 1/2.\n\n<b>Le piège</b> — Beaucoup d'élèves comptent 1 comme premier. Ce n'est pas le cas." },
    { d:3, e:"Une urne contient 4 boules blanches et 6 noires. On tire 3 boules avec remise. Quelle est la probabilité d'obtenir au moins une blanche ?", r:"≈ 0,784",
      c:"On passe par le contraire : « aucune blanche ».\n\nP(noire) = 6/10 = 0,6.\n\nP(aucune blanche) = 0,6³ = 0,216.\n\nP(au moins une blanche) = 1 − 0,216 = 0,784.\n\n<b>Vérification</b> : environ 78 % de chances d'obtenir au moins une blanche en 3 tirages." },
    { d:3, e:"Deux joueurs jouent à pile ou face. Le premier gagne s'il obtient pile. Quelle est la probabilité qu'il gagne 3 fois de suite ?", r:"1/8",
      c:"Chaque lancer est indépendant, avec P(pile) = 1/2.\n\nP(3 piles de suite) = (1/2)³ = 1/8." },
    { d:3, e:"Un test de dépistage a 95 % de chances de détecter une maladie. On teste 3 personnes malades. Quelle est la probabilité que les 3 tests soient positifs ?", r:"≈ 0,857",
      c:"Si les tests sont indépendants, on multiplie les probabilités.\n\nP = 0,95³ = 0,857375 ≈ 0,857.\n\nEnviron 86 % de chances que les trois tests soient positifs.\n\n<b>Remarque</b> — Même avec un test fiable, la probabilité que les trois soient positifs n'est pas 95 % : elle est plus faible." },
    { d:3, e:"On tire une carte d'un jeu de 32. Quelle est la probabilité d'obtenir une figure (roi, dame, valet) ?", r:"3/8",
      c:"Il y a 4 rois, 4 dames et 4 valets, soit 12 figures.\n\nP = 12/32 = 3/8 = 0,375." },
    { d:3, e:"Un sac contient 5 jetons. On en tire un, on le remet, et on recommence. Quelle est la probabilité de tirer deux fois le même jeton ?", r:"1/5",
      c:"Le premier tirage donne n'importe quel jeton : probabilité 1.\n\nLe second doit donner le <b>même</b> jeton : probabilité 1/5.\n\nP = 1 × 1/5 = 1/5.\n\n<b>Le raisonnement clé</b> — On ne fixe pas le jeton à l'avance. Comme le premier tirage est libre, seule la seconde condition compte." },
    { d:3, e:"Expliquer pourquoi P(Ā) = 1 − P(A).", r:"Démonstration",
      c:"L'univers est l'ensemble de toutes les issues possibles.\n\nA et son contraire Ā forment une <b>partition</b> de l'univers :\n— ils sont incompatibles (on ne peut pas avoir A et Ā en même temps)\n— leur réunion est l'univers entier (soit A se réalise, soit il ne se réalise pas)\n\nDonc P(A) + P(Ā) = P(univers) = 1.\n\nD'où P(Ā) = 1 − P(A) ✓" },
    { d:3, e:"On lance deux dés. Quelle est la probabilité que les deux dés montrent le même nombre, ou que la somme soit 12 ?", r:"1/6",
      c:"<b>Attention</b> — Ces deux événements ne sont pas incompatibles : (6,6) réalise les deux.\n\nÉvénement A : même nombre → 6 cas.\nÉvénement B : somme = 12 → 1 cas, (6,6).\n\nA ∩ B : (6,6), soit 1 cas.\n\nP(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 6/36 + 1/36 − 1/36 = 6/36 = 1/6.\n\n<b>Erreur à éviter</b> — Additionner simplement les deux probabilités (7/36) compterait (6,6) deux fois." }
  ]
}
];

window.MATHSLY_4E = { chapitres: QUATRIEME_CHAPITRES, qcm: [] };
