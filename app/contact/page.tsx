import Image from "next/image";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Section Héro */}
      <section className="relative">
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.pexels.com/photos/990824/pexels-photo-990824.jpeg"
            alt="Contact GlobalHarvest"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/30"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Contactez-Nous</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Nous sommes là pour répondre à vos questions sur nos produits et services d&lsquo;exportation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Informations de Contact et Formulaire */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8">
                Prenez Contact
              </h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-700 p-3 rounded-md mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Visitez-Nous</h3>
                    <address className="not-italic text-slate-600">
                      123 Export Boulevard<br />
                     Antananarivo, Mg 101<br />
                      Madagascar
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-700 p-3 rounded-md mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Horaires d&apos;Ouverture</h3>
                    <p className="text-slate-600">
                      Lundi - Vendredi : 9h00 - 18h00 EST<br />
                      Samedi : 10h00 - 14h00 EST<br />
                      Dimanche : Fermé
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-700 p-3 rounded-md mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Appelez-Nous</h3>
                    <p className="text-slate-600">
                      <a href="tel:+12345678900" className="hover:text-emerald-700 transition-colors">
                        +1 (234) 567-8900
                      </a><br />
                      <span className="text-sm text-slate-500">Bureau Principal</span>
                    </p>
                    <p className="text-slate-600 mt-2">
                      <a href="tel:+12345678911" className="hover:text-emerald-700 transition-colors">
                        +1 (234) 567-8911
                      </a><br />
                      <span className="text-sm text-slate-500">Ventes Internationales</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-700 p-3 rounded-md mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Envoyez-Nous un Email</h3>
                    <p className="text-slate-600">
                      <a href="mailto:info@globalharvest.com" className="hover:text-emerald-700 transition-colors">
                        info@henikagroup.com
                      </a><br />
                      <span className="text-sm text-slate-500">Demandes Générales</span>
                    </p>
                    <p className="text-slate-600 mt-2">
                      <a href="mailto:sales@globalharvest.com" className="hover:text-emerald-700 transition-colors">
                        sales@henikagroup.com
                      </a><br />
                      <span className="text-sm text-slate-500">Département des Ventes</span>
                    </p>
                  </div>
                </div>
              </div>
              

            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8">
                Envoyez-Nous un Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Carte */}
      <section className="py-10">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63720.94784709161!2d47.507905!3d-18.8791905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07f1f2b9d8c3f%3A0x7b1c7c2e8b8c8f6!2sAntananarivo%2C%20Madagascar!5e0!3m2!1sen!2s!4v1683829382938!5m2!1sen!2s" 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation d'Antananarivo, Madagascar"
              className="w-full"
            />
          </div>
        </div>
      </section>
      
      {/* Section FAQ */}
      <section className="py-16 bg-slate-100">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Questions Fréquemment Posées
            </h2>
            <p className="text-slate-600">
              Trouvez des réponses aux questions courantes sur nos processus d&apos;exportation et nos produits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Quelles sont vos quantités minimales de commande ?</h3>
              <p className="text-slate-600">
                Les quantités minimales de commande varient selon la catégorie de produit. Pour les épices, 
                c&#39;est généralement 500 kg, tandis que les produits frais nécessitent généralement 1 tonne métrique. 
                Contactez notre équipe commerciale pour des informations spécifiques.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Fournissez-vous des échantillons avant de commander ?</h3>
              <p className="text-slate-600">
                Oui, nous fournissons des échantillons pour évaluer la qualité avant de passer des commandes en gros. 
                Les demandes d&apos;échantillons peuvent être faites via notre formulaire de contact ou en contactant notre équipe commerciale.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Quels modes d&apos;expédition utilisez-vous ?</h3>
              <p className="text-slate-600">
                Nous proposons le transport maritime, le transport aérien et les options de messagerie express en fonction 
                du type de produit, de la quantité et de l&apos;urgence. Notre équipe logistique recommandera la méthode 
                d&apos;expédition la plus adaptée et la plus rentable.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Quels sont vos termes de paiement ?</h3>
              <p className="text-slate-600">
                Nous acceptons plusieurs méthodes de paiement, notamment la lettre de crédit (LC), le virement bancaire 
                et l&lsquo;assurance commerciale. Pour les nouveaux clients, nous demandons généralement un acompte de 30 %, 
                le solde étant dû avant l&apos;expédition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}