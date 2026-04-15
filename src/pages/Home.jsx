import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { UserPlus } from 'lucide-react';







const Home = () => {
   const [friends, setFriends] = useState([]);

  const [loading, setLoading] = useState(true);



  useEffect(() => {
    fetch('/friends.json')
      .then(res => res.json())
      .then(data => {
        setFriends(data);
        setLoading(false);
      });
  }, []);









  if (loading) return <div className="text-center mt-20 text-primary font-bold">Loading Friends...</div>;



  return (
    <div className="max-w-6xl mx-auto px-6 mb-20">


      
      <div className="text-center my-12">

        <h1 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">Friends to keep close in your life</h1>

        <p className="text-gray-500 text-sm max-w-md mx-auto">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

        <button className="mt-6 bg-primary text-white px-6 py-2.5 rounded-md flex items-center gap-2 mx-auto text-sm font-semibold hover:bg-opacity-90 shadow-lg">

          <UserPlus size={16}/> Add a Friend
        </button>
      </div>

      


      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">

        {[
          { label: 'Total Friends', value: friends.length },
          { label: 'On Track', value: friends.filter(f => f.status === 'on-track').length },
          { label: 'Need Attention', value: friends.filter(f => f.status === 'overdue').length },
          { label: 'Interactions', value: '12' }
        ].map((item, idx) => (
          
          
          <div key={idx} className="bg-white p-8 rounded-2xl text-center border-2 border-gray-100 shadow-sm hover:border-primary/20 transition-all">


            <h2 className="text-4xl font-black text-primary mb-1">{item.value}</h2>


            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{item.label}</p>


          </div>

        ))}

      </div>

      <h2 className="text-xl font-black text-gray-800 mb-8 border-b pb-2 inline-block border-primary">Your Friends</h2>


      


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">


        {friends.map(friend => (
          <Link key={friend.id} to={`/friend/${friend.id}`} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-center group">


            <div className="relative inline-block">

              <img src={friend.picture} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-gray-50 group-hover:border-primary/10 transition-all" />

            </div>


            <h3 className="font-bold text-gray-900 text-lg mb-1">{friend.name}</h3>


            <p className="text-[11px] text-gray-400 font-medium mb-4">{friend.days_since_contact} days ago</p>

            <div className="flex justify-center gap-2 mb-6">

              {friend.tags.map(tag => (
                
                <span key={tag} className="text-[9px] font-black bg-gray-100 text-gray-500 px-2 py-1 rounded-md uppercase">{tag}</span>
              ))}
            </div>


            <div className={`text-[10px] py-2 rounded-xl uppercase font-black tracking-widest shadow-sm
              ${friend.status === 'overdue' ? 'bg-red-500 text-white' : 
                friend.status === 'almost due' ? 'bg-yellow-400 text-white' : 'bg-green-600 text-white'}`}>
              {friend.status}
            
            </div>
          
          </Link>
        ))}
      
      </div>
   
    </div>
  );
};







export default Home;