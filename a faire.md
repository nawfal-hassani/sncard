# PROMPT UNIQUE À COLLER DANS CLAUDE / CLOUDE CODE (PROJET “SNCard”)
Tu es **mon équipe complète** (Directeur Produit, UX/UI Designer, Creative Dev, Développeur Front, Développeur Back, DevOps, QA).
Tu travailles **come si tu équités à plusieurs personnes à la demande**, et tu livres un résultat **exécutable** : spécifications + système de conception + architecture + arriéré + échafaudage + code de base.

Tu ne me pose des questions **que si c’est bloquant**. Sinon, tu prend des décisions, tu avances, tu explique les tests, et tu propose une alternative quand c’utilisation.

---

## 0) Contexte et objectif
J’ai créé une entreprise nommée **SNCard** (S-N-C-A-R-D, mais sur l’écrit « SNCard »).
SNCard vend une **carte NFC** que commerçant les jardins sur eux (ou au comptoir) et qu’ils peut **poser sur le téléphone d’un client** après paiement. Le client reçoit une **notification** et peut ensuite **laisser un avis** (Google, ou autre plateforme selon amarditif).

Je veux un site web **très dynamique**, “wow effet”, avec une **carte SNCard en 3D** (taille carte bancaire, orientation **portrait**) qui reste **vivante / en mouvement** :
- la carte flotte, pivot, costume le rouleau de le légèrement, réagit au malécisse (parallaxe),
- sur swipe/scroll, la carte « accompagne » l’utilisateur (la carte suite et se repositionne selon les sections),
- rendre premium, réaliste (matériaux, s, ombre douce).

Le site aura :
1) un volet **vitrine / marketing** ( le produit, bénéfices, commentaire ça marche, prix)
2) un volant **commande** (type mini e-commerce) : « Commandant », choix, options de quantité, payeur.

Accueil du style: **Shopify x Apple** (premium minimal, futuriste léger, très arrondi, responsive).

---

# 1) Ce que tu dois (dans cet ordre)
### A) Projet de vision et structure (1–2 pages)
- proposition de valeur SNCard
- personas (commerçant / final client)
- parcours d'utilisateur (atterrissage -> encombre -> -> prix de la preuve -> commande)
- arborescence du site (pages/sections)

### B) UX détaillée (texte de wireframe)
- contenu exact de chaque section
- micro-interactions (survol, défilement, transitions)
- composants clés (héros, grille bento, prix, FAQ, pied de page, etc.)
- états : chargement, erreurs, succès, panier vide, paiement ok

### C) Système de conception (Shopify x Apple) + jetons
- palette (lumière + sombre si possible)
- typographies (Inter/system-ui)
- rayons (bordure-rayon élevé), espacement, ombres, contours
- interface utilisateur de composants (boutons, badges, entrées, cartes, nav, modals)
- non règles négociables (zéro pièce carrée, zéro flashy)

### D) Direction “Carte 3D / animation”
- technique d'approche recommandée (Three.js / React Three Fiber / alternative CSS 3D)
- actifs de pipeline (image/texture, carte normale, rugosité)
- gestion perf (lazy-load, LOD, fallback mobile)
- comportement exact : animation inactive, on-scroll, on-hover, on-swipe

### E) Technique d'architecture
- stack + justification recommandée
- structure repo (monorepo ou non)
- endpoints backend (si e-commerce)
- DB / paiements / emails
- sécurité & conformité

### F) Plan d’exécution & carnet de commandes
- MVP (vitrine + commande simple)
- V2 (analyse, CRM, marqueur de tableau de bord, avis de gestion, etc.)
- découpées + ordre + estimation relative (S/M/L)

##G) Échafaudage + code de base
- projet d'arborescence
- config env + Docker (si pertinent)
- pages des vantards
- carte 3D (base)
- commande de flux (panier -> caisse -> confirmation) avec Stripe (ou autre)
- tests minimaux (fumée)

---

## 2) Périmètre MVP (ce que je veux) absolument
### 2.1 Vitrine ultra premium
- Page de destination unique (une page) + pages légales + page commande
- Animations premium : scroll reveal, parallaxe, carte 3De omniprésente
- Contenu marketing clair (bénéfices et preuves)

### 2.2 Commande (mini e-commerce)
- Bouton « Commandant »
- Sélection quantité (ex: 1, 5, 10, 25, 50, 100...)
- Prix dynamique quantité selon (niveaux)
- Paiement en ligne (Stripe Checkout)
- Page confirmation + email de confirmation (optionnel MVP si trop long, V2)
- Un « backoffice » minimal peut être V2 (pour voir commandes)

---

## 3) Pages / sections attendues
### 3.1 Débarquement (une page) – rubriques recommandées
1) **Héros**
- titre punchy + sous-titre
- CTA : « Commandant » + « Voir comment ça marche »
- Carte 3D en vedette, portrait d'orientation animé
2) **Commentaire ça marche** (3 étapes)
- « Le approche la carte du téléphone »
- « Notification »
- « Le client laisse un avis »
- anim : carte se “déplace” à chaque étape
3) **Bénéfices**
- plus d’avis, meilleure réputation, plus de clients
- bento grid premium
4) **Cas d’usage**
- restaurant, barbier, salon, garage, boutique...
5) **Produit**
- matériaux, solidité, NFC, personnalisation (s'il y a lieu)
- visuels + zoom sur carte
6) **Prix**
- paliers prix + badge « Meilleur choix »
7) ** FAQ**
8) **Pied**
- contact,, mentions, CGV/CGU, politique confidentielle

### 3.2 Page “Commandant”
- quantité de choix + options (s'applique : couleur, finition, logo de personnalisation)
- CV panier
- Paiement CTA
- réassurance (livraison, support, facture)
- Commande FAQ

### 3.3 Pages légales
- Mentions légales
- Politique de confidentialité
- CGV (si e-commerce)

---

## 4) Système de conception (Shopify x Apple) – exigences
### 4.1 Style global
- premium, minimal, futuriste léger
- beaucoup d’air (espacement généreux)
- texte lisible très hiérarchisé, net
- **tout arrondi** : entrées, cartes, boutons, sections

### 4.2 Règles de l'interface utilisateur
- pas de bootstrap « old school »
- pas de couleurs flashy
- pas d’angles carrés
- animations subtiles 150–250ms
- squelette de chargement pour les actifs lourds (3D)

### 4.3 Composants
- Navbar collant (transparente puis solide au scroll)
- Boutons : primaire, secondaire, fantôme
- Badges : « NFC », « Premium », « Nouveau », « Meilleure valeur »
- Cartes : bento, cartes tarifaires
- Modales/Tiroirs : mini panier, infos livraison
- Notifications toast :erreur/erreur succès

---

## 5) Carte 3D – rendu & comportement
Je veux une carte :
- **format carte bancaire** mais en **portrait**
- look réaliste : épaisseur légère, bords arrondis, reflets
- animation inactif (float + rotation légère très)
- interaction :
- bureau : costume la souris (parallaxe)
- mobile : réagit au scroll + tilt léger
- lors du scroll : la carte se repositionne selon sections (snapping léger)
- performance : reste do fluide (60fps si possible), repli si mobile faible

### Technique d'Approche (tu la meilleure)
Choix si préféré tu peut le matériel de navire :
- **Next.js** (ou Astro + React) + **Réagir trois fibres (R3F)** + drei
-> contrôle fin, perf, composants réutilisables

Alternative si sur veray ultra simple :
- CSS 3D + images (moins réaliste)
- Spline embarqué (rapide, mais dépendance externe)

Tu diose et justifier.

---

## 6) Actifs : conception de carte (très important)
J’ai **le design de la carte en photo**.
Tu dois une émission stratégie claire :
- je peut fournir :
- une image HD face avant (PNG)
- éventuellement face arrière
- éventuellement un fichier Figma/AI si dispo

Tu dois dire **quoi demandeur exactement** :
- dimensions / ratio (carte bancaire standard)
- résolution minimum (ex: 2000px de large)
- formats (PNG transparent si possible)
- si besoin, cartes (normal/rugosité) : tu peut proposer un workflow simple pour les gammes (ou les simuler)

⚠️Important : proposer une méthode « sans Figma obligatoire » (tu capable dimensionner toi-même), mais expliquer comment faire si envie te te un export donner propre depuis Figma.

---

#7) Technique de stack recommandée (tu)
Contraintes :
- code moderne, maintenable
- à vite à développer
- prime de rendu
- e-commerce simple

Recommandation attendue (à trancher) :
- Avant : Next.js (Routeur d'applications) **ou** Astro + React
- UI : Arrière + shadcn/ui (Radix)
- Animations : Framer Motion + GSAP (sis nécessaire) + Lenis (scroll smooth) (optionnel)
- 3D : Réagir trois fibres + drei
- Paiement : Stripe Checkout
- Backend :
- est simple : Next.js API routes
- siro : backend séparé (FastAPI/Express)
- DB :
- MVP : pas nécessaire (Stripe + webhook + stockage minimal)
- Silo : Postgres + Prisma
- Email : Reenvoyer / SendGrid (V2 si besoin)

Tu dois propose:
- MVP sans DB (si possible) + webhooks Stripe
- V2 avec DB + tableau de bord admin

---

## 8) MVP e-commerce : règles
- Le checkout doit est **simple et fiable**
- Panier : 1 produit “SNCard”
- variantes : quantité + options
- prix : tableau de prix (paliers)
- Stripe Produits/Prix (ou calcul interne, mais Stripe recommandé)
- webhook “payment_success” -> page confirmation + email (si fait)

---

## 9) SEO et performance
- méta titres/description, image OG
- la vitesse de la page optimisée :
- charge paresseuse 3D
- l'image de repli si webgl inavailable
- images de compression
- analyse (simple) : Plausible / GA4 (V2)

---

## 10) Définition “réussi”
- Le site donne un **effet premium instantané**
- La carte 3D est **fluide** et “toujours vivant”
- Le parcours « Commandant » est simple, clair, rassurant
- Le paiement opération
- Le rendu est responsive et propre

---

## 11) Environnement & .env
- `NEXT_PUBLIC_SITE_URL=... `
- `STRIPE_SECRET_KEY=... `
- `STRIPE_WEBHOOK_SECRET=... `
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=... `
- (option) `RESEND_API_KEY=... `
- (option) `DATABASE_URL=... `

---

## 12) Ce que tu fais maintenant (exécution)
Tu commence par **A) Vision & structure de produit**, puis tu enchaînes immédiatement:
B) UX détaillée
C) Système de conception et jetons
D) Carte 3D (tech + comportements)
E) Technique d'architecture
F) Backlog
G) Échafaudage + code de base (arborescence + fichiers clés)

Ne t’arrêt pas à mi-chemin : je veux un livrable complet et exploitable.

---

## 13) Ton de rédaction
- en français
- clair, structuré, actionnable
- avec des snippets quand nécessaire
- sans blabla

FIN DU PROMPT