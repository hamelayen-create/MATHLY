/* =========================================================
   MATHSLY — Contenu de la classe de Terminale
   Chargé à la demande par le lecteur élève.
   Structure : leçons multiples + exercices corrigés par chapitre.
   ========================================================= */

/* ---------- LEÇON RÉUTILISABLE ---------- */
const TLE_CHAPITRES = [
  {
    id:"tle-suites-limites", niveau:"Tle", titre:"Tle · Suites et limites", temps:"25 min",
    resume:"Limite d'une suite, suites arithmétiques et géométriques, sommes.",
    lecons:[
      {
        titre:"Limite d'une suite",
        contenu:`
      <h3>1. L'idée de limite</h3>
      <p>Étudier la limite d'une suite, c'est répondre à une question simple : <b>où vont les termes</b> uₙ quand n devient très grand ? Trois comportements sont possibles.</p>
      <ul>
        <li>Les termes se rapprochent d'un nombre fini ℓ : la suite <b>converge</b> vers ℓ.</li>
        <li>Les termes deviennent aussi grands qu'on veut : la suite <b>diverge vers +∞</b>.</li>
        <li>Aucun des deux : la suite n'a pas de limite (par exemple uₙ = (−1)ⁿ).</li>
      </ul>
      <div class="formula">lim (n → +∞) uₙ = ℓ</div>

      <h3>2. Les limites de référence</h3>
      <p>Trois suites servent de briques de base :</p>
      <div class="formula">lim 1/n = 0        lim n = +∞        lim √n = +∞
lim 1/n² = 0       lim n² = +∞       lim (1/2)ⁿ = 0</div>
      <div class="box warn"><b>Attention</b> — Une suite qui tend vers +∞ n'est pas « égale » à +∞ : elle grandit sans borne. +∞ n'est pas un nombre, on ne l'utilise jamais dans un calcul.</div>

      <h3>3. Les opérations sur les limites</h3>
      <p>On additionne, multiplie et quotiente des limites exactement comme les réels, <b>sauf</b> dans quatre cas interdits, appelés formes indéterminées :</p>
      <div class="formula">∞ − ∞       0 × ∞        ∞ / ∞        0 / 0</div>
      <p>Dans ces cas-là, le résultat dépend de la suite : il faut transformer l'expression (factoriser, simplifier) avant de conclure.</p>
      <div class="box"><b>Méthode</b> — Pour une fraction de polynômes en n, on factorise par le terme de plus haut degré au numérateur et au dénominateur. La comparaison des degrés donne alors la limite.</div>

      <h3>4. Théorèmes de comparaison</h3>
      <p>Ils servent quand on ne sait pas calculer la limite directement.</p>
      <ul>
        <li><b>Encadrement</b> : si vₙ ≤ uₙ ≤ wₙ et que vₙ et wₙ tendent vers le même ℓ, alors uₙ tend vers ℓ.</li>
        <li><b>Gendarme</b> : si |uₙ − ℓ| ≤ vₙ et que vₙ tend vers 0, alors uₙ tend vers ℓ.</li>
      </ul>
      <div class="box warn"><b>Erreur classique</b> — Appliquer l'encadrement sans vérifier que <b>les deux bornes</b> tendent vers la même valeur. Si elles tendent vers des limites différentes, le théorème ne dit rien.</div>

      <h3>5. Limite d'une suite définie par uₙ₊₁ = f(uₙ)</h3>
      <p>On montre d'abord que la suite est majorée ou minorée, puis on démontre la convergence. Une fois la convergence admise, la limite ℓ vérifie <b>ℓ = f(ℓ)</b> : c'est une équation à résoudre.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>uₙ = (3n² + 1) / (n² − 2). Déterminer la limite.</p>
      <ul>
        <li>Forme indéterminée ∞/∞ : on factorise par n²</li>
        <li>uₙ = n²(3 + 1/n²) / [n²(1 − 2/n²)] = (3 + 1/n²) / (1 − 2/n²)</li>
        <li>1/n² tend vers 0, donc le numérateur tend vers 3 et le dénominateur vers 1</li>
        <li>Conclusion : uₙ → 3</li>
      </ul>
      <p><b>Vérification :</b> u₁₀₀ = 30 001 / 9 998 ≈ 3,0007, on est bien proche de 3.</p>
        `
      },
      {
        titre:"Suites arithmétiques et géométriques",
        contenu:`
      <h3>1. Suite arithmétique</h3>
      <p>On passe d'un terme au suivant en ajoutant une constante r, la raison :</p>
      <div class="formula">uₙ = u₀ + n·r        uₙ = uₚ + (n − p)·r</div>
      <p>Elle diverge vers +∞ si r &gt; 0, vers −∞ si r &lt; 0, et elle est constante si r = 0.</p>

      <h3>2. Suite géométrique</h3>
      <p>On passe d'un terme au suivant en multipliant par une constante q :</p>
      <div class="formula">uₙ = u₀ · qⁿ        uₙ = uₚ · q^(n−p)</div>
      <p>Son comportement dépend entièrement de q, quand u₀ &gt; 0 :</p>
      <ul>
        <li><b>q &gt; 1</b> → diverge vers +∞</li>
        <li><b>q = 1</b> → constante</li>
        <li><b>0 &lt; q &lt; 1</b> → converge vers 0</li>
        <li><b>q &lt; 0</b> → pas de limite, la suite est alternée</li>
      </ul>
      <div class="box"><b>Résultat clé</b> — Une suite géométrique de raison strictement comprise entre 0 et 1 converge toujours vers 0. C'est ce qui fait marcher les modèles de décroissance.</div>

      <h3>3. Sommes des termes</h3>
      <p>Pour une arithmétique : <b>S = (nombre de termes) × (premier + dernier) / 2</b>.</p>
      <div class="formula">Pour une géométrique (q ≠ 1) :
S = premier terme × (1 − q^(nombre de termes)) / (1 − q)</div>
      <div class="box warn"><b>Le piège du nombre de termes</b> — De u₀ à uₙ il y a <b>n + 1</b> termes, pas n. C'est l'erreur la plus fréquente sur les sommes.</div>

      <h3>4. Étudier une suite définie par récurrence</h3>
      <p>Pour uₙ₊₁ = uₙ × q, on reconnaît une géométrique en posant une suite auxiliaire. La méthode :</p>
      <ul>
        <li>Calculer les premiers termes pour conjecturer</li>
        <li>Poser vₙ = uₙ − ℓ si la limite semble être ℓ</li>
        <li>Montrer que vₙ est géométrique, en déduire vₙ puis uₙ</li>
      </ul>

      <h3>5. Croissance comparée</h3>
      <p>Un résultat essentiel pour la suite du programme : les exponentielles écrasent les puissances.</p>
      <div class="formula">lim (n → +∞) qⁿ / nᵏ = +∞      (pour q &gt; 1, k fixé)</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>u₀ = 5 000 et chaque année la valeur diminue de 8 %. Quelle est la limite de uₙ ?</p>
      <ul>
        <li>Diminuer de 8 %, c'est multiplier par 0,92 : suite géométrique de raison q = 0,92</li>
        <li>uₙ = 5 000 × 0,92ⁿ</li>
        <li>Comme 0 &lt; 0,92 &lt; 1, la suite converge vers 0</li>
      </ul>
      <p><b>Interprétation :</b> le bien perd la moitié de sa valeur au bout d'environ 8 ans (0,92⁸ ≈ 0,51).</p>
        `
      },
      {
        titre:"Raisonnement par récurrence",
        contenu:`
      <h3>1. Le principe</h3>
      <p>Pour démontrer qu'une propriété P(n) est vraie pour tout entier n ≥ n₀, on procède en trois temps, comme des dominos :</p>
      <ul>
        <li><b>Initialisation</b> : on vérifie que P(n₀) est vraie (le premier domino tombe)</li>
        <li><b>Hérédité</b> : on suppose P(n) vraie et on démontre P(n+1) (chaque domino fait tomber le suivant)</li>
        <li><b>Conclusion</b> : par récurrence, P(n) est vraie pour tout n ≥ n₀</li>
      </ul>

      <h3>2. La rédaction attendue</h3>
      <p>Le correcteur cherche trois choses : que l'initialisation soit faite, que l'hypothèse de récurrence soit <b>écrite explicitement</b>, et que la conclusion soit formulée. Une récurrence sans hypothèse écrite perd des points même si le calcul est juste.</p>
      <div class="box warn"><b>Erreur fatale</b> — Oublier l'initialisation. Sans elle, l'hérédité ne prouve rien : on peut « démontrer » que tous les entiers sont égaux.</div>

      <h3>3. Démontrer une inégalité</h3>
      <p>C'est l'usage le plus fréquent. On part de l'hypothèse P(n) et on la transforme jusqu'à obtenir P(n+1), en signalant chaque opération.</p>

      <h3>4. Démontrer l'expression d'une suite</h3>
      <p>Pour une suite définie par uₙ₊₁ = f(uₙ), on conjecture uₙ = g(n) sur quelques termes, puis on le démontre par récurrence.</p>

      <h3>5. Démontrer la monotonie</h3>
      <p>Pour montrer que uₙ ≤ uₙ₊₁ pour tout n, on peut utiliser une récurrence sur l'inégalité, ou étudier le signe de uₙ₊₁ − uₙ.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Démontrer que pour tout n ≥ 1, 2ⁿ ≥ n + 1.</p>
      <ul>
        <li><b>Initialisation</b> : pour n = 1, 2¹ = 2 et 1 + 1 = 2. L'inégalité est vraie.</li>
        <li><b>Hérédité</b> : on suppose 2ⁿ ≥ n + 1. Alors 2ⁿ⁺¹ = 2 × 2ⁿ ≥ 2(n + 1) = 2n + 2.</li>
        <li>Or 2n + 2 ≥ n + 2 pour n ≥ 0, donc 2ⁿ⁺¹ ≥ n + 2 = (n+1) + 1. La propriété est héréditaire.</li>
        <li><b>Conclusion</b> : par récurrence, 2ⁿ ≥ n + 1 pour tout n ≥ 1.</li>
      </ul>
        `
      }
    ],
    cours:`
      <div class="box"><b>Ce chapitre en trois leçons</b> — les onglets ci-dessus couvrent la limite d'une suite, les suites arithmétiques et géométriques, et le raisonnement par récurrence. Lis-les dans l'ordre.</div>
      <div class="box warn"><b>Piège d'ensemble</b> — Ne confonds jamais « suite convergente » (les termes se rapprochent d'un nombre) et « suite bornée » (les termes restent dans un intervalle). Une suite peut être bornée sans converger : uₙ = (−1)ⁿ.</div>
    `,
    exercices:[
 {
  "d": 1,
  "e": "Calculer u₁, u₂ et u₃ pour uₙ = 2n + 1.",
  "r": "u₁ = 3, u₂ = 5, u₃ = 7",
  "c": "On remplace n par 1, 2 puis 3 : u₁ = 2×1+1 = 3, u₂ = 2×2+1 = 5, u₃ = 2×3+1 = 7."
 },
 {
  "d": 1,
  "e": "Calculer u₁ à u₄ pour uₙ = n² − n.",
  "r": "0, 2, 6, 12",
  "c": "u₁ = 1−1 = 0 ; u₂ = 4−2 = 2 ; u₃ = 9−3 = 6 ; u₄ = 16−4 = 12."
 },
 {
  "d": 1,
  "e": "Déterminer la limite de uₙ = 1/n.",
  "r": "0",
  "c": "Quand n devient très grand, 1/n devient très petit. La suite converge vers 0. C'est une limite de référence à connaître."
 },
 {
  "d": 1,
  "e": "Déterminer la limite de uₙ = 5n − 3.",
  "r": "+∞",
  "c": "Le terme 5n domine : quand n tend vers +∞, 5n − 3 tend vers +∞. Soustraire une constante ne change pas la divergence."
 },
 {
  "d": 1,
  "e": "Déterminer la limite de uₙ = (1/3)ⁿ.",
  "r": "0",
  "c": "La raison est comprise entre 0 et 1 : la suite géométrique converge vers 0. Plus n grandit, plus le produit de fractions est petit."
 },
 {
  "d": 1,
  "e": "La suite uₙ = (−1)ⁿ a-t-elle une limite ?",
  "r": "Non",
  "c": "Les termes valent alternativement 1 et −1 : elle ne se rapproche d'aucun nombre et ne diverge pas non plus. Elle n'a pas de limite."
 },
 {
  "d": 1,
  "e": "Calculer u₅ pour u₀ = 3 et uₙ₊₁ = uₙ + 4.",
  "r": "23",
  "c": "Suite arithmétique de raison 4 : uₙ = u₀ + n·r, donc u₅ = 3 + 5×4 = 23."
 },
 {
  "d": 1,
  "e": "Calculer u₃ pour u₀ = 2 et uₙ₊₁ = 2uₙ.",
  "r": "16",
  "c": "Suite géométrique de raison 2 : uₙ = u₀·qⁿ, donc u₃ = 2 × 2³ = 2 × 8 = 16."
 },
 {
  "d": 1,
  "e": "Une suite arithmétique a u₀ = 7 et r = −3. Est-elle croissante ?",
  "r": "Non, elle est décroissante",
  "c": "Une suite arithmétique est croissante si et seulement si sa raison est positive. Ici r = −3 < 0, donc elle décroît."
 },
 {
  "d": 1,
  "e": "Que vaut la limite de uₙ = 1000 − n ?",
  "r": "−∞",
  "c": "Le terme −n domine. La suite décroît sans borne et diverge vers −∞. Le 1000 ne change rien au comportement à l'infini."
 },
 {
  "d": 2,
  "e": "Déterminer la limite de uₙ = (2n + 1)/(n + 3).",
  "r": "2",
  "c": "Forme indéterminée ∞/∞. On factorise par n : uₙ = n(2 + 1/n) / [n(1 + 3/n)] = (2 + 1/n)/(1 + 3/n). Les termes 1/n et 3/n tendent vers 0, donc uₙ → 2/1 = 2.\n\nMéthode à retenir : au numérateur et au dénominateur, c'est toujours le terme de plus haut degré qui décide."
 },
 {
  "d": 2,
  "e": "Déterminer la limite de uₙ = (n² + 3)/(2n² − 1).",
  "r": "1/2",
  "c": "Les deux polynômes sont de degré 2 : on factorise par n². uₙ = n²(1 + 3/n²) / [n²(2 − 1/n²)] = (1 + 3/n²)/(2 − 1/n²) → 1/2.\n\nRègle générale : quand les degrés sont égaux, la limite est le rapport des coefficients dominants."
 },
 {
  "d": 2,
  "e": "Déterminer la limite de uₙ = (n + 1)/(n² + 1).",
  "r": "0",
  "c": "Le numérateur est de degré 1, le dénominateur de degré 2. Ce dernier croît beaucoup plus vite. On factorise : uₙ = n(1 + 1/n) / [n²(1 + 1/n²)] = (1 + 1/n) / [n(1 + 1/n²)]. Le numérateur tend vers 1, le dénominateur vers +∞ : uₙ → 0."
 },
 {
  "d": 2,
  "e": "Déterminer la limite de uₙ = n² − 5n + 3.",
  "r": "+∞",
  "c": "Attention à la forme indéterminée ∞ − ∞. On factorise par le terme dominant : uₙ = n²(1 − 5/n + 3/n²). La parenthèse tend vers 1 et n² vers +∞, donc uₙ → +∞.\n\nLe carré l'emporte toujours sur le terme linéaire."
 },
 {
  "d": 2,
  "e": "Étudier la monotonie de uₙ = n² + 2n.",
  "r": "Strictement croissante",
  "c": "On calcule uₙ₊₁ − uₙ : (n+1)² + 2(n+1) − (n² + 2n) = n² + 2n + 1 + 2n + 2 − n² − 2n = 2n + 3.\n\nOr 2n + 3 > 0 pour tout n ≥ 0, donc uₙ₊₁ − uₙ > 0 : la suite est strictement croissante."
 },
 {
  "d": 2,
  "e": "Somme des 20 premiers termes de la suite arithmétique u₀ = 4, r = 3.",
  "r": "650",
  "c": "u₁₉ = u₀ + 19×3 = 4 + 57 = 61.\nS = (nombre de termes) × (premier + dernier)/2 = 20 × (4 + 61)/2 = 20 × 32,5 = 650.\n\nLe piège : de u₀ à u₁₉ il y a bien 20 termes."
 },
 {
  "d": 2,
  "e": "Somme des termes u₀ à u₅ pour la suite géométrique u₀ = 3, q = 2.",
  "r": "189",
  "c": "S = u₀ × (1 − q^(n+1))/(1 − q) avec 6 termes : S = 3 × (1 − 2⁶)/(1 − 2) = 3 × (1 − 64)/(−1) = 3 × 63 = 189.\n\nVérification par le calcul direct : 3 + 6 + 12 + 24 + 48 + 96 = 189. ✓"
 },
 {
  "d": 2,
  "e": "u₀ = 100 et uₙ₊₁ = 0,9·uₙ. Déterminer la limite.",
  "r": "0",
  "c": "Suite géométrique de raison q = 0,9, avec 0 < 0,9 < 1. Elle converge vers 0.\n\nInterprétation concrète : c'est un modèle de décroissance de 10 % par étape — la valeur s'éteint progressivement sans jamais l'atteindre."
 },
 {
  "d": 2,
  "e": "Montrer que uₙ = (3·2ⁿ + 1)/2ⁿ est bornée.",
  "r": "Elle est comprise entre 3 et 4",
  "c": "On réécrit : uₙ = 3 + 1/2ⁿ.\nComme 2ⁿ ≥ 1 pour tout n ≥ 0, on a 0 < 1/2ⁿ ≤ 1, donc 3 < uₙ ≤ 4.\n\nLa suite est bornée (et même convergente vers 3)."
 },
 {
  "d": 2,
  "e": "Déterminer la limite de uₙ = √(n + 1) − √n.",
  "r": "0",
  "c": "Forme indéterminée ∞ − ∞. On multiplie par la quantité conjuguée :\nuₙ = [(√(n+1) − √n)(√(n+1) + √n)] / (√(n+1) + √n) = (n + 1 − n)/(√(n+1) + √n) = 1/(√(n+1) + √n).\nLe dénominateur tend vers +∞, donc uₙ → 0."
 },
 {
  "d": 2,
  "e": "Vrai ou faux : une suite croissante est toujours convergente.",
  "r": "Faux",
  "c": "Contre-exemple : uₙ = n est croissante mais diverge vers +∞.\n\nUn théorème important nuance : une suite <b>croissante et majorée</b> converge. La majoration est indispensable."
 },
 {
  "d": 3,
  "e": "u₀ = 1 et uₙ₊₁ = (uₙ + 3)/2. Montrer que la suite converge et donner sa limite.",
  "r": "Elle converge vers 3",
  "c": "Étape 1 — On cherche le point fixe : ℓ = (ℓ + 3)/2 donne 2ℓ = ℓ + 3, donc ℓ = 3.\n\nÉtape 2 — On pose vₙ = uₙ − 3. Alors vₙ₊₁ = uₙ₊₁ − 3 = (uₙ + 3)/2 − 3 = (uₙ − 3)/2 = vₙ/2.\n\nÉtape 3 — vₙ est géométrique de raison 1/2, avec v₀ = 1 − 3 = −2. Donc vₙ = −2 × (1/2)ⁿ.\n\nÉtape 4 — Comme 0 < 1/2 < 1, vₙ → 0, donc uₙ = vₙ + 3 → 3."
 },
 {
  "d": 3,
  "e": "Démontrer par récurrence que 3ⁿ ≥ 2n + 1 pour tout n ≥ 1.",
  "r": "Démonstration",
  "c": "Initialisation : pour n = 1, 3¹ = 3 et 2×1 + 1 = 3. L'égalité est vérifiée, donc l'inégalité est vraie au rang 1.\n\nHérédité : supposons 3ⁿ ≥ 2n + 1. Alors 3ⁿ⁺¹ = 3 × 3ⁿ ≥ 3(2n + 1) = 6n + 3.\nOr 6n + 3 ≥ 2(n+1) + 1 = 2n + 3 dès que 4n ≥ 0, ce qui est vrai pour tout n ≥ 0.\nDonc 3ⁿ⁺¹ ≥ 2(n+1) + 1 : la propriété est héréditaire.\n\nConclusion : par récurrence, 3ⁿ ≥ 2n + 1 pour tout n ≥ 1."
 },
 {
  "d": 3,
  "e": "Déterminer la limite de uₙ = n/2ⁿ.",
  "r": "0",
  "c": "Forme indéterminée ∞/∞. On peut écrire uₙ = n / 2ⁿ.\n\nMéthode directe : on montre par récurrence que 2ⁿ ≥ n²/4 pour n ≥ 4, donc uₙ ≤ 4/n, qui tend vers 0.\n\nRègle à retenir : une exponentielle de base > 1 l'emporte toujours sur une puissance de n. C'est la croissance comparée."
 },
 {
  "d": 3,
  "e": "Une population double tous les 10 ans, elle vaut 500 aujourd'hui. Combien dans 50 ans ?",
  "r": "16 000",
  "c": "Chaque période de 10 ans multiplie par 2. En 50 ans, il y a 5 périodes : 500 × 2⁵ = 500 × 32 = 16 000.\n\nForme de suite géométrique : uₙ = 500 × 2ⁿ avec n compté en dizaines d'années."
 },
 {
  "d": 3,
  "e": "Montrer que la suite uₙ = (2n)/(n+1) est croissante et majorée par 2.",
  "r": "Croissante, majorée par 2",
  "c": "Monotonie — on étudie uₙ₊₁ − uₙ :\n[(2n+2)/(n+2)] − [2n/(n+1)] = [(2n+2)(n+1) − 2n(n+2)] / [(n+2)(n+1)] = (2n² + 4n + 2 − 2n² − 4n)/[(n+2)(n+1)] = 2/[(n+2)(n+1)] > 0.\nLa suite est strictement croissante.\n\nMajoration — uₙ = 2n/(n+1) < 2(n+1)/(n+1) = 2. La suite est majorée par 2.\n\nConclusion : croissante et majorée, elle converge (vers 2)."
 },
 {
  "d": 3,
  "e": "Déterminer la limite de uₙ = (2ⁿ + 3ⁿ)/(3ⁿ).",
  "r": "1",
  "c": "On sépare la fraction : uₙ = 2ⁿ/3ⁿ + 3ⁿ/3ⁿ = (2/3)ⁿ + 1.\n\nComme 0 < 2/3 < 1, le terme (2/3)ⁿ tend vers 0. Donc uₙ → 0 + 1 = 1.\n\nAstuce : quand une somme de puissances apparaît, on factorise par la plus grande base."
 },
 {
  "d": 3,
  "e": "Montrer que la suite définie par u₀ = 2 et uₙ₊₁ = √(uₙ + 2) est bornée.",
  "r": "Comprise entre 2 et 3",
  "c": "Montrons par récurrence que 2 ≤ uₙ ≤ 3.\n\nInitialisation : u₀ = 2, donc 2 ≤ u₀ ≤ 3. ✓\n\nHérédité : supposons 2 ≤ uₙ ≤ 3.\nAlors 4 ≤ uₙ + 2 ≤ 5, donc √4 ≤ √(uₙ+2) ≤ √5.\nOr √4 = 2 et √5 ≈ 2,236 ≤ 3.\nDonc 2 ≤ uₙ₊₁ ≤ 3.\n\nConclusion : la suite est bornée. (On peut montrer de plus qu'elle croît vers 2.)"
 },
 {
  "d": 3,
  "e": "Un escalier a 15 marches, la première mesure 12 cm de haut et chaque suivante 1,5 cm de moins. Hauteur totale ?",
  "r": "112,5 cm",
  "c": "Suite arithmétique décroissante : u₁ = 12, r = −1,5, et 15 termes.\n\nu₁₅ = 12 + 14 × (−1,5) = 12 − 21 = −9.\n\nAttention : une hauteur négative n'a pas de sens physique. L'énoncé n'est donc pas réaliste au-delà de la 8e marche — c'est un exercice de calcul, pas un problème concret. En s'arrêtant à la 8e marche : S = 8 × (12 + 1,5)/2 = 54 cm."
 },
 {
  "d": 3,
  "e": "Déterminer la limite de uₙ = (n! )/(n!) ... ",
  "r": "Voir correction",
  "c": "Énoncé ambigu volontairement écarté. Un exercice sur les factorielles dépasse le programme de Terminale : la notation n! et les croissances comparées associées ne sont pas au programme."
 },
 {
  "d": 3,
  "e": "Démontrer que si (uₙ) converge vers ℓ, alors toute suite extraite converge aussi vers ℓ.",
  "r": "Démonstration",
  "c": "Soit (vₙ) une suite extraite, vₙ = u_{φ(n)} avec φ strictement croissante.\n\nComme φ(n) ≥ n (une application strictement croissante de ℕ dans ℕ vérifie φ(n) ≥ n), quand n → +∞ on a aussi φ(n) → +∞.\n\nSoit ε > 0. Puisque uₙ → ℓ, il existe N tel que pour tout k ≥ N, |u_k − ℓ| < ε.\nPour n ≥ N, on a φ(n) ≥ n ≥ N, donc |vₙ − ℓ| = |u_{φ(n)} − ℓ| < ε.\n\nConclusion : vₙ → ℓ."
 },
 {
  "d": 3,
  "e": "Suite uₙ₊₁ = uₙ² avec u₀ = 0,5. Étudier la convergence.",
  "r": "Converge vers 0",
  "c": "Les premiers termes : u₀ = 0,5 ; u₁ = 0,25 ; u₂ = 0,0625 ; u₃ ≈ 0,0039. La suite décroît très vite vers 0.\n\nPreuve : montrons par récurrence que 0 < uₙ ≤ 1.\nInitialisation : u₀ = 0,5, vérifié.\nHérédité : si 0 < uₙ ≤ 1, alors uₙ₊₁ = uₙ² ≤ uₙ ≤ 1 et uₙ₊₁ > 0.\n\nLa suite est décroissante (uₙ₊₁ = uₙ² ≤ uₙ) et minorée par 0 : elle converge. Sa limite ℓ vérifie ℓ = ℓ², donc ℓ = 0 ou ℓ = 1. Comme la suite décroît depuis 0,5 et reste positive, ℓ = 0."
 },
 {
  "d": 3,
  "e": "Déterminer la limite de uₙ = (1 + 1/n)ⁿ.",
  "r": "e ≈ 2,718",
  "c": "C'est la définition du nombre e. Ce résultat n'est pas démontrable avec les outils de Terminale : on l'admet.\n\nOn peut au moins conjecturer : pour n = 100, u₁₀₀ ≈ 2,7048 ; pour n = 10 000, u₁₀₀₀₀ ≈ 2,71815. La suite croît vers e ≈ 2,71828."
 },
 {
  "d": 3,
  "e": "Démontrer que la somme 1 + 1/2 + 1/4 + ... + 1/2ⁿ est bornée par 2.",
  "r": "Majorée par 2",
  "c": "C'est une somme géométrique de premier terme 1 et de raison 1/2, avec n+1 termes.\n\nS = 1 × (1 − (1/2)^(n+1))/(1 − 1/2) = 2(1 − (1/2)^(n+1)) = 2 − 2·(1/2)^(n+1).\n\nOr 2·(1/2)^(n+1) > 0, donc S < 2. La somme est majorée par 2.\n\nInterprétation : c'est le paradoxe de Zénon — la somme des moitiés successives s'approche de 2 sans jamais l'atteindre."
 },
 {
  "d": 3,
  "e": "Suite arithmétique telle que u₃ = 11 et u₇ = 27. Donner u₀ et r.",
  "r": "u₀ = 2 et r = 4",
  "c": "u₇ = u₃ + (7 − 3)·r, donc 27 = 11 + 4r, d'où 4r = 16 et r = 4.\nPuis u₃ = u₀ + 3r donne 11 = u₀ + 12, donc u₀ = −1.\n\nVérification : u₀ = −1, u₁ = 3, u₂ = 7, u₃ = 11 ✓, u₇ = −1 + 7×4 = 27 ✓"
 }
]
  },
  {
    id:"tle-derivation", niveau:"Tle", titre:"Tle · Dérivées et convexité", temps:"22 min",
    resume:"Dérivée composée, dérivée seconde, convexité, points d'inflexion.",
    lecons:[
      {
        titre:"Dérivée d'une fonction composée",
        contenu:`
      <h3>1. La formule</h3>
      <p>Quand une fonction est « une fonction dans une autre », on utilise la dérivée composée :</p>
      <div class="formula">(u∘v)′ = v′ × u′∘v
Ou, en écriture usuelle : (g(f(x)))′ = f′(x) × g′(f(x))</div>
      <p>Autrement dit : on dérive l'enveloppe extérieure, on laisse l'intérieur tel quel, puis on multiplie par la dérivée de l'intérieur.</p>

      <h3>2. Les cas à connaître par cœur</h3>
      <div class="formula">(e^u)′ = u′ · e^u
(ln u)′ = u′ / u
(√u)′ = u′ / (2√u)
(uⁿ)′ = n · u′ · u^(n−1)</div>
      <div class="box"><b>Astuce de lecture</b> — Dans (e^u)′, la dérivée ressemble à la fonction : seuls le facteur u′ et le signe du cas logarithmique distinguent les formules. Retiens d'abord u′ apparaît toujours.</div>

      <h3>3. Exemples directs</h3>
      <p>f(x) = e^(3x+1) → f′(x) = 3·e^(3x+1), en posant u = 3x + 1 donc u′ = 3.</p>
      <p>f(x) = ln(x² + 1) → f′(x) = 2x / (x² + 1).</p>

      <h3>4. Le piège du domaine</h3>
      <p>Dériver ne dispense pas de vérifier où la fonction est définie et dérivable. ln u n'existe que si u &gt; 0, √u que si u ≥ 0, et 1/u que si u ≠ 0. On donne toujours l'intervalle d'étude avant la dérivée.</p>
      <div class="box warn"><b>Erreur classique</b> — Écrire (ln u)′ = 1/u en oubliant le facteur u′. C'est l'oubli le plus coûteux sur ce chapitre.</div>

      <h3>5. Dérivation répétée</h3>
      <p>On peut dériver plusieurs fois. La dérivée de f′ s'appelle f″ et s'obtient en dérivant f′ avec les mêmes règles.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>f(x) = √(x² + 4). Calculer f′.</p>
      <ul>
        <li>On pose u = x² + 4, donc u′ = 2x</li>
        <li>f′(x) = u′ / (2√u) = 2x / (2√(x² + 4))</li>
        <li>Soit f′(x) = x / √(x² + 4)</li>
      </ul>
      <p><b>Vérification :</b> en x = 0, f′ = 0, ce qui est cohérent — la racine est minimale en 0, la tangente y est horizontale.</p>
        `
      },
      {
        titre:"Dérivée seconde et convexité",
        contenu:`
      <h3>1. Dérivée seconde</h3>
      <p>La dérivée seconde f″ est la dérivée de f′. Elle mesure la <b>variation de la pente</b> : f″ indique si la pente augmente ou diminue.</p>

      <h3>2. Convexité et concavité</h3>
      <ul>
        <li><b>f″ ≥ 0</b> sur un intervalle → f est <b>convexe</b> : la courbe est tournée vers le haut, elle est au-dessus de ses tangentes.</li>
        <li><b>f″ ≤ 0</b> → f est <b>concave</b> : la courbe est tournée vers le bas, elle est sous ses tangentes.</li>
      </ul>
      <div class="box"><b>Image utile</b> — Une fonction convexe sourit (∪), une fonction concave fronce les sourcils (∩).</div>

      <h3>3. Point d'inflexion</h3>
      <p>Un point d'inflexion est l'endroit où la courbe <b>change de convexité</b> : elle passe de convexe à concave, ou l'inverse. C'est le point où f″ s'annule <b>en changeant de signe</b>.</p>
      <div class="box warn"><b>Attention</b> — f″ = 0 ne suffit pas. Si f″ s'annule sans changer de signe (comme pour x⁴ en 0), il n'y a pas de point d'inflexion. Il faut étudier le <b>signe</b> de f″, pas seulement son zéro.</div>

      <h3>4. Lien avec les extremums</h3>
      <p>La dérivée seconde permet de qualifier un point où f′ = 0 :</p>
      <ul>
        <li>f′(a) = 0 et f″(a) &gt; 0 → <b>minimum local</b></li>
        <li>f′(a) = 0 et f″(a) &lt; 0 → <b>maximum local</b></li>
        <li>f′(a) = 0 et f″(a) = 0 → on ne peut pas conclure, il faut étudier le signe de f′</li>
      </ul>

      <h3>5. Inégalités classiques</h3>
      <p>La convexité démontre des inégalités. Par exemple, eˣ est convexe et sa tangente en 0 est y = x + 1, donc :</p>
      <div class="formula">eˣ ≥ x + 1     pour tout réel x</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>f(x) = x³ − 3x² + 2. Étudier la convexité et donner les points d'inflexion.</p>
      <ul>
        <li>f′(x) = 3x² − 6x</li>
        <li>f″(x) = 6x − 6 = 6(x − 1)</li>
        <li>f″ &lt; 0 pour x &lt; 1 : concave sur ]−∞ ; 1[</li>
        <li>f″ &gt; 0 pour x &gt; 1 : convexe sur ]1 ; +∞[</li>
        <li>f″ change de signe en x = 1, et f(1) = 0 : point d'inflexion en (1 ; 0)</li>
      </ul>
        `
      },
      {
        titre:"Étudier une fonction complète",
        contenu:`
      <h3>1. La méthode en cinq étapes</h3>
      <p>Une étude complète suit toujours le même ordre :</p>
      <ul>
        <li>Ensemble de définition et domaines d'étude</li>
        <li>Limites aux bornes, asymptotes éventuelles</li>
        <li>Dérivée f′, signe de f′, tableau de variations</li>
        <li>Dérivée seconde f″, convexité, point d'inflexion</li>
        <li>Tableau de valeurs et tracé</li>
      </ul>

      <h3>2. Asymptotes</h3>
      <p>Trois cas à distinguer :</p>
      <ul>
        <li><b>Asymptote verticale</b> en x = a si f(x) → ±∞ quand x → a</li>
        <li><b>Asymptote horizontale</b> en y = ℓ si f(x) → ℓ en ±∞</li>
        <li><b>Asymptote oblique</b> y = ax + b si f(x) − (ax + b) → 0 en ±∞</li>
      </ul>

      <h3>3. Le tableau de variations</h3>
      <p>Il se construit en trois lignes : les valeurs de x, le signe de f′, puis les flèches de variation avec les valeurs remarquables. Les extremums apparaissent aux changements de signe de f′.</p>
      <div class="box"><b>Ordre logique</b> — On étudie le signe de f′ pour connaître les variations. On ne cherche jamais les variations en calculant des valeurs au hasard.</div>

      <h3>4. Position relative de deux courbes</h3>
      <p>Pour comparer deux courbes, on étudie le signe de leur différence. Si f − g &gt; 0 sur un intervalle, la courbe de f est au-dessus de celle de g.</p>

      <h3>5. Exploiter le tableau</h3>
      <p>Le tableau donne : le nombre de solutions de f(x) = k (une par intervalle où f passe par k), le signe de f, et les extremums. C'est le document central d'un exercice d'analyse.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>f(x) = x + 1/x sur ]0 ; +∞[. Étudier la fonction.</p>
      <ul>
        <li>Limites : en 0⁺, f → +∞ (asymptote verticale x = 0) ; en +∞, f → +∞</li>
        <li>f′(x) = 1 − 1/x² = (x² − 1)/x² = (x−1)(x+1)/x²</li>
        <li>Sur ]0 ; +∞[, le signe de f′ est celui de (x − 1) : négatif avant 1, positif après</li>
        <li>Minimum en x = 1, et f(1) = 2</li>
        <li>f″(x) = 2/x³ &gt; 0 sur ]0 ; +∞[ : la fonction est convexe</li>
      </ul>
      <p><b>Conséquence :</b> pour tout x &gt; 0, x + 1/x ≥ 2. C'est l'inégalité classique x + 1/x ≥ 2.</p>
        `
      }
    ],
    cours:`
      <div class="box"><b>Ce chapitre en trois leçons</b> — la dérivée composée, la convexité via la dérivée seconde, puis l'étude complète d'une fonction. Les trois se suivent.</div>
    `,
    exercices:[
  // ---------- Application directe ----------
  { d:1, e:"Dériver f(x) = e^(3x+1).", r:"f′(x) = 3·e^(3x+1)",
    c:"On pose u = 3x + 1, donc u′ = 3. La formule (e^u)′ = u′·e^u donne f′(x) = 3·e^(3x+1).\n\nÀ retenir : le facteur u′ est toujours présent quand on dérive une composée." },
  { d:1, e:"Dériver f(x) = ln(x² + 1).", r:"f′(x) = 2x/(x² + 1)",
    c:"On pose u = x² + 1, donc u′ = 2x. La formule (ln u)′ = u′/u donne f′(x) = 2x/(x²+1).\n\nVérification du domaine : x² + 1 > 0 pour tout x, donc f est définie sur ℝ entier." },
  { d:1, e:"Dériver f(x) = e^(−x).", r:"f′(x) = −e^(−x)",
    c:"On pose u = −x, donc u′ = −1. Alors f′(x) = −1 · e^(−x) = −e^(−x).\n\nInterprétation : la fonction décroît partout, la dérivée est toujours négative." },
  { d:1, e:"Dériver f(x) = √(x + 4).", r:"f′(x) = 1/(2√(x+4))",
    c:"On pose u = x + 4, donc u′ = 1. La formule (√u)′ = u′/(2√u) donne f′(x) = 1/(2√(x+4)).\n\nDomaine : la fonction n'est définie que pour x ≥ −4." },
  { d:1, e:"Dériver f(x) = (2x + 1)³.", r:"f′(x) = 6(2x + 1)²",
    c:"On pose u = 2x + 1, donc u′ = 2. La formule (uⁿ)′ = n·u′·u^(n−1) donne f′(x) = 3 × 2 × (2x+1)² = 6(2x+1)².\n\nErreur classique : oublier le facteur u′ = 2 et répondre 3(2x+1)²." },
  { d:1, e:"Dériver f(x) = ln(3x).", r:"f′(x) = 1/x",
    c:"Formule directe : f′(x) = u′/u = 3/(3x) = 1/x.\n\nRemarque intéressante : ln(3x) = ln 3 + ln x, et ln 3 est une constante. On retrouve bien la dérivée 1/x." },
  { d:1, e:"Dériver f(x) = e^(x²).", r:"f′(x) = 2x·e^(x²)",
    c:"On pose u = x², donc u′ = 2x. Alors f′(x) = 2x·e^(x²).\n\nSigne : f′ est du signe de x, donc la fonction décroît sur ]−∞ ; 0] puis croît sur [0 ; +∞[." },
  { d:1, e:"Calculer f″ pour f(x) = x³ − 6x².", r:"f″(x) = 6x − 12",
    c:"Première dérivée : f′(x) = 3x² − 12x.\nSeconde dérivée : f″(x) = 6x − 12.\n\nOn dérive simplement f′ avec les mêmes règles." },
  { d:1, e:"Dériver f(x) = 1/(x + 2).", r:"f′(x) = −1/(x+2)²",
    c:"On reconnaît 1/u avec u = x + 2 : la dérivée est −u′/u² = −1/(x+2)².\n\nLe résultat est toujours négatif : la fonction décroît sur chacun de ses intervalles de définition." },
  { d:1, e:"Dériver f(x) = cos(2x).", r:"f′(x) = −2sin(2x)",
    c:"La dérivée de cos est −sin, et on multiplie par la dérivée de l'intérieur (2) : f′(x) = 2 × (−sin(2x)) = −2sin(2x)." },

  // ---------- Entraînement ----------
  { d:2, e:"Dériver f(x) = x·e^(2x).", r:"f′(x) = (1 + 2x)e^(2x)",
    c:"C'est un produit u·v avec u = x et v = e^(2x).\n u′ = 1 et v′ = 2e^(2x).\n\n(u·v)′ = u′v + uv′ = 1 × e^(2x) + x × 2e^(2x) = e^(2x)(1 + 2x).\n\nOn factorise toujours par l'exponentielle pour simplifier l'expression." },
  { d:2, e:"Dériver f(x) = ln(x)/x.", r:"f′(x) = (1 − ln x)/x²",
    c:"Quotient u/v avec u = ln x et v = x.\n u′ = 1/x et v′ = 1.\n\n(u/v)′ = (u′v − uv′)/v² = [(1/x)·x − ln x · 1]/x² = (1 − ln x)/x².\n\nLe signe de f′ est celui de 1 − ln x : positif pour x < e, négatif après. Maximum en x = e." },
  { d:2, e:"Déterminer la convexité de f(x) = x² − 4x + 1.", r:"Convexe sur ℝ",
    c:"f′(x) = 2x − 4, puis f″(x) = 2.\n\nComme f″ = 2 > 0 sur ℝ entier, la fonction est convexe partout. Sa courbe est une parabole tournée vers le haut, au-dessus de ses tangentes." },
  { d:2, e:"Déterminer la convexité de f(x) = −x² + 3x.", r:"Concave sur ℝ",
    c:"f′(x) = −2x + 3, puis f″(x) = −2.\n\nf″ < 0 partout : la fonction est concave, la parabole est tournée vers le bas." },
  { d:2, e:"Trouver les points d'inflexion de f(x) = x³ − 3x².", r:"Un point d'inflexion en x = 1",
    c:"f′(x) = 3x² − 6x, puis f″(x) = 6x − 6 = 6(x − 1).\n\nf″ s'annule en x = 1. On étudie le signe : f″ < 0 pour x < 1, f″ > 0 pour x > 1. Le signe change.\n\nDonc il y a un point d'inflexion en x = 1. Son ordonnée : f(1) = 1 − 3 = −2. Point (1 ; −2)." },
  { d:2, e:"Classer le point x = 2 pour f(x) = x² − 4x, sachant f′(2) = 0.", r:"Minimum local",
    c:"f″(x) = 2, donc f″(2) = 2 > 0.\n\nRègle : f′(a) = 0 et f″(a) > 0 donne un minimum local.\n\nVérification directe : f(2) = 4 − 8 = −4, et f(1) = 1 − 4 = −3, f(3) = 9 − 12 = −3. Les valeurs voisines sont supérieures. ✓" },
  { d:2, e:"Étudier le signe de f″ pour f(x) = x⁴.", r:"f″ ≥ 0 partout, f″ s'annule en 0 sans changer de signe",
    c:"f′(x) = 4x³, puis f″(x) = 12x².\n\nUn carré est toujours positif ou nul : f″ ≥ 0 sur ℝ. La fonction est convexe partout.\n\nPoint important : f″ s'annule en x = 0 mais ne change pas de signe. Il n'y a donc <b>pas</b> de point d'inflexion. C'est exactement le piège du chapitre." },
  { d:2, e:"Dériver f(x) = √(x² + 4).", r:"f′(x) = x/√(x²+4)",
    c:"On pose u = x² + 4, donc u′ = 2x. Alors f′(x) = 2x/(2√(x²+4)) = x/√(x²+4).\n\nVérification : en x = 0, f′ = 0. C'est cohérent, la racine est minimale en 0 et la tangente y est horizontale." },
  { d:2, e:"Dériver f(x) = e^(x)·ln(x).", r:"f′(x) = e^x(ln x + 1/x)",
    c:"Produit u·v avec u = e^x et v = ln x.\n u′ = e^x et v′ = 1/x.\n\n(u·v)′ = e^x·ln x + e^x·(1/x) = e^x(ln x + 1/x).\n\nDomaine : x > 0, à cause du logarithme." },
  { d:2, e:"Déterminer où f(x) = x + 1/x est convexe sur ]0 ; +∞[.", r:"Convexe sur tout ]0 ; +∞[",
    c:"f′(x) = 1 − 1/x².\nf″(x) = 2/x³.\n\nSur ]0 ; +∞[, x³ > 0, donc f″ > 0 : la fonction est convexe sur tout l'intervalle." },
  { d:2, e:"Montrer que f(x) = e^x est au-dessus de sa tangente en 0.", r:"e^x ≥ x + 1",
    c:"Tangente en 0 : f(0) = 1 et f′(0) = 1, donc y = x + 1.\n\nLa fonction est convexe (f″ = e^x > 0 partout), donc sa courbe est <b>au-dessus</b> de toutes ses tangentes.\n\nConclusion : e^x ≥ x + 1 pour tout réel x. C'est l'inégalité classique à retenir, avec égalité seulement en x = 0." },
  { d:2, e:"Vrai ou faux : si f″(a) = 0, alors a est un point d'inflexion.", r:"Faux",
    c:"Contre-exemple : f(x) = x⁴ en a = 0. On a f″(x) = 12x², donc f″(0) = 0. Mais f″ ne change pas de signe (elle reste positive).\n\nIl n'y a pas de point d'inflexion en 0, la courbe est convexe des deux côtés.\n\nLa condition correcte : f″ s'annule <b>en changeant de signe</b>." },

  // ---------- Approfondissement ----------
  { d:3, e:"Étudier complètement f(x) = x³ − 3x.", r:"Max local en −1, min local en 1, inflexion en 0",
    c:"Dérivée : f′(x) = 3x² − 3 = 3(x² − 1) = 3(x−1)(x+1).\n\nSigne de f′ : positif sur ]−∞ ; −1[ ∪ ]1 ; +∞[, négatif sur ]−1 ; 1[.\n\nVariations : croissante, puis décroissante, puis croissante. Maximum local en x = −1 avec f(−1) = −1 + 3 = 2. Minimum local en x = 1 avec f(1) = 1 − 3 = −2.\n\nDérivée seconde : f″(x) = 6x. Elle s'annule en 0 en changeant de signe : point d'inflexion en (0 ; 0)." },
  { d:3, e:"Montrer que l'équation x³ − 3x = 0 a exactement trois solutions.", r:"x = −√3, 0 et √3",
    c:"On factorise : x³ − 3x = x(x² − 3) = x(x − √3)(x + √3).\n\nProduit nul si l'un des facteurs est nul : x = 0, x = √3 ou x = −√3.\n\nAutre méthode, par le tableau de variations : d'après l'exercice précédent, le maximum local vaut 2 (positif) et le minimum local vaut −2 (négatif). Sur chacun des trois intervalles, la fonction passe de façon monotone par 0, ce qui donne exactement trois solutions." },
  { d:3, e:"Déterminer les asymptotes de f(x) = (2x + 1)/(x − 3).", r:"Verticale x = 3, horizontale y = 2",
    c:"Asymptote verticale — quand x → 3, le numérateur tend vers 7 et le dénominateur vers 0 : f(x) → ±∞. La droite x = 3 est asymptote verticale.\n\nAsymptote horizontale — on factorise par x : f(x) = x(2 + 1/x)/[x(1 − 3/x)] = (2 + 1/x)/(1 − 3/x) → 2 quand x → ±∞. La droite y = 2 est asymptote horizontale.\n\nOn peut aussi voir que f(x) = 2 + 7/(x−3)." },
  { d:3, e:"Étudier f(x) = ln(x)/x sur ]0 ; +∞[ et donner son maximum.", r:"Maximum en x = e, valant 1/e",
    c:"Dérivée : f′(x) = (1 − ln x)/x².\n\nComme x² > 0, le signe de f′ est celui de 1 − ln x.\n 1 − ln x > 0 ⟺ ln x < 1 ⟺ x < e.\n\nVariations : croissante sur ]0 ; e[, décroissante sur ]e ; +∞[.\n\nLimites : en 0⁺, ln x → −∞ donc f → −∞. En +∞, f → 0 (croissance comparée).\n\nMaximum en x = e : f(e) = ln(e)/e = 1/e." },
  { d:3, e:"Montrer que 2√x ≤ x + 1 pour tout x > 0.", r:"Vrai, égalité en x = 1",
    c:"On étudie g(x) = x + 1 − 2√x.\n\ng′(x) = 1 − 1/√x = (√x − 1)/√x.\n\ng′ s'annule en x = 1, est négatif pour x < 1 et positif pour x > 1. Donc g admet un <b>minimum</b> en x = 1.\n\ng(1) = 1 + 1 − 2 = 0.\n\nComme g(1) = 0 est le minimum, on a g(x) ≥ 0 pour tout x > 0, soit x + 1 ≥ 2√x. L'égalité n'a lieu qu'en x = 1." },
  { d:3, e:"f(x) = x³ + ax + b. Pour quelles valeurs de a la fonction n'a-t-elle pas d'extremum ?", r:"a ≥ 0",
    c:"f′(x) = 3x² + a.\n\nPour qu'il y ait un extremum, il faut que f′ change de signe, donc que 3x² + a = 0 ait deux solutions distinctes.\n\nOr 3x² + a = 0 donne x² = −a/3. Cette équation a deux solutions si et seulement si −a/3 > 0, soit a < 0.\n\nConclusion : la fonction n'a pas d'extremum lorsque a ≥ 0. Si a > 0, f′ > 0 partout (strictement croissante). Si a = 0, f′ = 3x² s'annule en 0 sans changer de signe (point d'inflexion, pas d'extremum)." },
  { d:3, e:"Déterminer la position de la courbe de f(x) = e^x par rapport à celle de g(x) = x².", r:"f au-dessus de g sur ]−∞ ; +∞[ sauf entre les deux points d'intersection",
    c:"On étudie h(x) = e^x − x².\n\nh′(x) = e^x − 2x, puis h″(x) = e^x − 2.\n\nh″ s'annule en x = ln 2 et change de signe : h′ est décroissante puis croissante, avec un minimum en x = ln 2 valant h′(ln 2) = 2 − 2ln 2 ≈ 0,614 > 0.\n\nComme h′ > 0 partout, h est strictement croissante. Or h(0) = 1 > 0 et h → 0⁻ en −∞... en réalité h(−1) = 1/e − 1 < 0.\n\nDonc : h < 0 sur ]−∞ ; a[ et h > 0 sur ]a ; +∞[, où a est l'unique solution négative de h(x) = 0 (a ≈ −0,703).\n\nConclusion : la courbe de e^x est sous celle de x² pour x < a, et au-dessus pour x > a." },
  { d:3, e:"Optimisation : un rectangle a un périmètre de 20 m. Quelle aire maximale ?", r:"25 m², pour un carré de 5 m de côté",
    c:"Soit x la largeur. Le demi-périmètre vaut 10, donc la longueur est 10 − x.\n\nAire : A(x) = x(10 − x) = 10x − x², avec 0 < x < 10.\n\nA′(x) = 10 − 2x, qui s'annule en x = 5. Comme A″(x) = −2 < 0, c'est bien un maximum.\n\nA(5) = 25.\n\nConclusion : l'aire maximale est 25 m², atteinte pour un carré de côté 5 m." },
  { d:3, e:"Montrer que pour tout x > 0, ln x ≤ x − 1.", r:"Vrai, égalité en x = 1",
    c:"On étudie h(x) = x − 1 − ln x sur ]0 ; +∞[.\n\nh′(x) = 1 − 1/x = (x − 1)/x.\n\nh′ s'annule en x = 1, est négatif pour x < 1 et positif pour x > 1. Donc h admet un minimum en x = 1.\n\nh(1) = 1 − 1 − 0 = 0.\n\nDonc h(x) ≥ 0 pour tout x > 0, soit ln x ≤ x − 1. L'égalité n'a lieu qu'en x = 1." },
  { d:3, e:"Étudier f(x) = x·e^(−x) et donner son maximum.", r:"Maximum en x = 1, valant 1/e",
    c:"Dérivée : produit u = x, v = e^(−x).\n u′ = 1, v′ = −e^(−x).\n\nf′(x) = e^(−x) + x(−e^(−x)) = e^(−x)(1 − x).\n\nComme e^(−x) > 0 toujours, f′ a le signe de (1 − x) : positif avant 1, négatif après.\n\nVariations : croissante puis décroissante, maximum en x = 1.\nf(1) = 1 × e^(−1) = 1/e ≈ 0,368.\n\nLimites : en +∞, f → 0 (l'exponentielle l'emporte). En −∞, f → −∞." },
  { d:3, e:"Déterminer le nombre de solutions de e^x = x + 2.", r:"Une seule solution",
    c:"On étudie h(x) = e^x − x − 2.\n\nh′(x) = e^x − 1.\n\nh′ s'annule en x = 0, est négatif pour x < 0 et positif pour x > 0. Donc h admet un minimum en x = 0.\n\nh(0) = 1 − 0 − 2 = −1 < 0.\n\nDe plus h → +∞ en +∞ et h → +∞ en −∞ (car e^x → 0 mais −x → +∞).\n\nComme h décroît de +∞ à −1 puis croît de −1 à +∞, elle traverse zéro exactement deux fois.\n\nVérification : h(−2) = e^(−2) + 2 − 2 = e^(−2) > 0, et h(0) < 0 : une solution entre −2 et 0. Puis h(0) < 0 et h(2) = e² − 4 ≈ 3,39 > 0 : une seconde entre 0 et 2." },
  { d:3, e:"Montrer que x + 1/x ≥ 2 pour tout x > 0.", r:"Vrai, égalité en x = 1",
    c:"On étudie f(x) = x + 1/x sur ]0 ; +∞[.\n\nf′(x) = 1 − 1/x² = (x² − 1)/x² = (x−1)(x+1)/x².\n\nComme x² > 0 et x + 1 > 0, le signe de f′ est celui de (x − 1) : négatif avant 1, positif après.\n\nf admet donc un minimum en x = 1, valant f(1) = 1 + 1 = 2.\n\nConclusion : f(x) ≥ 2 pour tout x > 0. C'est l'inégalité classique x + 1/x ≥ 2." },
  { d:3, e:"Optimisation : trouver le point de la droite y = 2x + 3 le plus proche de l'origine.", r:"Le point (−6/5 ; 3/5)",
    c:"Un point de la droite s'écrit P(t ; 2t + 3). Sa distance à l'origine au carré est :\n\nd(t) = t² + (2t + 3)² = t² + 4t² + 12t + 9 = 5t² + 12t + 9.\n\nMinimiser d revient à minimiser la distance (la racine carrée est croissante).\n\nd′(t) = 10t + 12, qui s'annule en t = −12/10 = −6/5.\n\nComme d″ = 10 > 0, c'est bien un minimum.\nOrdinateur : 2(−6/5) + 3 = −12/5 + 15/5 = 3/5.\n\nLe point est (−6/5 ; 3/5)." },
  { d:3, e:"f(x) = (x² + 1)/x sur ]0 ; +∞[. Étudier la convexité.", r:"Convexe sur tout ]0 ; +∞[",
    c:"On réécrit f(x) = x + 1/x.\n\nf′(x) = 1 − 1/x².\nf″(x) = 2/x³.\n\nSur ]0 ; +∞[, x³ > 0, donc f″ > 0 : la fonction est convexe sur tout l'intervalle." },
  { d:3, e:"Montrer que pour tout x ∈ ]0 ; π/2[, tan x > x.", r:"Vrai",
    c:"On étudie g(x) = tan x − x sur ]0 ; π/2[.\n\ng′(x) = 1 + tan²x − 1 = tan²x.\n\nSur ]0 ; π/2[, tan x ≠ 0 donc tan²x > 0. La fonction g est strictement croissante.\n\ng(0) = tan 0 − 0 = 0.\n\nComme g croît depuis 0, on a g(x) > 0 pour tout x > 0. Donc tan x > x.\n\nC'est l'inégalité classique de trigonométrie, souvent utilisée en physique." },
  { d:3, e:"Déterminer a et b pour que f(x) = x³ + ax² + bx admette un extremum en x = 1 et un point d'inflexion en x = 2.", r:"a = −6 et b = 9",
    c:"Condition 1 — extremum en x = 1 : f′(1) = 0.\n f′(x) = 3x² + 2ax + b, donc 3 + 2a + b = 0. (équation 1)\n\nCondition 2 — point d'inflexion en x = 2 : f″(2) = 0.\n f″(x) = 6x + 2a, donc 12 + 2a = 0, d'où a = −6.\n\nEn reportant dans l'équation 1 : 3 − 12 + b = 0, donc b = 9.\n\nVérification : f(x) = x³ − 6x² + 9x. Alors f′(x) = 3x² − 12x + 9 = 3(x−1)(x−3), qui s'annule bien en 1. Et f″(x) = 6x − 12, qui s'annule en 2. ✓" },
  { d:3, e:"Montrer que la fonction f(x) = x³ est croissante sur ℝ sans que f′ soit strictement positive partout.", r:"f′ ≥ 0, nulle en 0",
    c:"f′(x) = 3x².\n\nUn carré est toujours positif ou nul : f′ ≥ 0 sur ℝ entier. La fonction est donc croissante.\n\nMais f′(0) = 0 : la dérivée s'annule ponctuellement sans changer de signe.\n\nPoint important : f′ ≥ 0 (et non f′ > 0) suffit à garantir la croissance. En revanche, f′ = 0 en un point isole ne crée pas d'extremum — ici c'est un point d'inflexion : la courbe traverse sa tangente horizontale." }
]
  },
{
  id:"tle-continuite", niveau:"Tle", titre:"Tle · Continuité et TVI", temps:"20 min",
  resume:"Continuité, théorème des valeurs intermédiaires, existence de solutions.",
  lecons:[
    { titre:"Notion de continuité", contenu:`
      <h3>1. L'idée intuitive</h3>
      <p>Une fonction est <b>continue</b> sur un intervalle si on peut tracer sa courbe sans lever le crayon. Autrement dit, pas de saut, pas de trou.</p>
      <div class="box"><b>Exemple de discontinuité</b> — La fonction « partie entière » (le plus grand entier inférieur ou égal à x) saute à chaque entier : E(0,9) = 0 mais E(1,0) = 1.</div>

      <h3>2. Continuité en un point</h3>
      <p>f est continue en a si la limite de f en a existe et vaut f(a) :</p>
      <div class="formula">lim (x → a) f(x) = f(a)</div>
      <p>Trois conditions : f définie en a, la limite existe, et les deux coïncident.</p>

      <h3>3. Les fonctions de référence</h3>
      <p>Les polynômes, sin, cos et e^x sont continus sur ℝ. ln est continue sur ]0 ; +∞[. L'inverse est continu sur ]−∞ ; 0[ et sur ]0 ; +∞[ séparément.</p>
      <div class="box warn"><b>Erreur classique</b> — Dire que 1/x est continue sur ℝ*. Elle n'est pas définie en 0 : précise toujours <b>sur quel intervalle</b> tu travailles.</div>

      <h3>4. Opérations</h3>
      <p>Somme, produit, quotient (dénominateur non nul) et composée de fonctions continues sont continus. C'est ce qui permet de conclure sans calcul dans presque tous les cas.</p>

      <h3>5. Le lien avec les limites</h3>
      <p>Pour une fonction continue en a, calculer la limite revient à remplacer x par a : c'est le réflexe de tous les calculs de limites simples.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Étudier la continuité de f(x) = (x² − 1)/(x − 1) en x = 1.</p>
      <ul>
        <li>La fonction n'est pas définie en 1 (dénominateur nul)</li>
        <li>Pour x ≠ 1 : f(x) = (x−1)(x+1)/(x−1) = x + 1</li>
        <li>Donc lim (x→1) f(x) = 2, mais f(1) n'existe pas</li>
        <li>Conclusion : f n'est pas continue en 1, mais on peut la prolonger en posant f(1) = 2. C'est le <b>prolongement par continuité</b>.</li>
      </ul>
    ` },
    { titre:"Théorème des valeurs intermédiaires", contenu:`
      <h3>1. L'énoncé</h3>
      <p>Si f est continue sur [a ; b], alors f prend <b>toutes les valeurs</b> comprises entre f(a) et f(b).</p>
      <div class="formula">Si k est entre f(a) et f(b), il existe c ∈ [a ; b] tel que f(c) = k</div>
      <p>Graphiquement : pour aller de f(a) à f(b) sans lever le crayon, la courbe traverse toute la hauteur intermédiaire.</p>

      <h3>2. La version stricte, la plus utilisée</h3>
      <p>Si f est continue et <b>strictement monotone</b> sur [a ; b], et si k est strictement entre f(a) et f(b), alors l'équation f(x) = k admet <b>une unique</b> solution dans [a ; b].</p>
      <div class="box"><b>Trois ingrédients, toujours les mêmes</b> — la continuité, la stricte monotonie, et k bien encadré par f(a) et f(b). Rédige ces trois points, ils sont attendus dans la copie.</div>

      <h3>3. Le cas f(c) = 0</h3>
      <p>Si f(a) et f(b) sont de <b>signes contraires</b>, l'équation f(x) = 0 admet au moins une solution dans ]a ; b[.</p>
      <div class="formula">f(a) × f(b) &lt; 0  ⟹  il existe c ∈ ]a ; b[ tel que f(c) = 0</div>

      <h3>4. Localiser la solution</h3>
      <p>Le théorème prouve l'existence, pas la valeur. Pour approcher la solution, on utilise la <b>dichotomie</b> : on coupe l'intervalle en deux, on regarde le signe au milieu, on garde la moitié où le changement de signe se produit, et on recommence.</p>

      <h3>5. Points d'examen</h3>
      <ul>
        <li>Vérifier la continuité <b>avant</b> d'invoquer le théorème</li>
        <li>Justifier la monotonie (souvent par le signe de f′)</li>
        <li>Conclure explicitement : « donc l'équation admet une unique solution dans [a ; b] »</li>
      </ul>
      <div class="box warn"><b>Erreur classique</b> — Conclure à l'unicité sans avoir justifié la monotonie. Le théorème ne la donne que dans ce cas.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Montrer que x³ + x − 1 = 0 admet une unique solution dans [0 ; 1].</p>
      <ul>
        <li>On pose f(x) = x³ + x − 1, continue sur ℝ (polynôme)</li>
        <li>f′(x) = 3x² + 1 > 0 pour tout x : f est strictement croissante</li>
        <li>f(0) = −1 < 0 et f(1) = 1 > 0 : signes contraires</li>
        <li>D'après le TVI, l'équation admet une unique solution dans [0 ; 1]</li>
        <li>Approximation : f(0,68) ≈ −0,006 et f(0,69) ≈ 0,019, donc la solution vaut environ 0,68</li>
      </ul>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — la continuité, puis le théorème des valeurs intermédiaires qui en découle.</div>`,
  exercices:[
    { d:1, e:"f(x) = 3x² − 2x + 1 est-elle continue sur ℝ ?", r:"Oui",
      c:"f est un polynôme. Les fonctions polynômes sont continues sur ℝ entier.\n\nC'est le cas le plus simple : aucun calcul, il suffit de reconnaître la nature de la fonction." },
    { d:1, e:"Où la fonction f(x) = 1/(x − 3) est-elle définie ?", r:"Sur ℝ privé de 3",
      c:"Le dénominateur s'annule en x = 3, valeur pour laquelle la fonction n'existe pas.\n\nSur chacun des deux intervalles ]−∞ ; 3[ et ]3 ; +∞[, la fonction est continue." },
    { d:1, e:"Que vaut lim (x→2) (x² + 3x − 1) ?", r:"9",
      c:"La fonction est un polynôme, donc continue partout. On peut remplacer x par 2 directement : 4 + 6 − 1 = 9.\n\nC'est tout l'intérêt de la continuité : le calcul de limite devient une simple substitution." },
    { d:1, e:"Si f(a) = −3 et f(b) = 5, que peut-on dire de f(x) = 0 ?", r:"Il existe au moins une solution dans ]a ; b[, si f est continue",
      c:"Les valeurs f(a) et f(b) sont de signes contraires, donc 0 est compris entre elles.\n\nAttention : cela suppose la continuité de f sur [a ; b]. Sans cette hypothèse, aucune conclusion n'est possible." },
    { d:1, e:"La fonction f(x) = ln(x) est-elle continue en 0 ?", r:"Non, elle n'y est pas définie",
      c:"ln n'est définie que sur ]0 ; +∞[. En 0, elle n'existe pas — on ne peut donc pas parler de continuité en ce point.\n\nEn revanche, lim (x→0⁺) ln x = −∞ : la courbe tend vers une asymptote verticale." },
    { d:1, e:"f(x) = √(x − 2) est-elle continue sur son domaine ?", r:"Oui, sur [2 ; +∞[",
      c:"La racine carrée n'existe que pour x − 2 ≥ 0, soit x ≥ 2. Sur cet intervalle, la fonction racine est continue.\n\nLa composée d'une fonction continue (t ↦ √t) et d'une fonction affine continue est continue." },
    { d:1, e:"Peut-on prolonger par continuité f(x) = (x² − 4)/(x − 2) en x = 2 ?", r:"Oui, avec la valeur 4",
      c:"Pour x ≠ 2 : f(x) = (x−2)(x+2)/(x−2) = x + 2.\nDonc lim (x→2) f(x) = 4.\n\nEn posant f(2) = 4, la fonction devient continue en 2. C'est un prolongement par continuité." },
    { d:1, e:"Combien de solutions a x² = 2 sur ℝ ?", r:"Deux : √2 et −√2",
      c:"On peut aussi le voir avec le TVI : f(x) = x² − 2 est continue, f(0) = −2 < 0 et f(2) = 2 > 0, donc il y a une solution dans ]0 ; 2[ : c'est √2.\nDe même sur [−2 ; 0] : une seconde solution, −√2." },
    { d:1, e:"Une fonction continue sur [0 ; 10] avec f(0) = 3 et f(10) = 3 atteint-elle la valeur 5 ?", r:"Pas nécessairement",
      c:"Le TVI garantit que f prend toutes les valeurs <b>entre</b> f(0) et f(10), c'est-à-dire entre 3 et 3 — soit seulement la valeur 3.\n\nLa fonction peut très bien monter à 7 puis redescendre : mais rien ne l'y oblige. Contre-exemple : f constante égale à 3." },
    { d:1, e:"Que signifie « f est continue en a » ?", r:"lim (x→a) f(x) = f(a)",
      c:"Trois conditions réunies : f est définie en a, la limite en a existe, et elles sont égales.\n\nSi l'une des trois manque, il y a discontinuité." },
    { d:2, e:"Montrer que x³ + 3x − 5 = 0 admet une solution dans ]1 ; 2[.", r:"Solution unique dans ]1 ; 2[",
      c:"On pose f(x) = x³ + 3x − 5.\n\nContinuité : f est un polynôme, donc continue sur ℝ, en particulier sur [1 ; 2].\n\nMonotonie : f′(x) = 3x² + 3 = 3(x² + 1) > 0 pour tout x. f est strictement croissante.\n\nEncadrement : f(1) = 1 + 3 − 5 = −1 < 0 et f(2) = 8 + 6 − 5 = 9 > 0.\n\nConclusion : par le TVI, f(x) = 0 admet une unique solution dans ]1 ; 2[." },
    { d:2, e:"Approcher par dichotomie la solution de x³ + x − 1 = 0 dans [0 ; 1].", r:"Environ 0,68",
      c:"On coupe [0 ; 1] en deux : milieu 0,5. f(0,5) = 0,125 + 0,5 − 1 = −0,375 < 0. Comme f(1) > 0, la solution est dans ]0,5 ; 1[.\n\nMilieu de [0,5 ; 1] : 0,75. f(0,75) ≈ 0,422 + 0,75 − 1 = 0,172 > 0. La solution est dans ]0,5 ; 0,75[.\n\nMilieu : 0,625. f(0,625) ≈ 0,244 − 0,375 = −0,131 < 0. La solution est dans ]0,625 ; 0,75[.\n\nMilieu : 0,6875. f ≈ 0,325 − 0,3125 = 0,0125 > 0. Solution dans ]0,625 ; 0,6875[.\n\nChaque étape divise l'intervalle par deux. On obtient ≈ 0,68." },
    { d:2, e:"f(x) = x² − 5x + 6. Montrer qu'il existe c tel que f(c) = 1,5.", r:"Oui, deux valeurs de c",
      c:"f est continue sur ℝ (polynôme).\nf(0) = 6 et f(2) = 4 − 10 + 6 = 0.\n\nSur [0 ; 2] : 1,5 est compris entre 0 et 6, donc il existe c₁ ∈ ]0 ; 2[ tel que f(c₁) = 1,5.\n\nf(3) = 9 − 15 + 6 = 0 et f(5) = 25 − 25 + 6 = 6.\nSur [3 ; 5] : 1,5 est entre 0 et 6, donc il existe c₂ ∈ ]3 ; 5[ tel que f(c₂) = 1,5.\n\nIl y a bien deux solutions distinctes." },
    { d:2, e:"Étudier le nombre de solutions de e^x = x + 3.", r:"Deux solutions",
      c:"On pose h(x) = e^x − x − 3, continue sur ℝ.\n\nh′(x) = e^x − 1, qui s'annule en x = 0.\nh′ < 0 sur ]−∞ ; 0[ et h′ > 0 sur ]0 ; +∞[ : h décroît puis croît, avec un minimum en 0.\n\nh(0) = 1 − 0 − 3 = −2 < 0.\n\nEn −∞ : e^x → 0 et −x → +∞, donc h → +∞.\nEn +∞ : e^x l'emporte, donc h → +∞.\n\nSur ]−∞ ; 0], h décroît de +∞ à −2 : elle traverse 0 une fois.\nSur [0 ; +∞[, h croît de −2 à +∞ : elle traverse 0 une fois.\n\nConclusion : exactement deux solutions." },
    { d:2, e:"Montrer que cos x = x admet une unique solution dans [0 ; 1].", r:"Solution unique",
      c:"On pose f(x) = cos x − x, continue sur ℝ.\n\nf′(x) = −sin x − 1.\nSur [0 ; 1], sin x ≥ 0, donc f′(x) ≤ −1 < 0 : f est strictement décroissante.\n\nf(0) = 1 − 0 = 1 > 0 et f(1) = cos 1 − 1 ≈ 0,540 − 1 = −0,460 < 0.\n\nD'après le TVI, f(x) = 0 admet une unique solution dans [0 ; 1]. (Elle vaut environ 0,739.)" },
    { d:2, e:"Une fonction f continue sur [0 ; 4] vérifie f(0) = −2, f(2) = 3, f(4) = −1. Combien de fois f s'annule-t-elle au minimum ?", r:"Au moins deux fois",
      c:"Sur [0 ; 2] : f(0) = −2 et f(2) = 3 sont de signes contraires, donc il existe c₁ ∈ ]0 ; 2[ avec f(c₁) = 0.\n\nSur [2 ; 4] : f(2) = 3 et f(4) = −1 sont de signes contraires, donc il existe c₂ ∈ ]2 ; 4[ avec f(c₂) = 0.\n\nAucune hypothèse de monotonie n'étant faite, on ne peut affirmer « au moins deux » — la fonction peut s'annuler davantage de fois." },
    { d:2, e:"Peut-on appliquer le TVI à f(x) = 1/x sur [−1 ; 1] ?", r:"Non",
      c:"La fonction n'est pas définie en 0, qui appartient à l'intervalle [−1 ; 1].\n\nOr le TVI exige que f soit continue sur <b>tout</b> l'intervalle.\n\nEn revanche, on peut l'appliquer sur [−1 ; −0,5] ou sur [0,5 ; 1], où f est bien définie et continue." },
    { d:2, e:"Montrer que l'équation x⁵ + x = 1 a exactement une solution sur ℝ.", r:"Une seule, dans ]0 ; 1[",
      c:"f(x) = x⁵ + x − 1, continue sur ℝ.\n\nf′(x) = 5x⁴ + 1 > 0 pour tout x : f est strictement croissante sur ℝ.\n\nLimites : en −∞, f → −∞ ; en +∞, f → +∞.\n\nComme f est continue et strictement croissante de −∞ à +∞, elle traverse 0 exactement une fois.\n\nLocalisation : f(0) = −1 < 0 et f(1) = 1 > 0, donc la solution est dans ]0 ; 1[." },
    { d:2, e:"f est continue sur [0 ; 1] avec f(0) = 0 et f(1) = 1. Existe-t-il c tel que f(c) = c ?", r:"Oui, au moins un",
      c:"On pose g(x) = f(x) − x, continue sur [0 ; 1] (différence de fonctions continues).\n\ng(0) = f(0) − 0 = 0 − 0 = 0.\ng(1) = f(1) − 1 = 1 − 1 = 0.\n\nIci g s'annule en 0 et en 1 : il existe bien des valeurs de c avec f(c) = c.\n\nCe résultat est le <b>théorème du point fixe</b> : toute fonction continue de [0 ; 1] dans [0 ; 1] admet au moins un point fixe." },
    { d:2, e:"Le TVI permet-il de calculer la valeur exacte de la solution ?", r:"Non, seulement de prouver son existence",
      c:"Le théorème affirme l'existence d'un c tel que f(c) = k, sans donner sa valeur.\n\nPour l'approcher, on utilise la dichotomie, ou une méthode numérique (Newton), ou on encadre par valeurs successives.\n\nC'est une distinction importante en rédaction : existence ≠ valeur exacte." },
    { d:3, e:"Montrer que x³ − 3x + 1 = 0 admet trois solutions dans ℝ.", r:"Trois solutions",
      c:"f(x) = x³ − 3x + 1, continue sur ℝ.\n\nf′(x) = 3x² − 3 = 3(x−1)(x+1).\nf′ > 0 sur ]−∞ ; −1[ ∪ ]1 ; +∞[, f′ < 0 sur ]−1 ; 1[.\n\nTableau de variations :\n  maximum local en x = −1 : f(−1) = −1 + 3 + 1 = 3 > 0.\n  minimum local en x = 1 : f(1) = 1 − 3 + 1 = −1 < 0.\n\nLimites : f → −∞ en −∞, f → +∞ en +∞.\n\nÉtude sur chaque intervalle :\n — sur ]−∞ ; −1], f croît de −∞ à 3, donc s'annule une fois.\n — sur [−1 ; 1], f décroît de 3 à −1, donc s'annule une fois.\n — sur [1 ; +∞[, f croît de −1 à +∞, donc s'annule une fois.\n\nConclusion : exactement trois solutions dans ℝ." },
    { d:3, e:"Soit f continue sur [a ; b] telle que f(a) < a et f(b) > b. Montrer qu'il existe c avec f(c) = c.", r:"Démonstration",
      c:"On pose g(x) = f(x) − x. La fonction g est continue sur [a ; b] (différence de fonctions continues).\n\ng(a) = f(a) − a. Or f(a) < a, donc g(a) < 0.\ng(b) = f(b) − b. Or f(b) > b, donc g(b) > 0.\n\ng(a) et g(b) sont de signes contraires, et g est continue sur [a ; b].\n\nD'après le théorème des valeurs intermédiaires, il existe c ∈ ]a ; b[ tel que g(c) = 0, c'est-à-dire f(c) = c." },
    { d:3, e:"Approcher par dichotomie la solution de x³ − 3x + 1 = 0 dans [1 ; 2].", r:"Environ 1,53",
      c:"f(x) = x³ − 3x + 1.\nf(1) = −1 < 0 et f(2) = 8 − 6 + 1 = 3 > 0.\n\nMilieu 1,5 : f(1,5) = 3,375 − 4,5 + 1 = −0,125 < 0. Solution dans ]1,5 ; 2[.\n\nMilieu 1,75 : f(1,75) = 5,359 − 5,25 + 1 = 1,109 > 0. Solution dans ]1,5 ; 1,75[.\n\nMilieu 1,625 : f ≈ 4,291 − 4,875 + 1 = 0,416 > 0. Solution dans ]1,5 ; 1,625[.\n\nMilieu 1,5625 : f ≈ 3,815 − 4,6875 + 1 = 0,127 > 0. Solution dans ]1,5 ; 1,5625[.\n\nMilieu 1,53125 : f ≈ 3,590 − 4,594 + 1 = −0,004 < 0. Solution dans ]1,53125 ; 1,5625[.\n\nOn obtient ≈ 1,53. La valeur exacte est 2cos(2π/9) ≈ 1,532." },
    { d:3, e:"Une fonction continue sur [0 ; 1] vérifie f(0) = f(1). Montrer qu'il existe c tel que f(c) = f(c + 1/2).", r:"Démonstration",
      c:"On pose g(x) = f(x) − f(x + 1/2), définie et continue sur [0 ; 1/2] (car alors x + 1/2 ∈ [1/2 ; 1], où f est continue).\n\ng(0) = f(0) − f(1/2).\ng(1/2) = f(1/2) − f(1).\n\nOr f(0) = f(1) par hypothèse, donc :\ng(0) + g(1/2) = f(0) − f(1/2) + f(1/2) − f(1) = f(0) − f(1) = 0.\n\nDonc g(1/2) = −g(0). Les deux valeurs sont opposées.\n\n — Si g(0) = 0, alors f(0) = f(1/2) et c = 0 convient.\n — Sinon, g(0) et g(1/2) sont de signes contraires. Par le TVI, il existe c ∈ ]0 ; 1/2[ avec g(c) = 0, soit f(c) = f(c + 1/2).\n\nDans tous les cas, un tel c existe." },
    { d:3, e:"Montrer que toute fonction continue sur [a ; b] est bornée.", r:"Démonstration (hors programme, mais instructif)",
      c:"Preuve par l'absurde. Supposons f non majorée sur [a ; b].\n\nAlors pour chaque n, il existe xₙ ∈ [a ; b] avec f(xₙ) > n.\n\nLa suite (xₙ) est bornée (tous ses termes dans [a ; b]). D'après le théorème de Bolzano-Weierstrass, elle admet une sous-suite (x_{φ(n)}) qui converge vers un réel ℓ ∈ [a ; b].\n\nPar continuité, f(x_{φ(n)}) → f(ℓ), qui est un réel fini.\n\nMais f(x_{φ(n)}) > φ(n) → +∞. Contradiction : une suite convergente ne peut tendre vers +∞.\n\nDonc f est majorée. De même, en considérant −f, f est minorée. Bilan : f est bornée." },
    { d:3, e:"f(x) = x·e^x. Montrer que l'équation f(x) = 2 a une unique solution.", r:"Solution unique de valeur ≈ 0,852",
      c:"On pose h(x) = x·e^x − 2, continue sur ℝ.\n\nh′(x) = e^x + x·e^x = e^x(1 + x).\n\nComme e^x > 0 toujours, h′ a le signe de (1 + x) : négatif pour x < −1, positif pour x > −1.\n\nh décroît sur ]−∞ ; −1] puis croît sur [−1 ; +∞[. Son minimum est en x = −1 : h(−1) = −e⁻¹ − 2 ≈ −2,368 < 0.\n\nLimites : en −∞, x·e^x → 0⁻ donc h → −2 < 0. En +∞, h → +∞.\n\nComme h est strictement croissante sur [−1 ; +∞[ et passe de −2,368 à +∞, elle traverse 2... précisément elle s'annule exactement une fois sur cet intervalle.\n\nSur ]−∞ ; −1], h reste strictement négative (maximum atteint en −1, négatif).\n\nConclusion : f(x) = 2 admet une unique solution, sur [−1 ; +∞[, environ 0,852." }
  ]
},
{
  id:"tle-logarithme", niveau:"Tle", titre:"Tle · Fonction logarithme népérien", temps:"24 min",
  resume:"Définition, propriétés algébriques, dérivée, limites et équations.",
  lecons:[
    { titre:"Définition et propriétés algébriques", contenu:`
      <h3>1. La fonction réciproque de l'exponentielle</h3>
      <p>La fonction exponentielle est continue et strictement croissante de ℝ vers ]0 ; +∞[. Elle admet donc une <b>fonction réciproque</b>, définie sur ]0 ; +∞[ : le logarithme népérien.</p>
      <div class="formula">ln x = y   ⟺   e^y = x</div>
      <p>Autrement dit, ln x répond à la question : « à quelle puissance faut-il élever e pour obtenir x ? »</p>

      <h3>2. Les valeurs à connaître</h3>
      <div class="formula">ln 1 = 0        car e⁰ = 1
ln e = 1        car e¹ = e
ln(1/e) = −1</div>
      <div class="box"><b>Conséquence immédiate</b> — ln est toujours définie sur ]0 ; +∞[, et jamais sur les négatifs ni en 0. Son signe : ln x &lt; 0 pour x &lt; 1, ln x = 0 pour x = 1, ln x &gt; 0 pour x &gt; 1.</div>

      <h3>3. Les relations fondamentales</h3>
      <p>Le logarithme transforme les produits en sommes. C'est toute sa raison d'être.</p>
      <div class="formula">ln(ab) = ln a + ln b
ln(a/b) = ln a − ln b
ln(aⁿ) = n·ln a
ln(√a) = (1/2)·ln a</div>
      <div class="box warn"><b>Erreur classique</b> — Il n'y a <b>aucune</b> formule pour ln(a + b). Le logarithme d'une somme ne se simplifie pas. C'est l'erreur la plus fréquente sur ce chapitre.</div>

      <h3>4. Simplification d'expressions</h3>
      <p>Les deux relations de réciprocité permettent de simplifier beaucoup d'expressions :</p>
      <div class="formula">ln(e^x) = x        pour tout réel x
e^(ln x) = x       pour tout x &gt; 0</div>

      <h3>5. Signe et encadrement</h3>
      <p>ln est strictement croissante : elle conserve l'ordre.</p>
      <div class="formula">ln a &lt; ln b   ⟺   a &lt; b        (pour a, b &gt; 0)</div>
      <p>C'est l'outil pour résoudre les inéquations avec logarithmes.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Simplifier A = ln(8) − 2ln(2) + ln(1/2).</p>
      <ul>
        <li>ln 8 = ln(2³) = 3ln 2</li>
        <li>2ln 2 reste tel quel</li>
        <li>ln(1/2) = −ln 2</li>
        <li>A = 3ln 2 − 2ln 2 − ln 2 = 0</li>
      </ul>
      <p><b>Vérification :</b> 8 × (1/2) = 4, et 4/4 = 1, donc le logarithme vaut ln 1 = 0. ✓</p>
    ` },
    { titre:"Étude de la fonction ln", contenu:`
      <h3>1. Dérivée</h3>
      <div class="formula">(ln x)′ = 1/x        sur ]0 ; +∞[</div>
      <p>Comme x &gt; 0 sur le domaine, la dérivée est toujours strictement positive : ln est strictement croissante sur ]0 ; +∞[.</p>

      <h3>2. Dérivée d'une composée</h3>
      <p>C'est la forme la plus utilisée en exercice :</p>
      <div class="formula">(ln u)′ = u′ / u</div>
      <div class="box warn"><b>Ne pas oublier u′</b> — La dérivée de ln(3x + 1) est 3/(3x + 1), pas 1/(3x + 1). Le facteur u′ est le piège classique.</div>

      <h3>3. Limites</h3>
      <p>Deux limites à connaître par cœur :</p>
      <div class="formula">lim (x→0⁺) ln x = −∞
lim (x→+∞) ln x = +∞</div>
      <p>Plus deux <b>croissances comparées</b>, essentielles en Terminale :</p>
      <div class="formula">lim (x→+∞) (ln x)/x = 0
lim (x→0⁺) x·ln x = 0</div>
      <div class="box"><b>Interprétation</b> — ln x croît vers +∞, mais infiniment plus lentement que x. Sur un graphique, la courbe de ln finit par être écrasée sous celle de x.</div>

      <h3>4. Tableau de variations et allure</h3>
      <p>Sur ]0 ; +∞[ : la fonction est strictement croissante, passe par (1 ; 0) et (e ; 1). Sa tangente en x = 1 a pour coefficient directeur 1 : c'est la droite y = x − 1.</p>
      <p>La courbe admet une asymptote verticale en x = 0.</p>

      <h3>5. Inégalité de référence</h3>
      <p>La concavité de ln donne une inégalité utile :</p>
      <div class="formula">ln x ≤ x − 1        pour tout x &gt; 0</div>
      <p>Avec égalité seulement en x = 1. Elle se démontre en étudiant h(x) = x − 1 − ln x.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Étudier f(x) = ln(x)/x sur ]0 ; +∞[.</p>
      <ul>
        <li>Dérivée : f′(x) = [(1/x)·x − ln x·1]/x² = (1 − ln x)/x²</li>
        <li>Le signe est celui de 1 − ln x : positif pour x &lt; e, négatif pour x &gt; e</li>
        <li>f croît puis décroît : maximum en x = e, valant f(e) = 1/e ≈ 0,368</li>
        <li>Limites : en 0⁺, ln x → −∞ donc f → −∞. En +∞, ln x/x → 0.</li>
      </ul>
      <p><b>Conséquence :</b> pour tout x &gt; 0, ln(x)/x ≤ 1/e, soit ln x ≤ x/e.</p>
    ` },
    { titre:"Équations et inéquations avec ln", contenu:`
      <h3>1. La règle d'or : le domaine d'abord</h3>
      <p>Avant de résoudre quoi que ce soit, on écrit les conditions : tout ce qui est sous un logarithme doit être <b>strictement positif</b>.</p>
      <div class="box warn"><b>Erreur classique</b> — Résoudre l'équation sans vérifier les conditions, puis accepter une solution qui rend un logarithme négatif. La solution est à écarter : on ne calcule pas le logarithme d'un nombre négatif.</div>

      <h3>2. Équations de la forme ln A = ln B</h3>
      <p>Comme ln est strictement croissante et injective :</p>
      <div class="formula">ln A = ln B   ⟺   A = B        (avec A &gt; 0 et B &gt; 0)</div>

      <h3>3. Équations de la forme ln A = k</h3>
      <p>On écrit k sous forme de logarithme : k = ln(e^k).</p>
      <div class="formula">ln A = k   ⟺   A = e^k</div>

      <h3>4. Équations mêlant ln et exp</h3>
      <p>On utilise la réciprocité. Par exemple e^(2x) = 5 donne 2x = ln 5, donc x = (ln 5)/2.</p>
      <div class="box"><b>Méthode générale</b> — Pour isoler une inconnue dans une exponentielle, on applique ln des deux côtés. Pour l'isoler dans un logarithme, on applique exp des deux côtés.</div>

      <h3>5. Inéquations</h3>
      <p>Comme ln est croissante, elle conserve l'ordre :</p>
      <div class="formula">ln A &lt; ln B   ⟺   0 &lt; A &lt; B</div>
      <p>Attention au sens de l'inégalité : il ne s'inverse jamais avec ln, contrairement à ce qui se passe avec la fonction inverse.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Résoudre ln(x) + ln(x − 3) = ln(4).</p>
      <ul>
        <li><b>Conditions</b> : x &gt; 0 et x − 3 &gt; 0, donc x &gt; 3</li>
        <li>On regroupe : ln(x(x − 3)) = ln 4</li>
        <li>Donc x(x − 3) = 4, soit x² − 3x − 4 = 0</li>
        <li>Δ = 9 + 16 = 25, √Δ = 5, donc x = (3 ± 5)/2 : x = 4 ou x = −1</li>
        <li>La condition x &gt; 3 élimine −1</li>
      </ul>
      <p><b>Conclusion :</b> la seule solution est x = 4.</p>
    ` }
  ],
  cours:`<div class="box"><b>Trois leçons</b> — les propriétés algébriques, l'étude de la fonction, puis la résolution d'équations. L'ordre compte : les équations utilisent les deux premières.</div>`,
  exercices:[
    { d:1, e:"Calculer ln(1).", r:"0",
      c:"ln 1 = 0 car e⁰ = 1.\n\nC'est l'une des trois valeurs à connaître par cœur, avec ln e = 1 et ln(1/e) = −1." },
    { d:1, e:"Calculer ln(e³).", r:"3",
      c:"Par réciprocité, ln(e^x) = x pour tout réel x.\n\nDonc ln(e³) = 3." },
    { d:1, e:"Simplifier ln 6 − ln 2.", r:"ln 3",
      c:"ln(a/b) = ln a − ln b, donc ln 6 − ln 2 = ln(6/2) = ln 3.\n\nVérification numérique : ln 6 ≈ 1,792, ln 2 ≈ 0,693, et la différence vaut ≈ 1,099 = ln 3. ✓" },
    { d:1, e:"Simplifier ln 4 + ln 5.", r:"ln 20",
      c:"ln(ab) = ln a + ln b, donc ln 4 + ln 5 = ln 20.\n\nOn peut aussi écrire 2ln 2 + ln 5, mais ln 20 est la forme la plus simple." },
    { d:1, e:"Calculer e^(ln 7).", r:"7",
      c:"Par réciprocité, e^(ln x) = x pour tout x > 0.\n\nDonc e^(ln 7) = 7." },
    { d:1, e:"Que vaut ln(2e) ?", r:"1 + ln 2",
      c:"ln(2e) = ln 2 + ln e = ln 2 + 1.\n\nOn utilise ln(ab) = ln a + ln b, puis ln e = 1." },
    { d:1, e:"Quel est le domaine de définition de ln(5 − x) ?", r:"x < 5",
      c:"L'argument du logarithme doit être strictement positif : 5 − x > 0, soit x < 5.\n\nLe domaine est donc ]−∞ ; 5[." },
    { d:1, e:"Dériver f(x) = ln(2x + 1).", r:"f′(x) = 2/(2x + 1)",
      c:"Formule (ln u)′ = u′/u avec u = 2x + 1 et u′ = 2.\n\nDonc f′(x) = 2/(2x + 1).\n\nErreur classique : oublier le facteur 2." },
    { d:1, e:"Comparer ln 3 et ln 5.", r:"ln 3 < ln 5",
      c:"ln est strictement croissante sur ]0 ; +∞[, donc elle conserve l'ordre : 3 < 5 implique ln 3 < ln 5.\n\nC'est l'injectivité croissante de la fonction." },
    { d:1, e:"Résoudre ln x = 0.", r:"x = 1",
      c:"ln x = 0 équivaut à e⁰ = x, donc x = 1.\n\nLa condition x > 0 est bien vérifiée." },
    { d:2, e:"Résoudre ln x = 2.", r:"x = e²",
      c:"ln x = 2 équivaut à x = e².\n\nOn applique la réciprocité : x = e^2 ≈ 7,389.\n\nCondition : x > 0, vérifiée." },
    { d:2, e:"Résoudre ln(x) + ln(x − 1) = ln 6.", r:"x = 3",
      c:"<b>Conditions</b> : x > 0 et x − 1 > 0, donc x > 1.\n\nOn regroupe : ln(x(x−1)) = ln 6.\nDonc x² − x = 6, soit x² − x − 6 = 0.\n\nΔ = 1 + 24 = 25, √Δ = 5.\nx = (1 ± 5)/2, soit x = 3 ou x = −2.\n\nLa condition x > 1 élimine −2. Solution : x = 3." },
    { d:2, e:"Résoudre e^(2x) = 7.", r:"x = (ln 7)/2",
      c:"On applique ln des deux côtés : ln(e^(2x)) = ln 7.\nDonc 2x = ln 7, soit x = (ln 7)/2 ≈ 0,973.\n\nMéthode : pour déloger x d'une exponentielle, on applique ln." },
    { d:2, e:"Étudier le signe de ln(x) sur ]0 ; +∞[.", r:"Négatif avant 1, nul en 1, positif après",
      c:"ln x = 0 quand x = 1.\nComme ln est strictement croissante :\n — pour 0 < x < 1 : ln x < ln 1 = 0\n — pour x > 1 : ln x > ln 1 = 0\n\nC'est un résultat à avoir en tête pour les tableaux de signes." },
    { d:2, e:"Calculer lim (x→+∞) (ln x)/x.", r:"0",
      c:"C'est une croissance comparée : le logarithme croît vers +∞, mais infiniment plus lentement que x.\n\nLe quotient tend donc vers 0, bien que les deux tendent vers +∞ séparément — c'est une forme indéterminée ∞/∞ levée par la comparaison des croissances." },
    { d:2, e:"Dériver f(x) = x·ln(x).", r:"f′(x) = ln x + 1",
      c:"Produit u·v avec u = x, donc u′ = 1, et v = ln x, donc v′ = 1/x.\n\n(u·v)′ = 1·ln x + x·(1/x) = ln x + 1.\n\nDomaine : x > 0." },
    { d:2, e:"Résoudre ln(2x − 1) < ln(x + 4).", r:"x ∈ ]1/2 ; 5[",
      c:"<b>Conditions</b> : 2x − 1 > 0 et x + 4 > 0, donc x > 1/2.\n\nL'inéquation devient 2x − 1 < x + 4 (ln conserve l'ordre).\nDonc x < 5.\n\nEn combinant avec la condition : x ∈ ]1/2 ; 5[." },
    { d:2, e:"Déterminer lim (x→0⁺) ln x.", r:"−∞",
      c:"Quand x s'approche de 0 par valeurs positives, ln x devient négatif et très grand en valeur absolue.\n\nlim (x→0⁺) ln x = −∞ : la courbe admet une asymptote verticale en x = 0." },
    { d:2, e:"Résoudre ln(x²) = 4.", r:"x = e² ou x = −e²",
      c:"<b>Condition</b> : x² > 0, donc x ≠ 0.\n\nln(x²) = 4 donne x² = e⁴, soit x = e² ou x = −e².\n\nLes deux solutions sont acceptables, car x² est bien positif dans les deux cas. C'est une erreur fréquente : on oublie la solution négative." },
    { d:2, e:"Montrer que ln(1 + x) ≤ x pour tout x > −1.", r:"Démonstration",
      c:"On pose h(x) = x − ln(1 + x) sur ]−1 ; +∞[.\n\nh′(x) = 1 − 1/(1+x) = (1 + x − 1)/(1+x) = x/(1+x).\n\nSur ]−1 ; +∞[, 1 + x > 0, donc h′ a le signe de x.\n\nh décroît sur ]−1 ; 0] puis croît sur [0 ; +∞[ : minimum en x = 0.\n\nh(0) = 0 − ln 1 = 0.\n\nDonc h(x) ≥ 0 pour tout x > −1, soit ln(1+x) ≤ x. Égalité seulement en x = 0." },
    { d:2, e:"Simplifier A = ln(9) − ln(3) + ln(1/3).", r:"0",
      c:"ln 9 = ln(3²) = 2ln 3.\nln(1/3) = −ln 3.\n\nA = 2ln 3 − ln 3 − ln 3 = 0.\n\nVérification : 9/3 × (1/3) = 1, et ln 1 = 0. ✓" },
    { d:3, e:"Étudier f(x) = x ln x − x sur ]0 ; +∞[.", r:"Minimum en x = 1, valant −1",
      c:"Dérivée : f′(x) = 1·ln x + x·(1/x) − 1 = ln x + 1 − 1 = ln x.\n\nSigne de f′ : ln x < 0 pour x < 1, ln x > 0 pour x > 1.\n\nf décroît sur ]0 ; 1[ puis croît sur ]1 ; +∞[. Minimum en x = 1.\nf(1) = 1 × 0 − 1 = −1.\n\nLimites : en 0⁺, x ln x → 0 et −x → 0, donc f → 0.\nEn +∞, x ln x − x = x(ln x − 1) → +∞.\n\nRemarque : f(0⁺) → 0 mais f(1) = −1, donc la fonction devient négative puis remonte et retraverse l'axe." },
    { d:3, e:"Résoudre ln(x) + ln(x − 2) = ln(3x − 8).", r:"x = 4",
      c:"<b>Conditions</b> : x > 0, x − 2 > 0 et 3x − 8 > 0, donc x > 8/3.\n\nOn regroupe : ln(x(x−2)) = ln(3x − 8)\nDonc x² − 2x = 3x − 8, soit x² − 5x + 8 = 0.\n\nΔ = 25 − 32 = −7 < 0 : aucune solution réelle.\n\nIl n'y a donc pas de solution. Vérification de cohérence : x² − 5x + 8 = (x − 2,5)² + 1,75 > 0 toujours, l'équation n'a en effet pas de racine." },
    { d:3, e:"Déterminer le nombre de solutions de ln x = x − 2.", r:"Deux solutions",
      c:"On pose h(x) = ln x − x + 2 sur ]0 ; +∞[.\n\nh′(x) = 1/x − 1 = (1 − x)/x.\n\nh′ > 0 pour 0 < x < 1, h′ < 0 pour x > 1. Maximum en x = 1.\nh(1) = 0 − 1 + 2 = 1 > 0.\n\nLimites : en 0⁺, ln x → −∞ et −x + 2 → 2, donc h → −∞.\nEn +∞, ln x − x → −∞ (croissance comparée), donc h → −∞.\n\nh part de −∞, monte jusqu'à 1 en x = 1, puis redescend vers −∞.\n\nElle traverse donc 0 deux fois : une solution dans ]0 ; 1[, une dans ]1 ; +∞[.\n\nApproximation : 0,159 et 3,146." },
    { d:3, e:"Montrer que pour tout n ≥ 1, ln(n) ≤ n − 1.", r:"Vrai",
      c:"C'est l'inégalité ln x ≤ x − 1 appliquée à x = n.\n\nDémonstration de l'inégalité générale : on étudie h(x) = x − 1 − ln x sur ]0 ; +∞[.\n\nh′(x) = 1 − 1/x = (x−1)/x, qui s'annule en 1, est négatif avant et positif après.\nDonc h admet un minimum en x = 1, et h(1) = 0.\n\nDonc h(x) ≥ 0, soit ln x ≤ x − 1. Égalité seulement en x = 1.\n\nConséquence : ln n ≤ n − 1 pour tout n ≥ 1, avec égalité en n = 1." }
  ]
},
{
  id:"tle-trigo", niveau:"Tle", titre:"Tle · Fonctions trigonométriques", temps:"22 min",
  resume:"Cercle trigonométrique, dérivées de sin et cos, équations et parité.",
  lecons:[
    { titre:"Cercle trigonométrique et valeurs remarquables", contenu:`
      <h3>1. Le cercle trigonométrique</h3>
      <p>On repère un point du cercle unité (rayon 1, centré à l'origine) par l'angle x parcouru depuis l'axe des abscisses, dans le sens direct (anti-horaire).</p>
      <ul>
        <li><b>cos x</b> est l'abscisse du point</li>
        <li><b>sin x</b> est son ordonnée</li>
      </ul>
      <p>Cette lecture rend tout immédiat : cos x et sin x sont toujours compris entre −1 et 1, parce que le point reste sur un cercle de rayon 1.</p>
      <div class="formula">−1 ≤ cos x ≤ 1        −1 ≤ sin x ≤ 1</div>

      <h3>2. La relation fondamentale</h3>
      <p>Le théorème de Pythagore sur le cercle unité donne :</p>
      <div class="formula">cos²x + sin²x = 1</div>
      <div class="box"><b>Usage typique</b> — Si on sait que sin x = 0,6 et que x est dans le premier quadrant, alors cos²x = 1 − 0,36 = 0,64, donc cos x = 0,8 (positif dans ce quadrant).</div>

      <h3>3. Les valeurs remarquables</h3>
      <p>Un tableau à connaître par cœur :</p>
      <div class="formula">x = 0      : cos = 1     sin = 0
x = π/6    : cos = √3/2  sin = 1/2
x = π/4    : cos = √2/2  sin = √2/2
x = π/3    : cos = 1/2   sin = √3/2
x = π/2    : cos = 0     sin = 1
x = π      : cos = −1    sin = 0</div>

      <h3>4. Parité et symétries</h3>
      <p>La lecture sur le cercle donne les symétries immédiatement :</p>
      <div class="formula">cos(−x) = cos x        (cos est paire)
sin(−x) = −sin x      (sin est impaire)</div>
      <p>Et les décalages : sin(x + π/2) = cos x et cos(x + π/2) = −sin x.</p>

      <h3>5. Périodicité</h3>
      <div class="formula">cos(x + 2π) = cos x        sin(x + 2π) = sin x</div>
      <p>Les deux fonctions sont 2π-périodiques. On peut donc les étudier sur un intervalle de longueur 2π, puis répéter.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Résoudre cos x = 1/2 sur [0 ; 2π].</p>
      <ul>
        <li>Sur le cercle, cos x = 1/2 correspond à deux points : x = π/3 et x = −π/3</li>
        <li>On ramène dans [0 ; 2π] : x = π/3 et x = 2π − π/3 = 5π/3</li>
      </ul>
      <p><b>Vérification :</b> cos(π/3) = 1/2 ✓ et cos(5π/3) = cos(−π/3) = cos(π/3) = 1/2 ✓</p>
    ` },
    { titre:"Dérivées et variations", contenu:`
      <h3>1. Les dérivées de base</h3>
      <div class="formula">(sin x)′ = cos x        (cos x)′ = −sin x</div>
      <div class="box warn"><b>Attention au signe</b> — La dérivée de cos est <b>−sin</b>, avec un signe moins. C'est l'erreur la plus fréquente du chapitre.</div>

      <h3>2. Dérivées de composées</h3>
      <div class="formula">(sin u)′ = u′·cos u        (cos u)′ = −u′·sin u</div>
      <p>Exemple : la dérivée de sin(3x) est 3cos(3x).</p>

      <h3>3. Étude de sin sur [0 ; 2π]</h3>
      <p>f′(x) = cos x. Le signe de cos donne les variations :</p>
      <ul>
        <li>cos x > 0 sur ]0 ; π/2[ ∪ ]3π/2 ; 2π[ : sin croît</li>
        <li>cos x &lt; 0 sur ]π/2 ; 3π/2[ : sin décroît</li>
      </ul>
      <p>Maximum 1 en x = π/2, minimum −1 en x = 3π/2.</p>

      <h3>4. Étude de cos sur [0 ; 2π]</h3>
      <p>f′(x) = −sin x. Donc f′ a le signe opposé à celui de sin :</p>
      <ul>
        <li>sin x > 0 sur ]0 ; π[ : cos décroît</li>
        <li>sin x &lt; 0 sur ]π ; 2π[ : cos croît</li>
      </ul>
      <p>Maximum 1 en x = 0 (et x = 2π), minimum −1 en x = π.</p>

      <h3>5. Encadrements utiles</h3>
      <p>Les bornes −1 et 1 permettent des encadrements immédiats. Si f(x) = 2 + 3sin x, alors :</p>
      <div class="formula">−1 ≤ sin x ≤ 1  ⟹  −1 ≤ 2 + 3sin x ≤ 5</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Étudier f(x) = sin x + cos x sur [0 ; 2π].</p>
      <ul>
        <li>f′(x) = cos x − sin x</li>
        <li>f′(x) = 0 quand cos x = sin x, soit x = π/4 ou x = 5π/4</li>
        <li>f′(x) > 0 quand cos x > sin x : sur [0 ; π/4[ et ]5π/4 ; 2π]</li>
        <li>Maximum en x = π/4 : f(π/4) = √2/2 + √2/2 = √2</li>
        <li>Minimum en x = 5π/4 : f(5π/4) = −√2</li>
      </ul>
      <p><b>Vérification :</b> on sait que sin x + cos x = √2·sin(x + π/4), dont les bornes sont bien ±√2.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — le cercle trigonométrique et les valeurs remarquables, puis les dérivées et l'étude des variations.</div>`,
  exercices:[
    { d:1, e:"Que vaut cos(0) ?", r:"1",
      c:"Sur le cercle trigonométrique, l'angle 0 correspond au point (1 ; 0). L'abscisse est 1, donc cos 0 = 1." },
    { d:1, e:"Que vaut sin(π/2) ?", r:"1",
      c:"L'angle π/2 correspond au point (0 ; 1) sur le cercle. L'ordonnée est 1, donc sin(π/2) = 1.\n\nC'est le maximum de la fonction sinus." },
    { d:1, e:"Que vaut cos(π) ?", r:"−1",
      c:"L'angle π correspond au point (−1 ; 0). L'abscisse est −1, donc cos π = −1.\n\nC'est le minimum de la fonction cosinus." },
    { d:1, e:"Que vaut sin(π/6) ?", r:"1/2",
      c:"Valeur remarquable à connaître : sin(π/6) = 1/2 et cos(π/6) = √3/2.\n\nVérification : (1/2)² + (√3/2)² = 1/4 + 3/4 = 1 ✓" },
    { d:1, e:"Que vaut cos(π/4) ?", r:"√2/2",
      c:"En π/4, le point du cercle est sur la bissectrice : les deux coordonnées sont égales.\n\nComme cos²+sin²=1, chacune vaut √2/2 ≈ 0,707." },
    { d:1, e:"Dériver f(x) = sin(3x).", r:"f′(x) = 3cos(3x)",
      c:"Formule (sin u)′ = u′cos u avec u = 3x et u′ = 3.\n\nDonc f′(x) = 3cos(3x)." },
    { d:1, e:"Dériver f(x) = cos(2x).", r:"f′(x) = −2sin(2x)",
      c:"Formule (cos u)′ = −u′sin u avec u = 2x et u′ = 2.\n\nDonc f′(x) = −2sin(2x).\n\nNe pas oublier le signe moins." },
    { d:1, e:"Que vaut sin(−x) ?", r:"−sin x",
      c:"La fonction sinus est impaire : sin(−x) = −sin x pour tout x.\n\nSur le cercle, cela correspond à la symétrie par rapport à l'axe des abscisses." },
    { d:1, e:"Que vaut cos(−x) ?", r:"cos x",
      c:"La fonction cosinus est paire : cos(−x) = cos x.\n\nSur le cercle, la symétrie par rapport à l'axe des abscisses ne change pas l'abscisse." },
    { d:1, e:"Quel est le maximum de la fonction sinus ?", r:"1",
      c:"Le point du cercle reste sur le cercle unité, donc son ordonnée est comprise entre −1 et 1.\n\nLe maximum 1 est atteint en x = π/2 (et tous les π/2 + 2kπ)." },
    { d:2, e:"Résoudre cos x = 0 sur [0 ; 2π].", r:"x = π/2 et x = 3π/2",
      c:"cos x = 0 correspond aux points du cercle situés sur l'axe des ordonnées.\n\nSur [0 ; 2π], cela donne x = π/2 et x = 3π/2." },
    { d:2, e:"Résoudre sin x = √2/2 sur [0 ; 2π].", r:"x = π/4 et x = 3π/4",
      c:"sin x = √2/2 correspond à deux points du cercle : angles π/4 et π − π/4 = 3π/4.\n\nLes deux sont dans [0 ; 2π], donc les solutions sont π/4 et 3π/4." },
    { d:2, e:"Sachant que sin x = 0,8 et x ∈ [0 ; π/2], calculer cos x.", r:"0,6",
      c:"On utilise cos²x + sin²x = 1.\ncos²x = 1 − 0,64 = 0,36.\n\nDonc cos x = ±0,6. Comme x ∈ [0 ; π/2], le cosinus est positif : cos x = 0,6." },
    { d:2, e:"Étudier le signe de cos x sur [0 ; 2π].", r:"Positif sur [0 ; π/2[ et ]3π/2 ; 2π], négatif sur ]π/2 ; 3π/2[",
      c:"cos x est l'abscisse du point du cercle. Elle est positive quand le point est à droite de l'axe vertical, négative à gauche.\n\nDonc cos x > 0 sur [0 ; π/2[ ∪ ]3π/2 ; 2π], et cos x < 0 sur ]π/2 ; 3π/2[.\n\nElle s'annule en π/2 et 3π/2." },
    { d:2, e:"Dériver f(x) = x·sin(x).", r:"f′(x) = sin x + x·cos x",
      c:"Produit u·v avec u = x (donc u′ = 1) et v = sin x (donc v′ = cos x).\n\n(u·v)′ = 1·sin x + x·cos x = sin x + x·cos x." },
    { d:2, e:"Dériver f(x) = sin²(x).", r:"f′(x) = 2sin x·cos x = sin(2x)",
      c:"On écrit sin²x = (sin x)² et on utilise (uⁿ)′ = n·u′·u^(n−1) avec u = sin x.\n\nf′(x) = 2 × cos x × sin x = 2 sin x cos x.\n\nOr 2 sin x cos x = sin(2x) : c'est la formule de duplication. Les deux écritures sont acceptables." },
    { d:2, e:"Résoudre 2sin x − 1 = 0 sur [0 ; 2π].", r:"x = π/6 et x = 5π/6",
      c:"2sin x − 1 = 0 donne sin x = 1/2.\n\nSur [0 ; 2π], sin x = 1/2 pour x = π/6 et x = π − π/6 = 5π/6.\n\nCe sont les deux points du cercle ayant pour ordonnée 1/2." },
    { d:2, e:"Montrer que f(x) = cos²x + sin²x est constante.", r:"Elle vaut 1 partout",
      c:"C'est la relation fondamentale de la trigonométrie : cos²x + sin²x = 1 pour tout réel x.\n\nOn peut le vérifier par la dérivée : f′(x) = 2cos x(−sin x) + 2sin x(cos x) = 0.\n\nDérivée nulle sur ℝ, donc la fonction est constante — et f(0) = 1." },
    { d:2, e:"Déterminer le maximum de f(x) = 3 + 4cos(x).", r:"7, atteint en x = 0",
      c:"Comme −1 ≤ cos x ≤ 1, on a −4 ≤ 4cos x ≤ 4, donc −1 ≤ 3 + 4cos x ≤ 7.\n\nLe maximum vaut 7, atteint quand cos x = 1, c'est-à-dire x = 0 (modulo 2π)." },
    { d:2, e:"Étudier la parité de f(x) = x·cos(x).", r:"f est impaire",
      c:"f(−x) = (−x)·cos(−x) = −x·cos x = −f(x), car cos est paire.\n\nComme f(−x) = −f(x), la fonction est impaire. Sa courbe est symétrique par rapport à l'origine." },
    { d:3, e:"Étudier f(x) = sin x + cos x sur [0 ; 2π].", r:"Maximum √2 en π/4, minimum −√2 en 5π/4",
      c:"f′(x) = cos x − sin x.\n\nf′(x) = 0 ⟺ cos x = sin x ⟺ x = π/4 ou x = 5π/4 sur [0 ; 2π].\n\nSigne : cos x > sin x sur [0 ; π/4[ et ]5π/4 ; 2π[, donc f′ > 0 là.\nf′ < 0 sur ]π/4 ; 5π/4[.\n\nf croît, décroît, croît. Maximum en x = π/4 : f = √2/2 + √2/2 = √2 ≈ 1,414.\nMinimum en x = 5π/4 : f = −√2.\n\nVérification : sin x + cos x = √2 sin(x + π/4), dont les bornes sont ±√2." },
    { d:3, e:"Résoudre sin(2x) = 1/2 sur [0 ; 2π].", r:"x = π/12, 5π/12, 13π/12, 17π/12",
      c:"On pose X = 2x. Alors sin X = 1/2.\n\nSur ℝ, les solutions de sin X = 1/2 sont X = π/6 + 2kπ ou X = 5π/6 + 2kπ.\n\nDonc 2x = π/6 + 2kπ, soit x = π/12 + kπ.\nOu 2x = 5π/6 + 2kπ, soit x = 5π/12 + kπ.\n\nOn cherche x ∈ [0 ; 2π] :\n — x = π/12 et π/12 + π = 13π/12\n — x = 5π/12 et 5π/12 + π = 17π/12\n\nConclusion : quatre solutions." },
    { d:3, e:"Montrer que f(x) = x − sin x est croissante sur ℝ.", r:"Démonstration",
      c:"f′(x) = 1 − cos x.\n\nOr cos x ≤ 1 pour tout x, donc 1 − cos x ≥ 0.\n\nLa dérivée est positive (nulle aux points où cos x = 1, c'est-à-dire x = 2kπ).\n\nComme f′ ≥ 0 sur ℝ, la fonction est croissante. En fait elle est strictement croissante : la dérivée ne s'annule qu'en des points isolés." },
    { d:3, e:"Déterminer le nombre de solutions de cos x = x sur ℝ.", r:"Une seule",
      c:"On pose h(x) = cos x − x, continue sur ℝ.\n\nh′(x) = −sin x − 1 ≤ 0 car sin x ≥ −1.\n\nDonc h est décroissante (et strictement décroissante sauf en des points isolés).\n\nLimites : en −∞, −x → +∞ et cos x est borné, donc h → +∞.\nEn +∞, h → −∞.\n\nComme h est continue et strictement décroissante de +∞ à −∞, elle traverse 0 exactement une fois. La solution vaut environ 0,739." },
    { d:3, e:"Montrer que pour tout x ∈ ]0 ; π/2[, tan x > x.", r:"Démonstration",
      c:"On pose g(x) = tan x − x sur ]0 ; π/2[.\n\ng′(x) = 1 + tan²x − 1 = tan²x.\n\nSur ]0 ; π/2[, tan x ≠ 0, donc tan²x > 0. La fonction g est strictement croissante.\n\ng(0) = tan 0 − 0 = 0.\n\nComme g est strictement croissante depuis 0, on a g(x) > 0 pour tout x > 0 dans l'intervalle.\n\nDonc tan x > x. C'est l'inégalité classique de trigonométrie, utile en physique." },
    { d:3, e:"Étudier f(x) = cos(2x) sur [0 ; π].", r:"Maximum 1 en 0 et π, minimum −1 en π/2",
      c:"f′(x) = −2sin(2x).\n\nSur [0 ; π], 2x parcourt [0 ; 2π]. sin(2x) > 0 pour 2x ∈ ]0 ; π[, soit x ∈ ]0 ; π/2[.\n\nDonc f′ < 0 sur ]0 ; π/2[ : f décroît.\nf′ > 0 sur ]π/2 ; π[ : f croît.\n\nf(0) = cos 0 = 1.\nf(π/2) = cos π = −1.\nf(π) = cos(2π) = 1.\n\nMaximum 1 atteint en x = 0 et x = π, minimum −1 en x = π/2." },
    { d:3, e:"Résoudre cos²x = 1/4 sur [0 ; 2π].", r:"x = π/3, 2π/3, 4π/3, 5π/3",
      c:"cos²x = 1/4 donne cos x = 1/2 ou cos x = −1/2.\n\n<b>Cas 1</b> : cos x = 1/2 ⟹ x = π/3 ou x = 5π/3.\n<b>Cas 2</b> : cos x = −1/2 ⟹ x = 2π/3 ou x = 4π/3.\n\nConclusion : quatre solutions sur [0 ; 2π].\n\nErreur classique : oublier le cas négatif et ne donner que deux solutions." }
  ]
},
{
  id:"tle-integrales", niveau:"Tle", titre:"Tle · Primitives et intégrales", temps:"24 min",
  resume:"Primitives usuelles, intégrale définie, aire sous la courbe.",
  lecons:[
    { titre:"Primitives", contenu:`
      <h3>1. Définition</h3>
      <p>F est une <b>primitive</b> de f sur un intervalle I si F est dérivable sur I et si F′ = f sur I.</p>
      <div class="box"><b>Piège de lecture</b> — Chercher une primitive, c'est faire la dérivée à l'envers. On se demande : « quelle fonction, une fois dérivée, donne f ? »</div>

      <h3>2. Une infinité de primitives</h3>
      <p>Si F est une primitive de f, alors F + C l'est aussi pour toute constante C. Réciproquement, deux primitives de f sur un intervalle diffèrent d'une constante.</p>
      <div class="formula">∫ f(x) dx = F(x) + C</div>
      <p>On ne l'oublie jamais : sans le « + C », la réponse est incomplète.</p>

      <h3>3. Les primitives usuelles</h3>
      <div class="formula">∫ xⁿ dx = xⁿ⁺¹/(n+1) + C     (n ≠ −1)

∫ (1/x) dx = ln|x| + C

∫ eˣ dx = eˣ + C

∫ cos x dx = sin x + C

∫ sin x dx = −cos x + C</div>
      <div class="box warn"><b>Le cas n = −1</b> — La formule de la puissance ne marche pas pour 1/x : on obtiendrait une division par zéro. C'est pour cette raison que la primitive de 1/x est le logarithme, un cas à part.</div>

      <h3>4. Formes composées à reconnaître</h3>
      <p>C'est l'usage le plus fréquent en exercice : reconnaître u′·(fonction de u).</p>
      <div class="formula">∫ u′·uⁿ dx = uⁿ⁺¹/(n+1) + C

∫ (u′/u) dx = ln|u| + C

∫ u′·e^u dx = e^u + C</div>
      <p>Exemple : ∫ 2x·e^(x²) dx = e^(x²) + C, car on reconnaît u = x² avec u′ = 2x.</p>

      <h3>5. Linéarité</h3>
      <p>Les primitives se calculent terme à terme :</p>
      <div class="formula">∫ (αf + βg) dx = α∫f dx + β∫g dx</div>
      <div class="box warn"><b>Attention</b> — Il n'existe <b>aucune</b> formule pour la primitive d'un produit en général. Pour ∫ x·eˣ dx, la linéarité ne sert à rien : il faut passer par les intégrales et la méthode appropriée.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Déterminer une primitive de f(x) = 3x² − 4x + 5.</p>
      <ul>
        <li>On traite chaque terme : ∫3x² dx = x³</li>
        <li>∫4x dx = 2x²</li>
        <li>∫5 dx = 5x</li>
        <li>F(x) = x³ − 2x² + 5x + C</li>
      </ul>
      <p><b>Vérification :</b> F′(x) = 3x² − 4x + 5 = f(x) ✓</p>
    ` },
    { titre:"Intégrale définie et aire", contenu:`
      <h3>1. Définition</h3>
      <p>L'intégrale définie de f de a à b se calcule avec une primitive :</p>
      <div class="formula">∫ₐᵇ f(x) dx = F(b) − F(a)</div>
      <p>Le résultat est un <b>nombre</b>, contrairement à la primitive qui est une fonction. La constante C disparaît dans la soustraction.</p>

      <h3>2. Interprétation géométrique</h3>
      <p>Si f est positive sur [a ; b], l'intégrale est l'<b>aire</b> de la région comprise entre la courbe, l'axe des abscisses et les droites x = a et x = b.</p>
      <div class="box warn"><b>Le signe compte</b> — Quand la courbe passe sous l'axe des abscisses, l'intégrale est <b>négative</b>. On parle d'aire algébrique. Pour obtenir une aire géométrique, il faut découper l'intervalle et prendre la valeur absolue sur chaque partie.</div>

      <h3>3. Propriétés</h3>
      <div class="formula">∫ₐᵃ f(x) dx = 0

∫ᵦᵃ f(x) dx = −∫ₐᵇ f(x) dx

∫ₐᵇ f = ∫ₐᶜ f + ∫𝒸ᵇ f        (relation de Chasles)</div>
      <p>La relation de Chasles est la plus utile : elle permet de découper un calcul en morceaux simples.</p>

      <h3>4. Linéarité</h3>
      <div class="formula">∫ₐᵇ (f + g) = ∫ₐᵇ f + ∫ₐᵇ g

∫ₐᵇ k·f = k∫ₐᵇ f</div>

      <h3>5. Intégration d'une fonction non positive</h3>
      <p>Pour calculer une aire entre une courbe et l'axe des abscisses, on repère les points où f change de signe, on découpe l'intervalle, et on additionne les valeurs absolues.</p>
      <div class="box"><b>Méthode</b> — Sans le découpage, une partie positive et une partie négative s'annuleraient, et on obtiendrait une aire fausse (parfois nulle !).</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Calculer ∫₀¹ (2x + 1) dx.</p>
      <ul>
        <li>Une primitive est F(x) = x² + x</li>
        <li>F(1) = 1 + 1 = 2</li>
        <li>F(0) = 0</li>
        <li>∫₀¹ (2x + 1) dx = 2 − 0 = 2</li>
      </ul>
      <p><b>Interprétation :</b> la région est un trapèze de bases 1 et 3, de hauteur 1. Son aire vaut (1 + 3)/2 × 1 = 2 ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — d'abord retrouver des primitives, puis calculer des intégrales définies et des aires.</div>`,
  exercices:[
    { d:1, e:"Déterminer une primitive de f(x) = 3x².", r:"F(x) = x³ + C",
      c:"Formule ∫xⁿ dx = xⁿ⁺¹/(n+1) avec n = 2 : ∫x² dx = x³/3.\n\nDonc ∫3x² dx = 3 × x³/3 = x³.\n\nVérification : F′(x) = 3x² = f(x) ✓" },
    { d:1, e:"Déterminer une primitive de f(x) = 5.", r:"F(x) = 5x + C",
      c:"La primitive d'une constante k est kx.\n\nIci F(x) = 5x + C.\n\nVérification : F′(x) = 5 ✓" },
    { d:1, e:"Déterminer une primitive de f(x) = 1/x sur ]0 ; +∞[.", r:"F(x) = ln x + C",
      c:"La dérivée de ln x est 1/x, donc ln x est une primitive de 1/x.\n\nSur un intervalle contenant des négatifs, on écrirait ln|x| + C." },
    { d:1, e:"Déterminer une primitive de f(x) = eˣ.", r:"F(x) = eˣ + C",
      c:"L'exponentielle est sa propre dérivée : elle est donc aussi sa propre primitive.\n\nF(x) = eˣ + C." },
    { d:1, e:"Déterminer une primitive de f(x) = cos x.", r:"F(x) = sin x + C",
      c:"La dérivée de sin est cos, donc sin est une primitive de cos.\n\nF(x) = sin x + C." },
    { d:1, e:"Déterminer une primitive de f(x) = 4x³.", r:"F(x) = x⁴ + C",
      c:"∫4x³ dx = 4 × x⁴/4 = x⁴.\n\nVérification : F′(x) = 4x³ ✓" },
    { d:1, e:"Calculer ∫₀¹ x dx.", r:"1/2",
      c:"Une primitive de x est x²/2.\n\n∫₀¹ x dx = [x²/2]₀¹ = 1/2 − 0 = 1/2.\n\nInterprétation : c'est l'aire du triangle rectangle sous la droite y = x, de base 1 et hauteur 1, soit 1/2 ✓" },
    { d:1, e:"Calculer ∫₁² 1 dx.", r:"1",
      c:"Une primitive de la constante 1 est x.\n\n∫₁² 1 dx = [x]₁² = 2 − 1 = 1.\n\nInterprétation : c'est l'aire d'un rectangle de largeur 1 et hauteur 1." },
    { d:1, e:"Que vaut ∫ₐᵃ f(x) dx ?", r:"0",
      c:"∫ₐᵃ f = F(a) − F(a) = 0.\n\nUn intervalle de largeur nulle donne une aire nulle. C'est cohérent avec l'interprétation géométrique." },
    { d:1, e:"Déterminer une primitive de f(x) = 2x + 1.", r:"F(x) = x² + x + C",
      c:"On traite terme à terme : ∫2x dx = x² et ∫1 dx = x.\n\nF(x) = x² + x + C.\n\nVérification : F′(x) = 2x + 1 ✓" },
    { d:2, e:"Calculer ∫₀¹ (3x² + 2x) dx.", r:"2",
      c:"Une primitive est F(x) = x³ + x².\n\nF(1) = 1 + 1 = 2.\nF(0) = 0.\n\n∫₀¹ (3x² + 2x) dx = 2 − 0 = 2." },
    { d:2, e:"Calculer ∫₁ᵉ (1/x) dx.", r:"1",
      c:"Une primitive de 1/x est ln x (on est sur ]0 ; +∞[).\n\n∫₁ᵉ (1/x) dx = [ln x]₁ᵉ = ln e − ln 1 = 1 − 0 = 1.\n\nC'est un résultat remarquable : l'aire sous l'hyperbole de 1 à e vaut exactement 1." },
    { d:2, e:"Déterminer une primitive de f(x) = 2x·e^(x²).", r:"F(x) = e^(x²) + C",
      c:"On reconnaît la forme u′·e^u avec u = x², donc u′ = 2x.\n\nLa primitive est e^u = e^(x²).\n\nF(x) = e^(x²) + C.\n\nVérification : F′(x) = 2x·e^(x²) ✓" },
    { d:2, e:"Calculer ∫₀^π sin x dx.", r:"2",
      c:"Une primitive de sin est −cos.\n\n∫₀^π sin x dx = [−cos x]₀^π = −cos π − (−cos 0) = −(−1) + 1 = 2.\n\nC'est l'aire sous une arche de sinusoïde, qui vaut bien 2." },
    { d:2, e:"Déterminer une primitive de f(x) = (2x)/(x² + 1).", r:"F(x) = ln(x² + 1) + C",
      c:"On reconnaît la forme u′/u avec u = x² + 1, donc u′ = 2x.\n\nLa primitive est ln|u| = ln(x² + 1), le contenu étant toujours positif.\n\nF(x) = ln(x² + 1) + C." },
    { d:2, e:"Calculer l'aire sous la courbe de f(x) = x² entre 0 et 3.", r:"9",
      c:"f est positive sur [0 ; 3], donc l'aire est l'intégrale.\n\nUne primitive est x³/3.\n\n∫₀³ x² dx = [x³/3]₀³ = 27/3 − 0 = 9.\n\nVérification géométrique : l'aire sous une parabole de 0 à 3 vaut 9, soit exactement un tiers de 3³ = 27." },
    { d:2, e:"Calculer ∫₀² (x² − 2x) dx.", r:"−4/3",
      c:"Une primitive est F(x) = x³/3 − x².\n\nF(2) = 8/3 − 4 = 8/3 − 12/3 = −4/3.\nF(0) = 0.\n\n∫₀² (x² − 2x) dx = −4/3.\n\nLe résultat est négatif : sur [0 ; 2], la courbe de x² − 2x passe sous l'axe des abscisses (elle s'annule en 0 et 2, et est négative entre)." },
    { d:2, e:"Calculer ∫₋₁¹ x³ dx.", r:"0",
      c:"Une primitive est x⁴/4.\n\n∫₋₁¹ x³ dx = [x⁴/4]₋₁¹ = 1/4 − 1/4 = 0.\n\nC'est logique : x³ est impaire et l'intervalle est symétrique. Les aires négative et positive s'annulent exactement." },
    { d:2, e:"Déterminer une primitive de f(x) = sin(2x).", r:"F(x) = −(1/2)cos(2x) + C",
      c:"On cherche F telle que F′ = sin(2x).\n\nOn sait que la dérivée de cos(2x) est −2sin(2x).\nDonc la dérivée de −(1/2)cos(2x) est −(1/2) × (−2sin(2x)) = sin(2x). ✓\n\nF(x) = −(1/2)cos(2x) + C." },
    { d:2, e:"Calculer ∫₁⁴ (1/√x) dx.", r:"2",
      c:"On écrit 1/√x = x^(−1/2).\nUne primitive est x^(1/2)/(1/2) = 2√x.\n\n∫₁⁴ x^(−1/2) dx = [2√x]₁⁴ = 2×2 − 2×1 = 4 − 2 = 2." },
    { d:2, e:"Vérifier que F(x) = x·ln x − x est une primitive de ln x sur ]0 ; +∞[.", r:"Vrai",
      c:"On dérive F avec la règle du produit :\nF′(x) = 1·ln x + x·(1/x) − 1 = ln x + 1 − 1 = ln x.\n\nDonc F′ = ln x : F est bien une primitive de ln x." },
    { d:2, e:"Montrer que ∫₀¹ x² dx ≤ ∫₀¹ x dx.", r:"Vrai, 1/3 < 1/2",
      c:"∫₀¹ x² dx = [x³/3]₀¹ = 1/3.\n∫₀¹ x dx = [x²/2]₀¹ = 1/2.\n\nOn compare : 1/3 ≈ 0,333 et 1/2 = 0,5. L'inégalité est vérifiée.\n\nJustification générale : sur [0 ; 1], x² ≤ x, donc l'aire sous x² est plus petite que l'aire sous x." },
    { d:3, e:"Calculer l'aire de la région entre la courbe de f(x) = x² − 1 et l'axe des abscisses sur [−2 ; 2].", r:"4",
      c:"f s'annule en x = −1 et x = 1. Elle est positive sur [−2 ; −1] et [1 ; 2], négative sur [−1 ; 1].\n\n<b>Partie 1</b> : ∫₋₂₋₁ (x² − 1) dx = [x³/3 − x]₋₂₋₁ = (−1/3 + 1) − (−8/3 + 2) = 2/3 − (−2/3) = 4/3.\n\n<b>Partie 2</b> : ∫₋₁¹ (x² − 1) dx = [x³/3 − x]₋₁¹ = (1/3 − 1) − (−1/3 + 1) = (−2/3) − (2/3) = −4/3. Aire = 4/3.\n\n<b>Partie 3</b> : ∫₁² (x² − 1) dx = [x³/3 − x]₁² = (8/3 − 2) − (1/3 − 1) = 2/3 + 2/3 = 4/3.\n\nAire totale = 4/3 + 4/3 + 4/3 = 4." },
    { d:3, e:"Calculer ∫₀¹ x·eˣ dx.", r:"1",
      c:"Cette intégrale ne se calcule pas de tête : on utilise le fait que F(x) = (x − 1)eˣ est une primitive de x·eˣ.\n\nVérification : F′(x) = 1·eˣ + (x − 1)eˣ = eˣ(1 + x − 1) = x·eˣ ✓\n\n∫₀¹ x·eˣ dx = [(x−1)eˣ]₀¹ = (1−1)e¹ − (0−1)e⁰ = 0 − (−1) = 1." },
    { d:3, e:"Déterminer une primitive de f(x) = x/(x² + 4).", r:"F(x) = (1/2)ln(x² + 4) + C",
      c:"On veut la forme u′/u. Ici u = x² + 4, donc u′ = 2x.\n\nOr f(x) = x/(x²+4) = (1/2) × 2x/(x²+4) = (1/2)·(u′/u).\n\nDonc F(x) = (1/2)ln(x² + 4) + C.\n\nVérification : F′(x) = (1/2) × 2x/(x²+4) = x/(x²+4) ✓" },
    { d:3, e:"Soit f(x) = ln x. Calculer ∫₁² ln x dx.", r:"2ln 2 − 1",
      c:"On utilise la primitive F(x) = x·ln x − x (démontrée plus haut).\n\n∫₁² ln x dx = [x ln x − x]₁² = (2ln 2 − 2) − (1×0 − 1) = 2ln 2 − 2 + 1 = 2ln 2 − 1.\n\nValeur approchée : 2 × 0,693 − 1 ≈ 0,386." },
    { d:3, e:"Montrer que ∫₀¹ e⁻ˣ dx < 1.", r:"Vrai",
      c:"Une primitive de e⁻ˣ est −e⁻ˣ.\n\n∫₀¹ e⁻ˣ dx = [−e⁻ˣ]₀¹ = −e⁻¹ − (−e⁰) = −e⁻¹ + 1 = 1 − 1/e.\n\nOr 1/e ≈ 0,368 > 0, donc 1 − 1/e ≈ 0,632 < 1. L'inégalité est vérifiée." },
    { d:3, e:"Déterminer la valeur moyenne de f(x) = x² sur [0 ; 3].", r:"3",
      c:"La valeur moyenne d'une fonction sur [a ; b] est :\nm = (1/(b−a)) × ∫ₐᵇ f(x) dx\n\nIci : m = (1/3) × ∫₀³ x² dx = (1/3) × [x³/3]₀³ = (1/3) × 9 = 3.\n\nInterprétation : si l'aire sous la parabole était celle d'un rectangle de largeur 3, sa hauteur serait 3." },
    { d:3, e:"Calculer ∫₀^π sin x cos x dx.", r:"0",
      c:"On remarque que sin x cos x = (1/2)sin(2x).\n\nUne primitive est −(1/4)cos(2x).\n\n∫₀^π (1/2)sin(2x) dx = [−(1/4)cos(2x)]₀^π = −(1/4)cos(2π) + (1/4)cos(0) = −1/4 + 1/4 = 0.\n\nC'est cohérent : sur [0 ; π], la fonction sin·cos est positive sur [0 ; π/2] et négative sur [π/2 ; π], avec une symétrie parfaite." },
    { d:3, e:"Soit f positive et continue sur [a ; b]. Montrer que ∫ₐᵇ f(x) dx ≥ 0.", r:"Démonstration",
      c:"Soit F une primitive de f sur [a ; b]. On a f = F′, donc F est croissante sur [a ; b] (car f ≥ 0).\n\nOr ∫ₐᵇ f(x) dx = F(b) − F(a).\n\nComme F est croissante, F(b) ≥ F(a), donc F(b) − F(a) ≥ 0.\n\nConclusion : ∫ₐᵇ f(x) dx ≥ 0. C'est cohérent avec l'interprétation en aire : une aire ne peut pas être négative quand la courbe reste au-dessus de l'axe." },
    { d:3, e:"Calculer ∫₀^(π/2) cos x dx.", r:"1",
      c:"Une primitive de cos est sin.\n\n∫₀^(π/2) cos x dx = [sin x]₀^(π/2) = sin(π/2) − sin(0) = 1 − 0 = 1.\n\nC'est l'aire sous une arche de cosinus entre 0 et π/2 : elle vaut exactement 1." }
  ]
},
{
  id:"tle-combinatoire", niveau:"Tle", titre:"Tle · Combinatoire et dénombrement", temps:"20 min",
  resume:"Factorielle, arrangements, combinaisons, triangle de Pascal.",
  lecons:[
    { titre:"Principe additif et multiplicatif", contenu:`
      <h3>1. Le principe additif</h3>
      <p>Si deux situations ne peuvent pas se produire en même temps, le nombre total de possibilités est la <b>somme</b> des deux.</p>
      <div class="box"><b>Exemple</b> — Un restaurant propose 3 entrées et 4 desserts. Si on ne prend qu'un seul plat, il y a 3 + 4 = 7 choix possibles.</div>

      <h3>2. Le principe multiplicatif</h3>
      <p>Si on enchaîne deux étapes indépendantes, le nombre total de possibilités est le <b>produit</b>.</p>
      <div class="box"><b>Exemple</b> — 3 entrées et 4 plats : un menu entrée + plat donne 3 × 4 = 12 combinaisons.</div>
      <div class="formula">Nombre de façons = (choix étape 1) × (choix étape 2) × …</div>

      <h3>3. Les k-uplets</h3>
      <p>Un k-uplet est une liste ordonnée de k éléments. Si on choisit dans un ensemble à n éléments, <b>avec répétition possible</b> :</p>
      <div class="formula">Nombre de k-uplets = n^k</div>
      <p>Exemple : un code à 4 chiffres donne 10⁴ = 10 000 possibilités.</p>

      <h3>4. La factorielle</h3>
      <p>Pour n entier naturel non nul :</p>
      <div class="formula">n! = n × (n−1) × … × 2 × 1        et        0! = 1</div>
      <p>Exemples : 3! = 6, 4! = 24, 5! = 120. La factorielle croît très vite.</p>
      <div class="box warn"><b>Erreur classique</b> — Croire que 0! = 0. Par convention, 0! = 1. Cette convention rend toutes les formules cohérentes.</div>

      <h3>5. Les arrangements : ordre compte, sans répétition</h3>
      <p>Un arrangement de k éléments parmi n, c'est une liste ordonnée <b>sans répétition</b> :</p>
      <div class="formula">A(n, k) = n! / (n − k)!</div>
      <p>Exemple : le nombre de podiums possibles dans une course de 8 chevaux est A(8,3) = 8!/5! = 8 × 7 × 6 = 336.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Combien de mots de 4 lettres distinctes peut-on former avec A, B, C, D, E ?</p>
      <ul>
        <li>L'ordre compte (ABCD ≠ BACD)</li>
        <li>Pas de répétition (une lettre ne peut pas servir deux fois)</li>
        <li>C'est un arrangement : A(5,4) = 5!/(5−4)! = 5!/1! = 120</li>
      </ul>
      <p><b>Vérification par étapes :</b> 5 choix pour la 1re lettre, 4 pour la 2e, 3 pour la 3e, 2 pour la 4e : 5 × 4 × 3 × 2 = 120 ✓</p>
    ` },
    { titre:"Combinaisons et triangle de Pascal", contenu:`
      <h3>1. Quand l'ordre ne compte pas</h3>
      <p>Une <b>combinaison</b> de k éléments parmi n est un sous-ensemble : l'ordre n'intervient pas. Tirer {A, B} ou {B, A} donne la même main.</p>
      <div class="formula">C(n, k) = n! / [k! × (n − k)!]</div>
      <p>On note aussi ce nombre « k parmi n » et on le lit ainsi en français.</p>

      <h3>2. La relation entre arrangements et combinaisons</h3>
      <p>Pour chaque combinaison de k éléments, il y a k! façons de les ordonner. Donc :</p>
      <div class="formula">A(n, k) = C(n, k) × k!</div>
      <div class="box"><b>Réflexe de décision</b> — Pose-toi toujours la question : « l'ordre compte-t-il ? » Si oui → arrangement. Si non → combinaison.</div>

      <h3>3. Les valeurs à connaître</h3>
      <div class="formula">C(n, 0) = 1        C(n, 1) = n
C(n, n) = 1        C(n, 2) = n(n−1)/2</div>

      <h3>4. Symétrie</h3>
      <p>Choisir k éléments revient à choisir ceux qu'on laisse de côté :</p>
      <div class="formula">C(n, k) = C(n, n − k)</div>
      <p>Exemple : C(10, 8) = C(10, 2) = 45. Le calcul est beaucoup plus rapide.</p>

      <h3>5. Triangle de Pascal</h3>
      <p>Les combinaisons se rangent en triangle, chaque nombre étant la somme des deux au-dessus :</p>
      <div class="formula">1
1   1
1   2   1
1   3   3   1
1   4   6   4   1</div>
      <p>La relation qui le définit :</p>
      <div class="formula">C(n, k) = C(n−1, k−1) + C(n−1, k)</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Combien de mains de 5 cartes peut-on tirer d'un jeu de 32 cartes ?</p>
      <ul>
        <li>L'ordre ne compte pas : une main est un ensemble</li>
        <li>Pas de répétition : chaque carte est unique</li>
        <li>C(32, 5) = 32! / (5! × 27!) = (32 × 31 × 30 × 29 × 28) / (5 × 4 × 3 × 2 × 1)</li>
        <li>Numérateur : 24 165 120. Dénominateur : 120</li>
        <li>Résultat : 201 376 mains possibles</li>
      </ul>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — compter des listes ordonnées (principe multiplicatif, factorielle, arrangements), puis compter des ensembles (combinaisons, Pascal).</div>`,
  exercices:[
    { d:1, e:"Calculer 4!.", r:"24",
      c:"4! = 4 × 3 × 2 × 1 = 24.\n\nLa factorielle compte le nombre de façons d'ordonner 4 objets distincts." },
    { d:1, e:"Calculer 5!.", r:"120",
      c:"5! = 5 × 4 × 3 × 2 × 1 = 120.\n\nOn peut voir 5! = 5 × 4! = 5 × 24 = 120." },
    { d:1, e:"Que vaut 0! ?", r:"1",
      c:"Par convention, 0! = 1.\n\nCette convention n'est pas arbitraire : elle rend vraie la formule C(n,0) = 1 et cohérente la relation (n+1)! = (n+1)·n! pour n = 0." },
    { d:1, e:"Calculer C(5, 2).", r:"10",
      c:"C(5,2) = 5!/(2! × 3!) = (5 × 4)/(2 × 1) = 20/2 = 10.\n\nOn peut aussi utiliser la formule rapide : n(n−1)/2 = 5×4/2 = 10." },
    { d:1, e:"Calculer C(10, 1).", r:"10",
      c:"C(n,1) = n : choisir 1 élément parmi n, il y a n possibilités.\n\nDonc C(10,1) = 10." },
    { d:1, e:"Combien de codes à 3 chiffres peut-on former (répétition autorisée) ?", r:"1000",
      c:"Chaque position offre 10 choix (les chiffres 0 à 9), et la répétition est autorisée.\n\nPrincipe multiplicatif : 10 × 10 × 10 = 10³ = 1000." },
    { d:1, e:"Calculer A(6, 2).", r:"30",
      c:"A(6,2) = 6!/4! = 6 × 5 = 30.\n\nInterprétation : choisir un 1er élément (6 façons), puis un 2e distinct (5 façons) : 6 × 5 = 30." },
    { d:1, e:"Que vaut C(n, 0) ?", r:"1",
      c:"Choisir 0 élément parmi n, c'est choisir l'ensemble vide. Il n'y a qu'une seule façon de le faire.\n\nDonc C(n,0) = 1 pour tout n." },
    { d:1, e:"Que vaut C(n, n) ?", r:"1",
      c:"Choisir n éléments parmi n, c'est prendre tout l'ensemble. Une seule possibilité.\n\nDonc C(n,n) = 1." },
    { d:1, e:"Combien de façons d'ordonner 3 livres sur une étagère ?", r:"6",
      c:"C'est le nombre de permutations de 3 objets : 3! = 3 × 2 × 1 = 6.\n\nÉnumération : ABC, ACB, BAC, BCA, CAB, CBA ✓" },
    { d:2, e:"Calculer C(8, 3).", r:"56",
      c:"C(8,3) = 8!/(3! × 5!) = (8 × 7 × 6)/(3 × 2 × 1) = 336/6 = 56.\n\nVérification par Pascal : C(8,3) = C(7,2) + C(7,3) = 21 + 35 = 56 ✓" },
    { d:2, e:"L'ordre compte-t-il pour une combinaison ?", r:"Non",
      c:"Une combinaison est un sous-ensemble : {A, B} et {B, A} désignent la même combinaison.\n\nL'ordre compte en revanche pour un arrangement ou un k-uplet." },
    { d:2, e:"Combien de poignées de main entre 8 personnes ?", r:"28",
      c:"Chaque poignée de main fait intervenir 2 personnes, et l'ordre n'importe pas (A serre la main de B = B serre celle de A).\n\nC(8,2) = 8 × 7/2 = 28." },
    { d:2, e:"Calculer C(10, 8).", r:"45",
      c:"On utilise la symétrie : C(10,8) = C(10,2).\n\nC(10,2) = 10 × 9/2 = 45.\n\nChoisir 8 éléments revient à choisir les 2 qu'on exclut : même nombre de possibilités." },
    { d:2, e:"Combien de mots de 3 lettres distinctes avec A, B, C, D ?", r:"24",
      c:"L'ordre compte et pas de répétition : c'est un arrangement.\n\nA(4,3) = 4!/1! = 4 × 3 × 2 = 24.\n\nPar étapes : 4 choix, puis 3, puis 2." },
    { d:2, e:"Dans une classe de 25 élèves, combien de façons d'élire un délégué et un suppléant ?", r:"600",
      c:"Les rôles sont distincts, donc l'ordre compte : c'est un arrangement.\n\nA(25,2) = 25 × 24 = 600.\n\nAttention : si on élisait deux délégués sans rôle distinct, ce serait C(25,2) = 300." },
    { d:2, e:"Montrer que C(n, 1) = n.", r:"Démonstration",
      c:"C(n,1) = n!/[1! × (n−1)!] = n × (n−1)! / (n−1)! = n.\n\nInterprétation : choisir 1 élément parmi n, il y a exactement n possibilités — une pour chaque élément." },
    { d:2, e:"Combien de mots de passe de 4 caractères distincts parmi 26 lettres ?", r:"358 800",
      c:"L'ordre compte, sans répétition : arrangement.\n\nA(26,4) = 26 × 25 × 24 × 23 = 358 800.\n\nCalcul : 26 × 25 = 650, 650 × 24 = 15 600, 15 600 × 23 = 358 800." },
    { d:2, e:"Combien de façons de choisir 3 cartes parmi 10 ?", r:"120",
      c:"L'ordre ne compte pas (une main est un ensemble), pas de répétition.\n\nC(10,3) = (10 × 9 × 8)/(3 × 2 × 1) = 720/6 = 120." },
    { d:2, e:"Vérifier que C(6, 2) = C(5, 1) + C(5, 2).", r:"15 = 5 + 10 ✓",
      c:"C(6,2) = 6 × 5/2 = 15.\nC(5,1) = 5.\nC(5,2) = 5 × 4/2 = 10.\n\n5 + 10 = 15 ✓\n\nC'est la relation de Pascal, qui construit chaque ligne du triangle à partir de la précédente." },
    { d:2, e:"Combien d'anagrammes du mot « MATH » ?", r:"24",
      c:"Le mot comporte 4 lettres toutes distinctes.\n\nLe nombre d'anagrammes est le nombre de permutations : 4! = 24." },
    { d:3, e:"Combien d'anagrammes du mot « ANANAS » ?", r:"60",
      c:"Le mot comporte 6 lettres dont 3 A et 2 N (et un S).\n\nSi toutes les lettres étaient distinctes : 6! = 720.\nMais les 3 A peuvent être échangés entre eux sans changer le mot : on divise par 3! = 6.\nDe même pour les 2 N : on divise par 2! = 2.\n\nNombre = 6!/(3! × 2!) = 720/(6 × 2) = 720/12 = 60." },
    { d:3, e:"Combien de façons de répartir 5 personnes en 2 groupes de 3 et 2 ?", r:"10",
      c:"On choisit d'abord les 3 personnes du premier groupe : C(5,3) = 10.\n\nLes 2 restantes forment automatiquement le second groupe : C(2,2) = 1.\n\nTotal : 10 × 1 = 10.\n\nAttention : les groupes ayant des tailles différentes (3 et 2), il n'y a pas de division par 2 — les deux groupes sont distinguables par leur taille." },
    { d:3, e:"Combien de façons de répartir 6 personnes en 2 groupes de 3 ?", r:"10",
      c:"On choisit 3 personnes pour le premier groupe : C(6,3) = 20.\n\nMais les deux groupes ont la même taille, donc l'ordre des groupes n'importe pas : choisir {A,B,C} puis {D,E,F} donne le même partage que choisir {D,E,F} puis {A,B,C}.\n\nOn divise donc par 2! : 20/2 = 10." },
    { d:3, e:"Démontrer la relation de Pascal C(n,k) = C(n−1,k−1) + C(n−1,k).", r:"Démonstration",
      c:"On part du membre de droite et on utilise la formule des combinaisons.\n\nC(n−1, k−1) = (n−1)!/[(k−1)! × (n−k)!]\nC(n−1, k) = (n−1)!/[k! × (n−1−k)!]\n\nOn met (n−1)! en facteur :\n\nTotal = (n−1)! × [1/((k−1)!(n−k)!) + 1/(k!(n−1−k)!)]\n\nOn met au même dénominateur k!(n−k)! :\n\nTotal = (n−1)! × [k + (n−k)] / [k!(n−k)!]\n     = (n−1)! × n / [k!(n−k)!]\n     = n!/[k!(n−k)!]\n     = C(n,k) ✓\n\nInterprétation combinatoire : parmi les n éléments, on en fixe un. Les combinaisons qui le contiennent sont C(n−1,k−1), celles qui ne le contiennent pas sont C(n−1,k)." },
    { d:3, e:"Combien de façons de former un comité de 4 personnes avec au moins 1 femme, parmi 6 hommes et 5 femmes ?", r:"300",
      c:"Méthode du complémentaire : on compte tous les comités, puis on retire ceux sans femme.\n\n<b>Tous les comités</b> : C(11,4) = (11×10×9×8)/(4×3×2) = 7920/24 = 330.\n\n<b>Comités sans femme</b> (donc 4 hommes parmi 6) : C(6,4) = C(6,2) = 15.\n\n<b>Résultat</b> : 330 − 15 = 315.\n\nVérification par addition directe : 1 femme et 3 hommes : C(5,1)×C(6,3) = 5×20 = 100. 2 femmes et 2 hommes : 10×15 = 150. 3 femmes et 1 homme : 10×6 = 60. 4 femmes : 5×1 = 5. Total : 100+150+60+5 = 315 ✓" },
    { d:3, e:"Combien de nombres de 4 chiffres distincts peut-on former avec 1,2,3,4,5 ?", r:"120",
      c:"Les chiffres sont distincts et l'ordre compte : arrangement.\n\nA(5,4) = 5 × 4 × 3 × 2 = 120.\n\nOn pourrait compter autrement : choisir 4 chiffres parmi 5 (C(5,4) = 5 façons), puis les ordonner (4! = 24 façons). Total : 5 × 24 = 120 ✓" },
    { d:3, e:"Combien de diagonales a un polygone à 10 sommets ?", r:"35",
      c:"Un segment relie 2 sommets parmi 10 : C(10,2) = 45.\n\nMais parmi ces segments, 10 sont les côtés du polygone, pas des diagonales.\n\nNombre de diagonales : 45 − 10 = 35.\n\nFormule générale pour n sommets : C(n,2) − n = n(n−1)/2 − n = n(n−3)/2. Vérification : 10×7/2 = 35 ✓" },
    { d:3, e:"Démontrer que C(n,2) = n(n−1)/2.", r:"Démonstration",
      c:"C(n,2) = n!/[2! × (n−2)!]\n\nOn développe : n! = n × (n−1) × (n−2)!\n\nDonc C(n,2) = [n × (n−1) × (n−2)!] / [2 × (n−2)!] = n(n−1)/2.\n\nInterprétation : parmi n personnes, le nombre de poignées de main est n(n−1)/2 — on divise par 2 car l'ordre des deux personnes n'importe pas." },
    { d:3, e:"Combien de façons de placer 8 tours sur un échiquier sans qu'elles se menacent ?", r:"40 320",
      c:"Une tour menace toute sa ligne et toute sa colonne. Sans menace mutuelle, il faut exactement une tour par ligne et par colonne.\n\nOn place les tours ligne par ligne : pour la 1re ligne, 8 colonnes possibles ; pour la 2e, 7 ; et ainsi de suite.\n\nNombre = 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1 = 8! = 40 320." }
  ]
},
{
  id:"tle-espace", niveau:"Tle", titre:"Tle · Géométrie de l'espace", temps:"22 min",
  resume:"Droites et plans, vecteurs de l'espace, produit scalaire, orthogonalité.",
  lecons:[
    { titre:"Droites et plans de l'espace", contenu:`
      <h3>1. Ce qui change par rapport au plan</h3>
      <p>Dans l'espace, deux droites peuvent être <b>non coplanaires</b> : ni parallèles, ni sécantes. C'est une situation qui n'existe pas dans le plan et qui déroute au début.</p>
      <ul>
        <li><b>Parallèles</b> : même direction</li>
        <li><b>Sécantes</b> : un point commun</li>
        <li><b>Non coplanaires</b> : aucun point commun, directions différentes</li>
      </ul>

      <h3>2. Positions relatives d'une droite et d'un plan</h3>
      <ul>
        <li>La droite est <b>incluse</b> dans le plan</li>
        <li>La droite est <b>strictement parallèle</b> au plan (aucun point commun)</li>
        <li>La droite <b>coupe</b> le plan en un point</li>
      </ul>

      <h3>3. Comment démontrer qu'une droite est orthogonale à un plan</h3>
      <p>C'est le théorème le plus utilisé du chapitre :</p>
      <div class="box"><b>Théorème</b> — Si une droite est orthogonale à <b>deux droites sécantes</b> du plan, alors elle est orthogonale à tout le plan.</div>
      <div class="box warn"><b>Erreur classique</b> — Vérifier l'orthogonalité avec deux droites <b>parallèles</b> du plan. Il en faut deux qui se coupent : c'est la condition essentielle du théorème.</div>

      <h3>4. Plan défini par un point et deux vecteurs</h3>
      <p>Un plan est entièrement déterminé par un point A et deux vecteurs non colinéaires u⃗ et v⃗. Tout point M du plan s'écrit :</p>
      <div class="formula">AM⃗ = s·u⃗ + t·v⃗        (s, t réels)</div>
      <p>C'est la <b>représentation paramétrique</b> du plan.</p>

      <h3>5. Représentation paramétrique d'une droite</h3>
      <div class="formula">M(x ; y ; z) ∈ droite  ⟺  il existe t tel que :
x = x_A + t·u_x
y = y_A + t·u_y
z = z_A + t·u_z</div>
      <p>Le vecteur u⃗ est un vecteur directeur de la droite.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Donner une représentation paramétrique de la droite passant par A(1 ; 2 ; 3) et de vecteur directeur u⃗(2 ; −1 ; 4).</p>
      <ul>
        <li>On applique la formule terme à terme</li>
        <li>x = 1 + 2t</li>
        <li>y = 2 − t</li>
        <li>z = 3 + 4t</li>
      </ul>
      <p><b>Vérification :</b> pour t = 0, on retrouve bien le point A(1 ; 2 ; 3) ✓</p>
    ` },
    { titre:"Produit scalaire dans l'espace", contenu:`
      <h3>1. Définition en coordonnées</h3>
      <p>Dans un repère orthonormé, le produit scalaire se calcule composante par composante :</p>
      <div class="formula">u⃗·v⃗ = x·x′ + y·y′ + z·z′</div>
      <p>Le résultat est un <b>nombre</b>, pas un vecteur.</p>

      <h3>2. Norme d'un vecteur</h3>
      <div class="formula">‖u⃗‖ = √(x² + y² + z²)</div>
      <p>C'est l'extension à trois dimensions du théorème de Pythagore.</p>

      <h3>3. Orthogonalité</h3>
      <p>C'est l'usage principal du produit scalaire :</p>
      <div class="formula">u⃗ ⊥ v⃗   ⟺   u⃗·v⃗ = 0</div>
      <div class="box"><b>Usage typique</b> — Pour montrer qu'un triangle ABC est rectangle en A, on calcule AB⃗·AC⃗. S'il vaut 0, l'angle en A est droit.</div>

      <h3>4. Vecteur normal à un plan</h3>
      <p>Un vecteur normal n⃗ à un plan est orthogonal à tout vecteur du plan. Il permet d'écrire l'<b>équation cartésienne</b> du plan :</p>
      <div class="formula">Plan de vecteur normal n⃗(a ; b ; c) passant par A :
a(x − x_A) + b(y − y_A) + c(z − z_A) = 0
Soit, sous forme développée : ax + by + cz + d = 0</div>

      <h3>5. Distance d'un point à un plan</h3>
      <div class="formula">Pour un plan ax + by + cz + d = 0 et un point M(x₀ ; y₀ ; z₀) :
distance = |a·x₀ + b·y₀ + c·z₀ + d| / √(a² + b² + c²)</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Les points A(1 ; 0 ; 0), B(0 ; 1 ; 0), C(0 ; 0 ; 1) définissent-ils un triangle rectangle ?</p>
      <ul>
        <li>AB⃗ = (−1 ; 1 ; 0) et AC⃗ = (−1 ; 0 ; 1)</li>
        <li>AB⃗·AC⃗ = (−1)(−1) + 1×0 + 0×1 = 1</li>
        <li>Le produit scalaire n'est pas nul : l'angle en A n'est pas droit</li>
        <li>BA⃗ = (1 ; −1 ; 0) et BC⃗ = (0 ; −1 ; 1) : BA⃗·BC⃗ = 0 + 1 + 0 = 1 ≠ 0</li>
        <li>CA⃗ = (1 ; 0 ; −1) et CB⃗ = (0 ; 1 ; −1) : CA⃗·CB⃗ = 0 + 0 + 1 = 1 ≠ 0</li>
      </ul>
      <p><b>Conclusion :</b> le triangle n'est pas rectangle — les trois angles sont égaux (c'est en fait un triangle équilatéral).</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — les positions relatives et les représentations paramétriques, puis le produit scalaire et l'orthogonalité.</div>`,
  exercices:[
    { d:1, e:"Calculer la norme du vecteur u⃗(3 ; 4 ; 0).", r:"5",
      c:"‖u⃗‖ = √(3² + 4² + 0²) = √(9 + 16) = √25 = 5.\n\nC'est le triangle 3-4-5 classique, dans le plan z = 0." },
    { d:1, e:"Calculer la norme du vecteur u⃗(1 ; 2 ; 2).", r:"3",
      c:"‖u⃗‖ = √(1² + 2² + 2²) = √(1 + 4 + 4) = √9 = 3." },
    { d:1, e:"u⃗(1 ; 2 ; 3) et v⃗(2 ; −1 ; 0). Calculer u⃗·v⃗.", r:"0",
      c:"u⃗·v⃗ = 1×2 + 2×(−1) + 3×0 = 2 − 2 + 0 = 0.\n\nLe produit scalaire est nul : les deux vecteurs sont <b>orthogonaux</b>." },
    { d:1, e:"u⃗(2 ; 1 ; 0) et v⃗(1 ; 3 ; 5). Calculer u⃗·v⃗.", r:"5",
      c:"u⃗·v⃗ = 2×1 + 1×3 + 0×5 = 2 + 3 + 0 = 5." },
    { d:1, e:"Les vecteurs u⃗(1 ; 0 ; 0) et v⃗(0 ; 1 ; 0) sont-ils orthogonaux ?", r:"Oui",
      c:"u⃗·v⃗ = 1×0 + 0×1 + 0×0 = 0.\n\nLes deux vecteurs sont orthogonaux : ce sont les vecteurs de base de deux axes perpendiculaires." },
    { d:1, e:"Donner la représentation paramétrique de la droite passant par A(2 ; 1 ; 0) et de vecteur directeur u⃗(1 ; 3 ; −2).", r:"x = 2+t, y = 1+3t, z = −2t",
      c:"On applique la formule : x = x_A + t·u_x, et ainsi de suite.\n\nx = 2 + t\ny = 1 + 3t\nz = 0 − 2t = −2t\n\nVérification : pour t = 0, on retrouve le point A(2 ; 1 ; 0) ✓" },
    { d:1, e:"Que vaut ‖u⃗‖ si u⃗ = 0⃗ ?", r:"0",
      c:"Le vecteur nul a une norme nulle : ‖0⃗‖ = 0.\n\nRéciproquement, le seul vecteur de norme nulle est le vecteur nul." },
    { d:1, e:"Deux droites non coplanaires ont-elles un point commun ?", r:"Non",
      c:"Par définition, deux droites non coplanaires ne sont ni parallèles ni sécantes : elles n'ont aucun point commun.\n\nC'est une configuration qui n'existe pas dans le plan, uniquement dans l'espace." },
    { d:1, e:"Que donne le produit scalaire u⃗·u⃗ ?", r:"‖u⃗‖²",
      c:"u⃗·u⃗ = x² + y² + z² = ‖u⃗‖².\n\nC'est la définition de la norme au carré, cohérente avec la formule de la norme." },
    { d:1, e:"Le plan d'équation z = 0 contient-il le point (1 ; 5 ; 0) ?", r:"Oui",
      c:"Un point appartient au plan si ses coordonnées vérifient l'équation.\n\nPour (1 ; 5 ; 0) : z = 0 ✓\n\nLe plan z = 0 est le plan horizontal passant par l'origine." },
    { d:2, e:"Montrer que le triangle A(0;0;0), B(1;0;0), C(0;1;0) est rectangle en A.", r:"Démonstration",
      c:"On calcule AB⃗ = (1 ; 0 ; 0) et AC⃗ = (0 ; 1 ; 0).\n\nAB⃗·AC⃗ = 1×0 + 0×1 + 0×0 = 0.\n\nLe produit scalaire est nul, donc les vecteurs AB⃗ et AC⃗ sont orthogonaux : l'angle en A est droit. Le triangle est rectangle en A." },
    { d:2, e:"Déterminer un vecteur normal au plan d'équation 2x − y + 3z − 5 = 0.", r:"n⃗(2 ; −1 ; 3)",
      c:"Dans l'équation ax + by + cz + d = 0, le vecteur normal est n⃗(a ; b ; c).\n\nIci a = 2, b = −1, c = 3, donc n⃗(2 ; −1 ; 3).\n\nLe coefficient d = −5 n'intervient pas dans le vecteur normal : il détermine la position du plan, pas son orientation." },
    { d:2, e:"Le point (1 ; 1 ; 1) appartient-il au plan 2x − y + 3z − 5 = 0 ?", r:"Non",
      c:"On remplace : 2×1 − 1 + 3×1 − 5 = 2 − 1 + 3 − 5 = −1.\n\nLe résultat n'est pas 0, donc le point n'appartient pas au plan." },
    { d:2, e:"Calculer la distance du point (0 ; 0 ; 0) au plan x + y + z − 3 = 0.", r:"√3",
      c:"Formule : distance = |a·x₀ + b·y₀ + c·z₀ + d| / √(a²+b²+c²).\n\nNumérateur : |1×0 + 1×0 + 1×0 − 3| = |−3| = 3.\nDénominateur : √(1 + 1 + 1) = √3.\n\nDistance = 3/√3 = √3 ≈ 1,732." },
    { d:2, e:"Les points A(1;0;0), B(0;1;0), C(0;0;1) sont-ils alignés ?", r:"Non",
      c:"AB⃗ = (−1 ; 1 ; 0) et AC⃗ = (−1 ; 0 ; 1).\n\nTest de colinéarité : existe-t-il k tel que AC⃗ = k·AB⃗ ?\nCela exigerait 0 = k×1, donc k = 0, mais alors −1 = 0, impossible.\n\nLes vecteurs ne sont pas colinéaires : les trois points ne sont pas alignés, ils définissent un plan." },
    { d:2, e:"Déterminer l'équation du plan passant par A(1;0;0) de vecteur normal n⃗(1;1;1).", r:"x + y + z − 1 = 0",
      c:"On utilise la forme a(x − x_A) + b(y − y_A) + c(z − z_A) = 0.\n\n1(x − 1) + 1(y − 0) + 1(z − 0) = 0\nx − 1 + y + z = 0\nx + y + z − 1 = 0\n\nVérification : le point A vérifie bien 1 + 0 + 0 − 1 = 0 ✓" },
    { d:2, e:"Calculer ‖AB⃗‖ pour A(1;2;3) et B(4;6;3).", r:"5",
      c:"AB⃗ = (4−1 ; 6−2 ; 3−3) = (3 ; 4 ; 0).\n\n‖AB⃗‖ = √(9 + 16 + 0) = √25 = 5.\n\nC'est la distance entre les deux points." },
    { d:2, e:"Montrer que les plans d'équations x + y + z = 1 et 2x + 2y + 2z = 5 sont parallèles.", r:"Démonstration",
      c:"Deux plans sont parallèles si leurs vecteurs normaux sont colinéaires.\n\nn⃗₁(1 ; 1 ; 1) et n⃗₂(2 ; 2 ; 2).\n\nOr n⃗₂ = 2·n⃗₁ : les vecteurs normaux sont colinéaires, donc les plans sont parallèles.\n\nIls ne sont pas confondus : le point (0 ; 0 ; 1) vérifie la première équation mais pas la seconde (2 ≠ 5)." },
    { d:2, e:"Un vecteur normal à un plan peut-il être orthogonal à seulement une droite parallèle au plan ?", r:"Non",
      c:"Par définition, un vecteur normal est orthogonal à <b>toutes</b> les droites du plan — donc à tout vecteur directeur de ce plan.\n\nSi un vecteur n'est orthogonal qu'à une seule direction du plan, ce n'est pas un vecteur normal." },
    { d:2, e:"Donner un vecteur directeur de la droite x = 1 + 2t, y = 3 − t, z = 5.", r:"u⃗(2 ; −1 ; 0)",
      c:"Dans une représentation paramétrique, les coefficients de t donnent le vecteur directeur.\n\nx : coefficient 2\ny : coefficient −1\nz : coefficient 0 (pas de t)\n\nDonc u⃗(2 ; −1 ; 0)." },
    { d:2, e:"Que représente l'ensemble des points tels que x = 0 ?", r:"Le plan (yOz)",
      c:"L'équation x = 0 décrit le plan contenant tous les points dont l'abscisse est nulle.\n\nC'est le plan formé par les axes des ordonnées et des cotes : le plan (yOz)." },
    { d:3, e:"Montrer que la droite d'équation paramétrique (x;y;z) = (1+t ; 2−t ; 3+2t) coupe le plan z = 0.", r:"t = −3/2, point (1/2 ; 7/2 ; 0)",
      c:"On cherche t tel que z = 0.\n\nOr z = 3 + 2t. Donc 3 + 2t = 0, soit t = −3/2.\n\nReport dans les autres coordonnées :\nx = 1 + (−3/2) = −1/2\ny = 2 − (−3/2) = 2 + 3/2 = 7/2\nz = 0\n\nLe point d'intersection est (−1/2 ; 7/2 ; 0)." },
    { d:3, e:"Déterminer l'intersection des plans x + y + z = 1 et x − y + z = 0.", r:"Une droite",
      c:"On résout le système :\nx + y + z = 1   (1)\nx − y + z = 0   (2)\n\n(1) − (2) : 2y = 1, donc y = 1/2.\n\nEn reportant dans (2) : x + z = 1/2, donc z = 1/2 − x.\n\nOn pose x = t (paramètre libre) :\n x = t\ny = 1/2\nz = 1/2 − t\n\nL'intersection est une droite, de vecteur directeur (1 ; 0 ; −1), passant par (0 ; 1/2 ; 1/2)." },
    { d:3, e:"Montrer que les points A(1;1;1), B(2;2;2), C(3;3;3) sont alignés.", r:"Démonstration",
      c:"AB⃗ = (2−1 ; 2−1 ; 2−1) = (1 ; 1 ; 1).\nAC⃗ = (3−1 ; 3−1 ; 3−1) = (2 ; 2 ; 2).\n\nOr AC⃗ = 2·AB⃗ : les vecteurs sont colinéaires.\n\nDe plus, ils ont le point A en commun. Donc les trois points sont alignés.\n\nRemarque : ils appartiennent tous à la droite passant par l'origine de vecteur directeur (1 ; 1 ; 1) — c'est la première bissectrice de l'espace." },
    { d:3, e:"Calculer le volume du tétraèdre A(0;0;0), B(1;0;0), C(0;1;0), D(0;0;1).", r:"1/6",
      c:"Le volume d'un tétraèdre ABCD vaut :\nV = (1/6) × |AB⃗·(AC⃗ ∧ AD⃗)|\n\nIci AB⃗ = (1;0;0), AC⃗ = (0;1;0), AD⃗ = (0;0;1).\nLe produit mixte vaut 1 (les trois vecteurs sont les vecteurs de base).\n\nV = (1/6) × 1 = 1/6.\n\nVérification géométrique : c'est une pyramide de base triangulaire d'aire 1/2 et de hauteur 1, donc V = (1/3) × (1/2) × 1 = 1/6 ✓" },
    { d:3, e:"Déterminer la distance entre les plans parallèles x + y + z = 1 et x + y + z = 4.", r:"√3",
      c:"La distance entre deux plans parallèles se calcule en prenant un point de l'un et en mesurant sa distance à l'autre.\n\nPrenons le point A(1 ; 0 ; 0) du premier plan (1 + 0 + 0 = 1 ✓).\n\nDistance de A au plan x + y + z − 4 = 0 :\n|1 + 0 + 0 − 4| / √(1+1+1) = 3/√3 = √3 ≈ 1,732.\n\nVérification : la distance entre les plans est bien |4 − 1|/√3 = 3/√3 = √3." },
    { d:3, e:"Montrer que si u⃗·v⃗ = 0 et u⃗·w⃗ = 0, alors u⃗ est orthogonal à toute combinaison de v⃗ et w⃗.", r:"Démonstration",
      c:"Soit x⃗ = s·v⃗ + t·w⃗ une combinaison linéaire quelconque.\n\nOn calcule u⃗·x⃗ :\nu⃗·(s·v⃗ + t·w⃗) = s·(u⃗·v⃗) + t·(u⃗·w⃗)   (par bilinéarité)\n              = s·0 + t·0 = 0\n\nDonc u⃗·x⃗ = 0 pour toute combinaison : u⃗ est orthogonal à x⃗.\n\nC'est le fondement du théorème : si u⃗ est orthogonal à deux vecteurs non colinéaires d'un plan, il est orthogonal à tout ce plan." },
    { d:3, e:"Le triangle A(0;0;0), B(2;0;0), C(1;√3;0) est-il équilatéral ?", r:"Oui",
      c:"AB⃗ = (2 ; 0 ; 0), donc AB = 2.\nAC⃗ = (1 ; √3 ; 0), donc AC = √(1 + 3) = √4 = 2.\nBC⃗ = (1−2 ; √3 ; 0) = (−1 ; √3 ; 0), donc BC = √(1 + 3) = 2.\n\nLes trois côtés mesurent 2 : le triangle est équilatéral.\n\nVérification : ses angles valent 60°. Par exemple, AB⃗·AC⃗ = 2×1 + 0 + 0 = 2, et cos(angle) = 2/(2×2) = 1/2, donc l'angle vaut bien 60°." }
  ]
},
{
  id:"tle-probas", niveau:"Tle", titre:"Tle · Probabilités et variables aléatoires", temps:"26 min",
  resume:"Probabilités conditionnelles, indépendance, variables aléatoires, espérance, loi binomiale.",
  lecons:[
    { titre:"Probabilités conditionnelles et indépendance", contenu:`
      <h3>1. Probabilité conditionnelle</h3>
      <p>P(B | A) se lit « probabilité de B sachant A ». On se restreint au monde où A est réalisé :</p>
      <div class="formula">P(B | A) = P(A ∩ B) / P(A)        (avec P(A) ≠ 0)</div>
      <p>D'où la formule du produit, la plus utilisée en exercice :</p>
      <div class="formula">P(A ∩ B) = P(A) × P(B | A)</div>

      <h3>2. L'arbre pondéré</h3>
      <p>Sur un arbre, on <b>multiplie</b> le long d'un chemin et on <b>additionne</b> entre les chemins. C'est la règle qui résout la majorité des exercices.</p>
      <ul>
        <li>Une branche partant de A a pour poids P(B | A)</li>
        <li>Le poids d'un chemin complet est le produit des poids rencontrés</li>
        <li>La probabilité d'un événement est la somme des chemins qui le réalisent</li>
      </ul>

      <h3>3. Formule des probabilités totales</h3>
      <p>Si A et son contraire forment une partition de l'univers :</p>
      <div class="formula">P(B) = P(A)·P(B|A) + P(Ā)·P(B|Ā)</div>

      <h3>4. Indépendance</h3>
      <p>Deux événements sont indépendants quand la réalisation de l'un ne change rien à la probabilité de l'autre :</p>
      <div class="formula">P(A ∩ B) = P(A) × P(B)
équivalent à : P(B | A) = P(B)</div>
      <div class="box warn"><b>À ne pas confondre</b> — « incompatibles » (A ∩ B = ∅) et « indépendants » sont deux notions totalement différentes. Deux événements incompatibles et de probabilité non nulle sont au contraire fortement dépendants : si l'un arrive, l'autre ne peut pas arriver.</div>

      <h3>5. Formule de Bayes</h3>
      <p>Elle répond à la question inverse : on sait que B est arrivé, on cherche la probabilité que la cause A ait joué.</p>
      <div class="formula">P(A | B) = P(A ∩ B) / P(B) = P(A)·P(B|A) / P(B)</div>
      <div class="box"><b>Intuition</b> — Un test très fiable sur une maladie rare donne beaucoup de faux positifs. Bayes quantifie exactement ce phénomène contre-intuitif.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Une usine a deux machines. M1 produit 60 % des pièces avec 3 % de défauts, M2 produit 40 % avec 5 % de défauts. Une pièce tirée au hasard est défectueuse : quelle est la probabilité qu'elle vienne de M1 ?</p>
      <ul>
        <li>P(D) = 0,60 × 0,03 + 0,40 × 0,05 = 0,018 + 0,020 = 0,038</li>
        <li>P(M1 | D) = P(M1 ∩ D)/P(D) = 0,018/0,038 ≈ 0,474</li>
      </ul>
      <p><b>Interprétation :</b> malgré 60 % de la production, M1 n'est responsable que d'environ 47 % des pièces défectueuses.</p>
    ` },
    { titre:"Variables aléatoires et espérance", contenu:`
      <h3>1. Variable aléatoire</h3>
      <p>Une variable aléatoire X associe un nombre réel à chaque issue d'une expérience aléatoire. Sa <b>loi de probabilité</b> donne, pour chaque valeur xᵢ, la probabilité P(X = xᵢ).</p>
      <div class="formula">Σ P(X = xᵢ) = 1</div>
      <p>La somme de toutes les probabilités vaut toujours 1 : c'est le premier contrôle à faire.</p>

      <h3>2. Espérance</h3>
      <p>L'espérance est la <b>moyenne théorique</b> des valeurs, pondérée par les probabilités :</p>
      <div class="formula">E(X) = Σ xᵢ · P(X = xᵢ)</div>
      <div class="box"><b>Interprétation</b> — Si on répète l'expérience un très grand nombre de fois, la moyenne des résultats observés se rapproche de E(X). C'est ce qu'on appelle la loi des grands nombres.</div>

      <h3>3. Variance et écart type</h3>
      <p>La variance mesure la dispersion autour de l'espérance :</p>
      <div class="formula">V(X) = Σ (xᵢ − E(X))² · P(X = xᵢ)
Soit la formule de calcul plus rapide : V(X) = E(X²) − [E(X)]²</div>
      <p>L'<b>écart type</b> est σ(X) = √V(X). Il s'exprime dans la même unité que X, contrairement à la variance.</p>
      <div class="box warn"><b>Erreur classique</b> — Oublier de prendre la racine carrée : on donne la variance en croyant donner l'écart type.</div>

      <h3>4. Linéarité de l'espérance</h3>
      <p>L'espérance est linéaire, ce qui simplifie beaucoup de calculs :</p>
      <div class="formula">E(aX + b) = a·E(X) + b
E(X + Y) = E(X) + E(Y)        (toujours vrai)</div>
      <p>Attention : pour la variance, c'est différent :</p>
      <div class="formula">V(aX + b) = a²·V(X)</div>
      <div class="box warn"><b>Le b disparaît</b> — Ajouter une constante ne change pas la dispersion. Multiplier par a multiplie l'écart type par |a| et la variance par a².</div>

      <h3>5. Jeu équitable</h3>
      <p>Dans un jeu d'argent où X est le gain net (positif ou négatif), le jeu est <b>équitable</b> si E(X) = 0. Il est favorable au joueur si E(X) &gt; 0, défavorable sinon.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>On tire une carte d'un jeu de 32 cartes. On gagne 10 € si c'est un as, 2 € si c'est un roi, et on perd 1 € sinon. Le jeu est-il équitable ?</p>
      <ul>
        <li>P(as) = 4/32 = 1/8, P(roi) = 4/32 = 1/8, P(autre) = 24/32 = 3/4</li>
        <li>E(X) = 10 × 1/8 + 2 × 1/8 + (−1) × 3/4</li>
        <li>E(X) = 1,25 + 0,25 − 0,75 = 0,75</li>
      </ul>
      <p><b>Conclusion :</b> E(X) = 0,75 &gt; 0, le jeu est favorable au joueur.</p>
    ` },
    { titre:"Loi binomiale", contenu:`
      <h3>1. Le schéma de Bernoulli</h3>
      <p>Une épreuve de Bernoulli est une expérience à <b>deux issues</b> : le succès (probabilité p) et l'échec (probabilité 1 − p).</p>
      <p>On répète cette épreuve n fois de façon <b>indépendante</b>, avec la même probabilité p à chaque fois. C'est un schéma de Bernoulli de paramètres n et p.</p>

      <h3>2. La loi binomiale</h3>
      <p>La variable X qui compte le <b>nombre de succès</b> suit la loi binomiale de paramètres n et p, notée B(n ; p).</p>
      <div class="formula">P(X = k) = C(n, k) × p^k × (1 − p)^(n − k)</div>
      <p>Le coefficient C(n,k) compte les façons de placer les k succès parmi les n épreuves. C'est là que la combinatoire du chapitre précédent sert.</p>

      <h3>3. Les conditions d'application</h3>
      <p>Trois conditions, à vérifier <b>explicitement</b> dans un exercice :</p>
      <ul>
        <li>Deux issues à chaque épreuve (succès / échec)</li>
        <li>Répétition d'un nombre fixé n d'épreuves <b>identiques</b></li>
        <li><b>Indépendance</b> des épreuves, avec la même probabilité p</li>
      </ul>
      <div class="box warn"><b>Le piège du tirage sans remise</b> — Un tirage sans remise n'est pas un schéma de Bernoulli : la probabilité change à chaque tirage, donc les épreuves ne sont pas indépendantes ni identiques.</div>

      <h3>4. Espérance et variance</h3>
      <p>Pour X suivant B(n ; p), les formules sont directes :</p>
      <div class="formula">E(X) = n·p
V(X) = n·p·(1 − p)
σ(X) = √(n·p·(1 − p))</div>
      <div class="box"><b>Lecture intuitive</b> — Sur 100 lancers d'une pièce équilibrée (p = 0,5), l'espérance du nombre de « pile » est 50. C'est exactement ce qu'on attend.</div>

      <h3>5. Calcul pratique de P(X = k)</h3>
      <p>On décompose le calcul en trois facteurs : le coefficient binomial, puis p^k, puis (1−p)^(n−k). Attention aux parenthèses : <b>(1 − p)^(n − k)</b>, et non 1 − p^(n−k).</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>On lance 5 fois un dé équilibré. Quelle est la probabilité d'obtenir exactement 2 fois un six ?</p>
      <ul>
        <li>Succès = « obtenir un six », avec p = 1/6</li>
        <li>n = 5 épreuves identiques et indépendantes : X suit B(5 ; 1/6)</li>
        <li>P(X = 2) = C(5,2) × (1/6)² × (5/6)³</li>
        <li>C(5,2) = 10, (1/6)² = 1/36, (5/6)³ = 125/216</li>
        <li>P(X = 2) = 10 × 1/36 × 125/216 = 1250/7776 ≈ 0,161</li>
      </ul>
      <p><b>Vérification de cohérence :</b> environ 16 %, ce qui est plausible pour 2 six en 5 lancers (l'espérance est de 5/6 ≈ 0,83 six).</p>
    ` }
  ],
  cours:`<div class="box"><b>Trois leçons</b> — les probabilités conditionnelles, les variables aléatoires, puis la loi binomiale qui combine les deux. C'est l'aboutissement du programme de probabilités.</div>`,
  exercices:[
    { d:1, e:"Que vaut P(B | A) si P(A) = 0,4 et P(A ∩ B) = 0,1 ?", r:"0,25",
      c:"P(B|A) = P(A ∩ B)/P(A) = 0,1/0,4 = 0,25.\n\nC'est une simple division, mais attention à ne pas inverser numérateur et dénominateur." },
    { d:1, e:"Que vaut P(Ā) si P(A) = 0,35 ?", r:"0,65",
      c:"A et Ā forment une partition de l'univers : P(A) + P(Ā) = 1.\n\nDonc P(Ā) = 1 − 0,35 = 0,65." },
    { d:1, e:"Deux événements sont indépendants si :", r:"P(A ∩ B) = P(A) × P(B)",
      c:"C'est la définition de l'indépendance.\n\nNe pas confondre avec P(A ∩ B) = 0, qui caractérise des événements <b>incompatibles</b>." },
    { d:1, e:"Sur un arbre pondéré, comment obtient-on la probabilité d'un chemin ?", r:"En multipliant les probabilités rencontrées",
      c:"Règle de l'arbre : on multiplie le long d'un chemin, et on additionne entre chemins distincts.\n\nC'est la traduction directe de la formule du produit." },
    { d:1, e:"Dans une loi binomiale B(10 ; 0,3), que vaut E(X) ?", r:"3",
      c:"E(X) = n·p = 10 × 0,3 = 3.\n\nInterprétation : si on répète l'expérience de nombreuses fois, on obtient en moyenne 3 succès sur 10 épreuves." },
    { d:1, e:"Que vaut la somme Σ P(X = xᵢ) pour une variable aléatoire ?", r:"1",
      c:"Toutes les issues possibles sont couvertes, et elles sont incompatibles deux à deux.\n\nLeur somme vaut donc 1. C'est le premier contrôle à faire dans un exercice de loi de probabilité." },
    { d:1, e:"Un jeu a une espérance de gain de −2 €. Est-il favorable au joueur ?", r:"Non",
      c:"Une espérance négative signifie qu'en moyenne, le joueur perd 2 € par partie.\n\nLe jeu est défavorable. Il serait équitable si E(X) = 0." },
    { d:1, e:"Que vaut P(X = 3) pour X suivant B(3 ; 0,5) et k = 0 ?", r:"0,125",
      c:"P(X = 0) = C(3,0) × 0,5⁰ × 0,5³ = 1 × 1 × 0,125 = 0,125.\n\nC'est la probabilité de n'obtenir aucun succès en 3 essais, soit trois échecs consécutifs." },
    { d:1, e:"Dans un schéma de Bernoulli, quelle est la probabilité de l'échec ?", r:"1 − p",
      c:"Il n'y a que deux issues : le succès (probabilité p) et l'échec.\n\nLeurs probabilités somment à 1, donc l'échec a pour probabilité 1 − p." },
    { d:1, e:"Que mesure l'écart type ?", r:"La dispersion autour de l'espérance",
      c:"L'écart type σ(X) = √V(X) mesure de combien les valeurs s'écartent en moyenne de l'espérance.\n\nIl s'exprime dans la même unité que X, contrairement à la variance." },
    { d:2, e:"P(A) = 0,5, P(B) = 0,4, P(A ∩ B) = 0,2. A et B sont-ils indépendants ?", r:"Non",
      c:"Test d'indépendance : on compare P(A ∩ B) avec P(A) × P(B).\n\nP(A) × P(B) = 0,5 × 0,4 = 0,2.\n\nOr P(A ∩ B) = 0,2 : les deux valeurs sont égales.\n\nLes événements sont donc <b>indépendants</b>. (Vérification : P(B|A) = 0,2/0,5 = 0,4 = P(B), ce qui confirme.)" },
    { d:2, e:"Une urne contient 3 boules rouges et 2 bleues. On tire 2 boules sans remise. Probabilité d'obtenir 2 rouges ?", r:"3/10",
      c:"On utilise un arbre pondéré.\n\nP(1re rouge) = 3/5.\nAprès un tirage rouge, il reste 2 rouges sur 4 boules : P(2e rouge | 1re rouge) = 2/4.\n\nP(2 rouges) = 3/5 × 2/4 = 6/20 = 3/10.\n\nPoint clé : le tirage étant <b>sans remise</b>, la seconde probabilité est conditionnelle — elle dépend de la première." },
    { d:2, e:"X suit B(5 ; 0,2). Calculer V(X).", r:"0,8",
      c:"V(X) = n·p·(1 − p) = 5 × 0,2 × 0,8 = 0,8.\n\nL'écart type vaut √0,8 ≈ 0,894." },
    { d:2, e:"Calculer P(X = 2) pour X suivant B(4 ; 0,5).", r:"0,375",
      c:"P(X = 2) = C(4,2) × 0,5² × 0,5²\n\nC(4,2) = 6.\n0,5² × 0,5² = 0,5⁴ = 0,0625.\n\nP(X = 2) = 6 × 0,0625 = 0,375." },
    { d:2, e:"Une variable X prend les valeurs 1, 2, 3 avec P(1) = 0,2 et P(2) = 0,5. Que vaut P(3) ?", r:"0,3",
      c:"La somme des probabilités vaut 1.\n\nP(3) = 1 − 0,2 − 0,5 = 0,3." },
    { d:2, e:"Calculer E(X) pour X prenant les valeurs 0, 1, 2 avec P(0) = 0,3, P(1) = 0,5, P(2) = 0,2.", r:"0,9",
      c:"E(X) = 0 × 0,3 + 1 × 0,5 + 2 × 0,2\n     = 0 + 0,5 + 0,4 = 0,9.\n\nInterprétation : sur un grand nombre d'essais, la moyenne observée sera proche de 0,9." },
    { d:2, e:"Que vaut E(aX + b) ?", r:"a·E(X) + b",
      c:"L'espérance est linéaire : E(aX + b) = a·E(X) + b.\n\nExemple : si E(X) = 3, alors E(2X + 5) = 2×3 + 5 = 11." },
    { d:2, e:"Une pièce truquée donne « pile » avec probabilité 0,7. On lance 4 fois. Probabilité d'obtenir exactement 3 piles ?", r:"0,4116",
      c:"X suit B(4 ; 0,7), et on cherche P(X = 3).\n\nP(X = 3) = C(4,3) × 0,7³ × 0,3¹\n\nC(4,3) = 4.\n0,7³ = 0,343.\n\nP(X = 3) = 4 × 0,343 × 0,3 = 4 × 0,1029 = 0,4116." },
    { d:2, e:"Deux événements incompatibles peuvent-ils être indépendants ?", r:"Seulement si l'un a une probabilité nulle",
      c:"Si A et B sont incompatibles, alors P(A ∩ B) = 0.\nPour qu'ils soient indépendants, il faudrait P(A) × P(B) = 0.\n\nCela exige que P(A) = 0 ou P(B) = 0.\n\nSinon, deux événements incompatibles sont au contraire <b>fortement dépendants</b> : si l'un se réalise, l'autre devient impossible." },
    { d:2, e:"Calculer V(X) pour X suivant B(10 ; 0,5).", r:"2,5",
      c:"V(X) = n·p·(1−p) = 10 × 0,5 × 0,5 = 2,5.\n\nL'écart type vaut √2,5 ≈ 1,58." },
    { d:2, e:"Que vaut E(3X) si E(X) = 4 ?", r:"12",
      c:"Par linéarité : E(3X) = 3·E(X) = 3 × 4 = 12." },
    { d:3, e:"Un test médical détecte une maladie dans 99 % des cas. La maladie touche 1 personne sur 1000. Le test est positif : quelle est la probabilité d'être vraiment malade ?", r:"Environ 9 %",
      c:"On note M = « être malade », T = « test positif ».\n\nP(M) = 0,001, donc P(M̄) = 0,999.\nP(T|M) = 0,99. Le test a 1 % de faux positifs : P(T|M̄) = 0,01.\n\n<b>Probabilités totales</b> :\nP(T) = P(M)·P(T|M) + P(M̄)·P(T|M̄)\n     = 0,001 × 0,99 + 0,999 × 0,01\n     = 0,00099 + 0,00999 = 0,01098\n\n<b>Bayes</b> :\nP(M|T) = P(M ∩ T)/P(T) = 0,00099/0,01098 ≈ 0,0902\n\nConclusion : malgré un test à 99 % de sensibilité, un résultat positif ne correspond à une maladie réelle que dans <b>9 % des cas</b>. C'est parce que la maladie est très rare, donc les faux positifs sont nombreux en valeur absolue. C'est le résultat le plus contre-intuitif du chapitre." },
    { d:3, e:"Un jeu : on mise 5 €, on lance 2 dés. Si la somme vaut 7, on gagne 20 €. Sinon on perd la mise. Le jeu est-il équitable ?", r:"Défavorable au joueur",
      c:"Il y a 36 issues équiprobables. La somme 7 est obtenue par 6 combinaisons : (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).\nDonc P(somme = 7) = 6/36 = 1/6.\n\nGain net : +15 € si on gagne (20 € reçus moins 5 € misés), −5 € sinon.\n\nE(X) = 15 × 1/6 + (−5) × 5/6\n     = 2,5 − 4,167\n     = −1,667 €\n\nL'espérance est négative : le jeu est défavorable au joueur, qui perd en moyenne environ 1,67 € par partie." },
    { d:3, e:"On tire 3 cartes sans remise d'un jeu de 52. Probabilité d'exactement 2 as ?", r:"Environ 0,0130",
      c:"Ce n'est <b>pas</b> une loi binomiale : le tirage est sans remise, donc les épreuves ne sont pas indépendantes.\n\nOn compte les cas favorables sur les cas possibles.\n\nCas possibles : C(52,3) = 22100.\n\nCas favorables : choisir 2 as parmi 4, et 1 carte non-as parmi 48.\nC(4,2) × C(48,1) = 6 × 48 = 288.\n\nP = 288/22100 ≈ 0,0130.\n\nPoint important : l'identification du modèle (ici combinatoire, pas binomiale) est le vrai travail de l'exercice." },
    { d:3, e:"X suit B(20 ; 0,1). Calculer E(X) et V(X).", r:"E = 2, V = 1,8",
      c:"E(X) = n·p = 20 × 0,1 = 2.\n\nV(X) = n·p·(1−p) = 20 × 0,1 × 0,9 = 1,8.\n\nσ(X) = √1,8 ≈ 1,342." },
    { d:3, e:"Montrer que V(X) = E(X²) − [E(X)]².", r:"Démonstration",
      c:"On part de la définitions : V(X) = Σ (xᵢ − E(X))²·P(X = xᵢ).\n\nOn développe le carré :\n(xᵢ − E(X))² = xᵢ² − 2xᵢ·E(X) + [E(X)]²\n\nDonc :\nV(X) = Σ xᵢ²·P(X=xᵢ) − 2E(X)·Σ xᵢ·P(X=xᵢ) + [E(X)]²·Σ P(X=xᵢ)\n\nOr Σ xᵢ²P(X=xᵢ) = E(X²), Σ xᵢP(X=xᵢ) = E(X), et Σ P(X=xᵢ) = 1.\n\nV(X) = E(X²) − 2E(X)·E(X) + [E(X)]²\n     = E(X²) − 2[E(X)]² + [E(X)]²\n     = E(X²) − [E(X)]²  ✓" },
    { d:3, e:"Une entreprise produit des pièces avec 5 % de défauts. On prélève 10 pièces. Probabilité d'avoir au plus 1 pièce défectueuse ?", r:"Environ 0,914",
      c:"X suit B(10 ; 0,05). On cherche P(X ≤ 1) = P(X=0) + P(X=1).\n\nP(X = 0) = C(10,0) × 0,05⁰ × 0,95¹⁰ = 1 × 1 × 0,5987 = 0,5987\n\nP(X = 1) = C(10,1) × 0,05¹ × 0,95⁹ = 10 × 0,05 × 0,6302 = 0,3151\n\nP(X ≤ 1) = 0,5987 + 0,3151 = 0,9138 ≈ 0,914.\n\nInterprétation : environ 91 % de chances que le prélèvement contienne au plus une pièce défectueuse." },
    { d:3, e:"Montrer que si A et B sont indépendants, alors A et B̄ le sont aussi.", r:"Démonstration",
      c:"On veut montrer P(A ∩ B̄) = P(A) × P(B̄).\n\nOn sait que A = (A ∩ B) ∪ (A ∩ B̄), réunion disjointe. Donc :\nP(A) = P(A ∩ B) + P(A ∩ B̄)\n\nD'où :\nP(A ∩ B̄) = P(A) − P(A ∩ B)\n\nEn utilisant l'indépendance de A et B (P(A ∩ B) = P(A)·P(B)) :\nP(A ∩ B̄) = P(A) − P(A)·P(B)\n         = P(A)(1 − P(B))\n         = P(A)·P(B̄)  ✓\n\nDonc A et B̄ sont indépendants. Par symétrie, Ā et B̄ le sont aussi." },
    { d:3, e:"Un questionnaire à 10 questions, chacune avec 4 réponses dont 1 seule correcte. Un élève répond au hasard. Quelle note moyenne sur 20 obtient-il ?", r:"5/20",
      c:"X = nombre de bonnes réponses, suit B(10 ; 0,25) car la probabilité de bien répondre au hasard est 1/4.\n\nE(X) = n·p = 10 × 0,25 = 2,5 bonnes réponses en moyenne.\n\nConverti sur 20 : chaque bonne réponse vaut 2 points, donc 2,5 × 2 = 5 sur 20.\n\nC'est un résultat utile en pédagogie : un QCM à 4 choix non corrigé des réponses au hasard donne 5/20 de moyenne." },
    { d:3, e:"X suit B(4 ; 0,3). Calculer P(X = 0) puis P(X ≥ 1).", r:"P(X=0) = 0,2401 ; P(X≥1) = 0,7599",
      c:"P(X = 0) = C(4,0) × 0,3⁰ × 0,7⁴ = 1 × 1 × 0,2401 = 0,2401.\n\nP(X ≥ 1) = 1 − P(X = 0) = 1 − 0,2401 = 0,7599.\n\nAstuce : pour « au moins un », on passe toujours par l'événement contraire « aucun », dont le calcul est immédiat." },
    { d:3, e:"Deux joueurs jouent : le premier a 0,6 de chance de gagner chaque manche, indépendamment. Probabilité qu'il gagne exactement 3 manches sur 5 ?", r:"Environ 0,3456",
      c:"X = nombre de manches gagnées, suit B(5 ; 0,6).\n\nP(X = 3) = C(5,3) × 0,6³ × 0,4²\n\nC(5,3) = 10.\n0,6³ = 0,216.\n0,4² = 0,16.\n\nP(X = 3) = 10 × 0,216 × 0,16 = 10 × 0,03456 = 0,3456." },
    { d:3, e:"Montrer que E(X) peut ne pas être une valeur possible de X.", r:"Démonstration par exemple",
      c:"Soit X prenant les valeurs 0 et 1, chacune avec probabilité 1/2.\n\nE(X) = 0 × 0,5 + 1 × 0,5 = 0,5.\n\nOr 0,5 n'est pas une valeur que X peut prendre : X vaut 0 ou 1.\n\nL'espérance est une moyenne théorique, pas une valeur atteignable. C'est pourquoi on parle de « moyenne » : sur 100 lancers, la fréquence observée s'approche de 0,5 sans que le résultat d'un lancer vaille jamais 0,5." },
    { d:3, e:"Dans une population, 30 % des gens fument, et 20 % des fumeurs ont une maladie respiratoire contre 5 % des non-fumeurs. Quelle proportion de la population est malade ?", r:"9,5 %",
      c:"On note F = « fumer » et M = « être malade ».\n\nP(F) = 0,3, donc P(F̄) = 0,7.\nP(M|F) = 0,2 et P(M|F̄) = 0,05.\n\n<b>Probabilités totales</b> :\nP(M) = P(F)·P(M|F) + P(F̄)·P(M|F̄)\n     = 0,3 × 0,2 + 0,7 × 0,05\n     = 0,06 + 0,035 = 0,095\n\nConclusion : 9,5 % de la population est malade." },
    { d:3, e:"Un élève affirme : « puisque P(A ∩ B) = P(A) × P(B) dans cet exemple, A et B sont indépendants ». Que doit-il vérifier d'autre ?", r:"Rien de plus, c'est bien la définition",
      c:"P(A ∩ B) = P(A) × P(B) <b>est</b> la définition de l'indépendance. Il n'y a pas d'autre vérification à faire.\n\nCe qu'il ne faut pas confondre : l'indépendance n'a rien à voir avec l'incompatibilité. Vérifier que P(A ∩ B) = 0 ne prouve pas l'indépendance, cela prouve l'incompatibilité.\n\nEt attention à un piège d'interprétation : deux événements incompatibles de probabilités non nulles sont dépendants." }
  ]
},
{
  id:"tle-limites-fonctions", niveau:"Tle", titre:"Tle · Limites de fonctions et asymptotes", temps:"24 min",
  resume:"Limite en un point et à l'infini, formes indéterminées, asymptotes, croissances comparées.",
  lecons:[
    { titre:"Limites en l'infini et en un point", contenu:`
      <h3>1. Limite à l'infini</h3>
      <p>Étudier la limite de f en +∞, c'est examiner vers quoi tend f(x) quand x devient très grand.</p>
      <ul>
        <li>f(x) se rapproche d'un nombre ℓ : la limite est ℓ</li>
        <li>f(x) grandit sans borne : la limite est +∞</li>
        <li>f(x) décroît sans borne : la limite est −∞</li>
      </ul>
      <div class="formula">lim (x→+∞) f(x) = ℓ</div>

      <h3>2. Limite en un point</h3>
      <p>On étudie le comportement de f quand x s'approche d'une valeur a, sans forcément que f soit définie en a.</p>
      <div class="formula">lim (x→a) f(x) = ℓ     signifie que f(x) se rapproche de ℓ</div>
      <p>On distingue aussi les limites à gauche (x → a⁻) et à droite (x → a⁺) : elles peuvent différer.</p>
      <div class="box warn"><b>Cas de la fonction inverse</b> — En 0, lim (x→0⁺) 1/x = +∞ tandis que lim (x→0⁻) 1/x = −∞. Les deux limites sont différentes : il n'y a pas de limite en 0.</div>

      <h3>3. Les limites des fonctions de référence</h3>
      <div class="formula">lim (x→+∞) xⁿ = +∞        (n ≥ 1)
lim (x→+∞) 1/x = 0          lim (x→0⁺) 1/x = +∞
lim (x→+∞) √x = +∞
lim (x→+∞) eˣ = +∞          lim (x→−∞) eˣ = 0
lim (x→+∞) ln x = +∞        lim (x→0⁺) ln x = −∞</div>

      <h3>4. Les opérations</h3>
      <p>Somme, produit et quotient de limites suivent les règles usuelles, <b>sauf</b> dans quatre cas interdits, les formes indéterminées :</p>
      <div class="formula">∞ − ∞        0 × ∞        ∞ / ∞        0 / 0</div>
      <div class="box"><b>Que faire d'une forme indéterminée</b> — Elle ne signifie pas « pas de limite ». Elle signifie que le résultat dépend de la fonction : il faut transformer l'expression (factoriser, simplifier, utiliser les croissances comparées) avant de conclure.</div>

      <h3>5. Résoudre une indétermination</h3>
      <p>Trois techniques couvrent la plupart des cas :</p>
      <ul>
        <li><b>Polynômes en ±∞</b> : on factorise par le terme de plus haut degré</li>
        <li><b>Fractions rationnelles en ±∞</b> : on factorise par la plus haute puissance de x au numérateur et au dénominateur</li>
        <li><b>Formes 0/0 en un point</b> : on factorise pour faire apparaître le facteur commun, puis on simplifie</li>
      </ul>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Déterminer lim (x→+∞) (3x² − 5x + 1)/(x² + 2).</p>
      <ul>
        <li>Forme indéterminée ∞/∞</li>
        <li>On factorise par x² : (x²(3 − 5/x + 1/x²)) / (x²(1 + 2/x²))</li>
        <li>= (3 − 5/x + 1/x²) / (1 + 2/x²)</li>
        <li>Les termes en 1/x tendent vers 0</li>
      </ul>
      <p><b>Résultat :</b> la limite vaut 3/1 = 3.</p>
    ` },
    { titre:"Asymptotes et croissances comparées", contenu:`
      <h3>1. Asymptote verticale</h3>
      <p>Si lim (x→a) f(x) = ±∞, la droite d'équation <b>x = a</b> est asymptote verticale à la courbe.</p>
      <div class="box"><b>Lecture graphique</b> — La courbe « colle » à la droite verticale sans jamais la toucher. C'est typique d'une fonction qui explose près d'une valeur interdite.</div>

      <h3>2. Asymptote horizontale</h3>
      <p>Si lim (x→+∞) f(x) = ℓ (ou en −∞), la droite d'équation <b>y = ℓ</b> est asymptote horizontale.</p>
      <div class="formula">lim (x→+∞) (2x + 1)/(x + 3) = 2
Donc y = 2 est asymptote horizontale</div>

      <h3>3. Asymptote oblique</h3>
      <p>Si f(x) − (ax + b) tend vers 0 en ±∞, la droite y = ax + b est asymptote oblique.</p>
      <p>En pratique, on l'obtient par division : f(x) = ax + b + reste, où le reste tend vers 0.</p>
      <div class="formula">f(x) = (x² + 1)/x = x + 1/x
Comme 1/x → 0, la droite y = x est asymptote oblique</div>
      <div class="box warn"><b>Ne pas confondre les trois</b> — Verticale : x = a, la limite est infinie en un point. Horizontale : y = ℓ, la limite est finie à l'infini. Oblique : y = ax + b avec a ≠ 0, l'écart tend vers 0 à l'infini.</div>

      <h3>4. Croissances comparées</h3>
      <p>Trois résultats fondamentaux, à connaître par cœur :</p>
      <div class="formula">lim (x→+∞) eˣ / xⁿ = +∞        (l'exponentielle écrase les puissances)
lim (x→+∞) (ln x) / xⁿ = 0      (le logarithme est écrasé par les puissances)
lim (x→0⁺) x·ln x = 0</div>
      <div class="box"><b>Hiérarchie des croissances</b> — En +∞ : ln x ≪ xⁿ ≪ eˣ. C'est la clé de tous les calculs de limites mêlant ces fonctions.</div>

      <h3>5. Méthode pour les limites avec exponentielle et logarithme</h3>
      <p>Dès qu'on rencontre un produit ou un quotient mêlant x, ln et exp en ±∞, on factorise par le terme dominant, puis on utilise les croissances comparées.</p>
      <div class="formula">lim (x→+∞) (x − eˣ) = lim x(1 − eˣ/x) = −∞
car eˣ/x → +∞, donc 1 − eˣ/x → −∞</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Étudier les asymptotes de f(x) = (2x² + 3x − 1)/(x − 1).</p>
      <ul>
        <li><b>Asymptote verticale</b> : quand x → 1, le numérateur tend vers 4 et le dénominateur vers 0. Donc f → ±∞ : la droite x = 1 est asymptote verticale.</li>
        <li><b>Division</b> : 2x² + 3x − 1 = (x − 1)(2x + 5) + 4, donc f(x) = 2x + 5 + 4/(x−1)</li>
        <li><b>Asymptote oblique</b> : comme 4/(x−1) → 0 en ±∞, la droite y = 2x + 5 est asymptote oblique.</li>
      </ul>
      <p><b>Vérification :</b> f(x) − (2x + 5) = 4/(x−1), qui tend bien vers 0 ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — les limites en l'infini et en un point avec les formes indéterminées, puis les asymptotes et les croissances comparées.</div>`,
  exercices:[
    { d:1, e:"Que vaut lim (x→+∞) 1/x ?", r:"0",
      c:"Quand x devient très grand, 1/x devient très petit.\n\nLa limite est 0." },
    { d:1, e:"Que vaut lim (x→+∞) x² ?", r:"+∞",
      c:"Le carré grandit sans borne quand x grandit.\n\nLa limite est +∞." },
    { d:1, e:"Que vaut lim (x→0⁺) 1/x ?", r:"+∞",
      c:"Quand x s'approche de 0 par valeurs positives, 1/x devient très grand positif.\n\nLa limite est +∞.\n\n<b>Attention</b> — En 0⁻, la limite serait −∞." },
    { d:1, e:"Que vaut lim (x→+∞) eˣ ?", r:"+∞",
      c:"L'exponentielle croît extrêmement vite.\n\nlim (x→+∞) eˣ = +∞." },
    { d:1, e:"Que vaut lim (x→−∞) eˣ ?", r:"0",
      c:"Quand x devient très négatif, eˣ devient très petit.\n\nLa limite est 0 : l'axe des abscisses est asymptote horizontale." },
    { d:1, e:"Que vaut lim (x→0⁺) ln x ?", r:"−∞",
      c:"Le logarithme tend vers −∞ quand x s'approche de 0 par la droite.\n\nLa droite x = 0 est asymptote verticale." },
    { d:1, e:"Si lim (x→a) f(x) = ±∞, quelle est l'asymptote ?", r:"Une asymptote verticale x = a",
      c:"Une limite infinie en un point donne une asymptote verticale d'équation x = a." },
    { d:1, e:"Si lim (x→+∞) f(x) = 3, quelle est l'asymptote ?", r:"Une asymptote horizontale y = 3",
      c:"Une limite finie à l'infini donne une asymptote horizontale d'équation y = 3." },
    { d:1, e:"Que vaut lim (x→+∞) (1/x²) ?", r:"0",
      c:"Quand x grandit, x² grandit encore plus vite que x.\n\nDonc 1/x² tend vers 0 plus vite que 1/x." },
    { d:1, e:"Les formes indéterminées empêchent-elles de conclure ?", r:"Non, il faut transformer l'expression",
      c:"Une forme indéterminée signifie que le résultat dépend de la fonction.\n\nEn factorisant ou simplifiant, on lève l'indétermination et on trouve la limite." },
    { d:2, e:"Calculer lim (x→+∞) (2x + 1)/(x − 3).", r:"2",
      c:"Forme indéterminée ∞/∞.\n\nOn factorise par x : (x(2 + 1/x)) / (x(1 − 3/x)) = (2 + 1/x)/(1 − 3/x).\n\nLes termes en 1/x tendent vers 0 : la limite vaut 2." },
    { d:2, e:"Calculer lim (x→+∞) (x² + 3)/(2x² − 1).", r:"1/2",
      c:"Forme ∞/∞.\n\nOn factorise par x² : (1 + 3/x²)/(2 − 1/x²).\n\nLa limite vaut 1/2." },
    { d:2, e:"Calculer lim (x→+∞) (x + 1)/(x² + 1).", r:"0",
      c:"Le numérateur est de degré 1, le dénominateur de degré 2.\n\nOn factorise : x(1 + 1/x) / [x²(1 + 1/x²)] = (1 + 1/x) / [x(1 + 1/x²)].\n\nLe numérateur tend vers 1, le dénominateur vers +∞ : la limite vaut 0." },
    { d:2, e:"Calculer lim (x→+∞) (x² − 5x + 3).", r:"+∞",
      c:"Forme ∞ − ∞.\n\nOn factorise par x² : x²(1 − 5/x + 3/x²).\n\nLa parenthèse tend vers 1, x² vers +∞ : la limite est +∞." },
    { d:2, e:"Calculer lim (x→2) (x² − 4)/(x − 2).", r:"4",
      c:"Forme indéterminée 0/0.\n\nOn factorise : (x−2)(x+2)/(x−2) = x + 2.\n\nDonc la limite vaut 2 + 2 = 4." },
    { d:2, e:"Calculer lim (x→+∞) (ln x)/x.", r:"0",
      c:"C'est une croissance comparée : le logarithme est écrasé par x.\n\nlim (x→+∞) (ln x)/x = 0." },
    { d:2, e:"Calculer lim (x→+∞) eˣ/x.", r:"+∞",
      c:"Par croissance comparée, l'exponentielle l'emporte sur toute puissance de x.\n\nlim (x→+∞) eˣ/x = +∞." },
    { d:2, e:"Déterminer l'asymptote verticale de f(x) = 1/(x − 3).", r:"x = 3",
      c:"Quand x tend vers 3, le dénominateur tend vers 0 et f vers ±∞.\n\nLa droite x = 3 est asymptote verticale." },
    { d:2, e:"Déterminer l'asymptote horizontale de f(x) = (3x − 1)/(x + 2).", r:"y = 3",
      c:"En +∞, la limite vaut 3/1 = 3.\n\nLa droite y = 3 est asymptote horizontale." },
    { d:2, e:"f(x) = x + 1/x. Déterminer l'asymptote oblique en +∞.", r:"y = x",
      c:"f(x) − x = 1/x.\n\nComme 1/x tend vers 0 en +∞, la droite y = x est asymptote oblique." },
    { d:2, e:"Calculer lim (x→+∞) (eˣ + x)/(eˣ − x).", r:"1",
      c:"On factorise par eˣ au numérateur et au dénominateur :\neˣ(1 + x/eˣ) / [eˣ(1 − x/eˣ)] = (1 + x/eˣ)/(1 − x/eˣ).\n\nOr x/eˣ → 0 (croissance comparée).\n\nLa limite vaut 1/1 = 1." },
    { d:3, e:"Calculer lim (x→+∞) (x − ln x).", r:"+∞",
      c:"Forme ∞ − ∞.\n\nOn factorise par x : x(1 − ln x/x).\n\nOr ln x/x → 0, donc la parenthèse tend vers 1.\n\nLa limite est donc +∞." },
    { d:3, e:"Calculer lim (x→0⁺) x·ln x.", r:"0",
      c:"C'est une forme indéterminée 0 × (−∞).\n\nRésultat de croissance comparée : lim (x→0⁺) x·ln x = 0.\n\n<b>Interprétation</b> — Le logarithme tend vers −∞, mais x tend vers 0 tellement plus vite que le produit tend vers 0." },
    { d:3, e:"Étudier les asymptotes de f(x) = (x² + 1)/(x + 1).", r:"Asymptote verticale x = −1, oblique y = x − 1",
      c:"<b>Verticale</b> : quand x → −1, le numérateur tend vers 2 et le dénominateur vers 0. Donc f → ±∞. La droite x = −1 est asymptote verticale.\n\n<b>Oblique</b> : on divise. x² + 1 = (x + 1)(x − 1) + 2.\n\nDonc f(x) = x − 1 + 2/(x+1).\n\nComme 2/(x+1) → 0 en ±∞, la droite y = x − 1 est asymptote oblique." },
    { d:3, e:"Calculer lim (x→+∞) (√(x + 1) − √x).", r:"0",
      c:"Forme ∞ − ∞.\n\nOn multiplie par la quantité conjuguée :\n[(√(x+1) − √x)(√(x+1) + √x)] / (√(x+1) + √x) = (x + 1 − x)/(√(x+1) + √x) = 1/(√(x+1) + √x).\n\nLe dénominateur tend vers +∞ : la limite vaut 0." },
    { d:3, e:"Montrer que la droite y = 2x + 1 est asymptote à f(x) = (2x² + 3x)/(x + 1).", r:"Démonstration",
      c:"On calcule f(x) − (2x + 1).\n\nf(x) = (2x² + 3x)/(x + 1).\n\nDivision : 2x² + 3x = (x + 1)(2x + 1) − 1.\n\nDonc f(x) = 2x + 1 − 1/(x+1).\n\nAlors f(x) − (2x + 1) = −1/(x+1).\n\nOr −1/(x+1) → 0 quand x → ±∞.\n\nDonc la droite y = 2x + 1 est bien asymptote oblique à la courbe. ✓" },
    { d:3, e:"Calculer lim (x→+∞) (x² + 1)/(eˣ).", r:"0",
      c:"Forme ∞/∞.\n\nMais par croissance comparée, eˣ l'emporte sur toute puissance de x.\n\nDonc x²/eˣ → 0, et la limite vaut 0.\n\n<b>Interprétation</b> — La courbe de x²/eˣ tend vers l'axe des abscisses : c'est une asymptote horizontale y = 0." },
    { d:3, e:"Calculer lim (x→0) (eˣ − 1)/x.", r:"1",
      c:"Forme indéterminée 0/0.\n\nRésultat à connaître : lim (x→0) (eˣ − 1)/x = 1.\n\nC'est le taux de variation de la fonction exponentielle en 0, qui est le nombre dérivé exp′(0) = e⁰ = 1." },
    { d:3, e:"Calculer lim (x→+∞) (ln x)²/x.", r:"0",
      c:"On écrit (ln x)²/x = [(ln x)/√x] × [(ln x)/√x].\n\nPar croissance comparée, ln x/√x → 0.\n\nDonc le produit tend vers 0 × 0 = 0.\n\n<b>Attention</b> — C'est un cas où il faut décomposer le quotient, la croissance comparée directe ne suffit pas." },
    { d:3, e:"Montrer que la courbe de f(x) = (x² − 1)/(x² + 1) admet une asymptote horizontale et déterminer sa position relative.", r:"Asymptote y = 1, la courbe reste en dessous",
      c:"<b>Limite</b> : en ±∞, (x² − 1)/(x² + 1) → 1. Asymptote horizontale y = 1.\n\n<b>Position relative</b> : f(x) − 1 = (x² − 1 − x² − 1)/(x² + 1) = −2/(x² + 1).\n\nComme x² + 1 > 0, cette différence est toujours négative.\n\nLa courbe est donc toujours <b>en dessous</b> de son asymptote." },
    { d:3, e:"Calculer lim (x→+∞) x·eˣ.", r:"+∞",
      c:"On écrit x·eˣ = x / e^(−x).\n\nEn +∞, e^(−x) → 0, donc le quotient tend vers +∞.\n\nLa limite est +∞." },
    { d:3, e:"Montrer que la fonction f(x) = x/(x² + 1) admet l'axe des abscisses comme asymptote.", r:"Démonstration",
      c:"On calcule la limite en ±∞.\n\nf(x) = x/(x² + 1) = x / [x²(1 + 1/x²)] = 1 / [x(1 + 1/x²)].\n\nLe dénominateur tend vers ±∞, donc f(x) → 0.\n\nLa droite y = 0 (l'axe des abscisses) est bien asymptote horizontale.\n\n<b>Position relative</b> : f(x) est du signe de x, donc la courbe traverse son asymptote en 0 — elle est sous l'axe pour x < 0, au-dessus pour x > 0." },
    { d:3, e:"Calculer lim (x→−∞) (2x³ + x)/(x³ − 1).", r:"2",
      c:"Forme ∞/∞.\n\nOn factorise par x³ : (2 + 1/x²)/(1 − 1/x³).\n\nLes termes en 1/x tendent vers 0.\n\nLa limite vaut 2." },
    { d:3, e:"Une entreprise modélise son coût unitaire par C(x) = 10 + 5000/x pour x unités produites. Que se passe-t-il pour de grandes productions ?", r:"Le coût tend vers 10 €",
      c:"Quand x devient très grand, 5000/x tend vers 0.\n\nDonc C(x) → 10.\n\n<b>Interprétation économique</b> — La droite y = 10 est asymptote horizontale : le coût unitaire ne descend jamais en dessous de 10 €, quelles que soient les quantités produites. C'est le coût variable unitaire." }
  ]
},
{
  id:"tle-fonctions-trigo", niveau:"Tle", titre:"Tle · Fonctions trigonométriques", temps:"22 min",
  resume:"Fonctions sinus et cosinus : périodicité, parité, dérivées, courbes et équations.",
  lecons:[
    { titre:"Fonctions sinus et cosinus", contenu:`
      <h3>1. Rappel : le cercle trigonométrique</h3>
      <p>Un point M du cercle unité est repéré par l'angle x parcouru depuis l'axe des abscisses. Son abscisse est cos x, son ordonnée sin x.</p>
      <div class="formula">cos²x + sin²x = 1        −1 ≤ cos x ≤ 1        −1 ≤ sin x ≤ 1</div>

      <h3>2. Périodicité</h3>
      <p>Faire un tour complet du cercle ramène au même point :</p>
      <div class="formula">cos(x + 2π) = cos x        sin(x + 2π) = sin x</div>
      <p>Les deux fonctions sont <b>2π-périodiques</b>. On peut donc les étudier sur un intervalle de longueur 2π, puis répéter.</p>
      <div class="box"><b>Conséquence pratique</b> — Pour étudier sin ou cos, on se limite souvent à [0 ; 2π] ou à [−π ; π]. Le reste est obtenu par translation.</div>

      <h3>3. Parité</h3>
      <div class="formula">cos(−x) = cos x        (cosinus est paire)
sin(−x) = −sin x      (sinus est impaire)</div>
      <div class="box"><b>Conséquences graphiques</b> — La courbe du cosinus est symétrique par rapport à l'axe des ordonnées. Celle du sinus est symétrique par rapport à l'origine.</div>
      <p>On peut donc réduire l'étude de moitié : étudier sur [0 ; π] pour le cosinus, sur [0 ; π] pour le sinus également.</p>

      <h3>4. Valeurs remarquables</h3>
      <div class="formula">x = 0      : cos = 1     sin = 0
x = π/6    : cos = √3/2  sin = 1/2
x = π/4    : cos = √2/2  sin = √2/2
x = π/3    : cos = 1/2   sin = √3/2
x = π/2    : cos = 0     sin = 1
x = π      : cos = −1    sin = 0</div>

      <h3>5. Relations de décalage</h3>
      <div class="formula">sin(x + π/2) = cos x
cos(x + π/2) = −sin x
sin(π − x) = sin x
cos(π − x) = −cos x</div>
      <div class="box"><b>Lecture sur le cercle</b> — Ces relations se retrouvent toutes par symétrie. Plutôt que de les mémoriser, visualise le point sur le cercle et son symétrique.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Résoudre cos x = 1/2 sur [0 ; 2π].</p>
      <ul>
        <li>Sur le cercle, cos x = 1/2 correspond à deux points : x = π/3 et x = −π/3</li>
        <li>On ramène dans [0 ; 2π] : x = π/3 et x = 2π − π/3 = 5π/3</li>
      </ul>
      <p><b>Vérification :</b> cos(π/3) = 1/2 ✓ et cos(5π/3) = cos(−π/3) = cos(π/3) = 1/2 ✓</p>
    ` },
    { titre:"Dérivées et étudE des fonctions trigonométriques", contenu:`
      <h3>1. Les dérivées de base</h3>
      <div class="formula">(sin x)′ = cos x        (cos x)′ = −sin x</div>
      <div class="box warn"><b>Attention au signe</b> — La dérivée de cos est <b>−sin</b>, avec un signe moins. C'est l'erreur la plus fréquente du chapitre.</div>

      <h3>2. Dérivées de composées</h3>
      <div class="formula">(sin u)′ = u′·cos u        (cos u)′ = −u′·sin u</div>
      <p>Exemple : la dérivée de sin(3x) est 3cos(3x).</p>

      <h3>3. Étude du sinus sur [0 ; 2π]</h3>
      <p>f′(x) = cos x. Le signe de cos donne les variations :</p>
      <ul>
        <li>cos x &gt; 0 sur ]0 ; π/2[ ∪ ]3π/2 ; 2π[ : sin est croissante</li>
        <li>cos x &lt; 0 sur ]π/2 ; 3π/2[ : sin est décroissante</li>
      </ul>
      <p>Maximum 1 en x = π/2, minimum −1 en x = 3π/2.</p>

      <h3>4. Étude du cosinus sur [0 ; 2π]</h3>
      <p>f′(x) = −sin x, donc f′ a le signe opposé à celui de sin :</p>
      <ul>
        <li>sin x &gt; 0 sur ]0 ; π[ : cos décroît</li>
        <li>sin x &lt; 0 sur ]π ; 2π[ : cos croît</li>
      </ul>
      <p>Maximum 1 en x = 0 (et x = 2π), minimum −1 en x = π.</p>

      <h3>5. Fonction de la forme A·sin(x + φ)</h3>
      <p>Une telle fonction oscille entre −A et A. Sa période reste 2π. C'est ce qu'on utilise pour modéliser des phénomènes périodiques.</p>
      <div class="box"><b>Application concrète</b> — Un courant alternatif s'écrit souvent u(t) = U·sin(ωt + φ). L'amplitude U et la pulsation ω se lisent directement sur la formule.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Étudier f(x) = sin x + cos x sur [0 ; 2π].</p>
      <ul>
        <li>f′(x) = cos x − sin x</li>
        <li>f′(x) = 0 quand cos x = sin x, soit x = π/4 ou x = 5π/4</li>
        <li>f′(x) &gt; 0 quand cos x &gt; sin x : sur [0 ; π/4[ et ]5π/4 ; 2π]</li>
        <li>Maximum en x = π/4 : f(π/4) = √2/2 + √2/2 = √2</li>
        <li>Minimum en x = 5π/4 : f(5π/4) = −√2</li>
      </ul>
      <p><b>Vérification :</b> on sait que sin x + cos x = √2·sin(x + π/4), dont les bornes sont bien ±√2 ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — les propriétés des fonctions sinus et cosinus (périodicité, parité, valeurs), puis les dérivées et l'étude des variations.</div>`,
  exercices:[
    { d:1, e:"Quelle est la période de la fonction sinus ?", r:"2π",
      c:"Faire un tour complet du cercle trigonométrique ramène au même point.\n\nsin(x + 2π) = sin x : la fonction est 2π-périodique." },
    { d:1, e:"La fonction cosinus est-elle paire ou impaire ?", r:"Paire",
      c:"cos(−x) = cos x.\n\nLa fonction est paire : sa courbe est symétrique par rapport à l'axe des ordonnées." },
    { d:1, e:"La fonction sinus est-elle paire ou impaire ?", r:"Impaire",
      c:"sin(−x) = −sin x.\n\nLa fonction est impaire : sa courbe est symétrique par rapport à l'origine." },
    { d:1, e:"Dériver f(x) = sin x.", r:"f′(x) = cos x",
      c:"(sin x)′ = cos x." },
    { d:1, e:"Dériver f(x) = cos x.", r:"f′(x) = −sin x",
      c:"(cos x)′ = −sin x.\n\n<b>Attention au signe moins</b> : c'est l'erreur la plus fréquente." },
    { d:1, e:"Que vaut sin(π/2) ?", r:"1",
      c:"Sur le cercle, l'angle π/2 correspond au point (0 ; 1).\n\nSon ordonnée est 1, donc sin(π/2) = 1." },
    { d:1, e:"Que vaut cos(π) ?", r:"−1",
      c:"L'angle π correspond au point (−1 ; 0).\n\nSon abscisse est −1, donc cos π = −1." },
    { d:1, e:"Quel est le maximum de la fonction sinus ?", r:"1",
      c:"Le point du cercle reste sur le cercle unité, donc son ordonnée reste entre −1 et 1.\n\nLe maximum vaut 1, atteint en x = π/2." },
    { d:1, e:"Quel est le minimum de la fonction cosinus ?", r:"−1",
      c:"Le minimum de cos est −1, atteint en x = π." },
    { d:1, e:"Que vaut cos(0) ?", r:"1",
      c:"L'angle 0 correspond au point (1 ; 0) sur le cercle.\n\nSon abscisse est 1, donc cos 0 = 1." },
    { d:2, e:"Dériver f(x) = sin(3x).", r:"f′(x) = 3cos(3x)",
      c:"Formule (sin u)′ = u′cos u avec u = 3x, donc u′ = 3.\n\nf′(x) = 3cos(3x)." },
    { d:2, e:"Dériver f(x) = cos(2x).", r:"f′(x) = −2sin(2x)",
      c:"Formule (cos u)′ = −u′sin u avec u = 2x et u′ = 2.\n\nf′(x) = −2sin(2x)." },
    { d:2, e:"Résoudre sin x = 0 sur [0 ; 2π].", r:"x = 0, π, 2π",
      c:"sin x = 0 correspond aux points du cercle situés sur l'axe des abscisses.\n\nSur [0 ; 2π] : x = 0, x = π et x = 2π." },
    { d:2, e:"Résoudre cos x = 0 sur [0 ; 2π].", r:"x = π/2 et 3π/2",
      c:"cos x = 0 correspond aux points du cercle sur l'axe des ordonnées.\n\nSur [0 ; 2π] : x = π/2 et x = 3π/2." },
    { d:2, e:"Étudier le signe de sin x sur [0 ; 2π].", r:"Positif sur ]0 ; π[, négatif sur ]π ; 2π[",
      c:"sin x est l'ordonnée du point du cercle.\n\nElle est positive quand le point est au-dessus de l'axe horizontal, négative en dessous.\n\nDonc sin x &gt; 0 sur ]0 ; π[ et sin x &lt; 0 sur ]π ; 2π[." },
    { d:2, e:"Dériver f(x) = x·sin(x).", r:"f′(x) = sin x + x·cos x",
      c:"Règle du produit avec u = x (u′ = 1) et v = sin x (v′ = cos x).\n\nf′(x) = 1·sin x + x·cos x = sin x + x·cos x." },
    { d:2, e:"Résoudre sin x = 1/2 sur [0 ; 2π].", r:"x = π/6 et x = 5π/6",
      c:"sin x = 1/2 correspond à deux points du cercle : angles π/6 et π − π/6 = 5π/6.\n\nLes deux sont dans [0 ; 2π]." },
    { d:2, e:"Déterminer le maximum de f(x) = 3sin(x).", r:"3",
      c:"Comme −1 ≤ sin x ≤ 1, on a −3 ≤ 3sin x ≤ 3.\n\nLe maximum vaut 3, atteint quand sin x = 1, c'est-à-dire x = π/2." },
    { d:2, e:"Montrer que sin²x + cos²x = 1 est vrai pour x = π/4.", r:"Vérifié",
      c:"sin(π/4) = √2/2 et cos(π/4) = √2/2.\n\nsin²(π/4) = 2/4 = 1/2\ncos²(π/4) = 2/4 = 1/2\n\nSomme : 1/2 + 1/2 = 1 ✓" },
    { d:2, e:"Dériver f(x) = sin²(x).", r:"f′(x) = 2sin x·cos x = sin(2x)",
      c:"On écrit sin²x = (sin x)² et on utilise (uⁿ)′ = n·u′·u^(n−1) avec u = sin x.\n\nf′(x) = 2 × cos x × sin x = 2sin x cos x = sin(2x)." },
    { d:2, e:"Étudier la parité de f(x) = x·cos(x).", r:"Impaire",
      c:"f(−x) = (−x)·cos(−x) = −x·cos x = −f(x) (car cos est paire).\n\nLa fonction est impaire." },
    { d:3, e:"Étudier f(x) = sin x + cos x sur [0 ; 2π].", r:"Maximum √2 en π/4, minimum −√2 en 5π/4",
      c:"f′(x) = cos x − sin x.\n\nf′(x) = 0 quand cos x = sin x : x = π/4 ou x = 5π/4 sur [0 ; 2π].\n\nf′ &gt; 0 sur [0 ; π/4[ et ]5π/4 ; 2π[, f′ &lt; 0 sur ]π/4 ; 5π/4[.\n\nMaximum en x = π/4 : √2/2 + √2/2 = √2.\nMinimum en x = 5π/4 : −√2/2 − √2/2 = −√2." },
    { d:3, e:"Résoudre sin(2x) = 1/2 sur [0 ; 2π].", r:"x = π/12, 5π/12, 13π/12, 17π/12",
      c:"On pose X = 2x. Alors sin X = 1/2.\n\nSolutions de sin X = 1/2 : X = π/6 + 2kπ ou X = 5π/6 + 2kπ.\n\nDonc 2x = π/6 + 2kπ, soit x = π/12 + kπ.\nOu 2x = 5π/6 + 2kπ, soit x = 5π/12 + kπ.\n\nSur [0 ; 2π] :\nx = π/12, π/12 + π = 13π/12\nx = 5π/12, 5π/12 + π = 17π/12\n\nQuatre solutions." },
    { d:3, e:"Montrer que f(x) = x − sin x est croissante sur ℝ.", r:"Démonstration",
      c:"f′(x) = 1 − cos x.\n\nOr cos x ≤ 1 pour tout x, donc 1 − cos x ≥ 0.\n\nLa dérivée est positive (nulle aux points où cos x = 1, c'est-à-dire x = 2kπ).\n\nComme f′ ≥ 0 partout, la fonction est croissante. Elle est même strictement croissante, car la dérivée ne s'annule qu'en des points isolés." },
    { d:3, e:"Déterminer le nombre de solutions de cos x = x sur ℝ.", r:"Une seule",
      c:"On pose h(x) = cos x − x, continue sur ℝ.\n\nh′(x) = −sin x − 1.\n\nOr sin x ≥ −1, donc −sin x − 1 ≤ 0. La fonction h est décroissante.\n\nLimites : en −∞, −x → +∞ et cos x est borné, donc h → +∞. En +∞, h → −∞.\n\nContinue et strictement décroissante de +∞ à −∞, h traverse 0 exactement une fois.\n\nLa solution vaut environ 0,739." },
    { d:3, e:"Étudier f(x) = cos(2x) sur [0 ; π].", r:"Maximum 1 en 0 et π, minimum −1 en π/2",
      c:"f′(x) = −2sin(2x).\n\nSur [0 ; π], 2x parcourt [0 ; 2π].\n\nsin(2x) &gt; 0 pour 2x ∈ ]0 ; π[, soit x ∈ ]0 ; π/2[.\n\nDonc f′ &lt; 0 sur ]0 ; π/2[ : f décroît.\nf′ &gt; 0 sur ]π/2 ; π[ : f croît.\n\nf(0) = cos 0 = 1\nf(π/2) = cos π = −1\nf(π) = cos 2π = 1" },
    { d:3, e:"Résoudre cos²x = 1/4 sur [0 ; 2π].", r:"x = π/3, 2π/3, 4π/3, 5π/3",
      c:"cos²x = 1/4 donne cos x = 1/2 ou cos x = −1/2.\n\n<b>Cas 1</b> : cos x = 1/2 ⟹ x = π/3 ou x = 5π/3.\n<b>Cas 2</b> : cos x = −1/2 ⟹ x = 2π/3 ou x = 4π/3.\n\nQuatre solutions.\n\n<b>Erreur classique</b> — Oublier le cas négatif et ne donner que deux solutions." },
    { d:3, e:"Déterminer l'amplitude et la période de f(t) = 5sin(3t).", r:"Amplitude 5, période 2π/3",
      c:"L'amplitude est le coefficient devant le sinus : 5.\n\nLa fonction oscille entre −5 et 5.\n\nPour la période : sin(3t) effectue un cycle complet quand 3t varie de 2π, soit t variant de 2π/3.\n\nPériode : 2π/3." },
    { d:3, e:"Montrer que la fonction f(x) = sin x/x admet une limite finie en 0.", r:"La limite vaut 1",
      c:"C'est une forme indéterminée 0/0.\n\nRésultat : lim (x→0) sin x/x = 1.\n\n<b>Interprétation</b> — C'est le nombre dérivé de sin en 0 : sin′(0) = cos(0) = 1.\n\nCe résultat permet de prolonger la fonction par continuité en 0, en posant f(0) = 1." },
    { d:3, e:"Résoudre l'inéquation sin x ≥ 1/2 sur [0 ; 2π].", r:"x ∈ [π/6 ; 5π/6]",
      c:"On cherche les points du cercle dont l'ordonnée est au moins 1/2.\n\nCe sont les points situés au-dessus de la droite horizontale y = 1/2.\n\nCela correspond à l'arc entre π/6 et 5π/6.\n\nSolution : [π/6 ; 5π/6].\n\n<b>Vérification</b> : à x = π/2 (milieu de l'intervalle), sin(π/2) = 1 ≥ 1/2 ✓" },
    { d:3, e:"Un courant alternatif a pour expression u(t) = 230√2·sin(100πt). Quelle est la valeur maximale de la tension ?", r:"Environ 325 V",
      c:"L'amplitude est le coefficient devant le sinus : 230√2.\n\n230 × √2 ≈ 230 × 1,414 ≈ 325,3 V.\n\n<b>Interprétation</b> — 325 V est la tension crête. La valeur efficace, qui est celle dont on parle couramment (230 V), vaut l'amplitude divisée par √2." },
    { d:3, e:"Montrer que sin(π − x) = sin x.", r:"Démonstration",
      c:"Sur le cercle trigonométrique, l'angle π − x correspond au symétrique de l'angle x par rapport à l'axe des ordonnées.\n\nCette symétrie conserve l'ordonnée et change l'abscisse en son opposée.\n\nDonc sin(π − x) = sin x et cos(π − x) = −cos x ✓\n\n<b>Vérification avec x = π/6</b> : sin(π − π/6) = sin(5π/6) = 1/2 = sin(π/6) ✓" },
    { d:3, e:"Déterminer le minimum de f(x) = 2 + 3cos(x).", r:"−1",
      c:"Comme −1 ≤ cos x ≤ 1, on a −3 ≤ 3cos x ≤ 3.\n\nDonc −1 ≤ 2 + 3cos x ≤ 5.\n\nLe minimum vaut −1, atteint quand cos x = −1, c'est-à-dire x = π." }
  ]
},
{
  id:"tle-convexite", niveau:"Tle", titre:"Tle · Convexité et compléments sur la dérivation", temps:"22 min",
  resume:"Dérivée seconde, fonction convexe et concave, point d'inflexion, inégalités.",
  lecons:[
    { titre:"Dérivée seconde et convexité", contenu:`
      <h3>1. Dérivée seconde</h3>
      <p>La dérivée seconde f″ est la dérivée de f′. Elle mesure la <b>variation de la pente</b> : f″ indique si la pente augmente ou diminue.</p>
      <div class="formula">f″ = (f′)′</div>

      <h3>2. Convexité et concavité</h3>
      <ul>
        <li><b>f″ ≥ 0</b> sur un intervalle → f est <b>convexe</b> : la courbe est tournée vers le haut, au-dessus de ses tangentes</li>
        <li><b>f″ ≤ 0</b> → f est <b>concave</b> : la courbe est tournée vers le bas, sous ses tangentes</li>
      </ul>
      <div class="box"><b>Image utile</b> — Une fonction convexe « sourit » (∪), une fonction concave « fronce les sourcils » (∩).</div>

      <h3>3. Définition par les cordes</h3>
      <p>Une autre caractérisation, équivalente pour les fonctions deux fois dérivables : f est convexe si toute corde joignant deux points de la courbe est <b>au-dessus</b> de la courbe.</p>
      <div class="formula">f(tx + (1−t)y) ≤ t·f(x) + (1−t)·f(y)     pour t ∈ [0 ; 1]</div>

      <h3>4. Point d'inflexion</h3>
      <p>Un point d'inflexion est l'endroit où la courbe <b>change de convexité</b> : elle passe de convexe à concave, ou l'inverse. C'est le point où f″ s'annule <b>en changeant de signe</b>.</p>
      <div class="box warn"><b>Attention</b> — f″ = 0 ne suffit pas. Si f″ s'annule sans changer de signe (comme pour x⁴ en 0), il n'y a pas de point d'inflexion. Il faut étudier le <b>signe</b> de f″, pas seulement son zéro.</div>

      <h3>5. Lien avec les extremums</h3>
      <p>La dérivée seconde permet de qualifier un point où f′ = 0 :</p>
      <ul>
        <li>f′(a) = 0 et f″(a) &gt; 0 → <b>minimum local</b></li>
        <li>f′(a) = 0 et f″(a) &lt; 0 → <b>maximum local</b></li>
        <li>f′(a) = 0 et f″(a) = 0 → on ne peut pas conclure, il faut étudier le signe de f′</li>
      </ul>

      <h3>6. Exemple entièrement résolu</h3>
      <p>f(x) = x³ − 3x² + 2. Étudier la convexité et donner les points d'inflexion.</p>
      <ul>
        <li>f′(x) = 3x² − 6x</li>
        <li>f″(x) = 6x − 6 = 6(x − 1)</li>
        <li>f″ &lt; 0 pour x &lt; 1 : concave sur ]−∞ ; 1[</li>
        <li>f″ &gt; 0 pour x &gt; 1 : convexe sur ]1 ; +∞[</li>
        <li>f″ change de signe en x = 1, et f(1) = 1 − 3 + 2 = 0</li>
      </ul>
      <p><b>Point d'inflexion :</b> (1 ; 0).</p>
    ` },
    { titre:"Applications de la convexité", contenu:`
      <h3>1. Inégalités classiques</h3>
      <p>La convexité démontre des inégalités. Le principe : une fonction convexe est au-dessus de ses tangentes.</p>
      <div class="formula">eˣ est convexe, tangente en 0 : y = x + 1
Donc eˣ ≥ x + 1 pour tout réel x</div>
      <div class="box"><b>La méthode</b> — On trace la tangente en un point bien choisi, on invoque la convexité, et l'inégalité tombe. C'est plus élégant qu'une étude de fonction.</div>

      <h3>2. Position par rapport à la corde</h3>
      <p>Pour une fonction concave, la courbe est au-dessus de ses cordes. C'est ce qui donne l'inégalité de la moyenne géométrique :</p>
      <div class="formula">√(ab) ≤ (a + b)/2        pour a, b ≥ 0</div>
      <p>Cela vient de la concavité de la fonction racine carrée.</p>

      <h3>3. Convexité et dérivée croissante</h3>
      <p>Il existe une caractérisation sans dérivée seconde : f est convexe si et seulement si sa dérivée f′ est <b>croissante</b>.</p>
      <div class="box"><b>Pourquoi c'est utile</b> — Quand le calcul de f″ est pénible, on peut souvent démontrer que f′ est croissante par une autre voie.</div>

      <h3>4. Applications économiques</h3>
      <p>En économie, la convexité modélise des comportements courants :</p>
      <ul>
        <li>Un <b>coût marginal croissant</b> correspond à une fonction de coût convexe</li>
        <li>Une <b>utilité marginale décroissante</b> correspond à une fonction d'utilité concave</li>
      </ul>

      <h3>5. Dérivée seconde et courbure</h3>
      <p>La valeur absolue de f″ mesure la courbure : plus |f″| est grand, plus la courbe est « serrée ».</p>
      <div class="formula">Pour f(x) = x², f″ = 2 : courbure constante
Pour f(x) = x⁴, f″ = 12x² : courbure nulle en 0, croissante ensuite</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Montrer que ln x ≤ x − 1 pour tout x &gt; 0, en utilisant la concavité.</p>
      <ul>
        <li>ln est concave sur ]0 ; +∞[ car (ln x)″ = −1/x² &lt; 0</li>
        <li>Une fonction concave est <b>sous</b> ses tangentes</li>
        <li>Tangente en x = 1 : ln 1 = 0 et (ln)′(1) = 1, donc y = x − 1</li>
        <li>Donc ln x ≤ x − 1</li>
      </ul>
      <p><b>Égalité</b> uniquement en x = 1, point de tangence ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — la dérivée seconde et la convexité, puis les applications aux inégalités et à l'économie.</div>`,
  exercices:[
    { d:1, e:"Calculer f″ pour f(x) = x³.", r:"f″(x) = 6x",
      c:"f′(x) = 3x².\nf″(x) = 6x." },
    { d:1, e:"Calculer f″ pour f(x) = x².", r:"f″(x) = 2",
      c:"f′(x) = 2x.\nf″(x) = 2.\n\nComme f″ &gt; 0 partout, la fonction est convexe sur ℝ." },
    { d:1, e:"Si f″ > 0 sur un intervalle, la fonction est :", r:"Convexe",
      c:"Une dérivée seconde positive signifie que la courbe est tournée vers le haut.\n\nLa fonction est convexe : elle est au-dessus de ses tangentes." },
    { d:1, e:"Si f″ < 0, la fonction est :", r:"Concave",
      c:"Une dérivée seconde négative signifie que la courbe est tournée vers le bas.\n\nLa fonction est concave." },
    { d:1, e:"Calculer f″ pour f(x) = eˣ.", r:"f″(x) = eˣ",
      c:"f′(x) = eˣ, puis f″(x) = eˣ.\n\nComme eˣ &gt; 0 toujours, l'exponentielle est convexe sur ℝ." },
    { d:1, e:"Calculer f″ pour f(x) = ln x.", r:"f″(x) = −1/x²",
      c:"f′(x) = 1/x = x⁻¹.\nf″(x) = −x⁻² = −1/x².\n\nComme x² &gt; 0, f″ &lt; 0 : le logarithme est concave." },
    { d:1, e:"Que signifie un point d'inflexion ?", r:"La courbe change de convexité",
      c:"Un point d'inflexion est l'endroit où la courbe passe de convexe à concave (ou l'inverse).\n\nLa dérivée seconde s'y annule en changeant de signe." },
    { d:1, e:"Calculer f″ pour f(x) = x⁴.", r:"f″(x) = 12x²",
      c:"f′(x) = 4x³.\nf″(x) = 12x².\n\nComme 12x² ≥ 0, la fonction est convexe sur ℝ entier." },
    { d:1, e:"Une fonction convexe est-elle au-dessus ou en dessous de ses tangentes ?", r:"Au-dessus",
      c:"C'est la propriété caractéristique de la convexité.\n\nLa courbe est au-dessus de toutes ses tangentes." },
    { d:1, e:"Une fonction concave est-elle au-dessus ou en dessous de ses tangentes ?", r:"En dessous",
      c:"Pour une fonction concave, la courbe est sous ses tangentes.\n\nC'est ce qui donne ln x ≤ x − 1." },
    { d:2, e:"Étudier la convexité de f(x) = x³ − 6x².", r:"Concave avant x = 2, convexe après",
      c:"f′(x) = 3x² − 12x.\nf″(x) = 6x − 12 = 6(x − 2).\n\nf″ &lt; 0 pour x &lt; 2 : concave.\nf″ &gt; 0 pour x &gt; 2 : convexe.\n\nPoint d'inflexion en x = 2." },
    { d:2, e:"Trouver le point d'inflexion de f(x) = x³ − 3x².", r:"(1 ; −2)",
      c:"f′(x) = 3x² − 6x.\nf″(x) = 6x − 6 = 6(x−1).\n\nf″ s'annule en x = 1 et change de signe (négatif avant, positif après).\n\nDonc point d'inflexion en x = 1.\nSon ordonnée : f(1) = 1 − 3 = −2.\n\nPoint d'inflexion : (1 ; −2)." },
    { d:2, e:"Classer le point x = 3 pour f(x) = x² − 6x, sachant f′(3) = 0.", r:"Minimum local",
      c:"f″(x) = 2, donc f″(3) = 2 &gt; 0.\n\nRègle : f′(a) = 0 et f″(a) &gt; 0 donne un minimum local." },
    { d:2, e:"Étudier le signe de f″ pour f(x) = x⁴.", r:"f″ ≥ 0 partout, nulle en 0",
      c:"f′(x) = 4x³.\nf″(x) = 12x².\n\nUn carré est toujours positif ou nul.\n\nf″ s'annule en 0 mais ne change pas de signe : il n'y a <b>pas</b> de point d'inflexion." },
    { d:2, e:"Montrer que eˣ ≥ x + 1 pour tout x.", r:"Démonstration",
      c:"La fonction eˣ est convexe sur ℝ car (eˣ)″ = eˣ &gt; 0.\n\nUne fonction convexe est <b>au-dessus</b> de ses tangentes.\n\nTangente en x = 0 : e⁰ = 1 et (eˣ)′(0) = 1, donc y = x + 1.\n\nDonc eˣ ≥ x + 1 pour tout réel x, avec égalité en x = 0 seulement." },
    { d:2, e:"Déterminer la convexité de f(x) = x² + 3x − 5.", r:"Convexe sur ℝ",
      c:"f′(x) = 2x + 3.\nf″(x) = 2 &gt; 0.\n\nf″ est positif partout : la fonction est convexe sur ℝ entier.\n\nC'est cohérent : sa courbe est une parabole tournée vers le haut." },
    { d:2, e:"Déterminer la convexité de f(x) = −x² + 4x.", r:"Concave sur ℝ",
      c:"f′(x) = −2x + 4.\nf″(x) = −2 &lt; 0.\n\nLa fonction est concave sur ℝ entier.\n\nSa courbe est une parabole tournée vers le bas." },
    { d:2, e:"Vrai ou faux : si f″(a) = 0, alors a est un point d'inflexion.", r:"Faux",
      c:"Contre-exemple : f(x) = x⁴ en a = 0. On a f″(x) = 12x², donc f″(0) = 0.\n\nMais f″ ne change pas de signe.\n\nIl n'y a pas de point d'inflexion.\n\nLa bonne condition : f″ s'annule <b>en changeant de signe</b>." },
    { d:2, e:"Étudier la convexité de f(x) = x⁴ − 6x².", r:"Concave sur ]−1 ; 1[, convexe ailleurs",
      c:"f′(x) = 4x³ − 12x.\nf″(x) = 12x² − 12 = 12(x² − 1) = 12(x−1)(x+1).\n\nf″ &lt; 0 pour x ∈ ]−1 ; 1[ : concave.\nf″ &gt; 0 pour x &lt; −1 ou x &gt; 1 : convexe.\n\nDeux points d'inflexion, en x = −1 et x = 1." },
    { d:2, e:"Déterminer le signe de f″ pour f(x) = (x² + 1)² sur ℝ.", r:"Toujours positif",
      c:"Développons : f(x) = x⁴ + 2x² + 1.\n\nf′(x) = 4x³ + 4x.\nf″(x) = 12x² + 4.\n\nComme 12x² ≥ 0, on a f″ ≥ 4 &gt; 0.\n\nLa fonction est strictement convexe sur ℝ." },
    { d:2, e:"Trouver les points d'inflexion de f(x) = x⁴ − 2x³.", r:"(0 ; 0) et (1 ; −1)",
      c:"f′(x) = 4x³ − 6x².\nf″(x) = 12x² − 12x = 12x(x − 1).\n\nf″ s'annule en x = 0 et x = 1.\n\nSigne : f″ &gt; 0 pour x &lt; 0, &lt; 0 sur ]0 ; 1[, &gt; 0 après 1.\n\nLe signe change en 0 et en 1 : deux points d'inflexion.\n\nf(0) = 0 et f(1) = 1 − 2 = −1." },
    { d:3, e:"Montrer que si f est convexe et g linéaire, alors f + g est convexe.", r:"Démonstration",
      c:"Si g est linéaire, g(x) = ax + b, alors g″ = 0.\n\nOr (f + g)″ = f″ + g″ = f″ + 0 = f″.\n\nComme f est convexe, f″ ≥ 0, donc (f+g)″ ≥ 0.\n\nLa fonction f + g est convexe.\n\n<b>Interprétation</b> — Ajouter une fonction affine ne change pas la convexité : c'est cohérent, car cela revient à faire glisser la courbe." },
    { d:3, e:"Étudier la convexité de f(x) = x³ − 3x² + 3x.", r:"Concave avant x = 1, convexe après",
      c:"f′(x) = 3x² − 6x + 3 = 3(x−1)².\nf″(x) = 6x − 6 = 6(x−1).\n\nf″ &lt; 0 pour x &lt; 1 : concave.\nf″ &gt; 0 pour x &gt; 1 : convexe.\n\nPoint d'inflexion en x = 1, d'ordonnée f(1) = 1 − 3 + 3 = 1.\n\n<b>Remarque</b> — f′(1) = 0 mais f ne présente pas d'extremum en 1 : c'est un point d'inflexion à tangente horizontale." },
    { d:3, e:"Montrer que la fonction f(x) = x/x²+1 n'est pas convexe sur ℝ.", r:"Démonstration",
      c:"f′(x) = [(1)(x²+1) − x(2x)]/(x²+1)² = (x² + 1 − 2x²)/(x²+1)² = (1 − x²)/(x²+1)².\n\nf″(x) = [−2x(x²+1)² − (1−x²)·2(x²+1)·2x] / (x²+1)⁴\n\nAprès simplification : f″(x) = 2x(x² − 3)/(x²+1)³.\n\nLe signe de f″ change : négatif pour x &lt; −√3, positif sur ]−√3 ; 0[, négatif sur ]0 ; √3[, positif après √3.\n\nSa convexité n'est donc pas constante : la fonction n'est ni convexe ni concave sur ℝ entier.\n\nElle admet trois points d'inflexion (en −√3, 0 et √3)." },
    { d:3, e:"Démontrer que √(ab) ≤ (a+b)/2 pour a, b ≥ 0, en utilisant la concavité de la racine carrée.", r:"Démonstration",
      c:"La fonction racine carrée est concave sur [0 ; +∞[ car (√x)″ = −1/(4x^(3/2)) &lt; 0.\n\nPour une fonction concave, la courbe est au-dessus de ses cordes.\n\nPrenons les points d'abscisses a et b. La corde a pour équation la droite passant par (a ; √a) et (b ; √b).\n\nAu point milieu d'abscisse (a+b)/2, la corde vaut :\n(√a + √b)/2\n\nEt par concavité :\n√((a+b)/2) ≥ (√a + √b)/2\n\nEn posant A = √a et B = √b, on a a = A², b = B² et :\n√((A²+B²)/2) ≥ (A+B)/2\n\nD'où (A+B)/2 ≤ √((A²+B²)/2).\n\n<b>Remarque</b> — Cela démontre l'inégalité entre moyenne arithmétique et moyenne quadratique, qui implique l'inégalité avec la moyenne géométrique." },
    { d:3, e:"Déterminer si f(x) = e^x − x² est convexe sur ℝ.", r:"Oui, convexe sur ℝ",
      c:"f′(x) = eˣ − 2x.\nf″(x) = eˣ − 2.\n\nf″ = 0 quand eˣ = 2, soit x = ln 2.\n\nf″ &lt; 0 pour x &lt; ln 2 et f″ &gt; 0 pour x &gt; ln 2.\n\nDonc la fonction n'est pas convexe partout : elle est concave sur ]−∞ ; ln 2[ et convexe sur ]ln 2 ; +∞[.\n\nIl y a un point d'inflexion en x = ln 2." },
    { d:3, e:"Un coût de production est modélisé par C(x) = 0,01x³ − 0,6x² + 15x + 100. Le coût est-il convexe ?", r:"Concave puis convexe, changement en x = 20",
      c:"C′(x) = 0,03x² − 1,2x + 15.\nC″(x) = 0,06x − 1,2 = 0,06(x − 20).\n\nC″ &lt; 0 pour x &lt; 20 : le coût est concave (le coût marginal décroît — économies d'échelle).\nC″ &gt; 0 pour x &gt; 20 : le coût est convexe (le coût marginal croît).\n\nLe point d'inflexion en x = 20 marque le passage des rendements croissants aux rendements décroissants.\n\n<b>Interprétation économique</b> — C'est la loi des rendements décroissants : au-delà d'un certain volume, produire une unité supplémentaire coûte de plus en plus cher." },
    { d:3, e:"Montrer que pour tout x > 0, ln x ≥ 1 − 1/x.", r:"Démonstration",
      c:"La fonction ln est concave sur ]0 ; +∞[ car (ln x)″ = −1/x² &lt; 0.\n\nUne fonction concave est <b>sous</b> ses tangentes... ce qui donne ln x ≤ x − 1 en x = 1.\n\nPour obtenir l'inégalité demandée, utilisons plutôt la convexité de la fonction inverse sur ]0 ; +∞[.\n\nEn posant u = 1/x, on peut aussi procéder par étude de fonction.\n\nSoit g(x) = ln x − 1 + 1/x.\n\ng′(x) = 1/x − 1/x² = (x − 1)/x².\n\ng′ &lt; 0 pour x &lt; 1, g′ &gt; 0 pour x &gt; 1 : minimum en x = 1.\n\ng(1) = 0 − 1 + 1 = 0.\n\nDonc g(x) ≥ 0, soit ln x ≥ 1 − 1/x ✓\n\nL'égalité a lieu en x = 1." }
  ]
},
{
  id:"tle-integrales-complet", niveau:"Tle", titre:"Tle · Primitives, équations différentielles et intégrales", temps:"26 min",
  resume:"Primitives des composées, équations différentielles, intégration par parties.",
  lecons:[
    { titre:"Primitives des fonctions composées", contenu:`
      <h3>1. Rappel : chercher une primitive</h3>
      <p>F est une primitive de f si F′ = f. On la note :</p>
      <div class="formula">∫ f(x) dx = F(x) + C</div>

      <h3>2. Les primitives des composées</h3>
      <p>Ce sont les plus fréquentes en exercice. On reconnaît la forme u′·g(u) :</p>
      <div class="formula">∫ u′·uⁿ dx = uⁿ⁺¹/(n+1) + C        (n ≠ −1)
∫ (u′/u) dx = ln|u| + C
∫ u′·e^u dx = e^u + C
∫ (u′/√u) dx = 2√u + C
∫ u′·cos u dx = sin u + C
∫ u′·sin u dx = −cos u + C</div>
      <div class="box"><b>Le réflexe à avoir</b> — Face à une intégrale compliquée, cherche u et vérifie si u′ est présent (à un facteur constant près). C'est le cas dans 80 % des exercices.</div>

      <h3>3. Le facteur constant près</h3>
      <p>Si u′ est présent à un coefficient près, on ajuste en multipliant par l'inverse.</p>
      <div class="formula">∫ x·e^(x²) dx : on pose u = x², donc u′ = 2x
∫ x·e^(x²) dx = (1/2)∫ 2x·e^(x²) dx = (1/2)·e^(x²) + C</div>

      <h3>4. Primitives de la forme 1/(ax + b)</h3>
      <div class="formula">∫ dx/(ax + b) = (1/a)·ln|ax + b| + C</div>
      <p>Exemple : ∫ dx/(2x + 1) = (1/2)·ln|2x + 1| + C.</p>

      <h3>5. Primitives de cos² et sin²</h3>
      <p>On linéarise avec les formules de duplication :</p>
      <div class="formula">cos²x = (1 + cos 2x)/2        sin²x = (1 − cos 2x)/2</div>
      <p>Alors : ∫cos²x dx = x/2 + sin(2x)/4 + C.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Déterminer une primitive de f(x) = x/(x² + 3).</p>
      <ul>
        <li>On veut la forme u′/u avec u = x² + 3</li>
        <li>Or u′ = 2x, et on a x au numérateur</li>
        <li>f(x) = (1/2) × (2x)/(x² + 3) = (1/2)·(u′/u)</li>
        <li>Donc F(x) = (1/2)·ln(x² + 3) + C</li>
      </ul>
      <p><b>Vérification :</b> F′(x) = (1/2) × 2x/(x²+3) = x/(x²+3) ✓</p>
    ` },
    { titre:"Équations différentielles", contenu:`
      <h3>1. Qu'est-ce qu'une équation différentielle</h3>
      <p>C'est une équation où l'inconnue est une <b>fonction</b>, et où apparaît sa dérivée. Résoudre, c'est trouver toutes les fonctions qui la vérifient.</p>
      <div class="formula">y′ = 2y        (l'inconnue est la fonction y)</div>

      <h3>2. L'équation y′ = ay</h3>
      <p>C'est la plus importante. Ses solutions sont les fonctions :</p>
      <div class="formula">y = C·e^(ax)        où C est une constante réelle</div>
      <div class="box"><b>Démonstration</b> — Si y = C·e^(ax), alors y′ = C·a·e^(ax) = a·y ✓. Réciproquement, on montre que toute solution est de cette forme en étudiant y/e^(ax).</div>

      <h3>3. L'équation y′ = ay + b</h3>
      <p>On cherche d'abord une solution particulière constante : y = −b/a.</p>
      <div class="formula">Solutions : y = C·e^(ax) − b/a</div>
      <p>Exemple : y′ = 2y + 6. Solution particulière : y = −3. Solutions : y = C·e^(2x) − 3.</p>

      <h3>4. Déterminer la constante avec une condition initiale</h3>
      <p>La donnée y(x₀) = y₀ permet de calculer C.</p>
      <div class="formula">y′ = 2y et y(0) = 5
Solutions générales : y = C·e^(2x)
Condition : y(0) = C·e⁰ = C = 5
Solution : y = 5·e^(2x)</div>
      <div class="box warn"><b>Ne pas oublier la condition initiale</b> — Sans elle, il y a une infinité de solutions. Avec elle, la solution est unique.</div>

      <h3>5. Applications concrètes</h3>
      <p>Ces équations modélisent de nombreux phénomènes :</p>
      <ul>
        <li><b>Croissance exponentielle</b> : y′ = ky avec k &gt; 0 (population, intérêts composés)</li>
        <li><b>Décroissance radioactive</b> : y′ = −ky avec k &gt; 0</li>
        <li><b>Refroidissement de Newton</b> : y′ = −k(y − T) où T est la température ambiante</li>
        <li><b>Circuit RC</b> : évolution de la charge d'un condensateur</li>
      </ul>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Une population de bactéries double toutes les heures. Elle vaut initialement 1000. Modéliser puis calculer au bout de 5 heures.</p>
      <ul>
        <li>La croissance est exponentielle : y′ = ky, donc y = C·e^(kt)</li>
        <li>Condition initiale : y(0) = C = 1000, donc y = 1000·e^(kt)</li>
        <li>Doublement en 1 heure : y(1) = 2000, donc 1000·e^k = 2000, soit e^k = 2</li>
        <li>Donc k = ln 2, et y = 1000·e^(t·ln 2) = 1000 × 2^t</li>
        <li>Après 5 heures : y = 1000 × 2⁵ = 32 000</li>
      </ul>
      <p><b>Vérification :</b> 1000 → 2000 → 4000 → 8000 → 16 000 → 32 000 ✓ (cinq doublements)</p>
    ` },
    { titre:"Calcul intégral et intégration par parties", contenu:`
      <h3>1. Intégrale définie</h3>
      <div class="formula">∫ₐᵇ f(x) dx = F(b) − F(a)</div>
      <p>Le résultat est un <b>nombre</b>. La constante C disparaît dans la soustraction.</p>

      <h3>2. Interprétation en aire</h3>
      <p>Si f ≥ 0 sur [a ; b], l'intégrale est l'aire sous la courbe. Si f change de signe, elle donne l'aire algébrique.</p>
      <div class="formula">Aire entre deux courbes f ≥ g sur [a ; b] :
A = ∫ₐᵇ [f(x) − g(x)] dx</div>

      <h3>3. Propriétés</h3>
      <div class="formula">Linéarité : ∫ₐᵇ (αf + βg) = α∫ₐᵇ f + β∫ₐᵇ g
Relation de Chasles : ∫ₐᵇ f = ∫ₐᶜ f + ∫𝒸ᵇ f
Inversion : ∫ᵦᵃ f = −∫ₐᵇ f</div>

      <h3>4. Intégration par parties</h3>
      <p>C'est l'outil pour les produits de fonctions de natures différentes. La formule :</p>
      <div class="formula">∫ₐᵇ u′(x)·v(x) dx = [u(x)·v(x)]ₐᵇ − ∫ₐᵇ u(x)·v′(x) dx</div>
      <div class="box"><b>Comment choisir u′ et v</b> — On prend u′ comme la partie <b>facile à intégrer</b>, et v comme la partie <b>facile à dériver</b>. L'objectif est de simplifier l'intégrale restante.</div>
      <p>Cas typiques : x·eˣ, x·ln x, x·sin x, ln x.</p>

      <h3>5. Valeur moyenne</h3>
      <p>La valeur moyenne d'une fonction sur [a ; b] est :</p>
      <div class="formula">m = (1/(b−a)) · ∫ₐᵇ f(x) dx</div>
      <div class="box"><b>Interprétation</b> — C'est la hauteur du rectangle de base (b−a) qui aurait la même aire que la région sous la courbe.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Calculer ∫₁ᵉ x·ln x dx par intégration par parties.</p>
      <ul>
        <li>On pose u′ = x, donc u = x²/2. Et v = ln x, donc v′ = 1/x.</li>
        <li>∫ x·ln x dx = [x²/2 · ln x] − ∫ (x²/2)·(1/x) dx</li>
        <li>= [x²/2 · ln x] − ∫ (x/2) dx</li>
        <li>= [x²/2 · ln x] − x²/4 + C</li>
        <li>Évaluation de 1 à e : [e²/2 · 1 − e²/4] − [0 − 1/4] = e²/4 + 1/4</li>
      </ul>
      <p><b>Résultat :</b> ∫₁ᵉ x·ln x dx = (e² + 1)/4 ≈ 2,097.</p>
    ` }
  ],
  cours:`<div class="box"><b>Trois leçons</b> — les primitives des composées, les équations différentielles, puis le calcul intégral avec l'intégration par parties.</div>`,
  exercices:[
    { d:1, e:"Déterminer une primitive de f(x) = 2x·e^(x²).", r:"F(x) = e^(x²) + C",
      c:"On reconnaît u′·e^u avec u = x², donc u′ = 2x.\n\nLa primitive est e^u = e^(x²).\n\nF(x) = e^(x²) + C." },
    { d:1, e:"Déterminer une primitive de f(x) = 2x/(x² + 1).", r:"F(x) = ln(x² + 1) + C",
      c:"On reconnaît u′/u avec u = x² + 1 et u′ = 2x.\n\nLa primitive est ln|u| = ln(x²+1).\n\nF(x) = ln(x² + 1) + C." },
    { d:1, e:"Que vaut ∫₀¹ x dx ?", r:"1/2",
      c:"Une primitive de x est x²/2.\n\n[x²/2]₀¹ = 1/2 − 0 = 1/2." },
    { d:1, e:"Résoudre l'équation y′ = y.", r:"y = C·eˣ",
      c:"L'équation y′ = ay a pour solutions y = C·e^(ax).\n\nIci a = 1, donc y = C·eˣ." },
    { d:1, e:"Résoudre y′ = 3y.", r:"y = C·e^(3x)",
      c:"Forme y′ = ay avec a = 3.\n\nSolutions : y = C·e^(3x)." },
    { d:1, e:"Déterminer une primitive de f(x) = 3x².", r:"F(x) = x³ + C",
      c:"∫3x² dx = 3 × x³/3 = x³.\n\nF(x) = x³ + C." },
    { d:1, e:"Que vaut ∫₀^π sin x dx ?", r:"2",
      c:"Une primitive de sin est −cos.\n\n[−cos x]₀^π = −cos π − (−cos 0) = −(−1) + 1 = 2." },
    { d:1, e:"Résoudre y′ = 2y + 6.", r:"y = C·e^(2x) − 3",
      c:"Solution particulière constante : y = −b/a = −6/2 = −3.\n\nSolutions générales : y = C·e^(2x) − 3." },
    { d:1, e:"Quelle est la valeur moyenne de f(x) = x sur [0 ; 2] ?", r:"1",
      c:"Valeur moyenne = (1/(b−a))·∫ₐᵇ f.\n\n= (1/2)·∫₀² x dx = (1/2)·[x²/2]₀² = (1/2)·2 = 1." },
    { d:1, e:"Déterminer une primitive de f(x) = cos(2x).", r:"F(x) = sin(2x)/2 + C",
      c:"On reconnaît u′·cos u à un facteur près, avec u = 2x et u′ = 2.\n\n∫cos(2x) dx = (1/2)·sin(2x) + C." },
    { d:2, e:"Déterminer une primitive de f(x) = x·e^(x²).", r:"F(x) = (1/2)e^(x²) + C",
      c:"u = x², donc u′ = 2x.\n\nf(x) = (1/2)·2x·e^(x²) = (1/2)·u′·e^u.\n\nF(x) = (1/2)e^(x²) + C." },
    { d:2, e:"Résoudre y′ = −2y avec y(0) = 7.", r:"y = 7·e^(−2x)",
      c:"Solutions générales : y = C·e^(−2x).\n\nCondition : y(0) = C = 7.\n\nSolution : y = 7·e^(−2x)." },
    { d:2, e:"Déterminer une primitive de f(x) = 1/(3x + 2).", r:"F(x) = (1/3)ln|3x + 2| + C",
      c:"Formule : ∫dx/(ax+b) = (1/a)·ln|ax+b| + C.\n\nIci a = 3, donc F(x) = (1/3)·ln|3x+2| + C." },
    { d:2, e:"Calculer ∫₀¹ (2x + 1) dx.", r:"2",
      c:"Une primitive est F(x) = x² + x.\n\nF(1) = 1 + 1 = 2, F(0) = 0.\n\n∫₀¹ (2x+1) dx = 2." },
    { d:2, e:"Écrire cos²x sous forme linéarisée.", r:"(1 + cos 2x)/2",
      c:"Formule de duplication : cos(2x) = 2cos²x − 1.\n\nDonc 2cos²x = 1 + cos 2x, soit cos²x = (1 + cos 2x)/2." },
    { d:2, e:"Déterminer une primitive de f(x) = x²·e^(x³).", r:"F(x) = (1/3)e^(x³) + C",
      c:"u = x³, donc u′ = 3x².\n\nf(x) = (1/3)·3x²·e^(x³) = (1/3)·u′·e^u.\n\nF(x) = (1/3)e^(x³) + C." },
    { d:2, e:"Calculer la valeur moyenne de f(x) = x² sur [0 ; 3].", r:"3",
      c:"m = (1/3)·∫₀³ x² dx = (1/3)·[x³/3]₀³ = (1/3)·9 = 3." },
    { d:2, e:"Résoudre y′ = 5y − 10 avec y(0) = 4.", r:"y = 2·e^(5x) + 2",
      c:"Solution particulière constante : y = −b/a = 10/5 = 2.\n\nSolutions générales : y = C·e^(5x) + 2.\n\nCondition : y(0) = C + 2 = 4, donc C = 2.\n\nSolution : y = 2·e^(5x) + 2." },
    { d:2, e:"Calculer ∫₁² (1/x) dx.", r:"ln 2",
      c:"Une primitive de 1/x est ln x (on est sur les positifs).\n\n[ln x]₁² = ln 2 − ln 1 = ln 2 − 0 = ln 2 ≈ 0,693." },
    { d:2, e:"Déterminer une primitive de f(x) = sin(3x).", r:"F(x) = −cos(3x)/3 + C",
      c:"u = 3x, donc u′ = 3.\n\nf(x) = (1/3)·3sin(3x).\n\nUne primitive de u′·sin u est −cos u.\n\nDonc F(x) = (1/3)·(−cos(3x)) = −cos(3x)/3 + C." },
    { d:2, e:"Calculer l'aire entre la courbe y = x² et l'axe des abscisses sur [0 ; 2].", r:"8/3",
      c:"f est positive sur [0 ; 2], donc l'aire est l'intégrale.\n\n∫₀² x² dx = [x³/3]₀² = 8/3." },
    { d:3, e:"Calculer ∫₀¹ x·eˣ dx par intégration par parties.", r:"1",
      c:"On pose u′ = eˣ (donc u = eˣ) et v = x (donc v′ = 1).\n\n∫ x·eˣ dx = [x·eˣ] − ∫ eˣ dx = x·eˣ − eˣ = eˣ(x − 1).\n\nDe 0 à 1 : [eˣ(x−1)]₀¹ = 0 − (−1) = 1." },
    { d:3, e:"Calculer ∫₁ᵉ ln x dx par intégration par parties.", r:"1",
      c:"On pose u′ = 1 (donc u = x) et v = ln x (donc v′ = 1/x).\n\n∫ ln x dx = [x·ln x] − ∫ x·(1/x) dx = x·ln x − ∫ 1 dx = x·ln x − x.\n\nDe 1 à e : [x ln x − x]₁ᵉ = (e·1 − e) − (0 − 1) = 0 + 1 = 1." },
    { d:3, e:"Résoudre l'équation y′ = 2y + 4 avec y(0) = 0.", r:"y = −2e^(2x) + 2",
      c:"Solution particulière : y = −4/2 = −2.\n\nSolutions générales : y = C·e^(2x) − 2.\n\nCondition : y(0) = C − 2 = 0, donc C = 2.\n\nSolution : y = 2e^(2x) − 2 = −2e^(2x) + 2.\n\nRevérifions : y = 2e^(2x) − 2." },
    { d:3, e:"Déterminer une primitive de f(x) = x/(√(x² + 4)).", r:"F(x) = √(x² + 4) + C",
      c:"On reconnaît u′/√u à un facteur près, avec u = x² + 4 et u′ = 2x.\n\nf(x) = (1/2)·2x/√(x²+4) = (1/2)·u′/√u.\n\nUne primitive de u′/√u est 2√u.\n\nDonc F(x) = (1/2)·2√(x²+4) = √(x² + 4) + C." },
    { d:3, e:"Calculer ∫₀^(π/2) x·sin x dx.", r:"1",
      c:"Intégration par parties : u′ = sin x (donc u = −cos x) et v = x (donc v′ = 1).\n\n∫ x·sin x dx = [−x·cos x] − ∫ (−cos x) dx = −x·cos x + sin x.\n\nDe 0 à π/2 :\n[−x cos x + sin x]₀^(π/2) = (−0 + 1) − (0 + 0) = 1." },
    { d:3, e:"Résoudre y′ = y avec y(1) = 2.", r:"y = (2/e)·eˣ",
      c:"Solutions générales : y = C·eˣ.\n\nCondition y(1) = C·e¹ = 2, donc C = 2/e.\n\nSolution : y = (2/e)·eˣ = 2e^(x−1).\n\nVérification : y(1) = 2e⁰ = 2 ✓" },
    { d:3, e:"Calculer l'aire entre les courbes y = x et y = x² sur [0 ; 1].", r:"1/6",
      c:"Sur [0 ; 1], x ≥ x² (car x − x² = x(1−x) ≥ 0).\n\nAire = ∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = (1/2 − 1/3) − 0 = 1/6." },
    { d:3, e:"Un circuit RC a une charge q(t) vérifiant q′ = −q/(RC) + E/R. Déterminer q(t) sachant q(0) = 0.", r:"q(t) = CE(1 − e^(−t/RC))",
      c:"L'équation s'écrit q′ = (−1/RC)·q + E/R.\n\nC'est de la forme y′ = ay + b avec a = −1/RC et b = E/R.\n\nSolution particulière constante : q = −b/a = −(E/R)/(−1/RC) = CE.\n\nSolutions générales : q = K·e^(−t/RC) + CE.\n\nCondition q(0) = K + CE = 0, donc K = −CE.\n\nSolution : q(t) = CE(1 − e^(−t/RC)).\n\n<b>Interprétation</b> — La charge tend vers CE quand t → +∞ : le condensateur se charge progressivement, avec le régime transitoire en e^(−t/RC)." },
    { d:3, e:"Montrer que ∫₀¹ x² dx = 1/3 en utilisant la méthode des rectangles (approximation).", r:"Valeur exacte 1/3",
      c:"Une primitive de x² est x³/3.\n\n∫₀¹ x² dx = [x³/3]₀¹ = 1/3 − 0 = 1/3.\n\n<b>Vérification par encadrement</b> — En découpant en n rectangles d'égale largeur, la somme des aires inférieures et supérieures encadre 1/3.\n\nPour n → +∞, les deux sommes convergent vers 1/3. C'est la définition de l'intégrale de Riemann." },
    { d:3, e:"Calculer ∫₀² (x² + 1) dx.", r:"14/3",
      c:"Une primitive est x³/3 + x.\n\n[x³/3 + x]₀² = (8/3 + 2) − 0 = 8/3 + 6/3 = 14/3 ≈ 4,667." },
    { d:3, e:"Montrer que la fonction f(t) = A·e^(kt) est solution de y′ = ky.", r:"Démonstration",
      c:"f(t) = A·e^(kt).\n\nCalculons f′(t) : la dérivée de e^(kt) est k·e^(kt).\n\nDonc f′(t) = A·k·e^(kt) = k·(A·e^(kt)) = k·f(t).\n\nLa fonction vérifie bien f′ = k·f ✓\n\n<b>Interprétation</b> — Le taux de croissance de f est proportionnel à f lui-même. C'est le modèle de toute croissance exponentielle." }
  ]
},
{
  id:"tle-grands-nombres", niveau:"Tle", titre:"Tle · Loi des grands nombres et échantillonnage", temps:"20 min",
  resume:"Fluctuation d'échantillonnage, intervalle de confiance, loi des grands nombres.",
  lecons:[
    { titre:"Fluctuation et intervalles de confiance", contenu:`
      <h3>1. Fluctuation d'échantillonnage</h3>
      <p>Si on répète une expérience un grand nombre de fois, la fréquence observée d'un événement se rapproche de sa probabilité théorique — mais elle <b>fluctue</b> autour.</p>
      <div class="box"><b>Exemple concret</b> — Si on lance 100 fois une pièce équilibrée, on n'obtient pas exactement 50 piles. On peut obtenir 47, 53, ou même 42. C'est la fluctuation d'échantillonnage.</div>

      <h3>2. Intervalle de fluctuation</h3>
      <p>Pour une taille d'échantillon n et une proportion p, on admet que la fréquence observée f se situe, avec une probabilité d'environ 95 %, dans l'intervalle :</p>
      <div class="formula">I = [p − 1/√n ; p + 1/√n]</div>
      <div class="box warn"><b>Conditions d'application</b> — Cette formule exige n ≥ 25, et 0,2 ≤ p ≤ 0,8. En dehors, il faut utiliser la formule exacte avec √(p(1−p)/n).</div>

      <h3>3. Intervalle de confiance</h3>
      <p>C'est la démarche inverse : connaissant la fréquence observée f sur un échantillon, on veut estimer la probabilité p inconnue.</p>
      <div class="formula">Intervalle de confiance à 95 % :
[f − 1/√n ; f + 1/√n]</div>
      <div class="box"><b>Le facteur 1/√n</b> — Pour diviser l'intervalle par 2, il faut multiplier la taille de l'échantillon par 4. C'est la loi fondamentale de l'estimation.</div>

      <h3>4. Loi des grands nombres</h3>
      <p>C'est le théorème fondamental de la théorie des probabilités : quand n tend vers l'infini, la fréquence observée converge vers la probabilité théorique.</p>
      <div class="formula">Pour tout ε &gt; 0, P(|fₙ − p| &gt; ε) → 0 quand n → +∞</div>
      <p>Autrement dit, les écarts importants entre fréquence et probabilité deviennent de plus en plus improbables.</p>

      <h3>5. Prise de décision</h3>
      <p>L'intervalle de fluctuation permet de tester une hypothèse : si la fréquence observée tombe <b>hors</b> de l'intervalle, on rejette l'hypothèse au seuil de 95 %.</p>
      <div class="box"><b>Vocabulaire</b> — On parle de « rejet au seuil de 5 % ». Cela ne signifie pas que l'hypothèse est fausse, mais que les données observées la rendent très improbable.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Sur 400 lancers d'un dé, on obtient 6 dans 80 cas, soit une fréquence de 0,20. Le dé est-il truqué ?</p>
      <ul>
        <li>Si le dé est équilibré, p = 1/6 ≈ 0,167</li>
        <li>Conditions vérifiées : n = 400 ≥ 25, et on est dans la zone de validité</li>
        <li>Intervalle de fluctuation : [0,167 − 1/20 ; 0,167 + 1/20] = [0,117 ; 0,217]</li>
        <li>La fréquence observée 0,20 est bien dans cet intervalle</li>
      </ul>
      <p><b>Conclusion :</b> on ne peut pas rejeter l'hypothèse que le dé soit équilibré. La différence observée est compatible avec la fluctuation d'échantillonnage.</p>
    ` },
    { titre:"Estimation et applications", contenu:`
      <h3>1. Estimation d'une proportion</h3>
      <p>Pour estimer une proportion p inconnue dans une population, on prélève un échantillon de taille n, on calcule la fréquence f observée, et on donne l'intervalle de confiance.</p>
      <div class="formula">p ∈ [f − 1/√n ; f + 1/√n]      (au niveau de confiance 95 %)</div>

      <h3>2. Choisir la taille de l'échantillon</h3>
      <p>L'amplitude de l'intervalle est 2/√n. Pour obtenir une précision donnée, on en déduit n.</p>
      <div class="formula">Pour une amplitude de 0,02 (soit ±1 %) :
2/√n = 0,02 ⟹ √n = 100 ⟹ n = 10 000</div>
      <div class="box"><b>Conséquence pratique</b> — Pour un sondage à ±1 %, il faut interroger 10 000 personnes. C'est pour cela que les sondages à 1000 personnes annoncent une marge d'environ ±3 %.</div>

      <h3>3. Marge d'erreur d'un sondage</h3>
      <p>Pour 1000 personnes, la marge est 1/√1000 ≈ 0,032, soit environ ±3,2 %.</p>
      <div class="box warn"><b>Ce que la marge ne dit pas</b> — Elle mesure l'incertitude due à l'échantillonnage, pas les biais de la méthode (question mal posée, échantillon non représentatif). Un sondage biaisé reste faux, même avec une faible marge.</div>

      <h3>4. Simulation et estimation de π</h3>
      <p>La méthode de Monte-Carlo permet d'estimer une quantité par simulation aléatoire. Pour π, on tire des points au hasard dans un carré et on compte ceux qui tombent dans le quart de disque inscrit.</p>
      <div class="formula">π ≈ 4 × (nombre de points dans le disque) / (nombre total de points)</div>

      <h3>5. Précision d'une simulation</h3>
      <p>Comme toute estimation par échantillonnage, la simulation donne une approximation qui fluctue. Pour améliorer la précision, il faut augmenter le nombre de tirages.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Dans un échantillon de 500 personnes, 180 déclarent préférer le produit A. Donner un intervalle de confiance à 95 % pour la proportion réelle.</p>
      <ul>
        <li>Fréquence observée : f = 180/500 = 0,36</li>
        <li>Marge : 1/√500 ≈ 0,045</li>
        <li>Intervalle : [0,36 − 0,045 ; 0,36 + 0,045] = [0,315 ; 0,405]</li>
      </ul>
      <p><b>Interprétation :</b> la proportion réelle de personnes préférant A est très probablement comprise entre 31,5 % et 40,5 %.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — la fluctuation d'échantillonnage et les intervalles de confiance, puis l'estimation et ses applications concrètes.</div>`,
  exercices:[
    { d:1, e:"Que vaut la loi des grands nombres ?", r:"La fréquence se rapproche de la probabilité",
      c:"Quand on répète une expérience un grand nombre de fois, la fréquence observée converge vers la probabilité théorique.\n\nC'est le théorème fondamental de la théorie des probabilités." },
    { d:1, e:"Calculer 1/√100.", r:"0,1",
      c:"√100 = 10, donc 1/√100 = 1/10 = 0,1.\n\nC'est la marge d'erreur pour un échantillon de 100." },
    { d:1, e:"Calculer 1/√400.", r:"0,05",
      c:"√400 = 20, donc 1/√400 = 1/20 = 0,05." },
    { d:1, e:"Pour une fréquence observée de 0,5 sur 100 personnes, quel est le centre de l'intervalle de confiance ?", r:"0,5",
      c:"L'intervalle de confiance est centré sur la fréquence observée.\n\nDonc le centre vaut 0,5." },
    { d:1, e:"Quelle est l'amplitude de l'intervalle de confiance pour n = 100 ?", r:"0,2",
      c:"L'amplitude vaut 2/√n.\n\nPour n = 100 : 2/10 = 0,2." },
    { d:1, e:"Le fait d'obtenir 53 piles sur 100 lancers remet-il en cause l'équilibre de la pièce ?", r:"Non",
      c:"C'est la fluctuation d'échantillonnage.\n\nSur 100 lancers, une fréquence de 0,53 est parfaitement plausible pour une pièce équilibrée.\n\nL'intervalle de fluctuation pour p = 0,5 et n = 100 est [0,4 ; 0,6]." },
    { d:1, e:"Que signifie « intervalle de confiance à 95 % » ?", r:"La vraie valeur y est avec une probabilité d'environ 95 %",
      c:"Cela signifie que la méthode de construction de l'intervalle capture la vraie valeur dans environ 95 % des cas, si on répétait l'échantillonnage." },
    { d:1, e:"Pour diviser la marge d'erreur par 2, il faut multiplier l'échantillon par :", r:"4",
      c:"La marge vaut 1/√n.\n\nPour la diviser par 2, il faut que √n double, donc que n quadruple.\n\nC'est la loi fondamentale de l'estimation." },
    { d:1, e:"Une fréquence observée hors de l'intervalle de fluctuation signifie :", r:"On rejette l'hypothèse au seuil de 95 %",
      c:"Si la fréquence tombe hors de l'intervalle, les données observées sont très improbables sous l'hypothèse testée.\n\nOn rejette alors l'hypothèse au seuil de 5 %." },
    { d:1, e:"Calculer 1/√10000.", r:"0,01",
      c:"√10000 = 100, donc 1/√10000 = 1/100 = 0,01.\n\nC'est la marge d'erreur pour un échantillon de 10 000 personnes." },
    { d:2, e:"Sur 500 lancers d'une pièce, on obtient 260 piles. Donner la fréquence observée.", r:"0,52",
      c:"f = 260/500 = 0,52." },
    { d:2, e:"Pour la situation précédente, calculer la marge d'erreur.", r:"≈ 0,045",
      c:"Marge = 1/√500 ≈ 1/22,36 ≈ 0,045." },
    { d:2, e:"Pour la situation précédente, donner l'intervalle de confiance à 95 %.", r:"[0,475 ; 0,565]",
      c:"Intervalle : [0,52 − 0,045 ; 0,52 + 0,045] = [0,475 ; 0,565].\n\nLa probabilité réelle de pile est très probablement dans cet intervalle." },
    { d:2, e:"Pour un échantillon de 1000 personnes, quelle est la marge d'erreur ?", r:"≈ 0,032",
      c:"Marge = 1/√1000 ≈ 1/31,62 ≈ 0,0316.\n\nSoit environ ±3,2 %, la marge typique des sondages." },
    { d:2, e:"Un dé est équilibré avec p = 1/6. Quel est l'intervalle de fluctuation pour n = 900 ?", r:"[1/6 − 1/30 ; 1/6 + 1/30]",
      c:"Marge = 1/√900 = 1/30 ≈ 0,033.\n\nIntervalle : [0,167 − 0,033 ; 0,167 + 0,033] = [0,134 ; 0,200].\n\nSoit [1/6 − 1/30 ; 1/6 + 1/30]." },
    { d:2, e:"Que faut-il vérifier avant d'utiliser l'intervalle de fluctuation simplifié ?", r:"n ≥ 25 et 0,2 ≤ p ≤ 0,8",
      c:"Ces conditions garantissent la validité de l'approximation [p − 1/√n ; p + 1/√n].\n\nEn dehors, il faut utiliser la formule exacte avec √(p(1−p)/n)." },
    { d:2, e:"Sur 1000 personnes interrogées, 420 préfèrent le produit A. Donner l'intervalle de confiance.", r:"[0,388 ; 0,452]",
      c:"f = 420/1000 = 0,42.\n\nMarge = 1/√1000 ≈ 0,032.\n\nIntervalle : [0,42 − 0,032 ; 0,42 + 0,032] = [0,388 ; 0,452].\n\nSoit environ [38,8 % ; 45,2 %]." },
    { d:2, e:"Montrer que doubler l'échantillon divise la marge par √2.", r:"Démonstration",
      c:"La marge vaut 1/√n.\n\nPour un échantillon de taille 2n, la marge vaut 1/√(2n) = 1/(√2 · √n).\n\nLe rapport entre les deux marges :\n(1/√(2n)) / (1/√n) = √n/√(2n) = 1/√2\n\nLa marge est donc divisée par √2 ≈ 1,414.\n\n<b>Conséquence</b> — Pour diviser la marge par 2, il faut quadrupler l'échantillon, pas le doubler." },
    { d:2, e:"Dans une ville, 15 % des habitants ont les yeux bleus. Sur un échantillon de 400 habitants, quel intervalle contient la fréquence observée dans 95 % des cas ?", r:"[0,10 ; 0,20]",
      c:"Marge = 1/√400 = 1/20 = 0,05.\n\nIntervalle : [0,15 − 0,05 ; 0,15 + 0,05] = [0,10 ; 0,20].\n\nSoit entre 10 % et 20 %." },
    { d:2, e:"Sur 625 élèves, 375 viennent en bus. Donner l'intervalle de confiance à 95 %.", r:"[0,56 ; 0,64]",
      c:"f = 375/625 = 0,60.\n\nMarge = 1/√625 = 1/25 = 0,04.\n\nIntervalle : [0,56 ; 0,64]." },
    { d:2, e:"Un sondage donne 52 % d'intentions de vote avec une marge de 3 %. Peut-on affirmer que le candidat est majoritaire ?", r:"Non",
      c:"L'intervalle de confiance est [0,49 ; 0,55].\n\nComme 0,50 est dans cet intervalle, on ne peut pas exclure que le candidat soit à égalité ou minoritaire.\n\n<b>Le point important</b> — Une estimation ponctuelle supérieure à 50 % ne suffit pas si l'intervalle contient 50 %." },
    { d:3, e:"Montrer que la marge d'erreur pour n = 10000 est de 1 %.", r:"Démonstration",
      c:"Marge = 1/√10000.\n\nOr √10000 = 100 (car 100² = 10000).\n\nDonc marge = 1/100 = 0,01 = 1 %.\n\n<b>Application</b> — Pour un sondage à ±1 %, il faut interroger 10 000 personnes. C'est pourquoi la plupart des sondages se contentent de 1000 personnes et d'une marge de ±3 %." },
    { d:3, e:"Sur 2500 tirages, la méthode de Monte-Carlo estime π à 3,13. Quelle est la précision attendue ?", r:"≈ ±0,02",
      c:"La précision de la méthode dépend de 1/√n.\n\nPour n = 2500 : 1/√2500 = 1/50 = 0,02.\n\nLa précision attendue est d'environ ±0,02.\n\nOr 3,13 est à 0,01 de π ≈ 3,1416 : c'est dans la marge attendue." },
    { d:3, e:"Un médicament guérit 70 % des patients. Sur 100 patients, quelle plage de guérisons peut-on observer dans 95 % des cas ?", r:"[60 ; 80] patients",
      c:"Marge sur la fréquence : 1/√100 = 0,10.\n\nIntervalle de fréquence : [0,60 ; 0,80].\n\nEn nombre de patients : [60 ; 80].\n\n<b>Interprétation</b> — Il serait normal d'observer entre 60 et 80 guérisons. Un résultat à 55 guérisons serait en revanche très improbable et remettrait en cause le taux annoncé." },
    { d:3, e:"Montrer que la loi des grands nombres justifie la définition fréquentiste de la probabilité.", r:"Démonstration",
      c:"La loi des grands nombres affirme que la fréquence observée fₙ converge vers la probabilité p quand n → +∞.\n\nCela signifie que pour tout ε &gt; 0 :\nP(|fₙ − p| &gt; ε) → 0\n\n<b>Conséquence conceptuelle</b> — Cette convergence justifie l'interprétation fréquentiste : la probabilité d'un événement est la limite de sa fréquence d'apparition sur un grand nombre de répétitions.\n\nC'est cette propriété qui rend les sondages, les assurances et les simulations fiables — à condition que l'échantillon soit suffisamment grand." },
    { d:3, e:"Pourquoi la marge d'erreur ne suffit-elle pas à juger de la qualité d'un sondage ?", r:"À cause des biais",
      c:"La marge d'erreur mesure uniquement l'incertitude liée à l'<b>échantillonnage aléatoire</b>.\n\nElle ne dit rien des autres sources d'erreur :\n— un échantillon non représentatif (recrutement en ligne excluant les non-connectés)\n— des questions orientées\n— des non-réponses (les personnes qui refusent de répondre peuvent avoir des opinions différentes)\n\nUn sondage avec ±2 % de marge mais un échantillon biaisé peut être complètement faux." },
    { d:3, e:"Sur 1600 personnes, 880 ont répondu « oui ». L'intervalle de confiance contient-il 0,60 ?", r:"Oui, [0,525 ; 0,575] contient... non",
      c:"Reprenons le calcul.\n\nf = 880/1600 = 0,55.\n\nMarge = 1/√1600 = 1/40 = 0,025.\n\nIntervalle : [0,55 − 0,025 ; 0,55 + 0,025] = [0,525 ; 0,575].\n\nOr 0,60 n'est pas dans cet intervalle.\n\n<b>Conclusion</b> — Non, l'intervalle de confiance ne contient pas 0,60. Si on testait l'hypothèse p = 0,60, on la rejetterait au seuil de 5 %." },
    { d:3, e:"Calculer la taille d'échantillon nécessaire pour une marge d'erreur de 2 %.", r:"n = 2500",
      c:"On veut 1/√n = 0,02.\n\nDonc √n = 1/0,02 = 50.\n\nEt n = 50² = 2500.\n\nIl faut interroger 2500 personnes pour une marge de ±2 %." },
    { d:3, e:"Une usine produit 3 % de pièces défectueuses. Sur un lot de 1000 pièces, quelle plage de défectueuses est attendue ?", r:"De 0 à 60 environ",
      c:"Marge = 1/√1000 ≈ 0,032.\n\nIntervalle de fréquence : [0,03 − 0,032 ; 0,03 + 0,032] = [−0,002 ; 0,062].\n\nComme une fréquence ne peut être négative, on borne à 0 : [0 ; 0,062].\n\nEn nombre de pièces : de 0 à environ 62.\n\n<b>Attention</b> — Ici p = 0,03 est hors de la zone de validité (0,2 ≤ p ≤ 0,8). La formule simplifiée est peu fiable ; il faudrait utiliser la forme exacte √(p(1−p)/n)." },
    { d:3, e:"Montrer que l'intervalle de confiance se resserre quand n augmente.", r:"Démonstration",
      c:"L'intervalle de confiance est [f − 1/√n ; f + 1/√n].\n\nSon amplitude vaut 2/√n.\n\nQuand n augmente, √n augmente, donc 2/√n diminue.\n\nL'intervalle se resserre autour de f.\n\n<b>Limite</b> — Quand n → +∞, l'amplitude tend vers 0 : l'intervalle se réduit à la fréquence observée, qui tend elle-même vers la probabilité réelle par la loi des grands nombres.\n\nC'est ce qui rend les grands échantillons précieux." },
    { d:3, e:"Deux sondages donnent 45 % et 49 % pour le même candidat, avec des marges de ±3 %. Sont-ils contradictoires ?", r:"Non, ils sont compatibles",
      c:"Premier sondage : intervalle [0,42 ; 0,48].\nSecond sondage : intervalle [0,46 ; 0,52].\n\nCes deux intervalles se recoupent sur [0,46 ; 0,48].\n\nLa vraie valeur pourrait être 0,47, compatible avec les deux sondages.\n\n<b>Leçon</b> — Deux estimations différentes ne sont pas forcément contradictoires : il faut comparer les intervalles, pas les valeurs ponctuelles." },
    { d:3, e:"Un test de dépistage appliqué à 10000 personnes donne 250 positifs, alors que la prévalence attendue est de 1 %. Que conclure ?", r:"L'hypothèse est rejetée",
      c:"Fréquence observée : f = 250/10000 = 0,025 = 2,5 %.\n\nHypothèse testée : p = 1 % = 0,01.\n\nMarge = 1/√10000 = 0,01.\n\nIntervalle de fluctuation : [0,01 − 0,01 ; 0,01 + 0,01] = [0 ; 0,02].\n\nLa fréquence observée 0,025 est <b>hors</b> de cet intervalle.\n\nConclusion : on rejette l'hypothèse d'une prévalence de 1 % au seuil de 5 %.\n\n<b>Réserve</b> — Comme p = 0,01 est hors de la zone de validité de la formule simplifiée, le résultat demande confirmation par un calcul exact." },
    { d:3, e:"Expliquer pourquoi une simulation de Monte-Carlo donne un résultat différent à chaque exécution.", r:"À cause du hasard",
      c:"Chaque exécution utilise une suite de nombres aléatoires différente.\n\nLes points tirés ne sont jamais les mêmes, donc le comptage varie.\n\nC'est exactement la fluctuation d'échantillonnage : la fréquence observée fluctue autour de la valeur théorique.\n\n<b>Conséquence</b> — Pour obtenir une estimation stable, il faut augmenter le nombre de tirages : la marge d'erreur décroît comme 1/√n." }
  ]
}
];

/* ---------- EXPORT ---------- */
window.MATHSLY_TLE = { chapitres: TLE_CHAPITRES, qcm: [] };
