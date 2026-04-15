import { useContext, useState } from 'react';
import { TimelineContext } from '../App';
import { Phone, MessageSquare, Video } from 'lucide-react';

const Timeline = () => {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState('All');

  const filteredData = filter === 'All' ? timeline : timeline.filter(t => t.type === filter);

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Timeline</h1>
        <select 
          onChange={(e) => setFilter(e.target.value)} 
          className="border border-gray-200 p-2 rounded-lg text-sm outline-none focus:ring-2 ring-primary/20"
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <div key={item.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5 hover:scale-[1.01] transition-transform">
              <div className="bg-yellow-100 p-3 rounded-xl text-yellow-700">
                {item.type === 'Call' && <Phone size={24}/>}
                {item.type === 'Text' && <MessageSquare size={24}/>}
                {item.type === 'Video' && <Video size={24}/>}
              </div>
              <div className="flex-grow">
                <p className="font-bold text-gray-800 text-lg">{item.type} <span className="font-normal text-gray-500">with</span> {item.friendName}</p>
                <p className="text-sm text-gray-400 mt-1 font-medium">{item.date}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 text-gray-400 border-2 border-dashed rounded-3xl">
            No interactions logged yet. Go to a friend's page to log one!
          </div>
        )}
      </div>
    </div>
  );
};
export default Timeline;