
import menuImg from '../../../assets/screenshots/Menu.png';

export default function BentoGrid() {
  return (
    <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16">Unleash Your Vocabulary</h2>
      
      {/* 
        Tailwind 'grid-flow-dense' helps prevent empty spaces in complex asymmetric grids 
      */}
      <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-dense gap-6">
        
        {/* 2x2 Massive Block */}
        <div className="group md:col-span-2 md:row-span-2 p-12 flex flex-col justify-between bg-gray-50 rounded-[32px] h-[500px] overflow-hidden transition-transform duration-700 hover:scale-[1.02]">
          <div>
            <h3 className="text-3xl font-bold">340+ Words per Layer</h3>
            <p className="text-gray-500 mt-4 max-w-sm">
              By utilizing up to 4 directional swipes, unlock massive conversational capability directly from the home screen.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <img 
              src={menuImg} 
              alt="Menu" 
              className="h-64 rounded-xl shadow-2xl group-hover:-translate-y-4 transition-transform duration-700 ease-out" 
            />
          </div>
        </div>
        
        {/* 2x1 Horizontal Block */}
        <div className="group md:col-span-2 p-10 bg-blue-50 text-blue-900 rounded-[32px] h-[238px] transition-transform duration-700 hover:scale-[1.02]">
          <h3 className="text-2xl font-bold mb-2">Talk On vs. Entry On</h3>
          <p className="opacity-80">
            Easily toggle states. Switch to Entry On to instantly record new gesture pathways and expand your personal dictionary.
          </p>
        </div>
        
        {/* 1x1 Blocks */}
        <div className="group md:col-span-1 p-8 bg-black text-white rounded-[32px] flex items-end h-[238px] transition-transform duration-700 hover:scale-[1.02]">
          <h3 className="text-xl font-bold">Quick Symbols</h3>
        </div>

        <div className="group md:col-span-1 p-8 bg-purple-50 rounded-[32px] flex items-end h-[238px] transition-transform duration-700 hover:scale-[1.02]">
          <h3 className="text-xl font-bold text-purple-900">Custom Themes</h3>
        </div>

      </div>
    </section>
  );
}
