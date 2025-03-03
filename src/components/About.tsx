import React from 'react';
import { Droplet, Thermometer, Users, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="o-vodovodu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">О водоводу села Шебет</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 text-center">
            Водовод села Шебет представља животну линију наше заједнице, обезбеђујући чисту пијаћу воду за све становнике.
            Изграђен са пажњом и одржаван са посвећеношћу, наш водовод је понос нашег малог села.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Droplet className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold">Извор воде</h3>
              </div>
              <p className="text-gray-700">
                Наш водовод се снабдева из природног планинског извора који се налази на 1200 метара надморске висине. 
                Вода је природно филтрирана кроз слојеве стена, што јој даје изузетан квалитет и чистоћу.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Thermometer className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold">Квалитет воде</h3>
              </div>
              <p className="text-gray-700">
                Вода из нашег водовода је редовно тестирана и задовољава највише стандарде квалитета. 
                Богата је минералима и има оптималну pH вредност, што је чини идеалном за пиће и свакодневну употребу.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Users className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold">Значај за заједницу</h3>
              </div>
              <p className="text-gray-700">
                Водовод је омогућио развој нашег села, побољшао квалитет живота и здравље становника. 
                Он је централни инфраструктурни елемент око којег се окупља наша заједница.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Shield className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold">Одржавање</h3>
              </div>
              <p className="text-gray-700">
                Локална заједница активно учествује у одржавању водовода. Редовне акције чишћења и 
                одржавања осигуравају да систем функционише беспрекорно током целе године.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-blue-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Кључни подаци о водоводу</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <p className="text-4xl font-bold text-blue-600">xx.xx.xxxx.</p>
                <p className="text-gray-700">Година изградње</p>
              </div>
              <div className="p-4">
                <p className="text-4xl font-bold text-blue-600">5 км</p>
                <p className="text-gray-700">Дужина мреже</p>
              </div>
              <div className="p-4">
                <p className="text-4xl font-bold text-blue-600">150</p>
                <p className="text-gray-700">Број корисника</p>
              </div>
              <div className="p-4">
                <p className="text-4xl font-bold text-blue-600">24/7</p>
                <p className="text-gray-700">Доступност воде</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;