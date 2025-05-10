import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import CompanyTimeline from "@/components/about/CompanyTimeline";
import Team from "@/components/about/Team";
import ExportMap from "@/components/about/ExportMap";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Section Héro */}
      <section className="relative">
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.pexels.com/photos/5945757/pexels-photo-5945757.jpeg"
            alt="À propos de GlobalHarvest"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/30"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">À Propos de Nous</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Découvrez notre mission, nos valeurs et l'histoire derrière nos produits d'exportation premium.
            </p>
          </div>
        </div>
      </section>
      
      {/* Histoire de l'Entreprise */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Notre Histoire
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Fondée en 2010, GlobalHarvest a commencé comme une petite entreprise visant à connecter 
                les agriculteurs locaux aux marchés internationaux. Notre fondatrice, Elena Nguyen, a vu 
                une opportunité d'aider les petits producteurs d'épices à exporter leurs produits premium 
                tout en maintenant des pratiques agricoles durables.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Au fil des années, nous avons élargi notre gamme de produits pour inclure des produits frais, 
                des articles en raphia et des objets décoratifs, tous sourcés directement auprès de producteurs 
                partageant notre engagement envers la qualité et la durabilité. Aujourd'hui, nous exportons vers 
                plus de 30 pays sur cinq continents, tout en conservant les mêmes valeurs qui nous ont guidés dès le début.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Notre siège social à Antananarivo coordonne avec des bureaux régionaux en Asie du Sud-Est, 
                en Afrique et en Amérique du Sud pour garantir des opérations fluides et une qualité constante 
                sur tous nos produits d'exportation.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/4195527/pexels-photo-4195527.jpeg"
                alt="Histoire de GlobalHarvest"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Valeurs */}
      <section className="py-16 bg-slate-100">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Notre Mission & Nos Valeurs
            </h2>
            <p className="text-slate-600">
              Notre activité est guidée par une mission claire et des valeurs fortes qui façonnent tout ce que nous faisons.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-3 bg-emerald-700"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-bold mb-4">Mission</h3>
                <p className="text-slate-600">
                  Connecter des produits agricoles premium et des articles artisanaux aux marchés mondiaux 
                  tout en garantissant des pratiques durables, un commerce équitable et une qualité exceptionnelle.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-3 bg-amber-500"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-bold mb-4">Vision</h3>
                <p className="text-slate-600">
                  Devenir l'exportateur le plus fiable au monde de produits agricoles et artisanaux premium, 
                  reconnu pour sa qualité, sa durabilité et son impact positif sur les communautés.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-3 bg-rose-600"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-bold mb-4">Valeurs</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Qualité dans chaque produit</li>
                  <li>• Durabilité dans toutes les pratiques</li>
                  <li>• Intégrité dans les relations commerciales</li>
                  <li>• Innovation dans les processus et solutions</li>
                  <li>• Impact communautaire et commerce équitable</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Chronologie de l'Entreprise */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Notre Parcours
            </h2>
            <p className="text-slate-600">
              Découvrez notre évolution, d'une petite startup à une entreprise d'exportation mondiale.
            </p>
          </div>
          
          <CompanyTimeline />
        </div>
      </section>
      
      {/* Équipe de Direction */}
      <section className="py-16 lg:py-24 bg-slate-100">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Notre Équipe de Direction
            </h2>
            <p className="text-slate-600">
              Rencontrez les experts derrière nos opérations d'exportation mondiales.
            </p>
          </div>
          
          <Team />
        </div>
      </section>
      
      {/* Présence Mondiale */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Notre Présence Mondiale
            </h2>
            <p className="text-slate-600">
              Exporter des produits premium vers des marchés à travers le monde.
            </p>
          </div>
          
          <ExportMap />
        </div>
      </section>
      
      {/* Certifications de Qualité */}
      <section className="py-16 lg:py-20 bg-emerald-700 text-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Certifications de Qualité
            </h2>
            <p className="text-emerald-50">
              Notre engagement envers l'excellence est soutenu par des certifications internationales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">USDA Organic</h3>
              <p className="text-sm text-emerald-50">
                Produits biologiques certifiés conformes aux normes du Département de l'Agriculture des États-Unis.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Commerce Équitable</h3>
              <p className="text-sm text-emerald-50">
                Engagement envers des prix équitables, le développement communautaire et la durabilité environnementale.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">ISO 22000</h3>
              <p className="text-sm text-emerald-50">
                Certification internationale des systèmes de gestion de la sécurité alimentaire.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">GLOBAL G.A.P</h3>
              <p className="text-sm text-emerald-50">
                Certification des Bonnes Pratiques Agricoles garantissant une agriculture sûre et durable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}