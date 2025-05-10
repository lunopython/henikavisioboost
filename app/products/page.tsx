import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/products/ProductGrid";

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Section Héro */}
      <section className="relative">
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.pexels.com/photos/4198747/pexels-photo-4198747.jpeg"
            alt="Produits Henika Group"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/30"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Nos Produits</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Produits d&apos;exportation premium répondant aux normes internationales les plus élevées
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction des Produits */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Une Qualité Exceptionnelle pour les Marchés Mondiaux
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Nos produits représentent la meilleure qualité d&apos;exportation disponible sur le marché mondial. 
              Chaque article est soigneusement sélectionné, inspecté et préparé selon les normes internationales 
              pour garantir une qualité constante et la satisfaction des clients.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Que vous recherchiez des épices premium, des produits frais, des articles en raphia faits à la main 
              ou des objets décoratifs, notre vaste catalogue offre une large gamme d&apos;options pour répondre à vos 
              besoins spécifiques.
            </p>
          </div>
          
          {/* Filtrage et Grille des Produits */}
          <ProductGrid />
        </div>
      </section>
      
      {/* Processus d'Exportation */}
      <section className="py-16 bg-slate-100">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Notre Processus d'Exportation
            </h2>
            <p className="text-slate-600">
              De la sélection à la livraison, nous garantissons la qualité à chaque étape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/4198456/pexels-photo-4198456.jpeg"
                  alt="Sélection des produits"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold mb-4">1</div>
                <h3 className="text-xl font-playfair font-bold mb-3">Sourcing & Sélection</h3>
                <p className="text-slate-600">
                  Nous travaillons directement avec les producteurs pour sélectionner les produits de la plus haute qualité 
                  répondant à nos normes strictes. Chaque article est soigneusement choisi pour sa qualité, sa durabilité 
                  et son aptitude à l'exportation.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/6169229/pexels-photo-6169229.jpeg"
                  alt="Contrôle qualité"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold mb-4">2</div>
                <h3 className="text-xl font-playfair font-bold mb-3">Traitement & Contrôle Qualité</h3>
                <p className="text-slate-600">
                  Les produits subissent un traitement méticuleux et des contrôles qualité rigoureux. Notre équipe 
                  s'assure que chaque produit respecte les normes de sécurité internationales et les exigences d'exportation.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg"
                  alt="Expédition mondiale"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold mb-4">3</div>
                <h3 className="text-xl font-playfair font-bold mb-3">Emballage & Expédition</h3>
                <p className="text-slate-600">
                  Nous utilisons des emballages spécialisés pour garantir l'intégrité des produits pendant le transport. 
                  Notre équipe logistique gère toute la documentation d'exportation et les arrangements d'expédition pour 
                  une livraison fluide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      {/* <section className="py-16 lg:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Certifications Internationales
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Nos produits sont certifiés pour répondre aux normes internationales les plus élevées, garantissant 
                la conformité avec les réglementations d'importation sur les marchés mondiaux. Ces certifications 
                reflètent notre engagement envers la qualité, la sécurité et la durabilité.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="border border-slate-200 rounded-lg p-4">
                  <h3 className="font-bold mb-2">USDA Organic</h3>
                  <p className="text-sm text-slate-600">
                    Nos produits biologiques respectent toutes les normes du Département de l'Agriculture des États-Unis.
                  </p>
                </div>
                <div className="border border-slate-200 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Commerce Équitable</h3>
                  <p className="text-sm text-slate-600">
                    Garantir une rémunération équitable et des pratiques durables pour les producteurs.
                  </p>
                </div>
                <div className="border border-slate-200 rounded-lg p-4">
                  <h3 className="font-bold mb-2">ISO 22000</h3>
                  <p className="text-sm text-slate-600">
                    Conformité aux normes internationales de gestion de la sécurité alimentaire.
                  </p>
                </div>
                <div className="border border-slate-200 rounded-lg p-4">
                  <h3 className="font-bold mb-2">GLOBAL G.A.P</h3>
                  <p className="text-sm text-slate-600">
                    Certification des Bonnes Pratiques Agricoles pour une agriculture sûre et durable.
                  </p>
                </div>
              </div>
              
              <Button className="bg-emerald-700 hover:bg-emerald-800">
                Télécharger le Pack de Certifications
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-40 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="https://images.pexels.com/photos/5913211/pexels-photo-5913211.jpeg" 
                    alt="Certification de qualité" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="relative h-56 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="https://images.pexels.com/photos/5913134/pexels-photo-5913134.jpeg" 
                    alt="Laboratoire de tests" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-56 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg" 
                    alt="Normes de certification" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg" 
                    alt="Contrôle qualité" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Témoignages des Clients */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Ce Que Disent Nos Clients
            </h2>
            <p className="text-emerald-50">
              Témoignages de nos importateurs satisfaits à travers le monde.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <p className="italic text-emerald-50 mb-6">
                "Nous importons des épices de Henika Group depuis plus de 5 ans. Leur qualité constante 
                et leur fiabilité en ont fait notre fournisseur préféré. Leurs produits respectent toujours 
                nos normes de qualité strictes."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JS
                </div>
                <div>
                  <h4 className="font-bold">James Schmidt</h4>
                  <p className="text-sm text-emerald-50">Importateur d'Épices, Allemagne</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <p className="italic text-emerald-50 mb-6">
                "Leur curcuma bio est le meilleur que nous ayons trouvé sur le marché. La qualité est 
                exceptionnelle, et ils assurent une livraison ponctuelle même pendant les périodes de 
                transport difficiles. Un partenaire de confiance pour notre entreprise d'aliments bio."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MT
                </div>
                <div>
                  <h4 className="font-bold">Maria Torres</h4>
                  <p className="text-sm text-emerald-50">Aliments Bio, Espagne</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <p className="italic text-emerald-50 mb-6">
                "Les produits en raphia de Henika Group ont été un succès auprès de nos clients. Le 
                savoir-faire est exceptionnel, et leur équipe est professionnelle et réactive. Nous avons 
                augmenté nos volumes de commande chaque année."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  RJ
                </div>
                <div>
                  <h4 className="font-bold">Robert Johnson</h4>
                  <p className="text-sm text-emerald-50">Distributeur de Décoration, Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Appel à l'Action */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-100 rounded-lg shadow-md p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Prêt à Importer Nos Produits ?
            </h2>
            <p className="text-slate-600 mb-8 text-lg max-w-2xl mx-auto">
              Contactez notre équipe dès aujourd'hui pour discuter de vos besoins spécifiques et découvrir comment 
              nos produits d'exportation premium peuvent répondre à vos attentes. Nous offrons des MOQ flexibles 
              et des solutions personnalisées pour les importateurs du monde entier.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800">
                Demander un Devis
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white">
                Télécharger le Catalogue
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}