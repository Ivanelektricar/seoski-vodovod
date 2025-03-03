import React from 'react';
import { Clock } from 'lucide-react';

const History: React.FC = () => {
  return (
    <section id="istorija" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Историја водовода</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-blue-500 transform md:translate-x-[-50%]"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex md:justify-end md:w-1/2 mb-4 md:mb-0 md:pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-md md:text-right">
                    <h3 className="text-xl font-bold mb-2">Почетак иницијативе</h3>
                    <p className="text-gray-700 mb-2">
                      Група мештана покреће иницијативу за изградњу водовода због проблема са снабдевањем водом током летњих месеци.
                    </p>
                    <p className="text-blue-600 font-bold">xx.xx.xxxx.</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-blue-600 rounded-full transform md:translate-x-[-50%] flex items-center justify-center">
                  <Clock className="text-white" size={16} />
                </div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>
              
              {/* Item 2 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-blue-600 rounded-full transform md:translate-x-[-50%] flex items-center justify-center">
                  <Clock className="text-white" size={16} />
                </div>
                <div className="flex md:w-1/2 mb-4 md:mb-0 md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">Проналазак извора</h3>
                    <p className="text-gray-700 mb-2">
                      Након детаљног истраживања, пронађен је идеалан извор на планини изнад села са довољним капацитетом за потребе целог села.
                    </p>
                    <p className="text-blue-600 font-bold">xx.xx.xxxx.</p>
                  </div>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex md:justify-end md:w-1/2 mb-4 md:mb-0 md:pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-md md:text-right">
                    <h3 className="text-xl font-bold mb-2">Почетак изградње</h3>
                    <p className="text-gray-700 mb-2">
                      Уз помоћ локалне самоуправе и донација мештана, започета је изградња водовода. Цело село се укључило у радове.
                    </p>
                    <p className="text-blue-600 font-bold">xx.xx.xxxx.</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-blue-600 rounded-full transform md:translate-x-[-50%] flex items-center justify-center">
                  <Clock className="text-white" size={16} />
                </div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>
              
              {/* Item 4 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-blue-600 rounded-full transform md:translate-x-[-50%] flex items-center justify-center">
                  <Clock className="text-white" size={16} />
                </div>
                <div className="flex md:w-1/2 mb-4 md:mb-0 md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">Завршетак основне мреже</h3>
                    <p className="text-gray-700 mb-2">
                      Завршена је основна мрежа водовода која је повезала извор са центром села. Први пут је потекла вода из јавне чесме.
                    </p>
                    <p className="text-blue-600 font-bold">xx.xx.xxxx.</p>
                  </div>
                </div>
              </div>
              
              {/* Item 5 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex md:justify-end md:w-1/2 mb-4 md:mb-0 md:pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-md md:text-right">
                    <h3 className="text-xl font-bold mb-2">Комплетирање система</h3>
                    <p className="text-gray-700 mb-2">
                      Водоводна мрежа је проширена до свих домаћинстава у селу. Изграђен је и резервоар за воду који обезбеђује стабилно снабдевање.
                    </p>
                    <p className="text-blue-600 font-bold">xx.xx.xxxx.</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-blue-600 rounded-full transform md:translate-x-[-50%] flex items-center justify-center">
                  <Clock className="text-white" size={16} />
                </div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>
              
              {/* Item 6 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-blue-600 rounded-full transform md:translate-x-[-50%] flex items-center justify-center">
                  <Clock className="text-white" size={16} />
                </div>
                <div className="flex md:w-1/2 mb-4 md:mb-0 md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">Модернизација</h3>
                    <p className="text-gray-700 mb-2">
                      Уведен је систем за аутоматско хлорисање и контролу квалитета воде. Постављени су нови цевоводи од савремених материјала.
                    </p>
                    <p className="text-blue-600 font-bold">xx.xx.xxxx.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;