import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSlider from "@/components/hero/HeroSlider";
import ProductGrid from "@/components/products/ProductGrid";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Section Héro */}
      <HeroSlider />
      
      {/* Introduction */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Exportations Premium pour les Marchés Mondiaux
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Chez Henika Group, nous nous spécialisons dans la connexion de produits agricoles 
                de haute qualité et d'artisanat avec les marchés internationaux. Notre engagement envers 
                l'excellence garantit que chaque produit répond aux normes les plus élevées pour l'exportation mondiale.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Des épices fraîches aux produits en raphia faits à la main, nous entretenons des relations 
                directes avec les producteurs pour garantir des pratiques durables et un commerce équitable. 
                Nos processus rigoureux de contrôle qualité garantissent que nos exportations respectent toutes 
                les certifications et normes internationales.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-emerald-700 hover:bg-emerald-800">
                  Nos Produits
                </Button>
                <Button variant="outline" className="border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white">
                  À Propos de Nous
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/6157225/pexels-photo-6157225.jpeg"
                alt="Produits d'exportation de qualité"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Catégories de Produits */}
      <section className="py-16 bg-slate-100">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Nos Catégories de Produits
            </h2>
            <p className="text-slate-600">
              Découvrez notre gamme diversifiée de produits d'exportation de haute qualité, soigneusement sélectionnés 
              pour répondre aux normes internationales et aux attentes des clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCT_CATEGORIES.map((category) => (
              <Card key={category.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-playfair font-bold mb-2">{category.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{category.description}</p>
                  <Link 
                    href={`/products?category=${category.id}`}
                    className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium text-sm"
                  >
                    Explorer les Produits
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Produits en Vedette */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Produits en Vedette
            </h2>
            <p className="text-slate-600">
              Découvrez notre sélection premium de produits prêts à l'exportation qui représentent 
              la meilleure qualité et le meilleur savoir-faire disponibles pour les marchés mondiaux.
            </p>
          </div>
          
          <ProductGrid />
          
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900">
              Voir Tous les Produits
            </Button>
          </div>
        </div>
      </section>
      
      {/* Qualité & Certifications */}
      {/* <section className="py-16 lg:py-20 bg-emerald-800 text-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Normes de Qualité Internationale
              </h2>
              <p className="mb-6 text-emerald-50 leading-relaxed">
                Nous maintenons les normes de qualité les plus élevées pour tous nos produits afin de garantir 
                qu'ils respectent les certifications internationales et les réglementations d'importation. 
                Nos processus rigoureux de contrôle qualité garantissent une qualité d'exportation premium.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-emerald-700/50 p-5 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">USDA Organic</h3>
                  <p className="text-sm text-emerald-50">Produits biologiques certifiés conformes aux normes américaines.</p>
                </div>
                <div className="bg-emerald-700/50 p-5 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">EU Organic</h3>
                  <p className="text-sm text-emerald-50">Conforme aux réglementations biologiques européennes.</p>
                </div>
                <div className="bg-emerald-700/50 p-5 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Commerce Équitable</h3>
                  <p className="text-sm text-emerald-50">Garantir une rémunération équitable pour les producteurs.</p>
                </div>
                <div className="bg-emerald-700/50 p-5 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">ISO 22000</h3>
                  <p className="text-sm text-emerald-50">Certification des systèmes de gestion de la sécurité alimentaire.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-40 rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/6157169/pexels-photo-6157169.jpeg" 
                    alt="Contrôle qualité" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="relative h-56 rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/5946068/pexels-photo-5946068.jpeg" 
                    alt="Test des produits" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-56 rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/4198571/pexels-photo-4198571.jpeg" 
                    alt="Inspection des épices" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/5945655/pexels-photo-5945655.jpeg" 
                    alt="Processus d'emballage" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Appel à l'Action */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Prêt à Importer des Produits Premium ?
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Contactez notre équipe dès aujourd'hui pour discuter de vos besoins spécifiques et découvrir 
              comment nos produits d'exportation premium peuvent répondre à vos attentes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800">
                Contactez-Nous
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white">
                Demander un Catalogue
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}