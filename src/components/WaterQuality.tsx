import React from 'react';
import { BarChart, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const WaterQuality: React.FC = () => {
  return (
    <section id="kvalitet" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Квалитет воде</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="flex items-center mb-6">
              <BarChart className="text-blue-600 mr-3" size={28} />
              <h3 className="text-2xl font-bold">Резултати анализе воде</h3>
            </div>
            
            <p className="text-gray-700 mb-6">
              Редовне анализе воде из нашег водовода показују изузетан квалитет који превазилази стандарде 
              за пијаћу воду. Последња анализа је обављена xx.xx.xxxx. године.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-lg mb-3">Физичко-хемијски параметри</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={18} />
                    <span>pH вредност: 7.2 (оптимално)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={18} />
                    <span>Тврдоћа воде: 8°dH (средње тврда)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={18} />
                    <span>Нитрати: &lt;10 mg/L (испод границе)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={18} />
                    <span>Хлориди: 15 mg/L (оптимално)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={18} />
                    <span>Мутноћа: 0.3 NTU (изузетно бистра)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3">Микробиолошки параметри</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={18} />
                    <span>E. coli: Није детектовано</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={18} />
                    <span>Укупне колиформне бактерије: Није детектовано</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={18} />
                    <span>Ентерококе: Није детектовано</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={18} />
                    <span>Pseudomonas aeruginosa: Није детектовано</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={18} />
                    <span>Укупан број микроорганизама: &lt;10 CFU/mL</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-start">
                <Info className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">
                  Вода из нашег водовода је богата минералима попут калцијума и магнезијума који су корисни за здравље. 
                  Њен природни састав је идеалан за свакодневну употребу и пиће.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-500 mr-2" size={24} />
                <h3 className="text-xl font-bold">Редовна контрола</h3>
              </div>
              <p className="text-gray-700">
                Наш водовод подлеже редовним контролама квалитета воде које се обављају на месечном нивоу. 
                Резултати су увек доступни мештанима на увид.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <AlertTriangle className="text-yellow-500 mr-2" size={24} />
                <h3 className="text-xl font-bold">Мере предострожности</h3>
              </div>
              <p className="text-gray-700">
                Иако је вода изузетног квалитета, током обилних падавина може доћи до привременог замућења. 
                У тим ситуацијама се активира додатни систем филтрације.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Info className="text-blue-600 mr-2" size={24} />
                <h3 className="text-xl font-bold">Савети за кориснике</h3>
              </div>
              <p className="text-gray-700">
                Препоручујемо редовно чишћење кућних филтера и славина како би се одржао оптималан проток и 
                квалитет воде у домаћинствима.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterQuality;