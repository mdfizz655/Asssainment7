import { useContext } from 'react';
import { TimelineContext } from '../App';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Stats = () => {
  const { timeline } = useContext(TimelineContext);

  const data = [
    { name: 'Call', value: timeline.filter(t => t.type === 'Call').length },
    { name: 'Text', value: timeline.filter(t => t.type === 'Text').length },
    { name: 'Video', value: timeline.filter(t => t.type === 'Video').length },
  ];

  // Filtering out zero values for better pie chart rendering
  const chartData = data.filter(d => d.value > 0);
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Friendship Analytics</h1>
      <p className="text-gray-400 mb-10">Visual breakdown of your interaction types.</p>
      
      <div className="h-[400px] bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-center">
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                innerRadius={80}
                outerRadius={120}
                paddingAngle={8}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="text-gray-400 font-medium">Log some interactions to see analytics!</div>
        )}
      </div>
    </div>
  );
};
export default Stats;