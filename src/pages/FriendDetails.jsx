
import { useParams } from 'react-router-dom';



import { useContext, useState, useEffect } from 'react';

   import { TimelineContext } from '../App';



import { Phone, MessageSquare, Video, Clock, Archive, Trash2, Edit } from 'lucide-react';


import toast from 'react-hot-toast';

 

         const FriendDetails = () => {
                      const { id } = useParams();


              const { addInteraction } = useContext(TimelineContext);


   const [friend, setFriend] = useState(null);



   useEffect(() => {
     fetch('/friends.json')
      .then(res => res.json())
      .then(data => setFriend(data.find(f => f.id === parseInt(id))));
  }, [id]);




  const handleAction = (type) => {
    const newEntry = {
      id: Date.now(),
      friendName: friend.name,
      type: type,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };




    addInteraction(newEntry);


    toast.success(`${type} recorded with ${friend.name}!`);

  };



       if (!friend) return <div className="p-10 text-center">Loading details...</div>;






  return (


      <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-8 mt-10">


      

      <div className="md:col-span-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-fit">

          <img src={friend.picture} className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg" />

          
          <h2 className="text-center text-2xl font-bold mt-4">{friend.name}</h2>


                  <div className="flex justify-center my-2">

            <span className="bg-red-100 text-red-600 text-[10px] px-3 py-1 rounded-full font-bold uppercase">{friend.status}</span>


        </div>

        <div className="flex justify-center gap-2 mt-2">

            {friend.tags.map(t => <span key={t} className="text-[10px] bg-gray-100 px-2 py-1 rounded font-bold">{t}</span>)}
        </div>

         <p className="mt-6 text-gray-500 text-sm text-center italic">"{friend.bio}"</p> 

          <p className="text-center text-gray-400 text-xs mt-2 underline">{friend.email}</p>
        
        <div className="mt-8 space-y-3">
          
          <button className="w-full flex items-center justify-center gap-2 border py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-50"><Clock size={16}/> Snooze 2 Weeks</button>
          
          <button className="w-full flex items-center justify-center gap-2 border py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-50"><Archive size={16}/> Archive</button>
          
          <button className="w-full flex items-center justify-center gap-2 border py-2.5 rounded-lg text-sm font-semibold text-red-500 hover:bg-red-50 border-red-100"><Trash2 size={16}/> Delete</button>
        
        </div>
     
      </div>

      
      

      
      <div className="md:col-span-8 space-y-6">
        
        
        <div className="grid grid-cols-3 gap-4">
          
          
           <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            
            <p className="text-3xl font-black text-gray-800">{friend.days_since_contact}</p>
            
            
             <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Days Since Contact</p>
          </div> 
            

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
             
              
            <p className="text-3xl font-black text-gray-800">{friend.goal}</p> 


            <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Goal (Days)</p> 

          </div> 
           
            
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center"> 

            <p className="text-lg font-black text-gray-800 mt-2">{friend.next_due_date}</p> 


            <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Next Due</p> 

             
          </div> 
            

        </div> 
          




        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">


            <div>
                <p className="text-xs text-gray-400 font-bold uppercase">Relationship Goal</p>
                <p className="font-semibold text-gray-700">Connect every <span className="font-bold text-black">{friend.goal} days</span></p>
            </div>

           
            <button className="border p-2 rounded-lg hover:bg-gray-50"><Edit size={16}/></button>


        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">

             <h3 className="font-bold text-gray-800 mb-6 uppercase text-xs tracking-widest">Quick Check-In</h3>

          <div className="flex gap-4">

            <button onClick={() => handleAction('Call')} className="flex-1 flex flex-col items-center gap-2 p-6 border rounded-2xl hover:bg-green-50 transition-colors group">


              <div className="bg-gray-100 p-3 rounded-full group-hover:bg-white transition-colors"><Phone size={20}/></div>


                   <span className="font-bold text-sm">Call</span>


             </button>


            <button onClick={() => handleAction('Text')} className="flex-1 flex flex-col items-center gap-2 p-6 border rounded-2xl hover:bg-green-50 transition-colors group">


                   <div className="bg-gray-100 p-3 rounded-full group-hover:bg-white transition-colors"><MessageSquare size={20}/></div>
         

                <span className="font-bold text-sm">Text</span>


            </button>


            <button onClick={() => handleAction('Video')} className="flex-1 flex flex-col items-center gap-2 p-6 border rounded-2xl hover:bg-green-50 transition-colors group">


              <div className="bg-gray-100 p-3 rounded-full group-hover:bg-white transition-colors"><Video size={20}/></div>


              <span className="font-bold text-sm">Video</span>

            </button>

          </div>

        </div>

      </div>

    </div>


  );
};
export default FriendDetails;