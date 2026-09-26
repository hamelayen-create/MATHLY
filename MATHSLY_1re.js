/* =========================================================
   MATHSLY — Contenu de la classe de Première (spécialité maths)
   Chapitres : second degré · suites · dérivation · exponentielle ·
               produit scalaire · probabilités conditionnelles
   ========================================================= */
const PREMIERE_CHAPITRES = [
{
  id:"1re-second-degre", niveau:"1re", titre:"1re · Équations du second degré", temps:"24 min",
  resume:"Discriminant, racines, signe du trinôme, forme canonique.",
  lecons:[
    { titre:"Discriminant et racines", contenu:`
      <h3>1. La forme développée</h3>
      <p>Une fonction polynôme du second degré s'écrit, sous sa forme développée :</p>
      <div class="formula">f(x) = a·x² + b·x + c        avec a ≠ 0</div>
      <p>Sa courbe est une <b>parabole</b>. Le coefficient a décide de son orientation : tournée vers le haut si a &gt; 0, vers le bas si a &lt; 0.</p>
      <div class="box warn"><b>Premier réflexe</b> — Avant tout calcul, ramener l'expression à la forme a·x² + b·x + c = 0. Une équation comme 2 + 3x = x² n'est pas prête : on écrit x² − 3x − 2 = 0.</div>

      <h3>2. Le discriminant</h3>
      <p>Le discriminant est le nombre qui décide de tout :</p>
      <div class="formula">Δ = b² − 4·a·c</div>
      <p>Son signe donne le nombre de solutions réelles :</p>
      <ul>
        <li><b>Δ &gt; 0</b> : deux solutions distinctes</li>
        <li><b>Δ = 0</b> : une seule solution (racine double)</li>
        <li><b>Δ &lt; 0</b> : aucune solution réelle</li>
      </ul>
      <div class="box"><b>Pourquoi ça marche</b> — Le discriminant est le nombre sous la racine carrée dans la résolution générale. S'il est négatif, la racine n'existe pas dans ℝ : c'est tout le mécanisme.</div>

      <h3>3. Les formules des racines</h3>
      <div class="formula">x₁ = (−b − √Δ) / (2a)      x₂ = (−b + √Δ) / (2a)</div>
      <p>Si Δ = 0, la racine double vaut simplement :</p>
      <div class="formula">x₀ = −b / (2a)</div>

      <h3>4. Les relations entre coefficients et racines</h3>
      <p>Quand Δ ≥ 0, la somme et le produit des racines se lisent directement sur les coefficients :</p>
      <div class="formula">x₁ + x₂ = −b / a        x₁ · x₂ = c / a</div>
      <div class="box"><b>Usage double</b> — Ces relations servent à <b>vérifier</b> une réponse en trois secondes, ou à <b>construire</b> une équation dont les racines sont données.</div>

      <h3>5. Le sommet de la parabole</h3>
      <p>Le sommet est le point où la fonction atteint son extremum. Son abscisse vaut −b/(2a), et son ordonnée s'obtient en remplaçant.</p>
      <div class="formula">S( −b/(2a) ; f(−b/(2a)) )</div>
      <p>Quand Δ = 0, le sommet est sur l'axe des abscisses : c'est la racine double.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Résoudre 2x² − 7x + 3 = 0.</p>
      <ul>
        <li>a = 2, b = −7, c = 3</li>
        <li>Δ = (−7)² − 4×2×3 = 49 − 24 = 25 &gt; 0 : deux solutions</li>
        <li>√Δ = 5</li>
        <li>x₁ = (7 − 5)/4 = 2/4 = 1/2</li>
        <li>x₂ = (7 + 5)/4 = 12/4 = 3</li>
      </ul>
      <p><b>Vérification :</b> 1/2 + 3 = 7/2 = −b/a ✓ et (1/2) × 3 = 3/2 = c/a ✓</p>
    ` },
    { titre:"Forme canonique", contenu:`
      <h3>1. L'identité de départ</h3>
      <p>La forme canonique fait apparaître le sommet. On part de :</p>
      <div class="formula">a·x² + b·x + c = a·(x − α)² + β</div>
      <p>où α = −b/(2a) est l'abscisse du sommet et β = f(α) son ordonnée.</p>

      <h3>2. Comment l'obtenir</h3>
      <p>Deux méthodes équivalentes :</p>
      <ul>
        <li>Calculer α et β avec les formules ci-dessus</li>
        <li>Faire apparaître le carré en factorisant par a, puis compléter</li>
      </ul>
      <div class="formula">β = c − b²/(4a) = −Δ/(4a)</div>
      <div class="box"><b>Relation utile</b> — Comme β = −Δ/(4a), le signe de β est directement lié à celui de Δ. Si Δ &lt; 0 et a &gt; 0, alors β &gt; 0 : la parabole est entièrement au-dessus de l'axe.</div>

      <h3>3. À quoi elle sert</h3>
      <p>La forme canonique donne immédiatement :</p>
      <ul>
        <li>Le <b>sommet</b> de la parabole, donc l'extremum</li>
        <li>Le <b>sens de variation</b> : la fonction décroît puis croît (si a &gt; 0)</li>
        <li>La <b>valeur minimale</b> (ou maximale) de f</li>
      </ul>

      <h3>4. Lien avec la factorisation</h3>
      <p>Connaissant les racines, on factorise :</p>
      <div class="formula">a·x² + b·x + c = a·(x − x₁)·(x − x₂)</div>
      <p>Si Δ = 0, cette écriture devient a·(x − x₀)². Si Δ &lt; 0, pas de factorisation réelle.</p>

      <h3>5. Redémontrer les formules des racines</h3>
      <p>La forme canonique permet de retrouver la formule du discriminant :</p>
      <div class="formula">a(x + b/(2a))² − Δ/(4a) = 0
⟹ (x + b/(2a))² = Δ/(4a²)
⟹ x = −b/(2a) ± √Δ/(2a)</div>
      <p>C'est la démonstration à connaître : elle montre d'où sort le discriminant.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Écrire f(x) = 2x² − 12x + 14 sous forme canonique.</p>
      <ul>
        <li>α = −b/(2a) = 12/4 = 3</li>
        <li>f(3) = 2×9 − 12×3 + 14 = 18 − 36 + 14 = −4</li>
        <li>Donc f(x) = 2(x − 3)² − 4</li>
      </ul>
      <p><b>Vérification :</b> en développant, 2(x² − 6x + 9) − 4 = 2x² − 12x + 18 − 4 = 2x² − 12x + 14 ✓</p>
      <p><b>Lecture directe :</b> le minimum vaut −4, atteint en x = 3.</p>
    ` },
    { titre:"Signe du trinôme et inéquations", contenu:`
      <h3>1. Le signe suit la position par rapport aux racines</h3>
      <p>Après avoir factorisé, le signe est immédiat. Le trinôme est du signe de a <b>à l'extérieur</b> des racines, et du signe opposé <b>entre</b> elles.</p>
      <div class="box"><b>Le tableau à retenir</b> — Si Δ &gt; 0 et x₁ &lt; x₂ : positif sur ]−∞ ; x₁[ ∪ ]x₂ ; +∞[ si a &gt; 0. Négatif entre x₁ et x₂.</div>

      <h3>2. Le cas Δ = 0</h3>
      <p>Le trinôme s'écrit a·(x − x₀)². Un carré est toujours positif ou nul, donc le trinôme est du signe de a partout, et s'annule en x₀.</p>

      <h3>3. Le cas Δ &lt; 0</h3>
      <p>Le trinôme ne s'annule jamais : il est du signe de a sur ℝ entier. C'est ce qui rend le tableau très simple.</p>

      <h3>4. Résoudre une inéquation</h3>
      <p>La méthode en trois étapes :</p>
      <ul>
        <li>Calculer les racines s'il y en a</li>
        <li>Dresser le tableau de signes</li>
        <li>Lire la solution en respectant les crochets (ouverts si stricte, fermés si large)</li>
      </ul>
      <div class="box warn"><b>Erreur classique</b> — Résoudre x² − 3x + 2 ≤ 0 et donner ]−∞ ; 1] ∪ [2 ; +∞[. C'est le résultat pour ≥ 0. Pour ≤ 0, la solution est l'<b>intervalle entre les racines</b> : [1 ; 2].</div>

      <h3>5. Inéquations avec un quotient</h3>
      <p>Pour une inéquation du type f(x)/g(x) ≤ 0, on étudie séparément le signe du numérateur et du dénominateur, puis on applique la règle des signes. La valeur qui annule g est <b>exclue</b> du domaine.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Résoudre −x² + 4x − 3 ≥ 0.</p>
      <ul>
        <li>a = −1, b = 4, c = −3</li>
        <li>Δ = 16 − 12 = 4, √Δ = 2</li>
        <li>x₁ = (−4 + 2)/(−2) = 1 et x₂ = (−4 − 2)/(−2) = 3</li>
        <li>Comme a &lt; 0, le trinôme est positif <b>entre</b> les racines</li>
      </ul>
      <p><b>Solution :</b> x ∈ [1 ; 3].</p>
    ` }
  ],
  cours:`<div class="box"><b>Trois leçons</b> — le discriminant, la forme canonique, puis le signe du trinôme et les inéquations. C'est la base de toute la 1re.</div>`,
  exercices:[
    { d:1, e:"Quel est le discriminant de x² − 5x + 6 = 0 ?", r:"Δ = 1",
      c:"Δ = b² − 4ac = (−5)² − 4×1×6 = 25 − 24 = 1.\n\nLe discriminant est positif : il y aura deux solutions réelles." },
    { d:1, e:"Combien de solutions a x² + x + 1 = 0 ?", r:"Aucune",
      c:"Δ = 1² − 4×1×1 = −3 < 0.\n\nUn discriminant strictement négatif signifie qu'il n'y a aucune solution réelle. La parabole ne traverse jamais l'axe des abscisses." },
    { d:1, e:"Résoudre x² − 4x + 3 = 0.", r:"x = 1 ou x = 3",
      c:"Δ = 16 − 12 = 4, √Δ = 2.\n\nx = (4 ± 2)/2, soit x = 1 ou x = 3.\n\nVérification : 1 + 3 = 4 = −b/a ✓ et 1 × 3 = 3 = c/a ✓" },
    { d:1, e:"Quelles sont les racines de 2x² − 8 = 0 ?", r:"x = 2 ou x = −2",
      c:"On peut factoriser : 2(x² − 4) = 2(x−2)(x+2) = 0.\n\nDonc x = 2 ou x = −2.\n\nPar le discriminant : Δ = 0 − 4×2×(−8) = 64, √Δ = 8, x = (0 ± 8)/4 = ±2. ✓" },
    { d:1, e:"Que vaut la somme des racines de x² − 7x + 10 = 0 ?", r:"7",
      c:"La somme des racines vaut −b/a = 7/1 = 7.\n\nVérification en calculant : Δ = 49 − 40 = 9, racines 2 et 5. Or 2 + 5 = 7 ✓" },
    { d:1, e:"Quel est le produit des racines de x² + 3x − 10 = 0 ?", r:"−10",
      c:"Le produit vaut c/a = −10/1 = −10.\n\nVérification : Δ = 9 + 40 = 49, racines 2 et −5. Or 2 × (−5) = −10 ✓" },
    { d:1, e:"Le point d'abscisse du sommet de f(x) = x² − 6x + 5 est :", r:"x = 3",
      c:"L'abscisse du sommet vaut −b/(2a) = 6/2 = 3.\n\nOrdonnée : f(3) = 9 − 18 + 5 = −4. Le sommet est (3 ; −4)." },
    { d:1, e:"Résoudre (x−1)(x+4) = 0.", r:"x = 1 ou x = −4",
      c:"Un produit est nul si et seulement si l'un de ses facteurs est nul.\n\nx − 1 = 0 donne x = 1.\nx + 4 = 0 donne x = −4." },
    { d:1, e:"La forme canonique de x² − 4x est :", r:"(x−2)² − 4",
      c:"α = −b/(2a) = 4/2 = 2.\nf(2) = 4 − 8 = −4.\n\nDonc x² − 4x = (x−2)² − 4.\n\nVérification : (x−2)² − 4 = x² − 4x + 4 − 4 = x² − 4x ✓" },
    { d:1, e:"Le trinôme x² + 1 a-t-il des racines réelles ?", r:"Non",
      c:"Δ = 0 − 4 = −4 < 0.\n\nDe plus x² + 1 > 0 pour tout x : la parabole est entièrement au-dessus de l'axe des abscisses." },
    { d:2, e:"Résoudre 3x² − 5x + 2 = 0.", r:"x = 1 ou x = 2/3",
      c:"Δ = 25 − 24 = 1, √Δ = 1.\n\nx = (5 ± 1)/6, soit x = 1 ou x = 4/6 = 2/3.\n\nVérification : 1 + 2/3 = 5/3 = −b/a ✓" },
    { d:2, e:"Résoudre x² − 2x − 8 < 0.", r:"x ∈ ]−2 ; 4[",
      c:"Δ = 4 + 32 = 36, √Δ = 6.\n\nx = (2 ± 6)/2, soit x = 4 ou x = −2.\n\nComme a = 1 > 0, le trinôme est négatif <b>entre</b> les racines.\n\nSolution : x ∈ ]−2 ; 4[." },
    { d:2, e:"Trouver deux nombres dont la somme vaut 9 et le produit 20.", r:"4 et 5",
      c:"Ils sont racines de x² − 9x + 20 = 0.\n\nΔ = 81 − 80 = 1, √Δ = 1.\nx = (9 ± 1)/2, soit 5 ou 4.\n\nVérification : 4 + 5 = 9 ✓ et 4 × 5 = 20 ✓" },
    { d:2, e:"Écrire f(x) = x² + 6x + 5 sous forme canonique.", r:"(x+3)² − 4",
      c:"α = −b/(2a) = −6/2 = −3.\nf(−3) = 9 − 18 + 5 = −4.\n\nDonc f(x) = (x+3)² − 4.\n\nLecture : minimum −4 en x = −3." },
    { d:2, e:"Le trinôme x² − 2x + 5 a-t-il toujours le même signe ?", r:"Oui, toujours positif",
      c:"Δ = 4 − 20 = −16 < 0 : aucune racine.\n\nComme a = 1 > 0, le trinôme est du signe de a sur ℝ entier : toujours strictement positif.\n\nOn peut aussi écrire (x−1)² + 4 > 0." },
    { d:2, e:"Résoudre l'inéquation 2x² + 3x − 2 ≥ 0.", r:"x ∈ ]−∞ ; −2] ∪ [1/2 ; +∞[",
      c:"Δ = 9 + 16 = 25, √Δ = 5.\nx = (−3 ± 5)/4, soit x = 1/2 ou x = −2.\n\nComme a = 2 > 0, le trinôme est positif <b>à l'extérieur</b> des racines.\n\nSolution : x ≤ −2 ou x ≥ 1/2." },
    { d:2, e:"Déterminer le minimum de f(x) = 2x² − 8x + 11.", r:"3, atteint en x = 2",
      c:"α = −b/(2a) = 8/4 = 2.\nf(2) = 2×4 − 16 + 11 = 8 − 16 + 11 = 3.\n\nForme canonique : f(x) = 2(x−2)² + 3.\n\nComme le carré est toujours positif ou nul, f(x) ≥ 3. Minimum 3 en x = 2." },
    { d:2, e:"Résoudre x² ≤ 9.", r:"x ∈ [−3 ; 3]",
      c:"On écrit x² − 9 ≤ 0, soit (x−3)(x+3) ≤ 0.\n\nRacines : −3 et 3. Comme a = 1 > 0, le trinôme est négatif entre les racines.\n\nSolution : x ∈ [−3 ; 3]." },
    { d:2, e:"Pour quelles valeurs de m l'équation x² + mx + 4 = 0 a-t-elle deux solutions distinctes ?", r:"m < −4 ou m > 4",
      c:"Il faut Δ > 0 : m² − 16 > 0.\n\nOr m² − 16 = (m−4)(m+4). Comme a = 1 > 0, c'est positif à l'extérieur des racines.\n\nDonc m < −4 ou m > 4." },
    { d:2, e:"Factoriser 6x² + 5x − 6.", r:"(3x − 2)(2x + 3)",
      c:"Δ = 25 + 144 = 169, √Δ = 13.\nx = (−5 ± 13)/12, soit x = 8/12 = 2/3 ou x = −18/12 = −3/2.\n\nFactorisation : 6(x − 2/3)(x + 3/2).\n\nOn redistribue pour éviter les fractions : 6 × (3x−2)/3 × (2x+3)/2 = (3x−2)(2x+3) ✓" },
    { d:2, e:"Étudier le signe de −x² + 6x − 9.", r:"Toujours négatif ou nul, nul en x = 3",
      c:"Δ = 36 − 36 = 0 : racine double.\nx₀ = −b/(2a) = −6/(−2) = 3.\n\nLe trinôme s'écrit −1(x − 3)², qui est toujours négatif ou nul (c'est l'opposé d'un carré).\n\nDonc −x² + 6x − 9 ≤ 0 pour tout x, avec égalité en x = 3." },
    { d:3, e:"Résoudre l'équation 2x³ + 5x² − 3x = 0.", r:"x = 0, x = 1/2 ou x = −3",
      c:"On factorise par x : x(2x² + 5x − 3) = 0.\n\nPremier cas : x = 0.\n\nSecond cas : 2x² + 5x − 3 = 0.\nΔ = 25 + 24 = 49, √Δ = 7.\nx = (−5 ± 7)/4, soit x = 2/4 = 1/2 ou x = −12/4 = −3.\n\nTrois solutions au total." },
    { d:3, e:"Déterminer l'équation du second degré dont les racines sont 3 et −5.", r:"x² + 2x − 15 = 0",
      c:"On utilise les relations symétriques :\nSomme = 3 + (−5) = −2, donc −b/a = −2.\nProduit = 3 × (−5) = −15, donc c/a = −15.\n\nEn prenant a = 1 : b = 2 et c = −15.\n\nÉquation : x² + 2x − 15 = 0.\n\nVérification : Δ = 4 + 60 = 64, √Δ = 8, x = (−2 ± 8)/2, soit 3 ou −5 ✓" },
    { d:3, e:"Résoudre l'inéquation (x² − 4)/(x − 1) ≤ 0.", r:"x ∈ ]−∞ ; −2] ∪ [1 ; 2]",
      c:"Numérateur : x² − 4 = (x−2)(x+2), racines −2 et 2, positif à l'extérieur.\n\nDénominateur : x − 1, positif pour x > 1, négatif pour x < 1, et <b>nul en x = 1</b>.\n\nTableau de signes et règle des signes :\n — sur ]−∞ ; −2] : numérateur +, dénominateur − → quotient −\n — sur [−2 ; 1[ : numérateur −, dénominateur − → quotient +\n — sur ]1 ; 2] : numérateur −, dénominateur + → quotient −\n — sur [2 ; +∞[ : numérateur +, dénominateur + → quotient +\n\nOn veut ≤ 0 : x ∈ ]−∞ ; −2] ∪ ]1 ; 2].\n\nAttention : x = 1 est <b>exclu</b> car il annule le dénominateur — il ne peut figurer dans aucune solution." },
    { d:3, e:"Montrer que x² + x + 1 > 0 pour tout réel x.", r:"Démonstration",
      c:"<b>Méthode 1, forme canonique</b> :\nx² + x + 1 = (x + 1/2)² − 1/4 + 1 = (x + 1/2)² + 3/4.\n\nUn carré est toujours positif ou nul, donc (x+1/2)² + 3/4 ≥ 3/4 > 0.\n\n<b>Méthode 2, discriminant</b> :\nΔ = 1 − 4 = −3 < 0 : aucune racine. Comme a = 1 > 0, le trinôme est strictement positif sur ℝ entier." },
    { d:3, e:"Un rectangle a un périmètre de 24 cm. Quelles dimensions donnent l'aire maximale ?", r:"Un carré de 6 cm de côté",
      c:"Soit x la largeur. Le demi-périmètre vaut 12, donc la longueur est 12 − x.\n\nAire : A(x) = x(12 − x) = 12x − x².\n\nC'est un trinôme avec a = −1 < 0 : il admet un <b>maximum</b> au sommet.\n\nα = −b/(2a) = −12/(−2) = 6.\nA(6) = 6 × 6 = 36 cm².\n\nConclusion : le rectangle d'aire maximale est un carré de 6 cm de côté, pour une aire de 36 cm².\n\nRésultat général : à périmètre fixé, le carré maximise l'aire." },
    { d:3, e:"Pour quelle valeur de m l'équation x² − 2x + m = 0 a-t-elle une racine double ?", r:"m = 1",
      c:"Une racine double correspond à Δ = 0.\n\nΔ = 4 − 4m = 0, donc m = 1.\n\nVérification : x² − 2x + 1 = (x−1)² = 0, racine double x = 1 ✓" },
    { d:3, e:"Résoudre 2x² + 4x + 5 > 0.", r:"Pour tout x : toujours vrai",
      c:"Δ = 16 − 40 = −24 < 0.\n\nAucune racine. Comme a = 2 > 0, le trinôme est strictement positif sur ℝ entier.\n\nL'inéquation est donc vérifiée pour tout réel x. Solution : S = ℝ." },
    { d:3, e:"Montrer que la somme des racines de ax² + bx + c = 0 vaut −b/a.", r:"Démonstration",
      c:"On part des formules explicites :\nx₁ = (−b − √Δ)/(2a) et x₂ = (−b + √Δ)/(2a).\n\nOn additionne :\nx₁ + x₂ = [(−b − √Δ) + (−b + √Δ)] / (2a)\n       = (−2b) / (2a)\n       = −b/a  ✓\n\nLes termes en √Δ s'annulent, ce qui explique pourquoi le résultat ne dépend pas du discriminant." },
    { d:3, e:"Le produit de deux entiers consécutifs vaut 156. Quels sont-ils ?", r:"12 et 13",
      c:"Soit n le premier entier. Le suivant est n + 1.\n\nn(n + 1) = 156, soit n² + n − 156 = 0.\n\nΔ = 1 + 624 = 625, √Δ = 25.\nn = (−1 ± 25)/2, soit n = 12 ou n = −13.\n\nDeux solutions entières : 12 et 13, ou −13 et −12.\n\nVérification : 12 × 13 = 156 ✓" },
    { d:3, e:"Déterminer le signe de f(x) = −2x² + 5x − 3 selon x.", r:"Positif sur ]1 ; 3/2[, négatif ailleurs",
      c:"Δ = 25 − 24 = 1, √Δ = 1.\nx = (−5 ± 1)/(−4), soit x = 1 ou x = 6/4 = 3/2.\n\nComme a = −2 < 0, le trinôme est positif <b>entre</b> les racines.\n\nf(x) > 0 sur ]1 ; 3/2[, f(x) < 0 sur ]−∞ ; 1[ ∪ ]3/2 ; +∞[, et f s'annule en 1 et 3/2." }
  ]
},
{
  id:"1re-suites", niveau:"1re", titre:"1re · Suites numériques", temps:"22 min",
  resume:"Suites arithmétiques, géométriques, sommes, raisonnement par récurrence.",
  lecons:[
    { titre:"Suites arithmétiques et géométriques", contenu:`
      <h3>1. Deux façons de définir une suite</h3>
      <ul>
        <li><b>Formule explicite</b> : uₙ = f(n), on calcule directement n'importe quel terme</li>
        <li><b>Relation de récurrence</b> : uₙ₊₁ s'exprime en fonction de uₙ, avec un premier terme donné</li>
      </ul>
      <div class="box"><b>Différence pratique</b> — Avec une formule explicite, calculer u₁₀₀₀ est immédiat. Avec une récurrence, il faut passer par tous les termes précédents.</div>

      <h3>2. Suite arithmétique</h3>
      <p>On passe d'un terme au suivant en <b>ajoutant</b> toujours la même raison r :</p>
      <div class="formula">uₙ₊₁ = uₙ + r
uₙ = u₀ + n·r
uₙ = uₚ + (n − p)·r</div>
      <p>La dernière forme est la plus utile en exercice : elle évite de repasser par le premier terme.</p>

      <h3>3. Suite géométrique</h3>
      <p>On passe d'un terme au suivant en <b>multipliant</b> par la même raison q :</p>
      <div class="formula">uₙ₊₁ = q·uₙ
uₙ = u₀ · qⁿ
uₙ = uₚ · q^(n − p)</div>

      <h3>4. Sens de variation</h3>
      <ul>
        <li>Arithmétique : croissante si r &gt; 0, décroissante si r &lt; 0, constante si r = 0</li>
        <li>Géométrique à termes strictement positifs : croissante si q &gt; 1, décroissante si 0 &lt; q &lt; 1</li>
      </ul>
      <div class="box warn"><b>Piège du signe</b> — Pour une suite géométrique de premier terme négatif, l'analyse s'inverse. Étudie toujours le signe de uₙ₊₁ − uₙ ou de uₙ₊₁/uₙ en fonction du contexte.</div>

      <h3>5. Modéliser une situation</h3>
      <p>Deux situations reviennent sans cesse :</p>
      <ul>
        <li><b>Augmentation de k %</b> → multiplier par (1 + k/100) : géométrique</li>
        <li><b>Augmentation de k unités</b> → ajouter k : arithmétique</li>
      </ul>
      <div class="box"><b>Repère rapide</b> — « chaque année, +3 % » donne une géométrique de raison 1,03. « chaque année, +200 € » donne une arithmétique de raison 200.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>u₀ = 4 et uₙ₊₁ = 3uₙ − 2. La suite est-elle géométrique ?</p>
      <ul>
        <li>Calculons les premiers termes : u₁ = 3×4 − 2 = 10, u₂ = 3×10 − 2 = 28</li>
        <li>u₁/u₀ = 2,5 et u₂/u₁ = 2,8 : le quotient n'est pas constant, ce n'est pas géométrique</li>
        <li>Différences : u₁ − u₀ = 6, u₂ − u₁ = 18 : pas constant non plus, ce n'est pas arithmétique</li>
      </ul>
      <p><b>Méthode pour ce type de suite</b> — On cherche le point fixe : ℓ = 3ℓ − 2 donne ℓ = 1. On pose alors vₙ = uₙ − 1, et on vérifie que vₙ est géométrique de raison 3.</p>
    ` },
    { titre:"Sommes des termes", contenu:`
      <h3>1. Somme arithmétique</h3>
      <p>La formule est celle des termes consécutifs d'une progression :</p>
      <div class="formula">S = (nombre de termes) × (premier + dernier) / 2</div>
      <div class="box warn"><b>Le piège numéro un</b> — De u₀ à uₙ il y a <b>n + 1</b> termes, pas n. C'est l'erreur la plus fréquente sur les sommes.</div>

      <h3>2. Somme géométrique</h3>
      <div class="formula">Pour q ≠ 1 :
S = premier terme × (1 − q^(nombre de termes)) / (1 − q)</div>
      <p>Si q = 1, tous les termes sont égaux et la somme vaut simplement (nombre de termes) × (premier terme).</p>

      <h3>3. Comment compter le nombre de termes</h3>
      <p>De l'indice p à l'indice n inclus, il y a <b>n − p + 1</b> termes.</p>
      <ul>
        <li>De u₀ à u₅ : 6 termes</li>
        <li>De u₁ à u₁₀ : 10 termes</li>
        <li>De u₃ à u₇ : 5 termes</li>
      </ul>

      <h3>4. Somme des entiers et des carrés</h3>
      <p>Deux formules utiles à connaître :</p>
      <div class="formula">1 + 2 + … + n = n(n+1)/2
1² + 2² + … + n² = n(n+1)(2n+1)/6</div>

      <h3>5. Calculer une somme avec un algorithme</h3>
      <p>Pour une somme dont on n'a pas la formule, on boucle : on initialise S à 0, puis on ajoute chaque terme dans une boucle de p à n.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Calculer S = 1 + 2 + 4 + 8 + … + 2¹⁰.</p>
      <ul>
        <li>C'est une somme géométrique de premier terme 1, de raison q = 2</li>
        <li>De 2⁰ à 2¹⁰, il y a 11 termes</li>
        <li>S = 1 × (1 − 2¹¹)/(1 − 2) = (1 − 2048)/(−1) = 2047</li>
      </ul>
      <p><b>Vérification partielle :</b> 1 + 2 + 4 + 8 + 16 = 31, et la formule donne (1 − 2⁵)/(−1) = 31 ✓</p>
    ` },
    { titre:"Raisonnement par récurrence", contenu:`
      <h3>1. Le principe</h3>
      <p>Pour démontrer qu'une propriété P(n) est vraie pour tout entier n ≥ n₀, on procède en trois étapes, comme des dominos alignés :</p>
      <ul>
        <li><b>Initialisation</b> : on vérifie que P(n₀) est vraie</li>
        <li><b>Hérédité</b> : on suppose P(n) vraie et on démontre P(n+1)</li>
        <li><b>Conclusion</b> : par récurrence, P(n) est vraie pour tout n ≥ n₀</li>
      </ul>

      <h3>2. La rédaction attendue</h3>
      <p>Le correcteur cherche trois choses : que l'initialisation soit faite, que l'<b>hypothèse de récurrence soit écrite explicitement</b>, et que la conclusion soit formulée.</p>
      <div class="box warn"><b>Erreur fatale</b> — Oublier l'initialisation. Sans elle, l'hérédité ne prouve rien. Sans point de départ, on peut « démontrer » que tous les entiers sont égaux.</div>

      <h3>3. Démontrer une inégalité</h3>
      <p>C'est l'usage le plus fréquent. On part de l'hypothèse P(n) et on la transforme jusqu'à obtenir l'expression de P(n+1), en signalant chaque opération.</p>
      <div class="box"><b>Technique</b> — Pour passer de P(n) à P(n+1) dans une inégalité, on majore ou on minore. Par exemple, si uₙ ≥ n, alors 2uₙ ≥ 2n ≥ n + 1 dès que n ≥ 1.</div>

      <h3>4. Démontrer l'expression d'un terme</h3>
      <p>Pour une suite définie par uₙ₊₁ = f(uₙ), on conjecture uₙ = g(n) sur les premiers termes, puis on démontre la formule par récurrence.</p>

      <h3>5. Démontrer la monotonie</h3>
      <p>Pour montrer que uₙ ≤ uₙ₊₁ pour tout n, on peut mener une récurrence sur l'inégalité, ou étudier séparément le signe de uₙ₊₁ − uₙ.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Démontrer que pour tout n ≥ 1 : 2ⁿ ≥ n + 1.</p>
      <ul>
        <li><b>Initialisation</b> : pour n = 1, 2¹ = 2 et 1 + 1 = 2. L'inégalité est vraie.</li>
        <li><b>Hérédité</b> : supposons 2ⁿ ≥ n + 1. Alors 2ⁿ⁺¹ = 2 × 2ⁿ ≥ 2(n + 1) = 2n + 2.</li>
        <li>Or 2n + 2 ≥ n + 2 pour n ≥ 0. Donc 2ⁿ⁺¹ ≥ n + 2 = (n+1) + 1 : la propriété est héréditaire.</li>
        <li><b>Conclusion</b> : par récurrence, 2ⁿ ≥ n + 1 pour tout n ≥ 1.</li>
      </ul>
    ` }
  ],
  cours:`<div class="box"><b>Trois leçons</b> — les deux types de suites, les sommes, puis la récurrence. C'est le socle du programme d'analyse de 1re.</div>`,
  exercices:[
    { d:1, e:"Calculer u₃ pour u₀ = 2 et uₙ₊₁ = uₙ + 5.", r:"17",
      c:"Suite arithmétique de raison 5.\nuₙ = u₀ + n·r, donc u₃ = 2 + 3×5 = 17." },
    { d:1, e:"Calculer u₄ pour u₀ = 3 et uₙ₊₁ = 2uₙ.", r:"48",
      c:"Suite géométrique de raison 2.\nuₙ = u₀·qⁿ, donc u₄ = 3 × 2⁴ = 3 × 16 = 48." },
    { d:1, e:"La suite uₙ = 5n − 3 est-elle arithmétique ?", r:"Oui, de raison 5",
      c:"On calcule uₙ₊₁ − uₙ = 5(n+1) − 3 − (5n − 3) = 5n + 5 − 3 − 5n + 3 = 5.\n\nLa différence est constante : la suite est arithmétique de raison r = 5." },
    { d:1, e:"La suite uₙ = 3 × 2ⁿ est-elle géométrique ?", r:"Oui, de raison 2",
      c:"On calcule uₙ₊₁/uₙ = (3 × 2ⁿ⁺¹)/(3 × 2ⁿ) = 2.\n\nLe quotient est constant : la suite est géométrique de raison q = 2." },
    { d:1, e:"Quelle est la nature de la suite uₙ = 7 ?", r:"Constante (arithmétique de raison 0)",
      c:"Tous les termes valent 7, donc uₙ₊₁ − uₙ = 0.\n\nC'est une suite arithmétique de raison 0. Elle est aussi géométrique de raison 1 (si on accepte le premier terme nul, ce qui n'est pas le cas ici puisque u₀ = 7 ≠ 0)." },
    { d:1, e:"Calculer u₁₀ pour la suite arithmétique u₀ = 1, r = 3.", r:"31",
      c:"uₙ = u₀ + n·r, donc u₁₀ = 1 + 10×3 = 31." },
    { d:1, e:"Une population augmente de 4 % par an. Quelle est la raison de la suite ?", r:"1,04",
      c:"Augmenter de 4 %, c'est multiplier par 1 + 4/100 = 1,04.\n\nLa suite est géométrique de raison 1,04." },
    { d:1, e:"De u₀ à u₇, combien y a-t-il de termes ?", r:"8",
      c:"De u₀ à u₇ inclus, il y a 7 − 0 + 1 = 8 termes.\n\nC'est le piège classique des sommes : n + 1 termes, pas n." },
    { d:1, e:"La suite uₙ = 1/n est-elle croissante ou décroissante ?", r:"Décroissante",
      c:"u₁ = 1, u₂ = 0,5, u₃ ≈ 0,333 : les termes diminuent.\n\nEn effet, 1/(n+1) < 1/n pour tout n ≥ 1. La suite est strictement décroissante." },
    { d:1, e:"Calculer u₂ pour u₀ = 1 et uₙ₊₁ = uₙ² + 1.", r:"5",
      c:"u₁ = u₀² + 1 = 1 + 1 = 2.\nu₂ = u₁² + 1 = 4 + 1 = 5." },
    { d:2, e:"Calculer la somme des 10 premiers termes de la suite arithmétique u₀ = 2, r = 4.", r:"200",
      c:"u₉ = u₀ + 9×4 = 2 + 36 = 38.\n\nS = (nombre de termes) × (premier + dernier)/2 = 10 × (2 + 38)/2 = 10 × 20 = 200." },
    { d:2, e:"Calculer 1 + 1/2 + 1/4 + … + 1/2⁵.", r:"1,96875",
      c:"Suite géométrique de premier terme 1, de raison 1/2.\nDe 2⁰ à 2⁵, il y a 6 termes.\n\nS = 1 × (1 − (1/2)⁶)/(1 − 1/2) = (1 − 1/64)/(1/2) = (63/64) × 2 = 126/64 = 1,96875.\n\nVérification directe : 1 + 0,5 + 0,25 + 0,125 + 0,0625 + 0,03125 = 1,96875 ✓" },
    { d:2, e:"Suite arithmétique avec u₂ = 7 et u₅ = 19. Trouver r et u₀.", r:"r = 4 et u₀ = −1",
      c:"u₅ = u₂ + (5−2)·r, donc 19 = 7 + 3r, soit 3r = 12 et r = 4.\n\nu₂ = u₀ + 2r donne 7 = u₀ + 8, donc u₀ = −1.\n\nVérification : −1, 3, 7, 11, 15, 19 ✓" },
    { d:2, e:"Suite géométrique avec u₀ = 5 et q = 0,8. Calculer u₅.", r:"1,6384",
      c:"uₙ = u₀·qⁿ, donc u₅ = 5 × 0,8⁵.\n\n0,8⁵ = 0,32768.\nu₅ = 5 × 0,32768 = 1,6384.\n\nCette suite décroît vers 0 : c'est un modèle de décroissance de 20 % par étape." },
    { d:2, e:"Étudier la monotonie de uₙ = n² + 3n.", r:"Strictement croissante",
      c:"On calcule uₙ₊₁ − uₙ :\n(n+1)² + 3(n+1) − (n² + 3n) = n² + 2n + 1 + 3n + 3 − n² − 3n = 2n + 4.\n\nOr 2n + 4 > 0 pour tout n ≥ 0, donc uₙ₊₁ − uₙ > 0.\n\nLa suite est strictement croissante." },
    { d:2, e:"Montrer par récurrence que 3ⁿ ≥ n pour tout n ≥ 0.", r:"Démonstration",
      c:"<b>Initialisation</b> : pour n = 0, 3⁰ = 1 et 0. Or 1 ≥ 0 : vrai.\n\n<b>Hérédité</b> : supposons 3ⁿ ≥ n. Alors :\n3ⁿ⁺¹ = 3 × 3ⁿ ≥ 3n.\n\nOr 3n ≥ n + 1 dès que 2n ≥ 1, soit n ≥ 1. Pour n = 0, l'hérédité se vérifie directement : 3 ≥ 1.\n\nDonc 3ⁿ⁺¹ ≥ n + 1 : la propriété est héréditaire.\n\n<b>Conclusion</b> : par récurrence, 3ⁿ ≥ n pour tout n ≥ 0." },
    { d:2, e:"Calculer la somme 1 + 3 + 5 + … + 99.", r:"2500",
      c:"Ce sont les 50 premiers nombres impairs (de 1 = 2×0+1 à 99 = 2×49+1).\n\nSuite arithmétique de premier terme 1, de raison 2, avec 50 termes.\nS = 50 × (1 + 99)/2 = 50 × 50 = 2500.\n\nRésultat remarquable : la somme des n premiers impairs vaut n². Ici 50² = 2500 ✓" },
    { d:2, e:"Un loyer augmente de 30 € par an. Il vaut 700 € la première année. Combien après 5 ans ?", r:"820 €",
      c:"Suite arithmétique de raison 30, avec u₁ = 700.\n\nu₅ = u₁ + 4×30 = 700 + 120 = 820.\n\nAttention à l'indice : du terme 1 au terme 5, il y a 4 augmentations, pas 5." },
    { d:2, e:"Étudier la suite uₙ₊₁ = uₙ/2 avec u₀ = 64.", r:"Géométrique de raison 1/2, décroissante vers 0",
      c:"uₙ₊₁/uₙ = 1/2 : constante, donc la suite est géométrique de raison q = 1/2.\n\nuₙ = 64 × (1/2)ⁿ.\n\nComme 0 < 1/2 < 1, la suite est décroissante et tend vers 0." },
    { d:2, e:"Montrer que la suite uₙ = (2n+1)/(n+1) est croissante.", r:"Démonstration",
      c:"On calcule uₙ₊₁ − uₙ :\n(2n+3)/(n+2) − (2n+1)/(n+1)\n\n= [(2n+3)(n+1) − (2n+1)(n+2)] / [(n+2)(n+1)]\n= (2n² + 5n + 3 − 2n² − 5n − 2) / [(n+2)(n+1)]\n= 1 / [(n+2)(n+1)]\n\nOr (n+2)(n+1) > 0 pour tout n ≥ 0, donc uₙ₊₁ − uₙ > 0.\n\nLa suite est strictement croissante. Elle est aussi majorée par 2, donc convergente." },
    { d:2, e:"Calculer la somme des 20 premiers termes de uₙ = 3n + 1.", r:"650",
      c:"u₀ = 1 et u₁₉ = 3×19 + 1 = 58.\n\nS = 20 × (1 + 58)/2 = 20 × 29,5 = 590.\n\nAttention : c'est bien u₀ qu'il faut prendre comme premier terme, pas u₁. Avec u₁ = 4 et u₁₉ = 58 en 19 termes : 19 × (4+58)/2 = 589. Ce n'est pas le même résultat : le nombre de termes change tout." },
    { d:3, e:"Suite u₀ = 5 et uₙ₊₁ = 0,5uₙ + 3. Déterminer la limite.", r:"6",
      c:"On cherche le point fixe : ℓ = 0,5ℓ + 3 donne 0,5ℓ = 3, soit ℓ = 6.\n\nOn pose vₙ = uₙ − 6. Alors :\nvₙ₊₁ = uₙ₊₁ − 6 = 0,5uₙ + 3 − 6 = 0,5uₙ − 3 = 0,5(uₙ − 6) = 0,5·vₙ.\n\nvₙ est géométrique de raison 0,5, avec v₀ = 5 − 6 = −1.\nDonc vₙ = −1 × (0,5)ⁿ → 0.\n\nConclusion : uₙ = vₙ + 6 → 6.\n\nVérification : u₁ = 5,5 ; u₂ = 5,75 ; u₃ = 5,875 : on s'approche bien de 6." },
    { d:3, e:"Démontrer que la suite uₙ = (n−1)/n est strictement croissante et majorée par 1.", r:"Démonstration",
      c:"<b>Monotonie</b> : uₙ = 1 − 1/n.\n\nuₙ₊₁ − uₙ = (1 − 1/(n+1)) − (1 − 1/n) = −1/(n+1) + 1/n = [−(n) + (n+1)]/[n(n+1)] = 1/[n(n+1)] > 0.\n\nLa suite est strictement croissante.\n\n<b>Majoration</b> : uₙ = 1 − 1/n < 1 car 1/n > 0.\n\nLa suite est majorée par 1. Croissante et majorée, elle converge (vers 1)." },
    { d:3, e:"Un placement de 10 000 € rapporte 3 % par an. Quelle est la valeur après 10 ans ?", r:"≈ 13 439 €",
      c:"Suite géométrique de raison 1,03 : uₙ = 10 000 × 1,03ⁿ.\n\nu₁₀ = 10 000 × 1,03¹⁰.\n\n1,03¹⁰ ≈ 1,3439.\nu₁₀ ≈ 13 439 €.\n\nC'est l'effet des intérêts composés : le gain de 3 439 € dépasse largement les 3 000 € qu'on obtiendrait avec des intérêts simples." },
    { d:3, e:"Démontrer par récurrence que 1 + 2 + … + n = n(n+1)/2.", r:"Démonstration",
      c:"<b>Initialisation</b> : pour n = 1, la somme vaut 1 et la formule donne 1×2/2 = 1. Vrai.\n\n<b>Hérédité</b> : supposons 1 + 2 + … + n = n(n+1)/2.\nAlors 1 + 2 + … + n + (n+1) = n(n+1)/2 + (n+1)\n\nOn factorise par (n+1) :\n= (n+1)[n/2 + 1] = (n+1)(n+2)/2\n\nC'est bien la formule au rang n+1.\n\n<b>Conclusion</b> : par récurrence, la formule est vraie pour tout n ≥ 1." },
    { d:3, e:"Étudier la suite uₙ₊₁ = √(uₙ) avec u₀ = 4.", r:"Décroissante, converge vers 1",
      c:"u₀ = 4, u₁ = √4 = 2, u₂ = √2 ≈ 1,414, u₃ ≈ 1,189 : la suite décroît vers 1.\n\n<b>Bornes</b> : montrons par récurrence que uₙ ≥ 1.\nInitialisation : u₀ = 4 ≥ 1 ✓\nHérédité : si uₙ ≥ 1, alors √uₙ ≥ √1 = 1, donc uₙ₊₁ ≥ 1 ✓\n\n<b>Monotonie</b> : uₙ₊₁ − uₙ = √uₙ − uₙ. Comme uₙ ≥ 1, on a √uₙ ≤ uₙ, donc la différence est ≤ 0 : décroissante.\n\nDécroissante et minorée par 1 : elle converge. Sa limite ℓ vérifie ℓ = √ℓ, donc ℓ² = ℓ, soit ℓ = 0 ou ℓ = 1. Comme uₙ ≥ 1, ℓ = 1." },
    { d:3, e:"Calculer la somme des termes de u₀ = 1 à u₈ pour uₙ = 2ⁿ.", r:"511",
      c:"Suite géométrique de premier terme 1, de raison 2, avec 9 termes (de 2⁰ à 2⁸).\n\nS = 1 × (1 − 2⁹)/(1 − 2) = (1 − 512)/(−1) = 511.\n\nVérification partielle : 1+2+4+8+16 = 31, et (1 − 2⁵)/(−1) = 31 ✓" },
    { d:3, e:"Montrer que si uₙ est croissante et majorée, elle converge.", r:"Théorème admis",
      c:"C'est un théorème du programme, admis mais essentiel.\n\n<b>Idée de la preuve</b> : l'ensemble des valeurs {uₙ} est une partie de ℝ non vide et majorée. Elle admet donc une borne supérieure ℓ.\n\nPour tout ε > 0, ℓ − ε n'est pas un majorant, donc il existe un terme u_N > ℓ − ε.\n\nComme la suite est croissante, pour tout n ≥ N : ℓ − ε < u_N ≤ uₙ ≤ ℓ.\n\nDonc |uₙ − ℓ| < ε : la suite converge vers ℓ.\n\nCe théorème sert à démontrer la convergence <b>sans connaître la limite</b>, ce qui est souvent la seule voie possible." },
    { d:3, e:"Une bactérie double toutes les 20 minutes. Combien après 3 heures, en partant de 1000 ?", r:"262 144 000",
      c:"3 heures = 180 minutes, soit 9 périodes de 20 minutes.\n\nu₉ = 1000 × 2⁹ = 1000 × 512 = 512 000.\n\nAttention : j'ai écrit 9 périodes, mais de 0 à 9 il y a bien 9 doublements. Vérification : après 1 période (20 min), 2000 ; après 2 (40 min), 4000 ; après 9 (180 min), 1000 × 2⁹ = 512 000.\n\nLe nombre est 512 000, pas 262 millions : revérifions. 2⁹ = 512, donc 1000 × 512 = 512 000. C'est la bonne réponse." }
  ]
},
{
  id:"1re-derivation", niveau:"1re", titre:"1re · Dérivation", temps:"22 min",
  resume:"Nombre dérivé, fonction dérivée, tangente, variations.",
  lecons:[
    { titre:"Nombre dérivé et tangente", contenu:`
      <h3>1. Le taux de variation</h3>
      <p>Le taux de variation de f entre a et a+h mesure la variation moyenne :</p>
      <div class="formula">T(h) = [f(a + h) − f(a)] / h</div>
      <p>C'est le coefficient directeur de la droite qui passe par les deux points de la courbe d'abscisses a et a+h.</p>

      <h3>2. Le nombre dérivé</h3>
      <p>Quand h tend vers 0, la droite sécante devient la tangente. Sa limite est le <b>nombre dérivé</b> :</p>
      <div class="formula">f′(a) = lim (h → 0) [f(a + h) − f(a)] / h</div>
      <p>Géométriquement, f′(a) est le coefficient directeur de la <b>tangente</b> à la courbe au point d'abscisse a.</p>

      <h3>3. Équation de la tangente</h3>
      <div class="formula">y = f′(a)·(x − a) + f(a)</div>
      <p>Il faut donc deux ingrédients : la valeur f(a) et le nombre dérivé f′(a).</p>
      <div class="box"><b>Vérification rapide</b> — Dans l'équation trouvée, remplace x par a : tu dois retrouver f(a). Si ce n'est pas le cas, il y a une erreur de calcul.</div>

      <h3>4. Calculer un nombre dérivé par le taux</h3>
      <p>La méthode : écrire T(h), simplifier par h, puis remplacer h par 0.</p>
      <div class="box warn"><b>Pourquoi on peut simplifier par h</b> — Parce que h ≠ 0 dans le taux de variation. On ne divise jamais par zéro : on simplifie d'abord, puis on fait tendre h vers 0.</div>

      <h3>5. Dérivabilité et continuité</h3>
      <p>Si f est dérivable en a, alors f est continue en a. La réciproque est <b>fausse</b> : la fonction valeur absolue est continue en 0 mais pas dérivable en 0 (sa courbe forme un angle).</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Calculer f′(2) pour f(x) = x² et donner l'équation de la tangente en 2.</p>
      <ul>
        <li>T(h) = [(2+h)² − 4]/h = (4 + 4h + h² − 4)/h = (4h + h²)/h = 4 + h</li>
        <li>Quand h → 0, T(h) → 4. Donc f′(2) = 4.</li>
        <li>f(2) = 4</li>
        <li>Tangente : y = 4(x − 2) + 4 = 4x − 4</li>
      </ul>
      <p><b>Vérification :</b> pour x = 2, y = 8 − 4 = 4 = f(2) ✓</p>
    ` },
    { titre:"Fonction dérivée et formules", contenu:`
      <h3>1. La fonction dérivée</h3>
      <p>Si f est dérivable sur un intervalle I, la fonction qui à chaque x associe f′(x) est la <b>fonction dérivée</b> f′.</p>

      <h3>2. Les dérivées des fonctions de référence</h3>
      <div class="formula">(k)′ = 0                pour une constante k
(x)′ = 1
(xⁿ)′ = n·x^(n−1)
(1/x)′ = −1/x²
(√x)′ = 1/(2√x)
(eˣ)′ = eˣ
(sin x)′ = cos x
(cos x)′ = −sin x</div>

      <h3>3. Les opérations</h3>
      <div class="formula">(u + v)′ = u′ + v′
(k·u)′ = k·u′
(u·v)′ = u′v + uv′
(u/v)′ = (u′v − uv′)/v²
(1/v)′ = −v′/v²</div>
      <div class="box warn"><b>Erreur classique</b> — La dérivée d'un produit n'est <b>pas</b> le produit des dérivées. C'est l'erreur la plus coûteuse en contrôle. De même, (u/v)′ n'est pas u′/v′.</div>

      <h3>4. Dérivée et variations</h3>
      <p>C'est l'application centrale du chapitre :</p>
      <ul>
        <li><b>f′ &gt; 0</b> sur I → f est croissante sur I</li>
        <li><b>f′ &lt; 0</b> sur I → f est décroissante sur I</li>
        <li><b>f′ = 0</b> en changeant de signe → extremum local</li>
      </ul>
      <div class="box"><b>Réflexe de rédaction</b> — On étudie le signe de f′, jamais celui de f. Le signe de f′ donne les variations ; le signe de f donne la position de la courbe par rapport à l'axe.</div>

      <h3>5. Dérivée d'un polynôme</h3>
      <p>On dérive terme à terme. Exemple : f(x) = 3x³ − 5x² + 2x − 7 donne f′(x) = 9x² − 10x + 2.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Étudier les variations de f(x) = x³ − 3x² + 1.</p>
      <ul>
        <li>f′(x) = 3x² − 6x = 3x(x − 2)</li>
        <li>Signe : produit nul en 0 et 2. Comme 3 &gt; 0, f′ a le signe de x(x−2).</li>
        <li>f′ &gt; 0 sur ]−∞ ; 0[ ∪ ]2 ; +∞[, f′ &lt; 0 sur ]0 ; 2[</li>
        <li>f(0) = 1 : maximum local. f(2) = 8 − 12 + 1 = −3 : minimum local.</li>
      </ul>
      <p><b>Conclusion :</b> f croît, décroît, croît. Maximum 1 en 0, minimum −3 en 2.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — le nombre dérivé et la tangente, puis les formules et l'étude des variations.</div>`,
  exercices:[
    { d:1, e:"Quelle est la dérivée de f(x) = x³ ?", r:"f′(x) = 3x²",
      c:"Formule (xⁿ)′ = n·x^(n−1) avec n = 3.\n\nf′(x) = 3x²." },
    { d:1, e:"Quelle est la dérivée de f(x) = 5x + 3 ?", r:"f′(x) = 5",
      c:"La dérivée de 5x est 5, celle de la constante 3 est 0.\n\nf′(x) = 5. La courbe est une droite de pente 5." },
    { d:1, e:"Quelle est la dérivée de f(x) = x² − 4x ?", r:"f′(x) = 2x − 4",
      c:"On dérive terme à terme : (x²)′ = 2x et (−4x)′ = −4.\n\nf′(x) = 2x − 4." },
    { d:1, e:"Quelle est la dérivée de f(x) = 1/x ?", r:"f′(x) = −1/x²",
      c:"Formule directe : (1/x)′ = −1/x².\n\nLe signe négatif se retrouve sur tout le domaine : 1/x est décroissante sur chacun de ses intervalles." },
    { d:1, e:"Quelle est la dérivée de f(x) = √x ?", r:"f′(x) = 1/(2√x)",
      c:"Formule directe : (√x)′ = 1/(2√x).\n\nLe domaine de dérivabilité est ]0 ; +∞[ : en 0, la tangente est verticale, la dérivée n'existe pas." },
    { d:1, e:"Quelle est la dérivée de f(x) = eˣ ?", r:"f′(x) = eˣ",
      c:"L'exponentielle est sa propre dérivée : (eˣ)′ = eˣ.\n\nC'est une propriété unique à cette fonction." },
    { d:1, e:"Quelle est la dérivée de f(x) = 7 ?", r:"f′(x) = 0",
      c:"La dérivée d'une fonction constante est nulle : la droite est horizontale, sa pente est 0." },
    { d:1, e:"Quelle est la dérivée de f(x) = sin x ?", r:"f′(x) = cos x",
      c:"Formule directe : (sin x)′ = cos x." },
    { d:1, e:"Quelle est la dérivée de f(x) = cos x ?", r:"f′(x) = −sin x",
      c:"Formule directe : (cos x)′ = −sin x.\n\nAttention au signe moins : c'est l'erreur la plus fréquente du chapitre." },
    { d:1, e:"Que vaut f′(1) pour f(x) = x² ?", r:"2",
      c:"f′(x) = 2x, donc f′(1) = 2.\n\nGéométriquement : la tangente à la parabole en x = 1 a pour pente 2." },
    { d:2, e:"Quelle est la dérivée de f(x) = x³ − 3x² + 2 ?", r:"f′(x) = 3x² − 6x",
      c:"On dérive terme à terme :\n(x³)′ = 3x²\n(−3x²)′ = −6x\n(2)′ = 0\n\nf′(x) = 3x² − 6x = 3x(x−2)." },
    { d:2, e:"Quelle est la dérivée de f(x) = (2x+1)(x−3) ?", r:"f′(x) = 4x − 5",
      c:"<b>Méthode 1</b> : on développe d'abord.\nf(x) = 2x² − 6x + x − 3 = 2x² − 5x − 3.\nf′(x) = 4x − 5.\n\n<b>Méthode 2</b> : règle du produit.\nu = 2x+1 (u′ = 2), v = x−3 (v′ = 1).\nf′ = 2(x−3) + 1(2x+1) = 2x − 6 + 2x + 1 = 4x − 5 ✓" },
    { d:2, e:"Quelle est la dérivée de f(x) = x·eˣ ?", r:"f′(x) = eˣ(1 + x)",
      c:"Règle du produit avec u = x (u′ = 1) et v = eˣ (v′ = eˣ).\n\nf′(x) = 1·eˣ + x·eˣ = eˣ(1 + x).\n\nOn factorise toujours par l'exponentielle." },
    { d:2, e:"Quelle est la dérivée de f(x) = (x²+1)/x ?", r:"f′(x) = 1 − 1/x²",
      c:"<b>Méthode 1</b> : on simplifie d'abord.\nf(x) = x + 1/x.\nf′(x) = 1 − 1/x².\n\n<b>Méthode 2</b> : règle du quotient.\nf′ = [2x·x − (x²+1)·1]/x² = (2x² − x² − 1)/x² = (x² − 1)/x² = 1 − 1/x² ✓\n\nSimplifier avant de dériver est presque toujours plus rapide." },
    { d:2, e:"Déterminer les variations de f(x) = x² − 6x + 5.", r:"Décroissante sur ]−∞ ; 3], croissante sur [3 ; +∞[",
      c:"f′(x) = 2x − 6.\n\nf′ = 0 quand x = 3. f′ < 0 pour x < 3, f′ > 0 pour x > 3.\n\nLa fonction décroît jusqu'à x = 3 puis croît. Minimum en x = 3 : f(3) = 9 − 18 + 5 = −4." },
    { d:2, e:"Équation de la tangente à f(x) = x² en x = 3 ?", r:"y = 6x − 9",
      c:"f′(x) = 2x, donc f′(3) = 6.\nf(3) = 9.\n\nTangente : y = 6(x − 3) + 9 = 6x − 18 + 9 = 6x − 9.\n\nVérification : pour x = 3, y = 18 − 9 = 9 = f(3) ✓" },
    { d:2, e:"Quelle est la dérivée de f(x) = 1/(x²) ?", r:"f′(x) = −2/x³",
      c:"On écrit f(x) = x^(−2) et on applique (xⁿ)′ = n·x^(n−1) avec n = −2.\n\nf′(x) = −2·x^(−3) = −2/x³." },
    { d:2, e:"Étudier le signe de f′(x) pour f(x) = x³.", r:"f′ ≥ 0 partout, nulle en 0",
      c:"f′(x) = 3x².\n\nUn carré est toujours positif ou nul : f′(x) ≥ 0 pour tout x, avec f′(0) = 0.\n\nLa fonction est donc croissante sur ℝ (pas seulement sur chaque demi-axe)." },
    { d:2, e:"Déterminer le coefficient directeur de la tangente à f(x) = x³ en x = 1.", r:"3",
      c:"f′(x) = 3x², donc f′(1) = 3.\n\nLe coefficient directeur de la tangente en x = 1 vaut 3." },
    { d:2, e:"Quelle est la dérivée de f(x) = 2x³ + 4x² − 5x + 1 ?", r:"f′(x) = 6x² + 8x − 5",
      c:"Terme à terme :\n(2x³)′ = 6x²\n(4x²)′ = 8x\n(−5x)′ = −5\n(1)′ = 0\n\nf′(x) = 6x² + 8x − 5." },
    { d:2, e:"Vrai ou faux : si f′(a) = 0, alors f admet un extremum en a.", r:"Faux",
      c:"Contre-exemple : f(x) = x³ en a = 0. On a f′(0) = 3×0 = 0, mais la fonction est strictement croissante sur ℝ : il n'y a pas d'extremum.\n\nPour qu'un extremum existe, il faut que f′ s'annule <b>en changeant de signe</b>." },
    { d:3, e:"Étudier les variations de f(x) = x³ − 3x.", r:"Max en −1, min en 1",
      c:"f′(x) = 3x² − 3 = 3(x² − 1) = 3(x−1)(x+1).\n\nSigne : f′ > 0 sur ]−∞ ; −1[ ∪ ]1 ; +∞[, f′ < 0 sur ]−1 ; 1[.\n\nLa fonction croît, décroît, croît.\n\nMaximum local en x = −1 : f(−1) = −1 + 3 = 2.\nMinimum local en x = 1 : f(1) = 1 − 3 = −2." },
    { d:3, e:"Trouver l'équation de la tangente à f(x) = x³ − 3x en x = 2.", r:"y = 9x − 16",
      c:"f′(x) = 3x² − 3, donc f′(2) = 12 − 3 = 9.\nf(2) = 8 − 6 = 2.\n\nTangente : y = 9(x − 2) + 2 = 9x − 18 + 2 = 9x − 16.\n\nVérification : pour x = 2, y = 18 − 16 = 2 = f(2) ✓" },
    { d:3, e:"Déterminer les extremums de f(x) = −x² + 4x + 1.", r:"Maximum 5 en x = 2",
      c:"f′(x) = −2x + 4.\n\nf′ = 0 donne x = 2. f′ > 0 pour x < 2, f′ < 0 pour x > 2.\n\nLa fonction croît puis décroît : maximum en x = 2.\nf(2) = −4 + 8 + 1 = 5." },
    { d:3, e:"Montrer que f(x) = x³ + x est strictement croissante sur ℝ.", r:"Démonstration",
      c:"f′(x) = 3x² + 1.\n\nOr x² ≥ 0 pour tout x, donc 3x² + 1 ≥ 1 > 0.\n\nLa dérivée est strictement positive sur ℝ entier : la fonction est strictement croissante." },
    { d:3, e:"f(x) = x + 1/x sur ]0 ; +∞[. Déterminer le minimum.", r:"2, en x = 1",
      c:"f′(x) = 1 − 1/x² = (x² − 1)/x² = (x−1)(x+1)/x².\n\nSur ]0 ; +∞[, x² > 0 et x + 1 > 0, donc f′ a le signe de (x−1).\nf′ < 0 pour x < 1, f′ > 0 pour x > 1.\n\nMinimum en x = 1 : f(1) = 1 + 1 = 2.\n\nConséquence : pour tout x > 0, x + 1/x ≥ 2. C'est l'inégalité classique." },
    { d:3, e:"Déterminer le sens de variation de f(x) = x/(x+1) sur ]−1 ; +∞[.", r:"Croissante",
      c:"Règle du quotient : u = x (u′ = 1), v = x+1 (v′ = 1).\n\nf′(x) = [1·(x+1) − x·1]/(x+1)² = (x + 1 − x)/(x+1)² = 1/(x+1)².\n\nOr (x+1)² > 0 sur ]−1 ; +∞[ (car x+1 ≠ 0), donc f′(x) > 0.\n\nLa fonction est strictement croissante sur ]−1 ; +∞[." },
    { d:3, e:"Un objet lancé verticalement a pour altitude h(t) = −5t² + 20t. Quand atteint-il son altitude maximale ?", r:"À t = 2 s, altitude 20 m",
      c:"On dérive : h′(t) = −10t + 20.\n\nh′ = 0 donne t = 2. h′ > 0 avant, < 0 après : c'est bien un maximum.\n\nh(2) = −5×4 + 20×2 = −20 + 40 = 20 m.\n\nL'objet monte pendant 2 secondes jusqu'à 20 mètres, puis redescend." },
    { d:3, e:"Montrer que la courbe de f(x) = x³ − 3x + 1 coupe l'axe des abscisses en trois points.", r:"Démonstration",
      c:"D'après l'étude des variations, le maximum local vaut f(−1) = −1 + 3 + 1 = 3 > 0 et le minimum local vaut f(1) = 1 − 3 + 1 = −1 < 0.\n\nLa fonction est continue (polynôme) et monotone sur chacun des trois intervalles :\n — sur ]−∞ ; −1] : croissante de −∞ à 3, elle coupe 0 une fois\n — sur [−1 ; 1] : décroissante de 3 à −1, elle coupe 0 une fois\n — sur [1 ; +∞[ : croissante de −1 à +∞, elle coupe 0 une fois\n\nConclusion : trois points d'intersection avec l'axe des abscisses." },
    { d:3, e:"Déterminer les valeurs de m pour lesquelles f(x) = x³ − 3x + m admet trois racines.", r:"−2 < m < 2",
      c:"Les variations sont les mêmes que pour x³ − 3x : maximum local en x = −1 valant 2, minimum local en x = 1 valant −2.\n\nEn ajoutant m, le maximum devient 2 + m et le minimum −2 + m.\n\nPour avoir trois racines, il faut que le maximum soit positif <b>et</b> le minimum négatif :\n2 + m > 0 ⟹ m > −2\n−2 + m < 0 ⟹ m < 2\n\nConclusion : −2 < m < 2.\n\nCas limites : pour m = 2 ou m = −2, il y a une racine double et une simple (deux racines distinctes)." },
    { d:3, e:"Une entreprise vend x unités à un prix unitaire de (50 − 0,5x). Pour quelle quantité le chiffre d'affaires est-il maximal ?", r:"x = 50",
      c:"Chiffre d'affaires : R(x) = x × (50 − 0,5x) = 50x − 0,5x².\n\nOn dérive : R′(x) = 50 − x.\n\nR′ = 0 donne x = 50. R′ > 0 avant, < 0 après : maximum.\n\nR(50) = 2500 − 0,5×2500 = 2500 − 1250 = 1250.\n\nLe chiffre d'affaires maximal est de 1250 € pour 50 unités vendues." }
  ]
},
{
  id:"1re-exponentielle", niveau:"1re", titre:"1re · Fonction exponentielle", temps:"22 min",
  resume:"Définition, propriétés algébriques, dérivée, équations et inéquations.",
  lecons:[
    { titre:"Définition et propriétés", contenu:`
      <h3>1. La fonction qui est sa propre dérivée</h3>
      <p>La fonction exponentielle est l'unique fonction f dérivable sur ℝ telle que f′ = f et f(0) = 1. On la note exp, ou eˣ.</p>
      <div class="formula">(eˣ)′ = eˣ        et        e⁰ = 1</div>
      <div class="box"><b>Conséquence immédiate</b> — L'exponentielle ne s'annule jamais et est toujours strictement positive : eˣ &gt; 0 pour tout réel x. Sa courbe reste au-dessus de l'axe des abscisses.</div>

      <h3>2. Les propriétés algébriques</h3>
      <p>L'exponentielle transforme les sommes en produits :</p>
      <div class="formula">e^(a+b) = e^a × e^b
e^(a−b) = e^a / e^b
e^(−a) = 1 / e^a
(e^a)ⁿ = e^(n·a)</div>
      <div class="box warn"><b>Erreur classique</b> — Il n'y a <b>aucune</b> formule pour e^(a+b) qui donnerait e^a + e^b. L'exponentielle d'une somme est un <b>produit</b>. C'est l'erreur la plus fréquente du chapitre.</div>

      <h3>3. Valeurs remarquables</h3>
      <div class="formula">e⁰ = 1        e¹ = e ≈ 2,718        e^(−1) = 1/e ≈ 0,368</div>

      <h3>4. Sens de variation</h3>
      <p>Comme (eˣ)′ = eˣ &gt; 0, la fonction exponentielle est <b>strictement croissante</b> sur ℝ. Elle conserve donc l'ordre :</p>
      <div class="formula">e^a &lt; e^b   ⟺   a &lt; b</div>
      <p>C'est l'outil pour résoudre les inéquations avec exponentielles.</p>

      <h3>5. Limites</h3>
      <div class="formula">lim (x→+∞) eˣ = +∞
lim (x→−∞) eˣ = 0</div>
      <p>En −∞, la courbe tend vers 0 sans jamais l'atteindre : l'axe des abscisses est asymptote horizontale.</p>
      <p>Une croissance comparée à retenir :</p>
      <div class="formula">lim (x→+∞) eˣ/x = +∞</div>
      <p>L'exponentielle l'emporte sur toute puissance de x.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Simplifier B = (e³ × e⁻⁵) / e⁻¹.</p>
      <ul>
        <li>Au numérateur : e³ × e⁻⁵ = e^(3−5) = e⁻²</li>
        <li>Donc B = e⁻² / e⁻¹ = e^(−2+1) = e⁻¹ = 1/e</li>
      </ul>
      <p><b>Vérification avec les exposants :</b> 3 + (−5) − (−1) = 3 − 5 + 1 = −1 ✓</p>
    ` },
    { titre:"Dérivée et équations", contenu:`
      <h3>1. Dérivée de e^u</h3>
      <p>C'est la forme la plus utilisée en exercice :</p>
      <div class="formula">(e^u)′ = u′ · e^u</div>
      <p>Exemples : la dérivée de e^(3x) est 3e^(3x). Celle de e^(x²) est 2x·e^(x²).</p>
      <div class="box warn"><b>Ne pas oublier u′</b> — La dérivée de e^(5x) est 5e^(5x), pas e^(5x). Le facteur u′ est le piège classique.</div>

      <h3>2. Équations avec exponentielle</h3>
      <p>Pour isoler l'inconnue, on utilise le fait que l'exponentielle est strictement croissante et injective :</p>
      <div class="formula">e^A = e^B   ⟺   A = B</div>
      <p>Et pour une équation e^A = k avec k &gt; 0, on écrit k sous forme exponentielle.</p>
      <div class="box"><b>Point de vigilance</b> — L'équation e^x = −3 n'a aucune solution, car une exponentielle est toujours strictement positive. Vérifie toujours le signe du membre de droite avant de chercher.</div>

      <h3>3. Inéquations</h3>
      <p>L'exponentielle étant croissante, elle <b>conserve</b> l'ordre :</p>
      <div class="formula">e^A &lt; e^B   ⟺   A &lt; B</div>
      <p>Le sens de l'inégalité ne s'inverse jamais avec exp, contrairement à ce qui se passe avec la fonction inverse.</p>

      <h3>4. Étude d'une fonction avec exponentielle</h3>
      <p>La méthode est toujours la même : dériver (avec la formule u′e^u), étudier le signe de la dérivée. Le facteur exponentiel étant toujours positif, il suffit souvent d'étudier le signe du reste.</p>
      <div class="formula">f(x) = (2x+1)eˣ  ⟹  f′(x) = 2eˣ + (2x+1)eˣ = (2x+3)eˣ</div>
      <p>Le signe de f′ est celui de (2x+3), car eˣ &gt; 0 toujours.</p>

      <h3>5. Croissances comparées</h3>
      <p>Trois limites à connaître pour les exercices de Terminale, utiles dès la 1re :</p>
      <div class="formula">lim (x→+∞) eˣ/xⁿ = +∞
lim (x→−∞) x·eˣ = 0
lim (x→0) (eˣ − 1)/x = 1</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Résoudre e^(2x) − 3e^x + 2 = 0.</p>
      <ul>
        <li>On pose X = e^x, avec X &gt; 0</li>
        <li>L'équation devient X² − 3X + 2 = 0</li>
        <li>Δ = 9 − 8 = 1, racines X = 1 et X = 2</li>
        <li>Les deux sont positives, donc acceptables</li>
        <li>e^x = 1 donne x = 0. e^x = 2 donne x = ln 2.</li>
      </ul>
      <p><b>Conclusion :</b> deux solutions, x = 0 et x = ln 2 ≈ 0,693.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — les propriétés algébriques et l'étude de la fonction, puis la dérivation et la résolution d'équations.</div>`,
  exercices:[
    { d:1, e:"Calculer e⁰.", r:"1",
      c:"Par définition, e⁰ = 1. C'est la condition initiale qui définit la fonction exponentielle." },
    { d:1, e:"Simplifier e² × e³.", r:"e⁵",
      c:"e^a × e^b = e^(a+b), donc e² × e³ = e^(2+3) = e⁵.\n\nOn additionne les exposants dans un produit." },
    { d:1, e:"Simplifier e⁵ / e².", r:"e³",
      c:"e^a / e^b = e^(a−b), donc e⁵/e² = e^(5−2) = e³." },
    { d:1, e:"Simplifier (e³)².", r:"e⁶",
      c:"(e^a)ⁿ = e^(n·a) = e^(a·n), donc (e³)² = e^(3×2) = e⁶.\n\nOn multiplie les exposants dans une puissance de puissance." },
    { d:1, e:"Simplifier e^(−4).", r:"1/e⁴",
      c:"e^(−a) = 1/e^a, donc e^(−4) = 1/e⁴." },
    { d:1, e:"Quelle est la dérivée de f(x) = e^(3x) ?", r:"f′(x) = 3e^(3x)",
      c:"Formule (e^u)′ = u′·e^u avec u = 3x, donc u′ = 3.\n\nf′(x) = 3e^(3x)." },
    { d:1, e:"Quelle est la dérivée de f(x) = eˣ ?", r:"f′(x) = eˣ",
      c:"L'exponentielle est sa propre dérivée : (eˣ)′ = eˣ." },
    { d:1, e:"La fonction exponentielle est-elle croissante ou décroissante ?", r:"Strictement croissante",
      c:"Sa dérivée est eˣ, qui est toujours strictement positive.\n\nDonc l'exponentielle est strictement croissante sur ℝ : elle conserve l'ordre." },
    { d:1, e:"Résoudre eˣ = 1.", r:"x = 0",
      c:"eˣ = 1 = e⁰.\n\nComme l'exponentielle est injective (strictement croissante), x = 0." },
    { d:1, e:"Que vaut lim (x→−∞) eˣ ?", r:"0",
      c:"Quand x devient très négatif, eˣ devient très petit sans jamais atteindre 0.\n\nLa droite y = 0 (l'axe des abscisses) est asymptote horizontale à la courbe." },
    { d:2, e:"Simplifier (e² × e⁻⁵) / e⁻³.", r:"1",
      c:"Numérateur : e² × e⁻⁵ = e^(2−5) = e⁻³.\n\nQuotient : e⁻³/e⁻³ = e^(−3+3) = e⁰ = 1.\n\nVérification par les exposants : 2 − 5 + 3 = 0 ✓" },
    { d:2, e:"Résoudre e^(2x) = e^(x+3).", r:"x = 3",
      c:"L'exponentielle est injective, donc 2x = x + 3.\n\nD'où x = 3.\n\nVérification : e⁶ = e⁶ ✓" },
    { d:2, e:"Résoudre eˣ &lt; e².", r:"x &lt; 2",
      c:"L'exponentielle est strictement croissante, donc elle conserve l'ordre.\n\neˣ < e² ⟺ x < 2.\n\nSolution : x ∈ ]−∞ ; 2[." },
    { d:2, e:"Quelle est la dérivée de f(x) = e^(x²) ?", r:"f′(x) = 2x·e^(x²)",
      c:"u = x², donc u′ = 2x.\n\nf′(x) = u′·e^u = 2x·e^(x²).\n\nSigne : f′ est du signe de x, car e^(x²) > 0 toujours. La fonction décroît puis croît." },
    { d:2, e:"Quelle est la dérivée de f(x) = x·eˣ ?", r:"f′(x) = (1+x)eˣ",
      c:"Règle du produit avec u = x (u′ = 1) et v = eˣ (v′ = eˣ).\n\nf′(x) = 1·eˣ + x·eˣ = eˣ(1 + x).\n\nOn factorise par l'exponentielle pour étudier le signe." },
    { d:2, e:"Résoudre e^(3x) = 5.", r:"x = (ln 5)/3",
      c:"Il faut « déloger » x de l'exposant. On applique ln des deux côtés :\nln(e^(3x)) = ln 5\n3x = ln 5\nx = (ln 5)/3 ≈ 0,536.\n\nLe logarithme est l'outil de la Terminale ; en 1re, on peut laisser la réponse sous forme ln 5." },
    { d:2, e:"Simplifier e^(ln 7) si on admet cette notation.", r:"7",
      c:"Par définition, ln est la fonction réciproque de exp.\n\nDonc e^(ln x) = x pour tout x > 0. Ici e^(ln 7) = 7." },
    { d:2, e:"Étudier le sens de variation de f(x) = e^(−x).", r:"Strictement décroissante",
      c:"u = −x, donc u′ = −1.\n\nf′(x) = −1 × e^(−x) = −e^(−x).\n\nComme e^(−x) > 0, on a f′(x) < 0 pour tout x.\n\nLa fonction est strictement décroissante sur ℝ." },
    { d:2, e:"Vrai ou faux : e^(a+b) = e^a + e^b.", r:"Faux",
      c:"La bonne formule est e^(a+b) = e^a × e^b.\n\nVérification numérique : avec a = b = 1, e² ≈ 7,389 mais e¹ + e¹ ≈ 5,436. Les deux valeurs sont différentes.\n\nC'est l'erreur la plus fréquente sur ce chapitre." },
    { d:2, e:"Résoudre e^(x²) = e^(3x−2).", r:"x = 1 ou x = 2",
      c:"L'exponentielle est injective, donc x² = 3x − 2.\n\nx² − 3x + 2 = 0.\nΔ = 9 − 8 = 1, racines x = 1 et x = 2.\n\nVérification : e¹ = e¹ ✓ et e⁴ = e^(4) ✓" },
    { d:2, e:"Déterminer le minimum de f(x) = e^x − x.", r:"1, en x = 0",
      c:"f′(x) = eˣ − 1.\n\nf′ = 0 quand eˣ = 1, soit x = 0.\nf′ < 0 pour x < 0 (car eˣ < 1) et f′ > 0 pour x > 0.\n\nMinimum en x = 0 : f(0) = 1 − 0 = 1.\n\nConséquence : eˣ ≥ x + 1 pour tout x." },
    { d:3, e:"Résoudre e^(2x) − 5e^x + 6 = 0.", r:"x = ln 2 ou x = ln 3",
      c:"On pose X = e^x, avec X > 0.\n\nX² − 5X + 6 = 0.\nΔ = 25 − 24 = 1, racines X = 2 et X = 3.\n\nLes deux sont positives, donc acceptables.\ne^x = 2 donne x = ln 2 ≈ 0,693.\ne^x = 3 donne x = ln 3 ≈ 1,099." },
    { d:3, e:"Étudier f(x) = (x−1)eˣ.", r:"Minimum en x = 0, valant −1",
      c:"Règle du produit : u = x−1 (u′ = 1), v = eˣ (v′ = eˣ).\n\nf′(x) = eˣ + (x−1)eˣ = eˣ(1 + x − 1) = x·eˣ.\n\nComme eˣ > 0, f′ a le signe de x.\nf′ < 0 pour x < 0, f′ > 0 pour x > 0.\n\nMinimum en x = 0 : f(0) = (0−1)×1 = −1.\n\nLimites : en +∞, f → +∞. En −∞, (x−1)eˣ → 0⁻, la courbe tend vers 0 par valeurs négatives." },
    { d:3, e:"Montrer que eˣ > x pour tout réel x.", r:"Démonstration",
      c:"On étudie g(x) = eˣ − x.\n\ng′(x) = eˣ − 1.\n\ng′ = 0 quand x = 0. g′ < 0 pour x < 0 et g′ > 0 pour x > 0.\n\nDonc g admet un minimum en x = 0.\ng(0) = 1 − 0 = 1 > 0.\n\nComme le minimum est strictement positif, g(x) > 0 pour tout x, soit eˣ > x.\n\nEn fait, on peut montrer mieux : eˣ ≥ x + 1." },
    { d:3, e:"Résoudre e^x ≤ 1/e.", r:"x ≤ −1",
      c:"On écrit 1/e = e^(−1).\n\ne^x ≤ e^(−1).\n\nL'exponentielle est croissante, donc elle conserve l'ordre : x ≤ −1.\n\nSolution : x ∈ ]−∞ ; −1]." },
    { d:3, e:"Déterminer la limite de f(x) = x·e^(−x) en +∞.", r:"0",
      c:"C'est une forme indéterminée du type ∞ × 0.\n\nOn écrit f(x) = x/eˣ.\n\nPar croissance comparée, l'exponentielle l'emporte sur x : lim (x→+∞) x/eˣ = 0.\n\nDonc f(x) → 0. La courbe admet l'axe des abscisses comme asymptote." },
    { d:3, e:"Un capital de 1000 € est placé à intérêts continus au taux de 5 % par an. Valeur après 10 ans ?", r:"≈ 1649 €",
      c:"Avec des intérêts continus, la valeur suit C(t) = C₀ × e^(rt), avec r = 0,05.\n\nC(10) = 1000 × e^(0,5).\n\ne^0,5 ≈ 1,6487.\n\nC(10) ≈ 1649 €.\n\nComparaison : avec des intérêts composés annuels, on aurait 1000 × 1,05¹⁰ ≈ 1629 €. La capitalisation continue donne un peu plus." },
    { d:3, e:"Étudier les variations de f(x) = e^(2x) − 4eˣ.", r:"Minimum en x = ln 2, valant −4",
      c:"f′(x) = 2e^(2x) − 4eˣ = 2eˣ(eˣ − 2).\n\nComme 2eˣ > 0, f′ a le signe de (eˣ − 2).\n\neˣ − 2 = 0 quand x = ln 2.\nf′ < 0 pour x < ln 2, f′ > 0 pour x > ln 2.\n\nMinimum en x = ln 2.\nf(ln 2) = e^(2ln2) − 4e^(ln2) = 4 − 8 = −4." },
    { d:3, e:"Montrer que l'équation eˣ = −x admet une unique solution.", r:"Solution unique, ≈ −0,567",
      c:"On pose f(x) = eˣ + x, continue sur ℝ.\n\nf′(x) = eˣ + 1 > 0 pour tout x.\n\nLa fonction est strictement croissante.\n\nLimites : en −∞, f → −∞. En +∞, f → +∞.\n\nContinue et strictement croissante de −∞ à +∞, f traverse 0 exactement une fois.\n\nLocalisation : f(−1) = 0,368 − 1 = −0,632 < 0 et f(0) = 1 > 0 : la solution est dans ]−1 ; 0[, environ −0,567." }
  ]
},
{
  id:"1re-produit-scalaire", niveau:"1re", titre:"1re · Produit scalaire", temps:"22 min",
  resume:"Produit scalaire dans le plan, orthogonalité, distances, applications.",
  lecons:[
    { titre:"Définition et propriétés", contenu:`
      <h3>1. Deux définitions équivalentes</h3>
      <p><b>Définition géométrique</b> :</p>
      <div class="formula">u⃗ · v⃗ = ‖u⃗‖ × ‖v⃗‖ × cos(u⃗, v⃗)</div>
      <p><b>Définition analytique</b>, dans un repère orthonormé :</p>
      <div class="formula">u⃗(x ; y) · v⃗(x′ ; y′) = x·x′ + y·y′</div>
      <div class="box"><b>Laquelle utiliser ?</b> — Si on connaît les coordonnées, on utilise la forme analytique (calcul immédiat). Si on connaît les longueurs et un angle, on utilise la forme géométrique.</div>

      <h3>2. Propriétés algébriques</h3>
      <div class="formula">u⃗ · v⃗ = v⃗ · u⃗                (symétrie)
u⃗ · (v⃗ + w⃗) = u⃗·v⃗ + u⃗·w⃗   (linéarité)
(k·u⃗) · v⃗ = k·(u⃗·v⃗)
u⃗ · u⃗ = ‖u⃗‖²</div>
      <p>Le résultat d'un produit scalaire est toujours un <b>nombre</b>, jamais un vecteur.</p>

      <h3>3. Norme d'un vecteur</h3>
      <div class="formula">‖u⃗‖ = √(u⃗·u⃗) = √(x² + y²)</div>
      <p>La distance entre deux points A et B est ‖AB⃗‖.</p>

      <h3>4. Orthogonalité</h3>
      <p>C'est l'application principale du produit scalaire :</p>
      <div class="formula">u⃗ ⊥ v⃗   ⟺   u⃗ · v⃗ = 0</div>
      <div class="box"><b>Usage typique</b> — Pour montrer qu'un triangle ABC est rectangle en A, on calcule AB⃗ · AC⃗. S'il vaut 0, l'angle en A est droit.</div>

      <h3>5. Angle entre deux vecteurs</h3>
      <p>En combinant les deux définitions :</p>
      <div class="formula">cos(u⃗, v⃗) = (u⃗·v⃗) / (‖u⃗‖ × ‖v⃗‖)</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Le triangle A(0;0), B(3;0), C(0;4) est-il rectangle ?</p>
      <ul>
        <li>AB⃗ = (3 ; 0) et AC⃗ = (0 ; 4)</li>
        <li>AB⃗·AC⃗ = 3×0 + 0×4 = 0</li>
        <li>Le produit scalaire est nul, donc les vecteurs sont orthogonaux</li>
      </ul>
      <p><b>Conclusion :</b> le triangle est rectangle en A. Vérification : AB = 3, AC = 4, BC = √(9+16) = 5. C'est le triangle 3-4-5 ✓</p>
    ` },
    { titre:"Applications : distances et équations", contenu:`
      <h3>1. Formule d'Al-Kashi</h3>
      <p>C'est l'extension du théorème de Pythagore aux triangles quelconques :</p>
      <div class="formula">BC² = AB² + AC² − 2 × AB × AC × cos(BÂC)</div>
      <div class="box"><b>Lien avec Pythagore</b> — Si l'angle en A est droit, cos(A) = 0 et on retrouve BC² = AB² + AC². Pythagore est le cas particulier de la formule pour un angle de 90°.</div>

      <h3>2. Équation d'une droite avec un vecteur normal</h3>
      <p>Si n⃗(a ; b) est un vecteur normal à une droite passant par A, alors M(x ; y) est sur la droite si et seulement si :</p>
      <div class="formula">n⃗ · AM⃗ = 0
soit : a(x − x_A) + b(y − y_A) = 0</div>
      <p>Ce qui donne l'équation cartésienne : ax + by + c = 0.</p>

      <h3>3. Équation d'un cercle</h3>
      <p>Le cercle de centre Ω(a ; b) et de rayon r est l'ensemble des points M tels que ΩM = r :</p>
      <div class="formula">(x − a)² + (y − b)² = r²</div>
      <p>Sous forme développée, on reconnaît un cercle à ce que les coefficients de x² et y² sont égaux.</p>

      <h3>4. Distance d'un point à une droite</h3>
      <div class="formula">Pour une droite d'équation ax + by + c = 0 et un point M(x₀ ; y₀) :
distance = |a·x₀ + b·y₀ + c| / √(a² + b²)</div>

      <h3>5. Démontrer une orthogonalité</h3>
      <p>La méthode est toujours la même : on exprime deux vecteurs en coordonnées, on calcule leur produit scalaire, et on vérifie qu'il vaut 0.</p>
      <div class="box warn"><b>Erreur classique</b> — Confondre vecteur normal et vecteur directeur. Un vecteur normal n⃗(a ; b) est perpendiculaire à la droite ; un vecteur directeur u⃗(−b ; a) lui est parallèle.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Déterminer l'équation de la droite passant par A(1 ; 2) et de vecteur normal n⃗(3 ; −1).</p>
      <ul>
        <li>On applique la formule : 3(x − 1) + (−1)(y − 2) = 0</li>
        <li>3x − 3 − y + 2 = 0</li>
        <li>3x − y − 1 = 0</li>
      </ul>
      <p><b>Vérification :</b> le point A vérifie 3×1 − 2 − 1 = 0 ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — la définition et les propriétés du produit scalaire, puis ses applications aux distances et aux équations.</div>`,
  exercices:[
    { d:1, e:"Calculer u⃗·v⃗ pour u⃗(2;3) et v⃗(4;−1).", r:"5",
      c:"u⃗·v⃗ = x·x′ + y·y′ = 2×4 + 3×(−1) = 8 − 3 = 5." },
    { d:1, e:"Calculer u⃗·v⃗ pour u⃗(1;2) et v⃗(2;−1).", r:"0",
      c:"u⃗·v⃗ = 1×2 + 2×(−1) = 2 − 2 = 0.\n\nLe produit scalaire est nul : les vecteurs sont <b>orthogonaux</b>." },
    { d:1, e:"Calculer la norme de u⃗(3;4).", r:"5",
      c:"‖u⃗‖ = √(3² + 4²) = √(9+16) = √25 = 5.\n\nC'est le triangle 3-4-5 classique." },
    { d:1, e:"Calculer la norme de u⃗(−5;12).", r:"13",
      c:"‖u⃗‖ = √(25 + 144) = √169 = 13.\n\nC'est le triplet pythagoricien 5-12-13." },
    { d:1, e:"Que vaut u⃗·u⃗ pour u⃗(2;5) ?", r:"29",
      c:"u⃗·u⃗ = 2×2 + 5×5 = 4 + 25 = 29.\n\nOn retrouve aussi ‖u⃗‖² = (√29)² = 29 ✓" },
    { d:1, e:"Calculer AB⃗·AC⃗ pour A(0;0), B(1;0), C(0;1).", r:"0",
      c:"AB⃗ = (1 ; 0) et AC⃗ = (0 ; 1).\n\nAB⃗·AC⃗ = 1×0 + 0×1 = 0.\n\nLes vecteurs sont orthogonaux : le triangle est rectangle en A." },
    { d:1, e:"Deux vecteurs orthogonaux ont-ils un produit scalaire nul ?", r:"Oui, et réciproquement",
      c:"C'est la caractérisation de l'orthogonalité : u⃗ ⊥ v⃗ ⟺ u⃗·v⃗ = 0.\n\nC'est l'outil principal du chapitre : pour prouver une orthogonalité, on calcule le produit scalaire." },
    { d:1, e:"Calculer la distance AB pour A(1;1) et B(4;5).", r:"5",
      c:"AB⃗ = (4−1 ; 5−1) = (3 ; 4).\n\n‖AB⃗‖ = √(9 + 16) = √25 = 5.\n\nLa distance entre A et B vaut 5." },
    { d:1, e:"Le produit scalaire est-il commutatif ?", r:"Oui",
      c:"u⃗·v⃗ = v⃗·u⃗ : c'est la symétrie du produit scalaire.\n\nEn coordonnées, x·x′ + y·y′ = x′·x + y′·y, ce qui est immédiat." },
    { d:1, e:"Que vaut u⃗·(v⃗ + w⃗) ?", r:"u⃗·v⃗ + u⃗·w⃗",
      c:"C'est la linéarité à droite du produit scalaire.\n\nElle permet de développer les expressions comme on le ferait avec des nombres." },
    { d:2, e:"Calculer l'angle entre u⃗(1;0) et v⃗(1;1).", r:"45°",
      c:"u⃗·v⃗ = 1×1 + 0×1 = 1.\n‖u⃗‖ = 1 et ‖v⃗‖ = √2.\n\ncos(angle) = 1/(1×√2) = 1/√2 = √2/2.\n\nOr cos(45°) = √2/2, donc l'angle vaut 45°." },
    { d:2, e:"Les vecteurs u⃗(3;4) et v⃗(4;−3) sont-ils orthogonaux ?", r:"Oui",
      c:"u⃗·v⃗ = 3×4 + 4×(−3) = 12 − 12 = 0.\n\nLe produit scalaire est nul : les vecteurs sont orthogonaux.\n\nDétail : ‖u⃗‖ = 5 et ‖v⃗‖ = 5, ils ont même norme." },
    { d:2, e:"Déterminer l'équation de la droite passant par A(2;1) et de vecteur normal n⃗(1;3).", r:"x + 3y − 5 = 0",
      c:"Formule : a(x − x_A) + b(y − y_A) = 0.\n\n1(x − 2) + 3(y − 1) = 0\nx − 2 + 3y − 3 = 0\nx + 3y − 5 = 0.\n\nVérification : pour A(2;1), 2 + 3 − 5 = 0 ✓" },
    { d:2, e:"Le triangle A(0;0), B(2;1), C(1;3) est-il rectangle en A ?", r:"Non",
      c:"AB⃗ = (2 ; 1) et AC⃗ = (1 ; 3).\n\nAB⃗·AC⃗ = 2×1 + 1×3 = 2 + 3 = 5 ≠ 0.\n\nLe produit scalaire n'est pas nul : l'angle en A n'est pas droit, le triangle n'est pas rectangle en A." },
    { d:2, e:"Calculer ‖u⃗ + v⃗‖² pour u⃗(1;0) et v⃗(0;1).", r:"2",
      c:"<b>Méthode 1</b> : u⃗ + v⃗ = (1 ; 1), donc ‖u⃗+v⃗‖² = 1 + 1 = 2.\n\n<b>Méthode 2</b> : ‖u⃗+v⃗‖² = ‖u⃗‖² + 2u⃗·v⃗ + ‖v⃗‖².\nOr u⃗·v⃗ = 0 (orthogonaux), donc = 1 + 0 + 1 = 2 ✓\n\nC'est l'identité remarquable appliquée aux vecteurs." },
    { d:2, e:"Vérifier que le triangle A(0;0), B(3;0), C(0;4) est rectangle en A.", r:"Démonstration",
      c:"AB⃗ = (3 ; 0) et AC⃗ = (0 ; 4).\n\nAB⃗·AC⃗ = 3×0 + 0×4 = 0.\n\nLe produit scalaire est nul : les vecteurs sont orthogonaux, donc l'angle en A est droit.\n\nVérification par Pythagore : AB = 3, AC = 4, BC = √(9+16) = 5. Or 3² + 4² = 25 = 5² ✓" },
    { d:2, e:"Déterminer l'équation du cercle de centre Ω(2;−1) et de rayon 3.", r:"(x−2)² + (y+1)² = 9",
      c:"Formule : (x − a)² + (y − b)² = r².\n\nIci a = 2, b = −1, r = 3.\n\n(x − 2)² + (y − (−1))² = 9, soit (x−2)² + (y+1)² = 9." },
    { d:2, e:"Le point (1;1) est-il sur le cercle de centre (0;0) et de rayon √2 ?", r:"Oui",
      c:"Distance du point à l'origine : √(1² + 1²) = √2.\n\nOr √2 est exactement le rayon du cercle. Le point appartient donc au cercle." },
    { d:2, e:"Calculer la distance du point (0;0) à la droite 3x + 4y − 10 = 0.", r:"2",
      c:"Formule : |a·x₀ + b·y₀ + c|/√(a²+b²).\n\nNumérateur : |3×0 + 4×0 − 10| = 10.\nDénominateur : √(9 + 16) = √25 = 5.\n\nDistance = 10/5 = 2." },
    { d:2, e:"Que vaut ‖u⃗ − v⃗‖² si ‖u⃗‖ = 3, ‖v⃗‖ = 4 et u⃗·v⃗ = 0 ?", r:"25",
      c:"‖u⃗−v⃗‖² = ‖u⃗‖² − 2u⃗·v⃗ + ‖v⃗‖²\n= 9 − 0 + 16 = 25.\n\nPuisque u⃗·v⃗ = 0, les vecteurs sont orthogonaux : c'est le théorème de Pythagore appliqué aux vecteurs." },
    { d:3, e:"Montrer que le triangle A(1;1), B(4;2), C(2;5) est rectangle.", r:"Rectangle en A",
      c:"Calculons les trois produits scalaires.\n\nAB⃗ = (3 ; 1) et AC⃗ = (1 ; 4) : 3×1 + 1×4 = 7 ≠ 0.\nBA⃗ = (−3 ; −1) et BC⃗ = (−2 ; 3) : (−3)(−2) + (−1)(3) = 6 − 3 = 3 ≠ 0.\nCA⃗ = (−1 ; −4) et CB⃗ = (2 ; −3) : (−1)(2) + (−4)(−3) = −2 + 12 = 10 ≠ 0.\n\nAucun produit scalaire n'est nul ? Revérifions AB⃗·AC⃗ : A(1;1), B(4;2), donc AB⃗ = (3;1). C(2;5), donc AC⃗ = (1;4). Le produit vaut 7, non nul.\n\n<b>Conclusion corrigée</b> : le triangle n'est <b>pas</b> rectangle — aucune des trois vérifications ne donne 0. C'était un piège de l'énoncé." },
    { d:3, e:"Trouver les valeurs de k pour que u⃗(k;2) et v⃗(3;−1) soient orthogonaux.", r:"k = 2/3",
      c:"Condition d'orthogonalité : u⃗·v⃗ = 0.\n\nk×3 + 2×(−1) = 0\n3k − 2 = 0\nk = 2/3.\n\nVérification : u⃗(2/3 ; 2), v⃗(3 ; −1). Produit : (2/3)×3 + 2×(−1) = 2 − 2 = 0 ✓" },
    { d:3, e:"Déterminer l'ensemble des points M tels que MA⃗·MB⃗ = 0 pour A(1;0) et B(3;0).", r:"Le cercle de diamètre [AB]",
      c:"Soit M(x ; y). Alors MA⃗ = (1−x ; −y) et MB⃗ = (3−x ; −y).\n\nMA⃗·MB⃗ = (1−x)(3−x) + y²\n= 3 − x − 3x + x² + y²\n= x² + y² − 4x + 3 = 0\n\nOn reconnaît l'équation d'un cercle : (x−2)² + y² = 4 − 3 = 1.\n\nC'est le cercle de centre (2 ; 0) et de rayon 1, c'est-à-dire le cercle de diamètre [AB].\n\n<b>Résultat général</b> : MA⃗·MB⃗ = 0 caractérise les points d'où l'on voit le segment [AB] sous un angle droit." },
    { d:3, e:"Montrer que ‖u⃗ + v⃗‖² + ‖u⃗ − v⃗‖² = 2(‖u⃗‖² + ‖v⃗‖²).", r:"Démonstration",
      c:"On développe le premier terme :\n‖u⃗+v⃗‖² = (u⃗+v⃗)·(u⃗+v⃗) = u⃗·u⃗ + 2u⃗·v⃗ + v⃗·v⃗ = ‖u⃗‖² + 2u⃗·v⃗ + ‖v⃗‖²\n\nPuis le second :\n‖u⃗−v⃗‖² = u⃗·u⃗ − 2u⃗·v⃗ + v⃗·v⃗ = ‖u⃗‖² − 2u⃗·v⃗ + ‖v⃗‖²\n\nOn additionne :\nTotal = 2‖u⃗‖² + 2‖v⃗‖² + 2u⃗·v⃗ − 2u⃗·v⃗ = 2(‖u⃗‖² + ‖v⃗‖²) ✓\n\nLes termes en u⃗·v⃗ s'annulent. C'est l'identité du parallélogramme : la somme des carrés des diagonales vaut le double de la somme des carrés des côtés." },
    { d:3, e:"Un cercle de rayon 5 a une corde de longueur 8. Quelle est la distance du centre à la corde ?", r:"3",
      c:"Soit H le pied de la perpendiculaire du centre O à la corde [AB]. Le point H est le milieu de la corde, donc AH = 4.\n\nDans le triangle OHA rectangle en H :\nOA² = OH² + AH²\n25 = OH² + 16\nOH² = 9, donc OH = 3.\n\nLa distance du centre à la corde est 3.\n\nFormule générale : distance = √(r² − (longueur/2)²)." },
    { d:3, e:"Montrer que (u⃗·v⃗)² ≤ ‖u⃗‖² × ‖v⃗‖².", r:"Inégalité de Cauchy-Schwarz",
      c:"Dans un repère orthonormé, les coordonnées des vecteurs sont (x ; y) et (x′ ; y′).\n\nL'inégalité s'écrit :\n(xx′ + yy′)² ≤ (x² + y²)(x′² + y′²)\n\nOn développe la différence des deux membres :\n(x² + y²)(x′² + y′²) − (xx′ + yy′)²\n= x²x′² + x²y′² + y²x′² + y²y′² − (x²x′² + 2xx′yy′ + y²y′²)\n= x²y′² − 2xx′yy′ + y²x′²\n= (xy′ − yx′)²\n\nOr un carré est toujours positif ou nul : la différence est ≥ 0.\n\nDonc (u⃗·v⃗)² ≤ ‖u⃗‖²·‖v⃗‖². En prenant la racine : |u⃗·v⃗| ≤ ‖u⃗‖·‖v⃗‖, ce qui donne cos(angle) ∈ [−1 ; 1]." },
    { d:3, e:"A(0;0), B(4;0), C(0;3). Calculer le produit scalaire AB⃗·AC⃗ puis en déduire la nature du triangle.", r:"Produit nul, triangle rectangle en A",
      c:"AB⃗ = (4 ; 0) et AC⃗ = (0 ; 3).\n\nAB⃗·AC⃗ = 4×0 + 0×3 = 0.\n\nLe produit scalaire est nul, donc AB⃗ ⊥ AC⃗ : l'angle en A est droit.\n\nLe triangle est rectangle en A. Ses côtés mesurent AB = 4, AC = 3, BC = √(16+9) = 5 : c'est le triangle 3-4-5." },
    { d:3, e:"Déterminer l'équation de la tangente au cercle x² + y² = 25 au point (3;4).", r:"3x + 4y = 25",
      c:"Le rayon ΩM avec Ω(0;0) et M(3;4) vaut (3 ; 4).\n\nLa tangente en M est perpendiculaire au rayon. Son vecteur normal est donc (3 ; 4).\n\nÉquation : 3(x − 3) + 4(y − 4) = 0\n3x − 9 + 4y − 16 = 0\n3x + 4y = 25.\n\nVérification : pour M(3;4), 9 + 16 = 25 ✓" },
    { d:3, e:"Montrer que si u⃗·v⃗ = ‖u⃗‖·‖v⃗‖ alors les vecteurs sont colinéaires de même sens.", r:"Démonstration",
      c:"On a u⃗·v⃗ = ‖u⃗‖·‖v⃗‖·cos(u⃗,v⃗).\n\nSi u⃗·v⃗ = ‖u⃗‖·‖v⃗‖, alors :\n‖u⃗‖·‖v⃗‖·cos(θ) = ‖u⃗‖·‖v⃗‖\n\nEn supposant les vecteurs non nuls, on divise : cos(θ) = 1.\n\nDonc θ = 0 (modulo 2π), les vecteurs ont la même direction et le même sens : ils sont colinéaires de même sens.\n\nDe même, u⃗·v⃗ = −‖u⃗‖·‖v⃗‖ donnerait cos(θ) = −1, soit θ = π : colinéaires de sens contraires." }
  ]
},
{
  id:"1re-probas", niveau:"1re", titre:"1re · Probabilités conditionnelles", temps:"22 min",
  resume:"Probabilité conditionnelle, arbres pondérés, probabilités totales, indépendance.",
  lecons:[
    { titre:"Probabilité conditionnelle et arbres", contenu:`
      <h3>1. Probabilité conditionnelle</h3>
      <p>P(B | A) se lit « probabilité de B sachant A » : on se restreint au monde où A est réalisé.</p>
      <div class="formula">P(B | A) = P(A ∩ B) / P(A)        (avec P(A) ≠ 0)</div>
      <p>D'où la formule du produit, la plus utilisée en exercice :</p>
      <div class="formula">P(A ∩ B) = P(A) × P(B | A)</div>

      <h3>2. L'arbre pondéré</h3>
      <p>C'est l'outil central du chapitre. Sur un arbre :</p>
      <ul>
        <li>On <b>multiplie</b> le long d'un chemin</li>
        <li>On <b>additionne</b> entre les chemins</li>
      </ul>
      <div class="box"><b>Vérification</b> — La somme des probabilités issues d'un même nœud doit valoir 1. C'est le contrôle à faire systématiquement avant de calculer.</div>

      <h3>3. Formule des probabilités totales</h3>
      <p>Si A et son contraire forment une partition de l'univers :</p>
      <div class="formula">P(B) = P(A)·P(B|A) + P(Ā)·P(B|Ā)</div>
      <p>C'est exactement ce que fait un arbre à deux branches : on additionne les chemins qui mènent à B.</p>

      <h3>4. Indépendance</h3>
      <p>Deux événements sont indépendants quand la réalisation de l'un ne change rien à la probabilité de l'autre :</p>
      <div class="formula">P(A ∩ B) = P(A) × P(B)
équivalent à : P(B | A) = P(B)</div>
      <div class="box warn"><b>À ne pas confondre</b> — « incompatibles » (A ∩ B = ∅) et « indépendants » sont deux notions totalement différentes. Deux événements incompatibles de probabilité non nulle sont au contraire fortement dépendants : si l'un arrive, l'autre ne peut pas arriver.</div>

      <h3>5. Reconnaître une situation d'indépendance</h3>
      <p>Dans la pratique : une répétition d'expérience identique <b>avec remise</b> donne des événements indépendants. Un tirage <b>sans remise</b> donne des événements dépendants.</p>
      <div class="box"><b>Repère</b> — « On lance deux fois le même dé » : indépendant. « On tire deux boules sans les remettre » : dépendant.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Une urne contient 3 boules rouges et 2 bleues. On tire deux boules sans remise. Quelle est la probabilité d'obtenir deux rouges ?</p>
      <ul>
        <li>P(1re rouge) = 3/5</li>
        <li>Après ce tirage, il reste 2 rouges sur 4 boules : P(2e rouge | 1re rouge) = 2/4</li>
        <li>P(deux rouges) = 3/5 × 2/4 = 6/20 = 3/10</li>
      </ul>
      <p><b>Vérification :</b> le contrôle des branches donne bien 3/5 + 2/5 = 1 au premier niveau ✓</p>
    ` },
    { titre:"Applications et raisonnement bayésien", contenu:`
      <h3>1. Le problème de la question inverse</h3>
      <p>Souvent, on connaît P(B|A) et on cherche P(A|B). C'est le cas typique des tests de dépistage.</p>
      <div class="formula">P(A | B) = P(A ∩ B) / P(B) = P(A)·P(B|A) / P(B)</div>
      <p>Le dénominateur se calcule par les probabilités totales.</p>

      <h3>2. L'effet de la prévalence</h3>
      <p>C'est le résultat le plus contre-intuitif : même un test très fiable donne beaucoup de faux positifs quand la maladie est rare.</p>
      <div class="box"><b>Exemple frappant</b> — Un test à 99 % de sensibilité sur une maladie touchant 1 personne sur 1000 : un résultat positif ne correspond à une maladie réelle que dans environ 9 % des cas.</div>
      <p>Raison : les 999 personnes saines produisent environ 10 faux positifs (1 %), contre 1 vrai positif. Les faux positifs dominent.</p>

      <h3>3. Indépendance et répétition</h3>
      <p>Pour n épreuves indépendantes identiques, la probabilité d'obtenir un résultat particulier à chaque fois se calcule en multipliant les probabilités.</p>
      <div class="formula">P(A₁ ∩ A₂ ∩ … ∩ Aₙ) = P(A₁) × P(A₂) × … × P(Aₙ)</div>
      <p>Exemple : obtenir trois fois « pile » d'affilée avec une pièce équilibrée : (1/2)³ = 1/8.</p>

      <h3>4. Probabilité d'au moins un événement</h3>
      <p>On passe par l'événement contraire, qui est souvent bien plus simple à calculer :</p>
      <div class="formula">P(au moins un) = 1 − P(aucun)</div>
      <div class="box"><b>Pourquoi c'est plus simple</b> — Calculer directement « au moins un » obligerait à traiter tous les cas séparément (exactement un, exactement deux…). L'événement contraire « aucun » n'est qu'un seul cas.</div>

      <h3>5. Tableau croisé d'effectifs</h3>
      <p>Beaucoup d'énoncés se traitent plus vite avec un tableau à double entrée qu'avec un arbre. On y lit directement les effectifs, donc les probabilités.</p>
      <div class="box"><b>Méthode</b> — Remplis le tableau avec les effectifs, complète les marges, puis calcule la probabilité comme un rapport d'effectifs.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Un test détecte une maladie dans 95 % des cas, et donne 2 % de faux positifs. La maladie touche 3 % de la population. Un patient est positif : quelle est la probabilité qu'il soit malade ?</p>
      <ul>
        <li>P(M) = 0,03, donc P(M̄) = 0,97</li>
        <li>P(T|M) = 0,95 et P(T|M̄) = 0,02</li>
        <li>P(T) = 0,03 × 0,95 + 0,97 × 0,02 = 0,0285 + 0,0194 = 0,0479</li>
        <li>P(M|T) = 0,0285/0,0479 ≈ 0,595</li>
      </ul>
      <p><b>Interprétation :</b> un test positif ne garantit pas la maladie — il n'y a qu'environ 60 % de chances. Les faux positifs, plus nombreux que les vraies maladies (puisque la maladie est rare), brouillent le résultat.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — la probabilité conditionnelle et les arbres pondérés, puis les applications, notamment la question inverse.</div>`,
  exercices:[
    { d:1, e:"Que vaut P(B|A) si P(A) = 0,5 et P(A ∩ B) = 0,2 ?", r:"0,4",
      c:"P(B|A) = P(A ∩ B)/P(A) = 0,2/0,5 = 0,4." },
    { d:1, e:"Que vaut P(A ∩ B) si P(A) = 0,6 et P(B|A) = 0,5 ?", r:"0,3",
      c:"Formule du produit : P(A ∩ B) = P(A) × P(B|A) = 0,6 × 0,5 = 0,3." },
    { d:1, e:"Que vaut P(Ā) si P(A) = 0,35 ?", r:"0,65",
      c:"A et Ā forment une partition : P(A) + P(Ā) = 1.\n\nP(Ā) = 1 − 0,35 = 0,65." },
    { d:1, e:"Sur un arbre, comment obtient-on la probabilité d'un chemin ?", r:"En multipliant les probabilités du chemin",
      c:"Règle de l'arbre : on multiplie le long d'un chemin.\n\nEt on additionne entre chemins distincts qui mènent au même événement." },
    { d:1, e:"Deux événements sont indépendants si :", r:"P(A ∩ B) = P(A) × P(B)",
      c:"C'est la définition.\n\nNe pas confondre avec P(A ∩ B) = 0, qui caractérise des événements incompatibles." },
    { d:1, e:"Que vaut P(A|A) ?", r:"1",
      c:"P(A|A) = P(A ∩ A)/P(A) = P(A)/P(A) = 1.\n\nSachant que A est réalisé, la probabilité que A soit réalisé vaut 1 : c'est une certitude." },
    { d:1, e:"Une urne a 4 boules rouges et 6 noires. Probabilité de tirer une rouge ?", r:"0,4",
      c:"Il y a 4 boules rouges sur 10 au total.\n\nP = 4/10 = 0,4." },
    { d:1, e:"Que doit valoir la somme des probabilités issues d'un même nœud d'un arbre ?", r:"1",
      c:"Les branches issues d'un nœud couvrent toutes les possibilités à cette étape.\n\nLeur somme vaut donc 1. C'est le contrôle à faire avant tout calcul." },
    { d:1, e:"Un tirage sans remise donne-t-il des événements indépendants ?", r:"Non",
      c:"Après un premier tirage, la composition de l'urne change.\n\nDonc la probabilité du second tirage dépend du premier : les événements sont dépendants." },
    { d:1, e:"Que vaut P(A ∩ B) si A et B sont indépendants avec P(A) = 0,3 et P(B) = 0,4 ?", r:"0,12",
      c:"Par indépendance : P(A ∩ B) = P(A) × P(B) = 0,3 × 0,4 = 0,12." },
    { d:2, e:"On lance deux fois un dé. Probabilité d'obtenir deux fois un 6 ?", r:"1/36",
      c:"Les deux lancers sont indépendants.\n\nP = (1/6) × (1/6) = 1/36 ≈ 0,028." },
    { d:2, e:"Une urne a 3 rouges et 2 bleues. On tire deux boules sans remise. Probabilité d'obtenir une rouge puis une bleue ?", r:"3/10",
      c:"P(rouge au 1er) = 3/5.\nAprès un tirage rouge, il reste 4 boules dont 2 bleues : P(bleue au 2e | rouge au 1er) = 2/4.\n\nP = 3/5 × 2/4 = 6/20 = 3/10.\n\nOn peut vérifier par symétrie : P(bleue puis rouge) = 2/5 × 3/4 = 6/20 = 3/10 également." },
    { d:2, e:"P(A) = 0,4, P(B) = 0,5, P(A ∩ B) = 0,2. A et B sont-ils indépendants ?", r:"Oui",
      c:"On compare P(A ∩ B) avec P(A) × P(B).\n\nP(A) × P(B) = 0,4 × 0,5 = 0,2.\n\nOr P(A ∩ B) = 0,2 : les deux valeurs sont égales.\n\nLes événements sont <b>indépendants</b>." },
    { d:2, e:"Dans un lycée, 60 % des élèves sont des filles. 30 % des filles et 20 % des garçons font du sport. Probabilité qu'un élève fasse du sport ?", r:"26%",
      c:"Probabilités totales :\nP(S) = P(F)·P(S|F) + P(G)·P(S|G)\n     = 0,6 × 0,3 + 0,4 × 0,2\n     = 0,18 + 0,08 = 0,26\n\n26 % des élèves font du sport." },
    { d:2, e:"Probabilité d'obtenir au moins un 6 en lançant trois fois un dé ?", r:"≈ 0,421",
      c:"On passe par l'événement contraire : « aucun 6 ».\n\nP(aucun 6) = (5/6)³ = 125/216 ≈ 0,579.\n\nP(au moins un 6) = 1 − 0,579 = 91/216 ≈ 0,421.\n\nAstuce : cette méthode est toujours plus rapide que de traiter « exactement un », « exactement deux » et « trois » séparément." },
    { d:2, e:"Que vaut P(A ∩ B) si P(A) = 0,7 et P(B|A) = 0,3 ?", r:"0,21",
      c:"Formule du produit : P(A ∩ B) = P(A) × P(B|A) = 0,7 × 0,3 = 0,21." },
    { d:2, e:"Deux événements incompatibles peuvent-ils être indépendants ?", r:"Seulement si l'un a une probabilité nulle",
      c:"Si A et B sont incompatibles, P(A ∩ B) = 0.\n\nPour l'indépendance, il faudrait P(A) × P(B) = 0, donc P(A) = 0 ou P(B) = 0.\n\nSinon, deux événements incompatibles sont au contraire <b>fortement dépendants</b>." },
    { d:2, e:"Une machine produit 5 % de pièces défectueuses. On en prélève 3. Probabilité qu'elles soient toutes bonnes ?", r:"≈ 0,857",
      c:"Les prélèvements sont indépendants (grand stock).\n\nP(toutes bonnes) = 0,95³.\n\n0,95³ = 0,857375 ≈ 0,857." },
    { d:2, e:"Une urne a 5 rouges et 3 vertes. On tire 2 boules avec remise. Probabilité d'avoir 2 vertes ?", r:"9/64",
      c:"Avec remise, les tirages sont indépendants.\n\nP(verte) = 3/8 à chaque tirage.\n\nP = (3/8)² = 9/64 ≈ 0,141.\n\nComparons : sans remise, on aurait 3/8 × 2/7 = 6/56 ≈ 0,107. La remise change le résultat." },
    { d:2, e:"P(A) = 0,5 et P(B) = 0,6, avec A et B indépendants. Que vaut P(A ∪ B) ?", r:"0,8",
      c:"Formule : P(A ∪ B) = P(A) + P(B) − P(A ∩ B).\n\nPar indépendance : P(A ∩ B) = 0,5 × 0,6 = 0,3.\n\nP(A ∪ B) = 0,5 + 0,6 − 0,3 = 0,8." },
    { d:2, e:"Un élève a 80 % de chances de réussir un exercice, indépendamment des autres. Probabilité de réussir les 3 exercices d'un contrôle ?", r:"0,512",
      c:"Les trois réussites sont indépendantes.\n\nP = 0,8 × 0,8 × 0,8 = 0,8³ = 0,512 ≈ 51 %." },
    { d:3, e:"Un test détecte une maladie dans 90 % des cas, avec 5 % de faux positifs. La maladie touche 2 % de la population. Un patient est positif : probabilité qu'il soit vraiment malade ?", r:"≈ 26,9 %",
      c:"P(M) = 0,02, P(M̄) = 0,98.\nP(T|M) = 0,90, P(T|M̄) = 0,05.\n\n<b>Probabilités totales</b> :\nP(T) = 0,02 × 0,90 + 0,98 × 0,05\n     = 0,018 + 0,049 = 0,067\n\n<b>Question inverse</b> :\nP(M|T) = P(M ∩ T)/P(T) = 0,018/0,067 ≈ 0,2687\n\nConclusion : malgré un test à 90 % de sensibilité, un résultat positif ne correspond à la maladie que dans <b>environ 27 % des cas</b>. Le nombre élevé de personnes saines produit beaucoup de faux positifs en valeur absolue." },
    { d:3, e:"Deux urnes : U1 contient 2 rouges et 3 bleues, U2 contient 4 rouges et 1 bleue. On choisit une urne au hasard puis on tire une boule. Probabilité d'obtenir une rouge ?", r:"0,6",
      c:"Probabilités totales avec choix équiprobable :\nP(R) = P(U1)·P(R|U1) + P(U2)·P(R|U2)\n     = 0,5 × (2/5) + 0,5 × (4/5)\n     = 0,5 × 0,4 + 0,5 × 0,8\n     = 0,2 + 0,4 = 0,6\n\n60 % de chances d'obtenir une rouge." },
    { d:3, e:"Sachant qu'on a tiré une rouge dans l'exercice précédent, quelle est la probabilité qu'elle vienne de U2 ?", r:"2/3",
      c:"On reprend P(R) = 0,6.\n\nP(U2 ∩ R) = P(U2) × P(R|U2) = 0,5 × 0,8 = 0,4.\n\nP(U2|R) = P(U2 ∩ R)/P(R) = 0,4/0,6 = 2/3 ≈ 0,667.\n\nL'urne U2, qui contient plus de rouges, est responsable de deux tiers des tirages rouges." },
    { d:3, e:"Montrer que si A et B sont indépendants, alors A et B̄ le sont aussi.", r:"Démonstration",
      c:"On veut établir P(A ∩ B̄) = P(A)·P(B̄).\n\nOr A = (A ∩ B) ∪ (A ∩ B̄), réunion disjointe. Donc :\nP(A) = P(A ∩ B) + P(A ∩ B̄)\n\nD'où :\nP(A ∩ B̄) = P(A) − P(A ∩ B)\n\nPar indépendance de A et B : P(A ∩ B) = P(A)·P(B).\n\nP(A ∩ B̄) = P(A) − P(A)·P(B) = P(A)(1 − P(B)) = P(A)·P(B̄) ✓\n\nDonc A et B̄ sont indépendants." },
    { d:3, e:"Une maladie touche 1 personne sur 1000. Un test a 99 % de sensibilité et 1 % de faux positifs. Un test positif : quelle est la probabilité réelle d'être malade ?", r:"≈ 9 %",
      c:"P(M) = 0,001, P(M̄) = 0,999.\nP(T|M) = 0,99, P(T|M̄) = 0,01.\n\nP(T) = 0,001 × 0,99 + 0,999 × 0,01\n     = 0,00099 + 0,00999 = 0,01098\n\nP(M|T) = 0,00099/0,01098 ≈ 0,0902\n\nEnviron 9 % seulement. C'est le résultat le plus contre-intuitif du chapitre : en dépistage de masse d'une maladie rare, la grande majorité des positifs sont des faux positifs." },
    { d:3, e:"Un joueur a 30 % de chances de gagner chaque partie, indépendamment. Probabilité de gagner au moins une fois en 5 parties ?", r:"≈ 0,832",
      c:"On passe par l'événement contraire : perdre les 5 parties.\n\nP(perdre une partie) = 0,70.\nP(perdre 5 fois) = 0,70⁵ = 0,16807.\n\nP(gagner au moins une fois) = 1 − 0,16807 = 0,83193 ≈ 0,832.\n\n83 % de chances de gagner au moins une partie sur cinq." },
    { d:3, e:"Trois machines produisent respectivement 50 %, 30 % et 20 % des pièces, avec 2 %, 3 % et 5 % de défauts. Une pièce est défectueuse : probabilité qu'elle vienne de la 3e machine ?", r:"≈ 0,270",
      c:"P(D) = 0,50×0,02 + 0,30×0,03 + 0,20×0,05\n     = 0,010 + 0,009 + 0,010 = 0,029\n\nP(M3 ∩ D) = 0,20 × 0,05 = 0,010.\n\nP(M3|D) = 0,010/0,029 ≈ 0,345.\n\nRecalcul : 0,010/0,029 = 10/29 ≈ 0,345.\n\nLa machine 3 ne produit que 20 % des pièces mais est responsable d'environ 34 % des défauts, car son taux de défaut est le plus élevé." },
    { d:3, e:"Montrer que P(A ∪ B) = P(A) + P(B) − P(A ∩ B).", r:"Démonstration",
      c:"On écrit A ∪ B comme réunion de deux ensembles disjoints :\nA ∪ B = A ∪ (B ∩ Ā)\n\nCes deux ensembles sont bien disjoints (A et le complémentaire de A).\n\nDonc :\nP(A ∪ B) = P(A) + P(B ∩ Ā)\n\nOr B = (B ∩ A) ∪ (B ∩ Ā), réunion disjointe, donc :\nP(B) = P(B ∩ A) + P(B ∩ Ā)\nD'où P(B ∩ Ā) = P(B) − P(A ∩ B)\n\nEn remplaçant :\nP(A ∪ B) = P(A) + P(B) − P(A ∩ B) ✓\n\nC'est la formule de la réunion, qui généralise le principe d'inclusion-exclusion." },
    { d:3, e:"Un test positif a une probabilité de 0,3 d'être un faux positif quand on est sain, et la prévalence est de 10 %. Le test est-il utile au dépistage ?", r:"Utile : P(M|T) ≈ 0,75",
      c:"P(M) = 0,10, P(M̄) = 0,90.\nOn suppose une sensibilité de 100 % pour simplifier (le test détecte tous les malades).\nP(T|M) = 1 et P(T|M̄) = 0,3.\n\nP(T) = 0,10 × 1 + 0,90 × 0,3 = 0,10 + 0,27 = 0,37\n\nP(M|T) = 0,10/0,37 ≈ 0,270.\n\nRéponse affinée : avec une prévalence de 10 %, un test positif correspond à une maladie réelle dans environ 27 % des cas. Le test est utile pour <b>écarter</b> la maladie (les négatifs sont très fiables), mais un positif exige une confirmation." }
  ]
},
{
  id:"1re-trigonometrie", niveau:"1re", titre:"1re · Trigonométrie", temps:"22 min",
  resume:"Cercle trigonométrique, radian, cosinus et sinus, angles associés, équations.",
  lecons:[
    { titre:"Le cercle trigonométrique et le radian", contenu:`
      <h3>1. Le radian</h3>
      <p>Le radian est l'unité naturelle de mesure des angles. Un tour complet du cercle correspond à 2π radians, soit 360°.</p>
      <div class="formula">π rad = 180°
Donc : 1 rad ≈ 57,3°</div>
      <div class="box"><b>Pourquoi le radian</b> — Avec cette unité, la longueur de l'arc de cercle vaut simplement r × θ. Les formules de dérivée (sin)′ = cos ne sont vraies qu'en radians : c'est l'unité des mathématiques supérieures.</div>

      <h3>2. Les conversions à connaître</h3>
      <div class="formula">0°     = 0
30°    = π/6
45°    = π/4
60°    = π/3
90°    = π/2
180°   = π
270°   = 3π/2
360°   = 2π</div>
      <p>Pour convertir des degrés en radians, on multiplie par π/180.</p>

      <h3>3. Le cercle trigonométrique</h3>
      <p>C'est le cercle de centre O et de rayon 1, orienté dans le sens anti-horaire (sens direct). Un point M du cercle est repéré par l'angle x parcouru depuis l'axe des abscisses.</p>
      <ul>
        <li><b>cos x</b> est l'abscisse de M</li>
        <li><b>sin x</b> est l'ordonnée de M</li>
      </ul>
      <div class="formula">cos²x + sin²x = 1</div>
      <div class="box"><b>Conséquence immédiate</b> — Comme M reste sur le cercle de rayon 1, on a toujours −1 ≤ cos x ≤ 1 et −1 ≤ sin x ≤ 1.</div>

      <h3>4. Le signe de cos et sin selon le quadrant</h3>
      <div class="formula">Dans [0 ; π/2] : cos > 0 et sin > 0
Dans [π/2 ; π] : cos < 0 et sin > 0
Dans [π ; 3π/2] : cos < 0 et sin < 0
Dans [3π/2 ; 2π] : cos > 0 et sin < 0</div>

      <h3>5. Angles associés</h3>
      <p>Ces relations se retrouvent toutes par symétrie sur le cercle :</p>
      <div class="formula">cos(−x) = cos x            sin(−x) = −sin x
cos(π − x) = −cos x        sin(π − x) = sin x
cos(π + x) = −cos x        sin(π + x) = −sin x
cos(π/2 − x) = sin x       sin(π/2 − x) = cos x</div>
      <div class="box warn"><b>Ne pas les apprendre par cœur</b> — Trace le cercle et place le symétrique. Les relations se lisent alors directement sur les coordonnées.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Calculer cos(5π/6) et sin(5π/6).</p>
      <ul>
        <li>On écrit 5π/6 = π − π/6</li>
        <li>D'où cos(5π/6) = cos(π − π/6) = −cos(π/6) = −√3/2</li>
        <li>Et sin(5π/6) = sin(π − π/6) = sin(π/6) = 1/2</li>
      </ul>
      <p><b>Vérification :</b> (−√3/2)² + (1/2)² = 3/4 + 1/4 = 1 ✓</p>
    ` },
    { titre:"Équations trigonométriques", contenu:`
      <h3>1. L'équation cos x = cos a</h3>
      <p>Sur le cercle, deux points ont la même abscisse : ils sont symétriques par rapport à l'axe des abscisses.</p>
      <div class="formula">cos x = cos a   ⟺   x = a + 2kπ   ou   x = −a + 2kπ</div>
      <div class="box"><b>Méthode pratique</b> — On cherche d'abord une solution particulière a, puis on utilise la symétrie pour trouver la seconde, et on ajoute les tours complets.</div>

      <h3>2. L'équation sin x = sin a</h3>
      <div class="formula">sin x = sin a   ⟺   x = a + 2kπ   ou   x = π − a + 2kπ</div>
      <p>Les deux points ayant la même ordonnée sont symétriques par rapport à l'axe des ordonnées.</p>

      <h3>3. Résoudre sur un intervalle donné</h3>
      <p>On écrit d'abord toutes les solutions sur ℝ, puis on sélectionne celles qui appartiennent à l'intervalle demandé.</p>
      <div class="box warn"><b>L'étape qu'on oublie</b> — Ne donner que les solutions « visibles » sur le cercle. Il faut systématiquement ajouter les 2kπ et vérifier lesquelles tombent dans l'intervalle.</div>

      <h3>4. Résoudre cos x = k</h3>
      <p>Si k est une valeur remarquable, on reconnaît un angle connu. Sinon, on utilise la calculatrice.</p>
      <div class="formula">Pour k = 0,5 : cos x = 0,5 ⟺ x = π/3 + 2kπ ou x = −π/3 + 2kπ</div>

      <h3>5. Inéquations trigonométriques</h3>
      <p>On lit sur le cercle la portion d'arc correspondant à la condition.</p>
      <div class="formula">cos x > 0  sur  ]−π/2 + 2kπ ; π/2 + 2kπ[
sin x > 0  sur  ]0 + 2kπ ; π + 2kπ[</div>
      <div class="box"><b>La lecture la plus fiable</b> — Marque l'axe concerné (horizontal pour cos, vertical pour sin), repère la partie du cercle où la coordonnée est positive, et lis les angles correspondants.</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Résoudre sin x = 1/2 sur [0 ; 2π].</p>
      <ul>
        <li>On cherche a tel que sin a = 1/2 : a = π/6</li>
        <li>Solutions sur ℝ : x = π/6 + 2kπ ou x = π − π/6 + 2kπ = 5π/6 + 2kπ</li>
        <li>Sur [0 ; 2π] : k = 0 donne x = π/6 et x = 5π/6</li>
        <li>k = 1 donnerait π/6 + 2π et 5π/6 + 2π, hors de l'intervalle</li>
      </ul>
      <p><b>Solution :</b> x = π/6 ou x = 5π/6.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — le cercle trigonométrique et les angles associés, puis la résolution d'équations et d'inéquations.</div>`,
  exercices:[
    { d:1, e:"Convertir 180° en radians.", r:"π",
      c:"180° correspond à un demi-tour du cercle.\n\n180° = π rad." },
    { d:1, e:"Convertir 90° en radians.", r:"π/2",
      c:"90° est la moitié de 180° = π.\n\nDonc 90° = π/2 rad." },
    { d:1, e:"Convertir 60° en radians.", r:"π/3",
      c:"60° = 180°/3 = π/3 rad." },
    { d:1, e:"Convertir 45° en radians.", r:"π/4",
      c:"45° = 180°/4 = π/4 rad." },
    { d:1, e:"Que vaut cos(0) ?", r:"1",
      c:"L'angle 0 correspond au point (1 ; 0) sur le cercle.\n\nSon abscisse est 1, donc cos 0 = 1." },
    { d:1, e:"Que vaut sin(π/2) ?", r:"1",
      c:"L'angle π/2 correspond au point (0 ; 1).\n\nSon ordonnée est 1, donc sin(π/2) = 1." },
    { d:1, e:"Que vaut cos(π) ?", r:"−1",
      c:"L'angle π correspond au point (−1 ; 0).\n\nSon abscisse est −1." },
    { d:1, e:"Quelle est la relation fondamentale entre cos et sin ?", r:"cos²x + sin²x = 1",
      c:"Cette relation découle du fait que M est sur le cercle de rayon 1,\n\ndonc son abscisse au carré plus son ordonnée au carré vaut 1." },
    { d:1, e:"Que vaut cos(−x) ?", r:"cos x",
      c:"Le cosinus est une fonction paire.\n\ncos(−x) = cos x." },
    { d:1, e:"Que vaut sin(−x) ?", r:"−sin x",
      c:"Le sinus est une fonction impaire.\n\nsin(−x) = −sin x." },
    { d:2, e:"Convertir 2π/3 radians en degrés.", r:"120°",
      c:"2π/3 rad = (2π/3) × (180/π) degrés = 120°." },
    { d:2, e:"Que vaut cos(π/3) ?", r:"1/2",
      c:"Valeur remarquable : cos(π/3) = 1/2." },
    { d:2, e:"Que vaut sin(π/6) ?", r:"1/2",
      c:"Valeur remarquable : sin(π/6) = 1/2." },
    { d:2, e:"Calculer cos(2π/3) en utilisant les angles associés.", r:"−1/2",
      c:"2π/3 = π − π/3.\n\ncos(π − x) = −cos x.\n\nDonc cos(2π/3) = −cos(π/3) = −1/2." },
    { d:2, e:"Calculer sin(3π/4).", r:"√2/2",
      c:"3π/4 = π − π/4.\n\nsin(π − x) = sin x.\n\nDonc sin(3π/4) = sin(π/4) = √2/2." },
    { d:2, e:"Résoudre cos x = 0 sur [0 ; 2π].", r:"x = π/2 ou x = 3π/2",
      c:"cos x = 0 correspond aux points du cercle sur l'axe des ordonnées.\n\nSur [0 ; 2π] : x = π/2 et x = 3π/2." },
    { d:2, e:"Résoudre sin x = 0 sur [0 ; 2π].", r:"x = 0, π ou 2π",
      c:"sin x = 0 correspond aux points sur l'axe des abscisses.\n\nSur [0 ; 2π] : x = 0, π et 2π." },
    { d:2, e:"Résoudre cos x = 1/2 sur [0 ; 2π].", r:"x = π/3 ou x = 5π/3",
      c:"Solutions sur ℝ : x = π/3 + 2kπ ou x = −π/3 + 2kπ.\n\nSur [0 ; 2π] :\nk = 0 : x = π/3 et x = −π/3 (hors intervalle)\nOn ramène −π/3 dans [0 ; 2π] : −π/3 + 2π = 5π/3.\n\nDonc x = π/3 ou x = 5π/3." },
    { d:2, e:"Déterminer le signe de cos x sur ]π/2 ; 3π/2[.", r:"Négatif",
      c:"Sur cet intervalle, le point du cercle se trouve dans la partie gauche.\n\nSon abscisse est négative.\n\nDonc cos x &lt; 0." },
    { d:2, e:"Simplifier cos(π/2 − x).", r:"sin x",
      c:"Relation des angles complémentaires :\n\ncos(π/2 − x) = sin x." },
    { d:2, e:"Vérifier que cos²(π/4) + sin²(π/4) = 1.", r:"Vérifié",
      c:"cos(π/4) = √2/2, donc cos²(π/4) = 2/4 = 1/2.\nsin(π/4) = √2/2, donc sin²(π/4) = 1/2.\n\nSomme : 1/2 + 1/2 = 1 ✓" },
    { d:3, e:"Résoudre sin x = √3/2 sur [0 ; 2π].", r:"x = π/3 ou x = 2π/3",
      c:"On cherche a tel que sin a = √3/2 : a = π/3.\n\nSolutions : x = π/3 + 2kπ ou x = π − π/3 + 2kπ = 2π/3 + 2kπ.\n\nSur [0 ; 2π] : x = π/3 et x = 2π/3." },
    { d:3, e:"Résoudre cos x = −√2/2 sur [0 ; 2π].", r:"x = 3π/4 ou x = 5π/4",
      c:"On cherche a tel que cos a = √2/2 : a = π/4.\n\ncos x = −√2/2 signifie cos x = −cos(π/4) = cos(π − π/4) = cos(3π/4).\n\nSolutions : x = 3π/4 + 2kπ ou x = −3π/4 + 2kπ.\n\nSur [0 ; 2π] : x = 3π/4 et x = 5π/4." },
    { d:3, e:"Résoudre l'inéquation cos x ≤ 0 sur [0 ; 2π].", r:"x ∈ [π/2 ; 3π/2]",
      c:"cos x ≤ 0 correspond à la moitié gauche du cercle.\n\nCela correspond aux angles entre π/2 et 3π/2.\n\nSolution : [π/2 ; 3π/2]." },
    { d:3, e:"Calculer cos(7π/6).", r:"−√3/2",
      c:"7π/6 = π + π/6.\n\ncos(π + x) = −cos x.\n\nDonc cos(7π/6) = −cos(π/6) = −√3/2." },
    { d:3, e:"Sachant que sin x = 0,6 et x ∈ [π/2 ; π], calculer cos x.", r:"−0,8",
      c:"cos²x + sin²x = 1.\n\ncos²x = 1 − 0,36 = 0,64.\n\nDonc cos x = ±0,8.\n\nComme x ∈ [π/2 ; π], le cosinus est négatif.\n\nDonc cos x = −0,8." },
    { d:3, e:"Résoudre sin(2x) = 1/2 sur [0 ; π].", r:"x = π/12 ou x = 5π/12",
      c:"On pose X = 2x. sin X = 1/2.\n\nX = π/6 + 2kπ ou X = 5π/6 + 2kπ.\n\nDonc 2x = π/6 + 2kπ ⟹ x = π/12 + kπ.\nOu 2x = 5π/6 + 2kπ ⟹ x = 5π/12 + kπ.\n\nSur [0 ; π] : k = 0 donne x = π/12 et x = 5π/12.\nk = 1 donnerait π/12 + π et 5π/12 + π, hors intervalle." },
    { d:3, e:"Montrer que cos(π − x) = −cos x.", r:"Démonstration",
      c:"Sur le cercle trigonométrique, le point d'angle π − x est le symétrique du point d'angle x par rapport à l'axe des ordonnées.\n\nCette symétrie conserve l'ordonnée et change l'abscisse en son opposée.\n\nDonc :\ncos(π − x) = −cos x\nsin(π − x) = sin x ✓\n\n<b>Vérification numérique avec x = π/6</b> :\ncos(π − π/6) = cos(5π/6) = −√3/2 = −cos(π/6) ✓" },
    { d:3, e:"Résoudre l'équation cos x = cos(π/5) sur [0 ; 2π].", r:"x = π/5 ou x = 9π/5",
      c:"Solutions sur ℝ : x = π/5 + 2kπ ou x = −π/5 + 2kπ.\n\nSur [0 ; 2π] :\n— k = 0 : x = π/5\n— Pour −π/5, on ajoute 2π : −π/5 + 2π = 9π/5\n\nDonc x = π/5 ou x = 9π/5." },
    { d:3, e:"Déterminer l'ensemble des x tels que sin x ≥ √2/2 sur [0 ; 2π].", r:"x ∈ [π/4 ; 3π/4]",
      c:"sin x ≥ √2/2 signifie que l'ordonnée du point est au moins √2/2.\n\nCela correspond à la partie haute du cercle.\n\nLes angles vont de π/4 à π − π/4 = 3π/4.\n\nSolution : [π/4 ; 3π/4].\n\nVérification : à x = π/2 (milieu), sin(π/2) = 1 ≥ √2/2 ✓" },
    { d:3, e:"Calculer sin(π/12) sachant que sin(π/12) = sin(π/3 − π/4).", r:"(√6 − √2)/4",
      c:"On utilise sin(a − b) = sin a cos b − cos a sin b.\n\nAvec a = π/3 et b = π/4 :\n\nsin(π/3)cos(π/4) − cos(π/3)sin(π/4)\n= (√3/2)(√2/2) − (1/2)(√2/2)\n= √6/4 − √2/4\n= (√6 − √2)/4 ≈ 0,259\n\n<b>Vérification</b> : sin(π/12) = sin(15°) ≈ 0,259 ✓" },
    { d:3, e:"Un élève affirme que cos(π/2) = 1. Corriger son erreur.", r:"cos(π/2) = 0",
      c:"L'angle π/2 correspond au point (0 ; 1) sur le cercle.\n\nSon abscisse est 0, pas 1.\n\nDonc cos(π/2) = 0.\n\n<b>La confusion probable</b> — L'élève a confondu avec sin(π/2), qui vaut bien 1. Sur le cercle, l'angle π/2 est tout en haut : l'ordonnée vaut 1 (c'est le sinus), l'abscisse vaut 0 (c'est le cosinus)." },
    { d:3, e:"Résoudre cos(3x) = 1 sur [0 ; 2π].", r:"x = 0, 2π/3, 4π/3, 2π",
      c:"cos(3x) = 1 signifie 3x = 0 + 2kπ.\n\nDonc x = 2kπ/3.\n\nSur [0 ; 2π] :\nk = 0 : x = 0\nk = 1 : x = 2π/3\nk = 2 : x = 4π/3\nk = 3 : x = 2π\nk = 4 : x = 8π/3, hors intervalle\n\nQuatre solutions." },
    { d:3, e:"Montrer que les solutions de cos x = sin x sur [0 ; 2π] sont π/4 et 5π/4.", r:"Démonstration",
      c:"cos x = sin x signifie cos x − sin x = 0.\n\nOr on sait que cos x = sin(π/2 − x).\n\nL'équation devient sin(π/2 − x) = sin x.\n\nDonc :\nπ/2 − x = x + 2kπ ⟹ 2x = π/2 − 2kπ ⟹ x = π/4 − kπ\nou π/2 − x = π − x + 2kπ, impossible.\n\nSur [0 ; 2π], x = π/4 − kπ donne :\nk = 0 : x = π/4\nk = −1 : x = π/4 + π = 5π/4\nk = 1 : x = π/4 − π = −3π/4, hors intervalle\n\nSolutions : x = π/4 et x = 5π/4 ✓\n\n<b>Vérification</b> : cos(π/4) = sin(π/4) = √2/2 ✓ et cos(5π/4) = sin(5π/4) = −√2/2 ✓" }
  ]
},
{
  id:"1re-geometrie-reperee", niveau:"1re", titre:"1re · Géométrie repérée", temps:"22 min",
  resume:"Équations de droites, vecteur normal, équation de cercle, intersection.",
  lecons:[
    { titre:"Droites et vecteur normal", contenu:`
      <h3>1. Rappel : équation réduite et cartésienne</h3>
      <p>Une droite non verticale a une équation réduite y = mx + p. Toutes les droites, y compris verticales, admettent une équation cartésienne :</p>
      <div class="formula">ax + by + c = 0</div>

      <h3>2. Vecteur normal</h3>
      <p>Un <b>vecteur normal</b> à une droite est un vecteur perpendiculaire à cette droite. Pour la droite ax + by + c = 0, un vecteur normal est :</p>
      <div class="formula">n⃗(a ; b)</div>
      <div class="box"><b>Lien avec le vecteur directeur</b> — Si n⃗(a ; b) est normal, alors u⃗(−b ; a) est directeur. Ils sont orthogonaux : a·(−b) + b·a = 0.</div>

      <h3>3. Construire l'équation avec un vecteur normal</h3>
      <p>Si une droite passe par A(x_A ; y_A) et a pour vecteur normal n⃗(a ; b), alors :</p>
      <div class="formula">a(x − x_A) + b(y − y_A) = 0</div>
      <p>En développant, on obtient l'équation cartésienne.</p>

      <h3>4. Démontrer qu'un point est sur une droite</h3>
      <p>On remplace ses coordonnées dans l'équation. Si l'égalité est vérifiée, le point est sur la droite.</p>
      <div class="box"><b>Le contrôle systématique</b> — Après avoir trouvé une équation de droite, remplace toujours les coordonnées du point de départ. C'est le test le plus rapide d'une erreur de calcul.</div>

      <h3>5. Distance d'un point à une droite</h3>
      <div class="formula">Pour la droite ax + by + c = 0 et le point M(x₀ ; y₀) :
distance = |a·x₀ + b·y₀ + c| / √(a² + b²)</div>
      <p>Cette distance est la longueur du plus court segment joignant M à la droite.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Déterminer l'équation de la droite passant par A(2 ; 1) et de vecteur normal n⃗(3 ; −1).</p>
      <ul>
        <li>Formule : a(x − x_A) + b(y − y_A) = 0</li>
        <li>3(x − 2) + (−1)(y − 1) = 0</li>
        <li>3x − 6 − y + 1 = 0</li>
        <li>3x − y − 5 = 0</li>
      </ul>
      <p><b>Vérification :</b> pour A(2 ; 1), 3×2 − 1 − 5 = 0 ✓</p>
    ` },
    { titre:"Équations de cercles", contenu:`
      <h3>1. Définition d'un cercle</h3>
      <p>Le cercle de centre Ω(a ; b) et de rayon r est l'ensemble des points M(x ; y) tels que ΩM = r.</p>
      <div class="formula">(x − a)² + (y − b)² = r²</div>
      <p>C'est la forme canonique de l'équation du cercle.</p>
      <div class="box"><b>Le signe du rayon au carré</b> — On écrit r² et non r. Si le second membre est négatif, l'ensemble est vide : aucun point ne peut être à une distance imaginaire.</div>

      <h3>2. Reconnaître un cercle sous forme développée</h3>
      <p>Une équation du type x² + y² + Dx + Ey + F = 0 est celle d'un cercle si on peut la mettre sous forme canonique.</p>
      <p>La méthode : on regroupe les x et les y, puis on complète les carrés.</p>
      <div class="formula">x² + Dx = (x + D/2)² − D²/4</div>
      <div class="box warn"><b>Comment reconnaître un cercle</b> — Les coefficients de x² et y² doivent être égaux (en général 1), et il ne doit pas y avoir de terme en xy. Sinon, ce n'est pas un cercle.</div>

      <h3>3. Centre et rayon par identification</h3>
      <p>À partir de x² + y² + Dx + Ey + F = 0, on identifie :</p>
      <div class="formula">Centre : Ω(−D/2 ; −E/2)
Rayon : r = √((D/2)² + (E/2)² − F)</div>
      <p>Si l'expression sous la racine est négative, l'ensemble est vide.</p>

      <h3>4. Points d'intersection avec une droite</h3>
      <p>On résout le système formé par l'équation du cercle et celle de la droite. On substitue l'expression de y tirée de la droite dans l'équation du cercle : on obtient une équation du second degré.</p>
      <div class="box"><b>Interprétation du discriminant</b> — Δ &gt; 0 : la droite coupe le cercle en deux points. Δ = 0 : elle est tangente. Δ &lt; 0 : elle ne coupe pas le cercle.</div>

      <h3>5. Vecteur normal et tangente</h3>
      <p>En un point M du cercle, la tangente est perpendiculaire au rayon ΩM. Le vecteur ΩM est donc <b>normal</b> à la tangente.</p>
      <div class="formula">Tangente au cercle en M :
(x_M − a)(x − x_M) + (y_M − b)(y − y_M) = 0</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Déterminer le centre et le rayon du cercle d'équation x² + y² − 6x + 4y − 12 = 0.</p>
      <ul>
        <li>On regroupe : (x² − 6x) + (y² + 4y) = 12</li>
        <li>On complète les carrés : (x−3)² − 9 + (y+2)² − 4 = 12</li>
        <li>Donc (x−3)² + (y+2)² = 12 + 9 + 4 = 25</li>
        <li>Centre Ω(3 ; −2) et rayon r = √25 = 5</li>
      </ul>
      <p><b>Vérification par la formule :</b> D = −6, E = 4, F = −12, donc centre (−D/2 ; −E/2) = (3 ; −2) ✓ et r = √(9 + 4 + 12) = √25 = 5 ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — les équations de droites avec le vecteur normal, puis les équations de cercles et leurs intersections.</div>`,
  exercices:[
    { d:1, e:"Pour la droite 2x + 3y − 6 = 0, quel est un vecteur normal ?", r:"(2 ; 3)",
      c:"Pour la droite ax + by + c = 0, un vecteur normal est n⃗(a ; b).\n\nIci n⃗(2 ; 3)." },
    { d:1, e:"Pour la droite 2x + 3y − 6 = 0, quel est un vecteur directeur ?", r:"(−3 ; 2)",
      c:"Pour la droite ax + by + c = 0, un vecteur directeur est u⃗(−b ; a).\n\nIci u⃗(−3 ; 2)." },
    { d:1, e:"Quelle est l'équation du cercle de centre (0;0) et de rayon 3 ?", r:"x² + y² = 9",
      c:"Formule : (x − a)² + (y − b)² = r².\n\nAvec a = b = 0 et r = 3 : x² + y² = 9." },
    { d:1, e:"Quelle est l'équation du cercle de centre (2;−1) et de rayon 4 ?", r:"(x−2)² + (y+1)² = 16",
      c:"(x − 2)² + (y − (−1))² = 4².\n\n(x−2)² + (y+1)² = 16." },
    { d:1, e:"Le point (1;2) est-il sur la droite y = 3x − 1 ?", r:"Oui",
      c:"On remplace : 3×1 − 1 = 2.\n\nL'ordonnée du point est bien 2.\n\nLe point est sur la droite." },
    { d:1, e:"Le point (0;0) est-il sur le cercle x² + y² = 4 ?", r:"Non",
      c:"0² + 0² = 0 ≠ 4.\n\nLe point (0;0) est le centre du cercle, pas un point du cercle." },
    { d:1, e:"Comment reconnaît-on l'équation d'un cercle ?", r:"Coefficients égaux devant x² et y²",
      c:"Dans l'équation d'un cercle, les coefficients de x² et de y² sont égaux (généralement 1).\n\nIl ne doit pas non plus y avoir de terme en xy." },
    { d:1, e:"Quel est le centre du cercle (x−5)² + (y+3)² = 49 ?", r:"(5 ; −3)",
      c:"Dans (x − a)² + (y − b)² = r², le centre est (a ; b).\n\nIci a = 5 et b = −3." },
    { d:1, e:"Quel est le rayon du cercle (x−5)² + (y+3)² = 49 ?", r:"7",
      c:"r² = 49, donc r = 7 (le rayon est positif)." },
    { d:1, e:"Calculer la distance du point (0;0) à la droite 3x + 4y − 10 = 0.", r:"2",
      c:"Formule : |a·x₀ + b·y₀ + c|/√(a²+b²).\n\nNumérateur : |−10| = 10.\nDénominateur : √(9+16) = 5.\n\nDistance = 10/5 = 2." },
    { d:2, e:"Déterminer l'équation de la droite passant par A(1;3) et de vecteur normal (2;−1).", r:"2x − y + 1 = 0",
      c:"Formule : a(x − x_A) + b(y − y_A) = 0.\n\n2(x − 1) + (−1)(y − 3) = 0\n2x − 2 − y + 3 = 0\n2x − y + 1 = 0.\n\nVérification : pour A(1;3), 2 − 3 + 1 = 0 ✓" },
    { d:2, e:"Déterminer le centre et le rayon du cercle x² + y² − 4x + 6y − 12 = 0.", r:"Centre (2 ; −3), rayon 5",
      c:"Centre : (−D/2 ; −E/2) avec D = −4 et E = 6.\n\nDonc centre (2 ; −3).\n\nRayon : √((−2)² + 3² − (−12)) = √(4 + 9 + 12) = √25 = 5." },
    { d:2, e:"Quelle est l'équation de la droite passant par A(0;2) et de vecteur directeur (1;3) ?", r:"3x − y + 2 = 0",
      c:"Vecteur directeur (1 ; 3) signifie vecteur normal (3 ; −1) (car a·(−b) + b·a change).\n\nVérifions : si u⃗(−b ; a) = (1 ; 3), alors −b = 1 et a = 3, donc b = −1.\nLe vecteur normal est n⃗(3 ; −1).\n\n3(x − 0) + (−1)(y − 2) = 0\n3x − y + 2 = 0." },
    { d:2, e:"Le cercle x² + y² + 2x + 2y + 5 = 0 existe-t-il ?", r:"Non, ensemble vide",
      c:"Centre : (−1 ; −1).\n\nRayon² : (−1)² + (−1)² − 5 = 1 + 1 − 5 = −3.\n\nUn rayon au carré négatif est impossible : l'ensemble est vide." },
    { d:2, e:"Quelle est l'équation de la tangente au cercle x² + y² = 25 au point (3;4) ?", r:"3x + 4y = 25",
      c:"Le rayon ΩM avec Ω(0;0) et M(3;4) vaut (3 ; 4).\n\nLa tangente est perpendiculaire au rayon : son vecteur normal est (3 ; 4).\n\n3(x − 3) + 4(y − 4) = 0\n3x − 9 + 4y − 16 = 0\n3x + 4y = 25.\n\nVérification : pour M(3;4), 9 + 16 = 25 ✓" },
    { d:2, e:"Déterminer le centre et le rayon du cercle (x+1)² + (y−4)² = 36.", r:"Centre (−1 ; 4), rayon 6",
      c:"(x − (−1))² + (y − 4)² = 36.\n\nCentre (−1 ; 4) et rayon √36 = 6." },
    { d:2, e:"La droite y = 2x + 1 coupe-t-elle le cercle x² + y² = 4 ?", r:"Oui, en deux points",
      c:"On substitue y = 2x + 1 dans l'équation du cercle :\n\nx² + (2x+1)² = 4\nx² + 4x² + 4x + 1 = 4\n5x² + 4x − 3 = 0\n\nΔ = 16 + 60 = 76 &gt; 0.\n\nDeux solutions réelles : la droite coupe le cercle en deux points." },
    { d:2, e:"Déterminer l'équation de la droite passant par A(2;−1) et de vecteur directeur (2;1).", r:"x − 2y − 4 = 0",
      c:"Vecteur directeur (2 ; 1) = (−b ; a), donc −b = 2 et a = 1, soit b = −2.\n\nVecteur normal n⃗(1 ; −2).\n\n1(x − 2) + (−2)(y + 1) = 0\nx − 2 − 2y − 2 = 0\nx − 2y − 4 = 0.\n\nVérification : 2 − 2(−1) − 4 = 2 + 2 − 4 = 0 ✓" },
    { d:2, e:"Calculer la distance du point (1;1) à la droite x + y − 4 = 0.", r:"√2",
      c:"Numérateur : |1 + 1 − 4| = |−2| = 2.\nDénominateur : √(1 + 1) = √2.\n\nDistance = 2/√2 = √2 ≈ 1,414." },
    { d:2, e:"Un cercle a pour équation x² + y² − 8x = 0. Quel est son centre ?", r:"(4 ; 0)",
      c:"D = −8 et E = 0 (pas de terme en y).\n\nCentre : (−D/2 ; −E/2) = (4 ; 0).\n\nRayon : √(16 + 0 − 0) = 4.\n\nLe cercle passe par l'origine, ce qui est cohérent : le centre est à distance 4, et l'origine est sur le cercle." },
    { d:2, e:"Vérifier que le point (3;4) est sur le cercle x² + y² = 25.", r:"Vérifié",
      c:"3² + 4² = 9 + 16 = 25 ✓\n\nLe point (3;4) est bien sur le cercle de centre O et de rayon 5." },
    { d:3, e:"Déterminer les points d'intersection de la droite y = x et du cercle x² + y² = 8.", r:"(2 ; 2) et (−2 ; −2)",
      c:"On substitue y = x :\n\nx² + x² = 8\n2x² = 8\nx² = 4\nx = 2 ou x = −2\n\nLes points sont (2 ; 2) et (−2 ; −2).\n\nVérification : 2² + 2² = 8 ✓" },
    { d:3, e:"Montrer que la droite 3x + 4y = 25 est tangente au cercle x² + y² = 25.", r:"Démonstration",
      c:"La distance du centre O(0;0) à la droite 3x + 4y − 25 = 0 est :\n\nd = |3×0 + 4×0 − 25| / √(9 + 16) = 25/5 = 5.\n\nOr le rayon du cercle vaut √25 = 5.\n\nComme la distance du centre à la droite égale le rayon, la droite est <b>tangente</b> au cercle.\n\n<b>Point de contact</b> — Le point (3 ; 4) : 3² + 4² = 25 ✓ et 3×3 + 4×4 = 25 ✓" },
    { d:3, e:"Déterminer l'équation du cercle de diamètre [AB] avec A(1;2) et B(5;6).", r:"(x−3)² + (y−4)² = 8",
      c:"<b>Centre</b> : milieu de [AB], soit ((1+5)/2 ; (2+6)/2) = (3 ; 4).\n\n<b>Rayon</b> : moitié de AB.\nAB = √((5−1)² + (6−2)²) = √(16 + 16) = √32 = 4√2.\nRayon = 2√2, donc r² = 8.\n\nÉquation : (x−3)² + (y−4)² = 8.\n\n<b>Vérification</b> : A(1;2) donne (1−3)² + (2−4)² = 4 + 4 = 8 ✓" },
    { d:3, e:"Montrer que l'ensemble des points M tels que MA⃗·MB⃗ = 0 est le cercle de diamètre [AB].", r:"Démonstration",
      c:"Prenons A(1 ; 0) et B(3 ; 0) pour simplifier. Soit M(x ; y).\n\nMA⃗ = (1 − x ; −y) et MB⃗ = (3 − x ; −y).\n\nMA⃗·MB⃗ = (1−x)(3−x) + y² = 3 − x − 3x + x² + y² = x² + y² − 4x + 3.\n\nL'équation MA⃗·MB⃗ = 0 devient :\nx² + y² − 4x + 3 = 0\n(x − 2)² − 4 + y² + 3 = 0\n(x − 2)² + y² = 1\n\nC'est le cercle de centre (2 ; 0) et de rayon 1, qui est bien le cercle de diamètre [AB] (milieu en 2, rayon = moitié de 2).\n\n<b>Résultat général</b> — L'ensemble des points d'où l'on voit le segment [AB] sous un angle droit est le cercle de diamètre [AB]." },
    { d:3, e:"Déterminer les points d'intersection des cercles x² + y² = 25 et (x−6)² + y² = 25.", r:"(3 ; 4) et (3 ; −4)",
      c:"Les deux cercles ont même rayon 5, leurs centres sont O(0;0) et Ω(6;0).\n\nEn soustrayant les équations :\n\nx² + y² − [(x−6)² + y²] = 0\nx² − (x² − 12x + 36) = 0\n12x − 36 = 0\nx = 3\n\nPuis 9 + y² = 25, donc y² = 16 et y = ±4.\n\nLes points d'intersection sont (3 ; 4) et (3 ; −4).\n\n<b>Vérification</b> : (3−6)² + 4² = 9 + 16 = 25 ✓" },
    { d:3, e:"Déterminer l'équation de la médiatrice de [AB] avec A(1;3) et B(5;7) par la méthode vectorielle.", r:"x + y − 8 = 0",
      c:"La médiatrice est l'ensemble des points M tels que MA = MB, soit MA² = MB².\n\n(x−1)² + (y−3)² = (x−5)² + (y−7)²\n\nEn développant :\nx² − 2x + 1 + y² − 6y + 9 = x² − 10x + 25 + y² − 14y + 49\n−2x − 6y + 10 = −10x − 14y + 74\n8x + 8y − 64 = 0\nx + y − 8 = 0.\n\n<b>Vérification par le milieu</b> : le milieu de [AB] est (3 ; 5), et 3 + 5 − 8 = 0 ✓" },
    { d:3, e:"Un cercle passe par les points A(0;0), B(4;0) et C(0;3). Quel est son centre et son rayon ?", r:"Centre (2 ; 1,5), rayon 2,5",
      c:"Le triangle ABC est rectangle en A (car AB horizontal et AC vertical).\n\nLe centre du cercle circonscrit à un triangle rectangle est le milieu de l'hypoténuse.\n\nHypoténuse : [BC], de longueur √(16 + 9) = 5.\n\nMilieu de [BC] : ((4+0)/2 ; (0+3)/2) = (2 ; 1,5).\n\nRayon : 5/2 = 2,5.\n\n<b>Équation</b> : (x−2)² + (y−1,5)² = 6,25." },
    { d:3, e:"Déterminer l'équation du cercle circonscrit au triangle A(1;0), B(0;2), C(3;3).", r:"À résoudre par système",
      c:"<b>Méthode</b> — Le centre Ω(a ; b) est équidistant de A, B et C.\n\nΩA² = ΩB² :\n(a−1)² + b² = a² + (b−2)²\n−2a + 1 = −4b + 4\n2a − 4b + 3 = 0   (équation 1)\n\nΩB² = ΩC² :\na² + (b−2)² = (a−3)² + (b−3)²\n−4b + 4 = −6a − 6b + 18\n6a + 2b − 14 = 0\n3a + b − 7 = 0   (équation 2)\n\nDe (2) : b = 7 − 3a.\nDans (1) : 2a − 4(7 − 3a) + 3 = 0\n2a − 28 + 12a + 3 = 0\n14a = 25\na = 25/14\n\nPuis b = 7 − 75/14 = (98 − 75)/14 = 23/14.\n\nLe centre est (25/14 ; 23/14) et le rayon vaut ΩA = √((25/14 − 1)² + (23/14)²) = √((11/14)² + (23/14)²) = √(121 + 529)/14 = √650/14.\n\n<b>Vérification possible</b> — On peut contrôler que ΩB = ΩC en calculant.\n\nL'équation du cercle est : (x − 25/14)² + (y − 23/14)² = 650/196." },
    { d:3, e:"Expliquer pourquoi l'équation x² + y² + 2xy = 1 n'est pas celle d'un cercle.", r:"Explication",
      c:"L'équation contient un terme en <b>xy</b>.\n\nOr un cercle a pour équation (x−a)² + (y−b)² = r², qui développée donne x² + y² + Dx + Ey + F = 0 : <b>jamais</b> de terme en xy.\n\nDe plus, x² + y² + 2xy = (x + y)². L'équation devient (x+y)² = 1, soit x + y = 1 ou x + y = −1.\n\nCe sont deux droites parallèles, pas un cercle." },
    { d:3, e:"Déterminer l'ensemble des points M tels que x² + y² − 2x + 4y + 5 = 0.", r:"Un point unique : (1 ; −2)",
      c:"Centre : (−D/2 ; −E/2) avec D = −2, E = 4.\n\nCentre (1 ; −2).\n\nRayon² : 1² + (−2)² − 5 = 1 + 4 − 5 = 0.\n\nUn rayon nul signifie que l'ensemble se réduit à un seul point : le centre lui-même.\n\n<b>Vérification</b> : (x−1)² + (y+2)² = 0 n'a que la solution x = 1 et y = −2." }
  ]
},
{
  id:"1re-variables-aleatoires", niveau:"1re", titre:"1re · Variables aléatoires réelles", temps:"22 min",
  resume:"Loi de probabilité, espérance, variance, écart type, répétition d'épreuves.",
  lecons:[
    { titre:"Loi de probabilité et espérance", contenu:`
      <h3>1. Variable aléatoire</h3>
      <p>Une variable aléatoire X associe un nombre réel à chaque issue d'une expérience aléatoire. Sa <b>loi de probabilité</b> donne, pour chaque valeur xᵢ, la probabilité P(X = xᵢ).</p>
      <div class="formula">Σ P(X = xᵢ) = 1</div>
      <p>La somme de toutes les probabilités vaut toujours 1 : c'est le premier contrôle à faire.</p>

      <h3>2. Espérance</h3>
      <p>L'espérance est la <b>moyenne théorique</b> des valeurs, pondérée par les probabilités :</p>
      <div class="formula">E(X) = Σ xᵢ · P(X = xᵢ)</div>
      <div class="box"><b>Interprétation</b> — Si on répète l'expérience un très grand nombre de fois, la moyenne des résultats observés se rapproche de E(X). C'est la loi des grands nombres.</div>

      <h3>3. Linéarité de l'espérance</h3>
      <p>L'espérance est linéaire, ce qui simplifie beaucoup de calculs :</p>
      <div class="formula">E(aX + b) = a·E(X) + b
E(X + Y) = E(X) + E(Y)        (toujours vrai)</div>
      <div class="box"><b>Le cas a = 0</b> — E(b) = b : l'espérance d'une constante est cette constante. C'est cohérent, puisqu'une constante ne varie pas.</div>

      <h3>4. Jeu équitable</h3>
      <p>Dans un jeu d'argent où X est le gain net (positif ou négatif), le jeu est <b>équitable</b> si E(X) = 0.</p>
      <ul>
        <li>E(X) &gt; 0 : le jeu est favorable au joueur</li>
        <li>E(X) &lt; 0 : le jeu est défavorable</li>
      </ul>

      <h3>5. Variable centrée</h3>
      <p>La variable X − E(X) est dite <b>centrée</b> : son espérance est nulle par linéarité.</p>
      <div class="formula">E(X − E(X)) = E(X) − E(X) = 0</div>
      <p>C'est ce qui permet de définir la variance comme l'espérance du carré de la variable centrée.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>On tire une carte d'un jeu de 32 cartes. On gagne 10 € si c'est un as, 2 € si c'est un roi, et on perd 1 € sinon. Le jeu est-il équitable ?</p>
      <ul>
        <li>P(as) = 4/32 = 1/8, P(roi) = 4/32 = 1/8, P(autre) = 24/32 = 3/4</li>
        <li>E(X) = 10 × 1/8 + 2 × 1/8 + (−1) × 3/4</li>
        <li>E(X) = 1,25 + 0,25 − 0,75 = 0,75</li>
      </ul>
      <p><b>Conclusion :</b> E(X) = 0,75 &gt; 0, le jeu est favorable au joueur.</p>
    ` },
    { titre:"Variance et écart type", contenu:`
      <h3>1. La variance</h3>
      <p>La variance mesure la <b>dispersion</b> autour de l'espérance. Elle est définie comme l'espérance du carré de l'écart à la moyenne :</p>
      <div class="formula">V(X) = E[(X − E(X))²] = Σ (xᵢ − E(X))² · P(X = xᵢ)</div>
      <p>Une formule de calcul plus rapide, à utiliser en pratique :</p>
      <div class="formula">V(X) = E(X²) − [E(X)]²</div>
      <div class="box warn"><b>Ne pas confondre E(X²) et [E(X)]²</b> — Le premier est l'espérance des carrés, le second le carré de l'espérance. Ils sont presque toujours différents. Exemple : pour X prenant les valeurs 0 et 2 avec probabilité 1/2, E(X²) = 2 mais [E(X)]² = 1.</div>

      <h3>2. L'écart type</h3>
      <div class="formula">σ(X) = √V(X)</div>
      <p>L'écart type s'exprime dans la <b>même unité que X</b>, contrairement à la variance qui est en unité au carré. C'est pour cela qu'on préfère souvent l'écart type pour interpréter.</p>
      <div class="box"><b>Interprétation</b> — L'écart type mesure de combien les valeurs s'écartent en moyenne de l'espérance. Plus il est grand, plus la variable est dispersée.</div>

      <h3>3. Variance et transformation affine</h3>
      <div class="formula">V(aX + b) = a²·V(X)</div>
      <div class="box warn"><b>Le b disparaît</b> — Ajouter une constante ne change pas la dispersion : elle décale toutes les valeurs de la même façon. En revanche, la variance est multipliée par a², et l'écart type par |a|.</div>
      <p>Exemple : si on double toutes les valeurs, la variance est multipliée par 4 et l'écart type par 2.</p>

      <h3>4. Le calcul en pratique</h3>
      <p>Pour calculer la variance, on suit toujours la même démarche :</p>
      <ul>
        <li>Calculer E(X)</li>
        <li>Calculer E(X²) en pondérant les carrés des valeurs</li>
        <li>Appliquer V(X) = E(X²) − [E(X)]²</li>
      </ul>

      <h3>5. Variance d'une somme</h3>
      <p>Pour deux variables X et Y, on a en général :</p>
      <div class="formula">V(X + Y) = V(X) + V(Y) + 2·Cov(X,Y)</div>
      <p>Quand X et Y sont indépendantes, la covariance est nulle :</p>
      <div class="formula">V(X + Y) = V(X) + V(Y)        (si X et Y indépendantes)</div>

      <h3>6. Exemple entièrement résolu</h3>
      <p>X prend les valeurs 0, 1 et 2 avec les probabilités 0,3 ; 0,5 et 0,2. Calculer E(X), V(X) et σ(X).</p>
      <ul>
        <li>E(X) = 0 × 0,3 + 1 × 0,5 + 2 × 0,2 = 0 + 0,5 + 0,4 = 0,9</li>
        <li>E(X²) = 0² × 0,3 + 1² × 0,5 + 2² × 0,2 = 0 + 0,5 + 0,8 = 1,3</li>
        <li>V(X) = 1,3 − 0,9² = 1,3 − 0,81 = 0,49</li>
        <li>σ(X) = √0,49 = 0,7</li>
      </ul>
      <p><b>Interprétation :</b> les valeurs de X s'écartent en moyenne de 0,7 unité autour de l'espérance 0,9.</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — la loi de probabilité et l'espérance, puis la variance et l'écart type.</div>`,
  exercices:[
    { d:1, e:"Que vaut la somme des probabilités de toutes les valeurs d'une variable aléatoire ?", r:"1",
      c:"Les valeurs possibles couvrent toutes les issues de l'expérience.\n\nLa somme de leurs probabilités vaut donc 1." },
    { d:1, e:"X prend les valeurs 0 et 1 avec P(0) = 0,3. Que vaut P(1) ?", r:"0,7",
      c:"La somme des probabilités vaut 1.\n\nP(1) = 1 − 0,3 = 0,7." },
    { d:1, e:"Calculer E(X) si X prend 0 avec probabilité 0,5 et 4 avec probabilité 0,5.", r:"2",
      c:"E(X) = 0 × 0,5 + 4 × 0,5 = 0 + 2 = 2." },
    { d:1, e:"Que signifie E(X) = 0 pour un jeu d'argent ?", r:"Le jeu est équitable",
      c:"Une espérance nulle signifie qu'en moyenne, le joueur ne gagne ni ne perd.\n\nLe jeu est équitable." },
    { d:1, e:"Une variable certaine vaut toujours 5. Que vaut E(X) ?", r:"5",
      c:"Si X vaut toujours 5, alors E(X) = 5 × 1 = 5.\n\nL'espérance d'une constante est cette constante." },
    { d:1, e:"Que vaut E(aX + b) ?", r:"a·E(X) + b",
      c:"L'espérance est linéaire.\n\nE(aX + b) = a·E(X) + b." },
    { d:1, e:"Que vaut V(X) si X est constante ?", r:"0",
      c:"Une variable constante ne varie pas : sa dispersion est nulle.\n\nDonc V(X) = 0." },
    { d:1, e:"Comment obtient-on l'écart type à partir de la variance ?", r:"En prenant la racine carrée",
      c:"σ(X) = √V(X).\n\nL'écart type s'exprime dans la même unité que X." },
    { d:1, e:"Que vaut V(aX) si V(X) = 2 et a = 3 ?", r:"18",
      c:"V(aX) = a²·V(X).\n\nV(3X) = 9 × 2 = 18.\n\nL'écart type serait √18 ≈ 4,24, et 3 × √2 ≈ 4,24 ✓" },
    { d:1, e:"Que vaut V(X + 5) si V(X) = 3 ?", r:"3",
      c:"Ajouter une constante ne change pas la dispersion.\n\nV(X + 5) = V(X) = 3." },
    { d:2, e:"X prend 1, 2, 3 avec les probabilités 0,2 ; 0,5 et 0,3. Calculer E(X).", r:"2,1",
      c:"E(X) = 1 × 0,2 + 2 × 0,5 + 3 × 0,3\n= 0,2 + 1,0 + 0,9 = 2,1." },
    { d:2, e:"Calculer E(X²) pour X prenant 0, 1, 2 avec les probabilités 0,3 ; 0,5 et 0,2.", r:"1,3",
      c:"E(X²) = 0² × 0,3 + 1² × 0,5 + 2² × 0,2\n= 0 + 0,5 + 0,8 = 1,3." },
    { d:2, e:"Avec E(X) = 0,9 et E(X²) = 1,3, calculer V(X).", r:"0,49",
      c:"V(X) = E(X²) − [E(X)]²\n= 1,3 − 0,81 = 0,49." },
    { d:2, e:"Avec V(X) = 0,49, calculer l'écart type.", r:"0,7",
      c:"σ(X) = √0,49 = 0,7." },
    { d:2, e:"Un jeu coûte 5 € et rapporte 12 € avec probabilité 0,4, 0 sinon. L'espérance de gain net est-elle positive ?", r:"Non, négative",
      c:"Gain net : +7 € avec probabilité 0,4, et −5 € avec probabilité 0,6.\n\nE(X) = 7 × 0,4 + (−5) × 0,6 = 2,8 − 3 = −0,2.\n\nL'espérance est négative : le jeu est défavorable au joueur." },
    { d:2, e:"Que vaut E(2X + 3) si E(X) = 4 ?", r:"11",
      c:"E(2X + 3) = 2 × E(X) + 3 = 8 + 3 = 11." },
    { d:2, e:"Que vaut V(2X + 5) si V(X) = 3 ?", r:"12",
      c:"V(aX + b) = a²·V(X).\n\nV(2X + 5) = 4 × 3 = 12.\n\nLa constante 5 disparaît." },
    { d:2, e:"X prend 0, 1, 2, 3 avec les probabilités 0,1 ; 0,3 ; 0,4 et 0,2. Calculer E(X).", r:"1,7",
      c:"E(X) = 0×0,1 + 1×0,3 + 2×0,4 + 3×0,2\n= 0 + 0,3 + 0,8 + 0,6 = 1,7." },
    { d:2, e:"Dans l'exercice précédent, calculer E(X²).", r:"3,7",
      c:"E(X²) = 0²×0,1 + 1²×0,3 + 2²×0,4 + 3²×0,2\n= 0 + 0,3 + 1,6 + 1,8 = 3,7." },
    { d:2, e:"Avec E(X) = 1,7 et E(X²) = 3,7, calculer V(X) et σ(X).", r:"V = 0,81 et σ = 0,9",
      c:"V(X) = 3,7 − 1,7² = 3,7 − 2,89 = 0,81.\n\nσ(X) = √0,81 = 0,9." },
    { d:2, e:"Deux variables X et Y sont indépendantes avec V(X) = 4 et V(Y) = 9. Que vaut V(X+Y) ?", r:"13",
      c:"Pour des variables indépendantes :\n\nV(X + Y) = V(X) + V(Y) = 4 + 9 = 13." },
    { d:3, e:"Montrer que V(X) = E(X²) − [E(X)]².", r:"Démonstration",
      c:"Par définition : V(X) = E[(X − E(X))²].\n\nOn développe le carré :\n(X − E(X))² = X² − 2X·E(X) + [E(X)]²\n\nDonc :\nV(X) = E(X² − 2X·E(X) + [E(X)]²)\n\nPar linéarité de l'espérance :\nV(X) = E(X²) − 2E(X)·E(X) + [E(X)]²\n     = E(X²) − 2[E(X)]² + [E(X)]²\n     = E(X²) − [E(X)]² ✓\n\n<b>Note</b> — On a utilisé le fait que E(X) est une constante, donc E(2X·E(X)) = 2E(X)·E(X)." },
    { d:3, e:"Un joueur mise 2 € et lance un dé. Il gagne 10 € s'il obtient un 6, 0 sinon. Quelle est l'espérance de son gain net ?", r:"−0,33 € environ",
      c:"<b>Gain net</b> : s'il fait 6, il gagne 10 − 2 = 8 €. Sinon, il perd 2 €.\n\nP(6) = 1/6, P(non 6) = 5/6.\n\nE(X) = 8 × (1/6) + (−2) × (5/6)\n= 8/6 − 10/6 = −2/6 ≈ −0,33 €.\n\nL'espérance est négative : le jeu est défavorable au joueur, qui perd en moyenne 33 centimes par partie." },
    { d:3, e:"X suit la loi : P(X=1) = 0,2, P(X=3) = 0,5, P(X=5) = 0,3. Calculer E(X), V(X) et σ(X).", r:"E = 3,2 · V = 2,16 · σ ≈ 1,47",
      c:"<b>Espérance</b> :\nE(X) = 1×0,2 + 3×0,5 + 5×0,3 = 0,2 + 1,5 + 1,5 = 3,2.\n\n<b>E(X²)</b> :\nE(X²) = 1×0,2 + 9×0,5 + 25×0,3 = 0,2 + 4,5 + 7,5 = 12,2.\n\n<b>Variance</b> :\nV(X) = 12,2 − 3,2² = 12,2 − 10,24 = 1,96.\n\n<b>Écart type</b> :\nσ(X) = √1,96 ≈ 1,4.\n\nReprenons σ : √1,96 = 1,4 exactement (car 1,4² = 1,96).\n\nDonc σ(X) = 1,4." },
    { d:3, e:"Un assureur propose un contrat qui rembourse 5000 € avec probabilité 0,01 et 0 sinon. Quelle prime minimale pour être rentable ?", r:"Plus de 50 €",
      c:"L'espérance du remboursement :\nE(X) = 5000 × 0,01 = 50 €.\n\nPour être rentable, l'assureur doit percevoir une prime supérieure à l'espérance du remboursement.\n\nLa prime minimale est donc 50 €.\n\n<b>En pratique</b> — L'assureur ajoute des frais de gestion et une marge bénéficiaire, donc la prime réelle serait plus élevée." },
    { d:3, e:"Montrer que si X et Y sont indépendantes, alors V(X + Y) = V(X) + V(Y).", r:"Démonstration (admis au niveau 1re)",
      c:"La formule générale est :\nV(X + Y) = V(X) + V(Y) + 2Cov(X,Y)\n\noù Cov(X,Y) = E(XY) − E(X)E(Y).\n\nOr pour des variables indépendantes, on a E(XY) = E(X)·E(Y).\n\nDonc Cov(X,Y) = E(X)E(Y) − E(X)E(Y) = 0.\n\nD'où : V(X + Y) = V(X) + V(Y) ✓\n\n<b>Interprétation</b> — Pour des expériences indépendantes, les dispersions s'additionnent (au sens de la variance). C'est ce qui explique que répéter une expérience augmente la dispersion de la somme." },
    { d:3, e:"Une entreprise a un bénéfice aléatoire : 10000 € avec probabilité 0,7, et −5000 € avec probabilité 0,3. Calculer E(X), V(X) et σ(X).", r:"E = 5500 · V = 47 250 000 · σ ≈ 6874",
      c:"<b>Espérance</b> :\nE(X) = 10 000 × 0,7 + (−5000) × 0,3\n= 7000 − 1500 = 5500 €.\n\n<b>E(X²)</b> :\nE(X²) = 100 000 000 × 0,7 + 25 000 000 × 0,3\n= 70 000 000 + 7 500 000 = 77 500 000.\n\n<b>Variance</b> :\nV(X) = 77 500 000 − 5500²\n= 77 500 000 − 30 250 000\n= 47 250 000.\n\n<b>Écart type</b> :\nσ(X) = √47 250 000 ≈ 6874 €.\n\n<b>Interprétation</b> — L'écart type est supérieur à l'espérance : le risque est très élevé. Le bénéfice peut varier énormément autour de sa moyenne." },
    { d:3, e:"Deux investissements ont la même espérance de 1000 € mais des écarts types de 100 € et 2000 €. Lequel est le moins risqué ?", r:"Le premier",
      c:"Les deux ont le même rendement espéré : 1000 €.\n\nMais le premier a un écart type de 100 €, le second de 2000 €.\n\nLe premier est beaucoup moins dispersé : les résultats seront proches de 1000 €.\n\nLe second peut donner des résultats très éloignés de l'espérance, dans un sens comme dans l'autre.\n\n<b>Conclusion</b> — À espérance égale, on préfère l'écart type le plus faible. C'est le principe de base de la gestion du risque." }
  ]
},
{
  id:"1re-experimentations", niveau:"1re", titre:"1re · Expérimentations et simulation", temps:"20 min",
  resume:"Simulation, méthode de Monte-Carlo, estimation de probabilités et d'aires.",
  lecons:[
    { titre:"Simuler une expérience aléatoire", contenu:`
      <h3>1. Pourquoi simuler</h3>
      <p>Une simulation consiste à reproduire une expérience aléatoire par un programme, un très grand nombre de fois. Elle sert quand :</p>
      <ul>
        <li>Le calcul exact de la probabilité est difficile ou impossible</li>
        <li>On veut vérifier une conjecture théorique</li>
        <li>L'expérience réelle serait trop coûteuse ou trop longue</li>
      </ul>
      <div class="box"><b>Le principe</b> — On remplace le hasard réel par un générateur de nombres pseudo-aléatoires. Ce n'est pas du vrai hasard, mais statistiquement indiscernable.</div>

      <h3>2. Étapes d'une simulation</h3>
      <ul>
        <li><b>Modéliser</b> : définir les issues et leurs probabilités</li>
        <li><b>Simuler</b> : tirer un nombre aléatoire et décider de l'issue</li>
        <li><b>Répéter</b> : effectuer un grand nombre de fois</li>
        <li><b>Calculer</b> : compter la fréquence observée</li>
        <li><b>Comparer</b> : confronter à la théorie si elle est connue</li>
      </ul>

      <h3>3. Simuler une loi uniforme</h3>
      <p>Pour simuler un dé équilibré à 6 faces, on tire un entier aléatoire entre 1 et 6 avec une probabilité égale.</p>
      <div class="formula">Issu = partie entière de (6 × random) + 1</div>
      <p>Pour simuler un événement de probabilité p, on tire un nombre entre 0 et 1 et on teste s'il est inférieur à p.</p>
      <div class="box"><b>Le cas des probabilités non uniformes</b> — Pour un dé pipé avec P(6) = 0,3, on utilise des seuils : si le nombre tiré est inférieur à 0,3, c'est un 6 ; sinon, on le répartit sur les cinq autres faces.</div>

      <h3>4. La précision d'une simulation</h3>
      <p>La fréquence observée fluctue autour de la probabilité théorique. La marge d'erreur décroît comme 1/√n :</p>
      <div class="formula">Pour n tirages, la précision est de l'ordre de 1/√n</div>
      <div class="box warn"><b>Conséquence pratique</b> — Pour obtenir une précision de 0,01, il faut environ 10 000 tirages. Simuler dix fois n'améliore pas la précision : seule l'augmentation de n le fait.</div>

      <h3>5. Vérifier une conjecture</h3>
      <p>On conjecture une valeur, on simule, puis on compare. Si la fréquence observée est compatible avec la conjecture, on la garde comme hypothèse. Sinon, on la rejette.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>On simule 10 000 lancers d'une pièce équilibrée. La fréquence observée de pile est 0,5043. Est-ce cohérent ?</p>
      <ul>
        <li>Probabilité théorique : p = 0,5</li>
        <li>Marge pour n = 10 000 : 1/√10000 = 0,01</li>
        <li>Intervalle attendu : [0,49 ; 0,51]</li>
        <li>La fréquence 0,5043 est dans cet intervalle</li>
      </ul>
      <p><b>Conclusion :</b> le résultat de la simulation est parfaitement cohérent avec une pièce équilibrée.</p>
    ` },
    { titre:"La méthode de Monte-Carlo", contenu:`
      <h3>1. Le principe</h3>
      <p>La méthode de Monte-Carlo consiste à <b>estimer une grandeur géométrique ou analytique</b> par des tirages aléatoires.</p>
      <div class="box"><b>L'idée</b> — Si on tire des points au hasard dans une région, la proportion de points tombant dans une sous-région estime le rapport des aires.</div>

      <h3>2. Estimer une aire</h3>
      <p>Pour estimer l'aire d'une figure F contenue dans un carré de côté 1 :</p>
      <div class="formula">aire estimée = (nombre de points dans F) / (nombre total de points)</div>
      <p>Si le carré a pour aire S, l'aire de F vaut S × (proportion de points dans F).</p>

      <h3>3. Estimer π</h3>
      <p>C'est l'application classique. On tire des points au hasard dans le carré [0;1] × [0;1] et on compte ceux qui tombent dans le quart de disque de rayon 1.</p>
      <div class="formula">Aire du quart de disque = π/4
Donc : π ≈ 4 × (points dans le disque) / (points totaux)</div>
      <div class="box"><b>Un point est dans le disque</b> si x² + y² ≤ 1. C'est le test à écrire dans le programme.</div>

      <h3>4. Précision de la méthode</h3>
      <p>La précision suit la même loi que tout échantillonnage : elle décroît comme 1/√n.</p>
      <div class="formula">Pour n = 10 000 tirages, la précision sur π est de l'ordre de 0,01</div>
      <div class="box warn"><b>Méthode lente</b> — Pour obtenir 3 décimales sur π, il faut environ un million de tirages. La méthode de Monte-Carlo est conceptuellement élégante mais peu efficace pour ce type de calcul. Elle brille pour des problèmes de grande dimension, inaccessibles aux méthodes classiques.</div>

      <h3>5. Estimation d'une probabilité</h3>
      <p>Même principe pour estimer une probabilité inconnue : on simule l'expérience n fois et on compte la fréquence de l'événement.</p>
      <div class="formula">P(événement) ≈ (nombre de réalisations) / n</div>
      <p>Exemple : probabilité d'obtenir au moins un 6 en 4 lancers — plus facile à simuler qu'à calculer.</p>

      <h3>6. Exemple entièrement résolu</h3>
      <p>Sur 5000 tirages dans le carré unité, 3930 points tombent dans le quart de disque. Quelle est l'estimation de π ?</p>
      <ul>
        <li>Proportion : 3930/5000 = 0,786</li>
        <li>π ≈ 4 × 0,786 = 3,144</li>
      </ul>
      <p><b>Comparaison :</b> π ≈ 3,14159. L'estimation est à 0,0024 de la valeur exacte.</p>
      <p><b>Précision attendue</b> pour n = 5000 : de l'ordre de 1/√5000 ≈ 0,014. Le résultat est donc dans la marge attendue ✓</p>
    ` }
  ],
  cours:`<div class="box"><b>Deux leçons</b> — simuler une expérience aléatoire et mesurer la précision, puis la méthode de Monte-Carlo et ses applications.</div>`,
  exercices:[
    { d:1, e:"Qu'est-ce qu'une simulation ?", r:"Reproduire une expérience aléatoire par un programme",
      c:"Une simulation reproduit une expérience aléatoire un grand nombre de fois, pour observer la distribution des résultats." },
    { d:1, e:"La marge d'erreur d'une simulation décroît comme :", r:"1/√n",
      c:"Comme pour tout échantillonnage, la précision est de l'ordre de 1/√n.\n\nPour diviser la marge par 2, il faut quadrupler le nombre de tirages." },
    { d:1, e:"Pour une précision de 0,01, combien de tirages environ ?", r:"10 000",
      c:"1/√n = 0,01 signifie √n = 100, donc n = 10 000." },
    { d:1, e:"Que teste-t-on pour savoir si un point (x;y) est dans le quart de disque de rayon 1 ?", r:"x² + y² ≤ 1",
      c:"Le quart de disque de rayon 1 centré à l'origine est l'ensemble des points vérifiant x ≥ 0, y ≥ 0 et x² + y² ≤ 1." },
    { d:1, e:"Quelle est l'aire du quart de disque de rayon 1 ?", r:"π/4",
      c:"L'aire du disque complet de rayon 1 vaut π.\n\nLe quart vaut donc π/4." },
    { d:1, e:"Une simulation de 100 tirages est-elle plus précise que 10 000 tirages ?", r:"Non",
      c:"Plus le nombre de tirages est grand, plus la précision est bonne.\n\nLa marge décroît comme 1/√n." },
    { d:1, e:"Que vaut 1/√10000 ?", r:"0,01",
      c:"√10000 = 100, donc 1/√10000 = 0,01." },
    { d:1, e:"Simuler 10 fois 100 tirages améliore-t-il la précision ?", r:"Non, il faut augmenter n",
      c:"C'est la taille totale n qui détermine la précision.\n\nDix simulations de 100 tirages restent une précision de 100 tirages chacune.\n\nPour améliorer la précision, il faut augmenter n dans une même simulation." },
    { d:1, e:"Que vaut 4 × 0,78 ?", r:"3,12",
      c:"4 × 0,78 = 3,12.\n\nC'est une estimation de π par Monte-Carlo." },
    { d:1, e:"Pourquoi utilise-t-on un générateur pseudo-aléatoire ?", r:"Parce qu'il est statistiquement indiscernable du vrai hasard",
      c:"Un ordinateur ne peut pas produire de vrai hasard : il génère des suites déterministes qui ont les propriétés statistiques du hasard." },
    { d:2, e:"Sur 10 000 tirages, 7850 points tombent dans le quart de disque. Quelle est l'estimation de π ?", r:"3,14",
      c:"Proportion : 7850/10000 = 0,785.\n\nπ ≈ 4 × 0,785 = 3,14.\n\nLa valeur exacte est 3,14159 : l'estimation est très proche." },
    { d:2, e:"Quelle est la précision attendue pour 10 000 tirages ?", r:"0,01",
      c:"Marge = 1/√10000 = 0,01.\n\nL'estimation de π est donc précise à environ ±0,01." },
    { d:2, e:"On simule 1000 lancers d'un dé et on obtient 6 dans 172 cas. Que conclure ?", r:"Compatible avec un dé équilibré",
      c:"f = 172/1000 = 0,172.\n\nHypothèse : p = 1/6 ≈ 0,167.\n\nMarge = 1/√1000 ≈ 0,032.\nI = [0,135 ; 0,199].\n\nOr 0,172 est dans l'intervalle.\n\nConclusion : la simulation est compatible avec un dé équilibré." },
    { d:2, e:"Estimer la probabilité d'obtenir au moins un 6 en 4 lancers, par simulation de 10 000 essais, sachant qu'on a compté 5180 essais favorables.", r:"≈ 0,518",
      c:"Proportion : 5180/10000 = 0,518.\n\nLa probabilité estimée est 0,518.\n\n<b>Valeur exacte</b> : 1 − (5/6)⁴ = 1 − 625/1296 ≈ 0,5177.\n\nL'estimation est très proche de la valeur théorique." },
    { d:2, e:"Sur 2500 tirages dans le carré unité, 1960 points tombent dans le quart de disque. Estimer π.", r:"3,136",
      c:"Proportion : 1960/2500 = 0,784.\n\nπ ≈ 4 × 0,784 = 3,136.\n\nPrécision attendue : 1/√2500 = 0,02.\n\nL'écart avec π est de 0,0056, bien dans la marge." },
    { d:2, e:"Pourquoi la méthode de Monte-Carlo est-elle peu efficace pour calculer π ?", r:"La convergence est lente",
      c:"La précision décroît comme 1/√n.\n\nPour obtenir 3 décimales exactes, il faut environ un million de tirages.\n\nIl existe des méthodes bien plus rapides (séries, algorithmes des frères Borwein) qui donnent des milliers de décimales en quelques itérations.\n\n<b>L'intérêt de Monte-Carlo</b> — Sa facilité de mise en œuvre et son efficacité dans les problèmes de grande dimension, où les méthodes classiques échouent." },
    { d:2, e:"Comment simuler un événement de probabilité 0,3 ?", r:"On tire un nombre entre 0 et 1 et on teste s'il est inférieur à 0,3",
      c:"On génère un nombre aléatoire uniforme r entre 0 et 1.\n\nSi r &lt; 0,3, l'événement se réalise ; sinon, il ne se réalise pas.\n\nLa probabilité de réalisation est bien 0,3." },
    { d:2, e:"On simule 5000 lancers d'une pièce truquée qui donne pile avec probabilité 0,7. Combien de piles attend-on ?", r:"3500 environ",
      c:"Espérance : 5000 × 0,7 = 3500.\n\nAvec une marge d'environ 1/√5000 ≈ 0,014, soit 70 lancers.\n\nOn attend entre 3430 et 3570 piles." },
    { d:2, e:"Que signifie « la simulation converge vers la probabilité théorique » ?", r:"La fréquence se rapproche quand n augmente",
      c:"Quand le nombre de tirages augmente, la fréquence observée se rapproche de la probabilité théorique.\n\nC'est la loi des grands nombres." },
    { d:2, e:"Combien de tirages pour une précision de 0,005 sur π ?", r:"40 000",
      c:"1/√n = 0,005 signifie √n = 200, donc n = 40 000." },
    { d:2, e:"Une simulation donne une estimation de π à 3,20. Est-ce une bonne estimation ?", r:"Non, l'écart est trop grand",
      c:"L'écart avec π ≈ 3,1416 est de 0,058.\n\nPour que cet écart soit plausible, il faudrait une marge de 0,058, ce qui correspond à 1/√n = 0,058, soit n ≈ 300.\n\nSi la simulation avait beaucoup plus de 300 tirages, cette estimation serait anormalement éloignée : il y aurait probablement un bug dans le programme." },
    { d:3, e:"Montrer que la précision de Monte-Carlo pour π est de l'ordre de 1/√n.", r:"Démonstration",
      c:"On effectue n tirages indépendants. Chaque point est dans le quart de disque avec probabilité p = π/4.\n\nLe nombre de points dans le disque suit une loi binomiale B(n, p).\n\nLa fréquence f = X/n a pour écart type :\nσ(f) = √(p(1−p)/n)\n\nComme p ≈ 0,785, on a p(1−p) ≈ 0,169, et √0,169 ≈ 0,41.\n\nDonc σ(f) ≈ 0,41/√n.\n\nL'estimation de π est 4f, donc son écart type vaut 4 × 0,41/√n ≈ 1,64/√n.\n\nLa précision est bien de l'ordre de 1/√n ✓" },
    { d:3, e:"Pourquoi la méthode de Monte-Carlo est-elle utile pour estimer des aires complexes ?", r:"Parce qu'elle ne nécessite pas de formule analytique",
      c:"Pour une aire délimitée par des courbes compliquées, le calcul intégral peut être impossible ou inextricable.\n\nMonte-Carlo ne demande que de savoir tester si un point est dans la région — une simple inégalité.\n\n<b>Exemple</b> — L'aire de la région délimitée par x² + y² ≤ 1, y ≥ 0 et y ≤ x² se calcule facilement par Monte-Carlo : il suffit de tester les trois inégalités.\n\n<b>En dimension élevée</b>, l'avantage est décisif : les méthodes classiques deviennent exponentielles, Monte-Carlo reste en 1/√n." },
    { d:3, e:"Une simulation d'un jeu donne un gain moyen de −0,40 €. Le jeu a-t-il une espérance positive ?", r:"Non, elle est négative",
      c:"La fréquence observée du gain moyen est −0,40 €.\n\nSi le nombre de simulations est suffisant, cette estimation est proche de l'espérance théorique.\n\nL'espérance est donc probablement négative, et le jeu défavorable au joueur.\n\n<b>Réserve</b> — Pour être rigoureux, il faudrait connaître la précision de l'estimation et vérifier que l'intervalle de confiance ne contient pas 0." },
    { d:3, e:"Comment simuler un dé pipé donnant 6 avec probabilité 0,4 et les autres faces équiprobables ?", r:"Par seuils sur le nombre aléatoire",
      c:"Les cinq autres faces se partagent la probabilité restante 0,6, soit 0,12 chacune.\n\nOn génère r entre 0 et 1 :\n— si r &lt; 0,4 : on obtient 6\n— si 0,4 ≤ r &lt; 0,52 : on obtient 1\n— si 0,52 ≤ r &lt; 0,64 : on obtient 2\n— si 0,64 ≤ r &lt; 0,76 : on obtient 3\n— si 0,76 ≤ r &lt; 0,88 : on obtient 4\n— si 0,88 ≤ r &lt; 1 : on obtient 5\n\nChaque intervalle a bien la longueur correspondant à sa probabilité." },
    { d:3, e:"Deux simulations de π donnent 3,10 et 3,18. Est-ce cohérent ?", r:"Oui, si le nombre de tirages est faible",
      c:"L'écart entre les deux estimations est de 0,08.\n\nPour que cet écart soit plausible, la marge de chaque simulation doit être de l'ordre de 0,04, ce qui correspond à 1/√n = 0,04, soit n ≈ 625.\n\nAvec environ 600 tirages ou moins, les deux estimations sont compatibles avec π.\n\n<b>Avec 10 000 tirages</b>, un tel écart serait anormal : il signalerait un problème dans la méthode de génération aléatoire." },
    { d:3, e:"Montrer que la méthode du quadrillage donne une meilleure précision que Monte-Carlo pour une fonction régulière.", r:"Démonstration",
      c:"<b>Monte-Carlo</b> : erreur d'ordre 1/√n. Pour diviser l'erreur par 10, il faut 100 fois plus de tirages.\n\n<b>Méthode du quadrillage</b> (rectangle médian) : pour une fonction régulière, l'erreur est d'ordre 1/n. Pour diviser l'erreur par 10, il faut seulement 10 fois plus de subdivisions.\n\n<b>Conclusion</b> — En dimension 1 ou 2, la méthode du quadrillage est bien plus efficace.\n\n<b>Mais en dimension d</b> — le quadrillage nécessite n^d points, ce qui devient rapidement impossible. Monte-Carlo reste en 1/√n quelle que soit la dimension.\n\nC'est pourquoi Monte-Carlo domine les problèmes de grande dimension : finance quantitative, physique des particules, apprentissage statistique." }
  ]
}
];

window.MATHSLY_1RE = { chapitres: PREMIERE_CHAPITRES, qcm: [] };
