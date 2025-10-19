import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const DinoKeeperDashboard = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  // Progress data for the main line chart
  const progressData = [
    { day: 'Day 1', score: 42 },
    { day: 'Day 5', score: 48 },
    { day: 'Day 10', score: 55 },
    { day: 'Day 15', score: 62 },
    { day: 'Day 20', score: 68 },
    { day: 'Day 25', score: 75 },
    { day: 'Day 30', score: 78 }
  ];

  // Success rate data for bar chart
  const successData = [
    { session: 'S1', rate: 65 },
    { session: 'S2', rate: 72 },
    { session: 'S3', rate: 78 },
    { session: 'S4', rate: 81 },
    { session: 'S5', rate: 85 }
  ];

  // Radial gauge component
  const RadialGauge = ({ value, max = 100 }) => {
    const percentage = (value / max) * 100;
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="flex justify-center">
        <div className="relative w-32 h-32">
          <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 128 128">
            <circle
              cx="64"
              cy="64"
              r={radius}
              stroke="#E5E7EB"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="64"
              cy="64"
              r={radius}
              stroke="#FF8A5B"
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-semibold text-slate-700">{value}%</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 p-4 md:p-8">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <div className="inline-block mb-6 md:mb-8 animate-float drop-shadow-2xl" style={{ fontSize: '125px', lineHeight: '1' }}>
            <span>🦕</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 md:mb-4">Dino Keeper</h1>
          <p className="text-lg md:text-2xl text-purple-200 font-semibold">Clinical Dashboard</p>
          <p className="text-slate-300 text-sm md:text-base mt-2 md:mt-3">Fine Motor Skill Tracking & Progress Analytics</p>
        </div>

        {/* Patient Profile Card */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-purple-500/30 p-4 md:p-8 mb-6 md:mb-8 backdrop-blur-sm hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105">
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl md:text-4xl font-bold">AR</span>
            </div>
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-1">Alex Ray</h2>
              <p className="text-purple-300 text-sm md:text-base">Age: 7 years</p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-6 w-full">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-3 md:p-6 shadow-lg border border-blue-400/30 text-center">
                <p className="text-xs md:text-sm text-blue-200 uppercase tracking-widest font-bold">Sessions</p>
                <p className="text-2xl md:text-5xl font-bold text-blue-100 mt-1 md:mt-2">24</p>
              </div>
              <div className="bg-gradient-to-br from-pink-600 to-pink-800 rounded-2xl p-3 md:p-6 shadow-lg border border-pink-400/30 text-center">
                <p className="text-xs md:text-sm text-pink-200 uppercase tracking-widest font-bold">Play Time</p>
                <p className="text-2xl md:text-5xl font-bold text-pink-100 mt-1 md:mt-2">6.2<span className="text-sm md:text-lg">h</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Progress Graph */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-blue-500/30 p-6 md:p-8 mb-8 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📈</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white">Overall Fine Motor Skill Progression</h3>
              <p className="text-blue-300 text-sm">30-Day Performance Trend</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis 
                dataKey="day" 
                stroke="#94a3b8"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#94a3b8"
                style={{ fontSize: '12px' }}
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b',
                  border: '2px solid #3b82f6',
                  borderRadius: '12px',
                  fontSize: '12px'
                }}
                labelStyle={{ color: '#93c5fd' }}
              />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="#60a5fa" 
                strokeWidth={4}
                dot={{ fill: '#3b82f6', r: 6, strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Task-Specific Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Motor Planning */}
          <div 
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-cyan-500/30 p-6 backdrop-blur-sm hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            onMouseEnter={() => setHoveredCard('motor')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-xl md:text-2xl">🥚</span>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-bold text-white">Motor Planning</h4>
                <p className="text-cyan-300 text-xs md:text-sm">Egg Rubbing</p>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Current Level</span>
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">4/5</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-700">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Movement Smoothness</p>
              <p className="text-3xl md:text-4xl font-bold text-white">8.4<span className="text-sm md:text-lg text-slate-400">/10</span></p>
              <p className="text-sm text-green-400 mt-2 font-semibold">↑ 12% from last week</p>
            </div>
          </div>

          {/* Pincer Grasp */}
          <div 
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-purple-500/30 p-6 backdrop-blur-sm hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            onMouseEnter={() => setHoveredCard('pincer')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-xl md:text-2xl">🐚</span>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-bold text-white">Pincer Grasp</h4>
                <p className="text-purple-300 text-xs md:text-sm">Shell Clearing</p>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Current Level</span>
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">3/5</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-3 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-700">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-4">Success Rate (Last 5 Sessions)</p>
              <ResponsiveContainer width="100%" height={80}>
                <BarChart data={successData}>
                  <Bar dataKey="rate" fill="#c084fc" radius={[6, 6, 0, 0]} />
                  <XAxis dataKey="session" stroke="#334155" style={{ fontSize: '10px' }} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-green-400 mt-2 font-semibold">Current: 85% success rate</p>
            </div>
          </div>

          {/* Force Modulation */}
          <div 
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-orange-500/30 p-6 backdrop-blur-sm hover:shadow-orange-500/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            onMouseEnter={() => setHoveredCard('force')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-xl md:text-2xl">🍎</span>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-bold text-white">Force Modulation</h4>
                <p className="text-orange-300 text-xs md:text-sm">Fruit Squeezing</p>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Current Level</span>
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">2/5</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div className="bg-gradient-to-r from-orange-400 to-red-500 h-3 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-700">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-4">Grip Accuracy</p>
              <RadialGauge value={72} />
              <p className="text-xs text-center text-slate-300 mt-3">Target Range: 70-80%</p>
            </div>
          </div>
        </div>

        {/* Therapist Notes */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-green-500/30 p-6 md:p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-2xl md:text-2xl font-bold text-white">Recent Observations</h3>
          </div>
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-xl p-4 md:p-6 border border-green-500/20">
            <p className="text-slate-100 leading-relaxed mb-3 text-sm md:text-base">
              Alex shows strong improvement in motor planning tasks. The egg rubbing activity demonstrates increased movement smoothness and reduced compensatory patterns. Continue encouraging slow, deliberate movements.
            </p>
            <p className="text-slate-100 leading-relaxed mb-6 text-sm md:text-base">
              Pincer grasp strength is progressing well. Consider increasing difficulty level next session. Force modulation requires additional attention—focus on tactile feedback exercises to improve grip calibration.
            </p>
            <div className="pt-4 border-t border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="text-xs md:text-xs text-slate-400">Last updated: Oct 18, 2025 by Dr. Sarah Martinez, PT</p>
              <button className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95">Edit Notes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinoKeeperDashboard;
